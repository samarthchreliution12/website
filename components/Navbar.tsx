"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  Layers,
  Cpu,
  RefreshCw,
  Zap,
  Terminal,
  GraduationCap,
  Users,
  Headphones,
  ShoppingBag,
  Share2,
  Smartphone,
  ShieldCheck,
  Factory,
  Briefcase,
  Stethoscope,
  Truck,
  ArrowRight,
  Menu,
  X
} from "lucide-react";

const SERVICES_NAV = [
  { title: "Odoo Implementation", desc: "End-to-end enterprise ERP setup & deployment", icon: Layers, href: "/odoo-implementation" },
  { title: "Odoo Consulting", desc: "Strategic workflow architecture & advisory", icon: Cpu, href: "/odoo-consulting" },
  { title: "Odoo Customization", desc: "Tailored module & workflow development", icon: Terminal, href: "/odoo-customization" },
  { title: "Odoo Migration", desc: "Seamless upgrade & data migration services", icon: RefreshCw, href: "/odoo-migration" },
  { title: "Odoo DevOps", desc: "Continuous deployment & infrastructure management", icon: Zap, href: "/odoo-devops" },
  { title: "n8n Automation Service", desc: "Workflow orchestration & API integration", icon: Share2, href: "/n8n-automation" },
  { title: "Odoo Training", desc: "User empowerment & operational training", icon: GraduationCap, href: "/odoo-training" },
  { title: "Hire Odoo Developer", desc: "Dedicated Odoo engineers for your team", icon: Users, href: "/hire-odoo-developer" },
  { title: "Odoo Support (24/7)", desc: "Unparalleled round-the-clock maintenance", icon: Headphones, href: "/odoo-support" },
  { title: "Odoo eCommerce", desc: "Omnichannel e-commerce integration", icon: ShoppingBag, href: "/odoo-ecommerce" },
  { title: "Odoo Integration", desc: "Third-party API & software connector sync", icon: Share2, href: "/odoo-integration" },
  { title: "Mobile App Services", desc: "Native & cross-platform mobile solutions", icon: Smartphone, href: "/mobile-app-development" },
];

const SOLUTIONS_NAV = [
  { title: "Enterprise ERP Transformation", desc: "Comprehensive business process unification", icon: ShieldCheck, href: "/solutions/enterprise-erp" },
  { title: "Cloud & On-Premises Hosting", desc: "High-availability secure infrastructure", icon: Cpu, href: "/solutions/hosting" },
  { title: "Workflow Automation (n8n)", desc: "Eliminate manual data entry & routine work", icon: Zap, href: "/solutions/automation" },
  { title: "24/7 Dedicated ERP Support", desc: "Guaranteed SLA & instant technical response", icon: Headphones, href: "/solutions/support" },
];

