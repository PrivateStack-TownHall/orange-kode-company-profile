"use client";

import { motion } from "framer-motion";
import { BookOpen, Code2, Users, Heart } from "lucide-react";
import Card from "@/components/ui/Card";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const items = [
  {
    icon: BookOpen,
    title: "Kurikulum Terstruktur",
    text: "Materi disusun sistematis dari dasar hingga mahir dengan roadmap yang jelas.",
  },
  {
    icon: Code2,
    title: "Praktik & Proyek Nyata",
    text: "Belajar dengan praktik langsung melalui proyek nyata yang relevan dengan dunia kerja.",
  },
  {
    icon: Users,
    title: "Mentor Berpengalaman",
    text: "Dibimbing mentor profesional yang siap membantu dan memberi feedback.",
  },
  {
    icon: Heart,
    title: "Komunitas Supportive",
    text: "Bergabung dengan ribuan learner lainnya, diskusi, berbagi, dan tumbuh bersama.",
  },
];

export default function HowWeTeachSection() {
  return (
    <section className="bg-white border-y border-stone-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <SectionHeading
          eyebrow="Cara Belajar Orange Kode"
          title="Belajar efektif dengan"
          titleAccent="metode terstruktur"
          subtitle="Kami membantu kamu belajar lebih fokus, terarah, dan konsisten sampai bisa."
          align="center"
          className="mb-12"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <Card className="p-6 h-full" hover={false}>
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-primary" />
                </div>
                <h3 className="font-bold text-ink mb-2">{item.title}</h3>
                <p className="text-sm text-ink-soft leading-relaxed">{item.text}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
