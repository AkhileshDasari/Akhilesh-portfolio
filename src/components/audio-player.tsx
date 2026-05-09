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
            "relative size-12 rounded-full border-2 border-border/50 shadow-lg backdrop-blur-md overflow-hidden",
            "bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-950",
            "dark:from-neutral-100 dark:via-neutral-200 dark:to-neutral-50"
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
            <div className="absolute inset-[6px] rounded-full border border-white/10 dark:border-black/10" />
            <div className="absolute inset-[10px] rounded-full border border-white/5 dark:border-black/5" />
            <div className="absolute inset-[14px] rounded-full border border-white/10 dark:border-black/10" />
          </div>

          {/* CD rainbow shimmer */}
          <motion.div
            className="absolute inset-0 rounded-full opacity-30"
            style={{
              background:
                "conic-gradient(from 0deg, transparent, rgba(139,92,246,0.3), transparent, rgba(59,130,246,0.3), transparent, rgba(16,185,129,0.3), transparent)",
            }}
            animate={isPlaying ? { rotate: -360 } : {}}
            transition={
              isPlaying
                ? { duration: 5, repeat: Infinity, ease: "linear" }
                : {}
            }
          />

          {/* Center hole */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="size-4 rounded-full bg-background border border-border shadow-inner" />
          </div>

          {/* Play/Pause icon overlay */}
          <div className={cn(
            "absolute inset-0 flex items-center justify-center transition-opacity duration-200",
            isPlaying ? "opacity-0 group-hover:opacity-100" : "opacity-100"
          )}>
            <div className="size-full rounded-full bg-black/40 dark:bg-white/20 flex items-center justify-center backdrop-blur-sm">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.svg
                    key="pause"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.15 }}
                    className="size-5 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <rect x="6" y="4" width="4" height="16" rx="1" />
                    <rect x="14" y="4" width="4" height="16" rx="1" />
                  </motion.svg>
                ) : (
                  <motion.svg
                    key="play"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.15 }}
                    className="size-5 text-white ml-0.5"
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
