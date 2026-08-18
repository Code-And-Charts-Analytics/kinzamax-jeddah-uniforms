import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import logoAsset from "@/assets/kmax-logo-white.png.asset.json";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Home", to: "/" },
  { label: "Products", to: "/products" },
  { label: "Industries", to: "/industries" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "bg-navy shadow-lg" : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 lg:px-10">
        <Link to="/" onClick={() => setOpen(false)} className="flex items-center">
          <img
            src={logoAsset.url}
            alt="KINZAMAX KMAX uniform manufacturer logo"
            width={200}
            height={106}
            className="h-10 w-auto"
          />
        </Link>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="border-b-2 border-transparent pb-1 text-[13px] font-semibold tracking-wide-brand text-white uppercase transition-colors hover:text-brand-orange"
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
            className="hidden bg-brand-orange px-6 py-3 text-[13px] font-bold tracking-wide-brand text-white uppercase transition-opacity hover:opacity-90 sm:inline-block"
          >
            Get a Quote
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
        <div className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-navy pattern-diagonal lg:hidden">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="text-lg font-bold tracking-brand text-white uppercase"
              activeProps={{ className: "text-brand-orange" }}
              activeOptions={{ exact: link.to === "/" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setOpen(false)}
            className="bg-brand-orange px-8 py-4 text-[13px] font-bold tracking-wide-brand text-white uppercase"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
