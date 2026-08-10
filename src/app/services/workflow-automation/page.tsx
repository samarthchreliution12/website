import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Workflow Automation & System Integration | Reliution Automation",
  description: "End-to-end integration pipelines connecting ERP, CRM, WhatsApp API, and cloud databases into a synchronized 24/7 engine.",
};

export default function WorkflowAutomationPage() {
  const data = SERVICE_PAGES_DATA["workflow-automation"];
  return <EnterpriseServiceTemplate data={data} />;
}
