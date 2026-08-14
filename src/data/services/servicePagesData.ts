export interface ServiceItem {
  iconName: string;
  title: string;
  desc: string;
  tags?: string[];
  link?: string;
}

export interface TechCategoryGroup {
  id: string;
  category: string;
  desc: string;
  iconName: string;
  technologies: string[];
}

export interface OdooModuleItem {
  name: string;
  desc: string;
  iconName: string;
  link?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServicePageData {
  slug: string;
  badge: string;
  title: string;
  heading: string;
  heroIntro1: string;
  heroIntro2: string;
  
  // Section 2: Service Overview
  overviewTitle: string;
  overviewParagraphs: string[];
  overviewHighlights: string[];

  // Section 3: Core Services (4–8 specific offerings)
  coreServicesTitle: string;
  coreServicesDesc?: string;
  coreServicesLayout?: "grid" | "vertical-stack";
  coreServices: ServiceItem[];

  // Section 4: Categorized Tech Stack (OR Odoo Modules for Odoo)
  techStackTitle?: string;
  techStackDesc?: string;
  techCategories?: TechCategoryGroup[];
  odooModules?: OdooModuleItem[];

  // Section 5: Key Features (6–8 major capabilities)
  keyFeaturesTitle: string;
  keyFeatures: ServiceItem[];

  // Section 6: Business Benefits (Measurable business value & ROI)
  benefitsTitle: string;
  benefits: ServiceItem[];

  // Section 7: FAQ (5–8 Q&As)
  faqs: FAQItem[];

  // Section 8: CTA
  ctaHeading: string;
}

export const SERVICE_PAGES_DATA: Record<string, ServicePageData> = {
  // 1. ODOO ERP SOLUTIONS
  "odoo-erp-solutions": {
    slug: "odoo-erp-solutions",
    badge: "ENTERPRISE ODOO ERP",
    title: "Odoo ERP Solutions",
    heading: "Transform Your Business with Enterprise Odoo ERP Solutions",
    heroIntro1:
      "Reliution delivers end-to-end Odoo ERP consulting, custom module development, legacy data migration, and enterprise system integration. We empower growing enterprises and mid-market organizations to unify sales, inventory, accounting, manufacturing, and HR into a single operational hub.",
    heroIntro2:
      "Our certified Odoo solution architects analyze your operational workflows to eliminate data silos, automate repetitive tasks, and deploy scalable ERP environments with zero business downtime.",
    
    // Overview
    overviewTitle: "Streamline Enterprise Operations with Modern Odoo ERP",
    overviewParagraphs: [
      "Modern enterprises often struggle with disconnected software tools, manual data reconciliation, and fragmented operational reporting. Reliution's Odoo ERP consulting solves these challenges by consolidating every core business function into an integrated, real-time enterprise management platform.",
      "By replacing legacy software with a modular Odoo ecosystem, organizations gain complete operational visibility, accelerate order fulfillment cycles, cut administrative overhead by up to 40%, and establish a scalable technology foundation for sustained business growth."
    ],
    overviewHighlights: [
      "Eliminate Operational Data Silos",
      "Accelerate Order-to-Cash Cycles",
      "Reduce Software Ownership Costs (TCO)",
      "Real-time Multi-Company Financial Visibility"
    ],

    // Core Services
    coreServicesTitle: "Core Odoo ERP Services",
    coreServices: [
      { iconName: "Boxes", title: "Odoo Implementation", desc: "Full-lifecycle implementation including scoping, GAP analysis, system configuration, UAT, and Go-Live support." },
      { iconName: "Sliders", title: "Custom Module Engineering", desc: "Tailored Python backend module coding, custom automated triggers, and custom QWeb PDF report design." },
      { iconName: "RefreshCw", title: "Data Migration", desc: "Secure data extraction, transformation, and dry-run migration from legacy SAP, QuickBooks, Tally, or Dynamics into Odoo." },
      { iconName: "Share2", title: "API Ecosystem Integration", desc: "Bi-directional REST & XML-RPC integrations connecting Odoo with Shopify, WooCommerce, payment gateways, and 3PL carriers." },
      { iconName: "Headphones", title: "24/7 SLA Support & Maintenance", desc: "Dedicated technical helpdesk, server health monitoring, security patch management, and functional user support." },
      { iconName: "ArrowUpCircle", title: "Performance Optimization & Upgrades", desc: "PostgreSQL query tuning, worker thread balancing, and version upgrades from older Odoo versions to Odoo 17 Enterprise." }
    ],

    // Section 4: Supported Odoo Modules
    odooModules: [
      { name: "CRM", desc: "Lead pipeline, opportunity tracking & automated activity scheduling.", iconName: "Bot" },
      { name: "Sales", desc: "Instant quotation generation, digital signatures & price list rules.", iconName: "TrendingUp" },
      { name: "Purchase", desc: "Automated vendor RFQs, purchase orders & landed cost tracking.", iconName: "ShoppingBag" },
      { name: "Inventory", desc: "Multi-warehouse management, double-entry stock & barcode scanning.", iconName: "Boxes" },
      { name: "Accounting", desc: "Automated bank reconciliation, multi-currency ledger & tax audit reports.", iconName: "Landmark" },
      { name: "HR", desc: "Employee master records, recruitment pipelines & appraisal management.", iconName: "Layers" },
      { name: "Payroll", desc: "Salary rule configuration, payslip generation & tax deductions.", iconName: "ShieldCheck" },
      { name: "POS", desc: "Omnichannel retail Point of Sale with offline register support.", iconName: "Smartphone" },
      { name: "Website", desc: "Drag-and-drop enterprise website builder fully synced with Odoo DB.", iconName: "Code2" },
      { name: "eCommerce", desc: "Online store management, inventory reservation & payment gateways.", iconName: "ShoppingBag" },
      { name: "Helpdesk", desc: "Customer support ticket routing, SLA tracking & knowledge base.", iconName: "Headphones" },
      { name: "Project", desc: "Gantt charts, task dependencies, agile Kanban & timesheet tracking.", iconName: "Workflow" },
      { name: "Field Service", desc: "Mobile work order dispatch, GPS routing & customer e-signatures.", iconName: "Truck" }
    ],

    // Key Features
    keyFeaturesTitle: "Key Platform Capabilities",
    keyFeatures: [
      { iconName: "Zap", title: "Automated Business Logic", desc: "Configure automated triggers for reordering, invoicing, and customer notifications." },
      { iconName: "ShieldCheck", title: "Role-Based Access Control", desc: "Granular user permission matrices protecting sensitive financial and HR records." },
      { iconName: "BarChart3", title: "Real-Time Executive Dashboards", desc: "Custom KPI reporting widgets for executive management and department leads." },
      { iconName: "Smartphone", title: "Native Mobile Operations", desc: "Fully responsive mobile interface and barcode scanning app for field and warehouse teams." },
      { iconName: "Layers", title: "Multi-Company Consolidation", desc: "Manage multi-entity accounting, inter-company transactions, and consolidated P&Ls." },
      { iconName: "Lock", title: "Audit Trail Logging", desc: "Comprehensive system logs tracking every user edit, transaction timestamp, and deletion." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "40% Administrative Time Savings", desc: "Eliminate manual spreadsheet data entry and cross-departmental paper hand-offs." },
      { iconName: "Zap", title: "Faster Financial Closing", desc: "Automate monthly bank reconciliations and financial statements from weeks to days." },
      { iconName: "Boxes", title: "Optimized Working Capital", desc: "Accurate real-time inventory tracking prevents stockouts and eliminates excess holding costs." },
      { iconName: "ShieldCheck", title: "Predictable Total Cost of Ownership", desc: "Modular architecture allows you to activate features as you scale without expensive software licenses." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "Why choose Odoo Enterprise over traditional legacy ERPs?", answer: "Odoo Enterprise offers a modern, modular ecosystem with significantly lower total cost of ownership (TCO), faster customization cycles, and a superior user interface compared to traditional legacy systems like SAP or Oracle." },
      { question: "How long does an enterprise Odoo implementation take?", answer: "Implementation timelines vary depending on scope. Standard implementations typically take 8 to 12 weeks, while complex multi-company manufacturing projects range between 3 to 6 months." },
      { question: "How does Reliution handle data migration from legacy systems?", answer: "We perform full dry-run migrations in isolated staging environments, execute strict data validation and field-mapping scripts, and conduct final delta data syncs to ensure zero data loss during cutover." },
      { question: "Can Reliution customize Odoo to fit our unique industry workflows?", answer: "Yes. Our senior Python developers write custom Odoo modules to support specialized BoMs, custom approval hierarchies, bespoke reporting, and third-party software integrations." },
      { question: "Does Reliution provide post-launch support and training?", answer: "Yes. We offer 24/7 SLA helpdesk support, proactive server monitoring, version upgrade assistance, and role-based training for your management, accounting, and warehouse teams." },
      { question: "What version of Odoo does Reliution deploy?", answer: "We deploy and support the latest Odoo 17 Enterprise edition (both cloud-hosted Odoo.sh and self-hosted AWS/on-premise environments)." }
    ],

    ctaHeading: "Let's Discuss Your ERP Requirements"
  },

  
  // 2. BUSINESS PROCESS CONSULTING
  "business-process-consulting": {
    slug: "business-process-consulting",
    badge: "MANAGEMENT CONSULTING",
    title: "Business Process Consulting",
    heading: "Optimize Enterprise Operations & Digital Readiness",
    heroIntro1:
      "Reliution provides strategic management and digital process consulting for enterprise organizations seeking operational excellence. We help leadership teams audit legacy workflows, eliminate structural bottlenecks, and design actionable digital transformation roadmaps.",
    heroIntro2:
      "Our management consultants combine deep domain expertise with technical execution capabilities to ensure your business operations are lean, standardized, and ready for modern software deployment.",
    
    // Overview
    overviewTitle: "Transform Legacy Workflows into Scalable Operating Models",
    overviewParagraphs: [
      "In rapidly growing organizations, legacy business processes often fail to keep pace with operational demands, leading to communication silos, high error rates, and delayed decision-making. Reliution’s process consulting bridges the gap between executive strategy and daily operational execution.",
      "We conduct rigorous workflow audits to identify root-cause inefficiencies, establish standardized operating procedures (SOPs), and ensure your organization achieves maximum return on investment (ROI) from technology initiatives."
    ],
    overviewHighlights: [
      "Comprehensive As-Is Workflow Audits",
      "Standard Operating Procedure (SOP) Development",
      "ERP Scoping & Vendor Selection Matrix",
      "Change Management & Staff Adoption"
    ],

    // Core Services
    coreServicesTitle: "Core Consulting Offerings",
    coreServices: [
      { iconName: "Compass", title: "Business Process Audits", desc: "Deep-dive operational analysis mapping cross-departmental hand-offs, bottlenecks, and compliance vulnerabilities." },
      { iconName: "TrendingUp", title: "Digital Transformation Strategy", desc: "Multi-year technology roadmaps aligned with corporate growth milestones and budget expectations." },
      { iconName: "Layers", title: "ERP Scoping & Selection", desc: "Unbiased functional requirement scoping, software evaluation matrix, vendor RFP creation, and selection oversight." },
      { iconName: "Workflow", title: "Workflow Standardization (SOPs)", desc: "Engineering standardized operating procedures, approval hierarchies, and clear departmental performance SLAs." },
      { iconName: "ShieldCheck", title: "Data Governance & Quality Control", desc: "Defining master data management protocols, ownership matrices, and clean data migration standards." },
      { iconName: "Headphones", title: "Organizational Change Management", desc: "Stakeholder alignment workshops, role-based training programs, and communication frameworks to accelerate software adoption." }
    ],

    // Categorized Tech Stack (Tabs layout)
    techStackTitle: "Development Services & Consulting Stack",
    techStackDesc: "Fast-loading and performance-driven consulting frameworks built on rock-solid methodologies that support your business growth.",
    techCategories: [
      { id: "process-mapping", category: "Process Mapping", desc: "Standardized visual process modeling tools for cross-departmental alignment.", iconName: "Compass", technologies: ["BPMN 2.0", "Value Stream Mapping", "Process Flowcharts", "UML Diagrams"] },
      { id: "optimization", category: "Optimization", desc: "Lean methodologies engineered to eliminate waste and accelerate operational cycles.", iconName: "Zap", technologies: ["Lean Six Sigma", "Kaizen", "5S Methodology", "Theory of Constraints"] },
      { id: "scoping", category: "Scoping & ERP", desc: "Structured scoping frameworks preventing scope creep and software deployment delays.", iconName: "Layers", technologies: ["ERP GAP Analysis", "Functional Specs", "Vendor Selection Matrix", "RFP Governance"] },
      { id: "governance", category: "Governance", desc: "Internal control policies ensuring accountability, compliance, and clear SLAs.", iconName: "ShieldCheck", technologies: ["SOP Governance", "Departmental SLAs", "Approval Hierarchies", "Audit Trails"] },
      { id: "architecture", category: "Architecture", desc: "Enterprise data architecture standards protecting data hygiene and compliance.", iconName: "Lock", technologies: ["TOGAF Architecture", "Master Data Management", "Data Hygiene Protocols", "ISO 27001"] },
      { id: "change-mgmt", category: "Change Management", desc: "Structured user training and communication strategies ensuring rapid adoption.", iconName: "Headphones", technologies: ["Stakeholder Alignment", "Role-Based Training", "User Manuals", "Adoption Tracking"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Consulting Outcomes",
    keyFeatures: [
      { iconName: "Compass", title: "End-to-End Process Visibility", desc: "Clear visual documentation of every operational workflow across your enterprise." },
      { iconName: "Zap", title: "Redundancy Elimination", desc: "Identify and eliminate duplicate data entry points and redundant approval steps." },
      { iconName: "ShieldCheck", title: "Compliance & Risk Reduction", desc: "Align internal controls with ISO, SOX, and industry-specific regulatory standards." },
      { iconName: "TrendingUp", title: "ERP Project Risk Mitigation", desc: "Prevent budget overruns and scope creep by establishing clear functional requirements early." },
      { iconName: "Layers", title: "KPI Alignment", desc: "Establish measurable operational benchmarks directly tied to corporate profitability." },
      { iconName: "Headphones", title: "Executive Alignment", desc: "Ensure C-suite and department leads share a unified vision for technology adoption." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "35% Increase in Process Efficiency", desc: "Streamline operational cycles and accelerate customer response times." },
      { iconName: "Zap", title: "Lower Project Failure Risk", desc: "Prevent failed software deployments through structured ERP readiness assessments." },
      { iconName: "ShieldCheck", title: "Higher Employee Adoption", desc: "Structured change management ensures staff quickly embrace new operational tools." },
      { iconName: "Boxes", title: "Reduced Overhead Costs", desc: "Eliminate waste and lower administrative overhead across business units." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "What is an ERP Readiness Assessment?", answer: "An ERP Readiness Assessment evaluates your current data health, process maturity, and organizational readiness to ensure your software deployment succeeds on time and within budget." },
      { question: "How long does a business process audit take?", answer: "Depending on organizational size and complexity, a comprehensive process audit typically takes between 2 to 4 weeks." },
      { question: "Why should we hire process consultants before buying ERP software?", answer: "Automating broken or inefficient processes only leads to automated chaos. Scoping and standardizing your workflows first ensures your software matches your operational needs." },
      { question: "How does Reliution handle Organizational Change Management?", answer: "We conduct stakeholder interviews, design customized training programs, create user reference manuals, and provide hands-on post-launch support to ensure high team adoption." },
      { question: "Does Reliution help with vendor contract negotiations?", answer: "Yes. We act as an objective client advisor during software procurement, evaluating vendor proposals and advising on licensing terms." },
      { question: "What industries benefit most from business process consulting?", answer: "Our consulting methodologies deliver maximum impact for manufacturing, distribution, retail, financial services, healthcare, and professional service enterprises." }
    ],

    ctaHeading: "Let's Discuss Your Business Consulting Requirements"
  },

  
  // 3. AI & MACHINE LEARNING
  "ai-machine-learning": {
    slug: "ai-machine-learning",
    badge: "ENTERPRISE AI ENGINEERING",
    title: "AI & Machine Learning",
    heading: "Deploy Enterprise AI Engines & Predictive Intelligence",
    heroIntro1:
      "Reliution designs and deploys secure, enterprise-grade Artificial Intelligence and Machine Learning solutions. We help forward-thinking organizations convert raw corporate data into automated decisioning engines, intelligent document processing pipelines, and private LLM tools.",
    heroIntro2:
      "We focus strictly on high-ROI business applications. Rather than experimental prototypes, we build production-ready AI models integrated directly into your existing ERP, CRM, and cloud infrastructure with strict data privacy and governance.",
    
    // Overview
    overviewTitle: "Harness Practical AI to Drive Enterprise Automation & Insight",
    overviewParagraphs: [
      "While artificial intelligence offers transformational potential, enterprise adoption often fails due to data privacy concerns, poor integration, and lack of clear business focus. Reliution solves these challenges by engineering secure, private AI solutions tailored specifically to your operational requirements.",
      "From fine-tuning open-source Large Language Models (LLMs) on your internal knowledge base to automating unstructured document processing, our AI solutions eliminate manual labor, forecast operational trends, and accelerate business growth."
    ],
    overviewHighlights: [
      "100% Private Cloud Model Hosting (VPC)",
      "Intelligent Document Processing (IDP)",
      "Custom LLM Fine-Tuning & RAG Architecture",
      "Direct API Integration into Core ERP & CRM"
    ],

    // Core Services
    coreServicesTitle: "Core AI & ML Offerings",
    coreServices: [
      { iconName: "Bot", title: "Custom LLM Fine-Tuning & RAG", desc: "Deploy domain-specific AI models trained exclusively on your internal SOPs, contracts, and product manuals using Retrieval-Augmented Generation (RAG)." },
      { iconName: "Zap", title: "Intelligent Document Processing (IDP)", desc: "Automate invoice, purchase order, contract, and shipping document extraction using OCR, NLP, and computer vision." },
      { iconName: "Cpu", title: "Predictive Analytics & Forecasting", desc: "Build machine learning models to forecast demand, predict inventory stockouts, score customer churn risk, and optimize pricing." },
      { iconName: "Workflow", title: "Autonomous AI Agent Workflows", desc: "Engineer intelligent AI agents capable of executing multi-step business tasks across ERP, email, and database systems." },
      { iconName: "ShieldCheck", title: "Enterprise AI Security & Governance", desc: "Deploy AI models inside your private cloud (VPC) with strict data encryption, role permissions, and zero public data sharing." },
      { iconName: "Headphones", title: "MLOps & Model Maintenance", desc: "Continuous model monitoring, retrain pipelines, drift detection, and latency optimization to maintain high inference accuracy." }
    ],

    // Categorized Tech Stack
    techStackTitle: "Development Services & AI Stack",
    techStackDesc: "Fast-loading and performance-driven custom AI solutions built on rock-solid technological foundations.",
    techCategories: [
      { id: "frontend", category: "Frontend", desc: "Modern frontend technologies for building fast, responsive, and user-friendly AI dashboards.", iconName: "Code2", technologies: ["ReactJS", "Vue.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "ViteJS", "CSS3"] },
      { id: "backend", category: "Backend", desc: "Scalable backend technologies for AI model APIs, integrations, and business logic.", iconName: "Workflow", technologies: ["Node.js", "Python", "Java", "Golang", "C++", "FastAPI", "Express"] },
      { id: "mobile", category: "Mobile", desc: "Mobile technologies for deploying on-device and edge AI models across devices.", iconName: "Smartphone", technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"] },
      { id: "database", category: "Database", desc: "Vector and relational database technologies for RAG knowledge bases and search.", iconName: "Boxes", technologies: ["Pinecone", "Qdrant", "ChromaDB", "PostgreSQL (pgvector)", "MongoDB", "SQLite", "Firebase"] },
      { id: "ai-data", category: "AI & Data", desc: "AI, machine learning, analytics, and data technologies for intelligent solutions.", iconName: "Bot", technologies: ["TensorFlow", "PyTorch", "Power BI", "Tableau", "Pandas", "Scikit-Learn", "OpenAI", "LangChain"] },
      { id: "cloud-devops", category: "Cloud & DevOps", desc: "Cloud and DevOps technologies for scaling private AI model hosting (VPC).", iconName: "Cloud", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "REST APIs"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Platform Capabilities",
    keyFeatures: [
      { iconName: "ShieldCheck", title: "Complete Data Isolation", desc: "Your corporate data is hosted in your private VPC and is never used to train public AI models." },
      { iconName: "Zap", title: "Sub-Second Inference Speed", desc: "Optimized model pipelines delivering instant responses for real-time applications." },
      { iconName: "Layers", title: "Seamless ERP Integration", desc: "Embed AI insights and automated recommendations directly into Odoo or SAP screens." },
      { iconName: "Bot", title: "Multimodal Processing", desc: "Process text, unstructured PDFs, scanned images, and structured database queries simultaneously." },
      { iconName: "BarChart3", title: "Accuracy Monitoring", desc: "Built-in audit dashboards tracking model accuracy, hallucination prevention, and user feedback." },
      { iconName: "Lock", title: "Role-Based AI Access", desc: "Ensure employees only access information permitted by their corporate security clearance." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "80% Reduction in Document Processing Time", desc: "Automate invoice data entry and contract extraction in seconds instead of hours." },
      { iconName: "Zap", title: "Higher Forecasting Accuracy", desc: "Improve inventory and financial forecasting precision through predictive ML algorithms." },
      { iconName: "ShieldCheck", title: "Instant Knowledge Access", desc: "Empower staff to query thousands of technical manuals instantly via natural language." },
      { iconName: "Boxes", title: "Lower Operational Costs", desc: "Automate routine administrative workflows and redirect human talent to strategic tasks." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "How does Reliution guarantee the privacy of our proprietary corporate data?", answer: "We deploy open-source or enterprise AI models within your private cloud environment (AWS/Azure VPC). Your data is encrypted at rest and in transit and is never shared with third-party model providers." },
      { question: "What is RAG (Retrieval-Augmented Generation)?", answer: "RAG is an AI architecture that connects an LLM to your internal database or document repository. This allows the AI to give precise, factual answers based on your actual company data without hallucinating." },
      { question: "Can AI solutions integrate with our existing Odoo or custom software?", answer: "Yes. All our AI models expose clean REST/gRPC API endpoints that integrate directly into Odoo ERP, CRM, mobile applications, or custom web portals." },
      { question: "What is the typical timeline for an AI implementation project?", answer: "A Proof of Concept (PoC) takes 2 to 4 weeks. Full enterprise integration and production deployment typically take 8 to 12 weeks." },
      { question: "What is Intelligent Document Processing (IDP)?", answer: "IDP uses AI to automatically scan, read, extract, and format structured data from unstructured documents like vendor invoices, bills of lading, and tax forms." },
      { question: "Does Reliution provide ongoing MLOps and model support?", answer: "Yes. We manage model retraining, performance monitoring, drift prevention, and infrastructure scaling through 24/7 SLA support." }
    ],

    ctaHeading: "Let's Discuss Your Enterprise AI Strategy"
  },

  
  // 4. WORKFLOW AUTOMATION
  "workflow-automation": {
    slug: "workflow-automation",
    badge: "AUTOMATION & INTEGRATION",
    title: "Workflow Automation",
    heading: "Connect Enterprise Systems into a Synchronized Engine",
    heroIntro1:
      "Reliution designs and deploys resilient workflow automation pipelines that eliminate manual data entry, connect disparate software applications, and enforce operational consistency across your entire technology stack.",
    heroIntro2:
      "Utilizing modern integration platforms (n8n, Make, custom Python webhooks, and enterprise API gateways), we bridge the gap between ERP, CRM, financial platforms, messaging channels, and cloud databases.",
    
    // Overview
    overviewTitle: "Eliminate Manual Data Entry & Friction Between Business Systems",
    overviewParagraphs: [
      "When enterprise software applications operate in isolation, employees waste hundreds of hours manually copy-pasting data, sending status emails, and reconciling discrepancies. Reliution's workflow automation transforms standalone tools into a single, automated operational ecosystem.",
      "We build secure, event-driven integration pipelines with built-in error handling and retries. Whether syncing e-commerce orders to your ERP or triggering automated WhatsApp alerts upon shipment, our solutions ensure your data moves accurately in real time."
    ],
    overviewHighlights: [
      "Event-Driven Integration Pipelines",
      "n8n & Self-Hosted Automation Engines",
      "WhatsApp & Omnichannel Messaging APIs",
      "Automated Error Handling & Retries"
    ],

    // Core Services
    coreServicesTitle: "Core Automation Offerings",
    coreServices: [
      { iconName: "Workflow", title: "Enterprise Integration Pipelines", desc: "Design complex multi-branch automation workflows linking ERP, CRM, accounting, and cloud storage systems." },
      { iconName: "Zap", title: "WhatsApp & Omnichannel Messaging", desc: "Automate order confirmations, delivery tracking updates, and customer service dispatch via WhatsApp Business API." },
      { iconName: "Share2", title: "Custom Webhook & API Gateway Design", desc: "Build secure middle layers managing rate limits, payload transformations, and authentication between systems." },
      { iconName: "RefreshCw", title: "Bi-Directional Database Sync", desc: "Keep inventory levels, customer profiles, and financial ledgers identical across multiple platforms in real time." },
      { iconName: "ShieldCheck", title: "Financial & Invoicing Automation", desc: "Automate invoice generation, payment gateway reconciliation, and receipt matching with zero manual intervention." },
      { iconName: "Headphones", title: "Legacy System Connectors", desc: "Develop custom middleware enabling on-premise legacy databases (Oracle, MS SQL) to connect with cloud web applications." }
    ],

    // Categorized Tech Stack
    techStackTitle: "Development Services & Automation Stack",
    techStackDesc: "Fast-loading and performance-driven workflow integration services built on rock-solid technological foundations.",
    techCategories: [
      { id: "frontend", category: "Frontend", desc: "Modern frontend technologies for building custom automation control panels and webhooks.", iconName: "Code2", technologies: ["ReactJS", "Vue.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "ViteJS", "CSS3"] },
      { id: "backend", category: "Backend", desc: "Scalable backend technologies for APIs, integrations, business logic, and webhooks.", iconName: "Workflow", technologies: ["Node.js", "Python", "Java", "Golang", "C++", "FastAPI", "Express", "n8n"] },
      { id: "mobile", category: "Mobile", desc: "Mobile technologies for dispatching notifications and managing remote workflows.", iconName: "Smartphone", technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"] },
      { id: "database", category: "Database", desc: "Reliable database technologies for task queues, execution logs, and data sync.", iconName: "Boxes", technologies: ["PostgreSQL", "MongoDB", "DynamoDB", "SQLite", "Firebase", "MySQL", "SQL Server"] },
      { id: "ai-data", category: "AI & Data", desc: "AI, analytics, and data technologies for intelligent document routing and decision-making.", iconName: "Bot", technologies: ["TensorFlow", "PyTorch", "Power BI", "Tableau", "Pandas", "Scikit-Learn"] },
      { id: "cloud-devops", category: "Cloud & DevOps", desc: "Cloud and DevOps technologies for self-hosting automation engines with 99.99% uptime.", iconName: "Cloud", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "REST APIs"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Automation Features",
    keyFeatures: [
      { iconName: "Zap", title: "Real-Time Event Triggers", desc: "Workflows execute instantly when an event occurs in any connected application." },
      { iconName: "ShieldCheck", title: "Automated Error Handling", desc: "Built-in queueing, exponential backoff retries, and admin alert notifications if an external API fails." },
      { iconName: "Lock", title: "Encrypted Payload Data", desc: "All sensitive data in transit is encrypted using bank-grade SSL/TLS protocols." },
      { iconName: "BarChart3", title: "Execution Log Dashboards", desc: "Visual monitoring dashboards tracking workflow execution speed, error rates, and volume." },
      { iconName: "Layers", title: "Multi-Step Conditional Logic", desc: "Branching workflow rules capable of complex data filtering and decision-making." },
      { iconName: "Smartphone", title: "Mobile Alert Dispatch", desc: "Send instant notifications to Slack, Microsoft Teams, or mobile SMS upon critical business events." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "90% Reduction in Manual Data Entry", desc: "Eliminate human error and free employees from repetitive administrative tasks." },
      { iconName: "Zap", title: "Sub-Second Data Synchronization", desc: "Ensure inventory and order status are reflected everywhere in real time." },
      { iconName: "ShieldCheck", title: "100% Data Accuracy", desc: "Standardized data transformation scripts eliminate typos and duplicate entries." },
      { iconName: "Boxes", title: "Instant Operational Scaling", desc: "Handle 10x transactional volume without needing to increase administrative staff." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "What happens if a third-party application's API goes down during an automated workflow?", answer: "Our automation pipelines include robust error handling, automated retry queues, and immediate notifications so no transaction or data payload is ever lost." },
      { question: "Why do you recommend n8n over platforms like Zapier?", answer: "n8n can be self-hosted on your own secure cloud servers, offering unlimited workflow executions, zero per-task costs, and total data privacy compliance." },
      { question: "Can workflow automation connect on-premise databases with cloud platforms?", answer: "Yes. We deploy secure hybrid integration gateways that safely bridge on-premise databases (SQL Server, Oracle) with modern cloud apps." },
      { question: "Can we automate WhatsApp customer communication?", answer: "Yes. We integrate the official WhatsApp Business API to automatically trigger order receipts, tracking numbers, and interactive customer surveys." },
      { question: "How long does it take to deploy a custom workflow automation?", answer: "Simple integrations take 3 to 5 business days, while complex multi-system enterprise automation pipelines take 2 to 4 weeks." },
      { question: "Do you provide ongoing support for custom integrations?", answer: "Yes. We provide 24/7 SLA monitoring to ensure API endpoints, webhooks, and automation queues run without interruption." }
    ],

    ctaHeading: "Let's Discuss Your Workflow Automation Needs"
  },

  
  // 5. BUSINESS INTELLIGENCE & ANALYTICS
  "business-intelligence-analytics": {
    slug: "business-intelligence-analytics",
    badge: "BI & DATA ANALYTICS",
    title: "Business Intelligence & Analytics",
    heading: "Turn Raw Enterprise Data into Executive Decisioning Power",
    heroIntro1:
      "Reliution architects modern enterprise data platforms, cloud data warehouses, and interactive Business Intelligence (BI) dashboards. We provide executive leadership with real-time operational clarity, accurate financial reporting, and predictive analytics.",
    heroIntro2:
      "We consolidate fragmented data from ERPs, CRMs, e-commerce stores, and SQL databases into a single, unified data warehouse to empower faster, data-backed decision-making.",
    
    // Overview
    overviewTitle: "Centralize Corporate Data for Real-Time Financial & Operational Visibility",
    overviewParagraphs: [
      "Many leadership teams struggle to get accurate financial and operational metrics because data is trapped in separate software tools and static spreadsheets. Reliution's BI solutions resolve this by engineering automated ETL data pipelines and central data warehouses.",
      "Using Power BI, Tableau, and custom analytics portals, we transform raw operational numbers into intuitive executive dashboards, giving C-suite leadership full visibility into profit margins, inventory turnover, customer LTV, and sales trends."
    ],
    overviewHighlights: [
      "Centralized Cloud Data Warehousing",
      "Automated ETL / ELT Data Pipelines",
      "Power BI & Tableau Dashboard Design",
      "Role-Based Executive KPI Portals"
    ],

    // Core Services
    coreServicesTitle: "Core BI & Analytics Offerings",
    coreServices: [
      { iconName: "BarChart3", title: "Executive Dashboard Engineering", desc: "Design interactive visual dashboards tailored for C-suite, finance, sales, and supply chain management teams." },
      { iconName: "Layers", title: "Enterprise Data Warehousing", desc: "Build scalable cloud data warehouses on AWS Redshift, Snowflake, or PostgreSQL to centralize corporate metrics." },
      { iconName: "Zap", title: "Automated ETL Data Pipelines", desc: "Deploy automated extraction, transformation, and loading pipelines guaranteeing real-time data freshness." },
      { iconName: "TrendingUp", title: "Financial & Margin Modeling", desc: "Build multi-currency financial consolidation reports, unit economics models, and customer LTV dashboards." },
      { iconName: "ShieldCheck", title: "Data Governance & Data Hygiene", desc: "Normalize schemas, eliminate duplicate records, and establish master data validation frameworks." },
      { iconName: "Code2", title: "Embedded Analytics Portals", desc: "Embed interactive reporting charts directly inside your custom customer or vendor portals." }
    ],

    // Categorized Tech Stack
    techStackTitle: "Development Services & Analytics Stack",
    techStackDesc: "Fast-loading and performance-driven BI solutions built on rock-solid technological foundations.",
    techCategories: [
      { id: "frontend", category: "Frontend", desc: "Modern frontend technologies for building custom executive dashboards and embedded charts.", iconName: "Code2", technologies: ["ReactJS", "Vue.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "ViteJS", "CSS3"] },
      { id: "backend", category: "Backend", desc: "Scalable backend technologies for ETL data pipelines, query APIs, and data modeling.", iconName: "Workflow", technologies: ["Node.js", "Python", "Java", "Golang", "C++", "FastAPI", "Express", "dbt"] },
      { id: "mobile", category: "Mobile", desc: "Mobile technologies for delivering real-time executive KPI dashboards to phones.", iconName: "Smartphone", technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"] },
      { id: "database", category: "Database", desc: "Reliable data warehousing and database technologies for fast analytical querying.", iconName: "Boxes", technologies: ["AWS Redshift", "Snowflake", "PostgreSQL", "MongoDB", "DynamoDB", "SQLite", "MySQL"] },
      { id: "ai-data", category: "AI & Data", desc: "AI, machine learning, analytics, and data technologies for intelligent executive insights.", iconName: "Bot", technologies: ["Power BI", "Tableau", "TensorFlow", "PyTorch", "Pandas", "Scikit-Learn"] },
      { id: "cloud-devops", category: "Cloud & DevOps", desc: "Cloud and DevOps technologies for automated data pipeline orchestration and security.", iconName: "Cloud", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "REST APIs"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Platform Capabilities",
    keyFeatures: [
      { iconName: "BarChart3", title: "Interactive Drill-Down Reports", desc: "Filter company performance from high-level annual revenue down to individual store invoices." },
      { iconName: "Zap", title: "Automated Scheduled PDF Reports", desc: "Deliver daily executive PDF performance summaries straight to leadership email inboxes." },
      { iconName: "ShieldCheck", title: "Role-Based KPI Security", desc: "Restrict sensitive financial metrics so department leads only view data relevant to their role." },
      { iconName: "TrendingUp", title: "Predictive Trend Analysis", desc: "Apply statistical modeling to forecast seasonal sales trends and stock requirements." },
      { iconName: "Layers", title: "Multi-Source Data Sync", desc: "Connect data from Odoo ERP, Shopify, Salesforce, Google Analytics, and SQL databases simultaneously." },
      { iconName: "Smartphone", title: "Mobile BI Dashboard Access", desc: "Access live executive performance dashboards securely from any smartphone or tablet." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "100% Single Source of Truth", desc: "Eliminate conflicting spreadsheet numbers and align all executives on identical metrics." },
      { iconName: "Zap", title: "Faster Strategic Decision Making", desc: "Gain instant visibility into operational metrics instead of waiting weeks for manual reports." },
      { iconName: "Boxes", title: "Improved Profit Margin Tracking", desc: "Identify underperforming products, hidden logistics costs, and margin leaks in real time." },
      { iconName: "ShieldCheck", title: "Automated Compliance Reporting", desc: "Streamline regulatory audit preparations through automated data validation." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "Which BI platforms does Reliution support?", answer: "We build dashboards using Microsoft Power BI, Tableau, Metabase, and custom React embedded charts." },
      { question: "How frequently is data refreshed in the BI dashboards?", answer: "We configure real-time streaming updates or scheduled hourly/daily ETL refreshes based on your operational needs." },
      { question: "Can BI dashboards combine data from Odoo, Shopify, and local databases?", answer: "Yes. We construct a central cloud data warehouse that consolidates data from all your software platforms into unified reports." },
      { question: "How do you ensure sensitive financial numbers remain confidential?", answer: "We implement strict Row-Level Security (RLS) and Role-Based Access Control (RBAC), ensuring staff only see data authorized for their clearance." },
      { question: "What is an ETL data pipeline?", answer: "ETL stands for Extract, Transform, Load. It is the automated process of gathering data from various apps, cleaning it, and loading it into your data warehouse." },
      { question: "How long does a BI dashboard implementation take?", answer: "Standard executive dashboard setups take 2 to 4 weeks, while full enterprise data warehouse migrations take 6 to 10 weeks." }
    ],

    ctaHeading: "Let's Discuss Your Business Intelligence Requirements"
  },



  // 6. MOBILE APP DEVELOPMENT
  "mobile-app-development": {
    slug: "mobile-app-development",
    badge: "ENTERPRISE MOBILITY",
    title: "Mobile App Development",
    heading: "High-Performance Enterprise Apps for iOS & Android",
    heroIntro1:
      "Reliution engineers enterprise-grade mobile applications that extend core corporate systems to field teams, warehouse personnel, executive leadership, and end consumers across iOS and Android devices.",
    heroIntro2:
      "Built with Flutter, React Native, and native Swift/Kotlin, our mobile solutions feature offline-first database synchronization, hardware barcode scanning, biometric security, and direct API integration with your Odoo ERP.",
    
    // Overview
    overviewTitle: "Extend Core Enterprise Capabilities to Mobile & Field Teams",
    overviewParagraphs: [
      "In modern enterprise operations, key staff—from warehouse pickers and field service technicians to travelling sales executives—require real-time access to corporate data away from desktop workstations. Reliution builds high-performance mobile apps tailored to field mobility.",
      "Our mobile applications are engineered for reliability in tough real-world environments. Featuring offline-first synchronization, hardware camera barcode scanning, Bluetooth device pairing, and enterprise MDM deployment, we empower your workforce everywhere."
    ],
    overviewHighlights: [
      "Cross-Platform Flutter & React Native Architecture",
      "Offline-First SQLite Database Synchronization",
      "Hardware Barcode Scanning & Camera Integration",
      "Direct API Integration into Odoo ERP & Cloud"
    ],

    // Core Services (Sticky Stacked Cards)
    coreServicesTitle: "Mobile App Development Services",
    coreServicesDesc: "We build reliable mobile experiences that help businesses engage customers, streamline operations, and deliver digital products across devices.",
    coreServicesLayout: "vertical-stack",
    coreServices: [
      {
        iconName: "Smartphone",
        title: "iOS App Development",
        desc: "Build reliable and high-performance iOS applications designed around your business requirements and customer experience.",
        tags: ["Swift", "SwiftUI", "iOS Development", "App Store"],
        link: "/contact"
      },
      {
        iconName: "Bot",
        title: "Android App Development",
        desc: "Develop scalable Android applications that deliver reliable performance across devices and support your business goals.",
        tags: ["Kotlin", "Android", "Jetpack", "Play Store"],
        link: "/contact"
      },
      {
        iconName: "Code2",
        title: "Custom Software Development",
        desc: "Build custom software solutions around your specific workflows, business processes, integrations, and operational requirements.",
        tags: ["Custom Software", "APIs", "Integrations", "Automation"],
        link: "/contact"
      },
      {
        iconName: "Layers",
        title: "User Interface & UX Design",
        desc: "Design intuitive and consistent digital experiences that make mobile applications easier to use and aligned with your brand.",
        tags: ["UI Design", "UX Design", "Prototyping", "Design Systems"],
        link: "/contact"
      },
      {
        iconName: "Cloud",
        title: "Cloud & Backend Services",
        desc: "Build secure backend and cloud systems that support application performance, integrations, scalability, and reliable operations.",
        tags: ["APIs", "Cloud", "Database", "DevOps"],
        link: "/contact"
      },
      {
        iconName: "Headphones",
        title: "Mobile App Maintenance & Support",
        desc: "Keep your applications reliable after launch with ongoing maintenance, updates, monitoring, improvements, and technical support.",
        tags: ["Maintenance", "Updates", "Monitoring", "Technical Support"],
        link: "/contact"
      }
    ],

    // Categorized Tech Stack (Exact User Requested Content & Tabs Architecture)
    techStackTitle: "Development Services & Mobile Stack",
    techStackDesc: "Fast-loading and performance-driven custom application development services are built on the rock-solid technological foundations that support your business while you work on its growth.",
    techCategories: [
      {
        id: "frontend",
        category: "Frontend",
        desc: "Modern frontend technologies for building fast, responsive, and user-friendly business applications.",
        iconName: "Code2",
        technologies: ["ReactJS", "Vue.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "ViteJS", "CSS3"]
      },
      {
        id: "backend",
        category: "Backend",
        desc: "Scalable backend technologies for APIs, integrations, business logic, and enterprise applications.",
        iconName: "Workflow",
        technologies: ["Node.js", "Python", "Java", "Golang", "C++", "FastAPI", "Express"]
      },
      {
        id: "mobile",
        category: "Mobile",
        desc: "Mobile technologies for building reliable applications across iOS and Android platforms.",
        iconName: "Smartphone",
        technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"]
      },
      {
        id: "database",
        category: "Database",
        desc: "Reliable database technologies for secure data storage, application performance, and scalable business systems.",
        iconName: "Boxes",
        technologies: ["PostgreSQL", "MongoDB", "DynamoDB", "SQLite", "Firebase", "MySQL", "SQL Server"]
      },
      {
        id: "ai-data",
        category: "AI & Data",
        desc: "AI, machine learning, analytics, and data technologies for intelligent business solutions and decision-making.",
        iconName: "Bot",
        technologies: ["TensorFlow", "PyTorch", "Power BI", "Tableau", "Pandas", "Scikit-Learn"]
      },
      {
        id: "cloud-devops",
        category: "Cloud & DevOps",
        desc: "Cloud and DevOps technologies for scalable infrastructure, deployment, integrations, and reliable application operations.",
        iconName: "Cloud",
        technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "REST APIs"]
      }
    ],

    // Key Features
    keyFeaturesTitle: "Key Mobile Features",
    keyFeatures: [
      { iconName: "RefreshCw", title: "Offline-First Database Sync", desc: "Field workers can collect data without cellular reception; local changes sync automatically upon reconnecting." },
      { iconName: "Zap", title: "Camera & Barcode Integration", desc: "Fast 1D/2D barcode and QR code scanning using native device camera optimization." },
      { iconName: "ShieldCheck", title: "Biometric Security", desc: "Secure user authentication using FaceID, TouchID, and encrypted JWT session tokens." },
      { iconName: "Truck", title: "GPS Telematics & Geofencing", desc: "Real-time location tracking for field service dispatch and automated arrival triggers." },
      { iconName: "Zap", title: "Instant Push Notifications", desc: "Deliver high-priority order updates and urgent task assignments directly to user screens." },
      { iconName: "Lock", title: "MDM Enterprise Distribution", desc: "Distribute private internal enterprise apps via Apple Business Manager or Android Enterprise MDM." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "50% Faster Warehouse Order Picking", desc: "Mobile barcode scanning drastically accelerates inventory picking and eliminates shipping errors." },
      { iconName: "Zap", title: "Real-Time Field Visibility", desc: "Monitor field technician locations, job completions, and delivery proofs live." },
      { iconName: "ShieldCheck", title: "Zero Data Loss in Remote Areas", desc: "Offline-first architecture ensures field data is preserved even in network dead zones." },
      { iconName: "Boxes", title: "Higher Customer Satisfaction", desc: "Provide customers with digital proof of delivery and instant SMS/WhatsApp status alerts." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "Can your mobile apps function without an internet connection?", answer: "Yes. We build offline-first mobile applications using local SQLite databases. All user inputs are stored locally and automatically sync with the server once connectivity is restored." },
      { question: "Do you publish apps to private Enterprise App Stores (MDM)?", answer: "Yes. We handle distribution through Apple Business Manager, Google Play Private Channel, and Enterprise MDM platforms (MobileIron, AirWatch)." },
      { question: "Why use Flutter or React Native instead of separate native apps?", answer: "Cross-platform frameworks allow us to deliver native-grade performance on both iOS and Android from a single codebase, cutting development and maintenance costs in half." },
      { question: "Can mobile apps integrate directly with our Odoo ERP?", answer: "Yes. Our mobile apps communicate directly with Odoo via secure REST APIs, allowing live stock, customer, and sales order updates." },
      { question: "How long does a custom enterprise mobile app project take?", answer: "Standard mobile applications take 6 to 10 weeks, while complex offline warehouse or field service apps take 10 to 16 weeks." },
      { question: "Do you handle App Store submissions and guidelines compliance?", answer: "Yes. We manage full deployment to the Apple App Store and Google Play Store, ensuring compliance with security and privacy guidelines." }
    ],

    ctaHeading: "Let's Discuss Your Mobile Application Project"
  },



  // 7. CUSTOM SOFTWARE DEVELOPMENT
  "custom-software-development": {
    slug: "custom-software-development",
    badge: "SOFTWARE ENGINEERING",
    title: "Custom Software Development",
    heading: "Scalable Cloud-Native Platforms & Enterprise Portals",
    heroIntro1:
      "Reliution engineers custom cloud-native web applications, SaaS platforms, customer portals, and microservice backend architectures tailored precisely to your unique operational and commercial requirements.",
    heroIntro2:
      "When off-the-shelf software falls short, our senior engineering team designs maintainable software using React, Next.js, Node.js, Python, and PostgreSQL—delivering secure, high-throughput applications ready for enterprise scale.",
    
    // Overview
    overviewTitle: "Build Bespoke Software Designed 100% Around Your Competitive Advantage",
    overviewParagraphs: [
      "Commercial off-the-shelf software often forces enterprises to alter their proven operational workflows to fit rigid software constraints. Reliution's custom software development builds solutions tailored entirely around your unique business logic and strategic goals.",
      "We adhere to clean code standards, microservice architecture, and rigorous automated testing. Whether building a multi-tenant B2B SaaS platform, an internal operations dashboard, or modernizing legacy software, we deliver secure, scalable digital products with full IP ownership."
    ],
    overviewHighlights: [
      "100% Intellectual Property (IP) Ownership",
      "Modern Next.js & Microservices Architecture",
      "Comprehensive Automated Unit & E2E Testing",
      "Bank-Grade Data Encryption & ISO Security"
    ],

    // Core Services
    coreServicesTitle: "Core Custom Software Offerings",
    coreServices: [
      { iconName: "Code2", title: "Enterprise SaaS Platform Development", desc: "Engineer scalable multi-tenant SaaS applications featuring subscription billing, role permissions, and tenant data isolation." },
      { iconName: "Layers", title: "Custom B2B & Client Portals", desc: "Build self-service portals for order tracking, invoice downloads, support ticketing, and secure customer payment processing." },
      { iconName: "Zap", title: "API & Microservices Engineering", desc: "Design decoupled backend REST and GraphQL microservices engineered for high concurrency and zero single point of failure." },
      { iconName: "RefreshCw", title: "Legacy System Modernization", desc: "Refactor legacy monolithic software into modular, cloud-native architectures with modern web interfaces." },
      { iconName: "ShieldCheck", title: "Internal Operations Dashboards", desc: "Develop custom administrative tools, inventory management interfaces, and operational workflow software." },
      { iconName: "Headphones", title: "Software Audit & Refactoring", desc: "Conduct deep architecture reviews, code quality audits, performance bottleneck tuning, and security vulnerability patching." }
    ],

    // Categorized Tech Stack
    techStackTitle: "Development Services & Software Stack",
    techStackDesc: "Fast-loading and performance-driven custom software solutions built on rock-solid technological foundations.",
    techCategories: [
      { id: "frontend", category: "Frontend", desc: "Modern frontend technologies for building fast, responsive, and user-friendly web applications.", iconName: "Code2", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Redux", "ViteJS"] },
      { id: "backend", category: "Backend", desc: "Scalable backend technologies for APIs, integrations, microservices, and enterprise applications.", iconName: "Workflow", technologies: ["Node.js", "Python (FastAPI)", "Go", "Java", "Express", "REST APIs", "GraphQL"] },
      { id: "mobile", category: "Mobile", desc: "Mobile technologies for building reliable web-view and native mobile applications.", iconName: "Smartphone", technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"] },
      { id: "database", category: "Database", desc: "Reliable database technologies for secure data storage, application performance, and caching.", iconName: "Boxes", technologies: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Prisma"] },
      { id: "ai-data", category: "AI & Data", desc: "AI, analytics, and data technologies for intelligent software features.", iconName: "Bot", technologies: ["TensorFlow", "PyTorch", "Power BI", "Tableau", "Pandas", "Scikit-Learn"] },
      { id: "cloud-devops", category: "Cloud & DevOps", desc: "Cloud and DevOps technologies for scalable infrastructure, deployment, and operations.", iconName: "Cloud", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GitHub Actions"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Software Capabilities",
    keyFeatures: [
      { iconName: "TrendingUp", title: "Cloud-Native Scalability", desc: "Architected to dynamically handle scaling traffic spikes without performance degradation." },
      { iconName: "ShieldCheck", title: "Strict Type Safety", desc: "Full TypeScript implementation preventing runtime errors and accelerating developer velocity." },
      { iconName: "Lock", title: "100% IP Ownership", desc: "You retain total legal ownership of all source code, database schemas, and documentation." },
      { iconName: "Zap", title: "Automated CI/CD Deployment", desc: "Automated testing and deployment pipelines enabling fast, zero-downtime feature releases." },
      { iconName: "Layers", title: "Decoupled Architecture", desc: "Clean separation between frontend UI and backend services for long-term flexibility." },
      { iconName: "BarChart3", title: "Real-Time Monitoring", desc: "Integrated logging and error telemetry (Sentry, Grafana) for instant issue resolution." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "100% Fit for Your Unique Workflows", desc: "Software engineered precisely around your operational rules with zero compromises." },
      { iconName: "ShieldCheck", title: "Zero Recurring License Fees", desc: "Own your platform outright without paying ongoing per-user software licensing fees." },
      { iconName: "Zap", title: "High System Performance", desc: "Sub-100ms API response times delivering seamless user experience across devices." },
      { iconName: "Boxes", title: "Long-Term Commercial Asset", desc: "Proprietary software increases corporate valuation and creates enterprise IP." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "Who owns the source code and intellectual property?", answer: "Your organization retains 100% legal ownership of all source code, design assets, database schemas, and technical documentation upon project completion." },
      { question: "What technology stack do you use for custom software?", answer: "We specialize in React, Next.js, TypeScript, Node.js, Python (FastAPI/Django), PostgreSQL, Redis, Docker, and AWS." },
      { question: "How do you ensure code quality and security?", answer: "We follow strict code review standards, write automated unit and integration tests, conduct static code analysis, and perform security vulnerability scans before release." },
      { question: "What is your development methodology?", answer: "We work in 2-week Agile sprints with transparent milestone demos, continuous integration, and dedicated project management communication." },
      { question: "Can custom software integrate with our existing Odoo or legacy DB?", answer: "Yes. We engineer REST/GraphQL APIs that connect seamlessly with Odoo ERP, legacy SQL databases, and third-party SaaS tools." },
      { question: "What support do you provide after the software goes live?", answer: "We offer ongoing 24/7 SLA maintenance, server monitoring, feature enhancements, and security patch management." }
    ],

    ctaHeading: "Let's Discuss Your Custom Software Project"
  },


  
  // 8. DEVOPS & CLOUD INFRASTRUCTURE
  "devops-cloud-infrastructure": {
    slug: "devops-cloud-infrastructure",
    badge: "CLOUD & DEVOPS ENGINEERING",
    title: "DevOps & Cloud Infrastructure",
    heading: "Resilient, Automated & Secure Enterprise Cloud Operations",
    heroIntro1:
      "Reliution architects, secures, and manages high-availability cloud infrastructure on AWS, Microsoft Azure, and Google Cloud Platform. We build automated CI/CD deployment pipelines, containerized environments, and disaster recovery frameworks.",
    heroIntro2:
      "We transform infrastructure into automated, version-controlled code (IaC via Terraform). Our DevOps engineers ensure your applications achieve 99.99% uptime, rapid deployment cycles, and strict ISO 27001 compliance.",
    
    // Overview
    overviewTitle: "Build Secure, Auto-Scaling & High-Availability Cloud Environments",
    overviewParagraphs: [
      "Unmanaged cloud infrastructure leads to security vulnerabilities, unexpected cloud billing spikes, and catastrophic application downtime. Reliution’s DevOps engineering provides the automation and governance needed to keep your cloud resilient and cost-optimized.",
      "Using Infrastructure as Code (IaC), Docker, Kubernetes, and automated CI/CD pipelines, we eliminate manual server management. We ensure your digital platforms deploy in seconds, scale automatically during peak traffic, and remain 100% compliant."
    ],
    overviewHighlights: [
      "99.99% High-Availability Multi-AZ Architecture",
      "Infrastructure as Code (IaC via Terraform)",
      "Automated CI/CD Push-Button Deployments",
      "Cloud Cost Optimization (FinOps)"
    ],

    // Core Services
    coreServicesTitle: "Core Cloud & DevOps Offerings",
    coreServices: [
      { iconName: "Cloud", title: "Cloud Architecture & Migration", desc: "Architect and migrate workloads to AWS, Azure, or GCP with zero downtime and strict data encryption." },
      { iconName: "Zap", title: "CI/CD Pipeline Engineering", desc: "Automate build, test, and release pipelines using GitHub Actions, GitLab CI, or Jenkins for push-button deployments." },
      { iconName: "Layers", title: "Docker & Kubernetes Containerization", desc: "Containerize applications and orchestrate microservices using Kubernetes (EKS/AKS) for auto-scaling capacity." },
      { iconName: "ShieldCheck", title: "Cloud Security & Compliance Hardening", desc: "Harden cloud infrastructure to satisfy ISO 27001, SOC 2, HIPAA, and GDPR compliance standards." },
      { iconName: "RefreshCw", title: "Disaster Recovery & Backup Automation", desc: "Configure automated database snapshots, cross-region replication, and failover mechanisms (RTO/RPO optimization)." },
      { iconName: "Headphones", title: "24/7 Managed Infrastructure SLA", desc: "Provide continuous uptime monitoring, log aggregation (Grafana/ELK), security patching, and rapid incident response." }
    ],

    // Categorized Tech Stack
    techStackTitle: "Development Services & Cloud Stack",
    techStackDesc: "Fast-loading and performance-driven cloud infrastructure services built on rock-solid technological foundations.",
    techCategories: [
      { id: "frontend", category: "Frontend", desc: "Modern frontend technologies for building cloud monitoring dashboards and developer portals.", iconName: "Code2", technologies: ["ReactJS", "Vue.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS", "ViteJS", "CSS3"] },
      { id: "backend", category: "Backend", desc: "Scalable backend technologies for cloud APIs, microservices, and automated scripts.", iconName: "Workflow", technologies: ["Node.js", "Python", "Java", "Golang", "C++", "FastAPI", "Express"] },
      { id: "mobile", category: "Mobile", desc: "Mobile technologies for push alerts and infrastructure monitoring apps.", iconName: "Smartphone", technologies: ["iOS", "Android", "Swift", "Flutter", "React Native", "Kotlin", "Ionic", "Xamarin"] },
      { id: "database", category: "Database", desc: "Reliable database technologies for cloud storage, state persistence, and telemetry.", iconName: "Boxes", technologies: ["PostgreSQL", "MongoDB", "DynamoDB", "SQLite", "Firebase", "MySQL", "SQL Server"] },
      { id: "ai-data", category: "AI & Data", desc: "AI, analytics, and telemetry technologies for predictive auto-scaling and monitoring.", iconName: "Bot", technologies: ["Grafana", "Prometheus", "ELK Stack", "Power BI", "Tableau", "Pandas"] },
      { id: "cloud-devops", category: "Cloud & DevOps", desc: "Cloud and DevOps technologies for scalable infrastructure, deployment, and operations.", iconName: "Cloud", technologies: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "GraphQL", "REST APIs"] }
    ],

    // Key Features
    keyFeaturesTitle: "Key Infrastructure Capabilities",
    keyFeatures: [
      { iconName: "Cloud", title: "Auto-Scaling Elasticity", desc: "Infrastructure dynamically expands during heavy traffic spikes and contracts during low usage." },
      { iconName: "ShieldCheck", title: "VPC & Security Isolation", desc: "Isolated Virtual Private Clouds (VPC) with strict Web Application Firewall (WAF) rules." },
      { iconName: "Zap", title: "Zero-Downtime Releases", desc: "Deploy new software updates seamlessly using blue/green or canary release strategies." },
      { iconName: "Lock", title: "Automated Daily Backups", desc: "Encrypted point-in-time database backups with rapid multi-region restoration." },
      { iconName: "TrendingUp", title: "FinOps Cost Optimization", desc: "Identify unused instances, implement right-sizing, and lower monthly cloud spend by up to 30%." },
      { iconName: "BarChart3", title: "Centralized Telemetry & Logging", desc: "Full visibility into CPU load, memory consumption, API latency, and application health." }
    ],

    // Business Benefits
    benefitsTitle: "Measurable Business Value",
    benefits: [
      { iconName: "TrendingUp", title: "99.99% Guaranteed Application Uptime", desc: "Multi-AZ redundancy eliminates single points of failure and prevents costly outages." },
      { iconName: "Zap", title: "10x Faster Deployment Frequency", desc: "Push code releases to production in minutes instead of manual weekend deployments." },
      { iconName: "ShieldCheck", title: "30% Lower Monthly Cloud Spend", desc: "FinOps resource optimization prevents cloud over-provisioning and waste." },
      { iconName: "Boxes", title: "ISO 27001 Security Audit Readiness", desc: "Hardened infrastructure policies protect corporate data against cyber threats." }
    ],

    // FAQs (6 items)
    faqs: [
      { question: "Which cloud providers does Reliution support?", answer: "We specialize in Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and hybrid on-premise environments." },
      { question: "How does Reliution reduce our monthly cloud infrastructure bills?", answer: "Through FinOps audits, we eliminate idle resources, implement auto-scaling policies, leverage reserved instances, and right-size database instances." },
      { question: "What is Infrastructure as Code (IaC)?", answer: "IaC allows us to define your cloud setup using code (Terraform). This ensures your environment can be audited, version-controlled, and instantly recreated with zero manual error." },
      { question: "How do you achieve zero downtime during software deployments?", answer: "We utilize blue/green and canary deployment techniques, routing traffic to new application containers only after health checks pass." },
      { question: "What is your incident response SLA for cloud downtime?", answer: "Our 24/7 SLA team monitors infrastructure in real time with a guaranteed 15-minute response SLA for critical incidents." },
      { question: "How long does a typical cloud migration project take?", answer: "Standard cloud migrations take 4 to 8 weeks, while complex enterprise multi-cloud setups range between 8 to 14 weeks." }
    ],

    ctaHeading: "Let's Discuss Your Cloud & DevOps Requirements"
  }
};
