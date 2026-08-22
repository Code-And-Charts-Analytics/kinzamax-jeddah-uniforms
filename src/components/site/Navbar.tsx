import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-navy-alt">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-baseline text-lg font-bold tracking-[3px] text-white uppercase"
        >
          Kinzamax
          <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-brand-orange" />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b-2 border-transparent pb-1 text-[13px] font-semibold tracking-[1.5px] text-white uppercase transition-colors hover:text-brand-orange"
                activeProps={{
                  className: "!border-brand-orange text-brand-orange",
                }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden bg-brand-orange px-6 py-3 text-[13px] font-bold tracking-[1.5px] text-white uppercase transition-all hover:-translate-y-0.5 hover:opacity-90 sm:inline-block"
          >
            Request Sample Kit
          </Link>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative z-50 text-white lg:hidden"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-navy-alt px-6 lg:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-lg font-bold tracking-[1.5px] text-white uppercase transition-colors hover:text-brand-orange"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-4 w-full max-w-xs bg-brand-orange px-6 py-4 text-center text-[13px] font-bold tracking-[1.5px] text-white uppercase"
          >
            Request Sample Kit
          </Link>
        </div>
      )}
    </header>
  );
}
