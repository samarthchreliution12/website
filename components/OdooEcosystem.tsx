"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

// Grounded 100% in official Odoo module assets
const ODOO_MODULES = [
  {
    id: "crm",
    title: "CRM",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/crm1.png",
    desc: "Lead scoring, automated pipeline stages & deal forecasting",
    angle: 0
  },
  {
    id: "sales",
    title: "Sales",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/sales1.png",
    desc: "Instant quotation builder, e-signatures & order sync",
    angle: 40
  },
  {
    id: "purchase",
    title: "Purchase",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/purchase1.png",
    desc: "Automated vendor RFQs, purchase orders & stock replenishment",
    angle: 80
  },
  {
    id: "inventory",
    title: "Inventory",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/inventory1.png",
    desc: "Double-entry inventory, multi-warehouse & barcode tracking",
    angle: 120
  },
  {
    id: "accounting",
    title: "Accounting",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/accounting1.png",
    desc: "Real-time general ledger, bank feeds & automated tax compliance",
    angle: 160
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/manufacturing1.png",
    desc: "MRP, Work Center capacity planning & BOM explosion",
    angle: 200
  },
  {
    id: "project",
    title: "Project",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/project1.png",
    desc: "Task milestone management, billable timesheets & agile boards",
    angle: 240
  },
  {
    id: "website",
    title: "Website",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/website1.png",
    desc: "Integrated CMS, customer portal & e-commerce engine",
    angle: 280
  },
  {
    id: "pos",
    title: "Point of Sale",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/point-of-sale1.png",
    desc: "Omnichannel retail POS, offline sync & hardware integration",
    angle: 320
  },
];

export default function OdooEcosystem() {
  const [hoveredModule, setHoveredModule] = useState<typeof ODOO_MODULES[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      {/* BACKGROUND GRID ATMOSPHERE */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* SECTION HEADER */}
        <div className="max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
            THE UNIFIED ODOO ENTERPRISE ECOSYSTEM
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4 leading-tight">
            One Core Engine. <br />
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#38BDF8] to-[#00F0FF] bg-clip-text text-transparent">
              Infinite Operational Capability.
            </span>
          </h2>
          <p className="text-base text-slate-400 mt-4 leading-relaxed">
            Reliution seamlessly integrates and customizes Odoo's suite of applications into a unified ERP environment designed for enterprise growth.
          </p>
        </div>

        {/* ORBIT STAGE CONTAINER */}
        <div className="relative w-[600px] h-[600px] mx-auto flex items-center justify-center">
          {/* ORBIT CIRCLE RINGS */}
          <div className="absolute w-[500px] h-[500px] rounded-full border border-white/10 shadow-[0_0_30px_rgba(13,130,248,0.1)]" />
          <div className="absolute w-[340px] h-[340px] rounded-full border border-dashed border-white/10" />

          {/* CENTER CORE: DASHBOARD */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 4.0, ease: "easeInOut", repeat: Infinity }}
            className="relative z-30 w-36 h-36 rounded-full bg-[#0D0E15] border-2 border-[#0D82F8] shadow-[0_0_60px_rgba(13,130,248,0.5)] flex flex-col items-center justify-center p-3 backdrop-blur-2xl group"
          >
            <div className="absolute -inset-2 rounded-full border border-[#00F0FF]/40 animate-ping opacity-25 pointer-events-none" />
            <img
              src="https://www.reliution.com/wp-content/uploads/2025/05/bashborad1.png"
              alt="Odoo Enterprise Dashboard Core"
              loading="lazy"
              className="w-12 h-12 object-contain"
            />
            <span className="text-xs font-mono font-bold text-white mt-1 tracking-wider">ODOO CORE</span>
            <span className="text-[9px] font-mono text-[#00F0FF]">v19 Enterprise</span>
          </motion.div>

          {/* ORBITING MODULE CARDS */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: isPaused ? undefined : 360 }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {ODOO_MODULES.map((mod) => {
              const radius = 250;
              const angleRad = (mod.angle * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);
              const isHovered = hoveredModule?.id === mod.id;

              return (
                <div
                  key={mod.id}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 40px)`,
                  }}
                  onMouseEnter={() => {
                    setHoveredModule(mod);
                    setIsPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredModule(null);
                    setIsPaused(false);
                  }}
                  className="relative z-40 group"
                >
                  <motion.div
                    animate={{ rotate: isPaused ? undefined : -360 }}
                    transition={{ duration: 50, ease: "linear", repeat: Infinity }}
                    whileHover={{ scale: 1.15, y: -4 }}
                    className={`w-20 h-20 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-2.5 backdrop-blur-xl cursor-pointer ${
                      isHovered
                        ? "bg-[#131520] border-[#00F0FF] shadow-[0_0_30px_rgba(0,240,255,0.5)] z-50"
                        : "bg-[#0D0E15]/80 border-white/10 hover:border-white/30 text-slate-300"
                    }`}
                  >
                    <img
                      src={mod.iconUrl}
                      alt={`Odoo ${mod.title} Module`}
                      loading="lazy"
                      className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-[10px] font-semibold text-white mt-1 tracking-tight truncate max-w-full">
                      {mod.title}
                    </span>
                  </motion.div>

                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 8 }}
                        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-64 p-4 rounded-2xl bg-[#0D0E15] border border-white/20 shadow-2xl shadow-black z-50 text-left pointer-events-none backdrop-blur-2xl"
                      >
                        <div className="flex items-center justify-between pb-2 border-b border-white/10">
                          <span className="text-xs font-bold text-white">Odoo {mod.title} Module</span>
                          <span className="text-[10px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">Active</span>
                        </div>
                        <p className="text-xs text-slate-300 mt-2 leading-relaxed">{mod.desc}</p>
                        <div className="mt-3 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] font-medium text-[#0D82F8]">
                          <span>Customized by Reliution</span>
                          <ArrowRight className="w-3 h-3 text-[#00F0FF]" />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
