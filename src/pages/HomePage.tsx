import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { EspecialidadesSection } from '../components/EspecialidadesSection';
import { EquipeSection } from '../components/EquipeSection';
import { MetodologiasSection } from '../components/MetodologiasSection';
import { DepoimentosSection } from '../components/DepoimentosSection';
import { CTASection } from '../components/CTASection';
import { Footer } from '../components/Footer';

interface HomePageProps {
  onSelectEspecialidade: (id: string) => void;
}

export const HomePage = ({ onSelectEspecialidade }: HomePageProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <Header />
      <HeroSection />
      <EspecialidadesSection onSelectEspecialidade={onSelectEspecialidade} />
      <EquipeSection />
      <MetodologiasSection />
      <DepoimentosSection />
      <CTASection />
      <Footer />
    </div>
  );
};
