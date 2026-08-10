"use client";

import React from "react";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogArticle from "@/features/blogs/BlogArticle/BlogArticle";
import { BLOG_POSTS } from "@/data/blogs/blogs";

interface Props {
  params: { slug: string };
}

export default function BlogArticlePage({ params }: Props) {
  const post = BLOG_POSTS[params.slug];

  if (!post) {
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
