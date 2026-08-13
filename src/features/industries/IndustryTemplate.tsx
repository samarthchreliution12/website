"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SectionBadge } from "@/components/Badge/Badge";
import { notFound } from "next/navigation";
import { IndustryPageData } from "@/data/industries/industryPagesData";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  CheckCircle2,
  Boxes,
  Compass,
  Bot,
  Workflow,
  BarChart3,
  Smartphone,
  Code2,
  Cloud,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Lock,
  Headphones,
  Factory,
  Activity,
  ShoppingBag,
  Truck,
  Landmark,
  Sliders,
  LucideIcon,
} from "lucide-react";
import styles from "./IndustryTemplate.module.css";

const ICON_MAP: Record<string, LucideIcon> = {
  Boxes,
  Compass,
  Bot,
  Workflow,
  BarChart3,
  Smartphone,
  Code2,
  Cloud,
  ShieldCheck,
  Zap,
  TrendingUp,
  Cpu,
  Layers,
  Lock,
  Headphones,
  CheckCircle2,
  Factory,
  Activity,
  ShoppingBag,
  Truck,
  Landmark,
  Sliders,
};

function renderIcon(iconName: string, className = "", style?: React.CSSProperties) {
  const IconComp = ICON_MAP[iconName] || CheckCircle2;
  return (
    <IconComp
      className={className}
      style={{ width: "1.25rem", height: "1.25rem", color: "var(--color-accent, #4381d2)", ...style }}
    />
  );
}

interface Props {
  data: IndustryPageData;
}

