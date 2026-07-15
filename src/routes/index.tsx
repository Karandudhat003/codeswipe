import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, ShieldCheck, Layers, Sparkles, Rocket, Compass, PenTool, Code2, Send } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import heroVisual from "@/assets/hero-visual.jpg";
import svcWeb from "@/assets/service-web.jpg";
import svcMobile from "@/assets/service-mobile.jpg";
import svcUiUx from "@/assets/service-uiux.jpg";
import svcBackend from "@/assets/service-backend.jpg";
import team from "@/assets/team.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CodeSwipe IT Solutions — We Build Digital Experiences That Scale" },
      { name: "description", content: "Websites, mobile apps, SaaS and AI products engineered to strengthen your brand and drive growth. Design, engineering and product ownership from day one." },
    ],
  }),
  component: HomePage,
});

const brands = ["BloomVault", "MyRollCall", "GRAZIA", "Akshi", "Wavelength", "Popshop", "EdTech"];

const features = [
  { icon: Zap, title: "Fast Delivery", desc: "Sprint-based execution with weekly demos and shipped increments." },
  { icon: ShieldCheck, title: "Secure Code", desc: "Security-first architecture with hardened auth, RLS and audits." },
  { icon: Layers, title: "Scalable Architecture", desc: "Systems designed to grow — from your first user to your millionth." },
  { icon: Sparkles, title: "Clean UI / UX", desc: "Interfaces users love. Every pixel considered, every motion earned." },
];

const services = [
  { n: "01", title: "Web Development", img: svcWeb, bullets: ["Custom Business Websites", "High-Performance Architecture", "SEO & Speed Optimization"], desc: "Build fast, scalable, and conversion-focused websites designed to strengthen your online presence and drive business growth." },
  { n: "02", title: "Mobile App Development", img: svcMobile, bullets: ["iOS & Android Apps", "Cross-Platform Development", "App Store Deployment"], desc: "Create intuitive mobile applications that deliver seamless experiences and help businesses connect with users on every device." },
  { n: "03", title: "UI/UX Design", img: svcUiUx, bullets: ["User-Centered Design", "Interactive Prototypes", "Design Systems"], desc: "Craft engaging digital experiences with clean interfaces, thoughtful user journeys, and designs that convert visitors into customers." },
  { n: "04", title: "Backend & API", img: svcBackend, bullets: ["REST & GraphQL APIs", "Authentication Systems", "Database Architecture"], desc: "Develop secure, scalable backend solutions that power applications, automate workflows, and ensure reliable performance." },
];

const steps = [
  { n: "01", title: "Discovery", icon: Compass, desc: "We dig into your goals, users and constraints." },
  { n: "02", title: "Strategy", icon: Sparkles, desc: "A clear roadmap of features, tech and timelines." },
  { n: "03", title: "Design", icon: PenTool, desc: "Prototypes and design systems that ship." },
  { n: "04", title: "Development", icon: Code2, desc: "Clean, tested code delivered in weekly sprints." },
  { n: "05", title: "Launch", icon: Rocket, desc: "Deploy, monitor and iterate with growth in mind." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <Reveal>
                <Eyebrow>Product engineering studio</Eyebrow>
              </Reveal>
              <Reveal delay={0.1}>
                <h1 className="mt-6 text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-[1.05]">
                  We Build Digital Experiences{" "}
                  <span className="text-gradient italic">That Scale.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                  CodeSwipe IT Solutions partners with founders and teams to design, engineer and grow digital products — from a landing page to a full SaaS platform.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/contact"
                    className="group relative inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand transition-all duration-300 hover:shadow-[0_20px_50px_-12px_hsl(var(--primary)/0.55)] hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Start Your Project
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <Link
                    to="/portfolio"
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/80 backdrop-blur px-7 py-3.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:bg-muted hover:-translate-y-0.5"
                  >
                    Our Work
                    <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={0.4}>
                <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
                  {[
                    { k: "50+", v: "Projects" },
                    { k: "20+", v: "Brands" },
                    { k: "100%", v: "On-time" },
                  ].map((s) => (
                    <div key={s.v}>
                      <div className="text-3xl font-display font-semibold text-gradient">{s.k}</div>
                      <div className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.2}>
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="absolute -inset-8 bg-brand opacity-20 blur-3xl rounded-full" />
                <img
                  src={heroVisual}
                  alt="Dashboard product visualization"
                  className="relative w-full h-auto rounded-3xl"
                  width={1200}
                  height={1000}
                />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* BRANDS MARQUEE */}
      <section className="border-y border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-lg font-display font-semibold">
            Brands That <span className="text-gradient">Trusted Our Work</span>
          </p>
          <div className="mt-8 overflow-hidden">
            <div className="flex gap-16 animate-marquee whitespace-nowrap">
              {[...brands, ...brands].map((b, i) => (
                <span key={i} className="text-2xl font-display font-semibold text-muted-foreground/60 tracking-tight">
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Why us</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
              Designed For <span className="text-gradient">Impact.</span> Engineered For <span className="text-gradient">Scale.</span>
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              A senior team that owns product outcomes — not just line items on a spec.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-card"
              >
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

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Reveal>
          <div className="text-center">
            <Eyebrow>Our core services</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
              Crafting Scalable <span className="text-gradient">Digital Solutions</span> For Modern Brands
            </h2>
          </div>
        </Reveal>

        <div className="mt-16 space-y-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="group grid gap-6 md:grid-cols-[1fr_320px_1fr] md:items-center rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card hover:shadow-brand transition-shadow">
                <div>
                  <div className="text-xs font-display font-semibold text-primary">{s.n}</div>
                  <h3 className="mt-2 text-2xl font-display font-semibold">{s.title}</h3>
                  <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1 w-1 rounded-full bg-primary" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="overflow-hidden rounded-2xl">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="h-56 w-full object-cover"
                    width={800}
                    height={800}
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <Link to="/services" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-6 py-3 text-sm font-medium shadow-brand">
            View All Services <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* PROCESS */}
      <section className="mt-16 bg-[oklch(0.14_0.04_275)] text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
          <Reveal>
            <Eyebrow>Process</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold text-white max-w-3xl">
              From the first call to <span className="text-gradient">a confident launch.</span>
            </h2>
          </Reveal>

          <div className="mt-14 relative">
            <div className="hidden md:block absolute left-0 right-0 top-8 h-px bg-white/10" />
            <div className="grid gap-8 md:grid-cols-5">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <div className="relative">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand shadow-brand">
                      <s.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="mt-5 text-center">
                      <div className="text-xs uppercase tracking-widest text-white/40">{s.n}</div>
                      <h3 className="mt-1 font-display font-semibold text-white">{s.title}</h3>
                      <p className="mt-2 text-sm text-white/60">{s.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <Reveal>
            <img src={team} alt="Our team" loading="lazy" className="rounded-3xl w-full h-auto shadow-card" width={1200} height={800} />
          </Reveal>
          <Reveal delay={0.1}>
            <Eyebrow>Our team</Eyebrow>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
              A senior team that <span className="text-gradient">treats your product like ours.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Designers, engineers and strategists who care about polish, performance and outcomes — not billable hours.
            </p>
            <div className="mt-6 flex gap-3">
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full bg-brand text-primary-foreground px-5 py-2.5 text-sm font-medium">
                Meet the team <Send className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
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
