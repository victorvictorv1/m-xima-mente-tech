import { Smartphone, Server, Trophy, ShieldCheck, Zap, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const services = [
  { icon: Smartphone, title: "Desenvolvimento Mobile & Web", text: "Apps nativos e Progressive Web Apps com UX otimizada para cada plataforma." },
  { icon: Server, title: "Back-end Escalável", text: "Node.js, Supabase e RabbitMQ para partidas em tempo real e dados seguros." },
  { icon: Trophy, title: "Live Ops e Torneios", text: "Rankings, eventos sazonais e economia in-game balanceada para engajamento." },
  { icon: ShieldCheck, title: "Anti-cheat e Fairness", text: "Validação server-side, detecção de padrões e auditorias para jogo justo." },
  { icon: Zap, title: "Integrações Completas", text: "Pagamentos, analytics, suporte via Chatwoot e automações com n8n." },
  { icon: Rocket, title: "Publicação e CI/CD", text: "Deploy automatizado, App Store e Play Store, monitoramento contínuo." },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="O que fazemos"
          title={
            <>
              Serviços e <span className="text-gradient">Diferenciais</span>
            </>
          }
          subtitle="Tudo o que você precisa para criar, lançar e escalar plataformas de sucesso."
        />
        <div className="grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="group relative bg-background p-8 transition-colors duration-300 hover:bg-surface"
            >
              <span className="mb-6 grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow transition-transform duration-300 group-hover:-translate-y-1">
                <Icon className="size-5" />
              </span>
              <h3 className="mb-3 text-lg font-semibold">{title}</h3>
              <p className="leading-relaxed text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 text-center text-muted-foreground">
          Desenvolvemos soluções completas, <span className="text-foreground">do conceito à operação.</span>
        </p>
      </div>
    </section>
  );
}
