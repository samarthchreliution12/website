"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import { ArrowRight, CheckCircle2, Package, Cpu, Cloud, Code2, Check } from "lucide-react";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./Hero.module.css";

const HERO_STATS = [
  { value: "100+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "30+", label: "Global Reach" },
  { value: "24/7", label: "Enterprise Support" },
];

const BRAND_PILLS = [
  "ERP Implementation",
  "AI & Automation",
  "Cloud Infrastructure",
  "Custom Software",
];

const CAPABILITIES_DATA = [
  {
    title: "ERP Solutions",
    icon: Package,
    items: ["Odoo ERP", "Implementation", "Custom Modules"],
  },
  {
    title: "AI & Automation",
    icon: Cpu,
    items: ["AI Agents", "Workflow Automation", "LLM Integration"],
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    items: ["AWS / Azure", "Docker", "Kubernetes"],
  },
  {
    title: "Custom Software",
    icon: Code2,
    items: ["Web Applications", "Mobile Apps", "Enterprise Systems"],
  },
];

const BOTTOM_BAR_ITEMS = [
  "100+ Projects Delivered",
  "10+ Years Experience",
  "Enterprise Architecture",
  "Long-term Support",
];

function CountUpStat({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-20px" });
  const [displayText, setDisplayText] = useState("0");

  useEffect(() => {
    if (!isInView) return;

    if (value === "100+") {
      const controls = animate(0, 100, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayText(Math.floor(latest) + "+");
        },
      });
      return () => controls.stop();
    } else if (value === "10+") {
      const controls = animate(0, 10, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayText(Math.floor(latest) + "+");
        },
      });
      return () => controls.stop();
    } else if (value === "24/7") {
      const controls = animate(0, 24, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplayText(Math.floor(latest) + "/7");
        },
      });
      return () => controls.stop();
    } else {
      setDisplayText(value);
    }
  }, [isInView, value]);

  return <span ref={ref}>{displayText}</span>;
}

export default function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          {/* LEFT COLUMN: HERO CONTENT */}
          <div className={styles.leftCol}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <SectionBadge>Enterprise Digital Transformation Partner</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(10px)", y: 24 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Architecting <br />
              <span className={styles.gradientText}>
                Digital Evolution
              </span> <br />
              For Modern Enterprises.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Reliution designs, deploys, and optimizes mission-critical digital systems. From Odoo Enterprise ERP and AI decision engines to cloud-native platforms, we accelerate business growth with zero operational friction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {BRAND_PILLS.map((pill, idx) => (
                <div key={idx} className={styles.pillItem}>
                  <CheckCircle2 className="w-4 h-4 text-[#55443A] shrink-0" />
                  <span>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.34, 1.2, 0.64, 1] }}
              className={styles.btnRow}
            >
              <a href="/contact" className={styles.primaryBtn}>
                <span>Schedule Strategy Call</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/services/odoo-erp-solutions" className={styles.secondaryBtn}>
                <span>Explore Solutions</span>
                <ArrowRight className="w-4 h-4 text-[#55443A]" />
              </a>
            </motion.div>
          </div>

          {/* RIGHT COLUMN: RELIUTION CAPABILITIES PANEL */}
          <div className={styles.rightCol}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.capabilitiesCard}
            >
              {/* CARD HEADER */}
              <div className={styles.cardHeader}>
                <span className={styles.categoryBadge}>RELIUTION CAPABILITIES</span>
                <h3 className={styles.cardTitle}>Enterprise Digital Solutions</h3>
              </div>

              {/* 2X2 CAPABILITIES GRID */}
              <div className={styles.capabilitiesGrid}>
                {CAPABILITIES_DATA.map((cap, idx) => {
                  const IconComp = cap.icon;
                  return (
                    <div key={idx} className={styles.capabilityCard}>
                      <div className={styles.capabilityHeader}>
                        <div className={styles.iconBox}>
                          <IconComp className="w-4 h-4 text-[#55443A]" />
                        </div>
                        <h4 className={styles.capabilityTitle}>{cap.title}</h4>
                      </div>
                      <ul className={styles.capabilityList}>
                        {cap.items.map((item, itemIdx) => (
                          <li key={itemIdx} className={styles.capabilityItem}>
                            <Check className="w-3.5 h-3.5 text-[#55443A] shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>

              {/* BOTTOM INFORMATION BAR */}
              <div className={styles.bottomInfoBar}>
                {BOTTOM_BAR_ITEMS.map((text, idx) => (
                  <div key={idx} className={styles.bottomBarItem}>
                    <CheckCircle2 className="w-4 h-4 text-[#55443A] shrink-0" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>

        {/* FULL-WIDTH HERO STATISTICS SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className={styles.statsContainer}
        >
          <div className={styles.statsGrid}>
            {HERO_STATS.map((stat, index) => (
              <React.Fragment key={index}>
                <div className={styles.statItem}>
                  <div className={styles.statVal}>
                    <CountUpStat value={stat.value} />
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
                {index < HERO_STATS.length - 1 && <div className={styles.divider} />}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
