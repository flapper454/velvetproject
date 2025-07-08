// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://flapper454.github.io',
  base: 'velvetproject',
  vite: {
    plugins: [tailwindcss()],
  },
});