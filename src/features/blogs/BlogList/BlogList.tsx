"use client";

import React from "react";
import { motion } from "framer-motion";
import { BlogPost } from "@/data/blogs/blogs";
import BlogCard from "../BlogCard/BlogCard";
import styles from "./BlogList.module.css";

// takes all bolgs json data from blogs.ts and maps them to the blogcard component to display them in a grid layout.
interface Props {
  posts: BlogPost[];
}

export default function BlogList({ posts }: Props) {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {posts.map((post, idx) => (
            <motion.div
              key={post.slug}
              className={styles.motionItem}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <BlogCard post={post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
