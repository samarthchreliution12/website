"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Sparkles, CheckCircle2, Users } from "lucide-react";

export default function HireOdooDevelopers() {
  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* LEFT SIDE: LARGE PREMIUM IMAGE PLACEHOLDER (~45% WIDTH ON DESKTOP) */}
          <div className="lg:col-span-5 relative">
            
            {/* GLASS ACCENT DECORATION BEHIND IMAGE */}
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-3xl bg-[#0D0E15] border border-white/15 p-8 shadow-2xl shadow-black/80 backdrop-blur-2xl transition-all duration-500 hover:border-[#00F0FF]/50 hover:shadow-[0_0_40px_rgba(0,240,255,0.2)] flex flex-col items-center justify-center min-h-[420px] text-center cursor-pointer overflow-hidden"
              >
                {/* SUBTLE BACKGROUND GRID MESH */}
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:20px_20px]" />

                <div className="relative z-10 p-8 rounded-2xl bg-white/5 border border-dashed border-white/20 backdrop-blur-md max-w-sm">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0D82F8] to-[#00F0FF] text-white flex items-center justify-center mx-auto mb-4 shadow-lg shadow-[#0D82F8]/30">
                    <Users className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-mono font-bold text-white block">
                    [ASSET: Hire Odoo Developers Team Image]
                  </span>
                  <span className="text-xs font-mono text-slate-400 mt-2 block">
                    Senior Technical Architects & Developers
                  </span>
                </div>

                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E15] via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </motion.div>
            </motion.div>

          </div>

          {/* RIGHT SIDE: CONTENT AREA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* SMALL BADGE */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-[#00F0FF]/30 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF]">
                EXPERT ODOO DEVELOPMENT TEAM
              </span>
              <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
            </motion.div>

            {/* HEADING WITH BLUR REVEAL */}
            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Hire Odoo Developers
            </motion.h2>

            {/* DESCRIPTION PARAGRAPH */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-4 text-base text-slate-300 leading-relaxed font-normal"
            >
              <p>
                Looking to hire Odoo developers? Our team brings extensive experience, deep industry knowledge, and top-notch Odoo technical skills to smoothly implement and customize Odoo for your needs.
              </p>
              <p>
                Whether it's Odoo customization, Odoo implementation, or Odoo integration, our developers are well-equipped to deliver reliable Odoo solutions. Trust us for a seamless Odoo experience that drives your business forward.
              </p>
            </motion.div>

            {/* CTA BUTTON & SECONDARY LINK */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-4"
            >
              <a
                href="#"
                className="group px-7 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-sm font-semibold flex items-center gap-2 shadow-xl shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Hire Developers</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/contactus"
                className="group px-6 py-3.5 text-sm font-medium text-slate-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
