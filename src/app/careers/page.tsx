"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, Heart, Coffee, Zap, Shield, Sparkles, Mail, Briefcase, Code, CheckCircle2, ArrowRight, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { CONTACT } from "@/lib/contact-info";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

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
      {/* ── HERO ── */}
      <section className="bg-hero border-b border-border relative overflow-hidden">
        {/* bg orb */}
        <div className="absolute -top-20 right-0 w-[400px] h-[400px] rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, oklch(0.374 0.24 272 / 0.5), transparent 70%)" }} />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 text-center">
          <Reveal><Eyebrow>Careers at CodeSwipe</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-3xl sm:text-5xl md:text-6xl font-display font-bold leading-tight tracking-tight max-w-4xl mx-auto">
              Build Your Career with{" "}
              <span className="text-gradient">CodeSwipe IT Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-base md:text-lg leading-relaxed">
              We're hiring passionate developers, designers, and problem solvers. Explore our open positions and send your resume directly to join our team!
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand">
                <a href="#openings">View Open Positions <ArrowRight className="h-4 w-4" /></a>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a href={`mailto:${CONTACT.email}?subject=Job+Application`}>
                  <Mail className="h-4 w-4" /> Send Resume
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Reveal><Eyebrow>Why Join Us</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Work. Learn. <span className="text-gradient">Grow Together.</span>
            </h2>
          </Reveal>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <Card className="card-3d h-full border-border shadow-card hover:border-primary/30 hover:shadow-brand transition-all group">
                  <CardHeader>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/50 text-primary group-hover:from-primary group-hover:to-primary-glow group-hover:text-white transition-all shadow-sm">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="mt-4 font-display text-base">{p.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{p.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ── OPEN POSITIONS ── */}
      <section id="openings" className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Reveal><Eyebrow>Current Openings</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Open Technical <span className="text-gradient">Positions</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-muted-foreground text-sm">Select a role below to view required skills and apply via email.</p>
          </Reveal>
        </div>

        <div className="space-y-3">
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.04}>
              <motion.div whileHover={{ scale: open === i ? 1 : 1.005 }}>
                <Card className={`border-border shadow-card overflow-hidden transition-all duration-300 ${open === i ? "border-primary/40 shadow-brand" : "hover:border-primary/20"}`}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="hidden sm:inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-accent/50 text-primary mt-0.5">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-base md:text-lg text-foreground">{j.role}</h3>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5">
                          <Badge variant="outline" className="text-[10px] text-primary border-primary/30 bg-primary/5">{j.type}</Badge>
                          <span className="text-xs text-muted-foreground">Exp: {j.exp}</span>
                        </div>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: open === i ? 180 : 0 }} transition={{ duration: 0.25 }} className="text-primary shrink-0">
                      <ChevronDown className="h-5 w-5" />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                      >
                        <div className="px-5 sm:px-6 py-5 bg-muted/20">
                          <p className="text-sm text-muted-foreground leading-relaxed">{j.desc}</p>

                          <div className="mt-4">
                            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2.5 flex items-center gap-1.5">
                              <Code className="h-3.5 w-3.5 text-primary" /> Key Skills & Tech Stack
                            </div>
                            <div className="flex flex-wrap gap-2">
                              {j.skills.map((sk) => (
                                <Badge key={sk} variant="outline" className="text-xs rounded-full border-border bg-background hover:border-primary/40 transition-colors">
                                  {sk}
                                </Badge>
                              ))}
                            </div>
                          </div>

                          <div className="mt-6 pt-4 border-t border-border/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
                              <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Apply by emailing your resume directly
                            </span>
                            <Button asChild size="sm" className="rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand text-xs">
                              <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Application for ${j.role}`)}&body=${encodeURIComponent(`Hi CodeSwipe Hiring Team,\n\nI would like to apply for the position of ${j.role}.\n\nPlease find my resume attached.\n\nName:\nPhone:\nPortfolio / GitHub:\n\nThank you!`)}`}>
                                <Mail className="h-3.5 w-3.5" /> Apply for {j.role}
                              </a>
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── HOW TO APPLY ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <Card className="rounded-3xl border-border bg-gradient-to-br from-accent/40 via-background to-secondary/40 shadow-card overflow-hidden">
          <CardContent className="p-8 md:p-12 grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <Eyebrow>Direct Email Application</Eyebrow>
              <h2 className="mt-4 text-2xl md:text-3xl font-display font-semibold">
                Don't see your role?{" "}
                <span className="text-gradient">Email us anyway!</span>
              </h2>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                We're always looking for exceptional talent. If you're passionate about development, design, or eCommerce — send your CV over!
              </p>
            </div>
            <Card className="border-border shadow-card">
              <CardContent className="p-6 flex flex-col items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary-glow text-white shadow-brand">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display font-semibold">Send Resume via Email</h3>
                  <p className="text-xs text-muted-foreground mt-1">Include your resume, portfolio link, and expected CTC.</p>
                </div>
                <a href={`mailto:${CONTACT.email}?subject=${encodeURIComponent("Job Application - General Inquiry")}`}
                  className="text-lg font-bold text-primary hover:underline break-all">
                  {CONTACT.email}
                </a>
                <Badge variant="outline" className="text-xs rounded-full">
                  📞 WhatsApp: <strong className="ml-1 text-foreground">+91 72650 25017</strong>
                </Badge>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </section>
    </PageShell>
  );
}
