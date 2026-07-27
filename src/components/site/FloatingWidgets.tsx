"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact-info";

// WhatsApp SVG icon
function WAIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.3 });
  return (
    <motion.div
      style={{ scaleX }}
      aria-hidden
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-brand shadow-brand"
    />
  );
}

function CursorFollower() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
      const t = e.target as HTMLElement | null;
      setHover(!!t?.closest("a, button, [role=button], input, textarea, select, label"));
    };
    const leave = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
    };
  }, []);

  if (!visible) return null;
  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[70] hidden lg:block"
        animate={{ x: pos.x - 4, y: pos.y - 4, scale: hover ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.2 }}
        aria-hidden
      >
        <div className="h-2 w-2 rounded-full bg-primary" />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed z-[70] hidden lg:block"
        animate={{ x: pos.x - 18, y: pos.y - 18, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 20, mass: 0.4 }}
        aria-hidden
      >
        <div className="h-9 w-9 rounded-full border border-primary/40 mix-blend-difference" />
      </motion.div>
    </>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-24 right-5 z-[55] h-11 w-11 rounded-full border border-border bg-background/90 backdrop-blur shadow-card flex items-center justify-center hover:border-primary/40 hover:bg-accent transition"
        >
          <ArrowUp className="h-4 w-4 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppFloat() {
  const [showTooltip, setShowTooltip] = useState(false);

  // Show tooltip after 3 seconds to grab attention
  useEffect(() => {
    const timer = setTimeout(() => setShowTooltip(true), 3000);
    const hide = setTimeout(() => setShowTooltip(false), 8000);
    return () => { clearTimeout(timer); clearTimeout(hide); };
  }, []);

  return (
    <div className="fixed bottom-5 left-5 z-[55] flex flex-col items-start gap-2">
      {/* Tooltip bubble */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -10, scale: 0.9 }}
            className="rounded-2xl bg-background border border-border shadow-card p-3 max-w-[200px] text-xs leading-relaxed"
          >
            <div className="font-semibold text-foreground">👋 Hey there!</div>
            <div className="text-muted-foreground mt-0.5">Need a free consultation? Chat with us on WhatsApp!</div>
            <div className="mt-1 font-medium text-[#128C7E]">+91 72650 25017</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Button */}
      <motion.a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Chat on WhatsApp — ${CONTACT.phone2}`}
        initial={{ scale: 0, rotate: -30 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.4 }}
        whileHover={{ scale: 1.08 }}
        onHoverStart={() => setShowTooltip(true)}
        onHoverEnd={() => setShowTooltip(false)}
        className="group flex items-center gap-0"
      >
        <span
          className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.65)]"
          style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
        >
          <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" aria-hidden />
          <WAIcon className="relative h-7 w-7" />
        </span>
      </motion.a>
    </div>
  );
}

export function FloatingWidgets() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
      <WhatsAppFloat />
      <BackToTop />
    </>
  );
}
