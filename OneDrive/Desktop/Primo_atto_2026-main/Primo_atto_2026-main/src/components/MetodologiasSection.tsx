import { CheckCircle, Baby } from 'lucide-react';
import { metodologias, diagnosticos } from '../data/metodologias';

export const MetodologiasSection = () => {
  return (
    <section id="metodologias" className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Metodologias Baseadas em Evidência
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Utilizamos abordagens terapêuticas reconhecidas internacionalmente.
          </p>
          <div className="grid grid-cols-1 gap-4">
            {metodologias.map((met, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{met}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Condições que Atendemos
          </h3>
          <div className="grid grid-cols-1 gap-4">
            {diagnosticos.map((diag, index) => (
              <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center space-x-3">
                  <Baby className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700 font-medium">{diag}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
