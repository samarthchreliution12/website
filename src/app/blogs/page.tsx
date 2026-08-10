"use client";

import React from "react";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogHero from "@/features/blogs/BlogHero/BlogHero";
import BlogList from "@/features/blogs/BlogList/BlogList";
import { BLOG_POSTS } from "@/data/blogs/blogs";

export default function BlogsPage() {
  const posts = Object.values(BLOG_POSTS);

  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      <BlogHero />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
}
