# 📊 RASTREAMENTO DE CONVERSÕES - WhatsApp

## Primo Atto Terapias - Google Ads Conversion Tracking

**Data:** 16 de janeiro de 2026  
**Status:** ✅ Implementado

---

## 🎯 O QUE FOI CONFIGURADO

### Conversão: Clique no WhatsApp

Quando um usuário clica em qualquer botão/link do WhatsApp, o seguinte é rastreado:

```javascript
// Evento capturado
{
  "event": "conversion",
  "send_to": "AW-16570621298/kEn_CNLa6_sYEM-A9dop",
  "event_category": "engagement",
  "event_label": "botao_whatsapp",
  "event_value": 1
}
```

### Locais onde o rastreamento acontece:

✅ **CTASection.tsx** - Botão "Falar com a Equipe" (Hero Section)  
✅ **Footer.tsx** - Link "📱 WhatsApp: (21) 99402-1137"

---

## 🔧 COMO FUNCIONA

### 1. Código do Frontend
```typescript
// Função de rastreamento (src/utils/analytics.ts)
export const trackWhatsAppClick = () => {
  if (typeof window.gtag === 'function') {
    // Registra conversão no Google Ads
    window.gtag('event', 'conversion', {
      'allow_custom_scripts': true,
      'send_to': 'AW-16570621298/kEn_CNLa6_sYEM-A9dop'
    });

    // Registra evento detalhado no Google Analytics
    window.gtag('event', 'whatsapp_click', {
      event_category: 'engagement',
      event_label: 'botao_whatsapp',
      event_value: 1
    });
  }
};
```

### 2. Integração HTML
```html
<!-- No index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-16570621298"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'AW-16570621298');
</script>
```

### 3. Fluxo de Rastreamento
```
Usuário clica no WhatsApp
        ↓
trackWhatsAppClick() executada
        ↓
gtag('event', 'conversion') disparado
        ↓
Enviado para Google Ads (AW-16570621298)
        ↓
Conversão registrada no painel
        ↓
Você vê: "X conversões desta semana"
```

---

## 📈 COMO ACOMPANHAR NO GOOGLE ADS

### Passo 1: Acessar Google Ads
1. Ir para: https://ads.google.com
2. Fazer login com sua conta Google

### Passo 2: Ver Conversões
1. No menu esquerdo → **Conversões**
2. Ver lista de "Ações de conversão"
3. Procurar por: `AW-16570621298/kEn_CNLa6_sYEM-A9dop`

### Passo 3: Acompanhar Dados
```
Campanhas → [Sua campanha]
├── Conversões (coluna)
├── Valor de conversão
├── Taxa de conversão
└── Custo por conversão
```

### Passo 4: Relatório Detalhado
```
Ferramentas → Conversões
├── Data da conversão
├── Valor
├── Dispositivo
├── Localização
└── Fonte de tráfego
```

---

## 📊 VISUALIZAR CONVERSÕES EM TEMPO REAL

### No Google Analytics 4

1. **Acesso rápido:**
   - https://analytics.google.com
   - Real-time → Conversions

2. **Dashboard customizado:**
   ```
   Reports → Engagement
   └── Conversions by Event
       ├── whatsapp_click (nossa métrica)
       ├── agenda_click
       └── view_especialidade
   ```

3. **Dados esperados:**
   ```
   Evento: whatsapp_click
   ├── Contagem: X usuários clicaram
   ├── Taxa conversão: Y%
   ├── Valor: Z (se configurado)
   └── Fonte: Orgânico, Direto, Social, etc.
   ```

---

## 🎯 COMPONENTES ATUALIZADOS

### CTASection.tsx
```typescript
// ANTES
onClick={trackAgendaClick}

// AGORA
onClick={() => trackWhatsAppClick()}
```

**Resultado:** Cliques no CTA agora rastreiam como conversão de WhatsApp

### Footer.tsx
```typescript
// ANTES
Sem rastreamento

// AGORA
onClick={handleWhatsAppClick}
→ trackWhatsAppClick()
```

**Resultado:** Links do footer também rastreiam conversões

---

## ✅ CHECKLIST DE VERIFICAÇÃO

Depois do deploy, verifique:

- [ ] Google Ads ID `AW-16570621298` está ativo
- [ ] Script `gtag.js` carrega corretamente
- [ ] Google Analytics 4 está recebendo dados
- [ ] Real-time mostra visitantes
- [ ] Clique no WhatsApp → evento é registrado
- [ ] Conversão aparece no Google Ads (em 24-48h)

### Como testar:

```bash
# 1. Abrir DevTools (F12)
# 2. Ir em Console
# 3. Clicar no botão WhatsApp
# 4. Verificar em Console:
#    - Não deve haver erros
#    - gtag será chamado
# 5. Aguardar 24-48h para aparecer no Google Ads
```

