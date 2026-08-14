"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SectionBadge } from "@/components/Badge/Badge";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  Boxes,
  Cpu,
  Bot,
  Workflow,
} from "lucide-react";
import { AboutPageData } from "@/data/about/aboutPageData";
import styles from "./AboutTemplate.module.css";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string; style?: React.CSSProperties }>> = {
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  Boxes,
  Cpu,
  Bot,
  Workflow,
};

interface AboutTemplateProps {
  data: AboutPageData;
}

export default function AboutTemplate({ data }: AboutTemplateProps) {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* ==========================================
         1. HERO SECTION
         ========================================== */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{data.hero.eyebrow}</SectionBadge>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <p className={styles.subtitle}>{data.hero.description}</p>

            <div className={styles.statsGrid}>
              {data.hero.stats.map((stat, idx) => (
                <div key={idx} className={styles.statCard}>
                  <span className={styles.statVal}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ==========================================
         2. MISSION & VISION
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>{data.overview.eyebrow}</SectionBadge>
            <h2 className={styles.sectionTitle}>{data.overview.title}</h2>
            <p className={styles.sectionDesc}>{data.overview.description}</p>
          </div>

          <div className={styles.grid2}>
            {/* MISSION */}
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.iconBox}>
                {React.createElement(ICON_MAP[data.missionVision.mission.iconName] || Target, {
                  style: { width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }
                })}
              </div>
              <h3 className={styles.cardTitle}>{data.missionVision.mission.title}</h3>
              <p className={styles.cardDesc}>{data.missionVision.mission.description}</p>
            </motion.div>

            {/* VISION */}
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className={styles.iconBox}>
                {React.createElement(ICON_MAP[data.missionVision.vision.iconName] || Eye, {
                  style: { width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }
                })}
              </div>
              <h3 className={styles.cardTitle}>{data.missionVision.vision.title}</h3>
              <p className={styles.cardDesc}>{data.missionVision.vision.description}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
         3. CORE VALUES
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>{data.values.eyebrow}</SectionBadge>
            <h2 className={styles.sectionTitle}>{data.values.title}</h2>
            <p className={styles.sectionDesc}>{data.values.description}</p>
          </div>

          <div className={styles.grid4}>
            {data.values.items.map((val, idx) => {
              const IconComponent = ICON_MAP[val.iconName] || ShieldCheck;
              return (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                >
                  <div className={styles.iconBox}>
                    <IconComponent style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
                  </div>
                  <h3 className={styles.cardTitle}>{val.title}</h3>
                  <p className={styles.cardDesc}>{val.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
         4. CORE PILLARS / CAPABILITIES
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>{data.capabilities.eyebrow}</SectionBadge>
            <h2 className={styles.sectionTitle}>{data.capabilities.title}</h2>
            <p className={styles.sectionDesc}>{data.capabilities.description}</p>
          </div>

          <div className={styles.grid4}>
            {data.capabilities.items.map((cap, idx) => {
              const IconComponent = ICON_MAP[cap.iconName] || Boxes;
              return (
                <div key={idx} className={styles.card}>
                  <div className={styles.iconBox}>
                    <IconComponent style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
                  </div>
                  <h3 className={styles.cardTitle}>{cap.title}</h3>
                  <p className={styles.cardDesc}>{cap.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
         5. FINAL CTA
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              {data.cta.title}
            </h2>
            <p className={styles.sectionDesc} style={{ textAlign: "center" }}>
              {data.cta.description}
            </p>

            <div className={styles.btnGroup}>
              <Link href={data.cta.btnLink} className={styles.primaryBtn}>
                <span>{data.cta.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
