"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Code2, Smartphone, Palette, Cloud, Brain, ShieldCheck, Clock, Users, MessageCircle, Mail, ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CONTACT, mailLink, waLink } from "@/lib/contact-info";


const roles = [
  { icon: Code2, title: "Full-Stack Developer", stack: "React · TS · Node · Postgres", rate: "from ₹1.2L / mo" },
  { icon: Smartphone, title: "Mobile Developer", stack: "Flutter · React Native · Swift", rate: "from ₹1.4L / mo" },
  { icon: Palette, title: "UI/UX Designer", stack: "Figma · Design Systems", rate: "from ₹90k / mo" },
  { icon: Cloud, title: "DevOps / Backend", stack: "AWS · Docker · CI/CD", rate: "from ₹1.5L / mo" },
  { icon: Brain, title: "AI / ML Engineer", stack: "Python · LLMs · RAG", rate: "from ₹1.8L / mo" },
  { icon: ShieldCheck, title: "QA Automation", stack: "Playwright · Cypress", rate: "from ₹80k / mo" },
];

const perks = [
  { icon: Clock, title: "Start in 5–7 days", desc: "Pre-vetted engineers ready to onboard fast." },
  { icon: Users, title: "Dedicated & senior", desc: "3+ years average — no juniors billed as seniors." },
  { icon: ShieldCheck, title: "NDA & IP protected", desc: "All code, designs and IP transfer to you." },
];

export default function HirePage() {
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "Full-Stack Developer", duration: "3 months", details: "" });

  const compose = () => {
    return `Hire request — ${form.role}\n\nName: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nDuration: ${form.duration}\n\nDetails:\n${form.details}`;
  };

  const submit = (via: "email" | "whatsapp") => {
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    if (via === "email") window.location.href = mailLink(`Hire ${form.role}`, compose());
    else window.open(waLink(compose()), "_blank");
    toast.success("Opening your " + (via === "email" ? "email app" : "WhatsApp") + "…");
  };

  return (
    <PageShell>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-brand opacity-20 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-20">
          <Reveal><Eyebrow>Hire dedicated developers</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Senior engineers, <span className="text-gradient italic">on your team.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Skip the recruiting cycle. Get a vetted developer, designer or product engineer working with you inside a week — dedicated, senior and priced transparently.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" className="rounded-full bg-brand text-primary-foreground shadow-brand hover:opacity-95" onClick={() => document.getElementById("hire-form")?.scrollIntoView({ behavior: "smooth" })}>
                Start Hiring <ArrowUpRight className="h-4 w-4 ml-1" />
              </Button>
              <a href={waLink("Hi, I'd like to hire a dedicated developer.")} target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="rounded-full">
                  <MessageCircle className="h-4 w-4 mr-1.5" /> WhatsApp Us
                </Button>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-4 md:grid-cols-3">
          {perks.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <Card className="border-border shadow-card">
                <CardContent className="p-6">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 font-display font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{p.desc}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-8">
        <Reveal><Eyebrow>Roles available</Eyebrow></Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold">Pick the <span className="text-gradient">talent you need.</span></h2>
        </Reveal>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((r, i) => (
            <Reveal key={r.title} delay={i * 0.04}>
              <motion.div whileHover={{ y: -4 }}>
                <Card className="border-border shadow-card h-full">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                        <r.icon className="h-5 w-5" />
                      </div>
                      <span className="text-xs font-medium text-primary">{r.rate}</span>
                    </div>
                    <h3 className="mt-4 font-display font-semibold">{r.title}</h3>
                    <p className="mt-1 text-xs text-muted-foreground">{r.stack}</p>
                    <Button
                      variant="ghost"
                      className="mt-4 -ml-3 text-primary hover:text-primary"
                      onClick={() => {
                        setForm((f) => ({ ...f, role: r.title }));
                        document.getElementById("hire-form")?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Hire this role <ArrowUpRight className="h-4 w-4 ml-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="hire-form" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 md:grid-cols-2 md:items-start">
        <Reveal>
          <Eyebrow>Tell us what you need</Eyebrow>
          <h2 className="mt-4 text-3xl md:text-4xl font-display font-semibold">
            Get a matched developer in <span className="text-gradient">under a week.</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Fill the form and we'll send matched profiles within 48 hours. Prefer to talk? WhatsApp or email us — both work.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a className="flex items-center gap-2 text-foreground hover:text-primary" href={mailLink("Hire a developer", "")}>
              <Mail className="h-4 w-4" /> {CONTACT.email}
            </a>
            <a className="flex items-center gap-2 text-foreground hover:text-primary" href={waLink("Hi, I'd like to hire a developer.")} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="h-4 w-4" /> WhatsApp {CONTACT.phone}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <Card className="border-border shadow-card">
            <CardContent className="p-6 md:p-8 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="h-name">Your name *</Label>
                  <Input id="h-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Jane Doe" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="h-email">Email *</Label>
                  <Input id="h-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="jane@company.com" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="h-company">Company</Label>
                <Input id="h-company" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} placeholder="Company name" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="h-role">Role</Label>
                  <select id="h-role" value={form.role} onChange={(e) => setForm({ ...form, role: e.target.value })} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                    {roles.map((r) => <option key={r.title}>{r.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="h-dur">Duration</Label>
                  <select id="h-dur" value={form.duration} onChange={(e) => setForm({ ...form, duration: e.target.value })} className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm">
                    <option>1 month</option><option>3 months</option><option>6 months</option><option>12 months+</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="h-details">Project details</Label>
                <Textarea id="h-details" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="What are you building? Tech stack, timeline, team size…" />
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Button className="rounded-full bg-brand text-primary-foreground shadow-brand hover:opacity-95" onClick={() => submit("email")}>
                  <Mail className="h-4 w-4 mr-1.5" /> Send via Email
                </Button>
                <Button variant="outline" className="rounded-full" onClick={() => submit("whatsapp")}>
                  <MessageCircle className="h-4 w-4 mr-1.5" /> Send via WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </PageShell>
  );
}
