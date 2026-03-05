"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading } from "@/components/SectionHeading";

const faqs = [
  {
    question: "What kind of website do I get?",
    answer:
      "A custom website designed and built from scratch for your business. Not a template \u2014 I design everything around your brand, your colors, and your customers. The end result is a fast, professional site that you fully own.",
  },
  {
    question: "What happens after my site goes live?",
    answer:
      "I hand it off and it\u2019s yours. Your site doesn\u2019t need any ongoing maintenance to stay online \u2014 it just works. If you ever need something changed, reach out and I\u2019ll give you a quick quote, or you can take it to any developer you trust.",
  },
  {
    question: "Do I really own everything?",
    answer:
      "Yes, 100%. The code, the design, the domain, the hosting \u2014 all yours. There\u2019s no lock-in and no platform you\u2019re stuck on. If you ever want to part ways, everything goes with you.",
  },
  {
    question: "Are there any recurring costs?",
    answer:
      "The only recurring cost is your domain name (like yourbusiness.com), which runs about $10\u2013$15 per year. Hosting is completely free. There are no monthly platform fees, no subscriptions, and no surprise charges.",
  },
  {
    question: "How long does it take?",
    answer:
      "Most sites are ready in 2\u20134 weeks depending on the package. Starter takes about 2 weeks, Professional about 3, and Premium about 4. I\u2019ll give you a clear timeline before we start.",
  },
  {
    question: "What if I need changes later?",
    answer:
      "Just shoot me an email and I\u2019ll quote it \u2014 most small updates are quick and affordable. Or if you\u2019d rather not think about it, the optional maintenance plan ($35/mo) covers regular updates and priority support.",
  },
  {
    question: "Why is this better than Squarespace or Wix?",
    answer:
      "Those platforms charge you every month and give you a template that looks like everyone else\u2019s. With me, you pay once, get something custom-designed around your brand, and your site loads way faster. No monthly fees, no limitations, and you actually own it.",
  },
];

function FAQItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-warm-gray-light/50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left cursor-pointer group"
      >
        <span className="font-medium text-ink pr-4 group-hover:text-terracotta transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className="text-terracotta text-2xl flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-terracotta/10"
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-ink/60 leading-relaxed text-sm max-w-2xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionHeading title="Common questions" />
        <div>
          {faqs.map((faq) => (
            <FAQItem key={faq.question} {...faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
