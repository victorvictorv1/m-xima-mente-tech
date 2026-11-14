/* Brand mark: two fanned cards, the front one carrying an "M" drawn as a circuit trace. */
export function LogoMark({ className = "size-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden>
      <defs>
        <linearGradient id="mm-back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="var(--primary)" />
          <stop offset="100%" stopColor="var(--violet)" />
        </linearGradient>
        <linearGradient id="mm-front" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--card-ivory)" />
          <stop offset="100%" stopColor="oklch(0.88 0.02 80)" />
        </linearGradient>
      </defs>
      <rect x="6" y="9" width="19" height="27" rx="4" transform="rotate(-14 15.5 22.5)" fill="url(#mm-back)" />
      <rect x="16" y="7" width="20" height="28" rx="4" transform="rotate(10 26 21)" fill="url(#mm-front)" stroke="oklch(1 0 0 / 0.5)" strokeWidth="0.6" />
      <g transform="rotate(10 26 21)">
        <polyline points="20,28 21.5,15 26,23 30.5,15 32,28" fill="none" stroke="var(--card-ink)" strokeWidth="2.2" strokeLinejoin="round" strokeLinecap="round" />
        <circle cx="21.5" cy="15" r="1.7" fill="var(--gold)" />
        <circle cx="30.5" cy="15" r="1.7" fill="var(--gold)" />
        <circle cx="26" cy="23" r="1.4" fill="var(--card-red)" />
      </g>
    </svg>
  );
}

export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5" aria-label="MáximaMente Tech — início">
      <span className="transition-transform duration-500 group-hover:-rotate-6">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-brand text-[17px] font-medium">MáximaMente</span>
        <span className="mt-1 font-mono text-[9.5px] tracking-[0.55em] text-primary uppercase">Tech</span>
      </span>
    </a>
  );
}
