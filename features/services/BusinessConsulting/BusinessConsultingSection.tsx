"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./BusinessConsultingSection.module.css";

const CONSULTING_PILLS = [
  "Process Audits",
  "Workflow Optimization",
  "ERP Readiness Assessment",
  "Digital Strategy Roadmap",
  "SOP Standardizing",
  "Change Management",
  "Supply Chain Audit",
  "ROI Analysis",
];

export default function BusinessConsultingSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(normX);
    mouseY.set(normY);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.leftCol}>
            <SectionBadge>BUSINESS CONSULTING</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Strategic Business Process <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Consulting & Optimization.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Technology is only as effective as the processes behind it. Reliution provides strategic management consulting to analyze operational bottlenecks, standardize workflows, and build an actionable digital transformation roadmap tailored to your growth goals.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {CONSULTING_PILLS.map((pill, idx) => (
                <div key={idx} className={styles.pillItem}>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#55443A] shrink-0" />
                  <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{pill}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 14 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: 0.45, ease: [0.34, 1.56, 0.64, 1] }}
              style={{ paddingTop: "0.5rem" }}
            >
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Book Consulting Audit</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </motion.div>
          </div>

          <div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={`${styles.rightCol} perspective-1000`}
          >
            <motion.div
              style={{ rotateX, rotateY }}
              animate={{ y: [-6, 6, -6] }}
              transition={{ duration: 6, ease: "easeInOut", repeat: Infinity }}
              className={styles.imgCard}
            >
              <img
                src="/asset/BUSINESS_CONSULTING_img.jpeg"
                alt="Reliution Business Process Consulting Roadmap"
                className={styles.img}
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
