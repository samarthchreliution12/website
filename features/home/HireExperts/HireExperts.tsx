"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, UserCheck, Zap } from "lucide-react";
import { TEAM_PROFILES, HIRING_CHIPS, TRUST_METRICS } from "@/data/hireExperts";
import { SectionBadge } from "@/components/ui/Badge";

export default function HireExperts() {
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % TEAM_PROFILES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentProfile = TEAM_PROFILES[profileIndex];

  return (
    <section className="relative py-28 lg:py-36 bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          <div className="lg:col-span-5 relative">
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-[#00F0FF]/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="relative rounded-3xl bg-[#0D0E15]/95 border border-white/15 p-6 sm:p-7 shadow-2xl shadow-black/80 backdrop-blur-2xl space-y-5 overflow-hidden">
                <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] border border-[#0D82F8]/40">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white tracking-tight">Reliution Dedicated Talent Pool</h4>
                      <p className="text-[10px] font-mono text-slate-400">Vetted Enterprise Engineers & Consultants</p>
                    </div>
                  </div>
                  <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    READY TO DEPLOY
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={profileIndex}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className="p-5 rounded-2xl bg-white/[0.04] border border-white/10 space-y-4 shadow-lg"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={currentProfile.avatar}
                          alt={currentProfile.role}
                          className="w-11 h-11 rounded-xl object-cover border border-white/20 shadow-md"
                        />
                        <div>
                          <h5 className="text-sm font-bold text-white">{currentProfile.role}</h5>
                          <span className="text-[10px] font-mono text-slate-400">{currentProfile.exp}</span>
                        </div>
                      </div>

                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${currentProfile.statusColor}`}>
                        {currentProfile.status}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      {currentProfile.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/5 border border-white/5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                          <span className="text-[11px] font-medium text-slate-200 truncate">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-mono text-slate-400">
                  <span className="flex items-center gap-1.5 text-[#00F0FF]">
                    <Zap className="w-3 h-3 text-[#00F0FF]" /> Immediate Onboarding (1-3 Days)
                  </span>

                  <div className="flex items-center gap-1">
                    {TEAM_PROFILES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setProfileIndex(dotIdx)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${
                          profileIndex === dotIdx ? "bg-[#00F0FF] w-4" : "bg-white/20"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <SectionBadge>DEDICATED TECHNOLOGY TEAM</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight"
            >
              Build Your Dedicated <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Technology Team.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal max-w-xl"
            >
              Looking to scale your digital capabilities? Reliution provides dedicated technology teams and experienced specialists across ERP, AI, Cloud, Mobile, Analytics, Automation, and Custom Software development. We partner with your business to accelerate digital transformation, reduce development time, and deliver high-impact enterprise solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {HIRING_CHIPS.map((chip, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-medium text-slate-200"
                >
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/contactus"
                className="group px-7 py-3.5 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-xl shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="/hire-developers"
                className="group px-6 py-3.5 text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-2 transition-colors border border-white/10 hover:border-white/20 rounded-xl bg-white/5"
              >
                <span>Build Your Team</span>
                <ArrowRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

          </div>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-3xl bg-[#0D0E15]/80 border border-white/10 backdrop-blur-xl shadow-xl">
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center space-y-1"
            >
              <div className="text-3xl sm:text-4xl font-extrabold text-white font-mono bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                {metric.value}
              </div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">{metric.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
