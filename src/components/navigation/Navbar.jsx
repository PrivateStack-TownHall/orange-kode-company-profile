"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Mail,
  Code2,
  Server,
  Layers,
  Smartphone,
  LineChart,
  PenTool,
  BookOpen,
  Building2,
  Users2,
  Images,
  Route,
  MessageSquareQuote,
  Newspaper,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { courseCategories } from "@/data/courses";

// Simple top-level links (icon + label + href)
const navLinks = [
  { label: "Roadmap", href: "/roadmap", icon: Route },
  { label: "Testimonials", href: "/testimonials", icon: MessageSquareQuote },
  { label: "Articles", href: "/articles", icon: Newspaper },
];

// "About Us" dropdown items
const aboutLinks = [
  { label: "About", href: "/about", icon: Building2 },
  { label: "Instructors", href: "/instructors", icon: Users2 },
  { label: "Galleries", href: "/galleries", icon: Images },
];

const categoryIcons = {
  frontend: Code2,
  backend: Server,
  fullstack: Layers,
  mobile: Smartphone,
  "data-science": LineChart,
  design: PenTool,
};

export default function Navbar() {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const dropdownRef = useRef(null);
  const aboutDropdownRef = useRef(null);

  // Close dropdowns on outside click (so they don't stay stuck open and
  // swallow clicks on other navbar links / page content behind them).
  useEffect(() => {
    function handleClickOutside(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setCoursesOpen(false);
      }
      if (
        aboutDropdownRef.current &&
        !aboutDropdownRef.current.contains(e.target)
      ) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns whenever the route changes so they never linger over
  // the new page content.
  useEffect(() => {
    setCoursesOpen(false);
    setAboutOpen(false);
    setMobileOpen(false);
  }, [pathname]);

  const goToCategory = (catId) => {
    setCoursesOpen(false);
    router.push(`/courses?category=${catId}`);
  };

  const isAboutActive = aboutLinks.some((l) => pathname === l.href);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-100">
      <div className="max-w-7xl mx-auto px-5 md:px-8 h-[76px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="relative flex items-center justify-center w-9 h-9 rounded-lg text-white">
            <Image src="/logo.png" alt="Logo" width={200} height={200} />
          </span>
          <span className="font-display font-extrabold text-lg text-ink">
            <span className="text-primary">Orange</span> Kode
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-7 font-semibold text-sm text-ink">
          {/* Courses dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setCoursesOpen((v) => !v)}
              aria-expanded={coursesOpen}
              className={cn(
                "flex items-center gap-1.5 py-2 hover:text-primary transition-colors cursor-pointer",
                (pathname.startsWith("/courses") || coursesOpen) &&
                  "text-primary",
              )}
            >
              <BookOpen size={16} />
              Courses
              <ChevronDown
                size={15}
                className={cn(
                  "transition-transform",
                  coursesOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {coursesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white shadow-xl shadow-stone-300/30 border border-stone-100 rounded-2xl p-4 w-[380px] z-50"
                >
                  <p className="text-[11px] font-bold text-ink-soft uppercase tracking-wide px-1 mb-2">
                    Kategori Kursus
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {courseCategories
                      .filter((c) => c.id !== "semua")
                      .map((cat) => {
                        const Icon = categoryIcons[cat.id] ?? Code2;
                        return (
                          <button
                            key={cat.id}
                            type="button"
                            onClick={() => goToCategory(cat.id)}
                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium text-ink-soft hover:bg-primary-50 hover:text-primary transition-colors text-left cursor-pointer"
                          >
                            <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                              <Icon size={15} className="text-primary" />
                            </span>
                            {cat.label}
                          </button>
                        );
                      })}
                  </div>
                  <div className="border-t border-stone-100 mt-3 pt-3 px-1">
                    <Link
                      href="/courses"
                      onClick={() => setCoursesOpen(false)}
                      className="text-sm font-semibold text-primary hover:underline"
                    >
                      Lihat semua kursus →
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* About Us dropdown */}
          <div className="relative" ref={aboutDropdownRef}>
            <button
              type="button"
              onClick={() => setAboutOpen((v) => !v)}
              aria-expanded={aboutOpen}
              className={cn(
                "flex items-center gap-1.5 py-2 hover:text-primary transition-colors cursor-pointer",
                (isAboutActive || aboutOpen) && "text-primary",
              )}
            >
              <Building2 size={16} />
              About Us
              <ChevronDown
                size={15}
                className={cn(
                  "transition-transform",
                  aboutOpen && "rotate-180",
                )}
              />
            </button>

            <AnimatePresence>
              {aboutOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.15 }}
                  className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 bg-white shadow-xl shadow-stone-300/30 border border-stone-100 rounded-2xl p-3 w-[220px] z-50"
                >
                  <div className="flex flex-col gap-1">
                    {aboutLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setAboutOpen(false)}
                        className={cn(
                          "flex items-center gap-2.5 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors",
                          pathname === link.href
                            ? "bg-primary-50 text-primary"
                            : "text-ink-soft hover:bg-primary-50 hover:text-primary",
                        )}
                      >
                        <span className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                          <link.icon size={15} className="text-primary" />
                        </span>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Roadmap, Testimonials, Articles */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center gap-1.5 py-2 hover:text-primary transition-colors",
                pathname === link.href && "text-primary",
              )}
            >
              <link.icon size={16} />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right action: Contact */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <Mail size={16} />
            Contact
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center text-ink"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden border-t border-stone-100 bg-white"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {/* Courses */}
              <Link
                href="/courses"
                className="flex items-center gap-2 py-2.5 font-semibold text-ink"
                onClick={() => setMobileOpen(false)}
              >
                <BookOpen size={16} />
                Courses
              </Link>
              <div className="grid grid-cols-2 gap-1.5 pl-3 mb-2">
                {courseCategories
                  .filter((c) => c.id !== "semua")
                  .map((cat) => (
                    <Link
                      key={cat.id}
                      href={`/courses?category=${cat.id}`}
                      className="text-xs text-ink-soft py-1.5"
                      onClick={() => setMobileOpen(false)}
                    >
                      {cat.label}
                    </Link>
                  ))}
              </div>

              {/* About Us */}
              <span className="flex items-center gap-2 py-2.5 font-semibold text-ink">
                <Building2 size={16} />
                About Us
              </span>
              <div className="flex flex-col gap-1.5 pl-3 mb-2">
                {aboutLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-xs text-ink-soft py-1.5"
                    onClick={() => setMobileOpen(false)}
                  >
                    <link.icon size={14} />
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Roadmap, Testimonials, Articles */}
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 py-2.5 font-semibold text-ink"
                  onClick={() => setMobileOpen(false)}
                >
                  <link.icon size={16} />
                  {link.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="flex items-center justify-center gap-2 mt-3 px-4 py-2.5 rounded-lg bg-primary text-white text-sm font-semibold"
                onClick={() => setMobileOpen(false)}
              >
                <Mail size={16} />
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
