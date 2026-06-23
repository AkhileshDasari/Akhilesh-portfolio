"use client";

import { GitHubCalendar } from "react-github-calendar";
import BlurFade from "@/components/magicui/blur-fade";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
          <div className="w-full overflow-hidden flex justify-center bg-[#fdfdfd] dark:bg-[#1a1a1a] rounded-xl shadow-sm border border-border/50 pt-2">
            <img 
              src={`https://leetcard.jacoblin.cool/akhileshdasari_?ext=heatmap&theme=${currentTheme}&font=Inter&border=0`} 
              alt="LeetCode Heatmap" 
              className="w-full h-auto object-contain max-w-[800px]"
            />
          </div>
          {/* LeetCode Activity */}
          <div className="w-full overflow-hidden flex justify-center bg-[#fdfdfd] dark:bg-[#1a1a1a] rounded-xl shadow-sm border border-border/50">
            <img 
              src={`https://leetcard.jacoblin.cool/akhileshdasari_?ext=activity&theme=${currentTheme}&font=Inter&border=0`} 
              alt="LeetCode Activity" 
              className="w-full h-auto object-contain max-w-[800px]"
            />
          </div>
          {/* GitHub Calendar */}
          <div className="w-full flex flex-col p-4 md:p-6 rounded-xl shadow-sm border border-border/50 bg-[#fdfdfd] dark:bg-[#1a1a1a] overflow-x-auto">
            <h3 className="text-sm font-medium mb-3 text-muted-foreground">GitHub Contributions</h3>
            <div className="flex justify-center min-w-[700px]">
              <GitHubCalendar 
                username="AkhileshDasari" 
                colorScheme={currentTheme}
                fontSize={12}
                blockSize={12}
                blockMargin={4}
              />
            </div>
          </div>
        </div>
      </BlurFade>
    </div>
  );
}
