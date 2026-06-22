import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'TCBS React Native UI',
  tagline: 'A customizable React Native UI component library',
  url: 'https://TechCraft-By-Subrata.github.io',
  baseUrl: '/react-native-mazic-ui/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment
  organizationName: 'TechCraft-By-Subrata',
  projectName: 'react-native-mazic-ui',
  deploymentBranch: 'gh-pages',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo name
          editUrl:
            'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui/edit/main/docs-site/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        // `hashed` is recommended as long-term-cache of index file
        hashed: true,
        // language used to preprocess markdown and code block content
        language: ['en'],
        // whether to index the title of each doc page, default: true
        indexPages: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'TCBS UI',
        logo: {
          alt: 'TCBS Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docsVersion',
            label: 'Docs',
            position: 'left',
          },
          {
            type: 'docsVersionDropdown',
            position: 'left',
          },
          {
            href: 'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui',
            label: 'GitHub',
            position: 'right',
          },
          // Theme switcher using a simple text item with custom styling
          {
            type: 'dropdown',
            label: 'Theme',
            position: 'right',
            items: [
              {
                label: 'Light Mode',
                to: '#',
                onClick: (e) => {
                  e.preventDefault();
                  document.documentElement.classList.remove('theme-dark');
                  localStorage.setItem('theme', 'light');
                }
              },
              {
                label: 'Dark Mode',
                to: '#',
                onClick: (e) => {
                  e.preventDefault();
                  document.documentElement.classList.add('theme-dark');
                  localStorage.setItem('theme', 'dark');
                }
              }
            ]
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/TechCraft-By-Subrata/react-native-mazic-ui',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} TechCraft By Subrata. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
