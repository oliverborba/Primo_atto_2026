import { trackAgendaClick } from '../utils/analytics';

export const Header = () => {
  return (
    <header className="container mx-auto px-6 py-6 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"
            alt="Primo Atto Terapias"
            className="w-12 h-12 rounded-full object-cover border border-gray-200 shadow-sm"
            loading="lazy"
          />
          <div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Primo Atto</span>
            <p className="text-sm text-gray-600 font-semibold tracking-wide">TERAPIAS</p>
          </div>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#inicio" className="text-gray-700 hover:text-blue-600 transition-colors">Início</a>
          <a href="#especialidades" className="text-gray-700 hover:text-blue-600 transition-colors">Especialidades</a>
          <a href="#equipe" className="text-gray-700 hover:text-blue-600 transition-colors">Equipe</a>
          <a href="#metodologias" className="text-gray-700 hover:text-blue-600 transition-colors">Metodologias</a>
        </div>
        <a
          href="https://wa.me/5521994021137?text=Olá! Gostaria de agendar uma consulta."
          target="_blank"
          rel="noopener noreferrer"
          onClick={trackAgendaClick}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all transform hover:scale-105"
        >
          Agendar Consulta
        </a>
      </nav>
    </header>
  );
};
