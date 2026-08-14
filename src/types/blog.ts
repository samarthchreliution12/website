export interface BlogAuthor {
  name: string;
  role: string;
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
  category: string;
  author: BlogAuthor;
  publishDate: string;
  content: string[] | any[]; // string[] for static posts, any[] for Sanity PortableText blocks
  tags: string[];
  seo: BlogSeo;
  status: "draft" | "published";
}
