"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, FolderKanban, Building2, UserCheck, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import {
  instructorStats,
  instructorApproach,
  instructorImpact,
  instructorPortfolio,
} from "@/data/instructors";

const statIcons = [Briefcase, FolderKanban, Building2, UserCheck];
const portfolioFilters = [
  { id: "web", label: "Web Application" },
  { id: "mobile", label: "Mobile Application" },
  { id: "dashboard", label: "Dashboard & Admin" },
];

export default function InstructorsPage() {
  const [activeFilter, setActiveFilter] = useState("web");
  const filtered = instructorPortfolio.filter((p) => p.filter === activeFilter);

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-16">
        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Our Instructors</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Dibimbing Langsung oleh <span className="text-primary">Praktisi di Dunia Nyata</span>
            </h1>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Instruktur Orange Kode adalah praktisi aktif yang telah berkecimpung bertahun-tahun di industri teknologi. Mereka membagikan pengalaman nyata, studi kasus, dan praktik terbaik yang relevan dengan kebutuhan dunia kerja.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4">
            {instructorStats.map((s, i) => {
              const Icon = statIcons[i];
              return (
                <Card key={s.label} className="p-5" hover={false}>
                  <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <p className="font-extrabold text-xl text-ink">{s.value}</p>
                  <p className="text-xs text-ink-soft mt-1 leading-snug">{s.label}</p>
                </Card>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-ink mb-2">Portofolio yang Telah Dibangun Instruktur</h2>
              <p className="text-sm text-ink-soft max-w-lg">Instruktur kami terlibat dalam berbagai proyek nyata mulai dari startup hingga enterprise.</p>
            </div>
            <div className="flex flex-wrap gap-2">
              {portfolioFilters.map((f) => (
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
            </div>
          </motion.div>

          <motion.div key={activeFilter} initial="hidden" animate="show" variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {(filtered.length ? filtered : instructorPortfolio).map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <Card className="overflow-hidden h-full" hover={true}>
                  <div className="aspect-video bg-primary-50 flex items-center justify-center">
                    <span className="text-2xl font-extrabold text-primary-dark">{p.title}</span>
                  </div>
                  <div className="p-4">
                    <p className="text-xs font-semibold text-primary mb-1">{p.subtitle}</p>
                    <p className="text-xs text-ink-soft leading-relaxed mb-3">{p.desc}</p>
                    <p className="text-[11px] text-ink-soft/80">{p.stack}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-2 gap-10">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Pendekatan Mengajar yang Berbeda</span>
          <h2 className="text-2xl font-extrabold text-ink mb-6">Belajar bukan hanya memahami, tapi juga mengaplikasikan.</h2>
          <div className="grid grid-cols-2 gap-5">
            {instructorApproach.map((a) => (
              <div key={a.title}>
                <h3 className="font-bold text-sm text-ink mb-1">{a.title}</h3>
                <p className="text-xs text-ink-soft leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Dampak untuk Learner</span>
          <h2 className="text-2xl font-extrabold text-ink mb-6">Hasil nyata dari bimbingan praktisi berpengalaman.</h2>
          <div className="grid grid-cols-2 gap-5">
            {instructorImpact.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-extrabold text-primary">{s.value}</p>
                <p className="text-xs text-ink-soft mt-1 leading-snug">{s.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-1">Belajar langsung dari praktisi terbaik</h3>
            <p className="text-white/90 text-sm">Mulai kursus dan dibimbing mentor berpengalaman dari industri.</p>
          </div>
          <Button href="/courses" variant="white" icon={ArrowRight}>Lihat Semua Kursus</Button>
        </motion.div>
      </section>
    </>
  );
}
