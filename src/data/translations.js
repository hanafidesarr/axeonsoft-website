export const content = {
  en: {
    nav: {
      brand: "Axeonsoft",
      brandSub: "Digital Solutions",
      home: "Home",
      services: "Services",
      catalog: "E-Commerce",
      booking: "Booking",
      landingPage: "Landing Page",
      games: "Catbox Games",
      whyUs: "Why Axeonsoft",
      contact: "Contact",
      chatWa: "Chat WhatsApp",
    },
    seo: {
      home: {
        title: "Software House & Premier Digital Solutions",
        description: "Axeonsoft delivers premier digital solutions: Product Catalog & E-Commerce, Online Booking Systems, High-Converting Landing Pages, and Catbox Studio Games.",
        keywords: "software house, e-commerce development, online booking system, high converting landing page, web games, catbox studio, react developer, web agency indonesia",
      },
      catalog: {
        title: "Product Catalog & E-Commerce Solutions",
        description: "Turn visitors into buyers with ultra-responsive storefronts, instant search, smart filtering, and 1-click WhatsApp checkout.",
        keywords: "ecommerce website, product catalog, whatsapp checkout, headless store, fast online shop, digital catalog indonesia",
      },
      booking: {
        title: "Online Booking & Reservation Systems",
        description: "Automate appointment scheduling, prevent double-booking, and boost client attendance with WhatsApp instant confirmations.",
        keywords: "online booking system, reservation software, appointment scheduling, whatsapp appointment, clinic booking system, salon booking",
      },
      landingPage: {
        title: "High-Converting Landing Pages (CRO)",
        description: "Maximize advertising ROI with sub-second loading speed, Google PageSpeed 95+ scores, and psychological conversion funnels.",
        keywords: "high converting landing page, CRO web design, google ads landing page, meta ads funnel, fast landing page, sales funnel builder",
      },
      games: {
        title: "Catbox Studio - Interactive Web Games & Gamification",
        description: "Dive into zero-install instant-play HTML5 games crafted for pure engagement, leaderboards, and brand gamification campaigns.",
        keywords: "catbox studio, web games, html5 games, browser games, brand gamification, playable ads, phaser games, advergames",
      },
      whyUs: {
        title: "Why Axeonsoft - Engineering Advantage & Standards",
        description: "Engineered for speed, scalable architecture, conversion-first mindset, and direct WhatsApp human support with no ticketing queues.",
        keywords: "why axeonsoft, software house advantage, scalable react architecture, high speed web development, custom software agency",
      },
      contact: {
        title: "Contact Axeonsoft - Instant WhatsApp Consultation",
        description: "Get in touch with our solutions architects. Direct WhatsApp chat at 0851-7409-1042, response time under 15 minutes.",
        keywords: "contact axeonsoft, whatsapp software house, hire web developer, digital agency jakarta, software consultation",
      },
      notFound: {
        title: "Page Not Found (404)",
        description: "The page you are looking for does not exist or has been moved.",
        keywords: "404, not found, axeonsoft",
      }
    },
    hero: {
      badge: "⚡ Premium Software House & Digital Transformation",
      titleStart: "Transform Your Vision Into",
      titleHighlight: "High-Performance",
      titleEnd: "Digital Products",
      subtitle: "We engineer lightning-fast digital catalogs, automated online booking systems, conversion-driven landing pages, and interactive web games that drive measurable business growth.",
      ctaPrimary: "Explore Solutions",
      ctaSecondary: "Free WhatsApp Consultation",
      stats: [
        { value: "99.9%", label: "Uptime & Reliability" },
        { value: "100+", label: "Projects Delivered" },
        { value: "< 1s", label: "Ultra-Fast Page Load" },
        { value: "24/7", label: "Dedicated Support" },
      ],
      trustedBy: "Trusted by forward-thinking startups, growing SMBs, and modern enterprises",
    },
    categories: {
      badge: "Core Solutions",
      title: "Engineered For Speed, Conversion, & Scale",
      subtitle: "Click each dedicated solution to explore features, interactive demos, architecture, and customized packages.",
      viewDemo: "Interactive Demo",
    },
    catalogSection: {
      id: "catalog",
      badge: "Category 01",
      title: "Product Catalog & E-Commerce",
      tagline: "Turn visitors into buyers with an ultra-responsive storefront and friction-free checkout.",
      description: "Our e-commerce and product catalog solutions empower businesses to showcase inventory with blazing speed, instant search, smart filtering, and seamless direct-to-WhatsApp orders.",
      features: [
        "Instant search & category multi-filtering with zero latency",
        "Direct-to-WhatsApp 1-Click Order flow (no registration friction)",
        "Automated cart calculation & dynamic shipping estimation",
        "Mobile-first responsive UX optimized for top search engines",
        "Multi-currency & digital payment gateway readiness (QRIS, VA, Cards)",
        "Ultra-lightweight headless catalog architecture",
      ],
      demoTitle: "Interactive Storefront Simulator",
      filterAll: "All Products",
      filterTech: "Software & SaaS",
      filterHardware: "Hardware & Gear",
      filterServices: "Managed Services",
      orderWa: "Order via WhatsApp",
      currency: "Rp",
      products: [
        {
          id: 1,
          name: "Enterprise Cloud ERP Suite",
          category: "Software & SaaS",
          price: "15.000.000",
          desc: "Complete business automation module with invoicing and real-time inventory.",
          rating: 4.9,
          badge: "Popular",
          image: "/images/product-erp-cloud.jpg"
        },
        {
          id: 2,
          name: "Smart POS Dual-Display Terminal",
          category: "Hardware & Gear",
          price: "4.850.000",
          desc: "Industrial thermal printer, barcode reader, and Android 13 dual screens.",
          rating: 4.8,
          badge: "Hardware",
          image: "/images/product-smart-pos.jpg"
        },
        {
          id: 3,
          name: "VIP 24/7 DevOps & Server SLA",
          category: "Managed Services",
          price: "3.500.000",
          desc: "Automated daily backups, DDoS protection, and 99.99% uptime guarantee.",
          rating: 5.0,
          badge: "Service",
          image: "/images/product-devops-server.jpg"
        },
        {
          id: 4,
          name: "Omnichannel WhatsApp CRM Bot",
          category: "Software & SaaS",
          price: "7.200.000",
          desc: "Multi-agent customer support desk with auto-replies and broadcast tool.",
          rating: 4.9,
          badge: "Best Value",
          image: "/images/product-whatsapp-bot.jpg"
        },
      ],
      packagesTitle: "E-Commerce Packages & Delivery Options",
      packagesSubtitle: "Transparent, scalable packages designed for every stage of your business growth.",
      packages: [
        {
          name: "Starter Digital Catalog",
          price: "Rp 3.500.000",
          popular: false,
          desc: "Ideal for retail stores, boutique brands, and restaurants looking to digitize their catalog.",
          features: [
            "Up to 100 products with categories",
            "1-Click direct WhatsApp checkout",
            "Custom domain & SSL included",
            "Mobile-first ultra-responsive UI",
            "Basic SEO metadata setup"
          ]
        },
        {
          name: "Growth Storefront",
          price: "Rp 7.500.000",
          popular: true,
          desc: "Best for scaling brands requiring dynamic cart calculations and inventory management.",
          features: [
            "Unlimited products & categories",
            "Instant live search & smart filters",
            "Automated order recaps to WhatsApp",
            "Payment Gateway Integration (QRIS, VA)",
            "Google Analytics & Meta Pixel tracking",
            "Admin CMS to manage inventory"
          ]
        },
        {
          name: "Custom Enterprise Commerce",
          price: "Custom Quote",
          popular: false,
          desc: "Engineered for high-volume retailers, distributors, and multi-vendor platforms.",
          features: [
            "Headless React/Next.js Architecture",
            "Custom ERP / POS API integrations",
            "Multi-warehouse & logistics auto-rate",
            "Dedicated DevOps & 99.9% uptime SLA",
            "High-concurrency serverless setup"
          ]
        }
      ],
      faqs: [
        {
          q: "How does the WhatsApp 1-Click checkout work?",
          a: "When a customer adds items to their cart and clicks 'Checkout via WhatsApp', the system automatically formats an itemized order message complete with SKU, quantity, customer details, and total calculation. It opens WhatsApp instantly with everything pre-filled."
        },
        {
          q: "Can we integrate automated payment gateways like QRIS and Virtual Accounts?",
          a: "Yes! We integrate with popular payment aggregators including Midtrans, Xendit, and DOKU. You can accept QRIS, BCA/Mandiri/BRI Virtual Accounts, and Credit Cards directly."
        },
        {
          q: "Is it easy to update product prices and photos?",
          a: "Absolutely. We provide an intuitive administrative dashboard or Google Sheets sync where you can add, edit, or hide products in seconds without needing any technical code."
        }
      ]
    },
    bookingSection: {
      id: "booking",
      badge: "Category 02",
      title: "Online Booking & Reservation Systems",
      tagline: "Automate appointment scheduling, prevent double-booking, and boost client attendance.",
      description: "Say goodbye to manual phone scheduling. Our booking platforms provide calendar sync, real-time slot availability, instant WhatsApp confirmations, and flexible options.",
      features: [
        "Real-time calendar slot validation & automated buffers",
        "Automatic WhatsApp booking confirmation & reminder bot",
        "Down-payment (DP) or full payment gateway integration",
        "Staff scheduling, multiple branch and room support",
        "Client self-service cancellation & rescheduling link",
        "Two-way sync with Google Calendar & Outlook",
      ],
      demoTitle: "Live Reservation Simulator",
      serviceLabel: "Select Service",
      dateLabel: "Select Date",
      timeLabel: "Select Time Slot",
      nameLabel: "Your Full Name",
      phoneLabel: "WhatsApp Phone Number",
      submitBtn: "Confirm & Send to WhatsApp",
      servicesList: [
        { id: "consult", name: "1-on-1 Tech Architecture Consultation (60 min)", fee: "Free Initial" },
        { id: "audit", name: "Complete Website Security & Speed Audit", fee: "Rp 1.500.000" },
        { id: "sprint", name: "Custom MVP Rapid Prototyping Sprint", fee: "Rp 8.000.000" },
      ],
      successMsg: "Booking simulated! Click to open WhatsApp with pre-filled details.",
      useCasesTitle: "Tailored For Every Appointment-Driven Industry",
      useCases: [
        {
          title: "Healthcare & Dental Clinics",
          desc: "Schedule patient visits, assign doctors, and automate pre-consultation reminders to slash no-show rates."
        },
        {
          title: "Salons, Spas & Beauty Centers",
          desc: "Let clients pick therapists, service packages, and preferred time slots with down-payment deposits."
        },
        {
          title: "Consultants & Professional Coaches",
          desc: "Synchronize client calls directly with Google Calendar and collect hourly consultation fees upfront."
        },
        {
          title: "Sports Courts, Studios & Venues",
          desc: "Real-time hourly court booking, automated slot locks, and QR-code check-in for venues."
        }
      ],
      faqs: [
        {
          q: "How does the system prevent double-booking?",
          a: "Our backend checks slot locks in real-time. Once a slot is in the checkout process, it is temporarily held, and permanently locked once confirmed, preventing two clients from picking the same time."
        },
        {
          q: "Can clients receive WhatsApp reminder notifications before their appointment?",
          a: "Yes! The system can automatically trigger automated WhatsApp reminders 24 hours and 2 hours prior to the scheduled slot to ensure near-zero no-show rates."
        },
        {
          q: "Can we collect down-payments before confirming a booking?",
          a: "Yes. You can require a deposit (e.g. 50% or fixed Rp 100.000) or full payment via QRIS/VA before the slot is officially marked as booked."
        }
      ]
    },
    landingSection: {
      id: "landing-page",
      badge: "Category 03",
      title: "High-Converting Landing Pages",
      tagline: "Maximize advertising ROI with ultra-fast pages designed specifically to capture leads.",
      description: "We craft psychological conversion funnels tested against Google PageSpeed 95+ standards and optimized for Google Ads & Meta Ads traffic.",
      features: [
        "Sub-second load times with modern static/SSR builds (< 800ms)",
        "Conversion Rate Optimization (CRO) UX blueprints",
        "A/B test ready structure & event tracking (Meta Pixel, Google Tag Manager)",
        "Captivating hero copywriting and sticky lead captures",
        "Built-in spam protection & instant CRM/Webhook delivery",
        "Zero template bloat: 100% custom-tailored for maximum conversion"
      ],
      metrics: [
        { score: "99", label: "Mobile Performance Score", sub: "Google Lighthouse standard" },
        { score: "+340%", label: "Average Lead Conversion Lift", sub: "Compared to generic templates" },
        { score: "< 800ms", label: "First Contentful Paint", sub: "Virtually zero bounce on ad clicks" },
      ],
      demoCta: "Claim Your Free Landing Page Wireframe Audit",
      demoSub: "Our senior UX designers will analyze your current funnel within 24 hours.",
      principlesTitle: "The Science Behind High-Converting Pages",
      principles: [
        {
          step: "01",
          title: "The 3-Second Hook",
          desc: "Above-the-fold value proposition that immediately answers: What is this? Why does it matter to me? What do I do next?"
        },
        {
          step: "02",
          title: "Frictionless Action Path",
          desc: "Sticky WhatsApp CTAs, simplified 2-step inquiry fields, and zero cognitive overload."
        },
        {
          step: "03",
          title: "Speed Advantage on Ads",
          desc: "Google and Meta reward fast pages with higher ad Quality Scores and lower cost-per-click (CPC)."
        },
        {
          step: "04",
          title: "Psychological Proof Stack",
          desc: "Strategic placement of client reviews, security badges, and numerical validation."
        }
      ],
      faqs: [
        {
          q: "Why do custom landing pages outperform WordPress / Elementor templates?",
          a: "Template page builders load dozens of unnecessary CSS/JS scripts, font files, and plugin bloat, resulting in 3-5 second mobile load times. Every 1-second delay causes a 20% drop in conversions. Our custom pages load in under 800ms."
        },
        {
          q: "Can you set up tracking for Facebook Pixel and Google Ads Conversions?",
          a: "Yes! We configure complete server-side and browser tracking for Meta Pixel, Google Tag Manager (GTM), Google Ads Conversion actions, and TikTok Pixel so you track every rupiah spent."
        },
        {
          q: "How fast can you deliver a custom high-converting landing page?",
          a: "Standard delivery is 3 to 5 business days, including wireframing, copywriting alignment, high-performance coding, and tracking pixel setup."
        }
      ]
    },
    gamesSection: {
      id: "games",
      badge: "Category 04 • Gaming Division",
      studioName: "Catbox Studio",
      title: "Interactive Web Games & Browser Entertainment",
      tagline: "Dive into lightweight, instant-play HTML5 games crafted for pure engagement.",
      description: "Catbox Studio is the dedicated gaming division of Axeonsoft. We engineer immersive, zero-install browser games, web gamification modules for brands, and interactive entertainment playable instantly on any device.",
      features: [
        "Instant Play: No bulky app downloads required — runs straight in mobile browser",
        "Cross-Platform: Smooth 60fps on mobile phones, tablets, and desktop browsers",
        "Gamification for Brands: Custom advergames for marketing campaigns & lead generation",
        "Global Leaderboards & Competitive multiplayer mechanics",
        "Lightweight WebGL / HTML5 engine with sub-2MB initial asset footprint"
      ],
      visitStudioBtn: "Explore Catbox Studio Games",
      directUrl: "https://catbox.axeonsoft.com/",
      featuredBadge: "Featured Games in Catbox",
      gamesList: [
        {
          title: "Cyber Meow Runner",
          genre: "Endless Runner / Arcade",
          rating: "4.9 ★",
          tag: "Trending",
          desc: "Guide our cyberpunk cat across neon rooftops while dodging laser drones.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/cyber-meow-runner.jpg"
        },
        {
          title: "Pixel Dungeon Quest",
          genre: "Roguelike / Strategy",
          rating: "4.8 ★",
          tag: "Retro Classic",
          desc: "Explore procedurally generated catacombs, loot epic treasures, and defeat bosses.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/pixel-dungeon-quest.jpg"
        },
        {
          title: "Speedy Galactic Racer",
          genre: "Futuristic Racing",
          rating: "4.9 ★",
          tag: "3D WebGL",
          desc: "Hyper-fast spacecraft racing powered by modern WebGL graphics.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/speedy-galactic-racer.jpg"
        },
      ],
      brandGamificationTitle: "Why Brands Commission Web Games with Catbox",
      brandGamificationPoints: [
        {
          title: "4x Longer Time on Site",
          desc: "Interactive games keep prospective customers immersed with your brand for 3-5 minutes, compared to 30 seconds on static pages."
        },
        {
          title: "Massive Organic Virality",
          desc: "Players love sharing high scores on WhatsApp, Instagram stories, and TikTok, unlocking zero-cost referral loops."
        },
        {
          title: "High-Intent Voucher Unlocks",
          desc: "Gamified reward mechanics: beat the level to unlock a 20% discount coupon code that converts directly into sales."
        }
      ],
      faqs: [
        {
          q: "Do players need to install an app from App Store or Play Store?",
          a: "No! All Catbox Studio games run 100% inside mobile and desktop web browsers via HTML5 and WebGL. Users simply click a link or scan a QR code and start playing immediately."
        },
        {
          q: "Can our company brand be integrated into a custom game?",
          a: "Yes! We build custom branded games (advergames) featuring your company mascot, logo, product power-ups, and coupon redemption mechanisms."
        }
      ]
    },
    whyUs: {
      id: "why-us",
      badge: "Why Partner With Us",
      title: "The Axeonsoft Engineering Advantage",
      subtitle: "We combine business strategy, modern engineering, and aesthetic precision.",
      cards: [
        {
          title: "Engineered For Speed",
          desc: "Built on modern frameworks like React, Next.js, and Vite. Every millisecond counts toward your search rankings and sales conversions.",
          icon: "Zap",
        },
        {
          title: "Clean, Scalable Architecture",
          desc: "No bloated themes or spaghetti code. Maintainable, secure codebases designed to effortlessly grow with your enterprise.",
          icon: "Layers",
        },
        {
          title: "Conversion-First Mindset",
          desc: "We analyze user psychology and UX friction points, ensuring every visitor has a direct path to inquiry or purchase.",
          icon: "TrendingUp",
        },
        {
          title: "Direct WhatsApp & Human Support",
          desc: "No robotic ticket queues. Talk directly with engineers and project leads ready to support your systems.",
          icon: "ShieldCheck",
        },
      ],
      processTitle: "Our 5-Step Engineering Process",
      processSubtitle: "How we take your idea from concept to a production-grade digital platform.",
      steps: [
        {
          num: "01",
          title: "Discovery & Blueprint",
          desc: "We analyze your business objectives, target audience, and system requirements to formulate an architectural roadmap."
        },
        {
          num: "02",
          title: "High-Fidelity UX/UI",
          desc: "Designing responsive, aesthetically stunning interfaces with conversion psychology built into every screen."
        },
        {
          num: "03",
          title: "Agile Development",
          desc: "Clean, modular code written in modern React, TailwindCSS, and robust API backends with version control."
        },
        {
          num: "04",
          title: "Performance & SEO QA",
          desc: "Rigorous testing on multiple devices, Google Lighthouse 95+ audits, and Core Web Vitals optimization."
        },
        {
          num: "05",
          title: "Launch & 24/7 SLA",
          desc: "Seamless deployment, DNS & SSL setup, tracking configuration, and dedicated post-launch support."
        }
      ],
      comparison: {
        title: "Traditional Agency vs Axeonsoft",
        headers: ["Feature / Metric", "Generic Agency", "Axeonsoft Standards"],
        rows: [
          ["Mobile Page Speed", "3 - 7 seconds (Bloated CMS)", "< 1 second (Modern React/Vite)"],
          ["Code Ownership", "Locked to proprietary platforms", "100% full source code ownership"],
          ["Support Channel", "Slow email ticket queues (2-3 days)", "Direct WhatsApp lead engineer (<15 min)"],
          ["Search Engine Optimization", "Basic plugin install", "Semantic HTML5, Schema JSON-LD, Core Web Vitals"],
          ["WhatsApp Checkout Flow", "Rarely supported or third-party paid", "Built natively with 1-click checkout"]
        ]
      }
    },
    contact: {
      id: "contact",
      badge: "Get In Touch",
      title: "Ready To Elevate Your Digital Experience?",
      subtitle: "Contact our team via WhatsApp, email, or explore our official social channels.",
      waTitle: "Instant WhatsApp Consultation",
      waDesc: "Chat directly with our solutions architect. Average response time: under 15 minutes.",
      waButton: "Chat via WhatsApp (0851-7409-1042)",
      waNumber: "0851-7409-1042",
      emailLabel: "Email Us",
      emailAddress: "info@axeonsoft.com",
      locationLabel: "Office Location",
      locationValue: "Jakarta, Indonesia (Serving Global Clients)",
      socialsTitle: "Connect Across Our Official Channels",
      socialsSubtitle: "Follow Axeonsoft updates, case studies, and tech insights.",
      formName: "Full Name",
      formEmail: "Email Address",
      formService: "Interested In",
      formBudget: "Estimated Budget",
      formMessage: "Brief Project Description",
      formSubmit: "Send Project Inquiry via WhatsApp",
    },
    footer: {
      copyright: "© 2026 Axeonsoft. All rights reserved.",
      disclaimer: "Axeonsoft is a registered digital agency and software development house.",
      gamingDivision: "Gaming Division: Catbox Studio",
      backToTop: "Back to Top",
    },
  },
  id: {
    nav: {
      brand: "Axeonsoft",
      brandSub: "Solusi Digital",
      home: "Beranda",
      services: "Layanan",
      catalog: "Katalog & E-Commerce",
      booking: "Booking Online",
      landingPage: "Landing Page",
      games: "Games (Catbox)",
      whyUs: "Keunggulan",
      contact: "Kontak",
      chatWa: "Chat WhatsApp",
    },
    seo: {
      home: {
        title: "Software House & Solusi Produk Digital Unggulan",
        description: "Axeonsoft merancang katalog produk digital, e-commerce, sistem booking online otomatis, landing page berkonversi tinggi, dan game web interaktif Catbox Studio.",
        keywords: "software house indonesia, jasa pembuatan website, e-commerce katalog whatsapp, sistem booking online, landing page iklan, catbox studio game web",
      },
      catalog: {
        title: "Katalog Produk Digital & Solusi E-Commerce",
        description: "Ubah pengunjung menjadi pembeli setia dengan etalase kilat, pencarian pintar, filter kategori, dan checkout langsung ke WhatsApp 1-klik.",
        keywords: "toko online whatsapp, katalog digital, website ecommerce, checkout whatsapp, toko online cepat, software katalog",
      },
      booking: {
        title: "Sistem Booking & Reservasi Online Otomatis",
        description: "Otomatisasi jadwal pertemuan, cegah jadwal bentrok, dan tingkatkan kehadiran pelanggan dengan konfirmasi pengingat WhatsApp otomatis.",
        keywords: "sistem booking online, aplikasi reservasi, jadwal dokter klinik, booking salon online, software reservasi lapangan",
      },
      landingPage: {
        title: "Landing Page Berkonversi Tinggi (CRO)",
        description: "Maksimalkan hasil iklan Google Ads & Meta Ads dengan kecepatan loading di bawah 1 detik dan struktur psikologi penjualan teruji.",
        keywords: "jasa landing page, landing page konversi tinggi, cro landing page, halaman penawaran iklan, landing page cepat",
      },
      games: {
        title: "Catbox Studio - Game Web Interaktif & Gamifikasi Brand",
        description: "Mainkan game web HTML5 ringan tanpa perlu download. Solusi gamifikasi promosi brand dan hiburan browser interaktif.",
        keywords: "catbox studio, game web html5, game browser ringan, gamifikasi brand, advergames promosi, bikin game custom",
      },
      whyUs: {
        title: "Mengapa Axeonsoft - Keunggulan Standar Teknologi",
        description: "Arsitektur bersih berskala tinggi, kecepatan super kilat, pola pikir fokus konversi bisnis, dan dukungan teknis langsung via WhatsApp.",
        keywords: "keunggulan axeonsoft, software house profesional, developer website react, standar teknologi web modern",
      },
      contact: {
        title: "Hubungi Axeonsoft - Konsultasi WhatsApp Cepat",
        description: "Bicara langsung dengan solusi arsitek kami via WhatsApp di 0851-7409-1042. Respons cepat dalam hitungan menit.",
        keywords: "kontak axeonsoft, whatsapp software house, konsultasi pembuatan web, jasa aplikasi jakarta",
      },
      notFound: {
        title: "Halaman Tidak Ditemukan (404)",
        description: "Halaman yang Anda cari tidak tersedia atau telah dipindahkan.",
        keywords: "404, tidak ditemukan, axeonsoft",
      }
    },
    hero: {
      badge: "⚡ Software House Profesional & Transformasi Digital",
      titleStart: "Wujudkan Ide Anda Menjadi",
      titleHighlight: "Produk Digital",
      titleEnd: "Berkinerja Tinggi",
      subtitle: "Kami merancang katalog digital super cepat, sistem booking online otomatis, landing page berkonversi tinggi, serta game web interaktif untuk akselerasi pertumbuhan bisnis Anda.",
      ctaPrimary: "Lihat Semua Layanan",
      ctaSecondary: "Konsultasi Gratis via WhatsApp",
      stats: [
        { value: "99.9%", label: "Uptime & Keandalan" },
        { value: "100+", label: "Proyek Terselesaikan" },
        { value: "< 1s", label: "Loading Super Cepat" },
        { value: "24/7", label: "Dukungan Teknis Siaga" },
      ],
      trustedBy: "Dipercaya oleh startup visioner, pelaku UMKM, dan perusahaan modern",
    },
    categories: {
      badge: "Kategori Utama",
      title: "Solusi Digital Terarah & Berdaya Saing",
      subtitle: "Klik pada masing-masing layanan khusus untuk melihat fitur mendalam, simulasi interaktif, arsitektur kode, dan paket yang tersedia.",
      viewDemo: "Simulasi Interaktif",
    },
    catalogSection: {
      id: "catalog",
      badge: "Kategori 01",
      title: "Katalog Produk & E-Commerce",
      tagline: "Ubah pengunjung menjadi pembeli dengan etalase produk interaktif dan proses checkout tanpa ribet.",
      description: "Solusi e-commerce dan katalog produk kami memungkinkan bisnis Anda menampilkan inventaris secara cepat, dilengkapi pencarian pintar, filter kategori, serta integrasi pemesanan langsung ke WhatsApp.",
      features: [
        "Pencarian instan & filter multi-kategori tanpa reload (0 latency)",
        "Alur pemesanan langsung ke WhatsApp (1-Click Checkout tanpa form rumit)",
        "Kalkulasi keranjang otomatis & estimasi ongkos kirim dinamis",
        "Desain responsif mobile-first yang ramah algoritma mesin pencari",
        "Kesiapan integrasi payment gateway (QRIS otomatis, VA Bank, Kartu)",
        "Arsitektur headless catalog ultra ringan bebas lemot",
      ],
      demoTitle: "Simulasi Etalase Toko Interaktif",
      filterAll: "Semua Produk",
      filterTech: "Software & SaaS",
      filterHardware: "Hardware & Alat",
      filterServices: "Managed Services",
      orderWa: "Pesan via WhatsApp",
      currency: "Rp",
      products: [
        {
          id: 1,
          name: "Enterprise Cloud ERP Suite",
          category: "Software & SaaS",
          price: "15.000.000",
          desc: "Modul otomasi bisnis lengkap dengan faktur, akuntansi, dan stok real-time.",
          rating: 4.9,
          badge: "Populer",
          image: "/images/product-erp-cloud.jpg"
        },
        {
          id: 2,
          name: "Smart POS Dual-Display Terminal",
          category: "Hardware & Alat",
          price: "4.850.000",
          desc: "Printer termal industri, scanner barcode, dan dual layar Android 13.",
          rating: 4.8,
          badge: "Hardware",
          image: "/images/product-smart-pos.jpg"
        },
        {
          id: 3,
          name: "VIP 24/7 DevOps & Server SLA",
          category: "Managed Services",
          price: "3.500.000",
          desc: "Backup harian otomatis, proteksi DDoS, dan garansi uptime 99.99%.",
          rating: 5.0,
          badge: "Layanan",
          image: "/images/product-devops-server.jpg"
        },
        {
          id: 4,
          name: "Omnichannel WhatsApp CRM Bot",
          category: "Software & SaaS",
          price: "7.200.000",
          desc: "Meja bantuan multi-agen pelanggan dengan auto-reply dan broadcast pintar.",
          rating: 4.9,
          badge: "Terlaris",
          image: "/images/product-whatsapp-bot.jpg"
        },
      ],
      packagesTitle: "Pilihan Paket & Implementasi E-Commerce",
      packagesSubtitle: "Biaya transparan dan sistem yang dapat diskalakan sesuai pertumbuhan bisnis Anda.",
      packages: [
        {
          name: "Katalog Digital Starter",
          price: "Rp 3.500.000",
          popular: false,
          desc: "Cocok untuk toko ritel, butik fesyen, kuliner, dan UMKM yang ingin katalog profesional.",
          features: [
            "Hingga 100 produk dengan kategori lengkap",
            "Checkout 1-klik langsung ke WhatsApp",
            "Termasuk domain kustom .com & sertifikat SSL",
            "Tampilan mobile-first ultra responsif",
            "Optimasi metadata SEO dasar"
          ]
        },
        {
          name: "Etalase Toko Growth",
          price: "Rp 7.500.000",
          popular: true,
          desc: "Solusi terfavorit untuk brand yang membutuhkan keranjang belanja dinamis dan manajemen stok.",
          features: [
            "Jumlah produk & kategori tanpa batas",
            "Pencarian instan & filter pintar multi-kategori",
            "Rekap pesanan otomatis rapi ke WhatsApp admin",
            "Integrasi Payment Gateway (QRIS instan, Virtual Account)",
            "Pemasangan Google Analytics & Meta Pixel",
            "Dashboard admin untuk kelola foto & harga"
          ]
        },
        {
          name: "Enterprise Commerce Kustom",
          price: "Penawaran Khusus",
          popular: false,
          desc: "Dirancang untuk distributor besar, rantai toko ritel, dan platform multi-gudang.",
          features: [
            "Arsitektur Headless React/Next.js",
            "Integrasi API ERP / Aplikasi Kasir (POS)",
            "Kalkulasi ongkos kirim ekspedisi multi-cabang otomatis",
            "Dukungan server DevOps & SLA garansi uptime 99.9%",
            "Infrastruktur serverless tahan lonjakan traffic jutaan user"
          ]
        }
      ],
      faqs: [
        {
          q: "Bagaimana cara kerja checkout 1-klik ke WhatsApp?",
          a: "Saat pembeli memilih produk dan menekan tombol 'Pesan via WhatsApp', sistem secara otomatis merangkum detail pesanan (nama produk, varian, jumlah, dan total harga) ke dalam format teks rapi dan langsung membuka aplikasi WhatsApp admin Anda."
        },
        {
          q: "Apakah bisa menerima pembayaran otomatis seperti QRIS dan Virtual Account?",
          a: "Tentu bisa! Kami mengintegrasikan sistem dengan payment aggregator resmi Indonesia (seperti Midtrans, Xendit, atau DOKU) sehingga Anda bisa menerima pembayaran QRIS, Virtual Account semua bank besar, dan kartu kredit secara otomatis."
        },
        {
          q: "Apakah pemilik toko yang awam teknologi mudah mengubah harga dan foto produk?",
          a: "Sangat mudah. Kami menyediakan antarmuka dasbor admin yang ramah pengguna atau sinkronisasi spreadsheet di mana Anda bisa menambah produk baru dalam hitungan detik."
        }
      ]
    },
    bookingSection: {
      id: "booking",
      badge: "Kategori 02",
      title: "Sistem Booking & Reservasi Online",
      tagline: "Otomatisasi jadwal pertemuan, hindari jadwal ganda, dan tingkatkan kehadiran klien.",
      description: "Tinggalkan cara reservasi manual via telepon/chat. Platform booking kami menyediakan kalender real-time, konfirmasi instan ke WhatsApp, dan pengingat otomatis.",
      features: [
        "Validasi slot kalender real-time & jeda waktu otomatis (buffer)",
        "Pengingat jadwal otomatis ke WhatsApp pelanggan H-1 dan H-2 jam",
        "Integrasi pembayaran uang muka (DP) atau lunas di muka",
        "Manajemen jadwal banyak staf, ruang praktik, dan cabang usaha",
        "Fitur pembatalan atau ubah jadwal mandiri ramah pelanggan",
        "Sinkronisasi dua arah dengan Google Calendar & Outlook",
      ],
      demoTitle: "Simulasi Reservasi Langsung",
      serviceLabel: "Pilih Layanan",
      dateLabel: "Pilih Tanggal",
      timeLabel: "Pilih Jam Reservasi",
      nameLabel: "Nama Lengkap Anda",
      phoneLabel: "Nomor WhatsApp",
      submitBtn: "Konfirmasi & Kirim ke WhatsApp",
      servicesList: [
        { id: "consult", name: "Konsultasi Arsitektur Web 1-on-1 (60 Menit)", fee: "Gratis Awal" },
        { id: "audit", name: "Audit Kecepatan & Keamanan Website Lengkap", fee: "Rp 1.500.000" },
        { id: "sprint", name: "Sprint Pembuatan Prototipe MVP Cepat", fee: "Rp 8.000.000" },
      ],
      successMsg: "Simulasi siap! Klik untuk membuka WhatsApp dengan detail reservasi.",
      useCasesTitle: "Didesain Khusus Untuk Berbagai Bidang Jasa",
      useCases: [
        {
          title: "Klinik Kesehatan & Dokter Gigi",
          desc: "Atur jadwal pasien per dokter spesialis, kurangi waktu tunggu di ruang periksa, dan kirim pengingat WhatsApp otomatis."
        },
        {
          title: "Salon, Barbershop & Spa Kecantikan",
          desc: "Pelanggan dapat memilih kapster favorit, jenis treatment, dan bayar uang muka untuk mengunci jadwal."
        },
        {
          title: "Konsultan, Notaris & Pelatih Profesional",
          desc: "Klien langsung memesan sesi konsultasi yang sinkron dengan kalender pribadi Anda tanpa saling chat manual."
        },
        {
          title: "Sewa Lapangan Olahraga & Studio Foto",
          desc: "Booking slot per jam real-time dengan kunci otomatis dan tiket reservasi digital."
        }
      ],
      faqs: [
        {
          q: "Bagaimana sistem mencegah jadwal bentrok (double booking)?",
          a: "Setiap kali pelanggan memilih jam tertentu, sistem langsung mengunci slot tersebut. Pengunjung lain tidak akan bisa memilih jam yang sama, menjamin zero jadwal ganda."
        },
        {
          q: "Apakah pelanggan mendapat konfirmasi dan pengingat ke nomor WhatsApp?",
          a: "Ya! Sistem mengirim pesan konfirmasi tiket booking langsung ke nomor WhatsApp klien secara otomatis, dilengkapi detail tanggal, jam, dan petunjuk lokasi."
        },
        {
          q: "Apakah bisa memberlakukan DP (uang muka) sebelum booking dikonfirmasi?",
          a: "Bisa sekali. Anda dapat mengatur apakah reservasi membutuhkan pembayaran DP (misal 50% atau Rp 50.000 via QRIS) agar pelanggan tidak membatalkan sepihak."
        }
      ]
    },
    landingSection: {
      id: "landing-page",
      badge: "Kategori 03",
      title: "Landing Page Berkonversi Tinggi (CRO)",
      tagline: "Maksimalkan hasil iklan Anda dengan halaman berkecepatan kilat yang dirancang khusus untuk menghasilkan prospek.",
      description: "Kami merancang corong konversi berbasis psikologi pengguna yang lolos uji Google PageSpeed 95+ dan dioptimalkan khusus untuk traffic Google Ads & Meta Ads.",
      features: [
        "Kecepatan loading di bawah 1 detik dengan arsitektur web modern (< 800ms)",
        "Formula tata letak Conversion Rate Optimization (CRO)",
        "Struktur siap uji A/B dan pelacakan event (Meta Pixel, Google Tag Manager)",
        "Copywriting persuasif dan formulir tangkapan prospek yang efektif",
        "Perlindungan anti-spam dan pengiriman data langsung ke Webhook / CRM",
        "Tanpa template berat: 100% kode khusus berfokus konversi maksimal"
      ],
      metrics: [
        { score: "99", label: "Skor Performa Mobile", sub: "Standar Google Lighthouse" },
        { score: "+340%", label: "Kenaikan Konversi Prospek", sub: "Dibandingkan template biasa" },
        { score: "< 800ms", label: "First Contentful Paint", sub: "Hampir nol bounce pada klik iklan" },
      ],
      demoCta: "Dapatkan Audit Wireframe Landing Page Gratis",
      demoSub: "Tim UX senior kami akan menganalisis halaman penawaran Anda dalam 24 jam.",
      principlesTitle: "Prinsip Ilmiah Landing Page Konversi Tinggi",
      principles: [
        {
          step: "01",
          title: "Aturan 3 Detik Pertama",
          desc: "Kalimat judul di bagian atas harus langsung menjawab: Apa produknya? Apa keuntungannya untuk saya? Apa langkah selanjutnya?"
        },
        {
          step: "02",
          title: "Jalur Aksi Tanpa Hambatan",
          desc: "Tombol WhatsApp melayang (sticky), form pengisian ringkas 2 langkah, dan navigasi yang tidak membingungkan calon pembeli."
        },
        {
          step: "03",
          title: "Efisiensi Biaya Iklan",
          desc: "Halaman super cepat menurunkan rasio pentalan (bounce rate) dan menaikkan Quality Score iklan Google & Meta, sehingga biaya per klik (CPC) jauh lebih murah."
        },
        {
          step: "04",
          title: "Bukti Sosial Psikologis",
          desc: "Penempatan testimoni otentik, lencana garansi, dan data metrik untuk membangun rasa percaya seketika."
        }
      ],
      faqs: [
        {
          q: "Mengapa landing page kustom lebih menghasilkan omzet dibanding template WordPress biasa?",
          a: "Template WordPress seringkali membawa script CSS/JS berlebihan yang memperlambat website hingga 4-7 detik di smartphone. Setiap keterlambatan 1 detik menurunkan konversi hingga 20%. Kode kustom kami terbuka di bawah 800 milidetik."
        },
        {
          q: "Apakah tim Axeonsoft membantu setup Meta Pixel dan Google Analytics?",
          a: "Ya! Kami melakukan instalasi lengkap Meta Pixel, Google Tag Manager, Google Ads Conversion Tracker, dan TikTok Pixel agar setiap rupiah anggaran iklan Anda dapat diukur efektivitasnya."
        },
        {
          q: "Berapa lama proses pembuatan landing page kustom ini?",
          a: "Rata-rata pengerjaan adalah 3 hingga 5 hari kerja, mulai dari wireframe, copywriting, pengkodean performa tinggi, hingga setup tracking iklan."
        }
      ]
    },
    gamesSection: {
      id: "games",
      badge: "Kategori 04 • Divisi Game",
      studioName: "Catbox Studio",
      title: "Game Web Interaktif & Hiburan Browser",
      tagline: "Nikmati game HTML5 ringan yang bisa langsung dimainkan tanpa perlu instal aplikasi.",
      description: "Catbox Studio adalah divisi pengembangan game resmi dari Axeonsoft. Kami menciptakan game browser yang interaktif, modul gamifikasi untuk kampanye promosi merek, dan pengalaman hiburan digital yang lancar di semua perangkat.",
      features: [
        "Instant Play: Main langsung di browser tanpa perlu download atau instal aplikasi",
        "Lintas Perangkat: 60fps responsif di HP Android, iPhone, tablet, maupun PC desktop",
        "Gamifikasi Bisnis: Game kustom bermerek untuk promosi kampanye & akuisisi pelanggan",
        "Papan Skor Global & Fitur kompetisi turnamen yang interaktif",
        "Teknologi WebGL / HTML5 ringan dengan ukuran file awal di bawah 2MB"
      ],
      visitStudioBtn: "Kunjungi Game Catbox Studio",
      directUrl: "https://catbox.axeonsoft.com/",
      featuredBadge: "Game Unggulan di Catbox Studio",
      gamesList: [
        {
          title: "Cyber Meow Runner",
          genre: "Endless Runner / Arcade",
          rating: "4.9 ★",
          tag: "Trending",
          desc: "Pandu kucing cyberpunk melompati atap berlampu neon sambil menghindari drone laser.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/cyber-meow-runner.jpg"
        },
        {
          title: "Pixel Dungeon Quest",
          genre: "Roguelike / Strategi",
          rating: "4.8 ★",
          tag: "Retro Klasik",
          desc: "Jelajahi labirin bawah tanah berliku, kumpulkan peti harta karun, dan lawan monster.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/pixel-dungeon-quest.jpg"
        },
        {
          title: "Speedy Galactic Racer",
          genre: "Balapan Futuristik",
          rating: "4.9 ★",
          tag: "3D WebGL",
          desc: "Balapan pesawat supersonik antar galaksi dengan grafis 3D WebGL yang halus.",
          playUrl: "https://catbox.axeonsoft.com/",
          image: "/images/speedy-galactic-racer.jpg"
        },
      ],
      brandGamificationTitle: "Mengapa Brand Memilih Game Web Catbox",
      brandGamificationPoints: [
        {
          title: "Waktu Interaksi 4x Lebih Lama",
          desc: "Game interaktif membuat calon pelanggan berinteraksi dengan merek Anda selama 3-5 menit, dibandingkan hanya 30 detik pada website biasa."
        },
        {
          title: "Potensi Viral Organik Tinggi",
          desc: "Pemain suka membagikan skor tertinggi ke status WhatsApp, Instagram Story, dan TikTok, menciptakan promosi gratis dari mulut ke mulut."
        },
        {
          title: "Konversi Kupon Diskon Langsung",
          desc: "Mekanisme reward seru: selesaikan level game untuk membuka kode voucer diskon belanja yang langsung digunakan di kasir/toko online."
        }
      ],
      faqs: [
        {
          q: "Apakah pengguna harus mengunduh file besar dari App Store / Play Store?",
          a: "Sama sekali tidak! Semua game Catbox Studio berjalan 100% di browser web menggunakan HTML5 & WebGL. Cukup buka link atau scan barcode langsung bisa dimainkan."
        },
        {
          q: "Apakah perusahaan kami bisa memesan game khusus dengan logo dan maskot sendiri?",
          a: "Bisa! Kami membuat game kustom ber-branding lengkap dengan maskot perusahaan, item promosi produk Anda, dan mekanisme bagi-bagi voucer belanja."
        }
      ]
    },
    whyUs: {
      id: "why-us",
      badge: "Mengapa Axeonsoft",
      title: "Keunggulan Rekayasa Teknologi Kami",
      subtitle: "Kami menggabungkan strategi bisnis, keahlian rekayasa kode, dan estetika visual modern.",
      cards: [
        {
          title: "Diciptakan Untuk Kecepatan",
          desc: "Dibangun dengan framework modern seperti React, Next.js, dan Vite. Setiap milidetik diperhitungkan untuk ranking SEO dan konversi penjualan Anda.",
          icon: "Zap",
        },
        {
          title: "Arsitektur Bersih & Skalabel",
          desc: "Bebas dari template berat dan kode berantakan. Kode terstruktur rapi, aman, dan siap bertumbuh bersama skala bisnis Anda.",
          icon: "Layers",
        },
        {
          title: "Fokus Pada Hasil & Konversi",
          desc: "Kami menganalisis alur pengguna dan meminimalisir hambatan, memastikan setiap pengunjung mudah menghubungi atau berbelanja.",
          icon: "TrendingUp",
        },
        {
          title: "Dukungan Langsung WhatsApp",
          desc: "Tidak ada antrean tiket robotik. Anda dapat berdiskusi langsung dengan tim teknis dan project lead kami.",
          icon: "ShieldCheck",
        },
      ],
      processTitle: "5 Tahap Standar Rekayasa Kami",
      processSubtitle: "Bagaimana kami mewujudkan ide Anda menjadi platform digital kelas produksi.",
      steps: [
        {
          num: "01",
          title: "Eksplorasi & Perencanaan",
          desc: "Kami memetakan tujuan bisnis Anda, target pelanggan, dan kebutuhan sistem untuk menyusun arsitektur terbaik."
        },
        {
          num: "02",
          title: "Desain UX/UI Berpresisi Tinggi",
          desc: "Merancang visual modern yang memikat dengan psikologi kemudahan interaksi di setiap sudut layar."
        },
        {
          num: "03",
          title: "Pengkodean Modern & Bersih",
          desc: "Menulis kode modular dengan React, TailwindCSS, dan backend andal yang aman dan teruji."
        },
        {
          num: "04",
          title: "Audit Performa & SEO",
          desc: "Pengujian menyeluruh di berbagai HP dan laptop, verifikasi skor Google Lighthouse 95+, dan optimasi Core Web Vitals."
        },
        {
          num: "05",
          title: "Peluncuran & Dukungan SLA",
          desc: "Pemasangan domain kustom, sertifikat SSL, konfigurasi tracking analitik, dan garansi pendampingan operasional."
        }
      ],
      comparison: {
        title: "Agensi Biasa vs Standar Axeonsoft",
        headers: ["Fitur / Parameter", "Agensi Umum", "Standar Axeonsoft"],
        rows: [
          ["Kecepatan Buka di HP", "3 - 7 detik (Template CMS Berat)", "< 1 detik (Modern React/Vite)"],
          ["Kepemilikan Source Code", "Terkunci di platform pihak ketiga", "100% hak milik kode menjadi milik Anda"],
          ["Saluran Bantuan", "Tiket email lambat (2-3 hari kerja)", "WhatsApp langsung ke tim lead engineer (<15 menit)"],
          ["Optimasi Mesin Pencari", "Hanya pasang plugin dasar", "Semantic HTML5, Schema JSON-LD, Core Web Vitals"],
          ["Integrasi Checkout WhatsApp", "Jarang atau plugin berbayar", "Bawaan sistem langsung dengan 1-klik"]
        ]
      }
    },
    contact: {
      id: "contact",
      badge: "Hubungi Kami",
      title: "Siap Mewujudkan Produk Digital Anda?",
      subtitle: "Hubungi tim kami langsung via WhatsApp, email, atau ikuti kami di berbagai media sosial resmi.",
      waTitle: "Konsultasi Cepat via WhatsApp",
      waDesc: "Bicara langsung dengan solusi arsitek kami. Respons cepat dalam hitungan menit.",
      waButton: "Chat via WhatsApp (0851-7409-1042)",
      waNumber: "0851-7409-1042",
      emailLabel: "Email Resmi",
      emailAddress: "info@axeonsoft.com",
      locationLabel: "Lokasi Kantor",
      locationValue: "Jakarta, Indonesia (Melayani Klien Global)",
      socialsTitle: "Semua Saluran Resmi",
      socialsSubtitle: "Ikuti pembaruan Axeonsoft, studi kasus, tips teknologi, dan rilis game Catbox terbaru.",
      formName: "Nama Lengkap",
      formEmail: "Alamat Email",
      formService: "Kategori Layanan",
      formBudget: "Estimasi Anggaran",
      formMessage: "Deskripsi Kebutuhan Proyek",
      formSubmit: "Kirim Permintaan Proyek via WhatsApp",
    },
    footer: {
      copyright: "© 2026 Axeonsoft. Seluruh hak cipta dilindungi.",
      disclaimer: "Axeonsoft adalah software house dan penyedia solusi pengembangan produk digital.",
      gamingDivision: "Divisi Game: Catbox Studio",
      backToTop: "Kembali ke Atas",
    },
  },
};

export const officialPhone = "085174091042";
export const officialPhoneDisplay = "0851-7409-1042";
export const officialWaLink = "https://wa.me/6285174091042";

// Only WhatsApp, Instagram, YouTube, TikTok
export const socialLinks = [
  { 
    name: "WhatsApp", 
    url: "https://wa.me/6285174091042?text=Halo%20Axeonsoft,%20saya%20tertarik%20konsultasi%20layanan", 
    icon: "MessageSquare", 
    handle: "0851-7409-1042" 
  },
  { 
    name: "Instagram", 
    url: "https://instagram.com/axeonsoft", 
    icon: "Instagram", 
    handle: "@axeonsoft" 
  },
  { 
    name: "YouTube", 
    url: "https://youtube.com/@axeonsoft", 
    icon: "Youtube", 
    handle: "@axeonsoft" 
  },
  { 
    name: "TikTok", 
    url: "https://tiktok.com/@axeonsoft", 
    icon: "Video", 
    handle: "@axeonsoft" 
  },
];
