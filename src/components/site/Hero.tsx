import { ImagePlaceholder } from "./Reveal";

export function Hero() {
  return (
    <section id="top" className="relative">
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col justify-center bg-navy px-6 pt-32 pb-16 sm:px-10 lg:px-16 lg:pt-24">
          <h1 className="heading-xl text-5xl tracking-brand text-white uppercase sm:text-6xl xl:text-7xl">
            Kinzamax
          </h1>
          <p className="heading-xl mt-4 text-xl tracking-brand text-brand-orange uppercase sm:text-2xl">
            Work-Wear Redefined
          </p>
          <p className="mt-6 max-w-md text-base text-white/70 sm:text-lg">
            Custom Uniform Manufacturing — Jeddah, Kingdom of Saudi Arabia
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#products"
              className="bg-brand-orange px-7 py-4 text-xs font-bold tracking-brand text-white uppercase transition-opacity hover:opacity-90"
            >
              View Catalog
            </a>
            <a
              href="#contact"
              className="border border-white px-7 py-4 text-xs font-bold tracking-brand text-white uppercase transition-colors hover:bg-white hover:text-navy"
            >
              Get a Quote
            </a>
          </div>
          <p className="mt-10 text-xs tracking-brand text-white/45 uppercase">
            Est. 2014 · Jeddah, KSA
          </p>
        </div>
        <div className="min-h-[320px] bg-navy-alt p-6 lg:min-h-full lg:p-10">
          <ImagePlaceholder
            label="Hero Product Image"
            className="h-full min-h-[280px] w-full"
          />
        </div>
      </div>
      <div className="h-[3px] w-full bg-brand-orange" />
    </section>
  );
}