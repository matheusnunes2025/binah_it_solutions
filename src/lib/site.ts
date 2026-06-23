export const contact = {
  phoneDisplay: "(62) 99116-6071",
  whatsappNumber: "5562991166071",
  email: "binahitsolutions@gmail.com",
  instagramUrl: "https://www.instagram.com/binah_it_solutions/",
  instagramHandle: "@binah_it_solutions",
} as const;

export const defaultWhatsappMessage =
  "Olá, vim pelo site da Binah IT Solutions e quero conversar sobre site, anúncios ou infraestrutura de TI para minha empresa.";

export function whatsappLink(message = defaultWhatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Serviços" },
  { href: "/projetos", label: "Projetos" },
  { href: "/contato", label: "Contato" },
] as const;

export const processVisual = {
  title: "Processo em etapas",
  description: "Do diagnóstico à entrega, cada etapa tem função clara.",
  image: "/images/binah-processo-digital-3d.webp",
  alt: "Fluxo 3D minimalista representando o processo de criação de presença digital em etapas.",
} as const;

export const servicesVisual = {
  title: "Serviços Binah IT",
  description: "Site, tráfego e infraestrutura trabalhando com clareza.",
  image: "/images/binah-sites-profissionais-3d.webp",
  alt: "Imagem 3D minimalista representando sites profissionais responsivos para empresas.",
} as const;

export const contactVisual = {
  title: "Contato profissional",
  description: "Contexto claro ajuda a definir o próximo passo.",
  image: "/images/binah-contato-projeto-digital-3d.webp",
  alt: "Imagem 3D minimalista representando contato profissional para projeto digital.",
} as const;

export const googleSeoVisual = {
  title: "Estrutura para buscas",
  description: "Páginas claras para quem pesquisa antes de chamar.",
  image: "/images/binah-google-seo-local-3d.webp",
  alt: "Imagem 3D minimalista representando presença em buscas e SEO local para empresas.",
} as const;

export const categoryExamples = [
  {
    title: "Negócios locais",
    description: "Mais clareza para ser encontrado, comparado e chamado.",
    image: "/images/segments/negocios-locais.webp",
    alt: "Imagem minimalista representando negócios locais com presença digital, busca e contato.",
  },
  {
    title: "Engenharia e obras",
    description: "Apresente serviços, obras e orçamentos com autoridade.",
    image: "/images/segments/engenharia-obras.webp",
    alt: "Imagem minimalista representando engenharia, obras e apresentação profissional de serviços técnicos.",
  },
  {
    title: "Saúde e atendimento",
    description: "Mostre especialidades e facilite agendamentos.",
    image: "/images/segments/saude-atendimento.webp",
    alt: "Imagem minimalista representando saúde, atendimento profissional e agendamento digital.",
  },
  {
    title: "Arquitetura",
    description: "Valorize portfólio, método e contato comercial.",
    image: "/images/segments/arquitetura.webp",
    alt: "Imagem minimalista representando arquitetura, portfólio e apresentação profissional de projetos.",
  },
  {
    title: "Consultorias",
    description: "Explique sua atuação com sobriedade e confiança.",
    image: "/images/segments/consultorias.webp",
    alt: "Imagem minimalista representando consultorias, estratégia e apresentação profissional de serviços.",
  },
  {
    title: "Empresas com rede",
    description: "Organize infraestrutura, Wi-Fi e equipamentos.",
    image: "/images/segments/empresas-com-rede.webp",
    alt: "Imagem minimalista representando infraestrutura de rede corporativa, Wi-Fi e conectividade empresarial.",
  },
] as const;

export const projects = [
  {
    title: "Sollie Professional",
    description: "Site institucional para apresentar marca, produtos e navegação com clareza.",
    href: "https://www.sollieprofessional.com.br/",
    image: "/images/projeto-sollie.png",
    details: ["Marca valorizada", "Conteúdo claro", "Navegação responsiva"],
  },
  {
    title: "Strauss Impermeabilização",
    description: "Site técnico para apresentar serviços e gerar pedidos de orçamento.",
    href: "https://straussimpermeabilizacao.com.br/",
    image: "/images/projeto-strauss.png",
    details: ["Serviços claros", "Confiança", "Contato destacado"],
  },
] as const;

