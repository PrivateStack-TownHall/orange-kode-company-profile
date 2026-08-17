"use client";

import { motion } from "framer-motion";
import Badge from "@/components/ui/Badge";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const levelVariant = {
  Pemula: "success",
  "Pemula – Menengah": "primary",
  Menengah: "primary",
  "Menengah – Advanced": "outline",
  Advanced: "solid",
};

export default function RoadmapTimeline({ steps }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      variants={container}
      className="relative pl-14 sm:pl-16"
    >
      {/* vertical connecting line */}
      <div className="absolute left-[19px] sm:left-[23px] top-3 bottom-3 w-0.5 bg-primary-100" />

      <div className="flex flex-col gap-5">
        {steps.map((step, i) => (
          <motion.div key={step.title} variants={fadeUp} className="relative">
            <span className="absolute -left-14 sm:-left-16 top-0 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center shadow-sm shadow-primary/30 z-10">
              {i + 1}
            </span>
            <div className="bg-white border border-stone-100 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm shadow-stone-200/50">
              <div>
                <h3 className="font-bold text-ink mb-1">{step.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{step.description}</p>
              </div>
              <Badge variant={levelVariant[step.level] ?? "neutral"} className="shrink-0 hidden sm:inline-flex">
                {step.level}
              </Badge>
            </div>
            <Badge variant={levelVariant[step.level] ?? "neutral"} className="mt-2 sm:hidden">
              {step.level}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
