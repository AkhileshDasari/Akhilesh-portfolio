"use client";

import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";

interface HighlighterProps extends HTMLMotionProps<"span"> {
  action?: "highlight" | "underline";
  color?: string;
  delay?: number;
  duration?: number;
}

export function Highlighter({
  action = "highlight",
  color = "#FF9800",
  className,
  children,
  delay = 0,
  duration = 0.5,
  ...props
}: HighlighterProps) {
  return (
    <motion.span
      className={cn("relative inline-block z-0 whitespace-nowrap", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      {...props}
    >
      <span className="relative z-10 font-medium text-foreground">{children as React.ReactNode}</span>
      <motion.span
        className={cn(
          "absolute left-0 -z-10 rounded-sm",
          action === "highlight" ? "bottom-0 h-[40%]" : "bottom-[-2px] h-[3px]",
        )}
        style={{ backgroundColor: color, opacity: 0.3 }}
        variants={{
          hidden: { width: "0%" },
          visible: { width: "100%" },
        }}
        transition={{
          duration,
          ease: "easeInOut",
          delay,
        }}
      />
    </motion.span>
  );
}
