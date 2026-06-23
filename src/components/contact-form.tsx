"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { MailCheck, Send } from "lucide-react";
import { z } from "zod";
import { contact } from "@/lib/site";

const EMAILJS_PUBLIC_KEY = "DdIfhPKEGhEx6K8Bg";
const EMAILJS_SERVICE_ID = "service_ml7818r";
const EMAILJS_TEMPLATE_ID = "template_r8oi8eh";

const serviceOptions = [
  { value: "Landing pages", label: "Landing pages" },
  { value: "Sites profissionais", label: "Sites profissionais" },
  { value: "Estrutura para buscas", label: "Estrutura para buscas" },
  { value: "Google Ads", label: "Google Ads" },
  { value: "Meta Ads", label: "Meta Ads" },
  {
    value: "Infraestrutura de TI e redes",
    label: "Infraestrutura de TI e redes",
  },
  {
    value: "Site, anúncios e infraestrutura",
    label: "Site, anúncios e infraestrutura",
  },
  { value: "Quero entender o melhor caminho", label: "Quero entender o melhor caminho" },
] as const;

const defaultService = "Site, anúncios e infraestrutura";

const contactSchema = z.object({
  nome_completo: z.string().trim().min(2, "Informe seu nome completo."),
  email: z.email("Informe um e-mail válido."),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp válido."),
  empresa: z.string().trim().optional(),
  servico: z.string().trim().min(2, "Escolha o interesse principal."),
  sobre_negocio: z.string().trim().min(10, "Conte um pouco sobre o seu negócio."),
  autorizo_contato: z
    .boolean()
    .refine((value) => value, "Autorize o contato para que possamos responder."),
});

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

function fieldClass(hasError: boolean) {
  return `mt-2 w-full rounded-[8px] border bg-[#F8F5ED] px-4 py-3 text-sm text-[#1E1E1E] outline-none transition placeholder:text-stone-400 ${
    hasError
      ? "border-red-500 focus:border-red-400"
      : "border-[#B9A796]/50 focus:border-[#C8A679]"
  }`;
}

