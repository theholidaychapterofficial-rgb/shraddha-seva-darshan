import { SectionHeading } from "@/components/site/SectionHeading";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/i18n/LanguageProvider";
import {
  Flame,
  CalendarDays,
  CalendarClock,
  Coins,
  Moon,
  Star,
  Circle,
  UtensilsCrossed,
  Users,
  Package,
  Leaf,
  BookOpen,
} from "lucide-react";

const ICONS = [Flame, CalendarDays, CalendarClock, Coins, Moon, Star, Circle, UtensilsCrossed, Users, Package, Leaf, BookOpen];

export function ServicesSection({ compact = false }: { compact?: boolean }) {
  const { t } = useLang();
  const items = compact ? t.services.items.slice(0, 6) : t.services.items;
  return (
    <section id="services" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          subtitle={t.services.subtitle}
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <Card
                key={item.title}
                className="temple-border border-transparent bg-card shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
              >
                <CardContent className="p-6">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-lg bg-primary/5 text-primary">
                    <Icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-primary">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
