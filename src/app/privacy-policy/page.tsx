import React from "react";
import PrivacyPolicyTemplate from "@/features/privacy-policy/PrivacyPolicyTemplate";
import { privacyPolicyData } from "@/data/privacy-policy/privacyPolicyData";

export const metadata = {
  title: "Privacy Policy | Reliution Enterprise Technologies",
  description:
    "Read Reliution's Privacy Policy to learn how we collect, protect, and handle your data across our enterprise solutions.",
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicyTemplate data={privacyPolicyData} />;
}
