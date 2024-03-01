import { createPublicClient, http } from "viem";
import { baseSepolia } from "viem/chains";
import { Elysia } from "elysia";
import { executeCodeVm } from "./vm";

const client = createPublicClient({
  chain: baseSepolia,
  transport: http(),
});

new Elysia()
  .get("/", async () => {
    return {
      blockNumber: (await client.getBlockNumber()).toString(),
    };
  })
  .post(
    "/run",
    async ({
      body: { uri, prompt },
    }: {
      body: { uri: string; prompt: string };
    }) => {
      const result = await executeCodeVm({
        uri,
        prompt,
      });

      return result;
    }
  )
  .listen(4000, () => {
    console.log("Listening on http://localhost:4000");
  });
