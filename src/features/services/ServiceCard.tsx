import React from "react";
import Link from "next/link";
import { ArrowRight, LucideIcon } from "lucide-react";
import styles from "./ServiceCard.module.css";

export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  icon: LucideIcon;
}

interface ServiceCardProps {
  card: ServiceCardData;
}

export default function ServiceCard({ card }: ServiceCardProps) {
  const IconComponent = card.icon;

  return (
    <Link href={card.href} className={styles.card}>
      <div className={styles.cardTop}>
        <div className={styles.iconContainer}>
          <IconComponent className="w-7 h-7" />
        </div>

        <h3 className={styles.title}>{card.title}</h3>

        <p className={styles.description}>{card.description}</p>
      </div>

      <div className={styles.cardBottom}>
        <div className={styles.tagGroup}>
          {card.tags.map((tag, idx) => (
            <span key={idx} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>

        <div className={styles.learnMoreLink}>
          <span>Learn More</span>
          <ArrowRight className={styles.arrowIcon} />
        </div>
      </div>
    </Link>
  );
}
