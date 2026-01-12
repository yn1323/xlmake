(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [652],
  {
    6610(e, t, n) {
      n.d(t, { R: () => l, x: () => c });
      var i = n(7140);
      const s = {},
        r = i.createContext(s);
      function l(e) {
        const t = i.useContext(r);
        return i.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          i.createElement(r.Provider, { value: t }, e.children)
        );
      }
    },
    7276(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => d,
        });
      const i = JSON.parse(
        '{"id":"intro","title":"Introduction","description":"xlkit is a declarative Excel generation library for TypeScript.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/intro.md","sourceDirName":".","slug":"/intro","permalink":"/xlkit/en/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Installation","permalink":"/xlkit/en/docs/installation"}}',
      );
      var s = n(5656),
        r = n(6610);
      const l = { sidebar_position: 1 },
        c = "Introduction",
        o = {},
        d = [
          { value: "Why xlkit?", id: "why-xlkit", level: 2 },
          { value: "Comparison with ExcelJS", id: "comparison-with-exceljs", level: 2 },
          { value: "Key Features", id: "key-features", level: 2 },
          { value: "Next Steps", id: "next-steps", level: 2 },
        ];
      function a(e) {
        const t = {
          a: "a",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.header, { children: (0, s.jsx)(t.h1, { id: "introduction", children: "Introduction" }) }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.strong, { children: "xlkit" }),
                " is a declarative Excel generation library for TypeScript.",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "why-xlkit", children: "Why xlkit?" }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "Existing JS/TypeScript Excel libraries (like ExcelJS) are ",
                (0, s.jsx)(t.strong, { children: "imperative" }),
                ", making it difficult to see the final output from the code.",
              ],
            }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "xlkit provides a ",
                (0, s.jsx)(t.strong, { children: "declarative" }),
                " API, where the code clearly shows the final Excel structure.",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "comparison-with-exceljs", children: "Comparison with ExcelJS" }),
            "\n",
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { children: "Aspect" }),
                      (0, s.jsx)(t.th, { children: "ExcelJS (Imperative)" }),
                      (0, s.jsx)(t.th, { children: "xlkit (Declarative)" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Style" }),
                        (0, s.jsx)(t.td, { children: "Cell-by-cell manipulation" }),
                        (0, s.jsx)(t.td, { children: "Declare final structure" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Clarity" }),
                        (0, s.jsx)(t.td, { children: "Hard to see result from code" }),
                        (0, s.jsx)(t.td, { children: "Code shows result clearly" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Like" }),
                        (0, s.jsx)(t.td, { children: "jQuery" }),
                        (0, s.jsx)(t.td, { children: "React" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "key-features", children: "Key Features" }),
            "\n",
            (0, s.jsxs)(t.ul, {
              children: [
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "Declarative API" }),
                    ": Easy to understand final output",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [(0, s.jsx)(t.strong, { children: "Method chaining" }), ": Fluent Excel construction"],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "Full TypeScript support" }),
                    ": Type-safe with IntelliSense",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [(0, s.jsx)(t.strong, { children: "Preset styles" }), ": Apply common styles easily"],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [(0, s.jsx)(t.strong, { children: "Node.js + Browser" }), ": Works in both environments"],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "next-steps", children: "Next Steps" }),
            "\n",
            (0, s.jsxs)(t.ul, {
              children: [
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, { href: "/xlkit/en/docs/installation", children: "Installation" }),
                    " to get started",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, { href: "/xlkit/en/docs/quick-start", children: "Quick Start" }),
                    " to learn the basics",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components };
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
      }
    },
  },
]);
