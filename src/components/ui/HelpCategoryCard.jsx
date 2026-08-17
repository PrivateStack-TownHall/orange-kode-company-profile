"use client";

import Link from "next/link";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import Card from "@/components/ui/Card";

export default function HelpCategoryCard({ category }) {
  const Icon = Icons[category.icon] ?? Icons.HelpCircle;

  return (
    <Card className="p-6 h-full flex flex-col" hover={false}>
      <div className="flex items-center gap-3 mb-3">
        <span className="w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center shrink-0">
          {category.id}
        </span>
        <Icon size={20} className="text-primary" />
        <h3 className="font-bold text-ink">{category.title}</h3>
      </div>
      <p className="text-sm text-ink-soft mb-4">{category.description}</p>
      <ul className="flex flex-col gap-2 mb-5 flex-1">
        {category.topics.map((topic) => (
          <li key={topic} className="flex items-start gap-2 text-sm text-ink-soft">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
            {topic}
          </li>
        ))}
      </ul>
      <Link href="/faq" className="flex items-center gap-1 text-sm font-semibold text-primary hover:underline">
        Lihat semua artikel <ArrowRight size={14} />
      </Link>
    </Card>
  );
}
