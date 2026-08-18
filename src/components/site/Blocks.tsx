import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export function SectionTag({ children }: { children: string }) {
  return (
    <span className="block text-[11px] font-bold tracking-brand text-brand-orange uppercase">
      {children}
    </span>
  );
}

export function PageHero({
  tag,
  title,
  subtitle,
  short = false,
}: {
  tag: string;
  title: string;
  subtitle: string;
  short?: boolean;
}) {
  return (
    <section
      className={cn(
        "relative flex items-center justify-center bg-navy pattern-diagonal px-5 pt-[72px]",
        short ? "h-[320px]" : "h-[360px]",
      )}
    >
      <div className="mx-auto max-w-3xl text-center">
        <SectionTag>{tag}</SectionTag>
        <h1 className="heading-xl mt-5 text-3xl text-white uppercase sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-stat-label">{subtitle}</p>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-[3px] bg-brand-orange" />
    </section>
  );
}

const marqueeItems = [
  "Custom Manufacturing",
  "Embroidery",
  "Screen Printing",
  "DTF Printing",
  "Bulk Orders",
  "Fast Delivery",
  "XS to 6XL",
  "Jeddah KSA",
  "ISO Compliant",
  "2-Year Warranty",
];

export function Marquee() {
  return (
    <div className="overflow-hidden bg-navy-alt py-4">
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0" aria-hidden={copy === 1}>
            {marqueeItems.map((item) => (
              <span
                key={item}
                className="flex items-center gap-6 px-6 text-xs font-semibold tracking-brand text-white uppercase whitespace-nowrap"
              >
                {item}
                <span className="text-brand-orange">·</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export const stats = [
  { value: "10+", label: "Years in Business" },
  { value: "500+", label: "Orders Completed" },
  { value: "100%", label: "In-House Production" },
  { value: "72hrs", label: "Sample Turnaround" },
];

export function StatsBar({ light = false }: { light?: boolean }) {
  return (
    <section className={light ? "bg-bg-light" : "bg-navy"}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 py-[60px] lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <Reveal
            key={stat.label}
            delay={i * 80}
            className={cn(
              "group px-4 py-5 text-center",
              i > 0 && "lg:border-l",
              i % 2 === 1 && "border-l",
              light ? "border-bg-mid" : "border-white/15",
            )}
          >
            <div className="heading-xl text-4xl text-brand-orange transition-opacity group-hover:opacity-80 sm:text-5xl">
              {stat.value}
            </div>
            <div
              className={cn(
                "mt-2 text-[13px] tracking-brand uppercase",
                light ? "text-muted-text" : "text-stat-label",
              )}
            >
              {stat.label}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export function CtaBanner() {
  return (
    <section className="bg-brand-orange py-20">
      <Reveal className="mx-auto max-w-3xl px-5 text-center">
        <h2 className="heading-xl text-3xl text-white uppercase sm:text-4xl">
          Ready to Outfit Your Team?
        </h2>
        <p className="mt-5 text-base leading-relaxed text-white/70">
          Get a custom quote within 24 hours. No commitment. No guesswork. Just
          professional uniforms delivered to your door.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-white px-8 py-4 text-[13px] font-bold tracking-wide-brand text-brand-orange uppercase transition-opacity hover:opacity-90"
        >
          Request a Quote
        </Link>
        <p className="mt-5 text-sm text-white">
          Or WhatsApp us directly:{" "}
          <a href="https://wa.me/966530717861" className="font-bold underline">
            +966 53 071 7861
          </a>
        </p>
      </Reveal>
    </section>
  );
}

export function CountUpStats() {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-bg-light py-20" ref={ref}>
      <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-10">
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            className={cn(
              "px-4 py-5 text-center",
              i > 0 && "lg:border-l",
              i % 2 === 1 && "border-l",
              "border-bg-mid",
            )}
          >
            <CountUp value={stat.value} start={start} />
            <div className="mt-2 text-[13px] tracking-brand text-muted-text uppercase">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function CountUp({ value, start }: { value: string; start: boolean }) {
  const target = parseInt(value, 10);
  const suffix = value.replace(/^\d+/, "");
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame = 0;
    const total = 40;
    const id = setInterval(() => {
      frame += 1;
      setN(Math.round((target * frame) / total));
      if (frame >= total) clearInterval(id);
    }, 20);
    return () => clearInterval(id);
  }, [start, target]);

  return (
    <div className="heading-xl text-4xl text-brand-orange sm:text-5xl">
      {start ? n : 0}
      {suffix}
    </div>
  );
}
