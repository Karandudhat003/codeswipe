"use client";

import React from "react";
import { motion } from "framer-motion";
import { Code2, Sparkles, Terminal, Cpu, ShieldCheck, Zap, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function HeroBackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
      {/* Radial Gradient Ambient Glows */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-brand/20 via-primary/10 to-transparent blur-3xl opacity-60 rounded-full" />
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-indigo-500/10 blur-3xl rounded-full" />
      <div className="absolute bottom-10 right-0 w-[600px] h-[600px] bg-emerald-500/10 blur-3xl rounded-full" />

      {/* SVG Grid Lines */}
      <svg
        className="absolute inset-0 h-full w-full stroke-foreground/[0.06] [mask-image:radial-gradient(1000px_circle_at_center,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-grid-pattern"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            x="-1"
            y="-1"
          >
            <path d="M.5 40V.5H40" fill="none" strokeDasharray="0" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#hero-grid-pattern)" />
      </svg>
    </div>
  );
}

export function HeroShadcnInteractiveShowcase() {
  return (
    <div className="relative w-full max-w-xl mx-auto lg:mx-0">
      {/* Main Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Card className="relative overflow-hidden border border-border/80 bg-card/80 backdrop-blur-xl p-6 shadow-2xl rounded-3xl">
          {/* Header Bar */}
          <div className="flex items-center justify-between border-b border-border/60 pb-4 mb-4">
            <div className="flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="ml-2 font-mono text-xs text-muted-foreground flex items-center gap-1.5">
                <Terminal className="h-3.5 w-3.5 text-primary" /> codeswipe-app.config.ts
              </span>
            </div>
            <Badge variant="outline" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/30 text-[10px] font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live Server 99.99%
            </Badge>
          </div>

          {/* IDE Content Code Preview */}
          <div className="font-mono text-xs space-y-2.5 text-foreground/90 bg-background/90 rounded-2xl p-4 border border-border/60 shadow-inner">
            <div className="flex items-center gap-2 text-muted-foreground">
              <span className="text-primary font-bold">const</span>
              <span className="text-amber-500 font-medium">CodeSwipePartner</span> = &#123;
            </div>
            <div className="pl-4 space-y-1">
              <div>
                <span className="text-indigo-400">coreCapabilities</span>: [
                <span className="text-emerald-400">"Web Apps"</span>,{" "}
                <span className="text-emerald-400">"Mobile Apps"</span>,{" "}
                <span className="text-emerald-400">"AI Engineering"</span>],
              </div>
              <div>
                <span className="text-indigo-400">guaranteedQuality</span>:{" "}
                <span className="text-amber-400">"100% IP Ownership"</span>,
              </div>
              <div>
                <span className="text-indigo-400">deliverySpeed</span>:{" "}
                <span className="text-emerald-400">"Agile Weekly Sprints"</span>,
              </div>
              <div>
                <span className="text-indigo-400">securityAudit</span>:{" "}
                <span className="text-blue-400">true</span>,
              </div>
            </div>
            <div className="text-muted-foreground">&#125;;</div>
          </div>

          {/* Live Metric Cards Grid */}
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-2xl border border-border bg-accent/40 p-3.5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-brand/10 text-brand flex items-center justify-center shrink-0">
                <Zap className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">Sprint Output</div>
                <div className="text-sm font-bold text-foreground">Weekly Releases</div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-accent/40 p-3.5 flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                <ShieldCheck className="h-4.5 w-4.5" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">Security Standard</div>
                <div className="text-sm font-bold text-foreground">OWASP Certified</div>
              </div>
            </div>
          </div>

          {/* Bottom Floating Pill */}
          <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop" />
                  <AvatarFallback>UK</AvatarFallback>
                </Avatar>
                <Avatar className="h-6 w-6 border-2 border-background">
                  <AvatarImage src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop" />
                  <AvatarFallback>AE</AvatarFallback>
                </Avatar>
              </div>
              <span className="font-medium text-foreground">Trusted by 50+ Founders Worldwide</span>
            </div>
            <span className="font-semibold text-primary flex items-center gap-0.5">
              4.9★ Rating
            </span>
          </div>
        </Card>
      </motion.div>

      {/* Floating Animated Badges */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-5 -right-4 hidden sm:flex items-center gap-2 rounded-full bg-background border border-border shadow-xl px-4 py-2 text-xs font-semibold text-foreground z-20"
      >
        <Sparkles className="h-4 w-4 text-amber-500" /> AI-Powered Tech Stack
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-5 -left-4 hidden sm:flex items-center gap-2 rounded-full bg-background border border-border shadow-xl px-4 py-2 text-xs font-semibold text-foreground z-20"
      >
        <CheckCircle2 className="h-4 w-4 text-emerald-500" /> Dedicated Full-Stack Team
      </motion.div>
    </div>
  );
}
