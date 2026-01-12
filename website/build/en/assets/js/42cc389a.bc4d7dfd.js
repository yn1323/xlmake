(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [992],
  {
    418(e, n, a) {
      a.r(n),
        a.d(n, {
          assets: () => d,
          contentTitle: () => s,
          default: () => u,
          frontMatter: () => i,
          metadata: () => t,
          toc: () => c,
        });
      const t = JSON.parse(
        '{"id":"examples/multi-header","title":"Multi-Header","description":"Examples of creating hierarchical headers (multi-headers).","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/multi-header.md","sourceDirName":"examples","slug":"/examples/multi-header","permalink":"/xlkit/en/docs/examples/multi-header","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/multi-header.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Using Presets","permalink":"/xlkit/en/docs/examples/presets"},"next":{"title":"Cell Merge","permalink":"/xlkit/en/docs/examples/cell-merge"}}',
      );
      var l = a(5656),
        r = a(6610);
      const i = { sidebar_position: 3 },
        s = "Multi-Header",
        d = {},
        c = [
          { value: "2-Level Header", id: "2-level-header", level: 2 },
          { value: "3-Level Header", id: "3-level-header", level: 2 },
          { value: "Mixed Headers", id: "mixed-headers", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function o(e) {
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
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.header, { children: (0, l.jsx)(n.h1, { id: "multi-header", children: "Multi-Header" }) }),
            "\n",
            (0, l.jsx)(n.p, { children: "Examples of creating hierarchical headers (multi-headers)." }),
            "\n",
            (0, l.jsx)(n.h2, { id: "2-level-header", children: "2-Level Header" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      {\n        label: "Product Info",\n        children: [\n          { key: "category", label: "Category" },\n          { key: "name", label: "Name" },\n        ],\n      },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: [\n      { category: "Food", name: "Apple", price: 100, quantity: 50 },\n      { category: "Food", name: "Orange", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, { children: "Result:" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                children:
                  "| Product Info       | Price | Quantity |\n| Category | Name    |       |          |\n| Food     | Apple   | 100   | 50       |\n| Food     | Orange  | 80    | 100      |\n",
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "3-level-header", children: "3-Level Header" }),
            "\n",
            (0, l.jsx)(n.p, { children: "You can create even deeper hierarchies." }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Details")\n  .table({\n    preset: "basic",\n    columns: [\n      {\n        label: "Product",\n        children: [\n          {\n            label: "Details",\n            children: [\n              { key: "category", label: "Category" },\n              { key: "name", label: "Name" },\n            ],\n          },\n        ],\n      },\n      {\n        label: "Numbers",\n        children: [\n          { key: "price", label: "Price" },\n          { key: "quantity", label: "Quantity" },\n        ],\n      },\n    ],\n    data: [\n      { category: "Food", name: "Apple", price: 100, quantity: 50 },\n      { category: "Food", name: "Orange", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, { children: "Result:" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                children:
                  "| Product            | Numbers      |\n| Details            | Price | Qty  |\n| Category | Name    |       |      |\n| Food     | Apple   | 100   | 50   |\n",
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "mixed-headers", children: "Mixed Headers" }),
            "\n",
            (0, l.jsx)(n.p, { children: "You can make only some columns multi-header." }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Report")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "id", label: "ID" },  // Regular header\n      {\n        label: "Product Info",  // Multi-header\n        children: [\n          { key: "category", label: "Category" },\n          { key: "name", label: "Name" },\n        ],\n      },\n      { key: "price", label: "Price" },  // Regular header\n    ],\n    data: [\n      { id: 1, category: "Food", name: "Apple", price: 100 },\n      { id: 2, category: "Food", name: "Orange", price: 80 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, l.jsxs)(n.ul, {
              children: [
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table() API" }),
                    " - Column definition details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components };
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, a) {
      a.d(n, { R: () => i, x: () => s });
      var t = a(7140);
      const l = {},
        r = t.createContext(l);
      function i(e) {
        const n = t.useContext(r);
        return t.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : i(e.components)),
          t.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
