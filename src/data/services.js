import serviceStrategy from '../assets/service-strategy.png';
import serviceOperations from '../assets/service-operations.png';
import serviceCrm from '../assets/service-crm.png';
import serviceGrowth from '../assets/service-growth.png';

export const services = [
    // Highlighted Services (Used on Home)
    {
        id: 'c-suite',
        slug: 'c-suite', // This links to the custom page /c-suite
        title: "Business Strategy & Brand Consulting",
        name: "Business Strategy & Brand Consulting", // Alias for detail view
        description: "Build a clear roadmap with actionable insights to scale your business, attract investors, and strengthen your market presence.",
        image: serviceStrategy,
        category: 'business',
        features: [
            "Corporate Vision & Roadmap Design",
            "Brand Identity & Positioning",
            "Investor Pitch Deck Development",
            "Market Entry Strategy",
            "Executive Coaching"
        ],
        details: "In today's volatile market, a robust strategy is the difference between surviving and thriving. We partner with C-Suite executives to deconstruct complex challenges and architect sustainable growth frameworks.",
        isHighlight: true,
        link: "/c-suite"
    },
    {
        id: 'digital-transform',
        slug: 'digital-business-transform', // Links to custom page
        title: "Digital Operations & Project Management",
        name: "Digital Operations & Project Management",
        description: "Streamline backend systems, automate workflows, and manage cross-functional teams with tools like ClickUp, Airtable, and Notion.",
        image: serviceOperations,
        category: 'tech',
        features: [
            "Workflow Automation (Zapier/Make)",
            "Project Management Setup (ClickUp/Notion)",
            "SOP Development & Documentation",
            "Team Productivity Training",
            "Operational Audit"
        ],
        details: "Operational friction kills growth. We audit your existing processes and deploy low-code automation solutions that recover hundreds of man-hours per month.",
        isHighlight: true,
        link: "/digital-business-transform"
    },
    {
        id: 'crm-implementation',
        slug: 'crm-implementation',
        title: "CRM Implementation & Account Management",
        name: "CRM Implementation & Account Management",
        description: "Optimize the entire client lifecycle using HubSpot, Salesforce, and Zoho to enhance retention and drive revenue.",
        image: serviceCrm,
        category: 'tech',
        features: [
            "CRM Migration & Setup",
            "Sales Pipeline Architecture",
            "Customer Segmentation Strategy",
            "Automated Email Sequences",
            "Client Retention Systems"
        ],
        details: "Your customer data is your most valuable asset. We architect CRM systems that not only store data but actively work to close deals and retain clients.",
        isHighlight: true,
        link: "/services/crm-implementation"
    },
    {
        id: 'growth-marketing',
        slug: 'growth-marketing',
        title: "Growth Marketing & Funnel Strategy",
        name: "Growth Marketing & Funnel Strategy",
        description: "Design and execute data-driven growth strategies focused on lead generation and brand visibility.",
        image: serviceGrowth,
        category: 'business',
        features: [
            "Full-Funnel Optimization",
            "Paid Acquisition Strategy (Ads)",
            "Conversion Rate Optimization (CRO)",
            "Content Marketing Playbooks",
            "Analytics & Attribution Modeling"
        ],
        details: "Growth isn't guessing. It's a scientific process of testing, measuring, and scaling. We build predictable revenue engines powered by data.",
        isHighlight: true,
        link: "/services/growth-marketing"
    },

    // Standard Services (From old servicesData.js)
    {
        name: "Business Operations",
        slug: "business-operations",
        category: "business",
        description: "Optimize and streamline your business processes for maximum efficiency and growth. We analyze your current workflows to identify bottlenecks and implement scalable solutions.",
        features: ["Process Optimization", "Workflow Analysis", "Efficiency Audits", "Scalability Planning"]
    },
    {
        name: "CRM Automation",
        slug: "crm-automation",
        category: "tech",
        description: "Automate customer relationship management for enhanced engagement and retention. We build custom flows that nurture leads and keep your existing clients happy without manual effort.",
        features: ["Lead Nurturing Flows", "Customer Retention", "Automated Follow-ups", "Pipeline Management"]
    },
    {
        name: "Accuracy Verification",
        slug: "accuracy-verification",
        category: "business",
        description: "99.9% accuracy guarantee with quality control, data validation, and compliance verification systems.",
        features: ["Quality Control Systems", "Data Validation", "Compliance Checks", "Error Reduction"]
    },
    {
        name: "Ecommerce Solutions",
        slug: "ecommerce-solutions",
        category: "tech",
        description: "Shopify, WooCommerce, Magento full-store builds with payment, inventory & marketing integration.",
        features: ["Store Development", "Payment Gateway Integration", "Inventory Management", "Marketing Setup"]
    },
    {
        name: "Account Management",
        slug: "account-management",
        category: "business",
        description: "Dedicated success managers for long-term growth and customer retention.",
        features: ["Client Success Strategy", "Retention Programs", "Growth Planning", "Relationship Building"]
    },
    {
        name: "Automated Workflow",
        slug: "automated-workflow",
        category: "tech",
        description: "Zapier, Make.com, n8n integration to eliminate manual tasks forever.",
        features: ["Cross-Platform Integration", "Task Automation", "Custom Scripts", "Workflow Audits"]
    },
    {
        name: "Project Management",
        slug: "project-management",
        category: "business",
        description: "Asana, ClickUp, Jira structured delivery with full transparency and reporting.",
        features: ["Agile Methodologies", "Resource Allocation", "Timeline Tracking", "Transparent Reporting"]
    },
    {
        name: "Program Management",
        slug: "program-management",
        category: "business",
        description: "Multi-project alignment with business strategy and KPIs.",
        features: ["Strategic Alignment", "KPI Tracking", "Cross-Functional Leadership", "Risk Management"]
    },
    {
        name: "Administrative Support",
        slug: "administrative-support",
        category: "business",
        description: "Virtual assistants, scheduling, inbox zero, and executive operations support.",
        features: ["Calendar Management", "Email Handling", "Travel Coordination", "Document Preparation"]
    },
    {
        name: "HubSpot CRM",
        slug: "hubspot-crm",
        category: "tech",
        description: "End-to-end HubSpot implementation, automation & training.",
        features: ["CRM Setup", "Team Training", "Sales Automation", "Marketing Hub Config"]
    },
    {
        name: "Email Marketing",
        slug: "email-marketing",
        category: "tech",
        description: "Klaviyo flows, segmentation, deliverability, and A/B testing.",
        features: ["Campaign Management", "List Segmentation", "Deliverability Optimization", "A/B Testing"]
    },
    {
        name: "Google Workspace",
        slug: "google-workspace",
        category: "tech",
        description: "Migration, security, shared drives, and admin training.",
        features: ["Email Migration", "Security Audits", "Drive Organization", "Admin Training"]
    },
    {
        name: "Data Migration",
        slug: "data-migration",
        category: "tech",
        description: "Zero-downtime transfers with full validation and integrity checks.",
        features: ["Seamless Transfer", "Data Integrity", "Validation Testing", "Legacy System Export"]
    },
    {
        name: "Data Analysis",
        slug: "data-analysis",
        category: "tech",
        description: "Dashboards, KPIs, and forecasting in Looker, Power BI, and Google Sheets.",
        features: ["Custom Dashboards", "KPI Visualization", "Trend Forecasting", "Data Cleaning"]
    },
    {
        name: "AI Solutions",
        slug: "ai-solutions",
        category: "tech",
        description: "ChatGPT agents, predictive analytics, and automation bots.",
        features: ["Custom AI Agents", "Predictive Models", "Chatbot Development", "Process Automation"]
    },
    {
        name: "Cloud Solutions",
        slug: "cloud-solutions",
        category: "tech",
        description: "AWS, GCP, Azure architecture, migration, and cost control.",
        features: ["Cloud Architecture", "Migration Strategy", "Cost Optimization", "Security Best Practices"]
    },
    {
        name: "Cybersecurity",
        slug: "cybersecurity",
        category: "tech",
        description: "Pen testing, SOC 2, GDPR compliance, and continuous monitoring.",
        features: ["Vulnerability Assessment", "Compliance Audits", "Threat Monitoring", "Security Policies"]
    },
    {
        name: "UI/UX Design",
        slug: "ui-ux-design",
        category: "tech",
        description: "Figma, user research, prototyping, and design systems.",
        features: ["User Research", "Wireframing", "High-Fidelity Prototyping", "Design System Creation"]
    },
    {
        name: "Web Development",
        slug: "web-development",
        category: "tech",
        description: "Next.js, React, Node.js — fast, scalable, and modern applications.",
        features: ["Full-Stack Development", "Performance Optimization", "SEO Best Practices", "Scalable Architecture"]
    },
    {
        name: "DevOps & CI/CD",
        slug: "devops-cicd",
        category: "tech",
        description: "GitHub Actions, Docker, Kubernetes, and Terraform implementation.",
        features: ["Pipeline Automation", "Containerization", "Infrastructure as Code", "Deployment Strategy"]
    },
    {
        name: "SaaS Development",
        slug: "saas-development",
        category: "tech",
        description: "Subscription platforms, billing, multi-tenancy architecture.",
        features: ["Multi-Tenant Architecture", "Subscription Billing", "User Management", "API Development"]
    },
    {
        name: "Staff Augmentation",
        slug: "staff-augmentation",
        category: "business",
        description: "Vetted developers, designers, and PMs ready to join your team in 48h.",
        features: ["Talent Matching", "Rapid Onboarding", "Skill Verification", "Flexible Scaling"]
    }
];
