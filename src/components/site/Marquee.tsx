const items = [
  "Tempo real",
  "Embaralhamento seguro",
  "Servidor autoritativo",
  "iOS · Android · Web",
  "Criptografia ponta a ponta",
  "Escala automática",
  "Replays auditáveis",
  "Monitoramento 24/7",
];

export function Marquee() {
  const row = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border py-6 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-10 font-figure text-2xl font-normal text-foreground/70 md:text-3xl">
            {t}
            <span className="size-1.5 rounded-full bg-primary/50" />
          </span>
        ))}
      </div>
    </div>
  );
}
