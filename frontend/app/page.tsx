import { AgentFactoryForm } from "@/components/agent-factory-form";
import ThemeToggle from "@/components/theme-toggle";
import { AceGridBackground } from "@/components/ui/ace-grid-background";
import { AceTitle } from "@/components/ui/ace-title";
import { Navbar } from "@/components/Navbar";
import { RankTab } from "@/components/Rank";

import { ParticleConnect } from "@/particle/components/connect";
import { TryAgent } from "@/components/TryAgent";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <Navbar></Navbar>
      <AceGridBackground>
        <div className="flex flex-col max-w-xs md:max-w-4xl w-full mt-20 items-center mx-auto">
          <AceTitle className="text-center" text="Agents With Benefits" />
          <AgentFactoryForm />
          <div className="pt-10 pb-10">
            <TryAgent></TryAgent>
            <RankTab></RankTab>

          </div>
        </div>

        <div className="flex w-full h-full justify-center">
          <ParticleConnect />
        </div>
      </AceGridBackground>
      <div className="absolute top-28 right-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
