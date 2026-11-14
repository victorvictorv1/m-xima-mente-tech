import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-circuit.jpg";

const highlights = [
  { icon: "⚡", text: "Baixa latência e escalabilidade em tempo real" },
  { icon: "🎮", text: "Economia de jogo balanceada e eventos ao vivo" },
  { icon: "🛡️", text: "Infra segura, anti-cheat e moderação integrada" },
  { icon: "💎", text: "UX e UI premium" },
];

const stack = ["React", "Node.js", "Supabase", "WebSockets"];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-screen items-center overflow-hidden pt-28 pb-24">
      <img
        src={heroImg}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-hero-fade" />
      <div className="absolute inset-0 -z-10 grid-lines opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />

      <div className="mx-auto w-full max-w-5xl px-5 text-center">
        <span className="glass mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <span className="size-1.5 rounded-full bg-primary shadow-glow" />
          Estúdio de tecnologia
        </span>

        <h1 className="animate-fade-up text-4xl font-bold leading-[1.05] text-balance sm:text-6xl lg:text-7xl [animation-delay:100ms]">
          Desenvolvemos aplicações e plataformas de{" "}
          <span className="text-gradient animate-shine">nível profissional</span>
        </h1>

        <div className="mx-auto mt-10 grid max-w-3xl animate-fade-up gap-3 sm:grid-cols-2 [animation-delay:250ms]">
          {highlights.map((h) => (
            <div
              key={h.text}
              className="glass flex items-center justify-center gap-2.5 rounded-2xl px-5 py-4 text-sm font-medium text-foreground/90"
            >
              <span aria-hidden>{h.icon}</span>
              {h.text}
            </div>
          ))}
        </div>

        <div className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row [animation-delay:400ms]">
          <Button asChild variant="hero" size="xl">
            <a href="#tecnologia">
              Ver tecnologias <ArrowRight />
            </a>
          </Button>
          <Button asChild variant="glass" size="xl" className="rounded-xl">
            <a href="#contato">Iniciar um projeto</a>
          </Button>
        </div>

        <ul className="mt-14 flex animate-fade-up flex-wrap items-center justify-center gap-3 [animation-delay:550ms]">
          {stack.map((s) => (
            <li
              key={s}
              className="rounded-full border border-border bg-background/40 px-4 py-1.5 font-mono text-xs text-muted-foreground backdrop-blur"
            >
              {s}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
