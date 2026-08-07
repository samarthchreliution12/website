"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Activity,
  ShoppingBag,
  Landmark,
  Cloud,
  Utensils,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/industries";
import { SectionBadge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Truck,
  Activity,
  ShoppingBag,
  Landmark,
  Cloud,
  Utensils,
  Briefcase,
};

export default function IndustriesWeServe() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(0,240,255,0.1),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <SectionBadge>INDUSTRIES WE SERVE</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Tailored Enterprise Solutions <br />
            For Every Sector.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-slate-400 leading-relaxed font-normal max-w-2xl"
          >
            Reliution transforms operations across key global industries with custom ERP workflows, automated supply chains, cloud platforms, and enterprise AI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_DATA.map((ind, index) => {
            const IconComponent = ICON_MAP[ind.iconName] || Briefcase;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative p-6 rounded-3xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#00F0FF]/40 hover:bg-[#131520] backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_16px_40px_rgba(0,240,255,0.15)] flex flex-col justify-between overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-250 shadow-md">
                      <IconComponent className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-250" />
                    </div>
                    <span className="text-[9px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {ind.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors leading-snug">
                    {ind.title}
                  </h3>

                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed font-normal">
                    {ind.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {ind.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[9px] font-mono text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href="/contactus"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#0D82F8] group-hover:text-[#00F0FF] transition-colors"
                  >
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
