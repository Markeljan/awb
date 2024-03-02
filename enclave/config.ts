import { createWalletClient, custom, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { baseSepolia } from "viem/chains";

export const account = privateKeyToAccount(`0x${process.env.HUB_PRIVATE_KEY}`);
export const walletClient = createWalletClient({
  chain: baseSepolia,
  account: account,
  transport: http()
});

