import { Metadata } from "next";
import ServicePlaceholderTemplate from "@/features/shared/ServicePlaceholder/ServicePlaceholderTemplate";

export const metadata: Metadata = {
  title: "Mobile App Development | Reliution iOS & Android Solutions",
  description: "Native iOS and Android mobile app development, cross-platform Flutter/React Native solutions, and enterprise mobility apps by Reliution.",
  openGraph: {
    title: "Mobile App Development | Reliution iOS & Android Solutions",
    description: "Native iOS and Android mobile app development, cross-platform Flutter/React Native solutions, and enterprise mobility apps by Reliution.",
  },
};

export default function MobileAppDevelopmentPage() {
  return (
    <ServicePlaceholderTemplate
      title="Mobile App Development"
      badge="ENTERPRISE MOBILE SOLUTIONS"
    />
  );
}
