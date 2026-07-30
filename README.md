# Binah IT Solutions

Site corporativo multilíngue da Binah IT Solutions, construído com Next.js 16, React 19 e TypeScript.

## Rotas principais

- `/` — inglês
- `/pt-br` — português do Brasil
- `/es` — espanhol
- `/privacy`, `/pt-br/privacidade`, `/es/privacidad` — avisos de privacidade localizados

As páginas principais possuem canonical, `hreflang`, Open Graph, FAQ em JSON-LD e entradas próprias no sitemap.

## Desenvolvimento

```bash
npm ci
npm run dev
```

Validação de produção:

```bash
npm run lint
npm run build
```

## Meta Pixel

O componente de mensuração só carrega após consentimento explícito. Sem um ID configurado, nenhum script da Meta é solicitado e o site continua funcionando normalmente.

1. Copie `.env.example` para `.env.local`.
2. Preencha `NEXT_PUBLIC_META_PIXEL_ID`.
3. Na Vercel, cadastre a mesma variável para Production e Preview.
4. Faça um novo deploy.

Eventos implementados:

- `PageView` após consentimento e em mudança de rota;
- `Contact` nos CTAs de contato rastreáveis;
- `Lead` somente depois do envio confirmado do formulário.

O formulário também inclui UTMs, `fbclid`, URL da landing page, idioma, faixa de investimento e prazo no contexto enviado pelo EmailJS.

## Conteúdo e localização

Os textos das três línguas ficam centralizados em `src/lib/i18n.ts`. O componente compartilhado da landing page fica em `src/components/enterprise-page.tsx`, evitando divergências estruturais entre idiomas.

## Deploy

O projeto é compatível com deploy padrão da Vercel usando `npm run build`.
