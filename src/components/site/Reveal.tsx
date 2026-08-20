import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

export function ImagePlaceholder({
  label,
  className,
  src,
  alt,
  imgClassName,
}: {
  label: string;
  className?: string;
  src?: string;
  alt?: string;
  imgClassName?: string;
}) {
  if (src) {
    return (
      <div className={cn("overflow-hidden bg-navy-alt", className)}>
        <img
          src={src}
          alt={alt ?? label}
          loading="lazy"
          className={cn(
            "h-full w-full object-cover transition-transform duration-700 hover:scale-[1.04]",
            imgClassName,
          )}
        />
      </div>
    );
  }
  return (
    <div
      role="img"
      aria-label={label}
      className={cn("placeholder-box", className)}
    >
      <span className="text-xs font-bold tracking-brand text-brand-orange uppercase sm:text-sm">
        {label}
      </span>
    </div>
  );
}