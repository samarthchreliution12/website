"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Boxes,
  Compass,
  Bot,
  Workflow,
  BarChart3,
  Smartphone,
  Code2,
  Cloud,
  GlobeLock,
} from "lucide-react";
import { SectionBadge } from "@/components/ui/Badge";
import ServiceCard, { ServiceCardData } from "./ServiceCard";
import styles from "./ServicesGrid.module.css";

const SERVICES_DATA: ServiceCardData[] = [
  {
    id: "odoo-erp",
    title: "Odoo ERP Solutions",
    description: "Enterprise ERP implementation, custom module development, migration, and 24/7 technical support.",
    tags: ["Implementation", "Customization", "Migration", "Support"],
    href: "/services/odoo-erp-solutions",
    icon: Boxes,
  },
  {
    id: "business-consulting",
    title: "Business Process Consulting",
    description: "Strategic workflow audits, process standardization, ERP readiness assessment, and digital transformation roadmaps.",
    tags: ["Process Audit", "Optimization", "ERP Readiness", "Strategy"],
    href: "/services/business-process-consulting",
    icon: Compass,
  },
  {
    id: "ai-machine-learning",
    title: "AI & Machine Learning",
    description: "Custom LLM fine-tuning, computer vision models, automated document parsing, and predictive decisioning engines.",
    tags: ["Custom LLMs", "Predictive AI", "Computer Vision", "NLP"],
    href: "/services/ai-machine-learning",
    icon: Bot,
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    description: "End-to-end integration pipelines connecting ERP, CRM, WhatsApp API, emails, and databases into a synchronized 24/7 engine.",
    tags: ["n8n / Make", "WhatsApp API", "CRM Sync", "Webhooks"],
    href: "/services/workflow-automation",
    icon: Workflow,
  },
  {
    id: "bi-analytics",
    title: "Business Intelligence & Analytics",
    description: "Real-time executive dashboards, data warehousing, Power BI & Tableau integration, and KPI performance tracking.",
    tags: ["Power BI", "Dashboards", "Data Warehouse", "KPI Tracking"],
    href: "/services/business-intelligence-analytics",
    icon: BarChart3,
  },
  {
    id: "mobile-development",
    title: "Mobile App Development",
    description: "High-performance native iOS and Android applications with offline sync, QR barcode scanning, and field mobility features.",
    tags: ["iOS & Android", "React Native", "Offline Sync", "API Integration"],
    href: "/services/mobile-app-development",
    icon: Smartphone,
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "Scalable cloud-native web applications, SaaS products, microservices architecture, and custom enterprise portals.",
    tags: ["SaaS Platforms", "Microservices", "Web Portals", "API Development"],
    href: "/services/custom-software-development",
    icon: Code2,
  },
  {
    id: "devops-cloud",
    title: "DevOps & Cloud Infrastructure",
    description: "AWS, Azure & Google Cloud architecture, automated CI/CD pipelines, Docker, Kubernetes, and continuous monitoring.",
    tags: ["AWS Cloud", "Docker / K8s", "CI/CD Pipelines", "Security"],
    href: "/services/devops-cloud-infrastructure",
    icon: Cloud,
  },
];

export default function ServicesGrid() {
  return (
    <section className={styles.section} id="services">
      <div className={styles.container}>
        
        {/* SECTION HEADER */}
        <div className={styles.header}>
          <SectionBadge>OUR SERVICES</SectionBadge>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.heading}
          >
            Enterprise Digital Solutions Built for Modern Businesses
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className={styles.description}
          >
            Reliution provides end-to-end digital transformation services including ERP implementation, AI solutions, workflow automation, business analytics, mobile apps, cloud infrastructure, and custom software.
          </motion.p>
        </div>

        {/* 4-COLUMN CARDS GRID */}
        <div className={styles.grid}>
          {SERVICES_DATA.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <ServiceCard card={service} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
