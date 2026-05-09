"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Play, XIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type AnimationStyle =
  | "from-bottom"
  | "from-center"
  | "from-top"
  | "from-left"
  | "from-right"
  | "fade"
  | "top-in-bottom-out"
  | "left-in-right-out";

interface HeroVideoProps {
  animationStyle?: AnimationStyle;
  videoSrc: string;
  thumbnailSrc: string;
  thumbnailAlt?: string;
  className?: string;
}

const animationVariants = {
  "from-bottom": {
    initial: { y: "100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "from-center": {
    initial: { scale: 0.5, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0.5, opacity: 0 },
  },
  "from-top": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "-100%", opacity: 0 },
  },
  "from-left": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
  },
  "from-right": {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  },
  "top-in-bottom-out": {
    initial: { y: "-100%", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: "100%", opacity: 0 },
  },
  "left-in-right-out": {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
  },
};

export function HeroVideoDialog({
  animationStyle = "from-center",
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoProps) {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const selectedAnimation = animationVariants[animationStyle];

  return (
    <div className={cn("relative", className)}>
      <div
        className="relative cursor-pointer group rounded-xl overflow-hidden shadow-sm border"
        onClick={() => setIsVideoOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full aspect-video object-cover transition-all duration-200 ease-out group-hover:scale-105 group-hover:brightness-75"
        />
        <div className="absolute inset-0 flex items-center justify-center group-hover:scale-100 scale-[0.9] transition-all duration-200 ease-out rounded-xl">
          <div className="bg-primary/10 flex items-center justify-center rounded-full backdrop-blur-md size-16">
            <div className="flex items-center justify-center bg-primary shadow-md rounded-full size-12 transition-all ease-out duration-200 relative group-hover:scale-[1.2] scale-100">
              <Play
                className="size-5 text-primary-foreground fill-primary-foreground group-hover:scale-105 scale-100 transition-transform duration-200 ease-out"
                style={{
                  filter:
                    "drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))",
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setIsVideoOpen(false)}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/50 backdrop-blur-md"
          >
            <motion.div
              {...selectedAnimation}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-4xl aspect-video mx-4 md:mx-0"
            >
              <motion.button
                className="absolute -top-12 right-0 text-white text-xl bg-neutral-900/50 ring-1 ring-white/10 backdrop-blur-md rounded-full p-2 hover:bg-neutral-900/80 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsVideoOpen(false);
                }}
              >
                <XIcon className="size-5" />
              </motion.button>
              <div className="size-full border-2 border-white/20 rounded-xl overflow-hidden isolate z-[1] relative shadow-2xl">
                {videoSrc.includes("youtube.com") || videoSrc.includes("vimeo.com") ? (
                  <iframe
                    src={videoSrc}
                    className="size-full rounded-xl bg-black"
                    allowFullScreen
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                ) : (
                  <video
                    src={videoSrc}
                    className="size-full rounded-xl bg-black object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
