"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Code2,
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart,
  Database,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  ShieldCheck,
} from "lucide-react";
import logo from "@/assets/Final logo.png";

const services = [
  {
    icon: Code2,
    label: "Software Development",
    desc: "Custom software solutions built to scale with your business needs.",
    color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/60",
  },
  {
    icon: Globe,
    label: "Web Development",
    desc: "Responsive, high-performance web applications using React & Next.js.",
    color: "from-purple-500/10 to-indigo-500/10 text-purple-600 border-purple-200/60",
  },
  {
    icon: Smartphone,
    label: "Mobile App Development",
    desc: "Powerful native & cross-platform apps for iOS & Android with Flutter.",
    color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/60",
  },
  {
    icon: BarChart3,
    label: "ERP & CRM Solutions",
    desc: "Streamline enterprise operations with intelligent ERP & CRM platforms.",
    color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/60",
  },
  {
    icon: ShoppingCart,
    label: "E-Commerce Development",
    desc: "High-converting online stores, Shopify & custom marketplace platforms.",
    color: "from-pink-500/10 to-rose-500/10 text-pink-600 border-pink-200/60",
  },
  {
    icon: Database,
    label: "Database & Cloud Services",
    desc: "Secure, optimized cloud infrastructure and managed database systems.",
    color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-200/60",
  },
  {
    icon: Headphones,
    label: "IT & Tech Consultation",
    desc: "Expert guidance to turn technology vision into market-ready products.",
    color: "from-violet-500/10 to-purple-500/10 text-violet-600 border-violet-200/60",
  },
];

const industries = [
  "Diamond Industry",
  "Jewellery",
  "Ceramic / Tiles",
  "Textile",
  "Hospitality",
  "E-Commerce",
  "Solar Industry",
  "Manufacturing",
  "POS / Retail",
  "Healthcare",
  "FinTech",
  "Real Estate",
];

const highlights = [
  "Custom Web & Mobile Apps",
  "Enterprise ERP / CRM / SaaS",
  "Multi-Industry Expertise",
  "End-to-End Product Delivery",
];

