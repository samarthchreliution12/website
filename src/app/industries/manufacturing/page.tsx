import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import ManufacturingHero from "@/features/industries/manufacturing/ManufacturingHero";
import ManufacturingOverview from "@/features/industries/manufacturing/ManufacturingOverview";
import ManufacturingChallenges from "@/features/industries/manufacturing/ManufacturingChallenges";
import ManufacturingSolutions from "@/features/industries/manufacturing/ManufacturingSolutions";
import ManufacturingCapabilities from "@/features/industries/manufacturing/ManufacturingCapabilities";
import ManufacturingWhyReliution from "@/features/industries/manufacturing/ManufacturingWhyReliution";
import ManufacturingCTA from "@/features/industries/manufacturing/ManufacturingCTA";
import styles from "@/features/industries/manufacturing/ManufacturingIndustry.module.css";

export const metadata: Metadata = {
  title: "Manufacturing Industry Solutions – Production, MRP & Quality ERP | Reliution",
  description:
    "Streamline discrete and process manufacturing with Reliution's industrial solutions covering production, MRP, work orders, BOM, inventory, quality, and compliance.",
};

export default function ManufacturingIndustryPage() {
  return (
    <main className={styles.main}>
      <Navbar />
      <ManufacturingHero />
      <ManufacturingOverview />
      <ManufacturingChallenges />
      <ManufacturingSolutions />
      <ManufacturingCapabilities />
      <ManufacturingWhyReliution />
      <ManufacturingCTA />
      <Footer />
    </main>
  );
}
