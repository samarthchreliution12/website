"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { CheckCircle2 } from "lucide-react";
import { PrivacyPolicyData } from "@/data/privacy-policy/privacyPolicyData";
import styles from "./PrivacyPolicyTemplate.module.css";

interface PrivacyPolicyTemplateProps {
  data: PrivacyPolicyData;
}

export default function PrivacyPolicyTemplate({ data }: PrivacyPolicyTemplateProps) {
  return (
    <main className={styles.page}>
      <Navbar />

      {/* HERO SECTION */}
      <section className={styles.hero}>
        <div className={styles.heroContainer}>
          <span className={styles.heroEyebrow}>{data.hero.eyebrow}</span>
          <h1 className={styles.heroTitle}>{data.hero.title}</h1>
          <p className={styles.heroDesc}>{data.hero.description}</p>
        </div>
      </section>

      {/* CONTENT AREA */}
      <article className={styles.contentArea}>
        <div className={styles.contentContainer}>
          {data.sections.map((section, idx) => (
            <section key={idx} className={styles.section}>
              <h2 className={styles.sectionTitle}>{section.heading}</h2>
              
              {section.paragraphs.map((para, pIdx) => {
                // If this is the consent section with the mail link, we should preserve the mailto link.
                // Section 7 (CCPA) also has a mailto link.
                if (para.includes("info@reliution.com")) {
                  const parts = para.split("info@reliution.com");
                  return (
                    <p key={pIdx} className={styles.paragraph}>
                      {parts[0]}
                      <a href="mailto:info@reliution.com" className={styles.link}>
                        info@reliution.com
                      </a>
                      {parts[1]}
                    </p>
                  );
                }
                return (
                  <p key={pIdx} className={styles.paragraph}>
                    {para}
                  </p>
                );
              })}

              {/* Render List Items if present */}
              {section.listItems && (
                <ul className={styles.list}>
                  {section.listItems.map((item, lIdx) => (
                    <li key={lIdx} className={styles.listItem}>
                      <CheckCircle2 className={styles.listIcon} />
                      <span className={styles.itemText}>
                        {item.strong && <strong>{item.strong}</strong>}
                        {item.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Render Contact Card if present */}
              {section.contactInfo && (
                <div className={styles.contactCard}>
                  <h3 className={styles.contactTitle}>{section.contactInfo.teamName}</h3>
                  <p className={styles.paragraph}>
                    Email:{" "}
                    {section.contactInfo.emailList.map((email, eIdx) => (
                      <React.Fragment key={eIdx}>
                        {eIdx > 0 && " / "}
                        <a href={`mailto:${email}`} className={styles.link}>
                          {email}
                        </a>
                      </React.Fragment>
                    ))}
                  </p>
                  <p className={styles.paragraph}>
                    Website:{" "}
                    <a 
                      href={`https://${section.contactInfo.website}`} 
                      className={styles.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {section.contactInfo.website}
                    </a>
                  </p>
                </div>
              )}
            </section>
          ))}
        </div>
      </article>

      <Footer />
    </main>
  );
}
