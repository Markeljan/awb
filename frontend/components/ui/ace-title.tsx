import { cn } from "@/lib/utils";

export function AceTitle({ text, className }: { text: string; className?: string }) {
  return (
    <p
      className={cn(
        "max-sm: text-6xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500",
        className
      )}
    >
      {text}
    </p>
  );
}
