"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Bot, Sparkles, Cpu, Zap, Activity } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./AISolutionsSection.module.css";

const AI_PILLS = [
  "Custom AI Chatbots",
  "LLM Fine-Tuning",
  "Computer Vision",
  "Predictive Analytics",
  "Process Automation",
  "ERP AI Integration",
  "Natural Language Processing",
  "OCR & Document Parsing",
];

const PROMPTS_ROTATOR = [
  "Predict Q4 demand surge across 12 warehouses...",
  "Parse 8,000 PDF invoices & auto-fill Odoo purchase ledger...",
  "Train custom LLM on company SOPs & compliance manuals...",
  "Detect manufacturing anomalies using real-time vision model...",
];

export default function AISolutionsSection() {
  const [promptIndex, setPromptIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setPromptIndex((prev) => (prev + 1) % PROMPTS_ROTATOR.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

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
            <SectionBadge>AI & MACHINE LEARNING</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Enterprise AI & <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Machine Learning Solutions.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Transform your business with intelligent machine learning models, custom LLMs, computer vision, and predictive decisioning engines embedded directly into your core enterprise software.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {AI_PILLS.map((pill, idx) => (
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
                <span>Explore AI Solutions</span>
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
                    <Bot className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Reliution Enterprise AI Hub</h4>
                    <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>GPT-4o & Neural Inference Engine</p>
                  </div>
                </div>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-dark-accent)", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", padding: "0.125rem 0.5rem", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} className="animate-ping" />
                  INFERENCE READY
                </span>
              </div>

              <div style={{ padding: "0.875rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.25rem", fontWeight: 700, color: "var(--color-accent)" }}>
                    <Sparkles className="w-3 h-3 text-[#55443A]" /> ACTIVE STREAMING PROMPT
                  </span>
                  <span style={{ color: "var(--color-dark-accent)", fontWeight: 700 }}>99.4% Confidence</span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={promptIndex}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.3 }}
                    style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-primary)", backgroundColor: "#ffffff", padding: "0.625rem", borderRadius: "0.75rem", border: "1px solid rgba(85,68,58,0.15)", fontWeight: 600, boxShadow: "var(--shadow-sm)" }}
                  >
                    "{PROMPTS_ROTATOR[promptIndex]}"
                  </motion.div>
                </AnimatePresence>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, minmax(0, 1fr))", gap: "0.625rem" }}>
                <div style={{ padding: "0.75rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", textAlign: "center" }}>
                  <Cpu className="w-4 h-4 text-[#55443A] mx-auto" />
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>12.4ms</div>
                  <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Latency</div>
                </div>
                <div style={{ padding: "0.75rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", textAlign: "center" }}>
                  <Zap className="w-4 h-4 text-[#4D2308] mx-auto" />
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>99.8%</div>
                  <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Accuracy</div>
                </div>
                <div style={{ padding: "0.75rem", borderRadius: "1rem", backgroundColor: "rgba(207, 208, 205, 0.20)", border: "1px solid rgba(85, 68, 58, 0.10)", textAlign: "center" }}>
                  <Activity className="w-4 h-4 text-[#8A9992] mx-auto" />
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", fontFamily: "var(--font-mono)" }}>1.2M</div>
                  <div style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Tokens / Sec</div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
