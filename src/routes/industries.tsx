import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, CtaBanner } from "@/components/site/Blocks";
import { Reveal, ImagePlaceholder } from "@/components/site/Reveal";
import { industries } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TITLE = "Industries We Serve | KINZAMAX Uniforms";
const DESCRIPTION =
  "KINZAMAX supplies uniforms across hotels, hospitals, construction, corporate offices, restaurants and schools throughout the Kingdom of Saudi Arabia.";

export const Route = createFileRoute("/industries")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/industries" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/industries" }],
  }),
  component: IndustriesPage,
});

function IndustriesPage() {
  return (
    <SiteLayout>
      <PageHero
        tag="Industries"
        title="Built for Every Sector."
        subtitle="We supply uniform solutions across 10+ industries throughout the Kingdom of Saudi Arabia."
      />

      <section className="bg-background py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-5 lg:px-10">
          {industries.map((industry, i) => {
            const imageRight = i % 2 === 1;
            return (
              <Reveal key={industry.name}>
                <div className="grid items-center gap-10 lg:grid-cols-2">
                  <ImagePlaceholder
                    label={industry.placeholder}
                    src={industry.image}
                    alt={industry.name}
                    className={cn(
                      "h-[380px] w-full",
                      imageRight && "lg:order-2",
                    )}
                  />
                  <div className={cn("lg:px-6", imageRight && "lg:order-1")}>
                    <span className="text-[11px] font-bold tracking-brand text-brand-orange uppercase">
                      {industry.emoji} {industry.name}
                    </span>
                    <h2 className="heading-xl mt-4 text-[28px] text-navy">
                      {industry.name}
                    </h2>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-text">
                      {industry.description}
                    </p>
                    <ul className="mt-6 space-y-3">
                      {industry.items.map((item) => (
                        <li key={item} className="flex gap-3 text-sm text-navy">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="mt-8 inline-block bg-brand-orange px-7 py-4 text-[13px] font-bold tracking-wide-brand text-white uppercase transition-opacity hover:opacity-90"
                    >
                      Get a Quote for {industry.name}
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
