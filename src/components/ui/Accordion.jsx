"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export default function AccordionItem({ question, answer, defaultOpen = false, className }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className={cn("border border-stone-200 rounded-xl bg-white overflow-hidden", className)}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className={cn("font-semibold text-sm md:text-base", open ? "text-primary" : "text-ink")}>
          {question}
        </span>
        <span className="shrink-0 text-ink-soft">
          {open ? <Minus size={18} /> : <Plus size={18} />}
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-ink-soft leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
