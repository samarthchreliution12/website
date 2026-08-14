export const BLOG_CATEGORIES = [
  "Odoo ERP",
  "AI & Machine Learning",
  "Business Consulting",
  "Workflow Automation",
  "Business Intelligence",
  "Mobile App Development",
  "Custom Software Development",
  "Cloud & DevOps",
] as const;

export type BlogCategory = typeof BLOG_CATEGORIES[number];
