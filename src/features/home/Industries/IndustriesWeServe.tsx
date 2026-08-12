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
  ArrowRight,
  ChevronRight
} from "lucide-react";
import { INDUSTRIES_DATA } from "@/data/home/industries";
import { SectionBadge } from "@/components/Badge/Badge";
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

const EXTRA_INDUSTRY_PILLS = [
  "Manufacturing",
  "Healthcare",
  "Retail",
  "Finance",
  "Telecom",
  "Logistics",
  "Ecommerce",
  "Education",
  "Hospitality",
  "AI & ML",
  "ERP",
  "Cloud",
];

export default function IndustriesWeServe() {
  // Filter out "professional-services" card to replace it with the Helius-inspired wide card
  const filteredIndustries = INDUSTRIES_DATA.filter((ind) => ind.id !== "professional-services");

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
            Across Core Industries.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.desc}
          >
            Reliution delivers specialized digital transformation services designed for the unique operational, compliance, and technological needs of modern industry sectors.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {filteredIndustries.map((ind, index) => {
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
                className={styles.card}
              >
                <div>
                  <div className={styles.cardTop}>
                    <div className={styles.iconBox}>
                      <IconComponent className="w-7 h-7" />
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

                  <a href={ind.link || "/contactus"} className={styles.cardLink}>
                    <span>Explore Industry</span>
                    <ArrowRight className={styles.arrowIcon} />
                  </a>
                </div>
              </motion.div>
            );
          })}

          {/* HELIUS-INSPIRED WIDE INFORMATION CARD OCCUPYING REMAINING 2 COLUMNS */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{
              duration: 0.6,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={styles.wideCard}
          >
            <div>
              <div className={styles.wideHeader}>
                <span className={styles.wideBadge}>Cross-Industry Capabilities</span>
                <h3 className={styles.wideTitle}>
                  Explore More Industries
                </h3>
              </div>

              <p className={styles.wideDesc}>
                Reliution empowers global organizations across diverse sectors with tailored Odoo ERP architectures, custom software engineering, cloud migration, automated supply chains, and enterprise AI decisioning.
              </p>

              <div className={styles.pillGrid}>
                {EXTRA_INDUSTRY_PILLS.map((pill, pIdx) => (
                  <a
                    key={pIdx}
                    href={pill === "Manufacturing" ? "/industries/manufacturing" : "/contactus"}
                    className={styles.widePill}
                  >
                    <span>{pill}</span>
                    <ChevronRight className={styles.pillArrow} />
                  </a>
                ))}
              </div>
            </div>

            <div className={styles.wideFooter}>
              <a href="/contactus" className={styles.wideCtaLink}>
                <span>Explore All Industries</span>
                <ArrowRight className={styles.arrowIcon} />
              </a>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
