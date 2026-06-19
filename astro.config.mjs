import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Aktuell: GitHub-Pages-Unterpfad. Bei Custom-Domain-Umstellung:
  //   site: 'https://piitoosbootsservice.de', base: '/', CNAME-Datei in public/ anlegen
  site: 'https://hausblick.github.io',
  base: '/Piitoos-Bootsservice',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
