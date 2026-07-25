import BlurFade from "@/components/magicui/blur-fade";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { buildWhatsAppLink, SERVICES } from "@/data/services";
import { ArrowUpRight, CheckCircle2, MessageCircle } from "lucide-react";
import Link from "next/link";

const BLUR_FADE_DELAY = 0.04;

const foundationPoints = [
  "LinkedIn and GitHub setup",
  "Professional bio, headline, and online presence basics",
  "Student resume starter template",
  "Portfolio profile or basic website",
  "Beginner-friendly project roadmap",
  "Internship and hackathon platform setup",
  "Organization tips for certificates, projects, and achievements",
];

export default function ServicesPage() {
  return (
    <main className="min-h-dvh flex flex-col gap-12 relative pb-24">
      <section id="hero" className="scroll-mt-24">
        <div className="flex flex-col gap-6">
          <BlurFade delay={BLUR_FADE_DELAY}>
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="flex items-center w-full">
                <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
                <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                  <span className="text-background text-sm font-medium">Services</span>
                </div>
                <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
              </div>
              <h1 className="text-3xl font-semibold tracking-tighter sm:text-4xl lg:text-5xl max-w-3xl">
                Build Your Professional Presence. Get Job-Ready. Grow Online.
              </h1>
              <p className="max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed">
                I help students, job seekers, professionals, freelancers, and small businesses with ATS-friendly resumes, LinkedIn profiles, portfolio websites, GitHub presentation, and online branding.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link
                  href="https://wa.me/919949211294"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                >
                  Book a Slot
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      <section id="services" className="scroll-mt-24">
        <div className="flex min-h-0 flex-col gap-y-8">
          <div className="flex flex-col gap-y-4 items-center justify-center">
            <div className="flex items-center w-full">
              <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
              <div className="border bg-primary z-10 rounded-xl px-4 py-1">
                <span className="text-background text-sm font-medium">Services</span>
              </div>
              <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
            </div>
            <div className="flex flex-col gap-y-3 items-center justify-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Services</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {SERVICES.map((service, index) => (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * (2 + index * 0.2)} className="h-full">
                <div className="border rounded-xl p-5 bg-card/70 shadow-sm hover:border-primary/50 transition-colors h-full flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-semibold tracking-tight">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">What I need from you</p>
                    <ul className="space-y-1.5 text-sm text-muted-foreground">
                      {service.needs.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto">
                    <Link
                      href={buildWhatsAppLink(service.title)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-4 py-2 text-sm font-medium text-foreground transition hover:bg-primary/20"
                    >
                      {service.cta}
                      <ArrowUpRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="career-foundation" className="scroll-mt-24">
        <div className="border rounded-xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative flex flex-col gap-6">
            <div className="flex flex-col gap-3 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Career Foundation for First-Year Students</h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Start building your professional presence from day one. Set up LinkedIn, GitHub, a student resume, a beginner portfolio, and a practical project roadmap.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {foundationPoints.map((point) => (
                <div key={point} className="flex items-start gap-2 rounded-lg border border-border/70 bg-background/70 p-3 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-border/70 bg-background/70 p-4 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">What I need from students</p>
              <p className="mt-2">College name, course or branch, current year, areas of interest, existing LinkedIn or GitHub link if available, and current skills.</p>
            </div>
            <div className="flex justify-center">
              <Link
                href="https://wa.me/919949211294?text=Hi%20Akhilesh%2C%20I%27m%20interested%20in%20Career%20Foundation"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
              >
                Start My Career Foundation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="workshops" className="scroll-mt-24">
        <div className="border rounded-xl p-8 sm:p-10 flex flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">College Batch Workshops</h2>
          <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
            Career Foundation workshops for first-year student batches, college clubs, departments, and student communities.
          </p>
          <Link
            href="https://wa.me/919949211294?text=Hi%20Akhilesh%2C%20I%27m%20interested%20in%20College%20Batch%20Workshops"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-primary/20"
          >
            Enquire About Workshops
          </Link>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24">
        <div className="border rounded-xl p-8 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 top-0 left-0 right-0 h-1/2 rounded-xl overflow-hidden">
            <FlickeringGrid
              className="h-full w-full"
              squareSize={2}
              gridGap={2}
              style={{
                maskImage: "linear-gradient(to bottom, black, transparent)",
                WebkitMaskImage: "linear-gradient(to bottom, black, transparent)",
              }}
            />
          </div>
          <div className="relative flex flex-col items-center gap-5 text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Contact</h2>
            <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">Email: akhileshdasari123@gmail.com</div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">WhatsApp: 9949211294</div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">Phone: 9949211284</div>
              <div className="rounded-lg border border-border/70 bg-background/70 p-3">LinkedIn: linkedin.com/in/akhileshdasari123</div>
            </div>
            <p className="max-w-xl text-sm sm:text-base text-muted-foreground leading-relaxed">
              Tell me what you need, share the basics on WhatsApp, and I’ll help you choose the right service and book a suitable slot.
            </p>
            <Link
              href="https://wa.me/919949211294"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Message on WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Link
        href="https://wa.me/919949211294"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
      >
        <MessageCircle className="h-4 w-4" />
        Chat
      </Link>
    </main>
  );
}
