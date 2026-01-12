(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [285],
  {
    2103(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => r,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => o,
        });
      const s = JSON.parse(
        '{"id":"guides/multi-sheet","title":"Multiple Sheets","description":"xlkit makes it easy to create Excel files with multiple sheets.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/multi-sheet.md","sourceDirName":"guides","slug":"/guides/multi-sheet","permalink":"/xlkit/en/docs/guides/multi-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/multi-sheet.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Styling","permalink":"/xlkit/en/docs/guides/styling"},"next":{"title":"Images","permalink":"/xlkit/en/docs/guides/images"}}',
      );
      var a = n(5656),
        l = n(6610);
      const i = { sidebar_position: 3 },
        c = "Multiple Sheets",
        r = {},
        o = [
          { value: "Basic Usage", id: "basic-usage", level: 2 },
          { value: "Sheet Names", id: "sheet-names", level: 2 },
          { value: "Explicit Names", id: "explicit-names", level: 3 },
          { value: "Auto-Generated", id: "auto-generated", level: 3 },
          { value: "Different Content per Sheet", id: "different-content-per-sheet", level: 2 },
          { value: "Sheet Name Constraints", id: "sheet-name-constraints", level: 2 },
          { value: "Complete Example", id: "complete-example", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function d(e) {
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
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(t.header, {
              children: (0, a.jsx)(t.h1, { id: "multiple-sheets", children: "Multiple Sheets" }),
            }),
            "\n",
            (0, a.jsx)(t.p, { children: "xlkit makes it easy to create Excel files with multiple sheets." }),
            "\n",
            (0, a.jsx)(t.h2, { id: "basic-usage", children: "Basic Usage" }),
            "\n",
            (0, a.jsxs)(t.p, {
              children: [
                "Call ",
                (0, a.jsx)(t.code, { children: "sheet()" }),
                " consecutively to create multiple sheets.",
              ],
            }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "sales", label: "Sales" },\n    ],\n    data: salesData,\n  })\n  .sheet("Stock")  // Second sheet\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "stock", label: "Stock" },\n    ],\n    data: stockData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "sheet-names", children: "Sheet Names" }),
            "\n",
            (0, a.jsx)(t.h3, { id: "explicit-names", children: "Explicit Names" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children: 'xlkit()\n  .sheet("Sales Data")\n  .sheet("Stock Data")\n  .sheet("Customer Master")\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h3, { id: "auto-generated", children: "Auto-Generated" }),
            "\n",
            (0, a.jsx)(t.p, { children: "When omitted, names are auto-generated as Sheet1, Sheet2..." }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children: "xlkit()\n  .sheet()  // Sheet1\n  .sheet()  // Sheet2\n  .sheet()  // Sheet3\n",
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "different-content-per-sheet", children: "Different Content per Sheet" }),
            "\n",
            (0, a.jsx)(t.p, { children: "Each sheet can have independent tables, text, and images." }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Summary")\n  .text({ value: "Monthly Report", style: { bold: true, fontSize: 16 } })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: summaryColumns,\n    data: summaryData,\n  })\n  .sheet("Details")\n  .table({\n    preset: "striped",\n    columns: detailColumns,\n    data: detailData,\n  })\n  .sheet("Chart Data")\n  .table({\n    preset: "minimal",\n    columns: chartColumns,\n    data: chartData,\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "sheet-name-constraints", children: "Sheet Name Constraints" }),
            "\n",
            (0, a.jsx)(t.p, { children: "Due to Excel specifications, sheet names have these constraints:" }),
            "\n",
            (0, a.jsxs)(t.ul, {
              children: [
                "\n",
                (0, a.jsx)(t.li, { children: "Maximum 31 characters" }),
                "\n",
                (0, a.jsxs)(t.li, {
                  children: ["Cannot contain: ", (0, a.jsx)(t.code, { children: ": \\ / ? * [ ]" })],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, a.jsx)(t.p, { children: "xlkit throws an error when these constraints are violated." }),
            "\n",
            (0, a.jsx)(t.h2, { id: "complete-example", children: "Complete Example" }),
            "\n",
            (0, a.jsx)(t.pre, {
              children: (0, a.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "Apple", sales: 50000 },\n  { name: "Orange", sales: 40000 },\n];\n\nconst stockData = [\n  { name: "Apple", stock: 100 },\n  { name: "Orange", stock: 200 },\n];\n\nconst output = await xlkit()\n  .sheet("Sales")\n  .text({ value: "Sales Data", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "sales", label: "Sales" },\n    ],\n    data: salesData,\n  })\n  .sheet("Stock")\n  .text({ value: "Stock Data", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "stock", label: "Stock" },\n    ],\n    data: stockData,\n  })\n  .getNode();\n\nawait output.saveToFile("multi-sheet.xlsx");\n',
              }),
            }),
            "\n",
            (0, a.jsx)(t.h2, { id: "related", children: "Related" }),
            "\n",
            (0, a.jsxs)(t.ul, {
              children: [
                "\n",
                (0, a.jsxs)(t.li, {
                  children: [
                    (0, a.jsx)(t.a, { href: "/xlkit/en/docs/guides/basic-usage", children: "Basic Usage" }),
                    " - xlkit basics",
                  ],
                }),
                "\n",
                (0, a.jsxs)(t.li, {
                  children: [
                    (0, a.jsx)(t.a, {
                      href: "/xlkit/en/docs/reference/excel-constraints",
                      children: "Excel Constraints",
                    }),
                    " - Excel constraints",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: t } = { ...(0, l.R)(), ...e.components };
        return t ? (0, a.jsx)(t, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => i, x: () => c });
      var s = n(7140);
      const a = {},
        l = s.createContext(a);
      function i(e) {
        const t = s.useContext(l);
        return s.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : i(e.components)),
          s.createElement(l.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
