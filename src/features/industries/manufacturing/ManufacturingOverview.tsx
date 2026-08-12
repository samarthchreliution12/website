"use client";

import React from "react";
import { motion } from "framer-motion";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

export default function ManufacturingOverview() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.sectionTitle}
          >
            {MANUFACTURING_INDUSTRY_DATA.overviewTitle}
          </motion.h2>
        </div>

        <div className={styles.overviewGrid}>
          <div className={styles.overviewTextCol}>
            {MANUFACTURING_INDUSTRY_DATA.overviewParagraphs.map((para, idx) => (
              <p key={idx} className={styles.bodyParagraph}>
                {para}
              </p>
            ))}
          </div>

          <div className={styles.overviewStatsCol}>
            <div className={styles.statsGrid}>
              {MANUFACTURING_INDUSTRY_DATA.overviewStats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
