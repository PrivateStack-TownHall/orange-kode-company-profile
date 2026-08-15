"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import {
  Play, Star, Users2, ChevronDown, ChevronRight, CheckCircle2,
  Infinity as InfinityIcon, Award, Rocket, Briefcase, ShieldCheck,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { courses, getCourseBySlug } from "@/data/courses";
import { getTechLogo } from "@/data/techstack";
import { formatPrice } from "@/lib/utils";

const benefitIcons = [Rocket, Briefcase, Award, Users2, InfinityIcon, ShieldCheck];

export default function CourseDetailPage({ params }) {
  const { slug } = use(params);
  const course = getCourseBySlug(slug);
  const [openModule, setOpenModule] = useState(0);

  if (!course) notFound();

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-12">
        <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <Link href="/courses" className="hover:text-primary">Courses</Link>
          <ChevronRight size={12} />
          <span className="text-ink font-medium">{course.title}</span>
        </div>

        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10">
          <motion.div variants={fadeUp}>
            {course.tagline && (
              <Badge variant="solid" className="mb-4">
                {course.tagline}
              </Badge>
            )}
            <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight mb-4">{course.title}</h1>
            <p className="text-ink-soft leading-relaxed mb-5 max-w-xl">{course.description}</p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-soft mb-5">
              <span>{course.duration}</span>
              <span>{course.level}</span>
              <span className="flex items-center gap-1 font-semibold text-ink">
                <Star size={14} className="fill-primary text-primary" /> {course.rating} ({course.reviews}+ Ulasan)
              </span>
            </div>
            <div className="flex flex-wrap gap-2 mb-8">
              {course.stack.map((s) => {
                const logo = getTechLogo(s);
                return (
                  <Badge key={s} variant="neutral" className="pl-1.5">
                    {logo ? (
                      <Image src={logo} alt={s} width={16} height={16} className="w-4 h-4 object-contain" />
                    ) : null}
                    {s}
                  </Badge>
                );
              })}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button size="lg">Mulai Belajar Sekarang</Button>
              <Button variant="outline" size="lg" icon={Play} iconPosition="left">Lihat Preview</Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp}>
            <div className="relative rounded-2xl overflow-hidden aspect-video bg-ink">
              <Image src={course.image} alt={course.title} fill className="object-cover opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                  <Play size={24} className="text-primary ml-1" fill="currentColor" />
                </div>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3 bg-white rounded-xl border border-stone-100 p-4">
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white bg-primary-100 flex items-center justify-center text-[10px] font-bold text-primary-dark">
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <p className="text-xs text-ink-soft">
                <b className="text-ink">85.000+</b> learners sudah bergabung. Bergabung sekarang dan mulai perjalananmu!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {course.benefits?.length > 0 && (
        <section className="bg-white border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-5 md:px-8 py-14">
            <p className="text-center text-xs font-bold text-primary uppercase mb-2">Kenapa Harus Belajar di Orange Kode?</p>
            <h2 className="text-2xl font-extrabold text-ink text-center mb-10">Manfaat yang Akan Kamu Dapatkan</h2>
            <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {course.benefits.map((b, i) => {
                const Icon = benefitIcons[i % benefitIcons.length];
                return (
                  <motion.div key={b.title} variants={fadeUp}>
                    <Card className="p-5 h-full" hover={false}>
                      <div className="w-10 h-10 rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                        <Icon size={18} className="text-primary" />
                      </div>
                      <h3 className="font-bold text-sm text-ink mb-1">{b.title}</h3>
                      <p className="text-xs text-ink-soft leading-relaxed">{b.text}</p>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <h2 className="font-bold text-xl text-ink mb-5">Apa yang Akan Kamu Pelajari</h2>
          <div className="flex flex-col gap-3">
            {course.curriculum.map((mod, i) => (
              <div key={mod.title} className="border border-stone-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenModule(openModule === i ? -1 : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left"
                >
                  <span className="font-semibold text-sm text-ink">{mod.title}</span>
                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs text-ink-soft">{mod.meetings} Pertemuan</span>
                    <ChevronDown size={16} className={`text-ink-soft transition-transform ${openModule === i ? "rotate-180" : ""}`} />
                  </div>
                </button>
                {openModule === i && (
                  <div className="px-5 pb-4 text-xs text-ink-soft border-t border-stone-100 pt-3">
                    Materi disampaikan melalui video, studi kasus, dan latihan praktik langsung.
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <Card className="p-6 bg-primary-50 border-none" hover={false}>
            <h2 className="font-bold text-lg text-ink mb-4">Peluang Karier Setelah Lulus</h2>
            <div className="flex flex-col gap-4">
              {course.careers.map((c) => (
                <div key={c.title} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-sm text-ink">{c.title}</p>
                    <p className="text-xs text-ink-soft leading-relaxed">{c.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </section>

      {course.projects?.length > 0 && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 py-14">
          <p className="text-center text-xs font-bold text-primary uppercase mb-2">Portofolio yang Akan Kamu Bangun</p>
          <h2 className="text-2xl font-extrabold text-ink text-center mb-10">Proyek Nyata untuk Portofolio Kamu</h2>
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {course.projects.map((p) => (
              <motion.div key={p.title} variants={fadeUp}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-video bg-primary-50 flex items-center justify-center">
                    <span className="text-lg font-extrabold text-primary-dark">{p.title.split(" ")[0]}</span>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-ink mb-1">{p.title}</h3>
                    <p className="text-xs text-ink-soft leading-relaxed">{p.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="grid lg:grid-cols-[1fr_360px] gap-6">
          <Card className="p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" hover={false}>
            <div>
              <p className="text-xs font-bold text-primary uppercase mb-1">Investasi Terbaik untuk Masa Depanmu</p>
              <h3 className="font-extrabold text-xl text-ink mb-3">Mulai Perjalananmu Sekarang!</h3>
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-extrabold text-primary">{formatPrice(course.price)}</span>
                <span className="text-sm text-ink-soft line-through">{formatPrice(course.originalPrice)}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 mt-4 text-xs text-ink-soft">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> {course.duration}</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Akses Seumur Hidup</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Sertifikat Kelulusan</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-primary" /> Dibimbing Mentor Expert</span>
              </div>
            </div>
            <Button size="lg" className="shrink-0">Daftar Sekarang</Button>
          </Card>

          {course.mentor && (
            <Card className="p-6" hover={false}>
              <p className="text-xs font-bold text-ink-soft uppercase mb-4">Belajar Bersama Mentor Expert</p>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center font-bold text-primary-dark">
                  {course.mentor.name.charAt(0)}
                </div>
                <div>
                  <p className="font-bold text-sm text-ink">{course.mentor.name}</p>
                  <p className="text-xs text-ink-soft">{course.mentor.role}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 text-xs text-ink-soft mb-4">
                {course.mentor.points.map((pt) => (
                  <span key={pt} className="flex items-center gap-1.5"><CheckCircle2 size={12} className="text-primary" /> {pt}</span>
                ))}
              </div>
              <Button variant="outline" size="sm" className="w-full">Lihat Profil Mentor</Button>
            </Card>
          )}
        </motion.div>
      </section>
    </>
  );
}
