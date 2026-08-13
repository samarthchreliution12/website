import { notFound } from "next/navigation";
import AboutClient from "@/features/about/AboutClient";

// SEO Security: Google bot bhul thi pan aa page index na kare (Marketing team requirement)
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

export default async function AboutUsPage({ searchParams }: Props) {
  const resolvedParams = await searchParams;
  
  // Secret Access Password
  const SECRET_KEY = "manager123";

  // Jo URL ma 'access' parameter na hoy ke khoto hoy, to page ne 404 (Not Found) kari do
  if (resolvedParams?.access !== SECRET_KEY) {
    notFound();
  }

  // Jo password sacho hoy, to j page render thase
  return <AboutClient />;
}
