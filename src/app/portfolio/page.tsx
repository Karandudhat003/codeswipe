"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

const CATEGORIES = ["All", "Web Applications", "Mobile Applications", "UI/UX Design", "AI Systems"] as const;
type Category = (typeof CATEGORIES)[number];

const projects: { id: number; category: Exclude<Category, "All">; img: string; aspect: string }[] = [
  {
    id: 1,
    category: "Web Applications",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 2,
    category: "Web Applications",
    img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-square",
  },
  {
    id: 3,
    category: "Web Applications",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 4,
    category: "Mobile Applications",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    id: 5,
    category: "Mobile Applications",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-square",
  },
  {
    id: 6,
    category: "Mobile Applications",
    img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 7,
    category: "AI Systems",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-square",
  },
  {
    id: 8,
    category: "AI Systems",
    img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 9,
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-square",
  },
  {
    id: 10,
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
  {
    id: 11,
    category: "UI/UX Design",
    img: "https://images.unsplash.com/photo-1541462608143-67571c6738dd?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[3/4]",
  },
  {
    id: 12,
    category: "Web Applications",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    aspect: "aspect-[4/3]",
  },
];

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("All");

  const filtered = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <PageShell>
      {/* Hero */}
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <Reveal>
            <Eyebrow>Our Work</Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold leading-tight">
              Products we shipped.{" "}
              <span className="text-gradient">Outcomes we measured.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 mx-auto max-w-2xl text-muted-foreground text-base sm:text-lg">
              A curated look at what we've built — from SaaS platforms and mobile apps to AI systems and stunning digital experiences.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <Reveal delay={0.3}>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12">
            {CATEGORIES.map((cat) => (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileTap={{ scale: 0.95 }}
                className={`rounded-full px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm font-medium transition-all duration-200 border ${
                  activeFilter === cat
                    ? "bg-brand text-white border-transparent shadow-brand"
                    : "bg-card border-border text-muted-foreground hover:border-primary/40 hover:text-foreground"
                }`}
              >
                {cat}
              </motion.button>
            ))}
          </div>
        </Reveal>

        {/* Gallery */}
        <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.85 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl bg-muted break-inside-avoid mb-4"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.img}
                  alt={p.category}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.aspect}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="inline-block rounded-full bg-white/20 backdrop-blur-sm border border-white/30 px-3 py-1 text-xs font-medium text-white">
                    {p.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-24 text-muted-foreground">
            No projects found in this category.
          </div>
        )}
      </section>
    </PageShell>
  );
}
