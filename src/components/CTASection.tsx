import { Smile } from 'lucide-react';
import { trackAgendaClick } from '../utils/analytics';

export const CTASection = () => {
  return (
    <section className="container mx-auto px-6 py-20">
      <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 rounded-3xl p-12 text-center text-white">
        <Smile className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
        <h2 className="text-4xl font-bold mb-4">Pronto para Começar a Jornada?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Entre em contato e descubra como podemos ajudar no desenvolvimento do seu filho.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/5521994021137?text=Olá! Gostaria de falar com a equipe."
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackAgendaClick}
            className="bg-white text-blue-600 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            Falar com a Equipe
          </a>
        </div>
      </div>
    </section>
  );
};
