"use client";

import React, { useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Code2, Sparkles, Terminal, Cpu, ShieldCheck, Zap, CheckCircle2, Star, Globe, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

/* ─── Ambient Background ────────────────────────────────────────────────────── */
export function HeroBackgroundGrid() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden select-none" aria-hidden>
      {/* Animated Mesh Gradient Orbs */}
      <div
        className="orb-animate absolute -top-32 left-1/3 w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle at 30% 50%, oklch(0.374 0.24 272 / 0.25), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="orb-animate-2 absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, oklch(0.598 0.23 286 / 0.3), transparent 70%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="orb-animate-3 absolute -bottom-20 left-0 w-[400px] h-[400px] rounded-full opacity-15"
        style={{
          background: "radial-gradient(circle, oklch(0.5 0.18 240 / 0.25), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* SVG Dot Grid */}
      <svg
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity: 0.4 }}
      >
        <defs>
          <pattern id="dot-grid" x="0" y="0" width="28" height="28" patternUnits="userSpaceOnUse">
            <circle cx="1.5" cy="1.5" r="1" fill="oklch(0.374 0.24 272 / 0.15)" />
          </pattern>
          <radialGradient id="dot-fade" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="70%" stopColor="white" stopOpacity="0.3" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="dot-mask">
            <rect width="100%" height="100%" fill="url(#dot-fade)" />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="url(#dot-grid)" mask="url(#dot-mask)" />
      </svg>

      {/* 3D Perspective Lines */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(oklch(0.374 0.24 272) 1px, transparent 1px),
            linear-gradient(90deg, oklch(0.374 0.24 272) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          transform: "perspective(500px) rotateX(5deg)",
          transformOrigin: "top center",
          maskImage: "linear-gradient(to bottom, transparent, white 30%, white 70%, transparent)",
        }}
      />
    </div>
  );
}

/* ─── 3D Tilt Card ───────────────────────────────────────────────────────────── */
function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hero 3D Showcase ────────────────────────────────────────────────────────── */
export function HeroShadcnInteractiveShowcase() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Main 3D Tilt Card */}
      <TiltCard>
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.93 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <Card className="relative overflow-hidden border border-border/60 bg-white/80 backdrop-blur-2xl shadow-3d rounded-3xl p-5 sm:p-6">
            {/* Gradient shimmer overlay */}
            <div
              className="pointer-events-none absolute inset-0 rounded-3xl opacity-60"
              style={{
                background: "linear-gradient(135deg, oklch(0.374 0.24 272 / 0.06) 0%, transparent 50%, oklch(0.598 0.23 286 / 0.04) 100%)"
              }}
            />

            {/* Terminal Header */}
            <div className="relative flex items-center justify-between border-b border-border/50 pb-3.5 mb-4">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-rose-500 shadow-sm" />
                <div className="h-3 w-3 rounded-full bg-amber-400 shadow-sm" />
                <div className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm" />
                <span className="ml-2 font-mono text-[11px] text-muted-foreground flex items-center gap-1.5">
                  <Terminal className="h-3 w-3 text-primary" /> codeswipe.config.ts
                </span>
              </div>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-600 border-emerald-200 text-[10px] gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Live
              </Badge>
            </div>

            {/* Code Preview */}
            <div className="relative font-mono text-[11px] sm:text-xs rounded-2xl bg-slate-950 p-4 border border-slate-800/60 mb-4 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
              <div className="space-y-1.5 text-slate-400">
                <div><span className="text-violet-400">const</span> <span className="text-amber-300">CodeSwipe</span> <span className="text-slate-400">=</span> <span className="text-sky-400">{"{"}</span></div>
                <div className="pl-4 space-y-1">
                  <div><span className="text-sky-300">services</span><span className="text-slate-400">:</span> <span className="text-emerald-300">["Web", "Mobile", "AI", "SaaS"]</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-300">quality</span><span className="text-slate-400">:</span> <span className="text-amber-300">"100%"</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-300">delivery</span><span className="text-slate-400">:</span> <span className="text-emerald-300">"Agile Sprints"</span><span className="text-slate-400">,</span></div>
                  <div><span className="text-sky-300">security</span><span className="text-slate-400">:</span> <span className="text-violet-300">true</span></div>
                </div>
                <div><span className="text-sky-400">{"}"}</span><span className="text-slate-400">;</span></div>
              </div>
              {/* Scanning line */}
              <motion.div
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent pointer-events-none"
                style={{ position: "absolute" }}
              />
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 mb-4">
              {[
                { icon: Zap, label: "Sprint Output", value: "Weekly", color: "text-amber-500", bg: "bg-amber-50" },
                { icon: ShieldCheck, label: "Security", value: "OWASP", color: "text-emerald-600", bg: "bg-emerald-50" },
                { icon: Cpu, label: "Tech Stack", value: "Modern", color: "text-blue-600", bg: "bg-blue-50" },
                { icon: Globe, label: "Coverage", value: "Worldwide", color: "text-purple-600", bg: "bg-purple-50" },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-2.5 rounded-xl border border-border/60 bg-background/80 p-3">
                  <div className={`h-8 w-8 rounded-lg ${m.bg} ${m.color} flex items-center justify-center shrink-0`}>
                    <m.icon className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground">{m.label}</div>
                    <div className="text-xs font-bold text-foreground">{m.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Star rating + trust */}
            <div className="flex items-center justify-between pt-3 border-t border-border/50">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[
                    { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop", fb: "A" },
                    { src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop", fb: "B" },
                    { src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&auto=format&fit=crop", fb: "C" },
                    { src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=80&auto=format&fit=crop", fb: "D" },
                  ].map((a, i) => (
                    <Avatar key={i} className="h-7 w-7 border-2 border-background shadow-sm">
                      <AvatarImage src={a.src} />
                      <AvatarFallback className="text-[10px]">{a.fb}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground">50+ Clients</div>
                  <div className="text-[10px] text-muted-foreground">USA · UK · UAE · IN</div>
                </div>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-foreground ml-1">4.9</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </TiltCard>

      {/* ── Floating 3D Badges ──────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        className="animate-float absolute -top-5 -right-2 sm:-right-6 z-20 hidden sm:flex"
        style={{ perspective: 600 }}
      >
        <motion.div
          animate={{ rotateY: [0, 5, 0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 rounded-2xl glass shadow-3d px-3.5 py-2.5 text-xs font-semibold text-foreground border"
        >
          <Sparkles className="h-3.5 w-3.5 text-amber-500" />
          AI-Powered Stack
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        className="animate-float-md absolute -bottom-5 -left-2 sm:-left-6 z-20 hidden sm:flex"
        style={{ perspective: 600 }}
      >
        <motion.div
          animate={{ rotateY: [0, -5, 0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 rounded-2xl glass shadow-3d px-3.5 py-2.5 text-xs font-semibold text-foreground border"
        >
          <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500" />
          Dedicated Dev Team
        </motion.div>
      </motion.div>

      {/* ── 3D Floating Mini Cards ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="animate-float-sm absolute top-1/2 -right-3 sm:-right-8 z-10 hidden lg:block"
      >
        <motion.div
          animate={{ rotateZ: [0, 3, 0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="rounded-2xl glass shadow-3d p-3 border text-center"
          style={{ transform: "perspective(400px) rotateY(-12deg)" }}
        >
          <Users className="h-5 w-5 text-primary mx-auto mb-1" />
          <div className="text-[10px] font-bold text-foreground">15+</div>
          <div className="text-[9px] text-muted-foreground">Devs</div>
        </motion.div>
      </motion.div>
    </div>
  );
}
