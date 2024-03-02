"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useDeployContract } from "@/lib/use-deploy-agent";
import { daoTokenByteCode, governorByteCode } from "@/lib/contract-source-code";
import { toast } from "sonner";
import { useGlobalState } from "@/particle/global-state-provider";
import { IconLoader2 } from "@tabler/icons-react";
import { daoGovernorAbi, daoTokenAbi } from "@/lib/generated-react";
import { PublicClient, createPublicClient, encodeDeployData, http, zeroAddress } from "viem";
import { Transaction } from "@particle-network/aa";
import { waitForTransactionReceipt } from "viem/actions";
import { useEthereum } from "@particle-network/auth-core-modal";
import { baseSepolia } from "viem/chains";
import { useState } from "react";

const alphaRegex = /^[a-zA-Z]+[a-zA-Z\s]*$/;

const FormSchema = z.object({
  tokenName: z
    .string()
    .min(3, { message: "Token name is required" })
    .max(32, { message: "Token name is too long" })
    .regex(alphaRegex, { message: "Token name must be alphabetic" }),
  tokenSymbol: z
    .string()
    .min(3, { message: "Symbol is required" })
    .max(8, { message: "Symbol is too long" })
    .regex(alphaRegex, { message: "Symbol must be alphabetic" }),
  daoName: z
    .string()
    .min(3, { message: "DAO name is required" })
    .max(32, { message: "DAO name is too long" })
    .regex(alphaRegex, { message: "DAO name must be alphabetic" }),
  totalSupply: z.string().min(1, { message: "Total supply must be greater than 0" }),
});
export function DAODeployer() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      totalSupply: "21000000",
    },
  });
  const [loading, setLoading] = useState(false);
  const { state, dispatch } = useGlobalState();
  const smartAccount = state.smartAccount;
  const smartAccountInfo = state.smartAccountInfo;
  const userAddress = smartAccountInfo?.smartAccountAddress;
  const { provider } = useEthereum();
  const [tokenContractAddress, setTokenContractAddress] = useState<string | null>(null);
  const [governorContractAddress, setGovernorContractAddress] = useState<string | null>(null);
  async function onSubmit(data: z.infer<typeof FormSchema>) {
    if (!userAddress) {
      toast.error("Please connect via Particle to deploy a DAO");
      return;
    }
    setLoading(true);
    await deployWithSmartAccount(data);
    setLoading(false);
  }

  async function deployWithSmartAccount(data: z.infer<typeof FormSchema>) {
    const encodedDeployData = encodeDeployData({
      abi: daoTokenAbi,
      bytecode: daoTokenByteCode,
      args: [data.tokenName, data.tokenSymbol, userAddress as `0x${string}`, BigInt(data.totalSupply)],
    });

    const deployTx: Transaction = {
      to: zeroAddress,
      data: encodedDeployData,
    };

    if (!smartAccount) return;

    const feeQuotesResult = await smartAccount.getFeeQuotes(deployTx);
    const gaslessUserOp = feeQuotesResult.verifyingPaymasterGasless?.userOp;
    const gaslessUserOpHash = feeQuotesResult.verifyingPaymasterGasless?.userOpHash;

    if (!gaslessUserOp || !gaslessUserOpHash) return;

    const txHash = await smartAccount.sendUserOperation({ userOp: gaslessUserOp, userOpHash: gaslessUserOpHash });

    console.log("txHash", txHash);

    const client = createPublicClient({
      chain: baseSepolia,
      transport: http(),
    });

    const { contractAddress } = await waitForTransactionReceipt(client, {
      hash: txHash as `0x${string}`,
    });

    if (!contractAddress) return;

    toast.success(
      <div className="flex gap-2 w-full justify-center items-center">
        <img src="base.svg" alt="rocket" className="w-16 h-16" />
        <a
          href={`https://sepolia.basescan.org/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
          className="underline text-xl"
        >
          View on Explorer
        </a>
      </div>
    );
    setTokenContractAddress(contractAddress);

    console.log("contractAddress", contractAddress);

    // deploy the governor
    const governorEncodedDeployData = encodeDeployData({
      abi: daoGovernorAbi,
      bytecode: governorByteCode,
      args: [data.daoName, contractAddress as `0x${string}`, 0n, 30n, 1n, 0n],
    });

    const governorDeployTx: Transaction = {
      to: zeroAddress,
      data: governorEncodedDeployData,
    };

    const governorFeeQuotesResult = await smartAccount.getFeeQuotes(governorDeployTx);

    const governorGaslessUserOp = governorFeeQuotesResult.verifyingPaymasterGasless?.userOp;
    const governorGaslessUserOpHash = governorFeeQuotesResult.verifyingPaymasterGasless?.userOpHash;

    if (!governorGaslessUserOp || !governorGaslessUserOpHash) return;

    const governorTxHash = await smartAccount.sendUserOperation({
      userOp: governorGaslessUserOp,
      userOpHash: governorGaslessUserOpHash,
    });

    console.log("governorTxHash", governorTxHash);

    const { contractAddress: governorContractAddress } = await waitForTransactionReceipt(client, {
      hash: governorTxHash as `0x${string}`,
    });

    if (!governorContractAddress) return;

    toast.success(
      <div className="flex gap-2 w-full justify-center items-center">
        <img src="base.svg" alt="rocket" className="w-16 h-16" />
        <a
          href={`https://sepolia.basescan.org/address/${contractAddress}`}
          target="_blank"
          rel="noreferrer"
          className="underline text-xl"
        >
          View on Explorer
        </a>
      </div>
    );

    console.log("governorContractAddress", governorContractAddress);

    setGovernorContractAddress(governorContractAddress);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-4 text-start">
        <Card className="flex flex-col max-w-2-xl w-full px-8">
          <CardHeader>
            <CardTitle className="text-center">DAO Deployer</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid w-full gap-8">
              <div className="flex gap-2">
                <div className="flex w-3/4 flex-col space-y-3">
                  <Label htmlFor="tokenName">Token Name</Label>
                  <Input id="tokenName" placeholder="Agent Token" {...form.register("tokenName")} />
                </div>
                <div className="flex w-1/4 flex-col space-y-3">
                  <Label htmlFor="tokenSymbol">Symbol</Label>
                  <Input id="tokenSymbol" placeholder="AWB" {...form.register("tokenSymbol")} />
                </div>
              </div>
              <div className="flex flex-col space-y-3 mb-3">
                <Label htmlFor="daoName">DAO Name</Label>
                <Input id="daoName" placeholder="AWB Governor" {...form.register("daoName")} />
              </div>
            </div>
            <FormField
              control={form.control}
              name="totalSupply"
              defaultValue="10000000" // Make sure this matches the value of one of the SelectItem components
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Total Supply</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || "10000000"}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the total supply to mint" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="100000">100,000</SelectItem>
                      <SelectItem value="1000000">1,000,000</SelectItem>
                      <SelectItem value="21000000">21,000,000</SelectItem>
                      <SelectItem value="100000000">100,000,000</SelectItem>
                      <SelectItem value="1000000000">1,000,000,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription className="pt-2">
                    The total supply of the token to mint. This is the amount of tokens that will be created and sent to
                    your wallet.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
          <CardFooter className="flex w-full justify-between">
            <div className="flex w-full justify-end">
              {loading ? <IconLoader2 className="animate-spin" /> : null}
              <div className="flex w-1/2 justify-end">
                <div className="flex w-full space-between gap-2">
                  {tokenContractAddress && governorContractAddress ? (
                    <a
                      className="text-green-500"
                      href={`https://sepolia.basescan.org/address/${tokenContractAddress}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Token
                    </a>
                  ) : null}
                  {tokenContractAddress && governorContractAddress ? (
                    <a
                      className="text-green-500"
                      href={`https://sepolia.basescan.org/address/${governorContractAddress}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View DAO
                    </a>
                  ) : null}
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end">
              <Button disabled={loading || !form.formState.isValid} type="submit">
                Deploy DAO
              </Button>
            </div>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
}
