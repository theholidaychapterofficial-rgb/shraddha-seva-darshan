import { SectionHeading } from "@/components/site/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLang } from "@/i18n/LanguageProvider";

export function FaqSection() {
  const { t } = useLang();
  return (
    <section id="faq" className="bg-secondary/50 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <Accordion type="single" collapsible className="mt-10 w-full">
          {t.faq.items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-border/60">
              <AccordionTrigger className="text-left font-serif text-lg text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-muted-foreground">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
