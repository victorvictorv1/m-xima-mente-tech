import { Logo } from "./Logo";
import { navLinks } from "./nav-links";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 md:flex-row md:items-center md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-muted-foreground">Tecnologia para jogos de cartas online.</p>
        </div>
        <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="md:text-right">
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} MáximaMente Tech.</p>
          <p className="mt-1 text-xs text-muted-foreground">Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
