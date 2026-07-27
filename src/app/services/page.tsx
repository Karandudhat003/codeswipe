"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Check } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { TechStackGrid, TechMarquee } from "@/components/site/TechIcons";
import { SERVICE_CATALOG, INDUSTRIES, PROCESS_STEPS } from "@/lib/site-content";


const faqs = [
  { q: "How long does it take to complete a project?", a: "The timeline depends on scope and complexity. A standard business website typically takes 4–8 weeks, while custom web applications, SaaS platforms or complex solutions may require several weeks or months. We share a clear roadmap and timeline before development begins." },
  { q: "Do you work with startups and enterprises?", a: "Yes. We partner with pre-seed founders and enterprise product teams alike — the engagement model, contracts and rituals adapt to your stage." },
  { q: "What technologies do you use?", a: "React, Next.js, TypeScript, React Native, Flutter, Node.js, NestJS, Laravel, Python, Postgres, MongoDB, Supabase, AWS, Vercel and Docker — chosen per project." },
  { q: "Can you redesign existing websites or applications?", a: "Absolutely. We audit the current experience, propose a design direction and ship the redesign in incremental releases with zero downtime." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. We offer maintenance retainers with clear SLAs, monitoring, security patching, backups and continuous feature delivery." },
  { q: "How do we get started?", a: "Book a free consultation or send a quote request. We reply within one business day with a scope outline, timeline and estimate." },
];

export default function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 text-center">
          <Reveal><Eyebrow>Our services</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-semibold">
              Crafting Scalable <span className="text-gradient">Digital Solutions</span> For Modern Brands
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              20+ professional services covering websites, eCommerce, mobile, full stack, cloud, AI, CRM/ERP, marketing and SaaS — delivered by one accountable team.
            </p>
          </Reveal>
        </div>
        <TechMarquee />
      </section>

      {/* FULL SERVICE CATALOGUE */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-5 md:grid-cols-2">
          {SERVICE_CATALOG.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 2) * 0.06}>
              <motion.article
                whileHover={{ y: -6 }}
                id={s.slug}
                className="h-full rounded-3xl border border-border bg-card p-7 shadow-card hover:shadow-brand transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <motion.span
                    whileHover={{ rotate: 10, scale: 1.15 }}
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent text-2xl"
                  >
                    {s.emoji}
                  </motion.span>
                  <div>
                    <h2 className="font-display text-xl font-semibold">{s.title}</h2>
                    <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                  </div>
                </div>

                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.items.map((it, j) => (
                    <motion.li
                      key={it}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: j * 0.02 }}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {it}
                    </motion.li>
                  ))}
                </ul>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TECH STACK */}
      <TechStackGrid />

      {/* PROCESS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <Reveal><Eyebrow>Development process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              A clear path from brief to <span className="text-gradient">long-term support.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.05}>
              <motion.div whileHover={{ y: -5 }} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="text-xs font-display font-semibold text-primary">{s.n}</div>
                <h3 className="mt-2 font-display font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16 text-center">
        <Reveal><Eyebrow>Industries we serve</Eyebrow></Reveal>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {INDUSTRIES.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              whileHover={{ y: -4 }}
              className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium shadow-card hover:border-primary/40 hover:shadow-brand transition"
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="text-center">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Answers To Help You Move Forward With <span className="text-gradient">Confidence</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/30 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-semibold">{f.q}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-primary shrink-0">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
