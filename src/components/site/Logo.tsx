/* Brand mark: two fanned cards; the front one carries a gold diamond wired like a chip. */
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
        <linearGradient id="mm-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="oklch(0.88 0.08 85)" />
          <stop offset="100%" stopColor="oklch(0.66 0.1 70)" />
        </linearGradient>
      </defs>
      <rect x="6" y="9" width="19" height="27" rx="4" transform="rotate(-14 15.5 22.5)" fill="url(#mm-back)" />
      <rect x="16" y="7" width="20" height="28" rx="4" transform="rotate(10 26 21)" fill="url(#mm-front)" stroke="oklch(1 0 0 / 0.5)" strokeWidth="0.6" />
      <g transform="rotate(10 26 21)">
        <path d="M26 11.5v2.5M26 28v2.5M19.5 21h2M30.5 21h2" stroke="var(--card-ink)" strokeWidth="1" strokeLinecap="round" opacity="0.7" />
        <circle cx="26" cy="11" r="1.1" fill="var(--card-ink)" />
        <circle cx="26" cy="31" r="1.1" fill="var(--card-ink)" />
        <path d="M26 14 L30.5 21 L26 28 L21.5 21 Z" fill="url(#mm-gold)" />
        <path d="M26 17.5 L28.3 21 L26 24.5 L23.7 21 Z" fill="var(--card-red)" />
      </g>
    </svg>
  );
}

/* Wordmark: "MM" monogram with a small sparkle, "TECH" set between hairlines underneath. */
export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5" aria-label="MáximaMente Tech — início">
      <span className="transition-transform duration-500 group-hover:-rotate-6">
        <LogoMark />
      </span>
      <span className="flex flex-col items-center leading-none">
        <span className="relative font-brand text-[22px] font-semibold tracking-[0.02em]">
          MM
          <svg viewBox="0 0 10 10" className="absolute -top-1.5 -right-2.5 size-2.5 text-gold" aria-hidden>
            <path d="M5 0 C5.4 3.6 6.4 4.6 10 5 C6.4 5.4 5.4 6.4 5 10 C4.6 6.4 3.6 5.4 0 5 C3.6 4.6 4.6 3.6 5 0Z" fill="currentColor" />
          </svg>
        </span>
        <span className="mt-1.5 flex items-center gap-1.5">
          <span className="h-px w-2.5 bg-gold/60" />
          <span className="-mr-[0.45em] font-mono text-[8.5px] font-medium tracking-[0.45em] text-gold uppercase">Tech</span>
          <span className="h-px w-2.5 bg-gold/60" />
        </span>
      </span>
    </a>
  );
}
