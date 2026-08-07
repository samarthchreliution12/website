"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Search,
  FileSpreadsheet,
  Code2,
  CheckCircle,
  Rocket,
  Headphones,
  ArrowRight
} from "lucide-react";

// Grounded 100% in Reliution's Odoo ERP Implementation methodology
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    tagline: "Process Blueprinting & Gap Analysis",
    desc: "In-depth audit of existing business workflows, legacy ERP pain points, and core Odoo module requirements.",
    icon: Search,
    placeholder: "[ASSET: Discovery Phase Blueprint | 280x160 | SVG]"
  },
  {
    step: "02",
    title: "Planning",
    tagline: "Odoo Architecture & Database Design",
    desc: "Mapping custom workflows, data migration schemas, module dependencies, and integration endpoints.",
    icon: FileSpreadsheet,
    placeholder: "[ASSET: ERP System Architecture Plan | 280x160 | SVG]"
  },
  {
    step: "03",
    title: "Development",
    tagline: "Custom Python/XML & ORM Engineering",
    desc: "Building custom Odoo modules, automated n8n workflows, custom views, and third-party API connectors.",
    icon: Code2,
    placeholder: "[ASSET: Custom Module Development Code | 280x160 | SVG]"
  },
  {
    step: "04",
    title: "Testing",
    tagline: "Automated QA & User Acceptance (UAT)",
    desc: "Rigorous UAT cycles, automated regression testing, data integrity checks, and security validation.",
    icon: CheckCircle,
    placeholder: "[ASSET: UAT Testing & QA Validation | 280x160 | SVG]"
  },
  {
    step: "05",
    title: "Deployment",
    tagline: "Zero Data-Loss Cutover & Go-Live",
    desc: "Seamless production database migration, staging verification, cloud deployment, and live system cutover.",
    icon: Rocket,
    placeholder: "[ASSET: Production Deployment & Cutover | 280x160 | SVG]"
  },
  {
    step: "06",
    title: "Support",
    tagline: "24/7 SLA Maintenance & Team Training",
    desc: "Round-the-clock technical support, user onboarding workshops, continuous optimization, and SLA coverage.",
    icon: Headphones,
    placeholder: "[ASSET: 24/7 SLA Support Center | 280x160 | SVG]"
  },
];

export default function ImplementationProcess() {
  const targetRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 75%", "end 50%"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 300,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section ref={targetRef} className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* BACKGROUND ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(13,130,248,0.12),rgba(8,9,14,1))]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            PROVEN ODOO IMPLEMENTATION METHODOLOGY
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight">
            A Structured Roadmap to <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
              Flawless Enterprise ERP Execution.
            </span>
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Our 6-phase implementation process guarantees operational continuity, zero data loss, and rapid enterprise adoption.
          </p>
        </div>

        {/* HORIZONTAL TIMELINE CONTAINER */}
        <div className="relative pt-8 pb-12">
          
          {/* TRACK BACKGROUND LINE */}
          <div className="absolute top-20 left-0 right-0 h-1 bg-white/10 rounded-full hidden lg:block" />

          {/* ANIMATED PROGRESS FILL LINE */}
          <motion.div
            style={{ scaleX }}
            className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#0D82F8] via-[#00F0FF] to-[#00E676] rounded-full origin-left shadow-[0_0_15px_#00F0FF] hidden lg:block"
          />

          {/* TIMELINE STEPS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 relative z-20">
            {PROCESS_STEPS.map((stepItem, index) => {
              // Calculate threshold for active glow state
              const stepThreshold = (index + 1) / PROCESS_STEPS.length;
              const isActiveTransform = useTransform(scrollYProgress, (pos) => pos >= stepThreshold * 0.8);

              return (
                <motion.div
                  key={stepItem.step}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="group relative flex flex-col justify-between p-6 rounded-2xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#00F0FF]/50 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_12px_36px_rgba(0,240,255,0.2)]"
                >
                  {/* STEP NUMBER BADGE & ICON HUB */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 6 }}
                        className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-300 shadow-md"
                      >
                        <stepItem.icon className="w-6 h-6" />
                      </motion.div>
                      <span className="text-xs font-mono font-bold text-slate-500 group-hover:text-[#00F0FF] transition-colors">
                        STEP {stepItem.step}
                      </span>
                    </div>

                    {/* TITLE & TAGLINE */}
                    <h3 className="text-lg font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {stepItem.title}
                    </h3>
                    <div className="text-[11px] font-mono text-[#00F0FF] mt-0.5">{stepItem.tagline}</div>
                    
                    {/* DESCRIPTION */}
                    <p className="text-xs text-slate-400 mt-3 leading-relaxed">
                      {stepItem.desc}
                    </p>
                  </div>

                  {/* ASSET PLACEHOLDER CONTAINER */}
                  <div className="mt-6 pt-4 border-t border-white/10">
                    <div className="p-3 rounded-lg bg-white/[0.02] border border-dashed border-white/10 group-hover:border-white/20 text-center transition-colors">
                      <span className="text-[10px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                        {stepItem.placeholder}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
