import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import {
  StatsBar,
  About,
  Products,
  Customization,
  Process,
  Industries,
  WhyKinzamax,
} from "@/components/site/Sections";
import { QuoteSection } from "@/components/site/QuoteForm";
import { Footer } from "@/components/site/Footer";
import { Toaster } from "@/components/ui/sonner";

const TITLE =
  "Custom Uniform Manufacturer Jeddah | KINZAMAX — Work-Wear Redefined";
const DESCRIPTION =
  "Kinzamax is Jeddah's leading custom uniform manufacturer. Corporate, industrial, hospitality & healthcare uniforms. In-house production, embroidery, printing. Get a quote today.";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kinzamax — Roshan Zameer Trading Est.",
  alternateName: "KINZAMAX",
  description: DESCRIPTION,
  url: "https://www.kinzamax.com",
  telephone: "+966530717861",
  email: "info@kinzamax.com",
  foundingDate: "2014",
  vatID: "300486407700003",
  taxID: "300486407700003",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Gharnatah Street, Mishrifah District, Aziziyah",
    addressLocality: "Jeddah",
    postalCode: "23342",
    addressCountry: "SA",
  },
  areaServed: "Saudi Arabia",
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://www.kinzamax.com/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(schema),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-background text-body-text">
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <Products />
        <Customization />
        <Process />
        <Industries />
        <WhyKinzamax />
        <QuoteSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
