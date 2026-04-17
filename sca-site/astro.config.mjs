import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://scaonline.org',
  integrations: [tailwind(), sitemap(), mdx()],
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  server: { host: true },
  vite: {
    ssr: {
      // @fontsource 5.2+ ships export maps that make Node's ESM loader choke
      // on `.css` imports during SSR. Keep them in Vite's transform pipeline.
      noExternal: ['@fontsource/*'],
    },
    server: {
      allowedHosts: true,
      proxy: {
        '/api/v1': {
          target: process.env.DECAP_PROXY_TARGET || 'http://localhost:8081',
          changeOrigin: true,
        },
      },
    },
  },
});
