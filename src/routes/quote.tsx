import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { Check, MessageCircle, Mail, FileText, ArrowUpRight, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { mailLink, waLink } from "@/lib/contact-info";

export const Route = createFileRoute("/quote")({
  head: () => ({
    meta: [
      { title: "Request a Quote — CodeSwipe IT Solutions" },
      { name: "description", content: "Get an instant project estimate. Pick your services, timeline and complexity — we send a detailed quotation within 24 hours." },
      { property: "og:title", content: "Request a Quote — CodeSwipe" },
      { property: "og:description", content: "Instant project estimate. Detailed quotation within 24 hours." },
    ],
  }),
  component: QuotePage,
});

type Svc = { id: string; label: string; base: number };
const services: Svc[] = [
  { id: "web", label: "Website / Landing", base: 45000 },
  { id: "webapp", label: "Web Application / SaaS", base: 180000 },
  { id: "mobile", label: "Mobile App (iOS + Android)", base: 220000 },
  { id: "uiux", label: "UI/UX Design System", base: 60000 },
  { id: "backend", label: "Backend & API", base: 120000 },
  { id: "ai", label: "AI / LLM Integration", base: 150000 },
  { id: "ecom", label: "E-Commerce Platform", base: 140000 },
  { id: "cms", label: "CMS / Admin Panel", base: 90000 },
];

const timelines = ["Under 1 month", "1–3 months", "3–6 months", "6+ months"];
const complexityLabels = ["Simple", "Standard", "Advanced", "Enterprise"];

function fmt(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n);
}

