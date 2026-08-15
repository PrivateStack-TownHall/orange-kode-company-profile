import { cn } from "@/lib/utils";

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <div
      className={cn(
        "bg-white rounded-2xl border border-stone-100 shadow-sm shadow-stone-200/50",
        hover && "transition-all duration-300 hover:shadow-lg hover:shadow-stone-200/70 hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
