import React from "react";
import { Metadata } from "next";
import IndustryTemplate from "@/features/industries/IndustryTemplate";
import { INDUSTRY_PAGES_DATA } from "@/data/industries/industryPagesData";

export const metadata: Metadata = {
  title: "Finance & Accounting Industry Solutions | Reliution",
  description:
    "Streamline your finance and accounting operations with Reliution's integrated solutions for automated accounting, multi-currency invoicing, bank reconciliation, and financial reporting.",
};

export default function FinanceAccounting() {
  const data = INDUSTRY_PAGES_DATA["financeAccounting"];
  return <IndustryTemplate data={data} />;
}
