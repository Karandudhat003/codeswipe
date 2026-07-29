"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { ExternalLink, Layers, Sparkles, Smartphone, Globe, Brain } from "lucide-react";

const CATEGORIES = ["All", "Web Applications", "Mobile Applications", "UI/UX Design", "AI Systems"] as const;
type Category = (typeof CATEGORIES)[number];

const projects = [
  {
    id: 1,
    title: "Enterprise SaaS Analytics Dashboard",
    category: "Web Applications" as const,
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Chart.js"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    desc: "Real-time analytics and revenue tracking platform built for modern SaaS businesses.",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    title: "FinTech Banking & Payments Platform",
    category: "Web Applications" as const,
    tech: ["React.js", "Node.js", "PostgreSQL", "Stripe"],
    img: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=900&q=80",
    desc: "Secure multi-currency wallet and automated payout dashboard with bank-grade encryption.",
    aspect: "aspect-square",
  },
  {
    id: 3,
    title: "HealthTech Telemedicine App",
    category: "Mobile Applications" as const,
    tech: ["Flutter", "Dart", "WebRTC", "Firebase"],
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=900&q=80",
    desc: "HIPAA-compliant video consultation and prescription booking app for doctors and patients.",
    aspect: "aspect-[3/4]",
  },
  {
    id: 4,
    title: "AI Document Intelligence & RAG Pipeline",
    category: "AI Systems" as const,
    tech: ["Python", "LangChain", "OpenAI", "Pinecone"],
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80",
    desc: "Enterprise document parsing and semantic search AI model trained on PDF contracts.",
    aspect: "aspect-square",
  },
  {
    id: 5,
    title: "D2C Luxury E-Commerce Portal",
    category: "Web Applications" as const,
    tech: ["Shopify Liquid", "React", "GraphQL", "Tailwind"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    desc: "Headless Shopify store with sub-second page loads and custom 3D product previews.",
    aspect: "aspect-[4/3]",
  },
  {
    id: 6,
    title: "Fitness & Wellness Companion App",
    category: "Mobile Applications" as const,
    tech: ["React Native", "TypeScript", "Redux Toolkit"],
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    desc: "Cross-platform workout tracker with Bluetooth heart-rate sensor integration.",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    title: "Crypto & Web3 Portfolio Tracker",
    category: "UI/UX Design" as const,
    tech: ["Figma", "Design System", "Prototyping"],
    img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=900&q=80",
    desc: "Neomorphic UI design system and interactive prototype for crypto asset management.",
    aspect: "aspect-square",
  },
  {
    id: 8,
    title: "AI Voice Assistant & Transcriber",
    category: "AI Systems" as const,
    tech: ["Whisper AI", "Python", "FastAPI", "React"],
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    desc: "Real-time multilingual voice transcription and automatic meeting summary generator.",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    title: "SaaS Design System & Component Library",
    category: "UI/UX Design" as const,
    tech: ["Figma", "Storybook", "Tailwind Tokens"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    desc: "Comprehensive accessible UI kit with 200+ micro-animated component variants.",
    aspect: "aspect-[3/4]",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <Reveal>
            <Eyebrow>Our Showcase</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight">
              Products We Shipped. <span className="text-gradient">Outcomes We Delivered.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg">
              Explore our portfolio of web applications, mobile apps, AI solutions, and UI/UX design systems built for global clients.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-5 py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-brand text-white border-transparent shadow-brand"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Gallery */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-brand hover:border-primary/40 transition-all duration-300 flex flex-col"
              >
                <div className={`relative overflow-hidden ${p.aspect}`}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.img}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-black/60 backdrop-blur-md px-3 py-1 text-[11px] font-medium text-white border border-white/20">
                      {p.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition">{p.title}</h3>
                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{p.desc}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-border/60 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tech.map((t) => (
                        <span key={t} className="rounded-full bg-accent/60 px-2.5 py-0.5 text-[10px] font-medium text-primary">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </PageShell>
  );
}
