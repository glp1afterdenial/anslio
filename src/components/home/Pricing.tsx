"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/Button";
import { SectionHeading } from "@/components/SectionHeading";
import { pricingTiers, maintenanceAddon } from "@/data/pricing";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function Pricing() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Simple, one-time pricing"
          subtitle="Pay once, own it forever. No subscriptions, no hidden fees."
        />
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        >
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={false}
              animate={
                shouldShow
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 30 }
              }
              transition={{
                duration: 0.5,
                delay: shouldShow ? i * 0.15 : 0,
                ease: "easeOut" as const,
              }}
              className={`relative rounded-2xl p-8 transition-all duration-300 hover:shadow-xl ${
                tier.popular
                  ? "bg-ink text-paper ring-2 ring-terracotta glow-terracotta"
                  : "bg-white hover:shadow-lg"
              }`}
            >
              {tier.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-terracotta to-terracotta-dark text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-heading text-2xl mb-1 ${
                  tier.popular ? "text-paper" : "text-ink"
                }`}
              >
                {tier.name}
              </h3>
              <div className="text-4xl font-heading text-terracotta mb-4">
                {tier.price}
              </div>
              <p
                className={`text-sm mb-6 ${
                  tier.popular ? "text-paper/60" : "text-ink/60"
                }`}
              >
                {tier.description}
              </p>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <li
                    key={feature}
                    className={`flex items-start gap-2 text-sm ${
                      tier.popular ? "text-paper/80" : "text-ink/70"
                    }`}
                  >
                    <span className="text-sage mt-0.5">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                href="/contact"
                variant={tier.popular ? "primary" : "outline"}
                className="w-full"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-ink/40 mb-12">
          All packages include free hosting. The only recurring cost is your
          domain name (~$10&ndash;$15/year).
        </p>

        <div className="bg-sage/10 rounded-2xl p-8 text-center max-w-2xl mx-auto border border-sage/20">
          <p className="text-xs font-medium text-sage uppercase tracking-wider mb-3">
            100% Optional
          </p>
          <h3 className="font-heading text-xl text-ink mb-1">
            {maintenanceAddon.name} Add-on
          </h3>
          <div className="text-2xl font-heading text-terracotta mb-3">
            {maintenanceAddon.price}
          </div>
          <p className="text-sm text-ink/60 mb-4">
            {maintenanceAddon.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-ink/70">
            {maintenanceAddon.features.map((f) => (
              <span key={f} className="flex items-center gap-1">
                <span className="text-sage">&#10003;</span> {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
