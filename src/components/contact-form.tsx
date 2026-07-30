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
  const [hasStarted, setHasStarted] = useState(false);

  const schema = z.object({
    full_name: z.string().trim().min(2, copy.errors.name),
    phone: z.string().trim().min(7, copy.errors.phone),
    service: z.string().trim().min(2, copy.errors.service),
    budget: z.string().trim().min(2, copy.errors.budget),
    consent: z.boolean().refine(Boolean, copy.errors.consent),
  });

  function handleFormStart() {
    if (hasStarted) return;
    setHasStarted(true);
    trackMetaEvent("FormStart", {
      content_name: "project-proposal",
      language: locale,
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const formData = new FormData(formElement);

    if (String(formData.get("company_fax") || "").trim()) {
      setStatus({ type: "success", message: copy.success });
      formElement.reset();
      setHasStarted(false);
      return;
    }

    const rawData = {
      full_name: String(formData.get("full_name") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      budget: String(formData.get("budget") || ""),
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
      `Service: ${data.service}`,
      `Budget: ${data.budget}`,
      `Language: ${locale}`,
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
          email: contact.email,
          whatsapp: data.phone,
          whatsapp_digits: data.phone.replace(/\D/g, ""),
          empresa: "Não informado no formulário inicial",
          servico: data.service,
          faixa_investimento: data.budget,
          prazo: "A definir na conversa",
          site_atual: "Não informado no formulário inicial",
          idioma: locale,
          sobre_negocio: context,
          autorizo_contato: data.consent ? "Yes / Sim / Sí" : "No",
          time: submittedAt,
          to_email: contact.email,
          reply_to: contact.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY },
      );

      trackMetaEvent("Lead", {
        content_category: data.service,
        content_name: "project-assessment",
        currency: "BRL",
      });

      setStatus({ type: "success", message: copy.success });
      formElement.reset();
      setHasStarted(false);
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
    <form
      className="enterprise-form"
      onSubmit={handleSubmit}
      onFocusCapture={handleFormStart}
      noValidate
    >
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
            onChange={(event) => {
              trackMetaEvent("SelectBudget", {
                content_name: event.currentTarget.value,
                language: locale,
              });
            }}
          >
            <option value="" disabled>{copy.select}</option>
            {copy.budgetOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {errorFor("budget")}
        </label>
      </div>

      <div className="enterprise-consent-field">
        <input id={`consent-${locale}`} type="checkbox" name="consent" />
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
