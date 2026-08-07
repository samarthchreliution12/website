"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  BrainCircuit,
  Bot,
  Cpu,
  Sparkles,
  TrendingUp,
  Zap,
  Activity,
  Target,
  MessageSquare
} from "lucide-react";

const AI_CAPABILITIES = [
  "AI Chatbots & Virtual Assistants",
  "Computer Vision Solutions",
  "Predictive Analytics",
  "Natural Language Processing (NLP)",
  "Recommendation Systems",
  "Custom Machine Learning Models",
];

const AI_BENEFITS = [
  {
    title: "Intelligent Automation",
    desc: "Reduce manual work with AI-powered automation.",
    icon: Zap,
  },
  {
    title: "Smarter Decision Making",
    desc: "Generate accurate insights using predictive analytics.",
    icon: BrainCircuit,
  },
  {
    title: "Operational Efficiency",
    desc: "Increase productivity through intelligent workflows.",
    icon: Activity,
  },
  {
    title: "Scalable Innovation",
    desc: "Deploy enterprise AI solutions that grow with your business.",
    icon: Target,
  },
];

export default function AISolutionsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

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
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          
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
                AI & MACHINE LEARNING
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Intelligent AI Solutions. <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
                Built for Modern Enterprises.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Artificial Intelligence is transforming the way businesses operate. Reliution develops intelligent AI solutions that automate workflows, enhance decision-making, and unlock valuable business insights. From conversational AI and predictive analytics to computer vision and custom machine learning models, we help organizations leverage AI for sustainable growth and operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1"
            >
              {AI_CAPABILITIES.map((cap, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="text-xs font-medium text-slate-200">{cap}</span>
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

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to an AI Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#6366F1]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-5 sm:p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl space-y-4 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                    <BrainCircuit className="w-4 h-4 animate-pulse" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Reliution AI Decision Engine</h4>
                    <p className="text-[10px] font-mono text-slate-400">Enterprise LLM & Neural Model Suite</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" />
                  99.8% ACCURACY
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3 z-20">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                  <span className="flex items-center gap-1.5 text-[#00F0FF]">
                    <Bot className="w-3.5 h-3.5" /> AI ASSISTANT STREAM
                  </span>
                  <span className="text-slate-400 font-mono text-[10px]">Model v4.5</span>
                </div>

                <div className="space-y-2.5 pt-0.5">
                  <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 flex items-start gap-2 text-xs">
                    <MessageSquare className="w-3.5 h-3.5 text-[#0D82F8] shrink-0 mt-0.5" />
                    <div className="text-slate-300 font-mono text-[11px]">
                      "Analyze supply chain bottlenecks and predict inventory replenishment for Q3."
                    </div>
                  </div>

                  <motion.div
                    animate={{ y: [-3, 3, -3] }}
                    transition={{ duration: 5.4, ease: "easeInOut", repeat: Infinity }}
                    className="p-3 rounded-xl bg-gradient-to-r from-[#0D82F8]/20 via-[#00F0FF]/10 to-transparent border border-[#00F0FF]/30 space-y-1.5 text-xs shadow-xl z-30 relative"
                  >
                    <div className="flex items-center justify-between text-[10px] font-mono text-[#00F0FF]">
                      <span className="flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-[#00F0FF] animate-spin" /> AI Copilot Response
                      </span>
                      <span>Execution: 12ms</span>
                    </div>
                    <p className="text-white font-medium text-[11px] leading-relaxed">
                      Optimized stock thresholds calculated. Recommending 18% automated re-order boost for 3PL logistics to prevent stockout risks.
                    </p>
                  </motion.div>
                </div>

                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative">
                  <motion.div
                    animate={{ x: ["-100%", "100%"] }}
                    transition={{ duration: 2.8, ease: "linear", repeat: Infinity }}
                    className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#00F0FF] to-[#6366F1] shadow-[0_0_10px_#00F0FF]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-30 sm:-mt-2">
                <motion.div
                  animate={{ y: [-4, 4, -4] }}
                  transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
                  className="p-3.5 rounded-xl bg-[#0D0E15] border border-white/15 backdrop-blur-md shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">Predictive Analytics</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#00E676]" />
                  </div>
                  <div className="text-lg font-extrabold text-white mt-1 font-mono">10x Speed Gain</div>
                  <div className="text-[9px] text-slate-400 mt-0.5">Automated decisioning pipelines</div>
                </motion.div>

                <motion.div
                  animate={{ y: [4, -4, 4] }}
                  transition={{ duration: 7.1, ease: "easeInOut", repeat: Infinity }}
                  className="p-3.5 rounded-xl bg-[#0D0E15] border border-white/15 backdrop-blur-md shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-slate-400">ML Model Training</span>
                    <Cpu className="w-3.5 h-3.5 text-[#00F0FF]" />
                  </div>
                  <div className="text-lg font-extrabold text-white mt-1 font-mono">Custom NLP / CV</div>
                  <div className="text-[9px] font-mono text-[#00F0FF] mt-0.5">Enterprise LLM Fine-Tuning</div>
                </motion.div>
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-[#6366F1]/15 via-[#00F0FF]/10 to-transparent border border-white/10 flex items-center justify-between z-10">
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00F0FF] animate-ping" />
                  <div>
                    <div className="text-xs font-bold text-white">Knowledge Graph Neural Engine</div>
                    <div className="text-[9px] font-mono text-slate-400">Real-Time Data Ingestion & ML Inference</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded-md border border-[#00F0FF]/20">
                  OPENAI / ANTHROPIC INFRA
                </span>
              </div>
            </motion.div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 sm:pt-10 border-t border-white/10">
          {AI_BENEFITS.map((ben, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -5 }}
              className="group p-5 rounded-2xl bg-[#0D0E15]/80 border border-white/10 hover:border-[#00F0FF]/40 backdrop-blur-xl transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,240,255,0.15)]"
            >
              <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center mb-3 transition-colors">
                <ben.icon className="w-4 h-4" />
              </div>
              <h3 className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                {ben.title}
              </h3>
              <p className="text-xs text-slate-400 mt-1.5 leading-relaxed font-normal">
                {ben.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
