import { EspecialidadeDetalhes } from '../components/EspecialidadeDetalhes';

interface EspecialidadePageProps {
  id: string;
  onBack: () => void;
}

export const EspecialidadePage = ({ id, onBack }: EspecialidadePageProps) => {
  return <EspecialidadeDetalhes id={id} onBack={onBack} />;
};
