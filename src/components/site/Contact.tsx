import { useState, type FormEvent } from "react";
import { ArrowUpRight, Mail, MessageCircle, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactInfo } from "./contact-info";

const field = "h-12 rounded-xl border-border bg-background/60";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", game: "", message: "" });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Projeto de jogo — ${form.name}`;
    const body = `${form.message}\n\nJogo: ${form.game || "—"}\n— ${form.name}\n${form.email}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contato" className="px-5 pb-28">
      <div className="bento bento-glow mx-auto grid max-w-6xl gap-12 p-8 md:p-14 lg:grid-cols-2">
        <div className="dot-grid absolute inset-0 opacity-30 [mask-image:linear-gradient(to_right,black,transparent_60%)]" />
        <div className="relative">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold">♠ Contato</p>
          <h2 className="mt-4 text-4xl leading-[1.05] font-light md:text-6xl">
            Vamos dar <span className="font-serif-display italic text-gradient">as cartas?</span>
          </h2>
          <p className="mt-6 max-w-md text-muted-foreground">
            Conte sua ideia em poucas linhas. Respondemos em até um dia útil com os próximos passos.
          </p>
          <ul className="mt-10 space-y-4">
            {[
              { icon: Mail, v: contactInfo.email, href: `mailto:${contactInfo.email}` },
              { icon: MessageCircle, v: contactInfo.phone },
              { icon: MapPin, v: contactInfo.location },
            ].map(({ icon: Icon, v, href }) => (
              <li key={v} className="flex items-center gap-4">
                <span className="grid size-11 place-items-center rounded-full border border-border bg-surface-2">
                  <Icon className="size-4 text-primary" />
                </span>
                {href ? (
                  <a href={href} className="text-foreground/90 hover:text-primary">{v}</a>
                ) : (
                  <span className="text-foreground/90">{v}</span>
                )}
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={onSubmit} className="relative space-y-5 rounded-3xl border border-border bg-surface/80 p-6 md:p-8">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Seu nome</Label>
              <Input id="name" required maxLength={100} value={form.name} onChange={set("name")} placeholder="Como podemos te chamar" className={field} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" required maxLength={255} value={form.email} onChange={set("email")} placeholder="voce@email.com" className={field} />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="game">Que jogo você quer criar?</Label>
            <Input id="game" maxLength={100} value={form.game} onChange={set("game")} placeholder="Ex.: truco online com torneios" className={field} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Conte um pouco mais</Label>
            <Textarea id="message" required maxLength={2000} value={form.message} onChange={set("message")} placeholder="Público, plataformas, prazo..." className="min-h-32 rounded-xl border-border bg-background/60" />
          </div>
          <Button type="submit" variant="lavender" size="xl" className="w-full">
            Enviar mensagem <ArrowUpRight />
          </Button>
        </form>
      </div>
    </section>
  );
}
