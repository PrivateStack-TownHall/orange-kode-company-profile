import Link from "next/link";
import {
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  MessageCircle,
  Hexagon,
} from "lucide-react";
import Image from "next/image";

const menuLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Instructors", href: "/instructors" },
  { label: "Articles", href: "/articles" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Login", href: "/login" },
  { label: "Register", href: "/register" },
];

const categoryLinks = [
  "Frontend Development",
  "Backend Development",
  "Fullstack Development",
  "Mobile Development",
  "Data Science",
  "UI/UX Design",
];

const helpLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Pusat Bantuan", href: "/faq" },
  { label: "Syarat & Ketentuan", href: "/faq" },
  { label: "Kebijakan Privasi", href: "/faq" },
  { label: "Kebijakan Refund", href: "/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-stone-100 bg-white mt-20">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-14 grid grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-white">
              <Image src="/logo.png" alt="Logo" width={200} height={200} />{" "}
            </span>
            <span className="font-display font-extrabold text-lg text-ink">
              <span className="text-primary">Orange</span> Kode
            </span>
          </Link>
          <p className="text-sm text-ink-soft leading-relaxed mb-4">
            Platform belajar & bootcamp teknologi berbasis Indonesia dengan
            kurikulum praktis dan mentor berpengalaman.
          </p>
          <div className="flex gap-3 text-ink-soft">
            <Instagram
              size={18}
              className="hover:text-primary cursor-pointer transition-colors"
            />
            <Youtube
              size={18}
              className="hover:text-primary cursor-pointer transition-colors"
            />
            <Linkedin
              size={18}
              className="hover:text-primary cursor-pointer transition-colors"
            />
            <Twitter
              size={18}
              className="hover:text-primary cursor-pointer transition-colors"
            />
            <MessageCircle
              size={18}
              className="hover:text-primary cursor-pointer transition-colors"
            />
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
            {categoryLinks.map((label) => (
              <Link
                key={label}
                href="/courses"
                className="hover:text-primary transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div>
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
