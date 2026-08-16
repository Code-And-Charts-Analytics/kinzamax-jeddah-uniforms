import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { toast } from "sonner";

const uniformTypes = [
  "Industrial Workwear",
  "Corporate & Office",
  "Hospitality",
  "Healthcare",
  "Safety & Hi-Vis",
  "School",
  "Security",
  "Other",
];

const quantities = ["20-50", "50-100", "100-500", "500+"];

const fieldClass =
  "w-full border border-border bg-background px-4 py-3 text-sm text-body-text outline-none transition-colors focus:border-navy";

const labelClass =
  "mb-2 block text-xs font-bold tracking-brand text-navy uppercase";

export function QuoteSection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    const form = event.currentTarget;
    setTimeout(() => {
      setSubmitting(false);
      form.reset();
      toast.success("Enquiry sent", {
        description: "Our Jeddah team will respond within 24 hours.",
      });
    }, 600);
  };

  return (
    <section id="contact" className="bg-background py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:px-10">
        <Reveal>
          <span className="section-tag">Get a Quote</span>
          <h2 className="heading-xl mt-5 text-3xl text-navy sm:text-4xl lg:text-5xl">
            Get In Touch
          </h2>
          <p className="mt-4 text-sm font-bold tracking-brand text-brand-orange uppercase">
            We respond within 24 hours
          </p>

          <form onSubmit={handleSubmit} className="mt-9 grid gap-5 sm:grid-cols-2">
            <div>
              <label className={labelClass} htmlFor="company">
                Company Name
              </label>
              <input id="company" name="company" required className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="contact">
                Contact Name
              </label>
              <input id="contact" name="contact" required className={fieldClass} />
            </div>
            <div>
              <label className={labelClass} htmlFor="whatsapp">
                WhatsApp Number
              </label>
              <input
                id="whatsapp"
                name="whatsapp"
                type="tel"
                required
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="email">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={fieldClass}
              />
            </div>
            <div>
              <label className={labelClass} htmlFor="type">
                Uniform Type Needed
              </label>
              <select id="type" name="type" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select type
                </option>
                {uniformTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelClass} htmlFor="quantity">
                Estimated Quantity
              </label>
              <select
                id="quantity"
                name="quantity"
                className={fieldClass}
                defaultValue=""
              >
                <option value="" disabled>
                  Select quantity
                </option>
                {quantities.map((q) => (
                  <option key={q}>{q}</option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className={labelClass} htmlFor="message">
                Message / Additional Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={fieldClass}
              />
            </div>
            <button
              type="submit"
              disabled={submitting}
              className="bg-brand-orange px-6 py-4 text-xs font-bold tracking-brand text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-2"
            >
              {submitting ? "Sending…" : "Send Enquiry"}
            </button>
          </form>
        </Reveal>

        <Reveal delay={120}>
          <div className="bg-navy p-8">
            <h3 className="text-sm font-bold tracking-brand text-brand-orange uppercase">
              Contact Details
            </h3>
            <ul className="mt-6 space-y-5 text-sm text-white/80">
              <li className="flex gap-3">
                <span>📍</span>
                <span>
                  Gharnatah Street, Mishrifah District, Aziziyah, Jeddah 23342,
                  KSA
                </span>
              </li>
              <li className="flex gap-3">
                <span>📞</span>
                <a href="tel:+966530717861" className="hover:text-brand-orange">
                  +966 53 071 7861
                </a>
              </li>
              <li className="flex gap-3">
                <span>✉</span>
                <a
                  href="mailto:info@kinzamax.com"
                  className="hover:text-brand-orange"
                >
                  info@kinzamax.com
                </a>
              </li>
              <li className="flex gap-3">
                <span>🌐</span>
                <span>www.kinzamax.com</span>
              </li>
              <li className="flex gap-3">
                <span>🆔</span>
                <span>VAT: 300486407700003</span>
              </li>
            </ul>
            <a
              href="https://wa.me/966530717861"
              target="_blank"
              rel="noreferrer"
              className="mt-8 block bg-whatsapp px-6 py-4 text-center text-xs font-bold tracking-brand text-white uppercase transition-opacity hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}