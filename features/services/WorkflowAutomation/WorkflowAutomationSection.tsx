"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2, Workflow, Database, MessageSquare, Zap, Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./WorkflowAutomationSection.module.css";

const AUTOMATION_PILLS = [
  "WhatsApp API Automation",
  "CRM & Lead Workflows",
  "n8n / Make Integration",
  "Email Sequence Automation",
  "Odoo Workflow Sync",
  "Document Auto-Parsing",
  "Inventory Alerts",
  "Approval Escalations",
];

const WORKFLOW_NODES = [
  {
    id: "trigger",
    step: "01",
    title: "New Lead Received",
    subtitle: "HubSpot / Webform Trigger",
    status: "TRIGGERED",
    statusColor: "text-[#55443A] bg-[#55443A]/10 border-[#55443A]/20",
    icon: Database,
  },
  {
    id: "ai-enrich",
    step: "02",
    title: "AI Lead Scoring & Enrichment",
    subtitle: "GPT-4o Qualification Engine",
    status: "PROCESSED",
    statusColor: "text-[#4D2308] bg-[#4D2308]/10 border-[#4D2308]/20",
    icon: Zap,
  },
  {
    id: "crm-sync",
    step: "03",
    title: "Odoo CRM Auto-Creation",
    subtitle: "Deal Value & Rep Assigned",
    status: "SYNCED",
    statusColor: "text-[#55443A] bg-[#55443A]/10 border-[#55443A]/20",
    icon: Check,
  },
  {
    id: "notify",
    step: "04",
    title: "WhatsApp & Slack Alert Sent",
    subtitle: "Instant Sales Rep Notification",
    status: "DELIVERED",
    statusColor: "text-[#8A9992] bg-[#8A9992]/10 border-[#8A9992]/20",
    icon: MessageSquare,
  },
];

export default function WorkflowAutomationSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStepIndex((prev) => (prev + 1) % WORKFLOW_NODES.length);
    }, 3400);
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
            <SectionBadge>WORKFLOW AUTOMATION</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Automate Complex <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Cross-Platform Workflows.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Eliminate repetitive manual tasks and human error. Reliution designs intelligent end-to-end automation pipelines linking your ERP, CRM, WhatsApp API, emails, and databases into a synchronized 24/7 automated engine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {AUTOMATION_PILLS.map((pill, idx) => (
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
                <span>Automate Your Workflows</span>
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
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", letterSpacing: "-0.01em" }}>Live Enterprise Automation Flow</h4>
                    <p style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>n8n & Odoo Webhook Trigger Hub</p>
                  </div>
                </div>
                <span style={{ fontSize: "9px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-accent)", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", padding: "0.125rem 0.5rem", borderRadius: "9999px", display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} className="animate-ping" />
                  PIPELINE ACTIVE
                </span>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", position: "relative" }}>
                {WORKFLOW_NODES.map((node, index) => {
                  const isActive = index === activeStepIndex;
                  const NodeIcon = node.icon;

                  return (
                    <motion.div
                      key={node.id}
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      style={{
                        padding: "0.875rem",
                        borderRadius: "1rem",
                        border: isActive ? "1px solid #55443A" : "1px solid rgba(85,68,58,0.1)",
                        backgroundColor: isActive ? "rgba(85,68,58,0.1)" : "rgba(207,208,205,0.2)",
                        opacity: isActive ? 1 : 0.8,
                        transition: "all 0.3s ease",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                        <div style={{
                          width: "2rem",
                          height: "2rem",
                          borderRadius: "0.75rem",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontFamily: "var(--font-mono)",
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          backgroundColor: isActive ? "#55443A" : "rgba(207,208,205,0.4)",
                          color: isActive ? "#ffffff" : "var(--color-text-primary)"
                        }}>
                          {node.step}
                        </div>

                        <div>
                          <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "var(--color-text-primary)", display: "flex", alignItems: "center", gap: "0.375rem" }}>
                            <NodeIcon className="w-3.5 h-3.5 text-[#55443A]" />
                            {node.title}
                          </div>
                          <div style={{ fontSize: "10px", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{node.subtitle}</div>
                        </div>
                      </div>

                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded border ${node.statusColor}`}>
                        {node.status}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
