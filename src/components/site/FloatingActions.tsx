import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import { useLang } from "@/i18n/LanguageProvider";

export function FloatingActions() {
  const { t } = useLang();
  return (
    <div className="fixed bottom-4 right-4 z-40 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={CONTACT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t.contact.chatWhatsApp}
        className="grid h-14 w-14 place-items-center rounded-full bg-[oklch(0.68_0.16_150)] text-white shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={`tel:${CONTACT.phone1.tel}`}
        aria-label={t.contact.callNow}
        className="grid h-14 w-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-105"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