function QuotePage() {
  const [picked, setPicked] = useState<string[]>(["web"]);
  const [complexity, setComplexity] = useState<number>(1); // 0-3
  const [timeline, setTimeline] = useState<string>("1–3 months");
  const [form, setForm] = useState({ name: "", email: "", company: "", details: "" });

  const totals = useMemo(() => {
    const base = services.filter((s) => picked.includes(s.id)).reduce((a, s) => a + s.base, 0);
    const multiplier = [0.85, 1, 1.4, 1.9][complexity];
    const rush = timeline === "Under 1 month" ? 1.2 : 1;
    const min = Math.round((base * multiplier * rush) / 1000) * 1000;
    const max = Math.round((min * 1.35) / 1000) * 1000;
    return { min, max };
  }, [picked, complexity, timeline]);

  const toggle = (id: string) =>
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const compose = () => {
    const svcList = services.filter((s) => picked.includes(s.id)).map((s) => `• ${s.label}`).join("\n") || "• (none selected)";
    return `Quotation Request

Name: ${form.name}
Email: ${form.email}
Company: ${form.company}

Services:
${svcList}

Complexity: ${complexityLabels[complexity]}
Timeline: ${timeline}
Estimated range: ${fmt(totals.min)} – ${fmt(totals.max)}

Details:
${form.details}`;
  };

  const submit = (via: "email" | "whatsapp") => {
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please enter your name and email.");
      return;
    }
    if (picked.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }
    if (via === "email") window.location.href = mailLink("Quotation Request — CodeSwipe", compose());
    else window.open(waLink(compose()), "_blank");
    toast.success("Sending your quotation request…");
  };

  return (
    <PageShell>
      <section className="bg-hero relative overflow-hidden">
        <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-brand opacity-20 blur-3xl" aria-hidden />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <Reveal><Eyebrow>Request a Quote</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Instant project <span className="text-gradient italic">estimate.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Pick the services you need. We'll show a live estimate range and send a detailed quotation within 24 hours.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-8 lg:grid-cols-[1fr_380px] items-start">
        <div className="space-y-8">
          <Reveal>
            <h2 className="text-xl font-display font-semibold">1. Choose services</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {services.map((s) => {
                const on = picked.includes(s.id);
                return (
                  <motion.button
                    key={s.id}
                    type="button"
                    onClick={() => toggle(s.id)}
                    whileTap={{ scale: 0.98 }}
                    className={`text-left rounded-2xl border p-4 transition ${
                      on ? "border-primary bg-accent shadow-brand" : "border-border bg-card hover:border-primary/40"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <div className="font-display font-semibold">{s.label}</div>
                        <div className="text-xs text-muted-foreground mt-1">Base from {fmt(s.base)}</div>
                      </div>
                      <div className={`h-5 w-5 rounded-full flex items-center justify-center border ${on ? "bg-brand border-transparent text-primary-foreground" : "border-border"}`}>
                        {on && <Check className="h-3 w-3" />}
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-xl font-display font-semibold">2. Complexity</h2>
            <div className="mt-4 rounded-2xl border border-border bg-card p-6 shadow-card">
              <div className="flex justify-between text-xs text-muted-foreground mb-3">
                {complexityLabels.map((l, i) => (
                  <span key={l} className={i === complexity ? "text-primary font-medium" : ""}>{l}</span>
                ))}
              </div>
              <Slider value={[complexity]} onValueChange={(v) => setComplexity(v[0])} min={0} max={3} step={1} />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <h2 className="text-xl font-display font-semibold">3. Timeline</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {timelines.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => setTimeline(t)}
                  className={`rounded-full border px-4 py-2 text-sm transition ${
                    t === timeline ? "border-primary bg-brand text-primary-foreground shadow-brand" : "border-border hover:border-primary/40"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2 className="text-xl font-display font-semibold">4. Your details</h2>
            <Card className="mt-4 border-border shadow-card">
              <CardContent className="p-6 space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="q-name">Your name *</Label>
                    <Input id="q-name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="q-email">Email *</Label>
                    <Input id="q-email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="q-co">Company</Label>
                  <Input id="q-co" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="q-det">Project details</Label>
                  <Textarea id="q-det" rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="Goals, features, target users…" />
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>

        {/* Sticky summary */}
        <div className="lg:sticky lg:top-28">
          <Reveal delay={0.1}>
            <Card className="border-border shadow-card overflow-hidden">
              <div className="bg-brand text-primary-foreground p-6">
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest opacity-80">
                  <Sparkles className="h-3.5 w-3.5" /> Live estimate
                </div>
                <div className="mt-3 text-3xl md:text-4xl font-display font-semibold">
                  {fmt(totals.min)} <span className="opacity-70 text-lg">–</span> {fmt(totals.max)}
                </div>
                <div className="mt-1 text-xs opacity-80">Indicative range. Final quote sent within 24 hours.</div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Selected</div>
                  <ul className="mt-2 space-y-1 text-sm">
                    {picked.length === 0 && <li className="text-muted-foreground">No services selected yet.</li>}
                    {services.filter((s) => picked.includes(s.id)).map((s) => (
                      <li key={s.id} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> {s.label}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div className="rounded-lg bg-muted p-3"><div className="text-muted-foreground">Complexity</div><div className="mt-1 font-medium">{complexityLabels[complexity]}</div></div>
                  <div className="rounded-lg bg-muted p-3"><div className="text-muted-foreground">Timeline</div><div className="mt-1 font-medium">{timeline}</div></div>
                </div>
                <div className="grid gap-2 pt-2">
                  <Button className="rounded-full bg-brand text-primary-foreground shadow-brand hover:opacity-95" onClick={() => submit("email")}>
                    <Mail className="h-4 w-4 mr-1.5" /> Send via Email <ArrowUpRight className="h-4 w-4 ml-1" />
                  </Button>
                  <Button variant="outline" className="rounded-full" onClick={() => submit("whatsapp")}>
                    <MessageCircle className="h-4 w-4 mr-1.5" /> Send via WhatsApp
                  </Button>
                  <Button variant="ghost" className="rounded-full" onClick={() => { navigator.clipboard.writeText(compose()); toast.success("Quotation copied to clipboard"); }}>
                    <FileText className="h-4 w-4 mr-1.5" /> Copy summary
                  </Button>
                </div>
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </section>
    </PageShell>
  );
}
