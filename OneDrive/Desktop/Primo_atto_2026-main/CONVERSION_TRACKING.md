# Sistema de Rastreamento de Conversões - Primo Atto Terapias

## 📊 Visão Geral

Sistema completo de rastreamento de conversões implementado para monitorar não apenas cliques, mas ações reais de valor (conversões) dos usuários no site.

## 🎯 Tipos de Conversões Rastreadas

### 1. **Conversões de Alta Intenção (Valor: R$ 150)**
- **Agendamento via WhatsApp** (`agenda_whatsapp`)
  - Clique no botão "Agendar Consulta" (Header)
  - Clique em "Falar com a Equipe" (CTA Section)
  
- **Agendamento via Telefone** (`agenda_telefone`)
  - Clique no número de telefone para ligar

### 2. **Conversões de Contato (Valor: R$ 100)**
- **Contato via WhatsApp** (`contato_whatsapp`)
  - Clique no WhatsApp no footer
  - Qualquer outro link de WhatsApp
  
- **Contato via Telefone** (`contato_telefone`)
  - Clique no link de telefone no footer

### 3. **Conversões de Interesse (Valor: R$ 25)**
- **Visualização de Especialidade** (`view_especialidade`)
  - Clique em card de especialidade
  - Visualização de página de especialidade detalhada

### 4. **Conversões de Engajamento (Valor: R$ 10-15)**
- **Scroll Depth** (`engagement_scroll`)
  - 25% da página
  - 50% da página
  - 75% da página
  - 90% da página
  - 100% da página

- **Tempo na Página** (`engagement_time`)
  - 30 segundos
  - 60 segundos (1 minuto)
  - 120 segundos (2 minutos)
  - 180 segundos (3 minutos)

### 5. **Lead Qualificado (Valor: R$ 200)**
- **Lead Qualificado** (`lead_qualified`)
  - Disparado automaticamente quando usuário realiza 3+ ações
  - Exemplos de ações que qualificam:
    - Visualizar especialidade
    - Clicar em membro da equipe
    - Rolar mais de 50% da página
    - Passar mais de 60s na página
    - Clicar em qualquer botão de contato

## 📈 Integração com Google Ads

Todas as conversões são enviadas para:
- **ID de Conversão**: `AW-16570621298/kEn_CNLa6_sYEM-A9dop`
- **Formato**: Enhanced Conversion Tracking
- **Moeda**: BRL (Real Brasileiro)
- **Transaction ID**: Único para cada conversão

### Eventos Google Ads Disparados:
1. `conversion` - Conversão principal do Google Ads
2. `generate_lead` - Enhanced conversion tracking
3. Evento customizado com nome específico (ex: `agenda_whatsapp`)

## 📊 Integração com Google Analytics

Eventos enviados via `dataLayer` para Google Tag Manager:
```javascript
{
  event: 'conversion',
  conversion_type: 'agenda_whatsapp',
  conversion_value: 150,
  conversion_currency: 'BRL',
  conversion_label: 'agendar_header',
  timestamp: '2026-02-10T...',
  // metadata adicional
}
```

## 🔧 Como Usar

### Rastrear Conversão Manualmente:
```typescript
import { trackConversion } from '../utils/analytics';

trackConversion({
  type: 'agenda_whatsapp',
  label: 'custom_location',
  value: 150, // opcional, usa valor padrão se omitido
  metadata: {
    custom_data: 'value'
  }
});
```

### Usar Funções de Conveniência:
```typescript
import { 
  trackAgendaClick, 
  trackWhatsAppClick,
  trackPhoneClick,
  trackEspecialidadeClick 
} from '../utils/analytics';

// Rastrear agendamento
trackAgendaClick('header'); // source: header, footer, cta, etc

// Rastrear WhatsApp
trackWhatsAppClick('cta_section', 'Mensagem customizada');

// Rastrear telefone
trackPhoneClick('footer');

// Rastrear especialidade
trackEspecialidadeClick('Terapia Ocupacional', true); // true = página detalhada
```

