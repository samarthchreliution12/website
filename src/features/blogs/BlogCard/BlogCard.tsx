"use client";

import React from "react";
import Link from "next/link";
import { BlogPost } from "@/types/blog";
import styles from "./BlogCard.module.css";

interface Props {
  post: BlogPost;
}

export default function BlogCard({ post }: Props) {
  const { title, excerpt, coverImage, category, author, publishDate, slug } = post;

  return (
    <Link href={`/blogs/${slug}`} className={styles.card}>
      {coverImage && (
        <div className={styles.imageWrapper}>
          <img src={coverImage} alt={title} className={styles.coverImage} />
        </div>
      )}

      <div className={styles.cardBody}>
        <span className={styles.categoryPill}>{category}</span>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>

      <div className={styles.metaRow}>
        <span>By {author.name}</span> • <span>{publishDate}</span>
      </div>
    </Link>
  );
}
