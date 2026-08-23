import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5174,
    allowedHosts: ['konbu.border-saury.ts.net'],
  },
  preview: {
    host: '0.0.0.0',
    port: 5174,
  },
});
