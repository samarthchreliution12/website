"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Workflow, Database, MessageSquare, Mail, Zap, Check } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";

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
    statusColor: "text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/30",
    icon: Database,
  },
  {
    id: "ai-enrich",
    step: "02",
    title: "AI Lead Scoring & Enrichment",
    subtitle: "GPT-4o Qualification Engine",
    status: "PROCESSED",
    statusColor: "text-purple-400 bg-purple-400/10 border-purple-400/30",
    icon: Zap,
  },
  {
    id: "crm-sync",
    step: "03",
    title: "Odoo CRM Auto-Creation",
    subtitle: "Deal Value & Rep Assigned",
    status: "SYNCED",
    statusColor: "text-[#00E676] bg-[#00E676]/10 border-[#00E676]/30",
    icon: Check,
  },
  {
    id: "notify",
    step: "04",
    title: "WhatsApp & Slack Alert Sent",
    subtitle: "Instant Sales Rep Notification",
    status: "DELIVERED",
    statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/30",
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
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(20,184,166,0.12),transparent)] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <SectionBadge>WORKFLOW AUTOMATION</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Automate Complex <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Cross-Platform Workflows.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Eliminate repetitive manual tasks and human error. Reliution designs intelligent end-to-end automation pipelines linking your ERP, CRM, WhatsApp API, emails, and databases into a synchronized 24/7 automated engine.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1"
            >
              {AUTOMATION_PILLS.map((pill, idx) => (
                <div key={idx} className="flex items-center gap-1.5 p-2 rounded-xl bg-white/[0.03] border border-white/5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#00E676] shrink-0" />
                  <span className="text-[11px] font-medium text-slate-200 truncate">{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a
                href="/contactus"
                className="group px-6 py-3 rounded-xl bg-[#0D82F8] hover:bg-[#38BDF8] text-white text-xs font-semibold flex items-center gap-2 shadow-lg shadow-[#0D82F8]/25 border border-white/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>Automate Your Workflows</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-5 sm:p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl space-y-4 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                    <Workflow className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Live Enterprise Automation Flow</h4>
                    <p className="text-[10px] font-mono text-slate-400">n8n & Odoo Webhook Trigger Hub</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-emerald-400 bg-emerald-400/10 border border-emerald-400/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  PIPELINE ACTIVE
                </span>
              </div>

              <div className="space-y-3 relative">
                {WORKFLOW_NODES.map((node, index) => {
                  const isActive = index === activeStepIndex;
                  const NodeIcon = node.icon;

                  return (
                    <motion.div
                      key={node.id}
                      animate={{ scale: isActive ? 1.02 : 1 }}
                      className={`p-3.5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                        isActive
                          ? "bg-[#0D82F8]/20 border-[#00F0FF] shadow-lg shadow-[#00F0FF]/20"
                          : "bg-white/[0.03] border-white/10 opacity-80"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center font-mono text-xs font-bold ${
                          isActive ? "bg-[#00F0FF] text-black" : "bg-white/10 text-white"
                        }`}>
                          {node.step}
                        </div>

                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            <NodeIcon className="w-3.5 h-3.5 text-[#00F0FF]" />
                            {node.title}
                          </div>
                          <div className="text-[10px] font-mono text-slate-400">{node.subtitle}</div>
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
