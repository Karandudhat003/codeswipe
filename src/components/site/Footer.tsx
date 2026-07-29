"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram, Mail, Phone, Check, Loader2 } from "lucide-react";
import { CONTACT } from "@/lib/contact-info";
import logo from "@/assets/logo.png";

const companyLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/careers", label: "Careers" },
  { href: "/blogs", label: "Blogs" },
];

const serviceLinks = [
  "Mobile App Development",
  "Web Development",
  "UI / UX Design",
  "Backend & API",
  "Cloud Solutions",
  "AI Solutions",
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com/company/codeswipe", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/codeswipe", label: "Instagram" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [msg, setMsg] = useState("");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setStatus("error");
      setMsg("Please enter a valid email");
      return;
    }

    setStatus("loading");
    setMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        setMsg("Thanks for subscribing!");
        setEmail("");
      } else {
        setStatus("error");
        setMsg(data.error || "Failed to subscribe");
      }
    } catch (err) {
      setStatus("error");
      setMsg("Network error. Please try again.");
    }
  };

  return (
    <footer className="mt-24 bg-[oklch(0.14_0.04_275)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Image
              src={logo}
              alt="CodeSwipe IT Solutions"
              height={32}
              className="h-8 w-auto brightness-0 invert opacity-90"
            />
            <p className="mt-6 text-lg font-display font-semibold leading-tight">
              Let's Build Something{" "}
              <span className="text-gradient">Amazing Together.</span>
            </p>
            <p className="mt-3 text-sm text-white/60 leading-relaxed">
              Transforming ideas into powerful digital solutions. We build modern web apps, mobile apps and AI solutions.
            </p>
            <div className="mt-6">
              <label className="text-xs uppercase tracking-widest text-white/50">Newsletter</label>
              <form className="mt-2 flex overflow-hidden rounded-full bg-white/10 backdrop-blur border border-white/10" onSubmit={handleSubscribe}>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  disabled={status === "loading" || status === "success"}
                  className="flex-1 bg-transparent px-4 py-2.5 text-sm placeholder:text-white/40 outline-none min-w-0"
                />
                <button
                  type="submit"
                  disabled={status === "loading" || status === "success"}
                  className="shrink-0 bg-brand px-4 text-sm font-medium hover:opacity-90 transition disabled:opacity-50 flex items-center justify-center min-w-[44px]"
                >
                  {status === "loading" ? (
                    <Loader2 className="h-4 w-4 animate-spin text-white" />
                  ) : status === "success" ? (
                    <Check className="h-4 w-4 text-white" />
                  ) : (
                    "→"
                  )}
                </button>
              </form>
              {msg && (
                <p className={`mt-2 text-xs font-medium ${status === "success" ? "text-emerald-400" : "text-rose-400"}`}>
                  {msg}
                </p>
              )}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              {companyLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/70 hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Services</p>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              {serviceLinks.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs uppercase tracking-widest text-white/50">Reach Us</p>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-2 text-white/70 hover:text-white transition"
                >
                  <Mail className="h-4 w-4 mt-0.5 shrink-0" />
                  <span className="break-all">{CONTACT.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone1.replace(/\s+/g, '')}`}
                  className="flex items-start gap-2 text-white/70 hover:text-white transition"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{CONTACT.phone1}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${CONTACT.phone2.replace(/\s+/g, '')}`}
                  className="flex items-start gap-2 text-white/70 hover:text-white transition"
                >
                  <Phone className="h-4 w-4 mt-0.5 shrink-0" />
                  <span>{CONTACT.phone2}</span>
                </a>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-full bg-white/10 p-2 text-white hover:bg-brand transition"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-center justify-between border-t border-white/10 pt-6 text-xs text-white/40 gap-3">
          <p>© {new Date().getFullYear()} CodeSwipe IT Solutions. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
            <a href="#" className="hover:text-white transition">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
