"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Search, ChevronRight, Headphones, FileText, ArrowRight } from "lucide-react";
import * as Icons from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import HelpCategoryCard from "@/components/shared/HelpCategoryCard";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { popularSearches, helpInfoCards, helpCategories, popularArticles } from "@/data/helpcenter";

export default function PusatBantuanPage() {
  const [query, setQuery] = useState("");

  const filteredCategories = useMemo(() => {
    if (!query.trim()) return helpCategories;
    const q = query.toLowerCase();
    return helpCategories
      .map((cat) => ({ ...cat, topics: cat.topics.filter((t) => t.toLowerCase().includes(q)) }))
      .filter((cat) => cat.topics.length > 0 || cat.title.toLowerCase().includes(q));
  }, [query]);

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-primary font-medium">Pusat Bantuan</span>
        </div>

        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Ada yang bisa kami <span className="text-primary">bantu?</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-lg">Cari panduan, solusi masalah, atau informasi tentang Orange Kode.</p>

            <div className="mt-6 relative max-w-lg">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Cari bantuan..."
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none bg-white"
              />
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-2">
              <span className="text-xs text-ink-soft mr-1">Pencarian populer:</span>
              {popularSearches.map((s) => (
                <button
                  key={s}
                  onClick={() => setQuery(s)}
                  className="px-3 py-1.5 rounded-full border border-stone-200 bg-white text-xs font-medium text-ink-soft hover:border-primary hover:text-primary transition-colors"
                >
                  {s}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src="/assets/illustrations/student-idea.png"
              alt="Ilustrasi Pusat Bantuan"
              width={420}
              height={340}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Info cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-14">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {helpInfoCards.map((c) => {
            const Icon = Icons[c.icon] ?? Icons.Info;
            return (
              <motion.div key={c.title} variants={fadeUp}>
                <Card className="p-5 bg-primary-50 border-none h-full" hover={false}>
                  <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-3">
                    <Icon size={18} className="text-primary" />
                  </span>
                  <h3 className="font-bold text-sm text-ink mb-1.5">{c.title}</h3>
                  <p className="text-xs text-ink-soft leading-relaxed">{c.text}</p>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </section>

      {/* Category cards */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        {filteredCategories.length === 0 ? (
          <p className="text-center text-ink-soft py-16">Tidak ada topik bantuan yang cocok dengan pencarianmu.</p>
        ) : (
          <motion.div key={query} initial="hidden" animate="show" variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <motion.div key={cat.number} variants={fadeUp}>
                <HelpCategoryCard category={cat} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Bottom: contact + popular articles */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 grid lg:grid-cols-[1fr_1fr] gap-6">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <Card className="p-6 md:p-8 bg-primary-50 border-none h-full flex flex-col sm:flex-row items-start gap-5" hover={false}>
            <span className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shrink-0">
              <Headphones size={24} className="text-primary" />
            </span>
            <div>
              <h3 className="font-bold text-lg text-ink mb-2">Belum menemukan jawaban?</h3>
              <p className="text-sm text-ink-soft leading-relaxed mb-4">
                Tim Orange Kode siap membantu kamu. Jangan ragu untuk menghubungi kami melalui email{" "}
                <span className="font-semibold text-ink">support@orangekode.id</span> atau WhatsApp.
              </p>
              <Button href="/contact" icon={ArrowRight}>Hubungi Kami</Button>
            </div>
          </Card>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <Card className="p-6 md:p-8 h-full" hover={false}>
            <h3 className="font-bold text-lg text-ink mb-4">Artikel Populer</h3>
            <div className="flex flex-col divide-y divide-stone-100">
              {popularArticles.map((a) => (
                <Link key={a} href="/faq" className="flex items-center justify-between gap-3 py-3 text-sm text-ink-soft hover:text-primary transition-colors group">
                  <span className="flex items-center gap-2">
                    <FileText size={15} className="text-primary shrink-0" /> {a}
                  </span>
                  <ChevronRight size={15} className="shrink-0 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>
    </>
  );
}
