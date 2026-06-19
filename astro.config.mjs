import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom Domain: site auf die Domain, base auf '/'
  site: 'https://piitoosbootsservice.de',
  base: '/',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