## 🎣 Hook Automático de Página

O hook `usePageTracking` rastreia automaticamente:
- Visualização de página
- Tempo na página (30s, 60s, 120s, 180s)
- Scroll depth (25%, 50%, 75%, 90%, 100%)

```typescript
import { usePageTracking } from '../hooks/usePageTracking';

export const MyPage = () => {
  usePageTracking('/my-page', 'My Page Title');
  
  return <div>...</div>;
};
```

## 📱 Pontos de Conversão no Site

### Header
- ✅ Botão "Agendar Consulta" → `agenda_whatsapp` (header)

### Hero Section
- ✅ Rastreamento automático de scroll e tempo

### Especialidades Section
- ✅ Clique em card → `view_especialidade`

### Equipe Section
- ✅ Clique em membro → Tracking de engajamento

### CTA Section
- ✅ Botão "Falar com a Equipe" → `contato_whatsapp` (cta_section)

### Footer
- ✅ Link WhatsApp → `contato_whatsapp` (footer)
- ✅ Link Telefone → `contato_telefone` (footer)

### Página de Especialidade
- ✅ Visualização automática → `view_especialidade` (page_detail)
- ✅ Rastreamento de scroll e tempo

## 🎯 Leads Qualificados

O sistema identifica automaticamente leads qualificados:

**Critérios**:
- Mínimo 3 ações diferentes no site
- Ações rastreadas:
  - `page_view_*`
  - `agenda_click_*`
  - `whatsapp_click_*`
  - `phone_click_*`
  - `view_especialidade_*`
  - `view_equipe_*`

**Quando disparado**:
- Automaticamente após 3ª ação
- Uma única vez por sessão
- Valor: R$ 200

## 📊 Relatórios no Google Ads

### Visualizar Conversões:
1. Google Ads → Campanhas
2. Colunas → Modificar colunas
3. Conversões → Selecionar "Todas as conversões"

### Métricas Disponíveis:
- **Total de Conversões**: Todas as ações rastreadas
- **Valor de Conversão**: Soma dos valores (R$)
- **Taxa de Conversão**: % de sessões que converteram
- **Custo por Conversão**: Quanto foi gasto por conversão

### Segmentar por Tipo:
- Filtrar por `conversion_label` para ver:
  - Agendamentos (header, cta, footer)
  - Contatos (whatsapp, telefone)
  - Especialidades (por nome)
  - Engajamento (scroll, tempo)
  - Leads qualificados

## 🔍 Debug e Testes

### Ambiente de Desenvolvimento:
No localhost, as conversões aparecem no console:
```
🎯 Conversão rastreada: {
  type: 'agenda_whatsapp',
  label: 'agendar_header',
  value: 150,
  ...
}
```

### Verificar no Google Tag Assistant:
1. Instalar extensão do Chrome
2. Navegar no site
3. Verificar eventos disparados
4. Confirmar dados enviados

### Teste em Produção:
1. Realizar ação no site
2. Aguardar 24-48h
3. Verificar em Google Ads → Conversões
4. Conferir valor e label

## 📈 Melhorias Futuras

- [ ] Dashboard customizado de conversões
- [ ] A/B testing de botões de CTA
- [ ] Remarketing baseado em conversões
- [ ] Integração com CRM
- [ ] Alertas de leads qualificados
- [ ] Análise de funil de conversão

## 🎓 Boas Práticas

1. **Nunca remover `transaction_id`**: Garante conversões únicas
2. **Manter valores consistentes**: Facilita análise ROI
3. **Labels descritivos**: Identificar origem da conversão
4. **Metadata rica**: Mais contexto para análise
5. **Testar regularmente**: Garantir tracking funcionando

## 📞 Suporte

Para dúvidas sobre o sistema de conversões:
- Lucas Borba
- WhatsApp: (54) 99195-4036
- LinkedIn: lucas-oliveira-de-borba-65897a363

---

**Última atualização**: 10 de Fevereiro de 2026
**Versão do Sistema**: 2.0
