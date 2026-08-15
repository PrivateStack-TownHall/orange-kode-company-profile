"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, Mail, Lock, BookOpen, Users2, Award, Users } from "lucide-react";
import Button from "@/components/ui/Button";
import StatBar from "@/components/ui/StatBar";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const benefits = [
  { icon: BookOpen, title: "Materi Terstruktur & Praktis", text: "Kurikulum disusun sistematis dengan studi kasus nyata." },
  { icon: Users2, title: "Mentor Berpengalaman", text: "Belajar langsung dari praktisi industri teknologi." },
  { icon: Award, title: "Sertifikat Kelulusan", text: "Dapatkan sertifikat resmi untuk meningkatkan peluang karier." },
  { icon: Users, title: "Komunitas Aktif", text: "Bergabung dengan ribuan learner dan bangun jaringan profesional." },
];

const stats = [
  { value: "120+", label: "Kursus Online" },
  { value: "85.000+", label: "Learner Aktif" },
  { value: "500+", label: "Perusahaan Terpercaya" },
  { value: "4.9/5", label: "Rating Platform" },
];

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp}>
          <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">Selamat Datang Kembali! 👋</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
            Masuk dan lanjutkan perjalanan belajarmu di <span className="text-primary">Orange Kode</span>
          </h1>
          <p className="mt-4 text-ink-soft max-w-md">
            Akses ribuan materi berkualitas, belajar bersama mentor expert, dan bangun karier impianmu di dunia teknologi.
          </p>

          <div className="mt-8 rounded-3xl overflow-hidden bg-primary-50 max-w-md">
            <Image
              src="/assets/illustrations/ilm-form-login.png"
              alt="Dashboard Orange Kode"
              width={480}
              height={360}
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="mt-8 grid sm:grid-cols-2 gap-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                  <b.icon size={16} className="text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-sm text-ink">{b.title}</p>
                  <p className="text-xs text-ink-soft leading-snug">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <div className="bg-white rounded-3xl border border-stone-100 shadow-sm shadow-stone-200/50 p-7 md:p-8">
            <h2 className="text-xl font-extrabold text-ink mb-1">Login ke Akunmu</h2>
            <p className="text-sm text-ink-soft mb-6">Silakan masuk untuk melanjutkan ke dashboard.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1.5">Email</label>
                <div className="relative">
                  <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input required type="email" placeholder="Masukkan email kamu" className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1.5">Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input required type={showPassword ? "text" : "password"} placeholder="Masukkan password kamu" className="w-full pl-10 pr-10 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs">
                <label className="flex items-center gap-2 text-ink-soft">
                  <input type="checkbox" className="accent-primary" /> Ingat saya
                </label>
                <Link href="#" className="text-primary font-semibold">Lupa password?</Link>
              </div>
              <Button type="submit" size="lg" className="w-full">Masuk</Button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-stone-100" />
              <span className="text-xs text-ink-soft">atau masuk dengan</span>
              <div className="h-px flex-1 bg-stone-100" />
            </div>

            <div className="flex flex-col gap-3">
              {["Google", "Facebook", "Apple"].map((p) => (
                <button key={p} className="w-full py-3 rounded-xl border border-stone-200 text-sm font-semibold text-ink hover:border-primary transition-colors">
                  Lanjutkan dengan {p}
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-6">
              Belum punya akun? <Link href="/register" className="text-primary font-semibold">Daftar sekarang</Link>
            </p>
          </div>
        </motion.div>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mt-14">
        <StatBar stats={stats} />
      </motion.div>
    </section>
  );
}
