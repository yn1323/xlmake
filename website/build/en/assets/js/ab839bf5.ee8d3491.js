(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [407],
  {
    4703(e, n, r) {
      r.r(n),
        r.d(n, {
          assets: () => o,
          contentTitle: () => c,
          default: () => d,
          frontMatter: () => i,
          metadata: () => l,
          toc: () => s,
        });
      const l = JSON.parse(
        '{"id":"examples/cell-merge","title":"Cell Merge","description":"Examples of merging cells with same values vertically.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/cell-merge.md","sourceDirName":"examples","slug":"/examples/cell-merge","permalink":"/xlkit/en/docs/examples/cell-merge","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/cell-merge.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Multi-Header","permalink":"/xlkit/en/docs/examples/multi-header"},"next":{"title":"Borders","permalink":"/xlkit/en/docs/examples/borders"}}',
      );
      var t = r(5656),
        a = r(6610);
      const i = { sidebar_position: 4 },
        c = "Cell Merge",
        o = {},
        s = [
          { value: "Merge Entire Table", id: "merge-entire-table", level: 2 },
          { value: "Merge by Column", id: "merge-by-column", level: 2 },
          { value: "Merge Multiple Columns", id: "merge-multiple-columns", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function m(e) {
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
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: "cell-merge", children: "Cell Merge" }) }),
            "\n",
            (0, t.jsx)(n.p, { children: "Examples of merging cells with same values vertically." }),
            "\n",
            (0, t.jsx)(n.h2, { id: "merge-entire-table", children: "Merge Entire Table" }),
            "\n",
            (0, t.jsxs)(n.p, {
              children: [
                "Specify ",
                (0, t.jsx)(n.code, { children: "mergeSameValues: true" }),
                " to merge cells with same values in all columns.",
              ],
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    mergeSameValues: true,\n    columns: [\n      { key: "category", label: "Category" },\n      { key: "name", label: "Name" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { category: "Food", name: "Apple", price: 100 },\n      { category: "Food", name: "Orange", price: 80 },\n      { category: "Electronics", name: "TV", price: 50000 },\n      { category: "Electronics", name: "Fridge", price: 80000 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.p, { children: "Result:" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                children:
                  '| Category    | Name   | Price |\n| Food        | Apple  | 100   |\n|   \u2191        | Orange | 80    |  \u2190 "Food" merged\n| Electronics | TV     | 50000 |\n|   \u2191        | Fridge | 80000 |  \u2190 "Electronics" merged\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "merge-by-column", children: "Merge by Column" }),
            "\n",
            (0, t.jsxs)(n.p, {
              children: [
                "To merge only specific columns, specify ",
                (0, t.jsx)(n.code, { children: "mergeSameValues" }),
                " in the column definition.",
              ],
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "category", label: "Category", mergeSameValues: true },  // Merge this column only\n      { key: "name", label: "Name" },  // No merge\n      { key: "price", label: "Price" },   // No merge\n    ],\n    data: [\n      { category: "Food", name: "Apple", price: 100 },\n      { category: "Food", name: "Orange", price: 80 },\n      { category: "Electronics", name: "TV", price: 50000 },\n      { category: "Electronics", name: "Fridge", price: 80000 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "merge-multiple-columns", children: "Merge Multiple Columns" }),
            "\n",
            (0, t.jsx)(n.p, { children: "You can merge multiple columns independently." }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "region", label: "Region", mergeSameValues: true },\n      { key: "category", label: "Category", mergeSameValues: true },\n      { key: "name", label: "Name" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { region: "Tokyo", category: "Food", name: "Apple", price: 100 },\n      { region: "Tokyo", category: "Food", name: "Orange", price: 80 },\n      { region: "Tokyo", category: "Electronics", name: "TV", price: 50000 },\n      { region: "Osaka", category: "Food", name: "Banana", price: 120 },\n      { region: "Osaka", category: "Food", name: "Grape", price: 300 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table() API" }),
                    " - mergeSameValues details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, a.R)(), ...e.components };
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(m, { ...e }) }) : m(e);
      }
    },
    6610(e, n, r) {
      r.d(n, { R: () => i, x: () => c });
      var l = r(7140);
      const t = {},
        a = l.createContext(t);
      function i(e) {
        const n = l.useContext(a);
        return l.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          l.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
