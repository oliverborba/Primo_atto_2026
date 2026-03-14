import { especialidades } from '../data/especialidades';

interface EspecialidadesSectionProps {
  onSelectEspecialidade: (id: string) => void;
}

export const EspecialidadesSection = ({ onSelectEspecialidade }: EspecialidadesSectionProps) => {
  return (
    <section id="especialidades" className="container mx-auto px-6 py-20 bg-white/50 rounded-3xl my-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossas Especialidades</h2>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Atendimento multidisciplinar especializado em desenvolvimento infantil
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {especialidades.map((esp) => {
          const Icon = esp.icon;
          return (
            <div
              key={esp.id}
              onClick={() => esp.hasDetailPage && onSelectEspecialidade(esp.id)}
              className={`bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${esp.hasDetailPage ? 'cursor-pointer' : ''}`}
            >
              <div className={`bg-gradient-to-r ${esp.color} p-3 rounded-2xl w-fit mb-4`}>
                <Icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{esp.title}</h3>
              <p className="text-gray-600 mb-4">{esp.description}</p>
              {esp.hasDetailPage && (
                <button className="text-blue-600 font-semibold hover:text-blue-700">
                  Saiba mais →
                </button>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
