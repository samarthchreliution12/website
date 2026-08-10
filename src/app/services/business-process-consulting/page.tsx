import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Business Process Consulting | Reliution Digital Transformation",
  description: "Strategic process audits, ERP readiness assessments, workflow standardization, and digital transformation roadmaps.",
};

export default function BusinessProcessConsultingPage() {
  const data = SERVICE_PAGES_DATA["business-process-consulting"];
  return <EnterpriseServiceTemplate data={data} />;
}
