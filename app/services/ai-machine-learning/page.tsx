import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "AI & Machine Learning | Reliution Enterprise AI",
  description: "Custom AI chatbots, computer vision, predictive analytics, natural language processing, and enterprise machine learning models by Reliution.",
  openGraph: {
    title: "AI & Machine Learning | Reliution Enterprise AI",
    description: "Custom AI chatbots, computer vision, predictive analytics, natural language processing, and enterprise machine learning models by Reliution.",
  },
};

export default function AiMachineLearningPage() {
  return (
    <ServicePlaceholderTemplate
      title="AI & Machine Learning"
      badge="ENTERPRISE AI SOLUTIONS"
    />
  );
}
