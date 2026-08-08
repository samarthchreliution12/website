"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Sliders,
  RefreshCw,
  Share2,
  Headphones,
  Zap,
  GraduationCap,
  ArrowUpCircle
} from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooServicesGrid.module.css";

const ODOO_SERVICES = [
  {
    icon: Boxes,
    title: "Odoo Implementation",
    desc: "End-to-end ERP implementation from scoping and GAP analysis to data migration, Go-Live execution, and post-deployment validation.",
  },
  {
    icon: Sliders,
    title: "Odoo Customization",
    desc: "Tailored Python module development, custom workflow triggers, automated business logic, and bespoke QWeb report designing.",
  },
  {
    icon: RefreshCw,
    title: "Odoo Migration",
    desc: "Seamless data migration from legacy ERPs (SAP, QuickBooks, Tally, Microsoft Dynamics) into unified Odoo Enterprise v17 environment.",
  },
  {
    icon: Share2,
    title: "Odoo Integration",
    desc: "REST & XML-RPC API integrations linking Odoo with eCommerce (Shopify, WooCommerce), payment gateways, WhatsApp, and logistics carriers.",
  },
  {
    icon: Headphones,
    title: "Odoo Support & Maintenance",
    desc: "24/7 technical helpdesk, server health monitoring, regular security patches, bug fixing, and continuous functional assistance.",
  },
  {
    icon: Zap,
    title: "Odoo Performance Optimization",
    desc: "PostgreSQL query tuning, database indexing, worker thread balancing, memory optimization, and fast web response time tuning.",
  },
  {
    icon: GraduationCap,
    title: "Odoo Training",
    desc: "Role-specific hands-on training for management, finance teams, warehouse staff, and sales reps to ensure high user adoption.",
  },
  {
    icon: ArrowUpCircle,
    title: "Odoo Version Upgrade",
    desc: "Smooth version upgrade from older Odoo versions (v12, v14, v15, v16) to the latest Odoo 17 Enterprise with zero data loss.",
  },
];

export default function OdooServicesGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>OUR ODOO OFFERINGS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Comprehensive Odoo ERP Services
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            Reliution delivers full-lifecycle Odoo ERP engineering tailored to your operational realities and enterprise governance requirements.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {ODOO_SERVICES.map((service, index) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={styles.card}
              >
                <div>
                  <div className={styles.iconBox}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
