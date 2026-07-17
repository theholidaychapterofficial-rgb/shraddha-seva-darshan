import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export function PageBanner({ eyebrow, title, subtitle, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="pattern-bg absolute inset-0 opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[color:var(--gold-soft)]">
            {eyebrow}
          </p>
        )}
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">{title}</h1>
        <div className="divider-ornament my-5" aria-hidden />
        {subtitle && (
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            {subtitle}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
