import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/features/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/services/servicePagesData";

export const metadata: Metadata = {
  title: "Enterprise Odoo ERP Solutions | Reliution Certified Consulting",
  description: "Enterprise Odoo ERP implementation, custom Python module development, data migration, and 24/7 technical SLA support.",
};

export default function OdooERPSolutionsPage() {
  const data = SERVICE_PAGES_DATA["odoo-erp-solutions"];
  return <EnterpriseServiceTemplate data={data} />;
}
