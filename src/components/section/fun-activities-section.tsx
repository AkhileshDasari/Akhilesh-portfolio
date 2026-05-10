import { HeroVideoDialog } from "@/components/magicui/hero-video-dialog";
import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";

const BLUR_FADE_DELAY = 0.04;

export default function FunActivitiesSection() {
  if (!DATA.funActivities) return null;

  return (
    <section id="fun-activities">
      <div className="flex min-h-0 flex-col gap-y-4">
        <BlurFade delay={BLUR_FADE_DELAY * 13}>
          <h2 className="text-xl font-bold">Fun Activities</h2>
        </BlurFade>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {DATA.funActivities.map((video, idx) => (
            <BlurFade key={video.title + idx} delay={BLUR_FADE_DELAY * 14 + idx * 0.05}>
              <div className="flex flex-col gap-2">
                <HeroVideoDialog
                  className="block"
                  animationStyle="from-center"
                  videoSrc={video.videoSrc}
                  thumbnailSrc={video.thumbnailSrc}
                  thumbnailAlt={video.title}
                />
                <h3 className="text-sm font-medium text-center text-muted-foreground">{video.title}</h3>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
