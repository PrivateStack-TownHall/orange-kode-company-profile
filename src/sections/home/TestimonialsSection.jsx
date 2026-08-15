"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import { testimonials } from "@/data/testimonials";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function TestimonialsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
      >
        <SectionHeading
          eyebrow="Dipercaya Ribuan Learner"
          title="Cerita mereka setelah"
          titleAccent="belajar di Orange Kode"
        />
        <div className="hidden md:flex gap-2 shrink-0">
          <button
            onClick={() => scroll(-1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-ink-soft hover:border-primary hover:text-primary transition-colors"
            aria-label="Sebelumnya"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={() => scroll(1)}
            className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-ink-soft hover:border-primary hover:text-primary transition-colors"
            aria-label="Selanjutnya"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto no-scrollbar pb-2 snap-x">
        {testimonials.slice(0, 6).map((t, i) => (
          <motion.div
            key={t.id}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: i * 0.05 }}
            className="snap-start shrink-0 w-[320px]"
          >
            <Card className="p-6 h-full flex flex-col" hover={false}>
              <Quote className="text-primary-light mb-3" size={28} />
              <p className="text-sm text-ink-soft leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
              <div className="flex items-center gap-3 mt-5 pt-5 border-t border-stone-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-dark">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