---

## 📱 ONDE OS BOTÕES ESTÃO

### 1. **CTA Principal (Seção Hero)**
```
Pronto para Começar a Jornada?
[Falar com a Equipe] ← AQUI (rastreia)
```

Localização na página:
- Seção colorida (gradiente azul-roxo)
- Meio da página
- Visível em mobile e desktop

### 2. **Footer (Rodapé)**
```
📱 WhatsApp: (21) 99402-1137 ← AQUI (rastreia)
```

Localização na página:
- Final da página
- Lado esquerdo (em desktop)
- Sempre visível ao rolar

---

## 🔍 MÉTRICAS PARA ACOMPANHAR

### Diárias
- [ ] Número de cliques em WhatsApp
- [ ] Taxa de conversão
- [ ] Valor total de conversões

### Semanais
- [ ] Conversões por fonte de tráfego
- [ ] Conversões por dispositivo
- [ ] Conversões por localização

### Mensais
- [ ] Total de conversões
- [ ] Custo por conversão
- [ ] ROI de campanhas

---

## 💡 DICAS IMPORTANTES

### 1. **Atraso na Exibição**
Google Ads pode levar **24-48 horas** para exibir conversões. Não se preocupe se não aparecer imediatamente.

### 2. **Google Analytics vs Google Ads**
- **Google Analytics:** Mostra em tempo real
- **Google Ads:** Mostra em 24-48h

### 3. **Teste Local**
Para testar em desenvolvimento:
1. Abrir DevTools (F12)
2. Console → Clicar no WhatsApp
3. Verificar se há erro de `gtag`

### 4. **Tracking de Múltiplas Conversões**
Se o usuário clicar 3 vezes:
- Google Analytics registra 3 eventos
- Google Ads registra 3 conversões
- Você vê "3 conversões" no painel

---

## 🔐 DADOS RASTREADOS

```
Informações coletadas:
✅ Data/Hora do clique
✅ Dispositivo (mobile/desktop)
✅ Navegador
✅ País/Cidade
✅ Fonte de tráfego
✅ Página origem
✅ ID de sessão

❌ NÃO rastreamos:
❌ Nome pessoal
❌ Email
❌ Dados de contato
❌ Informações sensíveis
```

---

## 📞 SUPORTE

### Não vejo conversões?

**Checklist:**
1. [ ] Script Google Ads está no HTML ✅
2. [ ] Google Ads ID é válido (`AW-16570621298`) ✅
3. [ ] Site está em HTTPS ✅
4. [ ] JavaScript está habilitado ✅
5. [ ] Aguardou 24-48h ✅

### Conversões aparecem como "zero"?

**Possíveis causas:**
- Script bloqueado por ad-blocker
- JavaScript desabilitado
- Conversão não foi configurada em Google Ads
- Esperar 24-48h

### Como debugar?

```javascript
// No Console do navegador
window.gtag = window.gtag || function() { 
  console.log('gtag chamado:', arguments); 
};
```

---

## 🚀 PRÓXIMAS AÇÕES

### Imediato
1. [ ] Deploy do código atualizado
2. [ ] Testar clique no WhatsApp
3. [ ] Verificar DevTools

### 24-48 horas
1. [ ] Acessar Google Ads
2. [ ] Ir em "Conversões"
3. [ ] Ver dados de `whatsapp_click`

### Semanal
1. [ ] Acompanhar número de conversões
2. [ ] Analisar padrões (hora, dispositivo, localização)
3. [ ] Otimizar se necessário

---

## 📝 RESUMO TÉCNICO

```
Implementação: Google Ads Conversion Tracking
Tipo: Event-based (baseado em eventos)
Evento: Clique em link WhatsApp
ID de Conversão: AW-16570621298/kEn_CNLa6_sYEM-A9dop
Método: gtag.js via Google Tag Manager
Status: ✅ ATIVO
Última atualização: 16 de janeiro de 2026
```

---

## 🎯 RESULTADO ESPERADO

**Quando alguém clicar no WhatsApp:**

```
Google Ads Dashboard
├─ Conversões: +1
├─ Data: Hoje
├─ Hora: Agora
├─ Valor: R$ 0 (ou valor customizado)
└─ Fonte: seu_site.com

Google Analytics
├─ Evento: whatsapp_click
├─ Usuário: 1
├─ Taxa conversão: 100% (se foi primeira ação)
└─ Real-time: VISÍVEL AGORA
```

---

**Status: ✅ PRONTO PARA PRODUÇÃO**

*Seus leads agora são rastreados automaticamente quando clicam no WhatsApp!*

*Última atualização: 16 de janeiro de 2026*
