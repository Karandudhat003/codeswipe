import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { MessageCircle, ArrowUp } from "lucide-react";
import { CONTACT, waLink } from "@/lib/contact-info";

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
          className="fixed bottom-6 right-6 z-[55] h-11 w-11 rounded-full border border-border bg-background/90 backdrop-blur shadow-card flex items-center justify-center hover:border-primary/40 transition"
        >
          <ArrowUp className="h-4 w-4 text-primary" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink(`Hi CodeSwipe, I'd like to discuss a project.`)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat on WhatsApp ${CONTACT.phone}`}
      initial={{ scale: 0, rotate: -30 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.4 }}
      whileHover={{ scale: 1.06 }}
      className="fixed bottom-6 left-6 z-[55] group flex items-center gap-3"
    >
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)]"
        style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}>
        <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" aria-hidden />
        <MessageCircle className="relative h-6 w-6" />
      </span>
      <span className="hidden md:inline-flex opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition rounded-full bg-background/95 backdrop-blur border border-border px-3 py-1.5 text-xs font-medium shadow-card">
        Chat with us
      </span>
    </motion.a>
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
