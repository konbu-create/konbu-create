import { defineConfig } from 'vite';

const SITE_URL = process.env.VITE_SITE_URL || 'https://konbu-create.pages.dev/';
const BASE = process.env.VITE_BASE ?? (process.env.GITHUB_ACTIONS ? '/konbu-create/' : '/');
const normalizedBase = BASE.endsWith('/') ? BASE : `${BASE}/`;
const defaultUrl = 'https://konbu-create.pages.dev/';
const isGhPages = normalizedBase === '/konbu-create/' || SITE_URL.includes('github.io');

function seoPlugin() {
  return {
    name: 'seo-konbu-create',
    transformIndexHtml(html: string) {
      if (!isGhPages) return html;
      // rewrite canonical / OGP URLs to GitHub Pages SITE_URL when deploying there
      if (SITE_URL !== defaultUrl) {
        return html.split(defaultUrl).join(SITE_URL);
      }
      return html;
    },
  };
}

export default defineConfig({
  base: normalizedBase,
  plugins: [seoPlugin()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: ['konbu.border-saury.ts.net'],
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
  },
  define: {
    __SITE_URL__: JSON.stringify(SITE_URL),
  },
});
