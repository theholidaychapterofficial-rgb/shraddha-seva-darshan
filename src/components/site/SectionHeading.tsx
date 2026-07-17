import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ eyebrow, title, subtitle, align = "center", className }: Props) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" && "text-center", className)}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="font-serif text-3xl font-semibold text-primary sm:text-4xl">
        {title}
      </h2>
      <div className={cn("mt-4 h-px w-24 bg-[var(--gradient-gold)]", align === "center" && "mx-auto")} />
      {subtitle && (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg">{subtitle}</p>
      )}
    </div>
  );
}
