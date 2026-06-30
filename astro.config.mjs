// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Update `site` to your custom domain before the production Amplify deploy.
export default defineConfig({
  site: 'https://mahmoudsabbagh.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
