import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import { CheckCircle2 } from "lucide-react";

export function WhyUsSection() {
  const { t } = useLang();
  return (
    <section id="why-us" className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.whyUs.eyebrow} title={t.whyUs.title} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {t.whyUs.items.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-xl border border-border/60 bg-card/90 p-6 shadow-sm"
            >
              <CheckCircle2 className="h-6 w-6 shrink-0 text-accent" aria-hidden />
              <div className="min-w-0">
                <h3 className="font-serif text-lg font-semibold text-primary">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
