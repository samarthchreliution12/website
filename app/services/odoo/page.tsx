"use client";

import React from "react";
import Navbar from "@/features/shared/Navbar/Navbar";
import Footer from "@/features/shared/Footer/Footer";
import OdooHero from "@/components/services/odoo/OdooHero";
import OdooServicesGrid from "@/components/services/odoo/OdooServicesGrid";
import OdooModules from "@/components/services/odoo/OdooModules";
import OdooProcessTimeline from "@/components/services/odoo/OdooProcessTimeline";
import OdooWhyChoose from "@/components/services/odoo/OdooWhyChoose";
import OdooIndustries from "@/components/services/odoo/OdooIndustries";
import OdooTechnologies from "@/components/services/odoo/OdooTechnologies";
import OdooFAQ from "@/components/services/odoo/OdooFAQ";
import OdooCTA from "@/components/services/odoo/OdooCTA";

export default function OdooServicePage() {
  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F] selection:bg-[#55443A] selection:text-white antialiased font-sans">
      <Navbar />
      <OdooHero />
      <OdooServicesGrid />
      <OdooModules />
      <OdooProcessTimeline />
      <OdooWhyChoose />
      <OdooIndustries />
      <OdooTechnologies />
      <OdooFAQ />
      <OdooCTA />
      <Footer />
    </main>
  );
}
