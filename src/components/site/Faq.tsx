import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeading } from "./SectionHeading";

const faqs = [
  {
    q: "Quanto tempo leva para desenvolver uma plataforma completa?",
    a: "Depende da complexidade. Um protótipo funcional pode ser entregue em 3 a 4 semanas. Projetos simples ficam prontos em 1 a 2 meses, e projetos completos com multiplayer, ranking, torneios e monetização levam de 2 a 4 meses. Trabalhamos com entregas semanais, para você acompanhar e ajustar durante o caminho.",
  },
  {
    q: "Como funciona o processo de desenvolvimento?",
    a: "Seguimos 5 fases: (1) descoberta e planejamento técnico, (2) protótipo e validação da ideia principal, (3) desenvolvimento das funcionalidades centrais, (4) recursos avançados como multiplayer e monetização, (5) testes, acabamento e lançamento. Cada fase inclui demonstrações ao vivo.",
  },
  {
    q: "Vocês oferecem suporte e manutenção pós-lançamento?",
    a: "Sim. Oferecemos planos de Live Ops com hospedagem em nuvem, monitoramento 24/7, atualizações de segurança, correção de bugs, eventos sazonais, suporte aos usuários, análise de métricas e relatórios de performance. Você escolhe entre gestão completa ou transferência gradual para sua equipe.",
  },
  {
    q: "Como vocês garantem a segurança contra trapaças?",
    a: "Usamos proteção em várias camadas: validação de todas as jogadas no servidor, detecção de padrões suspeitos com machine learning, limites de requisições, auditoria de partidas, moderação automática e manual e criptografia ponta a ponta. Todo processamento crítico acontece no servidor, nunca no aparelho do usuário.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-28">
      <div className="mx-auto max-w-3xl px-5">
        <SectionHeading
          eyebrow="Dúvidas"
          title={
            <>
              Perguntas <span className="text-gradient">Frequentes</span>
            </>
          }
          subtitle="Respostas para as dúvidas mais comuns sobre nossos serviços."
        />
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((f, i) => (
            <AccordionItem
              key={f.q}
              value={`item-${i}`}
              className="rounded-2xl border border-border bg-card px-6 transition-colors data-[state=open]:border-primary/40"
            >
              <AccordionTrigger className="py-5 font-display text-base font-semibold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-[15px] leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">Não encontrou sua dúvida?</p>
          <a href="#contato" className="mt-2 inline-block font-medium text-primary hover:underline">
            Entre em contato conosco →
          </a>
        </div>
      </div>
    </section>
  );
}
