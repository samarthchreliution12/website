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
  manufacturing: {
    slug: "manufacturing",
    badge: "INDUSTRIAL & MANUFACTURING",
    title: "Manufacturing & Production",
    heading: "Engineering Digital Excellence for Industrial & Manufacturing Enterprises",
    heroIntro1:
      "Reliution helps manufacturing enterprises streamline production workflows, optimize raw material inventory, enforce strict quality compliance, and achieve full end-to-end operational visibility across shop floors and supply chains.",
    heroIntro2:
      "We partner with discrete, process, and contract manufacturers to eliminate operational friction, reduce machine downtime, and replace disconnected systems with an integrated digital core.",

    // Overview
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

    // Challenges We Address
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

    // Solutions & Technologies
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

    // Core Capabilities / Operations
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

    // Benefits
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

    // Why Reliution
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

    // FAQs
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

    // CTA
    ctaHeading: "Ready to Transform Your Manufacturing Operations?",
    ctaDesc:
      "Schedule a consultation with our industrial technology experts to discuss building an integrated solution tailored to your plant, inventory, quality, and supply chain needs."
  },

supplyChainLogistics: {
  slug: "supply-chain-logistics",
  badge: "SUPPLY CHAIN & LOGISTICS",
  title: "Supply Chain & Logistics",
  heading: "Engineering Digital Excellence for Supply Chain & Logistics Enterprises",
  heroIntro1:
    "Reliution helps supply chain and logistics enterprises optimize warehouse inventory, automate fleet routing, manage multi-location operations, and achieve real-time visibility across shipments, warehouses, and distribution networks.",
  heroIntro2:
    "We partner with logistics providers, distributors, wholesalers, and third-party logistics companies to eliminate operational bottlenecks, improve delivery efficiency, and replace disconnected systems with an integrated digital core.",

  // Overview
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

  // Challenges We Address
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

  // Solutions & Technologies
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

  // Core Capabilities / Operations
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

  // Benefits
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

  // Why Reliution
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

  // FAQs
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

  // CTA
  ctaHeading: "Ready to Transform Your Supply Chain & Logistics Operations?",
  ctaDesc:
    "Schedule a consultation with our supply chain technology experts to discuss building an integrated solution tailored to your warehouses, inventory, transportation, fleet, and logistics operations."
}

};
