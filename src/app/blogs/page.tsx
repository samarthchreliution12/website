import React from "react";
import { Metadata } from "next";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import BlogHero from "@/features/blogs/BlogHero/BlogHero";
import BlogList from "@/features/blogs/BlogList/BlogList";
import { getBlogPosts } from "@/lib/sanity";

// Ensure Next.js doesn't cache page data indefinitely so posts appear on publish
export const revalidate = 60; 

export const metadata: Metadata = {
  title: "Reliution Insights | Enterprise Tech & Digital Transformation Blog",
  description: "Read expert perspectives on Odoo ERP consulting, Enterprise AI transformation, Cloud Infrastructure, and Workflow Automation.",
  keywords: ["Odoo Blog", "ERP Consulting", "Enterprise AI Blog", "Cloud Infrastructure", "Digital Transformation insights"]
};

export default async function BlogsPage() {
  // Fetch posts dynamically from Sanity (falls back to static posts automatically if empty/error)
  const posts = await getBlogPosts();

  return (
    <main className="min-h-screen bg-[#CFD0CD] text-[#1F1F1F]">
      <Navbar />
      <BlogHero />
      <BlogList posts={posts} />
      <Footer />
    </main>
  );
}
