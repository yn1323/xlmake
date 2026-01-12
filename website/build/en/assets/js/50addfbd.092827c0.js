(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [891],
  {
    6610(e, t, i) {
      i.d(t, { R: () => s, x: () => l });
      var r = i(7140);
      const d = {},
        n = r.createContext(d);
      function s(e) {
        const t = r.useContext(n);
        return r.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function l(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(d)
              : e.components || d
            : s(e.components)),
          r.createElement(n.Provider, { value: t }, e.children)
        );
      }
    },
    7084(e, t, i) {
      i.r(t),
        i.d(t, {
          assets: () => c,
          contentTitle: () => l,
          default: () => x,
          frontMatter: () => s,
          metadata: () => r,
          toc: () => o,
        });
      const r = JSON.parse(
        '{"id":"api-reference/overview","title":"API Overview","description":"xlkit\'s API is divided into two main parts.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/overview.md","sourceDirName":"api-reference","slug":"/api-reference/overview","permalink":"/xlkit/en/docs/api-reference/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/overview.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Reading API","permalink":"/xlkit/en/docs/guides/reading"},"next":{"title":"xlkit()","permalink":"/xlkit/en/docs/api-reference/xlkit"}}',
      );
      var d = i(5656),
        n = i(6610);
      const s = { sidebar_position: 1 },
        l = "API Overview",
        c = {},
        o = [
          { value: "Entry Points", id: "entry-points", level: 2 },
          { value: "xlkit()", id: "xlkit", level: 3 },
          { value: "read()", id: "read", level: 3 },
          { value: "Method Reference", id: "method-reference", level: 2 },
          { value: "WorkbookBuilder / SheetBuilder", id: "workbookbuilder--sheetbuilder", level: 3 },
          { value: "NodeOutput", id: "nodeoutput", level: 3 },
          { value: "BrowserOutput", id: "browseroutput", level: 3 },
          { value: "Basic Flow", id: "basic-flow", level: 2 },
          { value: "Next Steps", id: "next-steps", level: 2 },
        ];
      function h(e) {
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
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(t.header, { children: (0, d.jsx)(t.h1, { id: "api-overview", children: "API Overview" }) }),
            "\n",
            (0, d.jsx)(t.p, { children: "xlkit's API is divided into two main parts." }),
            "\n",
            (0, d.jsx)(t.h2, { id: "entry-points", children: "Entry Points" }),
            "\n",
            (0, d.jsx)(t.h3, { id: "xlkit", children: "xlkit()" }),
            "\n",
            (0, d.jsx)(t.p, { children: "Creates a builder for generating Excel files." }),
            "\n",
            (0, d.jsx)(t.pre, {
              children: (0, d.jsx)(t.code, {
                className: "language-typescript",
                children: 'import { xlkit } from "xlkit";\n\nconst builder = xlkit();\n',
              }),
            }),
            "\n",
            (0, d.jsx)(t.h3, { id: "read", children: "read()" }),
            "\n",
            (0, d.jsx)(t.p, { children: "Reads existing Excel files." }),
            "\n",
            (0, d.jsx)(t.pre, {
              children: (0, d.jsx)(t.code, {
                className: "language-typescript",
                children: 'import { read } from "xlkit";\n\nconst workbook = await read("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, d.jsx)(t.h2, { id: "method-reference", children: "Method Reference" }),
            "\n",
            (0, d.jsx)(t.h3, { id: "workbookbuilder--sheetbuilder", children: "WorkbookBuilder / SheetBuilder" }),
            "\n",
            (0, d.jsxs)(t.table, {
              children: [
                (0, d.jsx)(t.thead, {
                  children: (0, d.jsxs)(t.tr, {
                    children: [
                      (0, d.jsx)(t.th, { children: "Method" }),
                      (0, d.jsx)(t.th, { children: "Returns" }),
                      (0, d.jsx)(t.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, d.jsxs)(t.tbody, {
                  children: [
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "sheet(name?)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "SheetBuilder" }) }),
                        (0, d.jsx)(t.td, { children: "Add sheet (auto-generated name if omitted)" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "table(options)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "this" }) }),
                        (0, d.jsx)(t.td, { children: "Add table" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "text(input)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "this" }) }),
                        (0, d.jsx)(t.td, { children: "Add text" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "image(options)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "this" }) }),
                        (0, d.jsx)(t.td, { children: "Add image" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "space(lines?)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "this" }) }),
                        (0, d.jsx)(t.td, { children: "Add empty rows (default: 1)" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "getNode()" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "Promise<NodeOutput>" }) }),
                        (0, d.jsx)(t.td, { children: "Get Node.js output object" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "getBrowser()" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, d.jsx)(t.td, { children: "Get browser output object" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(t.h3, { id: "nodeoutput", children: "NodeOutput" }),
            "\n",
            (0, d.jsxs)(t.table, {
              children: [
                (0, d.jsx)(t.thead, {
                  children: (0, d.jsxs)(t.tr, {
                    children: [
                      (0, d.jsx)(t.th, { children: "Method" }),
                      (0, d.jsx)(t.th, { children: "Returns" }),
                      (0, d.jsx)(t.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, d.jsxs)(t.tbody, {
                  children: [
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "saveToFile(path)" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "Promise<void>" }) }),
                        (0, d.jsx)(t.td, { children: "Save to file" }),
                      ],
                    }),
                    (0, d.jsxs)(t.tr, {
                      children: [
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "toBuffer()" }) }),
                        (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "Promise<Buffer>" }) }),
                        (0, d.jsx)(t.td, { children: "Get as Buffer" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(t.h3, { id: "browseroutput", children: "BrowserOutput" }),
            "\n",
            (0, d.jsxs)(t.table, {
              children: [
                (0, d.jsx)(t.thead, {
                  children: (0, d.jsxs)(t.tr, {
                    children: [
                      (0, d.jsx)(t.th, { children: "Method" }),
                      (0, d.jsx)(t.th, { children: "Returns" }),
                      (0, d.jsx)(t.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, d.jsx)(t.tbody, {
                  children: (0, d.jsxs)(t.tr, {
                    children: [
                      (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "download(filename)" }) }),
                      (0, d.jsx)(t.td, { children: (0, d.jsx)(t.code, { children: "Promise<void>" }) }),
                      (0, d.jsx)(t.td, { children: "Download file" }),
                    ],
                  }),
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(t.h2, { id: "basic-flow", children: "Basic Flow" }),
            "\n",
            (0, d.jsx)(t.pre, {
              children: (0, d.jsx)(t.code, {
                children: "xlkit() \u2192 sheet() \u2192 table() / text() / image() \u2192 getNode() / getBrowser()\n",
              }),
            }),
            "\n",
            (0, d.jsx)(t.pre, {
              children: (0, d.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sheet Name")\n  .table({ columns: [...], data: [...] })\n  .getNode();\n\nawait output.saveToFile("output.xlsx");\n',
              }),
            }),
            "\n",
            (0, d.jsx)(t.h2, { id: "next-steps", children: "Next Steps" }),
            "\n",
            (0, d.jsxs)(t.ul, {
              children: [
                "\n",
                (0, d.jsxs)(t.li, {
                  children: [
                    (0, d.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/xlkit", children: "xlkit()" }),
                    " - Factory function details",
                  ],
                }),
                "\n",
                (0, d.jsxs)(t.li, {
                  children: [
                    (0, d.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table()" }),
                    " - Table API details",
                  ],
                }),
                "\n",
                (0, d.jsxs)(t.li, {
                  children: [
                    (0, d.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - Styling details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, n.R)(), ...e.components };
        return t ? (0, d.jsx)(t, { ...e, children: (0, d.jsx)(h, { ...e }) }) : h(e);
      }
    },
  },
]);
