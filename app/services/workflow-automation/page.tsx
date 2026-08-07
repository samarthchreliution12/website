import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Workflow Automation | Reliution Intelligent Automation",
  description: "Intelligent workflow automation across CRM, ERP, WhatsApp API, email automation, approval workflows, and n8n integrations by Reliution.",
  openGraph: {
    title: "Workflow Automation | Reliution Intelligent Automation",
    description: "Intelligent workflow automation across CRM, ERP, WhatsApp API, email automation, approval workflows, and n8n integrations by Reliution.",
  },
};

export default function WorkflowAutomationPage() {
  return (
    <ServicePlaceholderTemplate
      title="Workflow Automation"
      badge="INTELLIGENT WORKFLOW AUTOMATION"
    />
  );
}
