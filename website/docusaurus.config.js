// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "xlmake",
  tagline: "Declarative Excel Generation Library",
  favicon: "img/favicon.ico",

  url: "https://yn1323.github.io",
  baseUrl: "/xlmake/",

  organizationName: "yn1323",
  projectName: "xlmake",

  onBrokenLinks: "throw",

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja"],
    localeConfigs: {
      ja: {
        label: "日本語",
        direction: "ltr",
      },
      en: {
        label: "English",
        direction: "ltr",
      },
    },
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/yn1323/xlmake/tree/main/website/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "xlmake",
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Docs",
          },
          {
            type: "localeDropdown",
            position: "right",
          },
          {
            href: "https://github.com/yn1323/xlmake",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Getting Started",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/yn1323/xlmake",
              },
              {
                label: "npm",
                href: "https://www.npmjs.com/package/xlmake",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} xlmake. Built with Docusaurus.`,
      },
      prism: {
        theme: require("prism-react-renderer").themes.github,
        darkTheme: require("prism-react-renderer").themes.dracula,
      },
    }),
};

module.exports = config;
