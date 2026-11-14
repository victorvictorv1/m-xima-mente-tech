export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2.5" aria-label="MáximaMente Tech — início">
      <span className="grid size-9 place-items-center rounded-xl bg-lavender shadow-lavender">
        <svg viewBox="0 0 24 24" className="size-[18px] fill-primary-foreground transition-transform duration-500 group-hover:scale-110" aria-hidden>
          <path d="M12 2.5c-1.2 2.2-7 5.6-7 9.6 0 2.4 1.9 4 4 4 1 0 1.9-.4 2.5-1-.3 1.9-1 3.4-2.3 4.9h5.6c-1.3-1.5-2-3-2.3-4.9.6.6 1.5 1 2.5 1 2.1 0 4-1.6 4-4 0-4-5.8-7.4-7-9.6Z" />
        </svg>
      </span>
      <span className="text-[17px] font-medium tracking-tight">
        MáximaMente<span className="font-serif-display text-[19px] italic text-primary"> Tech</span>
      </span>
    </a>
  );
}
