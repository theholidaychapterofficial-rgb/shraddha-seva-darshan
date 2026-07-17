import { useState, type FormEvent } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLang } from "@/i18n/LanguageProvider";
import { CheckCircle2 } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export function EnquiryForm() {
  const { t, lang } = useLang();
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [ceremony, setCeremony] = useState<string>("");
  const [date, setDate] = useState<string>("");

  const schema = z.object({
    name: z.string().trim().min(1, t.contact.form.errors.name).max(100),
    mobile: z.string().trim().regex(/^\d{10}$/, t.contact.form.errors.mobile),
    email: z
      .string()
      .trim()
      .max(255)
      .optional()
      .refine(
        (v) => !v || z.string().email().safeParse(v).success,
        t.contact.form.errors.email,
      ),
    ceremony: z.string().min(1, t.contact.form.errors.ceremony),
    date: z.string().optional(),
    message: z.string().trim().max(1000, t.contact.form.errors.message).optional(),
  });

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      name: String(fd.get("name") || ""),
      mobile: String(fd.get("mobile") || ""),
      email: String(fd.get("email") || ""),
      ceremony,
      date,
      message: String(fd.get("message") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "");
        if (key && !fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }
    setErrors({});

    // Compose WhatsApp handoff so the enquiry actually reaches the Bhavan
    const lines = [
      `${lang === "kn" ? "ವಿಚಾರಣೆ" : "Enquiry"} — ${t.meta.siteName}`,
      `${t.contact.form.name}: ${data.name}`,
      `${t.contact.form.mobile}: ${data.mobile}`,
      data.email ? `${t.contact.form.email}: ${data.email}` : "",
      `${t.contact.form.ceremony}: ${data.ceremony}`,
      data.date ? `${t.contact.form.date}: ${data.date}` : "",
      data.message ? `${t.contact.form.message}: ${data.message}` : "",
    ].filter(Boolean);
    const url = `${CONTACT.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener");

    setSubmitted(true);
    (e.currentTarget as HTMLFormElement).reset();
    setCeremony("");
    setDate("");
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent/40 bg-accent/10 p-6 text-center">
        <CheckCircle2 className="mx-auto h-10 w-10 text-primary" aria-hidden />
        <p className="mt-4 text-base leading-relaxed text-foreground">
          {t.contact.form.success}
        </p>
        <Button className="mt-4" variant="outlineTemple" onClick={() => setSubmitted(false)}>
          {lang === "kn" ? "ಹೊಸ ವಿಚಾರಣೆ" : "Send another enquiry"}
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <Field id="name" label={t.contact.form.name} error={errors.name}>
        <Input id="name" name="name" placeholder={t.contact.form.namePh} required maxLength={100} />
      </Field>
      <Field id="mobile" label={t.contact.form.mobile} error={errors.mobile}>
        <Input id="mobile" name="mobile" placeholder={t.contact.form.mobilePh} required inputMode="numeric" pattern="[0-9]{10}" maxLength={10} />
      </Field>
      <Field id="email" label={t.contact.form.email} error={errors.email}>
        <Input id="email" name="email" type="email" placeholder={t.contact.form.emailPh} maxLength={255} />
      </Field>
      <Field id="ceremony" label={t.contact.form.ceremony} error={errors.ceremony}>
        <Select value={ceremony} onValueChange={setCeremony}>
          <SelectTrigger id="ceremony" className="w-full">
            <SelectValue placeholder={t.contact.form.ceremonyPh} />
          </SelectTrigger>
          <SelectContent>
            {t.services.items.map((s) => (
              <SelectItem key={s.title} value={s.title}>{s.title}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </Field>
      <Field id="date" label={t.contact.form.date}>
        <Input id="date" name="date" type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <Field id="message" label={t.contact.form.message} error={errors.message}>
        <Textarea id="message" name="message" placeholder={t.contact.form.messagePh} rows={4} maxLength={1000} />
      </Field>
      <Button type="submit" variant="maroon" size="lg" className="w-full">
        {t.contact.form.submit}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-1.5 inline-block text-sm font-medium text-foreground">
        {label}
      </Label>
      {children}
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
