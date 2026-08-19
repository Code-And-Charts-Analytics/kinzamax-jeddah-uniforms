import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero } from "@/components/site/Blocks";
import { Reveal, ImagePlaceholder } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import logoAsset from "@/assets/kmax-logo-white.png.asset.json";

const TITLE = "Contact & Get a Quote | KINZAMAX Jeddah";
const DESCRIPTION =
  "Contact KINZAMAX in Jeddah for custom uniform quotations. Call +966 53 071 7861, WhatsApp us, or send an enquiry — we respond within 24 hours.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const details: [string,string][] = [
  [
    "Address",
    "Gharnatah Street, Mishrifah District\nAziziyah, Jeddah 23342\nKingdom of Saudi Arabia",
  ],
  ["Phone", "+966 53 071 7861"],
  ["Email", "info@kinzamax.com"],
  ["Website", "www.kinzamax.com"],
  ["VAT Number", "300486407700003"],
  [
    "Working Hours",
    "Saturday – Thursday: 9:00 AM – 6:00 PM\nFriday: Closed",
  ],
];

function ContactPage() {
  return (
    <SiteLayout>
      <PageHero
        short
        tag="Get in Touch"
        title="Let's Build Something Together."
        subtitle="We respond to all enquiries within 24 hours."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[60%_40%] lg:px-10">
          <Reveal>
            <QuoteForm />
          </Reveal>

          <Reveal delay={120}>
            <div className="bg-navy p-10">
              <img
                src={logoAsset.url}
                alt="KINZAMAX KMAX logo"
                loading="lazy"
                width={200}
                height={106}
                className="h-11 w-auto"
              />
              <h2 className="mt-8 text-sm font-bold tracking-brand text-brand-orange uppercase">
                Contact Details
              </h2>
              <div className="mt-4 h-px w-full bg-brand-orange/50" />
              <dl className="mt-7 space-y-6">
                {details.map(([label, value]) => (
                  <div key={label}>
                    <dt className="text-[11px] font-bold tracking-brand text-brand-orange uppercase">
                      {label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed whitespace-pre-line text-white">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href="https://wa.me/966530717861"
                target="_blank"
                rel="noreferrer"
                className="mt-8 block bg-whatsapp py-4 text-center text-[13px] font-bold tracking-wide-brand text-white uppercase transition-opacity hover:opacity-90"
              >
                💬 Chat on WhatsApp
              </a>
              <a
                href="tel:+966530717861"
                className="mt-4 block border border-brand-orange py-4 text-center text-[13px] font-bold tracking-wide-brand text-brand-orange uppercase transition-colors hover:bg-brand-orange hover:text-white"
              >
                📞 Call Us Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <ImagePlaceholder
        label="MAP PLACEHOLDER — Embed Google Maps here: Gharnatah Street, Mishrifah, Jeddah"
        className="h-[400px] w-full"
      />
    </SiteLayout>
  );
}
