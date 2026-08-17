// TODO: Remove static blog fallback after Custom CMS API integration is production-ready.
import { BlogPost } from "@/types/blog";

export const BLOG_POSTS: Record<string, any> = {
  "odoo-erp-implementation-guide": {
    id: "1",
    slug: "odoo-erp-implementation-guide",
    title: "Complete Enterprise Odoo ERP Implementation Guide for 2026",
    excerpt: "Learn how mid-market enterprises successfully implement Odoo ERP while cutting deployment risks and software TCO.",
    coverImage: "/images/blogs/odoo-erp-manufacturing.jpg",
    category: "Odoo ERP",
    author: {
      name: "Reliution Consulting Team",
      role: "ERP Specialists",
      image: "/images/logo/favicon.png",
    },
    publishDate: "August 10, 2026",
    content: [
      "Implementing an enterprise ERP system requires thorough workflow auditing, data hygiene protocols, and change management.",
      "Key stages include GAP Analysis, Custom Python Module Development, Staging Data Migration, and Go-Live SLA support.",
      "By adopting a phase-based rollout rather than a big-bang launch, enterprises significantly reduce disruption risks across supply chain, manufacturing, and inventory workflows."
    ],
    tags: ["Odoo", "ERP", "Enterprise", "Implementation"],
    seo: {
      title: "Complete Enterprise Odoo ERP Implementation Guide for 2026 | Reliution",
      description: "Learn how mid-market enterprises successfully implement Odoo ERP while cutting deployment risks and software TCO.",
      keywords: ["Odoo", "ERP", "Odoo Implementation", "Enterprise ERP"]
    },
    status: "published"
  },
  "deploying-private-ai-models": {
    id: "2",
    slug: "deploying-private-ai-models",
    title: "Deploying Private AI Models & LLMs inside Enterprise VPCs",
    excerpt: "Discover how to harness proprietary AI automation without compromising corporate data security or compliance.",
    coverImage: "/images/blogs/ai-business-automation.jpg",
    category: "AI & Machine Learning",
    author: {
      name: "Reliution AI Team",
      role: "AI Engineers",
      image: "/images/logo/favicon.png",
    },
    publishDate: "August 8, 2026",
    content: [
      "Enterprise artificial intelligence must be isolated within private cloud environments (AWS/Azure VPC).",
      "By utilizing Retrieval-Augmented Generation (RAG), organizations connect LLMs directly to internal databases securely.",
      "Establishing localized models ensures data privacy compliance under GDPR and CCPA, while removing reliance on public APIs that ingest proprietary business logic."
    ],
    tags: ["AI", "LLM", "VPC", "Security", "Machine Learning"],
    seo: {
      title: "Deploying Private AI Models & LLMs inside Enterprise VPCs | Reliution",
      description: "Discover how to harness proprietary AI automation without compromising corporate data security or compliance.",
      keywords: ["Private AI", "LLM", "VPC", "Enterprise AI", "Machine Learning"]
    },
    status: "published"
  },
  "cloud-migration-guide": {
    id: "3",
    slug: "cloud-migration-guide",
    title: "A Practical Guide to AWS Cloud Migration & CI/CD Pipelines",
    excerpt: "Step-by-step process of migrating legacy infrastructure into automated, containerized AWS environments using GitHub Actions and Kubernetes.",
    coverImage: "/images/blogs/cloud-migration-guide.jpg",
    category: "Cloud & DevOps",
    author: {
      name: "Reliution DevOps Team",
      role: "Cloud Solutions Architects",
      image: "/images/logo/favicon.png",
    },
    publishDate: "August 12, 2026",
    content: [
      "Migrating legacy monolithic architectures to the cloud requires a structured strategy to minimize downtime and ensure business continuity.",
      "By containerizing services with Docker and orchestrating them via Kubernetes (EKS), we establish highly-scalable, self-healing runtime environments.",
      "Automating deployment with AWS CodePipeline or GitHub Actions eliminates manual error, speeds up releases, and integrates automated testing natively."
    ],
    tags: ["AWS", "DevOps", "Kubernetes", "Cloud Migration", "CI/CD"],
    seo: {
      title: "A Practical Guide to AWS Cloud Migration & CI/CD Pipelines | Reliution",
      description: "Step-by-step process of migrating legacy infrastructure into automated, containerized AWS environments using GitHub Actions and Kubernetes.",
      keywords: ["AWS Migration", "DevOps Pipeline", "Kubernetes EKS", "CI/CD Automation"]
    },
    status: "published"
  }
};
export default BLOG_POSTS;
