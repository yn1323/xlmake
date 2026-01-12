(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [888],
  {
    5786(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => t,
          metadata: () => d,
          toc: () => a,
        });
      const d = JSON.parse(
        '{"id":"api-reference/table","title":".table()","description":"\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002","source":"@site/docs/api-reference/table.md","sourceDirName":"api-reference","slug":"/api-reference/table","permalink":"/xlkit/docs/api-reference/table","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/table.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"xlkit()","permalink":"/xlkit/docs/api-reference/xlkit"},"next":{"title":".text()","permalink":"/xlkit/docs/api-reference/text"}}',
      );
      var r = l(5656),
        s = l(6610);
      const t = { sidebar_position: 3 },
        i = ".table()",
        c = {},
        a = [
          { value: "TableOptions", id: "tableoptions", level: 2 },
          {
            value: "\u30ab\u30e9\u30e0\u5b9a\u7fa9\uff08Column\uff09",
            id: "\u30ab\u30e9\u30e0\u5b9a\u7fa9column",
            level: 2,
          },
          {
            value: "LeafColumn\uff08\u901a\u5e38\u306e\u30ab\u30e9\u30e0\uff09",
            id: "leafcolumn\u901a\u5e38\u306e\u30ab\u30e9\u30e0",
            level: 3,
          },
          {
            value: "ParentColumn\uff08\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u7528\uff09",
            id: "parentcolumn\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u7528",
            level: 3,
          },
          { value: "autoWidth", id: "autowidth", level: 2 },
          { value: "mergeSameValues", id: "mergesamevalues", level: 2 },
          { value: "conditionalStyle", id: "conditionalstyle", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function o(e) {
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "table", children: ".table()" }) }),
            "\n",
            (0, r.jsx)(n.p, { children: "\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, r.jsx)(n.h2, { id: "tableoptions", children: "TableOptions" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  preset?: "basic" | "minimal" | "striped",\n  columns: Column<T>[],\n  data: T[],\n  autoWidth?: "all" | "body" | false,\n  mergeSameValues?: boolean,\n  style?: TableStyle,\n  border?: BorderStyle,\n  conditionalStyle?: (row: T, col: keyof T) => CellStyle | {},\n})\n',
              }),
            }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: "\u30aa\u30d7\u30b7\u30e7\u30f3" }),
                      (0, r.jsx)(n.th, { children: "\u578b" }),
                      (0, r.jsx)(n.th, { children: "\u30c7\u30d5\u30a9\u30eb\u30c8" }),
                      (0, r.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "preset" }) }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, { children: '"basic"' }),
                            " | ",
                            (0, r.jsx)(n.code, { children: '"minimal"' }),
                            " | ",
                            (0, r.jsx)(n.code, { children: '"striped"' }),
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u30b9\u30bf\u30a4\u30eb" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "columns" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "Column<T>[]" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.strong, { children: "\u5fc5\u9808" }) }),
                        (0, r.jsx)(n.td, { children: "\u30ab\u30e9\u30e0\u5b9a\u7fa9" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "data" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "T[]" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.strong, { children: "\u5fc5\u9808" }) }),
                        (0, r.jsx)(n.td, { children: "\u30c7\u30fc\u30bf\u914d\u5217" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "autoWidth" }) }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, { children: '"all"' }),
                            " | ",
                            (0, r.jsx)(n.code, { children: '"body"' }),
                            " | ",
                            (0, r.jsx)(n.code, { children: "false" }),
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "false" }) }),
                        (0, r.jsx)(n.td, { children: "\u5217\u5e45\u81ea\u52d5\u8abf\u6574" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "mergeSameValues" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "boolean" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "false" }) }),
                        (0, r.jsx)(n.td, {
                          children:
                            "\u540c\u3058\u5024\u306e\u30bb\u30eb\u3092\u7e26\u65b9\u5411\u306b\u30de\u30fc\u30b8",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "style" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "TableStyle" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, {
                          children: "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u306e\u30b9\u30bf\u30a4\u30eb",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "border" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "BorderStyle" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "\u7f6b\u7dda\u8a2d\u5b9a" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "conditionalStyle" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "function" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, {
              id: "\u30ab\u30e9\u30e0\u5b9a\u7fa9column",
              children: "\u30ab\u30e9\u30e0\u5b9a\u7fa9\uff08Column\uff09",
            }),
            "\n",
            (0, r.jsx)(n.h3, {
              id: "leafcolumn\u901a\u5e38\u306e\u30ab\u30e9\u30e0",
              children: "LeafColumn\uff08\u901a\u5e38\u306e\u30ab\u30e9\u30e0\uff09",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  key: keyof T & string,     // \u30c7\u30fc\u30bf\u306e\u30ad\u30fc\n  label: string,             // \u30d8\u30c3\u30c0\u30fc\u30c6\u30ad\u30b9\u30c8\n  style?: CellStyle,         // \u3053\u306e\u5217\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u30b9\u30bf\u30a4\u30eb\n  mergeSameValues?: boolean, // \u3053\u306e\u5217\u3067\u540c\u5024\u30de\u30fc\u30b8\u3059\u308b\u304b\n}\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.h3, {
              id: "parentcolumn\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u7528",
              children: "ParentColumn\uff08\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u7528\uff09",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  label: string,             // \u89aa\u30d8\u30c3\u30c0\u30fc\u30c6\u30ad\u30b9\u30c8\n  children: Column<T>[],     // \u5b50\u30ab\u30e9\u30e0\uff08\u518d\u5e30\u7684\u306b\u5b9a\u7fa9\u53ef\u80fd\uff09\n}\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.p, {
              children: (0, r.jsx)(n.strong, { children: "\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u306e\u4f8b:" }),
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'columns: [\n  {\n    label: "\u5546\u54c1\u60c5\u5831",\n    children: [\n      { key: "category", label: "\u30ab\u30c6\u30b4\u30ea" },\n      { key: "name", label: "\u5546\u54c1\u540d" },\n    ],\n  },\n  { key: "price", label: "\u4fa1\u683c" },\n]\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.p, { children: "\u7d50\u679c:" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                children:
                  "| \u5546\u54c1\u60c5\u5831           | \u4fa1\u683c |\n| \u30ab\u30c6\u30b4\u30ea | \u5546\u54c1\u540d |      |\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "autowidth", children: "autoWidth" }),
            "\n",
            (0, r.jsx)(n.p, { children: "\u5217\u5e45\u3092\u81ea\u52d5\u8abf\u6574\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: "\u5024" }),
                      (0, r.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"all"' }) }),
                        (0, r.jsx)(n.td, {
                          children:
                            "\u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u4e21\u65b9\u306e\u6700\u5927\u5e45\u3067\u8abf\u6574",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"body"' }) }),
                        (0, r.jsx)(n.td, {
                          children:
                            "\u30dc\u30c7\u30a3\u306e\u307f\u3067\u8abf\u6574\uff08\u30d8\u30c3\u30c0\u30fc\u306f\u7121\u8996\uff09",
                        }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "false" }) }),
                        (0, r.jsx)(n.td, {
                          children:
                            "\u81ea\u52d5\u8abf\u6574\u3057\u306a\u3044\uff08\u30c7\u30d5\u30a9\u30eb\u30c8\uff09",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children: '.table({\n  autoWidth: "all",\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "mergesamevalues", children: "mergeSameValues" }),
            "\n",
            (0, r.jsx)(n.p, {
              children:
                "\u540c\u3058\u5024\u306e\u30bb\u30eb\u3092\u7e26\u65b9\u5411\u306b\u30de\u30fc\u30b8\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// \u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u3067\u30de\u30fc\u30b8\n.table({\n  mergeSameValues: true,\n  columns: [...],\n  data: [...],\n})\n\n// \u5217\u5358\u4f4d\u3067\u30de\u30fc\u30b8\n.table({\n  columns: [\n    { key: "category", label: "\u30ab\u30c6\u30b4\u30ea", mergeSameValues: true },\n    { key: "name", label: "\u5546\u54c1\u540d" },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "conditionalstyle", children: "conditionalStyle" }),
            "\n",
            (0, r.jsx)(n.p, {
              children:
                "\u6761\u4ef6\u306b\u57fa\u3065\u3044\u3066\u30bb\u30eb\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  conditionalStyle: (row, col) => {\n    if (col === "profit" && row.profit < 0) {\n      return { color: "#FF0000" };\n    }\n    return {};\n  },\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, {
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - CellStyle, TableStyle, BorderStyle\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, {
                      href: "/xlkit/docs/reference/presets",
                      children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7",
                    }),
                    " - \u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => t, x: () => i });
      var d = l(7140);
      const r = {},
        s = d.createContext(r);
      function t(e) {
        const n = d.useContext(s);
        return d.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function i(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : t(e.components)),
          d.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
