import React from "react";
import styles from "./Badge.module.css";

interface SectionBadgeProps {
  children: React.ReactNode;
  className?: string;
}

export function SectionBadge({ children, className = "" }: SectionBadgeProps) {
  return (
    <div className={`${styles.badge} ${className}`}>
      <span className={styles.dot} />
      <span className={styles.text}>{children}</span>
    </div>
  );
}
