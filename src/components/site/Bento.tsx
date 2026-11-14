import { ArrowUpRight, Fingerprint } from "lucide-react";
import { Button } from "@/components/ui/button";

function TileText({ title, text, cta }: { title: string; text: string; cta?: boolean }) {
  return (
    <div className="relative z-10">
      <h3 className="text-2xl md:text-[1.75rem]">{title}</h3>
      <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">{text}</p>
      {cta && (
        <Button asChild variant="pill" size="lg" className="mt-6 px-5">
          <a href="#contato">
            Conversar <ArrowUpRight />
          </a>
        </Button>
      )}
    </div>
  );
}

/* Mini mesa de jogo ao vivo */
function LiveTable() {
  const seats = [
    { pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2", name: "Ana", active: true },
    { pos: "right-0 top-1/2 translate-x-1/2 -translate-y-1/2", name: "Rafa" },
    { pos: "left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2", name: "Você" },
    { pos: "left-0 top-1/2 -translate-x-1/2 -translate-y-1/2", name: "Leo" },
  ];
  return (
    <div className="relative mx-auto h-44 w-72 rounded-[999px] border border-primary/25 bg-surface-2 shadow-[inset_0_0_40px_oklch(0.6_0.22_298/0.25)]">
      <div className="absolute inset-3 rounded-[999px] border border-dashed border-border" />
      <div className="absolute top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 gap-1.5">
        {["A♠", "K♥", "7♦"].map((c, i) => (
          <span
            key={c}
            style={{ transform: `rotate(${(i - 1) * 9}deg)` }}
            className={`playing-card grid h-14 w-10 place-items-center rounded-md font-serif-display text-lg ${c.includes("♥") || c.includes("♦") ? "text-card-red" : "text-card-ink"}`}
          >
            {c}
          </span>
        ))}
      </div>
      {seats.map((s) => (
        <div key={s.name} className={`absolute ${s.pos} flex flex-col items-center gap-1`}>
          <span
            className={`grid size-10 place-items-center rounded-full border text-xs font-medium ${
              s.active ? "border-primary bg-lavender text-primary-foreground shadow-lavender" : "border-border bg-surface text-muted-foreground"
            }`}
          >
            {s.name.slice(0, 2)}
          </span>
        </div>
      ))}
    </div>
  );
}

function Leaderboard() {
  const rows = [
    { n: "mariana_k", p: "12.480", up: true },
    { n: "trucador", p: "11.902" },
    { n: "você", p: "11.355", me: true },
  ];
  return (
    <ul className="space-y-2">
      {rows.map((r, i) => (
        <li
          key={r.n}
          className={`flex items-center justify-between rounded-xl border px-4 py-2.5 text-sm ${
            r.me ? "border-primary/40 bg-primary/10" : "border-border bg-surface-2/60"
          }`}
        >
          <span className="flex items-center gap-3">
            <span className="font-serif-display text-lg text-gold">{i + 1}</span>
            {r.n}
          </span>
          <span className="font-mono text-xs text-muted-foreground">{r.p} pts</span>
        </li>
      ))}
    </ul>
  );
}

function CodeWindow() {
  return (
    <div className="rounded-2xl border border-border bg-background/70 p-4 font-mono text-[12.5px] leading-6 shadow-2xl">
      <div className="mb-3 flex gap-1.5">
        <span className="size-2.5 rounded-full bg-surface-2" />
        <span className="size-2.5 rounded-full bg-surface-2" />
        <span className="size-2.5 rounded-full bg-surface-2" />
      </div>
      <p><span className="text-primary">on</span>(<span className="text-gold">"jogada"</span>, <span className="text-muted-foreground">(mesa, carta) =&gt;</span> {"{"}</p>
      <p className="pl-4"><span className="text-primary">validar</span>(mesa, carta)</p>
      <p className="pl-4"><span className="text-primary">sincronizar</span>(mesa.<span className="text-mint">jogadores</span>)</p>
      <p className="pl-4"><span className="text-primary">pontuar</span>(mesa.<span className="text-mint">rodada</span>)</p>
      <p>{"}"})</p>
    </div>
  );
}

function Rings() {
  return (
    <div className="relative mx-auto grid aspect-square w-full max-w-[260px] place-items-center">
      {[100, 82, 64, 46].map((s, i) => (
        <span
          key={s}
          style={{ width: `${s}%`, height: `${s}%`, opacity: 0.35 + i * 0.18 }}
          className="absolute rounded-[28%] border border-border bg-surface/40 shadow-[inset_0_1px_0_oklch(1_0_0/6%)]"
        />
      ))}
      <span className="relative grid size-20 place-items-center rounded-2xl border border-primary/30 bg-surface-2 shadow-lavender">
        <Fingerprint className="size-9 text-primary" strokeWidth={1.25} />
      </span>
    </div>
  );
}

function Arc() {
  const dots = Array.from({ length: 5 }, (_, r) =>
    Array.from({ length: 7 }, (_, c) => {
      const angle = Math.PI * (c / 6);
      const radius = 40 + r * 26;
      return { x: 160 - Math.cos(angle) * radius, y: 170 - Math.sin(angle) * radius };
    }),
  ).flat();
  return (
    <svg viewBox="0 0 320 170" className="w-full max-w-md" aria-hidden>
      <defs>
        <linearGradient id="arcfill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--violet)" stopOpacity="0.05" />
        </linearGradient>
      </defs>
      {[40, 66, 92, 118, 144].map((r) => (
        <path key={r} d={`M ${160 - r} 170 A ${r} ${r} 0 0 1 ${160 + r} 170`} fill="none" stroke="var(--border)" />
      ))}
      <path d="M160 170 L 70 66 A 144 144 0 0 1 250 66 Z" fill="url(#arcfill)" />
      {dots.map((d, i) => (
        <circle key={i} cx={d.x} cy={d.y} r="2" fill="var(--muted-foreground)" opacity="0.6" />
      ))}
      <circle cx="128" cy="78" r="5" fill="var(--gold)" />
      <circle cx="200" cy="110" r="4" fill="var(--primary)" />
    </svg>
  );
}

export function Bento() {
  return (
    <section id="solucoes" className="py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl leading-tight font-light text-balance md:text-6xl">
            Tudo o que um jogo de cartas <span className="font-serif-display italic text-gradient">precisa</span>
          </h2>
          <p className="max-w-sm text-muted-foreground">
            Design, engenharia e operação no mesmo time. Você foca nas regras e na diversão; a gente cuida da tecnologia.
          </p>
        </div>

        <div className="grid auto-rows-[minmax(0,auto)] gap-4 md:grid-cols-3">
          {/* Multiplayer */}
          <article className="bento bento-glow flex flex-col justify-between gap-10 p-8 md:col-span-2 md:flex-row md:items-center">
            <TileText
              title="Multiplayer em tempo real"
              text="Mesas que sincronizam cada carta em milissegundos, com reconexão automática e salas privadas para jogar com os amigos."
              cta
            />
            <div className="shrink-0 py-6 md:pr-6">
              <LiveTable />
            </div>
          </article>

          {/* Apps */}
          <article className="bento flex flex-col justify-between gap-8 p-8">
            <div className="relative mx-auto h-32 w-full max-w-[220px]">
              <div className="absolute inset-x-6 top-0 h-28 rounded-2xl border border-border bg-surface-2 p-3 shadow-xl">
                <div className="h-2 w-16 rounded-full bg-muted" />
                <div className="mt-3 h-12 rounded-lg bg-lavender opacity-30" />
              </div>
              <div className="absolute right-0 bottom-0 h-24 w-14 rounded-xl border border-primary/30 bg-background p-1.5 shadow-lavender">
                <div className="h-full rounded-lg bg-surface-2" />
              </div>
              <span className="absolute -left-1 bottom-2 rotate-[-10deg] rounded-lg border border-border bg-surface px-2 py-1 font-mono text-[10px] text-muted-foreground">iOS</span>
            </div>
            <TileText title="iOS, Android e Web" text="Um único jogo, publicado nas lojas e no navegador, com progresso salvo em todos os aparelhos." />
          </article>

          {/* Anti-fraude */}
          <article className="bento flex flex-col gap-8 p-8 md:row-span-2">
            <TileText
              title="Jogo limpo, sempre"
              text="Validação de cada jogada no servidor, detecção de conluio e auditoria de partidas suspeitas, com moderação automática."
            />
            <div className="mt-auto">
              <Rings />
            </div>
          </article>

          {/* Emblema */}
          <article className="bento bento-glow grid min-h-56 place-items-center p-8">
            <div className="dot-grid absolute inset-0 opacity-50" />
            <div className="relative flex items-end gap-2">
              <span className="playing-card grid h-28 w-20 -rotate-12 place-items-center rounded-xl font-serif-display text-5xl text-card-ink">♠</span>
              <span className="playing-card grid h-24 w-16 rotate-6 place-items-center rounded-xl font-serif-display text-4xl text-card-red">♦</span>
            </div>
          </article>

          {/* Back-end */}
          <article className="bento flex flex-col gap-8 p-8 md:row-span-2">
            <div className="-mr-12">
              <CodeWindow />
            </div>
            <TileText
              title="Tecnologia sob medida"
              text="Servidores que aguentam picos de milhares de mesas, regras do seu jogo escritas do jeito certo e painel para acompanhar tudo."
            />
          </article>

          {/* Torneios */}
          <article className="bento flex flex-col gap-6 p-8">
            <TileText title="Torneios e ranking" text="Temporadas, ligas e conquistas que trazem o jogador de volta todo dia." />
            <Leaderboard />
          </article>

          {/* Live Ops */}
          <article className="bento flex flex-col items-center gap-6 p-8 pb-0 text-center md:col-span-3 md:flex-row md:items-end md:justify-between md:pb-0 md:text-left">
            <div className="md:pb-8">
              <TileText
                title="Operação contínua"
                text="Eventos sazonais, novidades frequentes e métricas de engajamento em tempo real. Depois do lançamento, seguimos juntos fazendo o jogo evoluir."
              />
            </div>
            <Arc />
          </article>
        </div>
      </div>
    </section>
  );
}
