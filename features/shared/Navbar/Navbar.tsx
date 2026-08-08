"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Menu,
  X,
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
import styles from "./Navbar.module.css";

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
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.headerContainer}>
        
        {/* LOGO */}
        <a href="/" className={styles.logo}>
          <img
            src={SITE_CONFIG.logo}
            alt="Reliution Logo"
            className={styles.logoImg}
          />
        </a>

        {/* DESKTOP NAV LINKS - CENTERED */}
        <nav className={styles.navigation}>
          <a href="/" className={styles.navLink}>
            Home
          </a>

          {/* SERVICES MEGA DROPDOWN */}
          <div
            style={{ position: "relative" }}
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <button className={styles.dropdownTrigger}>
              <span>Services</span>
              <ChevronDown className={`${styles.chevron} ${servicesDropdownOpen ? styles.chevronActive : ""}`} />
            </button>

            <AnimatePresence>
              {servicesDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className={styles.megaMenu}
                >
                  <a href="/services/odoo-erp-solutions" className={styles.megaItem}>
                    <div className={styles.iconBox}><Boxes className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>Odoo ERP Solutions</div>
                      <p className={styles.itemDesc}>Enterprise ERP setup & MRP customization</p>
                    </div>
                  </a>

                  <a href="/services/business-process-consulting" className={styles.megaItem}>
                    <div className={styles.iconBox}><Compass className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>Business Consulting</div>
                      <p className={styles.itemDesc}>Process audit & workflow optimization</p>
                    </div>
                  </a>

                  <a href="/services/ai-machine-learning" className={styles.megaItem}>
                    <div className={styles.iconBox}><Bot className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>AI & Machine Learning</div>
                      <p className={styles.itemDesc}>Custom LLMs & predictive decisioning</p>
                    </div>
                  </a>

                  <a href="/services/workflow-automation" className={styles.megaItem}>
                    <div className={styles.iconBox}><Workflow className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>Workflow Automation</div>
                      <p className={styles.itemDesc}>n8n, WhatsApp & CRM integrations</p>
                    </div>
                  </a>

                  <a href="/services/business-intelligence-analytics" className={styles.megaItem}>
                    <div className={styles.iconBox}><BarChart3 className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>BI & Analytics</div>
                      <p className={styles.itemDesc}>Power BI dashboards & KPI tracking</p>
                    </div>
                  </a>

                  <a href="/services/mobile-app-development" className={styles.megaItem}>
                    <div className={styles.iconBox}><Smartphone className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>Mobile Development</div>
                      <p className={styles.itemDesc}>Native iOS & Android mobility</p>
                    </div>
                  </a>

                  <a href="/services/custom-software-development" className={styles.megaItem}>
                    <div className={styles.iconBox}><Cpu className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>Custom Software</div>
                      <p className={styles.itemDesc}>SaaS platforms & microservices</p>
                    </div>
                  </a>

                  <a href="/services/devops-cloud-infrastructure" className={styles.megaItem}>
                    <div className={styles.iconBox}><Cloud className="w-4 h-4" /></div>
                    <div>
                      <div className={styles.itemTitle}>DevOps & Cloud</div>
                      <p className={styles.itemDesc}>AWS, Docker & K8s deployment</p>
                    </div>
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a href="/contactus" className={styles.navLink}>
            Contact Us
          </a>
        </nav>

        {/* CTA BUTTON - FAR RIGHT */}
        <div className={styles.ctaButton}>
          <a href="/contactus" className={styles.ctaBtn}>
            <span>Request Quote</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* MOBILE MENU TOGGLE */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={styles.mobileToggle}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileOverlay}
          >
            <a href="/" style={{ fontWeight: 700, fontSize: "0.875rem" }}>Home</a>
            <a href="/services/odoo-erp-solutions" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>Odoo ERP Solutions</a>
            <a href="/services/business-process-consulting" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>Business Consulting</a>
            <a href="/services/ai-machine-learning" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>AI & Machine Learning</a>
            <a href="/services/workflow-automation" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>Workflow Automation</a>
            <a href="/services/business-intelligence-analytics" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>BI & Analytics</a>
            <a href="/services/mobile-app-development" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>Mobile Development</a>
            <a href="/services/custom-software-development" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>Custom Software</a>
            <a href="/services/devops-cloud-infrastructure" style={{ fontSize: "0.875rem", color: "var(--color-text-secondary)" }}>DevOps & Cloud</a>
            <a href="/contactus" style={{ fontWeight: 700, fontSize: "0.875rem", color: "var(--color-accent)", paddingTop: "0.5rem", borderTop: "1px solid rgba(85,68,58,0.1)" }}>Request Quote</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
