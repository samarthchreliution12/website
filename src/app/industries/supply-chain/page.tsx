import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Supply Chain & Logistics Industry Solutions | Reliution",
  description:
    "Optimize your supply chain and logistics operations with Reliution's integrated solutions for warehouse management, fleet routing, and real-time visibility.",
};

export default function SupplyChainLogistics() {
  const data = INDUSTRY_PAGES_DATA["supplyChainLogistics"];
  return <IndustryTemplate data={data} />;
}
