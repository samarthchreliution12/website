"use client";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ShieldCheck, Wifi } from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./MobileAppSection.module.css";

const MOBILE_PILLS = [
  "Android App Development",
  "iOS App Development",
  "Cross Platform Apps",
  "Enterprise Mobility",
  "UI / UX Design",
  "API Integration",
  "Push Notifications",
  "App Maintenance & Support",
];

const MOBILE_SCREENS = [
  { title: "Reliution Mobile ERP", screen: "Sales Dashboard", metric: "₹4.8M Revenue Today", badge: "iOS & Android" },
  { title: "Inventory Scanner", screen: "Barcode QR Sync", metric: "99.8% Scan Accuracy", badge: "Offline Mode" },
  { title: "Enterprise Mobility", screen: "Field Team Tracking", metric: "Real-Time GPS", badge: "GPS Active" },
];

export default function MobileAppSection() {
  const [screenIndex, setScreenIndex] = useState(0);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 200, damping: 25 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -2]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 3]), springConfig);

  useEffect(() => {
    const timer = setInterval(() => {
      setScreenIndex((prev) => (prev + 1) % MOBILE_SCREENS.length);
    }, 3600);
    return () => clearInterval(timer);
  }, []);

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
            <SectionBadge>MOBILE APP DEVELOPMENT</SectionBadge>

            <motion.h2
              initial={{ opacity: 0, filter: "blur(8px)", y: 18 }}
              whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={styles.heading}
            >
              Build Powerful <br />
              <span style={{ background: "linear-gradient(to right, #1F1F1F, #4D2308, #55443A)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                Mobile Apps.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={styles.desc}
            >
              Reliution designs and develops high-performance mobile applications that deliver exceptional user experiences across Android and iOS.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className={styles.pillsGrid}
            >
              {MOBILE_PILLS.map((pill, idx) => (
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
                <span>Explore Mobile Solutions</span>
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
              transition={{ duration: 5.2, ease: "easeInOut", repeat: Infinity }}
              className={styles.phoneFrame}
            >
              <div style={{ width: "5rem", height: "1rem", borderRadius: "9999px", backgroundColor: "#1F1F1F", margin: "0 auto 0.5rem auto", display: "flex", alignItems: "center", justifyContent: "space-between", paddingLeft: "0.5rem", paddingRight: "0.5rem" }}>
                <div style={{ width: "0.5rem", height: "0.5rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} />
                <Wifi className="w-2.5 h-2.5 text-white/60" />
              </div>

              <div style={{ flex: "1 1 0%", borderRadius: "1.5rem", background: "linear-gradient(to bottom, rgba(207,208,205,0.3), #ffffff)", border: "1px solid rgba(85,68,58,0.15)", padding: "1rem", display: "flex", flexDirection: "column", justifyContent: "space-between", overflow: "hidden" }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <span style={{ fontSize: "10px", fontFamily: "var(--font-mono)", fontWeight: 700, color: "var(--color-dark-accent)", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", padding: "0.125rem 0.5rem", borderRadius: "0.25rem" }}>
                    {MOBILE_SCREENS[screenIndex].badge}
                  </span>
                  <ShieldCheck className="w-4 h-4 text-[#55443A]" />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={screenIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: "flex", flexDirection: "column", gap: "0.5rem", paddingTop: "0.5rem", paddingBottom: "0.5rem" }}
                  >
                    <div style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)" }}>{MOBILE_SCREENS[screenIndex].screen}</div>
                    <div style={{ fontSize: "1rem", fontWeight: 800, color: "var(--color-text-primary)", lineHeight: 1.25 }}>
                      {MOBILE_SCREENS[screenIndex].title}
                    </div>
                    <div style={{ padding: "0.625rem", borderRadius: "0.75rem", backgroundColor: "rgba(85,68,58,0.1)", border: "1px solid rgba(85,68,58,0.2)", fontSize: "0.75rem", fontWeight: 700, color: "var(--color-dark-accent)" }}>
                      {MOBILE_SCREENS[screenIndex].metric}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
