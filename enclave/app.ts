import { Elysia } from "elysia";
import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { walletClient } from "./config";
import { executeCodeVm } from "./vm";
import { awbRegistryAbi } from "./generated";

import { encodeFunctionData } from "viem";

export const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

// TODO: listen to request events

new Elysia()
  .get("/", async () => {
    return {
      blockNumber: (await client.getBlockNumber()).toString(),
    };
  })
  .post(
    "/run",
    async ({
      body: {
        uri,
        prompt,
        agentId,
        origin = process.env.HUB_ACCOUNT_ADDRESS as `0x${string}`,
      },
    }: {
      body: {
        uri: string;
        prompt: string;
        agentId: bigint;
        origin: `0x${string}`;
      };
    }) => {
      const isRequestInitiated = origin === process.env.HUB_ACCOUNT_ADDRESS; // && add more logic

      let result = null;
      let tx = null;
      try {
        result = await executeCodeVm({
          uri,
          prompt,
        });
      } catch (error) {
        console.log(error);
      }

      try {
        const data = encodeFunctionData({
          abi: awbRegistryAbi,
          functionName: "createAndFulfillRequest",
          args: [agentId, origin, prompt, result, ""],
        });

        const request = await walletClient.prepareTransactionRequest({
          to: process.env.REGISTRY_ACCOUNT_ADDRESS as `0x${string}`,
          value: 0n,
          data: data,
        });

        const signature = await walletClient.signTransaction(request);
        const hash = await walletClient.sendRawTransaction({
          serializedTransaction: signature,
        });

        tx = hash;
      } catch (error) {
        console.log(error);
      }

      return { result, tx };
    }
  )
  .listen(4000, () => {
    console.log("Listening on http://localhost:4000");
  });
