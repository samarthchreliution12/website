"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body style={{
        margin: 0,
        padding: 0,
        backgroundColor: "#CFD0CD",
        color: "#1F1F1F",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Plus Jakarta Sans', sans-serif"
      }}>
        <div style={{
          maxWidth: "32rem",
          backgroundColor: "#ffffff",
          padding: "2.5rem",
          borderRadius: "1.5rem",
          border: "1px solid rgba(85,68,58,0.15)",
          boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08)",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
          alignItems: "center"
        }}>
          <h1 style={{ fontSize: "1.75rem", fontWeight: 800 }}>Critical System Error</h1>
          <p style={{ fontSize: "0.875rem", color: "#5F6468", lineHeight: 1.6 }}>
            A global layout error occurred. Click below to refresh the page.
          </p>
          <button
            onClick={() => reset()}
            style={{
              padding: "0.75rem 1.75rem",
              borderRadius: "0.75rem",
              backgroundColor: "#55443A",
              color: "#ffffff",
              fontSize: "0.875rem",
              fontWeight: 600,
              border: "none",
              cursor: "pointer"
            }}
          >
            Refresh System
          </button>
        </div>
      </body>
    </html>
  );
}
