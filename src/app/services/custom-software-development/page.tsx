import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Custom Software Development | Reliution Enterprise Engineering",
  description: "Cloud-native web applications, B2B SaaS platforms, microservices architecture, and custom software solutions by Reliution.",
};

export default function CustomSoftwarePage() {
  const data = SERVICE_PAGES_DATA["custom-software-development"];
  return <EnterpriseServiceTemplate data={data} />;
}
