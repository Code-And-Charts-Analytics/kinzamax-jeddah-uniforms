import { useState, type FormEvent } from "react";
import { toast } from "sonner";

const uniformTypes = [
  "Industrial Workwear",
  "Corporate & Office",
  "Hospitality Uniforms",
  "Healthcare & Scrubs",
  "Safety & Hi-Vis",
  "School Uniforms",
  "Security Uniforms",
  "Other / Multiple Types",
];

const quantities = [
  "20–50 pieces",
  "50–100 pieces",
  "100–500 pieces",
  "500–1000 pieces",
  "1000+ pieces",
];

const fieldClass =
  "w-full border-2 border-bg-mid bg-background px-4 py-3 text-sm text-body-text outline-none transition-colors focus:border-navy";

const labelClass =
  "mb-2 block text-[11px] font-bold tracking-brand text-navy uppercase";

export function QuoteForm() {
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
    <div>
      <h2 className="heading-xl text-2xl text-navy sm:text-3xl">
        Request a Quote
      </h2>
      <p className="mt-3 text-sm leading-relaxed text-muted-text">
        Tell us what you need and we'll get back to you within 24 hours with a
        formal quotation.
      </p>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label className={labelClass} htmlFor="company">
            Company Name*
          </label>
          <input id="company" name="company" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="contact">
            Contact Name*
          </label>
          <input id="contact" name="contact" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="whatsapp">
            WhatsApp Number*
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="email">
            Email Address*
          </label>
          <input id="email" name="email" type="email" required className={fieldClass} />
        </div>
        <div>
          <label className={labelClass} htmlFor="type">
            Uniform Type*
          </label>
          <select id="type" name="type" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select type...
            </option>
            {uniformTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <label className={labelClass} htmlFor="quantity">
            Estimated Quantity*
          </label>
          <select id="quantity" name="quantity" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select quantity...
            </option>
            {quantities.map((q) => (
              <option key={q}>{q}</option>
            ))}
          </select>
        </div>
        <div className="sm:col-span-2">
          <label className={labelClass} htmlFor="message">
            Message / Requirements
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us about your uniform requirements, any branding details, colors, or specific needs..."
            className={fieldClass}
          />
        </div>
        <button
          type="submit"
          disabled={submitting}
          className="bg-brand-orange px-6 py-4 text-[13px] font-bold tracking-wide-brand text-white uppercase transition-opacity hover:opacity-90 disabled:opacity-60 sm:col-span-2"
        >
          {submitting ? "Sending…" : "Send Enquiry →"}
        </button>
      </form>
      <p className="mt-4 text-xs text-muted-text">
        We will respond within 24 hours. Your information is kept confidential.
      </p>
    </div>
  );
}
