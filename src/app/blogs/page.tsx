"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { ArrowUpRight } from "lucide-react";


const posts = [
  { cat: "Engineering", title: "Shipping a SaaS in 8 weeks without cutting corners", read: "6 min read", grad: "from-violet-200 to-indigo-100" },
  { cat: "Design", title: "The empty state is the product", read: "4 min read", grad: "from-orange-200 to-pink-100" },
  { cat: "AI", title: "Practical LLM patterns for internal tools", read: "7 min read", grad: "from-fuchsia-200 to-violet-100" },
  { cat: "Case Study", title: "How Hiring Hub cut recruiter time by 42%", read: "5 min read", grad: "from-sky-200 to-cyan-100" },
  { cat: "Ops", title: "A weekly sprint cadence that actually ships", read: "3 min read", grad: "from-emerald-200 to-teal-100" },
  { cat: "Product", title: "Onboarding that turns trials into loyalty", read: "5 min read", grad: "from-yellow-200 to-orange-100" },
];

export default function BlogsPage() {
  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <Reveal><Eyebrow>Insights</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold">
              Field notes from <span className="text-gradient">the studio.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 max-w-2xl text-muted-foreground">
              Essays, teardowns and case notes on product engineering, design systems and applied AI.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.05}>
            <motion.article
              whileHover={{ y: -6 }}
              className="group h-full rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-brand transition-shadow"
            >
              <div className={`aspect-video rounded-2xl bg-gradient-to-br ${p.grad}`} />
              <div className="mt-5 flex items-center justify-between text-xs">
                <span className="rounded-full bg-accent px-3 py-1 font-medium text-primary">{p.cat}</span>
                <span className="text-muted-foreground">{p.read}</span>
              </div>
              <h3 className="mt-3 text-xl font-display font-semibold group-hover:text-gradient transition">
                {p.title}
              </h3>
              <Link href="/blogs" className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read article <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
