import { cn } from "@/lib/utils";

export default function StatBar({ stats, className }) {
  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-4 divide-x divide-stone-100 rounded-2xl bg-white border border-stone-100 shadow-sm shadow-stone-200/50",
        className
      )}
    >
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col items-center gap-1 px-4 py-6 text-center">
          {stat.icon && <stat.icon className="text-primary mb-1" size={22} />}
          <span className="text-2xl md:text-3xl font-extrabold text-ink font-display">{stat.value}</span>
          <span className="text-xs md:text-sm text-ink-soft">{stat.label}</span>
        </div>
      ))}
    </div>
  );
}
