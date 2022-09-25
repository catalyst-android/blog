module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
};
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'CatalystOS Blog',
  url: 'https://catalystos.org/blog',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  organizationName: 'CatalystOS Project',
  projectName: 'blog',

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false,
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: '7639560510014441',
          anonymizeIP: true,
        },
      }),
    ],
  ],

  plugins: [
    'docusaurus-plugin-google-adsense'
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      googleAdsense: {
        dataAdClient: 'ca-pub-7639560510014441',
      },
      navbar: {
        title: 'CatalystOS',
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Community',
            items: [
              {
                label: 'Website',
                href: 'https://catalystos.org/',
              },
              {
                label: 'Telegram',
                href: 'https://telegram.me/catalyst_android',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Catalyst OS GitHub',
                href: 'https://github.com/catalyst-android',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} CatalystOS Project, All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
