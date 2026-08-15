"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { techLogos } from "@/data/techstack";

export default function TechStackSection() {
  return (
    <section className="bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <SectionHeading
          eyebrow="Tools & Teknologi"
          title="Belajar dengan"
          titleAccent="Teknologi Terkini"
          subtitle="Kurikulum kami dibangun di atas tools dan bahasa pemrograman yang benar-benar dipakai di industri."
          align="center"
          className="mb-12 max-w-none"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-4 sm:gap-6"
        >
          {techLogos.map((tech) => (
            <motion.div
              key={tech.name}
              variants={fadeUp}
              className="flex flex-col items-center gap-2 group"
            >
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-stone-50 border border-stone-100 flex items-center justify-center p-3 group-hover:border-primary group-hover:bg-primary-50 transition-colors">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={48}
                  height={48}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-[11px] font-medium text-ink-soft text-center leading-tight">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
