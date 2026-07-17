import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";

export function BookingStepsSection() {
  const { t } = useLang();
  return (
    <section className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.booking.eyebrow} title={t.booking.title} />
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.booking.steps.map((step, i) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-border/60 bg-card p-6 shadow-sm"
            >
              <span className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-[var(--gradient-gold)] font-serif text-lg font-semibold text-primary">
                {i + 1}
              </span>
              <h3 className="font-serif text-lg font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
