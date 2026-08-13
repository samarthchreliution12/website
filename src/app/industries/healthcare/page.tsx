import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Healthcare & Pharmaceuticals Industry Solutions | Reliution",
  description:
    "Streamline your healthcare and pharmaceutical operations with Reliution's HIPAA-compliant solutions for patient data management, medical inventory tracking, and automated regulatory reporting.",
};

export default function Healthcare() {
  const data = INDUSTRY_PAGES_DATA["healthcarePharmaceuticals"];
  return <IndustryTemplate data={data} />;
}
