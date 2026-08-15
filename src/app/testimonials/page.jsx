"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Star, Quote, MessageCircle, Users2, GraduationCap, Globe2 } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import SectionHeading from "@/components/shared/SectionHeading";
import StatBar from "@/components/ui/StatBar";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { testimonials, testimonialFilters, trustedCompanies } from "@/data/testimonials";

const summaryStats = [
  { icon: MessageCircle, value: "2.500+", label: "Testimoni Positif" },
  { icon: Users2, value: "85.000+", label: "Learner Terbantu" },
  { icon: GraduationCap, value: "200+", label: "Expert Mentor" },
  { icon: Globe2, value: "98%", label: "Tingkat Kepuasan" },
];

export default function TestimonialsPage() {
  const [activeFilter, setActiveFilter] = useState("semua");
  const filtered =
    activeFilter === "semua" ? testimonials : testimonials.filter((t) => t.filter === activeFilter);

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-10">
        <motion.div initial="hidden" animate="show" variants={fadeUp}>
          <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Testimoni Nyata</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight max-w-2xl">
            Cerita Nyata dari <span className="text-primary">Learner Orange Kode</span>
          </h1>
          <p className="mt-4 text-ink-soft max-w-xl">
            Ribuan learner telah meningkatkan skill, beralih karier, dan meraih kesempatan baru bersama Orange Kode.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mt-10">
          <StatBar stats={summaryStats} />
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
          {testimonialFilters.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                activeFilter === f.id
                  ? "bg-primary text-white border-primary"
                  : "border-stone-200 text-ink-soft hover:border-primary hover:text-primary"
              }`}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        <motion.div key={activeFilter} initial="hidden" animate="show" variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((t) => (
            <motion.div key={t.id} variants={fadeUp}>
              <Card className="p-6 h-full flex flex-col" hover={false}>
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={14} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center justify-between gap-3 mt-5 pt-5 border-t border-stone-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-xs font-bold text-primary-dark">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-ink">{t.name}</p>
                      <p className="text-xs text-ink-soft">{t.role}</p>
                    </div>
                  </div>
                  <Badge variant="neutral" className="text-[10px] shrink-0">{t.filterLabel}</Badge>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
          <p className="text-center text-sm font-semibold text-ink-soft mb-8">
            Dipercaya oleh Individu dan Perusahaan Terkemuka
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {trustedCompanies.map((c) => (
              <span key={c} className="text-lg font-extrabold text-stone-300">{c}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
