"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Code2,
  Cloud,
  Zap,
  Check
} from "lucide-react";

const SOFTWARE_PILLS = [
  "Enterprise Web Applications",
  "SaaS Product Development",
  "CRM & ERP Solutions",
  "Customer Portals",
  "API Development & Integration",
  "System Modernization",
  "Third-Party Integrations",
  "Ongoing Maintenance & Support",
];

const ARCHITECTURE_LAYERS = [
  {
    layer: "01. Client Interface",
    items: ["Web Apps", "Mobile Native", "Admin Hub", "Portals"],
    color: "text-[#00F0FF] border-[#00F0FF]/30 bg-[#00F0FF]/10",
  },
  {
    layer: "02. Gateway & Logic",
    items: ["API Gateway", "OAuth Auth", "Business Logic", "AI Engine"],
    color: "text-[#0D82F8] border-[#0D82F8]/30 bg-[#0D82F8]/10",
  },
  {
    layer: "03. Microservices",
    items: ["Orders", "Inventory", "Payments", "Analytics"],
    color: "text-[#6366F1] border-[#6366F1]/30 bg-[#6366F1]/10",
  },
  {
    layer: "04. Data & Infrastructure",
    items: ["PostgreSQL", "Redis Cache", "AWS Cloud", "Kubernetes"],
    color: "text-[#00E676] border-[#00E676]/30 bg-[#00E676]/10",
  },
];

export default function CustomSoftwareSection() {
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
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:28px_28px] pointer-events-none" />

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
                CUSTOM SOFTWARE DEVELOPMENT
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Build Software <br />
              Designed Around{" "}
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Your Business.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Every business is unique, and your software should be too. Reliution designs and develops scalable custom software tailored to your business processes, operational goals, and future growth. From enterprise web applications and SaaS platforms to CRM systems, customer portals, and internal business tools, we build secure, high-performance software that solves real business challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {SOFTWARE_PILLS.map((pill, idx) => (
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
                <span>Build Your Software</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to Our Development Team</span>
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
              className="absolute -top-5 -left-4 z-40 p-2.5 rounded-xl bg-[#0D0E15] border border-[#00F0FF]/40 text-[#00F0FF] shadow-2xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs font-mono"
            >
              <Zap className="w-4 h-4 text-[#00E676]" />
              <span>Deployment Successful v4.2</span>
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
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Enterprise System Architecture</h4>
                    <p className="text-[10px] font-mono text-slate-400">Microservices & Cloud Blueprint</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <Check className="w-3 h-3 text-[#00E676]" /> 100% UPTIME
                </span>
              </div>

              <div className="space-y-3 relative">
                {ARCHITECTURE_LAYERS.map((layer, index) => (
                  <div key={index} className="space-y-1.5">
                    <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                      <span>{layer.layer}</span>
                      <span className="text-[#00F0FF]">Latency: &lt;15ms</span>
                    </div>

                    <div className="grid grid-cols-4 gap-2">
                      {layer.items.map((item, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.05, y: -2 }}
                          className={`p-2 rounded-xl border text-center transition-all shadow-md ${layer.color}`}
                        >
                          <span className="text-[10px] font-bold block truncate">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    {index < ARCHITECTURE_LAYERS.length - 1 && (
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden relative my-1">
                        <motion.div
                          animate={{ x: ["-100%", "100%"] }}
                          transition={{ duration: 2.4, ease: "linear", repeat: Infinity, delay: index * 0.3 }}
                          className="w-1/3 h-full bg-gradient-to-r from-transparent via-[#00F0FF] to-[#00E676] shadow-[0_0_8px_#00F0FF]"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-[#0D82F8]/15 via-[#00F0FF]/10 to-transparent border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Cloud className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span className="text-slate-300 font-mono text-[11px]">AWS & Docker Containerized</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded">
                  VERIFIED DEPLOYED
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
