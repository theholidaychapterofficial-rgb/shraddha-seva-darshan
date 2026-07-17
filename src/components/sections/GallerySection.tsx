import { SectionHeading } from "@/components/site/SectionHeading";
import { useLang } from "@/i18n/LanguageProvider";
import kalasha from "@/assets/gallery-kalasha.jpg";
import darbha from "@/assets/gallery-darbha.jpg";
import pinda from "@/assets/gallery-pinda.jpg";
import bhojana from "@/assets/gallery-bhojana.jpg";
import hall from "@/assets/gallery-hall.jpg";
import deepa from "@/assets/gallery-deepa.jpg";
import hero from "@/assets/hero-ritual.jpg";

export function GallerySection() {
  const { t } = useLang();
  const items = [
    { src: hero, caption: t.gallery.captions.hero, className: "sm:col-span-2 sm:row-span-2 aspect-[4/3] sm:aspect-auto" },
    { src: kalasha, caption: t.gallery.captions.kalasha, className: "aspect-square" },
    { src: darbha, caption: t.gallery.captions.darbha, className: "aspect-square" },
    { src: pinda, caption: t.gallery.captions.pinda, className: "aspect-square" },
    { src: bhojana, caption: t.gallery.captions.bhojana, className: "aspect-square" },
    { src: hall, caption: t.gallery.captions.hall, className: "aspect-square sm:col-span-2" },
    { src: deepa, caption: t.gallery.captions.deepa, className: "aspect-square" },
  ];
  return (
    <section id="gallery" className="pattern-bg py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow={t.gallery.eyebrow}
          title={t.gallery.title}
          subtitle={t.gallery.subtitle}
        />
        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-4">
          {items.map((it, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border/60 shadow-[var(--shadow-soft)] ${it.className}`}
            >
              <img
                src={it.src}
                alt={it.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-xs text-white sm:text-sm">
                {it.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
