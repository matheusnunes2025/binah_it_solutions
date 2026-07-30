import type { Locale } from "@/lib/i18n";

export const portfolioSlugs = [
  "central-do-credito",
  "sollie-professional",
  "strauss-impermeabilizacao",
] as const;

export type PortfolioSlug = (typeof portfolioSlugs)[number];

export type PortfolioProject = {
  slug: PortfolioSlug;
  title: string;
  sector: string;
  liveUrl: string;
  image: string;
  summary: string;
  challenge: string;
  objective: string;
  decisions: readonly {
    title: string;
    text: string;
  }[];
  deliverables: readonly string[];
  evidence: readonly string[];
  technology: readonly string[];
};

const shared = {
  central: {
    slug: "central-do-credito",
    title: "Central do Crédito",
    liveUrl: "https://centraldocreditors.com.br/",
    image: "/images/projeto-central-do-credito.jpg",
  },
  sollie: {
    slug: "sollie-professional",
    title: "Solliê Professional",
    liveUrl: "https://www.sollieprofessional.com.br/",
    image: "/images/projeto-sollie.png",
  },
  strauss: {
    slug: "strauss-impermeabilizacao",
    title: "Strauss Impermeabilização",
    liveUrl: "https://straussimpermeabilizacao.com.br/",
    image: "/images/projeto-strauss.png",
  },
} as const;

export const portfolioByLocale: Record<
  Locale,
  readonly PortfolioProject[]
