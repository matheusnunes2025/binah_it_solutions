import { contact } from "@/lib/site";

export type Locale = "en" | "pt" | "es";

export const localeConfig = {
  en: {
    href: "/en",
    htmlLang: "en",
    label: "EN",
    name: "English",
    ogLocale: "en_US",
  },
  pt: {
    href: "/",
    htmlLang: "pt-BR",
    label: "PT",
    name: "Português",
    ogLocale: "pt_BR",
  },
  es: {
    href: "/es",
    htmlLang: "es",
    label: "ES",
    name: "Español",
    ogLocale: "es_ES",
  },
} as const;

export function localeHome(locale: Locale) {
  return localeConfig[locale].href;
}

export function localePrivacy(locale: Locale) {
  if (locale === "pt") return "/privacidade";
  if (locale === "es") return "/es/privacidad";
  return "/en/privacy";
}

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";
  return "pt";
}

const sharedProjects = [
  {
    slug: "central-do-credito",
    title: "Central do Crédito",
    href: "https://centraldocreditors.com.br/",
    image: "/images/projeto-central-do-credito.jpg",
  },
  {
    slug: "sollie-professional",
    title: "Solliê Professional",
    href: "https://www.sollieprofessional.com.br/",
    image: "/images/projeto-sollie.png",
  },
  {
    slug: "strauss-impermeabilizacao",
    title: "Strauss Impermeabilização",
    href: "https://straussimpermeabilizacao.com.br/",
    image: "/images/projeto-strauss.png",
  },
] as const;

export function localePortfolio(locale: Locale) {
  if (locale === "en") return "/en/work";
  if (locale === "es") return "/es/proyectos";
  return "/portfolio";
}

export function localeCaseStudy(locale: Locale, slug: string) {
  return `${localePortfolio(locale)}/${slug}`;
}

export function localeSwitchHref(pathname: string, locale: Locale) {
  const normalizedPath = pathname.replace(/\/+$/, "") || "/";

  if (
    ["/privacidade", "/politica-de-privacidade", "/pt-br/privacidade", "/en/privacy", "/privacy", "/es/privacidad"].includes(
      normalizedPath,
    )
  ) {
    return localePrivacy(locale);
  }

  if (
    ["/portfolio", "/projetos", "/en/work", "/es/proyectos"].includes(
      normalizedPath,
    )
  ) {
    return localePortfolio(locale);
  }

  const caseMatch = normalizedPath.match(
    /^\/(?:portfolio|projetos|en\/work|es\/proyectos)\/([^/]+)$/,
  );

  if (caseMatch) {
    return localeCaseStudy(locale, caseMatch[1]);
  }

  if (normalizedPath === "/criacao-de-sites") {
    return locale === "pt" ? normalizedPath : `${localeHome(locale)}#expertise`;
  }

  return localeHome(locale);
}

