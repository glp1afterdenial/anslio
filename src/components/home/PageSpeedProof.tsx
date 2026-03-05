"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { AnimateIn } from "@/components/AnimateIn";
import { useScrollReveal } from "@/hooks/useScrollReveal";

function ScoreRing({
  score,
  label,
  delay = 0,
  id,
  shouldShow,
}: {
  score: number;
  label: string;
  delay?: number;
  id: string;
  shouldShow: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (count / 100) * circumference;

  useEffect(() => {
    if (!isInView) return;
    const duration = 1500;
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * score));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, score]);

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={shouldShow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay, ease: "easeOut" as const }}
      className="flex flex-col items-center"
    >
      <div className="relative w-32 h-32 md:w-36 md:h-36">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="rgba(196,93,62,0.15)"
            strokeWidth="8"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke={`url(#${id})`}
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-75"
          />
          <defs>
            <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#c45d3e" />
              <stop offset="100%" stopColor="#6b7c5e" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-3xl md:text-4xl font-heading text-paper">
            {count}
          </span>
        </div>
      </div>
      <p className="mt-3 text-sm text-paper/50 font-medium">{label}</p>
    </motion.div>
  );
}

export function PageSpeedProof() {
  const { ref, shouldShow } = useScrollReveal();

  return (
    <section className="py-24 px-6 bg-ink relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-terracotta/[0.06] blur-[80px]" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <AnimateIn>
          <p className="text-terracotta font-medium mb-3 text-sm uppercase tracking-wider">
            Speed matters
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-paper mb-4">
            Google gives us a perfect score.
            <br />
            <span className="text-paper/40">Every single time.</span>
          </h2>
          <p className="text-lg text-paper/40 mb-16 max-w-xl mx-auto">
            Your visitors won&apos;t wait for a slow site. Ours load instantly —
            and Google rewards that with better search rankings.
          </p>
        </AnimateIn>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <ScoreRing score={100} label="Speed" delay={0} id="ring-speed" shouldShow={shouldShow} />
          <ScoreRing score={100} label="Accessibility" delay={0.15} id="ring-access" shouldShow={shouldShow} />
          <ScoreRing score={100} label="Best Practices" delay={0.3} id="ring-practices" shouldShow={shouldShow} />
          <ScoreRing score={100} label="Google Search" delay={0.45} id="ring-search" shouldShow={shouldShow} />
        </div>
      </div>
    </section>
  );
}
