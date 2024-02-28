import { SparklesPreview } from "@/components/sparkles-header";
import { ParticleConnect } from "@/particle/components/connect";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <div className="flex flex-col max-w-2xl w-full">
        <SparklesPreview />
        <ParticleConnect />
      </div>
    </main>
  );
}
