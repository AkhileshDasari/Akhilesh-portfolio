"use client";

import { GitHubCalendar } from "react-github-calendar";
import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import LeetCodeCalendar from "./leetcode-calendar";

const selectLastHalfYear = (contributions: any[]) => {
  const today = new Date();
  const sixMonthsAgo = new Date();
  sixMonthsAgo.setMonth(today.getMonth() - 6);
  
  return contributions.filter((activity: any) => {
    const date = new Date(activity.date);
    return date >= sixMonthsAgo;
  });
};

const BLUR_FADE_DELAY = 0.04;

export default function StatsSection() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex flex-col gap-y-4 animate-pulse">
        <div className="h-6 w-32 bg-muted rounded"></div>
        <div className="h-[200px] bg-muted rounded-xl"></div>
      </div>
    );
  }

  const currentTheme = resolvedTheme === "dark" ? "dark" : "light";

  return (
    <div className="flex flex-col gap-y-4">
      <BlurFade delay={BLUR_FADE_DELAY * 10.5}>
        <h2 className="text-xl font-bold">Coding Stats</h2>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 10.6}>
        <div className="flex flex-col gap-4">
          {/* LeetCode Heatmap */}
          <div className="w-full flex flex-col p-5 md:p-6 rounded-2xl shadow-sm border border-border/40 bg-white dark:bg-neutral-900/40 overflow-hidden transition-colors hover:border-border/80">
            <h3 className="text-sm font-semibold mb-4 text-foreground/80">LeetCode Contributions</h3>
            <div className="flex justify-center overflow-x-auto pb-2 w-full">
              <LeetCodeCalendar username="akhileshdasari_" theme={currentTheme} />
            </div>
          </div>
          {/* GitHub Calendar */}
          <div className="w-full flex flex-col p-5 md:p-6 rounded-2xl shadow-sm border border-border/40 bg-white dark:bg-neutral-900/40 overflow-hidden transition-colors hover:border-border/80">
            <h3 className="text-sm font-semibold mb-4 text-foreground/80">GitHub Contributions</h3>
            <div className="flex justify-center overflow-x-auto pb-2 w-full">
              <GitHubCalendar 
                username="AkhileshDasari" 
                colorScheme={currentTheme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
                transformData={selectLastHalfYear}
                labels={{
                  totalCount: '{{count}} contributions in the last 6 months',
                }}
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
