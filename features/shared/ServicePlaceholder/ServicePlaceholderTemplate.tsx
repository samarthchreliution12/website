import React from "react";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";

interface ServicePlaceholderProps {
  title: string;
  badge?: string;
  subtitle?: string;
}

const PLACEHOLDER_CARDS = [
  { name: "Overview", desc: "Detailed breakdown of our core capability and value proposition." },
  { name: "Features", desc: "Key functionality, modules, and enterprise capabilities." },
  { name: "Technologies", desc: "Modern tech stack, frameworks, and architecture tools." },
  { name: "Industries", desc: "Tailored solutions for manufacturing, retail, finance, and more." },
  { name: "Process", desc: "Step-by-step implementation, consulting, and deployment roadmap." },
  { name: "Case Studies", desc: "Real-world client success stories, metrics, and ROI results." },
  { name: "FAQs", desc: "Frequently asked questions about scope, timeline, and pricing." },
  { name: "Contact", desc: "Direct consultation scheduling with technical architects." },
];

export default function ServicePlaceholderTemplate({
  title,
  badge = "Enterprise Digital Solutions",
  subtitle = "We're building a comprehensive overview of our services, technologies, implementation process, case studies, and FAQs. This page will be available soon.",
}: ServicePlaceholderProps) {
  return (
    <main className="min-h-screen bg-[#08090E] text-white selection:bg-[#0D82F8] selection:text-white antialiased font-sans flex flex-col justify-between">
      <Navbar />

      <section className="relative py-32 lg:py-44 flex-1 flex items-center bg-[#08090E] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_40%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

        <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
          <div className="max-w-3xl mb-16 space-y-6">
            <SectionBadge>{badge}</SectionBadge>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              {title}
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="/contactus"
                className="group px-7 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-xl shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/"
                className="group px-6 py-3.5 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors border border-white/10 hover:border-white/20 rounded-xl bg-white/5"
              >
                <ArrowLeft className="w-4 h-4 text-[#00F0FF] group-hover:-translate-x-1 transition-transform" />
                <span>Back to Home</span>
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10">
            <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">
              PLANNED SECTION MODULES
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {PLACEHOLDER_CARDS.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#0D0E15]/80 border border-white/10 backdrop-blur-xl space-y-2 opacity-75 hover:opacity-100 transition-opacity"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">{card.name}</h3>
                    <span className="text-[9px] font-mono font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                      Coming Soon
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-normal leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
