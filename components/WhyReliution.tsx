"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  ShieldCheck,
  Cpu,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const STATS_DATA = [
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "8", label: "Technology Domains" },
  { value: "24×7", label: "Dedicated Support" },
];

const CAPABILITY_CARDS = [
  {
    id: "enterprise-expertise",
    badge: "8 Core Services",
    title: "Enterprise Expertise",
    desc: "Our multidisciplinary team delivers ERP, AI, Automation, Analytics, Mobile, Cloud, and Custom Software solutions backed by years of enterprise implementation experience.",
    icon: Cpu,
    pills: ["ERP", "AI", "Automation", "Analytics", "Cloud", "Mobile", "Custom Software"],
  },
  {
    id: "end-to-end-solutions",
    badge: "Complete Delivery",
    title: "End-to-End Solutions",
    desc: "From strategic consulting and architecture design to rapid deployment and long-term optimization, we manage every phase of your digital transformation journey.",
    icon: Layers,
    pills: ["Strategic Audit", "System Design", "Agile Build", "Go-Live Sync"],
  },
  {
    id: "scalable-technology",
    badge: "Cloud Ready",
    title: "Scalable Technology",
    desc: "Cloud-native architecture, secure microservices infrastructure, and future-ready enterprise applications built to handle high volume and rapid growth.",
    icon: ShieldCheck,
    pills: ["Cloud Native", "Kubernetes", "99.99% Uptime", "Zero Friction"],
  },
  {
    id: "dedicated-partnership",
    badge: "24×7 Support",
    title: "Dedicated Partnership",
    desc: "Long-term post-deployment support, proactive system maintenance, and continuous strategic guidance to keep your business operating at peak performance.",
    icon: Headphones,
    pills: ["24x7 Monitoring", "SLA Assurance", "Dedicated Lead", "Proactive Patching"],
  },
];

const TECH_STACK_CHIPS = [
  "Odoo ERP",
  "OpenAI",
  "AWS Cloud",
  "Docker",
  "Kubernetes",
  "React.js",
  "Node.js",
  "Python",
  "Power BI",
];

export default function WhyReliution() {
  return (
    <section className="relative py-28 lg:py-36 bg-[#08090E] overflow-hidden border-b border-white/5">
      {/* ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md mb-7 hover:border-[#00F0FF]/30 transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
              WHY CHOOSE RELIUTION
            </span>
          </motion.div>

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
            className="text-base text-slate-300 mt-4 leading-relaxed max-w-2xl font-normal"
          >
            Reliution helps organizations modernize, automate, and scale through enterprise technology solutions. From ERP implementation and AI-powered automation to cloud infrastructure and custom software, we deliver end-to-end digital transformation tailored to your business goals.
          </motion.p>
        </div>

        {/* STATISTICS ROW (4 COUNTERS ABOVE CARDS) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14 p-6 sm:p-8 rounded-3xl bg-[#0D0E15]/90 border border-white/10 backdrop-blur-xl shadow-xl">
          {STATS_DATA.map((stat, idx) => (
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

        {/* 2 X 2 BROADER CAPABILITY CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {CAPABILITY_CARDS.map((card, index) => (
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
              {/* SPOTLIGHT GLOW */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl group-hover:bg-[#00F0FF]/25 transition-all duration-300 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-13 h-13 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-250 shadow-md">
                    <card.icon className="w-6 h-6 transform group-hover:scale-110 transition-transform duration-250 ease-out" />
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

                {/* CAPABILITY PILLS */}
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
          ))}
        </div>

        {/* TECHNOLOGY STACK SHOWCASE WITH LOGO CHIPS */}
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

        {/* CENTERED BOTTOM CTA */}
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
