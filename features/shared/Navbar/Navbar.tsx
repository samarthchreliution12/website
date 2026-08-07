"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Bot,
  BarChart3,
  Cpu,
  Smartphone,
  Cloud,
  Workflow,
  Compass,
  Boxes
} from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090E]/90 backdrop-blur-xl border-b border-white/10 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 flex items-center justify-between">
        
        {/* LOGO */}
        <a href="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src={SITE_CONFIG.logo}
            alt="Reliution Logo"
            className="h-9 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        {/* DESKTOP NAV LINKS */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-mono font-medium text-slate-300">
          <a href="/" className="hover:text-white transition-colors">
            Home
          </a>

          {/* SERVICES MEGA DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1.5 hover:text-white transition-colors py-2 focus:outline-none">
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${servicesDropdownOpen ? "rotate-180 text-[#00F0FF]" : ""}`} />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 w-[720px] p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black backdrop-blur-2xl grid grid-cols-2 gap-3 z-50"
                >
                  <a
                    href="/services/odoo-erp-solutions"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Boxes className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">Odoo ERP Solutions</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Enterprise ERP setup & MRP customization</p>
                    </div>
                  </a>

                  <a
                    href="/services/business-process-consulting"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">Business Consulting</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Process audit & workflow optimization</p>
                    </div>
                  </a>

                  <a
                    href="/services/ai-machine-learning"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">AI & Machine Learning</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Custom LLMs & predictive decisioning</p>
                    </div>
                  </a>

                  <a
                    href="/services/workflow-automation"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Workflow className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">Workflow Automation</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">n8n, WhatsApp & CRM integrations</p>
                    </div>
                  </a>

                  <a
                    href="/services/business-intelligence-analytics"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <BarChart3 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">BI & Analytics</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Power BI dashboards & KPI tracking</p>
                    </div>
                  </a>

                  <a
                    href="/services/mobile-app-development"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Smartphone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">Mobile Development</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">Native iOS & Android mobility</p>
                    </div>
                  </a>

                  <a
                    href="/services/custom-software-development"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Cpu className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">Custom Software</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">SaaS platforms & microservices</p>
                    </div>
                  </a>

                  <a
                    href="/services/devops-cloud-infrastructure"
                    className="p-3 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-[#00F0FF]/40 transition-all flex items-start gap-3 group"
                  >
                    <div className="p-2 rounded-xl bg-[#0D82F8]/20 text-[#00F0FF] group-hover:bg-[#00F0FF] group-hover:text-black transition-colors">
                      <Cloud className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">DevOps & Cloud</div>
                      <p className="text-[10px] text-slate-400 mt-0.5">AWS, Docker & K8s deployment</p>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contactus" className="hover:text-white transition-colors">
            Contact Us
          </a>
        </nav>

        {/* CTA BUTTON */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/contactus"
            className="group px-5 py-2.5 rounded-full bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-white p-2 rounded-xl bg-white/5 border border-white/10"
        >
          {mobileMenuOpen ? <X className="w-6 h-6 text-[#00F0FF]" /> : <Menu className="w-6 h-6 text-white" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0D0E15] border-b border-white/10 px-6 py-6 space-y-4"
          >
            <a href="/" className="block text-sm font-bold text-white">Home</a>
            <a href="/services/odoo-erp-solutions" className="block text-sm text-slate-300">Odoo ERP Solutions</a>
            <a href="/services/business-process-consulting" className="block text-sm text-slate-300">Business Consulting</a>
            <a href="/services/ai-machine-learning" className="block text-sm text-slate-300">AI & Machine Learning</a>
            <a href="/services/workflow-automation" className="block text-sm text-slate-300">Workflow Automation</a>
            <a href="/services/business-intelligence-analytics" className="block text-sm text-slate-300">BI & Analytics</a>
            <a href="/services/mobile-app-development" className="block text-sm text-slate-300">Mobile Development</a>
            <a href="/services/custom-software-development" className="block text-sm text-slate-300">Custom Software</a>
            <a href="/services/devops-cloud-infrastructure" className="block text-sm text-slate-300">DevOps & Cloud</a>
            <a href="/contactus" className="block text-sm font-bold text-[#00F0FF] pt-2 border-t border-white/10">Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
