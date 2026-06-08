// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config



    export default defineConfig({
  adapter: vercel(),
  


  // Fuerza a que los estilos se incrusten en el HTML (<style>...</style>)
  build: {
    inlineStylesheets: 'always'
  }

  // Opcional: le dice a Astro que nunca genere rutas con '/'

    });