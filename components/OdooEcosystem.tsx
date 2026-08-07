"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ODOO_MODULES = [
  {
    id: "crm",
    title: "CRM",
    subtitle: "Lead & Customer Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/crm1.png",
    desc: "Lead scoring, automated pipeline stages & deal forecasting",
    angle: 0
  },
  {
    id: "sales",
    title: "Sales",
    subtitle: "Sales Automation",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/sales1.png",
    desc: "Instant quotation builder, e-signatures & order sync",
    angle: 40
  },
  {
    id: "purchase",
    title: "Purchase",
    subtitle: "Procurement & Supply",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/purchase1.png",
    desc: "Automated vendor RFQs, purchase orders & stock replenishment",
    angle: 80
  },
  {
    id: "inventory",
    title: "Inventory",
    subtitle: "Warehouse Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/inventory1.png",
    desc: "Double-entry inventory, multi-warehouse & barcode tracking",
    angle: 120
  },
  {
    id: "accounting",
    title: "Accounting",
    subtitle: "Financial Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/accounting1.png",
    desc: "Real-time general ledger, bank feeds & automated tax compliance",
    angle: 160
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Production Planning",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/manufacturing1.png",
    desc: "MRP, Work Center capacity planning & BOM explosion",
    angle: 200
  },
  {
    id: "project",
    title: "Project",
    subtitle: "Project Delivery",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/project1.png",
    desc: "Task milestone management, billable timesheets & agile boards",
    angle: 240
  },
  {
    id: "website",
    title: "Website",
    subtitle: "Website Builder",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/website1.png",
    desc: "Integrated CMS, customer portal & e-commerce engine",
    angle: 280
  },
  {
    id: "pos",
    title: "Point of Sale",
    subtitle: "Retail Operations",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/point-of-sale1.png",
    desc: "Omnichannel retail POS, offline sync & hardware integration",
    angle: 320
  },
];

export default function OdooEcosystem() {
  const [hoveredModule, setHoveredModule] = useState<typeof ODOO_MODULES[0] | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black_70%,transparent_100%)]" />
      </div>

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 text-center w-full">
        <div className="max-w-[560px] mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md mb-7 hover:border-[#00F0FF]/30 transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
            <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
              OUR ODOO ERP EXPERTISE
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]">
            One ERP Platform. <br />
            <span className="bg-gradient-to-r from-[#FFFFFF] via-[#38BDF8] to-[#00F0FF] bg-clip-text text-transparent">
              Unlimited Business Possibilities.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-4 leading-relaxed">
            Reliution helps businesses streamline every department through Odoo ERP. From CRM and Sales to Inventory, Manufacturing, Accounting, Projects, Website, and Point of Sale, we deliver fully integrated ERP solutions that improve efficiency, automate operations, and support long-term business growth.
          </p>
        </div>

        <div className="relative w-[480px] h-[480px] sm:w-[540px] sm:h-[540px] mx-auto flex items-center justify-center mb-12 scale-[0.88] lg:scale-[0.92] origin-center">
          <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10 shadow-[0_0_30px_rgba(13,130,248,0.1)]" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-dashed border-white/10" />

          <motion.div
            animate={{ scale: [1, 1.04, 1] }}
            transition={{ duration: 4.8, ease: "easeInOut", repeat: Infinity }}
            className="relative z-30 w-32 h-32 rounded-full bg-[#0D0E15] border-2 border-[#0D82F8] shadow-[0_0_50px_rgba(13,130,248,0.4)] flex flex-col items-center justify-center p-2.5 backdrop-blur-2xl group"
          >
            <div className="absolute -inset-2 rounded-full border border-[#00F0FF]/40 animate-ping opacity-25 pointer-events-none" />
            <img
              src="https://www.reliution.com/wp-content/uploads/2025/05/bashborad1.png"
              alt="Odoo ERP Platform Core"
              loading="lazy"
              className="w-10 h-10 object-contain"
            />
            <span className="text-[11px] font-mono font-bold text-white mt-1 tracking-wider">ODOO ERP</span>
            <span className="text-[8px] font-mono text-[#00F0FF]">Enterprise Platform</span>
          </motion.div>

          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ rotate: isPaused ? undefined : 360 }}
            transition={{ duration: 50, ease: "linear", repeat: Infinity }}
          >
            {ODOO_MODULES.map((mod) => {
              const radius = 210;
              const angleRad = (mod.angle * Math.PI) / 180;
              const x = radius * Math.cos(angleRad);
              const y = radius * Math.sin(angleRad);
              const isHovered = hoveredModule?.id === mod.id;

              return (
                <div
                  key={mod.id}
                  style={{
                    position: "absolute",
                    left: `calc(50% + ${x}px - 36px)`,
                    top: `calc(50% + ${y}px - 36px)`,
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
                    whileHover={{ scale: 1.12, y: -3 }}
                    className={`w-18 h-18 sm:w-20 sm:h-20 rounded-2xl border transition-all duration-300 flex flex-col items-center justify-center p-2 backdrop-blur-xl cursor-pointer ${
                      isHovered
                        ? "bg-[#131520] border-[#00F0FF] shadow-[0_0_24px_rgba(0,240,255,0.4)] z-50"
                        : "bg-[#0D0E15]/80 border-white/10 hover:border-white/30 text-slate-300"
                    }`}
                  >
                    <img
                      src={mod.iconUrl}
                      alt={`Odoo ${mod.title} Module`}
                      loading="lazy"
                      className="w-9 h-9 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                    />
                    <span className="text-[10px] font-semibold text-white mt-0.5 tracking-tight truncate max-w-full">
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
                        className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-60 p-3.5 rounded-2xl bg-[#0D0E15] border border-white/20 shadow-2xl shadow-black z-50 text-left pointer-events-none backdrop-blur-2xl"
                      >
                        <div className="flex items-center justify-between pb-1.5 border-b border-white/10">
                          <span className="text-xs font-bold text-white">{mod.title}</span>
                          <span className="text-[9px] font-mono text-[#00F0FF] bg-[#00F0FF]/10 px-2 py-0.5 rounded">Active</span>
                        </div>
                        <div className="text-[11px] font-semibold text-[#00F0FF] mt-1.5">{mod.subtitle}</div>
                        <p className="text-[11px] text-slate-300 mt-1 leading-relaxed">{mod.desc}</p>
                        <div className="mt-2.5 pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-medium text-[#0D82F8]">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-[560px] mx-auto p-6 sm:p-7 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl text-center space-y-4"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">
            Looking for a Complete Odoo ERP Solution?
          </h3>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <a
              href="/odoo-implementation"
              className="group px-6 py-3 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
            >
              <span>Explore Odoo ERP Services</span>
              <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/contactus"
              className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
            >
              <span>Talk to an Odoo Expert</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
