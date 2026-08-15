import HeroSection from "@/sections/home/HeroSection";
import TechStackSection from "@/sections/home/TechStackSection";
import CoursesSection from "@/sections/home/CoursesSection";
import HowWeTeachSection from "@/sections/home/HowWeTeachSection";
import TestimonialsSection from "@/sections/home/TestimonialsSection";
import MentorsSection from "@/sections/home/MentorsSection";
import FaqSection from "@/sections/home/FaqSection";
import CtaBanner from "@/sections/home/CtaBanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <CoursesSection />
      <HowWeTeachSection />
      <TestimonialsSection />
      <MentorsSection />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
