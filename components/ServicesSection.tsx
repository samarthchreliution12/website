"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Cpu,
  Terminal,
  RefreshCw,
  Zap,
  Share2,
  GraduationCap,
  Users,
  Headphones,
  ShoppingBag,
  Smartphone,
  ArrowRight
} from "lucide-react";

const RELIUTION_SERVICES = [
  {
    id: "impl",
    title: "Odoo Implementation",
    tagline: "End-to-End Enterprise ERP Setup",
    desc: "We excel in delivering top-notch Odoo implementations, aligning business processes with seamless workflows.",
    icon: Layers,
    badge: "Core Service",
    placeholder: "[ASSET: Odoo Implementation Workflow Diagram | 320x180 | SVG]"
  },
  {
    id: "consult",
    title: "Odoo Consulting",
    tagline: "Strategic Process Architecture",
    desc: "Expert advisory services to analyze business requirements, optimize ERP architecture, and drive ROI.",
    icon: Cpu,
    badge: "Advisory",
    placeholder: "[ASSET: Odoo ERP Architecture Blueprint | 320x180 | SVG]"
  },
  {
    id: "custom",
    title: "Odoo Customization",
    tagline: "Tailored Modules & Workflows",
    desc: "Custom Python/XML module development tailored to your exact operational and reporting needs.",
    icon: Terminal,
    badge: "Engineering",
    placeholder: "[ASSET: Custom Odoo Python Code Module | 320x180 | SVG]"
  },
  {
    id: "migr",
    title: "Odoo Migration",
    tagline: "Zero Data-Loss ERP Upgrades",
    desc: "Seamlessly upgrade your legacy Odoo instances or migrate from legacy ERP systems to Odoo Enterprise.",
    icon: RefreshCw,
    badge: "Data Sync",
    placeholder: "[ASSET: Odoo Version Migration Pipeline | 320x180 | SVG]"
  },
  {
    id: "devops",
    title: "Odoo DevOps",
    tagline: "Continuous CI/CD & Cloud Infrastructure",
    desc: "Automated testing, staging environments, Docker containerization, and cloud deployment pipelines.",
    icon: Zap,
    badge: "Cloud Infra",
    placeholder: "[ASSET: Odoo Docker & CI/CD Pipeline Visual | 320x180 | SVG]"
  },
  {
    id: "n8n",
    title: "n8n Automation Service",
    tagline: "Cross-Platform Workflow Orchestration",
    desc: "Connect Odoo with 400+ external applications via n8n automation nodes for friction-free data flow.",
    icon: Share2,
    badge: "Automation",
    placeholder: "[ASSET: n8n Node Workflow Diagram | 320x180 | SVG]"
  },
  {
    id: "train",
    title: "Odoo Training",
    tagline: "Enterprise Team Empowerment",
    desc: "Comprehensive hands-on training sessions for end-users, team leads, and system administrators.",
    icon: GraduationCap,
    badge: "Enablement",
    placeholder: "[ASSET: Odoo Interactive Training Portal | 320x180 | SVG]"
  },
  {
    id: "hire",
    title: "Hire Odoo Developer",
    tagline: "Dedicated Senior Odoo Engineers",
    desc: "Scale your internal team with certified Odoo developers skilled in backend, frontend, and ORM customization.",
    icon: Users,
    badge: "Staffing",
    placeholder: "[ASSET: Odoo Developer Staffing Specs | 320x180 | SVG]"
  },
  {
    id: "support",
    title: "Odoo Support (24/7)",
    tagline: "Unparalleled Round-the-Clock Assistance",
    desc: "Dedicated support team ensuring 24/7 prompt assistance, bug fixes, and SLA-backed maintenance.",
    icon: Headphones,
    badge: "24/7 SLA",
    placeholder: "[ASSET: 24/7 Technical Support Dashboard | 320x180 | SVG]"
  },
  {
    id: "ecom",
    title: "Odoo eCommerce",
    tagline: "Omnichannel Shopping Integration",
    desc: "Integrate Odoo ERP with Shopify, WooCommerce, Magento, and custom B2B web portals seamlessly.",
    icon: ShoppingBag,
    badge: "Omnichannel",
    placeholder: "[ASSET: Odoo E-Commerce Connector | 320x180 | SVG]"
  },
  {
    id: "integ",
    title: "Odoo Integration",
    tagline: "REST/XML-RPC API Connectivity",
    desc: "Connect Odoo to third-party CRMs, payment gateways, shipping providers, and legacy software.",
    icon: Share2,
    badge: "API Sync",
    placeholder: "[ASSET: REST API Integration Architecture | 320x180 | SVG]"
  },
  {
    id: "mob",
    title: "Mobile App Services",
    tagline: "Native iOS & Android ERP Solutions",
    desc: "Custom mobile applications built to extend Odoo inventory, sales, and field service to mobile teams.",
    icon: Smartphone,
    badge: "Mobile ERP",
    placeholder: "[ASSET: Odoo Mobile Application Interface | 320x180 | SVG]"
  },
];

export default function ServicesSection() {
  return (
    <section className="relative py-28 bg-[#08090E] overflow-hidden border-b border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-[#08090E] via-[#0D82F8]/5 to-[#08090E] pointer-events-none" />

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#00F0FF] bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-full">
              OUR EXPERT ODOO SERVICES
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mt-4">
              Our Services & Expertise <br />
            </h2>
          </div>
          <p className="text-base text-slate-400 max-w-md leading-relaxed">
            From initial strategy to 24/7 post-deployment support, Reliution delivers end-to-end Odoo development services grounded in 10+ years of expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RELIUTION_SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.6,
                delay: (index % 3) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-2xl bg-[#0D0E15]/90 border border-white/10 hover:border-[#00F0FF]/50 backdrop-blur-xl transition-all duration-300 shadow-xl hover:shadow-[0_12px_40px_rgba(13,130,248,0.25)] flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#00F0FF]/10 rounded-full blur-3xl group-hover:bg-[#00F0FF]/25 transition-all duration-500 pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <motion.div
                    whileHover={{ rotate: 12 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8]/10 text-[#0D82F8] group-hover:text-[#00F0FF] flex items-center justify-center transition-colors duration-300"
                  >
                    <service.icon className="w-6 h-6" />
                  </motion.div>
                  <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-[#00F0FF] bg-[#00F0FF]/10 border border-[#00F0FF]/20 px-2.5 py-1 rounded-md">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-[#38BDF8] transition-colors duration-300">
                  {service.title}
                </h3>
                <div className="text-xs font-mono text-slate-400 mt-1">{service.tagline}</div>
                
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  {service.desc}
                </p>

                <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-dashed border-white/10 group-hover:border-white/20 transition-colors text-center">
                  <span className="text-[11px] font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                    {service.placeholder}
                  </span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                  Explore Service
                </span>
                <motion.div
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 group-hover:border-[#00F0FF]/40 group-hover:bg-[#0D82F8] text-white flex items-center justify-center transition-all duration-300"
                >
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300 text-[#00F0FF] group-hover:text-white" />
                </motion.div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