// Module-level flag so it only shows once per user session
let hasShownWelcomeModal = false;

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasShownWelcomeModal) return;

    // Trigger after preloader finishes (~2.4s)
    const timer = setTimeout(() => {
      hasShownWelcomeModal = true;
      setIsOpen(true);
    }, 2400);

    return () => clearTimeout(timer);
  }, []);

  const close = () => setIsOpen(false);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            key="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
            className="fixed inset-0 z-[9998] bg-slate-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            key="welcome-modal"
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-5 md:p-8 pointer-events-none"
          >
            <div className="relative w-full max-w-5xl max-h-[92vh] pointer-events-auto flex flex-col md:flex-row rounded-3xl overflow-hidden shadow-[0_25px_70px_rgba(15,23,42,0.4)] border border-white/20 bg-white">
              
              {/* ── Left Sidebar (Branded Theme Gradient) ── */}
              <div className="relative flex-shrink-0 w-full md:w-[360px] bg-gradient-to-br from-[#0b0620] via-[#140b38] to-[#2602BC] p-6 sm:p-8 text-white flex flex-col justify-between overflow-hidden">
                {/* Background Ambient Glows */}
                <div className="absolute -top-20 -left-20 w-60 h-60 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-500/25 blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  {/* Top Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-indigo-200 backdrop-blur-md mb-6">
                    <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                    <span>Top-Rated IT Solutions Agency</span>
                  </div>

                  {/* Logo */}
                  <div className="mb-6">
                    <Image
                      src={logo}
                      alt="CodeSwipe IT Solutions"
                      width={200}
                      height={60}
                      className="h-10 w-auto object-contain brightness-0 invert drop-shadow-md"
                      priority
                    />
                  </div>

                  {/* Title & Tagline */}
                  <h2 className="font-display text-xl sm:text-2xl font-bold leading-snug mb-3">
                    Empowering Businesses with{" "}
                    <span className="bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-transparent">
                      Intelligent IT Solutions
                    </span>
                  </h2>

                  <p className="text-indigo-200/90 text-xs sm:text-sm leading-relaxed mb-6">
                    We deliver scalable, industry-focused digital products engineered to optimize operations and drive rapid business growth.
                  </p>

                  {/* Highlights List */}
                  <ul className="space-y-2.5 mb-8">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-xs sm:text-sm text-indigo-100 font-medium">
                        <div className="p-0.5 rounded-full bg-indigo-500/30 text-indigo-300">
                          <CheckCircle2 className="w-4 h-4" />
                        </div>
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Left Panel CTA Actions */}
                <div className="relative z-10 space-y-3 pt-4 border-t border-white/10">
                  <Link
                    href="/services"
                    onClick={close}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-white/15 hover:bg-white/25 border border-white/20 text-white text-xs sm:text-sm font-semibold py-3 transition-all duration-200 group"
                  >
                    Explore All Services{" "}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href="/contact"
                    onClick={close}
                    className="flex items-center justify-center gap-2 w-full rounded-xl bg-white text-[#140b38] hover:bg-indigo-50 text-xs sm:text-sm font-bold py-3 shadow-lg shadow-black/20 transition-all duration-200"
                  >
                    Get Free Quote
                  </Link>
                </div>
              </div>

              {/* ── Right Content Area ── */}
              <div className="flex-1 bg-slate-50/50 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
                
                {/* Header & Close Button */}
                <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-5 border-b border-slate-100 flex items-center justify-between">
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                      Our <span className="text-[#2602BC]">Services & Capabilities</span>
                    </h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      Tailored technology services designed to scale modern enterprises.
                    </p>
                  </div>

                  <button
                    onClick={close}
                    className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-all focus:outline-none"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main Body */}
                <div className="p-6 sm:p-8 space-y-6">
                  
                  {/* Services Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                    {services.map(({ icon: Icon, label, desc, color }) => (
                      <div
                        key={label}
                        className="group relative p-4 rounded-2xl bg-white border border-slate-200/80 hover:border-indigo-300 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col justify-between"
                      >
                        <div>
                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} border flex items-center justify-center mb-3 transition-transform group-hover:scale-105`}>
                            <Icon className="w-5 h-5" />
                          </div>
                          <h4 className="font-display text-xs sm:text-sm font-bold text-slate-800 mb-1 leading-snug group-hover:text-[#2602BC] transition-colors">
                            {label}
                          </h4>
                          <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed">
                            {desc}
                          </p>
                        </div>

                        <div className="mt-3 flex items-center text-[11px] font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
                          Learn more <ChevronRight className="w-3.5 h-3.5 ml-0.5" />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Industries We Serve */}
                  <div className="pt-2">
                    <div className="flex items-center gap-2 mb-3">
                      <ShieldCheck className="w-4 h-4 text-[#2602BC]" />
                      <h4 className="font-display text-sm font-bold text-slate-900">
                        Industries We Serve
                      </h4>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {industries.map((ind) => (
                        <span
                          key={ind}
                          className="px-3.5 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-600 hover:border-indigo-400 hover:text-[#2602BC] hover:bg-indigo-50/50 transition-all cursor-default shadow-2xs"
                        >
                          {ind}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Consultation Banner */}
                <div className="p-5 sm:p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-blue-50 border-t border-indigo-100/80 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5 text-center sm:text-left">
                    <div className="w-10 h-10 rounded-xl bg-[#2602BC] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-indigo-600/30">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-display text-xs sm:text-sm font-bold text-slate-900">
                        Need a Custom Solution for Your Business?
                      </h5>
                      <p className="text-[11px] sm:text-xs text-slate-600">
                        Schedule a 1-on-1 strategy call with our lead engineers today.
                      </p>
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    onClick={close}
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#2602BC] hover:bg-indigo-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-indigo-600/25 hover:shadow-indigo-600/40 transition-all"
                  >
                    Get Free Consultation <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
