"use client";

import { AnimateIn } from "@/components/AnimateIn";
import { Button } from "@/components/Button";
import { siteConfig } from "@/data/site-config";

export function Contact() {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <AnimateIn className="text-center mb-12">
          <p className="text-terracotta font-medium mb-3">Contact</p>
          <h1 className="text-4xl md:text-5xl font-heading text-ink mb-4">
            Tell me about your business
          </h1>
          <p className="text-lg text-ink/60 max-w-xl mx-auto">
            No pressure, no sales pitch. Just tell me what you do and
            I&apos;ll get back to you within 24 hours with ideas and a
            clear quote.
          </p>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <AnimateIn className="md:col-span-3" delay={0.1}>
            <form
              action={
                siteConfig.formspreeId
                  ? `https://formspree.io/f/${siteConfig.formspreeId}`
                  : "#"
              }
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-ink/70 mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray-light focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors text-sm"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-ink/70 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray-light focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors text-sm"
                    placeholder="jane@business.com"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="business"
                  className="block text-sm font-medium text-ink/70 mb-2"
                >
                  Business Name
                </label>
                <input
                  type="text"
                  id="business"
                  name="business"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray-light focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors text-sm"
                  placeholder="Your Business LLC"
                />
              </div>
              <div>
                <label
                  htmlFor="package"
                  className="block text-sm font-medium text-ink/70 mb-2"
                >
                  Interested In
                </label>
                <select
                  id="package"
                  name="package"
                  className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray-light focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors text-sm"
                >
                  <option value="">Select a package...</option>
                  <option value="starter">Starter ($500)</option>
                  <option value="professional">Professional ($1,000)</option>
                  <option value="premium">Premium ($2,000)</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-ink/70 mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="description"
                  name="description"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white border border-warm-gray-light focus:border-terracotta focus:ring-1 focus:ring-terracotta outline-none transition-colors text-sm resize-none"
                  placeholder="What does your business do? What pages do you need? Any websites you like the look of?"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </AnimateIn>

          <AnimateIn className="md:col-span-2" delay={0.2}>
            <div className="bg-white rounded-2xl p-8 h-fit">
              <h3 className="font-heading text-xl text-ink mb-4">
                Or just email me
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-xs font-medium text-ink/40 uppercase tracking-wider mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-terracotta hover:text-terracotta-dark transition-colors text-sm"
                  >
                    {siteConfig.email}
                  </a>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink/40 uppercase tracking-wider mb-1">
                    Location
                  </p>
                  <p className="text-sm text-ink/70">{siteConfig.location}</p>
                </div>
                <div>
                  <p className="text-xs font-medium text-ink/40 uppercase tracking-wider mb-1">
                    Response Time
                  </p>
                  <p className="text-sm text-ink/70">Within 24 hours</p>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-warm-gray-light">
                <p className="text-xs text-ink/40 leading-relaxed">
                  No sales calls, no pressure. Just tell me what you need and
                  I&apos;ll get back to you with a clear quote and timeline.
                </p>
              </div>
            </div>
          </AnimateIn>
        </div>
      </div>
    </div>
  );
}
