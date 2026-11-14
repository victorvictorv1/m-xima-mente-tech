import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroCards from "@/assets/hero-cards.jpg";

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pt-36 pb-20 md:pt-44">
      <div className="absolute inset-0 -z-10 bg-stage" />
      <div className="absolute inset-0 -z-10 dot-grid opacity-40 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            <span className="text-gold">♠ ♥ ♦ ♣</span>&nbsp;&nbsp;Estúdio de jogos de cartas
          </p>
          <h1 className="mt-6 animate-fade-up text-5xl leading-[1.02] font-light text-balance sm:text-6xl lg:text-[5.25rem] [animation-delay:120ms]">
            Jogos de cartas <span className="font-serif-display italic text-gradient">feitos para</span> não largar.
          </h1>
          <p className="mt-7 max-w-lg animate-fade-up text-lg leading-relaxed text-muted-foreground [animation-delay:240ms]">
            Criamos jogos de cartas online com mesas ao vivo, torneios e economia própria — do primeiro protótipo à
            operação diária, com o acabamento de um produto premium.
          </p>
          <div className="mt-10 flex animate-fade-up flex-wrap items-center gap-3 [animation-delay:360ms]">
            <Button asChild variant="lavender" size="xl">
              <a href="#contato">
                Tirar minha ideia do papel <ArrowUpRight />
              </a>
            </Button>
            <Button asChild variant="pill" size="xl">
              <a href="#estudio">Ver o que fazemos</a>
            </Button>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:300ms]">
          <div className="bento aspect-[4/5] p-0">
            <img
              src={heroCards}
              alt="Cartas de baralho pretas com bordas douradas flutuando sob luz lilás"
              width={1200}
              height={1408}
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
          </div>

          <div className="glass absolute -left-4 bottom-10 animate-float rounded-2xl px-4 py-3 sm:-left-10">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span className="size-2 animate-pulse-soft rounded-full bg-mint" /> Mesa ao vivo
            </div>
            <p className="mt-1 text-sm font-medium">4 jogadores · rodada 7</p>
          </div>
          <div className="glass absolute -right-3 top-10 rounded-2xl px-4 py-3 [animation-delay:2s] animate-float sm:-right-8">
            <p className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">latência</p>
            <p className="font-serif-display text-3xl text-gold">32ms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
