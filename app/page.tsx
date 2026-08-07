"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedCompanies from "@/components/TrustedCompanies";
import OdooEcosystem from "@/components/OdooEcosystem";
import BusinessConsultingSection from "@/components/BusinessConsultingSection";
import AISolutionsSection from "@/components/AISolutionsSection";
import WorkflowAutomationSection from "@/components/WorkflowAutomationSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import MobileAppSection from "@/components/MobileAppSection";
import CustomSoftwareSection from "@/components/CustomSoftwareSection";
import DevOpsCloudSection from "@/components/DevOpsCloudSection";
import IndustriesWeServe from "@/components/IndustriesWeServe";
import WhyReliution from "@/components/WhyReliution";
import HireOdooDevelopers from "@/components/HireOdooDevelopers";
// import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import ScrollStorytellingController from "@/components/ScrollStorytellingController";

export default function ReliutionApp() {
  return (
    <main className="min-h-screen bg-[#08090E] text-white selection:bg-[#0D82F8] selection:text-white antialiased font-sans">
      <ScrollStorytellingController />
      <Navbar />
      <Hero />
      <TrustedCompanies />

      {/* 8 FULL-SCREEN STORYTELLING SERVICE SECTIONS */}
      <div id="service-odoo" className="relative">
        <OdooEcosystem />
      </div>

      <div id="service-consulting" className="relative">
        <BusinessConsultingSection />
      </div>

      <div id="service-ai" className="relative">
        <AISolutionsSection />
      </div>

      <div id="service-automation" className="relative">
        <WorkflowAutomationSection />
      </div>

      <div id="service-analytics" className="relative">
        <AnalyticsSection />
      </div>

      <div id="service-mobile" className="relative">
        <MobileAppSection />
      </div>

      <div id="service-software" className="relative">
        <CustomSoftwareSection />
      </div>

      <div id="service-devops" className="relative">
        <DevOpsCloudSection />
      </div>

      <IndustriesWeServe />
      <WhyReliution />
      <HireOdooDevelopers />
      {/* <CaseStudies /> */}
      <Testimonials />
      <Footer />
    </main>
  );
}
