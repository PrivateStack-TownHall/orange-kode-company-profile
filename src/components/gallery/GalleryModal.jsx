"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  X, Calendar, Clock, MapPin, Gift, CheckCircle2,
  Briefcase, ExternalLink, Info,
} from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function GalleryModal({ item, type, onClose }) {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    setActiveImage(0);
  }, [item]);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = item ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ink/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            <button
              onClick={onClose}
              aria-label="Tutup"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-ink-soft hover:text-primary transition-colors"
            >
              <X size={18} />
            </button>

            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
              {/* Image column */}
              <div>
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-primary-50">
                  <Image
                    src={type === "event" ? item.cover : item.gallery[activeImage]}
                    alt={item.title}
                    fill
                    className="object-contain p-6"
                  />
                </div>
                {type === "portfolio" && item.gallery.length > 1 && (
                  <div className="flex gap-2 mt-3">
                    {item.gallery.map((img, i) => (
                      <button
                        key={img + i}
                        onClick={() => setActiveImage(i)}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden bg-primary-50 border-2 shrink-0 transition-colors ${
                          activeImage === i ? "border-primary" : "border-transparent"
                        }`}
                      >
                        <Image src={img} alt={`${item.title} ${i + 1}`} fill className="object-contain p-2" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Content column */}
              <div className="flex flex-col">
                <Badge variant="solid" className="self-start mb-3">
                  {item.category}
                </Badge>
                <h2 className="text-xl md:text-2xl font-extrabold text-ink leading-tight mb-2">{item.title}</h2>
                <p className="text-sm text-ink-soft leading-relaxed mb-4">
                  {type === "event" ? item.description : item.description}
                </p>

                {type === "event" ? (
                  <>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="neutral" icon={Calendar}>{item.date}</Badge>
                      <Badge variant="neutral" icon={Clock}>{item.time}</Badge>
                      <Badge variant="neutral" icon={MapPin}>{item.location}</Badge>
                    </div>

                    <div className="bg-primary-50 rounded-xl p-4 mb-5">
                      <p className="flex items-center gap-2 font-bold text-sm text-ink mb-3">
                        <Gift size={16} className="text-primary" /> Apa yang akan kamu dapatkan?
                      </p>
                      <div className="flex flex-col gap-2">
                        {item.benefits.map((b) => (
                          <p key={b} className="flex items-start gap-2 text-xs text-ink-soft">
                            <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" /> {b}
                          </p>
                        ))}
                      </div>
                    </div>

                    <Button href="/contact" icon={Calendar} iconPosition="left" className="mt-auto self-start">
                      Daftar Sekarang
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="bg-primary-50 rounded-xl p-4 mb-4">
                      <p className="font-bold text-sm text-ink mb-2">Teknologi yang Digunakan</p>
                      <div className="flex flex-wrap gap-2">
                        {item.stack.map((s) => (
                          <Badge key={s} variant="neutral">{s}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-stone-50 rounded-xl p-4 mb-5 text-sm">
                      <div>
                        <p className="text-[11px] text-ink-soft mb-0.5">Dibuat oleh:</p>
                        <p className="font-bold text-ink">{item.author}</p>
                        <p className="text-xs text-ink-soft">{item.role}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-[11px] text-ink-soft mb-0.5 flex items-center gap-1 justify-end">
                          <Briefcase size={12} /> Tahun:
                        </p>
                        <p className="font-bold text-ink">{item.year}</p>
                      </div>
                    </div>

                    <Button href="/contact" icon={ExternalLink} iconPosition="left" className="mt-auto self-start">
                      Lihat Karya Lengkap
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
