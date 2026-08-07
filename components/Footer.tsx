"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Facebook,
  Instagram,
  ArrowRight
} from "lucide-react";

export default function Footer() {
  const SERVICES_LINKS = [
    "Odoo Implementation",
    "Odoo Consulting",
    "Odoo Customization",
    "Odoo Migration",
    "Odoo Integration",
    "Hire Odoo Developers",
  ];

  const QUICK_LINKS = [
    "Home",
    "About Us",
    "Industries",
    "Blog",
    "Contact Us",
    "Privacy Policy",
    "Terms & Conditions",
  ];

  const SOCIAL_LINKS = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0D0E15] to-[#08090E] text-slate-300 border-t border-white/10 pt-20 pb-12 overflow-hidden">
      
      {/* SUBTLE BACKGROUND AMBIENT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(13,130,248,0.08),transparent)] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 4 COLUMNS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 text-center md:text-left">
          
          {/* COLUMN 1: BRAND LOGO, DESCRIPTION & OFFICIAL BADGES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 space-y-6 flex flex-col items-center md:items-start"
          >
            {/* OFFICIAL RELIUTION LOGO */}
            <a href="/" className="inline-block group focus:outline-none">
              <img
                src="https://www.reliution.com/wp-content/uploads/2025/05/Reliution-2.png"
                alt="Reliution"
                className="h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
              />
            </a>

            <p className="text-sm text-slate-400 leading-relaxed font-normal max-w-sm">
              We are a team of technology experts helping businesses accelerate digital transformation through Odoo ERP, Artificial Intelligence, Workflow Automation, Business Intelligence, Mobile Applications, Cloud Infrastructure, and Custom Software Development.
            </p>

            {/* OFFICIAL BADGES SIDE BY SIDE */}
            <div className="flex items-center gap-4 pt-2">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://www.reliution.com/wp-content/uploads/2025/05/Frame-328.png"
                alt="Official Odoo Partner Badge 1"
                loading="lazy"
                className="h-14 w-auto object-contain transition-transform shadow-md rounded-lg"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://www.reliution.com/wp-content/uploads/2025/05/Frame-336.png"
                alt="Official Odoo Partner Badge 2"
                loading="lazy"
                className="h-14 w-auto object-contain transition-transform shadow-md rounded-lg"
              />
            </div>
          </motion.div>

          {/* COLUMN 2: SERVICES */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-4"
          >
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Services
            </h3>
            <ul className="space-y-2.5">
              {SERVICES_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#00F0FF] transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#0D82F8] group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 3: QUICK LINKS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2 space-y-4"
          >
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="group inline-flex items-center gap-1.5 text-sm text-slate-400 hover:text-[#00F0FF] transition-colors duration-200"
                  >
                    <ArrowRight className="w-3 h-3 text-[#0D82F8] group-hover:text-[#00F0FF] group-hover:translate-x-1 transition-transform duration-200" />
                    <span>{link}</span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* COLUMN 4: GET IN TOUCH */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 space-y-4 flex flex-col items-center md:items-start"
          >
            <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white">
              Get In Touch
            </h3>
            
            <div className="space-y-3 text-sm text-slate-400">
              <a
                href="mailto:info@reliution.com"
                className="flex items-center gap-2.5 hover:text-[#00F0FF] transition-colors group justify-center md:justify-start"
              >
                <Mail className="w-4 h-4 text-[#0D82F8] group-hover:text-[#00F0FF] shrink-0" />
                <span>info@reliution.com</span>
              </a>

              <a
                href="tel:+919137533373"
                className="flex items-center gap-2.5 hover:text-[#00F0FF] transition-colors group justify-center md:justify-start"
              >
                <Phone className="w-4 h-4 text-[#0D82F8] group-hover:text-[#00F0FF] shrink-0" />
                <span>+91 91375 33373</span>
              </a>

              <div className="flex items-start gap-2.5 pt-1 text-slate-400 justify-center md:justify-start">
                <MapPin className="w-4 h-4 text-[#0D82F8] shrink-0 mt-1" />
                <address className="not-italic leading-relaxed text-xs">
                  601 - Corporate Levels<br />
                  150 ft Ring Road,<br />
                  Opp. Synergy Hospital,<br />
                  Rajkot, Gujarat 360006
                </address>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="flex items-center gap-3 pt-4">
              {SOCIAL_LINKS.map((soc, idx) => (
                <motion.a
                  key={idx}
                  href={soc.href}
                  aria-label={soc.label}
                  whileHover={{ y: -4, scale: 1.1 }}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 hover:border-[#00F0FF]/50 hover:bg-[#0D82F8]/20 text-slate-300 hover:text-[#00F0FF] flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-[0_0_15px_rgba(0,240,255,0.4)]"
                >
                  <soc.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* BOTTOM BAR */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <div>
            © 2026 Reliution. All Rights Reserved.
          </div>
          <div>
            Designed with ❤️ by Reliution
          </div>
        </div>

      </div>
    </footer>
  );
}
