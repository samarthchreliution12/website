"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

export default function ManufacturingCTA() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          className={styles.ctaBox}
          initial={{ opacity: 0, scale: 0.98, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className={styles.ctaHeading}>{MANUFACTURING_INDUSTRY_DATA.ctaTitle}</h2>
          <p className={styles.ctaDesc}>{MANUFACTURING_INDUSTRY_DATA.ctaDesc}</p>

          <div className={styles.btnGroup} style={{ justifyContent: "center" }}>
            <Link href="/contactus" className={styles.primaryBtn}>
              <span>Talk to Our Experts</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link href="/contactus" className={styles.secondaryBtn}>
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#4381d2]" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
