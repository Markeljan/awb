import ThemeToggle from "@/components/theme-toggle";
import { AceGridBackground } from "@/components/ui/ace-grid-background";
import { AceTitle } from "@/components/ui/ace-title";
import { RankTab } from "@/components/Rank";
import { TryAgent } from "@/components/TryAgentChat";

import { ParticleConnect } from "@/particle/components/connect";
import { TokenDeployCard } from "@/components/deploy-card";

export default function Home() {
  return (
    <AceGridBackground>
      <div className="flex flex-col min-h-screen items-center">
        <div className="flex flex-col max-w-xs md:max-w-4xl w-full mt-20 items-center mx-auto">
          <AceTitle className="text-center" text="Agents With Benefits" />

          <div>
            <TryAgent />
            <RankTab />
          </div>

          <TokenDeployCard />
        </div>

        <div className="flex w-full h-full justify-center">
          <ParticleConnect />
        </div>

        <div className="absolute top-28 right-4">
          <ThemeToggle />
        </div>
      </div>
    </AceGridBackground>
  );
}
