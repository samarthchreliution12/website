import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Mobile App Development | Reliution Enterprise Mobility",
  description: "Native iOS and Android mobile app development with offline database sync, barcode scanning, and direct Odoo ERP integration.",
};

export default function MobileAppDevelopmentPage() {
  const data = SERVICE_PAGES_DATA["mobile-app-development"];
  return <EnterpriseServiceTemplate data={data} />;
}
