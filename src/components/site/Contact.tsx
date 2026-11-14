import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SectionHeading } from "./SectionHeading";
import { contactInfo } from "./contact-info";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Novo projeto — ${form.name}${form.company ? ` (${form.company})` : ""}`;
    const body = `${form.message}\n\n— ${form.name}\n${form.email}${form.company ? `\n${form.company}` : ""}`;
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  const set = (k: keyof typeof form) => (e: { target: { value: string } }) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const items = [
    { icon: Mail, label: "E-mail", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
    { icon: Phone, label: "Telefone", value: contactInfo.phone },
    { icon: MapPin, label: "Localização", value: contactInfo.location },
  ];

  return (
    <section id="contato" className="py-28">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Vamos conversar"
          title={<span className="text-gradient">Contato</span>}
          subtitle="Entre em contato para discutir seu projeto."
        />
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold">Fale conosco</h3>
            <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">
              Estamos prontos para transformar sua ideia em uma plataforma incrível. Conte para a gente sobre o seu
              projeto.
            </p>
            <ul className="mt-10 space-y-6">
              {items.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-center gap-4">
                  <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-primary-foreground shadow-glow">
                    <Icon className="size-5" />
                  </span>
                  <div>
                    <p className="font-semibold">{label}</p>
                    {href ? (
                      <a href={href} className="text-sm text-muted-foreground hover:text-primary">
                        {value}
                      </a>
                    ) : (
                      <p className="text-sm text-muted-foreground">{value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="rounded-3xl border border-border bg-card p-7 shadow-card md:p-9">
            <h3 className="mb-6 text-xl font-semibold">Envie sua mensagem</h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Nome *</Label>
                <Input id="name" required maxLength={100} value={form.name} onChange={set("name")} placeholder="Seu nome completo" className="h-12 rounded-xl bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">E-mail *</Label>
                <Input id="email" type="email" required maxLength={255} value={form.email} onChange={set("email")} placeholder="seu@email.com" className="h-12 rounded-xl bg-background" />
              </div>
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="company">Empresa (opcional)</Label>
              <Input id="company" maxLength={100} value={form.company} onChange={set("company")} placeholder="Nome da sua empresa" className="h-12 rounded-xl bg-background" />
            </div>
            <div className="mt-5 space-y-2">
              <Label htmlFor="message">Mensagem *</Label>
              <Textarea id="message" required maxLength={2000} value={form.message} onChange={set("message")} placeholder="Conte-nos sobre seu projeto..." className="min-h-36 rounded-xl bg-background" />
            </div>
            <Button type="submit" variant="hero" size="xl" className="mt-7 w-full">
              <Send /> Enviar mensagem
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
