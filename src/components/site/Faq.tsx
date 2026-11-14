import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Vocês fazem qualquer jogo de cartas?",
    a: "Sim. Já pensamos em truco, buraco, poker, cacheta e também em jogos totalmente originais, com regras e baralho próprios. Se tem cartas, a gente faz.",
  },
  {
    q: "Quanto custa e quanto tempo leva?",
    a: "Depende do tamanho do jogo. Depois de uma conversa inicial, enviamos uma proposta com prazo e valor fechados. Um protótipo jogável costuma ficar pronto em cerca de 4 semanas.",
  },
  {
    q: "O jogo fica sendo meu?",
    a: "Sim. Todo o código, as artes e a marca do jogo pertencem a você. Entregamos tudo documentado.",
  },
  {
    q: "E depois que o jogo for lançado?",
    a: "Podemos continuar cuidando de tudo — servidores, eventos, novidades e suporte — ou treinar a sua equipe para assumir aos poucos.",
  },
  {
    q: "Como vocês evitam trapaça?",
    a: "Toda jogada é conferida no servidor, o embaralhamento é auditável e monitoramos padrões suspeitos, como jogadores combinando jogadas.",
  },
];

export function Faq() {
  return (
    <section id="duvidas" className="py-28">
      <div className="mx-auto grid max-w-6xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">Dúvidas</p>
          <h2 className="mt-4 text-4xl leading-tight font-light md:text-5xl">
            Antes de <span className="font-serif-display italic text-gradient">embaralhar</span>
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
