"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./OdooCTA.module.css";

export default function OdooCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={styles.ctaBox}
        >
          <h2 className={styles.heading}>
            Ready to Modernize Your Business?
          </h2>

          <p className={styles.subtitle}>
            Schedule a Free ERP Consultation
          </p>

          <div>
            <a href="/contactus" className={styles.btn}>
              <span>Talk to an Expert</span>
              <ArrowRight className="w-4 h-4 text-[#4D2308]" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
