import { Star } from 'lucide-react';
import { depoimentos } from '../data/depoimentos';

export const DepoimentosSection = () => {
  return (
    <section className="container mx-auto px-6 py-20 bg-white/50 rounded-3xl my-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">O que dizem nossos pacientes</h2>
        <div className="flex items-center justify-center mt-4">
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map(star => (
              <Star key={star} className="w-6 h-6 text-yellow-400 fill-current" />
            ))}
          </div>
          <span className="text-gray-600 ml-2 font-semibold">5.0 no Google</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {depoimentos.map((dep, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="flex items-start space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map(star => (
                <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
              ))}
            </div>
            <p className="text-gray-700 mb-4 italic">"{dep.texto}"</p>
            <div className="border-t border-gray-100 pt-4">
              <p className="font-semibold text-gray-800">{dep.nome}</p>
              <p className="text-sm text-gray-500">{dep.tempo}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
