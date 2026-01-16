import { Award, Users, Calendar, Heart, ThumbsUp, Star } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section id="inicio" className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            ✨ Equipe especializada com mais de 10 anos de experiência
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
            Cuidando do
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Desenvolvimento</span> de Cada Criança
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Equipe multidisciplinar especializada em desenvolvimento infantil e necessidades especiais.
            Intervenções personalizadas baseadas em evidências científicas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#equipe" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg text-center">
              Conhecer a Equipe
            </a>
            <a href="#especialidades" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all text-center">
              Ver Especialidades
            </a>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center">
              <Award className="w-6 h-6 mr-2 text-yellow-500" />
              Nossos Resultados
            </h3>
            <p className="text-gray-600">Impacto real na vida das famílias</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-1">100+</div>
              <p className="text-gray-600 text-sm">Pacientes Atendidos</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-purple-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-purple-600 mb-1">10+</div>
              <p className="text-gray-600 text-sm">Anos de Experiência</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-green-500 to-green-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-green-600 mb-1">70+</div>
              <p className="text-gray-600 text-sm">Famílias Beneficiadas</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-yellow-500 to-orange-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <ThumbsUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-orange-600 mb-1">96%</div>
              <p className="text-gray-600 text-sm">Satisfação</p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center justify-center space-x-2">
              <div className="flex space-x-1">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600 ml-2">5.0/5 - Google</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
