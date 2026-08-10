"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ServicesGrid from "@/features/services/ServicesGrid";

export default function MainServicesPage() {
  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <ServicesGrid />
      </div>
      <Footer />
    </main>
  );
}
