(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [299],
  {
    1047(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => o,
        });
      const i = JSON.parse(
        '{"id":"installation","title":"Installation","description":"xlkit can be installed using npm, pnpm, or yarn.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/installation.md","sourceDirName":".","slug":"/installation","permalink":"/xlkit/en/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/installation.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Introduction","permalink":"/xlkit/en/docs/intro"},"next":{"title":"Quick Start","permalink":"/xlkit/en/docs/quick-start"}}',
      );
      var s = t(5656),
        a = t(6610);
      const l = { sidebar_position: 2 },
        r = "Installation",
        c = {},
        o = [
          { value: "Install with package manager", id: "install-with-package-manager", level: 2 },
          { value: "Requirements", id: "requirements", level: 2 },
          { value: "TypeScript", id: "typescript", level: 2 },
          { value: "Next Steps", id: "next-steps", level: 2 },
        ];
      function d(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: "installation", children: "Installation" }) }),
            "\n",
            (0, s.jsx)(n.p, { children: "xlkit can be installed using npm, pnpm, or yarn." }),
            "\n",
            (0, s.jsx)(n.h2, { id: "install-with-package-manager", children: "Install with package manager" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "npm install xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "pnpm add xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "yarn add xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "requirements", children: "Requirements" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsx)(n.li, { children: "Node.js 18.0 or higher" }),
                "\n",
                (0, s.jsx)(n.li, { children: "Browser (modern browsers supported)" }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "typescript", children: "TypeScript" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "xlkit is written in TypeScript and includes type definitions. No additional type packages needed.",
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "next-steps", children: "Next Steps" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/quick-start", children: "Quick Start" }),
                    " to learn the basics",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, a.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => l, x: () => r });
      var i = t(7140);
      const s = {},
        a = i.createContext(s);
      function l(e) {
        const n = i.useContext(a);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          i.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
