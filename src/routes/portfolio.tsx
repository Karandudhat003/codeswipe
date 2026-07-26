import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — CodeSwipe IT Solutions" },
      { name: "description", content: "Selected work by CodeSwipe IT Solutions — SaaS platforms, marketplaces, mobile apps and brand websites we designed and engineered." },
    ],
  }),
  component: PortfolioPage,
});

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1000&q=70`;

const projects = [
  { title: "PopShop — E-commerce Store", tag: "E-commerce", img: u("photo-1556742049-0cfed4f6a45d"), stats: [["35%", "Bounce"], ["40%", "Conv"], ["30%", "Sales"]], desc: "A full-funnel modern e-commerce experience designed for a youth-forward brand with lookbook, smart search and a frictionless checkout." },
  { title: "CryptoBooster Web3 Platform", tag: "Web3", img: u("photo-1621504450181-5d356f61d307"), stats: [["100+", "Actions"], ["50+", "Investors"], ["100+", "Deals"]], desc: "A crypto crowdfunding platform where investors discover funds and creators safely raise and manage campaigns, users and platform operations." },
  { title: "Marketing & Listing Hub", tag: "SaaS", img: u("photo-1460925895917-afdab827c52f"), stats: [["500+", "Campaigns"], ["1000+", "Users"], ["70%", "Engagement"]], desc: "A marketing platform featuring campaign management, influencer collaboration, reward automation and real-time performance analytics." },
  { title: "Hiring Hub", tag: "Multi-Portal", img: u("photo-1552664730-d307ca884978"), stats: [["CV/JD", "Match"], ["Free", "Booking"], ["Calendly", "Sync"]], desc: "A recruitment platform connecting companies and talent through channel-based hiring workflows, interview scheduling and candidate tracking." },
  { title: "EdTech Learning Platform", tag: "Learning", img: u("photo-1522202176988-66273c2fd55f"), stats: [["All-in-One", "LMS"], ["Modular", "Content"], ["Multiple", "Roles"]], desc: "An education platform empowering learners, educators and institutions with dashboards, a content library, live sessions and insights." },
  { title: "Smart Attendance System", tag: "AI · Tracking", img: u("photo-1517245386807-bb43f82c33c4"), stats: [["Face", "Recognition"], ["Geo", "Fencing"], ["Realtime", "Reports"]], desc: "An attendance management solution with face recognition, geo-fencing and centralized dashboards with real-time analytics." },
  { title: "Fundraising & Investment", tag: "Web3 · Fundraising", img: u("photo-1611974789855-9c2a0a7236a3"), stats: [["Investor", "Deals"], ["Crypto", "Payments"], ["Portfolio", "Track"]], desc: "A Web3 fundraising ecosystem connecting founders with investors through a secure, blockchain-powered fund management system." },
  { title: "Agreement Signing Platform", tag: "LegalTech · SaaS", img: u("photo-1450101499163-c8848c66ca85"), stats: [["e-Signature", ""], ["Templates", ""], ["Doc", "Management"]], desc: "A contract lifecycle platform with digital signatures, AI-driven document processing, secure storage and analytics-powered workflows." },
  { title: "CRM Hub", tag: "CRM · Lead Management", img: u("photo-1551288049-bebda4e38f71"), stats: [["Lead", "Management"], ["Commission", "System"], ["Deal", "Tracking"]], desc: "A scalable CRM designed to optimize lead conversion, commission tracking and team collaboration through pipeline automation." },
  { title: "Label Akshi — Fashion Portfolio", tag: "Fashion Brand", img: u("photo-1490481651871-ab68de25d43d"), stats: [["Portfolio", ""], ["Lookbook", ""], ["CMS", ""]], desc: "A premium portfolio website for a fashion label, highlighting collections and celebrating the essence of quiet couture." },
  { title: "Advisor / Client Platform", tag: "Advisory · SaaS", img: u("photo-1600880292203-757bb62b4baf"), stats: [["Booking", ""], ["Chat & Call", ""], ["Payments", ""]], desc: "A marketplace that connects clients with advisors, books consultations and streamlines advisory operations through secure portals." },
];


function PortfolioPage() {
  return (
    <PageShell>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <Reveal><Eyebrow>Selected work</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold">
              Products we shipped. <span className="text-gradient">Outcomes we measured.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.04}>
            <motion.article
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-border bg-card p-5 shadow-card hover:shadow-brand transition-shadow h-full"
            >
              <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${p.grad}`}>
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex items-center gap-2">
                      {[0, 1, 2].map((n) => (
                        <div key={n} className="h-2 w-8 rounded-full bg-white/60" />
                      ))}
                    </div>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-6xl font-display font-bold text-white/40">0{(i % 9) + 1}</span>
                    </div>
                  </div>
                </div>
                <motion.div
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.9 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                />
              </div>
              <div className="mt-5">
                <div className="text-xs uppercase tracking-widest text-primary">{p.tag}</div>
                <h3 className="mt-1 text-xl font-display font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stats.map(([k, v]) => (
                    <span key={k + v} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                      <span className="text-primary font-semibold">{k}</span>{v ? ` ${v}` : ""}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
