export interface AboutStatItem {
  value: string;
  label: string;
}

export interface AboutValueItem {
  iconName: string;
  title: string;
  description: string;
}

export interface AboutCapabilityItem {
  iconName: string;
  title: string;
  description: string;
}

export interface AboutPageData {
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    stats: AboutStatItem[];
  };
  overview: {
    eyebrow: string;
    title: string;
    description: string;
  };
  missionVision: {
    mission: {
      iconName: string;
      title: string;
      description: string;
    };
    vision: {
      iconName: string;
      title: string;
      description: string;
    };
  };
  values: {
    eyebrow: string;
    title: string;
    description: string;
    items: AboutValueItem[];
  };
  capabilities: {
    eyebrow: string;
    title: string;
    description: string;
    items: AboutCapabilityItem[];
  };
  cta: {
    title: string;
    description: string;
    btnText: string;
    btnLink: string;
  };
}

export const aboutPageData: AboutPageData = {
  hero: {
    eyebrow: "ABOUT RELIUTION",
    title: "Engineering Digital Excellence for Global Enterprises",
    description: "Reliution is a premier enterprise digital transformation partner and Odoo ERP consulting firm. We design, engineer, and deploy scalable cloud software architectures, custom ERP solutions, and AI automation engines for modern industrial businesses.",
    stats: [
      { value: "10+", label: "Years Industry Experience" },
      { value: "150+", label: "Enterprise Deployments" },
      { value: "99.4%", label: "Client Satisfaction Rate" },
      { value: "24/7", label: "SLA Dedicated Support" }
    ]
  },
  overview: {
    eyebrow: "OUR PURPOSE",
    title: "Driven by Purpose & Tech Excellence",
    description: "We bridge the gap between complex business challenges and high-performance digital software solutions."
  },
  missionVision: {
    mission: {
      iconName: "Target",
      title: "Our Mission",
      description: "To empower growing and enterprise-scale organizations with robust, transparent, and scalable digital architectures that eliminate operational bottlenecks, reduce total cost of ownership, and drive measurable ROI."
    },
    vision: {
      iconName: "Eye",
      title: "Our Vision",
      description: "To be the most trusted global technology consulting partner for mid-market and enterprise companies seeking seamless ERP integration, custom software engineering, and intelligent AI decisioning."
    }
  },
  values: {
    eyebrow: "OUR CORE VALUES",
    title: "Principles That Guide Our Work",
    description: "Every system we architect and line of code we write is guided by core engineering standards.",
    items: [
      {
        iconName: "ShieldCheck",
        title: "Trust & Quality",
        description: "Zero compromise on security, code standards, and audit readiness for every enterprise deployment."
      },
      {
        iconName: "Zap",
        title: "Speed & Velocity",
        description: "Agile implementation methodologies that deliver high-impact milestones without delays."
      },
      {
        iconName: "Users",
        title: "Client Partnership",
        description: "We act as an extension of your internal technology team, providing continuous support and guidance."
      },
      {
        iconName: "Compass",
        title: "Domain Mastery",
        description: "Deep technical knowledge across manufacturing, supply chain, healthcare, retail, and finance sectors."
      }
    ]
  },
  capabilities: {
    eyebrow: "WHAT WE DO",
    title: "Our Core Engineering Capabilities",
    description: "Comprehensive digital capabilities designed for high-availability enterprise environments.",
    items: [
      {
        iconName: "Boxes",
        title: "Odoo ERP",
        description: "Custom module development, MRP planning, and full-stack Odoo ERP deployments."
      },
      {
        iconName: "Cpu",
        title: "Custom Software",
        description: "SaaS platforms, microservices architecture, and cloud API development."
      },
      {
        iconName: "Bot",
        title: "AI Automation",
        description: "Private LLM deployment, predictive analytics, and automated decision engines."
      },
      {
        iconName: "Workflow",
        title: "Cloud DevOps",
        description: "AWS cloud migration, Kubernetes containerization, and automated CI/CD pipelines."
      }
    ]
  },
  cta: {
    title: "Ready to Accelerate Your Enterprise Digital Journey?",
    description: "Schedule a technical discovery session with our solution architects to evaluate your ERP, software, and cloud requirements.",
    btnText: "Schedule a Consultation",
    btnLink: "/contactus"
  }
};
