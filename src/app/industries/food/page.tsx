import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Food & Beverage Distribution Industry Solutions | Reliution",
  description:
    "Transform your food and beverage distribution operations with Reliution's integrated solutions for inventory management, traceability, and cold-chain optimization.",
};

export default function FoodBeverageDistribution() {
  const data = INDUSTRY_PAGES_DATA["foodBeverageDistribution"];
  return <IndustryTemplate data={data} />;
}
