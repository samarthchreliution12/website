import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Workflow Automation | Reliution System Integration",
  description: "Enterprise workflow automation pipelines, n8n integrations, WhatsApp API, and cross-system API synchronization by Reliution.",
};

export default function WorkflowAutomationPage() {
  const data = SERVICE_PAGES_DATA["workflow-automation"];
  return <EnterpriseServiceTemplate data={data} />;
}
