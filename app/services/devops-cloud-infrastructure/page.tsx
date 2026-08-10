import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "DevOps & Cloud Infrastructure | Reliution Cloud Engineering",
  description: "Enterprise AWS, Azure & GCP cloud architecture, CI/CD pipelines, Docker, Kubernetes, and continuous SLA support by Reliution.",
};

export default function DevOpsCloudInfrastructurePage() {
  const data = SERVICE_PAGES_DATA["devops-cloud-infrastructure"];
  return <EnterpriseServiceTemplate data={data} />;
}
