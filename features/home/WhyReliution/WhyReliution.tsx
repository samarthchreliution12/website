"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Cpu,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import {
  WHY_RELIUTION_STATS,
  WHY_RELIUTION_CAPABILITIES,
  TECH_STACK_CHIPS
} from "@/data/whyReliution";
import { SectionBadge } from "@/components/ui/Badge";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  ShieldCheck,
  Headphones,
};

export default function WhyReliution() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10">
        
        <div className="max-w-3xl mb-16 space-y-4">
          <SectionBadge>WHY CHOOSE RELIUTION</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
          >
            Why Businesses Choose Reliution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal"
          >
            Reliution helps organizations modernize, automate, and scale through enterprise technology solutions. From ERP implementation and AI-powered automation to cloud infrastructure and custom software, we deliver end-to-end digital transformation tailored to your business goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 sm:p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/10 backdrop-blur-xl shadow-xl">
          {WHY_RELIUTION_STATS.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {WHY_RELIUTION_CAPABILITIES.map((card, index) => {
            const IconComponent = ICON_MAP[card.iconName] || Cpu;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className="group relative p-8 sm:p-10 rounded-3xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#00F0FF]/40 hover:bg-[#131520] backdrop-blur-xl transition-all duration-300 ease-out shadow-xl hover:shadow-[0_16px_48px_rgba(0,240,255,0.15)] flex flex-col justify-between overflow-hidden"
              >
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl group-hover:bg-[#00F0FF]/25 transition-all duration-300 pointer-events-none" />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-250 shadow-md">
                      <IconComponent className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-250 ease-out" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1 rounded-full uppercase tracking-wider">
                      {card.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                    {card.title}
                  </h3>

                  <p className="text-sm text-slate-300 mt-3 leading-relaxed font-normal">
                    {card.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-6">
                    {card.pills.map((pill, pIdx) => (
                      <span
                        key={pIdx}
                        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-medium text-slate-200"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676]" />
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="p-8 rounded-3xl bg-[#0D0E15]/80 border border-white/10 backdrop-blur-xl mb-16 text-center space-y-4">
          <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">
            ENTERPRISE TECHNOLOGY STACK
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {TECH_STACK_CHIPS.map((chip, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-semibold text-white shadow-sm hover:border-[#00F0FF]/40 hover:text-[#00F0FF] transition-colors"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#0D82F8]/20 via-[#00F0FF]/15 to-[#0D0E15] border border-white/15 text-center space-y-5 max-w-3xl mx-auto shadow-2xl backdrop-blur-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Ready to transform your business with modern technology?
          </h3>
          <div>
            <a
              href="/contactus"
              className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
