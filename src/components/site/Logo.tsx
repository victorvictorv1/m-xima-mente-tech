import emblem from "@/assets/logo-mind-emblem.png";

/* Brand logo: head-with-MM-card symbol (image) + live text name, so the name stays crisp and easy to restyle. */
export function Logo() {
  return (
    <a href="#inicio" className="group flex items-center gap-1.5" aria-label="MáximaMente Tech — início">
      <img
        src={emblem}
        alt=""
        width={176}
        height={192}
        className="h-9 w-auto transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex flex-col items-start leading-none">
        <span className="font-brand text-[16px] font-semibold tracking-[-0.055em] text-foreground">
          Máxima<span className="text-logo-tech">Mente</span>
        </span>
        <span className="mt-1.5 font-brand text-[7px] font-semibold tracking-[0.25em] text-tech-cyan uppercase">
          Tech
        </span>
      </span>
    </a>
  );
}
