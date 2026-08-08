"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Layers, ShieldCheck } from "lucide-react";
import { ODOO_MODULES } from "@/data/services";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooEcosystem.module.css";

export default function OdooEcosystem() {
  const [activeModuleId, setActiveModuleId] = useState<string>("accounting");
  const activeModule = ODOO_MODULES.find((m) => m.id === activeModuleId) || ODOO_MODULES[0];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.leftCol}>
            <SectionBadge>OUR ODOO ERP EXPERTISE</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Enterprise-Grade <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Odoo ERP Solutions.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Reliution is a trusted Odoo ERP partner specializing in end-to-end implementation, custom module development, migration, and seamless multi-system integration. We transform complex operational workflows into a unified enterprise ecosystem.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.featureGrid}
            >
              <div className={styles.featureCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                  <ShieldCheck className="w-4 h-4 text-[#55443A]" />
                  <span>Certified Odoo Experts</span>
                </div>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>Dedicated technical architects & functional consultants</p>
              </div>

              <div className={styles.featureCard}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>
                  <Layers className="w-4 h-4 text-[#55443A]" />
                  <span>Custom ERP Modules</span>
                </div>
                <p style={{ fontSize: "11px", color: "var(--color-text-secondary)" }}>Tailored to your exact business logic & industry rules</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className={styles.btnGroup}
            >
              <a href="/odoo-implementation" className={styles.primaryBtn}>
                <span>Explore Odoo Services</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>

              <a href="/contactus" className={styles.secondaryBtn}>
                <span>Schedule Odoo Demo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#55443A]" />
              </a>
            </motion.div>
          </div>

          <div className={styles.rightCol}>
            <div style={{ position: "relative", width: "100%", aspectRatio: "1/1", maxWidth: "500px", margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, borderRadius: "9999px", border: "1px dashed rgba(85,68,58,0.25)", animation: "spin 60s linear infinite" }} />
              <div style={{ position: "absolute", inset: "3rem", borderRadius: "9999px", border: "1px solid rgba(85,68,58,0.15)" }} />

              <div style={{ zIndex: 20, width: "9rem", height: "9rem", borderRadius: "1.5rem", backgroundColor: "#ffffff", border: "1px solid rgba(85,68,58,0.20)", boxShadow: "var(--shadow-2xl)", backdropFilter: "blur(24px)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", padding: "0.75rem" }}>
                <img
                  src={activeModule.iconUrl}
                  alt={activeModule.title}
                  style={{ width: "3rem", height: "3rem", objectFit: "contain", marginBottom: "0.375rem" }}
                />
                <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{activeModule.title}</span>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", color: "var(--color-accent)", fontWeight: 700, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", maxWidth: "100%" }}>{activeModule.subtitle}</span>
              </div>

              {ODOO_MODULES.map((module) => {
                const radius = 175;
                const radian = (module.angle * Math.PI) / 180;
                const x = Math.cos(radian) * radius;
                const y = Math.sin(radian) * radius;
                const isActive = module.id === activeModuleId;

                return (
                  <button
                    key={module.id}
                    onClick={() => setActiveModuleId(module.id)}
                    style={{
                      position: "absolute",
                      zIndex: 30,
                      padding: "0.625rem",
                      borderRadius: "1rem",
                      border: isActive ? "1px solid #4D2308" : "1px solid rgba(85,68,58,0.15)",
                      backgroundColor: isActive ? "#55443A" : "#ffffff",
                      color: isActive ? "#ffffff" : "var(--color-text-secondary)",
                      boxShadow: isActive ? "0 10px 15px -3px rgba(85,68,58,0.20)" : "var(--shadow-sm)",
                      transform: `translate(${x}px, ${y}px) scale(${isActive ? 1.1 : 1})`,
                      transition: "all 0.3s ease",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      backdropFilter: "blur(12px)"
                    }}
                  >
                    <img src={module.iconUrl} alt={module.title} style={{ width: "1.25rem", height: "1.25rem", objectFit: "contain" }} />
                    <span style={{ fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 600 }} className="hidden sm:inline">{module.title}</span>
                  </button>
                );
              })}
            </div>

            <div style={{ marginTop: "1.5rem", padding: "1rem", borderRadius: "1rem", backgroundColor: "#ffffff", border: "1px solid rgba(85,68,58,0.15)", maxWidth: "28rem", margin: "1.5rem auto 0 auto", textAlign: "center", display: "flex", flexDirection: "column", gap: "0.25rem", boxShadow: "var(--shadow-sm)" }}>
              <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{activeModule.title} — {activeModule.subtitle}</span>
              <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)" }}>{activeModule.desc}</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
