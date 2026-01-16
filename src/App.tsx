import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { EspecialidadePage } from './pages/EspecialidadePage';
import { especialidadesContent } from './data/especialidadesContent';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const baseTitle = 'Primo Atto Terapias | Desenvolvimento Infantil e Terapias Especializadas';
    const homeDescription = 'Primo Atto Terapias oferece equipe multidisciplinar em desenvolvimento infantil, TEA, fonoaudiologia, psicologia, musicoterapia e terapia ocupacional no Rio de Janeiro.';

    if (currentPage === 'home') {
      document.title = baseTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      metaDesc?.setAttribute('content', homeDescription);
      return;
    }

    const content = especialidadesContent[currentPage as keyof typeof especialidadesContent];
    const detailTitle = content ? `${content.title} | Primo Atto Terapias` : baseTitle;
    const detailDescription = content?.description ?? homeDescription;

    document.title = detailTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    metaDesc?.setAttribute('content', detailDescription);
  }, [currentPage]);

  if (currentPage !== 'home') {
    return (
      <EspecialidadePage
        id={currentPage}
        onBack={() => setCurrentPage('home')}
      />
    );
  }

  return (
    <HomePage onSelectEspecialidade={setCurrentPage} />
  );
};

export default App;
