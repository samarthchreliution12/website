"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import Hero from "@/features/home/Hero/Hero";
import TrustedPartners from "@/features/home/TrustedPartners/TrustedPartners";
import ServicesGrid from "@/features/services/ServicesGrid";
import IndustriesWeServe from "@/features/home/Industries/IndustriesWeServe";
import WhyReliution from "@/features/home/WhyReliution/WhyReliution";
import HireExperts from "@/features/home/HireExperts/HireExperts";
import Testimonials from "@/features/home/Testimonials/Testimonials";

export default function ReliutionApp() {
  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F] selection:bg-[#55443A] selection:text-white antialiased font-sans">
      <Navbar />
      <Hero />
      <TrustedPartners />
      <ServicesGrid />
      <IndustriesWeServe />
      <WhyReliution />
      <HireExperts />
      <Testimonials />
      <Footer />
    </main>
  );
}
