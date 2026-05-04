import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { buildPageMetadata } from "@/lib/seo";
import { contact } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Política de Privacidade",
  description:
    "Leia a Política de Privacidade da Binah IT e entenda como coletamos e tratamos seus dados pessoais em conformidade com a LGPD.",
  path: "/politica-de-privacidade",
});

export default function PrivacyPolicy() {
  return (
    <main className="bg-brand-bg min-h-screen px-5 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-3xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-stone-400 transition hover:text-white"
        >
          <ArrowLeft size={16} />
          Voltar para o início
        </Link>

        <h1 className="mt-8 text-4xl font-semibold tracking-tight text-stone-50 sm:text-5xl">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-stone-400">
          Última atualização: {new Date().toLocaleDateString("pt-BR")}
        </p>

        <div className="mt-12 space-y-10 text-base leading-8 text-stone-300">
          <section>
            <h2 className="text-2xl font-semibold text-stone-50">1. Introdução</h2>
            <p className="mt-4">
              A <strong>Binah IT</strong> valoriza a privacidade dos visitantes de nosso site e está comprometida em proteger seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos suas informações quando você visita nosso site, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">2. Dados que Coletamos</h2>
            <p className="mt-4">Podemos coletar as seguintes categorias de dados:</p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li><strong>Informações de Contato:</strong> Quando você entra em contato conosco via WhatsApp ou e-mail, podemos coletar seu nome, número de telefone e outras informações que você decidir compartilhar ativamente conosco.</li>
              <li><strong>Dados de Navegação:</strong> Informações coletadas automaticamente, como endereço de IP, tipo de navegador, páginas visitadas, tempo de permanência e interações, através de cookies e tecnologias de rastreamento (como Google Analytics e Pixel da Meta).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">3. Como Usamos Seus Dados</h2>
            <p className="mt-4">As informações coletadas são utilizadas para:</p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li>Responder às suas dúvidas e fornecer orçamentos comerciais.</li>
              <li>Melhorar o desempenho, a segurança e a experiência de uso do nosso site.</li>
              <li>Realizar campanhas de marketing, otimização de anúncios e remarketing em plataformas de publicidade digital (como Google e Meta).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">4. Compartilhamento de Dados</h2>
            <p className="mt-4">
              Nós não vendemos nem alugamos seus dados pessoais. Podemos compartilhá-los apenas com:
            </p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li><strong>Provedores de Serviços:</strong> Ferramentas de análise e publicidade que nos ajudam a entender o tráfego do site e medir a eficácia de nossos anúncios.</li>
              <li><strong>Autoridades Legais:</strong> Caso seja estritamente necessário para cumprir uma obrigação legal ou ordem judicial.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">5. Seus Direitos (LGPD)</h2>
            <p className="mt-4">De acordo com a LGPD, você possui os seguintes direitos em relação aos seus dados:</p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li>Confirmar a existência do tratamento de dados.</li>
              <li>Acessar, corrigir ou atualizar seus dados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
              <li>Revogar seu consentimento para o tratamento de dados a qualquer momento.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">6. Segurança dos Dados</h2>
            <p className="mt-4">
              Implementamos medidas técnicas e administrativas rigorosas para proteger seus dados contra acessos não autorizados, alterações, divulgação ou destruição acidental.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-stone-50">7. Contato</h2>
            <p className="mt-4">
              Se você tiver qualquer dúvida sobre esta Política de Privacidade ou quiser exercer seus direitos, entre em contato conosco:
            </p>
            <ul className="mt-4 list-outside list-disc space-y-2 pl-6">
              <li><strong>WhatsApp de Atendimento:</strong> {contact.phoneDisplay}</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}