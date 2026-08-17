"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, CalendarDays, Clock, MapPin, Gift, CheckCircle2,
  Briefcase, ExternalLink, Info, Calendar,
} from "lucide-react";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function GalleryModal({ type, item, onClose }) {
  const [activeImage, setActiveImage] = useState(item?.cover);

  useEffect(() => {
    setActiveImage(item?.cover);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [item]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.98 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          onClick={(e) => e.stopPropagation()}
          className="relative bg-white rounded-3xl w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8"
        >
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-stone-100 hover:bg-stone-200 flex items-center justify-center text-ink-soft transition-colors z-10"
          >
            <X size={18} />
          </button>

          <div className="relative aspect-video rounded-2xl overflow-hidden bg-primary-50 mb-2">
            <Image src={activeImage} alt={item.title} fill className="object-contain p-6" />
          </div>

          {type === "portfolio" && item.gallery?.length > 1 && (
            <div className="flex gap-2 mb-6">
              {item.gallery.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`relative w-16 h-16 rounded-lg overflow-hidden bg-primary-50 border-2 shrink-0 transition-colors ${
                    activeImage === img ? "border-primary" : "border-transparent"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-contain p-2" />
                </button>
              ))}
            </div>
          )}
          {type === "event" && <div className="mb-6" />}

          <Badge variant="primary" icon={type === "event" ? CalendarDays : Briefcase} className="mb-3">
            {type === "event" ? "Events" : "Portfolio / Karya"}
          </Badge>
          <h2 className="text-xl sm:text-2xl font-extrabold text-ink mb-2 leading-tight">{item.title}</h2>
          <p className="text-sm text-ink-soft leading-relaxed mb-5">{item.description}</p>

          {type === "event" ? (
            <>
              <div className="flex flex-wrap gap-3 mb-6">
                <Badge variant="neutral" icon={CalendarDays}>{item.date}</Badge>
                <Badge variant="neutral" icon={Clock}>{item.time}</Badge>
                <Badge variant="neutral" icon={MapPin}>{item.location}</Badge>
              </div>

              <div className="bg-primary-50 rounded-2xl p-5 mb-6">
                <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                  <Gift size={16} className="text-primary" /> Apa yang akan kamu dapatkan?
                </p>
                <div className="flex flex-col gap-2">
                  {item.benefits.map((b) => (
                    <span key={b} className="flex items-start gap-2 text-sm text-ink-soft">
                      <CheckCircle2 size={15} className="text-primary shrink-0 mt-0.5" /> {b}
                    </span>
                  ))}
                </div>
              </div>

              <Button icon={Calendar} className="w-full sm:w-auto">Daftar Sekarang</Button>
            </>
          ) : (
            <>
              <div className="bg-primary-50 rounded-2xl p-5 mb-6">
                <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                  <Info size={16} className="text-primary" /> Teknologi yang Digunakan
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <Badge key={s} variant="neutral">{s}</Badge>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between gap-4 mb-6 p-4 rounded-xl border border-stone-100">
                <div>
                  <p className="text-xs text-ink-soft">Dibuat oleh:</p>
                  <p className="font-bold text-sm text-ink">{item.author}</p>
                  <p className="text-xs text-ink-soft">{item.role}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-ink-soft">Tahun:</p>
                  <p className="font-bold text-sm text-ink">{item.year}</p>
                </div>
              </div>

              <Button icon={ExternalLink} className="w-full sm:w-auto">Lihat Karya Lengkap</Button>
            </>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
