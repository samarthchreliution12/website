import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogArticle from "@/features/blogs/BlogArticle/BlogArticle";
import { getNormalizedBlogPostBySlug } from "@/lib/blog";

interface Props {
  params: { slug: string };
}

export const revalidate = 60; 

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getNormalizedBlogPostBySlug(params.slug);
  
  const isPublished = post && (post.status === "published" || post.status === "PUBLISHED");
  if (!post || !isPublished) {
    return {
      title: "Blog Post Not Found | Reliution Insights",
    };
  }

  return {
    title: post.seoTitle || `${post.title} | Reliution Insights`,
    description: post.seoDescription || post.excerpt,
    keywords: post.seoKeywords || post.tags,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await getNormalizedBlogPostBySlug(params.slug);

  const isPublished = post && (post.status === "published" || post.status === "PUBLISHED");
  if (!post || !isPublished) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      <BlogArticle post={post} />
      <Footer />
    </main>
  );
}
