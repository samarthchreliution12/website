export interface BlogCategory {
  id?: string;
  name: string;
  slug?: string;
}

export interface BlogAuthor {
  name: string;
  role?: string; // For backwards compatibility
  image?: string;
}

export interface BlogSeo {
  title: string;
  description: string;
  keywords: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  category: BlogCategory;
  author: BlogAuthor;
  authorRole: string;
  publishDate: string;
  content: any; // portable text blocks for Sanity, or raw content
  tags: string[];
  seoTitle: string;
  seoDescription: string;
  seoKeywords: string[];
  seo: BlogSeo; // For backwards compatibility in components
  featured: boolean;
  status: "draft" | "published" | "DRAFT" | "PUBLISHED" | "manager_review" | "MANAGER_REVIEW";
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
