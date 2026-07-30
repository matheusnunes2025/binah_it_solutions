export type Locale = "en" | "pt" | "es";

export const localeConfig = {
  en: {
    href: "/",
    htmlLang: "en",
    label: "EN",
    name: "English",
    ogLocale: "en_US",
  },
  pt: {
    href: "/pt-br",
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
  if (locale === "pt") return "/pt-br/privacidade";
  if (locale === "es") return "/es/privacidad";
  return "/privacy";
}

export function localeFromPathname(pathname: string): Locale {
  if (pathname === "/pt-br" || pathname.startsWith("/pt-br/")) return "pt";
  if (pathname === "/es" || pathname.startsWith("/es/")) return "es";

  const legacyPortuguesePaths = [
    "/contato",
    "/projetos",
    "/servicos",
    "/infraestrutura-de-ti-para-empresas",
    "/sites-para-nutricionistas",
    "/sites-para-engenharia-arquitetura-construtoras",
    "/politica-de-privacidade",
  ];

  return legacyPortuguesePaths.some((path) => pathname.startsWith(path)) ? "pt" : "en";
}

const sharedProjects = [
  {
    title: "Sollie Professional",
    href: "https://www.sollieprofessional.com.br/",
    image: "/images/projeto-sollie.png",
  },
  {
    title: "Strauss Impermeabilização",
    href: "https://straussimpermeabilizacao.com.br/",
    image: "/images/projeto-strauss.png",
  },
] as const;

export const copyByLocale = {
  en: {
    metadata: {
      title: "Binah IT Solutions | Digital systems for ambitious companies",
      description:
        "Binah IT designs corporate websites, acquisition systems and IT infrastructure for companies ready to scale with clarity.",
    },
    nav: {
      label: "Primary navigation",
      services: "Expertise",
      work: "Work",
      approach: "Approach",
      contact: "Contact",
      cta: "Start a project",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      languages: "Language",
    },
    hero: {
      eyebrow: "Independent technology partner",
      title: "Systems built to make ambitious companies",
      accent: "move faster.",
      description:
        "We design and build high-performance digital platforms, acquisition systems and IT foundations for companies that have outgrown improvisation.",
      primaryCta: "Request a strategic assessment",
      secondaryCta: "View selected work",
      note: "Every engagement starts with technical and commercial alignment.",
      panelLabel: "Binah delivery system",
      panelStatus: "Operational",
      panelTitle: "One strategy. Three connected systems.",
      panelItems: [
        { label: "Digital platform", value: "Position + convert" },
        { label: "Demand system", value: "Attract + measure" },
        { label: "IT foundation", value: "Operate + scale" },
      ],
      panelFooter: "Strategy → Build → Validate → Improve",
    },
    trust: {
      lead: "One accountable partner from diagnosis to launch.",
      items: ["Strategy", "Experience design", "Engineering", "Acquisition", "Infrastructure"],
    },
    services: {
      eyebrow: "What we build",
      title: "One partner across the systems your growth depends on.",
      description:
        "Not disconnected deliverables. A coherent commercial and technical foundation, designed around the next business outcome.",
      items: [
        {
          number: "01",
          title: "Corporate platforms",
          description:
            "Websites and landing environments that help complex buyers understand, trust and act.",
          result: "A digital presence equal to your commercial ambition.",
          deliverables: ["Positioning & UX", "Next.js engineering", "SEO & measurement"],
        },
        {
          number: "02",
          title: "Acquisition systems",
          description:
            "Meta and Google campaigns connected to focused pages, clean tracking and a qualified lead journey.",
          result: "Demand generation that can be read and improved.",
          deliverables: ["Offer & funnel", "Campaign structure", "Conversion tracking"],
        },
        {
          number: "03",
          title: "IT foundations",
          description:
            "Networks, business Wi-Fi and technical organization for teams that need dependable operations.",
          result: "Less operational friction and fewer improvised fixes.",
          deliverables: ["Technical diagnosis", "Network architecture", "Documentation"],
        },
      ],
    },
    work: {
      eyebrow: "Selected work",
      title: "Work with a clear job to do.",
      description:
        "We show the scope we can verify—never invented metrics. Each project is designed around a concrete commercial function.",
      view: "Visit live project",
      focusLabel: "Project focus",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Professional beauty",
          summary:
            "A corporate product experience that gives the brand, catalog and commercial pathways a clearer digital structure.",
          focus: ["Brand hierarchy", "Responsive catalog", "Commercial navigation"],
        },
        {
          ...sharedProjects[1],
          sector: "Engineering & construction",
          summary:
            "A technical service platform built to explain complex work and move qualified prospects toward a quote.",
          focus: ["Service clarity", "Technical credibility", "Quote journey"],
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
      eyebrow: "Engagement models",
      title: "Scoped to the decision—not padded with deliverables.",
      description:
        "We choose the smallest engagement capable of solving the real problem and supporting the next stage of growth.",
      bestFor: "Best for",
      items: [
        {
          title: "Focused build",
          subtitle: "One urgent commercial outcome",
          text: "A defined platform, landing environment or technical intervention with a clear launch condition.",
          points: ["Defined scope", "Single accountable outcome", "Launch-ready delivery"],
        },
        {
          title: "Growth system",
          subtitle: "Platform + acquisition + measurement",
          text: "A connected foundation for companies that need to improve positioning and generate qualified demand.",
          points: ["Multi-workstream scope", "Campaign readiness", "Measurement foundation"],
          featured: true,
        },
        {
          title: "Custom program",
          subtitle: "Complex or phased transformation",
          text: "For infrastructure, multi-site or cross-functional projects that require discovery and staged delivery.",
          points: ["Discovery phase", "Phased roadmap", "Custom governance"],
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
            "The qualification form starts at US$5k. Final investment depends on scope, risk and number of workstreams; we only quote after understanding the business problem.",
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
      eyebrow: "Start with context",
      title: "Bring the business problem. We will define the right system.",
      description:
        "Share the outcome, constraint and current situation. You will receive a direct response about fit and the next step.",
      promiseTitle: "What happens next",
      promiseItems: [
        "We review commercial and technical fit.",
        "We identify what is needed to scope responsibly.",
        "We recommend a next step—without a generic sales script.",
      ],
      direct: "Prefer a direct conversation?",
      whatsapp: "Open WhatsApp",
      form: {
        title: "Project assessment",
        intro: "Fields marked with * are required.",
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
        submit: "Request assessment",
        submitting: "Sending...",
        privacy: "Privacy notice",
        serviceOptions: [
          "Corporate website or platform",
          "Landing pages and acquisition",
          "Meta / Google Ads",
          "IT infrastructure and networks",
          "Connected growth system",
          "I need help defining the scope",
        ],
        budgetOptions: ["US$5k–10k", "US$10k–25k", "US$25k+", "Scope it with me"],
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
          "Assessment request sent. We will review the context and reply with the next step.",
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
      title: "Binah IT Solutions | Sistemas digitais para empresas ambiciosas",
      description:
        "A Binah IT cria sites corporativos, sistemas de aquisição e infraestrutura de TI para empresas prontas para crescer com clareza.",
    },
    nav: {
      label: "Navegação principal",
      services: "Especialidades",
      work: "Projetos",
      approach: "Método",
      contact: "Contato",
      cta: "Iniciar projeto",
      menuOpen: "Abrir menu",
      menuClose: "Fechar menu",
      languages: "Idioma",
    },
    hero: {
      eyebrow: "Parceiro independente de tecnologia",
      title: "Sistemas criados para empresas ambiciosas",
      accent: "avançarem mais rápido.",
      description:
        "Projetamos e construímos plataformas digitais de alta performance, sistemas de aquisição e infraestrutura de TI para empresas que superaram o improviso.",
      primaryCta: "Solicitar avaliação estratégica",
      secondaryCta: "Ver projetos selecionados",
      note: "Todo projeto começa com alinhamento técnico e comercial.",
      panelLabel: "Sistema de entrega Binah",
      panelStatus: "Operacional",
      panelTitle: "Uma estratégia. Três sistemas conectados.",
      panelItems: [
        { label: "Plataforma digital", value: "Posicionar + converter" },
        { label: "Sistema de demanda", value: "Atrair + medir" },
        { label: "Base de TI", value: "Operar + escalar" },
      ],
      panelFooter: "Estratégia → Construção → Validação → Evolução",
    },
    trust: {
      lead: "Um parceiro responsável do diagnóstico ao lançamento.",
      items: ["Estratégia", "Design de experiência", "Engenharia", "Aquisição", "Infraestrutura"],
    },
    services: {
      eyebrow: "O que construímos",
      title: "Um parceiro para os sistemas dos quais seu crescimento depende.",
      description:
        "Nada de entregas desconectadas. Criamos uma base comercial e técnica coerente com o próximo resultado do negócio.",
      items: [
        {
          number: "01",
          title: "Plataformas corporativas",
          description:
            "Sites e ambientes de conversão que ajudam compradores complexos a entender, confiar e agir.",
          result: "Uma presença digital compatível com sua ambição comercial.",
          deliverables: ["Posicionamento e UX", "Engenharia Next.js", "SEO e mensuração"],
        },
        {
          number: "02",
          title: "Sistemas de aquisição",
          description:
            "Campanhas Meta e Google conectadas a páginas focadas, rastreamento limpo e uma jornada de lead qualificado.",
          result: "Geração de demanda que pode ser lida e melhorada.",
          deliverables: ["Oferta e funil", "Estrutura de campanha", "Rastreamento de conversão"],
        },
        {
          number: "03",
          title: "Bases de TI",
          description:
            "Redes, Wi-Fi empresarial e organização técnica para equipes que precisam de operação confiável.",
          result: "Menos atrito operacional e menos correções improvisadas.",
          deliverables: ["Diagnóstico técnico", "Arquitetura de rede", "Documentação"],
        },
      ],
    },
    work: {
      eyebrow: "Projetos selecionados",
      title: "Projetos com uma função clara.",
      description:
        "Mostramos apenas o escopo que podemos comprovar — sem métricas inventadas. Cada projeto atende a uma função comercial concreta.",
      view: "Visitar projeto no ar",
      focusLabel: "Foco do projeto",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Beleza profissional",
          summary:
            "Uma experiência corporativa de produto que organiza marca, catálogo e caminhos comerciais com mais clareza.",
          focus: ["Hierarquia de marca", "Catálogo responsivo", "Navegação comercial"],
        },
        {
          ...sharedProjects[1],
          sector: "Engenharia e construção",
          summary:
            "Uma plataforma de serviços técnicos criada para explicar trabalhos complexos e conduzir clientes qualificados ao orçamento.",
          focus: ["Clareza de serviços", "Credibilidade técnica", "Jornada de orçamento"],
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
      eyebrow: "Modelos de projeto",
      title: "Escopo orientado à decisão — não inflado com entregáveis.",
      description:
        "Escolhemos o menor projeto capaz de resolver o problema real e sustentar a próxima etapa de crescimento.",
      bestFor: "Ideal para",
      items: [
        {
          title: "Projeto focado",
          subtitle: "Um resultado comercial urgente",
          text: "Uma plataforma, landing page ou intervenção técnica definida, com condição clara de lançamento.",
          points: ["Escopo definido", "Um resultado responsável", "Entrega pronta para lançar"],
        },
        {
          title: "Sistema de crescimento",
          subtitle: "Plataforma + aquisição + mensuração",
          text: "Uma base conectada para empresas que precisam elevar posicionamento e gerar demanda qualificada.",
          points: ["Escopo multidisciplinar", "Pronto para campanhas", "Base de mensuração"],
          featured: true,
        },
        {
          title: "Programa sob medida",
          subtitle: "Transformação complexa ou em fases",
          text: "Para infraestrutura, múltiplos sites ou projetos entre áreas que exigem descoberta e implantação gradual.",
          points: ["Fase de descoberta", "Roadmap por etapas", "Governança personalizada"],
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
            "O formulário de qualificação começa em R$ 5,9 mil. O investimento final depende do escopo, risco e número de frentes; só apresentamos proposta depois de entender o problema do negócio.",
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
      eyebrow: "Comece pelo contexto",
      title: "Traga o problema de negócio. Definiremos o sistema certo.",
      description:
        "Compartilhe resultado, restrição e cenário atual. Você recebe uma resposta direta sobre aderência e próximo passo.",
      promiseTitle: "O que acontece depois",
      promiseItems: [
        "Analisamos aderência comercial e técnica.",
        "Identificamos o necessário para definir o escopo com responsabilidade.",
        "Indicamos o próximo passo — sem roteiro genérico de vendas.",
      ],
      direct: "Prefere uma conversa direta?",
      whatsapp: "Abrir WhatsApp",
      form: {
        title: "Avaliação de projeto",
        intro: "Campos marcados com * são obrigatórios.",
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
        submit: "Solicitar avaliação",
        submitting: "Enviando...",
        privacy: "Aviso de privacidade",
        serviceOptions: [
          "Site ou plataforma corporativa",
          "Landing pages e aquisição",
          "Meta / Google Ads",
          "Infraestrutura de TI e redes",
          "Sistema conectado de crescimento",
          "Preciso de ajuda para definir o escopo",
        ],
        budgetOptions: ["R$ 5,9 mil–10 mil", "R$ 10 mil–25 mil", "R$ 25 mil+", "Definir após diagnóstico"],
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
          "Solicitação enviada. Vamos analisar o contexto e responder com o próximo passo.",
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
      title: "Binah IT Solutions | Sistemas digitales para empresas ambiciosas",
      description:
        "Binah IT crea sitios corporativos, sistemas de adquisición e infraestructura de TI para empresas preparadas para crecer con claridad.",
    },
    nav: {
      label: "Navegación principal",
      services: "Especialidades",
      work: "Proyectos",
      approach: "Método",
      contact: "Contacto",
      cta: "Iniciar proyecto",
      menuOpen: "Abrir menú",
      menuClose: "Cerrar menú",
      languages: "Idioma",
    },
    hero: {
      eyebrow: "Socio tecnológico independiente",
      title: "Sistemas creados para que empresas ambiciosas",
      accent: "avancen más rápido.",
      description:
        "Diseñamos y construimos plataformas digitales de alto rendimiento, sistemas de adquisición y bases de TI para empresas que han superado la improvisación.",
      primaryCta: "Solicitar evaluación estratégica",
      secondaryCta: "Ver proyectos seleccionados",
      note: "Cada proyecto comienza con alineación técnica y comercial.",
      panelLabel: "Sistema de entrega Binah",
      panelStatus: "Operativo",
      panelTitle: "Una estrategia. Tres sistemas conectados.",
      panelItems: [
        { label: "Plataforma digital", value: "Posicionar + convertir" },
        { label: "Sistema de demanda", value: "Atraer + medir" },
        { label: "Base de TI", value: "Operar + escalar" },
      ],
      panelFooter: "Estrategia → Construcción → Validación → Mejora",
    },
    trust: {
      lead: "Un socio responsable desde el diagnóstico hasta el lanzamiento.",
      items: ["Estrategia", "Diseño de experiencia", "Ingeniería", "Adquisición", "Infraestructura"],
    },
    services: {
      eyebrow: "Lo que construimos",
      title: "Un socio para los sistemas de los que depende su crecimiento.",
      description:
        "Sin entregables desconectados. Creamos una base comercial y técnica coherente con el próximo resultado del negocio.",
      items: [
        {
          number: "01",
          title: "Plataformas corporativas",
          description:
            "Sitios y entornos de conversión que ayudan a compradores complejos a entender, confiar y actuar.",
          result: "Una presencia digital a la altura de su ambición comercial.",
          deliverables: ["Posicionamiento y UX", "Ingeniería Next.js", "SEO y medición"],
        },
        {
          number: "02",
          title: "Sistemas de adquisición",
          description:
            "Campañas de Meta y Google conectadas con páginas enfocadas, seguimiento limpio y un recorrido de lead calificado.",
          result: "Generación de demanda que se puede leer y mejorar.",
          deliverables: ["Oferta y embudo", "Estructura de campañas", "Seguimiento de conversión"],
        },
        {
          number: "03",
          title: "Bases de TI",
          description:
            "Redes, Wi-Fi empresarial y organización técnica para equipos que necesitan operaciones confiables.",
          result: "Menos fricción operativa y menos soluciones improvisadas.",
          deliverables: ["Diagnóstico técnico", "Arquitectura de red", "Documentación"],
        },
      ],
    },
    work: {
      eyebrow: "Proyectos seleccionados",
      title: "Proyectos con una función clara.",
      description:
        "Mostramos solo el alcance que podemos comprobar, sin métricas inventadas. Cada proyecto responde a una función comercial concreta.",
      view: "Visitar proyecto en vivo",
      focusLabel: "Enfoque del proyecto",
      projects: [
        {
          ...sharedProjects[0],
          sector: "Belleza profesional",
          summary:
            "Una experiencia corporativa de producto que estructura con claridad la marca, el catálogo y los recorridos comerciales.",
          focus: ["Jerarquía de marca", "Catálogo adaptable", "Navegación comercial"],
        },
        {
          ...sharedProjects[1],
          sector: "Ingeniería y construcción",
          summary:
            "Una plataforma de servicios técnicos creada para explicar trabajos complejos y llevar clientes calificados a una cotización.",
          focus: ["Claridad de servicios", "Credibilidad técnica", "Recorrido de cotización"],
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
      eyebrow: "Modelos de proyecto",
      title: "Alcance orientado a la decisión, no inflado con entregables.",
      description:
        "Elegimos el proyecto más pequeño capaz de resolver el problema real y sostener la siguiente etapa de crecimiento.",
      bestFor: "Ideal para",
      items: [
        {
          title: "Proyecto enfocado",
          subtitle: "Un resultado comercial urgente",
          text: "Una plataforma, landing page o intervención técnica definida, con una condición clara de lanzamiento.",
          points: ["Alcance definido", "Un resultado responsable", "Entrega lista para lanzar"],
        },
        {
          title: "Sistema de crecimiento",
          subtitle: "Plataforma + adquisición + medición",
          text: "Una base conectada para empresas que necesitan elevar su posicionamiento y generar demanda calificada.",
          points: ["Alcance multidisciplinario", "Preparado para campañas", "Base de medición"],
          featured: true,
        },
        {
          title: "Programa a medida",
          subtitle: "Transformación compleja o por fases",
          text: "Para infraestructura, múltiples sitios o proyectos entre áreas que exigen descubrimiento y entrega gradual.",
          points: ["Fase de descubrimiento", "Hoja de ruta por etapas", "Gobernanza personalizada"],
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
            "El formulario de calificación comienza en USD 5k. La inversión final depende del alcance, el riesgo y la cantidad de frentes; solo cotizamos después de entender el problema de negocio.",
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
      eyebrow: "Comience por el contexto",
      title: "Traiga el problema de negocio. Definiremos el sistema correcto.",
      description:
        "Comparta el resultado, la restricción y la situación actual. Recibirá una respuesta directa sobre encaje y siguiente paso.",
      promiseTitle: "Qué sucede después",
      promiseItems: [
        "Revisamos el encaje comercial y técnico.",
        "Identificamos lo necesario para definir el alcance con responsabilidad.",
        "Recomendamos el siguiente paso, sin un guion genérico de ventas.",
      ],
      direct: "¿Prefiere una conversación directa?",
      whatsapp: "Abrir WhatsApp",
      form: {
        title: "Evaluación de proyecto",
        intro: "Los campos marcados con * son obligatorios.",
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
        submit: "Solicitar evaluación",
        submitting: "Enviando...",
        privacy: "Aviso de privacidad",
        serviceOptions: [
          "Sitio o plataforma corporativa",
          "Landing pages y adquisición",
          "Meta / Google Ads",
          "Infraestructura de TI y redes",
          "Sistema conectado de crecimiento",
          "Necesito ayuda para definir el alcance",
        ],
        budgetOptions: ["USD 5k–10k", "USD 10k–25k", "USD 25k+", "Definir tras el diagnóstico"],
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
          "Solicitud enviada. Revisaremos el contexto y responderemos con el siguiente paso.",
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
          "You may request access, correction or deletion of information you submitted by emailing binahitsolutions@gmail.com.",
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
          "Você pode solicitar acesso, correção ou exclusão dos dados enviados pelo e-mail binahitsolutions@gmail.com.",
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
          "Puede solicitar acceso, corrección o eliminación de los datos enviados escribiendo a binahitsolutions@gmail.com.",
        ],
      },
    ],
    back: "Volver al sitio",
  },
} as const;
