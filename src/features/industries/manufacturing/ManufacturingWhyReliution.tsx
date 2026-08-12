"use client";

import React from "react";
import { motion } from "framer-motion";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

export default function ManufacturingWhyReliution() {
  return (
    <section className={styles.sectionAlt}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.sectionTitle}
          >
            {MANUFACTURING_INDUSTRY_DATA.whyTitle}
          </motion.h2>
        </div>

        <div className={styles.cardGrid3}>
          {MANUFACTURING_INDUSTRY_DATA.whyPoints.map((item, idx) => (
            <motion.div
              key={idx}
              className={styles.infoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <h3 className={styles.infoTitle}>{item.title}</h3>
              <p className={styles.infoDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
