import Link from "next/link";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton() {
  return (
    <Link
      href="https://wa.me/919949211294"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 transition hover:opacity-90"
    >
      <MessageCircle className="h-4 w-4" />
      Chat
    </Link>
  );
}
