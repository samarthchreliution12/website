"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-[#0D0E15] border-t border-white/10 text-white relative z-10">
      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
          {/* COLUMN 1: BRAND LOGO & PARTNER BADGES */}
          <div className="space-y-5">
            <a href="/" className="inline-block focus:outline-none">
              <img
                src={SITE_CONFIG.logo}
                alt="Reliution Official Logo"
                className="h-10 w-auto object-contain"
              />
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-xs font-normal">
              Reliution is an enterprise digital transformation partner & ERP consulting firm delivering complete technology solutions across ERP, AI, Cloud, Mobile, and Custom Software.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest block mb-2.5">
                OFFICIAL PARTNERSHIPS
              </span>
              <div className="flex items-center gap-3">
                {SITE_CONFIG.partnerBadges.map((badgeUrl, idx) => (
                  <img
                    key={idx}
                    src={badgeUrl}
                    alt={`Reliution Official Partner Badge ${idx + 1}`}
                    className="h-11 w-auto object-contain rounded-lg border border-white/10 bg-white/5 p-1 shadow-md hover:border-[#00F0FF]/40 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: CORE SERVICES */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-widest">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li>
                <a href="/services/odoo-erp-solutions" className="hover:text-[#00F0FF] transition-colors">
                  Odoo ERP Solutions
                </a>
              </li>
              <li>
                <a href="/services/business-process-consulting" className="hover:text-[#00F0FF] transition-colors">
                  Business Process Consulting
                </a>
              </li>
              <li>
                <a href="/services/ai-machine-learning" className="hover:text-[#00F0FF] transition-colors">
                  AI & Machine Learning
                </a>
              </li>
              <li>
                <a href="/services/workflow-automation" className="hover:text-[#00F0FF] transition-colors">
                  Workflow Automation
                </a>
              </li>
              <li>
                <a href="/services/business-intelligence-analytics" className="hover:text-[#00F0FF] transition-colors">
                  Business Intelligence & Analytics
                </a>
              </li>
              <li>
                <a href="/services/mobile-app-development" className="hover:text-[#00F0FF] transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href="/services/custom-software-development" className="hover:text-[#00F0FF] transition-colors">
                  Custom Software Development
                </a>
              </li>
              <li>
                <a href="/services/devops-cloud-infrastructure" className="hover:text-[#00F0FF] transition-colors">
                  DevOps & Cloud Infrastructure
                </a>
              </li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK LINKS & INDUSTRIES */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-widest">
              Enterprise Domains
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300 font-mono">
              <li><a href="#" className="hover:text-white transition-colors">Manufacturing & MRP</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Supply Chain & Logistics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Healthcare & Pharma</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Retail & E-Commerce POS</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Finance & Accounting</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Telecom & IT Cloud</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Food Distribution</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Professional Services</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & HEADQUARTERS */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-[#00F0FF] uppercase tracking-widest">
              Headquarters & Contact
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <p className="leading-relaxed">
                Reliution Enterprise Technologies<br />
                Global Digital Transformation Firm
              </p>
              <p className="font-mono text-[11px] text-slate-400">
                Email: contact@reliution.com<br />
                Web: www.reliution.com
              </p>
              <div className="pt-2">
                <a
                  href="/contactus"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold shadow-lg transition-all"
                >
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Reliution Enterprise Technologies. All rights reserved.</p>
          <div className="flex items-center gap-6 font-mono text-[11px]">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
