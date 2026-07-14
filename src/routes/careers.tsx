import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Globe, Heart, Coffee, Zap, Shield, Sparkles, ChevronDown } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

export const Route = createFileRoute("/careers")({
  head: () => ({
    meta: [
      { title: "Careers — CodeSwipe IT Solutions" },
      { name: "description", content: "Join CodeSwipe. Work with a senior team of designers, engineers and strategists building impactful digital products for startups and enterprises worldwide." },
    ],
  }),
  component: CareersPage,
});

const perks = [
  { icon: Globe, title: "Remote Collaboration", body: "Work from anywhere while collaborating with clients and team members across different industries and time zones." },
  { icon: Heart, title: "Real Client Projects", body: "Build websites, applications, SaaS platforms, and digital products that are actively used by real businesses." },
  { icon: Coffee, title: "Career Growth", body: "Gain hands-on experience with modern technologies, product development, client communication and scalable systems." },
  { icon: Zap, title: "Learning & Innovation", body: "Explore new tools, frameworks, AI solutions and emerging technologies while continuously improving your skills." },
  { icon: Shield, title: "Ownership", body: "Take ownership of projects, contribute ideas and make meaningful decisions that directly impact product success." },
  { icon: Sparkles, title: "Flexible Environment", body: "We focus on results, collaboration and productivity — giving team members flexibility in how they work." },
];

const jobs = [
  { role: "Senior Frontend Engineer", meta: "Full-Time · Remote · 3+ years", desc: "You'll lead frontend architecture on client SaaS platforms — React, TypeScript, TanStack, Tailwind. Own performance, DX and craft." },
  { role: "Mobile Engineer (Flutter)", meta: "Full-Time · Remote · 1+ years", desc: "Ship production mobile apps with Flutter. Comfortable with state management, native integrations and app store deployment." },
  { role: "UI / UX Designer", meta: "Full-Time · Remote · Freshers welcome", desc: "Craft design systems and product interfaces for real SaaS clients. Figma, prototyping, and a strong sense of interaction craft." },
  { role: "AI / ML Engineer", meta: "Contract · Remote · 3+ years", desc: "Build production LLM features and RAG pipelines. Python, TypeScript, vector DBs, and evaluation." },
];

function CareersPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <Reveal><Eyebrow>Careers</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Build the next generation of <span className="text-gradient">digital products with us.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-3xl text-muted-foreground">
              Join a team of designers, developers and innovators building impactful digital products for startups and businesses worldwide. We value creativity, ownership, continuous learning and a passion for delivering exceptional user experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal><Eyebrow>Why CodeSwipe</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Build. Learn. <span className="text-gradient">Grow.</span>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal><Eyebrow>Open positions</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Join CodeSwipe and Build the <span className="text-gradient">Future Together</span>
          </h2>
        </Reveal>
        <div className="mt-10 space-y-3">
          {jobs.map((j, i) => (
            <Reveal key={j.role} delay={i * 0.04}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/30 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="font-display font-semibold">{j.role}</div>
                    <div className="text-xs text-muted-foreground mt-1">{j.meta}</div>
                  </div>
                  <motion.div animate={{ rotate: open === i ? 180 : 0 }} className="text-primary shrink-0">
                    <ChevronDown className="h-5 w-5" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {open === i && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                      <p className="pt-4 text-sm text-muted-foreground leading-relaxed">{j.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 grid gap-12 md:grid-cols-2">
        <Reveal>
          <Eyebrow>Careers</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Tell us about <span className="text-gradient">yourself.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            We believe great products are built by great people. Whether you're a designer, developer or creative thinker, this is your opportunity to work on meaningful projects, solve real-world challenges and grow alongside a passionate team.
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <input placeholder="Full Name" className="w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              <input placeholder="Email" type="email" className="w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <select className="w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary">
              <option>Select Job Position</option>
              {jobs.map((j) => <option key={j.role}>{j.role}</option>)}
            </select>
            <input placeholder="Github / Linkedin URL" className="w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <textarea placeholder="A Short Note" rows={4} className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-primary-foreground" style={{ background: "var(--ink)" }}>
              Submit Application →
            </button>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
