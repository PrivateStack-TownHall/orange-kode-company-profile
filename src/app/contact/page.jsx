"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Handshake,
  Headphones,
  ShieldCheck,
  Rocket,
} from "lucide-react";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import AccordionItem from "@/components/ui/Accordion";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { contactFaqItems } from "@/data/faq";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: [
      "hello@orangekode.com",
      "Kami akan merespon emailmu secepat mungkin.",
    ],
  },
  {
    icon: Phone,
    title: "Telepon / WhatsApp",
    lines: ["+62 812-3456-7890", "Senin - Jumat, 09.00 - 18.00 WIB"],
  },
  {
    icon: MapPin,
    title: "Alamat Kantor",
    lines: [
      "Orange Kode Indonesia",
      "Jl. Jend. Sudirman No. Kav 52-53, Jakarta Selatan",
    ],
  },
  { icon: MessageCircle, title: "Media Sosial", lines: ["@orangekode"] },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-12 pb-14">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="grid lg:grid-cols-2 gap-10 items-center"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-block text-xs font-bold tracking-wide text-primary uppercase mb-3">
              Hubungi Kami
            </span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Kami Siap Membantu{" "}
              <span className="text-primary">Perjalanan Belajarmu</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-md">
              Punya pertanyaan, butuh saran, atau ingin kerja sama? Tim Orange
              Kode siap membantu kamu.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Headphones size={16} className="text-primary" /> Respon Cepat
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle size={16} className="text-primary" /> Tim Ramah
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={16} className="text-primary" /> Solusi
                Terbaik
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-3xl overflow-hidden bg-primary-50"
          >
            <Image
              src="/assets/illustrations/ilm-contact-support.png"
              alt="Contact Orange Kode"
              width={520}
              height={420}
              className="w-full h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16 grid lg:grid-cols-[340px_1fr] gap-6">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="flex flex-col gap-4"
        >
          {contactInfo.map((c) => (
            <motion.div key={c.title} variants={fadeUp}>
              <Card className="p-5 flex gap-4" hover={false}>
                <div className="w-11 h-11 rounded-xl bg-primary-50 flex items-center justify-center shrink-0">
                  <c.icon size={19} className="text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-sm text-ink mb-1">{c.title}</h3>
                  {c.lines.map((l) => (
                    <p
                      key={l}
                      className="text-xs text-ink-soft leading-relaxed"
                    >
                      {l}
                    </p>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
          <motion.div variants={fadeUp}>
            <Card className="p-5 bg-primary-50 border-none" hover={false}>
              <Handshake size={20} className="text-primary mb-2" />
              <h3 className="font-bold text-sm text-ink mb-1">
                Tertarik Bekerja Sama?
              </h3>
              <p className="text-xs text-ink-soft mb-3">
                Kami terbuka untuk peluang kolaborasi dengan perusahaan dan
                institusi.
              </p>
              <Button href="#" variant="outline" size="sm">
                Ajukan Kerja Sama
              </Button>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
        >
          <Card className="p-6 md:p-8" hover={false}>
            <h2 className="font-bold text-xl text-ink mb-1">Kirim Pesan</h2>
            <p className="text-sm text-ink-soft mb-6">
              Isi form di bawah ini dan tim kami akan menghubungi kamu kembali.
            </p>
            {submitted ? (
              <div className="rounded-xl bg-green-50 text-green-700 text-sm p-4 font-medium">
                Terima kasih! Pesanmu sudah kami terima dan akan segera
                direspon.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    required
                    type="text"
                    placeholder="Nama Lengkap"
                    className="px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none"
                  />
                  <input
                    required
                    type="email"
                    placeholder="Email"
                    className="px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none"
                  />
                </div>
                <input
                  required
                  type="text"
                  placeholder="Subjek"
                  className="px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none"
                />
                <textarea
                  required
                  rows={5}
                  placeholder="Tulis pesanmu di sini..."
                  className="px-4 py-3 rounded-xl border border-stone-200 text-sm focus:border-primary outline-none resize-none"
                />
                <Button type="submit" icon={Send} className="self-start">
                  Kirim Pesan
                </Button>
                <p className="text-xs text-ink-soft">
                  🔒 Data kamu aman bersama kami. Tidak akan dibagikan ke pihak
                  lain.
                </p>
              </form>
            )}
          </Card>
        </motion.div>
      </section>

      <section className="max-w-4xl mx-auto px-5 md:px-8 pb-16">
        <h2 className="font-bold text-xl text-ink mb-6 text-center">
          Pertanyaan yang Sering Diajukan
        </h2>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={container}
          className="grid md:grid-cols-2 gap-3"
        >
          {contactFaqItems.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <AccordionItem question={item.question} answer={item.answer} />
            </motion.div>
          ))}
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-3xl bg-gradient-to-r from-primary to-primary-dark px-8 md:px-14 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <Rocket size={28} className="text-white shrink-0" />
            <div>
              <h3 className="text-xl font-extrabold text-white mb-1">
                Masih punya pertanyaan?
              </h3>
              <p className="text-white/90 text-sm">
                Tim kami siap membantu kamu memulai perjalanan terbaik di dunia
                teknologi.
              </p>
            </div>
          </div>
          <Button href="#" variant="white">
            Chat via WhatsApp
          </Button>
        </motion.div>
      </section>
    </>
  );
}
