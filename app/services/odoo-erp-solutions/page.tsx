import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Odoo ERP Solutions | Reliution Enterprise Platform",
  description: "Comprehensive Odoo ERP implementation, customization, inventory, accounting, and supply chain solutions tailored for modern enterprise digital transformation.",
  openGraph: {
    title: "Odoo ERP Solutions | Reliution Enterprise Platform",
    description: "Comprehensive Odoo ERP implementation, customization, inventory, accounting, and supply chain solutions tailored for modern enterprise digital transformation.",
  },
};

export default function OdooErpSolutionsPage() {
  return (
    <ServicePlaceholderTemplate
      title="Odoo ERP Solutions"
      badge="ENTERPRISE ERP SOLUTIONS"
    />
  );
}
