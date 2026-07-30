"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { Check, ArrowRight, ChevronRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { TechStackGrid, TechMarquee } from "@/components/site/TechIcons";
import { SERVICE_CATALOG, INDUSTRIES, PROCESS_STEPS } from "@/lib/site-content";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const faqs = [
  { q: "How long does it take to complete a project?", a: "The timeline depends on scope and complexity. A standard business website typically takes 4–8 weeks, while custom web applications, SaaS platforms or complex solutions may require several weeks or months. We share a clear roadmap and timeline before development begins." },
  { q: "Do you work with startups and enterprises?", a: "Yes. We partner with pre-seed founders and enterprise product teams alike — the engagement model, contracts and rituals adapt to your stage." },
  { q: "What technologies do you use?", a: "React, Next.js, TypeScript, React Native, Flutter, Node.js, NestJS, Laravel, Python, Postgres, MongoDB, Supabase, AWS, Vercel and Docker — chosen per project." },
  { q: "Can you redesign existing websites or applications?", a: "Absolutely. We audit the current experience, propose a design direction and ship the redesign in incremental releases with zero downtime." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. We offer maintenance retainers with clear SLAs, monitoring, security patching, backups and continuous feature delivery." },
  { q: "How do we get started?", a: "Book a free consultation or send a quote request. We reply within one business day with a scope outline, timeline and estimate." },
];

const serviceCategories = [
  { id: "all", label: "All Services" },
  { id: "web", label: "Web & Mobile" },
  { id: "ai", label: "AI & SaaS" },
  { id: "ecommerce", label: "eCommerce" },
  { id: "design", label: "Design" },
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <PageShell>
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="bg-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center">
          <Reveal>
            <Eyebrow>Our Services</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-semibold">
              Crafting Scalable <span className="text-gradient">Digital Solutions</span> For Modern Brands
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground text-lg">
              20+ professional services covering websites, eCommerce, mobile, full-stack, cloud, AI and SaaS — delivered by one accountable team.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand">
                <Link href="/contact">Start Your Project <ArrowRight className="h-4 w-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="/portfolio">View Our Work <ChevronRight className="h-4 w-4" /></Link>
              </Button>
            </div>
          </Reveal>
        </div>
        <TechMarquee />
      </section>

      {/* ── SERVICE CATALOG with shadcn Tabs ─────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-10">
          <Reveal><Eyebrow>What We Offer</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Full-Spectrum <span className="text-gradient">Development Services</span>
            </h2>
          </Reveal>
        </div>

        <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-1 p-1 mb-10 mx-auto w-fit bg-muted/60 rounded-2xl border border-border">
            {serviceCategories.map((cat) => (
              <TabsTrigger
                key={cat.id}
                value={cat.id}
                className="rounded-xl px-4 py-2 text-sm font-medium data-[state=active]:bg-background data-[state=active]:shadow-sm"
              >
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {serviceCategories.map((cat) => (
            <TabsContent key={cat.id} value={cat.id} className="mt-0">
              <div className="grid gap-5 md:grid-cols-2">
                {SERVICE_CATALOG.map((s, i) => (
                  <Reveal key={s.slug} delay={(i % 2) * 0.06}>
                    <motion.div whileHover={{ y: -6 }}>
                      <Card id={s.slug} className="h-full rounded-3xl border-border shadow-card hover:shadow-brand transition-shadow">
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <motion.span
                              whileHover={{ rotate: 10, scale: 1.15 }}
                              className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl"
                            >
                              {s.emoji}
                            </motion.span>
                            <div>
                              <CardTitle className="font-display text-xl">{s.title}</CardTitle>
                              <CardDescription className="mt-1.5 text-sm leading-relaxed">{s.tagline}</CardDescription>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <ul className="grid gap-2 sm:grid-cols-2">
                            {s.items.map((it, j) => (
                              <motion.li
                                key={it}
                                initial={{ opacity: 0, x: -8 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: j * 0.02 }}
                                className="flex items-center gap-2 text-sm text-muted-foreground"
                              >
                                <span className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                                  <Check className="h-3 w-3" />
                                </span>
                                {it}
                              </motion.li>
                            ))}
                          </ul>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <TechStackGrid />

      {/* ── PROCESS with shadcn Cards ────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="text-center">
          <Reveal><Eyebrow>How We Work</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              A clear path from brief to <span className="text-gradient">long-term success.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <motion.div whileHover={{ y: -5 }}>
                <Card className="h-full rounded-2xl border-border shadow-card hover:border-primary/30 transition-colors">
                  <CardHeader>
                    <Badge variant="outline" className="w-fit text-primary border-primary/30 bg-primary/5 font-mono">{s.n}</Badge>
                    <CardTitle className="mt-2 font-display text-base">{s.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20 text-center">
        <Reveal><Eyebrow>Industries We Serve</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
            Deep domain expertise <span className="text-gradient">across verticals.</span>
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-2.5">
          {INDUSTRIES.map((ind, i) => (
            <motion.div
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
            >
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium rounded-full border-border bg-card shadow-card hover:border-primary/40 hover:shadow-brand cursor-default transition">
                {ind}
              </Badge>
            </motion.div>
          ))}
        </div>
      </section>

      <Separator className="mx-auto max-w-7xl" />

      {/* ── FAQ with shadcn Accordion ─────────────────────────────── */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: faqs.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
              })),
            }),
          }}
        />
        <div className="text-center">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Answers to help you <span className="text-gradient">move forward.</span>
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <Accordion type="single" collapsible className="mt-10 space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-border bg-card px-6 shadow-card data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="font-display font-semibold text-left hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand">
              <Link href="/contact">Talk to Our Team <ArrowRight className="h-4 w-4" /></Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
