// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false
  },
  site: 'https://JulianCastillo14.github.io',
  base: '/portafolio', 
});