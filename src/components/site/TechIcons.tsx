import { motion } from "framer-motion";
import { MARQUEE_TECH, TECH_GROUPS } from "@/lib/site-content";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

const iconUrl = (slug: string) => `https://cdn.simpleicons.org/${slug}`;

export function TechIcon({ slug, name, size = 28 }: { slug?: string; name: string; size?: number }) {
  if (!slug) {
    return (
      <span
        aria-hidden
        style={{ width: size, height: size }}
        className="inline-flex items-center justify-center rounded-md bg-brand text-[9px] font-semibold text-primary-foreground transition-transform duration-300 group-hover:scale-110"
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    );
  }
  return (
    <img
      src={iconUrl(slug)}
      alt={`${name} logo`}
      loading="lazy"
      width={size}
      height={size}
      style={{ width: size, height: size }}
      className="object-contain transition-transform duration-300 group-hover:scale-110"
    />
  );
}


/** Infinite scrolling strip of animated technology icons. */
export function TechMarquee() {
  const row = [...MARQUEE_TECH, ...MARQUEE_TECH];
  return (
    <div className="relative overflow-hidden py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
      <div className="flex w-max gap-10 animate-marquee">
        {row.map((slug, i) => (
          <motion.span
            key={`${slug}-${i}`}
            whileHover={{ y: -6, scale: 1.15 }}
            className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-card shadow-card"
          >
            <TechIcon slug={slug} name={slug} size={26} />
          </motion.span>
        ))}
      </div>
    </div>
  );
}

/** Full technology stack, grouped, with animated icon chips. */
export function TechStackGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center">
        <Reveal><Eyebrow>Technologies we use</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 text-3xl md:text-5xl font-display font-semibold">
            A modern stack, <span className="text-gradient">chosen per project.</span>
          </h2>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {TECH_GROUPS.map((g, gi) => (
          <Reveal key={g.group} delay={gi * 0.05}>
            <div className="h-full rounded-2xl border border-border bg-card p-6 shadow-card">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-primary">
                {g.group}
              </h3>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {g.tech.map((t, i) => (
                  <motion.span
                    key={t.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.03 }}
                    whileHover={{ y: -3 }}
                    className="group inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium hover:border-primary/40 hover:shadow-brand transition"
                  >
                    <TechIcon slug={t.slug} name={t.name} size={16} />
                    {t.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
