"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, Send, CheckCircle2, Clock, MessageCircle, MapPin, Zap, ArrowUpRight, Sparkles } from "lucide-react";
import { CONTACT } from "@/lib/contact-info";
import { PageShell } from "@/components/site/PageShell";
import { cn } from "@/lib/utils";

const BUILDING_OPTIONS = ["Website", "Mobile App", "SaaS", "AI Product", "Shopify / Store", "Redesign", "Other"];

const contactCards = [
  { icon: Mail, label: "Email Us", value: "info@codeswipeitsolutions.com", href: `mailto:${CONTACT.email}`, badge: "Primary", color: "from-blue-600 to-indigo-600" },
  { icon: Phone, label: "Call / WhatsApp", value: CONTACT.phone1, href: `tel:${CONTACT.phone1.replace(/\s+/g, '')}`, badge: "24h", color: "from-emerald-600 to-teal-600" },
  { icon: Phone, label: "Alternate Number", value: CONTACT.phone2, href: `tel:${CONTACT.phone2.replace(/\s+/g, '')}`, badge: null, color: "from-purple-600 to-pink-600" },
];

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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden bg-slate-950 text-white py-20 border-b border-slate-800">
        {/* Background orbs */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-600/20 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-600/15 blur-[100px] rounded-full pointer-events-none" />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none opacity-20"
          style={{ backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Say Hello</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold max-w-4xl leading-tight tracking-tight"
          >
            Let&apos;s engineer your next{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              category-defining product.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-2xl text-slate-400 text-lg leading-relaxed"
          >
            Fill in the form and we&apos;ll get back to you within 1 business day with a tailored proposal.
          </motion.p>

          {/* Quick stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-6"
          >
            {[
              { icon: Zap, label: "Response in 24h" },
              { icon: CheckCircle2, label: "100% Satisfaction" },
              { icon: Clock, label: "Projects Start in 5–7 Days" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2 text-slate-300 text-sm">
                <item.icon className="w-4 h-4 text-indigo-400" />
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ── */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid gap-10 lg:grid-cols-[1fr_1.6fr]">

        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-4"
        >
          <h2 className="text-2xl font-display font-bold text-slate-900 mb-6">Get in Touch</h2>

          {/* Contact Cards */}
          {contactCards.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -3 }}
              className="group flex items-center gap-4 p-4 rounded-2xl border border-slate-200 bg-white hover:border-indigo-400/50 hover:shadow-lg transition-all duration-300"
            >
              <div className={`h-12 w-12 shrink-0 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center text-white shadow-lg`}>
                <c.icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <p className="text-xs uppercase tracking-widest text-slate-500">{c.label}</p>
                  {c.badge && (
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-[10px] font-bold">{c.badge}</span>
                  )}
                </div>
                <p className="mt-0.5 font-semibold text-slate-900 text-sm truncate">{c.value}</p>
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </motion.a>
          ))}

          {/* Response time */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-200/60">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-slate-500">Typical Response</p>
                <p className="mt-0.5 text-lg font-display font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Within 1 Business Day
                </p>
              </div>
            </div>
          </div>

          {/* WhatsApp quick chat */}
          <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200/60">
            <div className="flex items-center gap-2 mb-3">
              <MessageCircle className="h-5 w-5 text-emerald-600" />
              <p className="font-semibold text-sm text-slate-900">Prefer WhatsApp?</p>
            </div>
            <p className="text-xs text-slate-600 mb-4">Get instant replies during business hours.</p>
            <a
              href={`https://wa.me/917265025017?text=${encodeURIComponent("Hi CodeSwipe! I'd like to discuss a project.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold py-2.5 transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right: Premium Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/60 overflow-hidden">
            {/* Form Header */}
            <div className="bg-slate-950 px-8 py-6">
              <h2 className="text-xl font-display font-bold text-white">Send Us a Message</h2>
              <p className="text-slate-400 text-sm mt-1">We read every message and reply within 24 hours.</p>
            </div>

            <div className="p-8">
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="mb-6 p-5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center gap-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <p className="font-bold text-emerald-800">Message Sent Successfully!</p>
                      <p className="text-sm text-emerald-700 mt-0.5">We&apos;ll get back to you within 1 business day.</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {error && (
                <div className="mb-6 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-700 text-sm">
                  {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name *</label>
                    <input
                      id="name"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Doe"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="john@company.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
                    />
                  </div>
                </div>

                {/* Phone + Company */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium text-slate-700">Company Name</label>
                    <input
                      id="company"
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Acme Tech Solutions"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition"
                    />
                  </div>
                </div>

                {/* What are you building? */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">What are you building?</label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {BUILDING_OPTIONS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => toggleBuilding(t)}
                        className={cn(
                          "rounded-full border px-4 py-1.5 text-xs font-medium transition-all cursor-pointer",
                          formData.building.includes(t)
                            ? "border-indigo-600 text-indigo-700 bg-indigo-50 shadow-sm"
                            : "border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-600 bg-white"
                        )}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-1.5">
                  <label htmlFor="projectDetails" className="text-sm font-medium text-slate-700">Tell us about your project *</label>
                  <textarea
                    id="projectDetails"
                    required
                    rows={5}
                    value={formData.projectDetails}
                    onChange={e => setFormData({ ...formData, projectDetails: e.target.value })}
                    placeholder="Describe your goals, tech stack preferences, timeline, or project scope..."
                    className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500/40 focus:border-indigo-400 transition resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3.5 text-sm hover:from-indigo-500 hover:to-purple-500 transition-all shadow-lg shadow-indigo-600/25 disabled:opacity-60"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4" />
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>
    </PageShell>
  );
}
