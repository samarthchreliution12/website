"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Award,
  Briefcase,
  CheckSquare,
  Cpu,
  Zap,
  Clock
} from "lucide-react";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./OdooWhyChoose.module.css";

const FEATURES = [
  {
    icon: Award,
    title: "Certified Developers",
    desc: "In-house team of certified Odoo functional consultants and senior Python technical architects with deep v14–v17 domain expertise.",
  },
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    desc: "10+ years delivering complex multi-company ERP implementations for mid-market and enterprise organizations worldwide.",
  },
  {
    icon: CheckSquare,
    title: "Industry Best Practices",
    desc: "Standardized Odoo engineering methodologies ensuring zero bloat, maintainable code quality, and smooth version upgradeability.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    desc: "Cloud-native infrastructure setups with PostgreSQL replication, Redis caching, worker thread balancing, and high availability.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Agile sprint execution model delivering core MVP modules rapidly while iterating on custom requirements in parallel.",
  },
  {
    icon: Clock,
    title: "Long-term Support",
    desc: "Dedicated SLA-backed technical assistance, 24/7 server monitoring, regular security patches, and functional staff training.",
  },
];

export default function OdooWhyChoose() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>WHY CHOOSE RELIUTION</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Why Enterprises Partner with Reliution
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            We combine functional business acumen with world-class Python software engineering to deliver reliable, frictionless Odoo ERP solutions.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={styles.card}
              >
                <div className={styles.iconBox}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
