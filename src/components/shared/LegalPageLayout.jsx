"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { Mail, CalendarDays } from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const statusStyles = {
  success: "bg-green-50 border-green-100 text-green-700",
  warning: "bg-amber-50 border-amber-100 text-amber-700",
  danger: "bg-red-50 border-red-100 text-red-700",
};

function DynamicIcon({ name, ...props }) {
  const Icon = Icons[name] ?? Icons.FileText;
  return <Icon {...props} />;
}

export default function LegalPageLayout({ data }) {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div variants={fadeUp}>
            <div className="text-xs text-ink-soft mb-4 flex items-center gap-1.5">
              <Link href="/" className="hover:text-primary">Home</Link>
              <Icons.ChevronRight size={12} />
              <span className="text-primary font-medium">{data.title} {data.titleAccent}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              {data.title} <span className="text-primary">{data.titleAccent}</span>
            </h1>
            <p className="mt-4 text-ink-soft leading-relaxed max-w-xl">{data.subtitle}</p>
            <p className="mt-4 flex items-center gap-2 text-xs text-ink-soft">
              <CalendarDays size={14} /> Terakhir diperbarui: {data.lastUpdated}
            </p>
          </motion.div>
          {data.illustration && (
            <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
              <Image src={data.illustration} alt={`Ilustrasi ${data.title} ${data.titleAccent}`} width={420} height={340} className="w-full max-w-sm h-auto object-contain" />
            </motion.div>
          )}
        </motion.div>

        {data.highlights && (
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-3 gap-4 mt-10">
            {data.highlights.map((h) => (
              <motion.div key={h.title} variants={fadeUp}>
                <Card className="p-5 flex items-center gap-3 bg-primary-50 border-none" hover={false}>
                  <span className="w-10 h-10 rounded-lg bg-white flex items-center justify-center shrink-0">
                    <DynamicIcon name={h.icon} size={18} className="text-primary" />
                  </span>
                  <div>
                    <p className="font-bold text-sm text-ink">{h.title}</p>
                    <p className="text-xs text-ink-soft">{h.text}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>

      {/* Table of contents (only when there are enough sections to warrant it) */}
      {data.sections?.length > 4 && (
        <section className="max-w-7xl mx-auto px-5 md:px-8 pb-10">
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp}>
            <Card className="p-6 bg-primary-50 border-none" hover={false}>
              <p className="flex items-center gap-2 font-bold text-sm text-ink mb-4">
                <Icons.List size={16} className="text-primary" /> Daftar Isi
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-2">
                {data.sections.map((s) => (
                  <a key={s.number} href={`#section-${s.number}`} className="text-sm text-ink-soft hover:text-primary transition-colors">
                    {s.number}. {s.title}
                  </a>
                ))}
              </div>
            </Card>
          </motion.div>
        </section>
      )}

      {/* Sections */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className={data.sections.length > 4 ? "grid md:grid-cols-2 gap-5" : "flex flex-col gap-5"}>
          {data.sections.map((s) => (
            <motion.div key={s.number} variants={fadeUp} id={`section-${s.number}`} className={s.wide ? "md:col-span-2" : ""}>
              <Card className="p-6 h-full" hover={false}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="w-9 h-9 rounded-lg bg-primary-50 flex items-center justify-center shrink-0">
                    <DynamicIcon name={s.icon} size={17} className="text-primary" />
                  </span>
                  <h2 className="font-bold text-ink">{s.number}. {s.title}</h2>
                </div>

                {s.body && (
                  <p className="text-sm text-ink-soft leading-relaxed mb-3">
                    {s.body}{" "}
                    {s.linkTo && (
                      <Link href={s.linkTo.href} className="text-primary font-semibold hover:underline">
                        {s.linkTo.label}
                      </Link>
                    )}
                  </p>
                )}

                {s.list && (
                  <ul className="flex flex-col gap-2 mb-2">
                    {s.list.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {s.subsections && (
                  <div className="flex flex-col gap-3 mt-2">
                    {s.subsections.map((sub) => (
                      <div key={sub.title}>
                        <p className="font-semibold text-sm text-ink mb-1">{sub.title}</p>
                        {sub.text && <p className="text-sm text-ink-soft leading-relaxed">{sub.text}</p>}
                        {sub.list && (
                          <ul className="flex flex-col gap-1.5 mt-1">
                            {sub.list.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-ink-soft leading-relaxed">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {s.body2 && <p className="text-sm text-ink-soft leading-relaxed mt-3">{s.body2}</p>}

                {s.statusBoxes && (
                  <div className="grid sm:grid-cols-3 gap-3 mt-3">
                    {s.statusBoxes.map((box) => (
                      <div key={box.title} className={`rounded-xl border p-4 ${statusStyles[box.status]}`}>
                        <div className="flex items-center gap-2 mb-1.5">
                          {box.status === "success" && <Icons.CheckCircle2 size={16} />}
                          {box.status === "warning" && <Icons.AlertTriangle size={16} />}
                          {box.status === "danger" && <Icons.XCircle size={16} />}
                          <p className="font-bold text-sm">{box.title}</p>
                        </div>
                        <p className="text-xs leading-relaxed">{box.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {s.steps && (
                  <div className="flex flex-col gap-3 mt-2">
                    {s.steps.map((step, i) => (
                      <div key={step.title} className="flex gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        <div>
                          <p className="font-semibold text-sm text-ink">{step.title}</p>
                          <p className="text-xs text-ink-soft leading-relaxed">{step.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {s.note && (
                  <div className="mt-4 flex gap-3 rounded-xl bg-blue-50 border border-blue-100 p-4">
                    <Icons.Info size={16} className="text-blue-600 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-semibold text-sm text-blue-900">{s.note.title}</p>
                      <p className="text-xs text-blue-800 leading-relaxed">{s.note.text}</p>
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {data.specialNote && (
          <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={fadeUp} className="mt-5">
            <Card className="p-5 flex gap-3 bg-amber-50 border-amber-100" hover={false}>
              <Icons.Lightbulb size={18} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="font-bold text-sm text-ink mb-1">Kondisi Khusus</p>
                <p className="text-xs text-ink-soft leading-relaxed">{data.specialNote}</p>
              </div>
            </Card>
          </motion.div>
        )}
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold text-white mb-1">{data.ctaTitle}</h3>
            <p className="text-white/90 text-sm">{data.ctaText}</p>
          </div>
          <Button href="/contact" variant="white" icon={Mail} iconPosition="left" className="shrink-0">
            Hubungi Kami
          </Button>
        </motion.div>
      </section>
    </>
  );
}