export const copyByLocale = {
  en: {
    metadata: {
      title: "Professional Website Development | Binah IT Solutions",
      description:
        "Professional Next.js websites built for trust, qualified leads, Google visibility and paid campaigns. Projects from R$2,490.",
    },
    nav: {
      label: "Primary navigation",
      services: "Websites",
      work: "Work",
      approach: "Approach",
      contact: "Contact",
      cta: "Start a project",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      languages: "Language",
    },
    hero: {
      eyebrow: "Professional websites • Next.js • SEO",
      title: "Professional websites for companies ready to",
      accent: "generate more opportunities.",
      description:
        "Fast, responsive websites prepared for Google, Meta Ads, Google Ads and WhatsApp—from positioning through launch, without generic templates.",
      primaryCta: "Request a proposal",
      secondaryCta: "View real projects",
      note: "Projects from R$2,490. Scope and schedule are confirmed before work begins.",
      panelLabel: "Live project",
      panelStatus: "Published",
      panelTitle: "Central do Crédito",
      panelItems: [
        { label: "Architecture", value: "Service journeys" },
        { label: "Acquisition", value: "SEO + WhatsApp" },
        { label: "Engineering", value: "Next.js" },
      ],
      panelFooter: "Real work. Verifiable scope. No invented metrics.",
    },
    trust: {
      lead: "Concrete deliverables from strategy to launch.",
      items: ["Next.js", "Responsive design", "Technical SEO", "Analytics", "WhatsApp"],
    },
    services: {
      eyebrow: "Core expertise",
      title: "Website first. Acquisition and technology expand the result.",
      description:
        "The main offer is professional website development. SEO, paid media and IT infrastructure are added only when the business case requires them.",
      items: [
        {
          number: "01",
          title: "Professional websites",
          description:
            "Corporate websites and landing pages that explain the offer, build trust and move visitors toward contact.",
          result: "A fast, maintainable commercial asset ready for campaigns.",
          deliverables: ["Positioning & UX", "Next.js development", "Technical SEO"],
        },
        {
          number: "02",
          title: "Acquisition & measurement",
          description:
            "Meta and Google campaigns connected to focused landing pages, clean tracking and a qualified lead journey.",
          result: "Traffic and conversion data the company can actually use.",
          deliverables: ["Landing pages", "Meta / Google Ads", "Conversion tracking"],
        },
        {
          number: "03",
          title: "Business IT infrastructure",
          description:
            "A separate specialist track for networks, business Wi-Fi and technical organization.",
          result: "Dependable operations without competing with the website offer.",
          deliverables: ["Technical diagnosis", "Network architecture", "Documentation"],
        },
      ],
    },
    work: {
      eyebrow: "Verified case studies",
      title: "Real projects, explained beyond the screenshot.",
      description:
        "Each case shows the commercial challenge, information architecture, implementation and evidence that can be checked on the live website.",
      view: "Visit live website",
      case: "View case study",
      focusLabel: "Verified scope",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Financial services",
          summary:
            "A Next.js acquisition platform that organizes four credit journeys, trust signals, privacy choices and direct WhatsApp conversion.",
          focus: ["Dedicated service pages", "SEO & consent", "WhatsApp journey"],
        },
        {
          ...sharedProjects[1],
          sector: "Professional beauty",
          summary:
            "A product-rich brand experience connecting launches, hair needs, purchasing locations, distributors, events and education.",
          focus: ["Product taxonomy", "Brand experience", "Distributor journey"],
        },
        {
          ...sharedProjects[2],
          sector: "Construction services",
          summary:
            "A local service platform combining technical scope, project gallery, customer reviews and a direct quote path.",
          focus: ["Local SEO", "Service proof", "Quote journey"],
        },
      ],
    },
    difference: {
      eyebrow: "Built for serious decisions",
      title: "B2B buyers do not buy pages. They buy reduced risk.",
      description:
        "Premium design earns attention. Clear reasoning, ownership and validation earn the contract.",
      items: [
        {
          title: "Clarity before design",
          text: "We define audience, business goal and decision path before choosing visual treatment.",
        },
        {
          title: "A scope with owners",
          text: "Deliverables, dependencies and approval points are explicit from the beginning.",
        },
        {
          title: "Built to be measured",
          text: "Conversion events and campaign context are part of the system, not an afterthought.",
        },
        {
          title: "No black-box handoff",
          text: "You receive a maintainable implementation and a clear understanding of what was delivered.",
        },
      ],
    },
    process: {
      eyebrow: "How we work",
      title: "A disciplined path from business problem to working system.",
      description:
        "The process protects quality, reduces rework and keeps decisions tied to the outcome.",
      steps: [
        {
          number: "01",
          title: "Diagnose",
          text: "Business context, current friction, audience, constraints and success criteria.",
        },
        {
          number: "02",
          title: "Architect",
          text: "Offer, information, technical solution, measurement plan and delivery scope.",
        },
        {
          number: "03",
          title: "Build & validate",
          text: "Design, engineering, content integration and quality checks across key devices.",
        },
        {
          number: "04",
          title: "Launch & improve",
          text: "Production release, measurement review and the next prioritized improvement.",
        },
      ],
    },
    engagements: {
      eyebrow: "Clear starting points",
      title: "An offer ladder for different stages of growth.",
      description:
        "Start with the smallest scope that solves the immediate problem, while preserving a path to campaigns, integrations and custom systems.",
      bestFor: "Best for",
      items: [
        {
          title: "Strategic landing page",
          price: "From R$2,490",
          subtitle: "One offer or campaign",
          text: "A focused conversion page for a specific service, product or paid-media campaign.",
          points: ["Responsive page", "Technical SEO", "WhatsApp or form"],
        },
        {
          title: "Professional corporate site",
          price: "From R$3,900",
          subtitle: "Company, services and authority",
          text: "A complete institutional presence for companies that need to present services and generate qualified contacts.",
          points: ["Strategic pages", "Responsive design", "Search foundation"],
        },
        {
          title: "Growth platform",
          price: "From R$5,900",
          subtitle: "Website + acquisition + measurement",
          text: "A connected foundation for positioning, paid campaigns and conversion measurement.",
          points: ["Campaign-ready pages", "Analytics foundation", "Conversion events"],
          featured: true,
        },
        {
          title: "Custom system",
          price: "From R$10k",
          subtitle: "Complex or phased requirements",
          text: "For multilingual sites, automations, integrations, portals and custom business workflows.",
          points: ["Discovery phase", "Custom architecture", "Phased roadmap"],
        },
      ],
    },
    faq: {
      eyebrow: "Before we talk",
      title: "Direct answers for a better first conversation.",
      items: [
        {
          question: "What investment level is a good fit?",
          answer:
            "A strategic landing page starts at R$2,490, corporate websites at R$3,900, growth platforms at R$5,900 and custom systems at R$10k. Final pricing follows a confirmed scope.",
        },
        {
          question: "Can Binah manage Meta and Google campaigns?",
          answer:
            "Yes. Campaign management is connected to positioning, landing experience and conversion measurement. Media budget is kept separate from the service scope.",
        },
        {
          question: "Do you work with companies outside Brazil?",
          answer:
            "Digital projects can be delivered remotely in English, Portuguese or Spanish. On-site infrastructure work is confirmed according to location and technical requirements.",
        },
        {
          question: "Do you guarantee commercial results?",
          answer:
            "No serious partner can guarantee revenue. We commit to a clear scope, sound implementation, transparent measurement and evidence-based iteration.",
        },
        {
          question: "How does an engagement begin?",
          answer:
            "You send the context below. We assess fit, identify missing information and define the right next step before preparing a proposal.",
        },
      ],
    },
    contact: {
      eyebrow: "Quick qualification",
      title: "Find the right website for your budget.",
      description:
        "Send four initial details. We use WhatsApp to understand the remaining context without turning the first contact into an interview.",
      promiseTitle: "What happens next",
      promiseItems: [
        "We review commercial and technical fit.",
        "We identify what is needed to scope responsibly.",
        "We recommend a next step—without a generic sales script.",
      ],
      direct: "Prefer a direct conversation?",
      whatsapp: "Open WhatsApp",
      form: {
        title: "Request a proposal",
        intro: "Four quick fields. Detailed scoping happens in the next conversation.",
        name: "Full name",
        namePlaceholder: "Your name",
        email: "Work email",
        emailPlaceholder: "you@company.com",
        phone: "Phone / WhatsApp",
        phonePlaceholder: "+1 000 000 0000",
        company: "Company",
        companyPlaceholder: "Company name",
        website: "Current website",
        websitePlaceholder: "company.com",
        service: "Primary need",
        budget: "Investment range",
        timeline: "Desired timing",
        challenge: "Business challenge",
        challengePlaceholder:
          "What needs to change, why now, and what would a successful outcome look like?",
        consent:
          "I authorize Binah IT Solutions to contact me about this request and agree to the privacy notice.",
        submit: "Request proposal",
        submitting: "Sending...",
        privacy: "Privacy notice",
        serviceOptions: [
          "Strategic landing page",
          "Professional corporate website",
          "Growth platform",
          "Custom website or system",
          "Meta / Google Ads",
          "IT infrastructure and networks",
        ],
        budgetOptions: ["R$2.4k–3.9k", "R$3.9k–5.9k", "R$5.9k–10k", "R$10k+"],
        timelineOptions: ["As soon as scope is clear", "Within 1–2 months", "Within 3–6 months", "Planning ahead"],
        select: "Select an option",
        errors: {
          name: "Enter your full name.",
          email: "Enter a valid work email.",
          phone: "Enter a valid phone or WhatsApp number.",
          company: "Enter your company name.",
          service: "Select the primary need.",
          budget: "Select an investment range.",
          timeline: "Select the desired timing.",
          challenge: "Add at least 20 characters of project context.",
          consent: "Authorization is required so we can respond.",
        },
        success:
          "Request sent. We will review your project type and budget, then reply on WhatsApp.",
        failure:
          "The form could not be sent right now. Please contact us directly on WhatsApp.",
      },
    },
    footer: {
      line: "Digital systems and IT foundations for companies ready to scale with clarity.",
      navigation: "Navigate",
      contact: "Contact",
      privacy: "Privacy",
      rights: "Binah IT Solutions. All rights reserved.",
    },
    consent: {
      text: "We use optional measurement technology to understand campaign performance. It only activates with your permission.",
      accept: "Allow measurement",
      decline: "Continue without",
      privacy: "Read privacy notice",
    },
  },
  pt: {
    metadata: {
      title: "Criação de Sites Profissionais | Binah IT Solutions",
      description:
        "Criamos sites profissionais em Next.js para gerar confiança, contatos e oportunidades. Projetos responsivos, preparados para Google e anúncios, a partir de R$ 2.490.",
    },
    nav: {
      label: "Navegação principal",
      services: "Criação de sites",
      work: "Projetos",
      approach: "Método",
      contact: "Contato",
      cta: "Iniciar projeto",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      languages: "Idioma",
    },
    hero: {
      eyebrow: "Sites profissionais • Next.js • SEO",
      title: "Criação de sites profissionais para empresas que querem",
      accent: "gerar mais oportunidades.",
      description:
        "Sites rápidos, responsivos e preparados para Google, Meta Ads, Google Ads e WhatsApp — do posicionamento ao lançamento, sem templates genéricos.",
      primaryCta: "Receber proposta",
      secondaryCta: "Ver projetos reais",
      note: "Projetos a partir de R$ 2.490. Escopo e prazo definidos antes do início.",
      panelLabel: "Projeto real",
      panelStatus: "Publicado",
      panelTitle: "Central do Crédito",
      panelItems: [
        { label: "Arquitetura", value: "Jornadas de serviço" },
        { label: "Aquisição", value: "SEO + WhatsApp" },
        { label: "Engenharia", value: "Next.js" },
      ],
      panelFooter: "Trabalho real. Escopo verificável. Sem métricas inventadas.",
    },
    trust: {
      lead: "Entregáveis concretos da estratégia ao lançamento.",
      items: ["Next.js", "Design responsivo", "SEO técnico", "Analytics", "WhatsApp"],
    },
    services: {
      eyebrow: "Especialidade principal",
      title: "O site vem primeiro. Aquisição e tecnologia ampliam o resultado.",
      description:
        "A oferta principal é criação de sites profissionais. SEO, tráfego pago e infraestrutura entram como expansões quando fazem sentido para o negócio.",
      items: [
        {
          number: "01",
          title: "Criação de sites profissionais",
          description:
            "Sites institucionais e landing pages que explicam sua oferta, criam confiança e conduzem o visitante ao contato.",
          result: "Um ativo comercial rápido, sustentável e pronto para campanhas.",
          deliverables: ["Posicionamento e UX", "Desenvolvimento Next.js", "SEO técnico"],
        },
        {
          number: "02",
          title: "Aquisição e mensuração",
          description:
            "Campanhas Meta e Google conectadas a landing pages focadas, rastreamento limpo e uma jornada de lead qualificado.",
          result: "Tráfego e dados de conversão que a empresa consegue utilizar.",
          deliverables: ["Landing pages", "Meta / Google Ads", "Eventos de conversão"],
        },
        {
          number: "03",
          title: "Infraestrutura de TI empresarial",
          description:
            "Uma frente separada para redes, Wi-Fi empresarial e organização técnica.",
          result: "Operação confiável sem competir com a oferta de criação de sites.",
          deliverables: ["Diagnóstico técnico", "Arquitetura de rede", "Documentação"],
        },
      ],
    },
    work: {
      eyebrow: "Cases verificáveis",
      title: "Projetos reais, explicados além da imagem.",
      description:
        "Cada case apresenta desafio comercial, arquitetura de informação, implementação e evidências que podem ser conferidas no site publicado.",
      view: "Visitar site no ar",
      case: "Ver estudo de caso",
      focusLabel: "Escopo verificável",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Serviços financeiros",
          summary:
            "Plataforma de aquisição em Next.js que organiza quatro jornadas de crédito, sinais de confiança, escolhas de privacidade e conversão por WhatsApp.",
          focus: ["Páginas por modalidade", "SEO e consentimento", "Jornada de WhatsApp"],
        },
        {
          ...sharedProjects[1],
          sector: "Beleza profissional",
          summary:
            "Experiência rica em produtos que conecta lançamentos, necessidades capilares, pontos de compra, distribuidores, eventos e educação.",
          focus: ["Taxonomia de produtos", "Experiência de marca", "Jornada de distribuidores"],
        },
        {
          ...sharedProjects[2],
          sector: "Serviços para construção",
          summary:
            "Plataforma local que reúne escopo técnico, galeria de obras, avaliações de clientes e um caminho direto para orçamento.",
          focus: ["SEO local", "Prova de serviço", "Jornada de orçamento"],
        },
      ],
    },
    difference: {
      eyebrow: "Criado para decisões sérias",
      title: "Compradores B2B não compram páginas. Compram redução de risco.",
      description:
        "Design premium conquista atenção. Raciocínio claro, responsabilidade e validação conquistam o contrato.",
      items: [
        {
          title: "Clareza antes do design",
          text: "Definimos público, objetivo e caminho de decisão antes de escolher o tratamento visual.",
        },
        {
          title: "Escopo com responsáveis",
          text: "Entregáveis, dependências e pontos de aprovação ficam explícitos desde o início.",
        },
        {
          title: "Construído para medir",
          text: "Eventos de conversão e contexto de campanha fazem parte do sistema desde a base.",
        },
        {
          title: "Entrega sem caixa-preta",
          text: "Você recebe uma implementação sustentável e entende com clareza o que foi entregue.",
        },
      ],
    },
    process: {
      eyebrow: "Como trabalhamos",
      title: "Um caminho disciplinado do problema de negócio ao sistema em operação.",
      description:
        "O processo protege a qualidade, reduz retrabalho e mantém as decisões ligadas ao resultado.",
      steps: [
        {
          number: "01",
          title: "Diagnosticar",
          text: "Contexto do negócio, atritos atuais, público, restrições e critérios de sucesso.",
        },
        {
          number: "02",
          title: "Arquitetar",
          text: "Oferta, informação, solução técnica, plano de mensuração e escopo de entrega.",
        },
        {
          number: "03",
          title: "Construir e validar",
          text: "Design, engenharia, integração de conteúdo e testes nos dispositivos principais.",
        },
        {
          number: "04",
          title: "Lançar e evoluir",
          text: "Publicação, revisão de mensuração e próxima melhoria priorizada.",
        },
      ],
    },
    engagements: {
      eyebrow: "Pontos de partida claros",
      title: "Uma escada de ofertas para diferentes estágios.",
      description:
        "Comece pelo menor escopo capaz de resolver a necessidade atual, preservando um caminho para campanhas, integrações e sistemas sob medida.",
      bestFor: "Ideal para",
      items: [
        {
          title: "Landing Page Estratégica",
          price: "A partir de R$ 2.490",
          subtitle: "Uma oferta ou campanha",
          text: "Página focada em conversão para um serviço, produto ou campanha de mídia paga.",
          points: ["Página responsiva", "SEO técnico", "WhatsApp ou formulário"],
        },
        {
          title: "Site Institucional Profissional",
          price: "A partir de R$ 3.900",
          subtitle: "Empresa, serviços e autoridade",
          text: "Presença institucional completa para apresentar serviços, portfólio e gerar contatos qualificados.",
          points: ["Páginas estratégicas", "Design responsivo", "Base para buscas"],
        },
        {
          title: "Plataforma de Crescimento",
          price: "A partir de R$ 5.900",
          subtitle: "Site + aquisição + mensuração",
          text: "Base conectada para posicionamento, campanhas pagas e leitura de conversões.",
          points: ["Páginas para campanhas", "Base de Analytics", "Eventos de conversão"],
          featured: true,
        },
        {
          title: "Sistema Sob Medida",
          price: "A partir de R$ 10 mil",
          subtitle: "Demandas complexas ou em fases",
          text: "Para sites multilíngues, automações, integrações, portais e fluxos específicos do negócio.",
          points: ["Fase de descoberta", "Arquitetura personalizada", "Roadmap por etapas"],
        },
      ],
    },
    faq: {
      eyebrow: "Antes de conversar",
      title: "Respostas diretas para uma primeira conversa melhor.",
      items: [
        {
          question: "Qual nível de investimento faz sentido?",
          answer:
            "Landing pages estratégicas começam em R$ 2.490, sites institucionais em R$ 3.900, plataformas de crescimento em R$ 5.900 e sistemas sob medida em R$ 10 mil. O valor final depende do escopo confirmado.",
        },
        {
          question: "A Binah gerencia campanhas no Meta e Google?",
          answer:
            "Sim. A gestão é conectada ao posicionamento, à experiência da landing page e à mensuração de conversão. A verba de mídia fica separada do escopo de serviço.",
        },
        {
          question: "Vocês atendem empresas fora do Brasil?",
          answer:
            "Projetos digitais podem ser entregues remotamente em inglês, português ou espanhol. Infraestrutura presencial é confirmada conforme local e requisitos técnicos.",
        },
        {
          question: "Vocês garantem resultado comercial?",
          answer:
            "Nenhum parceiro sério garante faturamento. Comprometemo-nos com escopo claro, implementação sólida, mensuração transparente e evolução baseada em evidências.",
        },
        {
          question: "Como um projeto começa?",
          answer:
            "Você envia o contexto abaixo. Avaliamos aderência, identificamos informações ausentes e definimos o próximo passo antes de preparar uma proposta.",
        },
      ],
    },
    contact: {
      eyebrow: "Qualificação rápida",
      title: "Descubra qual site cabe no seu orçamento.",
      description:
        "Envie quatro informações iniciais. Os detalhes restantes são tratados pelo WhatsApp, sem transformar o primeiro contato em uma entrevista.",
      promiseTitle: "O que acontece depois",
      promiseItems: [
        "Analisamos aderência comercial e técnica.",
        "Identificamos o necessário para definir o escopo com responsabilidade.",
        "Indicamos o próximo passo — sem roteiro genérico de vendas.",
      ],
      direct: "Prefere uma conversa direta?",
      whatsapp: "Abrir WhatsApp",
      form: {
        title: "Receber proposta",
        intro: "Quatro campos rápidos. O detalhamento acontece na conversa seguinte.",
        name: "Nome completo",
        namePlaceholder: "Seu nome",
        email: "E-mail profissional",
        emailPlaceholder: "voce@empresa.com.br",
        phone: "Telefone / WhatsApp",
        phonePlaceholder: "+55 62 90000-0000",
        company: "Empresa",
        companyPlaceholder: "Nome da empresa",
        website: "Site atual",
        websitePlaceholder: "empresa.com.br",
        service: "Necessidade principal",
        budget: "Faixa de investimento",
        timeline: "Prazo desejado",
        challenge: "Desafio de negócio",
        challengePlaceholder:
          "O que precisa mudar, por que agora e como seria um resultado bem-sucedido?",
        consent:
          "Autorizo a Binah IT Solutions a entrar em contato sobre esta solicitação e concordo com o aviso de privacidade.",
        submit: "Receber proposta",
        submitting: "Enviando...",
        privacy: "Aviso de privacidade",
        serviceOptions: [
          "Landing page estratégica",
          "Site institucional profissional",
          "Plataforma de crescimento",
          "Site ou sistema sob medida",
          "Meta / Google Ads",
          "Infraestrutura de TI e redes",
        ],
        budgetOptions: ["R$ 2,4–3,9 mil", "R$ 3,9–5,9 mil", "R$ 5,9–10 mil", "R$ 10 mil+"],
        timelineOptions: ["Assim que o escopo estiver claro", "Em 1–2 meses", "Em 3–6 meses", "Planejamento futuro"],
        select: "Selecione uma opção",
        errors: {
          name: "Informe seu nome completo.",
          email: "Informe um e-mail profissional válido.",
          phone: "Informe um telefone ou WhatsApp válido.",
          company: "Informe o nome da empresa.",
          service: "Selecione a necessidade principal.",
          budget: "Selecione uma faixa de investimento.",
          timeline: "Selecione o prazo desejado.",
          challenge: "Adicione pelo menos 20 caracteres de contexto.",
          consent: "A autorização é necessária para respondermos.",
        },
        success:
          "Solicitação enviada. Vamos analisar o tipo de projeto e o orçamento, depois responder pelo WhatsApp.",
        failure:
          "Não foi possível enviar agora. Entre em contato diretamente pelo WhatsApp.",
      },
    },
    footer: {
      line: "Sistemas digitais e bases de TI para empresas prontas para crescer com clareza.",
      navigation: "Navegue",
      contact: "Contato",
      privacy: "Privacidade",
      rights: "Binah IT Solutions. Todos os direitos reservados.",
    },
    consent: {
      text: "Usamos tecnologia opcional de mensuração para entender o desempenho das campanhas. Ela só é ativada com sua permissão.",
      accept: "Permitir mensuração",
      decline: "Continuar sem",
      privacy: "Ler aviso de privacidade",
    },
  },
  es: {
    metadata: {
      title: "Desarrollo de Sitios Web Profesionales | Binah IT Solutions",
      description:
        "Creamos sitios profesionales en Next.js para generar confianza, contactos y oportunidades. Proyectos preparados para Google y anuncios desde R$ 2.490.",
    },
    nav: {
      label: "Navegación principal",
      services: "Sitios web",
      work: "Proyectos",
      approach: "Método",
      contact: "Contacto",
      cta: "Iniciar proyecto",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      languages: "Idioma",
    },
    hero: {
      eyebrow: "Sitios profesionales • Next.js • SEO",
      title: "Sitios web profesionales para empresas que quieren",
      accent: "generar más oportunidades.",
      description:
        "Sitios rápidos, adaptables y preparados para Google, Meta Ads, Google Ads y WhatsApp, desde el posicionamiento hasta el lanzamiento.",
      primaryCta: "Solicitar propuesta",
      secondaryCta: "Ver proyectos reales",
      note: "Proyectos desde R$ 2.490. Alcance y plazo definidos antes de comenzar.",
      panelLabel: "Proyecto real",
      panelStatus: "Publicado",
      panelTitle: "Central do Crédito",
      panelItems: [
        { label: "Arquitectura", value: "Recorridos de servicio" },
        { label: "Adquisición", value: "SEO + WhatsApp" },
        { label: "Ingeniería", value: "Next.js" },
      ],
      panelFooter: "Trabajo real. Alcance verificable. Sin métricas inventadas.",
    },
    trust: {
      lead: "Entregables concretos desde la estrategia hasta el lanzamiento.",
      items: ["Next.js", "Diseño adaptable", "SEO técnico", "Analytics", "WhatsApp"],
    },
    services: {
      eyebrow: "Especialidad principal",
      title: "El sitio viene primero. Adquisición y tecnología amplían el resultado.",
      description:
        "La oferta principal es el desarrollo de sitios profesionales. SEO, medios pagos e infraestructura se agregan cuando el negocio lo necesita.",
      items: [
        {
          number: "01",
          title: "Sitios web profesionales",
          description:
            "Sitios corporativos y landing pages que explican la oferta, generan confianza y llevan al visitante al contacto.",
          result: "Un activo comercial rápido, mantenible y preparado para campañas.",
          deliverables: ["Posicionamiento y UX", "Desarrollo Next.js", "SEO técnico"],
        },
        {
          number: "02",
          title: "Adquisición y medición",
          description:
            "Campañas de Meta y Google conectadas con landing pages enfocadas, seguimiento limpio y un recorrido calificado.",
          result: "Tráfico y datos de conversión que la empresa puede utilizar.",
          deliverables: ["Landing pages", "Meta / Google Ads", "Eventos de conversión"],
        },
        {
          number: "03",
          title: "Infraestructura de TI empresarial",
          description:
            "Una línea separada para redes, Wi-Fi empresarial y organización técnica.",
          result: "Operaciones confiables sin competir con la oferta de sitios web.",
          deliverables: ["Diagnóstico técnico", "Arquitectura de red", "Documentación"],
        },
      ],
    },
    work: {
      eyebrow: "Casos verificables",
      title: "Proyectos reales, explicados más allá de la imagen.",
      description:
        "Cada caso presenta el desafío comercial, la arquitectura de información, la implementación y evidencias visibles en el sitio publicado.",
      view: "Visitar sitio en vivo",
      case: "Ver caso de estudio",
      focusLabel: "Alcance verificable",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Servicios financieros",
          summary:
            "Plataforma de adquisición en Next.js que organiza cuatro recorridos de crédito, señales de confianza, privacidad y conversión por WhatsApp.",
          focus: ["Páginas por modalidad", "SEO y consentimiento", "Recorrido de WhatsApp"],
        },
        {
          ...sharedProjects[1],
          sector: "Belleza profesional",
          summary:
            "Experiencia de producto que conecta lanzamientos, necesidades capilares, puntos de compra, distribuidores, eventos y educación.",
          focus: ["Taxonomía de productos", "Experiencia de marca", "Distribuidores"],
        },
        {
          ...sharedProjects[2],
          sector: "Servicios para construcción",
          summary:
            "Plataforma local con alcance técnico, galería de obras, reseñas de clientes y un camino directo a la cotización.",
          focus: ["SEO local", "Prueba de servicio", "Recorrido de cotización"],
        },
      ],
    },
    difference: {
      eyebrow: "Creado para decisiones serias",
      title: "Los compradores B2B no compran páginas. Compran menos riesgo.",
      description:
        "El diseño premium consigue atención. El razonamiento claro, la responsabilidad y la validación consiguen el contrato.",
      items: [
        {
          title: "Claridad antes del diseño",
          text: "Definimos público, objetivo y recorrido de decisión antes de elegir el tratamiento visual.",
        },
        {
          title: "Alcance con responsables",
          text: "Entregables, dependencias y puntos de aprobación son explícitos desde el inicio.",
        },
        {
          title: "Construido para medir",
          text: "Los eventos de conversión y el contexto de campaña forman parte del sistema desde la base.",
        },
        {
          title: "Entrega sin caja negra",
          text: "Recibe una implementación mantenible y una comprensión clara de lo que fue entregado.",
        },
      ],
    },
    process: {
      eyebrow: "Cómo trabajamos",
      title: "Un camino disciplinado desde el problema de negocio hasta el sistema operativo.",
      description:
        "El proceso protege la calidad, reduce retrabajo y mantiene las decisiones vinculadas al resultado.",
      steps: [
        {
          number: "01",
          title: "Diagnosticar",
          text: "Contexto del negocio, fricción actual, público, restricciones y criterios de éxito.",
        },
        {
          number: "02",
          title: "Arquitectar",
          text: "Oferta, información, solución técnica, plan de medición y alcance de entrega.",
        },
        {
          number: "03",
          title: "Construir y validar",
          text: "Diseño, ingeniería, integración de contenido y pruebas en los dispositivos principales.",
        },
        {
          number: "04",
          title: "Lanzar y mejorar",
          text: "Publicación, revisión de medición y siguiente mejora priorizada.",
        },
      ],
    },
    engagements: {
      eyebrow: "Puntos de partida claros",
      title: "Una escalera de ofertas para distintas etapas.",
      description:
        "Comience con el menor alcance que resuelva la necesidad actual, manteniendo un camino hacia campañas, integraciones y sistemas a medida.",
      bestFor: "Ideal para",
      items: [
        {
          title: "Landing page estratégica",
          price: "Desde R$ 2.490",
          subtitle: "Una oferta o campaña",
          text: "Página enfocada en conversión para un servicio, producto o campaña de medios pagos.",
          points: ["Página adaptable", "SEO técnico", "WhatsApp o formulario"],
        },
        {
          title: "Sitio corporativo profesional",
          price: "Desde R$ 3.900",
          subtitle: "Empresa, servicios y autoridad",
          text: "Presencia institucional completa para presentar servicios, portafolio y generar contactos calificados.",
          points: ["Páginas estratégicas", "Diseño adaptable", "Base para búsquedas"],
        },
        {
          title: "Plataforma de crecimiento",
          price: "Desde R$ 5.900",
          subtitle: "Sitio + adquisición + medición",
          text: "Una base conectada para posicionamiento, campañas pagas y medición de conversiones.",
          points: ["Páginas para campañas", "Base de Analytics", "Eventos de conversión"],
          featured: true,
        },
        {
          title: "Sistema a medida",
          price: "Desde R$ 10 mil",
          subtitle: "Necesidades complejas o por fases",
          text: "Para sitios multilingües, automatizaciones, integraciones, portales y flujos específicos.",
          points: ["Fase de descubrimiento", "Arquitectura personalizada", "Hoja de ruta"],
        },
      ],
    },
    faq: {
      eyebrow: "Antes de conversar",
      title: "Respuestas directas para una mejor primera conversación.",
      items: [
        {
          question: "¿Qué nivel de inversión encaja?",
          answer:
            "Las landing pages estratégicas comienzan en R$ 2.490, los sitios corporativos en R$ 3.900, las plataformas de crecimiento en R$ 5.900 y los sistemas a medida en R$ 10 mil. El valor final depende del alcance confirmado.",
        },
        {
          question: "¿Binah gestiona campañas en Meta y Google?",
          answer:
            "Sí. La gestión se conecta con el posicionamiento, la experiencia de la landing page y la medición de conversiones. El presupuesto de medios se mantiene separado del servicio.",
        },
        {
          question: "¿Trabajan con empresas fuera de Brasil?",
          answer:
            "Los proyectos digitales pueden entregarse de forma remota en inglés, portugués o español. La infraestructura presencial se confirma según ubicación y requisitos técnicos.",
        },
        {
          question: "¿Garantizan resultados comerciales?",
          answer:
            "Ningún socio serio puede garantizar ingresos. Nos comprometemos con alcance claro, implementación sólida, medición transparente e iteración basada en evidencia.",
        },
        {
          question: "¿Cómo comienza un proyecto?",
          answer:
            "Usted envía el contexto abajo. Evaluamos el encaje, identificamos información faltante y definimos el siguiente paso antes de preparar una propuesta.",
        },
      ],
    },
    contact: {
      eyebrow: "Calificación rápida",
      title: "Descubra qué sitio encaja en su presupuesto.",
      description:
        "Envíe cuatro datos iniciales. Los detalles restantes se tratan por WhatsApp sin convertir el primer contacto en una entrevista.",
      promiseTitle: "Qué sucede después",
      promiseItems: [
        "Revisamos el encaje comercial y técnico.",
        "Identificamos lo necesario para definir el alcance con responsabilidad.",
        "Recomendamos el siguiente paso, sin un guion genérico de ventas.",
      ],
      direct: "¿Prefiere una conversación directa?",
      whatsapp: "Abrir WhatsApp",
      form: {
        title: "Solicitar propuesta",
        intro: "Cuatro campos rápidos. El alcance detallado se define en la siguiente conversación.",
        name: "Nombre completo",
        namePlaceholder: "Su nombre",
        email: "Correo corporativo",
        emailPlaceholder: "usted@empresa.com",
        phone: "Teléfono / WhatsApp",
        phonePlaceholder: "+34 000 000 000",
        company: "Empresa",
        companyPlaceholder: "Nombre de la empresa",
        website: "Sitio actual",
        websitePlaceholder: "empresa.com",
        service: "Necesidad principal",
        budget: "Rango de inversión",
        timeline: "Plazo deseado",
        challenge: "Desafío de negocio",
        challengePlaceholder:
          "¿Qué debe cambiar, por qué ahora y cómo sería un resultado exitoso?",
        consent:
          "Autorizo a Binah IT Solutions a contactarme sobre esta solicitud y acepto el aviso de privacidad.",
        submit: "Solicitar propuesta",
        submitting: "Enviando...",
        privacy: "Aviso de privacidad",
        serviceOptions: [
          "Landing page estratégica",
          "Sitio corporativo profesional",
          "Plataforma de crecimiento",
          "Sitio o sistema a medida",
          "Meta / Google Ads",
          "Infraestructura de TI y redes",
        ],
        budgetOptions: ["R$ 2,4–3,9 mil", "R$ 3,9–5,9 mil", "R$ 5,9–10 mil", "R$ 10 mil+"],
        timelineOptions: ["Cuando el alcance esté claro", "En 1–2 meses", "En 3–6 meses", "Planificación futura"],
        select: "Seleccione una opción",
        errors: {
          name: "Ingrese su nombre completo.",
          email: "Ingrese un correo corporativo válido.",
          phone: "Ingrese un teléfono o WhatsApp válido.",
          company: "Ingrese el nombre de la empresa.",
          service: "Seleccione la necesidad principal.",
          budget: "Seleccione un rango de inversión.",
          timeline: "Seleccione el plazo deseado.",
          challenge: "Añada al menos 20 caracteres de contexto.",
          consent: "La autorización es necesaria para responder.",
        },
        success:
          "Solicitud enviada. Revisaremos el tipo de proyecto y el presupuesto, luego responderemos por WhatsApp.",
        failure:
          "No fue posible enviar el formulario. Contáctenos directamente por WhatsApp.",
      },
    },
    footer: {
      line: "Sistemas digitales y bases de TI para empresas listas para crecer con claridad.",
      navigation: "Navegar",
      contact: "Contacto",
      privacy: "Privacidad",
      rights: "Binah IT Solutions. Todos los derechos reservados.",
    },
    consent: {
      text: "Usamos tecnología opcional de medición para comprender el rendimiento de las campañas. Solo se activa con su permiso.",
      accept: "Permitir medición",
      decline: "Continuar sin ella",
      privacy: "Leer aviso de privacidad",
    },
  },
} as const;

