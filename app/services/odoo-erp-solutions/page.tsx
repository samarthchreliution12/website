import React from "react";
import { Metadata } from "next";
import EnterpriseServiceTemplate from "@/components/services/EnterpriseServiceTemplate";
import { SERVICE_PAGES_DATA } from "@/data/servicePagesData";

export const metadata: Metadata = {
  title: "Odoo ERP Solutions & Consulting | Reliution Enterprise ERP",
  description: "Enterprise Odoo ERP implementation, custom module development, migration, and 24/7 technical support by Reliution.",
};

export default function OdooERPSolutionsPage() {
  const data = SERVICE_PAGES_DATA["odoo-erp-solutions"];
  return <EnterpriseServiceTemplate data={data} />;
}
