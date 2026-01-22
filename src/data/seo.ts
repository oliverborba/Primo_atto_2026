// Configuração SEO centralizada para o site

export const SEO_CONFIG = {
  siteName: 'Primo Atto Terapias',
  siteUrl: 'https://primoattoterapias.com.br',
  siteDescription: 'Equipe multidisciplinar especializada em desenvolvimento infantil, TEA, fonoaudiologia, psicologia, musicoterapia e terapia ocupacional no Rio de Janeiro.',
  
  pages: {
    home: {
      title: 'Primo Atto Terapias - Desenvolvimento Infantil em Rio de Janeiro | TEA, Fonoaudiologia, Terapia Ocupacional',
      description: 'Primo Atto Terapias: Equipe multidisciplinar especializada em TEA, fonoaudiologia, psicologia infantil, musicoterapia e terapia ocupacional em Rio de Janeiro. Atendimento em Copacabana com profissionais qualificados.',
      keywords: 'terapia ocupacional Rio de Janeiro, fonoaudiologia infantil, psicologia infantil, musicoterapia criança, TEA autismo, Transtorno Espectro Autista, desenvolvimento infantil, Copacabana, terapias especializadas, intervenção precoce, integração sensorial',
      path: '/'
    },
    tea: {
      title: 'Transtorno do Espectro Autista (TEA) - Primo Atto Terapias Rio de Janeiro',
      description: 'Atendimento especializado para crianças com TEA/Autismo usando metodologias baseadas em evidências científicas. Intervenção com modelo Denver (ESDM), Bobath e análise comportamental em Copacabana.',
      keywords: 'TEA, autismo, Transtorno Espectro Autista, intervenção autismo, terapia autismo, ESDM Denver, Rio de Janeiro, Copacabana',
      path: '/especialidade/tea'
    },
    terapiaOcupacional: {
      title: 'Terapia Ocupacional Infantil - Primo Atto Terapias',
      description: 'Terapia ocupacional especializada para desenvolvimento de autonomia, coordenação motora, integração sensorial e atividades de vida diária em crianças. Integração Sensorial de Ayres (ASI®) em Rio de Janeiro.',
      keywords: 'terapia ocupacional infantil, integração sensorial, desenvolvimento motor, autonomia infantil, Rio de Janeiro',
      path: '/especialidade/terapia-ocupacional'
    },
    fonoaudiologia: {
      title: 'Fonoaudiologia Infantil - Primo Atto Terapias Rio de Janeiro',
      description: 'Serviços especializados de fonoaudiologia para desenvolvimento da linguagem, comunicação, voz e audição em crianças. Atendimento com profissionais qualificados em Copacabana.',
      keywords: 'fonoaudiologia infantil, terapia da fala, linguagem infantil, desenvolvimento comunicação, Rio de Janeiro',
      path: '/especialidade/fonoaudiologia'
    },
    psicologia: {
      title: 'Psicologia Clínica Infantil - Primo Atto Terapias',
      description: 'Atendimento psicológico especializado para crianças, adolescentes e famílias. Suporte emocional, comportamental e desenvolvimento saudável em Rio de Janeiro.',
      keywords: 'psicologia infantil, psicologia criança, psicologia adolescente, terapia infantil, desenvolvimento emocional',
      path: '/especialidade/psicologia'
    },
    musicoterapia: {
      title: 'Musicoterapia Infantil - Primo Atto Terapias Rio de Janeiro',
      description: 'Terapia musical especializada para desenvolvimento neuropsicológico infantil. Técnicas musicais terapêuticas para autismo, desenvolvimento motor e emocional.',
      keywords: 'musicoterapia infantil, terapia musical, desenvolvimento neuropsicológico, musicoterapia autismo',
      path: '/especialidade/musicoterapia'
    }
  },

  contact: {
    phone: '+55 21 99402-1137',
    whatsapp: 'https://wa.me/5521994021137',
    email: 'contato@primoattoterapias.com.br',
    address: 'Rua Barata Ribeiro, 774 - Salas 409 e 410, Rio de Janeiro, RJ, Brasil',
    coordinates: {
      latitude: -22.9712,
      longitude: -43.1852
    }
  },

  social: {
    instagram: 'https://www.instagram.com/primoatto',
    facebook: 'https://www.facebook.com/primoatto',
    whatsapp: 'https://wa.me/5521994021137'
  },

  businessHours: {
    weekday: {
      open: '09:00',
      close: '18:00'
    },
    saturday: {
      open: '09:00',
      close: '13:00'
    },
    sunday: 'closed'
  },

  // Palavras-chave principais para SEO
  mainKeywords: [
    'terapia ocupacional Rio de Janeiro',
    'fonoaudiologia infantil',
    'psicologia infantil Rio de Janeiro',
    'musicoterapia criança',
    'TEA autismo Rio de Janeiro',
    'Transtorno Espectro Autista',
    'desenvolvimento infantil',
    'Copacabana',
    'terapias especializadas',
    'intervenção precoce',
    'integração sensorial',
    'ESDM Denver',
    'Bobath',
    'ASI Ayres'
  ],

  // Localidades atendidas para geolocalização SEO
  serviceAreas: [
    'Rio de Janeiro',
    'Copacabana',
    'Leme',
    'Ipanema',
    'Leblon',
    'Vidigal',
    'Barra da Tijuca',
    'Zona Sul Rio de Janeiro'
  ]
};
