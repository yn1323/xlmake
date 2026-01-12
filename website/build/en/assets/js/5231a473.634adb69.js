(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [115],
  {
    6610(e, n, l) {
      l.d(n, { R: () => r, x: () => i });
      var t = l(7140);
      const s = {},
        o = t.createContext(s);
      function r(e) {
        const n = t.useContext(o);
        return t.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function i(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          t.createElement(o.Provider, { value: n }, e.children)
        );
      }
    },
    7239(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => r,
          metadata: () => t,
          toc: () => a,
        });
      const t = JSON.parse(
        '{"id":"guides/reading","title":"Reading API","description":"xlkit can read existing Excel files to get cell values and styles.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/reading.md","sourceDirName":"guides","slug":"/guides/reading","permalink":"/xlkit/en/docs/guides/reading","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/reading.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"Images","permalink":"/xlkit/en/docs/guides/images"},"next":{"title":"API Overview","permalink":"/xlkit/en/docs/api-reference/overview"}}',
      );
      var s = l(5656),
        o = l(6610);
      const r = { sidebar_position: 5 },
        i = "Reading API",
        c = {},
        a = [
          { value: "Basic Usage", id: "basic-usage", level: 2 },
          { value: "read()", id: "read", level: 2 },
          { value: "WorkbookReader", id: "workbookreader", level: 2 },
          { value: "Getting Sheet List", id: "getting-sheet-list", level: 3 },
          { value: "Getting Sheets", id: "getting-sheets", level: 3 },
          { value: "SheetReader", id: "sheetreader", level: 2 },
          { value: "Sheet Information", id: "sheet-information", level: 3 },
          { value: "Getting Merge Information", id: "getting-merge-information", level: 3 },
          { value: "Accessing Cells", id: "accessing-cells", level: 3 },
          { value: "CellReader", id: "cellreader", level: 2 },
          { value: "Getting Values", id: "getting-values", level: 3 },
          { value: "Getting Styles", id: "getting-styles", level: 3 },
          { value: "Getting Borders", id: "getting-borders", level: 3 },
          { value: "Complete Example", id: "complete-example", level: 2 },
          { value: "Supported Features", id: "supported-features", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function d(e) {
        const n = {
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
          ...(0, o.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: "reading-api", children: "Reading API" }) }),
            "\n",
            (0, s.jsx)(n.p, { children: "xlkit can read existing Excel files to get cell values and styles." }),
            "\n",
            (0, s.jsx)(n.h2, { id: "basic-usage", children: "Basic Usage" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children: 'import { read } from "xlkit";\n\nconst workbook = await read("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "read", children: "read()" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Read Excel files from file path or Buffer." }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// From file path\nconst workbook = await read("./report.xlsx");\n\n// From Buffer\nconst buffer = fs.readFileSync("./report.xlsx");\nconst workbook = await read(buffer);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "workbookreader", children: "WorkbookReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Object for manipulating the entire workbook." }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-sheet-list", children: "Getting Sheet List" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const workbook = await read("report.xlsx");\n\nconsole.log(workbook.sheetNames);  // ["Sales", "Stock"]\nconsole.log(workbook.sheetCount);  // 2\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-sheets", children: "Getting Sheets" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// By name\nconst sheet = workbook.sheet("Sales");\n\n// By index (starting from 0)\nconst firstSheet = workbook.sheetAt(0);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "sheetreader", children: "SheetReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Object for manipulating sheets." }),
            "\n",
            (0, s.jsx)(n.h3, { id: "sheet-information", children: "Sheet Information" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const sheet = workbook.sheet("Sales");\n\nconsole.log(sheet.name);        // "Sales"\nconsole.log(sheet.rowCount);    // 100\nconsole.log(sheet.columnCount); // 5\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-merge-information", children: "Getting Merge Information" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children: 'console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "accessing-cells", children: "Accessing Cells" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// A1 notation\nconst cell1 = sheet.cell("A1");\nconst cell2 = sheet.cell("B2");\n\n// Row/column numbers (starting from 0)\nconst cell3 = sheet.cellAt(0, 0);  // Same as A1\nconst cell4 = sheet.cellAt(1, 1);  // Same as B2\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "cellreader", children: "CellReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Object for getting cell values and styles." }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-values", children: "Getting Values" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const cell = sheet.cell("A1");\n\nconsole.log(cell.value);  // "Product" or 100 or true or null\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-styles", children: "Getting Styles" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const style = sheet.cell("A1").style;\n\nconsole.log(style?.bold);      // true\nconsole.log(style?.fill);      // "#4472C4"\nconsole.log(style?.color);     // "#FFFFFF"\nconsole.log(style?.fontSize);  // 11\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "getting-borders", children: "Getting Borders" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const border = sheet.cell("A1").border;\n\nconsole.log(border?.top);     // { style: "thin", color: "#000000" }\nconsole.log(border?.bottom);  // { style: "thin", color: "#000000" }\nconsole.log(border?.left);    // { style: "thin", color: "#000000" }\nconsole.log(border?.right);   // { style: "thin", color: "#000000" }\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "complete-example", children: "Complete Example" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\nasync function analyzeExcel() {\n  const workbook = await read("./report.xlsx");\n\n  // Show sheet list\n  console.log("Sheets:", workbook.sheetNames);\n\n  // Get first sheet\n  const sheet = workbook.sheetAt(0);\n  console.log(`Sheet name: ${sheet.name}`);\n  console.log(`Row count: ${sheet.rowCount}`);\n  console.log(`Column count: ${sheet.columnCount}`);\n\n  // Read header row\n  console.log("\\nHeaders:");\n  for (let col = 0; col < sheet.columnCount; col++) {\n    const cell = sheet.cellAt(0, col);\n    console.log(`  ${String.fromCharCode(65 + col)}1: ${cell.value}`);\n  }\n\n  // Read data rows\n  console.log("\\nData:");\n  for (let row = 1; row < Math.min(sheet.rowCount, 5); row++) {\n    const rowData = [];\n    for (let col = 0; col < sheet.columnCount; col++) {\n      rowData.push(sheet.cellAt(row, col).value);\n    }\n    console.log(`  Row ${row + 1}: ${rowData.join(", ")}`);\n  }\n\n  // Show merge info\n  if (sheet.mergedCells.length > 0) {\n    console.log("\\nMerged cells:", sheet.mergedCells);\n  }\n\n  // Check specific cell style\n  const headerStyle = sheet.cell("A1").style;\n  if (headerStyle) {\n    console.log("\\nA1 style:");\n    console.log("  Bold:", headerStyle.bold);\n    console.log("  Fill:", headerStyle.fill);\n    console.log("  Color:", headerStyle.color);\n  }\n}\n\nanalyzeExcel();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "supported-features", children: "Supported Features" }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [(0, s.jsx)(n.th, { children: "Feature" }), (0, s.jsx)(n.th, { children: "Supported" })],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "Cell values" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "Cell styles" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "Merge info" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "Sheet names" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "Column width/row height" }),
                        (0, s.jsx)(n.td, { children: "\u274c" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/reading", children: "Reading API" }),
                    " - API details",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/reference/limitations", children: "Unsupported Features" }),
                    " - Reading limitations",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, o.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
      }
    },
  },
]);
