import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Business Intelligence & Analytics | Reliution Data Warehousing",
  description: "Enterprise Power BI & Tableau dashboards, cloud data warehousing, ETL pipelines, and executive analytics by Reliution.",
};

export default function BusinessIntelligenceAnalyticsPage() {
  const data = SERVICE_PAGES_DATA["business-intelligence-analytics"];
  return <EnterpriseServiceTemplate data={data} />;
}
