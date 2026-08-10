"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/data/blogs/blogs";
import styles from "./BlogCard.module.css";

// takes all bolgs json data from blogs.ts and maps them to the blogcard component to display them in a grid layout.
interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  return (
    <Link href={`/blogs/${post.slug}`} className={styles.card}>
      <div className={styles.cardBody}>
        <span className={styles.categoryPill}>{post.category}</span>
        <h3 className={styles.title}>{post.title}</h3>
        <p className={styles.excerpt}>{post.excerpt}</p>
      </div>

      <div className={styles.metaRow}>
        <span>{post.date}</span>
      </div>
    </Link>
  );
}
