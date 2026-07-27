// Central content catalogue for CodeSwipe IT Solutions.

export type ServiceEntry = {
  slug: string;
  emoji: string;
  title: string;
  tagline: string;
  items: string[];
};

export const SERVICE_CATALOG: ServiceEntry[] = [
  {
    slug: "custom-website-development",
    emoji: "🌐",
    title: "Custom Website Development",
    tagline: "Build fast, responsive and SEO-friendly websites that represent your business professionally.",
    items: ["Business Websites", "Corporate Websites", "Portfolio Websites", "Landing Pages", "Educational Websites", "Healthcare Websites", "Real Estate Websites", "Travel Websites", "Hotel Booking Websites", "News Portals", "Custom CMS Development"],
  },
  {
    slug: "react-development",
    emoji: "⚛",
    title: "React.js Development",
    tagline: "Build lightning-fast interactive web applications using React.js.",
    items: ["React.js Development", "React Dashboards", "Admin Panels", "SPA Development", "API Integration", "React Optimization", "Migration to React", "Maintenance & Support"],
  },
  {
    slug: "nextjs-development",
    emoji: "▲",
    title: "Next.js Development",
    tagline: "Develop high-performance, SEO-friendly web applications.",
    items: ["Next.js Development", "SSR Applications", "SSG Websites", "App Router", "SEO Optimization", "Performance Optimization", "Authentication", "Middleware", "API Routes"],
  },
  {
    slug: "shopify-development",
    emoji: "🛒",
    title: "Shopify Development",
    tagline: "Launch beautiful and high-converting online stores.",
    items: ["Shopify Store Setup", "Theme Development", "Custom Shopify Design", "App Integration", "Shopify Migration", "Payment Gateway Integration", "Store Optimization", "Speed Optimization", "Shopify Maintenance"],
  },
  {
    slug: "woocommerce-development",
    emoji: "🛍",
    title: "WooCommerce Development",
    tagline: "Create flexible eCommerce stores using WordPress.",
    items: ["WooCommerce Setup", "Custom Theme Development", "Plugin Development", "Payment Integration", "Shipping Integration", "Product Management", "Store Optimization"],
  },
  {
    slug: "ui-ux-design",
    emoji: "🎨",
    title: "UI / UX Design",
    tagline: "Create modern, engaging and user-friendly interfaces.",
    items: ["Website Design", "Mobile App Design", "Dashboard Design", "Wireframes", "Prototypes", "Design Systems", "Figma Design", "Responsive Design"],
  },
  {
    slug: "mobile-app-development",
    emoji: "📱",
    title: "Mobile App Development",
    tagline: "Develop feature-rich mobile applications for React Native, Flutter, Android and iOS.",
    items: ["Business Apps", "eCommerce Apps", "Food Delivery Apps", "Booking Apps", "Social Apps", "React Native", "Flutter", "Android & iOS", "App Maintenance"],
  },
  {
    slug: "full-stack-development",
    emoji: "💻",
    title: "Full Stack Development",
    tagline: "Complete frontend and backend development services under one team.",
    items: ["React.js & Next.js", "TypeScript & JavaScript", "Tailwind CSS & Bootstrap", "Node.js & Express.js", "NestJS", "PHP & Laravel", "REST API", "GraphQL"],
  },
  {
    slug: "cloud-devops",
    emoji: "☁",
    title: "Cloud & DevOps",
    tagline: "Deploy scalable applications with modern cloud infrastructure.",
    items: ["AWS Deployment", "DigitalOcean", "Railway", "Vercel", "Netlify", "Docker", "CI/CD Pipelines", "VPS Configuration", "SSL Setup", "Domain Configuration"],
  },
  {
    slug: "ai-ml-solutions",
    emoji: "🤖",
    title: "AI & Machine Learning Solutions",
    tagline: "Build intelligent applications powered by AI.",
    items: ["AI Chatbots", "OpenAI Integration", "Gemini AI Integration", "Claude AI Integration", "AI Automation", "Voice AI", "OCR Solutions", "Document AI", "AI Assistants"],
  },
  {
    slug: "crm-erp-development",
    emoji: "📊",
    title: "CRM & ERP Development",
    tagline: "Automate business operations with custom software.",
    items: ["HR Management", "Employee Portal", "Sales CRM", "Lead Management", "Inventory Management", "Accounting", "Attendance", "Payroll", "Reports", "Analytics"],
  },
  {
    slug: "digital-marketing",
    emoji: "📈",
    title: "Digital Marketing",
    tagline: "Grow your online presence with result-driven marketing.",
    items: ["SEO", "Local SEO", "Technical SEO", "Google Ads", "Facebook Ads", "Instagram Marketing", "LinkedIn Marketing", "Email Marketing", "Content Marketing"],
  },
  {
    slug: "seo-services",
    emoji: "🔍",
    title: "SEO Services",
    tagline: "Increase your website ranking on Google.",
    items: ["On-Page SEO", "Off-Page SEO", "Technical SEO", "Keyword Research", "Website Audit", "Speed Optimization", "Schema Markup"],
  },
  {
    slug: "website-maintenance",
    emoji: "🔒",
    title: "Website Maintenance",
    tagline: "Keep your website secure, fast and always updated.",
    items: ["Bug Fixes", "Security Updates", "Backup Management", "Performance Optimization", "Server Monitoring", "Feature Enhancements", "Monthly Maintenance"],
  },
  {
    slug: "api-development",
    emoji: "🔗",
    title: "API Development & Integration",
    tagline: "Connect your systems with secure, well-documented APIs.",
    items: ["REST API", "GraphQL", "Third-Party API Integration", "Payment Gateway", "SMS API", "Email API", "WhatsApp API", "Social Login", "Authentication"],
  },
  {
    slug: "payment-gateway",
    emoji: "💳",
    title: "Payment Gateway Integration",
    tagline: "Secure payment solutions for your business.",
    items: ["Stripe", "Razorpay", "PayPal", "PayU", "PhonePe", "Google Pay", "Apple Pay"],
  },
  {
    slug: "cms-development",
    emoji: "📂",
    title: "CMS Development",
    tagline: "Manage website content with ease — no developer required.",
    items: ["WordPress", "Shopify", "Strapi", "Sanity", "Contentful", "Headless CMS"],
  },
  {
    slug: "saas-development",
    emoji: "🚀",
    title: "SaaS Product Development",
    tagline: "Launch scalable, multi-tenant SaaS platforms.",
    items: ["Subscription Management", "Multi-Tenant Architecture", "Authentication", "Billing", "Dashboard", "Reports", "Admin Panel", "User Management"],
  },
];

