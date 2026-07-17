import { createFileRoute } from "@tanstack/react-router";
import { PageBanner } from "@/components/site/PageBanner";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { BookingStepsSection } from "@/components/sections/BookingStepsSection";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Pitru Karya Services | Shraddha, Pinda Pradana, Tarpana — Bengaluru" },
      { name: "description", content: "Shraddha, Masika, Annual Tithi, Hiranya Shraddha, Amavasya Tarpana, Mahalaya Paksha Shraddha, Pinda Pradana, Vaikuntha Samaradhane and more — performed per Shukla Yajurveda." },
      { property: "og:title", content: "Services | Shri Shukla Yajurveda Shraddha Bhavan" },
      { property: "og:description", content: "All Pitru Karyas conducted per Shukla Yajurveda vidhi." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <PageBanner eyebrow={t.services.eyebrow} title={t.services.title} subtitle={t.services.subtitle} />
      <ServicesSection />
      <BookingStepsSection />
    </>
  );
}
