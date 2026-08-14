import ContactTemplate from "@/features/contact/ContactTemplate";
import { contactPageData } from "@/data/contact/contactPageData";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Contact Us | Reliution Enterprise Digital Partner & Odoo Consulting",
  description: "Connect with Reliution enterprise solution architects to discuss ERP consulting, custom software, and AI transformation.",
};

interface Props {
  searchParams: { access?: string };
}

export default function ContactPage({ searchParams }: Props) {
  const SECRET_KEY = "preview-access";

  if (searchParams?.access !== SECRET_KEY) {
    notFound();
  }

  return <ContactTemplate data={contactPageData} />;
}