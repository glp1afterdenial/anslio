"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";

export function About() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <AnimateIn>
          <p className="text-terracotta font-medium mb-3">About</p>
          <h1 className="text-4xl md:text-5xl font-heading text-ink mb-8">
            One person, one mission:
            <br />
            make your business look great online
          </h1>
        </AnimateIn>

        <AnimateIn delay={0.1}>
          <div className="prose prose-lg max-w-none text-ink/70 leading-relaxed space-y-6">
            <p>
              Hey — I&apos;m the person behind Anslio. I&apos;m a software
              engineer with over 5 years of professional experience, and I
              build websites the same way I build enterprise software: with
              care, precision, and an obsession with speed.
            </p>
            <p>
              I started Anslio because I kept seeing small businesses get a
              raw deal. They&apos;d pay too much for a slow website on a
              platform that charged them every month, or they&apos;d try to
              build it themselves and end up with something that didn&apos;t
              do their business justice. I knew I could do better for them.
            </p>
            <p>
              Every site I build is fast, handcrafted, and fully owned by
              you. No monthly platform fees, no templates, no shortcuts.
            </p>
          </div>
        </AnimateIn>

        <AnimateIn delay={0.2} className="mt-16">
          <h2 className="text-2xl font-heading text-ink mb-6">How I work</h2>
          <div className="space-y-6">
            {[
              {
                title: "Custom, not cookie-cutter",
                text: "Every site is built from scratch around your brand. No templates, no drag-and-drop builders. Your site will look and feel like it was made just for you — because it was.",
              },
              {
                title: "No meetings, no hassle",
                text: "Everything happens over email — clear, simple, and on your schedule. You'll get faster results because I spend my time building, not sitting in calls.",
              },
              {
                title: "I ship and it's yours",
                text: "Once your site goes live, you own everything. There's no ongoing dependency on me. If you ever need a change, come back anytime — or take it to anyone else. No hard feelings.",
              },
              {
                title: "I'm obsessed with speed",
                text: "Every site I build scores perfect on Google's website speed test. Fast sites rank higher, load instantly, and make a stronger first impression on your customers.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-gradient-border bg-white rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-heading text-lg text-ink mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-ink/60 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </AnimateIn>

        <AnimateIn delay={0.3} className="mt-16 text-center">
          <p className="text-lg text-ink/60 mb-6">
            Sound like a good fit? I&apos;d love to hear about your business.
          </p>
          <Button href="/contact">Get in Touch</Button>
        </AnimateIn>
      </div>
    </div>
  );
}
