import Web3, { type EthExecutionAPI, type SupportedProviders } from "web3";
import { bytesToHex } from "@ethereumjs/util";
import { FeeMarketEIP1559Transaction } from "@ethereumjs/tx";
import { Common } from "@ethereumjs/common";
import type { Web3ContextInitOptions } from "web3-core";
import type { RegisteredSubscription } from "web3-eth";
import { KeyPair, connect, keyStores, providers } from "near-api-js";
import { functionCall } from "near-api-js/lib/transaction";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

const ONE_ETH = 1000000000000n;
const TGAS = 1000000000000;
const THIRTY_TGAS = "30000000000000";
const NO_DEPOSIT = "0";
const DERIVATION_PATH = "ethereum,1";
const MPC_CONTRACT = "signer.canhazgas.testnet"; // NOT SAFE FOR PRODUCTION

const keyStore = new keyStores.InMemoryKeyStore();
const keyPair = KeyPair.fromString(process.env.NEAR_ACCOUNT_PRIVATE_KEY!);
const config = {
  keyStore,
  networkId: "testnet",
  nodeUrl: "https://rpc.testnet.near.org",
};

await keyStore.setKey("testnet", process.env.NEAR_ACCOUNT_ID!, keyPair);
const near = await connect({ ...config, keyStore });
const account = await near.account(process.env.NEAR_ACCOUNT_ID!);

async function getWeb3(
  chain_rpc:
    | string
    | SupportedProviders<EthExecutionAPI>
    | Web3ContextInitOptions<EthExecutionAPI, RegisteredSubscription>
    | undefined
) {
  return new Web3(chain_rpc);
}

async function getBalance(
  web3: { eth: { getBalance: (arg0: any) => any } },
  accountId: any
) {
  const balance = await web3.eth.getBalance(accountId);
  return Number((balance * 100n) / ONE_ETH) / 100;
}

async function createPayload(
  web3: any,
  chain_id: any,
  sender: any,
  receiver: any
) {
  const common = Common.custom({ chainId: chain_id });

  const _web3 = await web3;

  // Get the nonce
  const nonce = await _web3.eth.getTransactionCount(sender);

  console.log(nonce)

  const { maxFeePerGas, maxPriorityFeePerGas } = await queryGasPrice();

  // Construct transaction
  const transactionData = {
    nonce: 2n,
    gasLimit: 30000,
    maxFeePerGas,
    maxPriorityFeePerGas,
    to: receiver,
    value: 0n,
    chain: chain_id,
  };

  // Return the message hash
  const transaction = FeeMarketEIP1559Transaction.fromTxData(transactionData, {
    common,
  });
  const tx_hash = transaction.getHashedMessageToSign();
  return { transaction, payload: Array.from(tx_hash) };
}

async function relayTransaction(
  web3: any,
  signedTransaction: { serialize: () => Uint8Array }
) {
  const _web3 = await web3;
  const serializedTx = bytesToHex(signedTransaction.serialize());
  const relayed = await _web3.eth.sendSignedTransaction(serializedTx);
  return relayed.transactionHash;
}

function reconstructSignature(
  transaction: {
    addSignature: (arg0: bigint, arg1: Buffer, arg2: Buffer) => any;
  },
  big_r: string,
  big_s:
    | WithImplicitCoercion<string>
    | { [Symbol.toPrimitive](hint: "string"): string }
) {
  const r = Buffer.from(big_r.slice(2), "hex");
  const s = Buffer.from(big_s, "hex");
  let v = big_r.startsWith("02") ? 0n : 1n;

  const signedTransaction = transaction.addSignature(v, r, s);
  return signedTransaction;
}

async function requestSignature(payload: number[], path: any) {
  // Request signature from MPC
  const request = await account.signAndSendTransaction({
    receiverId: MPC_CONTRACT,
    actions: [functionCall("sign", { path, payload }, 300 * TGAS, NO_DEPOSIT)],
  });

  const provider = new providers.JsonRpcProvider({ url: config.nodeUrl });

  const transaction = await provider.txStatus(
    request.transaction.hash,
    "unnused"
  );

  const [big_r, big_s] = await providers.getTransactionLastResult(transaction);

  return { big_r, big_s };
}

async function queryGasPrice() {
  const gasPrice = await client.getGasPrice();

  const buffer = BigInt(5 * 1e9);
  const maxFeePerGas = gasPrice + buffer;

  return { maxFeePerGas, maxPriorityFeePerGas: gasPrice };
}

const { transaction, payload } = await createPayload(
  getWeb3("https://rpc.sepolia.ethpandaops.io"), // getWeb3("https://sepolia.base.org"),
11155111, //84532,
  process.env.HUB_ACCOUNT_ADDRESS,
  process.env.REGISTRY_ACCOUNT_ADDRESS
);

const { big_r, big_s } = await requestSignature(payload, DERIVATION_PATH);
const signedTransaction = reconstructSignature(transaction, big_r, big_s);
await relayTransaction(getWeb3("https://rpc.sepolia.ethpandaops.io"), signedTransaction);
