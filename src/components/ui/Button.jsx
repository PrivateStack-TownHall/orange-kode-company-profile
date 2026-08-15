import Link from "next/link";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  primary: "bg-primary text-white hover:bg-primary-dark shadow-sm shadow-primary/30",
  outline: "border border-stone-300 text-ink bg-white hover:border-primary hover:text-primary",
  ghost: "text-ink hover:bg-stone-100",
  white: "bg-white text-primary hover:bg-stone-50",
};

const sizes = {
  sm: "text-sm px-4 py-2",
  md: "text-sm px-5 py-3",
  lg: "text-base px-7 py-3.5",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  icon: Icon,
  iconPosition = "right",
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className);

  const content = (
    <>
      {Icon && iconPosition === "left" && <Icon size={18} />}
      {children}
      {Icon && iconPosition === "right" && <Icon size={18} />}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
}
