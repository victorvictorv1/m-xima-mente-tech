import { BadgeCheck, Check } from "lucide-react";

const points = [
  "Gerador criptograficamente seguro, impossível de prever",
  "Embaralhamento Fisher–Yates sem viés entre as cartas",
  "Aprovado em baterias de testes estatísticos independentes",
  "Cada partida registrada e reproduzível para auditoria",
];

export function Rng() {
  const deck = Array.from({ length: 9 });
  return (
    <section id="rng" className="px-5 pb-28">
      <div className="bento mx-auto grid max-w-6xl gap-12 p-8 md:p-14 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">RNG certificado</p>
          <h2 className="mt-4 text-4xl leading-tight font-light md:text-5xl">
            Sorte de verdade, <span className="font-serif-display italic text-gradient">comprovada.</span>
          </h2>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            O RNG (gerador de números aleatórios) decide a ordem de cada carta. O nosso é certificado por laboratório
            independente, para que jogadores e parceiros confiem em cada rodada.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-start gap-3 text-[15px]">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-mint/15">
                  <Check className="size-3 text-mint" />
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative rounded-3xl border border-border bg-background/60 p-6 md:p-8">
          <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">semente</p>
          <p className="mt-1 truncate font-mono text-sm text-primary">0x9f3a…c71e · 256 bits</p>
          <div className="my-6 flex items-center gap-2 text-muted-foreground">
            <span className="h-px flex-1 bg-border" />
            <span className="font-mono text-[11px] tracking-widest uppercase">embaralhando</span>
            <span className="h-px flex-1 bg-border" />
          </div>
          <div className="flex justify-center">
            {deck.map((_, i) => (
              <span
                key={i}
                style={{ transform: `rotate(${(i - 4) * 5}deg) translateY(${Math.abs(i - 4) * 3}px)` }}
                className="-mx-2.5 h-20 w-14 rounded-lg border border-ivory/40 bg-surface-2 shadow-lg [background-image:repeating-linear-gradient(45deg,oklch(1_0_0/5%)_0_2px,transparent_2px_7px)]"
              />
            ))}
          </div>
          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-gold/25 bg-gold/5 p-4">
            <BadgeCheck className="size-9 shrink-0 text-gold" strokeWidth={1.4} />
            <div>
              <p className="font-medium">Certificado de aleatoriedade</p>
              <p className="text-sm text-muted-foreground">Emitido por laboratório de testes independente</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
