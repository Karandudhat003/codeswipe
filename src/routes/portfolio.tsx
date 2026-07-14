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

const projects = [
  { title: "PopShop — E-commerce Store", tag: "E-commerce", grad: "from-orange-100 to-rose-100", stats: [["35%", "Bounce"], ["40%", "Conv"], ["30%", "Sales"]], desc: "A full-funnel modern e-commerce experience designed for a youth-forward brand with lookbook and smooth navigation." },
  { title: "CryptoBooster Web3 Platform", tag: "Web3", grad: "from-indigo-100 to-cyan-100", stats: [["100+", "Actions"], ["50+", "Investors"], ["100+", "Deals"]], desc: "A crypto crowdfunding platform where investors discover funds and creators safely raise and manage campaigns, users and platform operations." },
  { title: "Marketing & Listing Hub", tag: "SaaS", grad: "from-violet-100 to-fuchsia-100", stats: [["500+", "Campaigns"], ["1000+", "Users"], ["70%", "Engagement"]], desc: "A marketing platform for blockchain projects featuring campaign management, influencer collaboration, reward automation and real-time performance analytics." },
  { title: "Hiring Hub", tag: "Multi-Portal", grad: "from-orange-50 to-yellow-100", stats: [["CV/JD", "Match"], ["Free", "Booking"], ["Calendly", "Sync"], ["Lock-in", "Retain"]], desc: "A commerce-scale recruitment platform that connects companies and talent through a channel-based hiring workflow, interview scheduling, and advanced candidate tracking." },
  { title: "EdTech Platform", tag: "Learning", grad: "from-sky-100 to-indigo-100", stats: [["All-in-One", "LMS"], ["Modular", "Content"], ["ROI", "Report"], ["Multiple", "Roles"]], desc: "An all-in-one education platform empowering learners, educators and institutions with personalized dashboards, content library, live sessions, insights and a flexible admin management." },
  { title: "Smart Attendance System", tag: "AI · Tracking", grad: "from-blue-100 to-sky-100", stats: [["Face Recognition", ""], ["Geo-Fencing", ""], ["Realtime", "Reports"]], desc: "A comprehensive attendance management solution that helps educators, institutions, track attendance, manage users, generate reports across staff and hierarchies, and improve productivity through centralized dashboards and real-time analytics." },
  { title: "Fundraising & Investment", tag: "Web3 · Fundraising", grad: "from-emerald-100 to-teal-100", stats: [["Investor Deals", ""], ["Investor Pool", ""], ["Cryptocurrency", ""], ["Investor Track", ""]], desc: "A Web3 fundraising ecosystem platform that connects founders with investors through a secure blockchain-powered fundraising system, unlocking the world of raising an automated fund management." },
  { title: "Agreement Signing Platform", tag: "LegalTech · SaaS", grad: "from-blue-100 to-violet-100", stats: [["e-Signature", ""], ["Placeholder", ""], ["Model Templates", ""], ["Document Management", ""]], desc: "A modern e-contract lifecycle management platform featuring digital signatures, AI-driven document processing, secure agreement storage, and analytics powered workflows for an enhanced client experience." },
  { title: "CRM Hub", tag: "CRM · Lead Management", grad: "from-slate-100 to-indigo-100", stats: [["Lead Management", ""], ["Team Collaboration", ""], ["Commission System", ""], ["Deal Tracking", ""]], desc: "A scalable customer relationship management platform designed to optimize lead conversion, commission tracking, and team collaboration through powerful and pipeline automation." },
  { title: "Label Akshi — Fashion Portfolio", tag: "Fashion Brand", grad: "from-pink-100 to-rose-100", stats: [["Portfolio", ""], ["Product", ""], ["Ownership", ""]], desc: "A premium portfolio website for a leading brand highlighting collections and celebrating the essence of quiet couture." },
  { title: "Advisor/Client Platform", tag: "Advisory · SaaS", grad: "from-violet-100 to-blue-100", stats: [["Advisor Booking", ""], ["Chat/Call", ""], ["Payment System", ""], ["Client Management", ""]], desc: "A professional platform marketplace that connects and discovers advisors, books consultations, secures conversions, and streamlines advisor operations through secure use-cased portals." },
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
