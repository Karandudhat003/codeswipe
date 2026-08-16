"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import finalLogo from "@/assets/Final logo.png";

// Module-level variable to persist state across client-side transitions
let hasPreloaderRunGlobal = false;

export function LogoPreloader() {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // If already run in this client session, skip preloader
    if (hasPreloaderRunGlobal) {
      return;
    }

    setIsLoading(true);
    // Lock scrolling while preloader is active
    document.body.style.overflow = "hidden";

    // Progress counter animation over 5 seconds (5000ms)
    const startTime = Date.now();
    const duration = 5000;

    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const calculatedProgress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setProgress(calculatedProgress);

      if (elapsed >= duration) {
        clearInterval(interval);
        hasPreloaderRunGlobal = true;
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.overflow = "";
        }, 400); // Slight delay for final transition
      }
    }, 16);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isLoading) return null;

  // Staggered letters variants for "Welcome to"
  const welcomeText = "Welcome to";
  const letterVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="logo-preloader"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: "blur(8px)",
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
          }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-white overflow-hidden select-none"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="w-[500px] h-[300px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-600/15 to-purple-500/10 blur-3xl"
            />
          </div>

          {/* Core Content Container */}
          <div className="relative z-10 flex flex-col items-center max-w-xl px-6 w-full text-center">
            
            {/* 1. "Welcome to" Text with staggered letter animations */}
            <div className="flex gap-[3px] mb-4 justify-center">
              {welcomeText.split("").map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="font-display text-sm sm:text-base font-bold tracking-[0.2em] text-indigo-900/80 uppercase"
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* 2. Logo Wrapper with blur-to-focus entrance */}
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 15, filter: "blur(6px)" }}
              animate={{ opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              className="relative overflow-hidden p-3"
            >
              <Image
                src={finalLogo}
                alt="CodeSwipe IT Solutions Logo"
                priority
                className="w-[280px] sm:w-[360px] md:w-[420px] h-auto object-contain drop-shadow-sm"
              />

              {/* Shimmer Light Beam Effect */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  duration: 1.8,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent transform -skew-x-25 pointer-events-none"
              />
            </motion.div>

            {/* 3. Animated Gradient Line (Expanding over 6 seconds) */}
            <div className="relative w-[260px] sm:w-[320px] md:w-[380px] h-[4px] mt-6 bg-slate-100 rounded-full overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.1, ease: "linear" }}
                className="h-full rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_12px_rgba(38,2,188,0.4)]"
              />

              {/* Moving sheen along the bar */}
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                className="absolute top-0 bottom-0 w-24 bg-gradient-to-r from-transparent via-white/80 to-transparent"
              />
            </div>

            {/* 4. Tagline Reveal */}
            <motion.div
              initial={{ opacity: 0, letterSpacing: "0.15em" }}
              animate={{ opacity: 0.8, letterSpacing: "0.25em" }}
              transition={{ duration: 1.5, delay: 0.8 }}
              className="mt-6 text-[10px] sm:text-xs font-semibold text-slate-500 uppercase tracking-widest"
            >
              Engineering Future-Proof Products
            </motion.div>

            {/* 5. Progress Percentage counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-2 font-mono text-xs text-indigo-600 font-bold"
            >
              {progress}%
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
