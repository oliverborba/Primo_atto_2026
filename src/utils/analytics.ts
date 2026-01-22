// Google Ads & Analytics Tracking para Primo Atto Terapias
// Rastreia eventos de conversão e engagement

export const trackAgendaClick = () => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

    // Google Ads conversion tracking (AW-16570621298)
    if (typeof w.gtag === 'function') {
      w.gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'send_to': 'AW-16570621298/kEn_CNLa6_sYEM-A9dop'
      });

      // Evento de agenda
      w.gtag('event', 'agenda_click', {
        event_category: 'engagement',
        event_label: 'botao_agendar',
        event_value: 1,
        custom_map: {
          dimension1: 'especialidade_solicitada'
        }
      });
    }

    // Fallback: dataLayer push (Google Tag Manager)
    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ 
        event: 'agenda_click',
        'event_category': 'engagement',
        'event_label': 'botao_agendar'
      });
    }
  } catch (err) {
    // Fail silently to not break navigation
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear clique em especialidade
export const trackEspecialidadeClick = (especialidade: string) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'view_item', {
        event_category: 'engagement',
        event_label: especialidade,
        event_value: 1
      });
    }

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ 
        event: 'view_especialidade',
        especialidade: especialidade
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear clique em membro da equipe
export const trackEquipeClick = (membro: string) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'view_item', {
        event_category: 'equipe',
        event_label: membro,
        event_value: 1
      });
    }

    if (Array.isArray(w.dataLayer)) {
      w.dataLayer.push({ 
        event: 'view_equipe_member',
        membro: membro
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear scroll de página
export const trackScrollDepth = (depth: number) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'scroll', {
        event_category: 'engagement',
        scroll_depth: depth
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear tempo na página
export const trackTimeOnPage = (page: string, timeInSeconds: number) => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'page_view', {
        event_category: 'engagement',
        event_label: page,
        time_on_page: timeInSeconds
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};

// Rastrear clique em WhatsApp
export const trackWhatsAppClick = () => {
  try {
    if (typeof window === 'undefined') return;
    const w = window as typeof window & { gtag?: (...args: unknown[]) => void };

    if (typeof w.gtag === 'function') {
      w.gtag('event', 'conversion', {
        'allow_custom_scripts': true,
        'send_to': 'AW-16570621298/kEn_CNLa6_sYEM-A9dop'
      });

      w.gtag('event', 'whatsapp_click', {
        event_category: 'engagement',
        event_label: 'botao_whatsapp',
        event_value: 1
      });
    }
  } catch (err) {
    console.debug('Analytics tracking error:', err);
  }
};
