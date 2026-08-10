export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  coverImage?: string;
  content: string[];
}

export const BLOG_POSTS: Record<string, BlogPost> = {
  "odoo-erp-implementation-guide": {
    slug: "odoo-erp-implementation-guide",
    title: "Complete Enterprise Odoo ERP Implementation Guide for 2026",
    excerpt: "Learn how mid-market enterprises successfully implement Odoo ERP while cutting deployment risks and software TCO.",
    category: "ERP & Odoo",
    author: "Reliution Consulting Team",
    date: "August 10, 2026",
    content: [
      "Implementing an enterprise ERP system requires thorough workflow auditing, data hygiene protocols, and change management.",
      "Key stages include GAP Analysis, Custom Python Module Development, Staging Data Migration, and Go-Live SLA support."
    ]
  },
  "deploying-private-ai-models": {
    slug: "deploying-private-ai-models",
    title: "Deploying Private AI Models & LLMs inside Enterprise VPCs",
    excerpt: "Discover how to harness proprietary AI automation without compromising corporate data security or compliance.",
    category: "AI & Automation",
    author: "Reliution AI Team",
    date: "August 8, 2026",
    content: [
      "Enterprise artificial intelligence must be isolated within private cloud environments (AWS/Azure VPC).",
      "By utilizing Retrieval-Augmented Generation (RAG), organizations connect LLMs directly to internal databases securely."
    ]
  }
};
