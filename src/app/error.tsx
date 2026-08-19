"use client";

import React, { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);

    // Report crash to custom server error logs endpoint
    fetch("/api/errors/logs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: error.name,
        message: error.message,
        stack: error.stack,
        url: typeof window !== "undefined" ? window.location.href : "",
      }),
      keepalive: true,
    }).catch((err) => console.error("Failed to report crash:", err));
  }, [error]);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#CFD0CD",
      color: "#1F1F1F",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "2rem",
      textAlign: "center",
      fontFamily: "'Plus Jakarta Sans', sans-serif"
    }}>
      <div style={{
        maxWidth: "32rem",
        backgroundColor: "#ffffff",
        padding: "2.5rem",
        borderRadius: "1.5rem",
        border: "1px solid rgba(85,68,58,0.15)",
        boxShadow: "0 20px 25px -5px rgba(0,0,0,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        alignItems: "center"
      }}>
        <div style={{
          fontSize: "11px",
          fontFamily: "'JetBrains Mono', monospace",
          fontWeight: 700,
          color: "#4D2308",
          backgroundColor: "rgba(85,68,58,0.10)",
          border: "1px solid rgba(85,68,58,0.20)",
          padding: "0.25rem 0.75rem",
          borderRadius: "9999px",
          textTransform: "uppercase",
          letterSpacing: "0.1em"
        }}>
          APPLICATION ERROR
        </div>

        <h2 style={{ fontSize: "1.75rem", fontWeight: 800, color: "#1F1F1F" }}>
          Something went wrong!
        </h2>

        <p style={{ fontSize: "0.875rem", color: "#5F6468", lineHeight: 1.6 }}>
          An unexpected error occurred. Please click below to reload the application state.
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
            cursor: "pointer",
            boxShadow: "0 10px 15px -3px rgba(85,68,58,0.20)",
            transition: "all 0.2s ease"
          }}
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
