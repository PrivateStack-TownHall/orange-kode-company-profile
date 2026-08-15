"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BookOpen, Users2, Target, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import StatBar from "@/components/ui/StatBar";
import SectionHeading from "@/components/shared/SectionHeading";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { companyValues, teamMembers } from "@/data/instructors";

const aboutStats = [
  { label: "Kursus Online", value: "120+" },
  { label: "Learner Aktif", value: "85.000+" },
  { label: "Perusahaan Terpercaya", value: "500+" },
  { label: "Rating Platform", value: "4.9/5" },
];

export default function AboutPage() {
  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-16">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs md:text-sm font-bold tracking-wide text-primary uppercase mb-3">
              About Orange Kode
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Empowering Indonesia{" "}
              <span className="text-primary">Through Technology Education</span>
            </h1>
            <p className="mt-5 text-ink-soft leading-relaxed">
              Orange Kode hadir untuk membantu siapa saja menguasai teknologi
              melalui pembelajaran online yang praktis, terstruktur, dan relevan
              dengan kebutuhan industri.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <BookOpen size={18} />
                  <span className="font-bold text-ink">2019</span>
                </div>
                <p className="text-xs text-ink-soft">Tahun Berdiri</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Users2 size={18} />
                  <span className="font-bold text-ink">85.000+</span>
                </div>
                <p className="text-xs text-ink-soft">Learner Terbantu</p>
              </div>
              <div>
                <div className="flex items-center gap-2 text-primary mb-1">
                  <Target size={18} />
                  <span className="font-bold text-ink">Misi Kami</span>
                </div>
                <p className="text-xs text-ink-soft">
                  Membangun Talenta Digital
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="relative">
            <div className="rounded-3xl overflow-hidden bg-primary-50">
              <Image
                src="/assets/illustrations/ilm-about.png"
                alt="About Orange Kode"
                width={520}
                height={520}
                className="w-full h-auto object-contain"
              />
            </div>
            <Card
              className="absolute -bottom-6 -left-4 max-w-[240px] p-5 hidden sm:block"
              hover={false}
            >
              <p className="text-sm text-ink-soft italic leading-relaxed">
                &ldquo;Kami percaya, setiap orang berhak mendapatkan kesempatan
                yang sama untuk berkembang di dunia teknologi.&rdquo;
              </p>
              <p className="text-xs font-bold text-primary mt-3">
                — Orange Kode Team
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-white border-y border-stone-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
          >
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">
              Our Story
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-ink mb-4">
              Berawal dari Masalah, Lahir untuk Solusi
            </h2>
            <p className="text-ink-soft leading-relaxed mb-4">
              Kami melihat banyak talenta hebat di Indonesia yang kesulitan
              mendapatkan akses belajar teknologi berkualitas dan terstruktur.
            </p>
            <p className="text-ink-soft leading-relaxed mb-6">
              Maka dari itu, Orange Kode hadir dengan misi sederhana: memberikan
              pendidikan teknologi terbaik yang terjangkau, praktis, dan bisa
              diakses oleh siapa saja, di mana saja.
            </p>
            <Button href="/courses" variant="outline" icon={ArrowRight}>
              Pelajari Perjalanan Kami
            </Button>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="rounded-3xl overflow-hidden"
          >
            <Image
              src="/assets/illustrations/ilm-komunitas-diskusi.png"
              alt="Tim Orange Kode bekerja"
              width={560}
              height={400}
              className="w-full h-auto object-cover rounded-3xl"
            />
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <SectionHeading
          title="Nilai-Nilai yang"
          titleAccent="Kami Pegang"
          align="center"
          className="mb-10 max-w-none"
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5"
        >
          {companyValues.map((v) => (
            <motion.div key={v.title} variants={fadeUp}>
              <Card className="p-5 h-full text-center" hover={false}>
                <div className="w-11 h-11 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-3">
                  <Target size={18} className="text-primary" />
                </div>
                <h3 className="font-bold text-sm text-ink mb-2">{v.title}</h3>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {v.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="bg-primary-50 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="font-bold text-ink text-lg mb-1">
              Dampak yang Kami Ciptakan
            </h3>
            <p className="text-sm text-ink-soft max-w-md">
              Bersama learner dan partner, kami terus bertumbuh dan memberikan
              impact yang nyata.
            </p>
          </div>
          <StatBar
            stats={aboutStats}
            className="bg-transparent border-none shadow-none divide-x-0"
          />
        </motion.div>
      </section>

      <section className="bg-white border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
          <SectionHeading
            title="Dibangun oleh Praktisi,"
            titleAccent="untuk Masa Depanmu"
            subtitle="Kami adalah tim praktisi teknologi, educator, dan problem solver yang berkomitmen memberikan pengalaman belajar terbaik untukmu."
            align="center"
            className="mb-10 max-w-none"
          />
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={container}
            className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6"
          >
            {teamMembers.map((m) => (
              <motion.div
                key={m.name}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-primary-100 flex items-center justify-center text-lg font-bold text-primary-dark mb-3">
                  {m.name.charAt(0)}
                </div>
                <p className="font-semibold text-xs text-ink">{m.name}</p>
                <p className="text-[11px] text-ink-soft">{m.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-12 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-2xl font-extrabold text-white mb-1">
              Siap memulai perjalanan belajarmu bersama Orange Kode?
            </h3>
            <p className="text-white/90 text-sm">
              Belajar kapan saja, di mana saja, dan raih masa depan cerahmu.
            </p>
          </div>
          <Button href="/courses" variant="white" icon={ArrowRight}>
            Jelajahi Semua Kursus
          </Button>
        </motion.div>
      </section>
    </>
  );
}
