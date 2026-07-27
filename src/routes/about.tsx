import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { MapPin, Heart, Star, Target } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — CodeSwipe IT Solutions" },
      { name: "description", content: "CodeSwipe is built on one belief: strong products need strong foundations. Meet the team, mission and values behind our work." },
    ],
  }),
  component: AboutPage,
});

const grid = [
  { title: "Our Mission", body: "To help ambitious teams turn ideas into world-class digital products — without the agency drama." },
  { title: "Our Vision", body: "A future where every team — startup or enterprise — has access to product-grade engineering and design." },
  { title: "Our Values", body: "Transparency, ownership and long-term partnerships. Every project driven by quality, accountability and continuous improvement." },
  { title: "Our Approach", body: "We combine strategic thinking, user-focused design and scalable engineering to create measurable business impact." },
  { title: "Who We Are", body: "A team of designers, developers and strategists passionate about building digital experiences that help businesses grow." },
  { title: "Why Choose Us", body: "Reliable technology solutions with a focus on quality, speed, communication and long-term success for our clients." },
];

const principles = [
  { icon: MapPin, title: "Craft over speed", body: "We refuse to ship anything we wouldn't proudly show our peers." },
  { icon: Heart, title: "Owners, not vendors", body: "We treat your product like ours — outcomes over hours." },
  { icon: Target, title: "Measured by impact", body: "Every engagement has a clear north-star metric we move." },
  { icon: Star, title: "Polish is the product", body: "The motion, the latency, the empty states. All of it." },
];

const stats = [
  { k: "50+", v: "Projects Delivered" },
  { k: "20+", v: "Brands Worked With" },
  { k: "100%", v: "Success Rate" },
  { k: "15+", v: "Team Size" },
];

function AboutPage() {
  return (
    <PageShell>
      <section className="relative bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24 grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <Reveal>
              <Eyebrow>About CodeSwipe</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold leading-tight">
                <span className="text-gradient">CodeSwipe</span> is built on one belief, strong products need <em className="not-italic text-gradient">strong foundations.</em>
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-6 h-0.5 w-40 bg-brand rounded-full" />
              <p className="mt-6 text-muted-foreground">
                App Development · UI/UX · SaaS Development · AI Integration
              </p>
            </Reveal>
          </div>

          <div className="relative h-80">
            {stats.map((s, i) => (
              <motion.div
                key={s.v}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="absolute rounded-2xl bg-card border border-border p-5 shadow-brand backdrop-blur"
                style={{
                  top: `${[0, 20, 45, 65][i]}%`,
                  left: `${[10, 45, 5, 40][i]}%`,
                }}
              >
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{s.v}</div>
                <div className="text-3xl font-display font-semibold text-gradient">{s.k}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {grid.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                className="rounded-2xl border border-border bg-card p-8 shadow-card"
              >
                <h3 className="text-primary text-sm font-display font-semibold uppercase tracking-widest">{g.title}</h3>
                <p className="mt-4 text-muted-foreground leading-relaxed">{g.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
            Four principles <span className="text-gradient">we don't compromise.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">The reasons our clients keep coming back, project after project.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="rounded-2xl border border-border bg-card p-6 shadow-card">
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

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="rounded-3xl border border-border bg-card p-8 md:p-12 shadow-card">
          <Reveal>
            <Eyebrow>Why choose us</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Reasons clients stay with <span className="text-gradient">CodeSwipe.</span>
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

      <TechStackGrid />
    </PageShell>

  );
}
