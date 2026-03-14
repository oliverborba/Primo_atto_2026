import { trackWhatsAppClick, trackPhoneClick } from '../utils/analytics';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const handleWhatsAppClick = () => {
    trackWhatsAppClick('footer');
  };

  const handlePhoneClick = () => {
    trackPhoneClick('footer');
  };

  return (
    <footer className="container mx-auto px-6 py-12 border-t border-gray-200 bg-white/80">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-3 mb-4">
          {/* <img
            src="components/logo.png"
            alt="Primo Atto Terapias"
            className="w-10 h-10 rounded-full object-cover border border-gray-200 shadow-sm"
            loading="lazy"
          /> */}
          <div>
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Primo Atto</span>
            <p className="text-sm text-gray-600 font-semibold tracking-wide">TERAPIAS</p>
          </div>
        </div>
        <p className="text-gray-500 mb-6">Transformando vidas através de intervenções baseadas em evidência</p>

        <div className="grid md:grid-cols-3 gap-6 mb-6 max-w-3xl mx-auto">
          <div className="text-center">
            <a
              href="https://wa.me/5521994021137"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors"
            >
              📱 WhatsApp: (21) 99402-1137
            </a>
            <br />
            <a
              href="tel:+5521994021137"
              onClick={handlePhoneClick}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors mt-2"
            >
              📞 Ligar agora
            </a>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-1">📍 Endereço:</p>
            <p className="text-sm text-gray-600">Rua Barata Ribeiro, 774 - Sl. 409 e 410</p>
            <p className="text-sm text-gray-600">Copacabana - Rio de Janeiro</p>
          </div>

          <div className="text-center">
            <p className="font-semibold text-gray-700 mb-1">💳 Atendimento:</p>
            <p className="text-sm text-gray-600">Atendimento particular</p>
            <p className="text-sm text-gray-500 italic">Não trabalhamos com planos de saúde</p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            Desenvolvido por
            <a
              href="https://www.linkedin.com/in/lucas-oliveira-de-borba-65897a363/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 underline transition-colors"
            >
              Lucas Borba
            </a>
            •
            <a
              href="https://wa.me/5554991954036"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-600 transition-colors"
            >
              (54) 99195-4036
            </a>
          </p>
        </div>

        <p className="text-sm text-gray-400 mt-4">© {currentYear} Primo Atto Terapias. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};
