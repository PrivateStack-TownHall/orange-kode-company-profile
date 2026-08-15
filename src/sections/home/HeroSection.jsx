"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Users2, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import StatBar from "@/components/ui/StatBar";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const heroStats = [
  { label: "Active Learners", value: "85.000+" },
  { label: "Expert Instructors", value: "180+" },
  { label: "Learning Materials", value: "1.200+" },
  { label: "User Satisfaction", value: "4.9/5" },
];

export default function HeroSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 md:pt-16 pb-16">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div variants={fadeUp}>
          <span className="inline-flex items-center gap-2 bg-primary-50 text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full mb-5">
            <Rocket size={14} /> Platform Belajar & Bootcamp Teknologi
          </span>
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-extrabold text-ink leading-[1.08] tracking-tight">
            Belajar teknologi.
            <br />
            <span className="text-primary">Bangun masa depanmu.</span>
          </h1>
          <p className="mt-6 text-base md:text-lg text-ink-soft leading-relaxed max-w-lg">
            Kurikulum praktis, proyek nyata, dan mentor berpengalaman dari industri untuk membantumu siap berkarier.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/register" size="lg" icon={ArrowRight}>
              Mulai Belajar Gratis
            </Button>
            <Button href="/courses" variant="outline" size="lg">
              Lihat Semua Kursus
            </Button>
          </div>
          <div className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-dark"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <div className="text-sm text-ink-soft">
              <span className="font-bold text-ink">4.9</span> ★★★★★ (2.500+ review)
            </div>
          </div>
        </motion.div>

        <motion.div variants={fadeUp} className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-md">
            <div className="absolute -top-6 -left-6 z-10 hidden sm:flex items-center gap-2 bg-white rounded-xl shadow-lg shadow-stone-300/40 px-4 py-3">
              <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <Award size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-ink-soft leading-none">Sertifikat</p>
                <p className="text-xs font-bold text-ink">Akuisisi skill baru</p>
              </div>
            </div>

            <div className="absolute -bottom-8 -left-4 z-10 hidden sm:flex items-center gap-2 bg-white rounded-xl shadow-lg shadow-stone-300/40 px-4 py-3">
              <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center">
                <Users2 size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-[11px] text-ink-soft leading-none">Mentor Expert</p>
                <p className="text-xs font-bold text-ink">Siap membantumu</p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden bg-primary-50">
              <Image
                src="/assets/illustrations/hero-student-illustration.png"
                alt="Ilustrasi pelajar Orange Kode"
                width={520}
                height={580}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="mt-14"
      >
        <StatBar stats={heroStats} />
      </motion.div>
    </section>
  );
}
