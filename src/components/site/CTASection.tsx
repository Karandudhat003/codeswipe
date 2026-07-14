import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-accent to-secondary p-10 md:p-14"
    >
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute -left-16 -bottom-16 h-56 w-56 rounded-full bg-primary-glow/20 blur-3xl" />

      <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <h3 className="text-3xl md:text-4xl font-display font-semibold">
            Have an ambitious idea?
          </h3>
          <p className="mt-2 text-3xl md:text-4xl font-display font-semibold text-gradient">
            Let's engineer it into a category-defining product.
          </p>
          <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
            From a single brief to a fully-shipped platform — our team takes ownership of design, engineering and growth from day one.
          </p>
        </div>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 self-start md:self-auto rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-brand"
          style={{ background: "var(--ink)" }}
        >
          Start Your Project <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.section>
  );
}
