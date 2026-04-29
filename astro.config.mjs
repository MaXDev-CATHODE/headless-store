// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://maxdev-cathode.github.io',
  base: '/headless-store',
  output: 'static',
  vite: {
    plugins: [tailwindcss()]
  }
});