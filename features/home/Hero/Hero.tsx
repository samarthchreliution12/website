"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./Hero.module.css";
import "./Hero.css";

const HERO_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "99.8%", label: "Client Retention Rate" },
  { value: "24/7", label: "Enterprise Support" },
];

const BRAND_PILLS = [
  "ERP Implementation",
  "AI & Automation",
  "Cloud Infrastructure",
  "Custom Software",
];

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 20 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -4]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-16, 4]), springConfig);

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
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge>Enterprise Digital Transformation Partner</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 24 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Architecting <br />
              <span className={styles.gradientText}>
                Digital Evolution
              </span> <br />
              For Modern Enterprises.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Reliution designs, deploys, and optimizes mission-critical digital systems. From Odoo Enterprise ERP and AI decision engines to cloud-native platforms, we accelerate business growth with zero operational friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {BRAND_PILLS.map((pill, idx) => (
                <div key={idx} className={styles.pillItem}>
                  <CheckCircle2 className="w-4 h-4 text-[#55443A] shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className={styles.btnRow}
            >
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/odoo-implementation" className={styles.secondaryBtn}>
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#55443A]" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className={styles.statsGrid}
            >
              {HERO_STATS.map((stat, index) => (
                <div key={index} style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                  <div className={styles.statVal}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${styles.rightCol} perspective-1000`}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className={styles.mockupCard}
            >
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingBottom: "1rem", borderBottom: "1px solid #f1f5f9" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "9999px", backgroundColor: "#E57373" }} />
                  <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "9999px", backgroundColor: "#FFB74D" }} />
                  <div style={{ width: "0.75rem", height: "0.75rem", borderRadius: "9999px", backgroundColor: "#81C784" }} />
                </div>
                <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", display: "flex", alignItems: "center", gap: "0.5rem", fontWeight: 500 }}>
                  <span style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} className="animate-ping" />
                  Reliution Operations Platform v4.2
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "1rem" }}>
                <div style={{ padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>ERP Throughput</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-text-primary)" }}>99.98%</div>
                  <div style={{ fontSize: "10px", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Active Real-Time Sync</div>
                </div>

                <div style={{ padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)" }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>AI Processing</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 700, fontFamily: "var(--font-mono)", color: "var(--color-dark-accent)" }}>12ms</div>
                  <div style={{ fontSize: "10px", color: "var(--color-accent)", fontFamily: "var(--font-mono)", fontWeight: 600 }}>Automated Decisioning</div>
                </div>
              </div>

              <div style={{ padding: "1.25rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.30)", border: "1px solid rgba(85, 68, 58, 0.15)" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "0.75rem", fontFamily: "var(--font-mono)", marginBottom: "0.75rem" }}>
                  <span style={{ color: "var(--color-dark-accent)", fontWeight: 700 }}>ECOSYSTEM HEALTH</span>
                  <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>OPTIMAL</span>
                </div>
                <div style={{ height: "0.5rem", width: "100%", backgroundColor: "#ffffff", borderRadius: "9999px", overflow: "hidden", border: "1px solid rgba(85, 68, 58, 0.10)", marginBottom: "0.75rem" }}>
                  <div style={{ height: "100%", width: "80%", background: "linear-gradient(to right, #55443A, #8A9992)", borderRadius: "9999px" }} />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontWeight: 500 }}>
                  <span>Inventory / Accounting / CRM</span>
                  <span>100% Synced</span>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "2.5rem", height: "2.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(85, 68, 58, 0.15)", color: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: "0.875rem" }}>
                    AI
                  </div>
                  <div>
                    <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>Smart Automation Engine</div>
                    <div style={{ fontSize: "10px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>Workflow Efficiency Boost</div>
                  </div>
                </div>
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-dark-accent)", fontFamily: "var(--font-mono)" }}>+42% ROI</span>
              </div>

              <div style={{ paddingTop: "0.5rem", textAlign: "center" }}>
                <span style={{ fontSize: "11px", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)", fontWeight: 500, display: "block", textAlign: "center" }}>
                  Built on Enterprise Cloud Security Architecture
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
