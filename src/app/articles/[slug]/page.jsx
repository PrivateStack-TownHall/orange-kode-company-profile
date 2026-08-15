"use client";

import { use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronRight, Facebook, Twitter, Linkedin, Link2, Lightbulb, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { getArticleBySlug, getRelatedArticles } from "@/data/articles";

export default function ArticleDetailPage({ params }) {
  const { slug } = use(params);
  const article = getArticleBySlug(slug);

  if (!article) notFound();

  const related = getRelatedArticles(slug, 4);
  const toc = article.content.map((c) => c.heading);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-10">
      <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5 flex-wrap">
        <Link href="/" className="hover:text-primary">Home</Link>
        <ChevronRight size={12} />
        <Link href="/articles" className="hover:text-primary">Articles</Link>
        <ChevronRight size={12} />
        <span className="text-ink font-medium">{article.categoryLabel}</span>
      </div>

      <div className="grid lg:grid-cols-[1fr_320px] gap-10">
        <motion.article initial="hidden" animate="show" variants={container}>
          <motion.div variants={fadeUp}>
            <Badge variant="primary" className="mb-4">{article.categoryLabel}</Badge>
            <h1 className="text-2xl md:text-4xl font-extrabold text-ink leading-tight mb-4">{article.title}</h1>
            <p className="text-ink-soft mb-5">{article.excerpt}</p>
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6 pb-6 border-b border-stone-100">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-primary-100 text-primary-dark font-bold flex items-center justify-center text-xs">OK</span>
                <div className="text-sm">
                  <p className="font-semibold text-ink">{article.author}</p>
                  <p className="text-xs text-ink-soft flex items-center gap-1">{article.date} · <Clock size={11} /> {article.readTime}</p>
                </div>
              </div>
              <div className="flex gap-2 text-ink-soft">
                <Facebook size={16} className="hover:text-primary cursor-pointer transition-colors" />
                <Twitter size={16} className="hover:text-primary cursor-pointer transition-colors" />
                <Linkedin size={16} className="hover:text-primary cursor-pointer transition-colors" />
                <Link2 size={16} className="hover:text-primary cursor-pointer transition-colors" />
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative aspect-video rounded-2xl overflow-hidden bg-primary-50 mb-6">
            <Image src={article.cover} alt={article.title} fill className="object-contain p-10" />
          </motion.div>

          <motion.div variants={fadeUp}>
            <Card className="p-5 flex gap-3 bg-primary-50 border-none mb-8" hover={false}>
              <Lightbulb size={20} className="text-primary shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-ink mb-1">Poin Penting</p>
                <p className="text-xs text-ink-soft leading-relaxed">
                  Artikel ini akan membantumu memahami konsep secara praktis dan siap diterapkan langsung.
                </p>
              </div>
            </Card>
          </motion.div>

          <div className="flex flex-col gap-8">
            {article.content.map((block, i) => (
              <motion.div key={block.heading} variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
                <h2 id={`section-${i}`} className="text-xl font-bold text-ink mb-3">{block.heading}</h2>
                <p className="text-sm text-ink-soft leading-relaxed">{block.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mt-10 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-sm text-ink">Artikel ini bermanfaat?</p>
              <p className="text-xs text-ink-soft">Bantu kami meningkatkan kualitas konten.</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" size="sm">👍 Ya, bermanfaat</Button>
              <Button variant="ghost" size="sm">Tidak terlalu</Button>
            </div>
          </motion.div>
        </motion.article>

        <aside className="flex flex-col gap-6">
          {toc.length > 0 && (
            <Card className="p-5" hover={false}>
              <h3 className="font-bold text-sm text-ink mb-4">Daftar Isi</h3>
              <div className="flex flex-col gap-1">
                {toc.map((t, i) => (
                  <a key={t} href={`#section-${i}`} className="text-xs text-ink-soft hover:text-primary py-1.5 transition-colors">
                    {i + 1}. {t}
                  </a>
                ))}
              </div>
            </Card>
          )}

          {related.length > 0 && (
            <Card className="p-5" hover={false}>
              <h3 className="font-bold text-sm text-ink mb-4">Artikel Terkait</h3>
              <div className="flex flex-col gap-4">
                {related.map((a) => (
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
            </Card>
          )}

          <Card className="p-5 bg-primary-50 border-none" hover={false}>
            <h3 className="font-bold text-sm text-ink mb-2">Dapatkan Insight Terbaru</h3>
            <p className="text-xs text-ink-soft mb-4">Berlangganan newsletter kami dan dapatkan artikel terbaik setiap minggu.</p>
            <input type="email" placeholder="Masukkan email kamu" className="w-full px-4 py-2.5 rounded-lg border border-stone-200 text-sm mb-2 focus:border-primary outline-none" />
            <Button size="sm" className="w-full">Berlangganan</Button>
          </Card>
        </aside>
      </div>
    </section>
  );
}
