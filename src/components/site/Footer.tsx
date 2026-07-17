import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { CONTACT } from "@/lib/contact";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border/60 bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-gold)] font-serif text-xl text-primary">
              ॐ
            </span>
            <div>
              <p className="font-serif text-base font-semibold text-primary">{t.meta.siteName}</p>
              <p className="text-xs text-muted-foreground">{t.meta.tagline}</p>
            </div>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-primary">{t.footer.quickLinks}</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-primary">{t.nav.about}</Link></li>
            <li><Link to="/services" className="hover:text-primary">{t.nav.services}</Link></li>
            <li><Link to="/facilities" className="hover:text-primary">{t.nav.facilities}</Link></li>
            <li><Link to="/gallery" className="hover:text-primary">{t.nav.gallery}</Link></li>
            <li><Link to="/faq" className="hover:text-primary">{t.nav.faq}</Link></li>
            <li><Link to="/booking" className="hover:text-primary">{t.nav.book}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-primary">{t.footer.contactDetails}</h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{t.contact.addressLines.join(", ")}</span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>
                <a href={`tel:${CONTACT.phone1.tel}`} className="hover:text-primary">{CONTACT.phone1.display}</a>
                {" · "}
                <a href={`tel:${CONTACT.phone2.tel}`} className="hover:text-primary">{CONTACT.phone2.display}</a>
              </span>
            </li>
            <li className="flex gap-2">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <a
                href={CONTACT.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
              <span>{t.footer.hoursValue}</span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg font-semibold text-primary">{t.footer.map}</h3>
          <a
            href={CONTACT.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 block overflow-hidden rounded-lg border border-border shadow-sm"
          >
            <iframe
              title="Google Maps"
              src={CONTACT.mapsEmbed}
              className="h-40 w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </a>
        </div>
      </div>

      <div className="border-t border-border/60 bg-background/60">
        <div className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-muted-foreground sm:px-6">
          © {year} {t.meta.siteName}. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
