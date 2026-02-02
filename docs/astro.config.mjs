// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://jarutosurano.github.io',
  base: '/wp-plugin-dev-with-claude-no-coding',
  integrations: [
    starlight({
      title: 'WP Plugin Dev Journey',
      description: 'Learning WordPress Plugin Development with Claude AI - No Coding Required',
      favicon: '/favicon.png',
      components: {
        ThemeSelect: './src/components/ThemeSelect.astro',
      },
      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/jarutosurano/wp-plugin-dev-with-claude-no-coding'
        }
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Introduction', slug: 'getting-started/introduction' },
            { label: 'Setup & Prerequisites', slug: 'getting-started/setup' },
          ],
        },
        {
          label: 'Learning Progress',
          autogenerate: { directory: 'progress' },
        },
        {
          label: 'Plugins Developed',
          autogenerate: { directory: 'plugins' },
        },
        {
          label: 'Reference',
          items: [
            { label: 'Useful Commands', slug: 'reference/commands' },
            { label: 'Resources', slug: 'reference/resources' },
            { label: 'Changelog', slug: 'reference/changelog' },
          ],
        },
      ],
      head: [
        {
          tag: 'meta',
          attrs: {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1',
          },
        },
      ],
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
