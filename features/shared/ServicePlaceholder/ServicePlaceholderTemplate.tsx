import React from "react";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";
import { ArrowRight, ArrowLeft, ChevronRight } from "lucide-react";
import styles from "./ServicePlaceholderTemplate.module.css";

interface ServicePlaceholderProps {
  title: string;
  badge?: string;
  subtitle?: string;
}

export default function ServicePlaceholderTemplate({
  title,
  subtitle = "We are currently building this service detail page. Full details, features, technology stack, case studies, and FAQs will be available here soon.",
}: ServicePlaceholderProps) {
  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.section}>
        <div className={styles.container}>
          
          {/* BREADCRUMB */}
          <nav style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--color-text-secondary)", marginBottom: "1.5rem" }}>
            <a href="/" style={{ textDecoration: "none", color: "var(--color-text-secondary)" }}>Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F6468]" />
            <a href="/#services" style={{ textDecoration: "none", color: "var(--color-text-secondary)" }}>Services</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F6468]" />
            <span style={{ color: "var(--color-accent)", fontWeight: 700 }}>{title}</span>
          </nav>

          <div className={styles.headerArea}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.25rem 0.875rem", borderRadius: "9999px", backgroundColor: "rgba(85, 68, 58, 0.08)", border: "1px solid rgba(85, 68, 58, 0.20)", color: "var(--color-dark-accent)", fontSize: "11px", fontFamily: "var(--font-mono)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.15em" }}>
              <span style={{ width: "0.375rem", height: "0.375rem", borderRadius: "9999px", backgroundColor: "var(--color-accent)" }} className="animate-ping" />
              <span>Coming Soon</span>
            </div>

            <h1 className={styles.title}>
              {title}
            </h1>

            <p className={styles.subtitle}>
              {subtitle}
            </p>

            <div className={styles.btnGroup}>
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/" className={styles.secondaryBtn}>
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
