import { AgentFactoryForm } from "@/components/agent-factory-form";
import ThemeToggle from "@/components/theme-toggle";
import { AceGridBackground } from "@/components/ui/ace-grid-background";
import { AceTitle } from "@/components/ui/ace-title";

import { ParticleConnect } from "@/particle/components/connect";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center">
      <AceGridBackground>
        <div className="flex flex-col max-w-xs md:max-w-4xl w-full mt-20 items-center mx-auto">
          <AceTitle className="text-center" text="Agents With Benefits" />
          <AgentFactoryForm />
        </div>

        <div className="flex w-full h-full justify-center">
          <ParticleConnect />
        </div>
      </AceGridBackground>
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>
    </main>
  );
}
