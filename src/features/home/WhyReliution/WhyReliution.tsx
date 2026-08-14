"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  ShieldCheck,
  Cpu,
  Headphones,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import {
  WHY_RELIUTION_CAPABILITIES,
  TECH_STACK_CHIPS
} from "@/data/home/whyReliution";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./WhyReliution.module.css";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Cpu,
  Layers,
  ShieldCheck,
  Headphones,
};

export default function WhyReliution() {
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
            Why Businesses Choose Reliution.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.desc}
          >
            Reliution helps organizations modernize, automate, and scale through enterprise technology solutions. From ERP implementation and AI-powered automation to cloud infrastructure and custom software, we deliver end-to-end digital transformation tailored to your business goals.
          </motion.p>
        </div>

        <div className={styles.cardsGrid}>
          {WHY_RELIUTION_CAPABILITIES.map((card, index) => {
            const IconComponent = ICON_MAP[card.iconName] || Cpu;
            return (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -6 }}
                className={styles.capCard}
              >
                <div>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className={styles.badge}>
                      {card.badge}
                    </span>
                  </div>

                  <h3 className={styles.cardTitle}>
                    {card.title}
                  </h3>

                  <p className={styles.cardDesc}>
                    {card.desc}
                  </p>

                  <div className={styles.pillGroup}>
                    {card.pills.map((pill, pIdx) => (
                      <span key={pIdx} className={styles.pillItem}>
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#55443A]" />
                        {pill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className={styles.techBox}>
          <div className={styles.techTitle}>
            ENTERPRISE TECHNOLOGY STACK
          </div>
          <div className={styles.chipGroup}>
            {TECH_STACK_CHIPS.map((chip, idx) => (
              <span key={idx} className={styles.chipItem}>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={styles.ctaCard}
        >
          <h3 className={styles.ctaHeading}>
            Ready to transform your business with modern technology?
          </h3>
          <div>
            <a href="/contact" className={styles.ctaBtn}>
              <span>Schedule a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-[#4D2308]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
