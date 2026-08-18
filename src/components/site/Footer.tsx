import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/kmax-logo-white.png.asset.json";

const navigation = [
  ["Home", "/"],
  ["Products", "/products"],
  ["Industries", "/industries"],
  ["About", "/about"],
  ["Contact", "/contact"],
  ["Get a Quote", "/contact"],
] as const;

const productLinks = [
  "Industrial Workwear",
  "Corporate & Office",
  "Hospitality Uniforms",
  "Healthcare & Scrubs",
  "Safety & Hi-Vis",
  "School Uniforms",
];

export function Footer() {
  return (
    <footer className="bg-navy-alt">
      <div className="h-[3px] w-full bg-brand-orange" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-20 pb-10 md:grid-cols-2 lg:grid-cols-4 lg:px-10">
        <div>
          <img
            src={logoAsset.url}
            alt="KINZAMAX KMAX logo"
            loading="lazy"
            width={200}
            height={106}
            className="h-12 w-auto"
          />
          <p className="mt-5 text-[13px] font-bold tracking-brand text-brand-orange uppercase">
            Work-Wear Redefined
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-stat-label">
            Premium uniform manufacturing in Jeddah, KSA. Est. 2014.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h2 className="text-xs font-bold tracking-brand text-brand-orange uppercase">
            Navigation
          </h2>
          <ul className="mt-5 space-y-3">
            {navigation.map(([label, to]) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-stat-label transition-colors hover:text-brand-orange"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-brand text-brand-orange uppercase">
            Products
          </h2>
          <ul className="mt-5 space-y-3">
            {productLinks.map((label) => (
              <li key={label}>
                <Link
                  to="/products"
                  className="text-sm text-stat-label transition-colors hover:text-brand-orange"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-bold tracking-brand text-brand-orange uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-stat-label">
            <li>📍 Jeddah, KSA</li>
            <li>
              <a href="tel:+966530717861" className="hover:text-brand-orange">
                📞 +966 53 071 7861
              </a>
            </li>
            <li>
              <a href="mailto:info@kinzamax.com" className="hover:text-brand-orange">
                ✉ info@kinzamax.com
              </a>
            </li>
            <li>🌐 kinzamax.com</li>
            <li>VAT: 300486407700003</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy">
        <div className="mx-auto max-w-7xl px-5 py-6 text-center text-xs text-stat-label lg:px-10">
          © 2026 Kinzamax — Roshan Zameer Trading Est. · Jeddah, Saudi Arabia · All
          Rights Reserved
        </div>
      </div>
    </footer>
  );
}
