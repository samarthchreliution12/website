"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/Badge/Badge";
import { BlogPost } from "@/data/blogs/blogs";
import styles from "./BlogArticle.module.css";

interface Props {
  post: BlogPost;
}

export default function BlogArticle({ post }: Props) {
  return (
    <article className={styles.articleSection}>
      <div className={styles.containerSmall}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SectionBadge>{post.category}</SectionBadge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.title}
        >
          {post.title}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className={styles.metaRow}
        >
          <span>By {post.author}</span> • <span>{post.date}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.contentBody}
        >
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </motion.div>
      </div>
    </article>
  );
}
