import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Business Intelligence & Analytics | Reliution BI & Dashboards",
  description: "Executive dashboards, KPI monitoring, Power BI & Tableau integrations, data warehousing, and predictive analytics by Reliution.",
  openGraph: {
    title: "Business Intelligence & Analytics | Reliution BI & Dashboards",
    description: "Executive dashboards, KPI monitoring, Power BI & Tableau integrations, data warehousing, and predictive analytics by Reliution.",
  },
};

export default function BusinessIntelligenceAnalyticsPage() {
  return (
    <ServicePlaceholderTemplate
      title="Business Intelligence & Analytics"
      badge="BUSINESS INTELLIGENCE & ANALYTICS"
    />
  );
}
