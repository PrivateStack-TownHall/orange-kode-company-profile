"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, User, Mail, Lock, Phone, GraduationCap, Users2, Award } from "lucide-react";
import Button from "@/components/ui/Button";
import StatBar from "@/components/ui/StatBar";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const benefits = [
  { icon: GraduationCap, title: "Akses Ribuan Kursus", text: "Materi lengkap dari dasar hingga mahir." },
  { icon: Users2, title: "Belajar dari Expert", text: "Dibimbing mentor berpengalaman di industri." },
  { icon: Award, title: "Sertifikat Kelulusan", text: "Tingkatkan peluang karier dengan sertifikat resmi." },
  { icon: Users2, title: "Komunitas Aktif", text: "Bergabung dengan ribuan learner dan bangun jaringanmu." },
];

const stats = [
  { value: "85.000+", label: "Learner Aktif" },
  { value: "120+", label: "Kursus Online" },
  { value: "500+", label: "Perusahaan Terpercaya" },
  { value: "4.9/5", label: "Rating Platform" },
];

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-12">
      <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-2 gap-10 items-center">
        <motion.div variants={fadeUp}>
          <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">⭐ Bergabunglah dengan Orange Kode</span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-ink leading-tight">
            Mulai perjalanan belajarmu hari ini, <span className="text-primary">gratis daftar sekarang!</span>
          </h1>
          <p className="mt-4 text-ink-soft max-w-md">
            Buat akun gratis dan akses ribuan materi berkualitas, belajar bersama mentor expert, dan wujudkan karier impianmu di dunia teknologi.
          </p>

          <div className="mt-8 rounded-3xl overflow-hidden bg-primary-50 max-w-md">
            <Image
              src="/assets/illustrations/ilm-form-register.png"
              alt="Dashboard Orange Kode"
              width={520}
              height={380}
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
            <h2 className="text-xl font-extrabold text-ink mb-1">Buat Akun Baru</h2>
            <p className="text-sm text-ink-soft mb-6">Isi data di bawah ini untuk membuat akun Orange Kode.</p>
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1.5">Nama Lengkap</label>
                <div className="relative">
                  <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input required type="text" placeholder="Masukkan nama lengkap" className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                </div>
              </div>
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
                  <input required type={showPassword ? "text" : "password"} placeholder="Buat password" className="w-full pl-10 pr-10 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                  <button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft">
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
                <p className="text-[11px] text-ink-soft mt-1.5">Minimal 8 karakter dengan kombinasi huruf dan angka.</p>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1.5">Konfirmasi Password</label>
                <div className="relative">
                  <Lock size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input required type={showConfirm ? "text" : "password"} placeholder="Ulangi password kamu" className="w-full pl-10 pr-10 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                  <button type="button" onClick={() => setShowConfirm((v) => !v)} className="absolute right-3.5 top-1/2 -translate-y-1/2 text-ink-soft">
                    {showConfirm ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-ink block mb-1.5">Nomor WhatsApp (Opsional)</label>
                <div className="relative">
                  <Phone size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-soft" />
                  <input type="tel" placeholder="Contoh: 0812-3456-7890" className="w-full pl-10 pr-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none" />
                </div>
              </div>
              <label className="flex items-start gap-2 text-xs text-ink-soft">
                <input required type="checkbox" className="accent-primary mt-0.5" />
                Saya setuju dengan <Link href="#" className="text-primary font-semibold">Syarat & Ketentuan</Link> dan{" "}
                <Link href="#" className="text-primary font-semibold">Kebijakan Privasi</Link> Orange Kode.
              </label>
              <Button type="submit" size="lg" className="w-full">Daftar Sekarang</Button>
            </form>

            <div className="flex items-center gap-3 my-6">
              <div className="h-px flex-1 bg-stone-100" />
              <span className="text-xs text-ink-soft">atau daftar dengan</span>
              <div className="h-px flex-1 bg-stone-100" />
            </div>

            <div className="flex gap-3">
              {["Google", "Facebook", "Apple"].map((p) => (
                <button key={p} className="flex-1 py-3 rounded-xl border border-stone-200 text-xs font-semibold text-ink hover:border-primary transition-colors">
                  {p}
                </button>
              ))}
            </div>

            <p className="text-center text-sm text-ink-soft mt-6">
              Sudah punya akun? <Link href="/login" className="text-primary font-semibold">Masuk di sini</Link>
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
