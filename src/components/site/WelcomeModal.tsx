"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Monitor,
  Globe,
  Smartphone,
  BarChart3,
  ShoppingCart,
  Database,
  Headphones,
  ArrowRight,
  CheckCircle2,
  Layers,
} from "lucide-react";
import finalLogo from "@/assets/Final logo.png";

const services = [
  { icon: Monitor, label: "Software Development", desc: "Custom software solutions built to scale with your business." },
  { icon: Globe, label: "Web Development", desc: "Responsive, high-performance websites that drive results." },
  { icon: Smartphone, label: "Mobile App Development", desc: "Powerful mobile apps for Android & iOS platforms." },
  { icon: BarChart3, label: "ERP Solutions", desc: "Streamline operations with intelligent ERP & CRM systems." },
  { icon: ShoppingCart, label: "E-Commerce Development", desc: "Scalable e-commerce platforms that boost your online sales." },
  { icon: Database, label: "DBA Services", desc: "Secure, optimized, and reliable database management." },
  { icon: Headphones, label: "IT Consultation", desc: "Expert guidance to turn your technology vision into reality." },
];

const industries = [
  "Diamond Industry", "Jewellery", "Ceramic / Tiles",
  "Textile", "Hospitality", "E-Commerce",
  "Solar Industry", "Manufacturing", "POS / Retail",
];

const highlights = [
  "Custom Software",
  "ERP / CRM / SaaS",
  "Multi-Industry Expertise",
  "End-to-End Solutions",
];

// Module-level flag so it only shows once per session
let hasShownWelcomeModal = false;

export function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (hasShownWelcomeModal) return;

    // Wait for preloader to finish (≈2.5s) then show modal
    const timer = setTimeout(() => {
      hasShownWelcomeModal = true;
      setIsOpen(true);
    }, 2600);

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
            transition={{ duration: 0.25 }}
            onClick={close}
            className="fixed inset-0 z-[9998] bg-black/50 backdrop-blur-[2px]"
          />

          {/* Modal */}
          <motion.div
            key="welcome-modal"
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-4 pointer-events-none"
          >
            <div className="relative w-full max-w-3xl max-h-[90vh] pointer-events-auto flex flex-col sm:flex-row rounded-2xl overflow-hidden shadow-2xl border border-white/10">

              {/* ── Left Panel ── */}
              <div className="relative flex-shrink-0 w-full sm:w-56 bg-gradient-to-br from-[#1a2a6c] via-[#1e3a8a] to-[#1a1a6c] p-5 flex flex-col justify-between">
                {/* Logo */}
                <div>
                  <Image
                    src={finalLogo}
                    alt="CodeSwipe IT Solutions"
                    width={130}
                    height={40}
                    className="h-8 w-auto object-contain brightness-0 invert mb-5"
                    priority
                  />

                  <h2 className="text-white text-base font-bold leading-snug mb-2">
                    Empowering Businesses with{" "}
                    <span className="text-blue-300">Intelligent IT Solutions</span>
                  </h2>
                  <p className="text-blue-200/80 text-[11px] leading-relaxed mb-4">
                    We deliver scalable, industry-focused software solutions designed to
                    optimize operations, increase efficiency, and drive digital transformation.
                  </p>

                  <ul className="space-y-1.5 mb-5">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2 text-[11px] text-blue-100">
                        <CheckCircle2 className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <Link
                    href="/services"
                    onClick={close}
                    className="flex items-center justify-center gap-1.5 w-full rounded-lg border border-white/30 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-3 py-2 transition-all"
                  >
                    Explore Services <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/contact"
                    onClick={close}
                    className="flex items-center justify-center gap-1.5 w-full rounded-lg bg-white text-[#1e3a8a] text-xs font-bold px-3 py-2 hover:bg-blue-50 transition-all"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* ── Right Panel ── */}
              <div className="flex-1 bg-white overflow-y-auto">
                {/* Close Button */}
                <button
                  onClick={close}
                  className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all"
                  aria-label="Close"
                >
                  <X className="w-3.5 h-3.5" />
                </button>

                <div className="p-5 pt-4">
                  {/* Our Services */}
                  <div className="flex items-center gap-2 mb-3">
                    <Layers className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm font-bold text-gray-800">
                      Our <span className="text-blue-600">Services</span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-5">
                    {services.map(({ icon: Icon, label, desc }) => (
                      <div
                        key={label}
                        className="group p-2.5 rounded-xl border border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all cursor-default"
                      >
                        <Icon className="w-4 h-4 text-blue-600 mb-1" />
                        <p className="text-[11px] font-semibold text-gray-800 leading-tight mb-0.5">{label}</p>
                        <p className="text-[9px] text-gray-500 leading-tight hidden sm:block">{desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Divider */}
                  <div className="border-t border-gray-100 mb-4" />

                  {/* Industries */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <Globe className="w-4 h-4 text-blue-600" />
                    <h3 className="text-sm font-bold text-gray-800">
                      Industries <span className="text-blue-600">We Serve</span>
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {industries.map((ind) => (
                      <span
                        key={ind}
                        className="px-2.5 py-1 rounded-full border border-gray-200 text-[10px] font-medium text-gray-600 hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 transition-all cursor-default"
                      >
                        {ind}
                      </span>
                    ))}
                  </div>

                  {/* CTA Banner */}
                  <div className="flex items-center justify-between gap-3 bg-blue-50 border border-blue-100 rounded-xl px-4 py-3">
                    <div className="flex items-start gap-2.5">
                      <div className="p-1.5 bg-blue-100 rounded-lg">
                        <Headphones className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-gray-800">Need a Custom Solution?</p>
                        <p className="text-[10px] text-gray-500">Let&apos;s discuss how we can help your business grow.</p>
                      </div>
                    </div>
                    <Link
                      href="/contact"
                      onClick={close}
                      className="flex-shrink-0 flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg transition-all whitespace-nowrap"
                    >
                      Get Free Consultation <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
