// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jhony Almeida',
  tagline: 'Estudante de engenharia, apaixonado por tecnologia',
  favicon: 'img/programacao.ico',

  future: {
    v4: true,
  },

  url: 'https://jhonyrsa.github.io',
  baseUrl: '/',

  organizationName: 'jhonyrsa',
  projectName: 'jhonyrsa.github.io',

  deploymentBranch: 'gh-pages',

  trailingSlash: false,
  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },

  presets: [
    [
      'classic',
      {
        docs: false,
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'Jhony Almeida',
      logo: {
      alt: 'Jhony Almeida',
      src: 'img/programacao.ico',
  },
      items: [
        { to: '/', label: 'Início', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            { label: 'Início', to: '/' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Contato',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/jhonyrsa',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/jhonyrsa/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Jhony Almeida`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;