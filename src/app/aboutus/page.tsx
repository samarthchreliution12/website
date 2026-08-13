import { notFound } from "next/navigation";
import AboutClient from "@/features/about/AboutClient";

export const metadata = {
  title: "About Us | Reliution Enterprise Digital Partner",
  description:
    "Reliution is a premier enterprise digital transformation partner and Odoo ERP consulting firm.",
  robots: {
    index: false,
    follow: false,
  },
};

interface Props {
  searchParams: Promise<{ access?: string }> | { access?: string };
}

export default async function AboutUsAliasPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  const SECRET_KEY = "manager123";

  if (resolvedParams?.access !== SECRET_KEY) {
    notFound();
  }

  return <AboutClient />;
}
