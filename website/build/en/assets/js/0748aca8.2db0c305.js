(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [703],
  {
    526(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => c,
        });
      const s = JSON.parse(
        '{"id":"guides/basic-usage","title":"Basic Usage","description":"Learn the basics of xlkit.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/basic-usage.md","sourceDirName":"guides","slug":"/guides/basic-usage","permalink":"/xlkit/en/docs/guides/basic-usage","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/basic-usage.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Quick Start","permalink":"/xlkit/en/docs/quick-start"},"next":{"title":"Styling","permalink":"/xlkit/en/docs/guides/styling"}}',
      );
      var i = n(5656),
        a = n(6610);
      const l = { sidebar_position: 1 },
        r = "Basic Usage",
        d = {},
        c = [
          { value: "Builder Pattern", id: "builder-pattern", level: 2 },
          { value: "Sheet Operations", id: "sheet-operations", level: 2 },
          { value: "Adding Sheets", id: "adding-sheets", level: 3 },
          { value: "Creating Multiple Sheets", id: "creating-multiple-sheets", level: 3 },
          { value: "Adding Tables", id: "adding-tables", level: 2 },
          { value: "Basic Table", id: "basic-table", level: 3 },
          { value: "Using Presets", id: "using-presets", level: 3 },
          { value: "Adding Text", id: "adding-text", level: 2 },
          { value: "Adding Empty Rows", id: "adding-empty-rows", level: 2 },
          { value: "Output", id: "output", level: 2 },
          { value: "Node.js", id: "nodejs", level: 3 },
          { value: "Browser", id: "browser", level: 3 },
          { value: "Complete Example", id: "complete-example", level: 2 },
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
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: "basic-usage", children: "Basic Usage" }) }),
            "\n",
            (0, i.jsx)(t.p, { children: "Learn the basics of xlkit." }),
            "\n",
            (0, i.jsx)(t.h2, { id: "builder-pattern", children: "Builder Pattern" }),
            "\n",
            (0, i.jsx)(t.p, { children: "xlkit uses a method chaining builder pattern." }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()     // 1. Create builder\n  .sheet("Sheet Name")           // 2. Add sheet\n  .table({ ... })                // 3. Add table\n  .getNode();                    // 4. Get output object\n\nawait output.saveToFile("output.xlsx");  // 5. Save to file\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "sheet-operations", children: "Sheet Operations" }),
            "\n",
            (0, i.jsx)(t.h3, { id: "adding-sheets", children: "Adding Sheets" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'xlkit().sheet("Sales Data")  // With name\nxlkit().sheet()              // Auto-generated (Sheet1, Sheet2...)\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h3, { id: "creating-multiple-sheets", children: "Creating Multiple Sheets" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({ ... })\n  .sheet("Stock")      // Second sheet\n  .table({ ... })\n  .sheet("Customers")  // Third sheet\n  .table({ ... })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "adding-tables", children: "Adding Tables" }),
            "\n",
            (0, i.jsx)(t.h3, { id: "basic-table", children: "Basic Table" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [\n    { key: "name", label: "Product" },\n    { key: "price", label: "Price" },\n  ],\n  data: [\n    { name: "Apple", price: 100 },\n    { name: "Orange", price: 80 },\n  ],\n})\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h3, { id: "using-presets", children: "Using Presets" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.table({\n  preset: "basic",  // Blue header + all borders\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "adding-text", children: "Adding Text" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.text("Simple text")\n\n.text({\n  value: "Styled text",\n  style: { bold: true, fontSize: 14 }\n})\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "adding-empty-rows", children: "Adding Empty Rows" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children: ".space()     // 1 empty row\n.space(3)    // 3 empty rows\n",
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "output", children: "Output" }),
            "\n",
            (0, i.jsx)(t.h3, { id: "nodejs", children: "Node.js" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({ ... })\n  .getNode();\n\n// Save to file\nawait output.saveToFile("report.xlsx");\n\n// Get as Buffer (for API responses)\nconst buffer = await output.toBuffer();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h3, { id: "browser", children: "Browser" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({ ... })\n  .getBrowser();\n\n// Download\nawait output.download("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "complete-example", children: "Complete Example" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "Apple", price: 100, quantity: 50 },\n  { name: "Orange", price: 80, quantity: 100 },\n  { name: "Banana", price: 120, quantity: 30 },\n];\n\nconst output = await xlkit()\n  .sheet("Sales Report")\n  .text({ value: "Monthly Sales Report", style: { bold: true, fontSize: 16 } })\n  .text("January 2024")\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: salesData,\n  })\n  .space(1)\n  .text("* Prices exclude tax")\n  .getNode();\n\nawait output.saveToFile("sales-report.xlsx");\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "next-steps", children: "Next Steps" }),
            "\n",
            (0, i.jsxs)(t.ul, {
              children: [
                "\n",
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.a, { href: "/xlkit/en/docs/guides/styling", children: "Styling" }),
                    " - Customize styles",
                  ],
                }),
                "\n",
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.a, { href: "/xlkit/en/docs/guides/multi-sheet", children: "Multiple Sheets" }),
                    " - Detailed multi-sheet usage",
                  ],
                }),
                "\n",
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/overview", children: "API Overview" }),
                    " - Available APIs",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, a.R)(), ...e.components };
        return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => l, x: () => r });
      var s = n(7140);
      const i = {},
        a = s.createContext(i);
      function l(e) {
        const t = s.useContext(a);
        return s.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : l(e.components)),
          s.createElement(a.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
