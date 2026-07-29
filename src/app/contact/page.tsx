"use client";
import { useState } from "react";
import { Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/contact-info";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

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
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", phone: "", company: "", building: [], projectDetails: "" });
      }
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <PageShell hideCta>
      <section className="bg-hero border-b border-border">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <Reveal><Eyebrow>Say hello</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Let's engineer your next <span className="text-gradient">category-defining product.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
              { icon: Phone, label: "Phone Number 1 (Primary)", value: CONTACT.phone1, href: `tel:${CONTACT.phone1.replace(/\s+/g, '')}` },
              { icon: Phone, label: "Phone Number 2 / WhatsApp", value: CONTACT.phone2, href: `tel:${CONTACT.phone2.replace(/\s+/g, '')}` },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card hover:border-primary/40 transition">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary shrink-0">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display font-semibold text-foreground">{c.value}</div>
                </div>
              </a>
            ))}

            <div className="rounded-2xl border border-border bg-gradient-to-br from-accent/70 to-secondary/70 p-6 shadow-card">
              <div className="text-sm font-medium text-muted-foreground">Typical response time</div>
              <div className="mt-1 text-2xl font-display font-semibold text-gradient">Within 1 business day</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={handleSubmit} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4">
            {success && (
              <div className="p-4 mb-4 text-sm text-emerald-800 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 flex items-center gap-2" role="alert">
                <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                <span><strong>Success!</strong> Your message has been sent. We will get back to you shortly.</span>
              </div>
            )}
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Full Name *</label>
                <input required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. John Doe" className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email Address *</label>
                <input required type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="e.g. john@company.com" className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Phone Number *</label>
                <input required type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="e.g. +91 98765 43210" className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Company Name</label>
                <input value={formData.company} onChange={e => setFormData({...formData, company: e.target.value})} placeholder="e.g. Acme Tech Solutions" className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">What are you building?</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Website", "Mobile App", "SaaS", "AI Product", "Shopify / Store", "Redesign", "Other"].map((t) => (
                  <label key={t} className={`cursor-pointer rounded-full border px-4 py-1.5 text-xs font-medium transition ${formData.building.includes(t) ? 'border-primary text-primary bg-primary/10' : 'border-border hover:border-primary/50 text-muted-foreground'}`}>
                    <input type="checkbox" className="sr-only" checked={formData.building.includes(t)} onChange={() => toggleBuilding(t)} />{t}
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about your project *</label>
              <textarea required rows={5} value={formData.projectDetails} onChange={e => setFormData({...formData, projectDetails: e.target.value})} placeholder="Describe your goals, tech stack preferences, or project scope..." className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary transition" />
            </div>

            <button disabled={loading} className="inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-brand disabled:opacity-50 hover:opacity-90 transition" style={{ background: "var(--ink)" }}>
              {loading ? 'Sending...' : 'Send Message'} <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
