import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Custom Software Development | Reliution SaaS & Web Apps",
  description: "Enterprise web application development, SaaS products, custom customer portals, microservices architecture, and API integrations by Reliution.",
  openGraph: {
    title: "Custom Software Development | Reliution SaaS & Web Apps",
    description: "Enterprise web application development, SaaS products, custom customer portals, microservices architecture, and API integrations by Reliution.",
  },
};

export default function CustomSoftwareDevelopmentPage() {
  return (
    <ServicePlaceholderTemplate
      title="Custom Software Development"
      badge="CUSTOM SOFTWARE SOLUTIONS"
    />
  );
}
