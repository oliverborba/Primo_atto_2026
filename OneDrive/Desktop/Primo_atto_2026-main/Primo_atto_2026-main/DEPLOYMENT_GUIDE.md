# 🚀 GUIA DE DEPLOYMENT - Primo Atto Terapias

## Como colocar o site em produção e ativar SEO

---

## ✅ PRÉ-REQUISITOS

- [x] Node.js instalado (v16+)
- [x] npm instalado
- [x] Conta em Netlify OU Vercel (recomendado)
- [x] Domínio `primoattoterapias.com.br` apontado

---

## 🏗️ PASSO 1: BUILD LOCAL

```bash
# Entrar no diretório do projeto
cd primo_atto_dezembro_2025

# Instalar dependências (se não foi feito)
npm install

# Fazer build para produção
npm run build

# Resultado esperado: pasta `dist/` com arquivos otimizados
```

**Arquivos gerados:**
- `dist/index.html` - Página HTML com meta tags
- `dist/assets/` - CSS, JS, imagens (versionados)
- `dist/sitemap.xml` - Mapa do site
- `dist/robots.txt` - Controle de crawling
- `dist/manifest.json` - PWA manifest

---

## 🌐 PASSO 2: DEPLOY NO NETLIFY (RECOMENDADO)

### Opção A: Via Terminal

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Fazer login
netlify login

# Deploy
netlify deploy --prod --dir=dist

# Resultado: URL de produção
# Ex: https://primo-atto-terapias.netlify.app
```

### Opção B: Via Dashboard Netlify

1. Acessar [netlify.com](https://netlify.com)
2. Fazer login com GitHub/GitLab
3. Conectar repositório
4. Branch: `main`
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy automático

### Configurar Domínio Customizado

1. Na dashboard Netlify
2. Site settings → Domain management
3. Add custom domain
4. Adicionar `primoattoterapias.com.br`
5. Configurar DNS (instruções fornecidas)

---

## 🌐 PASSO 3: DEPLOY NO VERCEL (ALTERNATIVA)

### Via Dashboard Vercel

1. Acessar [vercel.com](https://vercel.com)
2. Login com GitHub
3. Import project
4. Selecionar repositório
5. Framework: Vite
6. Build command: `npm run build` (auto-detectado)
7. Output directory: `dist` (auto-detectado)
8. Deploy

### Conectar Domínio
1. Settings → Domains
2. Add domain
3. Seguir instruções de DNS

---

## ✅ PASSO 4: VALIDAÇÕES PÓS-DEPLOY

### 1. Testar URLs em Produção

```bash
# Verificar se sitemap está acessível
curl https://primoattoterapias.com.br/sitemap.xml

# Verificar se robots.txt está acessível
curl https://primoattoterapias.com.br/robots.txt

# Verificar se manifest está acessível
curl https://primoattoterapias.com.br/manifest.json
```

### 2. Google Mobile-Friendly Test
1. Ir para: https://search.google.com/test/mobile-friendly
2. Inserir URL: `https://primoattoterapias.com.br`
3. Esperar teste
4. Resultado esperado: ✅ Página é amigável para dispositivos móveis

### 3. PageSpeed Insights
1. Ir para: https://pagespeed.web.dev
2. Inserir URL: `https://primoattoterapias.com.br`
3. Esperar análise
4. Métrica de interesse: Core Web Vitals

### 4. Schema Validator
1. Ir para: https://validator.schema.org
2. URL: `https://primoattoterapias.com.br`
3. Validar
4. Resultado esperado: Sem erros críticos

---

## 🔍 PASSO 5: GOOGLE SEARCH CONSOLE (CRÍTICO)

### Registrar Propriedade

1. Acessar: https://search.google.com/search-console
2. Click em "URL prefix"
3. Digitar: `https://primoattoterapias.com.br`
4. Escolher método de verificação:
   - **TXT DNS** (recomendado)
   - HTML file
   - Google Analytics

### Submeter Sitemap

1. No Google Search Console
2. Left menu → Sitemaps
3. URL do sitemap: `https://primoattoterapias.com.br/sitemap.xml`
4. Submit

### Submeter URLs para Indexação

1. Inspection tool (barra superior)
2. Digitar: `https://primoattoterapias.com.br`
3. "Request indexing"
4. Repetir para outras URLs principais

### Monitorar Cobertura

1. Left menu → Coverage
2. Verificar:
   - Error (investigar se houver)
   - Valid (✅ é bom)
   - Valid with warnings
   - Excluded

---

## 📍 PASSO 6: GOOGLE MY BUSINESS (IMPORTANTE)

### Criar/Verificar Página

1. Acessar: https://business.google.com
2. Fazer login com conta Google
3. Click em "Manage your business on Google"
4. Buscar "Primo Atto Terapias"
5. Reivindicar negócio se existir OU criar novo

