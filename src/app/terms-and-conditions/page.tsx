import React from "react";
import TermsAndConditionsTemplate from "@/features/terms-and-conditions/TermsAndConditionsTemplate";
import { termsAndConditionsData } from "@/data/terms-and-conditions/termsAndConditionsData";

export const metadata = {
  title: "Terms & Conditions | Reliution",
  description:
    "Read the Terms and Conditions governing the use of the Reliution website.",
};

export default function TermsAndConditionsPage() {
  return <TermsAndConditionsTemplate data={termsAndConditionsData} />;
}