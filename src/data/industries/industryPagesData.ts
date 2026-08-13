export interface IndustryItem {
  iconName: string;
  title: string;
  desc: string;
  tags?: string[];
  link?: string;
  bullets?: string[];
}

export interface IndustryFAQItem {
  question: string;
  answer: string;
}

export interface IndustryPageData {
  slug: string;
  badge: string;
  title: string;
  heading: string;
  heroIntro1: string;
  heroIntro2: string;

  // Section 2: Industry Overview
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewHighlights: string[];

  // Section 3: Challenges We Address
  challengesTitle: string;
  challengesDesc?: string;
  challenges: IndustryItem[];

  // Section 4: Solutions & Technologies
  solutionsTitle: string;
  solutionsDesc?: string;
  solutions: IndustryItem[];

  // Section 5: Core Capabilities
  capabilitiesTitle: string;
  capabilitiesDesc?: string;
  capabilities: IndustryItem[];

  // Section 6: Business Benefits
  benefitsTitle: string;
  benefits: IndustryItem[];

  // Section 7: Why Reliution
  whyTitle: string;
  whyItems: IndustryItem[];

  // Section 8: FAQs
  faqs?: IndustryFAQItem[];

  // Section 9: CTA
  ctaHeading: string;
  ctaDesc: string;
}

