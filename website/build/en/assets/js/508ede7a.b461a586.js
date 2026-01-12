(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [896],
  {
    3560(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => o,
          contentTitle: () => c,
          default: () => a,
          frontMatter: () => d,
          metadata: () => r,
          toc: () => i,
        });
      const r = JSON.parse(
        '{"id":"api-reference/reading","title":"Reading API","description":"API for reading existing Excel files.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/reading.md","sourceDirName":"api-reference","slug":"/api-reference/reading","permalink":"/xlkit/en/docs/api-reference/reading","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/reading.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Style API","permalink":"/xlkit/en/docs/api-reference/styling"},"next":{"title":"Basic Table","permalink":"/xlkit/en/docs/examples/basic-table"}}',
      );
      var s = l(5656),
        t = l(6610);
      const d = { sidebar_position: 7 },
        c = "Reading API",
        o = {},
        i = [
          { value: "read()", id: "read", level: 2 },
          { value: "WorkbookReader", id: "workbookreader", level: 2 },
          { value: "SheetReader", id: "sheetreader", level: 2 },
          { value: "CellReader", id: "cellreader", level: 2 },
          { value: "Complete Example", id: "complete-example", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function h(e) {
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
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, { children: (0, s.jsx)(n.h1, { id: "reading-api", children: "Reading API" }) }),
            "\n",
            (0, s.jsx)(n.p, { children: "API for reading existing Excel files." }),
            "\n",
            (0, s.jsx)(n.h2, { id: "read", children: "read()" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\n// From file path\nconst workbook = await read("report.xlsx");\n\n// From Buffer\nconst workbook = await read(buffer);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "workbookreader", children: "WorkbookReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Represents the entire workbook." }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "Property/Method" }),
                      (0, s.jsx)(n.th, { children: "Returns" }),
                      (0, s.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetNames" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string[]" }) }),
                        (0, s.jsx)(n.td, { children: "List of sheet names" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "Number of sheets" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheet(name)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "SheetReader" }) }),
                        (0, s.jsx)(n.td, { children: "Get sheet by name" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetAt(index)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "SheetReader" }) }),
                        (0, s.jsx)(n.td, { children: "Get sheet by index" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const workbook = await read("report.xlsx");\n\nconsole.log(workbook.sheetNames);  // ["Sales", "Stock"]\nconsole.log(workbook.sheetCount);  // 2\n\nconst sheet = workbook.sheet("Sales");\nconst firstSheet = workbook.sheetAt(0);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "sheetreader", children: "SheetReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Represents a sheet." }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "Property/Method" }),
                      (0, s.jsx)(n.th, { children: "Returns" }),
                      (0, s.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "name" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string" }) }),
                        (0, s.jsx)(n.td, { children: "Sheet name" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "rowCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "Row count" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "columnCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "Column count" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "mergedCells" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string[]" }) }),
                        (0, s.jsxs)(n.td, { children: ['Merge info ("A1', ":B2", '" format)'] }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "cell(address)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellReader" }) }),
                        (0, s.jsx)(n.td, { children: "Get cell by A1 notation" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "cellAt(row, col)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellReader" }) }),
                        (0, s.jsx)(n.td, { children: "Get cell by row/column number" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const sheet = workbook.sheet("Sales");\n\nconsole.log(sheet.name);        // "Sales"\nconsole.log(sheet.rowCount);    // 100\nconsole.log(sheet.columnCount); // 5\nconsole.log(sheet.mergedCells); // ["A1:B1", "C1:C2"]\n\n// A1 notation\nconst cell1 = sheet.cell("A1");\n\n// Row/column numbers (0-indexed)\nconst cell2 = sheet.cellAt(0, 0);  // Same as A1\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "cellreader", children: "CellReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "Represents a cell." }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "Property" }),
                      (0, s.jsx)(n.th, { children: "Returns" }),
                      (0, s.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "value" }) }),
                        (0, s.jsx)(n.td, {
                          children: (0, s.jsx)(n.code, { children: "string | number | boolean | null" }),
                        }),
                        (0, s.jsx)(n.td, { children: "Cell value" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "style" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellStyle | undefined" }) }),
                        (0, s.jsx)(n.td, { children: "Cell style" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "border" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellBorder | undefined" }) }),
                        (0, s.jsx)(n.td, { children: "Cell border info" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const cell = sheet.cell("A1");\n\nconsole.log(cell.value);  // "Product"\n\nconst style = cell.style;\nconsole.log(style?.bold);  // true\nconsole.log(style?.fill);  // "#4472C4"\n\nconst border = cell.border;\nconsole.log(border?.top);    // { style: "thin", color: "#000000" }\nconsole.log(border?.bottom); // { style: "thin", color: "#000000" }\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "complete-example", children: "Complete Example" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\n// Read Excel file\nconst workbook = await read("./report.xlsx");\n\n// Get sheet list\nconsole.log(workbook.sheetNames);  // ["Sales", "Stock"]\n\n// Get sheet\nconst sheet = workbook.sheet("Sales");\n\n// Get cell values\nconsole.log(sheet.cell("A1").value);  // "Product"\nconsole.log(sheet.cell("B2").value);  // 100\n\n// Get cell styles\nconst style = sheet.cell("A1").style;\nconsole.log(style?.bold);  // true\nconsole.log(style?.fill);  // "#4472C4"\n\n// Get merge info\nconsole.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]\n\n// Access by row/column numbers (0-indexed)\nconsole.log(sheet.cellAt(0, 0).value);  // A1 value\nconsole.log(sheet.cellAt(1, 1).value);  // B2 value\n',
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
                    (0, s.jsx)(n.a, { href: "/xlkit/en/docs/guides/reading", children: "Reading Guide" }),
                    " - Detailed reading usage",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function a(e = {}) {
        const { wrapper: n } = { ...(0, t.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => d, x: () => c });
      var r = l(7140);
      const s = {},
        t = r.createContext(s);
      function d(e) {
        const n = r.useContext(t);
        return r.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : d(e.components)),
          r.createElement(t.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
