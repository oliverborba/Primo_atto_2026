import { useEffect, useRef } from 'react';
import { trackPageView, trackScrollDepth, trackTimeOnPage } from '../utils/analytics';

export const usePageTracking = (pagePath: string, pageTitle: string) => {
  const startTimeRef = useRef<number>(Date.now());
  const scrollMilestonesRef = useRef<Set<number>>(new Set());
  const timeMilestonesRef = useRef<Set<number>>(new Set());

  const trackWhatsAppClick = () => {
    if (typeof (window as any).gtag !== 'undefined') {
      (window as any).gtag('event', 'conversion', {
        // ID Oficial da Primo Atto + O Rótulo que você copiou agora
        'send_to': 'AW-16570621298/COLE_AQUI_O_ROTULO_DE_CONVERSAO', 
      });
      console.log("Conversão enviada: Lead de WhatsApp registrado.");
    }

    // Redirecionamento para o seu número oficial
    const phoneNumber = "5521994021137";
    const message = encodeURIComponent("Olá! Gostaria de agendar uma consulta na Primo Atto.");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  // ... (Lógica de scroll e tempo que já configuramos permanece igual)
  useEffect(() => {
    trackPageView(pagePath, pageTitle);
    // ... resta do useEffect ...
  }, [pagePath, pageTitle]);

  return { trackWhatsAppClick };
};