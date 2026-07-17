import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export function AboutSection() {
  const { t } = useLang();
  return (
    <section id="about" className="pattern-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} subtitle={t.about.intro} />

        <p className="mx-auto mt-8 max-w-3xl text-center text-base leading-relaxed text-foreground/85 sm:text-lg">
          {t.about.body}
        </p>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.pillars.map((p) => (
            <Card
              key={p.title}
              className="group temple-border border-transparent bg-card/90 shadow-[var(--shadow-soft)] transition-transform hover:-translate-y-0.5"
            >
              <CardContent className="p-6">
                <div className="mb-4 grid h-11 w-11 place-items-center rounded-full bg-[var(--gradient-gold)] text-primary">
                  <Sparkles className="h-5 w-5" aria-hidden />
                </div>
                <h3 className="font-serif text-xl font-semibold text-primary">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