> = {
  pt: [
    {
      ...shared.central,
      sector: "Serviços financeiros",
      summary:
        "Plataforma institucional e de aquisição que organiza modalidades de crédito, reduz dúvidas e conduz o visitante para uma simulação por WhatsApp.",
      challenge:
        "Crédito consignado exige confiança e clareza. O visitante precisa identificar rapidamente a modalidade adequada, entender o processo e encontrar um canal seguro de atendimento.",
      objective:
        "Transformar diferentes produtos financeiros em jornadas simples, pesquisáveis e orientadas à conversão, sem esconder informações de privacidade ou contato.",
      decisions: [
        {
          title: "Uma página para cada intenção",
          text: "Crédito CLT, saque FGTS, empréstimo INSS e servidor público possuem páginas próprias, evitando concentrar ofertas diferentes em um único bloco genérico.",
        },
        {
          title: "Confiança antes da simulação",
          text: "Bancos parceiros, FAQ, CNPJ, contatos, termos de uso e política de privacidade aparecem como sinais verificáveis antes do CTA.",
        },
        {
          title: "Conversão direta",
          text: "CTAs de simulação e atendimento levam ao contato, com WhatsApp persistente para reduzir etapas no mobile.",
        },
        {
          title: "Aquisição mensurável",
          text: "A estrutura publicada inclui metadados, canonical, sitemap, robots e preferências separadas para Google Analytics e Meta Pixel.",
        },
      ],
      deliverables: [
        "Arquitetura multipágina por modalidade de crédito",
        "Homepage, serviços, sobre, contato e páginas legais",
        "Design responsivo com componentes de confiança",
        "Jornada de simulação e atendimento por WhatsApp",
        "SEO técnico e estrutura de indexação",
        "Consentimento para tecnologias de mensuração",
      ],
      evidence: [
        "Site publicado e acessível em domínio próprio",
        "Rotas dedicadas para CLT, FGTS, INSS e servidor público",
        "Canonical, robots e sitemap disponíveis publicamente",
        "Preferências independentes para Analytics e Meta Pixel",
        "FAQ e dados de contato presentes na experiência",
      ],
      technology: ["Next.js", "TypeScript", "next/image", "SEO técnico", "Google Analytics", "Meta Pixel"],
    },
    {
      ...shared.sollie,
      sector: "Beleza profissional",
      summary:
        "Experiência de marca e catálogo que conecta lançamentos, linhas de produto, necessidades capilares, pontos de compra, distribuidores, eventos e formação profissional.",
      challenge:
        "Uma marca com muitos produtos e públicos precisa permitir descoberta sem transformar a navegação em uma lista desorganizada de itens.",
      objective:
        "Organizar o portfólio de beleza em caminhos compreensíveis para consumidoras, profissionais e potenciais distribuidores.",
      decisions: [
        {
          title: "Descoberta por necessidade",
          text: "Além das linhas de produto, a navegação oferece caminhos para cacheados, coloridos, mechas, homens, alisamentos e cabelos ressecados.",
        },
        {
          title: "Marca além do catálogo",
          text: "História, eventos, Escola de Beleza e conteúdo da Fegobel ampliam a percepção de uma operação profissional.",
        },
        {
          title: "Canais comerciais separados",
          text: "Onde comprar, onde estamos e seja distribuidor atendem intenções diferentes sem disputar o mesmo CTA.",
        },
        {
          title: "Conteúdo visual de produto",
          text: "Lançamentos e linhas utilizam fotografias, descrições e páginas próprias para tornar a exploração mais concreta.",
        },
      ],
      deliverables: [
        "Homepage orientada a lançamentos e posicionamento",
        "Catálogo com páginas de linhas profissionais",
        "Navegação por tipo e necessidade capilar",
        "Fluxos para compra, localização e distribuição",
        "Áreas de eventos, história e educação",
        "Experiência adaptada para desktop e mobile",
      ],
      evidence: [
        "Site publicado com canonical e sitemap",
        "Páginas específicas de produtos e tipos de cabelo",
        "Rotas próprias para distribuidores e pontos de compra",
        "Conteúdo de eventos e Escola de Beleza",
        "Google Tag Manager e Google Analytics identificados no site",
      ],
      technology: ["Wix", "Catálogo dinâmico", "Design responsivo", "Google Tag Manager", "Google Analytics"],
    },
    {
      ...shared.strauss,
      sector: "Impermeabilização e construção",
      summary:
        "Plataforma local de serviços que combina escopo técnico, imagens de obras, avaliações de clientes e contato direto para orçamento.",
      challenge:
        "Serviços de impermeabilização envolvem risco patrimonial. O site precisava explicar especialidades e demonstrar confiança antes do pedido de orçamento.",
      objective:
        "Apresentar a experiência da empresa, organizar serviços e levar clientes da região de Viamão a um contato comercial com menos incerteza.",
      decisions: [
        {
          title: "Serviço explicado com precisão",
          text: "Lajes, paredes e piscinas aparecem como soluções distintas, apoiadas por uma página completa de serviços.",
        },
        {
          title: "Prova visual e social",
          text: "A galeria apresenta obras, enquanto avaliações atribuídas a clientes reforçam a percepção de experiência real.",
        },
        {
          title: "Contexto local",
          text: "Endereço, área de atuação, telefone e dados estruturados LocalBusiness ajudam a conectar o site à operação física.",
        },
        {
          title: "Orçamento como ação principal",
          text: "O hero, a navegação e os pontos de contato priorizam a solicitação de orçamento, sem dispersar a jornada.",
        },
      ],
      deliverables: [
        "Homepage com proposta e CTA de orçamento",
        "Páginas de serviços, galeria, sobre e contato",
        "Depoimentos e sinais de experiência",
        "Informações locais e canais comerciais",
        "SEO técnico com dados estruturados LocalBusiness",
        "Implementação responsiva em Next.js",
      ],
      evidence: [
        "Site publicado e acessível em domínio próprio",
        "Sitemap com serviços, galeria, sobre e contato",
        "Avaliações de clientes visíveis na homepage",
        "Schema LocalBusiness publicado",
        "Google Tag Manager e Google Analytics identificados no site",
      ],
      technology: ["Next.js", "TypeScript", "SEO local", "Schema.org", "Google Tag Manager", "Google Analytics"],
    },
  ],
  en: [
    {
      ...shared.central,
      sector: "Financial services",
      summary:
        "An institutional and acquisition platform that organizes credit products, reduces uncertainty and moves visitors toward a WhatsApp simulation.",
      challenge:
        "Payroll-deductible credit requires clarity and trust. Visitors need to identify the right product, understand the process and find a secure service channel quickly.",
      objective:
        "Turn different financial products into simple, searchable conversion journeys without hiding privacy or contact information.",
      decisions: [
        {
          title: "A page for each intent",
          text: "CLT credit, FGTS withdrawal, INSS loans and public-servant credit each have dedicated pages instead of competing inside one generic block.",
        },
        {
          title: "Trust before simulation",
          text: "Partner banks, FAQ, business registration, contacts, terms and privacy information support the decision before the CTA.",
        },
        {
          title: "Direct conversion",
          text: "Simulation and support CTAs lead to contact, with persistent WhatsApp access that reduces steps on mobile.",
        },
        {
          title: "Measurable acquisition",
          text: "The live structure includes metadata, canonical, sitemap, robots and separate preferences for Google Analytics and Meta Pixel.",
        },
      ],
      deliverables: [
        "Multi-page architecture by credit product",
        "Homepage, services, about, contact and legal pages",
        "Responsive design with trust components",
        "WhatsApp simulation and support journey",
        "Technical SEO and indexing structure",
        "Consent controls for measurement technology",
      ],
      evidence: [
        "Live website on its own domain",
        "Dedicated CLT, FGTS, INSS and public-servant routes",
        "Public canonical, robots and sitemap",
        "Independent Analytics and Meta Pixel preferences",
        "FAQ and contact information in the experience",
      ],
      technology: ["Next.js", "TypeScript", "next/image", "Technical SEO", "Google Analytics", "Meta Pixel"],
    },
    {
      ...shared.sollie,
      sector: "Professional beauty",
      summary:
        "A brand and catalog experience connecting launches, product lines, hair needs, purchase locations, distributors, events and professional education.",
      challenge:
        "A brand with many products and audiences needs useful discovery without turning navigation into an unstructured item list.",
      objective:
        "Organize the beauty portfolio into clear paths for consumers, professionals and prospective distributors.",
      decisions: [
        {
          title: "Discovery by need",
          text: "Alongside product lines, navigation supports curly, colored, highlighted, men's, straightened and dry hair journeys.",
        },
        {
          title: "Brand beyond the catalog",
          text: "History, events, Beauty School and Fegobel content strengthen the perception of a professional operation.",
        },
        {
          title: "Separate commercial channels",
          text: "Where to buy, store locations and distributor recruitment serve different intents without competing for one CTA.",
        },
        {
          title: "Visual product content",
          text: "Launches and lines use photography, descriptions and dedicated pages to make discovery more concrete.",
        },
      ],
      deliverables: [
        "Launch- and positioning-led homepage",
        "Catalog with professional line pages",
        "Navigation by hair type and need",
        "Purchase, location and distribution journeys",
        "Event, history and education areas",
        "Desktop and mobile experience",
      ],
      evidence: [
        "Live website with canonical and sitemap",
        "Dedicated product and hair-type pages",
        "Distributor and purchase-location routes",
        "Event and Beauty School content",
        "Google Tag Manager and Google Analytics detected",
      ],
      technology: ["Wix", "Dynamic catalog", "Responsive design", "Google Tag Manager", "Google Analytics"],
    },
    {
      ...shared.strauss,
      sector: "Waterproofing and construction",
      summary:
        "A local-service platform combining technical scope, project imagery, customer reviews and a direct quote journey.",
      challenge:
        "Waterproofing work involves property risk. The website needed to explain specialties and establish trust before a quote request.",
      objective:
        "Present company experience, organize services and move customers in the Viamão region toward commercial contact with less uncertainty.",
      decisions: [
        {
          title: "Precise service structure",
          text: "Slabs, walls and pools are presented as distinct solutions, supported by a complete services page.",
        },
        {
          title: "Visual and social proof",
          text: "The gallery shows work while attributed customer reviews reinforce evidence of real experience.",
        },
        {
          title: "Local context",
          text: "Address, service region, telephone and LocalBusiness structured data connect the website to the physical operation.",
        },
        {
          title: "Quote as the primary action",
          text: "The hero, navigation and contact points prioritize quote requests without dispersing the journey.",
        },
      ],
      deliverables: [
        "Homepage with positioning and quote CTA",
        "Services, gallery, about and contact pages",
        "Testimonials and experience signals",
        "Local information and commercial channels",
        "Technical SEO with LocalBusiness data",
        "Responsive Next.js implementation",
      ],
      evidence: [
        "Live website on its own domain",
        "Sitemap with services, gallery, about and contact",
        "Visible customer reviews on the homepage",
        "Published LocalBusiness schema",
        "Google Tag Manager and Google Analytics detected",
      ],
      technology: ["Next.js", "TypeScript", "Local SEO", "Schema.org", "Google Tag Manager", "Google Analytics"],
    },
  ],
  es: [
    {
      ...shared.central,
      sector: "Servicios financieros",
      summary:
        "Plataforma institucional y de adquisición que organiza productos de crédito, reduce dudas y lleva al visitante a una simulación por WhatsApp.",
      challenge:
        "El crédito consignado exige confianza y claridad. El visitante debe identificar la modalidad correcta, entender el proceso y encontrar atención segura rápidamente.",
      objective:
        "Convertir distintos productos financieros en recorridos simples, buscables y orientados a conversión, sin ocultar privacidad o contacto.",
      decisions: [
        {
          title: "Una página para cada intención",
          text: "Crédito CLT, retiro FGTS, préstamos INSS y servidores públicos tienen páginas propias en lugar de competir en un bloque genérico.",
        },
        {
          title: "Confianza antes de la simulación",
          text: "Bancos asociados, FAQ, registro empresarial, contactos, términos y privacidad respaldan la decisión antes del CTA.",
        },
        {
          title: "Conversión directa",
          text: "Los CTA de simulación y atención llevan al contacto, con acceso persistente a WhatsApp para reducir pasos en mobile.",
        },
        {
          title: "Adquisición medible",
          text: "La estructura publicada incluye metadatos, canonical, sitemap, robots y preferencias separadas para Analytics y Meta Pixel.",
        },
      ],
      deliverables: [
        "Arquitectura multipágina por producto de crédito",
        "Inicio, servicios, empresa, contacto y páginas legales",
        "Diseño adaptable con componentes de confianza",
        "Recorrido de simulación y atención por WhatsApp",
        "SEO técnico y estructura de indexación",
        "Consentimiento para tecnologías de medición",
      ],
      evidence: [
        "Sitio publicado en dominio propio",
        "Rutas dedicadas para CLT, FGTS, INSS y servidores",
        "Canonical, robots y sitemap públicos",
        "Preferencias independientes para Analytics y Meta Pixel",
        "FAQ e información de contacto visibles",
      ],
      technology: ["Next.js", "TypeScript", "next/image", "SEO técnico", "Google Analytics", "Meta Pixel"],
    },
    {
      ...shared.sollie,
      sector: "Belleza profesional",
      summary:
        "Experiencia de marca y catálogo que conecta lanzamientos, líneas de producto, necesidades capilares, puntos de compra, distribuidores, eventos y formación.",
      challenge:
        "Una marca con muchos productos y públicos necesita facilitar el descubrimiento sin convertir la navegación en una lista desorganizada.",
      objective:
        "Organizar el portafolio de belleza en recorridos claros para consumidoras, profesionales y posibles distribuidores.",
      decisions: [
        {
          title: "Descubrimiento por necesidad",
          text: "Además de las líneas, la navegación ofrece recorridos para cabellos rizados, teñidos, con mechas, masculinos, alisados y secos.",
        },
        {
          title: "Marca más allá del catálogo",
          text: "Historia, eventos, Escuela de Belleza y contenido de Fegobel amplían la percepción de una operación profesional.",
        },
        {
          title: "Canales comerciales separados",
          text: "Dónde comprar, ubicaciones y distribución atienden intenciones distintas sin competir por un único CTA.",
        },
        {
          title: "Contenido visual de producto",
          text: "Lanzamientos y líneas usan fotografías, descripciones y páginas propias para hacer la exploración más concreta.",
        },
      ],
      deliverables: [
        "Homepage orientada a lanzamientos y marca",
        "Catálogo con páginas de líneas profesionales",
        "Navegación por tipo y necesidad capilar",
        "Recorridos de compra, ubicación y distribución",
        "Áreas de eventos, historia y educación",
        "Experiencia para desktop y mobile",
      ],
      evidence: [
        "Sitio publicado con canonical y sitemap",
        "Páginas de productos y tipos de cabello",
        "Rutas para distribuidores y puntos de compra",
        "Contenido de eventos y Escuela de Belleza",
        "Google Tag Manager y Google Analytics detectados",
      ],
      technology: ["Wix", "Catálogo dinámico", "Diseño adaptable", "Google Tag Manager", "Google Analytics"],
    },
    {
      ...shared.strauss,
      sector: "Impermeabilización y construcción",
      summary:
        "Plataforma local de servicios que combina alcance técnico, imágenes de obras, reseñas de clientes y contacto directo para cotización.",
      challenge:
        "La impermeabilización implica riesgo patrimonial. El sitio debía explicar especialidades y generar confianza antes de solicitar una cotización.",
      objective:
        "Presentar la experiencia, organizar servicios y llevar clientes de la región de Viamão al contacto comercial con menos incertidumbre.",
      decisions: [
        {
          title: "Servicios con precisión",
          text: "Losas, paredes y piscinas aparecen como soluciones distintas, apoyadas por una página completa de servicios.",
        },
        {
          title: "Prueba visual y social",
          text: "La galería presenta trabajos y las reseñas atribuidas a clientes refuerzan evidencia de experiencia real.",
        },
        {
          title: "Contexto local",
          text: "Dirección, región atendida, teléfono y datos LocalBusiness conectan el sitio con la operación física.",
        },
        {
          title: "Cotización como acción principal",
          text: "El hero, la navegación y los contactos priorizan la solicitud de cotización sin dispersar el recorrido.",
        },
      ],
      deliverables: [
        "Homepage con propuesta y CTA de cotización",
        "Páginas de servicios, galería, empresa y contacto",
        "Reseñas y señales de experiencia",
        "Información local y canales comerciales",
        "SEO técnico con datos LocalBusiness",
        "Implementación adaptable en Next.js",
      ],
      evidence: [
        "Sitio publicado en dominio propio",
        "Sitemap con servicios, galería, empresa y contacto",
        "Reseñas visibles en la homepage",
        "Schema LocalBusiness publicado",
        "Google Tag Manager y Google Analytics detectados",
      ],
      technology: ["Next.js", "TypeScript", "SEO local", "Schema.org", "Google Tag Manager", "Google Analytics"],
    },
  ],
};