function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<StatusState>({ type: "idle", message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;

    const formData = new FormData(formElement);
    const rawData = {
      nome_completo: formData.get("nome_completo"),
      email: formData.get("email"),
      whatsapp: formData.get("whatsapp"),
      empresa: formData.get("empresa"),
      servico: formData.get("servico"),
      sobre_negocio: formData.get("sobre_negocio"),
      autorizo_contato: formData.get("autorizo_contato") === "on",
    };

    const result = contactSchema.safeParse(rawData);

    if (!result.success) {
      const nextErrors: Record<string, string> = {};

      for (const issue of result.error.issues) {
        const key = issue.path[0];

        if (typeof key === "string" && !nextErrors[key]) {
          nextErrors[key] = issue.message;
        }
      }

      setErrors(nextErrors);
      setStatus({ type: "idle", message: "" });
      return;
    }

    setErrors({});
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    const data = result.data;
    const whatsappDigits = digitsOnly(data.whatsapp);
    const normalizedWhatsapp = whatsappDigits.startsWith("55")
      ? whatsappDigits
      : `55${whatsappDigits}`;

    const now = new Date();
    const time = now.toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    const templateParams = {
      nome_completo: data.nome_completo,
      email: data.email,
      whatsapp: data.whatsapp,
      whatsapp_digits: normalizedWhatsapp,
      servico: data.servico,
      sobre_negocio: data.empresa
        ? `Empresa: ${data.empresa}\n\n${data.sobre_negocio}`
        : data.sobre_negocio,
      autorizo_contato: data.autorizo_contato ? "Sim" : "Não",
      empresa: data.empresa || "-",
      time,
      to_email: contact.email,
      reply_to: data.email,
    };

    try {
      await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, {
        publicKey: EMAILJS_PUBLIC_KEY,
      });

      setStatus({
        type: "success",
        message: "Solicitação enviada. A Binah IT retornará com uma orientação inicial.",
      });

      formElement.reset();
      setErrors({});
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Não foi possível enviar agora. Você pode chamar diretamente pelo WhatsApp.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-[#B9A796]/45 bg-white p-5 shadow-[var(--shadow-soft)] sm:p-6"
      noValidate
    >
      <div>
        <p className="eyebrow">Conte seu projeto</p>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[#1E1E1E]">
          Contexto ajuda na resposta.
        </h2>
        <p className="mt-4 text-sm leading-7 text-[#2D2D2D]">
          Preencha os dados e retornamos com o próximo passo.
        </p>
      </div>

      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold text-[#2D2D2D]">
          Nome completo
          <input
            name="nome_completo"
            className={fieldClass(Boolean(errors.nome_completo))}
            placeholder="Seu nome"
            autoComplete="name"
          />
          {errors.nome_completo ? (
            <span className="mt-2 block text-xs font-medium text-red-600">{errors.nome_completo}</span>
          ) : null}
        </label>

        <label className="text-sm font-semibold text-[#2D2D2D]">
          E-mail
          <input
            name="email"
            type="email"
            className={fieldClass(Boolean(errors.email))}
            placeholder="nome@empresa.com"
            autoComplete="email"
          />
          {errors.email ? (
            <span className="mt-2 block text-xs font-medium text-red-600">{errors.email}</span>
          ) : null}
        </label>

        <label className="text-sm font-semibold text-[#2D2D2D]">
          WhatsApp
          <input
            name="whatsapp"
            className={fieldClass(Boolean(errors.whatsapp))}
            placeholder="(62) 9 0000-0000"
            autoComplete="tel"
          />
          {errors.whatsapp ? (
            <span className="mt-2 block text-xs font-medium text-red-600">{errors.whatsapp}</span>
          ) : null}
        </label>

        <label className="text-sm font-semibold text-[#2D2D2D]">
          Empresa
          <input
            name="empresa"
            className={fieldClass(Boolean(errors.empresa))}
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
          {errors.empresa ? (
            <span className="mt-2 block text-xs font-medium text-red-600">{errors.empresa}</span>
          ) : null}
        </label>

        <label className="text-sm font-semibold text-[#2D2D2D] sm:col-span-2">
          Interesse principal
          <select
            name="servico"
            defaultValue={defaultService}
            className={fieldClass(Boolean(errors.servico))}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} className="bg-white text-[#1E1E1E]" value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.servico ? (
            <span className="mt-2 block text-xs font-medium text-red-600">{errors.servico}</span>
          ) : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-semibold text-[#2D2D2D]">
        Sobre o negócio
        <textarea
          name="sobre_negocio"
          rows={5}
          className={fieldClass(Boolean(errors.sobre_negocio))}
          placeholder="O que sua empresa faz e o que você precisa melhorar?"
        />
        {errors.sobre_negocio ? (
          <span className="mt-2 block text-xs font-medium text-red-600">{errors.sobre_negocio}</span>
        ) : null}
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-[8px] border border-[#B9A796]/40 bg-[#F8F5ED] px-4 py-3 text-sm text-[#2D2D2D]">
        <input
          type="checkbox"
          name="autorizo_contato"
          defaultChecked
          className="mt-1 size-4 rounded border-[#B9A796] accent-[#C8A679]"
        />
        <span>Autorizo contato por e-mail ou WhatsApp para retorno sobre minha solicitação.</span>
      </label>
      {errors.autorizo_contato ? (
        <span className="mt-2 block text-xs font-medium text-red-600">
          {errors.autorizo_contato}
        </span>
      ) : null}

      {status.type !== "idle" ? (
        <div
          className={`mt-5 rounded-[8px] border px-4 py-3 text-sm leading-6 ${
            status.type === "success"
              ? "border-emerald-200 bg-emerald-50 text-emerald-800"
              : "border-red-200 bg-red-50 text-red-800"
          }`}
        >
          <div className="flex items-start gap-2">
            {status.type === "success" ? <MailCheck size={18} /> : <Send size={18} />}
            <span>{status.message}</span>
          </div>
        </div>
      ) : null}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-[#C8A679] px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-[#5B331A] hover:text-[#F8F5ED] disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
        >
          <Send size={18} />
          {loading ? "Enviando..." : "Enviar solicitação"}
        </button>
        <p className="text-sm leading-6 text-stone-600">
          Também é possível chamar direto pelo WhatsApp.
        </p>
      </div>
    </form>
  );
}
