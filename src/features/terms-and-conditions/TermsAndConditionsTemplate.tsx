"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { TermsAndConditionsData } from "@/data/terms-and-conditions/termsAndConditionsData";
import styles from "./TermsAndConditionsTemplate.module.css";

interface TermsAndConditionsTemplateProps {
  data: TermsAndConditionsData;
}

export default function TermsAndConditionsTemplate({ data }: TermsAndConditionsTemplateProps) {
  return (
    <>
      <Navbar />

      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <span className={styles.eyebrow}>{data.hero.eyebrow}</span>

            <h1>{data.hero.title}</h1>

            {data.hero.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}

            <p className={styles.website}>
              Website:{" "}
              <a 
                href={`https://${data.hero.websiteUrl}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ textDecoration: "underline" }}
              >
                https://{data.hero.websiteUrl}
              </a>
            </p>
          </div>
        </section>

        <article className={styles.content}>
          <div className={styles.container}>
            {data.sections.map((section, idx) => (
              <section key={idx}>
                <h2>{section.heading}</h2>

                {section.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}

                {section.subHeading && <h3>{section.subHeading}</h3>}

                {section.listItems && (
                  <ul>
                    {section.listItems.map((item, lIdx) => (
                      <li key={lIdx}>{item}</li>
                    ))}
                  </ul>
                )}

                {/* Render any trailing paragraphs after the list */}
                {(section as any).paragraphsFollowUp?.map((p: string, fIdx: number) => (
                  <p key={fIdx}>{p}</p>
                ))}
              </section>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
