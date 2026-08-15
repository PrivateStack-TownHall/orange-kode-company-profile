"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Clock } from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { courses } from "@/data/courses";
import { fadeUp, viewportOnce } from "@/lib/motion";

export default function CoursesSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    scrollRef.current?.scrollBy({ left: dir * 340, behavior: "smooth" });
  };

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={fadeUp}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8"
      >
        <SectionHeading
          eyebrow="Kursus Populer"
          title="Kursus terbaik untuk"
          titleAccent="mengembangkan kariermu"
        />
        <div className="flex items-center gap-3 shrink-0">
          <Button href="/courses" variant="outline" size="sm">
            Lihat Semua Kursus
          </Button>
          <div className="hidden md:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-ink-soft hover:border-primary hover:text-primary transition-colors"
              aria-label="Sebelumnya"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-stone-200 text-ink-soft hover:border-primary hover:text-primary transition-colors"
              aria-label="Selanjutnya"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </motion.div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto no-scrollbar pb-2 -mx-1 px-1 snap-x">
        {courses.slice(0, 6).map((course, i) => (
          <motion.div
            key={course.id}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            transition={{ delay: i * 0.06 }}
            className="snap-start shrink-0 w-[280px]"
          >
            <Link
              href={`/courses/${course.slug}`}
              className="group block bg-white rounded-2xl border border-stone-100 shadow-sm shadow-stone-200/50 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {course.tagline && (
                  <Badge variant="solid" className="absolute top-3 left-3">
                    {course.tagline}
                  </Badge>
                )}
              </div>
              <div className="p-4">
                <Badge variant="neutral" className="mb-2">
                  {course.categoryLabel}
                </Badge>
                <h3 className="font-bold text-ink leading-snug mb-2 line-clamp-2">{course.title}</h3>
                <div className="flex items-center justify-between text-xs text-ink-soft">
                  <span className="flex items-center gap-1">
                    <Clock size={13} /> {course.hours}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-ink">
                    <Star size={13} className="fill-primary text-primary" /> {course.rating}
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
