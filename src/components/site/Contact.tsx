import { useState, type FormEvent } from "react";
import { ArrowUpRight, AtSign, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactInfo } from "./contact-info";
import { cn } from "@/lib/utils";

const stages = ["Só uma ideia", "Tenho um protótipo", "Já está no ar"];
const platforms = ["iOS", "Android", "Web"];
const needs = ["Jogo completo", "Multiplayer", "Embaralhamento", "Servidores", "Segurança"];

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: string }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "rounded-full border px-4 py-2 text-sm transition-all",
        active
          ? "border-primary/60 bg-primary/15 text-foreground"
          : "border-border bg-background/40 text-muted-foreground hover:border-primary/30 hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
}

export function Contact() {
  const [stage, setStage] = useState(stages[0]);
  const [plats, setPlats] = useState<string[]>(["iOS", "Android"]);
  const [need, setNeed] = useState<string[]>(["Jogo completo"]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const toggle = (list: string[], set: (v: string[]) => void, v: string) =>
    set(list.includes(v) ? list.filter((x) => x !== v) : [...list, v]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Novo projeto — ${form.name}`;
    const body = [
      `Momento: ${stage}`,
      `Plataformas: ${plats.join(", ") || "—"}`,
      `Precisa de: ${need.join(", ") || "—"}`,
      "",
      form.message,
      "",
      `— ${form.name}`,
      form.email,
    ].join("\n");
    window.location.href = `mailto:${contactInfo.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section id="contato" className="px-5 pb-28">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl leading-tight font-light text-balance md:text-6xl">
          Conte sobre o <span className="font-serif-display italic text-gradient">seu jogo</span>
        </h2>
        <p className="mx-auto mt-5 max-w-md text-muted-foreground">
          Três toques e uma frase já bastam. Respondemos em até um dia útil.
        </p>
      </div>

      <form onSubmit={onSubmit} className="bento bento-glow mx-auto mt-12 max-w-4xl p-6 md:p-10">
        <div className="space-y-8">
          <fieldset>
            <legend className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">01 — Em que momento você está?</legend>
            <div className="flex flex-wrap gap-2">
              {stages.map((s) => (
                <Chip key={s} active={stage === s} onClick={() => setStage(s)}>{s}</Chip>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">02 — Onde o jogo vai rodar?</legend>
            <div className="flex flex-wrap gap-2">
              {platforms.map((p) => (
                <Chip key={p} active={plats.includes(p)} onClick={() => toggle(plats, setPlats, p)}>{p}</Chip>
              ))}
            </div>
          </fieldset>
          <fieldset>
            <legend className="mb-3 font-mono text-[11px] tracking-[0.2em] text-muted-foreground uppercase">03 — Do que você precisa?</legend>
            <div className="flex flex-wrap gap-2">
              {needs.map((n) => (
                <Chip key={n} active={need.includes(n)} onClick={() => toggle(need, setNeed, n)}>{n}</Chip>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-3 border-t border-border pt-8 sm:grid-cols-2">
            <Input aria-label="Seu nome" required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Seu nome" className="h-12 rounded-full border-border bg-background/60 px-5" />
            <Input aria-label="Seu e-mail" type="email" required maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="Seu e-mail" className="h-12 rounded-full border-border bg-background/60 px-5" />
            <Textarea aria-label="Sua ideia" required maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="Descreva sua ideia em uma ou duas frases…" className="min-h-28 rounded-3xl border-border bg-background/60 px-5 py-4 sm:col-span-2" />
          </div>

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-muted-foreground">Abre seu e-mail com tudo preenchido.</p>
            <Button type="submit" variant="lavender" size="xl">
              Enviar para a equipe <ArrowUpRight />
            </Button>
          </div>
        </div>
      </form>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <a href={`mailto:${contactInfo.email}`} className="flex items-center gap-2 hover:text-foreground">
          <AtSign className="size-4 text-gold" /> {contactInfo.email}
        </a>
        <span className="flex items-center gap-2">
          <Compass className="size-4 text-gold" /> {contactInfo.location}
        </span>
      </div>
    </section>
  );
}
