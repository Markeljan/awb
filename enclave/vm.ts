import vm from "node:vm";
import OpenAI from "openai";

const sandbox = {
  console: console,
  require: require,
  OpenAI: OpenAI,
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

export const executeCodeVm = async ({ uri }: { uri: string }) => {
  const code = await fetchCode(uri);

  const transpiler = new Bun.Transpiler({
    loader: "tsx",
    target: "node",
  });

  const transpiledCode = transpiler.transformSync(code);

  vm.createContext(sandbox);

  try {
    vm.runInContext(transpiledCode, sandbox);
  } catch (error) {
    console.log(error);
  }
};
