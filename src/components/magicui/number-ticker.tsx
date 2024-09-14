"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import { cn } from "@/lib/utils";

export default function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
  suffix = "", // added suffix prop
}: {
  value: number;
  direction?: "up" | "down";
  suffix?: string; // added suffix prop
  className?: string;
  delay?: number; // delay in s
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "0px" });

  useEffect(() => {
    isInView &&
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : value);
      }, delay * 1000);
  }, [motionValue, isInView, delay, value, direction]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) {
          ref.current.textContent = `${Intl.NumberFormat("en-US").format(
            Number(latest.toFixed(0)),
          )} ${suffix}`; // added suffix to the text content
        }
      }),
    [springValue, suffix], // added suffix to the dependency array
  );

  return (
    <span
      className={cn(
        "inline-block tabular-nums font-monument text-black dark:text-white tracking-wider",
        className,
      )}
      ref={ref}
    />
  );
}