export function getPortfolioProject(
  locale: Locale,
  slug: string,
): PortfolioProject | undefined {
  return portfolioByLocale[locale].find((project) => project.slug === slug);
}

export const portfolioUiByLocale = {
  pt: {
    collectionEyebrow: "Portfólio Binah",
    collectionTitle: "Projetos reais com contexto, decisões e evidências.",
    collectionDescription:
      "Não mostramos apenas uma captura de tela. Cada case explica a função comercial, a arquitetura e o que pode ser verificado no projeto publicado.",
    caseLink: "Ler estudo de caso",
    eyebrow: "Case verificável",
    back: "Voltar ao portfólio",
    live: "Visitar site no ar",
    challenge: "Desafio do projeto",
    objective: "Objetivo comercial",
    decisions: "Decisões de arquitetura e UX",
    deliverables: "O que foi entregue",
    evidence: "Evidências públicas",
    evidenceNote:
      "Estas evidências foram verificadas no site publicado. Não usamos faturamento, leads ou percentuais sem acesso a dados comprováveis.",
    technology: "Tecnologia observada",
    ctaEyebrow: "Próximo projeto",
    ctaTitle: "Quer uma estrutura com esse nível de clareza?",
    ctaText:
      "Envie o tipo de projeto e o investimento disponível. A Binah indica o menor escopo capaz de atender o objetivo.",
    ctaButton: "Receber proposta",
  },
  en: {
    collectionEyebrow: "Binah work",
    collectionTitle: "Real projects with context, decisions and evidence.",
    collectionDescription:
      "We do not stop at a screenshot. Each case explains the commercial role, architecture and what can be verified on the live project.",
    caseLink: "Read case study",
    eyebrow: "Verified case study",
    back: "Back to work",
    live: "Visit live website",
    challenge: "Project challenge",
    objective: "Commercial objective",
    decisions: "Architecture and UX decisions",
    deliverables: "What was delivered",
    evidence: "Public evidence",
    evidenceNote:
      "This evidence was checked on the live website. We do not publish revenue, lead or percentage claims without verifiable data.",
    technology: "Observed technology",
    ctaEyebrow: "Next project",
    ctaTitle: "Need this level of structure and clarity?",
    ctaText:
      "Send the project type and available investment. Binah will recommend the smallest scope capable of meeting the objective.",
    ctaButton: "Request proposal",
  },
  es: {
    collectionEyebrow: "Proyectos Binah",
    collectionTitle: "Proyectos reales con contexto, decisiones y evidencias.",
    collectionDescription:
      "No mostramos solo una captura. Cada caso explica la función comercial, la arquitectura y lo que puede verificarse en el proyecto publicado.",
    caseLink: "Leer caso de estudio",
    eyebrow: "Caso verificable",
    back: "Volver a proyectos",
    live: "Visitar sitio en vivo",
    challenge: "Desafío del proyecto",
    objective: "Objetivo comercial",
    decisions: "Decisiones de arquitectura y UX",
    deliverables: "Qué fue entregado",
    evidence: "Evidencias públicas",
    evidenceNote:
      "Estas evidencias fueron verificadas en el sitio publicado. No publicamos datos de ventas, leads o porcentajes sin información comprobable.",
    technology: "Tecnología observada",
    ctaEyebrow: "Próximo proyecto",
    ctaTitle: "¿Necesita este nivel de estructura y claridad?",
    ctaText:
      "Envíe el tipo de proyecto y la inversión disponible. Binah recomendará el menor alcance capaz de cumplir el objetivo.",
    ctaButton: "Solicitar propuesta",
  },
} as const;
