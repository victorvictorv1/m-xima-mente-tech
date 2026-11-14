import emblem from "@/assets/logo-mind-emblem.png";

/* Brand logo: head-with-MM-card symbol (image) + live text name, so the name stays crisp and easy to restyle. */
export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-2" aria-label="MáximaMente Tech — início">
      <img
        src={emblem}
        alt=""
        width={176}
        height={192}
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col items-start leading-none">
        <span className="text-[16px] font-medium tracking-[0.005em] text-foreground">
          Máxima<span className="text-logo-tech">Mente</span>
        </span>
        <span className="mt-1 pl-px font-mono text-[8px] font-medium tracking-[0.34em] text-tech-cyan uppercase">
          Tech
        </span>
      </span>
    </a>
  );
}
