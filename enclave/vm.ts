import vm from "node:vm";
import OpenAI from "openai";
import * as nearAPI from "near-api-js";

const sandbox = {
  console: console,
  require: require,
  OpenAI: OpenAI,
  openRouter: new OpenAI({
    apiKey: process.env.OPEN_ROUTER_API_KEY,
    baseURL: "https://openrouter.ai/api/v1",
  }),
  libraries: {
    web3: {
      nearAPI,
    },
  },
  process: {
    ...process,
    env: {
      ...process.env,
    },
  },
};

const fetchCode = async (uri: string) => {
  const response = await fetch(uri);
  return await response.text();
};

export const executeCodeVm = async ({
  uri,
  prompt,
}: {
  uri: string;
  prompt: string;
}) => {
  const code = await fetchCode(uri);

  const transpiler = new Bun.Transpiler({
    loader: "tsx",
    target: "node",
  });

  const transpiledCode = transpiler.transformSync(
    `${code}\nmain({prompt: "${prompt}"}).then((result) => result).catch(console.error);`
  );

  vm.createContext(sandbox);

  try {
    const result = await vm.runInContext(transpiledCode, sandbox);

    return result;
  } catch (error) {
    console.log(error);
  }
};
