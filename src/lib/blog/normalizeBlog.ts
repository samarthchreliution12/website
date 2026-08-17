import { BlogPost, BlogCategory, BlogAuthor, BlogSeo } from "./blogTypes";

export function normalizeBlog(post: any): BlogPost {
  if (!post) {
    throw new Error("Cannot normalize undefined or null blog post");
  }

  // 1. Normalize Category
  let categoryObj: BlogCategory = { name: "Technology", slug: "technology" };
  if (typeof post.category === "string") {
    categoryObj = {
      name: post.category,
      slug: post.category.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
    };
  } else if (post.category && typeof post.category === "object") {
    categoryObj = {
      id: post.category.id || post.category._id,
      name: post.category.name || post.category.title || "Technology",
      slug: post.category.slug?.current || post.category.slug || "technology",
    };
  }

  // 2. Normalize Author
  const authorObj: BlogAuthor = {
    name: post.author?.name || "Reliution Team",
    image: post.author?.image || "/images/logo/favicon.png",
    role: post.author?.role || post.authorRole || "Contributor",
  };
  const authorRole = post.authorRole || post.author?.role || "Contributor";

  // 3. Normalize Dates
  let publishDateFormatted = post.publishDate || "Recently";
  if (publishDateFormatted && publishDateFormatted.includes("-") && !isNaN(Date.parse(publishDateFormatted))) {
    publishDateFormatted = new Date(publishDateFormatted).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  const publishedAtStr = post.publishedAt || post.publishDate || "";
  const createdAtStr = post.createdAt || post._createdAt || publishedAtStr || "";
  const updatedAtStr = post.updatedAt || post._updatedAt || createdAtStr || "";

  // 4. Normalize Content / Body Text for Excerpt Fallback
  const content = post.content || post.body || [];
  
  // Excerpt Extraction Helper
  let fallbackExcerpt = "Read the latest digital transformation insights from Reliution.";
  if (Array.isArray(content)) {
    const textBlocks = content
      .filter((block: any) => block._type === "block" && block.children)
      .map((block: any) => block.children.map((child: any) => child.text).join(""))
      .join(" ");
    if (textBlocks) {
      fallbackExcerpt = textBlocks.slice(0, 160) + "...";
    }
  } else if (typeof content === "string") {
    fallbackExcerpt = content.slice(0, 160) + "...";
  }

  // 5. Normalize SEO
  const seoTitle = post.seoTitle || post.seo?.title || post.title || "";
  const seoDescription = post.seoDescription || post.seo?.description || post.excerpt || fallbackExcerpt;
  const seoKeywords = post.seoKeywords || post.seo?.keywords || post.tags || [categoryObj.name];

  const seoObj: BlogSeo = {
    title: seoTitle,
    description: seoDescription,
    keywords: seoKeywords,
  };

  // 6. Return standard BlogPost structure
  return {
    id: post.id || post._id || "",
    title: post.title || "",
    slug: post.slug?.current || post.slug || "",
    excerpt: post.excerpt || fallbackExcerpt,
    coverImage: post.coverImage || post.mainImage?.asset?.url || "",
    category: categoryObj,
    author: authorObj,
    authorRole: authorRole,
    publishDate: publishDateFormatted,
    readingTime: post.readingTime || "5 min read",
    content: content,
    tags: post.tags || [categoryObj.name],
    seoTitle: seoTitle,
    seoDescription: seoDescription,
    seoKeywords: seoKeywords,
    seo: seoObj,
    featured: !!post.featured,
    status: post.status || "published",
    createdAt: createdAtStr,
    updatedAt: updatedAtStr,
    publishedAt: publishedAtStr,
  };
}
