"use client";
import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2, Clock, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact-info";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

const BUILDING_OPTIONS = ["Website", "Mobile App", "SaaS", "AI Product", "Shopify / Store", "Redesign", "Other"];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    building: [] as string[],
    projectDetails: ""
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const toggleBuilding = (t: string) => {
    setFormData(prev => ({
      ...prev,
      building: prev.building.includes(t)
        ? prev.building.filter(i => i !== t)
        : [...prev.building, t]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", company: "", building: [], projectDetails: "" });
      } else {
        setError("Something went wrong. Please try again or WhatsApp us.");
      }
    } catch {
      setError("Network error. Please try again.");
    }
    setLoading(false);
  };

  return (
    <PageShell hideCta>
      {/* Hero */}
      <section className="bg-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <Reveal><Eyebrow>Say Hello</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Let's engineer your next <span className="text-gradient">category-defining product.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-muted-foreground text-lg">
              Fill in the form below and we'll get back to you within 1 business day with a tailored proposal.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[1fr_1.5fr]">
        {/* Left: Contact Info */}
        <Reveal>
          <div className="space-y-4">
            {/* Contact cards */}
            {[
              { icon: Mail, label: "Email Us", value: CONTACT.email, href: `mailto:${CONTACT.email}`, badge: "Primary" },
              { icon: Phone, label: "Call / WhatsApp", value: CONTACT.phone1, href: `tel:${CONTACT.phone1.replace(/\s+/g, '')}`, badge: "24h" },
              { icon: Phone, label: "Alternate Number", value: CONTACT.phone2, href: `tel:${CONTACT.phone2.replace(/\s+/g, '')}`, badge: null },
            ].map((c) => (
              <a key={c.label} href={c.href}>
                <Card className="group border-border hover:border-primary/40 hover:shadow-brand transition-all cursor-pointer">
                  <CardContent className="flex items-center gap-4 p-4">
                    <div className="h-11 w-11 shrink-0 rounded-xl bg-accent flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                      <c.icon className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</p>
                        {c.badge && <Badge variant="outline" className="text-[10px] py-0">{c.badge}</Badge>}
                      </div>
                      <p className="mt-0.5 font-display font-semibold text-foreground truncate">{c.value}</p>
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}

            {/* Response time card */}
            <Card className="border-border bg-gradient-to-br from-accent/60 to-secondary/60">
              <CardContent className="flex items-center gap-4 p-5">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Typical Response</p>
                  <p className="mt-0.5 text-xl font-display font-semibold text-gradient">Within 1 Business Day</p>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp quick chat */}
            <Card className="border-emerald-200/60 bg-emerald-50/50 dark:bg-emerald-950/20 dark:border-emerald-800/30">
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <MessageCircle className="h-5 w-5 text-emerald-600" />
                  <p className="font-semibold text-sm text-foreground">Prefer WhatsApp?</p>
                </div>
                <p className="text-xs text-muted-foreground mb-3">Get instant replies during business hours.</p>
                <Button asChild size="sm" className="w-full rounded-full bg-emerald-600 hover:bg-emerald-700 text-white">
                  <a href={`https://wa.me/917265025017?text=${encodeURIComponent("Hi CodeSwipe! I'd like to discuss a project.")}`} target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Reveal>

        {/* Right: shadcn Form */}
        <Reveal delay={0.1}>
          <Card className="border-border shadow-card rounded-3xl">
            <CardHeader className="pb-4">
              <CardTitle className="font-display text-2xl">Send Us a Message</CardTitle>
              <CardDescription>All fields marked * are required.</CardDescription>
            </CardHeader>
            <Separator />
            <CardContent className="pt-6">
              {success && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                  <div>
                    <p className="font-semibold text-sm text-emerald-800 dark:text-emerald-300">Message Sent!</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 mt-0.5">We'll get back to you within 1 business day.</p>
                  </div>
                </div>
              )}
              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 text-rose-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. John Doe"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. john@company.com"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Tech Solutions"
                      className="rounded-xl"
                    />
                  </div>
                </div>

                {/* What are you building? */}
                <div className="space-y-2">
                  <Label>What are you building?</Label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {BUILDING_OPTIONS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleBuilding(t)}
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-xs font-medium transition-all cursor-pointer",
                          formData.building.includes(t)
                            ? "border-primary text-primary bg-primary/10 shadow-sm"
                            : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <Label htmlFor="projectDetails">Tell us about your project *</Label>
                  <Textarea
                    id="projectDetails"
                    required
                    rows={5}
                    value={formData.projectDetails}
                    onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your goals, tech stack preferences, timeline, or project scope..."
                    className="rounded-2xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  size="lg"
                  className="w-full rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand"
                >
                  {loading ? "Sending..." : "Send Message"}
                  <Send className="h-4 w-4" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </section>
    </PageShell>
  );
}
