"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  GitMerge,
  Workflow,
  Sparkles,
  TrendingUp,
  FileCheck,
  Zap,
  Eye,
  Target,
  Compass,
  BarChart3,
  Network,
  Check
} from "lucide-react";

const CONSULTING_CAPABILITIES = [
  "Business Process Analysis",
  "Workflow Optimization",
  "Digital Transformation Strategy",
  "ERP Readiness Assessment",
  "Process Documentation",
  "Performance Improvement Planning",
];

const CONSULTING_BENEFITS = [
  {
    title: "Business Efficiency",
    desc: "Optimize operations and eliminate unnecessary processes.",
    icon: Zap,
  },
  {
    title: "Operational Visibility",
    desc: "Gain complete insight into every business workflow.",
    icon: Eye,
  },
  {
    title: "Scalable Growth",
    desc: "Build processes that grow with your business.",
    icon: TrendingUp,
  },
  {
    title: "Data-Driven Decisions",
    desc: "Improve business outcomes using measurable insights.",
    icon: Target,
  },
];

export default function BusinessConsultingSection() {
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
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16 sm:mb-20">
          
          {/* LEFT SIDE CONTENT AREA (MAX 560PX) */}
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
                BUSINESS CONSULTING
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Optimize Business Processes. <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
                Accelerate Business Growth.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Every successful digital transformation starts with understanding how your business operates. Reliution analyzes existing workflows, identifies operational bottlenecks, and designs efficient business processes that improve productivity, reduce costs, and prepare your organization for scalable growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1"
            >
              {CONSULTING_CAPABILITIES.map((cap, idx) => (
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
                <span>Book a Strategy Session</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Learn About Our Consulting Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT SIDE VISUAL WITH SAVED ASSET IMAGE (TEMPORARY OVERRIDE) */}
          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full rounded-3xl overflow-hidden border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl p-2 bg-[#0D0E15]/95 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <img
                src="/asset/BUSINESS_CONSULTING_img.jpeg"
                alt="Business Process Consulting Architecture"
                className="w-full h-auto object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 sm:pt-10 border-t border-white/10">
          {CONSULTING_BENEFITS.map((ben, idx) => (
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
