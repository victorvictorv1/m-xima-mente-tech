import { Logo } from "./Logo";

const cols = [
  { title: "Empresa", links: [["Sobre nós", "#inicio"], ["Tecnologia", "#tecnologia"], ["FAQ", "#faq"], ["Contato", "#contato"]] },
  { title: "Serviços", links: [["Desenvolvimento Mobile", "#servicos"], ["Back-end & Infraestrutura", "#servicos"], ["Live Ops", "#servicos"], ["Consultoria", "#contato"]] },
  { title: "Legal", links: [["Política de Privacidade", "#"], ["Termos de Uso", "#"], ["Contratos", "#"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-[1.5fr_1fr_1fr_1fr] md:px-8">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Desenvolvemos aplicativos e plataformas digitais de nível profissional.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <p className="mb-4 font-display font-semibold">{c.title}</p>
            <ul className="space-y-3">
              {c.links.map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-6 text-sm text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} MáximaMente Tech. Todos os direitos reservados.</p>
          <p className="font-mono text-xs">feito com mente máxima ✦</p>
        </div>
      </div>
    </footer>
  );
}
