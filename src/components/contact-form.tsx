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
  { value: "Criacao de site", label: "Criacao de site" },
  { value: "Landing pages e captacao", label: "Landing pages e captacao" },
  { value: "Google Meu Negocio", label: "Google Meu Negocio" },
  { value: "Estrutura para buscas no Google", label: "Estrutura para buscas no Google" },
  { value: "Campanhas no Google Ads", label: "Campanhas no Google Ads" },
  { value: "Campanhas no Meta Ads", label: "Campanhas no Meta Ads" },
  { value: "Site + Google + anuncios", label: "Site + Google + anuncios" },
  { value: "Quero entender a melhor solucao", label: "Quero entender a melhor solucao" },
] as const;

const defaultService = "Site + Google + anuncios";

const contactSchema = z.object({
  nome_completo: z.string().trim().min(2, "Informe seu nome."),
  email: z.email("Informe um e-mail valido."),
  whatsapp: z.string().trim().min(8, "Informe um WhatsApp valido."),
  empresa: z.string().trim().optional(),
  servico: z.string().trim().min(2, "Escolha um tipo de servico."),
  sobre_negocio: z.string().trim().min(10, "Conte rapidamente o que voce precisa."),
  autorizo_contato: z.boolean(),
});

type StatusState = {
  type: "idle" | "success" | "error";
  message: string;
};

function fieldClass(hasError: boolean) {
  return `mt-2 w-full rounded-[8px] border bg-white/[0.04] px-4 py-3 text-sm text-stone-50 outline-none transition placeholder:text-stone-500 ${
    hasError
      ? "border-red-400 focus:border-red-300"
      : "border-white/10 focus:border-brand-accent"
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

    const formData = new FormData(event.currentTarget);
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
      autorizo_contato: data.autorizo_contato ? "Sim" : "Nao",
      empresa: data.empresa || "-",
      time,
      to_email: contact.email,
      reply_to: data.email,
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        {
          publicKey: EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "Mensagem enviada com sucesso. Vou receber no e-mail e retorno o quanto antes.",
      });

      event.currentTarget.reset();
    } catch (error) {
      console.error(error);
      setStatus({
        type: "error",
        message:
          "Nao consegui enviar agora pelo EmailJS. Tente novamente ou use o WhatsApp ao lado.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-[8px] border border-white/10 bg-brand-surface/70 p-5 shadow-2xl shadow-black/30 sm:p-6"
      noValidate
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-stone-200">
          Nome completo
          <input
            name="nome_completo"
            className={fieldClass(Boolean(errors.nome_completo))}
            placeholder="Seu nome"
            autoComplete="name"
          />
          {errors.nome_completo ? (
            <span className="mt-2 block text-xs text-red-300">{errors.nome_completo}</span>
          ) : null}
        </label>

        <label className="text-sm font-medium text-stone-200">
          E-mail
          <input
            name="email"
            type="email"
            className={fieldClass(Boolean(errors.email))}
            placeholder="voce@empresa.com"
            autoComplete="email"
          />
          {errors.email ? (
            <span className="mt-2 block text-xs text-red-300">{errors.email}</span>
          ) : null}
        </label>

        <label className="text-sm font-medium text-stone-200">
          WhatsApp
          <input
            name="whatsapp"
            className={fieldClass(Boolean(errors.whatsapp))}
            placeholder="(62) 9 0000-0000"
            autoComplete="tel"
          />
          {errors.whatsapp ? (
            <span className="mt-2 block text-xs text-red-300">{errors.whatsapp}</span>
          ) : null}
        </label>

        <label className="text-sm font-medium text-stone-200">
          Empresa
          <input
            name="empresa"
            className={fieldClass(Boolean(errors.empresa))}
            placeholder="Nome da empresa"
            autoComplete="organization"
          />
          {errors.empresa ? (
            <span className="mt-2 block text-xs text-red-300">{errors.empresa}</span>
          ) : null}
        </label>

        <label className="text-sm font-medium text-stone-200 sm:col-span-2">
          Interesse principal
          <select
            name="servico"
            defaultValue={defaultService}
            className={fieldClass(Boolean(errors.servico))}
          >
            {serviceOptions.map((option) => (
              <option key={option.value} className="bg-brand-surface" value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.servico ? (
            <span className="mt-2 block text-xs text-red-300">{errors.servico}</span>
          ) : null}
        </label>
      </div>

      <label className="mt-5 block text-sm font-medium text-stone-200">
        Sobre seu negocio
        <textarea
          name="sobre_negocio"
          rows={5}
          className={fieldClass(Boolean(errors.sobre_negocio))}
          placeholder="Conte o que sua empresa vende, o que quer melhorar e como pretende captar mais clientes."
        />
        {errors.sobre_negocio ? (
          <span className="mt-2 block text-xs text-red-300">{errors.sobre_negocio}</span>
        ) : null}
      </label>

      <label className="mt-5 flex items-start gap-3 rounded-[8px] border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-stone-300">
        <input
          type="checkbox"
          name="autorizo_contato"
          defaultChecked
          className="mt-1 size-4 rounded border-white/20 accent-brand-accent"
        />
        <span>
          Autorizo contato por e-mail ou WhatsApp para retorno sobre minha solicitacao.
        </span>
      </label>

      {status.type !== "idle" ? (
        <div
          className={`mt-5 rounded-[8px] border px-4 py-3 text-sm leading-6 ${
            status.type === "success"
              ? "border-emerald-400/40 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/40 bg-red-400/10 text-red-200"
          }`}
        >
          <div className="flex items-start gap-2">
            {status.type === "success" ? <MailCheck size={18} /> : <Send size={18} />}
            <span>{status.message}</span>
          </div>
        </div>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-[8px] bg-brand-accent px-5 py-3.5 text-sm font-semibold text-[#180d07] transition hover:bg-brand-accent-strong disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
      >
        <Send size={18} />
        {loading ? "Enviando..." : "Enviar solicitacao"}
      </button>
    </form>
  );
}
