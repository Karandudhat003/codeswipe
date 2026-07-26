import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import svcWeb from "@/assets/service-web.jpg";
import svcMobile from "@/assets/service-mobile.jpg";
import svcUiUx from "@/assets/service-uiux.jpg";
import svcBackend from "@/assets/service-backend.jpg";
import svcCloud from "@/assets/service-cloud.jpg";
import svcAi from "@/assets/service-ai.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — CodeSwipe IT Solutions" },
      { name: "description", content: "Web development, mobile apps, UI/UX design, backend & APIs, cloud infrastructure and AI solutions — engineered for modern brands." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { n: "01", title: "Web Development", img: svcWeb, bullets: ["Custom Business Websites", "High-Performance Architecture", "SEO & Speed Optimization"], desc: "Build fast, scalable, and conversion-focused websites designed to strengthen your online presence and drive business growth." },
  { n: "02", title: "Mobile App Development", img: svcMobile, bullets: ["iOS & Android Apps", "Cross-Platform Development", "App Store & Google Play Deployment"], desc: "Create intuitive mobile applications that deliver seamless experiences and help businesses connect with users on every device." },
  { n: "03", title: "UI / UX Design", img: svcUiUx, bullets: ["User-Centered Design", "Interactive Prototypes", "Design Systems"], desc: "Craft engaging digital experiences with clean interfaces, thoughtful user journeys, and designs that convert visitors into customers." },
  { n: "04", title: "Backend & API Development", img: svcBackend, bullets: ["REST API Development", "Authentication Systems", "Database Architecture"], desc: "Develop secure, scalable backend solutions that power applications, automate workflows, and ensure reliable performance." },
  { n: "05", title: "Cloud Solutions", img: svcCloud, bullets: ["AWS & Vercel", "CI/CD Pipelines", "Cloud Deployment"], desc: "Modern cloud infrastructure optimized for scalability, deployment automation and enterprise reliability." },
  { n: "06", title: "AI Solutions", img: svcAi, bullets: ["AI Automation", "Chatbot Systems", "Workflow Intelligence"], desc: "Practical AI systems and automation workflows designed to improve productivity and operational efficiency." },
];

const faqs = [
  { q: "How long does it take to complete a project?", a: "The timeline depends on scope, complexity and requirements. A standard business website typically takes 4–8 weeks, while custom web applications, SaaS platforms or complex solutions may require several weeks or months. We provide a clear project roadmap and timeline before development begins to ensure transparency throughout the process." },
  { q: "Do you work with startups and enterprises?", a: "Yes. Our team is comfortable partnering with pre-seed founders and enterprise product teams alike. The engagement model, contracts and rituals adapt to the stage." },
  { q: "What services does CodeSwipe provide?", a: "We provide end-to-end product engineering: strategy, UI/UX design, web, mobile, backend, cloud, DevOps and AI integrations." },
  { q: "What technologies do you use?", a: "React, Next.js, TanStack, TypeScript, React Native, Flutter, Node.js, Python, Postgres, Supabase, Prisma, AWS and Vercel — chosen per project." },
  { q: "Can you redesign existing websites or applications?", a: "Absolutely. Redesigns are a big part of our practice — we audit the current experience, propose a design direction and ship in incremental releases." },
  { q: "Do you provide ongoing support after launch?", a: "Yes. We offer maintenance retainers with clear SLAs, monitoring, iteration sprints and feature roadmap execution." },
];

function ServicesPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 text-center">
          <Reveal><Eyebrow>Our core services</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl md:text-6xl font-display font-semibold">
              Crafting Scalable <span className="text-gradient">Digital Solutions</span> For Modern Brands
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl mx-auto text-muted-foreground">
              From the first wireframe to the final deploy — our practice covers the entire surface area of modern product building.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 space-y-6">
        {services.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.05}>
            <div className="group grid gap-6 md:grid-cols-[1fr_320px_1fr] md:items-center rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card hover:shadow-brand transition-shadow">
              <div>
                <div className="text-xs font-display font-semibold text-primary">{s.n}</div>
                <h3 className="mt-2 text-2xl font-display font-semibold">{s.title}</h3>
                <ul className="mt-4 space-y-1.5 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="mt-2 h-1 w-1 rounded-full bg-primary" />{b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="overflow-hidden rounded-2xl">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={s.img} alt={s.title} loading="lazy"
                  className="h-56 w-full object-cover" width={800} height={800}
                />
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          </Reveal>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="text-center">
          <Reveal><Eyebrow>Complete IT capability</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
              Every service your business <span className="text-gradient">needs under one roof.</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {moreServices.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.04}>
              <motion.div
                whileHover={{ y: -5 }}
                className="h-full rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-brand transition-shadow"
              >
                <h3 className="font-display text-lg font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>


      <section className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <Reveal><Eyebrow>FAQ</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 text-4xl md:text-5xl font-display font-semibold">
              Answers To Help You Move Forward With <span className="text-gradient">Confidence</span>
            </h2>
          </Reveal>
        </div>
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.04}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full text-left rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/30 transition"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-display font-semibold">{f.q}</span>
                  <motion.span animate={{ rotate: openFaq === i ? 45 : 0 }} className="text-primary shrink-0">
                    <Plus className="h-5 w-5" />
                  </motion.span>
                </div>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="pt-4 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}
