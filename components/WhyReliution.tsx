"use client";

import React from "react";
import { motion } from "framer-motion";
import { Headphones, Award, Layers, Clock, Sparkles } from "lucide-react";

const WHY_RELIUTION_FEATURES = [
  {
    id: "superior-support",
    title: "Superior Support",
    desc: "Our dedicated Odoo support specialists provide fast, reliable assistance whenever you need it. From implementation challenges to customization requests, we ensure your business continues to operate without interruption through responsive and dependable support.",
    icon: Headphones,
  },
  {
    id: "odoo-expertise",
    title: "Odoo Expertise",
    desc: "Our experienced consultants specialize in Odoo Inventory, Accounting, Manufacturing, CRM, Sales, and E-Commerce. We deliver scalable ERP solutions tailored to your business processes and industry requirements.",
    icon: Award,
  },
  {
    id: "comprehensive-solutions",
    title: "Comprehensive Solutions",
    desc: "We provide complete Odoo implementation, customization, migration, integration, and optimization services designed around your unique business requirements while maintaining the highest quality standards.",
    icon: Layers,
  },
  {
    id: "247-assistance",
    title: "24×7 Technical Assistance",
    desc: "Our technical consultants and certified Odoo developers are available around the clock to resolve issues quickly, answer questions, and ensure uninterrupted business operations.",
    icon: Clock,
  },
];

export default function WhyReliution() {
  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_50%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER WITH SCROLL REVEAL */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          >
            <span className="w-2 h-2 rounded-full bg-[#00E676] animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF]">
              WHY CHOOSE RELIUTION
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#00F0FF]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight"
          >
            Why Businesses Choose Reliution <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
              for Odoo ERP Success
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-slate-400 mt-4 leading-relaxed"
          >
            Choose Reliution for a streamlined Odoo ERP experience that transforms your business operations. From implementation and customization to long-term support, our experts help organizations maximize the value of their Odoo investment.
          </motion.p>
        </div>

        {/* 2 X 2 FEATURE CARD GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {WHY_RELIUTION_FEATURES.map((feat, index) => (
            <motion.div
              key={feat.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -8 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#0D82F8] hover:bg-[#131520] backdrop-blur-xl transition-all duration-250 ease-out shadow-xl hover:shadow-[0_16px_48px_rgba(13,130,248,0.25)] flex flex-col justify-between overflow-hidden"
            >
              {/* CORNER SPOTLIGHT GLOW ON HOVER */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl group-hover:bg-[#00F0FF]/25 transition-all duration-300 pointer-events-none" />

              <div>
                {/* PREMIUM ICON HUB */}
                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-250 mb-6 shadow-md">
                  <feat.icon className="w-7 h-7 transform group-hover:scale-110 transition-transform duration-250 ease-out" />
                </div>

                {/* FEATURE TITLE */}
                <h3 className="text-2xl font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-250">
                  {feat.title}
                </h3>

                {/* FEATURE DESCRIPTION */}
                <p className="text-sm text-slate-300 mt-3 leading-relaxed font-normal">
                  {feat.desc}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
