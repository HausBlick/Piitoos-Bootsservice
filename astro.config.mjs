import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // WICHTIG: Anpassen, wenn das Repo nicht "piitoos-bootsservice" heißt!
  // Bei Custom Domain: site auf die Domain setzen und base auf '/'
  site: 'https://hausblick.github.io',
  base: '/Piitoos-Bootsservice',
  integrations: [sitemap()],
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
