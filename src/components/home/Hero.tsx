"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(26,26,26,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(26,26,26,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Static gradient blobs */}
      <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] rounded-full bg-terracotta/[0.08] blur-[80px]" />
      <div className="absolute bottom-1/4 left-[5%] w-[400px] h-[400px] rounded-full bg-sage/10 blur-[60px]" />
      <div className="absolute top-1/3 left-[40%] w-[300px] h-[300px] rounded-full bg-warm-gray/10 blur-[50px]" />

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-terracotta" />
            <p className="text-terracotta font-medium tracking-wide uppercase text-sm">
              Handmade websites, built around you
            </p>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading text-ink leading-[0.95] mb-8">
            Your brand,
            <br />
            <span className="text-gradient">your website.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-ink/50 mb-12 max-w-xl leading-relaxed font-light">
            I sit down and learn what makes your business tick — your story,
            your customers, what you actually care about. Then I build you a
            site that feels like <em>you</em>, not a template.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 items-center">
            <Button href="/contact">Tell Me About Your Business</Button>
            <Button href="/services" variant="outline">
              See Pricing
            </Button>
          </div>

          {/* Trust line */}
          <p className="mt-8 text-sm text-ink/30 flex items-center gap-3">
            <span>Pay once, own it forever</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>No monthly platform fees</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>No lock-in</span>
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-ink/20 flex items-start justify-center p-1.5">
          <div className="w-1 h-2 rounded-full bg-ink/30" />
        </div>
      </motion.div>
    </section>
  );
}
