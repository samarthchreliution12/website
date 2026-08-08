import React from "react";
import Link from "next/link";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";

export default function NotFound() {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#CFD0CD", color: "#1F1F1F", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
      <Navbar />

      <section style={{ padding: "10rem 1.5rem 6rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", flex: 1 }}>
        <div style={{
          maxWidth: "36rem",
          backgroundColor: "#ffffff",
          padding: "3rem 2rem",
          borderRadius: "1.5rem",
          border: "1px solid rgba(85,68,58,0.15)",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center"
        }}>
          <div style={{
            fontSize: "12px",
            fontFamily: "'JetBrains Mono', monospace",
            fontWeight: 700,
            color: "#4D2308",
            backgroundColor: "rgba(85,68,58,0.10)",
            border: "1px solid rgba(85,68,58,0.20)",
            padding: "0.25rem 0.875rem",
            borderRadius: "9999px",
            textTransform: "uppercase"
          }}>
            404 — PAGE NOT FOUND
          </div>

          <h1 style={{ fontSize: "2.25rem", fontWeight: 800, color: "#1F1F1F" }}>
            Resource Not Found
          </h1>

          <p style={{ fontSize: "0.875rem", color: "#5F6468", lineHeight: 1.6 }}>
            The requested page or enterprise service path does not exist. Please return to the homepage or explore our services grid.
          </p>

          <Link
            href="/"
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "0.75rem",
              backgroundColor: "#55443A",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 10px 15px -3px rgba(85,68,58,0.20)"
            }}
          >
            Back to Homepage
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
