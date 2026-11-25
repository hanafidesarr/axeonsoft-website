import { useEffect } from 'react';

/**
 * Lightweight, high-performance SEO component.
 * Injects dynamic page title, meta description, keywords, Open Graph,
 * Twitter cards, canonical tags, and JSON-LD schema without external bloat.
 */
export default function SEO({
  title,
  description,
  keywords,
  canonicalPath = '',
  ogImage = '/axeonsoft-round-logo.png',
  ogType = 'website',
  schema = null,
  lang = 'en'
}) {
  const siteUrl = 'https://axeonsoft.com';
  const fullCanonical = `${siteUrl}${canonicalPath}`;
  const fullOgImage = ogImage.startsWith('http') ? ogImage : `${siteUrl}${ogImage}`;

  useEffect(() => {
    // 1. Title
    const formattedTitle = title ? (title.includes('Axeonsoft') ? title : `${title} | Axeonsoft`) : 'Axeonsoft - Digital Solutions Partner for Growing Businesses';
    document.title = formattedTitle;

    // 2. Set HTML lang
    document.documentElement.lang = lang;

    // Helper to create or update meta tag
    const setMeta = (nameAttr, nameVal, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${nameAttr}="${nameVal}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(nameAttr, nameVal);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to create or update link tag
    const setLink = (rel, href, hreflang = null) => {
      if (!href) return;
      const selector = hreflang 
        ? `link[rel="${rel}"][hreflang="${hreflang}"]` 
        : `link[rel="${rel}"]:not([hreflang])`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (hreflang) el.setAttribute('hreflang', hreflang);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 3. Meta Tags
    setMeta('name', 'title', formattedTitle);
    setMeta('name', 'description', description);
    setMeta('name', 'keywords', keywords);
    setMeta('name', 'robots', 'index, follow');

    // 4. Canonical & Multi-Language Hreflang
    setLink('canonical', fullCanonical);
    setLink('alternate', fullCanonical, 'en');
    setLink('alternate', fullCanonical, 'id');
    setLink('alternate', fullCanonical, 'x-default');

    // 5. Open Graph / Facebook
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:site_name', 'Axeonsoft');
    setMeta('property', 'og:locale', lang === 'id' ? 'id_ID' : 'en_US');
    setMeta('property', 'og:locale:alternate', lang === 'id' ? 'en_US' : 'id_ID');

    // 6. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:url', fullCanonical);
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);

    // 7. Inject JSON-LD Structured Data Schema
    let scriptEl = document.querySelector('script[type="application/ld+json"]#seo-schema');
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.setAttribute('type', 'application/ld+json');
        scriptEl.setAttribute('id', 'seo-schema');
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }
  }, [title, description, keywords, canonicalPath, fullCanonical, fullOgImage, ogType, schema, lang]);

  return null;
}
