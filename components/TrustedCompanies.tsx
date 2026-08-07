"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const PARTNER_LOGOS = [
  {
    id: 1,
    name: "Enterprise Global Partner 1",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_807Z-1.png",
    industry: "Industrial Manufacturing",
    odooScope: "Odoo ERP & MRP Customization"
  },
  {
    id: 2,
    name: "Enterprise Global Partner 2",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_807Z.png",
    industry: "Omnichannel Logistics",
    odooScope: "Odoo Warehouse & 3PL Integration"
  },
  {
    id: 3,
    name: "Enterprise Global Partner 3",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_803Z.png",
    industry: "High-Volume Retail",
    odooScope: "Odoo eCommerce & POS Sync"
  },
  {
    id: 4,
    name: "Enterprise Global Partner 4",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_806Z.png",
    industry: "Pharma & Life Sciences",
    odooScope: "Odoo FDA Compliance & Batch Tracking"
  },
  {
    id: 5,
    name: "Enterprise Global Partner 5",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_806Z-1.png",
    industry: "Wholesale & Distribution",
    odooScope: "Odoo Multi-Store Inventory & Purchasing"
  },
  {
    id: 6,
    name: "Enterprise Global Partner 6",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_804Z.png",
    industry: "Professional Services",
    odooScope: "Odoo Project Timesheets & Billing"
  },
  {
    id: 7,
    name: "Enterprise Global Partner 7",
    url: "https://www.reliution.com/wp-content/uploads/2025/05/image_2024_05_06T06_36_03_805Z-1.png",
    industry: "Global Fashion & E-Commerce",
    odooScope: "Odoo CRM & Omnichannel Fulfillment"
  },
];

export default function TrustedCompanies() {
  const [hoveredPartner, setHoveredPartner] = useState<typeof PARTNER_LOGOS[0] | null>(null);

  const marqueePartners = [...PARTNER_LOGOS, ...PARTNER_LOGOS];

  return (
    <section className="relative py-20 bg-gradient-to-b from-[#EEF4FF] via-[#F2F6FC] to-[#F7FAFD] text-slate-900 overflow-hidden border-y border-slate-200/50">
      
      {/* SUBTLE ENTERPRISE BACKGROUND MESH */}
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(#0D82F8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION HEADER FOR ENTERPRISE BLUE-GRAY BACKGROUND */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0D82F8] bg-[#0D82F8]/10 border border-[#0D82F8]/20 px-4 py-1.5 rounded-full">
            OUR TRUSTED PARTNERS & ENTERPRISE CLIENTS
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Powering Operations Across Enterprise Leaders Worldwide
          </h2>
          <p className="text-sm text-slate-600 mt-2 font-medium max-w-2xl mx-auto">
            Manufacturing, E-Commerce, Logistics & Professional Services specialized with Odoo ERP
          </p>
        </div>

        {/* INFINITE SCROLLING MARQUEE CONTAINER WITH SUBTLE FADE MASKS */}
        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            className="flex items-center gap-16 sm:gap-20 w-max py-2"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              ease: "linear",
              repeat: Infinity,
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {marqueePartners.map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                onMouseEnter={() => setHoveredPartner(partner)}
                onMouseLeave={() => setHoveredPartner(null)}
                className="relative group cursor-pointer py-3 flex items-center justify-center"
              >
                {/* GLASS CARDS WITH SUBTLE SHADOWS & HIGHEST LOGO CONTRAST */}
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  className="px-6 py-4 rounded-2xl bg-white/85 border border-slate-200/60 backdrop-blur-md group-hover:border-[#0D82F8]/40 group-hover:bg-white group-hover:shadow-lg group-hover:shadow-slate-300/30 transition-all duration-300 shadow-sm shadow-slate-200/50 flex items-center justify-center min-w-[200px] sm:min-w-[240px] h-[110px]"
                >
                  <img
                    src={partner.url}
                    alt={`${partner.name} - Reliution Enterprise Partner`}
                    loading="lazy"
                    className="h-16 sm:h-20 w-auto max-w-[170px] sm:max-w-[200px] object-contain opacity-100 group-hover:scale-105 transition-transform duration-300"
                  />
                </motion.div>

                {/* INTERACTIVE TOOLTIP */}
                <AnimatePresence>
                  {hoveredPartner?.id === partner.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-56 p-3 rounded-xl bg-[#0D0E15] text-white border border-white/15 shadow-2xl backdrop-blur-2xl z-50 text-left pointer-events-none"
                    >
                      <div className="text-xs font-bold text-white flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00E676]" />
                        {partner.name}
                      </div>
                      <div className="text-[11px] font-mono text-[#00F0FF] mt-0.5">{partner.industry}</div>
                      <div className="text-[10px] text-slate-300 mt-1 pt-1 border-t border-white/10 line-clamp-2">
                        {partner.odooScope}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