export default function IndustryTemplate({ data }: Props) {
  if (!data) {
    return notFound();
  }

  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  return (
    <main className={styles.main}>
      <Navbar />

      {/* ==========================================
         1. HERO SECTION
         ========================================== */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* BREADCRUMB */}
          <nav className={styles.breadcrumb} aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <Link href="/industries">Industries</Link>
            <ChevronRight className="w-3.5 h-3.5 opacity-50" />
            <span className={styles.activeBreadcrumb}>{data.title}</span>
          </nav>

          <motion.div
            className={styles.heroContent}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SectionBadge>{data.badge}</SectionBadge>
            <h1 className={styles.heroHeading}>{data.heading}</h1>

            <div className={styles.paragraphGroup}>
              <p className={styles.heroParagraph}>{data.heroIntro1}</p>
              {data.heroIntro2 && (
                <p className={styles.heroParagraph}>{data.heroIntro2}</p>
              )}
            </div>

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

      {/* ==========================================
         2. OVERVIEW SECTION
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>INDUSTRY OVERVIEW</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.sectionTitle}
            >
              {data.overviewTitle}
            </motion.h2>
          </div>

          <div className={styles.overviewWrapper}>
            <div className={styles.overviewTextCol}>
              {data.overviewParagraphs.map((p, idx) => (
                <p key={idx} className={styles.bodyParagraph}>
                  {p}
                </p>
              ))}
            </div>

            {data.overviewHighlights && data.overviewHighlights.length > 0 && (
              <div className={styles.overviewCardCol}>
                <div className={styles.overviewHighlightCard}>
                  <h3 className={styles.cardTitle}>Operational Impact & Value</h3>
                  <div className={styles.highlightList}>
                    {data.overviewHighlights.map((hl, idx) => (
                      <div key={idx} className={styles.highlightItem}>
                        <CheckCircle2 className="w-4 h-4 text-[#4381d2] shrink-0" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ==========================================
         3. KEY CHALLENGES WE ADDRESS
         ========================================== */}
      {data.challenges && data.challenges.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionBadge>CHALLENGES WE SOLVE</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.sectionTitle}
              >
                {data.challengesTitle}
              </motion.h2>
              {data.challengesDesc && (
                <p className={styles.sectionDesc}>{data.challengesDesc}</p>
              )}
            </div>

            <div className={styles.grid3Col}>
              {data.challenges.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className={styles.iconBoxLarge}>
                    {renderIcon(item.iconName, "", { width: "1.5rem", height: "1.5rem" })}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         4. SOLUTIONS & TECHNOLOGIES
         ========================================== */}
      {data.solutions && data.solutions.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionBadge>TAILORED SOLUTIONS</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.sectionTitle}
              >
                {data.solutionsTitle}
              </motion.h2>
              {data.solutionsDesc && (
                <p className={styles.sectionDesc}>{data.solutionsDesc}</p>
              )}
            </div>

            <div className={styles.grid3Col}>
              {data.solutions.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className={styles.iconBoxLarge}>
                    {renderIcon(item.iconName, "", { width: "1.5rem", height: "1.5rem" })}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>

                  {item.bullets && item.bullets.length > 0 && (
                    <div className={styles.bulletGrid}>
                      {item.bullets.map((bullet, bIdx) => (
                        <div key={bIdx} className={styles.bulletItem}>
                          <CheckCircle2 className={styles.bulletIcon} />
                          <span>{bullet}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         5. CORE CAPABILITIES
         ========================================== */}
      {data.capabilities && data.capabilities.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionBadge>CORE CAPABILITIES</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.sectionTitle}
              >
                {data.capabilitiesTitle}
              </motion.h2>
              {data.capabilitiesDesc && (
                <p className={styles.sectionDesc}>{data.capabilitiesDesc}</p>
              )}
            </div>

            <div className={styles.grid3Col}>
              {data.capabilities.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                >
                  <div className={styles.iconBoxLarge}>
                    {renderIcon(item.iconName, "", { width: "1.5rem", height: "1.5rem" })}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         6. KEY BUSINESS BENEFITS
         ========================================== */}
      {data.benefits && data.benefits.length > 0 && (
        <section className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionBadge>BUSINESS BENEFITS</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.sectionTitle}
              >
                {data.benefitsTitle}
              </motion.h2>
            </div>

            <div className={styles.grid2Col}>
              {data.benefits.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className={styles.iconBoxLarge}>
                    {renderIcon(item.iconName, "", { width: "1.5rem", height: "1.5rem" })}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         7. WHY RELIUTION
         ========================================== */}
      {data.whyItems && data.whyItems.length > 0 && (
        <section className={styles.sectionAlt}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <SectionBadge>WHY RELIUTION</SectionBadge>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={styles.sectionTitle}
              >
                {data.whyTitle}
              </motion.h2>
            </div>

            <div className={styles.grid3Col}>
              {data.whyItems.map((item, idx) => (
                <motion.div
                  key={idx}
                  className={styles.card}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                >
                  <div className={styles.iconBoxLarge}>
                    {renderIcon(item.iconName, "", { width: "1.5rem", height: "1.5rem" })}
                  </div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         8. FAQ ACCORDION
         ========================================== */}
      {data.faqs && data.faqs.length > 0 && (
        <section className={styles.section}>
          <div className={styles.containerSmall}>
            <div className={styles.sectionHeader}>
              <SectionBadge>FREQUENTLY ASKED QUESTIONS</SectionBadge>
              <h2 className={styles.sectionTitle}>Got Questions? We Have Answers.</h2>
            </div>

            <div className={styles.faqList}>
              {data.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`${styles.faqItem} ${isOpen ? styles.faqItemOpen : ""}`}
                  >
                    <button
                      className={styles.faqQuestionBtn}
                      onClick={() => toggleFaq(idx)}
                      aria-expanded={isOpen}
                    >
                      <h3 className={styles.faqQuestionText}>{faq.question}</h3>
                      <ChevronDown
                        className={`${styles.faqChevron} ${
                          isOpen ? styles.faqChevronRotated : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className={styles.faqAnswerWrapper}
                        >
                          <div className={styles.faqAnswerInner}>
                            <p className={styles.faqAnswerText}>{faq.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ==========================================
         9. FINAL CTA SECTION
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <motion.div
            className={styles.ctaBox}
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className={styles.ctaHeading}>{data.ctaHeading}</h2>
            <p className={styles.ctaDesc}>{data.ctaDesc}</p>

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

      <Footer />
    </main>
  );
}
