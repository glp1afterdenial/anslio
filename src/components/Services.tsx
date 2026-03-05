"use client";

import { motion } from "framer-motion";
import { AnimateIn } from "@/components/AnimateIn";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { pricingTiers, maintenanceAddon } from "@/data/pricing";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const whoIsThisFor: Record<string, string> = {
  Starter: "Freelancers, solo professionals, personal brands",
  Professional: "Growing small businesses, local shops, restaurants",
  Premium: "Established businesses, multi-location companies",
};

const addons = [
  { name: "Blog Setup", price: "$200", description: "A clean blog with categories and easy-to-read design." },
  { name: "Google Visibility Audit", price: "$150", description: "I check how visible you are on Google and tell you exactly how to improve." },
  { name: "Email Setup", price: "$75", description: "Professional email forwarding with your own domain name." },
  { name: "Online Booking", price: "$250", description: "Let customers book appointments right from your website. Includes setup, styling, and integration." },
];

const costComparison = [
  { platform: "Anslio (Professional)", design: "$1,000", hosting: "$0/mo", year1: "$1,000*", year3: "$1,030*" },
  { platform: "Squarespace", design: "You build it", hosting: "$16\u201333/mo", year1: "$192\u2013396", year3: "$576\u20131,188" },
  { platform: "Wix", design: "You build it", hosting: "$17\u201336/mo", year1: "$204\u2013432", year3: "$612\u20131,296" },
  { platform: "WordPress (with a developer)", design: "$2,000\u20135,000+", hosting: "$30\u2013100/mo", year1: "$2,360\u20136,200+", year3: "$2,720\u20138,600+" },
];

export function Services() {
  const { ref: tiersRef, shouldShow: tiersShow } = useScrollReveal();
  const { ref: addonsRef, shouldShow: addonsShow } = useScrollReveal();

  return (
    <div className="pt-32 pb-24">
      {/* Hero */}
      <section className="px-6 mb-24">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateIn>
            <p className="text-terracotta font-medium mb-3">Services</p>
            <h1 className="text-4xl md:text-5xl font-heading text-ink mb-4">
              One-time pricing, lifetime ownership
            </h1>
            <p className="text-lg text-ink/60">
              No subscriptions. No website builders. Just a custom site built
              around your brand that you own forever.
            </p>
          </AnimateIn>
        </div>
      </section>

      {/* Detailed pricing tiers */}
      <section className="px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div
            ref={tiersRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {pricingTiers.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={false}
                animate={
                  tiersShow
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: tiersShow ? i * 0.15 : 0,
                  ease: "easeOut" as const,
                }}
                className={`relative rounded-2xl p-8 ${
                  tier.popular
                    ? "bg-ink text-paper ring-2 ring-terracotta glow-terracotta"
                    : "bg-white"
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
                  className={`text-sm mb-2 ${
                    tier.popular ? "text-paper/60" : "text-ink/60"
                  }`}
                >
                  {tier.description}
                </p>
                <p
                  className={`text-xs font-medium mb-6 ${
                    tier.popular ? "text-terracotta" : "text-sage"
                  }`}
                >
                  Best for: {whoIsThisFor[tier.name]}
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
          <p className="text-center text-xs text-ink/40 mt-6">
            All packages include free hosting. The only recurring cost is your
            domain name (~$10&ndash;$15/year).
          </p>
        </div>
      </section>

      {/* Maintenance addon */}
      <section className="px-6 mb-24">
        <div className="max-w-2xl mx-auto">
          <AnimateIn>
            <div className="bg-sage/10 rounded-2xl p-8 text-center border border-sage/20">
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
              <p className="text-xs text-ink/40 mt-4">
                Don&apos;t need it? No problem. Your site runs perfectly on its
                own. You can also reach out for one-off updates anytime.
              </p>
            </div>
          </AnimateIn>
        </div>
      </section>

      {/* Add-ons */}
      <section className="px-6 mb-24 bg-white py-24">
        <div className="max-w-4xl mx-auto">
          <SectionHeading
            title="Add-ons"
            subtitle="Need something extra? These can be added to any package."
          />
          <div
            ref={addonsRef}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {addons.map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={false}
                animate={
                  addonsShow
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 30 }
                }
                transition={{
                  duration: 0.5,
                  delay: addonsShow ? i * 0.15 : 0,
                  ease: "easeOut" as const,
                }}
                className="card-gradient-border bg-paper rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading text-lg text-ink">
                    {addon.name}
                  </h3>
                  <span className="text-terracotta font-heading text-lg">
                    {addon.price}
                  </span>
                </div>
                <p className="text-sm text-ink/60">{addon.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cost comparison */}
      <section className="px-6 mb-24">
        <div className="max-w-3xl mx-auto">
          <SectionHeading
            title="The real cost of a website"
            subtitle="Other platforms look cheap at first \u2014 until you add up what you\u2019re actually paying over time."
          />
          <AnimateIn>
            <div className="bg-white rounded-2xl overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-warm-gray-light">
                    <th className="py-4 px-6 text-ink/50 font-medium">
                      Platform
                    </th>
                    <th className="py-4 px-4 text-ink/50 font-medium">
                      Design & Build
                    </th>
                    <th className="py-4 px-4 text-ink/50 font-medium">
                      Monthly Fees
                    </th>
                    <th className="py-4 px-4 text-ink/50 font-medium">
                      Total Year 1
                    </th>
                    <th className="py-4 px-4 text-ink/50 font-medium">
                      Total Year 3
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {costComparison.map((row) => {
                    const isAnslio = row.platform.startsWith("Anslio");
                    const cls = isAnslio
                      ? "text-terracotta font-medium"
                      : "text-ink/70";
                    return (
                      <tr
                        key={row.platform}
                        className="border-b border-warm-gray-light/50"
                      >
                        <td className={`py-4 px-6 ${cls}`}>{row.platform}</td>
                        <td className={`py-4 px-4 ${cls}`}>{row.design}</td>
                        <td className={`py-4 px-4 ${cls}`}>{row.hosting}</td>
                        <td className={`py-4 px-4 ${cls}`}>{row.year1}</td>
                        <td className={`py-4 px-4 ${cls}`}>{row.year3}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </AnimateIn>
          <AnimateIn className="text-center mt-6">
            <p className="text-xs text-ink/40">
              * Anslio totals include ~$10&ndash;$15/year for domain name
              renewal. Squarespace and Wix costs are platform-only (you design
              it yourself). WordPress costs include hiring a developer plus
              monthly hosting.
            </p>
          </AnimateIn>
        </div>
      </section>
    </div>
  );
}
