import { SectionHeading } from "./SectionHeading";

const stats = [
  { value: "100k+", label: "Usuários simultâneos suportados" },
  { value: "99.9%", label: "Uptime garantido" },
  { value: "<50ms", label: "Latência média em tempo real" },
];

export function Stats() {
  return (
    <section id="performance" className="relative overflow-hidden bg-gradient-band py-28">
      <div className="absolute inset-0 grid-lines opacity-40" />
      <div className="absolute -top-40 left-1/2 size-[36rem] -translate-x-1/2 rounded-full bg-glow-violet/20 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeading
          eyebrow="Números"
          title={
            <>
              Nossa <span className="text-gradient">Performance</span>
            </>
          }
          subtitle="Tecnologia robusta e escalável para plataformas profissionais."
        />
        <div className="grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="glass rounded-3xl p-8 text-center">
              <p className="font-display text-5xl font-bold text-gradient">{s.value}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
