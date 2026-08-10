import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Business Intelligence & Analytics | Reliution Dashboards",
  description: "Executive BI dashboards, enterprise data warehousing, Power BI integration, and real-time operational analytics by Reliution.",
};

export default function BusinessIntelligencePage() {
  const data = SERVICE_PAGES_DATA["business-intelligence-analytics"];
  return <EnterpriseServiceTemplate data={data} />;
}
