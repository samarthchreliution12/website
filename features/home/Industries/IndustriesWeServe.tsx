"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Activity,
  ShoppingBag,
  Landmark,
  Cloud,
  Utensils,
  Briefcase,
  ArrowRight
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/industries";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./IndustriesWeServe.module.css";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Factory,
  Truck,
  Activity,
  ShoppingBag,
  Landmark,
  Cloud,
  Utensils,
  Briefcase,
};

export default function IndustriesWeServe() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>INDUSTRIES WE SERVE</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Tailored Enterprise Solutions <br />
            For Every Sector.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.desc}
          >
            Reliution transforms operations across key global industries with custom ERP workflows, automated supply chains, cloud platforms, and enterprise AI.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES_DATA.map((ind, index) => {
            const IconComponent = ICON_MAP[ind.iconName] || Briefcase;
            return (
              <motion.div
                key={ind.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className={styles.card}
              >
                <div>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={styles.categoryTag}>
                      {ind.category}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    {ind.title}
                  </h3>

                  <p className={styles.cardDesc}>
                    {ind.desc}
                  </p>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.tagGroup}>
                    {ind.tags.map((tag, tIdx) => (
                      <span key={tIdx} className={styles.tagPill}>
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <a href="/contactus" className={styles.cardLink}>
                    <span>Explore Solutions</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
