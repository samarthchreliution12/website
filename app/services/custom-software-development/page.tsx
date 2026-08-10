import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Custom Software Development | Reliution Enterprise Software",
  description: "Enterprise SaaS platform development, custom B2B portals, cloud microservices, and software modernization by Reliution.",
};

export default function CustomSoftwareDevelopmentPage() {
  const data = SERVICE_PAGES_DATA["custom-software-development"];
  return <EnterpriseServiceTemplate data={data} />;
}
