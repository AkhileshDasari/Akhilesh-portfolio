"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    audioRef.current = new Audio("/bgm.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.warn("Audio playback failed:", err);
        setIsPlaying(false);
      });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-20 right-6 z-[999]">
      <button
        onClick={togglePlay}
        className="group relative flex items-center justify-center"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {/* Outer glow ring */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={
            isPlaying
              ? {
                  boxShadow: [
                    "0 0 0px 0px rgba(139,92,246,0.0)",
                    "0 0 15px 4px rgba(139,92,246,0.3)",
                    "0 0 0px 0px rgba(139,92,246,0.0)",
                  ],
                }
              : { boxShadow: "0 0 0px 0px rgba(139,92,246,0.0)" }
          }
          transition={
            isPlaying
              ? { duration: 2, repeat: Infinity, ease: "easeInOut" }
              : { duration: 0.3 }
          }
        />

        {/* CD disc */}
        <motion.div
          className={cn(
            "relative size-16 rounded-full shadow-[0_0_15px_rgba(0,0,0,0.2)] dark:shadow-[0_0_15px_rgba(255,255,255,0.05)] overflow-hidden ring-1 ring-border",
            "bg-gradient-to-br from-[#e0e0e0] via-[#fafafa] to-[#e0e0e0]",
            "dark:from-neutral-800 dark:via-neutral-600 dark:to-neutral-800"
          )}
          animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
          transition={
            isPlaying
              ? { duration: 3, repeat: Infinity, ease: "linear" }
              : { duration: 0.5, ease: "easeOut" }
          }
        >
          {/* CD grooves */}
          <div className="absolute inset-0 rounded-full">
            <div className="absolute inset-[6px] rounded-full border border-black/5 dark:border-white/5" />
            <div className="absolute inset-[10px] rounded-full border border-black/5 dark:border-white/5" />
            <div className="absolute inset-[14px] rounded-full border border-black/10 dark:border-white/10" />
            <div className="absolute inset-[20px] rounded-full border border-black/5 dark:border-white/5" />
          </div>

          {/* CD rainbow shimmer */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-[0.35] dark:opacity-30 mix-blend-color-dodge dark:mix-blend-plus-lighter"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(255,0,0,0.4), rgba(255,165,0,0.4), rgba(255,255,0,0.4), rgba(0,128,0,0.4), rgba(0,0,255,0.4), rgba(75,0,130,0.4), rgba(238,130,238,0.4), transparent)",
            }}
            animate={isPlaying ? { rotate: -360 } : {}}
            transition={
              isPlaying
                ? { duration: 4, repeat: Infinity, ease: "linear" }
                : {}
            }
          />

          {/* Center hole and clear ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Clear plastic ring area */}
            <div className="size-6 rounded-full bg-background/30 backdrop-blur-sm border border-black/20 dark:border-white/20 flex items-center justify-center shadow-sm">
              {/* Actual hole */}
              <div className="size-2.5 rounded-full bg-background shadow-inner border border-black/10 dark:border-white/10" />
            </div>
          </div>

          {/* Play/Pause icon overlay */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-300 z-10",
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          )}>
            <div className="size-full rounded-full bg-black/30 dark:bg-black/60 flex items-center justify-center backdrop-blur-[1px]">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.svg
                    key="pause"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="size-6 text-white drop-shadow-md"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="play"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="size-6 text-white ml-1 drop-shadow-md"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </motion.svg>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Equalizer bars (visible when playing) */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -5 }}
              className="absolute -left-5 flex items-end gap-[2px] h-4"
            >
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="w-[3px] rounded-full bg-primary"
                  animate={{
                    height: ["4px", "14px", "6px", "12px", "4px"],
                  }}
                  transition={{
                    duration: 0.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.15,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </div>
  );
}
