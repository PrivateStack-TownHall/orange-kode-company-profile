"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/shared/SectionHeading";
import AccordionItem from "@/components/ui/Accordion";
import { faqItems } from "@/data/faq";
import { fadeUp, container, viewportOnce } from "@/lib/motion";

const homeFaqs = faqItems.slice(0, 6);

export default function FaqSection() {
  return (
    <section className="max-w-7xl mx-auto px-5 md:px-8 py-16">
      <SectionHeading
        eyebrow="Pertanyaan yang Sering Ditanyakan"
        title="FAQ"
        align="center"
        className="mb-10 max-w-none"
      />
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={container}
        className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto"
      >
        {homeFaqs.map((item) => (
          <motion.div key={item.id} variants={fadeUp}>
            <AccordionItem question={item.question} answer={item.answer} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
