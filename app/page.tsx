"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import OdooEcosystem from "@/components/OdooEcosystem";
import ServicesSection from "@/components/ServicesSection";
// import IndustriesSection from "@/components/IndustriesSection";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyReliution from "@/components/WhyReliution";
import HireOdooDevelopers from "@/components/HireOdooDevelopers";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function ReliutionApp() {
  return (
    <main className="min-h-screen bg-[#08090E] text-white selection:bg-[#0D82F8] selection:text-white antialiased font-sans">
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <OdooEcosystem />
      <ServicesSection />
      {/* <IndustriesSection /> */}
      <IndustriesWeServe />
      <WhyReliution />
      <HireOdooDevelopers />
      <CaseStudies />
      <Testimonials />
      <Footer />
    </main>
  );
}
