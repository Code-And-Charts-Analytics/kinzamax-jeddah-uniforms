import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHero, CtaBanner } from "@/components/site/Blocks";
import { Reveal, ImagePlaceholder } from "@/components/site/Reveal";
import { products, productFilters } from "@/lib/site-data";
import { cn } from "@/lib/utils";

const TITLE = "Uniform Products & Catalog | KINZAMAX Jeddah";
const DESCRIPTION =
  "Browse the KINZAMAX uniform catalog: industrial coveralls, corporate polos, chef jackets, medical scrubs, hi-vis, school and security uniforms — made in Jeddah.";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

const specsBanner: [string,string][] = [
  ["🧵", "Triple Stitched"],
  ["📏", "Anti-Shrink Guaranteed"],
  ["✅", "ISO Compliant"],
  ["🎨", "Color-Fast Grade 4-5"],
  ["🛡", "2-Year Warranty"],
];

function ProductsPage() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? products : products.filter((p) => p.category === filter);

  return (
    <SiteLayout>
      <PageHero
        tag="Our Products"
        title="Every Uniform. Every Industry."
        subtitle="Manufactured in-house at our Jeddah facility to your exact specification."
      />

      <div className="sticky top-[72px] z-40 border-b border-bg-mid bg-background">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2 px-5 py-4 lg:px-10">
          {productFilters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "px-5 py-2 text-[11px] font-bold tracking-brand uppercase transition-colors",
                filter === item
                  ? "bg-brand-orange text-white"
                  : "bg-bg-light text-navy hover:bg-bg-mid",
              )}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <section className="bg-bg-light py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
          {visible.map((product, i) => (
            <Reveal key={product.name} delay={(i % 3) * 80} className="h-full">
              <article className="flex h-full flex-col bg-background">
                <div className="h-[3px] w-full bg-brand-orange" />
                <ImagePlaceholder
                  label={product.placeholder}
                  className="h-52 w-full border-x-0 border-t-0"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-bold tracking-brand text-brand-orange uppercase">
                    {product.category}
                  </span>
                  <h2 className="mt-2 text-xl font-bold text-navy">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">
                    {product.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="bg-bg-light px-3 py-1 text-[11px] text-muted-text"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/contact"
                    className="mt-6 block border border-brand-orange py-3 text-center text-[11px] font-bold tracking-brand text-brand-orange uppercase transition-colors hover:bg-brand-orange hover:text-white"
                  >
                    Request Quote
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-navy py-[60px]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-5 lg:px-10">
          {specsBanner.map(([icon, label], i) => (
            <div
              key={label}
              className={cn(
                "px-4 py-5 text-center",
                i > 0 && "lg:border-l lg:border-navy-card",
              )}
            >
              <div className="text-2xl text-brand-orange">{icon}</div>
              <div className="mt-3 text-[13px] font-bold tracking-brand text-white uppercase">
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}