const INDUSTRIES_NAV = [
  { title: "Manufacturing & Assembly", desc: "MRP, BOM, supply chain & shop floor", icon: Factory, href: "/industries/manufacturing" },
  { title: "E-Commerce & Retail", desc: "Multi-channel inventory & POS sync", icon: ShoppingBag, href: "/industries/ecommerce" },
  { title: "Wholesale & Distribution", desc: "Logistics, warehouse management & fulfillment", icon: Truck, href: "/industries/distribution" },
  { title: "Professional Services", desc: "Project tracking, billing & resource allocation", icon: Briefcase, href: "/industries/services" },
  { title: "Healthcare & Pharmaceuticals", desc: "Traceability, compliance & batch control", icon: Stethoscope, href: "/industries/healthcare" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNavItem, setHoveredNavItem] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });

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

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = (e.clientX - centerX) * 0.25;
    const distY = (e.clientY - centerY) * 0.25;
    setBtnOffset({ x: distX, y: distY });
  };

  const handleMagneticLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090E]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3"
          : "bg-transparent py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="/" className="flex items-center group focus:outline-none py-1">
          <img
            src="https://www.reliution.com/wp-content/uploads/2025/05/Reliution-2.png"
            alt="Reliution"
            className="h-9 sm:h-10 w-auto object-contain transition-opacity group-hover:opacity-90"
          />
        </a>

        <nav className="hidden lg:flex items-center space-x-1 relative" onMouseLeave={() => { setHoveredNavItem(null); setActiveDropdown(null); }}>
          <div className="relative" onMouseEnter={() => { setActiveDropdown("services"); setHoveredNavItem("services"); }}>
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg focus:outline-none">
              <span>Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#0D82F8]" : "text-slate-400"}`} />
            </button>
            {hoveredNavItem === "services" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <AnimatePresence>
              {activeDropdown === "services" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[780px] p-6 rounded-2xl bg-[#0D0E15]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 grid grid-cols-3 gap-3 z-50"
                >
                  <div className="col-span-3 pb-3 mb-1 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Reliution Odoo ERP Services</span>
                    <span className="text-xs font-medium text-[#0D82F8] hover:underline cursor-pointer flex items-center gap-1">
                      View all services <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                  {SERVICES_NAV.map((service, idx) => (
                    <a
                      key={idx}
                      href={service.href}
                      className="group/item p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#0D82F8] group-hover/item:text-[#00F0FF] group-hover/item:border-[#0D82F8]/40 transition-colors">
                        <service.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover/item:text-[#0D82F8] transition-colors">{service.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{service.desc}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* <div className="relative" onMouseEnter={() => { setActiveDropdown("solutions"); setHoveredNavItem("solutions"); }}>
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg focus:outline-none">
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "solutions" ? "rotate-180 text-[#0D82F8]" : "text-slate-400"}`} />
            </button>
            {hoveredNavItem === "solutions" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <AnimatePresence>
              {activeDropdown === "solutions" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[560px] p-6 rounded-2xl bg-[#0D0E15]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 grid grid-cols-2 gap-3 z-50"
                >
                  <div className="col-span-2 pb-2 border-b border-white/5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Enterprise ERP Solutions</span>
                  </div>
                  {SOLUTIONS_NAV.map((sol, idx) => (
                    <a
                      key={idx}
                      href={sol.href}
                      className="group/item p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#0D82F8] group-hover/item:text-[#00F0FF] transition-colors">
                        <sol.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover/item:text-[#0D82F8] transition-colors">{sol.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{sol.desc}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div> */}

          <div className="relative" onMouseEnter={() => { setActiveDropdown("industries"); setHoveredNavItem("industries"); }}>
            <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg focus:outline-none">
              <span>Industries</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === "industries" ? "rotate-180 text-[#0D82F8]" : "text-slate-400"}`} />
            </button>
            {hoveredNavItem === "industries" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <AnimatePresence>
              {activeDropdown === "industries" && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.96, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96, y: 8 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[600px] p-6 rounded-2xl bg-[#0D0E15]/95 backdrop-blur-2xl border border-white/10 shadow-2xl shadow-black/80 grid grid-cols-2 gap-3 z-50"
                >
                  <div className="col-span-2 pb-2 border-b border-white/5">
                    <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">Industry Specializations</span>
                  </div>
                  {INDUSTRIES_NAV.map((ind, idx) => (
                    <a
                      key={idx}
                      href={ind.href}
                      className="group/item p-3 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 transition-all flex items-start gap-3"
                    >
                      <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#0D82F8] group-hover/item:text-[#00F0FF] transition-colors">
                        <ind.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-white group-hover/item:text-[#0D82F8] transition-colors">{ind.title}</div>
                        <div className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">{ind.desc}</div>
                      </div>
                    </a>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="relative" onMouseEnter={() => setHoveredNavItem("blogs")}>
            <a href="/blog-odoo-insights" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg block">
              Blogs
            </a>
            {hoveredNavItem === "blogs" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </div>

          <div className="relative" onMouseEnter={() => setHoveredNavItem("about")}>
            <a href="/about-us-odoo-development-company" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg block">
              About
            </a>
            {hoveredNavItem === "about" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </div>

          <div className="relative" onMouseEnter={() => setHoveredNavItem("contact")}>
            <a href="/contactus" className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-lg block">
              Contact
            </a>
            {hoveredNavItem === "contact" && (
              <motion.div
                layoutId="navUnderline"
                className="absolute bottom-0 left-2 right-2 h-[2px] bg-gradient-to-r from-[#0D82F8] to-[#00F0FF] rounded-full"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div
            onMouseMove={handleMagneticMove}
            onMouseLeave={handleMagneticLeave}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-[#0D82F8] via-[#00F0FF] to-[#6366F1] rounded-xl blur-md opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
            <motion.a
              href="/contactus"
              animate={{ x: btnOffset.x, y: btnOffset.y }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative px-6 py-2.5 rounded-xl bg-[#08090E] border border-white/20 text-white text-sm font-semibold flex items-center gap-2 shadow-xl group-hover:border-[#00F0FF]/60 transition-colors"
            >
              <span>Request Quote</span>
              <ArrowRight className="w-4 h-4 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </div>

        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#0D0E15] border-b border-white/10 px-6 py-6 space-y-4"
          >
            <a href="/odoo-implementation" className="block text-base font-medium text-white">Services</a>
            <a href="/solutions" className="block text-base font-medium text-white">Solutions</a>
            <a href="/industries" className="block text-base font-medium text-white">Industries</a>
            <a href="/blog-odoo-insights" className="block text-base font-medium text-slate-300">Blogs</a>
            <a href="/about-us-odoo-development-company" className="block text-base font-medium text-slate-300">About</a>
            <a href="/contactus" className="block text-base font-medium text-slate-300">Contact</a>
            <a href="/contactus" className="block w-full text-center py-3 rounded-xl bg-[#0D82F8] text-white font-semibold text-sm shadow-lg shadow-[#0D82F8]/30">
              Request Quote
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
