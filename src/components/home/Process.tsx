"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const steps = [
  {
    number: "01",
    title: "Tell me about your business",
    description:
      "What do you do? Who are your customers? What makes you different? Send me your logo, your brand colors, links to sites you like \u2014 whatever helps me understand your world.",
  },
  {
    number: "02",
    title: "I build it around you",
    description:
      "I design and hand-code your site from scratch. Your voice, your colors, your personality. Not a template with your name on it \u2014 something that actually feels like your business.",
  },
  {
    number: "03",
    title: "You tell me what to tweak",
    description:
      "I\u2019ll show you the site and you tell me what you love and what to change. We go back and forth until you\u2019re genuinely proud of it.",
  },
  {
    number: "04",
    title: "Launch \u2014 and it\u2019s yours",
    description:
      "I put it live, set up your visitor tracking, and hand everything over. You own the code, the domain, and the hosting. Walk away whenever you want \u2014 no strings attached.",
  },
];

export function Process() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="How it works"
          subtitle="No hour-long calls, no design-by-committee. Just a straightforward process that respects your time."
        />
        <div ref={ref} className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-7 top-4 bottom-4 w-px bg-gradient-to-b from-terracotta via-terracotta/30 to-sage hidden md:block" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={false}
                animate={
                  shouldShow
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -30 }
                }
                transition={{
                  duration: 0.5,
                  delay: shouldShow ? i * 0.15 : 0,
                  ease: "easeOut" as const,
                }}
                className="flex gap-6 md:gap-8 items-start relative"
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-terracotta to-terracotta-dark flex items-center justify-center relative z-10 shadow-lg">
                  <span className="text-white font-heading text-lg">
                    {step.number}
                  </span>
                </div>
                <div className="bg-paper rounded-2xl p-6 flex-1 border border-warm-gray-light/50 hover:shadow-md transition-shadow duration-300">
                  <h3 className="font-heading text-xl text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-ink/60 leading-relaxed text-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
