"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";
import { SectionBadge } from "@/components/ui/Badge";
import { ServicePageData } from "@/data/servicePagesData";
import {
  ArrowRight,
  ChevronRight,
  ChevronDown,
  MessageSquare,
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
  UtensilsCrossed,
  RefreshCw,
  Share2,
  Sliders,
  ArrowUpCircle,
  LucideIcon,
} from "lucide-react";
import styles from "./EnterpriseServiceTemplate.module.css";

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
  UtensilsCrossed,
  RefreshCw,
  Share2,
  Sliders,
  ArrowUpCircle,
};

function renderIcon(iconName: string, className = "w-5 h-5 text-[#55443A]") {
  const IconComp = ICON_MAP[iconName] || CheckCircle2;
  return <IconComp className={className} />;
}

interface Props {
  data: ServicePageData;
}

export default function EnterpriseServiceTemplate({ data }: Props) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [activeTechTabId, setActiveTechTabId] = useState<string>(
    data.techCategories && data.techCategories.length > 0
      ? data.techCategories[0].id
      : "frontend"
  );

  const toggleFaq = (idx: number) => {
    setOpenFaqIndex(openFaqIndex === idx ? null : idx);
  };

  const isVerticalStack = data.coreServicesLayout === "vertical-stack";

  const activeTechCategory =
    data.techCategories?.find((cat) => cat.id === activeTechTabId) ||
    data.techCategories?.[0];

  return (
    <main className={styles.main}>
      <Navbar />

      {/* ==========================================
         1. HERO SECTION
         ========================================== */}
      <section className={styles.heroSection}>
        <div className={styles.container}>
          {/* BREADCRUMB */}
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={styles.breadcrumb}
          >
            <a href="/">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F6468]" />
            <a href="/#services">Services</a>
            <ChevronRight className="w-3.5 h-3.5 text-[#5F6468]" />
            <span className={styles.activeBreadcrumb}>{data.title}</span>
          </motion.nav>

          <div className={styles.heroContent}>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SectionBadge>{data.badge}</SectionBadge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, filter: "blur(8px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className={styles.heroHeading}
            >
              {data.heading}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.paragraphGroup}
            >
              <p className={styles.heroParagraph}>{data.heroIntro1}</p>
              <p className={styles.heroParagraph}>{data.heroIntro2}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.btnGroup}
            >
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/contactus" className={styles.secondaryBtn}>
                <MessageSquare className="w-4 h-4 text-[#55443A]" />
                <span>Talk to an Expert</span>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==========================================
         2. SERVICE OVERVIEW
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.overviewWrapper}>
            <div className={styles.overviewTextCol}>
              <SectionBadge>SERVICE OVERVIEW</SectionBadge>
              <h2 className={styles.sectionTitle}>{data.overviewTitle}</h2>
              {data.overviewParagraphs.map((p, idx) => (
                <p key={idx} className={styles.bodyParagraph}>
                  {p}
                </p>
              ))}
            </div>

            <div className={styles.overviewCardCol}>
              <div className={styles.overviewHighlightCard}>
                <h3 className={styles.cardTitle}>Operational Focus & Outcomes</h3>
                <div className={styles.highlightList}>
                  {data.overviewHighlights.map((hl, idx) => (
                    <div key={idx} className={styles.highlightItem}>
                      <CheckCircle2 className="w-4 h-4 text-[#55443A] shrink-0" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
         3. CORE SERVICES (STICKY STACKED FEATURE CARDS)
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>CORE SERVICES</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.sectionTitle}
            >
              {data.coreServicesTitle}
            </motion.h2>
            {data.coreServicesDesc && (
              <p className={styles.sectionDesc}>{data.coreServicesDesc}</p>
            )}
          </div>

          {isVerticalStack ? (
            /* LARGE STICKY STACKED FEATURE CARDS (~480PX HEIGHT) */
            <ul className={styles.verticalStackList} id="cards">
              {data.coreServices.map((service, idx) => (
                <motion.li
                  key={idx}
                  className={styles.verticalStackCardItem}
                  style={{
                    top: `calc(120px + ${idx * 28}px)`,
                    zIndex: idx + 1,
                  }}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                >
                  <a
                    href={service.link || "/contactus"}
                    className={styles.verticalStackCard}
                  >
                    {/* LEFT COLUMN: TITLE, DESCRIPTION, TAGS, BUTTON */}
                    <div className={styles.stackLeftCol}>
                      <div className={styles.stackContent}>
                        <h3 className={styles.stackTitle}>{service.title}</h3>
                        <p className={styles.stackDesc}>{service.desc}</p>
                      </div>

                      {service.tags && service.tags.length > 0 && (
                        <div className={styles.tagRow}>
                          {service.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className={styles.tagPill}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className={styles.learnMoreBtn}>
                        <span>Schedule Consultation</span>
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>

                    {/* RIGHT COLUMN: PROMINENT GRAPHIC / ICON BOX */}
                    <div className={styles.stackRightCol}>
                      <div className={styles.graphicBox}>
                        {renderIcon(service.iconName, "w-20 h-20 text-[#55443A]")}
                        <span className={styles.graphicLabel}>
                          RELIUTION ENTERPRISE
                        </span>
                      </div>
                    </div>
                  </a>
                </motion.li>
              ))}
            </ul>
          ) : (
            /* STANDARD 3-COLUMN GRID */
            <div className={styles.grid3Col}>
              {data.coreServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className={styles.card}
                >
                  <div className={styles.iconBox}>
                    {renderIcon(service.iconName, "w-5 h-5 text-[#55443A]")}
                  </div>
                  <h3 className={styles.cardTitle}>{service.title}</h3>
                  <p className={styles.cardDesc}>{service.desc}</p>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
         4. TECH STACK OR SUPPORTED ODOO MODULES
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          {data.odooModules ? (
            /* ODOO ERP MODULES SECTION */
            <div>
              <div className={styles.sectionHeader}>
                <SectionBadge>ODOO ENTERPRISE ECOSYSTEM</SectionBadge>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={styles.sectionTitle}
                >
                  Supported Odoo Modules
                </motion.h2>
              </div>

              <div className={styles.odooModulesGrid}>
                {data.odooModules.map((mod, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: idx * 0.03 }}
                    className={styles.odooModuleCard}
                  >
                    <div className={styles.moduleHeader}>
                      <div className={styles.iconBoxSmall}>
                        {renderIcon(mod.iconName, "w-4 h-4 text-[#55443A]")}
                      </div>
                      <h4 className={styles.moduleName}>{mod.name}</h4>
                    </div>
                    <p className={styles.moduleDesc}>{mod.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* CATEGORY SELECTOR + SINGLE CONTENT PANEL (ENTERPRISE TECHNOLOGY MODULE) */
            <div>
              <div className={styles.sectionHeader}>
                <SectionBadge>TECHNOLOGY STACK</SectionBadge>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={styles.sectionTitle}
                >
                  {data.techStackTitle || "Development Services & Mobile Stack"}
                </motion.h2>
                {data.techStackDesc && (
                  <p className={styles.sectionDesc}>{data.techStackDesc}</p>
                )}
              </div>

              {/* 1. HORIZONTAL CATEGORY SELECTOR PILLS */}
              <div className={styles.tabSelectorWrapper}>
                {data.techCategories?.map((cat) => {
                  const isActive = activeTechCategory?.id === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveTechTabId(cat.id)}
                      className={`${styles.tabPillBtn} ${
                        isActive ? styles.tabPillActive : ""
                      }`}
                    >
                      {cat.category}
                    </button>
                  );
                })}
              </div>

              {/* 2. SINGLE LARGE CONTENT PANEL WITH SUBTLE FADE TRANSITION */}
              {activeTechCategory && (
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTechCategory.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={styles.techContentPanel}
                  >
                    <div className={styles.panelHeaderRow}>
                      <div className={styles.panelIconBox}>
                        {renderIcon(
                          activeTechCategory.iconName,
                          "w-6 h-6 text-[#55443A]"
                        )}
                      </div>
                      <h3 className={styles.panelTitle}>
                        {activeTechCategory.category} Technologies
                      </h3>
                    </div>

                    <p className={styles.panelDesc}>{activeTechCategory.desc}</p>

                    <div className={styles.panelTechGrid}>
                      {activeTechCategory.technologies.map((techName, idx) => (
                        <span key={idx} className={styles.panelTechTag}>
                          {techName}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          )}
        </div>
      </section>

      {/* ==========================================
         5. KEY FEATURES
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>PLATFORM CAPABILITIES</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.sectionTitle}
            >
              {data.keyFeaturesTitle}
            </motion.h2>
          </div>

          <div className={styles.grid3Col}>
            {data.keyFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={styles.card}
              >
                <div className={styles.iconBox}>
                  {renderIcon(feat.iconName, "w-5 h-5 text-[#55443A]")}
                </div>
                <h3 className={styles.cardTitle}>{feat.title}</h3>
                <p className={styles.cardDesc}>{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         6. BUSINESS BENEFITS
         ========================================== */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <SectionBadge>BUSINESS VALUE</SectionBadge>
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
            {data.benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={styles.cardHorizontal}
              >
                <div className={styles.iconBoxLarge}>
                  {renderIcon(benefit.iconName, "w-6 h-6 text-[#55443A]")}
                </div>
                <div>
                  <h3 className={styles.cardTitle}>{benefit.title}</h3>
                  <p className={styles.cardDesc}>{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         7. FREQUENTLY ASKED QUESTIONS
         ========================================== */}
      <section className={styles.sectionAlt}>
        <div className={styles.containerSmall}>
          <div className={styles.sectionHeader}>
            <SectionBadge>FREQUENTLY ASKED QUESTIONS</SectionBadge>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={styles.sectionTitle}
            >
              Questions & Answers
            </motion.h2>
          </div>

          <div className={styles.faqList}>
            {data.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div key={idx} className={styles.faqItem}>
                  <button
                    onClick={() => toggleFaq(idx)}
                    className={styles.faqQuestionBtn}
                  >
                    <span className={styles.faqQuestionText}>{faq.question}</span>
                    <ChevronDown
                      className={`${styles.faqChevron} ${isOpen ? styles.faqChevronActive : ""}`}
                    />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={styles.faqAnswerWrapper}
                      >
                        <p className={styles.faqAnswerText}>{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
         8. FINAL CTA
         ========================================== */}
      <section className={styles.ctaSection}>
        <div className={styles.container}>
          <div className={styles.ctaCard}>
            <SectionBadge>GET STARTED</SectionBadge>
            <h2 className={styles.ctaHeading}>{data.ctaHeading}</h2>
            <p className={styles.ctaDesc}>
              Schedule a confidential consultation with our enterprise solution architects to discuss your technical environment, business goals, and implementation timeline.
            </p>
            <div className={styles.ctaBtnGroup}>
              <a href="/contactus" className={styles.primaryBtn}>
                <span>Schedule Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a href="/contactus" className={styles.secondaryBtn}>
                <MessageSquare className="w-4 h-4 text-[#55443A]" />
                <span>Talk to an Expert</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
