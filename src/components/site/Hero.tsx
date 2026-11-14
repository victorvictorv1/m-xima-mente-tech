import { useEffect, useState, type PointerEvent } from "react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCards from "@/assets/hero-cards-premium.jpg";

export function Hero() {
  const [latency, setLatency] = useState(32);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const id = window.setInterval(() => setLatency(28 + Math.floor(Math.random() * 9)), 2200);
    return () => window.clearInterval(id);
  }, []);

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setTilt({ x: ((e.clientY - r.top) / r.height - 0.5) * -6, y: ((e.clientX - r.left) / r.width - 0.5) * 8 });
  };

  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-stage" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] -z-10 size-[560px] animate-aurora rounded-full bg-violet/20 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute bottom-[-20%] left-[-10%] -z-10 size-[420px] animate-aurora rounded-full bg-gold/10 blur-3xl [animation-delay:-9s]" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-surface/60 px-4 py-1.5 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">
            <span className="size-1.5 animate-pulse-soft rounded-full bg-mint" />
            Tecnologia para jogos de cartas
          </p>
          <h1 className="mt-7 animate-fade-up text-5xl leading-[1.02] font-light text-balance sm:text-6xl lg:text-[5rem] [animation-delay:120ms]">
            A tecnologia que leva seu jogo de cartas <span className="font-serif-display italic text-gradient-live">ao máximo.</span>
          </h1>
          <p className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:240ms]">
            Multiplayer em tempo real, embaralhamento seguro e servidores que crescem junto com o seu público — do primeiro
            protótipo à operação diária.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:360ms]">
            <Button asChild variant="lavender" size="xl">
              <a href="#contato">
                Começar um projeto <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="pill" size="xl">
              <a href="#tecnologia">Conhecer a tecnologia</a>
            </Button>
          </div>
        </div>

        <div
          className="relative animate-fade-up [animation-delay:300ms] [perspective:1200px]"
          onPointerMove={onMove}
          onPointerLeave={() => setTilt({ x: 0, y: 0 })}
        >
          <div
            className="bento aspect-[4/5] p-0 transition-transform duration-500 ease-out will-change-transform"
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <img
              src={heroCards}
              alt="Cartas de baralho reais flutuando sobre fundo escuro"
              width={1200}
              height={1408}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="glass absolute -left-4 bottom-10 animate-float rounded-2xl px-4 py-3 sm:-left-10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="size-3.5 text-mint" /> Embaralhamento
            </div>
            <p className="mt-1 text-sm font-medium">Aleatório e auditável</p>
          </div>
          <div className="glass absolute -right-3 top-10 animate-float rounded-2xl px-4 py-3 [animation-delay:2s] sm:-right-8">
            <p className="font-mono text-[11px] tracking-widest text-muted-foreground uppercase">latência</p>
            <p className="font-figure text-2xl text-gold">{latency}ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
