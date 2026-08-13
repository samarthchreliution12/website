import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Telecom & IT Infrastructure Industry Solutions | Reliution",
  description:
    "Transform your telecom and IT infrastructure operations with Reliution's integrated solutions for cloud infrastructure, DevOps automation, and distributed architecture.",
};

export default function TelecomITInfrastructure() {
  const data = INDUSTRY_PAGES_DATA["telecomITInfrastructure"];
  return <IndustryTemplate data={data} />;
}
