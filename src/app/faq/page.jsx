"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Headphones,
  GraduationCap,
  CreditCard,
  Clock,
  Award,
  Handshake,
  ArrowRight,
} from "lucide-react";

import AccordionItem from "@/components/ui/Accordion";
import Button from "@/components/ui/Button";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { faqTopics, faqItems } from "@/data/faq";

const topicIcons = {
  kursus: GraduationCap,
  pembayaran: CreditCard,
  operasional: Clock,
  sertifikat: Award,
  kerjasama: Handshake,
};

export default function FaqPage() {
  const [activeTopic, setActiveTopic] = useState("kursus");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    let items = faqItems.filter((item) => item.topic === activeTopic);
    if (query.trim()) {
      const q = query.toLowerCase();
      items = faqItems.filter((item) =>
        item.question.toLowerCase().includes(q),
      );
    }
    return items;
  }, [activeTopic, query]);

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeUp} className="max-w-xl">
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">
              FAQ
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="mt-4 text-ink-soft">
              Temukan jawaban dari pertanyaan yang paling sering ditanyakan
              seputar Orange Kode.
            </p>

            <div className="mt-6 relative max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft"
              />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari pertanyaan..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none"
              />
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src="/assets/illustrations/ilm-faq.png"
              alt="Ilustrasi FAQ Orange Kode"
              width={420}
              height={370}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mb-4"
        >
          <h2 className="font-bold text-ink mb-4">Topik Bantuan</h2>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid grid-cols-2 sm:grid-cols-5 gap-4"
        >
          {faqTopics.map((topic) => {
            const Icon = topicIcons[topic.id];
            const active = activeTopic === topic.id;
            return (
              <motion.button
                key={topic.id}
                variants={fadeUp}
                onClick={() => {
                  setActiveTopic(topic.id);
                  setQuery("");
                }}
                className={`text-left p-4 rounded-xl border transition-colors ${
                  active
                    ? "border-primary bg-primary-50"
                    : "border-stone-200 bg-white hover:border-primary/50"
                }`}
              >
                <Icon
                  size={20}
                  className={active ? "text-primary" : "text-ink-soft"}
                />
                <p
                  className={`text-sm font-bold mt-2 ${active ? "text-primary" : "text-ink"}`}
                >
                  {topic.label}
                </p>
                {/* <p className="text-xs text-ink-soft">{topic.count} Pertanyaan</p> */}
              </motion.button>
            );
          })}
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-16">
        <motion.div
          key={`${activeTopic}-${query}`}
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col gap-3"
        >
          {filteredItems.length === 0 && (
            <p className="text-sm text-ink-soft text-center py-10">
              Tidak ada pertanyaan yang cocok. Coba kata kunci lain.
            </p>
          )}
          {filteredItems.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <AccordionItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="bg-primary-50 rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0">
              <Headphones size={22} className="text-primary" />
            </div>
            <div>
              <h3 className="font-bold text-ink">Masih punya pertanyaan?</h3>
              <p className="text-sm text-ink-soft">
                Tim support kami siap membantu kamu 7 hari seminggu.
              </p>
            </div>
          </div>
          <Button href="/contact" icon={ArrowRight}>
            Hubungi Kami
          </Button>
        </motion.div>
      </section>
    </>
  );
}
