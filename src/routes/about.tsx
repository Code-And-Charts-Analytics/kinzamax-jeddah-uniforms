import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import {
  PageHero,
  CtaBanner,
  CountUpStats,
  SectionTag,
} from "@/components/site/Blocks";
import { Reveal, ImagePlaceholder } from "@/components/site/Reveal";

const TITLE = "About Us — Jeddah Uniform Manufacturer | KINZAMAX";
const DESCRIPTION =
  "Founded in Jeddah in 2014, KINZAMAX manufactures uniforms in-house across two production facilities — stitched, embroidered, printed and quality-checked under one roof.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const capabilitiesLeft = [
  "Uniform Manufacturing (all types)",
  "Custom Fabric Sourcing",
  "In-House Embroidery",
  "Screen & DTF Printing",
  "Digital Design & Mockup",
  "Pre-Production Sampling",
];

const capabilitiesRight = [
  "Custom Sizing XS to 6XL",
  "Pantone Color Matching",
  "Woven Inner Labels",
  "Bulk Order Fulfillment",
  "KSA-Wide Delivery",
  "Net 30 Corporate Terms",
];

const certifications = [
  ["ISO 11612", "Flame Resistant Fabric"],
  ["EN 471", "Hi-Vis Standard"],
  ["SASO", "Saudi Standards Compliant"],
  ["Triple Stitch", "Construction Standard"],
  ["Grade 4-5", "Color Fastness Rating"],
];

const facilities = [
  [
    "Production Facility 1",
    "Industrial workwear and coverall manufacturing. Heavy-duty stitching and safety uniform production.",
    "FACILITY_PRODUCTION_1",
  ],
  [
    "Production Facility 2",
    "Corporate, hospitality, and healthcare uniform production. Embroidery and printing in-house.",
    "FACILITY_PRODUCTION_2",
  ],
  [
    "Showroom & Office",
    "Client meetings, sample viewing, and fittings. Gharnatah Street, Mishrifah, Jeddah.",
    "FACILITY_SHOWROOM",
  ],
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="About Us"
        title="10 Years. One Mission."
        subtitle="Manufacturing quality uniforms in Jeddah since 2014."
      />

      <section className="bg-background py-24">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[60%_40%] lg:gap-16 lg:px-10">
          <Reveal>
            <SectionTag>Our Story</SectionTag>
            <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
              Born in Jeddah. Built to Last.
            </h2>
            <div className="mt-5 h-[2px] w-[60px] bg-brand-orange" />
            <div className="mt-7 space-y-5 text-base leading-[1.8] text-muted-text">
              <p>
                Kinzamax was founded in Jeddah in 2014 with a simple belief: that
                every professional deserves a uniform that makes them feel
                confident, capable, and proud of where they work.
              </p>
              <p>
                What began as a small tailoring operation has grown into a
                full-service uniform manufacturing facility — covering two
                production sites in Jeddah with the capability to produce over 600
                pieces per month.
              </p>
              <p>
                We serve clients across hospitality, healthcare, construction,
                corporate, and education sectors throughout the Kingdom. Every
                order is manufactured in-house — stitched, embroidered, printed,
                and quality-checked under our own roof before it reaches you.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder
              label="ABOUT_STORY"
              className="h-80 w-full lg:h-full lg:min-h-[440px]"
            />
          </Reveal>
        </div>
      </section>

      <CountUpStats />

      <section className="bg-navy pattern-diagonal py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionTag>Capabilities</SectionTag>
            <h2 className="heading-xl mt-5 text-3xl text-white sm:text-[42px]">
              What We Can Do For You.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-16 gap-y-5 md:grid-cols-2">
            {[...capabilitiesLeft, ...capabilitiesRight].map((item) => (
              <div key={item} className="flex gap-4 text-base text-white">
                <span className="mt-3 h-px w-4 shrink-0 bg-brand-orange" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-[60px]">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <h2 className="heading-xl text-center text-2xl text-navy uppercase">
            Standards We Meet
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {certifications.map(([name, detail]) => (
              <div
                key={name}
                className="border border-navy bg-bg-light p-6 text-center"
              >
                <div className="text-sm font-bold text-navy">{name}</div>
                <div className="mt-2 text-xs text-muted-text">{detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-light py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-10">
          <Reveal className="max-w-2xl">
            <SectionTag>Our Facilities</SectionTag>
            <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
              Three Locations. One Standard.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {facilities.map(([name, body, label], i) => (
              <Reveal key={name} delay={i * 80} className="h-full">
                <div className="h-full bg-background">
                  <div className="h-[3px] w-full bg-brand-orange" />
                  <div className="p-8">
                    <ImagePlaceholder label={label} className="h-44 w-full" />
                    <h3 className="mt-6 text-base font-bold text-navy">{name}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-text">
                      {body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
