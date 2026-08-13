import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Retail & E-Commerce Industry Solutions | Reliution",
  description:
    "Streamline your retail and e-commerce operations with Reliution's integrated solutions for inventory management, sales automation, and customer experience optimization.",
};

export default function RetailECommerce() {
  const data = INDUSTRY_PAGES_DATA["retailECommerce"];
  return <IndustryTemplate data={data} />;
}
