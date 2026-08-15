"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight, Rocket } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { articles, articleCategories } from "@/data/articles";

const PAGE_SIZE = 6;

export default function ArticlesPage() {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchCategory = activeCategory === "semua" || a.category === activeCategory;
      const matchQuery = a.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const latest = articles.slice(0, 3);
  const popularCategories = articleCategories.filter((c) => c.id !== "semua");

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-10">
        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Articles</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Insight, Tips, dan Inspirasi Seputar <span className="text-primary">Dunia Teknologi</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-md">
              Temukan artikel berkualitas untuk menambah wawasan, mengasah skill, dan mengikuti perkembangan industri teknologi.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden bg-primary-50">
            <Image src="/assets/illustrations/ilm-code-editor.png" alt="Artikel Orange Kode" width={480} height={380} className="w-full h-auto object-contain p-6" />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20 grid lg:grid-cols-[1fr_320px] gap-10">
        <div>
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="flex flex-wrap gap-2 flex-1">
              {articleCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => { setActiveCategory(cat.id); setPage(1); }}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold border transition-colors ${
                    activeCategory === cat.id
                      ? "bg-primary text-white border-primary"
                      : "border-stone-200 text-ink-soft hover:border-primary hover:text-primary"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
            <div className="relative sm:w-56 shrink-0">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Cari artikel..."
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-stone-200 text-sm focus:border-primary outline-none"
              />
            </div>
          </motion.div>

          {paginated.length === 0 ? (
            <p className="text-center text-ink-soft py-16">Tidak ada artikel yang cocok.</p>
          ) : (
            <motion.div key={`${activeCategory}-${query}-${page}`} initial="hidden" animate="show" variants={container} className="grid sm:grid-cols-2 gap-5">
              {paginated.map((article) => (
                <motion.div key={article.id} variants={fadeUp}>
                  <Link href={`/articles/${article.slug}`} className="group block h-full">
                    <Card className="overflow-hidden h-full" hover={true}>
                      <div className="relative aspect-video overflow-hidden bg-primary-50">
                        <Image src={article.cover} alt={article.title} fill className="object-contain p-6 group-hover:scale-105 transition-transform duration-500" />
                      </div>
                      <div className="p-5">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="primary" className="text-[10px]">{article.categoryLabel}</Badge>
                          <span className="flex items-center gap-1 text-[11px] text-ink-soft"><Clock size={11} /> {article.readTime}</span>
                        </div>
                        <h3 className="font-bold text-ink leading-snug mb-2 line-clamp-2">{article.title}</h3>
                        <p className="text-xs text-ink-soft line-clamp-2 mb-4">{article.excerpt}</p>
                        <div className="flex items-center gap-2 text-xs text-ink-soft">
                          <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-dark font-bold flex items-center justify-center text-[10px]">OK</span>
                          {article.author} · {article.date}
                        </div>
                      </div>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          )}

          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-2 mt-10">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`w-9 h-9 rounded-lg text-sm font-semibold transition-colors ${
                    page === i + 1 ? "bg-primary text-white" : "border border-stone-200 text-ink-soft hover:border-primary"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </div>

        <motion.aside initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="flex flex-col gap-6">
          <motion.div variants={fadeUp}>
            <Card className="p-5" hover={false}>
              <h3 className="font-bold text-sm text-ink mb-4">Kategori Populer</h3>
              <div className="flex flex-col gap-3">
                {popularCategories.map((cat) => (
                  <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className="flex items-center justify-between text-sm text-ink-soft hover:text-primary transition-colors">
                    <span>{cat.label}</span>
                    <span className="text-xs font-semibold">{articles.filter((a) => a.category === cat.id).length}</span>
                  </button>
                ))}
              </div>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="p-5 bg-primary-50 border-none" hover={false}>
              <h3 className="font-bold text-sm text-ink mb-2">Dapatkan Artikel Terbaru Langsung ke Emailmu!</h3>
              <p className="text-xs text-ink-soft mb-4">Berlangganan newsletter kami dan dapatkan insight terbaru setiap minggu.</p>
              <input type="email" placeholder="Masukkan email kamu" className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm mb-2 focus:border-primary outline-none" />
              <Button size="sm" className="w-full">Berlangganan</Button>
            </Card>
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="p-5" hover={false}>
              <h3 className="font-bold text-sm text-ink mb-4">Artikel Terbaru</h3>
              <div className="flex flex-col gap-4">
                {latest.map((a) => (
                  <Link key={a.id} href={`/articles/${a.slug}`} className="flex gap-3 group">
                    <div className="relative w-14 h-14 rounded-lg overflow-hidden bg-primary-50 shrink-0">
                      <Image src={a.cover} alt={a.title} fill className="object-contain p-2" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-ink leading-snug line-clamp-2 group-hover:text-primary transition-colors">{a.title}</p>
                      <p className="text-[11px] text-ink-soft mt-1">{a.date}</p>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/articles" className="flex items-center gap-1 text-xs font-semibold text-primary mt-4">
                Lihat Semua Artikel <ArrowRight size={12} />
              </Link>
            </Card>
          </motion.div>
        </motion.aside>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Rocket size={28} className="text-white shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">Siap meningkatkan skill-mu?</h3>
              <p className="text-white/90 text-sm">Jelajahi berbagai kursus berkualitas dan mulai perjalanan belajarmu sekarang.</p>
            </div>
          </div>
          <Button href="/courses" variant="white" icon={ArrowRight}>Lihat Semua Kursus</Button>
        </motion.div>
      </section>
    </>
  );
}
