import Link from "next/link";
import { FlickeringGrid } from "@/components/magicui/flickering-grid";
import { DATA } from "@/data/resume";

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
        <div className="grid w-full max-w-md grid-cols-1 gap-3 text-left sm:grid-cols-2">
          <a
            href={`mailto:${DATA.contact.email}`}
            className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            Email: {DATA.contact.email}
          </a>
          <a
            href="https://wa.me/919949211294"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            WhatsApp: 9949211294
          </a>
          <a
            href="tel:+919949211284"
            className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            Phone: 9949211284
          </a>
          <a
            href={DATA.contact.social.LinkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-border bg-background/70 px-4 py-3 text-sm text-foreground transition hover:border-primary/60"
          >
            LinkedIn: linkedin.com/in/akhileshdasari123
          </a>
        </div>
      </div>
    </div>
  );
}

