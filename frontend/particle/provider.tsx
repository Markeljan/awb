import { AuthCoreContextProvider } from "@particle-network/auth-core-modal";
import { BaseSepolia } from "@particle-network/chains";
import { PARTICLE_CONFIG } from "@/particle/config";

export function ParticleProvider({ children }: { children: React.ReactNode }) {
  return (
    <AuthCoreContextProvider
      options={{
        ...PARTICLE_CONFIG,
        erc4337: {
          name: "SIMPLE",
          version: "1.0.0",
        },
        wallet: {
          visible: true,
          customStyle: {
            supportChains: [BaseSepolia],
          },
        },
      }}
    >
      {children}
    </AuthCoreContextProvider>
  );
}
