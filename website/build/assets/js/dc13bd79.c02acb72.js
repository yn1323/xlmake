(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [122],
  {
    6610(e, n, d) {
      d.d(n, { R: () => i, x: () => c });
      var r = d(7140);
      const l = {},
        s = r.createContext(l);
      function i(e) {
        const n = r.useContext(s);
        return r.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : i(e.components)),
          r.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
    7148(e, n, d) {
      d.r(n),
        d.d(n, {
          assets: () => t,
          contentTitle: () => c,
          default: () => o,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => h,
        });
      const r = JSON.parse(
        '{"id":"api-reference/styling","title":"\u30b9\u30bf\u30a4\u30ebAPI","description":"\u30bb\u30eb\u3084\u30c6\u30fc\u30d6\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u306e\u578b\u3067\u3059\u3002","source":"@site/docs/api-reference/styling.md","sourceDirName":"api-reference","slug":"/api-reference/styling","permalink":"/xlkit/docs/api-reference/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/styling.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":".image()","permalink":"/xlkit/docs/api-reference/image"},"next":{"title":"\u8aad\u307f\u53d6\u308aAPI","permalink":"/xlkit/docs/api-reference/reading"}}',
      );
      var l = d(5656),
        s = d(6610);
      const i = { sidebar_position: 4 },
        c = "\u30b9\u30bf\u30a4\u30ebAPI",
        t = {},
        h = [
          { value: "CellStyle", id: "cellstyle", level: 2 },
          { value: "TableStyle", id: "tablestyle", level: 2 },
          { value: "BorderStyle", id: "borderstyle", level: 2 },
          { value: "LineStyle", id: "linestyle", level: 2 },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            id: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            level: 2,
          },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function x(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          ol: "ol",
          p: "p",
          pre: "pre",
          strong: "strong",
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ul: "ul",
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.header, {
              children: (0, l.jsx)(n.h1, {
                id: "\u30b9\u30bf\u30a4\u30ebapi",
                children: "\u30b9\u30bf\u30a4\u30ebAPI",
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u30bb\u30eb\u3084\u30c6\u30fc\u30d6\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3059\u308b\u305f\u3081\u306e\u578b\u3067\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "cellstyle", children: "CellStyle" }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u30bb\u30eb\u5358\u4f4d\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  // \u30d5\u30a9\u30f3\u30c8\n  fontFamily?: string,\n  fontSize?: number,\n  bold?: boolean,\n  italic?: boolean,\n  underline?: boolean,\n  strike?: boolean,\n\n  // \u8272\n  color?: string,    // \u6587\u5b57\u8272 "#RRGGBB"\n  fill?: string,     // \u80cc\u666f\u8272 "#RRGGBB"\n\n  // \u914d\u7f6e\n  align?: "left" | "center" | "right",\n\n  // \u66f8\u5f0f\n  format?: "string" | "number" | "date",\n  decimalPlaces?: number,\n  thousandsSeparator?: boolean,\n}\n',
              }),
            }),
            "\n",
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3" }),
                      (0, l.jsx)(n.th, { children: "\u578b" }),
                      (0, l.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "fontFamily" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "string" }) }),
                        (0, l.jsx)(n.td, { children: "\u30d5\u30a9\u30f3\u30c8\u540d" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "fontSize" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "number" }) }),
                        (0, l.jsx)(n.td, { children: "\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "bold" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "boolean" }) }),
                        (0, l.jsx)(n.td, { children: "\u592a\u5b57" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "italic" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "boolean" }) }),
                        (0, l.jsx)(n.td, { children: "\u659c\u4f53" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "underline" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "boolean" }) }),
                        (0, l.jsx)(n.td, { children: "\u4e0b\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "strike" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "boolean" }) }),
                        (0, l.jsx)(n.td, { children: "\u53d6\u308a\u6d88\u3057\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "color" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "string" }) }),
                        (0, l.jsx)(n.td, { children: "\u6587\u5b57\u8272\uff08#RRGGBB\u5f62\u5f0f\uff09" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "fill" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "string" }) }),
                        (0, l.jsx)(n.td, { children: "\u80cc\u666f\u8272\uff08#RRGGBB\u5f62\u5f0f\uff09" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "align" }) }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            (0, l.jsx)(n.code, { children: '"left"' }),
                            " | ",
                            (0, l.jsx)(n.code, { children: '"center"' }),
                            " | ",
                            (0, l.jsx)(n.code, { children: '"right"' }),
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: "\u6c34\u5e73\u914d\u7f6e" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "format" }) }),
                        (0, l.jsxs)(n.td, {
                          children: [
                            (0, l.jsx)(n.code, { children: '"string"' }),
                            " | ",
                            (0, l.jsx)(n.code, { children: '"number"' }),
                            " | ",
                            (0, l.jsx)(n.code, { children: '"date"' }),
                          ],
                        }),
                        (0, l.jsx)(n.td, { children: "\u30bb\u30eb\u66f8\u5f0f" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "decimalPlaces" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "number" }) }),
                        (0, l.jsx)(n.td, { children: "\u5c0f\u6570\u70b9\u4ee5\u4e0b\u306e\u6841\u6570" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "thousandsSeparator" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "boolean" }) }),
                        (0, l.jsx)(n.td, { children: "3\u6841\u533a\u5207\u308a\u3092\u4f7f\u7528" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "tablestyle", children: "TableStyle" }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  header?: CellStyle,  // \u30d8\u30c3\u30c0\u30fc\u884c\u306e\u30b9\u30bf\u30a4\u30eb\n  body?: CellStyle,    // \u30dc\u30c7\u30a3\u884c\u306e\u30b9\u30bf\u30a4\u30eb\n}\n",
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: "\u4f7f\u7528\u4f8b:" }) }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  style: {\n    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },\n    body: { fontSize: 11 },\n  },\n})\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "borderstyle", children: "BorderStyle" }),
            "\n",
            (0, l.jsx)(n.p, { children: "\u7f6b\u7dda\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  outline?: LineStyle,      // \u5916\u67a0\uff08\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\uff09\n  headerBody?: LineStyle,   // \u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u306e\u5883\u754c\n  headerInner?: LineStyle,  // \u30d8\u30c3\u30c0\u30fc\u5185\u90e8\n  bodyInner?: LineStyle,    // \u30dc\u30c7\u30a3\u5185\u90e8\n  borderColor?: string,     // \u7f6b\u7dda\u8272 "#RRGGBB"\n}\n',
              }),
            }),
            "\n",
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3" }),
                      (0, l.jsx)(n.th, { children: "\u578b" }),
                      (0, l.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "outline" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, l.jsx)(n.td, { children: "\u30c6\u30fc\u30d6\u30eb\u5916\u67a0\u306e\u7f6b\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "headerBody" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, l.jsx)(n.td, {
                          children: "\u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u306e\u5883\u754c\u7dda",
                        }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "headerInner" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, l.jsx)(n.td, { children: "\u30d8\u30c3\u30c0\u30fc\u5185\u90e8\u306e\u7f6b\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "bodyInner" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, l.jsx)(n.td, { children: "\u30dc\u30c7\u30a3\u5185\u90e8\u306e\u7f6b\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "borderColor" }) }),
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: "string" }) }),
                        (0, l.jsx)(n.td, { children: "\u7f6b\u7dda\u306e\u8272\uff08#RRGGBB\u5f62\u5f0f\uff09" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "linestyle", children: "LineStyle" }),
            "\n",
            (0, l.jsx)(n.p, { children: "\u7f6b\u7dda\u306e\u7a2e\u985e\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, l.jsxs)(n.table, {
              children: [
                (0, l.jsx)(n.thead, {
                  children: (0, l.jsxs)(n.tr, {
                    children: [
                      (0, l.jsx)(n.th, { children: "\u5024" }),
                      (0, l.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, l.jsxs)(n.tbody, {
                  children: [
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"thin"' }) }),
                        (0, l.jsx)(n.td, { children: "\u7d30\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"medium"' }) }),
                        (0, l.jsx)(n.td, { children: "\u4e2d\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"thick"' }) }),
                        (0, l.jsx)(n.td, { children: "\u592a\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"dotted"' }) }),
                        (0, l.jsx)(n.td, { children: "\u70b9\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"dashed"' }) }),
                        (0, l.jsx)(n.td, { children: "\u7834\u7dda" }),
                      ],
                    }),
                    (0, l.jsxs)(n.tr, {
                      children: [
                        (0, l.jsx)(n.td, { children: (0, l.jsx)(n.code, { children: '"double"' }) }),
                        (0, l.jsx)(n.td, { children: "\u4e8c\u91cd\u7dda" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, l.jsx)(n.p, { children: (0, l.jsx)(n.strong, { children: "\u4f7f\u7528\u4f8b:" }) }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  border: {\n    outline: "medium",\n    headerBody: "medium",\n    headerInner: "thin",\n    bodyInner: "thin",\n    borderColor: "#000080",\n  },\n})\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
              children: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u30b9\u30bf\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u9806\u3067\u9069\u7528\u3055\u308c\u307e\u3059\uff08\u5f8c\u306e\u3082\u306e\u304c\u512a\u5148\uff09:",
            }),
            "\n",
            (0, l.jsxs)(n.ol, {
              children: [
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.strong, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8" }),
                    " - ",
                    (0, l.jsx)(n.code, { children: 'preset: "basic"' }),
                    " \u306a\u3069",
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.strong, { children: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, l.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, l.jsx)(n.code, { children: "style.body" }),
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.strong, { children: "\u5217\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, l.jsx)(n.code, { children: "columns[].style" }),
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.strong, { children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, l.jsx)(n.code, { children: "conditionalStyle" }),
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.strong, { children: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, l.jsx)(n.code, { children: "data[]._style" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// \u512a\u5148\u5ea6\u306e\u4f8b\n.table({\n  preset: "basic",              // 1. \u30d9\u30fc\u30b9\u306e\u30b9\u30bf\u30a4\u30eb\n  style: {\n    header: { fontSize: 14 },   // 2. \u30d8\u30c3\u30c0\u30fc\u306e\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u4e0a\u66f8\u304d\n  },\n  columns: [\n    { key: "price", label: "\u4fa1\u683c", style: { bold: true } },  // 3. \u3053\u306e\u5217\u3092\u592a\u5b57\n  ],\n  conditionalStyle: (row, col) => {  // 4. \u6761\u4ef6\u3067\u30b9\u30bf\u30a4\u30eb\u9069\u7528\n    if (col === "price" && row.price < 0) {\n      return { color: "#FF0000" };\n    }\n    return {};\n  },\n  data: [\n    {\n      name: "\u7279\u4fa1",\n      price: 100,\n      _style: { price: { fill: "#FFFF00" } },  // 5. \u3053\u306e\u30bb\u30eb\u3060\u3051\u80cc\u666f\u8272\n    },\n  ],\n})\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, l.jsxs)(n.ul, {
              children: [
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, { href: "/xlkit/docs/api-reference/table", children: ".table()" }),
                    " - \u30c6\u30fc\u30d6\u30ebAPI\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, { href: "/xlkit/docs/examples/borders", children: "\u7f6b\u7dda\u306e\u4f8b" }),
                    " - \u7f6b\u7dda\u306e\u4f7f\u7528\u4f8b",
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, {
                      href: "/xlkit/docs/examples/conditional-styling",
                      children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\u306e\u4f8b",
                    }),
                    " - \u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\u306e\u4f7f\u7528\u4f8b",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function o(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(x, { ...e }) }) : x(e);
      }
    },
  },
]);
