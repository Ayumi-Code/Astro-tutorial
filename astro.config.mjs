// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://creator-ayu.netlify.app",
  // base: '/my_astro/',
  integrations: [preact()]
});