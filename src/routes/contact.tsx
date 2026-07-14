import { createFileRoute } from "@tanstack/react-router";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Reveal, Eyebrow } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — CodeSwipe IT Solutions" },
      { name: "description", content: "Start a project with CodeSwipe. Tell us about your idea and we'll get back within one business day." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell hideCta>
      <section className="bg-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16">
          <Reveal><Eyebrow>Say hello</Eyebrow></Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-5xl md:text-6xl font-display font-semibold max-w-3xl leading-tight">
              Let's engineer your next <span className="text-gradient">category-defining product.</span>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <Reveal>
          <div className="space-y-6">
            {[
              { icon: Mail, label: "Email", value: "hello@codeswipe.in" },
              { icon: Phone, label: "Phone", value: "+91 00000 00000" },
              { icon: MapPin, label: "Location", value: "Remote · Worldwide" },
            ].map((c) => (
              <div key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-primary">
                  <c.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.label}</div>
                  <div className="mt-1 font-display font-semibold">{c.value}</div>
                </div>
              </div>
            ))}

            <div className="rounded-2xl border border-border bg-gradient-to-br from-accent to-secondary p-6">
              <div className="text-sm text-muted-foreground">Typical response time</div>
              <div className="mt-1 text-2xl font-display font-semibold text-gradient">Within 1 business day</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={(e) => e.preventDefault()} className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <input className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
              <div>
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
                <input type="email" className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Company</label>
              <input className="mt-2 w-full rounded-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">What are you building?</label>
              <div className="mt-2 flex flex-wrap gap-2">
                {["Website", "Mobile App", "SaaS", "AI Product", "Redesign", "Other"].map((t) => (
                  <label key={t} className="cursor-pointer rounded-full border border-border px-4 py-1.5 text-xs font-medium hover:border-primary hover:text-primary transition">
                    <input type="checkbox" className="sr-only" />{t}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Tell us about your project</label>
              <textarea rows={5} className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary" />
            </div>
            <button className="inline-flex items-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-brand" style={{ background: "var(--ink)" }}>
              Send Message <Send className="h-4 w-4" />
            </button>
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}
