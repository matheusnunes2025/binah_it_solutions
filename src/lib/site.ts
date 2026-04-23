export const contact = {
  phoneDisplay: "(62) 99116-6071",
  whatsappNumber: "5562991166071",
  email: "binahitsolutions@gmail.com",
  instagramUrl: "https://www.instagram.com/binah_it_solutions/",
  instagramHandle: "@binah_it_solutions",
} as const;

export const defaultWhatsappMessage =
  "Ola, vim pelo site da Binah IT e quero entender como posso atrair mais clientes com site, Google, Google Ads e Meta Ads.";

export function whatsappLink(message = defaultWhatsappMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/servicos", label: "Servicos" },
  { href: "/contato", label: "Contato" },
] as const;

export const heroVisual = {
  title: "Sistema digital para transformar busca em contato comercial",
  description:
    "Imagem criada com IA para representar uma operacao mais completa: site profissional, Google, campanhas e um caminho claro para o WhatsApp.",
  image: "/images/hero-acquisition-system.png",
  details: [
    "Cenario premium com site, dispositivos e dados trabalhando juntos.",
    "Tom visual mais serio e alinhado com o novo grafite e laranja do site.",
    "Mostra que o digital certo ajuda a captar contato, nao apenas a ficar bonito.",
  ],
} as const;

export const servicesVisual = {
  title: "Diagnostico visual de presenca digital",
  description:
    "Imagem criada com IA para transmitir consultoria, analise e direcionamento: site, Google e anuncios apontando para a mesma meta de captacao.",
  image: "/images/ai-services-consulting.png",
  details: [
    "Mostra analise estrategica, dispositivos e presenca local.",
    "Combina o tom corporativo com tecnologia sem parecer generico.",
    "Apoia a explicacao dos servicos e da jornada de captacao.",
  ],
} as const;

export const categoryExamples = [
  {
    title: "Empresas e negocios locais",
    description:
      "Uma presenca digital com aparencia profissional, CTA claro e estrutura pensada para gerar conversas.",
    image: "/images/site-empresarios.png",
    details: [
      "Banner com foco em credibilidade e contato rapido.",
      "Comunicacao voltada para empresarios, MEIs e negocios locais.",
      "Estrutura visual para destacar servico, prova visual e WhatsApp.",
    ],
  },
  {
    title: "Engenharia",
    description:
      "Sites que valorizam projetos, credibilidade tecnica e pedidos de orcamento com navegacao objetiva.",
    image: "/images/site-engenheiros.png",
    details: [
      "Visual tecnico para reforcar seguranca e profissionalismo.",
      "Espaco para servicos, obras, portfolio e solicitacao de orcamento.",
      "Ideal para apresentar autoridade sem depender so de indicacao.",
    ],
  },
  {
    title: "Nutricionistas",
    description:
      "Paginas elegantes para apresentar atendimento, especialidades e facilitar o agendamento pelo WhatsApp.",
    image: "/images/site-nutricionista.png",
    details: [
      "Tom acolhedor sem perder profissionalismo.",
      "Secoes para abordagens, consulta, beneficios e agendamento.",
      "CTA pensado para transformar visita em conversa.",
    ],
  },
  {
    title: "Arquitetura",
    description:
      "Portfolio visual com alto padrao para destacar projetos e atrair clientes que procuram confianca.",
    image: "/images/site-arquitetos.png",
    details: [
      "Design premium para valorizar imagem, projeto e estetica.",
      "Composicao orientada para portfolio e pedidos de orcamento.",
      "Boa leitura em telas grandes e celulares.",
    ],
  },
  {
    title: "Advocacia",
    description:
      "Presenca sobria, responsiva e estrategica para fortalecer autoridade e facilitar o primeiro contato.",
    image: "/images/site-advocacia.png",
    details: [
      "Linguagem visual discreta, institucional e confiavel.",
      "Caminho claro para areas de atuacao e contato.",
      "Sem exageros: foco em autoridade, clareza e seguranca.",
    ],
  },
] as const;

