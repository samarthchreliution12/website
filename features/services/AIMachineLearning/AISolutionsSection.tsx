"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Bot, Sparkles, Cpu, Zap, Activity } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";

const AI_PILLS = [
  "Custom AI Chatbots",
  "LLM Fine-Tuning",
  "Computer Vision",
  "Predictive Analytics",
  "Process Automation",
  "ERP AI Integration",
  "Natural Language Processing",
  "OCR & Document Parsing",
];

const PROMPTS_ROTATOR = [
  "Predict Q4 demand surge across 12 warehouses...",
  "Parse 8,000 PDF invoices & auto-fill Odoo purchase ledger...",
  "Train custom LLM on company SOPs & compliance manuals...",
  "Detect manufacturing anomalies using real-time vision model...",
];

export default function AISolutionsSection() {
  const [promptIndex, setPromptIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % PROMPTS_ROTATOR.length);
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(0,240,255,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <SectionBadge>AI & MACHINE LEARNING</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Enterprise AI & <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Machine Learning Solutions.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Transform your business with intelligent machine learning models, custom LLMs, computer vision, and predictive decisioning engines embedded directly into your core enterprise software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {AI_PILLS.map((pill, idx) => (
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
                <span>Explore AI Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-5 sm:p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl space-y-4 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Reliution Enterprise AI Hub</h4>
                    <p className="text-[10px] font-mono text-slate-400">GPT-4o & Neural Inference Engine</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  INFERENCE READY
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-[#00F0FF]" /> ACTIVE STREAMING PROMPT
                  </span>
                  <span className="text-emerald-400 font-bold">99.4% Confidence</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={promptIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    className="text-xs font-mono text-white bg-black/40 p-2.5 rounded-xl border border-white/10"
                  >
                    "{PROMPTS_ROTATOR[promptIndex]}"
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-3 gap-2.5">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
                  <Cpu className="w-4 h-4 text-[#00F0FF] mx-auto" />
                  <div className="text-xs font-bold text-white font-mono">12.4ms</div>
                  <div className="text-[9px] font-mono text-slate-400">Latency</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
                  <Zap className="w-4 h-4 text-[#00E676] mx-auto" />
                  <div className="text-xs font-bold text-white font-mono">99.8%</div>
                  <div className="text-[9px] font-mono text-slate-400">Accuracy</div>
                </div>
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 text-center space-y-1">
                  <Activity className="w-4 h-4 text-purple-400 mx-auto" />
                  <div className="text-xs font-bold text-white font-mono">1.2M</div>
                  <div className="text-[9px] font-mono text-slate-400">Tokens / Sec</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
