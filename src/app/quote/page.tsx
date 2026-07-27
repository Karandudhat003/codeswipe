"use client";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";

export default function QuotePage() {
  return (
    <PageShell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h1 className="text-4xl font-display font-semibold mb-4">
          Get a <span className="text-gradient">Quote</span>
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-xl">
          This page is temporarily unavailable. Please contact us directly to discuss your project and get a customised quote.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 rounded-full bg-brand px-8 py-4 text-sm font-semibold text-white shadow-brand hover:opacity-90 transition"
        >
          Contact Us <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </PageShell>
  );
}
