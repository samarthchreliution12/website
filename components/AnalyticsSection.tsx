"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BarChart3,
  TrendingUp,
  Sparkles,
  Zap,
  RefreshCw,
  Database
} from "lucide-react";

const ANALYTICS_PILLS = [
  "Executive Dashboards",
  "KPI Monitoring",
  "Predictive Analytics",
  "Custom Reports",
  "Data Warehousing",
  "Power BI Integration",
  "Tableau Integration",
  "Odoo Analytics",
];

const INSIGHTS_ROTATOR = [
  "Revenue increased 18% this quarter",
  "Inventory turnover improved by 12%",
  "Sales conversion reached 42%",
  "Customer retention increased by 9%",
  "Forecast suggests demand spike next month",
];

export default function AnalyticsSection() {
  const [insightIndex, setInsightIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setInsightIndex((prev) => (prev + 1) % INSIGHTS_ROTATOR.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

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
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md hover:border-[#00F0FF]/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
                BUSINESS INTELLIGENCE & ANALYTICS
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Transform Data Into <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Actionable Business Intelligence.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Every business generates valuable data. Reliution transforms that data into meaningful insights through real-time dashboards, advanced reporting, predictive analytics, and executive KPI monitoring. Empower leadership with intelligent reporting that drives faster decisions, improves operational efficiency, and accelerates business growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {ANALYTICS_PILLS.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="text-[11px] font-medium text-slate-200 truncate">{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/contactus"
                className="group px-6 py-3 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Explore Analytics Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to an Analytics Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute -top-5 -right-4 z-40 p-3 rounded-xl bg-[#0D0E15] border border-[#00F0FF]/40 shadow-2xl backdrop-blur-md max-w-xs hidden sm:block"
            >
              <div className="flex items-center gap-2 text-[10px] font-mono text-[#00F0FF] mb-1">
                <Sparkles className="w-3 h-3 text-[#00F0FF] animate-spin" /> AI BI INSIGHT
              </div>
              <AnimatePresence mode="wait">
                <motion.p
                  key={insightIndex}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="text-xs font-semibold text-white leading-tight"
                >
                  "{INSIGHTS_ROTATOR[insightIndex]}"
                </motion.p>
              </AnimatePresence>
            </motion.div>

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-5 sm:p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl space-y-4 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] border border-[#0D82F8]/40">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Executive Analytics Center</h4>
                    <p className="text-[10px] font-mono text-slate-400">Power BI & Odoo Enterprise Engine</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <RefreshCw className="w-3 h-3 text-[#00F0FF] animate-spin" style={{ animationDuration: "8s" }} />
                  <span className="text-[9px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 px-2 py-0.5 rounded-full">
                    LIVE STREAM
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Total Revenue</span>
                    <span className="text-[10px] font-mono text-[#00E676] bg-[#00E676]/10 px-1.5 py-0.5 rounded">+18%</span>
                  </div>
                  <div className="text-lg font-extrabold text-white font-mono">₹12.8M</div>
                  <div className="h-8 w-full pt-1">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 100 30">
                      <path
                        d="M 0,25 Q 25,5 50,20 T 100,5"
                        fill="none"
                        stroke="#00F0FF"
                        strokeWidth="2.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Sales Growth</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                  <div className="text-lg font-extrabold text-white font-mono">1,284 Orders</div>
                  <div className="flex items-end gap-1.5 h-8 pt-1">
                    <div className="flex-1 bg-white/10 h-1/2 rounded-t" />
                    <div className="flex-1 bg-[#0D82F8] h-3/4 rounded-t" />
                    <div className="flex-1 bg-white/10 h-2/3 rounded-t" />
                    <div className="flex-1 bg-[#00F0FF] h-full rounded-t" />
                    <div className="flex-1 bg-[#00E676] h-5/6 rounded-t" />
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">Inventory Health</span>
                    <span className="text-lg font-extrabold text-white font-mono">96% SLA</span>
                    <span className="text-[9px] font-mono text-emerald-400 block mt-0.5">Optimal Stock</span>
                  </div>
                  <div className="w-10 h-10 rounded-full border-4 border-[#00F0FF] border-t-transparent animate-spin" style={{ animationDuration: "14s" }} />
                </div>

                <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 block">AI Q4 Forecast</span>
                    <span className="text-lg font-extrabold text-white font-mono">+22% Growth</span>
                    <span className="text-[9px] font-mono text-[#00F0FF] block mt-0.5">Predictive Model</span>
                  </div>
                  <div className="w-9 h-9 rounded-xl bg-[#00F0FF]/15 border border-[#00F0FF]/30 text-[#00F0FF] flex items-center justify-center">
                    <Zap className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-[#0D82F8]/15 via-[#00F0FF]/10 to-transparent border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Database className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span className="text-slate-300 font-mono text-[11px]">Power BI & Tableau Synced</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded">
                  REAL-TIME KPI
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
