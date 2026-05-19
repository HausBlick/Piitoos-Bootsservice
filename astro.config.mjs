import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // WICHTIG: Anpassen, wenn das Repo nicht "piitoos-bootsservice" heißt!
  // Bei Custom Domain: site auf die Domain setzen und base auf '/'
  site: 'https://piitoo.github.io',
  base: '/piitoos-bootsservice',
  build: {
    assets: 'assets',
  },
  compressHTML: true,
});
