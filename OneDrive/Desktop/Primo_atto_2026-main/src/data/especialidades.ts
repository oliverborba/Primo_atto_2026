import { Brain, Activity, MessageCircle, Heart, Music } from 'lucide-react';

export const especialidades = [
  {
    id: 'tea',
    icon: Brain,
    title: "Transtorno do Espectro Autista (TEA)",
    description: "Intervenção especializada com metodologias baseadas em evidências científicas",
    color: "from-blue-500 to-purple-600",
    hasDetailPage: true
  },
  {
    id: 'terapia-ocupacional',
    icon: Activity,
    title: "Terapia Ocupacional",
    description: "Desenvolvimento de autonomia, coordenação motora e atividades de vida diária",
    color: "from-green-500 to-blue-500",
    hasDetailPage: true
  },
  {
    id: 'fonoaudiologia',
    icon: MessageCircle,
    title: "Fonoaudiologia",
    description: "Comunicação, voz e desenvolvimento em harmonia para todas as idades",
    color: "from-cyan-500 to-blue-500",
    hasDetailPage: true
  },
  {
    id: 'psicologia',
    icon: Heart,
    title: "Psicologia Clínica",
    description: "Suporte emocional e comportamental para crianças, adolescentes e famílias",
    color: "from-pink-500 to-purple-500",
    hasDetailPage: true
  },
  {
    id: 'musicoterapia',
    icon: Music,
    title: "Musicoterapia",
    description: "Desenvolvimento neuropsicológico através de técnicas musicais terapêuticas",
    color: "from-purple-500 to-indigo-500",
    hasDetailPage: true
  }
];
