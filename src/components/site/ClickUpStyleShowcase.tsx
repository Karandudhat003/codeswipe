"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2, Smartphone, Cpu, Palette, ShoppingBag, Layers, ShieldCheck, Zap,
  CheckCircle2, XCircle, Sparkles, ArrowRight, Check, Bot, Terminal, Server,
  Database, Flame, Lock, Globe, HeartPulse, GraduationCap, Landmark, ShoppingCart,
  Building, Truck, Rocket, Users, Award, Play, ChevronRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// ─── 1. CLICKUP-STYLE WORKFLOW & SERVICE TABS ──────────────────────────────────
const SERVICES_DATA = [
  {
    id: "web",
    title: "Web Apps & Platforms",
    icon: Code2,
    badge: "Next.js 15 & React 19",
    description: "Ultra-fast, SEO-optimized web applications with sub-100ms load times, server-side rendering, and responsive UI.",
    highlights: [
      "App Router & Server Actions",
      "TailwindCSS & Shadcn UI design systems",
      "Real-time Websockets & API integrations",
      "SEO & Core Web Vitals score 98+"
    ],
    metrics: [
      { label: "Performance", val: "99/100" },
      { label: "Avg Load Time", val: "180ms" },
      { label: "SEO Index", val: "100%" }
    ],
    gradient: "from-blue-600 to-indigo-600",
    previewType: "code",
    codeTitle: "const webApp = new CodeSwipeApp();",
    codeLines: [
      { key: "framework", val: '"Next.js 15 + React 19 + TypeScript"' },
      { key: "rendering", val: '"Server-Side Rendering (SSR) & Suspense"' },
      { key: "database", val: '"PostgreSQL + Prisma ORM + Edge Caching"' },
      { key: "performance", val: '"< 100ms Global Edge Latency"' }
    ]
  },
  {
    id: "mobile",
    title: "Mobile App Engineering",
    icon: Smartphone,
    badge: "Flutter & React Native",
    description: "Cross-platform mobile applications for iOS & Android with native smooth 120fps performance and offline syncing.",
    highlights: [
      "Single codebase for iOS & Android",
      "Native device API access (Camera, Biometrics, GPS)",
      "Push notifications & deep linking",
      "App Store & Play Store deployment"
    ],
    metrics: [
      { label: "FPS Rate", val: "120 FPS" },
      { label: "Crash Free", val: "99.9%" },
      { label: "Platforms", val: "iOS + Android" }
    ],
    gradient: "from-indigo-600 to-purple-600",
    previewType: "mobile",
    codeTitle: "const mobileApp = new CompileNative();",
    codeLines: [
      { key: "frameworks", val: '["Flutter 3.24", "React Native"]' },
      { key: "targetOS", val: '["iOS (Swift)", "Android (Kotlin)"]' },
      { key: "stateManagement", val: '"Zustand & BLoC Pattern"' },
      { key: "performance", val: '"GPU Accelerated 120 FPS Rendering"' }
    ]
  },
  {
    id: "ai",
    title: "AI & Automation Engine",
    icon: Cpu,
    badge: "LLM, RAG & Agents",
    description: "Custom AI agents, LLM integrations, document intelligence, and automated workflow pipelines for modern business.",
    highlights: [
      "OpenAI, Claude & Llama 3 fine-tuning",
      "Vector databases (Pinecone, Qdrant)",
      "Autonomous AI customer service bots",
      "Workflow automation with Zapier/n8n"
    ],
    metrics: [
      { label: "Efficiency Boost", val: "10x" },
      { label: "Accuracy Rate", val: "99.4%" },
      { label: "Response Time", val: "< 1.2s" }
    ],
    gradient: "from-purple-600 to-pink-600",
    previewType: "ai",
    codeTitle: "const aiEngine = new CodeSwipeAI();",
    codeLines: [
      { key: "models", val: '["GPT-4o", "Claude 3.5", "Llama 3"]' },
      { key: "pipeline", val: '"Retrieval-Augmented Generation (RAG)"' },
      { key: "vectorDB", val: '"Pinecone Vector DB Indexing"' },
      { key: "automation", val: '"Autonomous LangChain Workflow Agents"' }
    ]
  },
  {
    id: "design",
    title: "UI/UX Product Design",
    icon: Palette,
    badge: "Figma Design Systems",
    description: "User-centered design systems, interactive prototypes, and micro-animations designed to maximize conversion rates.",
    highlights: [
      "Figma design systems & UI kits",
      "Interactive high-fidelity prototypes",
      "User testing & wireframing",
      "WCAG 2.1 Accessibility compliance"
    ],
    metrics: [
      { label: "Conversion Lift", val: "+42%" },
      { label: "User Delight", val: "4.9/5" },
      { label: "Design Components", val: "200+" }
    ],
    gradient: "from-pink-600 to-rose-600",
    previewType: "design",
    codeTitle: "const uiDesign = new FigmaSystem();",
    codeLines: [
      { key: "deliverable", val: '"High-Fidelity Figma Component Tokens"' },
      { key: "accessibility", val: '"WCAG 2.1 AA Compliant Checklists"' },
      { key: "interactions", val: '"Framer Motion Micro-animations"' },
      { key: "handoff", val: '"Tailwind CSS Theme Token Generation"' }
    ]
  },
  {
    id: "ecommerce",
    title: "Shopify & eCommerce",
    icon: ShoppingBag,
    badge: "Headless eCommerce",
    description: "High-converting D2C stores and marketplace platforms built with custom Liquid, Headless Shopify, or WooCommerce.",
    highlights: [
      "Custom theme development & optimization",
      "Payment gateway integration (Stripe, Razorpay)",
      "Inventory & ERP synchronization",
      "One-click checkout & cart upsells"
    ],
    metrics: [
      { label: "Checkout Speed", val: "2.1s" },
      { label: "Sales Increase", val: "+35%" },
      { label: "Uptime SLA", val: "99.99%" }
    ],
    gradient: "from-emerald-600 to-teal-600",
    previewType: "ecommerce",
    codeTitle: "const store = new HeadlessStore();",
    codeLines: [
      { key: "platform", val: '"Shopify Custom / Shopify Hydrogen"' },
      { key: "api", val: '"Shopify Storefront GraphQL APIs"' },
      { key: "gateways", val: '["Stripe Checkout", "Apple Pay / Google Pay"]' },
      { key: "checkoutSLA", val: '"Sub-2.0 Second Loading Checkouts"' }
    ]
  }
];

