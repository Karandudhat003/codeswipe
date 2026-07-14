import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { CTASection } from "./CTASection";

export function PageShell({ children, hideCta = false }: { children: ReactNode; hideCta?: boolean }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      {!hideCta && (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-24">
          <CTASection />
        </div>
      )}
      <Footer />
    </div>
  );
}
