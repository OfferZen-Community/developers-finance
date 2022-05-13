// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'The Developer Finance Guide',
  tagline: 'A curated finance guide brought to you by OfferZen, in partnership with Investec',
  url: 'https://www.developersfinance.guide',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'offerzen', // Usually your GitHub org/user name.
  projectName: 'Developers Finance', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/OfferZen-Community/developers-finance/blob/main',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/OfferZen-Community/developers-finance/blob/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'OfferZen Logo',
          src: 'img/offerZen_logo_black.png',
          srcDark:'img/offerZen_logo_white.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'about/about-intro',
            position: 'left',
            label: 'The Guide',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/OfferZen-Community/developers-finance',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Involved',
            items: [
              {
                label: 'Contribute',
                href: 'https://github.com/OfferZen-Community/developers-finance',
              },
              {
                label: 'Make a suggestion',
                href: 'https://8malmkzgvs8.typeform.com/to/oLVWxa8r?',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'OfferZen Community',
                href: 'https://www.offerzen.com/community',
              },
              {
                label: 'Sign Up For Programmable Banking',
                href: 'https://www.investec.com/en_za/banking/programmable-banking.html',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://www.offerzen.com/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/OfferZen-Community/developers-finance',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OfferZen`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
    plugins: [
      [
        require.resolve('docusaurus-gtm-plugin'),
        {
          id: 'GTM-W3VWK67', // GTM Container ID
        }
      ]
    ],
};

module.exports = config;
