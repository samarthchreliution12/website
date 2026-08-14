export interface ContactInfoItem {
  iconName: string;
  title: string;
  value: string;
  details?: string;
}

export interface ContactPageData {
  hero: {
    badge: string;
    title: string;
    description: string;
  };
  form: {
    title: string;
    buttonText: string;
  };
  infoCards: ContactInfoItem[];
}

export const contactPageData: ContactPageData = {
  hero: {
    badge: "GET IN TOUCH",
    title: "Schedule an Enterprise Consultation",
    description: "Connect directly with our enterprise solution architects to discuss your Odoo ERP implementation, custom software requirements, or digital transformation goals.",
  },
  form: {
    title: "Send Us a Message",
    buttonText: "Submit Inquiry",
  },
  infoCards: [
    {
      iconName: "Mail",
      title: "Email Us",
      value: "contact@reliution.com",
    },
    {
      iconName: "Phone",
      title: "Call Solution Architects",
      value: "+91 90545 44170",
    },
    {
      iconName: "MapPin",
      title: "Global Headquarters",
      value: "Reliution Enterprise Technologies",
      details: "Global Digital Transformation Firm",
    },
  ],
};
