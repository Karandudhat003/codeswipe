"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRight, Zap, ShieldCheck, Layers, Sparkles, Check, Send,
  HeartPulse, GraduationCap, Building, ShoppingCart, Landmark,
  Truck, Factory, Utensils, Plane, Store, Car, Hammer, Scale,
  Shield, Film, Dumbbell, Users, Rocket, HeartHandshake, Star,
  MessageCircle, Award, Globe, Clock, BadgeCheck, TrendingUp, Code2, Smartphone
} from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { TechMarquee, TechStackGrid } from "@/components/site/TechIcons";
import { SERVICE_CATALOG, PROCESS_STEPS, WHY_CHOOSE_US } from "@/lib/site-content";
import team from "@/assets/team.jpg";

// ─── Data ────────────────────────────────────────────────────────────────────

const heroPoints = ["Custom Development", "Fast Delivery", "Modern Tech Stack", "Dedicated Support", "Transparent Pricing"];

const features = [
  { icon: Zap, title: "Lightning Fast Delivery", desc: "Sprint-based execution with weekly demos and shipped increments — no delays." },
  { icon: ShieldCheck, title: "Secure by Default", desc: "Security-first architecture with hardened auth, RBAC, RLS and regular audits." },
  { icon: Layers, title: "Scalable Architecture", desc: "Systems built to grow — from your first user to your millionth, seamlessly." },
  { icon: Sparkles, title: "Pixel-Perfect UI/UX", desc: "Interfaces your users love. Every pixel considered, every motion earned." },
];



