import { Code2, Database, Cloud, Zap, Shield, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "./SectionHeading";

const groups = [
  { icon: Code2, tint: "--tint-frontend", title: "Frontend & Mobile", desc: "Interfaces modernas e responsivas", items: ["React Native", "React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { icon: Database, tint: "--tint-backend", title: "Backend & APIs", desc: "Arquitetura robusta e escalável", items: ["Node.js", "Express", "Fastify", "PostgreSQL", "Redis"] },
  { icon: Cloud, tint: "--tint-infra", title: "Infraestrutura", desc: "Deploy e monitoramento em nuvem", items: ["AWS", "Google Cloud", "Docker", "Kubernetes", "Vercel"] },
  { icon: Zap, tint: "--tint-realtime", title: "Tempo Real", desc: "Comunicação instantânea e sincronizada", items: ["WebSockets", "Socket.io", "Server-Sent Events", "WebRTC"] },
  { icon: Shield, tint: "--tint-security", title: "Segurança", desc: "Proteção contra fraudes e trapaças", items: ["JWT", "OAuth", "Rate Limiting", "Encryption", "Anti-Cheat"] },
  { icon: Users, tint: "--tint-ux", title: "Experiência do Usuário", desc: "Ferramentas para engajamento", items: ["Analytics", "A/B Testing", "Push Notifications", "Chatwoot", "Sentry"] },
];

export function Technologies() {
  return (
    <section id="tecnologia" className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-brand opacity-30" />
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Stack"
          title={
            <>
              <span className="text-gradient">Tecnologias</span> de Ponta
            </>
          }
          subtitle="Usamos as melhores ferramentas e frameworks para garantir performance, escalabilidade e segurança em todos os projetos."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map(({ icon: Icon, tint, title, desc, items }) => (
            <article
              key={title}
              style={{ ["--tint" as string]: `var(${tint})` }}
              className="group rounded-3xl border border-border bg-card p-7 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-[color-mix(in_oklab,var(--tint)_45%,transparent)]"
            >
              <span className="mb-6 grid size-14 place-items-center rounded-2xl bg-[var(--tint)] text-foreground shadow-[0_12px_30px_-12px_var(--tint)]">
                <Icon className="size-6" />
              </span>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground">{desc}</p>
              <ul className="mt-6 space-y-2.5">
                {items.map((i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-foreground/90">
                    <span className="size-1.5 rounded-full bg-[var(--tint)]" />
                    {i}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="relative mt-20 overflow-hidden rounded-3xl border border-border bg-gradient-band p-10 text-center md:p-14">
          <div className="absolute inset-0 grid-lines opacity-50" />
          <div className="relative">
            <h3 className="text-2xl font-bold sm:text-3xl">Pronto para começar seu projeto?</h3>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Nossa equipe está preparada para transformar sua ideia em uma plataforma profissional usando as melhores
              tecnologias do mercado.
            </p>
            <Button asChild variant="hero" size="xl" className="mt-8">
              <a href="#contato">Falar com especialista</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
