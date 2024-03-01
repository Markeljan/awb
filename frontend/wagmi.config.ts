import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "lib/generated.ts",
  contracts: [],
  plugins: [
    react(),
    foundry({
      forge: {
        build: false,
        clean: false,
      },
      project: "../contracts",
      deployments: {
        DAOToken: {
          84532: "0x1e4b432b90903ea6048a30c39d634b48d81ea538",
        },
        DAOGovernor: {
          84532: "0xe392FAc4a899E1d3c6a21bb4E0800B93149Cee7f",
        },
        AWBRegistry: {
          84532: "0x8aB1d92130774f55CE93222f62F2e213366e24a7",
        },
      },
      include: ["DAOToken.json", "DAOGovernor.json", "AWBRegistry.json"],
      exclude: [],
    }),
  ],
});
