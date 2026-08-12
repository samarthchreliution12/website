"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

interface SectionProps {
  title: string;
  desc: string;
  points: { title: string; desc: string }[];
  isAlt?: boolean;
}

function CapabilityBlock({ title, desc, points, isAlt = false }: SectionProps) {
  return (
    <section className={isAlt ? styles.sectionAlt : styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.sectionTitle}
          >
            {title}
          </motion.h2>
          <p className={styles.sectionDesc}>{desc}</p>
        </div>

        <div className={styles.featurePointsGrid}>
          {points.map((p, idx) => (
            <motion.div
              key={idx}
              className={styles.featurePointCard}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <CheckCircle2 className={styles.featureCheckIcon} />
              <div className={styles.featurePointBody}>
                <h3 className={styles.featurePointTitle}>{p.title}</h3>
                <p className={styles.featurePointDesc}>{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function ManufacturingCapabilities() {
  return (
    <>
      {/* 1. Production & Shop Floor Management */}
      <CapabilityBlock
        title={MANUFACTURING_INDUSTRY_DATA.productionTitle}
        desc={MANUFACTURING_INDUSTRY_DATA.productionDesc}
        points={MANUFACTURING_INDUSTRY_DATA.productionPoints}
        isAlt={true}
      />

      {/* 2. Inventory & Batch Traceability */}
      <CapabilityBlock
        title={MANUFACTURING_INDUSTRY_DATA.inventoryTitle}
        desc={MANUFACTURING_INDUSTRY_DATA.inventoryDesc}
        points={MANUFACTURING_INDUSTRY_DATA.inventoryPoints}
        isAlt={false}
      />

      {/* 3. Quality Assurance & Compliance */}
      <CapabilityBlock
        title={MANUFACTURING_INDUSTRY_DATA.qualityTitle}
        desc={MANUFACTURING_INDUSTRY_DATA.qualityDesc}
        points={MANUFACTURING_INDUSTRY_DATA.qualityPoints}
        isAlt={true}
      />

      {/* 4. Product Configuration & Production Planning */}
      <CapabilityBlock
        title={MANUFACTURING_INDUSTRY_DATA.configTitle}
        desc={MANUFACTURING_INDUSTRY_DATA.configDesc}
        points={MANUFACTURING_INDUSTRY_DATA.configPoints}
        isAlt={false}
      />
    </>
  );
}
