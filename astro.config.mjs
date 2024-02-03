import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [starlight({
    defaultLocale: 'root',
    locales: {
      root: {
        label: 'Português do Brasil',
        lang: 'pt-br', // lang é obrigatório para localidade raiz
      }
    },
    title: 'Componentes em Astro',
    logo: {
      light: './src/assets/images/c-logo.svg',
      dark: './src/assets/images/c-logo-transparent.svg',
      replacesTitle: true,
    },
    customCss: [
      '@styles/tailwind.css',
    ],
    sidebar: [
      {
        label: 'Comece Aqui',
        autogenerate: {
          directory: 'guia'
        }
      }, 
      {
        label: 'Componentes',
        autogenerate: {
          directory: 'componentes'
        }
      }
    ]
  }), tailwind({
    applyBaseStyles: false,
  })]
});