export interface PrivacyPolicySection {
  heading: string;
  paragraphs: string[];
  listItems?: { strong?: string; text: string }[];
  contactInfo?: {
    teamName: string;
    emailList: string[];
    website: string;
  };
}

export interface PrivacyPolicyData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
  };
  sections: PrivacyPolicySection[];
}

export const privacyPolicyData: PrivacyPolicyData = {
  hero: {
    eyebrow: "LEGAL & COMPLIANCE",
    title: "Privacy Policy",
    description: "Learn how Reliution collects, uses, and safeguards your personal data when you use our services and website.",
  },
  sections: [
    {
      heading: "1. Consent & Overview",
      paragraphs: [
        "At Reliution, accessible from www.reliution.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Reliution and how we use it.",
        "If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.",
        "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Reliution. This policy is not applicable to any information collected offline or via channels other than this website."
      ]
    },
    {
      heading: "2. Information We Collect",
      paragraphs: [
        "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.",
        "If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.",
        "When you register for an Account or schedule a technical consultation, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."
      ]
    },
    {
      heading: "3. How We Use Your Information",
      paragraphs: [
        "We use the information we collect in various ways, including to:"
      ],
      listItems: [
        { text: "Provide, operate, and maintain our website" },
        { text: "Improve, personalize, and expand our website" },
        { text: "Understand and analyze how you use our website" },
        { text: "Develop new products, services, features, and functionality" },
        { text: "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes" },
        { text: "Send you emails regarding service updates or enterprise consultations" },
        { text: "Find and prevent fraud and security threats" }
      ]
    },
    {
      heading: "4. Log Files",
      paragraphs: [
        "Reliution follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics.",
        "The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
      ]
    },
    {
      heading: "5. Cookies and Web Beacons",
      paragraphs: [
        "Like any other website, Reliution uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited.",
        "The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."
      ]
    },
    {
      heading: "6. Third Party Privacy Policies",
      paragraphs: [
        "Reliution's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.",
        "You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
      ]
    },
    {
      heading: "7. CCPA Privacy Rights (Do Not Sell My Personal Information)",
      paragraphs: [
        "Under the CCPA, among other rights, California consumers have the right to:"
      ],
      listItems: [
        {
          strong: "Request Disclosure:",
          text: " Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers."
        },
        {
          strong: "Request Deletion:",
          text: " Request that a business delete any personal data about the consumer that a business has collected."
        },
        {
          strong: "Opt-Out of Sale:",
          text: " Request that a business that sells a consumer's personal data, not sell the consumer's personal data."
        }
      ]
    },
    {
      heading: "8. GDPR Data Protection Rights",
      paragraphs: [
        "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:"
      ],
      listItems: [
        {
          strong: "The right to access",
          text: " – You have the right to request copies of your personal data. We may charge you a small fee for this service."
        },
        {
          strong: "The right to rectification",
          text: " – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete."
        },
        {
          strong: "The right to erasure",
          text: " – You have the right to request that we erase your personal data, under certain conditions."
        },
        {
          strong: "The right to restrict processing",
          text: " – You have the right to request that we restrict the processing of your personal data, under certain conditions."
        },
        {
          strong: "The right to object to processing",
          text: " – You have the right to request that we object to our processing of your personal data, under certain conditions."
        },
        {
          strong: "The right to data portability",
          text: " – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions."
        }
      ]
    },
    {
      heading: "9. Children's Information",
      paragraphs: [
        "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.",
        "Reliution does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."
      ]
    },
    {
      heading: "10. Contact Us",
      paragraphs: [
        "If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact our legal and compliance team:"
      ],
      contactInfo: {
        teamName: "Reliution Enterprise Legal Team",
        emailList: ["info@reliution.com", "contact@reliution.com"],
        website: "www.reliution.com"
      }
    }
  ]
};
export default privacyPolicyData;