export function ClickUpServiceTabs() {
  const [activeTab, setActiveTab] = useState(SERVICES_DATA[0].id);
  const currentService = SERVICES_DATA.find((s) => s.id === activeTab) || SERVICES_DATA[0];

  return (
    <section className="py-20 bg-slate-50/70 border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-100/80 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-4 border border-indigo-200/60">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Foundation For Every Digital Product</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 font-display">
            A better way to build software. <br className="hidden sm:inline" />
            <span className="text-gradient">
              All services under one roof.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Click through our service pillars to explore how we transform ideas into market-ready digital products.
          </p>
        </div>

        {/* Tab Buttons (ClickUp style pill switcher) */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {SERVICES_DATA.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            return (
              <button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-sm font-medium transition-all duration-300 whitespace-nowrap shrink-0 ${
                  isActive
                    ? "bg-slate-900 text-white shadow-lg shadow-slate-900/20 scale-[1.02]"
                    : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200/80 shadow-sm"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-indigo-400" : "text-slate-500"}`} />
                <span>{service.title}</span>
                {isActive && (
                  <motion.span
                    layoutId="activePill"
                    className="w-1.5 h-1.5 rounded-full bg-indigo-400"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Content Showcase Box (Bento Card Layout) */}
        <div className="mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentService.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-200/40 overflow-hidden"
            >
              {/* Left Column: Info & Details */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold border border-indigo-100">
                  <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
                  {currentService.badge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-display">
                  {currentService.title}
                </h3>

                <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                  {currentService.description}
                </p>

                {/* Highlights List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentService.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5">
                      <div className="mt-0.5 w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 border border-emerald-200">
                        <Check className="w-3 h-3 stroke-[3]" />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-slate-700">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Metrics Badges */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-100">
                  {currentService.metrics.map((m, i) => (
                    <div key={i} className="bg-slate-50 p-3 rounded-2xl border border-slate-100">
                      <div className="text-lg sm:text-xl font-bold text-slate-900 font-display">{m.val}</div>
                      <div className="text-xs text-slate-500 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>

                <div className="pt-2 flex items-center gap-4">
                  <Link
                    href={`/services#${currentService.id}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors shadow-md shadow-slate-900/10"
                  >
                    <span>Explore Solution</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="/quote"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-50 text-indigo-700 font-medium text-sm hover:bg-indigo-100 transition-colors border border-indigo-200/80"
                  >
                    <span>Get Custom Estimate</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Visual Interactive Graphic Mockup */}
              <div className="lg:col-span-6 bg-slate-950 rounded-2xl p-6 text-white border border-slate-800 shadow-2xl relative overflow-hidden min-h-[340px] flex flex-col justify-between">
                {/* Background ambient light */}
                <div className={`absolute top-0 right-0 w-64 h-64 rounded-full bg-gradient-to-br ${currentService.gradient} opacity-20 blur-3xl pointer-events-none`} />

                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4 relative z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-xs font-mono text-slate-400">codeswipe://{currentService.id}-engine.v2</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] font-mono border border-emerald-500/20">
                    LIVE OPERATIONAL
                  </span>
                </div>

                 {/* Live Code / UI Mock Content */}
                <div className="space-y-3 font-mono text-xs text-slate-300 relative z-10 my-auto">
                  <div className="flex items-center gap-2 text-indigo-400 font-semibold">
                    <Terminal className="w-4 h-4" />
                    <span>{currentService.codeTitle}</span>
                  </div>
                  <div className="bg-slate-900/90 p-4 rounded-xl border border-slate-800/90 space-y-2">
                    <p><span className="text-purple-400">await</span> project.<span className="text-blue-400">configureArchitecture</span>(&#123;</p>
                    {currentService.codeLines.map((line, idx) => (
                      <p key={idx} className="pl-4">
                        <span className="text-emerald-400">{line.key}</span>: <span className="text-amber-400">{line.val}</span>,
                      </p>
                    ))}
                    <p>&#125;);</p>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-2">
                    <span className="flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5 text-amber-400 fill-amber-400" /> Automated CI/CD Deployed
                    </span>
                    <span className="text-emerald-400 font-bold">100% Tests Passed</span>
                  </div>
                </div>

                {/* Bottom Floating Stats */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs relative z-10">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Server className="w-4 h-4 text-indigo-400" />
                    <span>Global CDN Edge Active</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-indigo-300 font-medium">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Powered by CodeSwipe</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

// ─── 2. CLICKUP-STYLE DARK AI & HIGH-TECH SECTION ("BRAIN / THE BEST AI") ────
export function ClickUpDarkAIShowcase() {
  const [activeAiTab, setActiveAiTab] = useState(0);

  const aiFeatures = [
    {
      title: "Automated Code Generation & Audit",
      desc: "Our AI engine analyzes your code repo for vulnerabilities, performance bottlenecks, and automatically suggests production-grade fixes.",
      codeSnippet: `// CodeSwipe AI Security Guard\nconst securityResult = await codeSwipeAI.audit({\n  repo: "github/company/app",\n  rules: ["OWASP-TOP-10", "PCI-DSS"]\n});\nconsole.log(securityResult.passed); // true`,
      metric: "99.8% Code Cleanliness"
    },
    {
      title: "Smart AI Chatbots & Customer Agents",
      desc: "Deploy custom trained AI agents on your data that answer customer queries in 50+ languages with 99.4% accuracy.",
      codeSnippet: `// AI Customer Support Agent\nconst agent = new CodeSwipeAgent({\n  knowledgeBase: "documents/kb.pdf",\n  tone: "Professional & Friendly"\n});\nagent.listenAndRespond();`,
      metric: "< 800ms Response Time"
    },
    {
      title: "Predictive Analytics & Workflow Automation",
      desc: "Automate manual business tasks, invoice parsing, data extraction, and CRM syncing with custom ML pipelines.",
      codeSnippet: `// Workflow Automation Pipeline\nawait codeSwipeAI.pipeline({\n  trigger: "new_lead_submitted",\n  actions: ["enrich_data", "assign_rep", "send_whatsapp"]\n});`,
      metric: "10x Operational Speed"
    }
  ];

  return (
    <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
      {/* Background Gradient Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-r from-indigo-900/40 via-purple-900/30 to-pink-900/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-blue-900/30 blur-[100px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-300 text-xs font-semibold tracking-wider uppercase mb-4 border border-purple-500/30 backdrop-blur-md">
            <Bot className="w-4 h-4 text-purple-400" />
            <span>CodeSwipe AI Engine</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight font-display text-white">
            The best AI is your AI. <br />
            <span className="text-gradient">
              Built directly into your stack.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed">
            We build intelligent AI solutions tailored specifically to your business data, workflows, and growth targets.
          </p>
        </div>

        {/* 3 Bento Cards Grid (ClickUp AI Section style) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feat, idx) => (
            <div
              key={idx}
              onClick={() => setActiveAiTab(idx)}
              className={`cursor-pointer rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between border backdrop-blur-xl relative overflow-hidden group ${
                activeAiTab === idx
                  ? "bg-slate-900/90 border-purple-500/60 shadow-2xl shadow-purple-900/30 scale-[1.02]"
                  : "bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/60 hover:border-slate-700"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    {idx === 0 ? <Code2 className="w-5 h-5" /> : idx === 1 ? <Bot className="w-5 h-5" /> : <Zap className="w-5 h-5" />}
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-purple-950/80 text-purple-300 border border-purple-800/60">
                    {feat.metric}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3 font-display group-hover:text-purple-300 transition-colors">
                  {feat.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed mb-6">
                  {feat.desc}
                </p>
              </div>

              {/* Mini Code Box inside card */}
              <div className="bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono text-[11px] text-slate-300 space-y-1 overflow-x-auto no-scrollbar">
                <pre className="text-purple-300 whitespace-pre-wrap">{feat.codeSnippet}</pre>
              </div>
            </div>
          ))}
        </div>

        {/* Live Simulator Banner */}
        <div className="bg-gradient-to-r from-purple-950/60 via-slate-900/90 to-indigo-950/60 p-8 sm:p-10 rounded-3xl border border-purple-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-bold text-white font-display">Ready to integrate AI into your business platform?</h4>
            <p className="text-sm text-slate-300">Book a 30-minute AI strategy call with our principal AI engineers.</p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold text-sm hover:from-purple-500 hover:to-indigo-500 transition-all shadow-lg shadow-purple-600/30 whitespace-nowrap"
          >
            <Sparkles className="w-4 h-4" />
            <span>Schedule AI Audit</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── 3. CLICKUP-STYLE COMPARISON SECTION ("A BETTER WAY TO WORK") ──────────────
export function ClickUpComparison() {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-indigo-600 uppercase">Comparison</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mt-2">
            Why founders choose <span className="text-indigo-600">CodeSwipe</span>
          </h2>
          <p className="mt-3 text-slate-600">See how we stack up against traditional agencies and freelance hiring.</p>
        </div>

        {/* Side by Side Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Agencies / Freelancers (The Bad Way) */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200/80 space-y-6">
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4">
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-600 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-lg">Traditional IT Agencies</h3>
                <p className="text-xs text-slate-500">Slow, expensive, opaque communication</p>
              </div>
            </div>

            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>6+ months to deliver basic first version</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Hidden fees & cost overruns for every minor change</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Outsourced junior developers with legacy codebases</span>
              </li>
              <li className="flex items-start gap-3">
                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                <span>Radio silence for weeks with zero demo builds</span>
              </li>
            </ul>
          </div>

          {/* CodeSwipe Advantage (The ClickUp/Modern Way) */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 border border-indigo-500/50 shadow-2xl space-y-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between border-b border-slate-800 pb-4 relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center font-bold shadow-lg shadow-indigo-600/40">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg font-display">The CodeSwipe Model</h3>
                  <p className="text-xs text-indigo-300">Fast, transparent, modern engineering</p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-semibold border border-indigo-500/30">
                RECOMMENDED
              </span>
            </div>

            <ul className="space-y-4 text-sm text-slate-200 relative z-10">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-medium">Weekly demo builds & 2-week agile sprint releases</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-medium">Transparent fixed pricing — no surprise hourly charges</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-medium">Senior in-house engineers using Next.js 15, React & AI</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
                <span className="font-medium">Dedicated Slack/WhatsApp channel with daily updates</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── 4. CLICKUP-STYLE FILTERABLE INDUSTRY BENTO GRID ─────────────────────────
const INDUSTRY_CATEGORIES = ["All", "SaaS & AI", "Healthcare", "FinTech", "E-Commerce", "Education", "Logistics"];

const FILTERABLE_INDUSTRIES = [
  { name: "Healthcare & MedTech", cat: "Healthcare", icon: HeartPulse, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", tag: "HIPAA Compliant", desc: "Telemedicine apps, EHR portals & patient management." },
  { name: "SaaS & AI Platforms", cat: "SaaS & AI", icon: Rocket, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", tag: "Sub-100ms Latency", desc: "Multi-tenant platforms, billing engine & AI agents." },
  { name: "Finance & FinTech", cat: "FinTech", icon: Landmark, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80", tag: "PCI-DSS Level 1", desc: "Payment gateways, wallets & trading dashboards." },
  { name: "E-commerce & D2C", cat: "E-Commerce", icon: ShoppingCart, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", tag: "Headless Shopify", desc: "High-converting online stores & cart checkout." },
  { name: "EdTech & Learning", cat: "Education", icon: GraduationCap, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", tag: "LMS Certified", desc: "Student portals, video courses & interactive quizzes." },
  { name: "Logistics & Fleet", cat: "Logistics", icon: Truck, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", tag: "GPS Realtime", desc: "Route optimization, driver apps & live tracking." }
];

export function ClickUpIndustryFilter() {
  const [selectedCat, setSelectedCat] = useState("All");

  const filtered = selectedCat === "All"
    ? FILTERABLE_INDUSTRIES
    : FILTERABLE_INDUSTRIES.filter((i) => i.cat === selectedCat);

  return (
    <section className="py-20 bg-slate-50/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600">Customized Solutions</span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 font-display mt-2">
            Tailored for your industry
          </h2>
          <p className="mt-3 text-slate-600">Select an industry to explore our targeted expertise.</p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 flex-wrap mt-8">
            {INDUSTRY_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  selectedCat === cat
                    ? "bg-indigo-600 text-white shadow-md shadow-indigo-600/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-card hover:shadow-xl hover:border-indigo-400/50 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Card Header Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-slate-900 text-xs font-semibold border border-white/40 shadow-sm">
                        {item.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-indigo-600/90 flex items-center justify-center text-white backdrop-blur-md">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-bold text-base font-display">{item.name}</h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-600 group-hover:text-indigo-700 transition-colors"
                      >
                        <span>Build For {item.cat}</span>
                        <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
