"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Send,
  LogIn,
  UserPlus,
} from "lucide-react";

const menuLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Roadmap", href: "/roadmap" },
  { label: "Instructors", href: "/instructors" },
  { label: "Galleries", href: "/galleries" },
  { label: "Articles", href: "/articles" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const accountLinks = [
  { label: "Login", href: "/login", icon: LogIn },
  { label: "Register", href: "/register", icon: UserPlus },
];

const categoryLinks = [
  { label: "Frontend Development", category: "frontend" },
  { label: "Backend Development", category: "backend" },
  { label: "Fullstack Development", category: "fullstack" },
  { label: "Mobile Development", category: "mobile" },
  { label: "Data Science", category: "data-science" },
  { label: "UI/UX Design", category: "design" },
];

const helpLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Pusat Bantuan", href: "/pusat-bantuan" },
  { label: "Syarat & Ketentuan", href: "/syarat-ketentuan" },
  { label: "Kebijakan Privasi", href: "/kebijakan-privasi" },
  { label: "Kebijakan Refund", href: "/kebijakan-refund" },
];

const footerStats = [
  { value: "85.000+", label: "Learner Aktif" },
  { value: "120+", label: "Kursus Online" },
  { value: "500+", label: "Perusahaan Terpercaya" },
  { value: "4.9/5", label: "Rating Platform" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="border-t border-stone-100 bg-stone-50/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8 pt-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white border border-stone-100 rounded-2xl divide-x divide-stone-100">
          {footerStats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center text-center py-5 px-2"
            >
              <span className="text-xl md:text-2xl font-extrabold text-primary font-display">
                {s.value}
              </span>
              <span className="text-[11px] md:text-xs text-ink-soft mt-1">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-2 lg:grid-cols-5 gap-10">
        {/* Brand */}
        <div className="col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg text-white">
              <Image src="/logo.png" alt="Logo" width={200} height={200} />
            </span>
            <span className="font-display font-extrabold text-lg text-ink">
              <span className="text-primary">Orange</span> Kode
            </span>
          </Link>
          <p className="text-sm text-ink-soft leading-relaxed mb-4 max-w-xs">
            Platform belajar & bootcamp teknologi berbasis Indonesia dengan
            kurikulum praktis dan mentor berpengalaman.
          </p>
          <div className="flex gap-2 text-ink-soft">
            {[Instagram, Youtube, Linkedin, Twitter, MessageCircle].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="w-9 h-9 rounded-lg bg-white border border-stone-200 flex items-center justify-center hover:border-primary hover:text-primary cursor-pointer transition-colors"
                >
                  <Icon size={16} />
                </span>
              ),
            )}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-ink mb-4">Menu</h3>
          <div className="flex flex-col gap-2.5 text-sm text-ink-soft">
            {menuLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-sm text-ink mb-4">
            Kategori Kursus
          </h3>
          <div className="flex flex-col gap-2.5 text-sm text-ink-soft">
            {categoryLinks.map((link) => (
              <Link
                key={link.label}
                href={`/courses?category=${link.category}`}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-sm text-ink mb-4">Bantuan</h3>
          <div className="flex flex-col gap-2.5 text-sm text-ink-soft mb-6">
            {helpLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="col-span-2 lg:col-span-5 lg:mt-2">
          <div className="bg-white border border-stone-100 rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-5">
            <div>
              <h3 className="font-bold text-ink mb-1">
                Dapatkan update terbaru dari Orange Kode
              </h3>
              <p className="text-sm text-ink-soft">
                Info kursus baru, event komunitas, dan promo spesial langsung ke
                inbox kamu.
              </p>
            </div>
            {subscribed ? (
              <p className="text-sm font-semibold text-primary shrink-0">
                Terima kasih! Kamu sudah berlangganan. 🎉
              </p>
            ) : (
              <form
                onSubmit={handleSubscribe}
                className="flex w-full md:w-auto gap-2 shrink-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email kamu"
                  className="flex-1 md:w-64 px-4 py-2.5 rounded-lg border border-stone-200 text-sm focus:border-primary outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0"
                >
                  <Send size={14} />
                  <span className="hidden sm:inline">Berlangganan</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-stone-100">
        <div className="max-w-7xl mx-auto px-5 md:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-ink-soft">
          <span>
            © {new Date().getFullYear()} Orange Kode. All rights reserved.
          </span>
          <span>Dibuat dengan ❤️ untuk Indonesia</span>
        </div>
      </div>
    </footer>
  );
}
