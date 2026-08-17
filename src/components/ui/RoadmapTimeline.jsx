"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import Badge from "@/components/ui/Badge";
import { fadeUp, viewportOnce } from "@/lib/motion";
import { cn } from "@/lib/utils";

const levelVariant = {
  Pemula: "success",
  "Pemula – Menengah": "primary",
  Menengah: "primary",
  "Menengah – Advanced": "neutral",
  Advanced: "solid",
};

export default function RoadmapTimeline({ steps }) {
  return (
    <div className="relative">
      {/* Connecting vertical line */}
      <div className="absolute left-[19px] top-6 bottom-6 w-px bg-stone-200 hidden sm:block" />

      <div className="flex flex-col gap-4">
        {steps.map((step, i) => {
          const StepIcon = Icons[step.icon] ?? Icons.Circle;
          return (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="relative flex gap-4 sm:gap-5"
            >
              {/* Step number circle */}
              <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-primary text-white font-bold flex items-center justify-center text-sm">
                {i + 1}
              </div>

              <div className="flex-1 bg-white border border-stone-100 rounded-xl p-4 sm:p-5 shadow-sm shadow-stone-200/50">
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                  <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <StepIcon size={17} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-ink text-sm sm:text-base">{step.title}</h3>
                    <p className="text-xs sm:text-sm text-ink-soft mt-1 leading-relaxed">{step.description}</p>
                  </div>
                  <Badge
                    variant={levelVariant[step.level] ?? "neutral"}
                    className={cn("shrink-0 self-start sm:self-center")}
                  >
                    {step.level}
                  </Badge>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
