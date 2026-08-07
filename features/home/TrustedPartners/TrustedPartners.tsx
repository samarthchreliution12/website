"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/data/partners";

export default function TrustedPartners() {
  return (
    <section className="relative py-14 bg-[#F7FAFD] text-slate-900 overflow-hidden border-y border-slate-200">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center mb-8">
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest"
          >
            TRUSTED BY LEADING ENTERPRISES & INDUSTRY LEADERS
          </motion.h3>
        </div>

        <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className="flex items-center gap-14 sm:gap-20 w-max py-2"
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoFilename, index) => (
              <div
                key={index}
                className="flex items-center justify-center grayscale opacity-75 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={`https://www.reliution.com/wp-content/uploads/2025/05/${logoFilename}`}
                  alt={`Trusted Client Brand ${index + 1}`}
                  loading="lazy"
                  className="h-9 sm:h-12 w-auto object-contain max-w-[160px]"
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
