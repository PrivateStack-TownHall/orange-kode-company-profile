import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-primary-50 text-primary-dark",
  solid: "bg-primary text-white",
  outline: "border border-primary text-primary bg-transparent",
  neutral: "bg-stone-100 text-ink-soft",
  success: "bg-green-50 text-green-700",
};

export default function Badge({ children, variant = "primary", className, icon: Icon }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold",
        variants[variant],
        className
      )}
    >
      {Icon && <Icon size={13} />}
      {children}
    </span>
  );
}
