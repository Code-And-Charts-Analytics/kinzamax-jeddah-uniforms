import { Link } from "@tanstack/react-router";
import { Reveal, ImagePlaceholder } from "./Reveal";
import { SectionTag } from "./Blocks";
import { products, industries, images } from "@/lib/site-data";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-navy-alt pt-32 pb-14">
      {/* geometric field */}
      <div className="pattern-diagonal pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,.18) 1px, transparent 1px)",
          backgroundSize: "12.5% 100%",
        }}
      />
      <div className="pointer-events-none absolute -top-24 -right-24 h-[520px] w-[520px] rotate-45 border border-brand-orange/25" />
      <div className="pointer-events-none absolute -bottom-40 -left-24 h-[420px] w-[420px] rotate-12 border border-sky/20" />
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center text-[26vw] leading-none font-extrabold tracking-tighter text-white/[0.028] uppercase">
        Kinzamax
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-brand-orange" />
          <p className="text-[11px] font-bold tracking-[3px] text-brand-orange uppercase">
            Jeddah, KSA · Est. 1977 · 47 Years of Craft
          </p>
        </div>

        <h1 className="heading-xl mt-8 text-[52px] uppercase sm:text-[80px] lg:text-[112px] xl:text-[128px]">
          <span className="block text-white">Work-Wear</span>
          <span className="block text-transparent [-webkit-text-stroke:1.5px_var(--brand-orange)]">
            Redefined
          </span>
        </h1>

        <div className="mt-10 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-[1.1fr_1fr] lg:items-end">
          <p className="max-w-xl text-base leading-[1.9] text-bg-mid/80">
            Saudi Arabia's premier manufacturer of industrial, healthcare,
            corporate and hospitality uniforms. Cut, stitched, embroidered and
            finished in our own Jeddah plant — from 100 to 100,000+ units.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="group relative overflow-hidden bg-brand-orange px-8 py-4 text-center text-sm font-bold tracking-[1.5px] text-white uppercase"
            >
              <span className="relative z-10">Request Free Sample Kit →</span>
              <span className="absolute inset-0 -translate-x-full bg-navy transition-transform duration-300 group-hover:translate-x-0" />
            </Link>
            <Link
              to="/products"
              className="border border-white/40 px-8 py-4 text-center text-sm font-bold tracking-[1.5px] text-white uppercase transition-colors hover:border-white hover:bg-white hover:text-navy-alt"
            >
              View the Collection
            </Link>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 border-t border-white/10 lg:grid-cols-4">
          {[
            ["47+", "Years Heritage"],
            ["500k+", "Garments Delivered"],
            ["100%", "In-House Jeddah Plant"],
            ["7–14", "Days Turnaround"],
          ].map(([value, label]) => (
            <div
              key={label}
              className="border-b border-white/10 py-6 pr-6 lg:border-r lg:border-b-0 lg:pl-6 lg:first:pl-0"
            >
              <span className="block text-3xl font-bold text-brand-orange">
                {value}
              </span>
              <span className="mt-2 block text-[11px] tracking-[2px] text-stat-label uppercase">
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-brand-orange" />
    </section>
  );
}


const pillars = [
  {
    title: "🏭 In-House Manufacturing",
    body: "Two production facilities in Jeddah. Everything made under one roof.",
  },
  {
    title: "✂️ Full Customization",
    body: "Fabric, color, size, embroidery, printing — every detail yours.",
  },
  {
    title: "⚡ Fast Local Delivery",
    body: "7–14 working days. No imports. No delays. Direct to your door.",
  },
];

export function AboutStrip() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <SectionTag>Who We Are</SectionTag>
            <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
              Jeddah's Leading Uniform Manufacturer.
            </h2>
            <div className="mt-5 h-[2px] w-[60px] bg-brand-orange" />
            <div className="mt-7 space-y-5 text-base leading-[1.8] text-muted-text">
              <p>
                Kinzamax (Roshan Zameer Trading Est.) is a Jeddah-based uniform
                manufacturing company with over 10 years of experience supplying
                corporate, industrial, hospitality, and healthcare clients across
                the Kingdom of Saudi Arabia.
              </p>
              <p>
                Unlike importers and resellers, we own every step — fabric
                selection, cutting, stitching, embroidery, printing, quality
                control, and delivery — all under our own roof in Jeddah. Faster
                turnaround. Tighter quality. Full customization. No compromises.
              </p>
            </div>
            <Link
              to="/about"
              className="mt-7 inline-block text-sm font-bold text-brand-orange uppercase hover:underline"
            >
              Learn More About Us →
            </Link>
          </Reveal>
          <Reveal delay={120}>
            <ImagePlaceholder
              label="ABOUT_FACTORY"
              src={images.factory}
              alt="KINZAMAX production floor in Jeddah"
              className="h-80 w-full lg:h-full lg:min-h-[420px]"
            />
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 80}>
              <div className="h-full border-l-4 border-brand-orange bg-bg-light p-8">
                <h3 className="text-base font-bold text-navy">{pillar.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-text">
                  {pillar.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProductsPreview() {
  return (
    <section className="bg-bg-light py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionTag>What We Manufacture</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
            Every Industry. Every Specification.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-text">
            From construction sites to hotel lobbies — we manufacture everything
            in-house to your exact specification.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.slice(0, 4).map((product, i) => (
            <Reveal key={product.name} delay={i * 80} className="h-full">
              <article className="flex h-full flex-col bg-background transition-shadow hover:shadow-xl">
                <div className="h-[3px] w-full bg-brand-orange" />
                <ImagePlaceholder
                  label={product.placeholder}
                  src={product.image}
                  alt={product.name}
                  className="h-44 w-full border-x-0 border-t-0"
                />
                <div className="flex flex-1 flex-col p-6">
                  <span className="text-[11px] font-bold tracking-brand text-brand-orange uppercase">
                    {product.category}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-navy">
                    {product.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">
                    {product.description}
                  </p>
                  <Link
                    to="/products"
                    className="mt-4 text-sm font-bold text-brand-orange hover:underline"
                  >
                    View Details →
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          to="/products"
          className="mt-12 block bg-brand-orange py-5 text-center text-sm font-bold tracking-wide-brand text-white uppercase transition-opacity hover:opacity-90"
        >
          View Complete Product Range →
        </Link>
      </div>
    </section>
  );
}

const reasons: [string, string][] = [
  [
    "✓ 100% In-House Manufacturing",
    "No middlemen. We own every step. This means faster turnaround and tighter quality than any importer.",
  ],
  [
    "✓ Full Size Flexibility",
    "XS to 6XL as standard — including individual measurements. No standard-size limitations.",
  ],
  [
    "✓ Fastest Local Turnaround",
    "Based in Jeddah. 7–10 days readymade. 10–14 days custom. No import delays.",
  ],
  [
    "✓ 2-Year Manufacturing Warranty",
    "All stitching, printing, and embroidery guaranteed against manufacturing defects.",
  ],
  [
    "✓ Digital Mockup First",
    "You approve the exact design on the garment before a single piece is manufactured.",
  ],
  [
    "✓ Corporate Credit Terms",
    "Net 30 available for established corporate clients with an official Purchase Order.",
  ],
];

export function WhyKinzamax() {
  return (
    <section className="bg-navy pattern-diagonal py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionTag>Why Choose Us</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-white sm:text-[42px]">
            The Kinzamax Difference.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-stat-label">
            What separates us from every other uniform supplier in Saudi Arabia.
          </p>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="h-full">
              <div className="group h-full border-l-[3px] border-brand-orange bg-navy-card p-8 transition-colors hover:bg-brand-orange">
                <h3 className="text-base font-bold text-white">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70 group-hover:text-white">
                  {body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const customization: [string, string][] = [
  ["Custom Sizing", "XS to 6XL"],
  ["Fabric Selection", "Twill, drill, pique, dri-fit, FR-grade"],
  ["Color Matching", "Any Pantone or RAL"],
  ["Embroidery", "Up to 3 placements"],
  ["Screen & DTF Printing", "Fade-proof"],
  ["Woven Inner Label", "On every piece"],
  ["Digital Mockup", "Before production"],
  ["2-Year Warranty", "All stitching"],
];

export function Customization() {
  return (
    <section className="bg-background">
      <div className="grid lg:grid-cols-2">
        <div className="bg-navy pattern-diagonal px-6 py-20 sm:px-12 lg:px-16">
          <SectionTag>Customization</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-white sm:text-[42px]">
            Every Thread. Your Brand.
          </h2>
          <p className="mt-5 max-w-lg text-base leading-[1.8] text-white/60">
            Full customization available on every order — from fabric and color
            through to embroidery, printing, and your own woven inner label.
          </p>
          <ul className="mt-10 grid gap-5 sm:grid-cols-2">
            {customization.map(([title, body]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 bg-brand-orange" />
                <span className="text-sm text-white">
                  <span className="font-bold">{title}</span>
                  <span className="text-white/60"> — {body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-navy p-5 lg:p-6">
          <ImagePlaceholder
            label="CUSTOM_EMBROIDERY"
            src={images.stitchTriple}
            alt="Triple orange contrast stitching on navy fabric"
            className="h-72 w-full lg:h-full lg:min-h-[520px]"
          />
        </div>
      </div>
    </section>
  );
}

const steps: [string, string, string][] = [
  ["01", "Enquiry & Specs", "Share requirements — type, quantity, sizes, logo files, colors, timeline"],
  ["02", "Official Quotation", "Formal PDF quotation with full pricing breakdown within 24 hours"],
  ["03", "Digital Mockup", "Full design preview on the garment — approved before production begins"],
  ["04", "Physical Sample", "Pre-production sample for quality and fit confirmation"],
  ["05", "Production", "Manufactured in Jeddah with QC supervision at every stage"],
  ["06", "QC & Delivery", "Every piece quality-checked before delivery to your door in Jeddah"],
];

export function Process() {
  return (
    <section className="bg-bg-light py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>How It Works</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
            From Enquiry to Delivery.
          </h2>
          <p className="mt-4 text-base text-muted-text">
            Six steps. Zero surprises. Professional every time.
          </p>
        </Reveal>

        <div className="relative mt-16">
          <div className="absolute top-6 right-0 left-0 hidden h-px bg-brand-orange lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
            {steps.map(([num, title, body], i) => (
              <Reveal key={num} delay={i * 70} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange text-sm font-bold text-white">
                  {num}
                </div>
                <h3 className="mt-5 text-sm font-bold text-navy uppercase">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-text">
                  {body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustriesStrip() {
  return (
    <section className="bg-navy pattern-diagonal py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <SectionTag>Industries We Serve</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-white sm:text-[42px]">
            Built for Every Sector.
          </h2>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {industries.slice(0, 5).map((industry, i) => (
            <Reveal key={industry.name} delay={i * 70}>
              <div className="h-full bg-navy-card p-6 text-center">
                <div className="text-3xl">{industry.emoji}</div>
                <h3 className="mt-3 text-sm font-bold text-white">
                  {industry.name}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/industries"
            className="inline-block border border-brand-orange px-8 py-4 text-[13px] font-bold tracking-wide-brand text-brand-orange uppercase transition-colors hover:bg-brand-orange hover:text-white"
          >
            View All Industries →
          </Link>
        </div>
      </div>
    </section>
  );
}

export function LifestyleStrip() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-3">
      {([
        ["LIFESTYLE_1", "Uniform range: polo, coverall and chef jacket", images.lineup],
        ["LIFESTYLE_2", "Woven KMAX label with orange stitch detail", images.kmaxLabel],
        ["LIFESTYLE_3", "Full KINZAMAX uniform collection flat lay", images.flatlay],
      ] as const).map(([label, alt, src]) => (
        <div key={label} className="relative h-[400px]">
          <ImagePlaceholder label={label} src={src} alt={alt} className="h-full w-full" />
          <div
            aria-label={alt}
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-alt to-transparent"
          />
        </div>
      ))}
    </section>
  );
}
