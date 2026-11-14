import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Technology } from "@/components/site/Technology";
import { Rng } from "@/components/site/Rng";
import { Bento } from "@/components/site/Bento";
import { Process } from "@/components/site/Process";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { useScrollReveal } from "@/components/site/motion";

const title = "MáximaMente Tech — Tecnologia para jogos de cartas online";
const description =
  "Jogos de cartas online com multiplayer em tempo real, embaralhamento seguro e servidores escaláveis para iOS, Android e Web.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useScrollReveal();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Technology />
        <Rng />
        <Bento />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
