"use client";

import emailjs from "@emailjs/browser";
import { ArrowUpRight, CircleCheck, Send } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { z } from "zod";
import { trackMetaEvent } from "@/components/meta-pixel";
import { getCopy, localePrivacy, type Locale } from "@/lib/i18n";
import { contact } from "@/lib/site";

const EMAILJS_PUBLIC_KEY = "DdIfhPKEGhEx6K8Bg";
const EMAILJS_SERVICE_ID = "service_ml7818r";
const EMAILJS_TEMPLATE_ID = "template_r8oi8eh";

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

function fieldClass(hasError: boolean) {
  return `enterprise-field ${hasError ? "has-error" : ""}`;
}

function getAttribution() {
  const parameters = new URLSearchParams(window.location.search);
  const names = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
    "fbclid",
  ];

  return names
    .map((name) => [name, parameters.get(name)] as const)
    .filter((entry): entry is readonly [string, string] => Boolean(entry[1]));
}

export function ContactForm({ locale }: { locale: Locale }) {
  const copy = getCopy(locale).contact.form;
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  const schema = z.object({
    full_name: z.string().trim().min(2, copy.errors.name),
    email: z.string().trim().email(copy.errors.email),
    phone: z.string().trim().min(7, copy.errors.phone),
    company: z.string().trim().min(2, copy.errors.company),
    website: z.string().trim().optional(),
    service: z.string().trim().min(2, copy.errors.service),
    budget: z.string().trim().min(2, copy.errors.budget),
    timeline: z.string().trim().min(2, copy.errors.timeline),
    challenge: z.string().trim().min(20, copy.errors.challenge),
    consent: z.boolean().refine(Boolean, copy.errors.consent),
  });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (String(formData.get("company_fax") || "").trim()) {
      setStatus({ type: "success", message: copy.success });
      formElement.reset();
      return;
    }

    const rawData = {
      full_name: String(formData.get("full_name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      company: String(formData.get("company") || ""),
      website: String(formData.get("website") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
      timeline: String(formData.get("timeline") || ""),
      challenge: String(formData.get("challenge") || ""),
      consent: formData.get("consent") === "on",
    };

    const result = schema.safeParse(rawData);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0];
        if (typeof key === "string" && !nextErrors[key]) nextErrors[key] = issue.message;
      }
      setErrors(nextErrors);
      setStatus({ type: "idle", message: "" });
      return;
    }

    setErrors({});
    setStatus({ type: "idle", message: "" });
    setLoading(true);

    const data = result.data;
    const attribution = getAttribution();
    const attributionText = attribution.length
      ? attribution.map(([name, value]) => `${name}: ${value}`).join("\n")
      : "Direct / unavailable";
    const submittedAt = new Date().toLocaleString(locale === "pt" ? "pt-BR" : locale === "es" ? "es-ES" : "en-US", {
      timeZone: "America/Sao_Paulo",
    });

    const context = [
      `Company: ${data.company}`,
      `Website: ${data.website || "-"}`,
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Timeline: ${data.timeline}`,
      `Language: ${locale}`,
      "",
      "Business challenge:",
      data.challenge,
      "",
      "Attribution:",
      attributionText,
      `Landing page: ${window.location.href}`,
    ].join("\n");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          nome_completo: data.full_name,
          email: data.email,
          whatsapp: data.phone,
          whatsapp_digits: data.phone.replace(/\D/g, ""),
          empresa: data.company,
          servico: data.service,
          faixa_investimento: data.budget,
          prazo: data.timeline,
          site_atual: data.website || "-",
          idioma: locale,
          sobre_negocio: context,
          autorizo_contato: data.consent ? "Yes / Sim / Sí" : "No",
          time: submittedAt,
          to_email: contact.email,
          reply_to: data.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      trackMetaEvent("Lead", {
        content_category: data.service,
        content_name: "project-assessment",
        currency: locale === "pt" ? "BRL" : "USD",
      });

      setStatus({ type: "success", message: copy.success });
      formElement.reset();
    } catch (error) {
      console.error(error);
      setStatus({ type: "error", message: copy.failure });
    } finally {
      setLoading(false);
    }
  }

  function errorFor(name: string) {
    return errors[name] ? (
      <span id={`${name}-error`} className="enterprise-field-error">
        {errors[name]}
      </span>
    ) : null;
  }

  return (
    <form className="enterprise-form" onSubmit={handleSubmit} noValidate>
      <div className="enterprise-form__heading">
        <span>01 / {copy.title}</span>
        <p>{copy.intro}</p>
      </div>

      <input
        className="enterprise-honeypot"
        name="company_fax"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="enterprise-form__grid">
        <label>
          {copy.name} *
          <input
            name="full_name"
            className={fieldClass(Boolean(errors.full_name))}
            placeholder={copy.namePlaceholder}
            autoComplete="name"
            aria-invalid={Boolean(errors.full_name)}
            aria-describedby={errors.full_name ? "full_name-error" : undefined}
          />
          {errorFor("full_name")}
        </label>

        <label>
          {copy.email} *
          <input
            name="email"
            type="email"
            className={fieldClass(Boolean(errors.email))}
            placeholder={copy.emailPlaceholder}
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errorFor("email")}
        </label>

        <label>
          {copy.phone} *
          <input
            name="phone"
            type="tel"
            className={fieldClass(Boolean(errors.phone))}
            placeholder={copy.phonePlaceholder}
            autoComplete="tel"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? "phone-error" : undefined}
          />
          {errorFor("phone")}
        </label>

        <label>
          {copy.company} *
          <input
            name="company"
            className={fieldClass(Boolean(errors.company))}
            placeholder={copy.companyPlaceholder}
            autoComplete="organization"
            aria-invalid={Boolean(errors.company)}
            aria-describedby={errors.company ? "company-error" : undefined}
          />
          {errorFor("company")}
        </label>

        <label className="enterprise-form__wide">
          {copy.website}
          <input
            name="website"
            inputMode="url"
            className={fieldClass(Boolean(errors.website))}
            placeholder={copy.websitePlaceholder}
            autoComplete="url"
          />
          {errorFor("website")}
        </label>

        <label>
          {copy.service} *
          <select
            name="service"
            defaultValue=""
            className={fieldClass(Boolean(errors.service))}
            aria-invalid={Boolean(errors.service)}
            aria-describedby={errors.service ? "service-error" : undefined}
          >
            <option value="" disabled>{copy.select}</option>
            {copy.serviceOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errorFor("service")}
        </label>

        <label>
          {copy.budget} *
          <select
            name="budget"
            defaultValue=""
            className={fieldClass(Boolean(errors.budget))}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={errors.budget ? "budget-error" : undefined}
          >
            <option value="" disabled>{copy.select}</option>
            {copy.budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errorFor("budget")}
        </label>

        <label className="enterprise-form__wide">
          {copy.timeline} *
          <select
            name="timeline"
            defaultValue=""
            className={fieldClass(Boolean(errors.timeline))}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
          >
            <option value="" disabled>{copy.select}</option>
            {copy.timelineOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errorFor("timeline")}
        </label>

        <label className="enterprise-form__wide">
          {copy.challenge} *
          <textarea
            name="challenge"
            rows={6}
            className={fieldClass(Boolean(errors.challenge))}
            placeholder={copy.challengePlaceholder}
            aria-invalid={Boolean(errors.challenge)}
            aria-describedby={errors.challenge ? "challenge-error" : undefined}
          />
          {errorFor("challenge")}
        </label>
      </div>

      <div className="enterprise-consent-field">
        <input id={`consent-${locale}`} type="checkbox" name="consent" defaultChecked />
        <div>
          <label htmlFor={`consent-${locale}`}>{copy.consent}</label>{" "}
          <Link href={localePrivacy(locale)}>{copy.privacy}</Link>
          {errorFor("consent")}
        </div>
      </div>

      {status.type !== "idle" ? (
        <div className={`enterprise-form-status is-${status.type}`} role="status">
          {status.type === "success" ? <CircleCheck size={19} /> : <Send size={19} />}
          <span>{status.message}</span>
        </div>
      ) : null}

      <button
        type="submit"
        className="enterprise-submit"
        disabled={loading}
      >
        <span>{loading ? copy.submitting : copy.submit}</span>
        <ArrowUpRight size={19} />
      </button>
    </form>
  );
}
