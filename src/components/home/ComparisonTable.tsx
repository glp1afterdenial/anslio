"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const rows = [
  { feature: "How Fast It Loads", anslio: "Under 1 second", wordpress: "3\u20136 seconds", wix: "2\u20135 seconds" },
  { feature: "Google Speed Score", anslio: "95\u2013100", wordpress: "40\u201370", wix: "50\u201375" },
  { feature: "Monthly Cost", anslio: "Free", wordpress: "$10\u201330/mo", wix: "$16\u201345/mo" },
  { feature: "Can Get Hacked?", anslio: "Nearly impossible", wordpress: "Common target", wix: "Possible" },
  { feature: "Needs Updates?", anslio: "Never", wordpress: "Frequently", wix: "Sometimes" },
  { feature: "Uptime", anslio: "99.99%", wordpress: "99\u201399.9%", wix: "99.9%" },
  { feature: "You Own the Code?", anslio: "Yes, 100%", wordpress: "Sort of", wix: "No" },
];

export function ComparisonTable() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-ink text-paper relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-terracotta/[0.04] blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-sage/[0.04] blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="How we stack up"
          subtitle="See why our sites outperform the big website builders in every way that matters to your business."
          className="[&_h2]:text-paper [&_p]:text-paper/40"
        />
        <motion.div
          ref={ref}
          initial={false}
          animate={shouldShow ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto rounded-2xl bg-paper/[0.03] border border-paper/10 backdrop-blur-sm"
        >
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-paper/10">
                <th className="py-5 px-6 text-paper/40 font-medium" />
                <th className="py-5 px-5 text-terracotta font-semibold">Anslio</th>
                <th className="py-5 px-5 text-paper/40 font-medium">WordPress</th>
                <th className="py-5 px-5 text-paper/40 font-medium">Wix</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.feature} className="border-b border-paper/[0.06] last:border-0">
                  <td className="py-4 px-6 text-paper/60 font-medium">{row.feature}</td>
                  <td className="py-4 px-5 text-terracotta font-medium">{row.anslio}</td>
                  <td className="py-4 px-5 text-paper/40">{row.wordpress}</td>
                  <td className="py-4 px-5 text-paper/40">{row.wix}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
    </section>
  );
}
