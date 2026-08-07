"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import "./Hero.css";

const HERO_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "99.8%", label: "Client Retention Rate" },
  { value: "24/7", label: "Enterprise Support" },
];

const BRAND_PILLS = [
  "ERP Implementation",
  "AI & Automation",
  "Cloud Infrastructure",
  "Custom Software",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 4]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 lg:pt-40 lg:pb-32 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(13,130,248,0.25),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#00F0FF]">
                Enterprise Digital Transformation Partner
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 24 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]"
            >
              Architecting <br />
              <span className="bg-gradient-to-r from-white via-slate-100 to-[#00F0FF] bg-clip-text text-transparent">
                Digital Evolution
              </span> <br />
              For Modern Enterprises.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl"
            >
              Reliution designs, deploys, and optimizes mission-critical digital systems. From Odoo Enterprise ERP and AI decision engines to cloud-native platforms, we accelerate business growth with zero operational friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 gap-3 pt-2 max-w-md"
            >
              {BRAND_PILLS.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#00E676] shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              <a
                href="/contactus"
                className="group px-7 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-sm font-semibold flex items-center gap-2 shadow-xl shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/odoo-implementation"
                className="group px-6 py-3.5 text-sm font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors border border-white/10 hover:border-white/20 rounded-xl bg-white/5"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-white/10"
            >
              {HERO_STATS.map((stat, index) => (
                <div key={index} className="space-y-1">
                  <div className="text-2xl font-bold font-mono text-white tracking-tight">{stat.value}</div>
                  <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-6 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-96 h-96 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-6 sm:p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/15 shadow-2xl shadow-black/80 backdrop-blur-2xl space-y-6"
            >
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                  <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                  <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                </div>
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E676] animate-ping" />
                  Reliution Operations Platform v4.2
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs text-slate-400 font-mono">ERP Throughput</div>
                  <div className="text-2xl font-bold font-mono text-white">99.98%</div>
                  <div className="text-[10px] text-emerald-400 font-mono">Active Real-Time Sync</div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <div className="text-xs text-slate-400 font-mono">AI Processing</div>
                  <div className="text-2xl font-bold font-mono text-[#00F0FF]">12ms</div>
                  <div className="text-[10px] text-[#00F0FF] font-mono">Automated Decisioning</div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-r from-[#0D82F8]/20 via-white/5 to-transparent border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#00F0FF] font-semibold">ECOSYSTEM HEALTH</span>
                  <span className="text-emerald-400">OPTIMAL</span>
                </div>
                <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-4/5 bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full shadow-[0_0_12px_#00F0FF]" />
                </div>
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>Inventory / Accounting / CRM</span>
                  <span>100% Synced</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] flex items-center justify-center font-bold text-sm">
                    AI
                  </div>
                  <div>
                    <div className="text-xs font-bold text-white">Smart Automation Engine</div>
                    <div className="text-[10px] text-slate-400 font-mono">Workflow Efficiency Boost</div>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 font-mono">+42% ROI</span>
              </div>

              <div className="pt-2 text-center">
                <span className="text-[11px] text-slate-400 font-mono">
                  Built on Enterprise Cloud Security Architecture
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
