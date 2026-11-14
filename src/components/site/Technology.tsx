import type React from "react";
import { Smartphone, Radio, Cpu, Dice5, Database, Activity } from "lucide-react";

const flow = [
  { icon: Smartphone, label: "App do jogador", sub: "iOS · Android · Web" },
  { icon: Radio, label: "Conexão em tempo real", sub: "WebSockets · reconexão" },
  { icon: Cpu, label: "Servidor de partidas", sub: "autoritativo · regras do jogo" },
  { icon: Database, label: "Dados e replays", sub: "histórico auditável" },
];

const specs = [
  ["< 50 ms", "Latência média por jogada, com servidores perto do jogador."],
  ["Auto-escala", "Novas mesas sobem sozinhas nos horários de pico."],
  ["Criptografia", "Conexões protegidas e dados sensíveis cifrados."],
  ["Observabilidade", "Alertas e métricas de cada mesa, 24 horas por dia."],
  ["Entrega contínua", "Atualizações publicadas sem derrubar partidas."],
  ["Anti-conluio", "Detecção de padrões suspeitos entre jogadores."],
];

export function Technology() {
  return (
    <section id="tecnologia" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-reveal>
            <p className="font-mono text-xs tracking-[0.25em] text-gold uppercase">Tecnologia</p>
            <h2 className="mt-4 text-4xl leading-tight font-light text-balance md:text-6xl">
              Engenharia de verdade <span className="font-serif-display italic text-gradient">por trás de cada carta</span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Toda decisão importante acontece no servidor, nunca no aparelho do jogador. Assim o jogo fica rápido,
              justo e impossível de manipular — mesmo com milhares de mesas abertas ao mesmo tempo.
            </p>
          </div>

          {/* Arquitetura */}
          <div data-reveal style={{ "--d": "150ms" } as React.CSSProperties} className="bento bento-glow p-6 md:p-8">
            <div className="dot-grid absolute inset-0 opacity-40" />
            <ol className="relative space-y-3">
              {flow.map(({ icon: Icon, label, sub }, i) => (
                <li key={label} className="relative">
                  <div className="flex items-center gap-4 rounded-2xl border border-border bg-background/70 p-4 backdrop-blur">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl border border-border bg-surface-2">
                      <Icon className="size-5 text-primary" strokeWidth={1.5} />
                    </span>
                    <div className="flex-1">
                      <p className="font-medium">{label}</p>
                      <p className="font-mono text-xs text-muted-foreground">{sub}</p>
                    </div>
                    {i === 2 && (
                      <span className="hidden items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-3 py-1 font-mono text-[11px] text-gold sm:flex">
                        <Dice5 className="size-3.5" /> RNG
                      </span>
                    )}
                    {i === 1 && <Activity className="size-4 animate-pulse-soft text-mint" />}
                  </div>
                  {i < flow.length - 1 && (
                    <span className="relative mx-auto block h-4 w-px overflow-hidden bg-primary/25">
                      <span
                        className="absolute left-0 h-2 w-px animate-flow-down bg-gold"
                        style={{ animationDelay: `${i * 0.5}s` }}
                      />
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>

        <dl data-reveal className="mt-16 grid border-t border-l border-border sm:grid-cols-2 lg:grid-cols-3">
          {specs.map(([t, d]) => (
            <div key={t} className="border-r border-b border-border p-7 transition-colors hover:bg-surface/60">
              <dt className="font-figure text-2xl">{t}</dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
