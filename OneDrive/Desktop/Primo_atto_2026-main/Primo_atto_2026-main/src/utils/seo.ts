// Hook customizado para gerenciar meta tags e SEO dinâmico
import { useEffect } from 'react';

interface SEOConfig {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  keywords?: string;
  canonicalUrl?: string;
}

export const useSEO = (config: SEOConfig) => {
  useEffect(() => {
    // Atualizar título
    document.title = config.title;

    // Atualizar meta description
    const descriptionTag = document.querySelector('meta[name="description"]');
    if (descriptionTag) {
      descriptionTag.setAttribute('content', config.description);
    }

    // Atualizar meta keywords
    if (config.keywords) {
      const keywordsTag = document.querySelector('meta[name="keywords"]');
      if (keywordsTag) {
        keywordsTag.setAttribute('content', config.keywords);
      }
    }

    // Atualizar OG tags
    if (config.ogTitle) {
      const ogTitleTag = document.querySelector('meta[property="og:title"]');
      if (ogTitleTag) {
        ogTitleTag.setAttribute('content', config.ogTitle);
      }
    }

    if (config.ogDescription) {
      const ogDescTag = document.querySelector('meta[property="og:description"]');
      if (ogDescTag) {
        ogDescTag.setAttribute('content', config.ogDescription);
      }
    }

    if (config.ogImage) {
      const ogImageTag = document.querySelector('meta[property="og:image"]');
      if (ogImageTag) {
        ogImageTag.setAttribute('content', config.ogImage);
      }
    }

    if (config.ogUrl) {
      const ogUrlTag = document.querySelector('meta[property="og:url"]');
      if (ogUrlTag) {
        ogUrlTag.setAttribute('content', config.ogUrl);
      }
    }

    // Atualizar canonical URL
    if (config.canonicalUrl) {
      let canonicalTag = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
      if (canonicalTag) {
        canonicalTag.href = config.canonicalUrl;
      } else {
        canonicalTag = document.createElement('link') as HTMLLinkElement;
        canonicalTag.rel = 'canonical';
        canonicalTag.href = config.canonicalUrl;
        document.head.appendChild(canonicalTag);
      }
    }

    // Scroll para o topo quando a página muda
    window.scrollTo(0, 0);
  }, [config]);
};

// Função para gerar schema.org structured data dinamicamente
export const generateSchemaData = (type: string, data: Record<string, any>) => {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data
  };
};

// Função para inserir script schema dinamicamente
export const insertSchemaScript = (schemaData: Record<string, any>) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(schemaData);
  document.head.appendChild(script);

  return () => {
    document.head.removeChild(script);
  };
};
