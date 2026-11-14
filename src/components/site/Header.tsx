import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#estudio", label: "Estúdio" },
  { href: "#processo", label: "Processo" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <div
        className={cn(
          "mx-auto flex h-16 max-w-6xl items-center justify-between rounded-full pr-2 pl-5 transition-all duration-500",
          scrolled ? "glass shadow-[0_20px_50px_-25px_oklch(0_0_0/80%)]" : "border border-transparent",
        )}
      >
        <Logo />
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild variant="lavender" size="lg" className="px-6">
            <a href="#contato">Começar projeto</a>
          </Button>
        </div>
        <button
          className="grid size-11 place-items-center rounded-full text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
      {open && (
        <div className="glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block rounded-2xl px-4 py-3 text-muted-foreground hover:bg-surface-2 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button asChild variant="lavender" size="lg" className="mt-2 w-full">
            <a href="#contato" onClick={() => setOpen(false)}>
              Começar projeto
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
