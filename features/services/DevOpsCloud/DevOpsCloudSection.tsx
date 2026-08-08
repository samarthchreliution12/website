"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Cloud } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./DevOpsCloudSection.module.css";

const DEVOPS_PILLS = [
  "Cloud Architecture",
  "CI/CD Pipeline Automation",
  "Docker & Kubernetes",
  "AWS / Azure / Google Cloud",
  "Infrastructure as Code",
  "Monitoring & Logging",
  "Security & Backup",
  "Performance Optimization",
];

const PIPELINE_STEPS = [
  { step: "01", name: "Git Commit", status: "Triggered" },
  { step: "02", name: "CI Build", status: "Passed" },
  { step: "03", name: "Docker Image", status: "Built" },
  { step: "04", name: "K8s Deploy", status: "Live" },
];

export default function DevOpsCloudSection() {
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
            <SectionBadge>DEVOPS & CLOUD INFRASTRUCTURE</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Build Faster. <br />
              Deploy Smarter. <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Scale Without Limits.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Modern businesses require reliable, secure, and scalable infrastructure. Reliution designs, automates, and manages cloud-native environments using DevOps best practices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {DEVOPS_PILLS.map((pill, idx) => (
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
                <span>Explore Cloud Solutions</span>
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
                    <Cloud className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Enterprise Cloud Topology</h4>
                    <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>AWS, Docker & K8s Automated Engine</p>
                  </div>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(4, minmax(0, 1fr))", gap: "0.5rem", paddingTop: "0.25rem" }}>
                {PIPELINE_STEPS.map((step, idx) => (
                  <div key={idx} style={{ padding: "0.625rem", borderRadius: "0.75rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
                    <span style={{ fontSize: "10px", fontWeight: 700, color: "var(--color-text-primary)" }}>{step.name}</span>
                    <span style={{ fontSize: "8px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)" }}>{step.status}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