export function getCopy(locale: Locale) {
  return copyByLocale[locale];
}

export const privacyByLocale = {
  en: {
    title: "Privacy notice",
    updated: "Last updated: July 30, 2026",
    intro:
      "This notice explains how Binah IT Solutions handles information submitted through this website.",
    sections: [
      {
        title: "Information we receive",
        paragraphs: [
          "When you request a project assessment, we receive the contact, company, budget, timing and project information you choose to provide.",
          "Campaign parameters such as UTM tags and fbclid may be included with your request so we can understand where the inquiry originated.",
        ],
      },
      {
        title: "How we use it",
        paragraphs: [
          "We use submitted information to evaluate fit, respond to your request, prepare a scope and maintain relevant business records.",
          "We do not sell submitted personal information.",
        ],
      },
      {
        title: "Optional measurement",
        paragraphs: [
          "When a Meta Pixel ID is configured, campaign measurement only activates after you allow it in the consent notice. You can continue using the website without accepting optional measurement.",
        ],
      },
      {
        title: "Service providers and retention",
        paragraphs: [
          "The website may use hosting, email delivery and campaign measurement providers that process information for the purposes described above. We retain information only as long as reasonably necessary for the request, legal obligations and legitimate business records.",
        ],
      },
      {
        title: "Your choices and contact",
        paragraphs: [
          `You may request access, correction or deletion of information you submitted by emailing ${contact.email}.`,
        ],
      },
    ],
    back: "Back to website",
  },
  pt: {
    title: "Aviso de privacidade",
    updated: "Última atualização: 30 de julho de 2026",
    intro:
      "Este aviso explica como a Binah IT Solutions trata as informações enviadas por este site.",
    sections: [
      {
        title: "Informações que recebemos",
        paragraphs: [
          "Ao solicitar uma avaliação, recebemos os dados de contato, empresa, investimento, prazo e projeto que você decidir informar.",
          "Parâmetros de campanha, como UTMs e fbclid, podem acompanhar a solicitação para identificarmos sua origem.",
        ],
      },
      {
        title: "Como usamos essas informações",
        paragraphs: [
          "Usamos os dados para avaliar aderência, responder à solicitação, preparar escopo e manter registros comerciais pertinentes.",
          "Não vendemos as informações pessoais enviadas.",
        ],
      },
      {
        title: "Mensuração opcional",
        paragraphs: [
          "Quando um ID do Meta Pixel estiver configurado, a mensuração de campanha só será ativada após sua permissão no aviso de consentimento. O site pode ser usado normalmente sem aceitar a mensuração opcional.",
        ],
      },
      {
        title: "Fornecedores e retenção",
        paragraphs: [
          "O site pode usar provedores de hospedagem, envio de e-mail e mensuração que tratam dados para as finalidades descritas. Mantemos as informações apenas pelo período razoavelmente necessário para a solicitação, obrigações legais e registros legítimos do negócio.",
        ],
      },
      {
        title: "Seus direitos e contato",
        paragraphs: [
          `Você pode solicitar acesso, correção ou exclusão dos dados enviados pelo e-mail ${contact.email}.`,
        ],
      },
    ],
    back: "Voltar ao site",
  },
  es: {
    title: "Aviso de privacidad",
    updated: "Última actualización: 30 de julio de 2026",
    intro:
      "Este aviso explica cómo Binah IT Solutions trata la información enviada a través de este sitio.",
    sections: [
      {
        title: "Información que recibimos",
        paragraphs: [
          "Al solicitar una evaluación, recibimos los datos de contacto, empresa, inversión, plazo y proyecto que usted decida proporcionar.",
          "Los parámetros de campaña, como UTM y fbclid, pueden acompañar la solicitud para comprender su origen.",
        ],
      },
      {
        title: "Cómo utilizamos la información",
        paragraphs: [
          "Usamos los datos para evaluar el encaje, responder a la solicitud, preparar un alcance y mantener registros comerciales pertinentes.",
          "No vendemos la información personal enviada.",
        ],
      },
      {
        title: "Medición opcional",
        paragraphs: [
          "Cuando se configura un ID de Meta Pixel, la medición de campañas solo se activa después de su autorización en el aviso de consentimiento. El sitio puede utilizarse sin aceptar la medición opcional.",
        ],
      },
      {
        title: "Proveedores y retención",
        paragraphs: [
          "El sitio puede utilizar proveedores de alojamiento, entrega de correo y medición que procesan datos para los fines descritos. Conservamos la información solo durante el periodo razonablemente necesario para la solicitud, obligaciones legales y registros legítimos del negocio.",
        ],
      },
      {
        title: "Sus opciones y contacto",
        paragraphs: [
          `Puede solicitar acceso, corrección o eliminación de los datos enviados escribiendo a ${contact.email}.`,
        ],
      },
    ],
    back: "Volver al sitio",
  },
} as const;
