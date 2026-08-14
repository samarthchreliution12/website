"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SectionBadge } from "@/components/Badge/Badge";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { ContactPageData } from "@/data/contact/contactPageData";
import styles from "./ContactTemplate.module.css";

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Mail,
  Phone,
  MapPin,
};

interface ContactTemplateProps {
  data: ContactPageData;
}

export default function ContactTemplate({ data }: ContactTemplateProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Maintain identical submission behavior as before
  };

  return (
    <main className={styles.main}>
      <Navbar />

      <section className={styles.section}>
        <div className={styles.container}>
          
          <div className={styles.heroHeader}>
            <SectionBadge>{data.hero.badge}</SectionBadge>
            <h1 className={styles.title}>{data.hero.title}</h1>
            <p className={styles.description}>{data.hero.description}</p>
          </div>

          <div className={styles.grid}>
            {/* CONTACT FORM CARD */}
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>{data.form.title}</h3>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                <div>
                  <label className={styles.label}>FULL NAME</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={styles.input}
                    required
                  />
                </div>

                <div>
                  <label className={styles.label}>WORK EMAIL</label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className={styles.input}
                    required
                  />
                </div>

                <div>
                  <label className={styles.label}>PROJECT REQUIREMENTS</label>
                  <textarea
                    rows={4}
                    placeholder="Describe your business goals and technical environment..."
                    className={`${styles.input} ${styles.textarea}`}
                    required
                  />
                </div>

                <button type="submit" className={styles.submitBtn}>
                  <span>{data.form.buttonText}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* DIRECT INFO CARD */}
            <div className={styles.infoColumn}>
              {data.infoCards.map((card, idx) => {
                const IconComponent = ICON_MAP[card.iconName] || Mail;
                return (
                  <div key={idx} className={styles.infoCard}>
                    <div className={styles.iconBox}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className={styles.infoTitle}>{card.title}</h4>
                      <p className={styles.infoValue}>
                        {card.value}
                        {card.details && (
                          <>
                            <br />
                            {card.details}
                          </>
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
