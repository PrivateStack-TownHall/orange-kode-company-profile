"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, CalendarClock } from "lucide-react";
import { fadeUp, container } from "@/lib/motion";

export default function LegalHero({ title, titleAccent, description, lastUpdated, illustration, breadcrumbLabel }) {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
      <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={12} />
        <span className="text-ink font-medium">{breadcrumbLabel}</span>
      </div>

      <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp}>
          <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
            {title} {titleAccent && <span className="text-primary">{titleAccent}</span>}
          </h1>
          <p className="mt-4 text-ink-soft max-w-lg leading-relaxed">{description}</p>
          {lastUpdated && (
            <p className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
              <CalendarClock size={14} /> Terakhir diperbarui: {lastUpdated}
            </p>
          )}
        </motion.div>
        {illustration && (
          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src={illustration}
              alt={title}
              width={420}
              height={320}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