export const projects = [
  {
    title: "Sollie Professional",
    description:
      "Projeto desenvolvido para apresentar a marca com clareza, navegacao direta e presenca digital mais profissional.",
    href: "https://www.sollieprofessional.com.br/",
    image: "/images/projeto-sollie.png",
    details: [
      "Pagina publicada com navegacao entre produtos e informacoes da marca.",
      "Card com captura real do projeto para consulta em tela cheia.",
      "Link externo direto para visualizar o site em producao.",
    ],
  },
  {
    title: "Strauss Impermeabilizacao",
    description:
      "Projeto voltado para comunicar servicos, reforcar confianca e direcionar interessados para contato comercial.",
    href: "https://straussimpermeabilizacao.com.br/",
    image: "/images/projeto-strauss.png",
    details: [
      "Projeto publicado para servico tecnico com CTA comercial.",
      "Captura real do site em producao, exibida no overlay.",
      "Comunicacao voltada para orcamento e confianca no servico.",
    ],
  },
] as const;

export const services = [
  {
    slug: "site",
    title: "Criacao de sites profissionais",
    description:
      "Sites institucionais e comerciais com visual premium, leitura clara e estrutura para apresentar melhor sua empresa.",
    image: "/images/service-site-pro.png",
    details: [
      "Layout responsivo para celular, tablet e computador.",
      "Hierarquia visual pensada para explicar servico, valor e proximo passo.",
      "Botoes e fluxo de contato orientados para WhatsApp ou formulario.",
    ],
  },
  {
    slug: "landing",
    title: "Landing pages e captacao",
    description:
      "Paginas com oferta clara, copy comercial e caminho direto para transformar visita em pedido de orcamento.",
    image: "/images/service-landing-conversion.png",
    details: [
      "Estrutura pensada para reduzir duvida e aumentar acao.",
      "Fluxo entre pagina, proposta e conversa comercial.",
      "Ideal para campanhas, servicos especificos e ofertas locais.",
    ],
  },
  {
    slug: "google-business",
    title: "Google Meu Negocio",
    description:
      "Ajustes para sua empresa aparecer com mais clareza quando o cliente pesquisa servicos na regiao.",
    image: "/images/service-google-business.png",
    details: [
      "Presenca local mais clara para quem pesquisa no Google.",
      "Organizacao das informacoes mais importantes do negocio.",
      "Integracao entre busca local, reputacao e contato rapido.",
    ],
  },
  {
    slug: "search-structure",
    title: "Estrutura para buscas no Google",
    description:
      "Arquitetura de paginas, secoes e argumentos para responder o que o cliente compara antes de chamar.",
    image: "/images/service-search-structure.png",
    details: [
      "Conteudo pensado para a duvida real do cliente.",
      "Secoes mais estrategicas para fortalecer confianca e descoberta.",
      "Base melhor para busca organica e campanhas pagas.",
    ],
  },
  {
    slug: "google-ads",
    title: "Campanhas no Google Ads",
    description:
      "Campanhas para colocar sua empresa diante de quem ja esta procurando pelo servico no Google.",
    image: "/images/service-google-ads.png",
    details: [
      "Campanhas orientadas para busca com intencao comercial.",
      "Direcao de investimento para gerar cliques mais qualificados.",
      "Integracao entre anuncio, landing page e WhatsApp.",
    ],
  },
  {
    slug: "meta-ads",
    title: "Campanhas no Meta Ads",
    description:
      "Anuncios para Instagram e Facebook com criativos, ofertas e segmentacao voltados para geracao de novos contatos.",
    image: "/images/service-meta-ads.png",
    details: [
      "Campanhas para gerar demanda e reconhecimento local.",
      "Criativos e mensagem comercial alinhados a oferta.",
      "Captacao de leads e conversas em WhatsApp ou formulario.",
    ],
  },
] as const;

export type ServiceSlug = (typeof services)[number]["slug"];

export const processSteps = [
  "Entendimento do negocio, publico e servico principal.",
  "Estrutura de paginas e landing pages com mensagem comercial clara.",
  "Design responsivo com imagens, CTAs e hierarquia visual.",
  "Publicacao, orientacao e ajustes para Google e campanhas de anuncios.",
] as const;
