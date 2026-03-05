"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = [
  {
    title: "Lightning Fast",
    description:
      "Your site loads in under a second. That means visitors actually stick around \u2014 and Google notices too.",
  },
  {
    title: "Always Secure",
    description:
      "No logins to hack, no plugins to exploit. I build sites with virtually zero attack surface, so you never have to worry.",
  },
  {
    title: "No Hosting Fees",
    description:
      "Your site runs on top-tier platforms for free. The only recurring cost is your domain name \u2014 about $10\u2013$15 a year.",
  },
  {
    title: "Found on Google",
    description:
      "I build every site so it shows up in search results. Fast sites rank higher \u2014 that\u2019s just how Google works.",
  },
  {
    title: "Nothing to Maintain",
    description:
      "No software updates, no security patches, no things breaking at 2 a.m. Once it\u2019s live, it just runs.",
  },
  {
    title: "Perfect on Every Screen",
    description:
      "Phones, tablets, laptops, big monitors \u2014 I test on all of them. Your customers will see a polished site no matter what they\u2019re using.",
  },
];

export function WhyStatic() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="What you get"
          subtitle="A professional website without the headaches, the monthly fees, or the stuff that slows other sites down."
        />
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={false}
              animate={
                shouldShow
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 20 }
              }
              transition={{
                duration: 0.5,
                delay: shouldShow ? i * 0.1 : 0,
                ease: "easeOut" as const,
              }}
              className="card-gradient-border group relative bg-paper rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-warm-gray-light/50"
            >
              <h3 className="font-heading text-xl text-ink mb-2 group-hover:text-terracotta transition-colors">
                {benefit.title}
              </h3>
              <p className="text-ink/60 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
