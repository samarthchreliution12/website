"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Stethoscope,
  ShoppingBag,
  Landmark,
  Radio,
  Utensils,
  ShoppingCart,
  ArrowRight
} from "lucide-react";

// Grounded 100% in Reliution's enterprise Odoo industry verticals
const INDUSTRIES_LIST = [
  {
    id: "mfg",
    title: "Manufacturing",
    icon: Factory,
    href: "#",
  },
  {
    id: "supply-chain",
    title: "Supply Chain",
    icon: Truck,
    href: "#",
  },
  {
    id: "healthcare",
    title: "Healthcare",
    icon: Stethoscope,
    href: "#",
  },
  {
    id: "retail",
    title: "Retail",
    icon: ShoppingBag,
    href: "#",
  },
  {
    id: "finance",
    title: "Finance",
    icon: Landmark,
    href: "#",
  },
  {
    id: "telecom",
    title: "Telecom",
    icon: Radio,
    href: "#",
  },
  {
    id: "food-distribution",
    title: "Food Distribution",
    icon: Utensils,
    href: "#",
  },
  {
    id: "ecommerce",
    title: "Ecommerce",
    icon: ShoppingCart,
    href: "#",
  },
];

export default function IndustriesWeServe() {
  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* ATMOSPHERIC BACKGROUND RADIAL GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(13,130,248,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* HEADER AREA WITH SCROLL REVEAL */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              INDUSTRIES WE SERVE
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight"
          >
            Transforming Every Industry <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
              With Intelligent Odoo ERP Solutions
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-base text-slate-400 mt-4 leading-relaxed"
          >
            Reliution delivers customized Odoo ERP solutions for businesses across multiple industries, helping organizations automate operations, improve productivity, and accelerate digital transformation.
          </motion.p>
        </div>

        {/* 4 COLUMNS X 2 ROWS PREMIUM INDUSTRY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRIES_LIST.map((ind, index) => (
            <motion.a
              key={ind.id}
              href={ind.href}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-6 rounded-2xl bg-[#0D0E15]/80 border border-white/10 hover:border-[#0D82F8] hover:bg-[#131520] backdrop-blur-xl transition-all duration-250 ease-out shadow-lg hover:shadow-[0_12px_32px_rgba(13,130,248,0.25)] flex items-center justify-between cursor-pointer overflow-hidden"
            >
              {/* SPOTLIGHT BACKGROUND GLOW ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#0D82F8]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-250 pointer-events-none" />

              <div className="flex items-center gap-4 relative z-10">
                {/* INDUSTRY ICON */}
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/20 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-all duration-250">
                  <ind.icon className="w-6 h-6 transform group-hover:scale-[1.08] transition-transform duration-250 ease-out" />
                </div>

                {/* INDUSTRY TITLE */}
                <span className="text-base font-bold text-white group-hover:text-slate-100 transition-colors duration-250">
                  {ind.title}
                </span>
              </div>

              {/* SMALL ARROW ICON SLIDES 6PX RIGHT ON HOVER */}
              <div className="relative z-10 w-8 h-8 rounded-full bg-white/5 group-hover:bg-[#0D82F8] border border-white/10 group-hover:border-[#00F0FF]/50 flex items-center justify-center transition-all duration-250">
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transform group-hover:translate-x-1.5 transition-transform duration-250 ease-out" />
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
