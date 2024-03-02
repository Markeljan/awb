import ThemeToggle from "@/components/theme-toggle";
import { AceGridBackground } from "@/components/ui/ace-grid-background";
import { AceTitle } from "@/components/ui/ace-title";
import { RankTab } from "@/components/Rank";
import { TryAgent } from "@/components/TryAgentChat";

import { ParticleConnect } from "@/particle/components/connect";
import { DAODeployer } from "@/components/dao-deployer";

export default function Home() {
  return (
    <AceGridBackground>
      <div className="flex flex-col max-sm:max-w-sm max-w-4xl text-center w-full mx-auto justify-center items-center gap-24 p-8">
        <AceTitle className="text-center mt-24" text="Agents With Benefits" />
        <TryAgent />
        <RankTab />
        <DAODeployer />

        <div className="flex w-full h-full justify-center">
          <ParticleConnect />
        </div>

        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
      </div>
    </AceGridBackground>
  );
}
