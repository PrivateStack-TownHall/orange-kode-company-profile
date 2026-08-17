"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { ChevronRight, ArrowRight, Rocket, Flag, Clock, BookOpen } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { roadmaps, featuredRoadmap, otherRoadmaps } from "@/data/roadmap";

function RoadmapIcon({ name, ...props }) {
  const Icon = Icons[name] ?? Icons.Route;
  return <Icon {...props} />;
}

export default function RoadmapPage() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-primary font-medium">Roadmap</span>
        </div>

        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Temukan <span className="text-primary">roadmap kariermu.</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-lg">
              Panduan belajar terstruktur dari fundamental, skill teknis, hingga project yang perlu kamu kuasai untuk mempersiapkan karier di dunia teknologi.
            </p>
            <div className="mt-7">
              <Button href="#pilih-roadmap" icon={ArrowRight}>Jelajahi Roadmap</Button>
            </div>
          </motion.div>
          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src="/assets/illustrations/ilm-roadmap-karier.png"
              alt="Ilustrasi Roadmap Karier"
              width={420}
              height={340}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Roadmap grid */}
      <section id="pilih-roadmap" className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <SectionHeading title="Pilih Roadmap" titleAccent="Kariermu" subtitle="Temukan jalur belajar yang sesuai dengan minat dan tujuan kariermu di dunia teknologi." align="center" className="mb-10 max-w-none" />

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {roadmaps.map((r) => (
            <motion.div key={r.slug} variants={fadeUp}>
              <Link href={`/roadmap/${r.slug}`}>
                <Card className="p-5 h-full">
                  <span className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center mb-4">
                    <RoadmapIcon name={r.icon} size={20} className="text-primary" />
                  </span>
                  <h3 className="font-bold text-ink mb-1.5">{r.title}</h3>
                  <p className="text-xs text-ink-soft leading-relaxed mb-4">{r.shortDesc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1.5">
                      {r.tags.slice(0, 2).map((t) => (
                        <Badge key={t} variant="neutral" className="text-[10px]">{t}</Badge>
                      ))}
                    </div>
                    <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                      <ArrowRight size={14} className="text-white" />
                    </span>
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Featured roadmap banner */}
      {featuredRoadmap && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary-50 to-white border-none grid lg:grid-cols-[1fr_auto] gap-8 items-center" hover={false}>
              <div>
                <Badge variant="solid" icon={Flag} className="mb-3">Roadmap Terpopuler</Badge>
                <h3 className="text-2xl font-extrabold text-ink mb-2">{featuredRoadmap.title} Roadmap</h3>
                <p className="text-sm text-ink-soft leading-relaxed mb-5 max-w-xl">{featuredRoadmap.description}</p>
                <div className="flex flex-wrap gap-6 mb-6 text-xs text-ink-soft">
                  <span className="flex items-center gap-1.5 font-semibold text-ink"><BookOpen size={14} className="text-primary" /> Terstruktur</span>
                  <span className="flex items-center gap-1.5 font-semibold text-ink"><Icons.Hammer size={14} className="text-primary" /> Praktis</span>
                  <span className="flex items-center gap-1.5 font-semibold text-ink"><Icons.Briefcase size={14} className="text-primary" /> Siap Karier</span>
                </div>
                <Button href={`/roadmap/${featuredRoadmap.slug}`} icon={ArrowRight}>Lihat Roadmap</Button>
              </div>
              <div className="hidden lg:flex justify-center">
                <span className="w-40 h-40 rounded-full bg-primary/10 flex items-center justify-center">
                  <RoadmapIcon name={featuredRoadmap.icon} size={64} className="text-primary" />
                </span>
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Other roadmaps strip */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <SectionHeading title="Roadmap" titleAccent="Lainnya" subtitle="Jelajahi roadmap lainnya dan temukan jalur belajar yang sesuai dengan passionmu." align="center" className="mb-10 max-w-none" />
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {otherRoadmaps.map((r) => (
            <motion.div key={r.slug} variants={fadeUp}>
              <Link href={`/roadmap/${r.slug}`}>
                <Card className="p-4 h-full text-center">
                  <span className="w-10 h-10 mx-auto rounded-lg bg-primary-50 flex items-center justify-center mb-3">
                    <RoadmapIcon name={r.icon} size={17} className="text-primary" />
                  </span>
                  <h4 className="font-bold text-xs text-ink mb-1.5">{r.title}</h4>
                  <p className="text-[10px] text-ink-soft">{r.stepsCount} Steps</p>
                  <p className="text-[10px] text-ink-soft">~{r.hoursEstimate} Hours</p>
                </Card>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Rocket size={28} className="text-white shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">Siap memulai perjalanan kariermu?</h3>
              <p className="text-white/90 text-sm">Pilih roadmap yang kamu inginkan dan mulai belajar hari ini.</p>
            </div>
          </div>
          <Button href="#pilih-roadmap" variant="white" icon={ArrowRight}>Jelajahi Roadmap</Button>
        </motion.div>
      </section>
    </>
  );
}
