"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooTechnologies.module.css";

const TECH_STACK = [
  { name: "Odoo v14 - v17", category: "ERP Platform" },
  { name: "Python 3.10+", category: "Backend Engine" },
  { name: "PostgreSQL", category: "Database" },
  { name: "XML & QWeb", category: "View Templates" },
  { name: "JavaScript ES6+", category: "Frontend Web" },
  { name: "OWL Framework", category: "Odoo Web Library" },
  { name: "Docker", category: "Containerization" },
  { name: "GitHub CI/CD", category: "Version Control" },
  { name: "REST & XML-RPC", category: "API Integration" },
];

export default function OdooTechnologies() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>TECHNOLOGY STACK</SectionBadge>

          <h2 className={styles.heading}>
            Engineered on Enterprise Tech Stack
          </h2>
        </div>

        <div className={styles.grid}>
          {TECH_STACK.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className={styles.techChip}
            >
              <div>
                <span className={styles.techName}>{tech.name}</span>
                <span className={styles.techCategory} style={{ display: "block" }}>{tech.category}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
