"use client";

import React, { useState, useEffect } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { DATA } from "@/data/resume";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BlurFade from "@/components/magicui/blur-fade";

import { Marquee } from "@/components/magicui/marquee";

const BLUR_FADE_DELAY = 0.04;
const DURATION = 5000;

export default function HackathonsSection() {
  const [value, setValue] = useState<string>(DATA.hackathons[0]?.title);
  const [progress, setProgress] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let animationFrame: number;
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      if (!isHovered) {
        const elapsed = timestamp - startTime;
        setProgress((elapsed / DURATION) * 100);

        if (elapsed >= DURATION) {
          const currentIndex = DATA.hackathons.findIndex((h) => h.title === value);
          const nextIndex = (currentIndex + 1) % DATA.hackathons.length;
          setValue(DATA.hackathons[nextIndex].title);
          startTime = timestamp;
          setProgress(0);
        }
      } else {
        startTime = timestamp - (progress / 100) * DURATION;
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [value, isHovered, progress]);

  const handleValueChange = (newValue: string) => {
    if (newValue) {
      setValue(newValue);
      setProgress(0);
    }
  };

  return (
    <section id="hackathons" className="overflow-hidden">
      <div className="flex min-h-0 flex-col gap-y-12 w-full">
        {/* Header */}
        <BlurFade delay={BLUR_FADE_DELAY * 12}>
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              <div className="border border-primary/20 bg-primary/10 text-primary z-10 rounded-full px-4 py-1.5 shadow-sm backdrop-blur-sm">
                <span className="text-sm font-semibold tracking-wide">Certifications & Achievements</span>
              </div>
              <div className="flex-1 h-px bg-gradient-to-l from-transparent via-border to-transparent" />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center mt-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                Milestones & Recognition
              </h2>
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center max-w-[800px]">
                A showcase of hackathons, workshops, and certifications that define my continuous journey in mastering AI and full-stack development.
              </p>
            </div>
          </div>
        </BlurFade>

        {/* Feature Slideshow Content */}
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <div
            className="flex flex-col-reverse lg:flex-row gap-8 w-full max-w-6xl mx-auto items-stretch"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {/* Accordion on the Left */}
            <div className="w-full lg:w-5/12 flex flex-col justify-center">
              <Accordion.Root
                type="single"
                value={value}
                onValueChange={handleValueChange}
                className="w-full flex flex-col gap-3"
              >
                {DATA.hackathons.map((hackathon) => {
                  const isActive = value === hackathon.title;
                  return (
                    <Accordion.Item
                      key={hackathon.title}
                      value={hackathon.title}
                      className={cn(
                        "overflow-hidden rounded-2xl border bg-card transition-all duration-300 relative group",
                        isActive
                          ? "border-primary/50 shadow-md shadow-primary/10 ring-1 ring-primary/20"
                          : "border-border/50 hover:border-primary/30 hover:bg-muted/30 shadow-sm"
                      )}
                    >
                      <Accordion.Header className="flex">
                        <Accordion.Trigger className="flex flex-col w-full text-left p-5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                          <div className="flex justify-between items-center w-full">
                            <span
                              className={cn(
                                "font-semibold text-lg md:text-xl transition-colors duration-300",
                                isActive
                                  ? "text-primary"
                                  : "text-foreground group-hover:text-primary/80"
                              )}
                            >
                              {hackathon.title}
                            </span>
                          </div>
                          {!isActive && (
                            <p className="text-sm text-muted-foreground mt-1 line-clamp-1 opacity-70">
                              {hackathon.description}
                            </p>
                          )}
                        </Accordion.Trigger>
                      </Accordion.Header>
                      <Accordion.Content className="overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                        <div className="px-5 pb-5 pt-0">
                          {hackathon.dates && (
                            <p className="text-xs font-medium text-muted-foreground/80 uppercase tracking-wider mb-3">
                              {hackathon.dates} {hackathon.location ? `• ${hackathon.location}` : ""}
                            </p>
                          )}
                          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                            {hackathon.description}
                          </p>
                          {hackathon.links && hackathon.links.length > 0 && (
                            <div className="flex flex-row flex-wrap items-start gap-2">
                              {hackathon.links.map((link: any, idx) => (
                                <Link
                                  href={link.href}
                                  key={idx}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Badge className="flex items-center gap-1.5 text-xs bg-primary/10 hover:bg-primary/20 text-primary border-0 transition-colors">
                                    {link.icon}
                                    {link.title}
                                  </Badge>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      </Accordion.Content>

                      {/* Glowing Progress Bar */}
                      {isActive && (
                        <div className="absolute bottom-0 left-0 h-1 w-full bg-muted overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-primary to-blue-400 relative"
                            style={{ width: `${progress}%` }}
                          >
                            <div className="absolute top-0 right-0 bottom-0 w-10 bg-white/30 blur-[2px]" />
                          </div>
                        </div>
                      )}
                    </Accordion.Item>
                  );
                })}
              </Accordion.Root>
            </div>

            {/* Image display on the Right */}
            <div className="w-full lg:w-7/12 relative overflow-hidden rounded-3xl border border-border/50 bg-gradient-to-br from-muted/30 to-muted/10 min-h-[400px] md:min-h-[500px] lg:min-h-[600px] shadow-inner flex items-center justify-center group">
              <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent)] z-0" />
              
              {DATA.hackathons.map((hackathon) => {
                const isActive = value === hackathon.title;
                const imageArray = (hackathon as any).images || (hackathon.image ? [hackathon.image] : []);
                const hasImage = imageArray.length > 0;
                
                return (
                  <div
                    key={hackathon.title}
                    className={cn(
                      "absolute inset-0 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex items-center justify-center z-10",
                      isActive
                        ? "opacity-100 scale-100 translate-y-0"
                        : "opacity-0 scale-95 translate-y-4 pointer-events-none"
                    )}
                  >
                    {hasImage ? (
                      <div className="relative w-full h-full flex flex-row items-center justify-center overflow-hidden rounded-3xl p-4 md:p-8">
                        <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full" />
                        <Marquee pauseOnHover vertical className="[--duration:20s] h-full flex items-center">
                          {imageArray.map((imgSrc: string, idx: number) => (
                            <figure
                              key={idx}
                              className="relative h-fit w-fit overflow-hidden rounded-xl border border-border/50 bg-card/20 hover:bg-card/40 p-2 shadow-2xl backdrop-blur-sm"
                            >
                              <img
                                src={imgSrc}
                                alt={`${hackathon.title} ${idx + 1}`}
                                className="max-w-[280px] sm:max-w-[360px] md:max-w-[420px] max-h-[80vh] object-contain rounded-lg relative z-10 transition-transform duration-700 hover:scale-[1.02]"
                              />
                            </figure>
                          ))}
                        </Marquee>
                        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/6 bg-gradient-to-b from-muted/30 to-transparent"></div>
                        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/6 bg-gradient-to-t from-muted/30 to-transparent"></div>
                      </div>
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-8 bg-card/40 backdrop-blur-sm rounded-2xl border border-border/50 shadow-xl relative z-10">
                        <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 ring-1 ring-primary/20">
                          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                            <path d="M12 15v5s3-1.5 6-4" />
                            <path d="M12 15v5s-3-1.5-6-4" />
                            <path d="M12 15c2.2 0 4-1.8 4-4v-4c0-2.2-1.8-4-4-4s-4 1.8-4 4v4c0 2.2 1.8 4 4 4z" />
                            <path d="m15.5 3.5 1.5-1.5" />
                            <path d="m8.5 3.5-1.5-1.5" />
                          </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{hackathon.title}</h3>
                        <p className="text-muted-foreground/80 max-w-sm">{hackathon.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
