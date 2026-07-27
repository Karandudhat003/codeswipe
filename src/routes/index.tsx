import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, ShieldCheck, Layers, Sparkles, Check, Send } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { TechMarquee, TechStackGrid } from "@/components/site/TechIcons";
import { SERVICE_CATALOG, PROCESS_STEPS, INDUSTRIES, WHY_CHOOSE_US } from "@/lib/site-content";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeSwipe IT Solutions — Web, Mobile, AI & Custom Software" },
      { name: "description", content: "We build modern, scalable web applications, mobile apps, eCommerce stores, AI solutions and custom software that help businesses grow faster." },
      { property: "og:title", content: "CodeSwipe IT Solutions — Digital Product Engineering" },
      { property: "og:description", content: "Custom development, fast delivery, modern technologies and dedicated support for startups, SMBs and enterprises." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const heroPoints = ["Custom Development", "Fast Delivery", "Modern Technologies", "Dedicated Support"];

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Sprint-based execution with weekly demos and shipped increments." },
  { icon: ShieldCheck, title: "Secure Code", desc: "Security-first architecture with hardened auth, RLS and audits." },
  { icon: Layers, title: "Scalable Architecture", desc: "Systems designed to grow — from your first user to your millionth." },
  { icon: Sparkles, title: "Clean UI / UX", desc: "Interfaces users love. Every pixel considered, every motion earned." },
];

const whyUsShort = [
  "Experienced Developers", "Clean & Scalable Code", "Agile Development Process",
  "Transparent Communication", "On-Time Delivery", "Affordable Pricing",
  "Post-Launch Support", "Global Client Support",
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-hero">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-brand opacity-20 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-28 md:pb-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>CodeSwipe IT Solutions</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-[1.08]">
              Transforming Ideas into{" "}
              <span className="text-gradient italic">Powerful Digital Solutions</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground">
              We build modern, scalable and high-performance web applications, mobile apps, eCommerce stores, AI solutions and custom software that help businesses grow faster.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-3 mx-auto max-w-2xl text-sm text-muted-foreground">
              Whether you're a startup, small business or enterprise, our experienced development team delivers reliable technology tailored to your business goals.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <ul className="mt-8 flex flex-wrap justify-center gap-2.5">
              {heroPoints.map((p) => (
                <li key={p} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background/70 backdrop-blur px-3.5 py-1.5 text-xs font-medium">
                  <Check className="h-3.5 w-3.5 text-primary" /> {p}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-all duration-300 hover:-translate-y-0.5"
              >
                Get Free Consultation
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                to="/portfolio"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/40 hover:bg-muted hover:-translate-y-0.5"
              >
                View Portfolio
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.45}>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="mt-14 flex flex-col items-center gap-2 text-muted-foreground"
            >
              <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
              <span className="h-10 w-6 rounded-full border border-border flex items-start justify-center p-1">
                <span className="h-2 w-1 rounded-full bg-primary" />
              </span>
            </motion.div>
          </Reveal>
        </div>
      </section>

      {/* TECH MARQUEE */}
      <section className="border-y border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm uppercase tracking-[0.25em] text-muted-foreground">
            Technologies we work with
          </p>
          <TechMarquee />
        </div>
      </section>

      {/* ABOUT */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>About us</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              We Build Digital Products That <span className="text-gradient">Drive Business Growth</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              At CodeSwipe IT Solutions we specialise in delivering innovative software solutions for businesses worldwide. Our team combines creativity, technical expertise and industry experience to build products that are secure, scalable and user-friendly.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              From websites and mobile applications to enterprise software and AI-powered solutions, we help companies transform their ideas into successful digital products.
            </p>
            <div className="mt-7 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-5 py-2.5 text-sm font-medium shadow-brand">
                More about us <Send className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-lg font-semibold">Why Choose Us?</h3>
              <div className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {whyUsShort.map((w, i) => (
                  <motion.div
                    key={w}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                      <Check className="h-3 w-3" />
                    </span>
                    {w}
                  </motion.div>
                ))}
              </div>
              <img src={team} alt="CodeSwipe development team at work" loading="lazy" width={1200} height={800} className="mt-6 rounded-2xl w-full h-48 object-cover" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <Reveal><Eyebrow>Our services</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              20+ professional services, <span className="text-gradient">one accountable team.</span>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATALOG.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-brand transition-shadow">
                <motion.span
                  whileHover={{ rotate: 8, scale: 1.15 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-xl"
                >
                  {s.emoji}
                </motion.span>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.tagline}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.items.slice(0, 4).map((it) => (
                    <span key={it} className="rounded-full border border-border px-2.5 py-1 text-[11px] text-muted-foreground">{it}</span>
                  ))}
                  {s.items.length > 4 && (
                    <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-primary">+{s.items.length - 4} more</span>
                  )}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-6 py-3 text-sm font-medium shadow-brand">
            Explore All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* TECH STACK */}
      <TechStackGrid />

      {/* PROCESS */}
      <section className="bg-[oklch(0.14_0.04_275)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <Reveal><Eyebrow>Development process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold text-white max-w-3xl">
              From the first call to <span className="text-gradient">a confident launch.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand font-display text-sm font-semibold shadow-brand">
                    {s.n}
                  </div>
                  <h3 className="mt-4 font-display font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm text-white/60 leading-relaxed">{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <Reveal><Eyebrow>Industries we serve</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Domain knowledge across <span className="text-gradient">16 industries.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
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

      {/* WHY CLIENTS CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <Reveal>
            <Eyebrow>Why clients choose us</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Everything you'd expect from a partner — <span className="text-gradient">and more.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {WHY_CHOOSE_US.map((w, i) => (
              <motion.div
                key={w}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 text-sm"
              >
                <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {w}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-3xl border border-border bg-card p-10 shadow-card relative overflow-hidden">
            <div className="absolute -right-6 -top-6 text-[160px] font-display text-primary/10 leading-none">"</div>
            <p className="relative text-xl md:text-2xl font-display leading-snug">
              CodeSwipe built our platform end-to-end. Every sprint had a shipped increment, and the polish shows in every screen. They engineered it into the product our investors wanted to see.
            </p>
            <div className="relative mt-6 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-brand" />
              <div>
                <div className="text-sm font-medium">Ananya Kapoor</div>
                <div className="text-xs text-muted-foreground">Founder, Product-led SaaS</div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