export const INDUSTRY_PAGES_DATA: Record<string, IndustryPageData> = {
  // 1. Manufacturing
  manufacturing: {
    slug: "manufacturing",
    badge: "INDUSTRIAL & MANUFACTURING",
    title: "Manufacturing & Production",
    heading: "Engineering Digital Excellence for Industrial & Manufacturing Enterprises",
    heroIntro1:
      "Reliution helps manufacturing enterprises streamline production workflows, optimize raw material inventory, enforce strict quality compliance, and achieve full end-to-end operational visibility across shop floors and supply chains.",
    heroIntro2:
      "We partner with discrete, process, and contract manufacturers to eliminate operational friction, reduce machine downtime, and replace disconnected systems with an integrated digital core.",

    overviewTitle: "Transforming Industrial & Discrete Manufacturing Operations",
    overviewParagraphs: [
      "Modern manufacturing operations require seamless coordination across complex processes—from raw material sourcing and bill of materials (BOM) management to shop floor execution, quality control, and distribution.",
      "Reliution partners with discrete, process, and contract manufacturers to eliminate operational friction, reduce machine downtime, and replace disconnected systems with an integrated digital core."
    ],
    overviewHighlights: [
      "35% Reduction in Production Cycle Time",
      "99.4% Multi-Warehouse Inventory Accuracy",
      "100% Forward & Backward Batch Traceability",
      "25% Lower Overall Operational Costs"
    ],

    challengesTitle: "Key Manufacturing Industry Challenges We Address",
    challengesDesc:
      "Solving complex operational bottlenecks for growing and enterprise-scale manufacturing facilities.",
    challenges: [
      {
        iconName: "Cpu",
        title: "Complex Shop Floor Operations",
        desc: "Managing multi-stage assembly lines, work center capacity, machine availability, and real-time operator progress across shift cycles."
      },
      {
        iconName: "ShieldCheck",
        title: "Regulatory Compliance & Lot Traceability",
        desc: "Meeting strict FDA, ISO, and aerospace audit requirements with complete forward/backward serialization and electronic quality logs."
      },
      {
        iconName: "Sliders",
        title: "Engineered-to-Order (ETO) Complexity",
        desc: "Handling custom variant configurations, dynamic BOM generation, accurate cost estimations, and fast client quoting."
      }
    ],

    solutionsTitle: "Odoo ERP Solutions for Manufacturing",
    solutionsDesc:
      "Leveraging Odoo's modular enterprise suite as a core digital engine for integrated manufacturing management.",
    solutions: [
      {
        iconName: "Workflow",
        title: "MRP & Material Planning",
        desc: "Automated Material Requirements Planning (MRP) that triggers procurement and manufacturing orders based on real-time demand.",
        bullets: [
          "Automated stock reorder point triggers",
          "Multi-level BOM cost roll-ups",
          "Dynamic raw material allocation",
          "Vendor lead time optimization"
        ]
      },
      {
        iconName: "Boxes",
        title: "Double-Entry Stock Control",
        desc: "Real-time stock valuation, multi-warehouse tracking, WIP inventory management, and automated barcode scanning.",
        bullets: [
          "Real-time WIP stock consumption tracking",
          "Multi-warehouse replenishment routing",
          "Mobile barcode & RFID stock picking",
          "Automated scrap rate reporting"
        ]
      },
      {
        iconName: "Activity",
        title: "Shop Floor Automation",
        desc: "Touch-screen tablet interfaces for operators, work center dispatching, labor time logging, and IoT machine telemetry.",
        bullets: [
          "Tablet-friendly operator work order screens",
          "Real-time machine throughput logging",
          "IoT sensor cycle time monitoring",
          "Automated downtime cause categorization"
        ]
      }
    ],

    capabilitiesTitle: "Core Manufacturing Capabilities",
    capabilitiesDesc:
      "Centralize your end-to-end manufacturing workflows across departments on a single unified enterprise platform.",
    capabilities: [
      {
        iconName: "Workflow",
        title: "Production & Work Center Planning",
        desc: "Schedule work centers, analyze capacity bottlenecks, and optimize labor and machine allocation across production lines."
      },
      {
        iconName: "Boxes",
        title: "Manufacturing Order (MO) Dispatch",
        desc: "Automatically generate, track, and dispatch manufacturing orders based on sales demand, reorder triggers, or safety stock levels."
      },
      {
        iconName: "Sliders",
        title: "Bill of Materials (BOM) & Variant Management",
        desc: "Manage multi-level BOMs, flexible product variants, routing steps, and component cost roll-ups with precision."
      },
      {
        iconName: "Activity",
        title: "Work Orders & Real-Time Execution",
        desc: "Track real-time work center status, step-by-step assembly instructions, labor times, and operational logs on tablet devices."
      },
      {
        iconName: "ShieldCheck",
        title: "Quality Assurance & Inspection Gates",
        desc: "Enforce automated quality inspection gates, defect logging, root cause analysis, and automated quarantine holds."
      },
      {
        iconName: "Lock",
        title: "Serialization & Lot Tracking",
        desc: "Maintain strict serial and lot traceability from incoming supplier shipments down to final customer deliveries."
      }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      {
        iconName: "Zap",
        title: "Accelerated Production Speed",
        desc: "Eliminate shop floor bottlenecks and reduce total production cycle times by up to 35%."
      },
      {
        iconName: "Layers",
        title: "Unified Operational Visibility",
        desc: "Connect factory floor, warehouse, purchasing, and finance into one real-time dashboard."
      },
      {
        iconName: "ShieldCheck",
        title: "100% Audit-Ready Compliance",
        desc: "Automated digital quality logs, e-signatures, and complete lot serialization meeting ISO and GMP standards."
      },
      {
        iconName: "TrendingUp",
        title: "Measurable Cost Reduction",
        desc: "Minimize raw material scrap rates, reduce overtime labor costs, and optimize machine utilization."
      }
    ],

    whyTitle: "Why Reliution for Manufacturing",
    whyItems: [
      {
        iconName: "Compass",
        title: "Deep Industry Domain Expertise",
        desc: "Our architects understand discrete and process manufacturing workflows, plant mechanics, and shop floor realities."
      },
      {
        iconName: "Code2",
        title: "Custom Engineering & Integrations",
        desc: "We build custom Python backend modules, CAD/PLM connectors, and IoT sensor integrations tailored to your factory."
      },
      {
        iconName: "TrendingUp",
        title: "Results-Driven Implementation",
        desc: "Proven implementation methodology focusing on measurable operational throughput, cost reduction, and fast ROI."
      }
    ],

    faqs: [
      {
        question: "Can Reliution integrate Odoo with our existing CAD/PLM software?",
        answer: "Yes, we engineer bi-directional integrations between Odoo ERP and major CAD/PLM tools like SolidWorks, AutoCAD, and PTC Creo to keep Bill of Materials (BOMs) synchronized with engineering."
      },
      {
        question: "How does lot and serial number tracking work for quality compliance?",
        answer: "Odoo tracks every raw material batch from vendor receipt through WIP operations to finished goods shipments. In the event of a quality audit or recall, full forward and backward reports are generated in seconds."
      },
      {
        question: "Can shop floor operators use mobile tablets to record work order progress?",
        answer: "Absolutely. We deploy touchscreen tablet interfaces specifically optimized for plant operators to view assembly instructions, log start/stop times, and record quality inspection data."
      },
      {
        question: "Do you support both discrete and process manufacturing?",
        answer: "Yes. Our team configures Odoo for discrete manufacturing (BOMs, routings, work centers) as well as process manufacturing (recipes, batch yields, scrap percentages, and landed costs)."
      }
    ],

    ctaHeading: "Ready to Transform Your Manufacturing Operations?",
    ctaDesc:
      "Schedule a consultation with our industrial technology experts to discuss building an integrated solution tailored to your plant, inventory, quality, and supply chain needs."
  },

  // 2. Supply Chain & Logistics
  supplyChainLogistics: {
    slug: "supply-chain",
    badge: "SUPPLY CHAIN & LOGISTICS",
    title: "Supply Chain & Logistics",
    heading: "Engineering Digital Excellence for Supply Chain & Logistics Enterprises",
    heroIntro1:
      "Reliution helps supply chain and logistics enterprises optimize warehouse inventory, automate fleet routing, manage multi-location operations, and achieve real-time visibility across shipments, warehouses, and distribution networks.",
    heroIntro2:
      "We partner with logistics providers, distributors, wholesalers, and third-party logistics companies to eliminate operational bottlenecks, improve delivery efficiency, and replace disconnected systems with an integrated digital core.",

    overviewTitle: "Transforming Supply Chain & Logistics Operations",
    overviewParagraphs: [
      "Modern supply chain operations require seamless coordination across procurement, warehousing, inventory, transportation, order fulfillment, and last-mile delivery.",
      "Reliution helps logistics and distribution businesses centralize operations, automate repetitive workflows, improve inventory accuracy, and gain real-time visibility across multiple warehouses, locations, vehicles, and shipments."
    ],
    overviewHighlights: [
      "35% Reduction in Logistics Processing Time",
      "99.5% Multi-Warehouse Inventory Accuracy",
      "30% Faster Order Fulfillment",
      "25% Lower Overall Logistics Costs"
    ],

    challengesTitle: "Key Supply Chain & Logistics Challenges We Address",
    challengesDesc:
      "Solving complex operational bottlenecks for growing logistics providers, distributors, and enterprise-scale supply chains.",
    challenges: [
      {
        iconName: "Boxes",
        title: "Warehouse & Inventory Complexity",
        desc: "Managing inventory across multiple warehouses, locations, stock zones, and distribution centers while maintaining accurate real-time stock visibility."
      },
      {
        iconName: "Truck",
        title: "Fleet & Delivery Management",
        desc: "Optimizing vehicle allocation, delivery routes, driver schedules, and transportation costs while ensuring timely deliveries."
      },
      {
        iconName: "MapPin",
        title: "Multi-Location Logistics Visibility",
        desc: "Coordinating inventory transfers, procurement, fulfillment, and shipments across multiple warehouses, branches, suppliers, and customer locations."
      }
    ],

    solutionsTitle: "Odoo ERP Solutions for Supply Chain & Logistics",
    solutionsDesc:
      "Leveraging Odoo's modular enterprise suite as a core digital engine for integrated warehouse, inventory, transportation, and logistics management.",
    solutions: [
      {
        iconName: "Boxes",
        title: "Warehouse & Inventory Management",
        desc: "Centralize warehouse operations with real-time inventory visibility, automated replenishment, barcode scanning, and multi-location stock management.",
        bullets: [
          "Multi-warehouse inventory management",
          "Automated replenishment and reorder rules",
          "Barcode and QR code scanning",
          "Real-time stock movement tracking"
        ]
      },
      {
        iconName: "Truck",
        title: "Fleet & Route Management",
        desc: "Automate fleet operations, optimize delivery routes, track vehicles, and improve transportation efficiency.",
        bullets: [
          "Automated fleet scheduling",
          "Route and delivery optimization",
          "Vehicle maintenance tracking",
          "Driver and vehicle performance monitoring"
        ]
      },
      {
        iconName: "Workflow",
        title: "3PL & Logistics Integration",
        desc: "Connect third-party logistics providers, carriers, suppliers, and customers through integrated workflows and real-time data synchronization.",
        bullets: [
          "3PL system synchronization",
          "Carrier and shipping integrations",
          "Automated shipment status updates",
          "Real-time order and delivery visibility"
        ]
      }
    ],

    capabilitiesTitle: "Core Supply Chain & Logistics Capabilities",
    capabilitiesDesc:
      "Centralize your end-to-end supply chain and logistics workflows across warehouses, transportation, procurement, and fulfillment on a single unified enterprise platform.",
    capabilities: [
      {
        iconName: "Boxes",
        title: "Warehouse Management System (WMS)",
        desc: "Optimize receiving, putaway, picking, packing, internal transfers, and dispatch operations across multiple warehouses."
      },
      {
        iconName: "Barcode",
        title: "Barcode & Inventory Scanning",
        desc: "Enable fast and accurate warehouse operations with barcode scanning for receiving, picking, packing, transfers, and inventory adjustments."
      },
      {
        iconName: "Truck",
        title: "Fleet & Transportation Management",
        desc: "Manage vehicles, drivers, maintenance schedules, delivery assignments, and transportation costs from a centralized platform."
      },
      {
        iconName: "MapPin",
        title: "Real-Time Shipment Tracking",
        desc: "Track shipments throughout the delivery lifecycle and provide real-time visibility into order and transportation status."
      },
      {
        iconName: "Workflow",
        title: "Multi-Location Supply Chain",
        desc: "Coordinate inventory, procurement, transfers, and fulfillment across multiple warehouses, branches, suppliers, and customer locations."
      },
      {
        iconName: "RefreshCw",
        title: "3PL & Carrier Synchronization",
        desc: "Synchronize orders, inventory, shipment information, tracking updates, and delivery statuses with external logistics and 3PL platforms."
      }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      {
        iconName: "Zap",
        title: "Faster Order Fulfillment",
        desc: "Automate warehouse workflows and reduce processing delays to accelerate picking, packing, and shipment fulfillment."
      },
      {
        iconName: "Layers",
        title: "Unified Supply Chain Visibility",
        desc: "Connect warehouses, procurement, transportation, suppliers, and customers into one real-time operational platform."
      },
      {
        iconName: "TrendingUp",
        title: "Improved Inventory Accuracy",
        desc: "Reduce inventory discrepancies with real-time stock tracking, barcode scanning, automated movements, and multi-location visibility."
      },
      {
        iconName: "DollarSign",
        title: "Measurable Cost Reduction",
        desc: "Reduce transportation expenses, warehouse inefficiencies, inventory carrying costs, and manual operational overhead."
      }
    ],

    whyTitle: "Why Reliution for Supply Chain & Logistics",
    whyItems: [
      {
        iconName: "Compass",
        title: "Deep Supply Chain Domain Expertise",
        desc: "Our architects understand warehouse operations, inventory management, transportation workflows, distribution networks, and 3PL operations."
      },
      {
        iconName: "Code2",
        title: "Custom Engineering & Integrations",
        desc: "We build custom Python backend modules, WMS integrations, carrier connectors, barcode solutions, fleet integrations, and 3PL synchronization systems."
      },
      {
        iconName: "TrendingUp",
        title: "Results-Driven Implementation",
        desc: "Our implementation methodology focuses on improving inventory accuracy, fulfillment speed, delivery performance, operational efficiency, and measurable ROI."
      }
    ],

    faqs: [
      {
        question: "Can Reliution integrate Odoo with our existing WMS or 3PL systems?",
        answer: "Yes. We build bi-directional integrations between Odoo and external WMS, 3PL, carrier, and logistics platforms to synchronize orders, inventory, shipment information, and delivery statuses in real time."
      },
      {
        question: "Can Odoo manage multiple warehouses and locations?",
        answer: "Yes. Odoo supports multi-warehouse and multi-location operations, allowing businesses to manage inventory transfers, replenishment rules, routes, stock movements, and fulfillment processes across multiple locations."
      },
      {
        question: "Can warehouse employees use barcode scanners?",
        answer: "Absolutely. We configure barcode-driven warehouse workflows for receiving, putaway, picking, packing, internal transfers, inventory counts, and shipment processing."
      },
      {
        question: "Can Odoo help optimize fleet and delivery operations?",
        answer: "Yes. Odoo can centralize fleet information, vehicle maintenance, driver assignments, delivery operations, and transportation workflows. We can also integrate external routing and tracking platforms when advanced route optimization or GPS tracking is required."
      }
    ],

    ctaHeading: "Ready to Transform Your Supply Chain & Logistics Operations?",
    ctaDesc:
      "Schedule a consultation with our supply chain technology experts to discuss building an integrated solution tailored to your warehouses, inventory, transportation, fleet, and logistics operations."
  },

  // 3. Healthcare & Pharmaceuticals
  healthcarePharmaceuticals: {
    slug: "healthcare",
    badge: "HEALTHCARE & PHARMACEUTICALS",
    title: "Healthcare & Pharmaceuticals",
    heading: "Engineering Digital Excellence for Healthcare & Pharmaceutical Enterprises",
    heroIntro1:
      "Reliution helps healthcare and pharmaceutical organizations securely manage patient data, streamline medical inventory, optimize pharmacy operations, and maintain real-time visibility across healthcare workflows.",
    heroIntro2:
      "We partner with hospitals, clinics, pharmacies, laboratories, and pharmaceutical businesses to eliminate operational friction, improve patient experiences, strengthen compliance, and replace disconnected systems with an integrated digital core.",

    overviewTitle: "Transforming Healthcare & Pharmaceutical Operations",
    overviewParagraphs: [
      "Modern healthcare and pharmaceutical operations require seamless coordination across patient management, appointments, medical inventory, pharmacy operations, billing, compliance, and reporting.",
      "Reliution helps healthcare organizations centralize critical workflows, secure sensitive information, automate repetitive processes, and gain real-time visibility across clinical, administrative, pharmacy, and supply chain operations."
    ],
    overviewHighlights: [
      "40% Reduction in Administrative Processing Time",
      "99.5% Medical Inventory Accuracy",
      "30% Faster Patient & Pharmacy Workflows",
      "100% Digital Compliance & Audit Visibility"
    ],

    challengesTitle: "Key Healthcare & Pharmaceutical Challenges We Address",
    challengesDesc:
      "Solving complex operational and compliance challenges for hospitals, clinics, pharmacies, laboratories, and pharmaceutical enterprises.",
    challenges: [
      {
        iconName: "ShieldCheck",
        title: "Patient Data Security & Privacy",
        desc: "Protecting sensitive patient information with controlled access, secure data workflows, audit trails, and role-based permissions."
      },
      {
        iconName: "Package",
        title: "Medical Inventory Complexity",
        desc: "Managing medicines, medical equipment, batches, expiry dates, stock levels, and multi-location inventory while minimizing shortages and wastage."
      },
      {
        iconName: "FileCheck",
        title: "Regulatory Compliance & Reporting",
        desc: "Maintaining accurate digital records, compliance documentation, audit trails, and automated regulatory reporting across healthcare and pharmaceutical operations."
      }
    ],

    solutionsTitle: "Odoo ERP Solutions for Healthcare & Pharmaceuticals",
    solutionsDesc:
      "Leveraging Odoo's modular enterprise suite as a core digital engine for integrated healthcare, pharmacy, inventory, patient, and pharmaceutical management.",
    solutions: [
      {
        iconName: "Users",
        title: "Patient & Healthcare Management",
        desc: "Centralize patient information, appointments, healthcare workflows, communication, and administrative operations in one secure platform.",
        bullets: [
          "Secure patient profile management",
          "Appointment and scheduling workflows",
          "Patient history and document management",
          "Role-based healthcare staff access"
        ]
      },
      {
        iconName: "Package",
        title: "Medical & Pharmacy Inventory",
        desc: "Manage medicines, medical supplies, equipment, batches, expiry dates, and stock movements with real-time inventory visibility.",
        bullets: [
          "Batch and expiry date tracking",
          "Automated medicine replenishment",
          "Multi-location medical inventory",
          "Barcode-based stock management"
        ]
      },
      {
        iconName: "FileCheck",
        title: "Compliance & Regulatory Automation",
        desc: "Automate compliance workflows, maintain audit-ready records, and generate regulatory reports while maintaining secure access to sensitive information.",
        bullets: [
          "Automated compliance reporting",
          "Digital audit trails",
          "Document and approval workflows",
          "Role-based access control"
        ]
      }
    ],

    capabilitiesTitle: "Core Healthcare & Pharmaceutical Capabilities",
    capabilitiesDesc:
      "Centralize healthcare, pharmacy, inventory, compliance, and administrative workflows on a single unified enterprise platform.",
    capabilities: [
      {
        iconName: "Users",
        title: "Patient Management & Portals",
        desc: "Manage patient profiles, appointments, documents, communication, and secure patient portal access through centralized workflows."
      },
      {
        iconName: "Pill",
        title: "Pharmacy ERP & Operations",
        desc: "Manage prescriptions, medicine inventory, purchasing, sales, batches, expiry dates, and pharmacy workflows from one integrated ERP."
      },
      {
        iconName: "Package",
        title: "Medical Inventory & Batch Tracking",
        desc: "Track medicines, medical supplies, equipment, batches, expiration dates, and stock movements across multiple healthcare locations."
      },
      {
        iconName: "Video",
        title: "Telehealth & Digital Healthcare",
        desc: "Enable digital appointment workflows, remote consultations, patient communication, and integrated healthcare service delivery."
      },
      {
        iconName: "ShieldCheck",
        title: "Compliance & Audit Management",
        desc: "Maintain secure records, approval workflows, audit trails, access controls, and documentation required for healthcare and pharmaceutical compliance."
      },
      {
        iconName: "BarChart3",
        title: "Healthcare Analytics & Reporting",
        desc: "Generate real-time operational dashboards and automated reports covering patients, pharmacy operations, inventory, revenue, compliance, and performance."
      }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      {
        iconName: "Zap",
        title: "Faster Healthcare Operations",
        desc: "Automate administrative and operational workflows to reduce manual processing and improve staff productivity."
      },
      {
        iconName: "ShieldCheck",
        title: "Secure Patient Data",
        desc: "Protect sensitive healthcare information with role-based access, secure workflows, audit trails, and controlled data visibility."
      },
      {
        iconName: "Package",
        title: "Improved Medical Inventory Control",
        desc: "Reduce medicine shortages, expired stock, and inventory discrepancies with real-time batch and expiry tracking."
      },
      {
        iconName: "TrendingUp",
        title: "Better Operational Visibility",
        desc: "Connect patient services, pharmacy, inventory, purchasing, finance, and administration into one centralized platform."
      }
    ],

    whyTitle: "Why Reliution for Healthcare & Pharmaceuticals",
    whyItems: [
      {
        iconName: "Compass",
        title: "Healthcare & Pharmaceutical Domain Expertise",
        desc: "Our architects understand healthcare workflows, pharmacy operations, medical inventory, patient management, and pharmaceutical supply chains."
      },
      {
        iconName: "Code2",
        title: "Custom Engineering & Integrations",
        desc: "We build custom Python backend modules, patient portal integrations, pharmacy systems, telehealth solutions, medical inventory workflows, and third-party healthcare integrations."
      },
      {
        iconName: "TrendingUp",
        title: "Compliance-Focused Implementation",
        desc: "Our implementation methodology focuses on secure data management, operational efficiency, audit readiness, regulatory compliance, and measurable business outcomes."
      }
    ],

    faqs: [
      {
        question: "Can Reliution customize Odoo for hospitals and healthcare organizations?",
        answer: "Yes. We customize Odoo to manage patient information, appointments, healthcare administration, inventory, pharmacy operations, billing, reporting, and other organization-specific workflows."
      },
      {
        question: "Can Odoo manage pharmaceutical inventory and medicine expiry dates?",
        answer: "Yes. Odoo can be configured to track medicine batches, lot numbers, expiry dates, stock movements, replenishment rules, and inventory across multiple pharmacies or healthcare locations."
      },
      {
        question: "Can Reliution build a secure patient portal?",
        answer: "Absolutely. We can develop secure patient portals for appointments, documents, communication, healthcare information, and other patient-facing services with role-based access controls."
      },
      {
        question: "Can healthcare systems be integrated with existing applications?",
        answer: "Yes. We build integrations between Odoo and external healthcare, pharmacy, laboratory, payment, communication, and telehealth platforms to synchronize relevant operational data."
      }
    ],

    ctaHeading: "Ready to Transform Your Healthcare & Pharmaceutical Operations?",
    ctaDesc:
      "Schedule a consultation with our healthcare technology experts to discuss building a secure and integrated solution tailored to your patient management, pharmacy, inventory, compliance, and healthcare operations."
  },

  // 4. Retail & E-Commerce
  retailECommerce: {
    slug: "retail-ecommerce",
    badge: "RETAIL & E-COMMERCE",
    title: "Retail & E-Commerce",
    heading: "Engineering Digital Excellence for Retail & E-Commerce Enterprises",
    heroIntro1:
      "Reliution helps retail and e-commerce businesses unify point-of-sale operations, synchronize real-time inventory, streamline online and offline sales, and deliver seamless customer experiences across every sales channel.",
    heroIntro2:
      "We partner with retailers, wholesalers, marketplaces, and e-commerce businesses to eliminate operational friction, connect stores with digital commerce platforms, automate repetitive workflows, and replace disconnected systems with an integrated digital core.",

    overviewTitle: "Transforming Retail & E-Commerce Operations",
    overviewParagraphs: [
      "Modern retail and e-commerce operations require seamless coordination across point-of-sale systems, online stores, inventory, purchasing, payments, customer management, fulfillment, and marketing.",
      "Reliution helps retail businesses centralize critical workflows, synchronize inventory across physical and digital channels, automate repetitive processes, and gain real-time visibility across stores, warehouses, and e-commerce operations."
    ],
    overviewHighlights: [
      "35% Reduction in Order Processing Time",
      "99.5% Real-Time Inventory Accuracy",
      "30% Faster Order Fulfillment",
      "25% Increase in Customer Retention"
    ],

    challengesTitle: "Key Retail & E-Commerce Challenges We Address",
    challengesDesc:
      "Solving complex operational and customer experience challenges for growing and enterprise-scale retail and e-commerce businesses.",
    challenges: [
      {
        iconName: "ShoppingCart",
        title: "Disconnected Sales Channels",
        desc: "Managing separate POS, e-commerce, marketplace, and sales systems creates fragmented customer and order data across channels."
      },
      {
        iconName: "Package",
        title: "Real-Time Inventory Complexity",
        desc: "Maintaining accurate inventory across stores, warehouses, online channels, and marketplaces while preventing overselling and stockouts."
      },
      {
        iconName: "Users",
        title: "Customer Engagement & Retention",
        desc: "Building personalized customer experiences, loyalty programs, promotions, and communication workflows across physical and digital channels."
      }
    ],

    solutionsTitle: "Odoo ERP Solutions for Retail & E-Commerce",
    solutionsDesc:
      "Leveraging Odoo's modular enterprise suite as a core digital engine for integrated retail, e-commerce, inventory, sales, payment, and customer management.",
    solutions: [
      {
        iconName: "ShoppingCart",
        title: "Omnichannel POS & Sales",
        desc: "Connect physical stores, point-of-sale systems, online stores, and sales channels through a unified retail platform.",
        bullets: [
          "Multi-store point-of-sale management",
          "Real-time sales synchronization",
          "Unified customer and order records",
          "Integrated payment processing"
        ]
      },
      {
        iconName: "Package",
        title: "Real-Time Inventory & Fulfillment",
        desc: "Synchronize inventory across stores, warehouses, e-commerce platforms, and marketplaces with real-time stock visibility.",
        bullets: [
          "Multi-location inventory management",
          "Real-time stock synchronization",
          "Automated replenishment rules",
          "Barcode-based inventory operations"
        ]
      },
      {
        iconName: "Globe",
        title: "E-Commerce & Marketplace Integration",
        desc: "Connect Odoo with online stores and third-party marketplaces to synchronize products, orders, customers, and inventory.",
        bullets: [
          "E-commerce platform integration",
          "Marketplace order synchronization",
          "Automated product catalog updates",
          "Real-time order and inventory sync"
        ]
      }
    ],

    capabilitiesTitle: "Core Retail & E-Commerce Capabilities",
    capabilitiesDesc:
      "Centralize your complete retail and digital commerce operations across stores, warehouses, online channels, and customer touchpoints on a single unified enterprise platform.",
    capabilities: [
      {
        iconName: "ShoppingCart",
        title: "Omnichannel Point of Sale",
        desc: "Manage multiple retail locations, POS terminals, sales transactions, returns, discounts, and payments through a centralized platform."
      },
      {
        iconName: "Globe",
        title: "E-Commerce Management",
        desc: "Manage online product catalogs, pricing, orders, customers, promotions, and digital storefront operations from an integrated ERP."
      },
      {
        iconName: "Package",
        title: "Inventory & Stock Synchronization",
        desc: "Maintain real-time inventory visibility across stores, warehouses, e-commerce platforms, and marketplaces to reduce stockouts and overselling."
      },
      {
        iconName: "CreditCard",
        title: "Payment Gateway Integration",
        desc: "Connect payment gateways and transaction systems to streamline online and offline payments while maintaining accurate financial records."
      },
      {
        iconName: "Heart",
        title: "Customer Loyalty & Engagement",
        desc: "Build loyalty programs, customer rewards, targeted promotions, and personalized engagement workflows to increase customer retention."
      },
      {
        iconName: "BarChart3",
        title: "Retail Analytics & Reporting",
        desc: "Generate real-time dashboards and reports covering sales, inventory, customers, products, stores, revenue, and overall retail performance."
      }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      {
        iconName: "Zap",
        title: "Faster Retail Operations",
        desc: "Automate sales, order processing, inventory, and fulfillment workflows to improve operational efficiency and staff productivity."
      },
      {
        iconName: "Layers",
        title: "Unified Omnichannel Experience",
        desc: "Connect physical stores, online stores, marketplaces, inventory, and customer data into one centralized retail ecosystem."
      },
      {
        iconName: "Package",
        title: "Improved Inventory Accuracy",
        desc: "Synchronize inventory in real time across multiple locations and sales channels to reduce stock discrepancies, stockouts, and overselling."
      },
      {
        iconName: "TrendingUp",
        title: "Higher Customer Retention",
        desc: "Use loyalty programs, personalized promotions, and centralized customer data to strengthen engagement and increase repeat purchases."
      }
    ],

    whyTitle: "Why Reliution for Retail & E-Commerce",
    whyItems: [
      {
        iconName: "Compass",
        title: "Deep Retail & E-Commerce Expertise",
        desc: "Our architects understand retail operations, omnichannel commerce, POS systems, inventory management, e-commerce workflows, and customer engagement."
      },
      {
        iconName: "Code2",
        title: "Custom Engineering & Integrations",
        desc: "We build custom Python backend modules, payment gateway integrations, e-commerce connectors, marketplace integrations, POS extensions, and third-party retail solutions."
      },
      {
        iconName: "TrendingUp",
        title: "Results-Driven Implementation",
        desc: "Our implementation methodology focuses on improving operational efficiency, inventory accuracy, customer experience, sales performance, and measurable business ROI."
      }
    ],

    faqs: [
      {
        question: "Can Reliution customize Odoo for retail businesses?",
        answer: "Yes. We customize Odoo to manage point of sale, stores, inventory, purchasing, customer management, loyalty programs, e-commerce, payments, reporting, and other retail-specific workflows."
      },
      {
        question: "Can Odoo synchronize inventory between stores and e-commerce platforms?",
        answer: "Yes. Odoo can be configured to synchronize inventory across multiple stores, warehouses, online stores, and marketplaces, providing real-time stock visibility and helping prevent overselling."
      },
      {
        question: "Can Reliution integrate payment gateways with Odoo?",
        answer: "Absolutely. We can integrate payment gateways and transaction platforms with Odoo to support online and offline payments while synchronizing payment and order information."
      },
      {
        question: "Can Odoo support customer loyalty programs?",
        answer: "Yes. Odoo can be configured to manage loyalty programs, reward points, discounts, promotional campaigns, customer segmentation, and personalized offers to improve customer retention."
      }
    ],

    ctaHeading: "Ready to Transform Your Retail & E-Commerce Operations?",
    ctaDesc:
      "Schedule a consultation with our retail technology experts to discuss building an integrated solution tailored to your POS, inventory, e-commerce, payment, customer loyalty, and omnichannel operations."
  },

  // 5. Finance & Accounting
  financeAccounting: {
    slug: "finance-accounting",
    badge: "FINANCE & ACCOUNTING",
    title: "Finance & Accounting",
    heading: "Engineering Digital Excellence for Finance & Accounting Enterprises",
    heroIntro1:
      "Reliution helps businesses modernize financial operations through automated accounting, multi-currency invoicing, bank reconciliation, tax management, and real-time financial reporting.",
    heroIntro2:
      "We partner with growing and enterprise organizations to eliminate manual financial processes, improve reporting accuracy, strengthen financial controls, and replace disconnected accounting systems with an integrated digital core.",

    overviewTitle: "Transforming Finance & Accounting Operations",
    overviewParagraphs: [
      "Modern finance operations require seamless coordination across general ledgers, accounts payable, accounts receivable, invoicing, payments, banking, taxation, budgeting, and financial reporting.",
      "Reliution helps organizations centralize financial workflows, automate repetitive accounting processes, manage multi-currency transactions, improve reconciliation accuracy, and gain real-time visibility into financial performance."
    ],
    overviewHighlights: [
      "40% Reduction in Manual Accounting Processing",
      "99.5% Financial Data Accuracy",
      "50% Faster Bank Reconciliation",
      "100% Digital Financial Audit Visibility"
    ],

    challengesTitle: "Key Finance & Accounting Challenges We Address",
    challengesDesc:
      "Solving complex financial management and accounting challenges for growing and enterprise-scale organizations.",
    challenges: [
      {
        iconName: "Calculator",
        title: "Manual Financial Processes",
        desc: "Reducing time-consuming manual accounting tasks across invoicing, journal entries, payments, reconciliations, and financial reporting."
      },
      {
        iconName: "Globe",
        title: "Multi-Currency & Global Transactions",
        desc: "Managing transactions across multiple currencies, exchange rates, international customers, vendors, and financial entities with accurate accounting."
      },
      {
        iconName: "FileCheck",
        title: "Tax Compliance & Financial Reporting",
        desc: "Maintaining accurate financial records, tax documentation, audit trails, and regulatory reports while reducing compliance risks."
      }
    ],

    solutionsTitle: "Odoo ERP Solutions for Finance & Accounting",
    solutionsDesc:
      "Leveraging Odoo's modular enterprise suite as a core digital engine for integrated accounting, invoicing, payments, taxation, banking, and financial reporting.",
    solutions: [
      {
        iconName: "BookOpen",
        title: "General Ledger & Accounting",
        desc: "Centralize general ledger operations, journal entries, accounts payable, accounts receivable, and financial transactions within one integrated accounting platform.",
        bullets: [
          "Automated journal entries",
          "Accounts payable and receivable management",
          "Multi-company accounting",
          "Real-time financial statements"
        ]
      },
      {
        iconName: "CreditCard",
        title: "Invoicing & Payments",
        desc: "Automate customer invoicing, vendor bills, payment processing, payment follow-ups, and financial transaction workflows.",
        bullets: [
          "Automated customer invoicing",
          "Vendor bill management",
          "Payment tracking and reminders",
          "Online payment integration"
        ]
      },
      {
        iconName: "Landmark",
        title: "Bank Reconciliation & Financial Control",
        desc: "Connect banking transactions with accounting records and automate reconciliation workflows to improve financial accuracy and visibility.",
        bullets: [
          "Automated bank transaction imports",
          "Bank statement reconciliation",
          "Payment matching",
          "Financial control and audit trails"
        ]
      }
    ],

    capabilitiesTitle: "Core Finance & Accounting Capabilities",
    capabilitiesDesc:
      "Centralize financial management, accounting, taxation, invoicing, banking, and reporting workflows on a single unified enterprise platform.",
    capabilities: [
      {
        iconName: "BookOpen",
        title: "General Ledger & Financial Accounting",
        desc: "Manage journal entries, ledgers, accounts payable, accounts receivable, financial periods, and consolidated financial statements."
      },
      {
        iconName: "FileText",
        title: "Invoicing & Billing Automation",
        desc: "Automate customer invoices, recurring billing, vendor bills, payment reminders, credit notes, and transaction documentation."
      },
      {
        iconName: "Globe",
        title: "Multi-Currency Accounting",
        desc: "Manage international transactions, multiple currencies, exchange rates, foreign customers, vendors, and multi-company financial operations."
      },
      {
        iconName: "Landmark",
        title: "Bank Reconciliation",
        desc: "Import bank transactions, automatically match payments with accounting records, and streamline reconciliation across financial accounts."
      },
      {
        iconName: "ShieldCheck",
        title: "Tax Compliance & Audit Management",
        desc: "Maintain accurate tax records, compliance documentation, approval workflows, audit trails, and financial controls."
      },
      {
        iconName: "BarChart3",
        title: "Financial Analytics & Reporting",
        desc: "Generate real-time dashboards and financial reports covering revenue, expenses, cash flow, profitability, receivables, payables, and business performance."
      }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      {
        iconName: "Zap",
        title: "Faster Financial Operations",
        desc: "Automate repetitive accounting, invoicing, payment, and reconciliation workflows to improve finance team productivity."
      },
      {
        iconName: "Calculator",
        title: "Improved Financial Accuracy",
        desc: "Reduce manual data entry and accounting errors through automated financial workflows and centralized transaction records."
      },
      {
        iconName: "ShieldCheck",
        title: "Stronger Financial Compliance",
        desc: "Maintain structured financial records, audit trails, tax documentation, and controlled approval workflows for improved compliance."
      },
      {
        iconName: "TrendingUp",
        title: "Real-Time Financial Visibility",
        desc: "Connect accounting, sales, purchasing, banking, and operations into centralized dashboards for faster financial decision-making."
      }
    ],

    whyTitle: "Why Reliution for Finance & Accounting",
    whyItems: [
      {
        iconName: "Compass",
        title: "Deep Finance & Accounting Expertise",
        desc: "Our architects understand accounting workflows, financial controls, invoicing, taxation, banking, reporting, and multi-company financial operations."
      },
      {
        iconName: "Code2",
        title: "Custom Engineering & Integrations",
        desc: "We build custom Python backend modules, accounting extensions, payment gateway integrations, banking integrations, tax solutions, and third-party financial system connectors."
      },
      {
        iconName: "TrendingUp",
        title: "Results-Driven Implementation",
        desc: "Our implementation methodology focuses on reducing manual accounting effort, improving financial accuracy, accelerating reporting, and delivering measurable ROI."
      }
    ],

    faqs: [
      {
        question: "Can Reliution customize Odoo for finance and accounting operations?",
        answer: "Yes. We customize Odoo to manage general ledgers, accounts payable, accounts receivable, invoicing, payments, taxation, budgeting, financial reporting, and organization-specific accounting workflows."
      },
      {
        question: "Can Odoo handle multi-currency accounting?",
        answer: "Yes. Odoo can be configured to manage multiple currencies, exchange rates, international transactions, foreign customers and vendors, and multi-company financial operations."
      },
      {
        question: "Can Reliution integrate banking and payment systems with Odoo?",
        answer: "Absolutely. We can integrate banking systems, payment gateways, and transaction platforms with Odoo to automate payment processing, transaction synchronization, and bank reconciliation."
      },
      {
        question: "Can Odoo support tax compliance and financial reporting?",
        answer: "Yes. Odoo can be configured to manage tax rules, tax calculations, financial documentation, audit trails, and statutory financial reports based on the organization's applicable requirements."
      }
    ],

    ctaHeading: "Ready to Transform Your Finance & Accounting Operations?",
    ctaDesc:
      "Schedule a consultation with our finance technology experts to discuss building an integrated solution tailored to your accounting, invoicing, multi-currency, taxation, banking, and financial reporting needs."
  },

  // 6. Telecom & IT Infrastructure
  telecomITInfrastructure: {
    slug: "telecom",
    badge: "TELECOM & IT INFRASTRUCTURE",
    title: "Telecom & IT Infrastructure",
    heading: "Engineering Digital Excellence for Telecom & IT Infrastructure Enterprises",
    heroIntro1:
      "Reliution helps telecom operators, ISPs, and enterprise IT leaders architect scalable cloud infrastructure, automate deployment pipelines, and build resilient digital platforms.",
    heroIntro2:
      "We partner with technology enterprises to eliminate deployment friction, optimize cloud infrastructure costs, automate CI/CD pipelines, and replace monolithic systems with cloud-native microservices.",

    overviewTitle: "Transforming Telecom & IT Infrastructure Operations",
    overviewParagraphs: [
      "Modern telecom and enterprise IT operations require high-availability cloud architecture, automated CI/CD deployments, zero-downtime microservices, and proactive network performance monitoring.",
      "Reliution helps technology providers automate cloud provisioning, streamline Kubernetes orchestration, enforce devops security, and gain end-to-end operational control over infrastructure."
    ],
    overviewHighlights: [
      "99.99% Cloud Uptime & High Availability",
      "60% Faster CI/CD Deployment Cycles",
      "35% Reduction in Cloud Infrastructure Costs",
      "24/7 Automated Infrastructure Monitoring"
    ],

    challengesTitle: "Key Telecom & IT Infrastructure Challenges We Address",
    challengesDesc: "Solving complex cloud, DevOps, and infrastructure bottlenecks for enterprise technology organizations.",
    challenges: [
      {
        iconName: "Cloud",
        title: "Legacy Infrastructure Bottlenecks",
        desc: "Migrating monolithic legacy systems to automated, containerized cloud infrastructure without service interruptions."
      },
      {
        iconName: "ShieldCheck",
        title: "Infrastructure Security & Compliance",
        desc: "Ensuring SOC2, ISO 27001, and telecom regulatory compliance across hybrid and multi-cloud environments."
      },
      {
        iconName: "Cpu",
        title: "High Traffic & Scalability Strain",
        desc: "Designing auto-scaling Kubernetes clusters capable of handling unpredictable traffic spikes and bandwidth demands."
      }
    ],

    solutionsTitle: "Enterprise Cloud & DevOps Solutions",
    solutionsDesc: "Modernizing IT environments with cloud-native architecture, Kubernetes orchestration, and automated CI/CD pipelines.",
    solutions: [
      {
        iconName: "Cloud",
        title: "AWS & Multi-Cloud Migration",
        desc: "Architect, migrate, and optimize enterprise workloads across AWS, Azure, and Google Cloud with zero downtime.",
        bullets: [
          "Lift-and-shift & cloud refactoring",
          "Automated Terraform infrastructure provisioning",
          "Cost optimization & FinOps controls",
          "Multi-region disaster recovery"
        ]
      },
      {
        iconName: "Workflow",
        title: "DevOps & Kubernetes Orchestration",
        desc: "Deploy automated CI/CD pipelines, Docker containerization, and self-healing Kubernetes clusters.",
        bullets: [
          "GitHub Actions & GitLab CI/CD automation",
          "Helm chart management & GitOps",
          "Container security scanning & hardening",
          "Zero-downtime rolling deployments"
        ]
      },
      {
        iconName: "BarChart3",
        title: "Network Telemetry & Monitoring",
        desc: "Real-time infrastructure observability, log aggregation, and automated incident response dispatching.",
        bullets: [
          "Prometheus & Grafana dashboard setup",
          "ELK stack centralized logging",
          "Automated incident alert dispatching",
          "Real-time bandwidth & CPU telemetry"
        ]
      }
    ],

    capabilitiesTitle: "Core Telecom & IT Capabilities",
    capabilitiesDesc: "Centralize your enterprise cloud, devops, and network infrastructure management on one unified platform.",
    capabilities: [
      { iconName: "Cloud", title: "Multi-Cloud Architecture", desc: "Design resilient hybrid and multi-cloud infrastructure tailored for telecom SLAs." },
      { iconName: "Workflow", title: "DevOps & GitOps Pipelines", desc: "Automate code compilation, testing, security checks, and production deployments." },
      { iconName: "Cpu", title: "Kubernetes & Microservices", desc: "Decouple heavy legacy backends into lightweight, auto-scalable microservices." },
      { iconName: "ShieldCheck", title: "Cloud Security & Compliance", desc: "Enforce zero-trust network access, encrypted data transit, and audit logging." },
      { iconName: "BarChart3", title: "Observability & APM", desc: "Full-stack application performance monitoring and real-time infrastructure alerts." },
      { iconName: "Zap", title: "High-Performance Edge Computing", desc: "Deploy edge nodes and CDN acceleration for low-latency telecom services." }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      { iconName: "Zap", title: "Accelerated Time-to-Market", desc: "Ship software features up to 60% faster with automated DevOps pipelines." },
      { iconName: "ShieldCheck", title: "99.99% Guaranteed Availability", desc: "Prevent costly network downtime with auto-scaling Kubernetes infrastructure." },
      { iconName: "TrendingUp", title: "Reduced FinOps Spend", desc: "Optimize cloud resource usage to lower AWS and Azure billing costs." },
      { iconName: "Layers", title: "Unified Infrastructure Visibility", desc: "Monitor all servers, clusters, databases, and microservices in one dashboard." }
    ],

    whyTitle: "Why Reliution for Telecom & IT Infrastructure",
    whyItems: [
      { iconName: "Compass", title: "Cloud-Native Engineering Focus", desc: "Certified AWS and Kubernetes architects dedicated to high-availability infrastructure." },
      { iconName: "Code2", title: "Custom Automation & Tooling", desc: "We write bespoke Terraform scripts, Python automation bots, and custom monitoring plugins." },
      { iconName: "TrendingUp", title: "24/7 SLA Operational Support", desc: "Round-the-clock infrastructure monitoring and immediate incident mitigation." }
    ],

    faqs: [
      { question: "Can Reliution handle live migrations without downtime?", answer: "Yes, we utilize blue-green deployments, database replication, and traffic swapping to ensure zero downtime during cloud migrations." },
      { question: "Do you support containerization for legacy applications?", answer: "Absolutely. We refactor legacy monolithic applications into Docker containers managed by Kubernetes." }
    ],

    ctaHeading: "Ready to Scale Your Cloud & IT Infrastructure?",
    ctaDesc: "Schedule a consultation with our DevOps architects to discuss building high-availability cloud solutions for your enterprise."
  },

  // 7. Food & Beverage Distribution
  foodBeverageDistribution: {
    slug: "food",
    badge: "FOOD & BEVERAGE DISTRIBUTION",
    title: "Food & Beverage Distribution",
    heading: "Engineering Digital Excellence for Food & Beverage Distributors",
    heroIntro1:
      "Reliution helps food and beverage distributors streamline batch traceability, manage cold chain inventory, automate purchase ordering, and enforce strict food safety compliance.",
    heroIntro2:
      "We partner with food manufacturers, wholesalers, and cold storage facilities to eliminate perishable inventory waste, accelerate delivery cycles, and replace disconnected systems with an integrated ERP core.",

    overviewTitle: "Transforming Food & Beverage Operations",
    overviewParagraphs: [
      "Modern food and beverage distribution requires strict batch and lot tracking, cold storage temperature monitoring, automated expiration alerts, and fast route dispatching.",
      "Reliution helps food distributors automate inventory replenishment, track lot numbers from farm to fork, enforce FDA/HACCP compliance, and optimize margin profitability."
    ],
    overviewHighlights: [
      "50% Reduction in Food Expiration Waste",
      "100% FEFO & Batch Expiry Control",
      "99.6% Cold Storage Inventory Accuracy",
      "30% Faster Driver Delivery Dispatch"
    ],

    challengesTitle: "Key Food & Beverage Challenges We Address",
    challengesDesc: "Solving complex perishable inventory, batch control, and compliance bottlenecks for food distributors.",
    challenges: [
      { iconName: "Boxes", title: "Perishable Expiry & Scrap Waste", desc: "Managing strict First-Expired, First-Out (FEFO) picking rules to prevent inventory expiration loss." },
      { iconName: "ShieldCheck", title: "FDA & HACCP Food Safety Audits", desc: "Maintaining instant forward and backward lot traceability for audit readiness and recall management." },
      { iconName: "Truck", title: "Cold Chain & Route Logistics", desc: "Coordinating refrigerated warehouse zones, driver routes, and temperature-controlled delivery schedules." }
    ],

    solutionsTitle: "Odoo ERP Solutions for Food & Beverage",
    solutionsDesc: "Leveraging Odoo's integrated suite to automate batch tracking, FEFO picking, purchase orders, and food compliance.",
    solutions: [
      {
        iconName: "Boxes",
        title: "Batch & Expiry Date Management",
        desc: "Automate FEFO inventory picking rules and track lot numbers across receiving, storage, and customer delivery.",
        bullets: [
          "Automated FEFO picking strategy",
          "Expiration date notification alerts",
          "Multi-temperature zone warehouse tracking",
          "Scrap & wastage cost analytics"
        ]
      },
      {
        iconName: "ShieldCheck",
        title: "Traceability & Recall Automation",
        desc: "Generate instant 360-degree lot traceability reports for FDA and local health department audits.",
        bullets: [
          "One-click forward/backward recall reports",
          "Supplier quality scorecards",
          "Electronic Certificate of Analysis (CoA)",
          "HACCP digital checklist integration"
        ]
      },
      {
        iconName: "Truck",
        title: "Route & Dispatch Optimization",
        desc: "Automate driver route sheets, mobile delivery confirmation, and temperature log recording.",
        bullets: [
          "Driver mobile delivery app",
          "Automated invoice & delivery note printing",
          "Real-time delivery status updates",
          "Cross-docking & route consolidation"
        ]
      }
    ],

    capabilitiesTitle: "Core Food & Beverage Capabilities",
    capabilitiesDesc: "Centralize your food manufacturing, warehousing, purchasing, and distribution operations.",
    capabilities: [
      { iconName: "Boxes", title: "FEFO & Lot Serial Tracking", desc: "Pick oldest inventory batches automatically to minimize spoilage and waste." },
      { iconName: "ShieldCheck", title: "Food Safety & Audit Trail", desc: "Maintain immutable digital quality control logs compliant with food safety regulations." },
      { iconName: "Truck", title: "Refrigerated Fleet Dispatch", desc: "Manage cold storage vehicles, delivery schedules, and driver assignments." },
      { iconName: "RefreshCw", title: "Automated Vendor Purchasing", desc: "Trigger reorder points automatically based on seasonal demand forecasts." },
      { iconName: "Barcode", title: "Mobile Warehouse Barcode Pick", desc: "Equip warehouse staff with handheld barcode scanners for fast order fulfillment." },
      { iconName: "BarChart3", title: "Margin & Spoilage Analytics", desc: "Track gross margins per product line and analyze inventory shrinkage causes." }
    ],

    benefitsTitle: "Key Business Benefits",
    benefits: [
      { iconName: "Zap", title: "Minimized Spoilage Waste", desc: "Reduce perishable inventory expiration losses by up to 50% using FEFO picking." },
      { iconName: "ShieldCheck", title: "100% Audit Readiness", desc: "Generate complete lot recall and traceability audit reports in under 30 seconds." },
      { iconName: "TrendingUp", title: "Higher Gross Margins", desc: "Optimize purchasing costs and track exact landed costs per batch." },
      { iconName: "Layers", title: "Unified Order-to-Delivery", desc: "Connect sales reps, warehouse pickers, drivers, and accounting in real time." }
    ],

    whyTitle: "Why Reliution for Food & Beverage Distribution",
    whyItems: [
      { iconName: "Compass", title: "Food & Beverage Industry Focus", desc: "Our architects understand cold storage operations, FEFO picking, and food safety regulations." },
      { iconName: "Code2", title: "Custom ERP & Scanner Workflows", desc: "We build custom barcode scanner apps, mobile driver interfaces, and supplier portal connectors." },
      { iconName: "TrendingUp", title: "Proven ROI Implementation", desc: "Fast-track implementation focusing on reducing spoilage and improving delivery speed." }
    ],

    faqs: [
      { question: "Does Odoo support FEFO (First Expired, First Out) picking?", answer: "Yes, Odoo natively supports FEFO picking strategies, automatically directing warehouse pickers to select batches closest to their expiration date." },
      { question: "How fast can we generate a lot recall report?", answer: "With Reliution's Odoo setup, you can generate a complete forward and backward lot recall report in seconds." }
    ],

    ctaHeading: "Ready to Optimize Your Food & Beverage Distribution?",
    ctaDesc: "Schedule a consultation with our food distribution ERP experts to discuss building a solution for your warehouse, lot tracking, and logistics needs."
  }
};
