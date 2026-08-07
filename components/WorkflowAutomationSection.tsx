"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  Zap,
  Bot,
  MessageSquare,
  Database,
  Send,
  FileText,
  Clock
} from "lucide-react";

const AUTOMATION_PILLS = [
  "CRM Automation",
  "ERP Automation",
  "WhatsApp Automation",
  "Email Automation",
  "API Integrations",
  "Approval Workflows",
  "Document Automation",
  "n8n Workflows",
];

const WORKFLOW_NODES = [
  {
    id: "node-1",
    step: "01",
    title: "Lead Received",
    subtitle: "Webhook Trigger",
    status: "Completed",
    statusColor: "text-[#00E676] bg-[#00E676]/10 border-[#00E676]/30",
    icon: Zap,
  },
  {
    id: "node-2",
    step: "02",
    title: "CRM & AI Qualification",
    subtitle: "OpenAI Decision",
    status: "AI Processing",
    statusColor: "text-[#00F0FF] bg-[#00F0FF]/10 border-[#00F0FF]/30",
    icon: Bot,
  },
  {
    id: "node-3",
    step: "03",
    title: "WhatsApp & Email Sent",
    subtitle: "Instant Notification",
    status: "Completed",
    statusColor: "text-[#00E676] bg-[#00E676]/10 border-[#00E676]/30",
    icon: Send,
  },
  {
    id: "node-4",
    step: "04",
    title: "Invoice & ERP Update",
    subtitle: "Odoo Synchronized",
    status: "Approved",
    statusColor: "text-[#0D82F8] bg-[#0D82F8]/10 border-[#0D82F8]/30",
    icon: Database,
  },
];

export default function WorkflowAutomationSection() {
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
    <section className="relative min-h-screen py-28 lg:py-36 flex items-center bg-[#08090E] overflow-hidden border-b border-white/5 my-12 lg:my-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_70%_at_50%_0%,rgba(0,240,255,0.12),transparent)] pointer-events-none" />
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00F0FF_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="max-w-[1560px] mx-auto px-6 sm:px-14 lg:px-24 xl:px-28 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-5 space-y-6 sm:space-y-7 max-w-[560px]">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#00F0FF]/[0.04] border border-[#00F0FF]/18 text-[#7EC8FF] backdrop-blur-md hover:border-[#00F0FF]/30 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00F0FF] animate-pulse" />
              <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.2em]">
                WORKFLOW AUTOMATION
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Automate Every Workflow. <br />
              <span className="bg-gradient-to-r from-white via-slate-200 to-[#00F0FF] bg-clip-text text-transparent">
                Eliminate Manual Work.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal"
            >
              Reliution designs intelligent workflow automation solutions that eliminate repetitive tasks, connect business systems, and improve operational efficiency. We automate CRM, ERP, approvals, notifications, WhatsApp, emails, API integrations, document processing, and internal business operations using modern automation platforms and AI.
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
                <span>Explore Automation</span>
                <ArrowRight className="w-3.5 h-3.5 text-white group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#"
                className="group px-5 py-3 text-xs font-medium text-slate-300 hover:text-white flex items-center gap-1.5 transition-colors"
              >
                <span>Talk to an Automation Expert</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#00F0FF] group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="lg:col-span-7 relative perspective-1000"
          >
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00F0FF]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-72 h-72 bg-[#0D82F8]/20 rounded-full blur-3xl pointer-events-none" />

            <motion.div
              animate={{ y: [-8, 8, -8], rotate: [0, 10, 0] }}
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className="absolute -top-4 -left-4 z-40 p-2.5 rounded-xl bg-[#0D0E15] border border-[#00F0FF]/40 text-[#00F0FF] shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs font-mono"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Webhook</span>
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6], rotate: [0, -8, 0] }}
              transition={{ duration: 6.4, ease: "easeInOut", repeat: Infinity }}
              className="absolute -bottom-4 -right-4 z-40 p-2.5 rounded-xl bg-[#0D0E15] border border-white/20 text-white shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2 text-xs font-mono"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Invoice Generated</span>
            </motion.div>

            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className="relative w-full p-5 sm:p-6 rounded-3xl bg-[#0D0E15]/95 border border-white/15 shadow-2xl shadow-black/90 backdrop-blur-2xl space-y-4 scale-[0.88] lg:scale-[0.92] origin-center"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-xl bg-[#00F0FF]/15 text-[#00F0FF] border border-[#00F0FF]/30">
                    <Workflow className="w-4 h-4 animate-spin" style={{ animationDuration: "12s" }} />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">Reliution Automation Canvas</h4>
                    <p className="text-[10px] font-mono text-slate-400">n8n & AI Real-Time Execution Engine</p>
                  </div>
                </div>
                <span className="text-[9px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 border border-[#00E676]/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E676] animate-ping" />
                  PIPELINE ACTIVE
                </span>
              </div>

              <div className="relative py-2 space-y-3">
                {WORKFLOW_NODES.map((node, index) => (
                  <React.Fragment key={node.id}>
                    <motion.div
                      whileHover={{ scale: 1.02, x: 4 }}
                      className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-[#00F0FF]/50 transition-all duration-200 flex items-center justify-between shadow-lg relative group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-[#0D82F8]/20 border border-[#0D82F8] text-[#00F0FF] flex items-center justify-center shrink-0">
                          <node.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] font-mono text-slate-400">{node.step}.</span>
                            <h5 className="text-xs font-bold text-white group-hover:text-[#00F0FF] transition-colors">
                              {node.title}
                            </h5>
                          </div>
                          <p className="text-[10px] font-mono text-slate-400 mt-0.5">{node.subtitle}</p>
                        </div>
                      </div>

                      <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full border ${node.statusColor}`}>
                        {node.status}
                      </span>
                    </motion.div>

                    {index < WORKFLOW_NODES.length - 1 && (
                      <div className="relative h-4 w-full flex items-center justify-center">
                        <div className="w-0.5 h-full bg-white/15 relative overflow-hidden">
                          <motion.div
                            animate={{ y: ["-100%", "100%"] }}
                            transition={{ duration: 1.8, ease: "linear", repeat: Infinity, delay: index * 0.4 }}
                            className="w-full h-1/2 bg-[#00F0FF] shadow-[0_0_8px_#00F0FF]"
                          />
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <div className="p-3 rounded-xl bg-gradient-to-r from-[#00F0FF]/15 via-[#0D82F8]/10 to-transparent border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs">
                  <Clock className="w-3.5 h-3.5 text-[#00F0FF]" />
                  <span className="text-slate-300 font-mono text-[11px]">Avg. Pipeline Speed: 48ms</span>
                </div>
                <span className="text-[10px] font-mono font-bold text-[#00E676] bg-[#00E676]/10 px-2 py-0.5 rounded">
                  0 MANUAL STEPS
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
