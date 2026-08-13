import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Manufacturing & Production Industry Solutions | Reliution",
  description:
    "Streamline discrete and process manufacturing with Reliution's industrial solutions covering production, MRP, work orders, BOM, inventory, quality, and compliance.",
};

export default function ManufacturingIndustryPage() {
  const data = INDUSTRY_PAGES_DATA["manufacturing"];
  return <IndustryTemplate data={data} />;
}
