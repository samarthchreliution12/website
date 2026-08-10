"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import { SectionBadge } from "@/components/Badge/Badge";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      
      <section style={{ paddingTop: "9rem", paddingBottom: "6.5rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 1.5rem" }}>
          
          <div style={{ marginBottom: "3rem" }}>
            <SectionBadge>GET IN TOUCH</SectionBadge>
            <h1 style={{ fontSize: "3rem", fontWeight: 800, marginTop: "1rem", letterSpacing: "-0.02em" }}>
              Schedule an Enterprise Consultation
            </h1>
            <p style={{ fontSize: "1.125rem", color: "var(--color-text-secondary)", marginTop: "1rem", maxWidth: "720px", lineHeight: 1.65 }}>
              Connect directly with our enterprise solution architects to discuss your Odoo ERP implementation, custom software requirements, or digital transformation goals.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2.5rem" }}>
            {/* CONTACT FORM CARD */}
            <div style={{ backgroundColor: "#ffffff", borderRadius: "28px", padding: "2.5rem", border: "1px solid rgba(85, 68, 58, 0.16)", boxShadow: "0 20px 45px -15px rgba(58, 28, 54, 0.07)" }}>
              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "1.5rem" }}>Send Us a Message</h3>
              
              <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-dark-accent)" }}>FULL NAME</label>
                  <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: "12px", border: "1px solid rgba(85, 68, 58, 0.2)", fontSize: "0.9375rem", outline: "none" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-dark-accent)" }}>WORK EMAIL</label>
                  <input type="email" placeholder="john@company.com" style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: "12px", border: "1px solid rgba(85, 68, 58, 0.2)", fontSize: "0.9375rem", outline: "none" }} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.8125rem", fontFamily: "var(--font-mono)", fontWeight: 700, marginBottom: "0.5rem", color: "var(--color-dark-accent)" }}>PROJECT REQUIREMENTS</label>
                  <textarea rows={4} placeholder="Describe your business goals and technical environment..." style={{ width: "100%", padding: "0.875rem 1rem", borderRadius: "12px", border: "1px solid rgba(85, 68, 58, 0.2)", fontSize: "0.9375rem", outline: "none", resize: "vertical" }} />
                </div>

                <button type="submit" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", padding: "1rem 1.75rem", borderRadius: "12px", backgroundColor: "var(--color-accent)", color: "#ffffff", fontWeight: 700, fontSize: "0.9375rem", marginTop: "0.5rem" }}>
                  <span>Submit Inquiry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            </div>

            {/* DIRECT INFO CARD */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "2rem", border: "1px solid rgba(85, 68, 58, 0.16)", boxShadow: "0 10px 30px -10px rgba(58, 28, 54, 0.05)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(85, 68, 58, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Mail className="w-5 h-5 text-[#55443A]" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 800 }}>Email Us</h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>contact@reliution.com</p>
                </div>
              </div>

              <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "2rem", border: "1px solid rgba(85, 68, 58, 0.16)", boxShadow: "0 10px 30px -10px rgba(58, 28, 54, 0.05)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(85, 68, 58, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <Phone className="w-5 h-5 text-[#55443A]" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 800 }}>Call Solution Architects</h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>+91 90545 44170</p>
                </div>
              </div>

              <div style={{ backgroundColor: "#ffffff", borderRadius: "24px", padding: "2rem", border: "1px solid rgba(85, 68, 58, 0.16)", boxShadow: "0 10px 30px -10px rgba(58, 28, 54, 0.05)", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                <div style={{ width: "48px", height: "48px", borderRadius: "12px", backgroundColor: "rgba(85, 68, 58, 0.08)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                  <MapPin className="w-5 h-5 text-[#55443A]" />
                </div>
                <div>
                  <h4 style={{ fontSize: "1.125rem", fontWeight: 800 }}>Global Headquarters</h4>
                  <p style={{ fontSize: "0.9375rem", color: "var(--color-text-secondary)", marginTop: "0.25rem" }}>Reliution Enterprise Technologies<br />Global Digital Transformation Firm</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}
