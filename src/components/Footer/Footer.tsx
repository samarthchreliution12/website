"use client";

import React from "react";
import { SITE_CONFIG } from "@/lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* COLUMN 1: BRAND LOGO & PARTNER BADGES */}
          <div className={styles.col}>
            <a href="/" style={{ display: "inline-block" }}>
              <img
                src={SITE_CONFIG.logo}
                alt="Reliution Official Logo"
                style={{ height: "2.5rem", width: "auto", objectFit: "contain" }}
              />
            </a>

            <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", lineHeight: 1.625, maxWidth: "20rem" }}>
              Reliution is an enterprise digital transformation partner & ERP consulting firm delivering complete technology solutions across ERP, AI, Cloud, Mobile, and Custom Software.
            </p>

            <div style={{ paddingTop: "0.5rem" }}>
              <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.1em", display: "block", marginBottom: "0.625rem" }}>
                OFFICIAL PARTNERSHIPS
              </span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                {SITE_CONFIG.partnerBadges.map((badgeUrl, idx) => (
                  <img
                    key={idx}
                    src={badgeUrl}
                    alt={`Reliution Official Partner Badge ${idx + 1}`}
                    className={styles.partnerBadge}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* COLUMN 2: CORE SERVICES */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Core Services</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="/services/odoo-erp-solutions">Odoo ERP Solutions</a></li>
              <li className={styles.linkItem}><a href="/services/business-process-consulting">Business Process Consulting</a></li>
              <li className={styles.linkItem}><a href="/services/ai-machine-learning">AI & Machine Learning</a></li>
              <li className={styles.linkItem}><a href="/services/workflow-automation">Workflow Automation</a></li>
              <li className={styles.linkItem}><a href="/services/business-intelligence-analytics">Business Intelligence & Analytics</a></li>
              <li className={styles.linkItem}><a href="/services/mobile-app-development">Mobile App Development</a></li>
              <li className={styles.linkItem}><a href="/services/custom-software-development">Custom Software Development</a></li>
              <li className={styles.linkItem}><a href="/services/devops-cloud-infrastructure">DevOps & Cloud Infrastructure</a></li>
            </ul>
          </div>

          {/* COLUMN 3: QUICK LINKS & INDUSTRIES */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li className={styles.linkItem}><a href="/">Home</a></li>
              <li className={styles.linkItem}><a href="/contactus">Contact Us</a></li>
              <li className={styles.linkItem}><a href="/blogs">Blogs</a></li>
              <li className={styles.linkItem}><a href="/aboutus">About Us</a></li>
              <li className={styles.linkItem}><a href="/privacypolicy">Privacy Policy</a></li>
              <li className={styles.linkItem}><a href="/terms-and-conditions/">Terms and Conditions</a></li>
            </ul>
          </div>

          {/* COLUMN 4: CONTACT & HEADQUARTERS */}
          <div className={styles.col}>
            <h4 className={styles.colTitle}>Headquarters & Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>
              <p style={{ lineHeight: 1.625, color: "var(--color-text-primary)", fontWeight: 500 }}>
                Reliution Enterprise Technologies<br />
                Global Digital Transformation Firm
              </p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "11px" }}>
                Email: contact@reliution.com<br />
                Web: www.reliution.com
              </p>
              <div style={{ paddingTop: "0.5rem" }}>
                <a href="/contactus" className={styles.contactBtn}>
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT BAR */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} Reliution Enterprise Technologies. All rights reserved.</p>
          {/* <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", fontFamily: "var(--font-mono)", fontSize: "11px" }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Security</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
