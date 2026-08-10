import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Business Process Consulting | Reliution Digital Transformation",
  description: "Enterprise process audits, workflow optimization, digital transformation roadmaps, and ERP readiness assessment by Reliution.",
};

export default function BusinessProcessConsultingPage() {
  const data = SERVICE_PAGES_DATA["business-process-consulting"];
  return <EnterpriseServiceTemplate data={data} />;
}