export const TECH_GROUPS: { group: string; tech: { name: string; slug?: string }[] }[] = [
  {
    group: "Frontend",
    tech: [
      { name: "React.js", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "Vue.js", slug: "vuedotjs" },
      { name: "Angular", slug: "angular" },
      { name: "HTML5", slug: "html5" },
      { name: "CSS3", slug: "css" },
      { name: "JavaScript", slug: "javascript" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Bootstrap", slug: "bootstrap" },
    ],
  },
  {
    group: "Backend",
    tech: [
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express.js", slug: "express" },
      { name: "NestJS", slug: "nestjs" },
      { name: "PHP", slug: "php" },
      { name: "Laravel", slug: "laravel" },
      { name: "Python", slug: "python" },
      { name: "Django", slug: "django" },
    ],
  },
  {
    group: "Database",
    tech: [
      { name: "MongoDB", slug: "mongodb" },
      { name: "MySQL", slug: "mysql" },
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "Firebase", slug: "firebase" },
      { name: "Supabase", slug: "supabase" },
    ],
  },
  {
    group: "Mobile",
    tech: [
      { name: "React Native", slug: "react" },
      { name: "Flutter", slug: "flutter" },
      { name: "Android", slug: "android" },
      { name: "iOS", slug: "apple" },
    ],
  },
  {
    group: "Cloud & DevOps",
    tech: [
      { name: "AWS" },
      { name: "Azure" },
      { name: "Google Cloud", slug: "googlecloud" },
      { name: "Vercel", slug: "vercel" },
      { name: "Netlify", slug: "netlify" },
      { name: "Railway", slug: "railway" },
      { name: "Docker", slug: "docker" },
    ],
  },
  {
    group: "CMS & eCommerce",
    tech: [
      { name: "WordPress", slug: "wordpress" },
      { name: "Shopify", slug: "shopify" },
      { name: "WooCommerce", slug: "woocommerce" },
      { name: "Magento" },
    ],
  },
  {
    group: "AI",
    tech: [
      { name: "OpenAI" },
      { name: "Gemini AI", slug: "googlegemini" },
      { name: "Claude AI", slug: "anthropic" },
      { name: "LangChain", slug: "langchain" },
      { name: "Pinecone" },
    ],
  },
];

export const MARQUEE_TECH = [
  "react", "nextdotjs", "typescript", "nodedotjs", "tailwindcss", "flutter",
  "shopify", "wordpress", "laravel", "python", "docker", "huggingface",
  "postgresql", "mongodb", "supabase", "openai", "figma", "stripe",
];

export const PROCESS_STEPS = [
  { n: "01", title: "Requirement Analysis", desc: "We map your goals, users, competitors and constraints before a single line of code." },
  { n: "02", title: "Planning & Strategy", desc: "Scope, architecture, tech stack, milestones and a transparent delivery roadmap." },
  { n: "03", title: "UI / UX Design", desc: "Wireframes, prototypes and a design system built for conversion." },
  { n: "04", title: "Development", desc: "Clean, modular and scalable code shipped in weekly sprints." },
  { n: "05", title: "Testing & QA", desc: "Functional, performance, security and cross-device testing before release." },
  { n: "06", title: "Deployment", desc: "Zero-downtime launch with CI/CD, monitoring and SSL configured." },
  { n: "07", title: "Support & Maintenance", desc: "Ongoing improvements, updates and dedicated post-launch support." },
];

export const INDUSTRIES = [
  "Healthcare", "Education", "Finance", "Real Estate", "Retail", "eCommerce",
  "Travel & Tourism", "Logistics", "Manufacturing", "Food & Restaurant",
  "Automotive", "SaaS", "Startups", "Enterprise", "Government", "Non-Profit",
];

export const WHY_CHOOSE_US = [
  "100% Custom Solutions",
  "Experienced Development Team",
  "Modern Technology Stack",
  "Mobile-First Design",
  "SEO-Friendly Development",
  "Fast Project Delivery",
  "Secure & Scalable Architecture",
  "Transparent Communication",
  "Dedicated Project Manager",
  "Affordable Pricing",
  "Long-Term Technical Support",
  "Global Client Support",
];
