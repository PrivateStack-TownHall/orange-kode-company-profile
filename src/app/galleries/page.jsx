"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Calendar, MapPin, Clock, Briefcase, Rocket, ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import SectionHeading from "@/components/shared/SectionHeading";
import GalleryModal from "@/components/gallery/GalleryModal";
import { fadeUp, container, viewportOnce } from "@/lib/motion";
import { galleryEvents, galleryPortfolios } from "@/data/gallery";

export default function GalleriesPage() {
  const [activeItem, setActiveItem] = useState(null);
  const [activeType, setActiveType] = useState(null);

  const openModal = (item, type) => {
    setActiveItem(item);
    setActiveType(type);
  };

  const closeModal = () => setActiveItem(null);

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pt-8 pb-10">
        <div className="text-xs text-ink-soft mb-6 flex items-center gap-1.5">
          <Link href="/" className="hover:text-primary">Home</Link>
          <ChevronRight size={12} />
          <span className="text-primary font-medium">Galleries</span>
        </div>

        <motion.div initial="hidden" animate="show" variants={container} className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
          <motion.div variants={fadeUp}>
            <h1 className="text-3xl md:text-5xl font-extrabold text-ink leading-tight">
              Galeri Aktivitas & <span className="text-primary">Karya Komunitas</span>
            </h1>
            <p className="mt-4 text-ink-soft max-w-lg">
              Lihat berbagai kegiatan belajar, event, dan karya inspiratif dari komunitas Orange Kode.
            </p>
          </motion.div>
          <motion.div variants={fadeUp} className="hidden lg:flex justify-end">
            <Image
              src="/assets/illustrations/ilm-komunitas-diskusi.png"
              alt="Galeri Orange Kode"
              width={420}
              height={340}
              className="w-full max-w-sm h-auto object-contain"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Events */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <SectionHeading eyebrow="Kegiatan Komunitas" title="Events" className="mb-2" />
        <p className="text-sm text-ink-soft mb-8">Kegiatan belajar, workshop, dan hangout seru dari komunitas Orange Kode.</p>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryEvents.map((event) => (
            <motion.div key={event.id} variants={fadeUp}>
              <button onClick={() => openModal(event, "event")} className="text-left w-full h-full">
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-[4/3] bg-primary-50">
                    <Image src={event.cover} alt={event.title} fill className="object-contain p-6" />
                    <Badge variant="solid" className="absolute top-3 left-3">{event.date}</Badge>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-ink leading-snug mb-2 line-clamp-2">{event.title}</h3>
                    <div className="flex flex-col gap-1 text-[11px] text-ink-soft">
                      <span className="flex items-center gap-1.5"><Calendar size={11} /> {event.date}</span>
                      <span className="flex items-center gap-1.5"><Clock size={11} /> {event.time}</span>
                      <span className="flex items-center gap-1.5"><MapPin size={11} /> {event.location}</span>
                    </div>
                  </div>
                </Card>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Portfolio */}
      <section className="max-w-7xl mx-auto px-5 md:px-8 pb-16">
        <SectionHeading eyebrow="Karya Komunitas" title="Portfolio / Karya" className="mb-2" />
        <p className="text-sm text-ink-soft mb-8">Karya-karya inspiratif dari peserta dan alumni Orange Kode yang telah menyelesaikan project pembelajaran.</p>

        <motion.div initial="hidden" whileInView="show" viewport={viewportOnce} variants={container} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {galleryPortfolios.map((item) => (
            <motion.div key={item.id} variants={fadeUp}>
              <button onClick={() => openModal(item, "portfolio")} className="text-left w-full h-full">
                <Card className="overflow-hidden h-full">
                  <div className="relative aspect-[4/3] bg-primary-50">
                    <Image src={item.cover} alt={item.title} fill className="object-contain p-6" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-sm text-ink leading-snug mb-2 line-clamp-2">{item.title}</h3>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-6 h-6 rounded-full bg-primary-100 text-primary-dark font-bold flex items-center justify-center text-[10px] shrink-0">
                        {item.author.charAt(0)}
                      </span>
                      <span className="text-[11px] text-ink-soft">{item.author}</span>
                    </div>
                    <Badge variant="neutral" className="text-[10px]">{item.category}</Badge>
                  </div>
                </Card>
              </button>
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
              <h3 className="text-xl font-extrabold text-white mb-1">Siap berkarya dan berkembang bersama Orange Kode?</h3>
              <p className="text-white/90 text-sm">Jelajahi kursus, event, dan komunitas untuk terus belajar dan mewujudkan karya-karya terbaikmu.</p>
            </div>
          </div>
          <Button href="/courses" variant="white" icon={ArrowRight}>Jelajahi Kursus</Button>
        </motion.div>
      </section>

      <GalleryModal item={activeItem} type={activeType} onClose={closeModal} />
    </>
  );
}
