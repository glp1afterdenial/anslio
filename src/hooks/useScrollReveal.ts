"use client";

import { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";

/**
 * Scroll reveal hook that avoids SSR hydration flash.
 *
 * Problem: On hydration, isInView starts as false, so Framer Motion
 * sets opacity to 0 — making SSR-visible content disappear briefly
 * before the IntersectionObserver fires and fades it back in.
 *
 * Fix: Keep everything visible until we've confirmed the element is
 * NOT in the viewport. Above-the-fold elements never flash because
 * the observer fires before our timeout. Below-the-fold elements
 * hide after 50ms (user can't see them anyway) and animate in on scroll.
 */
export function useScrollReveal(amount = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  const [ready, setReady] = useState(false);
  const isInViewRef = useRef(false);
  isInViewRef.current = isInView;

  useEffect(() => {
    // Wait a tick for IntersectionObserver to fire for above-fold elements,
    // then enable animations for anything still out of view
    const timer = setTimeout(() => {
      if (!isInViewRef.current) {
        setReady(true);
      }
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  // Show if: not ready yet (prevents SSR flash) OR element is in view
  const shouldShow = isInView || !ready;

  return { ref, shouldShow };
}
