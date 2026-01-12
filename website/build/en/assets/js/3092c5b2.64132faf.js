(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [39],
  {
    2214(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => o,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => a,
        });
      const i = JSON.parse(
        '{"id":"reference/limitations","title":"Unsupported Features","description":"xlkit is primarily designed for \\"data export\\" and does not support the following features.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/limitations.md","sourceDirName":"reference","slug":"/reference/limitations","permalink":"/xlkit/en/docs/reference/limitations","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/reference/limitations.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Presets Reference","permalink":"/xlkit/en/docs/reference/presets"},"next":{"title":"Excel Constraints","permalink":"/xlkit/en/docs/reference/excel-constraints"}}',
      );
      var s = n(5656),
        r = n(6610);
      const l = { sidebar_position: 2 },
        d = "Unsupported Features",
        o = {},
        a = [
          { value: "Unsupported Features List", id: "unsupported-features-list", level: 2 },
          { value: "Details", id: "details", level: 2 },
          { value: "Charts", id: "charts", level: 3 },
          { value: "Formulas", id: "formulas", level: 3 },
          { value: "Appending to Existing Excel", id: "appending-to-existing-excel", level: 3 },
          { value: "Column Width/Row Height Reading", id: "column-widthrow-height-reading", level: 3 },
          { value: "Pivot Tables / Macros", id: "pivot-tables--macros", level: 3 },
          { value: "Alternatives", id: "alternatives", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function c(e) {
        const t = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          h3: "h3",
          header: "header",
          li: "li",
          p: "p",
          pre: "pre",
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
            (0, s.jsx)(t.header, {
              children: (0, s.jsx)(t.h1, { id: "unsupported-features", children: "Unsupported Features" }),
            }),
            "\n",
            (0, s.jsx)(t.p, {
              children: 'xlkit is primarily designed for "data export" and does not support the following features.',
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "unsupported-features-list", children: "Unsupported Features List" }),
            "\n",
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [(0, s.jsx)(t.th, { children: "Feature" }), (0, s.jsx)(t.th, { children: "Reason" })],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Charts" }),
                        (0, s.jsx)(t.td, { children: "Out of scope" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Formulas" }),
                        (0, s.jsx)(t.td, { children: "Calculations should be done in code" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Appending to existing Excel" }),
                        (0, s.jsx)(t.td, { children: "New file creation only" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Column width/row height reading" }),
                        (0, s.jsx)(t.td, { children: "Not in reading API scope" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Pivot Tables" }),
                        (0, s.jsx)(t.td, { children: "Out of scope" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "Macros" }),
                        (0, s.jsx)(t.td, { children: "Out of scope" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "details", children: "Details" }),
            "\n",
            (0, s.jsx)(t.h3, { id: "charts", children: "Charts" }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "xlkit is designed for data export, so chart functionality is not supported. If you need charts, consider generating them as images and inserting with ",
                (0, s.jsx)(t.code, { children: ".image()" }),
                ".",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h3, { id: "formulas", children: "Formulas" }),
            "\n",
            (0, s.jsx)(t.p, {
              children:
                "xlkit does not support formulas. Perform calculations in JavaScript/TypeScript and pass the results as data.",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '// NG: Formulas don\'t work\n// { total: "=A1+B1" }\n\n// OK: Pass calculated results\n{ total: price + quantity }\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h3, { id: "appending-to-existing-excel", children: "Appending to Existing Excel" }),
            "\n",
            (0, s.jsx)(t.p, {
              children: "xlkit always generates new Excel files. Appending to existing files is not supported.",
            }),
            "\n",
            (0, s.jsx)(t.h3, { id: "column-widthrow-height-reading", children: "Column Width/Row Height Reading" }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "When reading existing Excel files with ",
                (0, s.jsx)(t.code, { children: "read()" }),
                ", column width and row height information cannot be retrieved.",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h3, { id: "pivot-tables--macros", children: "Pivot Tables / Macros" }),
            "\n",
            (0, s.jsx)(t.p, {
              children: "xlkit is designed for simple data export, so pivot tables and macros are not supported.",
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "alternatives", children: "Alternatives" }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "For more advanced Excel operations, consider using ",
                (0, s.jsx)(t.a, { href: "https://github.com/exceljs/exceljs", children: "ExcelJS" }),
                " directly. xlkit is built on ExcelJS but focuses on providing a more declarative and user-friendly API.",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "related", children: "Related" }),
            "\n",
            (0, s.jsxs)(t.ul, {
              children: [
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: "/xlkit/en/docs/reference/excel-constraints",
                      children: "Excel Constraints",
                    }),
                    " - Excel specification constraints",
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
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(c, { ...e }) }) : c(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => l, x: () => d });
      var i = n(7140);
      const s = {},
        r = i.createContext(s);
      function l(e) {
        const t = i.useContext(r);
        return i.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function d(e) {
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
  },
]);
