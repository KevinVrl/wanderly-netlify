/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Active l'export statique pour App Router
  images: {
    unoptimized: true, // Désactive l'optimisation d'images pour éviter les erreurs sur Netlify
  },
};

module.exports = nextConfig;
