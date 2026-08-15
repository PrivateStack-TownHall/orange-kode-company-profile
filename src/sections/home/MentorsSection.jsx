"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/shared/SectionHeading";
import { courses } from "@/data/courses";
import { fadeUp, viewportOnce } from "@/lib/motion";

const mentors = Array.from(
  new Map(courses.map((c) => c.mentor).filter(Boolean).map((m) => [m.name, m])).values()
);

export default function MentorsSection() {
  const scrollRef = useRef(null);
  const scroll = (dir) => scrollRef.current?.scrollBy({ left: dir * 260, behavior: "smooth" });

  return (
    <section className="bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
        >
          <SectionHeading
            eyebrow="Belajar dari yang Terbaik"
            title="Mentor profesional"
            titleAccent="dari industri"
            subtitle="Para mentor kami adalah praktisi berpengalaman yang siap membimbingmu."
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
          {mentors.map((mentor, i) => (
            <motion.div
              key={mentor.name}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              variants={fadeUp}
              transition={{ delay: i * 0.05 }}
              className="snap-start shrink-0 w-[220px]"
            >
              <Card className="p-5 text-center h-full" hover={false}>
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-lg font-bold text-primary-dark mb-4">
                  {mentor.name.charAt(0)}
                </div>
                <h3 className="font-bold text-sm text-ink mb-1">{mentor.name}</h3>
                <p className="text-xs text-ink-soft leading-snug mb-3">{mentor.role}</p>
                <Badge variant="neutral" className="text-[10px]">
                  {mentor.points?.[0]}
                </Badge>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
