import { Reveal } from "./Reveal";
import { SectionTag } from "./Blocks";
import { cn } from "@/lib/utils";

export const clients: { name: string; logo?: string }[] = [
  { name: "Client One" },
  { name: "Client Two" },
  { name: "Client Three" },
  { name: "Client Four" },
  { name: "Client Five" },
  { name: "Client Six" },
];

export function ClientsSection({ light = false }: { light?: boolean }) {
  return (
    <section className={cn("py-24", light ? "bg-bg-light" : "bg-background")}>
      <div className="mx-auto max-w-7xl px-5 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <SectionTag>Our Clients</SectionTag>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-[42px]">
            Companies We Have Proudly Worked With.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-text">
            Trusted by organisations across hospitality, healthcare,
            construction, corporate and education sectors in the Kingdom.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px bg-bg-mid sm:grid-cols-3 lg:grid-cols-6">
          {clients.map((client, i) => (
            <Reveal key={client.name} delay={(i % 6) * 60}>
              <div className="flex h-32 items-center justify-center bg-background p-6 grayscale transition-all hover:grayscale-0">
                {client.logo ? (
                  <img
                    src={client.logo}
                    alt={`${client.name} logo`}
                    loading="lazy"
                    className="max-h-16 w-auto object-contain"
                  />
                ) : (
                  <span className="text-center text-[11px] font-bold tracking-brand text-muted-text uppercase">
                    {client.name}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
