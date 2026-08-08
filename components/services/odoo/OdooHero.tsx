"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Database, Layers } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooHero.module.css";

export default function OdooHero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -3]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.leftCol}>
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge>Odoo ERP Solutions</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 22 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Transform Your Business with <br />
              <span className={styles.gradientText}>
                Enterprise Odoo ERP.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={styles.description}
            >
              Reliution provides complete end-to-end Odoo ERP services—from strategic consulting and custom module development to cloud migration, third-party integrations, and 24/7 technical support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.75rem", maxWidth: "28rem" }}
            >
              {["Official Odoo Partner", "100+ ERP Deployments", "Custom Module Engineering", "Seamless Multi-App Sync"].map((pill, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 600, color: "var(--color-text-primary)" }}>
                  <CheckCircle2 className="w-4 h-4 text-[#55443A] shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className={styles.btnGroup}
            >
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="#case-studies" className={styles.secondaryBtn}>
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 text-[#55443A]" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${styles.rightCol} perspective-1000`}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className={styles.mockupCard}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.875rem", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ padding: "0.375rem", borderRadius: "0.75rem", backgroundColor: "rgba(85,68,58,0.1)", color: "var(--color-accent)" }}>
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.8125rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Odoo Enterprise Operations Dashboard</h4>
                    <p style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>v17 Community & Enterprise Edition Sync</p>
                  </div>
                </div>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-dark-accent)", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", padding: "0.125rem 0.5rem", borderRadius: "9999px" }}>
                  SYSTEM ONLINE
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
                <div style={{ padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>Modules Active</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}>16 Apps</div>
                  <div style={{ fontSize: "10px", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Sales, Accounting, MRP, POS</div>
                </div>

                <div style={{ padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>DB Throughput</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, fontFamily: "var(--font-mono)", color: "var(--color-dark-accent)" }}>99.99%</div>
                  <div style={{ fontSize: "10px", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Real-Time Postgres Replication</div>
                </div>
              </div>

              <div style={{ padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.30)", border: "1px solid rgba(85, 68, 58, 0.15)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <ShieldCheck className="w-5 h-5 text-[#55443A]" />
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>ISO 27001 Security Standard</div>
                    <div style={{ fontSize: "10px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>Role-Based Access & Encryption</div>
                  </div>
                </div>
                <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-dark-accent)" }}>VERIFIED</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
