import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Vocês fazem jogos com regras próprias?",
    a: "Sim. Desenvolvemos tanto clássicos conhecidos quanto jogos totalmente originais, com regras e baralho próprios. Toda a lógica roda no servidor, do jeito que você imaginou.",
  },
  {
    q: "O que significa ter RNG certificado?",
    a: "Significa que o sistema que embaralha as cartas foi testado por um laboratório independente e comprovado como verdadeiramente aleatório. Ninguém — nem nós — consegue prever ou influenciar a ordem das cartas.",
  },
  {
    q: "Quanto tempo leva para o jogo ficar pronto?",
    a: "Depende do tamanho do projeto. Um protótipo jogável costuma ficar pronto em cerca de 4 semanas, e você acompanha entregas toda semana até o lançamento.",
  },
  {
    q: "O código fica sendo meu?",
    a: "Sim. Todo o código, as artes e a marca do jogo pertencem a você. Entregamos tudo documentado.",
  },
  {
    q: "E depois que o jogo for lançado?",
    a: "Podemos continuar cuidando de tudo — servidores, segurança, eventos e novidades — ou treinar a sua equipe para assumir aos poucos.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Dúvidas</p>
          <h2 className="mt-4 text-4xl leading-tight font-light md:text-5xl">
            Perguntas <span className="font-serif-display italic text-gradient">frequentes</span>
          </h2>
          <p className="mt-5 max-w-sm text-muted-foreground">Ficou alguma pergunta de fora? Responde a gente que conversamos.</p>
          <Button asChild variant="pill" size="lg" className="mt-8 px-6">
            <a href="#contato">Perguntar direto</a>
          </Button>
        </div>
        <Accordion type="single" collapsible defaultValue="item-0" className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="py-6 text-left text-lg font-normal hover:no-underline [&[data-state=open]]:text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
