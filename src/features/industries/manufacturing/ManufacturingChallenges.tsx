"use client";

import React from "react";
import { motion } from "framer-motion";
import { Cpu, ShieldCheck, Sliders, LucideIcon } from "lucide-react";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

const ICON_MAP: Record<string, LucideIcon> = {
  Cpu,
  ShieldCheck,
  Sliders,
};

export default function ManufacturingChallenges() {
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
            {MANUFACTURING_INDUSTRY_DATA.challengesTitle}
          </motion.h2>
          <p className={styles.sectionDesc}>
            {MANUFACTURING_INDUSTRY_DATA.challengesDesc}
          </p>
        </div>

        <div className={styles.cardGrid3}>
          {MANUFACTURING_INDUSTRY_DATA.challenges.map((item, idx) => {
            const IconComp = ICON_MAP[item.iconName] || Cpu;
            return (
              <motion.div
                key={idx}
                className={styles.infoCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
              >
                <div className={styles.infoIconBox}>
                  <IconComp style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent, #4381d2)" }} />
                </div>
                <h3 className={styles.infoTitle}>{item.title}</h3>
                <p className={styles.infoDesc}>{item.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
