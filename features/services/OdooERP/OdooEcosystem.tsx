"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles, Layers, ShieldCheck, CheckCircle2 } from "lucide-react";
import { ODOO_MODULES } from "@/data/services";
import { SectionBadge } from "@/components/ui/Badge";

export default function OdooEcosystem() {
  const [activeModuleId, setActiveModuleId] = useState<string>("accounting");
  const activeModule = ODOO_MODULES.find((m) => m.id === activeModuleId) || ODOO_MODULES[0];

  return (
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(147,51,234,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <SectionBadge>OUR ODOO ERP EXPERTISE</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Enterprise-Grade <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Odoo ERP Solutions.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Reliution is a trusted Odoo ERP partner specializing in end-to-end implementation, custom module development, migration, and seamless multi-system integration. We transform complex operational workflows into a unified enterprise ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3.5 pt-1"
            >
              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <ShieldCheck className="w-4 h-4 text-[#00E676]" />
                  <span>Certified Odoo Experts</span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal">Dedicated technical architects & functional consultants</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-1">
                <div className="flex items-center gap-2 text-xs font-bold text-white">
                  <Layers className="w-4 h-4 text-[#00F0FF]" />
                  <span>Custom ERP Modules</span>
                </div>
                <p className="text-[11px] text-slate-400 font-normal">Tailored to your exact business logic & industry rules</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/odoo-implementation"
                className="group px-6 py-3 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Odoo Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/contactus"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Schedule Odoo Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div className="lg:col-span-7 relative">
            <div className="relative w-full aspect-square max-w-[500px] mx-auto flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border border-dashed border-white/15 animate-spin" style={{ animationDuration: "60s" }} />
              <div className="absolute inset-12 rounded-full border border-white/10" />

              <div className="z-20 w-36 h-36 rounded-3xl bg-[#0D0E15] border border-white/20 shadow-2xl backdrop-blur-xl flex flex-col items-center justify-center text-center p-3">
                <img
                  src={activeModule.iconUrl}
                  alt={activeModule.title}
                  className="w-12 h-12 object-contain mb-1.5"
                />
                <span className="text-xs font-bold text-white">{activeModule.title}</span>
                <span className="text-[9px] font-mono text-[#00F0FF] truncate max-w-full">{activeModule.subtitle}</span>
              </div>

              {ODOO_MODULES.map((module) => {
                const radius = 175;
                const radian = (module.angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                const isActive = module.id === activeModuleId;

                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModuleId(module.id)}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                    }}
                    className={`absolute z-30 p-2.5 rounded-2xl border transition-all duration-300 flex items-center gap-2 backdrop-blur-md ${
                      isActive
                        ? "bg-[#0D82F8]/30 border-[#00F0FF] text-white shadow-lg shadow-[#00F0FF]/30 scale-110"
                        : "bg-[#0D0E15]/80 border-white/10 text-slate-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <img src={module.iconUrl} alt={module.title} className="w-5 h-5 object-contain" />
                    <span className="text-[11px] font-mono font-semibold hidden sm:inline">{module.title}</span>
                  </button>
                );
              })}
            </div>

            <div className="mt-6 p-4 rounded-2xl bg-white/[0.03] border border-white/10 max-w-md mx-auto text-center space-y-1">
              <span className="text-xs font-bold text-white">{activeModule.title} — {activeModule.subtitle}</span>
              <p className="text-xs text-slate-300 font-normal">{activeModule.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
