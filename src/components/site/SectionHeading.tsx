import type { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-16 max-w-2xl text-center">
      <p className="mb-4 font-mono text-xs uppercase tracking-[0.25em] text-primary">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-balance sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-5 text-lg text-pretty text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
