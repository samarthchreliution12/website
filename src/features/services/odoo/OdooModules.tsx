"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Package,
  ShoppingCart,
  Receipt,
  Factory,
  UserCheck,
  Store,
  Globe,
  ShoppingBag,
  LifeBuoy,
  Briefcase,
  Clock,
  Key,
  Repeat,
  Wrench
} from "lucide-react";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./OdooModules.module.css";

const ODOO_MODULES = [
  { name: "Sales", desc: "Quotation & order automation", icon: TrendingUp },
  { name: "CRM", desc: "Pipeline & lead tracking", icon: Users },
  { name: "Inventory", desc: "Multi-warehouse & barcode sync", icon: Package },
  { name: "Purchase", desc: "RFQ & vendor management", icon: ShoppingCart },
  { name: "Accounting", desc: "Invoicing & automated ledger", icon: Receipt },
  { name: "Manufacturing", desc: "BoM & shop floor control", icon: Factory },
  { name: "HR", desc: "Payroll, attendance & onboarding", icon: UserCheck },
  { name: "POS", desc: "Omnichannel retail terminal", icon: Store },
  { name: "Website", desc: "Integrated CMS & page builder", icon: Globe },
  { name: "eCommerce", desc: "Online store & cart checkout", icon: ShoppingBag },
  { name: "Helpdesk", desc: "SLA ticket & customer support", icon: LifeBuoy },
  { name: "Project", desc: "Agile task & milestone tracking", icon: Briefcase },
  { name: "Timesheet", desc: "Billable hour logging", icon: Clock },
  { name: "Rental", desc: "Equipment & asset renting", icon: Key },
  { name: "Subscription", desc: "Recurring billing engine", icon: Repeat },
  { name: "Studio", desc: "No-code app & field customizer", icon: Wrench },
];

export default function OdooModules() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>ODOO MODULES EXPERTISE</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Deep Expertise Across All Odoo Apps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            We implement, customize, and connect the full suite of Odoo Enterprise modules into one unified operational workspace.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {ODOO_MODULES.map((mod, index) => {
            const IconComp = mod.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.03,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={styles.moduleCard}
              >
                <div className={styles.moduleIcon}>
                  <IconComp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className={styles.moduleTitle}>{mod.name}</h4>
                  <p className={styles.moduleDesc}>{mod.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