const INDUSTRIES_WITH_IMAGES = [
  { name: "Healthcare", icon: HeartPulse, img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80", desc: "HIPAA-compliant health platforms, telemedicine, EMR systems." },
  { name: "Education", icon: GraduationCap, img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80", desc: "LMS platforms, e-learning apps, student portals & EdTech solutions." },
  { name: "Finance & FinTech", icon: Landmark, img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&q=80", desc: "Secure payment systems, trading dashboards, banking & FinTech apps." },
  { name: "E-commerce", icon: ShoppingCart, img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80", desc: "High-converting online stores, marketplaces & D2C platforms." },
  { name: "Real Estate", icon: Building, img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80", desc: "Property listing portals, CRM tools, virtual tours & booking platforms." },
  { name: "Logistics & Transport", icon: Truck, img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80", desc: "Fleet management, route optimisation & delivery tracking systems." },
  { name: "Food & Restaurant", icon: Utensils, img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80", desc: "Food delivery apps, restaurant POS, online ordering & loyalty programs." },
  { name: "Travel & Tourism", icon: Plane, img: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80", desc: "Booking engines, travel portals, tour packages & travel management apps." },
  { name: "Retail", icon: Store, img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80", desc: "Inventory systems, POS solutions, loyalty apps & retail analytics." },
  { name: "Manufacturing", icon: Factory, img: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80", desc: "ERP systems, supply chain management, IoT dashboards & quality control." },
  { name: "Legal Services", icon: Scale, img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80", desc: "Case management, document automation, e-signature & legal portals." },
  { name: "Sports & Fitness", icon: Dumbbell, img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80", desc: "Fitness apps, gym management, sports analytics & event platforms." },
  { name: "SaaS & Startups", icon: Rocket, img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80", desc: "Multi-tenant SaaS, subscription billing, user dashboards & onboarding flows." },
  { name: "Human Resources", icon: Users, img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80", desc: "HRMS, payroll, attendance tracking, recruitment & employee self-service portals." },
  { name: "Media & Entertainment", icon: Film, img: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80", desc: "Streaming platforms, content management, ticketing & media portals." },
  { name: "Automotive", icon: Car, img: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=600&q=80", desc: "Dealership platforms, service booking, inventory & automotive analytics." },
  { name: "Construction", icon: Hammer, img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80", desc: "Project management, site inspection, contractor management & BIM tools." },
  { name: "Insurance", icon: Shield, img: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80", desc: "Policy management, claims processing, quote engines & broker portals." },
  { name: "Hospitality", icon: Utensils, img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", desc: "Hotel booking systems, property management, concierge & review platforms." },
  { name: "Government", icon: Landmark, img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?w=600&q=80", desc: "Citizen portals, e-governance platforms, public service apps & reporting." },
  { name: "Non-Profit", icon: HeartHandshake, img: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80", desc: "Donation platforms, volunteer management, impact dashboards & CRM." },
];

const testimonials = [
  {
    quote: "CodeSwipe delivered our entire platform in 3 months. The engineering quality was outstanding — our investors were impressed at every demo.",
    name: "Ananya Kapoor",
    role: "Founder, Product-led SaaS",
    rating: 5,
  },
  {
    quote: "We hired CodeSwipe to rebuild our legacy system. They brought fresh architecture, clean code, and transparent communication throughout.",
    name: "Rahul Mehta",
    role: "CTO, FinTech Startup",
    rating: 5,
  },
  {
    quote: "Our Shopify store conversion jumped 40% after the redesign. The team truly understood our brand and delivered beyond expectations.",
    name: "Priya Shah",
    role: "Founder, D2C Brand",
    rating: 5,
  },
];

const agencyReasons = [
  { icon: Globe, title: "Worldwide Delivery", desc: "We serve clients across India, USA, UK, UAE, Canada and Australia with 24/7 support." },
  { icon: Code2, title: "Expert Engineers", desc: "15+ senior developers, designers and AI specialists — all in-house, no outsourcing." },
  { icon: Smartphone, title: "Full-Stack Capability", desc: "From frontend to backend, mobile to AI — one team owns your entire product." },
  { icon: Clock, title: "On-Time, Every Time", desc: "We use agile sprints with weekly deliverables so your project never stalls." },
  { icon: BadgeCheck, title: "Quality Guarantee", desc: "Rigorous code review, QA testing, and security audits before every release." },
  { icon: TrendingUp, title: "Measurable Results", desc: "We build for business growth — every feature tied to a clear business metric." },
  { icon: Award, title: "Trusted Partner", desc: "50+ successful deliveries and a 100% client satisfaction record since 2022." },
  { icon: MessageCircle, title: "Direct Communication", desc: "Dedicated project manager. WhatsApp, Slack, or Zoom — always reachable." },
];



// ─── Industry Card ─────────────────────────────────────────────────────────────
function IndustryCard({ ind, index }: { ind: (typeof INDUSTRIES_WITH_IMAGES)[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: (index % 4) * 0.1, duration: 0.5 }}
      whileHover={{ y: -6, scale: 1.02 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-brand transition-all duration-300 cursor-default"
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={ind.img}
          alt={`${ind.name} software development`}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        <div className="absolute bottom-3 left-3">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 backdrop-blur-sm px-3 py-1 text-xs font-medium text-white border border-white/20">
            <ind.icon className="h-3 w-3" />
            {ind.name}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-display font-semibold text-sm">{ind.name}</h3>
        <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{ind.desc}</p>
      </div>
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function HomePage() {
  const waLink = `https://wa.me/917265025017?text=${encodeURIComponent("Hi CodeSwipe, I'm looking for a reliable IT company to build my project. Can we discuss?")}`;

  return (
    <PageShell>
      {/* ── HERO ────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-hero" aria-label="Hero">
        <div className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand opacity-15 blur-3xl" aria-hidden />
        <div className="pointer-events-none absolute top-1/2 right-0 h-[300px] w-[300px] rounded-full bg-primary-glow opacity-10 blur-3xl" aria-hidden />

        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-32 md:pb-28 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>🏆 India's Trusted IT Solutions Partner</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-[1.04] tracking-tight">
              Transforming Ideas into{" "}
              <span className="text-gradient italic">Powerful Digital</span>
              <br className="hidden sm:block" /> Solutions
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 mx-auto max-w-2xl text-base sm:text-xl text-muted-foreground leading-relaxed">
              We build world-class <strong>web apps, mobile apps, AI systems, SaaS platforms</strong> and custom software that help startups and enterprises grow faster.
            </p>
          </Reveal>
          <Reveal delay={0.25}>
            <p className="mt-3 mx-auto max-w-2xl text-sm text-muted-foreground">
              Trusted by <strong>50+ businesses</strong> across India, USA, UK, UAE and Canada — delivering results since 2022.
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
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/services"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-8 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-card hover:-translate-y-0.5"
              >
                Discover More
                <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-brand px-8 py-3.5 text-sm font-semibold text-white shadow-brand transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
              >
                Let's Talk
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
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
                <span className="h-2 w-1 rounded-full bg-primary animate-bounce" />
              </span>
            </motion.div>
          </Reveal>
        </div>
      </section>


      {/* ── TECH MARQUEE ───────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/30" aria-label="Technologies">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Technologies We Master
          </p>
          <TechMarquee />
        </div>
      </section>

      {/* ── WHY AGENCIES & CLIENTS CHOOSE US ───────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24" aria-label="Why choose CodeSwipe">
        <div className="text-center mb-14">
          <Reveal><Eyebrow>Why Choose CodeSwipe</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              The IT Partner Every{" "}
              <span className="text-gradient">Business Deserves</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-4 mx-auto max-w-2xl text-muted-foreground text-base leading-relaxed">
              Whether you're a funded startup, an established enterprise, or an agency looking to white-label development — CodeSwipe delivers with precision, speed and transparency.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {agencyReasons.map((r, i) => (
            <Reveal key={r.title} delay={(i % 4) * 0.07}>
              <motion.div
                whileHover={{ y: -6, borderColor: "var(--primary)" }}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-card transition-all duration-300 group"
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                  <r.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display font-semibold">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24" aria-label="About CodeSwipe">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <Eyebrow>About CodeSwipe IT Solutions</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              We Build Digital Products That{" "}
              <span className="text-gradient">Drive Real Business Growth</span>
            </h2>
            <p className="mt-5 text-muted-foreground leading-relaxed">
              CodeSwipe IT Solutions is a premier software development company based in India, serving clients globally since 2022. We specialise in building high-performance digital products — from MVPs to enterprise-grade platforms — with an unwavering focus on quality, speed and business impact.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Our team of 15+ engineers, designers and strategists has delivered 50+ projects across healthcare, fintech, e-commerce, SaaS and more. We combine technical excellence with deep business understanding to create solutions that don't just look great — they perform.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/about" className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-5 py-2.5 text-sm font-medium shadow-brand hover:opacity-90 transition">
                More About Us <Send className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium hover:border-primary/40 transition">
                Start a Project <ArrowUpRight className="h-4 w-4 text-primary" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-border bg-card p-7 shadow-card">
              <h3 className="font-display text-lg font-semibold mb-5">Why Our Clients Trust Us</h3>
              <div className="grid gap-2.5 sm:grid-cols-2">
                {WHY_CHOOSE_US.map((w, i) => (
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
              <Image
                src={team}
                alt="CodeSwipe development team building digital products"
                loading="lazy"
                width={1200}
                height={800}
                className="mt-6 rounded-2xl w-full h-48 object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── FEATURES ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16" aria-label="Our advantages">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card group">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary transition group-hover:bg-brand group-hover:text-white">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20" aria-label="Our services">
        <div className="text-center">
          <Reveal><Eyebrow>Our Services</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              20+ Professional Services,{" "}
              <span className="text-gradient">One Accountable Team.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              From a simple website to an AI-powered enterprise platform — we cover everything under one roof. No subcontracting. No surprises.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICE_CATALOG.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.05}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-brand hover:border-primary/30 transition-all duration-300"
              >
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
          <Link href="/services" className="inline-flex items-center gap-2 rounded-full bg-brand text-white px-6 py-3 text-sm font-medium shadow-brand hover:opacity-90 transition">
            Explore All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────────────── */}
      <TechStackGrid />

      {/* ── PROCESS ─────────────────────────────────────────────────────── */}
      <section className="border-y border-border bg-secondary/40 py-24" aria-label="Development process">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal><Eyebrow>Our Process</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold max-w-3xl">
              From the first call to{" "}
              <span className="text-gradient">a confident launch.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-3 text-muted-foreground max-w-xl">Our battle-tested process ensures your project is delivered on time, on budget, and beyond expectations.</p>
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.06}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-brand hover:border-primary/40 transition-all duration-300">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-primary shadow-sm">
                    {s.n}
                  </div>
                  <h3 className="mt-5 font-display font-semibold text-lg">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24" aria-label="Industries we serve">
        <div className="text-center mb-14">
          <Reveal><Eyebrow>Industries We Serve</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Deep Domain Expertise Across{" "}
              <span className="text-gradient">21 Industries.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              We've built production systems for a wide range of industries — bringing deep sector knowledge, compliance awareness, and proven patterns to every project.
            </p>
          </Reveal>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {INDUSTRIES_WITH_IMAGES.map((ind, i) => (
            <IndustryCard key={ind.name} ind={ind} index={i} />
          ))}
        </div>
      </section>

      {/* ── TRUSTED BY ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20" aria-label="Client trust section">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-accent/60 to-secondary/60 p-8 md:p-14 shadow-card">
          <div className="text-center mb-10">
            <Reveal><Eyebrow>Trusted Worldwide</Eyebrow></Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
                The Partner Businesses Come Back To — <span className="text-gradient">Every Time.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
                From first-time founders to Fortune-adjacent enterprises — companies of all sizes trust CodeSwipe to ship products that matter.
              </p>
            </Reveal>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-border bg-background p-6 shadow-card"
                >
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">"{t.quote}"</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-brand flex items-center justify-center text-white font-bold text-sm">
                      {t.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12" aria-label="Why choose CodeSwipe checklist">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <Reveal>
            <Eyebrow>Everything Included</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Everything You'd Expect From a Partner —{" "}
              <span className="text-gradient">And More.</span>
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

      {/* ── FAQ SECTION WITH FAQPAGE SCHEMA ──────────────────────────────── */}
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 pb-20" aria-label="Frequently asked questions">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'Why should agencies and global businesses partner with CodeSwipe IT Solutions?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'CodeSwipe IT Solutions is a top-rated IT development company in India providing full-stack web, mobile app, and AI development with 100% code ownership, agile sprints, and transparent pricing.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'What services does CodeSwipe IT Solutions offer?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We specialize in Web Development (React, Next.js), Mobile App Development (Flutter, React Native), AI & Machine Learning Solutions, SaaS Engineering, Shopify eCommerce, and WordPress Customization.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Can digital agencies hire dedicated developers or white-label services from CodeSwipe?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes! We offer white-label development partnerships for agencies worldwide, providing dedicated developers and project managers on flexible monthly plans.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How does CodeSwipe guarantee code quality and security?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We conduct peer code reviews, automated testing, OWASP security checks, and rigorous QA testing before every deployment.',
                  },
                },
              ],
            }),
          }}
        />

        <div className="text-center mb-12">
          <Reveal><Eyebrow>Frequently Asked Questions</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
              Got Questions? <span className="text-gradient">We Have Answers.</span>
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Why should agencies and global businesses partner with CodeSwipe IT Solutions?",
              a: "CodeSwipe IT Solutions is a top-rated software agency based in India. We provide dedicated full-stack development teams (React, Next.js, Flutter, Node.js, AI, Shopify, WordPress) with 100% IP ownership, transparent communication, and agile weekly deliverables."
            },
            {
              q: "What technical services does CodeSwipe IT Solutions specialize in?",
              a: "We offer end-to-end IT services: Custom Web App Development, Cross-Platform Mobile Apps (iOS & Android), AI & LLM Integrations, SaaS Product Development, Shopify Stores, WordPress Websites, and UI/UX Design."
            },
            {
              q: "Can we hire dedicated remote developers or white-label services?",
              a: "Yes! We work as offshore development partners for digital agencies across USA, UK, UAE, Canada, and Australia. You can hire dedicated full-stack engineers, frontend specialists, or full project teams."
            },
            {
              q: "How fast can CodeSwipe kick off a new development project?",
              a: "We can onboard and kick off your project within 24 to 48 hours. After an initial scope discussion, we assign a dedicated project manager and start weekly sprints immediately."
            }
          ].map((item, idx) => (
            <Reveal key={item.q} delay={idx * 0.05}>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
                <h3 className="font-display font-semibold text-lg text-foreground flex items-center gap-3">
                  <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent text-xs font-bold text-primary">
                    Q{idx + 1}
                  </span>
                  {item.q}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed pl-10">
                  {item.a}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ── WHATSAPP CTA BANNER ─────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16" aria-label="WhatsApp CTA">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#128C7E,#25D366)" }}
        >
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
          <div className="absolute -left-10 -bottom-10 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">Have a project in mind?</h2>
              <p className="mt-2 text-white/80">Chat with us on WhatsApp right now — get a response in minutes, not days.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#128C7E] font-semibold px-6 py-3 text-sm hover:bg-white/90 transition shadow-lg"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" /></svg>
                Chat on WhatsApp
              </a>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/20 backdrop-blur text-white font-semibold px-6 py-3 text-sm hover:bg-white/30 transition border border-white/30">
                Contact Us <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