export const services = [
  {
    slug: "landing",
    anchor: "landing-pages",
    title: "Landing pages",
    description: "Páginas diretas para vender uma oferta e gerar contato.",
    image: "/images/binah-landing-pages-3d.webp",
    alt: "Imagem 3D minimalista representando landing pages comerciais para captação de clientes.",
    deliverables: ["Oferta clara", "CTA direto", "Tráfego pago"],
  },
  {
    slug: "site",
    anchor: "sites-profissionais",
    title: "Sites profissionais",
    description: "Sites elegantes para apresentar sua empresa com confiança.",
    image: "/images/binah-sites-profissionais-3d.webp",
    alt: "Imagem 3D minimalista representando sites profissionais responsivos para empresas.",
    deliverables: ["Design responsivo", "Serviços claros", "WhatsApp visível"],
  },
  {
    slug: "search-structure",
    anchor: "estrutura-para-buscas",
    title: "Estrutura para buscas",
    description: "Conteúdo organizado para o cliente encontrar, entender e chamar.",
    image: "/images/binah-estrutura-para-buscas-3d.webp",
    alt: "Imagem 3D minimalista representando estrutura para buscas e organização de conteúdo digital.",
    deliverables: ["Páginas estratégicas", "Conteúdo claro", "Busca local"],
  },
  {
    slug: "google-ads",
    anchor: "google-ads",
    title: "Google Ads",
    description: "Anúncios para aparecer quando o cliente procura seu serviço.",
    image: "/images/binah-google-ads-3d.webp",
    alt: "Imagem 3D minimalista representando campanhas de Google Ads e anúncios de pesquisa.",
    deliverables: ["Palavras-chave", "Anúncios de busca", "Contato direto"],
  },
  {
    slug: "meta-ads",
    anchor: "meta-ads",
    title: "Meta Ads",
    description: "Campanhas para gerar interesse, conversas e oportunidades comerciais.",
    image: "/images/binah-meta-ads-3d.webp",
    alt: "Imagem 3D minimalista representando anúncios para Instagram, Facebook e campanhas de conversa.",
    deliverables: ["Criativos", "Públicos", "WhatsApp"],
  },
  {
    slug: "infrastructure",
    anchor: "infraestrutura-de-ti-e-redes",
    title: "Infraestrutura de TI e redes",
    description: "Redes, Wi-Fi e estrutura técnica para empresas mais organizadas.",
    image: "/images/binah-infraestrutura-redes-empresas-3d.webp",
    alt: "Imagem 3D minimalista representando infraestrutura de TI e redes corporativas para empresas.",
    deliverables: ["Rede corporativa", "Wi-Fi empresarial", "Equipamentos"],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const homeServiceCards = [
  {
    title: "Landing pages",
    description: "Páginas diretas para vender uma oferta e gerar contato.",
    image: "/images/binah-landing-pages-3d.webp",
    alt: "Imagem 3D minimalista representando landing pages comerciais para captação de clientes.",
    points: ["Oferta clara", "CTA direto", "Tráfego pago"],
    href: "/servicos#landing-pages",
  },
  {
    title: "Sites profissionais",
    description: "Sites elegantes para apresentar sua empresa com confiança.",
    image: "/images/binah-sites-profissionais-3d.webp",
    alt: "Imagem 3D minimalista representando sites profissionais responsivos para empresas.",
    points: ["Design responsivo", "Serviços claros", "WhatsApp visível"],
    href: "/servicos#sites-profissionais",
  },
  {
    title: "Estrutura para buscas",
    description: "Conteúdo organizado para o cliente encontrar, entender e chamar.",
    image: "/images/binah-estrutura-para-buscas-3d.webp",
    alt: "Imagem 3D minimalista representando estrutura para buscas e organização de conteúdo digital.",
    points: ["Páginas estratégicas", "Conteúdo claro", "Busca local"],
    href: "/servicos#estrutura-para-buscas",
  },
  {
    title: "Google Ads",
    description: "Anúncios para aparecer quando o cliente procura seu serviço.",
    image: "/images/binah-google-ads-3d.webp",
    alt: "Imagem 3D minimalista representando campanhas de Google Ads e anúncios de pesquisa.",
    points: ["Palavras-chave", "Anúncios de busca", "Contato direto"],
    href: "/servicos#google-ads",
  },
  {
    title: "Meta Ads",
    description: "Campanhas para gerar interesse, conversas e oportunidades comerciais.",
    image: "/images/binah-meta-ads-3d.webp",
    alt: "Imagem 3D minimalista representando anúncios para Instagram, Facebook e campanhas de conversa.",
    points: ["Criativos", "Públicos", "WhatsApp"],
    href: "/servicos#meta-ads",
  },
  {
    title: "Infraestrutura de TI e redes",
    description: "Redes, Wi-Fi e estrutura técnica para empresas mais organizadas.",
    image: "/images/binah-infraestrutura-redes-empresas-3d.webp",
    alt: "Imagem 3D minimalista representando infraestrutura de TI e redes corporativas para empresas.",
    points: ["Rede corporativa", "Wi-Fi empresarial", "Equipamentos"],
    href: "/infraestrutura-de-ti-para-empresas",
  },
] as const;

export const infrastructureHome = {
  eyebrow: "Infraestrutura para empresas",
  title: "Sua empresa não pode depender de improviso.",
  description: "Organizamos redes, Wi-Fi e equipamentos para ambientes que precisam funcionar com estabilidade.",
  cards: [
    {
      title: "Rede corporativa",
      text: "Rede planejada para conectar equipes, dispositivos e setores.",
    },
    {
      title: "Wi-Fi empresarial",
      text: "Cobertura mais estável para ambientes comerciais.",
    },
    {
      title: "Equipamentos e acesso",
      text: "Configuração de roteadores, switches e pontos de acesso.",
    },
    {
      title: "Organização técnica",
      text: "Menos improviso, mais controle e manutenção simples.",
    },
  ],
  ctaTitle: "Quer uma estrutura de TI mais profissional?",
  ctaText: "Envie seu cenário atual e avaliamos o melhor caminho.",
  ctaButton: "Solicitar avaliação",
} as const;

export const infrastructurePage = {
  image: "/images/binah-infraestrutura-redes-empresas-3d.webp",
  alt: "Imagem 3D minimalista representando infraestrutura de TI e redes corporativas para empresas.",
  audience: [
    "Escritórios",
    "Clínicas",
    "Comércios",
    "Galpões",
    "Empresas em expansão",
    "Ambientes com muitos dispositivos",
  ],
  deliverables: [
    {
      title: "Diagnóstico da estrutura atual",
      text: "Mapeamento do ambiente e dos pontos críticos.",
    },
    {
      title: "Configuração de rede",
      text: "Ajustes para conectar equipes e dispositivos.",
    },
    {
      title: "Organização de roteadores e switches",
      text: "Equipamentos configurados com mais padrão.",
    },
    {
      title: "Wi-Fi corporativo",
      text: "Cobertura e acesso com mais estabilidade.",
    },
    {
      title: "Pontos de rede",
      text: "Pontos físicos conforme a rotina.",
    },
    {
      title: "Melhoria da conectividade interna",
      text: "Menos gargalos e menos improviso.",
    },
  ],
} as const;

export const audienceSegments = [
  "Negócios locais",
  "Saúde e atendimento",
  "Consultorias",
  "Engenharia e obras",
  "Arquitetura",
  "Empresas com rede",
] as const;

export const processSteps = [
  {
    title: "Entendimento do negócio",
    text: "Serviço, público, região e objetivo.",
  },
  {
    title: "Estrutura da mensagem",
    text: "Oferta, argumentos e caminho de contato.",
  },
  {
    title: "Design e desenvolvimento",
    text: "Páginas elegantes, rápidas e responsivas.",
  },
  {
    title: "Publicação e ajustes",
    text: "Entrega, revisão e ajustes finais.",
  },
  {
    title: "Tráfego e otimização",
    text: "Campanhas e melhorias quando necessário.",
  },
] as const;

export const choiceReasons = [
  {
    title: "Clareza",
    text: "O cliente entende rápido o que você faz.",
  },
  {
    title: "Confiança",
    text: "Visual profissional antes da primeira conversa.",
  },
  {
    title: "Conversão",
    text: "Caminho simples para contato e orçamento.",
  },
  {
    title: "Presença",
    text: "Site, busca, anúncios e estrutura alinhados.",
  },
] as const;

export const faqItems = [
  {
    question: "Minha empresa precisa de site mesmo usando Instagram?",
    answer: "Sim. O site organiza sua oferta e passa mais confiança para quem pesquisa sua empresa.",
  },
  {
    question: "O site pode levar direto para o WhatsApp?",
    answer: "Sim. Os botões podem direcionar o visitante para uma conversa rápida pelo WhatsApp.",
  },
  {
    question: "Vocês também ajudam no Google?",
    answer: "Sim. Podemos estruturar páginas, presença em buscas e campanhas de Google Ads.",
  },
  {
    question: "Google Ads serve para meu negócio?",
    answer: "Serve quando há pessoas pesquisando pelo serviço que você oferece.",
  },
  {
    question: "A Binah IT também atende infraestrutura?",
    answer: "Sim. Atendemos redes, Wi-Fi, equipamentos e organização técnica para empresas.",
  },
] as const;

export const segmentPages = {
  nutritionists: {
    slug: "/sites-para-nutricionistas",
    eyebrow: "Sites para nutricionistas",
    title:
      "Site profissional para nutricionistas que querem transmitir confiança e facilitar agendamentos.",
    description:
      "Criamos páginas elegantes para apresentar sua abordagem, especialidades, atendimento e diferenciais com clareza, conduzindo o paciente para o contato pelo WhatsApp.",
    primaryCta: "Quero um site para meu consultório",
    image: "/images/site-para-nutricionistas-3d.webp",
    alt: "Imagem 3D minimalista representando site profissional para nutricionistas com agenda e apresentação de serviços.",
    whyTitle: "Seu paciente precisa confiar antes de agendar.",
    whyText:
      "Antes de marcar uma consulta, muitas pessoas pesquisam, comparam e procuram entender sua abordagem. Um site bem estruturado apresenta sua atuação com clareza e ajuda o paciente a dar o próximo passo com mais segurança.",
    whyCards: [
      "Apresente suas especialidades",
      "Explique sua abordagem",
      "Mostre formas de atendimento",
      "Direcione para WhatsApp",
      "Transmita profissionalismo",
      "Organize dúvidas frequentes",
    ],
    features: [
      {
        title: "Apresentação profissional",
        text: "Uma seção clara sobre quem você atende, sua abordagem e como funciona o acompanhamento nutricional.",
      },
      {
        title: "Especialidades",
        text: "Espaço para nutrição clínica, emagrecimento, hipertrofia, saúde intestinal, gestantes, esportiva ou outras áreas.",
      },
      {
        title: "Agendamento",
        text: "Botões estratégicos para WhatsApp, formulário ou link de agenda.",
      },
      {
        title: "Dúvidas frequentes",
        text: "Respostas para perguntas comuns antes da consulta, reduzindo insegurança do paciente.",
      },
      {
        title: "Design responsivo",
        text: "Página bonita e funcional no celular, tablet e computador.",
      },
      {
        title: "Estrutura para anúncios",
        text: "Página preparada para receber tráfego de campanhas no Google, Instagram e Facebook.",
      },
    ],
    ctaTitle: "Quer uma página profissional para sua atuação como nutricionista?",
    ctaText:
      "A Binah IT pode criar uma estrutura clara, elegante e voltada para transformar visitantes em contatos.",
    ctaButton: "Solicitar orçamento",
    faq: [
      {
        question: "O site pode ter botão direto para WhatsApp?",
        answer:
          "Sim. A página pode conduzir o visitante para uma conversa no WhatsApp de forma clara e rápida.",
      },
      {
        question: "Posso apresentar minhas especialidades?",
        answer:
          "Sim. A estrutura pode organizar especialidades, abordagem, público atendido e formas de acompanhamento.",
      },
      {
        question: "Serve para nutricionista que atende online?",
        answer:
          "Serve. A página pode explicar atendimento online, presencial ou híbrido, com caminhos de agendamento adequados.",
      },
      {
        question: "A página pode ser usada em anúncios?",
        answer:
          "Sim. A landing page pode receber tráfego de campanhas no Google, Instagram e Facebook.",
      },
      {
        question: "O site funciona bem no celular?",
        answer:
          "Sim. O layout é responsivo e pensado para leitura, confiança e contato em telas pequenas.",
      },
    ],
  },
  construction: {
    slug: "/sites-para-engenharia-arquitetura-construtoras",
    eyebrow: "Sites para construção, projetos e obras",
    title: "Site profissional para engenharia, arquitetura, construtoras e empreiteiras.",
    description:
      "Criamos páginas elegantes para apresentar serviços, obras, diferenciais técnicos e canais de contato com clareza, fortalecendo a confiança antes do primeiro orçamento.",
    primaryCta: "Quero um site para minha empresa",
    image: "/images/site-para-engenharia-arquitetura-construtoras-3d.webp",
    alt: "Imagem 3D minimalista representando site profissional para engenharia, arquitetura e construtoras.",
    whyTitle: "Obra, projeto e reforma exigem confiança antes do orçamento.",
    whyText:
      "Clientes que procuram engenharia, arquitetura ou construção querem ver clareza, organização e segurança. Um site profissional ajuda a apresentar serviços, portfólio, regiões atendidas e diferenciais técnicos de forma objetiva.",
    whyCards: [
      "Apresente serviços com clareza",
      "Mostre obras e projetos",
      "Fortaleça autoridade",
      "Gere pedidos de orçamento",
      "Explique regiões atendidas",
      "Direcione para WhatsApp",
    ],
    features: [
      {
        title: "Serviços",
        text: "Páginas ou seções para engenharia civil, projetos, reformas, construção, regularização, laudos, arquitetura ou execução de obras.",
      },
      {
        title: "Portfólio",
        text: "Área para mostrar obras, projetos, antes e depois, fotos profissionais e contexto de cada entrega.",
      },
      {
        title: "Orçamento",
        text: "Chamadas claras para o cliente solicitar orçamento pelo WhatsApp ou formulário.",
      },
      {
        title: "Confiança técnica",
        text: "Espaço para diferenciais, experiência, métodos de trabalho e critérios de qualidade.",
      },
      {
        title: "Região de atuação",
        text: "Estrutura para destacar cidades, bairros ou regiões atendidas.",
      },
      {
        title: "Campanhas",
        text: "Página preparada para receber tráfego de Google Ads e Meta Ads.",
      },
    ],
    ctaTitle: "Sua empresa precisa transmitir confiança antes da primeira visita.",
    ctaText:
      "A Binah IT pode criar uma página profissional para apresentar sua empresa, seus serviços e seus canais de orçamento com mais clareza.",
    ctaButton: "Solicitar análise do projeto",
    faq: [
      {
        question: "O site pode mostrar obras e projetos?",
        answer:
          "Sim. A página pode incluir portfólio, imagens, contexto de obras e diferenciais de cada entrega.",
      },
      {
        question: "Serve para engenheiro autônomo?",
        answer:
          "Serve. A estrutura pode apresentar serviços, formação, experiência e canais de orçamento.",
      },
      {
        question: "Serve para construtora pequena?",
        answer:
          "Sim. Um site claro ajuda a organizar serviços, regiões atendidas e credibilidade comercial.",
      },
      {
        question: "A página pode gerar pedidos de orçamento?",
        answer:
          "Sim. CTAs, WhatsApp e formulário podem ser posicionados para facilitar o pedido de orçamento.",
      },
      {
        question: "Pode ser usada com anúncios no Google?",
        answer:
          "Pode. A página pode receber tráfego pago e apresentar a oferta com foco em contato comercial.",
      },
    ],
  },
} as const;
