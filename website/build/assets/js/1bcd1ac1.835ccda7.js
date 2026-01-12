(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [661],
  {
    1739(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => o,
          contentTitle: () => c,
          default: () => x,
          frontMatter: () => t,
          metadata: () => r,
          toc: () => i,
        });
      const r = JSON.parse(
        '{"id":"api-reference/reading","title":"\u8aad\u307f\u53d6\u308aAPI","description":"\u65e2\u5b58\u306eExcel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306eAPI\u3067\u3059\u3002","source":"@site/docs/api-reference/reading.md","sourceDirName":"api-reference","slug":"/api-reference/reading","permalink":"/xlkit/docs/api-reference/reading","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/reading.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\u30b9\u30bf\u30a4\u30ebAPI","permalink":"/xlkit/docs/api-reference/styling"},"next":{"title":"\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb","permalink":"/xlkit/docs/examples/basic-table"}}',
      );
      var s = l(5656),
        d = l(6610);
      const t = { sidebar_position: 7 },
        c = "\u8aad\u307f\u53d6\u308aAPI",
        o = {},
        i = [
          { value: "read()", id: "read", level: 2 },
          { value: "WorkbookReader", id: "workbookreader", level: 2 },
          { value: "SheetReader", id: "sheetreader", level: 2 },
          { value: "CellReader", id: "cellreader", level: 2 },
          { value: "\u4f7f\u7528\u4f8b", id: "\u4f7f\u7528\u4f8b", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
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
          ...(0, d.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, {
                id: "\u8aad\u307f\u53d6\u308aapi",
                children: "\u8aad\u307f\u53d6\u308aAPI",
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u65e2\u5b58\u306eExcel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306eAPI\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "read", children: "read()" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\n// \u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u304b\u3089\u8aad\u307f\u8fbc\u307f\nconst workbook = await read("report.xlsx");\n\n// Buffer\u304b\u3089\u8aad\u307f\u8fbc\u307f\nconst workbook = await read(buffer);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "workbookreader", children: "WorkbookReader" }),
            "\n",
            (0, s.jsx)(n.p, {
              children: "\u30ef\u30fc\u30af\u30d6\u30c3\u30af\u5168\u4f53\u3092\u8868\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3/\u30e1\u30bd\u30c3\u30c9" }),
                      (0, s.jsx)(n.th, { children: "\u623b\u308a\u5024" }),
                      (0, s.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetNames" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string[]" }) }),
                        (0, s.jsx)(n.td, { children: "\u30b7\u30fc\u30c8\u540d\u306e\u4e00\u89a7" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "\u30b7\u30fc\u30c8\u6570" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheet(name)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "SheetReader" }) }),
                        (0, s.jsx)(n.td, { children: "\u540d\u524d\u3067\u30b7\u30fc\u30c8\u3092\u53d6\u5f97" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "sheetAt(index)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "SheetReader" }) }),
                        (0, s.jsx)(n.td, {
                          children: "\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u30b7\u30fc\u30c8\u3092\u53d6\u5f97",
                        }),
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
                  'const workbook = await read("report.xlsx");\n\nconsole.log(workbook.sheetNames);  // ["\u58f2\u4e0a", "\u5728\u5eab"]\nconsole.log(workbook.sheetCount);  // 2\n\nconst sheet = workbook.sheet("\u58f2\u4e0a");\nconst firstSheet = workbook.sheetAt(0);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "sheetreader", children: "SheetReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "\u30b7\u30fc\u30c8\u3092\u8868\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3/\u30e1\u30bd\u30c3\u30c9" }),
                      (0, s.jsx)(n.th, { children: "\u623b\u308a\u5024" }),
                      (0, s.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "name" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string" }) }),
                        (0, s.jsx)(n.td, { children: "\u30b7\u30fc\u30c8\u540d" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "rowCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "\u884c\u6570" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "columnCount" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "number" }) }),
                        (0, s.jsx)(n.td, { children: "\u5217\u6570" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "mergedCells" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "string[]" }) }),
                        (0, s.jsxs)(n.td, {
                          children: ['\u30de\u30fc\u30b8\u60c5\u5831\uff08"A1', ":B2", '"\u5f62\u5f0f\uff09'],
                        }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "cell(address)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellReader" }) }),
                        (0, s.jsx)(n.td, { children: "A1\u5f62\u5f0f\u3067\u30bb\u30eb\u3092\u53d6\u5f97" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "cellAt(row, col)" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellReader" }) }),
                        (0, s.jsx)(n.td, {
                          children: "\u884c\u30fb\u5217\u756a\u53f7\u3067\u30bb\u30eb\u3092\u53d6\u5f97",
                        }),
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
                  'const sheet = workbook.sheet("\u58f2\u4e0a");\n\nconsole.log(sheet.name);        // "\u58f2\u4e0a"\nconsole.log(sheet.rowCount);    // 100\nconsole.log(sheet.columnCount); // 5\nconsole.log(sheet.mergedCells); // ["A1:B1", "C1:C2"]\n\n// A1\u5f62\u5f0f\u3067\u30a2\u30af\u30bb\u30b9\nconst cell1 = sheet.cell("A1");\n\n// \u884c\u30fb\u5217\u756a\u53f7\u3067\u30a2\u30af\u30bb\u30b9\uff080-indexed\uff09\nconst cell2 = sheet.cellAt(0, 0);  // A1\u3068\u540c\u3058\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "cellreader", children: "CellReader" }),
            "\n",
            (0, s.jsx)(n.p, { children: "\u30bb\u30eb\u3092\u8868\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3" }),
                      (0, s.jsx)(n.th, { children: "\u623b\u308a\u5024" }),
                      (0, s.jsx)(n.th, { children: "\u8aac\u660e" }),
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
                        (0, s.jsx)(n.td, { children: "\u30bb\u30eb\u306e\u5024" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "style" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellStyle | undefined" }) }),
                        (0, s.jsx)(n.td, { children: "\u30bb\u30eb\u306e\u30b9\u30bf\u30a4\u30eb" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "border" }) }),
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "CellBorder | undefined" }) }),
                        (0, s.jsx)(n.td, { children: "\u30bb\u30eb\u306e\u7f6b\u7dda\u60c5\u5831" }),
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
                  'const cell = sheet.cell("A1");\n\nconsole.log(cell.value);  // "\u5546\u54c1\u540d"\n\nconst style = cell.style;\nconsole.log(style?.bold);  // true\nconsole.log(style?.fill);  // "#4472C4"\n\nconst border = cell.border;\nconsole.log(border?.top);    // { style: "thin", color: "#000000" }\nconsole.log(border?.bottom); // { style: "thin", color: "#000000" }\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u4f7f\u7528\u4f8b", children: "\u4f7f\u7528\u4f8b" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\n// Excel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\nconst workbook = await read("./report.xlsx");\n\n// \u30b7\u30fc\u30c8\u4e00\u89a7\u3092\u53d6\u5f97\nconsole.log(workbook.sheetNames);  // ["\u58f2\u4e0a", "\u5728\u5eab"]\n\n// \u30b7\u30fc\u30c8\u3092\u53d6\u5f97\nconst sheet = workbook.sheet("\u58f2\u4e0a");\n\n// \u30bb\u30eb\u306e\u5024\u3092\u53d6\u5f97\nconsole.log(sheet.cell("A1").value);  // "\u5546\u54c1\u540d"\nconsole.log(sheet.cell("B2").value);  // 100\n\n// \u30bb\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u53d6\u5f97\nconst style = sheet.cell("A1").style;\nconsole.log(style?.bold);  // true\nconsole.log(style?.fill);  // "#4472C4"\n\n// \u30de\u30fc\u30b8\u60c5\u5831\u3092\u53d6\u5f97\nconsole.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]\n\n// \u884c\u30fb\u5217\u756a\u53f7\u3067\u30a2\u30af\u30bb\u30b9\uff080-indexed\uff09\nconsole.log(sheet.cellAt(0, 0).value);  // A1\u306e\u5024\nconsole.log(sheet.cellAt(1, 1).value);  // B2\u306e\u5024\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
                      href: "/xlkit/docs/guides/reading",
                      children: "\u8aad\u307f\u53d6\u308a\u30ac\u30a4\u30c9",
                    }),
                    " - \u8aad\u307f\u53d6\u308aAPI\u306e\u8a73\u3057\u3044\u4f7f\u3044\u65b9",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: n } = { ...(0, d.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => t, x: () => c });
      var r = l(7140);
      const s = {},
        d = r.createContext(s);
      function t(e) {
        const n = r.useContext(d);
        return r.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          r.createElement(d.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
