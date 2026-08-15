"use client";

import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-12 md:py-16 flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="absolute -right-10 -top-10 w-56 h-56 rounded-full bg-white/10" />
        <div className="absolute -right-24 bottom-0 w-72 h-72 rounded-full bg-white/5" />

        <div className="relative flex items-center gap-5">
          <div className="hidden sm:flex w-14 h-14 rounded-2xl bg-white/15 items-center justify-center shrink-0">
            <Rocket size={26} className="text-white" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
              Siap memulai perjalanan terbaikmu?
            </h3>
            <p className="text-white/90 mt-2 max-w-lg text-sm md:text-base">
              Bergabung dengan ribuan learner lainnya dan bangun masa depan kariermu di dunia teknologi bersama Orange Kode.
            </p>
          </div>
        </div>

        <Button href="/register" variant="white" size="lg" icon={ArrowRight} className="relative shrink-0">
          Mulai Belajar Sekarang
        </Button>
      </motion.div>
    </section>
  );
}
