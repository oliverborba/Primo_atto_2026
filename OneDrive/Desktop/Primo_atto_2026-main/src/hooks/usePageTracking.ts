import { useEffect } from 'react';
import { trackPageView } from '../utils/analytics';

export const usePageTracking = (pagePath: string, pageTitle: string) => {
  
  const trackWhatsAppClick = () => {
    // 1. Dispara a conversão oficial para o Google Ads
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'conversion', {
        'send_to': 'AW-16570621298/_KfPCLfupogcEPK6vt09', 
      });
      console.log("Conversão enviada: Lead de WhatsApp Primo Atto.");
    }

    // 2. Abre o WhatsApp com o número oficial da clínica
    const phoneNumber = "5521994021137";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta na Primo Atto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  useEffect(() => {
    // Registra a visualização da página para análise de comportamento
    trackPageView(pagePath, pageTitle);
  }, [pagePath, pageTitle]);

  return { trackWhatsAppClick };
};