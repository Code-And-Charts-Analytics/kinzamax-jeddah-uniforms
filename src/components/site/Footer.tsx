import logo from "@/assets/kmax-logo.png";

const quickLinks = [
  ["About", "#about"],
  ["Products", "#products"],
  ["Industries", "#industries"],
  ["Process", "#process"],
  ["Contact", "#contact"],
  ["Get a Quote", "#contact"],
];

export function Footer() {
  return (
    <footer className="bg-navy-alt">
      <div className="h-[3px] w-full bg-brand-orange" />
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-3 lg:px-10">
        <div>
          <span className="inline-flex rounded-md bg-white px-3 py-2">
            <img
              src={logo}
              alt="KINZAMAX KMAX logo"
              loading="lazy"
              width={140}
              height={40}
              className="h-7 w-auto"
            />
          </span>
          <p className="mt-5 text-sm font-bold tracking-brand text-brand-orange uppercase">
            Work-Wear Redefined
          </p>
          <p className="mt-3 max-w-xs text-sm text-white/60">
            Custom uniform manufacturing under one roof in Jeddah — corporate,
            industrial, hospitality and healthcare.
          </p>
        </div>

        <nav aria-label="Footer">
          <h2 className="text-xs font-bold tracking-brand text-white uppercase">
            Quick Links
          </h2>
          <ul className="mt-5 space-y-3">
            {quickLinks.map(([label, href]) => (
              <li key={label}>
                <a
                  href={href}
                  className="text-sm text-white/60 transition-colors hover:text-brand-orange"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold tracking-brand text-white uppercase">
            Contact
          </h2>
          <ul className="mt-5 space-y-3 text-sm text-white/60">
            <li>Gharnatah Street, Mishrifah District, Aziziyah, Jeddah 23342, KSA</li>
            <li>
              <a href="tel:+966530717861" className="hover:text-brand-orange">
                +966 53 071 7861
              </a>
            </li>
            <li>
              <a href="mailto:info@kinzamax.com" className="hover:text-brand-orange">
                info@kinzamax.com
              </a>
            </li>
            <li>www.kinzamax.com</li>
            <li>VAT: 300486407700003</li>
          </ul>
        </div>
      </div>

      <div className="bg-navy">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-center text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between lg:px-10">
          <p>
            © 2026 Kinzamax — Roshan Zameer Trading Est. · VAT: 300486407700003 ·
            Jeddah, KSA
          </p>
          <p className="text-brand-orange">kinzamax.com</p>
        </div>
      </div>
    </footer>
  );
}