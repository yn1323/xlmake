(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [278],
  {
    5624(e, t, r) {
      r.r(t),
        r.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => x,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => h,
        });
      const d = JSON.parse(
        '{"id":"api-reference/xlkit","title":"xlkit()","description":"WorkbookBuilder\u3092\u8fd4\u3059\u30d5\u30a1\u30af\u30c8\u30ea\u95a2\u6570\u3067\u3059\u3002","source":"@site/docs/api-reference/xlkit.md","sourceDirName":"api-reference","slug":"/api-reference/xlkit","permalink":"/xlkit/docs/api-reference/xlkit","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/xlkit.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"API\u6982\u8981","permalink":"/xlkit/docs/api-reference/overview"},"next":{"title":".table()","permalink":"/xlkit/docs/api-reference/table"}}',
      );
      var n = r(5656),
        s = r(6610);
      const i = { sidebar_position: 2 },
        l = "xlkit()",
        c = {},
        h = [
          { value: "\u30a4\u30f3\u30dd\u30fc\u30c8", id: "\u30a4\u30f3\u30dd\u30fc\u30c8", level: 2 },
          { value: "\u4f7f\u7528\u4f8b", id: "\u4f7f\u7528\u4f8b", level: 2 },
          {
            value: "WorkbookBuilder \u30e1\u30bd\u30c3\u30c9",
            id: "workbookbuilder-\u30e1\u30bd\u30c3\u30c9",
            level: 2,
          },
          { value: "SheetBuilder \u30e1\u30bd\u30c3\u30c9", id: "sheetbuilder-\u30e1\u30bd\u30c3\u30c9", level: 2 },
          { value: "sheet()", id: "sheet", level: 2 },
          { value: "getNode()", id: "getnode", level: 2 },
          { value: "getBrowser()", id: "getbrowser", level: 2 },
        ];
      function o(e) {
        const t = {
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          p: "p",
          pre: "pre",
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, n.jsxs)(n.Fragment, {
          children: [
            (0, n.jsx)(t.header, { children: (0, n.jsx)(t.h1, { id: "xlkit", children: "xlkit()" }) }),
            "\n",
            (0, n.jsx)(t.p, {
              children: "WorkbookBuilder\u3092\u8fd4\u3059\u30d5\u30a1\u30af\u30c8\u30ea\u95a2\u6570\u3067\u3059\u3002",
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "\u30a4\u30f3\u30dd\u30fc\u30c8", children: "\u30a4\u30f3\u30dd\u30fc\u30c8" }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children: 'import { xlkit } from "xlkit";\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "\u4f7f\u7528\u4f8b", children: "\u4f7f\u7528\u4f8b" }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children: "const builder = xlkit();\n",
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, {
              id: "workbookbuilder-\u30e1\u30bd\u30c3\u30c9",
              children: "WorkbookBuilder \u30e1\u30bd\u30c3\u30c9",
            }),
            "\n",
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { children: "\u30e1\u30bd\u30c3\u30c9" }),
                      (0, n.jsx)(t.th, { children: "\u623b\u308a\u5024" }),
                      (0, n.jsx)(t.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "sheet(name?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "SheetBuilder" }) }),
                        (0, n.jsx)(t.td, { children: "\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getNode()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<NodeOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Node.js\u7528\u51fa\u529b\u3092\u53d6\u5f97" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getBrowser()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "\u30d6\u30e9\u30a6\u30b6\u7528\u51fa\u529b\u3092\u53d6\u5f97" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, {
              id: "sheetbuilder-\u30e1\u30bd\u30c3\u30c9",
              children: "SheetBuilder \u30e1\u30bd\u30c3\u30c9",
            }),
            "\n",
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { children: "\u30e1\u30bd\u30c3\u30c9" }),
                      (0, n.jsx)(t.th, { children: "\u623b\u308a\u5024" }),
                      (0, n.jsx)(t.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "table(options)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "text(input)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "image(options)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "\u753b\u50cf\u3092\u8ffd\u52a0" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "space(lines?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, {
                          children: "\u7a7a\u884c\u3092\u8ffd\u52a0\uff08\u30c7\u30d5\u30a9\u30eb\u30c8: 1\u884c\uff09",
                        }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "sheet(name?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "SheetBuilder" }) }),
                        (0, n.jsx)(t.td, { children: "\u5225\u306e\u30b7\u30fc\u30c8\u306b\u5207\u308a\u66ff\u3048" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getNode()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<NodeOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Node.js\u7528\u51fa\u529b\u3092\u53d6\u5f97" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getBrowser()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "\u30d6\u30e9\u30a6\u30b6\u7528\u51fa\u529b\u3092\u53d6\u5f97" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "sheet", children: "sheet()" }),
            "\n",
            (0, n.jsx)(t.p, {
              children:
                "\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u540d\u524d\u3092\u7701\u7565\u3059\u308b\u3068\u81ea\u52d5\u751f\u6210\u3055\u308c\u307e\u3059\u3002",
            }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '// \u540d\u524d\u3092\u6307\u5b9a\nxlkit().sheet("\u58f2\u4e0a\u30c7\u30fc\u30bf")\n\n// \u540d\u524d\u3092\u7701\u7565\uff08Sheet1, Sheet2... \u3068\u81ea\u52d5\u751f\u6210\uff09\nxlkit().sheet()\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "getnode", children: "getNode()" }),
            "\n",
            (0, n.jsx)(t.p, {
              children:
                "Node.js\u74b0\u5883\u7528\u306e\u51fa\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({ columns: [...], data: [...] })\n  .getNode();\n\n// \u30d5\u30a1\u30a4\u30eb\u306b\u4fdd\u5b58\nawait output.saveToFile("report.xlsx");\n\n// Buffer\u3068\u3057\u3066\u53d6\u5f97\uff08API\u5fdc\u7b54\u306a\u3069\u306b\u5229\u7528\uff09\nconst buffer = await output.toBuffer();\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "getbrowser", children: "getBrowser()" }),
            "\n",
            (0, n.jsx)(t.p, {
              children:
                "\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u7528\u306e\u51fa\u529b\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({ columns: [...], data: [...] })\n  .getBrowser();\n\n// \u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\nawait output.download("report.xlsx");\n',
              }),
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components };
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, t, r) {
      r.d(t, { R: () => i, x: () => l });
      var d = r(7140);
      const n = {},
        s = d.createContext(n);
      function i(e) {
        const t = d.useContext(s);
        return d.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(n)
              : e.components || n
            : i(e.components)),
          d.createElement(s.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
