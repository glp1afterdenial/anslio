"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface AnimateInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  duration?: number;
}

export function AnimateIn({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
}: AnimateInProps) {
  const { ref, shouldShow } = useScrollReveal();

  const directions = {
    up: { y: 30, x: 0 },
    left: { y: 0, x: -30 },
    right: { y: 0, x: 30 },
    none: { y: 0, x: 0 },
  };

  const { x, y } = directions[direction];

  return (
    <motion.div
      ref={ref}
      initial={false}
      animate={
        shouldShow
          ? { opacity: 1, x: 0, y: 0 }
          : { opacity: 0, x, y }
      }
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
