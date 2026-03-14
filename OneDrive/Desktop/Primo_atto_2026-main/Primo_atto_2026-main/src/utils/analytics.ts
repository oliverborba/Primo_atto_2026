// Google Ads & Analytics Tracking para Primo Atto Terapias
// Sistema completo de rastreamento de conversões e engajamento

// Tipos de conversões
export type ConversionType = 
  | 'agenda_whatsapp'
  | 'agenda_telefone'
  | 'contato_whatsapp'
  | 'contato_telefone'
  | 'view_especialidade'
  | 'engagement_scroll'
  | 'engagement_time'
  | 'lead_qualified';

// Interface para dados de conversão
interface ConversionData {
  type: ConversionType;
  value?: number;
  currency?: string;
  label?: string;
  metadata?: Record<string, any>;
}

// Função principal de rastreamento de conversão
export const trackConversion = (data: ConversionData) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

    // Definir valor padrão baseado no tipo de conversão
    const conversionValue = data.value || getConversionValue(data.type);

    // Google Ads conversion tracking (AW-16570621298)
    if (typeof w.gtag === 'function') {
      // Conversão principal do Google Ads
      w.gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'send_to': 'AW-16570621298/kEn_CNLa6_sYEM-A9dop',
        'value': conversionValue,
        'currency': data.currency || 'BRL',
        'transaction_id': `${Date.now()}_${data.type}`
      });

      // Evento customizado detalhado
      w.gtag('event', data.type, {
        event_category: 'conversion',
        event_label: data.label || data.type,
        event_value: conversionValue,
        non_interaction: false,
        ...data.metadata
      });

      // Enhanced conversion tracking
      w.gtag('event', 'generate_lead', {
        event_category: 'conversion',
        event_label: data.type,
        value: conversionValue,
        currency: 'BRL'
      });
    }

    // Google Tag Manager dataLayer
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ 
        event: 'conversion',
        conversion_type: data.type,
        conversion_value: conversionValue,
        conversion_currency: data.currency || 'BRL',
        conversion_label: data.label,
        timestamp: new Date().toISOString(),
        ...data.metadata
      });
    }

    // Log para debug (apenas em desenvolvimento)
    if (window.location.hostname === 'localhost') {
      console.log('🎯 Conversão rastreada:', data);
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Definir valores estimados para cada tipo de conversão
function getConversionValue(type: ConversionType): number {
  const conversionValues: Record<ConversionType, number> = {
    'agenda_whatsapp': 150,      // Alta intenção
    'agenda_telefone': 150,       // Alta intenção
    'contato_whatsapp': 100,      // Média intenção
    'contato_telefone': 100,      // Média intenção
    'view_especialidade': 25,     // Interesse
    'engagement_scroll': 10,      // Engajamento
    'engagement_time': 15,        // Engajamento
    'lead_qualified': 200         // Lead qualificado
  };
  return conversionValues[type] || 50;
}

// Rastrear clique no botão de agendamento
export const trackAgendaClick = (source: string = 'header') => {
  trackConversion({
    type: 'agenda_whatsapp',
    label: `agendar_${source}`,
    metadata: {
      button_location: source,
      page_url: window.location.href,
      page_title: document.title
    }
  });
  addUserAction(`agenda_click_${source}`);
};

// Rastrear visualização de especialidade (conversão de interesse)
export const trackEspecialidadeClick = (especialidade: string, fromPage: boolean = false) => {
  trackConversion({
    type: 'view_especialidade',
    label: especialidade.toLowerCase().replace(/\s+/g, '_'),
    metadata: {
      especialidade_nome: especialidade,
      view_type: fromPage ? 'page_detail' : 'card_click',
      page_url: window.location.href
    }
  });

  // Enhanced ecommerce - view item
  try {
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'view_item', {
        items: [{
          item_id: especialidade.toLowerCase().replace(/\s+/g, '_'),
          item_name: especialidade,
          item_category: 'Especialidade',
          price: 150
        }]
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
  
  addUserAction(`view_especialidade_${especialidade}`);
};

// Rastrear clique em membro da equipe
export const trackEquipeClick = (membro: string, especialidade: string) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'view_item', {
        event_category: 'equipe',
        event_label: membro,
        event_value: 1,
        item_name: membro,
        item_category: especialidade
      });
    }

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ 
        event: 'view_equipe_member',
        membro: membro,
        especialidade: especialidade,
        timestamp: new Date().toISOString()
      });
    }
    
    addUserAction(`view_equipe_${membro}`);
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear profundidade de scroll (conversão de engajamento)
export const trackScrollDepth = (depth: number) => {
  // Apenas rastrear marcos importantes (25%, 50%, 75%, 90%, 100%)
  const milestones = [25, 50, 75, 90, 100];
  if (!milestones.includes(depth)) return;

  trackConversion({
    type: 'engagement_scroll',
    value: depth / 10, // Valor proporcional ao scroll
    label: `scroll_${depth}`,
    metadata: {
      scroll_depth: depth,
      page_url: window.location.href,
      page_title: document.title
    }
  });
};

// Rastrear tempo significativo na página (conversão de engajamento)
export const trackTimeOnPage = (page: string, timeInSeconds: number) => {
  // Apenas rastrear tempos significativos (30s, 60s, 120s, 180s)
  const milestones = [30, 60, 120, 180];
  if (!milestones.includes(timeInSeconds)) return;

  trackConversion({
    type: 'engagement_time',
    value: timeInSeconds / 10, // Valor proporcional ao tempo
    label: `time_${timeInSeconds}s`,
    metadata: {
      time_on_page: timeInSeconds,
      page_name: page,
      page_url: window.location.href
    }
  });
};

// Rastrear clique em WhatsApp (conversão de contato)
export const trackWhatsAppClick = (source: string = 'cta', message?: string) => {
  trackConversion({
    type: 'contato_whatsapp',
    label: `whatsapp_${source}`,
    metadata: {
      button_location: source,
      message_type: message ? 'custom' : 'default',
      page_url: window.location.href,
      page_title: document.title
    }
  });
  addUserAction(`whatsapp_click_${source}`);
};

// Rastrear clique em telefone
export const trackPhoneClick = (source: string = 'footer') => {
  trackConversion({
    type: 'contato_telefone',
    label: `telefone_${source}`,
    metadata: {
      button_location: source,
      page_url: window.location.href
    }
  });
  addUserAction(`phone_click_${source}`);
};

// Rastrear lead qualificado (usuário que demonstrou alto interesse)
export const trackQualifiedLead = (actions: string[]) => {
  trackConversion({
    type: 'lead_qualified',
    value: 200,
    label: 'lead_qualificado',
    metadata: {
      qualifying_actions: actions,
      actions_count: actions.length,
      page_url: window.location.href
    }
  });
};

// Sistema de rastreamento de lead qualificado
let userActions: string[] = [];

export const addUserAction = (action: string) => {
  userActions.push(action);
  
  // Se usuário realizou 3+ ações, considerar como lead qualificado
  if (userActions.length >= 3 && !userActions.includes('lead_qualified_triggered')) {
    userActions.push('lead_qualified_triggered');
    trackQualifiedLead(userActions);
  }
};

// Rastrear página visualizada
export const trackPageView = (pagePath: string, pageTitle: string) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'page_view', {
        page_path: pagePath,
        page_title: pageTitle,
        page_location: window.location.href
      });
    }

    addUserAction(`page_view_${pagePath}`);
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};
