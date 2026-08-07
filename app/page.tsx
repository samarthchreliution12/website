"use client";

import React from "react";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";
import ScrollStorytellingController from "@/features/shared/ScrollProgress/ScrollStorytellingController";

import Hero from "@/features/home/Hero/Hero";
import TrustedPartners from "@/features/home/TrustedPartners/TrustedPartners";
import IndustriesWeServe from "@/features/home/Industries/IndustriesWeServe";
import WhyReliution from "@/features/home/WhyReliution/WhyReliution";
import HireExperts from "@/features/home/HireExperts/HireExperts";
import Testimonials from "@/features/home/Testimonials/Testimonials";

import OdooEcosystem from "@/features/services/OdooERP/OdooEcosystem";
import BusinessConsultingSection from "@/features/services/BusinessConsulting/BusinessConsultingSection";
import AISolutionsSection from "@/features/services/AIMachineLearning/AISolutionsSection";
import WorkflowAutomationSection from "@/features/services/WorkflowAutomation/WorkflowAutomationSection";
import AnalyticsSection from "@/features/services/BusinessIntelligence/AnalyticsSection";
import MobileAppSection from "@/features/services/MobileDevelopment/MobileAppSection";
import CustomSoftwareSection from "@/features/services/CustomSoftware/CustomSoftwareSection";
import DevOpsCloudSection from "@/features/services/DevOpsCloud/DevOpsCloudSection";

export default function ReliutionApp() {
  return (
    <main className="min-h-screen bg-[#08090E] text-white selection:bg-[#0D82F8] selection:text-white antialiased font-sans">
      <ScrollStorytellingController />
      <Navbar />
      <Hero />
      <TrustedPartners />

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
      <HireExperts />
      <Testimonials />
      <Footer />
    </main>
  );
}
