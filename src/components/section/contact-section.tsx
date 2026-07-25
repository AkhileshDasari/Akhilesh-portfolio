import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";

export default function ContactSection() {
  return (
    <div className="border rounded-xl p-10 relative">
      <div className="absolute -top-4 border bg-primary z-10 rounded-xl px-4 py-1 left-1/2 -translate-x-1/2">
        <span className="text-background text-sm font-medium">Contact</span>
      </div>
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
      <div className="relative flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mx-auto max-w-lg text-muted-foreground text-balance">
          Reach me directly by email, phone, WhatsApp or LinkedIn. I&apos;m happy to help you choose the right service and book a slot.
        </p>
        <div className="grid w-full max-w-xl grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            <Icons.email className="size-5 text-primary" />
            <span>Email: {DATA.contact.email}</span>
          </a>
          <a
            href="https://wa.me/919949211294"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            <Icons.whatsapp className="size-5 text-primary" />
            <span>WhatsApp: 9949211294</span>
          </a>
          <a
            href="tel:+919949211284"
            className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.86 19.86 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13 1.21.39 2.39.78 3.53a2 2 0 0 1-.45 2.11L8.09 10.91a16 16 0 0 0 6 6l1.55-1.55a2 2 0 0 1 2.11-.45c1.14.39 2.32.65 3.53.78A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
            <span>Phone: 9949211284</span>
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            <Icons.linkedin className="size-5 text-primary" />
            <span>LinkedIn: linkedin.com/in/akhileshdasari123</span>
          </a>
        </div>
      </div>
    </div>
  );
}

