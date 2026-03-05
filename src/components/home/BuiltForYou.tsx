"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/Button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const industries = [
  { name: "Restaurants & Cafes", examples: "Menus, hours, location, catering info" },
  { name: "Salons & Stylists", examples: "Service menus, stylist bios, booking info" },
  { name: "Pet Services", examples: "Grooming packages, pricing, testimonials" },
  { name: "Fitness & Training", examples: "Programs, trainer bios, client results" },
  { name: "Dental & Medical", examples: "Services, insurance info, patient resources" },
  { name: "Home Services", examples: "Service areas, project photos, free quotes" },
  { name: "Law & Consulting", examples: "Practice areas, credentials, case studies" },
  { name: "Real Estate", examples: "Listings, agent bio, market area, contact" },
];

export function BuiltForYou() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="Built around your brand"
          subtitle="I don\u2019t do cookie-cutter. I take your colors, your voice, and your story and turn them into a site that actually represents who you are."
        />

        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={false}
              animate={
                shouldShow
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 16 }
              }
              transition={{
                duration: 0.4,
                delay: shouldShow ? i * 0.08 : 0,
                ease: "easeOut" as const,
              }}
              className="card-gradient-border bg-white rounded-xl p-5 hover:shadow-md transition-all duration-300"
            >
              <h3 className="font-heading text-base text-ink mb-1">
                {ind.name}
              </h3>
              <p className="text-xs text-ink/50 leading-relaxed">
                {ind.examples}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="relative bg-ink rounded-2xl p-8 md:p-10 text-center overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-terracotta/[0.08] blur-[60px]" />
          <div className="relative z-10">
            <h3 className="font-heading text-xl text-paper mb-3">
              Don&apos;t see your industry?
            </h3>
            <p className="text-sm text-paper/50 mb-6 max-w-lg mx-auto">
              It doesn&apos;t matter what field you&apos;re in. Send me some
              examples of sites you like, tell me what your customers care
              about, and I&apos;ll take it from there.
            </p>
            <Button href="/contact">Get a Quote</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
