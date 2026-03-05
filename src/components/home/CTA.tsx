"use client";

import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site-config";

export function CTA() {
  return (
    <section className="relative py-24 px-6 bg-ink overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-terracotta/10 blur-[80px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-paper mb-4">
          Let&apos;s make something you&apos;re proud of
        </h2>
        <p className="text-lg text-paper/50 mb-10 max-w-xl mx-auto">
          Tell me a little about your business — what you do, who your
          customers are, what matters to you. I&apos;ll get back to you
          within 24 hours with ideas and a clear quote.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button href="/contact">Tell Me About Your Business</Button>
          <Button
            href={`mailto:${siteConfig.email}`}
            variant="dark"
          >
            Email Me Directly
          </Button>
        </div>
        <p className="text-sm text-paper/30">{siteConfig.email}</p>
      </div>
    </section>
  );
}
