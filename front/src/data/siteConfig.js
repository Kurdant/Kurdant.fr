// Configuration générale du site Kurdant.fr
// Généré par Axel (React Senior Developer)

export const siteConfig = {
  // Informations générales
  title: "Kurdant.fr",
  author: "Hugo",
  description: "Portfolio cyberpunk de Hugo, développeur junior spécialisé en React et backend",
  url: "https://kurdant.fr",
  email: "contact@kurdant.fr",
  
  // SEO
  keywords: [
    "portfolio",
    "développeur",
    "react",
    "cyberpunk",
    "hugo",
    "kurdant",
    "javascript",
    "web",
    "frontend",
    "backend"
  ],
  
  // Navigation
  nav: {
    home: { label: "Accueil", path: "/" },
    about: { label: "À Propos", path: "/about" },
    blog: { label: "Blog", path: "/blog" },
    games: { label: "Jeux", path: "/games" },
    contact: { label: "Contact", path: "/contact" }
  },
  
  // Réseaux sociaux
  social: {
    github: "https://github.com/hugo-kurdant",
    linkedin: "https://linkedin.com/in/hugo-kurdant",
    twitter: "https://twitter.com/HugoKurdant"
  },
  
  // APIs externes
  apis: {
    wisp: {
      baseUrl: "https://wisp.blog/api",
      blogId: "kurdant-blog" // À configurer
    },
    supabase: {
      url: import.meta.env.VITE_SUPABASE_URL,
      anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY
    }
  },
  
  // Configuration thème
  theme: {
    defaultMode: "cyberpunk",
    modes: ["cyberpunk", "minimal"]
  },
  
  // Performance
  performance: {
    lazyLoading: true,
    imageOptimization: true,
    cacheStrategy: "network-first"
  }
};

export default siteConfig;