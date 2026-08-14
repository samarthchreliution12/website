"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, UserCheck, Zap } from "lucide-react";
import { TEAM_PROFILES, HIRING_CHIPS, TRUST_METRICS } from "@/data/home/hireExperts";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./HireExperts.module.css";

export default function HireExperts() {
  const [profileIndex, setProfileIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProfileIndex((prev) => (prev + 1) % TEAM_PROFILES.length);
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const currentProfile = TEAM_PROFILES[profileIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.topGrid}>
          
          <div className={styles.leftCol}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.dashboardCard}>
                <div className={styles.dashHeader}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
                    <div style={{ padding: "0.5rem", borderRadius: "0.75rem", backgroundColor: "rgba(85, 68, 58, 0.10)", color: "var(--color-accent)", border: "1px solid rgba(85, 68, 58, 0.20)" }}>
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Reliution Dedicated Talent Pool</h4>
                      <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>Vetted Enterprise Engineers & Consultants</p>
                    </div>
                  </div>
                  <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", backgroundColor: "rgba(85, 68, 58, 0.10)", border: "1px solid rgba(85, 68, 58, 0.20)", padding: "0.125rem 0.5rem", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} className="animate-ping" />
                    READY TO DEPLOY
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={profileIndex}
                    initial={{ opacity: 0, y: 12, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -12, scale: 0.98 }}
                    transition={{ duration: 0.35 }}
                    className={styles.profileCard}
                  >
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <img
                          src={currentProfile.avatar}
                          alt={currentProfile.role}
                          style={{ width: "2.75rem", height: "2.75rem", borderRadius: "0.75rem", objectFit: "cover", border: "1px solid rgba(85,68,58,0.2)" }}
                        />
                        <div>
                          <h5 style={{ fontSize: "0.875rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{currentProfile.role}</h5>
                          <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{currentProfile.exp}</span>
                        </div>
                      </div>

                      <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, padding: "0.125rem 0.5rem", borderRadius: "9999px", border: "1px solid rgba(85,68,58,0.2)", color: "var(--color-dark-accent)", backgroundColor: "rgba(85,68,58,0.10)" }}>
                        {currentProfile.status}
                      </span>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "repeat(2, minmax(0, 1fr))", gap: "0.5rem", paddingTop: "0.25rem" }}>
                      {currentProfile.skills.map((skill, sIdx) => (
                        <div key={sIdx} style={{ display: "flex", alignItems: "center", gap: "0.375rem", padding: "0.5rem", borderRadius: "0.75rem", backgroundColor: "#ffffff", border: "1px solid rgba(85,68,58,0.1)" }}>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#55443A] shrink-0" />
                          <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--color-text-primary)", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{skill}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "0.5rem", borderTop: "1px solid #f1f5f9", fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.375rem", color: "var(--color-accent)", fontWeight: 700 }}>
                    <Zap className="w-3 h-3 text-[#55443A]" /> Immediate Onboarding (1-3 Days)
                  </span>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                    {TEAM_PROFILES.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        onClick={() => setProfileIndex(dotIdx)}
                        style={{
                          height: "0.375rem",
                          borderRadius: "9999px",
                          transition: "all 0.2s ease",
                          width: profileIndex === dotIdx ? "1rem" : "0.375rem",
                          backgroundColor: profileIndex === dotIdx ? "var(--color-accent)" : "rgba(85,68,58,0.2)"
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className={styles.rightCol}>
            <SectionBadge>DEDICATED TECHNOLOGY TEAM</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Build Your Dedicated <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Technology Team.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Looking to scale your digital capabilities? Reliution provides dedicated technology teams and experienced specialists across ERP, AI, Cloud, Mobile, Analytics, Automation, and Custom Software development.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.chipsGroup}
            >
              {HIRING_CHIPS.map((chip, idx) => (
                <span key={idx} className={styles.chipItem}>
                  {chip}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className={styles.btnGroup}
            >
              <a href="/contact" className={styles.primaryBtn}>
                <span>Schedule Free Consultation</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </a>

              <a href="/hire-developers" className={styles.secondaryBtn}>
                <span>Build Your Team</span>
                <ArrowRight className="w-4 h-4 text-[#55443A]" />
              </a>
            </motion.div>

          </div>

        </div>

        <div className={styles.metricsRow}>
          {TRUST_METRICS.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ textAlign: "center", display: "flex", flexDirection: "column", gap: "0.25rem" }}
            >
              <div className={styles.metricVal}>
                {metric.value}
              </div>
              <div className={styles.metricLabel}>{metric.label}</div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
