import { Activity, MessageCircle, Brain } from 'lucide-react';

export const equipe = [
  {
    nome: "Laísa Borba",
    cargo: "Terapeuta Ocupacional",
    icon: Activity,
    gradient: "from-blue-500 to-purple-600",
    textColor: "text-blue-600",
    secoes: [
      {
        titulo: "Especializações:",
        bgColor: "bg-blue-50",
        items: [
          "Modelo Denver (ESDM) - CBI of Miami",
          "Integração Sensorial de Ayres (ASI®)",
          "Conceito Bobath",
          "Especialização em Desenvolvimento Infantil"
        ]
      },
      {
        titulo: "Áreas de Expertise:",
        bgColor: "bg-purple-50",
        items: [
          "Transtorno do Espectro Autista",
          "Integração Sensorial",
          "Desenvolvimento Neuromotor",
          "Intervenção Precoce (0-6 anos)"
        ]
      }
    ]
  },
  {
    nome: "Guilherme Gonçalves",
    cargo: "Fonoaudiólogo",
    icon: MessageCircle,
    gradient: "from-cyan-500 to-blue-500",
    textColor: "text-cyan-600",
    secoes: [
      {
        titulo: "Formação Acadêmica:",
        bgColor: "bg-cyan-50",
        items: [
          "Graduação em Fonoaudiologia - UFPE (2022)",
          "Especialização em ABA - UFenda (2024)",
          "Neurociências Aplicadas - USP (cursando)"
        ]
      },
      {
        titulo: "Áreas de Expertise:",
        bgColor: "bg-blue-50",
        items: [
          "Linguagem e Comunicação",
          "Transtornos do Neurodesenvolvimento",
          "Intervenção Precoce",
          "Análise do Comportamento Aplicada"
        ]
      }
    ]
  },
  {
    nome: "Rafael Marrero Brignol",
    cargo: "Psicólogo Clínico | Musicoterapeuta",
    icon: Brain,
    gradient: "from-green-500 to-blue-500",
    textColor: "text-green-600",
    registro: "CRP 05/67479 | AMT-RJ 649/1",
    secoes: [
      {
        titulo: "Formação Acadêmica:",
        bgColor: "bg-green-50",
        items: [
          "Mestrado em Educação - UFPEL",
          "Especialização em TCC - IESLA",
          "Musicoterapia - CBM-RJ",
          "Desenvolvimento Infantil Especializado"
        ]
      },
      {
        titulo: "Áreas de Expertise:",
        bgColor: "bg-blue-50",
        items: [
          "Psicoterapia Infantil",
          "Musicoterapia Neurológica",
          "Regulação Emocional",
          "Orientação Familiar"
        ]
      }
    ]
  }
];
