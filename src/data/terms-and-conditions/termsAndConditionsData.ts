export interface TermsSection {
  heading: string;
  paragraphs: string[];
  subHeading?: string;
  listItems?: string[];
}

export interface TermsAndConditionsData {
  hero: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    websiteUrl: string;
  };
  sections: TermsSection[];
}

export const termsAndConditionsData: TermsAndConditionsData = {
  hero: {
    eyebrow: "LEGAL",
    title: "Terms & Conditions",
    paragraphs: [
      "Welcome to Reliution. These terms and conditions outline the rules and regulations for the use of Reliution's website."
    ],
    websiteUrl: "www.reliution.com"
  },
  sections: [
    {
      heading: "1. Acceptance of Terms",
      paragraphs: [
        "By accessing this website, we assume you accept these Terms and Conditions. Do not continue to use Reliution if you do not agree to all of the terms and conditions stated on this page.",
        "In these Terms and Conditions, “Client”, “You” and “Your” refers to you, the person accessing this website and complying with the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us” refers to Reliution. “Party”, “Parties”, or “Us” refers to both the Client and ourselves.",
        "All terms refer to the offer, acceptance, and consideration of payment necessary to undertake the process of providing assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of the Company's stated services, in accordance with and subject to the prevailing laws of the Netherlands."
      ]
    },
    {
      heading: "2. Cookies",
      paragraphs: [
        "We employ the use of cookies. By accessing Reliution, you agree to the use of cookies in accordance with Reliution's Privacy Policy.",
        "Our website uses cookies to enable the functionality of certain areas and make it easier for visitors to use the website. Some of our affiliate or advertising partners may also use cookies."
      ]
    },
    {
      heading: "3. Intellectual Property",
      paragraphs: [
        "Unless otherwise stated, Reliution and/or its licensors own the intellectual property rights for all material on Reliution. All intellectual property rights are reserved.",
        "You may access material from Reliution for your own personal use, subject to the restrictions set out in these Terms and Conditions."
      ],
      subHeading: "You must not:",
      listItems: [
        "Republish material from Reliution.",
        "Sell, rent, or sub-license material from Reliution.",
        "Reproduce, duplicate, or copy material from Reliution.",
        "Redistribute content from Reliution."
      ]
    },
    {
      heading: "4. User Comments",
      paragraphs: [
        "Parts of this website may provide an opportunity for users to post and exchange opinions and information. Reliution does not necessarily filter, edit, publish, or review Comments before their presence on the website.",
        "Comments do not reflect the views or opinions of Reliution, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts them.",
        "To the extent permitted by applicable laws, Reliution shall not be liable for Comments or for any liability, damages, or expenses caused or suffered as a result of the use of, posting of, or appearance of Comments on this website.",
        "Reliution reserves the right to monitor Comments and remove any Comments that may be considered inappropriate, offensive, or in breach of these Terms and Conditions."
      ]
    },
    {
      heading: "5. User Responsibilities",
      paragraphs: [
        "You warrant and represent that:"
      ],
      listItems: [
        "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so.",
        "The Comments do not infringe any intellectual property rights, including copyright, patent, or trademark rights of any third party.",
        "The Comments do not contain defamatory, libelous, offensive, indecent, or otherwise unlawful material or material that invades privacy.",
        "The Comments will not be used to solicit or promote unauthorized business, commercial activities, or unlawful activity."
      ],
      subHeading: "Non-exclusive license:",
      // Using a paragraph following the list to maintain exact legal copy
      paragraphsFollowUp: [
        "You grant Reliution a non-exclusive license to use, reproduce, edit, and authorize others to use, reproduce, and edit your Comments in any form, format, or media."
      ]
    } as any, // Adding fields dynamically while preserving type
    {
      heading: "6. Linking to Our Website",
      paragraphs: [
        "The following organizations may link to our website without prior written approval:"
      ],
      listItems: [
        "Government agencies.",
        "Search engines.",
        "News organizations.",
        "Online directory distributors.",
        "System-wide accredited businesses."
      ],
      paragraphsFollowUp: [
        "These organizations may link to our homepage, publications, or other website information provided that the link is not deceptive, does not falsely imply sponsorship or endorsement, and fits within the context of the linking party's site.",
        "Other organizations may request permission to link to our website, including business information sources, community sites, associations, online directories, internet portals, accounting and consulting firms, educational institutions, and trade associations."
      ]
    } as any,
    {
      heading: "7. Linking Guidelines",
      paragraphs: [
        "Approved organizations may hyperlink to our website using our corporate name, the URL being linked to, or another appropriate description of our website that makes sense within the context of the linking party's content.",
        "No use of Reliution's logo or other artwork is permitted for linking without an applicable trademark license agreement.",
        "Without prior approval and written permission, you may not create frames around our webpages that alter the visual presentation or appearance of our website."
      ]
    },
    {
      heading: "8. Third-Party Websites and Links",
      paragraphs: [
        "We shall not be held responsible for any content that appears on your website. You agree to protect and defend us against claims arising from your website.",
        "No links should appear on any website that may be interpreted as libelous, obscene, criminal, or which infringes, violates, or advocates the infringement or violation of any third-party rights.",
        "If you find any link on our website that is offensive for any reason, you are free to contact and inform us at any moment. We will consider requests to remove links but are not obligated to do so or to respond directly."
      ]
    },
    {
      heading: "9. Accuracy of Information",
      paragraphs: [
        "We do not ensure that the information on this website is correct, complete, or accurate. We do not warrant its completeness or accuracy, nor do we promise that the website will remain available or that the material on the website will be kept up to date."
      ]
    },
    {
      heading: "10. California Consumer Privacy Rights",
      paragraphs: [
        "Under the CCPA, among other rights, California consumers may have the right to:"
      ],
      listItems: [
        "Request that a business disclose the categories and specific pieces of personal data collected about them.",
        "Request that a business delete personal data collected about them.",
        "Request that a business that sells personal data not sell their personal data."
      ],
      paragraphsFollowUp: [
        "If you make a request, we have one month to respond to you. If you would like to exercise these rights, please contact us."
      ]
    } as any,
    {
      heading: "11. Disclaimer",
      paragraphs: [
        "To the maximum extent permitted by applicable law, we exclude all representations, warranties, and conditions relating to our website and the use of this website.",
        "Nothing in this disclaimer will:"
      ],
      listItems: [
        "Limit or exclude our or your liability for death or personal injury.",
        "Limit or exclude our or your liability for fraud or fraudulent misrepresentation.",
        "Limit or exclude any liability in a way that is not permitted under applicable law.",
        "Exclude any liability that may not be excluded under applicable law."
      ]
    },
    {
      heading: "12. Limitation of Liability",
      paragraphs: [
        "The limitations and prohibitions of liability set out in this Section and elsewhere in this disclaimer are subject to the preceding paragraph and govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort, and for breach of statutory duty.",
        "As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."
      ]
    },
    {
      heading: "13. Privacy Policy",
      paragraphs: [
        "Please read our Privacy Policy for additional information regarding how information may be handled when using the Reliution website."
      ]
    },
    {
      heading: "14. Contact",
      paragraphs: [
        "If you have questions about these Terms and Conditions, or would like to exercise any applicable rights, please contact Reliution."
      ]
    }
  ]
};
export default termsAndConditionsData;
