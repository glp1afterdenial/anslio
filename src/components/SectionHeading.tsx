import { AnimateIn } from "./AnimateIn";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
  align?: "center" | "left";
}

export function SectionHeading({
  title,
  subtitle,
  className = "",
  align = "center",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center" : "text-left";

  return (
    <AnimateIn className={`mb-12 ${alignment} ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ink mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-warm-gray max-w-2xl mx-auto">{subtitle}</p>
      )}
    </AnimateIn>
  );
}
