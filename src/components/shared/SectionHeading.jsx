import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  titleAccent,
  subtitle,
  align = "left",
  className,
}) {
  return (
    <div className={cn(align === "center" && "text-center mx-auto", "max-w-2xl", className)}>
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-bold tracking-wide text-primary uppercase mb-3">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
        {title} {titleAccent && <span className="text-primary">{titleAccent}</span>}
      </h2>
      {subtitle && <p className="mt-4 text-ink-soft text-base leading-relaxed">{subtitle}</p>}
    </div>
  );
}
