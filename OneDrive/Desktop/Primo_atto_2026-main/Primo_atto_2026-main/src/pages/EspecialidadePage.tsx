import { useEffect } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { usePageTracking } from '../hooks/usePageTracking';
import { trackEspecialidadeClick } from '../utils/analytics';
import { especialidades } from '../data/especialidades';
import { especialidadesContent } from '../data/especialidadesContent';

interface EspecialidadePageProps {
  id: string;
  onBack: () => void;
}

export const EspecialidadePage = ({ id, onBack }: EspecialidadePageProps) => {
  const especialidade = especialidades.find(e => e.id === id);
  const content = especialidadesContent[id as keyof typeof especialidadesContent];
  
  const pageTitle = especialidade 
    ? `${especialidade.title} - Primo Atto Terapias`
    : 'Especialidade - Primo Atto Terapias';

  // 1. O hook já faz o rastreio (Scroll/Tempo) e retorna a função de conversão
  const { trackWhatsAppClick } = usePageTracking(`/especialidade/${id}`, pageTitle);

  // 2. Rastreio analítico de visualização
  useEffect(() => {
    if (especialidade) {
      trackEspecialidadeClick(especialidade.title, true);
    }
  }, [especialidade]);

  if (!content) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 py-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Voltar para página inicial
        </button>

        <div className="bg-white rounded-3xl p-8 shadow-xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{content.title}</h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">{content.description}</p>

          {content.sections.map((section, index) => (
            <div key={index} className="mb-8">
              <h2 className="text-2xl font-bold text-green-700 mb-4">{section.title}</h2>
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          {/* 3. BOTÃO DE CONVERSÃO AJUSTADO */}
          <div className="mt-10 pt-8 border-t border-gray-200">
            <button
              onClick={trackWhatsAppClick} // DISPARA A CONVERSÃO E ABRE O WHATSAPP
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all transform hover:scale-105 cursor-pointer"
            >
              Agendar Consulta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};