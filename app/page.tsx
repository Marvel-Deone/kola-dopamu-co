import ClinicSection from "@/components/clinic-section";
import ContactSection from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { HeroCarousel } from "@/components/hero-carousel"
import HighlightsSection from "@/components/highlights-section";
import { Navbar } from "@/components/navbar"
import ProcessSection from "@/components/process-section";
import TestimonialsAndInsights from "@/components/testimonials-insights";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFDFD] font-sans text-slate-900 selection:bg-amber-100 selection:text-amber-900 overflow-x-hidden">
      {/* Progress Bar */}
      {/* <div
        className="fixed top-0 left-0 h-1 bg-amber-500 z-[100] transition-all duration-300"
        style={{ width: "0%" }}
      /> */}
      <Navbar />
      <HeroCarousel />
      <HighlightsSection />
      <ProcessSection />
      <ClinicSection />
      <TestimonialsAndInsights />
      <ContactSection />
      <Footer />
    </div>
  );
}
