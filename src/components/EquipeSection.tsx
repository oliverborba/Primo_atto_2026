import { equipe } from '../data/equipe';

export const EquipeSection = () => {
  return (
    <section id="equipe" className="container mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossa Equipe Especializada</h2>
        <p className="text-xl text-gray-600">Profissionais dedicados com formação e experiência</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {equipe.map((membro, index) => {
          const Icon = membro.icon;
          return (
            <div key={index} className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className={`w-24 h-24 bg-gradient-to-r ${membro.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{membro.nome}</h3>
                <p className={`text-lg ${membro.textColor} font-semibold`}>{membro.cargo}</p>
                {membro.registro && (
                  <p className="text-sm text-gray-500 mt-1">{membro.registro}</p>
                )}
              </div>

              <div className="space-y-4">
                {membro.secoes.map((secao, idx) => (
                  <div key={idx} className={`${secao.bgColor} rounded-xl p-4`}>
                    <h4 className="font-semibold text-gray-800 mb-2">{secao.titulo}</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {secao.items.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
