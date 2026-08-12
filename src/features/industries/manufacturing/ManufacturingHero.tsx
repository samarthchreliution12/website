"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import { MANUFACTURING_INDUSTRY_DATA } from "@/data/industries/manufacturing";
import styles from "./ManufacturingIndustry.module.css";

export default function ManufacturingHero() {
  return (
    <section className={styles.heroSection}>
      <div className={styles.container}>
        {/* BREADCRUMB */}
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span>Industries</span>
          <ChevronRight className="w-3.5 h-3.5 opacity-50" />
          <span className={styles.activeBreadcrumb}>Manufacturing</span>
        </nav>

        <motion.div
          className={styles.heroContent}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className={styles.badge}>{MANUFACTURING_INDUSTRY_DATA.badge}</span>
          <h1 className={styles.heroHeading}>{MANUFACTURING_INDUSTRY_DATA.title}</h1>

          <p className={styles.heroSubtitle}>
            {MANUFACTURING_INDUSTRY_DATA.subtitle}
          </p>

          <p className={styles.heroParagraph}>
            {MANUFACTURING_INDUSTRY_DATA.heroDescription}
          </p>

          <div className={styles.btnGroup}>
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
