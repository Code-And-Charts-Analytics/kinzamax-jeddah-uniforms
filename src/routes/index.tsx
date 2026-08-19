import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { Marquee, StatsBar, CtaBanner } from "@/components/site/Blocks";
import {
  Hero,
  AboutStrip,
  ProductsPreview,
  WhyKinzamax,
  Customization,
  Process,
  IndustriesStrip,
  LifestyleStrip,
} from "@/components/site/HomeSections";

const TITLE = "Custom Uniform Manufacturer Jeddah | KINZAMAX";
const DESCRIPTION =
  "Kinzamax is Jeddah's leading custom uniform manufacturer. Corporate, industrial, hospitality and healthcare uniforms. In-house production, embroidery and printing. Get a quote in 24 hours.";

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Kinzamax",
  alternateName: "Roshan Zameer Trading Est.",
  description: DESCRIPTION,
  url: "https://kinzamax.com",
  telephone: "+966530717861",
  email: "info@kinzamax.com",
  foundingDate: "2014",
  vatID: "300486407700003",
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
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(schema) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <Marquee />
      <StatsBar />
      <AboutStrip />
      <ProductsPreview />
      <WhyKinzamax />
      <Customization />
      <Process />
      <IndustriesStrip />
      <LifestyleStrip />
      <CtaBanner />
    </SiteLayout>
  );
}
