"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

interface SmoothCursorProps {
  size?: number;
  stiffness?: number;
  damping?: number;
  mass?: number;
  color?: string;
}

export function SmoothCursor({
  size = 24,
  stiffness = 150,
  damping = 15,
  mass = 0.2,
  color = "currentColor",
}: SmoothCursorProps) {
  const [isMounted, setIsMounted] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { damping, stiffness, mass };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - size / 2);
      mouseY.set(e.clientY - size / 2);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [mouseX, mouseY, size]);

  if (!isMounted) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[9999] hidden rounded-full mix-blend-difference md:block text-primary bg-primary"
      style={{
        width: size,
        height: size,
        translateX: cursorX,
        translateY: cursorY,
      }}
    />
  );
}
