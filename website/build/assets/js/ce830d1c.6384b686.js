(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [448],
  {
    3562(e, r, i) {
      i.r(r),
        i.d(r, {
          assets: () => c,
          contentTitle: () => l,
          default: () => x,
          frontMatter: () => s,
          metadata: () => d,
          toc: () => h,
        });
      const d = JSON.parse(
        '{"id":"api-reference/overview","title":"API\u6982\u8981","description":"xlkit\u306eAPI\u306f\u5927\u304d\u304f2\u3064\u306b\u5206\u304b\u308c\u307e\u3059\u3002","source":"@site/docs/api-reference/overview.md","sourceDirName":"api-reference","slug":"/api-reference/overview","permalink":"/xlkit/docs/api-reference/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u8aad\u307f\u53d6\u308aAPI","permalink":"/xlkit/docs/guides/reading"},"next":{"title":"xlkit()","permalink":"/xlkit/docs/api-reference/xlkit"}}',
      );
      var t = i(5656),
        n = i(6610);
      const s = { sidebar_position: 1 },
        l = "API\u6982\u8981",
        c = {},
        h = [
          {
            value: "\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",
            id: "\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",
            level: 2,
          },
          { value: "xlkit()", id: "xlkit", level: 3 },
          { value: "read()", id: "read", level: 3 },
          { value: "\u30e1\u30bd\u30c3\u30c9\u4e00\u89a7", id: "\u30e1\u30bd\u30c3\u30c9\u4e00\u89a7", level: 2 },
          { value: "WorkbookBuilder / SheetBuilder", id: "workbookbuilder--sheetbuilder", level: 3 },
          { value: "NodeOutput", id: "nodeoutput", level: 3 },
          { value: "BrowserOutput", id: "browseroutput", level: 3 },
          { value: "\u57fa\u672c\u30d5\u30ed\u30fc", id: "\u57fa\u672c\u30d5\u30ed\u30fc", level: 2 },
          { value: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", level: 2 },
        ];
      function o(e) {
        const r = {
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
          ...(0, n.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(r.header, {
              children: (0, t.jsx)(r.h1, { id: "api\u6982\u8981", children: "API\u6982\u8981" }),
            }),
            "\n",
            (0, t.jsx)(r.p, {
              children: "xlkit\u306eAPI\u306f\u5927\u304d\u304f2\u3064\u306b\u5206\u304b\u308c\u307e\u3059\u3002",
            }),
            "\n",
            (0, t.jsx)(r.h2, {
              id: "\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",
              children: "\u30a8\u30f3\u30c8\u30ea\u30fc\u30dd\u30a4\u30f3\u30c8",
            }),
            "\n",
            (0, t.jsx)(r.h3, { id: "xlkit", children: "xlkit()" }),
            "\n",
            (0, t.jsx)(r.p, {
              children:
                "Excel\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u305f\u3081\u306e\u30d3\u30eb\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, t.jsx)(r.pre, {
              children: (0, t.jsx)(r.code, {
                className: "language-typescript",
                children: 'import { xlkit } from "xlkit";\n\nconst builder = xlkit();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(r.h3, { id: "read", children: "read()" }),
            "\n",
            (0, t.jsx)(r.p, {
              children:
                "\u65e2\u5b58\u306eExcel\u30d5\u30a1\u30a4\u30eb\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002",
            }),
            "\n",
            (0, t.jsx)(r.pre, {
              children: (0, t.jsx)(r.code, {
                className: "language-typescript",
                children: 'import { read } from "xlkit";\n\nconst workbook = await read("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, t.jsx)(r.h2, {
              id: "\u30e1\u30bd\u30c3\u30c9\u4e00\u89a7",
              children: "\u30e1\u30bd\u30c3\u30c9\u4e00\u89a7",
            }),
            "\n",
            (0, t.jsx)(r.h3, { id: "workbookbuilder--sheetbuilder", children: "WorkbookBuilder / SheetBuilder" }),
            "\n",
            (0, t.jsxs)(r.table, {
              children: [
                (0, t.jsx)(r.thead, {
                  children: (0, t.jsxs)(r.tr, {
                    children: [
                      (0, t.jsx)(r.th, { children: "\u30e1\u30bd\u30c3\u30c9" }),
                      (0, t.jsx)(r.th, { children: "\u623b\u308a\u5024" }),
                      (0, t.jsx)(r.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(r.tbody, {
                  children: [
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "sheet(name?)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "SheetBuilder" }) }),
                        (0, t.jsx)(r.td, {
                          children:
                            "\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0\uff08\u540d\u524d\u7701\u7565\u6642\u306f\u81ea\u52d5\u751f\u6210\uff09",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "table(options)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "this" }) }),
                        (0, t.jsx)(r.td, { children: "\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "text(input)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "this" }) }),
                        (0, t.jsx)(r.td, { children: "\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "image(options)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "this" }) }),
                        (0, t.jsx)(r.td, { children: "\u753b\u50cf\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "space(lines?)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "this" }) }),
                        (0, t.jsx)(r.td, {
                          children: "\u7a7a\u884c\u3092\u8ffd\u52a0\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: 1\u884c\uff09",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "getNode()" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "Promise<NodeOutput>" }) }),
                        (0, t.jsx)(r.td, {
                          children: "Node.js\u7528\u51fa\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "getBrowser()" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, t.jsx)(r.td, {
                          children:
                            "\u30d6\u30e9\u30a6\u30b6\u7528\u51fa\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, t.jsx)(r.h3, { id: "nodeoutput", children: "NodeOutput" }),
            "\n",
            (0, t.jsxs)(r.table, {
              children: [
                (0, t.jsx)(r.thead, {
                  children: (0, t.jsxs)(r.tr, {
                    children: [
                      (0, t.jsx)(r.th, { children: "\u30e1\u30bd\u30c3\u30c9" }),
                      (0, t.jsx)(r.th, { children: "\u623b\u308a\u5024" }),
                      (0, t.jsx)(r.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(r.tbody, {
                  children: [
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "saveToFile(path)" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "Promise<void>" }) }),
                        (0, t.jsx)(r.td, { children: "\u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58" }),
                      ],
                    }),
                    (0, t.jsxs)(r.tr, {
                      children: [
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "toBuffer()" }) }),
                        (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "Promise<Buffer>" }) }),
                        (0, t.jsx)(r.td, { children: "Buffer\u3068\u3057\u3066\u53d6\u5f97" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, t.jsx)(r.h3, { id: "browseroutput", children: "BrowserOutput" }),
            "\n",
            (0, t.jsxs)(r.table, {
              children: [
                (0, t.jsx)(r.thead, {
                  children: (0, t.jsxs)(r.tr, {
                    children: [
                      (0, t.jsx)(r.th, { children: "\u30e1\u30bd\u30c3\u30c9" }),
                      (0, t.jsx)(r.th, { children: "\u623b\u308a\u5024" }),
                      (0, t.jsx)(r.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, t.jsx)(r.tbody, {
                  children: (0, t.jsxs)(r.tr, {
                    children: [
                      (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "download(filename)" }) }),
                      (0, t.jsx)(r.td, { children: (0, t.jsx)(r.code, { children: "Promise<void>" }) }),
                      (0, t.jsx)(r.td, {
                        children: "\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9",
                      }),
                    ],
                  }),
                }),
              ],
            }),
            "\n",
            (0, t.jsx)(r.h2, { id: "\u57fa\u672c\u30d5\u30ed\u30fc", children: "\u57fa\u672c\u30d5\u30ed\u30fc" }),
            "\n",
            (0, t.jsx)(r.pre, {
              children: (0, t.jsx)(r.code, {
                children: "xlkit() \u2192 sheet() \u2192 table() / text() / image() \u2192 getNode() / getBrowser()\n",
              }),
            }),
            "\n",
            (0, t.jsx)(r.pre, {
              children: (0, t.jsx)(r.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30b7\u30fc\u30c8\u540d")\n  .table({ columns: [...], data: [...] })\n  .getNode();\n\nawait output.saveToFile("output.xlsx");\n',
              }),
            }),
            "\n",
            (0, t.jsx)(r.h2, {
              id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
              children: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
            }),
            "\n",
            (0, t.jsxs)(r.ul, {
              children: [
                "\n",
                (0, t.jsxs)(r.li, {
                  children: [
                    (0, t.jsx)(r.a, { href: "/xlkit/docs/api-reference/xlkit", children: "xlkit()" }),
                    " - \u30d5\u30a1\u30af\u30c8\u30ea\u95a2\u6570\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, t.jsxs)(r.li, {
                  children: [
                    (0, t.jsx)(r.a, { href: "/xlkit/docs/api-reference/table", children: ".table()" }),
                    " - \u30c6\u30fc\u30d6\u30ebAPI\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, t.jsxs)(r.li, {
                  children: [
                    (0, t.jsx)(r.a, {
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - \u30b9\u30bf\u30a4\u30ea\u30f3\u30b0\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: r } = { ...(0, n.R)(), ...e.components };
        return r ? (0, t.jsx)(r, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, r, i) {
      i.d(r, { R: () => s, x: () => l });
      var d = i(7140);
      const t = {},
        n = d.createContext(t);
      function s(e) {
        const r = d.useContext(n);
        return d.useMemo(() => ("function" == typeof e ? e(r) : { ...r, ...e }), [r, e]);
      }
      function l(e) {
        let r;
        return (
          (r = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : s(e.components)),
          d.createElement(n.Provider, { value: r }, e.children)
        );
      }
    },
  },
]);
