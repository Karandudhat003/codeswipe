"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, Heart, Coffee, Zap, Shield, Sparkles, ChevronDown, Mail, Send, Briefcase, Code, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/contact-info";

const perks = [
  { icon: Globe, title: "Remote Collaboration", body: "Work from anywhere while collaborating on real-world projects across global timezones." },
  { icon: Heart, title: "Real Client Projects", body: "Build web apps, mobile apps, SaaS platforms and eCommerce stores used by thousands." },
  { icon: Coffee, title: "Career Growth", body: "Hands-on experience with modern frameworks, clean architecture and product development." },
  { icon: Zap, title: "Learning & Innovation", body: "Work with modern tech stacks (Next.js, React, Node.js, Flutter, Shopify, WordPress)." },
  { icon: Shield, title: "Ownership", body: "Take ownership of features, solve technical challenges, and influence product decisions." },
  { icon: Sparkles, title: "Flexible Environment", body: "Result-oriented workflow with flexible working hours and supportive team culture." },
];

const jobs = [
  {
    role: "Full-Stack Developer",
    type: "Full-Time / Contract",
    exp: "1-3 Years",
    skills: ["React.js", "Next.js", "Node.js", "MongoDB / PostgreSQL", "TypeScript", "REST / GraphQL"],
    desc: "We are looking for a skilled Full-Stack Developer to build scalable web applications and enterprise platforms. You will work on end-to-end features from database architecture to frontend UI.",
  },
  {
    role: "React.js / Next.js Developer",
    type: "Full-Time / Remote",
    exp: "1+ Years",
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Redux / Zustand", "Performance Optimization"],
    desc: "Join our frontend engineering team to craft responsive, pixel-perfect, and ultra-fast web applications. High attention to UI design, animations, and clean reusable code is required.",
  },
  {
    role: "Shopify Developer",
    type: "Full-Time / Remote",
    exp: "1+ Years",
    skills: ["Shopify Liquid", "Theme Customization", "Store Setup", "Shopify Apps / APIs", "JavaScript", "eCommerce"],
    desc: "Build custom Shopify themes, integrate third-party apps, optimize store checkout flows, and customize eCommerce stores for high-growth D2C brands.",
  },
  {
    role: "WordPress / WooCommerce Developer",
    type: "Full-Time / Remote",
    exp: "1+ Years",
    skills: ["WordPress", "PHP", "WooCommerce", "Custom Themes & Plugins", "Elementor", "Speed & Security"],
    desc: "Develop and maintain custom WordPress websites, WooCommerce portals, and custom PHP modules. Focus on high performance, SEO optimization, and security compliance.",
  },
  {
    role: "Mobile App Developer (Flutter / React Native)",
    type: "Full-Time / Remote",
    exp: "1+ Years",
    skills: ["Flutter", "React Native", "Dart", "iOS & Android", "REST APIs", "App Store / Play Store"],
    desc: "Ship production cross-platform mobile apps for Android and iOS. Experience with state management, offline storage, native APIs, and deployment pipelines.",
  },
  {
    role: "UI / UX Designer",
    type: "Full-Time / Remote",
    exp: "Freshers & Experienced",
    skills: ["Figma", "UI Design", "UX Research", "Wireframing", "Design Systems", "Mobile & Web Interfaces"],
    desc: "Craft intuitive, beautiful, and high-converting interfaces for web and mobile apps. Work directly with developers to ensure seamless design implementation.",
  },
];

export default function CareersPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center md:text-left">
          <Reveal><Eyebrow>Careers at CodeSwipe</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold max-w-4xl leading-tight">
              Build Your Career with <span className="text-gradient">CodeSwipe IT Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-3xl text-muted-foreground text-base md:text-lg leading-relaxed">
              We are constantly hiring passionate developers, designers, and problem solvers. Explore our open positions below and email your resume directly to join our team!
            </p>
          </Reveal>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <Reveal><Eyebrow>Why Join Us</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
            Work. Learn. <span className="text-gradient">Grow Together.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-6 shadow-card h-full">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Open Positions */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <Reveal><Eyebrow>Current Openings</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Open Technical <span className="text-gradient">Positions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-muted-foreground">Select a role below to view required skills and apply via email.</p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.04}>
              <div className="rounded-2xl border border-border bg-card shadow-card overflow-hidden hover:border-primary/40 transition">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-primary mt-1">
                      <Briefcase className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-lg md:text-xl text-foreground">{j.role}</h3>
                      <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs text-muted-foreground">
                        <span className="rounded-full bg-accent/60 px-2.5 py-0.5 font-medium text-primary">{j.type}</span>
                        <span>•</span>
                        <span>Experience: {j.exp}</span>
                      </div>
                    </div>
                  </div>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} className="text-primary shrink-0">
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="border-t border-border px-6 py-6 bg-muted/20"
                    >
                      <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                      
                      <div className="mt-4">
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2 flex items-center gap-1.5">
                          <Code className="h-3.5 w-3.5 text-primary" /> Key Skills & Tech Stack:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {j.skills.map((sk) => (
                            <span key={sk} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-foreground">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                          <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Apply by emailing your resume directly
                        </span>
                        <a
                          href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Application for ${j.role}`)}&body=${encodeURIComponent(`Hi CodeSwipe Hiring Team,\n\nI would like to apply for the position of ${j.role}.\n\nPlease find my resume attached.\n\nName:\nPhone:\nPortfolio / GitHub:\n\nThank you!`)}`}
                          className="inline-flex items-center gap-2 rounded-full bg-brand text-white text-xs font-semibold px-5 py-2.5 shadow-brand hover:opacity-90 transition"
                        >
                          <Mail className="h-3.5 w-3.5" /> Email Resume for {j.role}
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* How to Apply Section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent/50 via-background to-secondary/50 p-8 md:p-12 shadow-card grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <Eyebrow>Direct Email Application</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Don't see your exact role? <span className="text-gradient">Email us anyway!</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground leading-relaxed">
              We are always on the lookout for exceptional talent. If you are passionate about full-stack web development, mobile apps, UI design, or eCommerce — send your CV over!
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card flex flex-col items-start gap-4">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand text-white shadow-brand">
              <Mail className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg">Send Resume via Email</h3>
              <p className="text-xs text-muted-foreground mt-1">Include your resume, portfolio link, and expected CTC.</p>
            </div>
            <a
              href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Job Application - General Inquiry")}`}
              className="text-lg md:text-xl font-bold text-primary hover:underline break-all"
            >
              {CONTACT.email}
            </a>
            <span className="text-xs text-muted-foreground">
              📞 Or reach out via WhatsApp: <strong className="text-foreground">+91 72650 25017</strong>
            </span>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
