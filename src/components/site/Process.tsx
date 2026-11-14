import type React from "react";
import { trackSpotlight, useCountUp } from "./motion";

function Stat({ to, suffix }: { to: number; suffix: string }) {
  const { ref, value } = useCountUp(to);
  return (
    <span ref={ref}>
      {value}
      {suffix}
    </span>
  );
}

const steps = [
  { tag: "Descoberta", title: "Ideia na mesa", text: "Entendemos seu jogo, seu público e seus objetivos. Saímos com um plano técnico claro e um cronograma." },
  { tag: "Protótipo", title: "Protótipo jogável", text: "Em poucas semanas você já joga a primeira versão e sente se a diversão está lá." },
  { tag: "Produção", title: "Construção", text: "Visual, multiplayer, RNG e torneios ganham forma, com entregas semanais para você acompanhar." },
  { tag: "Lançamento", title: "Lançamento e além", text: "Publicamos nas lojas e seguimos operando: eventos, correções e novidades constantes." },
];

export function Process() {
  return (
    <section id="processo" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div data-reveal className="mb-14 max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Como trabalhamos</p>
          <h2 className="mt-4 text-4xl leading-tight font-light md:text-6xl">
            Da ideia <span className="font-serif-display italic text-gradient">ao lançamento</span>
          </h2>
        </div>
        <ol className="grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <li
              key={s.title}
              data-reveal
              onPointerMove={trackSpotlight}
              style={{ "--d": `${i * 110}ms` } as React.CSSProperties}
              className="bento spotlight group flex flex-col p-7"
            >
              <div className="flex items-center justify-between">
                <span className="font-figure text-4xl text-gold/80 transition-colors group-hover:text-primary">0{i + 1}</span>
                <span className="rounded-full border border-border px-3 py-1 font-mono text-[10px] tracking-widest text-muted-foreground uppercase">{s.tag}</span>
              </div>
              <h3 className="mt-10 text-xl">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
            </li>
          ))}
        </ol>

        <dl data-reveal className="mt-20 grid gap-10 border-t border-border pt-12 sm:grid-cols-3">
          {[
            [<Stat key="a" to={4} suffix=" sem." />, "para o primeiro protótipo jogável"],
            [<Stat key="b" to={100} suffix=" mil" />, "jogadores simultâneos sem travar"],
            ["24/7", "monitoramento depois do lançamento"],
          ].map(([v, l]) => (
            <div key={l as string}>
              <dt className="font-figure text-5xl text-foreground">{v}</dt>
              <dd className="mt-2 text-sm text-muted-foreground">{l}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
