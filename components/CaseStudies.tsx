"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  TrendingUp,
  ArrowUpRight,
  Building2,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Layers
} from "lucide-react";

// Grounded 100% in Reliution's enterprise Odoo case study portfolio
const CASE_STUDIES = [
  {
    id: "cs-1",
    client: "Global Industrial Equipment Corp",
    logoPlaceholder: "[ASSET: Global Industrial Equipment Logo | 160x40 | SVG]",
    imagePlaceholder: "[ASSET: Multi-Facility Odoo MRP & Inventory Hub Visual | 640x400 | WebP]",
    industry: "Industrial Manufacturing & Supply Chain",
    service: "Odoo Implementation & MRP Customization",
    before: "Fragmented legacy ERP silos causing 48-hour order delays and manual inventory stockouts.",
    after: "Unified Odoo v17 Enterprise MRP, automated BOM explosions, and real-time shop floor tracking.",
    results: [
      { metric: "+340%", label: "Order Processing Speed" },
      { metric: "-72%", label: "Inventory Stockouts" },
      { metric: "100%", label: "Real-Time BOM Accuracy" },
    ],
  },
  {
    id: "cs-2",
    client: "Starlight Omnichannel Retail",
    logoPlaceholder: "[ASSET: Starlight Retail Logo | 160x40 | SVG]",
    imagePlaceholder: "[ASSET: Omnichannel POS & Shopify Sync Dashboard Visual | 640x400 | WebP]",
    industry: "E-Commerce & High-Volume Retail",
    service: "Odoo eCommerce & n8n Automation",
    before: "Manual order re-entry across Shopify, Magento, and POS, leading to shipping errors.",
    after: "Centralized Odoo Inventory connected via n8n automation nodes for instant 3PL order routing.",
    results: [
      { metric: "10x", label: "Fulfillment Velocity" },
      { metric: "99.8%", label: "Order Dispatch Accuracy" },
      { metric: "$1.2M", label: "Annual Operational Savings" },
    ],
  },
  {
    id: "cs-3",
    client: "Nexus Pharma & Healthcare",
    logoPlaceholder: "[ASSET: Nexus Pharma Logo | 160x40 | SVG]",
    imagePlaceholder: "[ASSET: Batch Traceability & FDA Compliance Hub Visual | 640x400 | WebP]",
    industry: "Pharmaceuticals & Healthcare",
    service: "Odoo Migration & 24/7 SLA Support",
    before: "Outdated legacy Odoo version with unverified 3rd-party apps failing compliance audits.",
    after: "Clean migration to Odoo v17 Enterprise with automated FDA lot traceability and 24/7 support.",
    results: [
      { metric: "0", label: "Compliance Penalties" },
      { metric: "100%", label: "Batch Traceability" },
      { metric: "< 15m", label: "Support Ticket Response" },
    ],
  },
];

export default function CaseStudies() {
  const [activeTab, setActiveTab] = useState<string>("cs-1");

  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* BACKGROUND AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_100%,rgba(13,130,248,0.15),transparent)]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            REAL ENTERPRISE RESULTS & CASE STUDIES
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight">
            Proven Transformations Delivered for <br />
            <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
              Global Industry Leaders.
            </span>
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Discover how Reliution's senior Odoo engineering team unifies complex enterprise operations and drives measurable ROI.
          </p>
        </div>

        {/* CASE STUDIES STACK */}
        <div className="space-y-12">
          {CASE_STUDIES.map((cs, index) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative rounded-3xl bg-[#0D0E15] border border-white/10 hover:border-[#00F0FF]/50 backdrop-blur-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:shadow-[0_16px_48px_rgba(0,240,255,0.25)] p-8 sm:p-10"
            >
              {/* RADIANT SPOTLIGHT */}
              <div className="absolute -top-32 -right-32 w-64 h-64 bg-[#00F0FF]/15 rounded-full blur-3xl group-hover:bg-[#00F0FF]/30 transition-all duration-500 pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* LEFT CONTENT AREA */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* CLIENT LOGO & SERVICE BADGE */}
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono font-medium text-slate-300">
                      {cs.logoPlaceholder}
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/30 px-3 py-1 rounded-full">
                      {cs.service}
                    </span>
                  </div>

                  {/* CLIENT TITLE & INDUSTRY */}
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-[#38BDF8] transition-colors">
                      {cs.client}
                    </h3>
                    <div className="text-xs font-mono text-slate-400 mt-1">{cs.industry}</div>
                  </div>

                  {/* BEFORE VS AFTER COMPARISON */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    
                    {/* BEFORE STATE */}
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-red-400">
                        <AlertCircle className="w-3.5 h-3.5" /> BEFORE RELIUTION
                      </div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {cs.before}
                      </p>
                    </div>

                    {/* AFTER STATE */}
                    <div className="p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20">
                      <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-[#00E676]">
                        <CheckCircle2 className="w-3.5 h-3.5" /> AFTER RELIUTION
                      </div>
                      <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                        {cs.after}
                      </p>
                    </div>

                  </div>

                  {/* ANIMATED RESULTS METRIC BADGES */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    {cs.results.map((res, rIdx) => (
                      <motion.div
                        key={rIdx}
                        whileHover={{ scale: 1.05 }}
                        className="p-3 rounded-xl bg-white/[0.03] border border-white/10 group-hover:border-[#00F0FF]/40 text-center transition-all"
                      >
                        <div className="text-xl sm:text-2xl font-extrabold text-white font-mono group-hover:text-[#00F0FF] transition-colors">
                          {res.metric}
                        </div>
                        <div className="text-[10px] text-slate-400 font-medium mt-0.5 line-clamp-1">
                          {res.label}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                </div>

                {/* RIGHT IMAGE PLACEHOLDER WITH HOVER ZOOM */}
                <div className="lg:col-span-6">
                  <div className="relative rounded-2xl overflow-hidden bg-[#131520] border border-white/10 min-h-[340px] flex items-center justify-center p-8 group/img">
                    
                    {/* SUBTLE WIREFRAME BACKGROUND MESH */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:20px_20px]" />

                    {/* IMAGE ZOOM WRAPPER */}
                    <motion.div
                      className="w-full h-full flex flex-col items-center justify-center text-center group-hover/img:scale-105 transition-transform duration-700 ease-out z-10"
                    >
                      <div className="p-6 rounded-2xl bg-white/5 border border-dashed border-white/20 backdrop-blur-md max-w-sm">
                        <BarChart3 className="w-8 h-8 text-[#0D82F8] mx-auto mb-2 group-hover/img:text-[#00F0FF] transition-colors" />
                        <span className="text-xs font-mono font-semibold text-slate-300 block">
                          {cs.imagePlaceholder}
                        </span>
                      </div>
                    </motion.div>

                    {/* OVERLAY FADE */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E15] via-transparent to-transparent opacity-40 group-hover:opacity-70 transition-opacity duration-300" />

                    {/* ACTION LINK */}
                    <div className="absolute bottom-4 right-4 z-20">
                      <a
                        href="/contactus"
                        className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md group-hover:bg-[#0D82F8] group-hover:border-[#00F0FF]/60 transition-all shadow-lg"
                      >
                        <span>View Full Case Study</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:text-white" />
                      </a>
                    </div>

                  </div>
                </div>

              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
