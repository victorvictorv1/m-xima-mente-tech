import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Technologies } from "@/components/site/Technologies";
import { Faq } from "@/components/site/Faq";
import { Stats } from "@/components/site/Stats";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "MáximaMente Tech — Aplicações e plataformas de nível profissional";
const description =
  "Desenvolvemos apps mobile e web, back-end escalável em tempo real, anti-cheat e Live Ops para plataformas de sucesso.";

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
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <Technologies />
        <Faq />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
