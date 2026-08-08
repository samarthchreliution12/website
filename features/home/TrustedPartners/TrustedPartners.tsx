"use client";

import React from "react";
import { motion } from "framer-motion";
import { PARTNER_LOGOS } from "@/data/partners";
import styles from "./TrustedPartners.module.css";

export default function TrustedPartners() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <motion.h3
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={styles.title}
          >
            TRUSTED BY LEADING ENTERPRISES & INDUSTRY LEADERS
          </motion.h3>
        </div>

        <div className={styles.marqueeTrack}>
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25,
              ease: "linear",
              repeat: Infinity,
            }}
            className={styles.marqueeList}
          >
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logoFilename, index) => (
              <div key={index} className={styles.logoItem}>
                <img
                  src={`https://www.reliution.com/wp-content/uploads/2025/05/${logoFilename}`}
                  alt={`Trusted Client Brand ${index + 1}`}
                  loading="lazy"
                  className={styles.logoImg}
                />
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
