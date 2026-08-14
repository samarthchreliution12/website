"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionBadge } from "@/components/Badge/Badge";
import { BlogPost } from "@/types/blog";
import { PortableText } from "@portabletext/react";
import styles from "./BlogArticle.module.css";

interface Props {
  post: BlogPost;
}

export default function BlogArticle({ post }: Props) {
  const isPortableText = Array.isArray(post.content) && post.content.length > 0 && typeof post.content[0] === "object";

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
          <span>By {post.author.name} ({post.author.role})</span> • <span>{post.publishDate}</span>
        </motion.div>

        {post.coverImage && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={styles.imageWrapper}
          >
            <img src={post.coverImage} alt={post.title} className={styles.coverImage} />
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.contentBody}
        >
          {isPortableText ? (
            <PortableText value={post.content} />
          ) : (
            (post.content as string[]).map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))
          )}
        </motion.div>
      </div>
    </article>
  );
}
