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
    const formattedTitle = title ? `${title} | Axeonsoft` : 'Axeonsoft - Professional Software House & Digital Solutions';
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
    const setLink = (rel, href) => {
      if (!href) return;
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 3. Standard Meta
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    // 4. Canonical
    setLink('canonical', fullCanonical);

    // 5. Open Graph
    setMeta('property', 'og:title', formattedTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:type', ogType);
    setMeta('property', 'og:url', fullCanonical);
    setMeta('property', 'og:image', fullOgImage);
    setMeta('property', 'og:site_name', 'Axeonsoft');
    setMeta('property', 'og:locale', lang === 'id' ? 'id_ID' : 'en_US');

    // 6. Twitter Card
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', formattedTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', fullOgImage);

    // 7. Dynamic JSON-LD Schema
    const schemaScriptId = 'page-json-ld-schema';
    let scriptEl = document.getElementById(schemaScriptId);
    if (schema) {
      if (!scriptEl) {
        scriptEl = document.createElement('script');
        scriptEl.id = schemaScriptId;
        scriptEl.type = 'application/ld+json';
        document.head.appendChild(scriptEl);
      }
      scriptEl.textContent = JSON.stringify(schema);
    } else if (scriptEl) {
      scriptEl.remove();
    }

    return () => {
      // Optional cleanup on unmount
    };
  }, [title, description, keywords, canonicalPath, ogImage, ogType, schema, lang, fullCanonical, fullOgImage]);

  return null;
}
