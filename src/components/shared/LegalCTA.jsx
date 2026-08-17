"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function LegalCTA({ title, subtitle }) {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="bg-primary-50 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div>
          <h3 className="font-bold text-ink text-lg mb-1">{title}</h3>
          <p className="text-sm text-ink-soft max-w-md">{subtitle}</p>
        </div>
        <Button href="/contact" icon={Mail} className="shrink-0">Hubungi Kami</Button>
      </motion.div>
    </section>
  );
}
