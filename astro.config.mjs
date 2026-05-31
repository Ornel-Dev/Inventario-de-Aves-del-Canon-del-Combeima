// @ts-check
import { defineConfig } from 'astro/config';
    import AstroPWA from '@vite-pwa/astro';

import vercel from '@astrojs/vercel';

// https://astro.build/config



    export default defineConfig({
  adapter: vercel(),

      integrations: [
        AstroPWA({
          registerType: 'autoUpdate',
          manifest: {
            name: 'Mi Proyecto Astro PWA',
            short_name: 'AstroPWA',
            description: 'Mi increíble página hecha con Astro',
            theme_color: '#ffffff',
            icons: [
              { src: 'icon-192x192.png', sizes: '192x192', type: 'image/png' },
              { src: 'icon-512x512.png', sizes: '512x512', type: 'image/png' }
            ]
          },
          workbox: {
            globPatterns: ['**/*.{js,css,html,svg,png,jpg,webp,avif}'], // Archivos que quieres offline
          }
        })
      ]
    });