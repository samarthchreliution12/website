"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./BlogHero.module.css";

export default function BlogHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <SectionBadge>RELIUTION INSIGHTS</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.heading}
        >
          Enterprise Tech & Digital Insights
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.desc}
        >
          Expert perspectives on Odoo ERP, Enterprise AI, Cloud Infrastructure, and Business Process Optimization.
        </motion.p>
      </div>
    </section>
  );
}
