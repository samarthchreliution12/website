import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "AI & Machine Learning | Reliution Predictive Intelligence",
  description: "Enterprise AI engineering, custom LLM fine-tuning, automated document processing, and predictive decisioning engines by Reliution.",
};

export default function AIMachineLearningPage() {
  const data = SERVICE_PAGES_DATA["ai-machine-learning"];
  return <EnterpriseServiceTemplate data={data} />;
}
