"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/data/testimonials";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./Testimonials.module.css";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  const activeItem = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>CLIENT TESTIMONIALS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            What Enterprise Leaders Say <br />
            About Reliution.
          </motion.h2>
        </div>

        <div style={{ maxWidth: "56rem", marginLeft: "auto", marginRight: "auto" }}>
          <div className={styles.testimonialCard}>
            <Quote className="w-12 h-12 text-[#55443A]/30" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35 }}
                style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.25rem" }}>
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#4D2308] fill-[#4D2308]" />
                  ))}
                </div>

                <p className={styles.quoteText}>
                  "{activeItem.content}"
                </p>

                <div className={styles.authorBox}>
                  <img
                    src={activeItem.avatar}
                    alt={activeItem.name}
                    style={{ width: "3rem", height: "3rem", borderRadius: "0.75rem", objectFit: "cover", border: "1px solid rgba(85,68,58,0.2)", boxShadow: "var(--shadow-md)" }}
                  />
                  <div>
                    <h4 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--color-text-primary)" }}>{activeItem.name}</h4>
                    <p style={{ fontSize: "0.75rem", color: "var(--color-text-secondary)", fontFamily: "var(--font-mono)" }}>
                      {activeItem.role} — <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>{activeItem.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className={styles.navRow}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                {TESTIMONIALS_DATA.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    style={{
                      height: "0.5rem",
                      borderRadius: "9999px",
                      transition: "all 0.2s ease",
                      width: currentIndex === idx ? "2rem" : "0.5rem",
                      backgroundColor: currentIndex === idx ? "var(--color-accent)" : "rgba(85,68,58,0.2)"
                    }}
                  />
                ))}
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <button onClick={prevTestimonial} className={styles.navBtn}>
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextTestimonial} className={styles.navBtn}>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
