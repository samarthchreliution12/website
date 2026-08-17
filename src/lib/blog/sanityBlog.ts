import { client } from "../sanity";
import { BLOG_POSTS } from "@/data/blogs/blogs";
import { normalizeBlog } from "./normalizeBlog";
import { BlogPost } from "./blogTypes";

const USE_CUSTOM_CMS = process.env.NEXT_PUBLIC_USE_CUSTOM_CMS === "true";
const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL || "http://localhost:4000/api";

// 1. Fetch All Blogs
export async function getNormalizedBlogPosts(): Promise<BlogPost[]> {
  // Mode A: Fetch from Custom CMS API
  if (USE_CUSTOM_CMS) {
    try {
      console.log(`📡 Fetching blogs from Custom CMS API: ${CMS_API_URL}/blogs`);
      const res = await fetch(`${CMS_API_URL}/blogs?status=PUBLISHED`, {
        next: { revalidate: 60 } // Next.js revalidation
      });
      const result = await res.json();
      if (result.success && result.data && result.data.length > 0) {
        return result.data.map((post: any) => normalizeBlog(post));
      }
    } catch (error) {
      console.error("Failed to fetch blog posts from Custom CMS API, falling back to static posts:", error);
    }
    // Fallback to static posts
    return Object.values(BLOG_POSTS).map((post: any) => normalizeBlog(post));
  }

  // Mode B: Fetch from Sanity (Default)
  try {
    const query = `
      *[_type == "post" && !(_id in path("drafts.**"))] | order(publishedAt desc) {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        "coverImage": mainImage.asset->url,
        category,
        author-> {
          name,
          "role": coalesce(role, "Contributor"),
          "image": image.asset->url
        },
        "publishDate": publishedAt,
        "content": body,
        tags,
        seo {
          title,
          description,
          keywords
        },
        "status": "published",
        featured
      }
    `;
    const posts = await client.fetch(query);
    if (posts && posts.length > 0) {
      return posts.map((post: any) => normalizeBlog(post));
    }
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity, falling back to static posts:", error);
  }
  
  // Fallback to static posts
  return Object.values(BLOG_POSTS).map((post: any) => normalizeBlog(post));
}

// 2. Fetch Single Blog by Slug
export async function getNormalizedBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  // Mode A: Fetch from Custom CMS API
  if (USE_CUSTOM_CMS) {
    try {
      console.log(`📡 Fetching single blog from Custom CMS API by slug: ${CMS_API_URL}/blogs/slug/${slug}`);
      const res = await fetch(`${CMS_API_URL}/blogs/slug/${slug}`, {
        next: { revalidate: 60 }
      });
      const result = await res.json();
      if (result.success && result.data) {
        return normalizeBlog(result.data);
      }
    } catch (error) {
      console.error(`Failed to fetch blog post by slug "${slug}" from Custom CMS API, falling back to static posts:`, error);
    }
    // Fallback to static posts
    const fallback = BLOG_POSTS[slug];
    return fallback ? normalizeBlog(fallback) : null;
  }

  // Mode B: Fetch from Sanity (Default)
  try {
    const query = `
      *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
        "id": _id,
        title,
        "slug": slug.current,
        excerpt,
        "coverImage": mainImage.asset->url,
        category,
        author-> {
          name,
          "role": coalesce(role, "Contributor"),
          "image": image.asset->url
        },
        "publishDate": publishedAt,
        "content": body,
        tags,
        seo {
          title,
          description,
          keywords
        },
        "status": "published",
        featured
      }
    `;
    const post = await client.fetch(query, { slug });
    if (post) {
      return normalizeBlog(post);
    }
  } catch (error) {
    console.error(`Failed to fetch blog post by slug "${slug}" from Sanity, falling back to static posts:`, error);
  }

  // Fallback to static posts
  const fallback = BLOG_POSTS[slug];
  return fallback ? normalizeBlog(fallback) : null;
}
