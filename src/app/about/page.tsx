import { notFound } from "next/navigation";
import AboutTemplate from "@/features/about/AboutTemplate";
import { aboutPageData } from "@/data/about/aboutPageData";

export const metadata = {
  title: "About Us | Reliution Enterprise Digital Partner",
  description:
    "Reliution is a premier enterprise digital transformation partner and Odoo ERP consulting firm.",
};

interface Props {
  searchParams: { access?: string };
}

export default function AboutUsPage({ searchParams }: Props) {
  // const SECRET_KEY = "preview-access"; // Replace with your actual secret key


  // // Uncomment the lines below when you want to enable password protection again:
  // if (searchParams?.access !== SECRET_KEY) {
  //   notFound();
  // }

  return <AboutTemplate data={aboutPageData} />;
}
