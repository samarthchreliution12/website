"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { SectionBadge } from "@/components/ui/Badge";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="relative py-28 lg:py-36 bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(0,240,255,0.1),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <SectionBadge>CLIENT TESTIMONIALS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            What Enterprise Leaders Say <br />
            About Reliution.
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative p-8 sm:p-12 rounded-3xl bg-[#0D0E15]/90 border border-white/15 backdrop-blur-2xl shadow-2xl space-y-6">
            <Quote className="w-12 h-12 text-[#00F0FF]/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                className="space-y-6"
              >
                <div className="flex items-center gap-1">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>

                <p className="text-lg sm:text-xl text-white font-medium leading-relaxed italic">
                  "{activeItem.content}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    className="w-12 h-12 rounded-xl object-cover border border-white/20 shadow-md"
                  />
                  <div>
                    <h4 className="text-base font-bold text-white">{activeItem.name}</h4>
                    <p className="text-xs text-slate-400 font-mono">
                      {activeItem.role} — <span className="text-[#00F0FF]">{activeItem.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center gap-2">
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2 rounded-full transition-all ${
                      currentIndex === idx ? "w-8 bg-[#00F0FF]" : "w-2 bg-white/20"
                    }`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/40 text-white transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/40 text-white transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
