"use client";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { MapPin, Heart, Star, Target, Check, ArrowRight } from "lucide-react";
import { TechStackGrid } from "@/components/site/TechIcons";
import { WHY_CHOOSE_US } from "@/lib/site-content";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

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

export default function AboutPage() {
  return (
    <PageShell>
      {/* Hero Section Centered */}
      <section className="relative bg-hero border-b border-border">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 pt-20 pb-24 text-center">
          <Reveal>
            <div className="flex justify-center">
              <Eyebrow>About CodeSwipe IT Solutions</Eyebrow>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight">
              <span className="text-gradient">CodeSwipe</span> is built on one belief: strong products need <em className="not-italic text-gradient">strong foundations.</em>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-6 h-0.5 w-40 bg-brand rounded-full mx-auto" />
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We engineer custom Web Applications, Mobile Apps, SaaS Platforms, eCommerce Solutions & AI Integrations for businesses worldwide.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Grid section */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {grid.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.05}>
              <motion.div whileHover={{ y: -4 }} className="h-full">
                <Card className="h-full border-border shadow-card hover:border-primary/30 hover:shadow-brand transition-all">
                  <CardHeader className="pb-2">
                    <Badge variant="outline" className="w-fit text-primary border-primary/30 bg-primary/5 text-[10px] uppercase tracking-widest">{g.title}</Badge>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{g.body}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <Reveal>
          <Eyebrow>What we believe</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
            Four principles <span className="text-gradient">we don't compromise.</span>
          </h2>
          <p className="mt-3 text-muted-foreground">The reasons our clients keep coming back, project after project.</p>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.08}>
              <motion.div whileHover={{ y: -6 }} className="h-full">
                <Card className="h-full border-border shadow-card hover:border-primary/30 hover:shadow-brand transition-all">
                  <CardHeader>
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                      <p.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="mt-4 font-display text-lg">{p.title}</CardTitle>
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

      {/* Why Choose Us */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
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
              >
                <Badge variant="outline" className="flex items-center gap-2 rounded-xl border-border bg-background px-4 py-2.5 text-sm font-normal w-full justify-start cursor-default hover:border-primary/40 transition-colors">
                  <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-primary">
                    <Check className="h-3 w-3" />
                  </span>
                  {w}
                </Badge>
              </motion.div>
            ))}
          </div>
          <Separator className="my-8" />
          <div className="flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand">
              <Link href="/contact">Start a Project <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <TechStackGrid />
    </PageShell>
  );
}
