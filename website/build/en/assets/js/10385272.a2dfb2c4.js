(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [763],
  {
    3701(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => d,
          metadata: () => l,
          toc: () => o,
        });
      const l = JSON.parse(
        '{"id":"examples/borders","title":"Borders","description":"Examples of adding borders to tables.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/borders.md","sourceDirName":"examples","slug":"/examples/borders","permalink":"/xlkit/en/docs/examples/borders","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/borders.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Cell Merge","permalink":"/xlkit/en/docs/examples/cell-merge"},"next":{"title":"Conditional Styling","permalink":"/xlkit/en/docs/examples/conditional-styling"}}',
      );
      var r = t(5656),
        i = t(6610);
      const d = { sidebar_position: 5 },
        s = "Borders",
        a = {},
        o = [
          { value: "Outline Only", id: "outline-only", level: 2 },
          { value: "Header Underline Only", id: "header-underline-only", level: 2 },
          { value: "All Borders", id: "all-borders", level: 2 },
          { value: "Full Customization", id: "full-customization", level: 2 },
          { value: "LineStyle Types", id: "linestyle-types", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function c(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "borders", children: "Borders" }) }),
            "\n",
            (0, r.jsx)(n.p, { children: "Examples of adding borders to tables." }),
            "\n",
            (0, r.jsx)(n.h2, { id: "outline-only", children: "Outline Only" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { name: "Apple", price: 100 },\n      { name: "Orange", price: 80 },\n    ],\n    border: { outline: "medium" },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "header-underline-only", children: "Header Underline Only" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { name: "Apple", price: 100 },\n      { name: "Orange", price: 80 },\n    ],\n    border: { headerBody: "thin" },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "all-borders", children: "All Borders" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { name: "Apple", price: 100 },\n      { name: "Orange", price: 80 },\n    ],\n    border: {\n      outline: "thin",\n      headerBody: "thin",\n      headerInner: "thin",\n      bodyInner: "thin",\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "full-customization", children: "Full Customization" }),
            "\n",
            (0, r.jsx)(n.p, { children: "You can configure border styles and colors in detail." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Report")\n  .table({\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: [\n      { name: "Apple", price: 100, quantity: 50 },\n      { name: "Orange", price: 80, quantity: 100 },\n      { name: "Banana", price: 120, quantity: 30 },\n    ],\n    border: {\n      outline: "medium",      // Medium outline\n      headerBody: "medium",   // Medium header-body boundary\n      headerInner: "thin",    // Thin header internal\n      bodyInner: "thin",      // Thin body internal\n      borderColor: "#000080", // Navy blue\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "linestyle-types", children: "LineStyle Types" }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [(0, r.jsx)(n.th, { children: "Value" }), (0, r.jsx)(n.th, { children: "Description" })],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"thin"' }) }),
                        (0, r.jsx)(n.td, { children: "Thin line" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"medium"' }) }),
                        (0, r.jsx)(n.td, { children: "Medium line" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"thick"' }) }),
                        (0, r.jsx)(n.td, { children: "Thick line" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"dotted"' }) }),
                        (0, r.jsx)(n.td, { children: "Dotted line" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"dashed"' }) }),
                        (0, r.jsx)(n.td, { children: "Dashed line" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"double"' }) }),
                        (0, r.jsx)(n.td, { children: "Double line" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - BorderStyle details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => d, x: () => s });
      var l = t(7140);
      const r = {},
        i = l.createContext(r);
      function d(e) {
        const n = l.useContext(i);
        return l.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          l.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
