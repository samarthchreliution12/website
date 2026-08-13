import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import IndustriesWeServe from "@/features/home/Industries/IndustriesWeServe";

export const metadata: Metadata = {
  title: "Industries We Serve | Enterprise Digital Solutions | Reliution",
  description:
    "Explore Reliution's specialized enterprise ERP, cloud, and digital transformation solutions across Manufacturing, Supply Chain, Healthcare, Retail, and Financial Services.",
};

export default function IndustriesOverviewPage() {
  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      <div style={{ paddingTop: "5rem" }}>
        <IndustriesWeServe />
      </div>
      <Footer />
    </main>
  );
}
