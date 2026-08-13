"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SectionBadge } from "@/components/Badge/Badge";
import {
  ArrowRight,
  Target,
  Eye,
  ShieldCheck,
  Zap,
  Users,
  Compass,
  Boxes,
  Cpu,
  Bot,
  Workflow,
} from "lucide-react";
import styles from "@/features/about/AboutPage.module.css";

export default function AboutClient() {
  return (
    <main className={styles.main}>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>ABOUT RELIUTION (REVIEW MODE)</SectionBadge>
            <h1 className={styles.title}>
              Engineering Digital Excellence for Global Enterprises
            </h1>
            <p className={styles.subtitle}>
              Reliution is a premier enterprise digital transformation partner and Odoo ERP consulting firm. We design, engineer, and deploy scalable cloud software architectures, custom ERP solutions, and AI automation engines for modern industrial businesses.
            </p>

            <div className={styles.statsGrid}>
              <div className={styles.statCard}>
                <span className={styles.statVal}>10+</span>
                <span className={styles.statLabel}>Years Industry Experience</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>150+</span>
                <span className={styles.statLabel}>Enterprise Deployments</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>99.4%</span>
                <span className={styles.statLabel}>Client Satisfaction Rate</span>
              </div>
              <div className={styles.statCard}>
                <span className={styles.statVal}>24/7</span>
                <span className={styles.statLabel}>SLA Dedicated Support</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>OUR PURPOSE</SectionBadge>
            <h2 className={styles.sectionTitle}>Driven by Purpose & Tech Excellence</h2>
            <p className={styles.sectionDesc}>
              We bridge the gap between complex business challenges and high-performance digital software solutions.
            </p>
          </div>

          <div className={styles.grid2}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <div className={styles.iconBox}>
                <Target style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Our Mission</h3>
              <p className={styles.cardDesc}>
                To empower growing and enterprise-scale organizations with robust, transparent, and scalable digital architectures that eliminate operational bottlenecks, reduce total cost of ownership, and drive measurable ROI.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <div className={styles.iconBox}>
                <Eye style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Our Vision</h3>
              <p className={styles.cardDesc}>
                To be the most trusted global technology consulting partner for mid-market and enterprise companies seeking seamless ERP integration, custom software engineering, and intelligent AI decisioning.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>OUR CORE VALUES</SectionBadge>
            <h2 className={styles.sectionTitle}>Principles That Guide Our Work</h2>
            <p className={styles.sectionDesc}>
              Every system we architect and line of code we write is guided by core engineering standards.
            </p>
          </div>

          <div className={styles.grid4}>
            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
            >
              <div className={styles.iconBox}>
                <ShieldCheck style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Trust & Quality</h3>
              <p className={styles.cardDesc}>
                Zero compromise on security, code standards, and audit readiness for every enterprise deployment.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
            >
              <div className={styles.iconBox}>
                <Zap style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Speed & Velocity</h3>
              <p className={styles.cardDesc}>
                Agile implementation methodologies that deliver high-impact milestones without delays.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
            >
              <div className={styles.iconBox}>
                <Users style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Client Partnership</h3>
              <p className={styles.cardDesc}>
                We act as an extension of your internal technology team, providing continuous support and guidance.
              </p>
            </motion.div>

            <motion.div
              className={styles.card}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.15 }}
            >
              <div className={styles.iconBox}>
                <Compass style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} />
              </div>
              <h3 className={styles.cardTitle}>Domain Mastery</h3>
              <p className={styles.cardDesc}>
                Deep technical knowledge across manufacturing, supply chain, healthcare, retail, and finance sectors.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CORE PILLARS */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>WHAT WE DO</SectionBadge>
            <h2 className={styles.sectionTitle}>Our Core Engineering Capabilities</h2>
            <p className={styles.sectionDesc}>
              Comprehensive digital capabilities designed for high-availability enterprise environments.
            </p>
          </div>

          <div className={styles.grid4}>
            <div className={styles.card}>
              <div className={styles.iconBox}><Boxes style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} /></div>
              <h3 className={styles.cardTitle}>Odoo ERP</h3>
              <p className={styles.cardDesc}>Custom module development, MRP planning, and full-stack Odoo ERP deployments.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}><Cpu style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} /></div>
              <h3 className={styles.cardTitle}>Custom Software</h3>
              <p className={styles.cardDesc}>SaaS platforms, microservices architecture, and cloud API development.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}><Bot style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} /></div>
              <h3 className={styles.cardTitle}>AI Automation</h3>
              <p className={styles.cardDesc}>Private LLM deployment, predictive analytics, and automated decision engines.</p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconBox}><Workflow style={{ width: "1.5rem", height: "1.5rem", color: "var(--color-accent)" }} /></div>
              <h3 className={styles.cardTitle}>Cloud DevOps</h3>
              <p className={styles.cardDesc}>AWS cloud migration, Kubernetes containerization, and automated CI/CD pipelines.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.sectionTitle} style={{ textAlign: "center" }}>
              Ready to Accelerate Your Enterprise Digital Journey?
            </h2>
            <p className={styles.sectionDesc} style={{ textAlign: "center" }}>
              Schedule a technical discovery session with our solution architects to evaluate your ERP, software, and cloud requirements.
            </p>

            <div className={styles.btnGroup}>
              <Link href="/contactus" className={styles.primaryBtn}>
                <span>Schedule a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
