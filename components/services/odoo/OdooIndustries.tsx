"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Factory,
  ShoppingBag,
  Activity,
  Truck,
  GraduationCap,
  HardHat,
  Landmark,
  Boxes
} from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import styles from "./OdooIndustries.module.css";

const INDUSTRIES = [
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Multi-level Bill of Materials (BoM), shop floor work orders, quality control routines, and MRP auto-procurement.",
  },
  {
    icon: ShoppingBag,
    title: "Retail & E-Commerce",
    desc: "Omnichannel POS, real-time inventory synchronization across Shopify/WooCommerce, and barcode stock management.",
  },
  {
    icon: Activity,
    title: "Healthcare & Pharma",
    desc: "Batch and lot tracking, expiry date alerts, automated compliance reporting, and medical supply chain auditing.",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    desc: "Fleet tracking, automated warehouse dispatch, carrier API integrations, and 3PL fulfillment management.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Student enrollment portals, course fee invoicing, automated attendance tracking, and faculty resource planning.",
  },
  {
    icon: HardHat,
    title: "Construction & Real Estate",
    desc: "Project cost accounting, subcontractor billing, site equipment tracking, and milestone-based invoicing.",
  },
  {
    icon: Landmark,
    title: "Finance & Banking",
    desc: "Multi-currency bank feeds, automated reconciliation, tax compliance, and automated financial statements.",
  },
  {
    icon: Boxes,
    title: "Distribution & Wholesale",
    desc: "Bulk order processing, tiered price lists, automated vendor RFQs, and margin tracking dashboards.",
  },
];

export default function OdooIndustries() {
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
            Tailored Odoo Solutions for Key Sectors
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            We customize Odoo workflows to match the specific regulatory, operational, and financial requirements of your industry.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((ind, idx) => {
            const IconComp = ind.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: idx * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={styles.card}
              >
                <div className={styles.iconBox}>
                  <IconComp className="w-6 h-6" />
                </div>
                <h4 className={styles.cardTitle}>{ind.title}</h4>
                <p className={styles.cardDesc}>{ind.desc}</p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
