import { BrainCircuit } from "lucide-react";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="MáximaMente Tech — início">
      <span className="relative grid size-10 place-items-center rounded-xl bg-gradient-brand p-px shadow-glow">
        <span className="grid size-full place-items-center rounded-[11px] bg-background">
          <BrainCircuit className="size-5 text-primary transition-transform duration-500 group-hover:rotate-12" />
        </span>
      </span>
      {!compact && (
        <span className="font-display text-lg font-semibold leading-none tracking-tight">
          MáximaMente <span className="text-gradient">Tech</span>
        </span>
      )}
    </a>
  );
}
