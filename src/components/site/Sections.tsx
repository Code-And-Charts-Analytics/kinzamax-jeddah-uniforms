import { Reveal, ImagePlaceholder } from "./Reveal";

const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Orders Completed" },
  { value: "100%", label: "In-House Production" },
  { value: "72hrs", label: "Sample Turnaround" },
];

export function StatsBar() {
  return (
    <section className="bg-navy">
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-12 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className={`px-4 py-5 text-center ${
              i > 0 ? "lg:border-l lg:border-white/20" : ""
            } ${i % 2 === 1 ? "border-l border-white/20 lg:border-l" : ""}`}
          >
            <div className="heading-xl text-4xl text-brand-orange sm:text-5xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs tracking-brand text-stat-label uppercase">
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

const aboutCards = [
  {
    icon: "🏭",
    title: "In-House Manufacturing",
    body: "Two production facilities in Jeddah",
  },
  {
    icon: "✂️",
    title: "Full Customization",
    body: "Every detail yours to define",
  },
  {
    icon: "⚡",
    title: "Fast Local Delivery",
    body: "7-14 days, no imports, no delays",
  },
];

export function About() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <span className="section-tag">Who We Are</span>
            <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-4xl lg:text-5xl">
              Jeddah's Leading Uniform Manufacturer.
            </h2>
            <div className="mt-7 space-y-5 text-base leading-relaxed text-muted-text">
              <p>
                Kinzamax (Roshan Zameer Trading Est.) is a Jeddah-based uniform
                manufacturing company with over 10 years of experience supplying
                corporate, industrial, hospitality, and healthcare clients across
                the Kingdom of Saudi Arabia.
              </p>
              <p>
                Unlike importers and resellers, we own every step — fabric
                selection, cutting, stitching, embroidery, printing, quality
                control, and delivery — all under our own roof in Jeddah.
              </p>
              <p>
                This means faster turnaround, tighter quality, and full
                customization that no importer can match.
              </p>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <ImagePlaceholder
              label="Factory / Production Photo"
              className="h-72 w-full lg:h-96"
            />
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {aboutCards.map((card) => (
                <div
                  key={card.title}
                  className="border border-border bg-bg-light p-5"
                >
                  <div className="text-2xl">{card.icon}</div>
                  <h3 className="mt-3 text-sm font-bold text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-text">{card.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const products = [
  {
    icon: "🏭",
    title: "Industrial Workwear",
    body: "Coveralls, cargo workwear, safety uniforms, reflective strips, FR-grade fabrics. Triple-stitched, SASO compliant.",
  },
  {
    icon: "🏢",
    title: "Corporate & Office",
    body: "Branded polos, formal shirts, blazers, reception uniforms. Any Pantone color, embroidery badge standard.",
  },
  {
    icon: "🏨",
    title: "Hospitality Uniforms",
    body: "Chef jackets, waiter uniforms, aprons, housekeeping sets. Complete F&B and hotel programs.",
  },
  {
    icon: "🏥",
    title: "Healthcare & Scrubs",
    body: "Medical scrubs, lab coats, clinic wear. Antimicrobial fabric, color-coded by department.",
  },
  {
    icon: "🦺",
    title: "Safety & Hi-Vis",
    body: "EN 471 / SASO compliant hi-vis vests and coveralls. Reflective strips, reinforced pockets.",
  },
  {
    icon: "🎓",
    title: "School & Education",
    body: "Full school programs, boys and girls. Embroidered school crest, durable fabric, bulk pricing.",
  },
  {
    icon: "🛒",
    title: "Retail & Supermarket",
    body: "Staff polos, aprons, caps, service uniforms. Fast turnaround for large retail chains.",
  },
  {
    icon: "🔒",
    title: "Security Uniforms",
    body: "Dark navy jackets, epaulettes, badge panels. Professional and authoritative finish.",
  },
];

export function Products() {
  return (
    <section id="products" className="bg-bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="section-tag">Our Products</span>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-4xl lg:text-5xl">
            Every Industry. Every Specification.
          </h2>
          <p className="mt-4 text-base text-muted-text">
            From industrial coveralls to hotel lobby uniforms — manufactured
            in-house to your exact specification.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, i) => (
            <Reveal
              key={product.title}
              delay={(i % 4) * 80}
              className="h-full"
            >
              <article className="h-full border border-border bg-background transition-shadow hover:shadow-xl">
                <div className="h-[3px] w-full bg-brand-orange" />
                <div className="p-6">
                  <div className="text-3xl">{product.icon}</div>
                  <h3 className="mt-4 text-base font-bold text-navy">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">
                    {product.body}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const capabilities = [
  ["Custom Sizing", "XS to 6XL including individual measurements"],
  ["Fabric Selection", "Twill, drill, pique, dri-fit, antimicrobial, FR-grade"],
  ["Color Matching", "Any Pantone or RAL, exact brand color guaranteed"],
  ["Embroidery", "Logo, text, badge, up to 3 placements per garment"],
  ["Screen & DTF Printing", "Wash-resistant, fade-proof, full-color capability"],
  ["Woven Inner Label", "KMAX branded label on every piece"],
  ["Digital Mockup", "Full design preview before production begins"],
  ["2-Year Warranty", "All stitching, print, and embroidery guaranteed"],
];

export function Customization() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1.2fr_1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <h2 className="heading-xl text-3xl text-white sm:text-4xl lg:text-5xl">
            Every Thread. Your Brand.
          </h2>
          <p className="mt-4 text-sm font-bold tracking-brand text-brand-orange uppercase">
            Full Customization Available on Every Order
          </p>
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {capabilities.map(([title, body]) => (
              <li key={title} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-brand-orange" />
                <div>
                  <p className="text-sm font-bold text-white">{title}</p>
                  <p className="mt-1 text-sm text-white/60">{body}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <ImagePlaceholder
            label="Customization / Embroidery Close-Up Photo"
            className="h-full min-h-[320px] w-full"
          />
        </Reveal>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Enquiry & Specs", "Share requirements, quantity, sizes, logo files, colors"],
  ["02", "Official Quotation", "Formal PDF within 24 hours"],
  ["03", "Digital Mockup", "Design preview approved before production"],
  ["04", "Physical Sample", "Pre-production sample for quality confirmation"],
  ["05", "Production", "Manufactured in Jeddah with QC at every stage"],
  ["06", "QC & Delivery", "Every piece checked before delivery to your door"],
];

export function Process() {
  return (
    <section id="process" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="section-tag">Our Process</span>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-4xl lg:text-5xl">
            From Enquiry to Delivery
          </h2>
          <p className="mt-4 text-sm font-bold tracking-brand text-brand-orange uppercase">
            6 simple steps — transparent, fast, and professional
          </p>
        </Reveal>

        <ol className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-6 lg:gap-6">
          {steps.map(([num, title, body], i) => (
            <Reveal as="li" key={num} delay={i * 70} className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-base font-bold text-white">
                {num}
              </div>
              <h3 className="mt-5 text-sm font-bold text-navy">{title}</h3>
              <p className="mt-2 text-sm text-muted-text">{body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

const industries = [
  ["🏨", "Hotels & Resorts", "Housekeeping, F&B, engineering, concierge"],
  ["🍽️", "Restaurants & Cafes", "Chef, waiter, barista, branded aprons"],
  ["🏥", "Hospitals & Clinics", "Scrubs, lab coats, reception, pharmacy"],
  ["🏗️", "Construction & FM", "Safety coveralls, hi-vis, industrial PPE"],
  ["🏢", "Corporate Offices", "Polos, shirts, blazers, reception"],
  ["🛒", "Retail & Supermarkets", "Staff uniforms, aprons, caps"],
  ["🎓", "Schools & Institutes", "Full programs, boys, girls, staff"],
  ["🔒", "Security Companies", "Jackets, epaulettes, badge panels"],
  ["🚗", "Automotive & Dealerships", "Mechanic coveralls, technician workwear"],
  ["🏛️", "Government Contractors", "Tender-compliant workwear, branded uniforms"],
];

export function Industries() {
  return (
    <section id="industries" className="bg-bg-light py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="max-w-2xl">
          <span className="section-tag">Industries</span>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-4xl lg:text-5xl">
            Industries We Serve
          </h2>
        </Reveal>
        <ul className="mt-12 grid gap-x-14 md:grid-cols-2">
          {industries.map(([icon, name, body], i) => (
            <Reveal
              as="li"
              key={name}
              delay={(i % 2) * 60}
              className="flex items-start gap-4 border-b border-bg-mid py-5"
            >
              <span className="text-2xl">{icon}</span>
              <div>
                <h3 className="text-base font-bold text-navy">{name}</h3>
                <p className="mt-1 text-sm text-muted-text">{body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

const reasons = [
  [
    "100% In-House Manufacturing",
    "No middlemen. We own every step. Faster turnaround, tighter quality.",
  ],
  ["Full Size Flexibility", "XS to 6XL. No standard-size limitations."],
  [
    "Fastest Local Turnaround",
    "Based in Jeddah. 7-10 days readymade, 10-14 days custom.",
  ],
  [
    "2-Year Warranty",
    "All manufacturing defects on stitch, print, embroidery.",
  ],
  ["Digital Mockup First", "You approve the exact design before production."],
  [
    "Corporate Credit Terms",
    "Net 30 available with official Purchase Order.",
  ],
];

export function WhyKinzamax() {
  return (
    <section className="bg-navy py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal>
          <h2 className="heading-xl text-3xl text-brand-orange sm:text-4xl lg:text-5xl">
            Why Kinzamax?
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map(([title, body], i) => (
            <Reveal key={title} delay={(i % 3) * 80} className="h-full">
              <div className="h-full bg-navy-card p-7">
                <span className="text-lg font-bold text-brand-orange">✓</span>
                <h3 className="mt-3 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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