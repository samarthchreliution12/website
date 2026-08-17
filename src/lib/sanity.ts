import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { BlogPost } from "@/types/blog";
import { BLOG_POSTS } from "@/data/blogs/blogs";

export const client = createClient({
  projectId: "c30se3qv",
  dataset: "production",
  apiVersion: "2024-03-11", // Use current date for stable API
  useCdn: false, // Set to false for live updates
});

const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}

// Helper function to extract plain text from Sanity's PortableText blocks
function extractTextFromBody(body: any[]): string {
  if (!Array.isArray(body)) return "";
  return body
    .filter((block) => block._type === "block" && block.children)
    .map((block) => block.children.map((child: any) => child.text).join(""))
    .join(" ");
}

export async function getBlogPosts(): Promise<BlogPost[]> {
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
        "status": "published"
      }
    `;
    const posts = await client.fetch(query);
    if (posts && posts.length > 0) {
      return posts.map((post: any) => {
        const bodyText = extractTextFromBody(post.content);
        const fallbackExcerpt = bodyText
          ? bodyText.slice(0, 160) + "..."
          : "Read the latest digital transformation insights from Reliution.";

        return {
          ...post,
          excerpt: post.excerpt || fallbackExcerpt,
          tags: post.tags || [post.category || "Technology"],
          seo: {
            title: post.seo?.title || `${post.title} | Reliution`,
            description: post.seo?.description || post.excerpt || fallbackExcerpt,
            keywords: post.seo?.keywords || post.tags || [post.category || "Technology"],
          },
          publishDate: post.publishDate
            ? new Date(post.publishDate).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "Recently",
        };
      });
    }
  } catch (error) {
    console.error("Failed to fetch blog posts from Sanity, falling back to static posts:", error);
  }
  
  // Fallback to static posts
  return Object.values(BLOG_POSTS);
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
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
        "status": "published"
      }
    `;
    const post = await client.fetch(query, { slug });
    if (post) {
      const bodyText = extractTextFromBody(post.content);
      const fallbackExcerpt = bodyText
        ? bodyText.slice(0, 160) + "..."
        : "Read the latest digital transformation insights from Reliution.";

      return {
        ...post,
        excerpt: post.excerpt || fallbackExcerpt,
        tags: post.tags || [post.category || "Technology"],
        seo: {
          title: post.seo?.title || `${post.title} | Reliution`,
          description: post.seo?.description || post.excerpt || fallbackExcerpt,
          keywords: post.seo?.keywords || post.tags || [post.category || "Technology"],
        },
        publishDate: post.publishDate
          ? new Date(post.publishDate).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })
          : "Recently",
      };
    }
  } catch (error) {
    console.error(`Failed to fetch blog post by slug "${slug}" from Sanity, falling back to static posts:`, error);
  }

  // Fallback to static posts
  return BLOG_POSTS[slug] || null;
}
