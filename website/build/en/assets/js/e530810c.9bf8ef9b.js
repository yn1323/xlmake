(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [817],
  {
    6285(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => d,
          frontMatter: () => i,
          metadata: () => a,
          toc: () => o,
        });
      const a = JSON.parse(
        '{"id":"examples/basic-table","title":"Basic Table","description":"The simplest table creation example.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/basic-table.md","sourceDirName":"examples","slug":"/examples/basic-table","permalink":"/xlkit/en/docs/examples/basic-table","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/basic-table.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Reading API","permalink":"/xlkit/en/docs/api-reference/reading"},"next":{"title":"Using Presets","permalink":"/xlkit/en/docs/examples/presets"}}',
      );
      var s = t(5656),
        l = t(6610);
      const i = { sidebar_position: 1 },
        r = "Basic Table",
        c = {},
        o = [
          { value: "Basic Example", id: "basic-example", level: 2 },
          { value: "Using Presets", id: "using-presets", level: 2 },
          { value: "Column Styles", id: "column-styles", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function p(e) {
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
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: "basic-table", children: "Basic Table" }) }),
            "\n",
            (0, s.jsx)(n.p, { children: "The simplest table creation example." }),
            "\n",
            (0, s.jsx)(n.h2, { id: "basic-example", children: "Basic Example" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("Data")\n  .table({\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { name: "Apple", price: 100 },\n      { name: "Orange", price: 80 },\n    ],\n  })\n  .getNode();\n\nawait output.saveToFile("basic.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "using-presets", children: "Using Presets" }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: ["Specify ", (0, s.jsx)(n.code, { children: "preset" }), " to automatically apply styles."],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    preset: "basic",  // Blue header + all borders\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: [\n      { name: "Apple", price: 100, quantity: 50 },\n      { name: "Orange", price: 80, quantity: 100 },\n      { name: "Banana", price: 120, quantity: 30 },\n    ],\n  })\n  .getNode();\n\nawait output.saveToFile("basic-preset.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "column-styles", children: "Column Styles" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Apply styles to specific columns." }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    columns: [\n      { key: "name", label: "Name" },\n      { key: "important", label: "Important", style: { bold: true } },\n      { key: "warning", label: "Warning", style: { color: "#FF0000" } },\n      { key: "highlight", label: "Highlight", style: { fill: "#FFFF00" } },\n    ],\n    data: [\n      { name: "Item 1", important: "Yes", warning: "Caution", highlight: "\u2605" },\n      { name: "Item 2", important: "No", warning: "-", highlight: "-" },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/examples/presets", children: "Using Presets" }),
                    " - Detailed preset usage",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table() API" }),
                    " - Table API details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function d(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(p, { ...e }) }) : p(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => i, x: () => r });
      var a = t(7140);
      const s = {},
        l = a.createContext(s);
      function i(e) {
        const n = a.useContext(l);
        return a.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : i(e.components)),
          a.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
