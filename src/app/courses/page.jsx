"use client";

import { useState, useMemo, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Star, Clock, BookOpen, Rocket, ArrowRight } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { courses, courseCategories } from "@/data/courses";

const PAGE_SIZE = 6;

function CoursesContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "semua";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return courses.filter((c) => {
      const matchCategory = activeCategory === "semua" || c.category === activeCategory;
      const matchQuery = c.title.toLowerCase().includes(query.toLowerCase());
      return matchCategory && matchQuery;
    });
  }, [activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-10">
        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Learn Today, Build Tomorrow</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Discover Our <span className="text-primary">Technology Courses</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-md">
              Kuasai skill teknologi terkini dengan kurikulum praktis, mentoring ahli, dan proyek nyata.
            </p>
            <div className="mt-6 relative max-w-md">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-soft" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setPage(1); }}
                placeholder="Cari kursus yang kamu inginkan..."
                className="w-full pl-11 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none"
              />
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm">
              <span className="flex items-center gap-1.5"><BookOpen size={15} className="text-primary" /> <b>{courses.length * 10}+</b> Kursus</span>
              <span className="flex items-center gap-1.5"><Star size={15} className="text-primary fill-primary" /> <b>4.9/5</b> Rating</span>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="rounded-3xl overflow-hidden bg-primary-50">
            <Image src="/assets/illustrations/ilm-roadmap-pengembangan.png" alt="Kursus Orange Kode" width={480} height={420} className="w-full h-auto object-contain" />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mb-6">
          <h2 className="font-bold text-ink mb-1">Jelajahi Kategori</h2>
          <p className="text-sm text-ink-soft mb-4">Pilih jalur belajar sesuai minat dan tujuan kariermu.</p>
          <div className="flex flex-wrap gap-2">
            {courseCategories.map((cat) => (
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
        </motion.div>

        <p className="text-sm text-ink-soft mb-4">Menampilkan {paginated.length} dari {filtered.length} kursus</p>

        {paginated.length === 0 ? (
          <p className="text-center text-ink-soft py-16">Tidak ada kursus yang cocok dengan pencarianmu.</p>
        ) : (
          <motion.div key={`${activeCategory}-${query}-${page}`} initial="hidden" animate="show" variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginated.map((course) => (
              <motion.div key={course.id} variants={fadeUp}>
                <Link href={`/courses/${course.slug}`} className="group block bg-white rounded-2xl border border-stone-100 shadow-sm shadow-stone-200/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={course.image} alt={course.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    {course.tagline && <Badge variant="solid" className="absolute top-3 left-3">{course.tagline}</Badge>}
                    <Badge variant="neutral" className="absolute top-3 right-3 bg-white/90">{course.categoryLabel}</Badge>
                  </div>
                  <div className="p-5">
                    <h3 className="font-bold text-ink leading-snug mb-2 line-clamp-2">{course.title}</h3>
                    <p className="text-xs text-ink-soft line-clamp-2 mb-4">{course.description}</p>
                    <div className="flex items-center justify-between text-xs text-ink-soft">
                      <span className="flex items-center gap-1"><Clock size={13} /> {course.hours}</span>
                      <span className="flex items-center gap-1"><BookOpen size={13} /> {course.modules} Modul</span>
                      <span className="flex items-center gap-1 font-semibold text-ink"><Star size={13} className="fill-primary text-primary" /> {course.rating}</span>
                    </div>
                  </div>
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
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Rocket size={28} className="text-white shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">Siap naik level di dunia teknologi?</h3>
              <p className="text-white/90 text-sm">Mulai perjalanan belajarmu sekarang bersama Orange Kode.</p>
            </div>
          </div>
          <Button href="#" variant="white" icon={ArrowRight}>Lihat Semua Kursus</Button>
        </motion.div>
      </section>
    </>
  );
}

export default function CoursesPage() {
  return (
    <Suspense fallback={null}>
      <CoursesContent />
    </Suspense>
  );
}
