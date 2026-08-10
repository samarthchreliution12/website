import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Mobile App Development | Reliution Enterprise Mobility",
  description: "High-performance iOS & Android enterprise mobile applications, offline sync, warehouse barcode scanning, and field mobility by Reliution.",
};

export default function MobileAppDevelopmentPage() {
  const data = SERVICE_PAGES_DATA["mobile-app-development"];
  return <EnterpriseServiceTemplate data={data} />;
}
