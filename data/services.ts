import { ServiceStoryItem, ServiceModule } from "@/types/service";

export const SERVICE_STORY_SECTIONS: ServiceStoryItem[] = [
  { id: "service-odoo", num: "01", title: "Odoo ERP Solutions", badge: "OUR ODOO ERP EXPERTISE", glow: "rgba(147, 51, 234, 0.15)" },
  { id: "service-consulting", num: "02", title: "Business Process Consulting", badge: "BUSINESS CONSULTING", glow: "rgba(13, 130, 248, 0.15)" },
  { id: "service-ai", num: "03", title: "AI & Machine Learning", badge: "AI & MACHINE LEARNING", glow: "rgba(0, 240, 255, 0.18)" },
  { id: "service-automation", num: "04", title: "Workflow Automation", badge: "WORKFLOW AUTOMATION", glow: "rgba(20, 184, 166, 0.15)" },
  { id: "service-analytics", num: "05", title: "Business Intelligence & Analytics", badge: "BUSINESS INTELLIGENCE & ANALYTICS", glow: "rgba(99, 102, 241, 0.15)" },
  { id: "service-mobile", num: "06", title: "Mobile App Development", badge: "MOBILE APP DEVELOPMENT", glow: "rgba(168, 85, 247, 0.15)" },
  { id: "service-software", num: "07", title: "Custom Software Development", badge: "CUSTOM SOFTWARE DEVELOPMENT", glow: "rgba(6, 182, 212, 0.15)" },
  { id: "service-devops", num: "08", title: "DevOps & Cloud Infrastructure", badge: "DEVOPS & CLOUD INFRASTRUCTURE", glow: "rgba(14, 165, 233, 0.15)" },
];

export const ODOO_MODULES: ServiceModule[] = [
  {
    id: "crm",
    title: "CRM",
    subtitle: "Lead & Customer Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/crm1.png",
    desc: "Lead scoring, automated pipeline stages & deal forecasting",
    angle: 0
  },
  {
    id: "sales",
    title: "Sales",
    subtitle: "Sales Automation",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/sales1.png",
    desc: "Instant quotation builder, e-signatures & order sync",
    angle: 40
  },
  {
    id: "purchase",
    title: "Purchase",
    subtitle: "Procurement & Supply",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/purchase1.png",
    desc: "Automated vendor RFQs, purchase orders & stock replenishment",
    angle: 80
  },
  {
    id: "inventory",
    title: "Inventory",
    subtitle: "Warehouse Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/inventory1.png",
    desc: "Double-entry inventory, multi-warehouse & barcode tracking",
    angle: 120
  },
  {
    id: "accounting",
    title: "Accounting",
    subtitle: "Financial Management",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/accounting1.png",
    desc: "Real-time general ledger, bank feeds & automated tax compliance",
    angle: 160
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    subtitle: "Production Planning",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/manufacturing1.png",
    desc: "MRP, Work Center capacity planning & BOM explosion",
    angle: 200
  },
  {
    id: "project",
    title: "Project",
    subtitle: "Project Delivery",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/project1.png",
    desc: "Task milestone management, billable timesheets & agile boards",
    angle: 240
  },
  {
    id: "website",
    title: "Website",
    subtitle: "Website Builder",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/website1.png",
    desc: "Integrated CMS, customer portal & e-commerce engine",
    angle: 280
  },
  {
    id: "pos",
    title: "Point of Sale",
    subtitle: "Retail Operations",
    iconUrl: "https://www.reliution.com/wp-content/uploads/2025/05/point-of-sale1.png",
    desc: "Omnichannel retail POS, offline sync & hardware integration",
    angle: 320
  },
];
