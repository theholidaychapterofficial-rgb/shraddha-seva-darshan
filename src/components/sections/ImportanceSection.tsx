import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import deepa from "@/assets/gallery-deepa.jpg";

export function ImportanceSection() {
  const { t } = useLang();
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="absolute inset-0 opacity-30">
        <img src={deepa} alt="" className="h-full w-full object-cover" loading="lazy" width={1024} height={1024} />
        <div className="absolute inset-0 bg-primary/70" />
      </div>
      <div className="relative mx-auto max-w-4xl px-4 py-24 text-center sm:px-6">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
          {t.importance.eyebrow}
        </p>
        <h2 className="font-serif text-3xl font-semibold sm:text-4xl">{t.importance.title}</h2>
        <div className="divider-ornament my-6" aria-hidden />
        <p className="text-base leading-relaxed text-white/90 sm:text-lg">{t.importance.body}</p>
      </div>
    </section>
  );
}
