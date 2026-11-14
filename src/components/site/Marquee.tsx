const games = ["Truco", "Poker", "Buraco", "Tranca", "Cacheta", "Blackjack", "Pife", "Sueca", "Copas", "Paciência"];
const suits = ["♠", "♥", "♦", "♣"];

export function Marquee() {
  const row = [...games, ...games];
  return (
    <div className="relative overflow-hidden border-y border-border py-7 [mask-image:linear-gradient(90deg,transparent,black_12%,black_88%,transparent)]">
      <div className="flex w-max animate-marquee items-center gap-10">
        {row.map((g, i) => (
          <span key={i} className="flex items-center gap-10 font-serif-display text-3xl text-foreground/80 italic md:text-4xl">
            {g}
            <span className="text-xl not-italic text-gold/70">{suits[i % 4]}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
