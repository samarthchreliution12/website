import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Business Process Consulting | Reliution Digital Transformation",
  description: "Enterprise management consulting, workflow optimization, digital transformation roadmap, and ERP readiness assessment by Reliution.",
  openGraph: {
    title: "Business Process Consulting | Reliution Digital Transformation",
    description: "Enterprise management consulting, workflow optimization, digital transformation roadmap, and ERP readiness assessment by Reliution.",
  },
};

export default function BusinessProcessConsultingPage() {
  return (
    <ServicePlaceholderTemplate
      title="Business Process Consulting"
      badge="MANAGEMENT & PROCESS CONSULTING"
    />
  );
}
