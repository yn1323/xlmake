(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [849],
  {
    6031(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => i,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => t,
          metadata: () => o,
          toc: () => d,
        });
      const o = JSON.parse(
        '{"id":"guides/reading","title":"\u8aad\u307f\u53d6\u308aAPI","description":"xlkit\u3067\u306f\u65e2\u5b58\u306eExcel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3001\u30bb\u30eb\u306e\u5024\u3084\u30b9\u30bf\u30a4\u30eb\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002","source":"@site/docs/guides/reading.md","sourceDirName":"guides","slug":"/guides/reading","permalink":"/xlkit/docs/guides/reading","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/reading.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\u753b\u50cf\u633f\u5165","permalink":"/xlkit/docs/guides/images"},"next":{"title":"API\u6982\u8981","permalink":"/xlkit/docs/api-reference/overview"}}',
      );
      var s = l(5656),
        r = l(6610);
      const t = { sidebar_position: 5 },
        c = "\u8aad\u307f\u53d6\u308aAPI",
        i = {},
        d = [
          {
            value: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            level: 2,
          },
          { value: "read()", id: "read", level: 2 },
          { value: "WorkbookReader", id: "workbookreader", level: 2 },
          {
            value: "\u30b7\u30fc\u30c8\u4e00\u89a7\u306e\u53d6\u5f97",
            id: "\u30b7\u30fc\u30c8\u4e00\u89a7\u306e\u53d6\u5f97",
            level: 3,
          },
          { value: "\u30b7\u30fc\u30c8\u306e\u53d6\u5f97", id: "\u30b7\u30fc\u30c8\u306e\u53d6\u5f97", level: 3 },
          { value: "SheetReader", id: "sheetreader", level: 2 },
          { value: "\u30b7\u30fc\u30c8\u306e\u60c5\u5831", id: "\u30b7\u30fc\u30c8\u306e\u60c5\u5831", level: 3 },
          {
            value: "\u30de\u30fc\u30b8\u60c5\u5831\u306e\u53d6\u5f97",
            id: "\u30de\u30fc\u30b8\u60c5\u5831\u306e\u53d6\u5f97",
            level: 3,
          },
          {
            value: "\u30bb\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",
            id: "\u30bb\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",
            level: 3,
          },
          { value: "CellReader", id: "cellreader", level: 2 },
          { value: "\u5024\u306e\u53d6\u5f97", id: "\u5024\u306e\u53d6\u5f97", level: 3 },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u306e\u53d6\u5f97",
            id: "\u30b9\u30bf\u30a4\u30eb\u306e\u53d6\u5f97",
            level: 3,
          },
          { value: "\u7f6b\u7dda\u306e\u53d6\u5f97", id: "\u7f6b\u7dda\u306e\u53d6\u5f97", level: 3 },
          { value: "\u5b8c\u5168\u306a\u4f8b", id: "\u5b8c\u5168\u306a\u4f8b", level: 2 },
          { value: "\u8aad\u307f\u53d6\u308a\u5bfe\u8c61", id: "\u8aad\u307f\u53d6\u308a\u5bfe\u8c61", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function a(e) {
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
          ...(0, r.R)(),
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
                "xlkit\u3067\u306f\u65e2\u5b58\u306eExcel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u3093\u3067\u3001\u30bb\u30eb\u306e\u5024\u3084\u30b9\u30bf\u30a4\u30eb\u3092\u53d6\u5f97\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
              children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            }),
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
            (0, s.jsx)(n.p, {
              children:
                "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u307e\u305f\u306fBuffer\u304b\u3089Excel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// \u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u304b\u3089\nconst workbook = await read("./report.xlsx");\n\n// Buffer\u304b\u3089\nconst buffer = fs.readFileSync("./report.xlsx");\nconst workbook = await read(buffer);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "workbookreader", children: "WorkbookReader" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30ef\u30fc\u30af\u30d6\u30c3\u30af\u5168\u4f53\u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30b7\u30fc\u30c8\u4e00\u89a7\u306e\u53d6\u5f97",
              children: "\u30b7\u30fc\u30c8\u4e00\u89a7\u306e\u53d6\u5f97",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const workbook = await read("report.xlsx");\n\nconsole.log(workbook.sheetNames);  // ["\u58f2\u4e0a", "\u5728\u5eab"]\nconsole.log(workbook.sheetCount);  // 2\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30b7\u30fc\u30c8\u306e\u53d6\u5f97",
              children: "\u30b7\u30fc\u30c8\u306e\u53d6\u5f97",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// \u540d\u524d\u3067\u53d6\u5f97\nconst sheet = workbook.sheet("\u58f2\u4e0a");\n\n// \u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u53d6\u5f97\uff080\u304b\u3089\u958b\u59cb\uff09\nconst firstSheet = workbook.sheetAt(0);\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "sheetreader", children: "SheetReader" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30b7\u30fc\u30c8\u3092\u64cd\u4f5c\u3059\u308b\u305f\u3081\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30b7\u30fc\u30c8\u306e\u60c5\u5831",
              children: "\u30b7\u30fc\u30c8\u306e\u60c5\u5831",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const sheet = workbook.sheet("\u58f2\u4e0a");\n\nconsole.log(sheet.name);        // "\u58f2\u4e0a"\nconsole.log(sheet.rowCount);    // 100\nconsole.log(sheet.columnCount); // 5\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30de\u30fc\u30b8\u60c5\u5831\u306e\u53d6\u5f97",
              children: "\u30de\u30fc\u30b8\u60c5\u5831\u306e\u53d6\u5f97",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children: 'console.log(sheet.mergedCells);  // ["A1:B1", "C1:C2"]\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30bb\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",
              children: "\u30bb\u30eb\u3078\u306e\u30a2\u30af\u30bb\u30b9",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// A1\u5f62\u5f0f\nconst cell1 = sheet.cell("A1");\nconst cell2 = sheet.cell("B2");\n\n// \u884c\u30fb\u5217\u756a\u53f7\uff080\u304b\u3089\u958b\u59cb\uff09\nconst cell3 = sheet.cellAt(0, 0);  // A1\u3068\u540c\u3058\nconst cell4 = sheet.cellAt(1, 1);  // B2\u3068\u540c\u3058\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "cellreader", children: "CellReader" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30bb\u30eb\u306e\u5024\u3084\u30b9\u30bf\u30a4\u30eb\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "\u5024\u306e\u53d6\u5f97", children: "\u5024\u306e\u53d6\u5f97" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const cell = sheet.cell("A1");\n\nconsole.log(cell.value);  // "\u5546\u54c1\u540d" or 100 or true or null\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, {
              id: "\u30b9\u30bf\u30a4\u30eb\u306e\u53d6\u5f97",
              children: "\u30b9\u30bf\u30a4\u30eb\u306e\u53d6\u5f97",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const style = sheet.cell("A1").style;\n\nconsole.log(style?.bold);      // true\nconsole.log(style?.fill);      // "#4472C4"\nconsole.log(style?.color);     // "#FFFFFF"\nconsole.log(style?.fontSize);  // 11\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h3, { id: "\u7f6b\u7dda\u306e\u53d6\u5f97", children: "\u7f6b\u7dda\u306e\u53d6\u5f97" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const border = sheet.cell("A1").border;\n\nconsole.log(border?.top);     // { style: "thin", color: "#000000" }\nconsole.log(border?.bottom);  // { style: "thin", color: "#000000" }\nconsole.log(border?.left);    // { style: "thin", color: "#000000" }\nconsole.log(border?.right);   // { style: "thin", color: "#000000" }\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u5b8c\u5168\u306a\u4f8b", children: "\u5b8c\u5168\u306a\u4f8b" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { read } from "xlkit";\n\nasync function analyzeExcel() {\n  const workbook = await read("./report.xlsx");\n\n  // \u30b7\u30fc\u30c8\u4e00\u89a7\u3092\u8868\u793a\n  console.log("\u30b7\u30fc\u30c8\u4e00\u89a7:", workbook.sheetNames);\n\n  // \u6700\u521d\u306e\u30b7\u30fc\u30c8\u3092\u53d6\u5f97\n  const sheet = workbook.sheetAt(0);\n  console.log(`\u30b7\u30fc\u30c8\u540d: ${sheet.name}`);\n  console.log(`\u884c\u6570: ${sheet.rowCount}`);\n  console.log(`\u5217\u6570: ${sheet.columnCount}`);\n\n  // \u30d8\u30c3\u30c0\u30fc\u884c\u3092\u8aad\u307f\u53d6\u308a\n  console.log("\\n\u30d8\u30c3\u30c0\u30fc:");\n  for (let col = 0; col < sheet.columnCount; col++) {\n    const cell = sheet.cellAt(0, col);\n    console.log(`  ${String.fromCharCode(65 + col)}1: ${cell.value}`);\n  }\n\n  // \u30c7\u30fc\u30bf\u884c\u3092\u8aad\u307f\u53d6\u308a\n  console.log("\\n\u30c7\u30fc\u30bf:");\n  for (let row = 1; row < Math.min(sheet.rowCount, 5); row++) {\n    const rowData = [];\n    for (let col = 0; col < sheet.columnCount; col++) {\n      rowData.push(sheet.cellAt(row, col).value);\n    }\n    console.log(`  \u884c${row + 1}: ${rowData.join(", ")}`);\n  }\n\n  // \u30de\u30fc\u30b8\u60c5\u5831\u3092\u8868\u793a\n  if (sheet.mergedCells.length > 0) {\n    console.log("\\n\u30de\u30fc\u30b8\u3055\u308c\u305f\u30bb\u30eb:", sheet.mergedCells);\n  }\n\n  // \u7279\u5b9a\u306e\u30bb\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u78ba\u8a8d\n  const headerStyle = sheet.cell("A1").style;\n  if (headerStyle) {\n    console.log("\\nA1\u306e\u30b9\u30bf\u30a4\u30eb:");\n    console.log("  \u592a\u5b57:", headerStyle.bold);\n    console.log("  \u80cc\u666f\u8272:", headerStyle.fill);\n    console.log("  \u6587\u5b57\u8272:", headerStyle.color);\n  }\n}\n\nanalyzeExcel();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u8aad\u307f\u53d6\u308a\u5bfe\u8c61",
              children: "\u8aad\u307f\u53d6\u308a\u5bfe\u8c61",
            }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "\u5bfe\u8c61" }),
                      (0, s.jsx)(n.th, { children: "\u30b5\u30dd\u30fc\u30c8" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "\u30bb\u30eb\u306e\u5024" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "\u30bb\u30eb\u306e\u30b9\u30bf\u30a4\u30eb" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "\u30de\u30fc\u30b8\u60c5\u5831" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "\u30b7\u30fc\u30c8\u540d" }),
                        (0, s.jsx)(n.td, { children: "\u2705" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: "\u5217\u5e45\u30fb\u884c\u9ad8" }),
                        (0, s.jsx)(n.td, { children: "\u274c" }),
                      ],
                    }),
                  ],
                }),
              ],
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
                      href: "/xlkit/docs/api-reference/reading",
                      children: "\u8aad\u307f\u53d6\u308aAPI",
                    }),
                    " - API\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
                      href: "/xlkit/docs/reference/limitations",
                      children: "\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u306a\u3044\u6a5f\u80fd",
                    }),
                    " - \u8aad\u307f\u53d6\u308a\u306e\u5236\u9650\u4e8b\u9805",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(a, { ...e }) }) : a(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => t, x: () => c });
      var o = l(7140);
      const s = {},
        r = o.createContext(s);
      function t(e) {
        const n = o.useContext(r);
        return o.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          o.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
