import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "DevOps & Cloud Infrastructure | Reliution Cloud Services",
  description: "AWS and Azure cloud architecture, automated CI/CD pipelines, Docker, Kubernetes, and 24/7 managed infrastructure SLA.",
};

export default function DevOpsCloudPage() {
  const data = SERVICE_PAGES_DATA["devops-cloud-infrastructure"];
  return <EnterpriseServiceTemplate data={data} />;
}
