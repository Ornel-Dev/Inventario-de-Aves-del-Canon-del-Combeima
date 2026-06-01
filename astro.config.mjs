// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config



    export default defineConfig({
  adapter: vercel(),
  
 build: {
    // Astro creará nosotros.html en lugar de nosotros/index.html
    format: 'file' 
  },
  // Opcional: le dice a Astro que nunca genere rutas con '/'
  trailingSlash: 'never'

    });