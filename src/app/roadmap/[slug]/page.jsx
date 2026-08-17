"use client";

import { use } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ArrowLeft, ArrowRight, Briefcase, TrendingUp, DollarSign, GraduationCap, Rocket } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import RoadmapTimeline from "@/components/roadmap/RoadmapTimeline";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { roadmaps, getRoadmapBySlug } from "@/data/roadmap";

function RoadmapIcon({ name, ...props }) {
  const Icon = Icons[name] ?? Icons.Route;
  return <Icon {...props} />;
}

export default function RoadmapDetailPage({ params }) {
  const { slug } = use(params);
  const roadmap = getRoadmapBySlug(slug);

  if (!roadmap) notFound();

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <Link href="/roadmap" className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary mb-5 hover:underline">
          <ArrowLeft size={15} /> Kembali ke Roadmap
        </Link>

        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">{roadmap.title} Roadmap</h1>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">{roadmap.description}</p>
            <div className="mt-7">
              <Button href={`/courses?category=${roadmap.courseCategory}`} icon={ArrowRight}>
                Lihat Kursus {roadmap.title}
              </Button>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src="/assets/illustrations/mockup-laptop.png"
              alt={`Ilustrasi ${roadmap.title} Roadmap`}
              width={420}
              height={340}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Jobs / salary / prospects */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
          <Card className="p-6 md:p-8 bg-primary-50 border-none" hover={false}>
            <p className="flex items-center gap-2 font-bold text-ink mb-1">
              <Briefcase size={18} className="text-primary" /> Pekerjaan di Bidang {roadmap.title}
            </p>
            <p className="text-sm text-ink-soft mb-6">Berbagai peluang karier yang bisa kamu raih setelah menguasai skill {roadmap.title}.</p>

            <div className="grid md:grid-cols-3 gap-5">
              <Card className="p-5" hover={false}>
                <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                  <Briefcase size={15} className="text-primary" /> Pekerjaan / Role
                </p>
                <ul className="flex flex-col gap-2">
                  {roadmap.jobs.map((j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-ink-soft">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" /> {j}
                    </li>
                  ))}
                </ul>
              </Card>

              <Card className="p-5" hover={false}>
                <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                  <DollarSign size={15} className="text-primary" /> Range Gaji (Indonesia)
                </p>
                <div className="flex flex-col gap-2.5">
                  {[["Junior", roadmap.salaryRange.junior], ["Mid Level", roadmap.salaryRange.mid], ["Senior", roadmap.salaryRange.senior]].map(([label, val]) => (
                    <div key={label} className="flex items-center justify-between text-sm">
                      <span className="text-ink-soft">{label}</span>
                      <span className="font-bold text-primary">Rp {val}</span>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5" hover={false}>
                <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                  <TrendingUp size={15} className="text-primary" /> Prospek ke Depan
                </p>
                <ul className="flex flex-col gap-2">
                  {roadmap.prospects.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-xs text-ink-soft leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" /> {p}
                    </li>
                  ))}
                </ul>
              </Card>
            </div>
          </Card>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-ink">Langkah Roadmap {roadmap.title}</h2>
          <p className="text-sm text-ink-soft mt-2">Ikuti langkah-langkah berikut untuk membangun fondasi skill hingga siap berkarier.</p>
        </motion.div>
        <RoadmapTimeline steps={roadmap.steps} />
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <GraduationCap size={30} className="text-white shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">Siap Memulai Perjalananmu?</h3>
              <p className="text-white/90 text-sm">Kuasai skill yang dibutuhkan dan bangun karier impianmu melalui roadmap dan kursus {roadmap.title} di Orange Kode.</p>
            </div>
          </div>
          <Button href={`/courses?category=${roadmap.courseCategory}`} variant="white" icon={ArrowRight}>
            Lihat Semua Kursus
          </Button>
        </motion.div>
      </section>
    </>
  );
}
