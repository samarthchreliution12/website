"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionBadge } from "@/components/Badge/Badge";
import styles from "./OdooFAQ.module.css";

const FAQS = [
  {
    q: "What is the difference between Odoo Community and Odoo Enterprise?",
    a: "Odoo Community is an open-source framework covering baseline CRM, Sales, and Invoicing. Odoo Enterprise includes full MRP Manufacturing, Barcode Inventory, Advanced Accounting, Multi-company consolidation, Studio customization, official mobile apps, and priority security releases.",
  },
  {
    q: "How long does a typical enterprise Odoo ERP implementation take?",
    a: "Implementation timelines depend on business scope. Standard core deployments (Sales, Accounting, Inventory) take 4 to 8 weeks. Complex enterprise projects requiring custom Python module development, multi-warehouse MRP, and 3rd-party integrations take 12 to 16 weeks.",
  },
  {
    q: "Can Reliution migrate our existing data from SAP, Tally, or QuickBooks?",
    a: "Yes. Our data engineering team performs automated extraction, cleaning, mapping, and validation scripts to migrate chart of accounts, historical transactions, customer ledgers, and product stock levels with 100% data integrity.",
  },
  {
    q: "Do you support custom Python module development for unique business workflows?",
    a: "Absolutely. We build custom Odoo modules using Python, XML views, and the OWL framework following official Odoo engineering standards to ensure your customizations remain fully upgradeable in future Odoo releases.",
  },
  {
    q: "How does Odoo handle cloud hosting vs on-premise deployment?",
    a: "Odoo can be deployed on Odoo.sh, dedicated AWS/Google Cloud infrastructure (managed by Reliution), or private on-premise servers. We configure automated PostgreSQL backups, SSL encryption, and high-availability server topologies.",
  },
  {
    q: "Can Odoo integrate with third-party software like Shopify, payment gateways, and WhatsApp?",
    a: "Yes. We build bi-directional REST and XML-RPC API connectors to integrate Odoo with eCommerce platforms (Shopify, WooCommerce), CRM tools (HubSpot), payment providers (Razorpay, Stripe), and automated WhatsApp messaging services.",
  },
  {
    q: "What kind of post-launch technical support and maintenance do you offer?",
    a: "Reliution provides 24/7 SLA-backed helpdesk support, ongoing server health monitoring, regular security patch installations, database maintenance, and continuous functional training for your staff.",
  },
  {
    q: "How does Reliution structure Odoo ERP pricing and consulting costs?",
    a: "We offer transparent milestone-based fixed-price engagements for structured implementations as well as dedicated team retainer models for ongoing customization, optimization, and enterprise support.",
  },
];

export default function OdooFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <SectionBadge>FREQUENTLY ASKED QUESTIONS</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Everything You Need to Know About Odoo ERP
          </motion.h2>
        </div>

        <div className={styles.faqList}>
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className={styles.faqTrigger}
                >
                  <span className={styles.faqQuestion}>{faq.q}</span>
                  <div className={styles.iconBox}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <p className={styles.faqAnswer}>{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
