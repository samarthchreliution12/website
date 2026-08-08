"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, BarChart3, TrendingUp } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./AnalyticsSection.module.css";

const ANALYTICS_PILLS = [
  "Executive Dashboards",
  "KPI Monitoring",
  "Predictive Analytics",
  "Custom Reports",
  "Data Warehousing",
  "Power BI Integration",
  "Tableau Integration",
  "Odoo Analytics",
];

export default function AnalyticsSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

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
            <SectionBadge>BUSINESS INTELLIGENCE & ANALYTICS</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Transform Data Into <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Actionable Business Intelligence.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Every business generates valuable data. Reliution transforms that data into meaningful insights through real-time dashboards, advanced reporting, predictive analytics, and executive KPI monitoring.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {ANALYTICS_PILLS.map((pill, idx) => (
                <div key={idx} className={styles.pillItem}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55443A] shrink-0" />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ paddingTop: "0.5rem" }}
            >
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Explore Analytics Solutions</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
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
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "0.75rem", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                  <div style={{ padding: "0.375rem", borderRadius: "0.75rem", backgroundColor: "rgba(85,68,58,0.1)", color: "var(--color-accent)", border: "1px solid rgba(85,68,58,0.2)" }}>
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Executive Analytics Center</h4>
                    <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Power BI & Odoo Enterprise Engine</p>
                  </div>
                </div>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", padding: "0.125rem 0.5rem", borderRadius: "9999px" }}>
                  LIVE STREAM
                </span>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.75rem" }}>
                <div style={{ padding: "0.875rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Total Revenue</span>
                    <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-accent)", backgroundColor: "rgba(85,68,58,0.1)", padding: "0.125rem 0.375rem", borderRadius: "0.25rem", fontWeight: 700 }}>+18%</span>
                  </div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>₹12.8M</div>
                </div>

                <div style={{ padding: "0.875rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Sales Growth</span>
                    <TrendingUp className="w-3.5 h-3.5 text-[#55443A]" />
                  </div>
                  <div style={{ fontSize: "1.125rem", fontWeight: 800, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>1,284 Orders</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
