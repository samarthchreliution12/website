"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooProcessTimeline.module.css";

const STEPS = [
  { step: "01", title: "Requirement Analysis", desc: "GAP analysis, process mapping, and defining custom module requirements." },
  { step: "02", title: "Planning", desc: "Architecture design, milestone scheduling, and sprint planning." },
  { step: "03", title: "Implementation", desc: "Core Odoo installation, DB configuration, and baseline app activation." },
  { step: "04", title: "Customization", desc: "Python backend coding, custom views, and third-party API wiring." },
  { step: "05", title: "Testing", desc: "UAT testing, performance benchmarks, and data integrity checks." },
  { step: "06", title: "Deployment", desc: "Production cutover, live data migration, and Go-Live launch." },
  { step: "07", title: "Support", desc: "24/7 technical assistance, ongoing optimization, and updates." },
];

export default function OdooProcessTimeline() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>OUR METHODOLOGY</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            End-to-End Odoo Development Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            A disciplined, agile engineering framework designed to deliver high-quality Odoo ERP deployments on schedule and within budget.
          </motion.p>
        </div>

        <div className={styles.timelineGrid}>
          {STEPS.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.4,
                delay: idx * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={styles.stepCard}
            >
              <div className={styles.stepBadge}>{s.step}</div>
              <h4 className={styles.stepTitle}>{s.title}</h4>
              <p className={styles.stepDesc}>{s.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
