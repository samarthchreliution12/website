import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "DevOps & Cloud Infrastructure | Reliution Cloud & K8s",
  description: "Cloud-native architecture, CI/CD pipeline automation, Docker & Kubernetes management, AWS/Azure cloud infrastructure, and 24x7 monitoring by Reliution.",
  openGraph: {
    title: "DevOps & Cloud Infrastructure | Reliution Cloud & K8s",
    description: "Cloud-native architecture, CI/CD pipeline automation, Docker & Kubernetes management, AWS/Azure cloud infrastructure, and 24x7 monitoring by Reliution.",
  },
};

export default function DevOpsCloudInfrastructurePage() {
  return (
    <ServicePlaceholderTemplate
      title="DevOps & Cloud Infrastructure"
      badge="DEVOPS & CLOUD INFRASTRUCTURE"
    />
  );
}
