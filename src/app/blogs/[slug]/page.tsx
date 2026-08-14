import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogArticle from "@/features/blogs/BlogArticle/BlogArticle";
import { getBlogPostBySlug } from "@/lib/sanity";

interface Props {
  params: { slug: string };
}

export const revalidate = 60; 

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getBlogPostBySlug(params.slug);
  
  if (!post || post.status !== "published") {
    return {
      title: "Blog Post Not Found | Reliution Insights",
    };
  }

  return {
    title: post.seo?.title || `${post.title} | Reliution Insights`,
    description: post.seo?.description || post.excerpt,
    keywords: post.seo?.keywords || post.tags,
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post || post.status !== "published") {
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
