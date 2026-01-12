(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [723],
  {
    4294(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => d,
        });
      const s = JSON.parse(
        '{"id":"quick-start","title":"Quick Start","description":"Let\'s create a simple Excel file with xlkit.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/xlkit/en/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Installation","permalink":"/xlkit/en/docs/installation"},"next":{"title":"Basic Usage","permalink":"/xlkit/en/docs/guides/basic-usage"}}',
      );
      var a = n(5656),
        i = n(6610);
      const l = { sidebar_position: 3 },
        r = "Quick Start",
        c = {},
        d = [
          { value: "Node.js Usage", id: "nodejs-usage", level: 2 },
          { value: "Browser Usage", id: "browser-usage", level: 2 },
          { value: "Basic Usage", id: "basic-usage", level: 2 },
          { value: "1. Create builder with xlkit()", id: "1-create-builder-with-xlkit", level: 3 },
          { value: "2. Add sheet with sheet()", id: "2-add-sheet-with-sheet", level: 3 },
          { value: "3. Add table with table()", id: "3-add-table-with-table", level: 3 },
          { value: "4. Output with getNode() / getBrowser()", id: "4-output-with-getnode--getbrowser", level: 3 },
          { value: "Next Steps", id: "next-steps", level: 2 },
        ];
      function o(e) {
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
          ul: "ul",
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(t.header, { children: (0, a.jsx)(t.h1, { id: "quick-start", children: "Quick Start" }) }),
            "\n",
            (0, a.jsx)(t.p, { children: "Let's create a simple Excel file with xlkit." }),
            "\n",
            (0, a.jsx)(t.h2, { id: "nodejs-usage", children: "Node.js Usage" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "Apple", price: 100, quantity: 50 },\n  { name: "Orange", price: 80, quantity: 100 },\n  { name: "Banana", price: 120, quantity: 30 },\n];\n\nconst output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: salesData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "browser-usage", children: "Browser Usage" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("Data")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Name" },\n      { key: "value", label: "Value" },\n    ],\n    data: [\n      { name: "Item A", value: 100 },\n      { name: "Item B", value: 200 },\n    ],\n  })\n  .getBrowser();\n\nawait output.download("data.xlsx");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "basic-usage", children: "Basic Usage" }),
            "\n",
            (0, a.jsx)(t.h3, { id: "1-create-builder-with-xlkit", children: "1. Create builder with xlkit()" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children: "const builder = xlkit();\n",
              }),
            }),
            "\n",
            (0, a.jsx)(t.h3, { id: "2-add-sheet-with-sheet", children: "2. Add sheet with sheet()" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children: 'builder.sheet("Sheet Name");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h3, { id: "3-add-table-with-table", children: "3. Add table with table()" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children: 'builder.table({\n  preset: "basic",\n  columns: [...],\n  data: [...],\n});\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h3, {
              id: "4-output-with-getnode--getbrowser",
              children: "4. Output with getNode() / getBrowser()",
            }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '// Node.js\nconst output = await builder.getNode();\nawait output.saveToFile("report.xlsx");\n\n// Browser\nconst output = await builder.getBrowser();\nawait output.download("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "next-steps", children: "Next Steps" }),
            "\n",
            (0, a.jsxs)(t.ul, {
              children: [
                "\n",
                (0, a.jsxs)(t.li, {
                  children: [
                    (0, a.jsx)(t.a, { href: "/xlkit/en/docs/guides/basic-usage", children: "Basic Usage" }),
                    " for detailed guide",
                  ],
                }),
                "\n",
                (0, a.jsxs)(t.li, {
                  children: [
                    (0, a.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/overview", children: "API Reference" }),
                    " for available features",
                  ],
                }),
                "\n",
                (0, a.jsxs)(t.li, {
                  children: [
                    (0, a.jsx)(t.a, { href: "/xlkit/en/docs/examples/basic-table", children: "Examples" }),
                    " for sample code",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, i.R)(), ...e.components };
        return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => l, x: () => r });
      var s = n(7140);
      const a = {},
        i = s.createContext(a);
      function l(e) {
        const t = s.useContext(i);
        return s.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : l(e.components)),
          s.createElement(i.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
