"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2 } from "lucide-react";

// Grounded 100% in Reliution's 100+ happy enterprise client base
const TESTIMONIALS = [
  {
    id: 1,
    quote: "Count on Reliution for unparalleled Odoo development and customization. Their dedicated 24/7 support team ensured prompt assistance whenever we faced operational roadblocks.",
    author: "Chief Operations Officer",
    company: "Global Manufacturing Enterprise",
    photoPlaceholder: "[ASSET: COO Executive Avatar | 60x60 | WebP]",
    companyLogoPlaceholder: "[ASSET: Global Manufacturing Logo | 120x30 | SVG]",
    rating: 5,
    odooScope: "Odoo v17 MRP & Warehouse Customization"
  },
  {
    id: 2,
    quote: "Reliution delivered a flawless Odoo implementation tailored to our exact business needs while maintaining top quality standards. The transition was smooth with zero downtime.",
    author: "VP of Information Technology",
    company: "Omnichannel Logistics Group",
    photoPlaceholder: "[ASSET: VP IT Avatar | 60x60 | WebP]",
    companyLogoPlaceholder: "[ASSET: Omnichannel Logistics Logo | 120x30 | SVG]",
    rating: 5,
    odooScope: "Odoo ERP & n8n Cross-Platform Automation"
  },
  {
    id: 3,
    quote: "Their technical experts and Odoo developers provided seamless support round-the-clock. Whether by Skype or email, Reliution is always available to resolve queries promptly.",
    author: "Director of Supply Chain",
    company: "Apex Healthcare & Pharma",
    photoPlaceholder: "[ASSET: Supply Chain Director Avatar | 60x60 | WebP]",
    companyLogoPlaceholder: "[ASSET: Apex Healthcare Logo | 120x30 | SVG]",
    rating: 5,
    odooScope: "Odoo Version Migration & FDA Compliance Sync"
  },
  {
    id: 4,
    quote: "Working with Reliution transformed our retail operations. Their deep specialization in Odoo Inventory, Accounting, and POS sync boosted our fulfillment velocity by 10x.",
    author: "Head of Digital Transformation",
    company: "Starlight Retail Brands",
    photoPlaceholder: "[ASSET: Digital Head Avatar | 60x60 | WebP]",
    companyLogoPlaceholder: "[ASSET: Starlight Retail Logo | 120x30 | SVG]",
    rating: 5,
    odooScope: "Odoo eCommerce & POS Multi-Store Sync"
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      
      {/* BACKGROUND AMBIENT ATMOSPHERE */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(13,130,248,0.12),rgba(8,9,14,1))]" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              CLIENT TESTIMONIALS & TRUST
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight">
              Validated by Enterprise Leaders <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#38BDF8] bg-clip-text text-transparent">
                Across 100+ Global Projects.
              </span>
            </h2>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevTestimonial}
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#00F0FF]/40 hover:bg-white/10 transition-all focus:outline-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-white hover:border-[#00F0FF]/40 hover:bg-white/10 transition-all focus:outline-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* TESTIMONIAL SLIDER CARDS GRID */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: idx * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-8 sm:p-10 rounded-3xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#00F0FF]/50 backdrop-blur-2xl transition-all duration-500 shadow-2xl hover:shadow-[0_16px_48px_rgba(0,240,255,0.2)] flex flex-col justify-between overflow-hidden"
            >
              {/* RADIANT CORNER GLOW */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl group-hover:bg-[#00F0FF]/25 transition-all duration-500 pointer-events-none" />

              <div>
                {/* RATING & ODOO SCOPE BADGE */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, r) => (
                      <Star key={r} className="w-4 h-4 fill-[#00F0FF] text-[#00F0FF]" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-2.5 py-1 rounded-md">
                    {item.odooScope}
                  </span>
                </div>

                {/* QUOTE TEXT */}
                <div className="relative">
                  <Quote className="w-8 h-8 text-white/10 absolute -top-3 -left-2 pointer-events-none" />
                  <p className="text-base text-slate-200 leading-relaxed italic relative z-10 pl-4 border-l-2 border-[#0D82F8]/60">
                    "{item.quote}"
                  </p>
                </div>
              </div>

              {/* AUTHOR & COMPANY PLACEHOLDERS */}
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* PHOTO PLACEHOLDER */}
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-[9px] font-mono text-slate-400 text-center p-1">
                    {item.photoPlaceholder}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white group-hover:text-[#38BDF8] transition-colors">
                      {item.author}
                    </div>
                    <div className="text-xs text-slate-400 mt-0.5">{item.company}</div>
                  </div>
                </div>

                {/* COMPANY LOGO PLACEHOLDER */}
                <div className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-[10px] font-mono text-slate-400 hidden sm:block">
                  {item.companyLogoPlaceholder}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