### Adicionar Informações

```
Nome: Primo Atto Terapias
Endereço: Rua Barata Ribeiro, 774 - Salas 409 e 410, Rio de Janeiro, RJ
Telefone: +55 21 99402-1137
Site: https://primoattoterapias.com.br
Categoria: Medical clinic / Therapeutic services
Horário: Seg-Sex 09:00-18:00, Sab 09:00-13:00
```

### Adicionar Fotos

- Logo da clínica
- Fachada/entrada
- Interior/salas de atendimento
- Equipe (se autorizado)

### Solicitar Avaliações

- Compartilhar link de avaliação
- Publicar nos stories
- Pedir para pacientes

---

## 📊 PASSO 7: GOOGLE ANALYTICS 4

### Verificar Rastreamento

1. Acessar: https://analytics.google.com
2. Verificar se o tracking está funcionando
3. Real-time → Verificar se registra visitas

### Configurar Metas/Conversões

1. Admin → Conversions
2. New conversion
3. Adicionar eventos:
   - `agenda_click` - Clique em "Agendar"
   - `whatsapp_click` - Clique em WhatsApp
   - `view_especialidade` - Visualização de especialidade

---

## 🎯 PASSO 8: MONITORAMENTO CONTÍNUO

### Daily Tasks (Diariamente)
- [ ] Verificar Google My Business
- [ ] Responder avaliações/mensagens
- [ ] Postar conteúdo (social media)

### Weekly Tasks (Semanalmente)
- [ ] Check Google Search Console (errors)
- [ ] Analisar tráfego no Analytics
- [ ] Responder comentários

### Monthly Tasks (Mensalmente)
- [ ] Análise completa do GSC
- [ ] Análise de SEO (rankings)
- [ ] Review de conversões
- [ ] Planejar novo conteúdo

---

## 🚨 TROUBLESHOOTING

### Problema: Sitemap não está indexado

**Solução:**
1. Google Search Console → Sitemaps
2. Verificar se há erros
3. Verificar formato XML válido
4. Reenviar sitemap

### Problema: Página não aparece no Google

**Solução:**
1. Verificar se está no robots.txt
2. Submeter manualmente no GSC
3. Esperar 2-4 semanas
4. Verificar se tem backlinks

### Problema: Core Web Vitals ruins

**Solução:**
1. Executar PageSpeed Insights
2. Seguir recomendações
3. Otimizar imagens
4. Reduzir JavaScript

### Problema: Posição baixa no ranking

**Solução:**
1. Verificar keywords nas meta tags
2. Criar conteúdo adicional (blog)
3. Conseguir backlinks
4. Otimizar para long-tail keywords

---

## 📚 RECURSOS ADICIONAIS

### Documentação Criada
- [SEO_GUIDE.md](./SEO_GUIDE.md) - Guia técnico
- [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) - Checklist
- [RESUMO_SEO.md](./RESUMO_SEO.md) - Resumo executivo

### Links Oficiais
- Google Search Central: https://developers.google.com/search
- Google My Business Help: https://support.google.com/business
- Google Analytics Help: https://support.google.com/analytics

### Ferramentas Úteis
- Ahrefs SEO Toolbar: https://ahrefs.com/toolbar
- Lighthouse: Integrado no Chrome DevTools (F12)
- Schema.org Validator: https://validator.schema.org

---

## ✅ CHECKLIST FINAL

- [ ] Build local realizado (`npm run build`)
- [ ] Deploy em produção (Netlify/Vercel)
- [ ] Domínio personalizado configurado
- [ ] HTTPS ativo
- [ ] Mobile-friendly test passou
- [ ] Google Search Console registrado
- [ ] Sitemap.xml submetido
- [ ] Google My Business verificado
- [ ] Google Analytics funcionando
- [ ] Avaliações solicitadas
- [ ] Redes sociais linkadas
- [ ] Blog planejado

---

## 🎉 PRÓXIMAS AÇÕES

1. **Curto prazo (1-2 semanas)**
   - Deploy em produção
   - Google Search Console
   - Google My Business

2. **Médio prazo (1-3 meses)**
   - Criar 5-10 posts de blog
   - Conseguir 10-20 avaliações
   - Otimizar Core Web Vitals

3. **Longo prazo (3-6 meses)**
   - 20+ posts de blog
   - 50+ avaliações
   - 1ª página do Google para keywords principais

---

## 📞 SUPORTE

Dúvidas? Consulte:
- [SEO_GUIDE.md](./SEO_GUIDE.md) para detalhes técnicos
- [SEO_IMPLEMENTATION.md](./SEO_IMPLEMENTATION.md) para checklist
- Documentação oficial Google (links acima)

---

**Última atualização: 16 de janeiro de 2026**
**Status: ✅ Pronto para Deployment**
