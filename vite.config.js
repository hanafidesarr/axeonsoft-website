import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'node:fs'
import path from 'node:path'

// Custom plugin to duplicate index.html to 404.html and generate pre-rendered static route directories for GitHub Pages HTTP 200 OK
function githubPagesSpaPlugin() {
  return {
    name: 'github-pages-spa-prerender',
    closeBundle() {
      const distDir = path.resolve(__dirname, 'dist')
      const indexPath = path.join(distDir, 'index.html')
      const notFoundPath = path.join(distDir, '404.html')

      if (!fs.existsSync(indexPath)) return;

      // 1. Generate 404.html for SPA fallback
      fs.copyFileSync(indexPath, notFoundPath)
      console.log('✓ Successfully generated 404.html for GitHub Pages SPA routing.')

      // 2. Pre-generate static route files so GitHub Pages serves HTTP 200 OK directly to crawlers
      const rawHtml = fs.readFileSync(indexPath, 'utf-8')

      const routeConfigs = [
        {
          route: '/solutions/website-catalog',
          canonical: 'https://axeonsoft.com/solutions/website-catalog',
          title: 'Website Catalog Solution - Showcase Your Business & Products | Axeonsoft',
          description: 'Showcase your company profile, services, and product catalog online. Clean responsive navigation and direct inquiry channels for growing businesses.',
          keywords: 'website catalog, business catalog website, digital product catalog, company profile website, online catalog for smb'
        },
        {
          route: '/catalog',
          canonical: 'https://axeonsoft.com/solutions/website-catalog',
          title: 'Website Catalog Solution - Showcase Your Business & Products | Axeonsoft',
          description: 'Showcase your company profile, services, and product catalog online. Clean responsive navigation and direct inquiry channels for growing businesses.',
          keywords: 'website catalog, business catalog website, digital product catalog, company profile website, online catalog for smb'
        },
        {
          route: '/solutions/online-booking',
          canonical: 'https://axeonsoft.com/solutions/online-booking',
          title: 'Online Booking System - Simple Appointments & Scheduling | Axeonsoft',
          description: 'Streamline reservations and client appointments with an automated booking workflow, admin approval panel, and instant WhatsApp notifications.',
          keywords: 'online booking system, appointment scheduling, reservation software, service booking website, axeonsoft'
        },
        {
          route: '/booking',
          canonical: 'https://axeonsoft.com/solutions/online-booking',
          title: 'Online Booking System - Simple Appointments & Scheduling | Axeonsoft',
          description: 'Streamline reservations and client appointments with an automated booking workflow, admin approval panel, and instant WhatsApp notifications.',
          keywords: 'online booking system, appointment scheduling, reservation software, service booking website, axeonsoft'
        },
        {
          route: '/solutions/ecommerce',
          canonical: 'https://axeonsoft.com/solutions/ecommerce',
          title: 'E-Commerce Solution - Scalable Online Store with Spree Commerce | Axeonsoft',
          description: 'Sell products online with a modular, battle-tested e-commerce solution powered by Spree Commerce. Built for growth and modern business operations.',
          keywords: 'ecommerce development, spree commerce store, online shop builder, multi-product ecommerce, custom ecommerce solutions'
        },
        {
          route: '/ecommerce',
          canonical: 'https://axeonsoft.com/solutions/ecommerce',
          title: 'E-Commerce Solution - Scalable Online Store with Spree Commerce | Axeonsoft',
          description: 'Sell products online with a modular, battle-tested e-commerce solution powered by Spree Commerce. Built for growth and modern business operations.',
          keywords: 'ecommerce development, spree commerce store, online shop builder, multi-product ecommerce, custom ecommerce solutions'
        },
        {
          route: '/solutions/social-media',
          canonical: 'https://axeonsoft.com/solutions/social-media',
          title: 'Social Media Management - Content Strategy & Publishing | Axeonsoft',
          description: 'Organize, schedule, and optimize content for Instagram and YouTube. Powered by modern workflow tools like Postiz for growing brands.',
          keywords: 'social media management, social media publishing, content scheduling, postiz management, brand marketing'
        },
        {
          route: '/social-media',
          canonical: 'https://axeonsoft.com/solutions/social-media',
          title: 'Social Media Management - Content Strategy & Publishing | Axeonsoft',
          description: 'Organize, schedule, and optimize content for Instagram and YouTube. Powered by modern workflow tools like Postiz for growing brands.',
          keywords: 'social media management, social media publishing, content scheduling, postiz management, brand marketing'
        },
        {
          route: '/social-media-management',
          canonical: 'https://axeonsoft.com/solutions/social-media',
          title: 'Social Media Management - Content Strategy & Publishing | Axeonsoft',
          description: 'Organize, schedule, and optimize content for Instagram and YouTube. Powered by modern workflow tools like Postiz for growing brands.',
          keywords: 'social media management, social media publishing, content scheduling, postiz management, brand marketing'
        },
        {
          route: '/about-us',
          canonical: 'https://axeonsoft.com/about-us',
          title: 'About Us - Digital Solutions Partner for Businesses | Axeonsoft',
          description: 'Learn about Axeonsoft: our mission, values, engineering philosophy, and how we empower growing businesses with scalable digital solutions.',
          keywords: 'about axeonsoft, digital agency indonesia, software company, digital business partner'
        },
        {
          route: '/why-us',
          canonical: 'https://axeonsoft.com/about-us',
          title: 'About Us - Digital Solutions Partner for Businesses | Axeonsoft',
          description: 'Learn about Axeonsoft: our mission, values, engineering philosophy, and how we empower growing businesses with scalable digital solutions.',
          keywords: 'about axeonsoft, digital agency indonesia, software company, digital business partner'
        },
        {
          route: '/contact',
          canonical: 'https://axeonsoft.com/contact',
          title: 'Contact Us - Start Your Project Consultation | Axeonsoft',
          description: 'Get in touch with Axeonsoft for digital business solutions, custom catalogs, booking systems, or online stores. Direct WhatsApp consultation.',
          keywords: 'contact axeonsoft, hire web developer, business digital consultation, whatsapp consultation'
        },
        {
          route: '/landing-page',
          canonical: 'https://axeonsoft.com/landing-page',
          title: 'High-Converting Landing Pages - Custom Design & Speed | Axeonsoft',
          description: 'Custom high-performance landing pages crafted for maximum conversions, fast load times, and direct lead generation.',
          keywords: 'landing page service, custom landing page, high conversion web design, lead generation website'
        },
        {
          route: '/games',
          canonical: 'https://axeonsoft.com/games',
          title: 'Catbox Studio Games - Play Free Web Games | Axeonsoft',
          description: 'Play indie HTML5 games created by Catbox Studio, an internal entertainment division of Axeonsoft.',
          keywords: 'web games, free browser games, indie html5 games, catbox studio games, play arcade games online'
        }
      ]

      for (const item of routeConfigs) {
        const routeDir = path.join(distDir, ...item.route.split('/').filter(Boolean))
        fs.mkdirSync(routeDir, { recursive: true })

        let pageHtml = rawHtml
          .replace(/<title>.*?<\/title>/i, `<title>${item.title}</title>`)
          .replace(/<meta\s+name=["']title["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="title" content="${item.title}" />`)
          .replace(/<meta\s+name=["']description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="description" content="${item.description}" />`)
          .replace(/<meta\s+name=["']keywords["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="keywords" content="${item.keywords}" />`)
          .replace(/<link\s+rel=["']canonical["']\s+href=["'].*?["']\s*\/?>/i, `<link rel="canonical" href="${item.canonical}" />`)
          .replace(/<meta\s+property=["']og:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:title" content="${item.title}" />`)
          .replace(/<meta\s+property=["']og:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:description" content="${item.description}" />`)
          .replace(/<meta\s+property=["']og:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta property="og:url" content="${item.canonical}" />`)
          .replace(/<meta\s+name=["']twitter:title["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:title" content="${item.title}" />`)
          .replace(/<meta\s+name=["']twitter:description["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:description" content="${item.description}" />`)
          .replace(/<meta\s+name=["']twitter:url["']\s+content=["'].*?["']\s*\/?>/i, `<meta name="twitter:url" content="${item.canonical}" />`)

        fs.writeFileSync(path.join(routeDir, 'index.html'), pageHtml, 'utf-8')
      }
      console.log(`✓ Pre-rendered ${routeConfigs.length} static route directories for GitHub Pages HTTP 200 OK.`)
    }
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    githubPagesSpaPlugin()
  ],
  server: {
    port: 3000,
    open: true
  },
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react']
        }
      }
    }
  }
})
