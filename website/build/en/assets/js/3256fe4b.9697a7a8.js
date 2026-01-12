(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [668],
  {
    5176(e, t, r) {
      r.r(t),
        r.d(t, {
          assets: () => o,
          contentTitle: () => l,
          default: () => a,
          frontMatter: () => i,
          metadata: () => d,
          toc: () => c,
        });
      const d = JSON.parse(
        '{"id":"api-reference/xlkit","title":"xlkit()","description":"Factory function that returns a WorkbookBuilder.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/xlkit.md","sourceDirName":"api-reference","slug":"/api-reference/xlkit","permalink":"/xlkit/en/docs/api-reference/xlkit","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/xlkit.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"API Overview","permalink":"/xlkit/en/docs/api-reference/overview"},"next":{"title":".table()","permalink":"/xlkit/en/docs/api-reference/table"}}',
      );
      var n = r(5656),
        s = r(6610);
      const i = { sidebar_position: 2 },
        l = "xlkit()",
        o = {},
        c = [
          { value: "Import", id: "import", level: 2 },
          { value: "Usage", id: "usage", level: 2 },
          { value: "WorkbookBuilder Methods", id: "workbookbuilder-methods", level: 2 },
          { value: "SheetBuilder Methods", id: "sheetbuilder-methods", level: 2 },
          { value: "sheet()", id: "sheet", level: 2 },
          { value: "getNode()", id: "getnode", level: 2 },
          { value: "getBrowser()", id: "getbrowser", level: 2 },
        ];
      function h(e) {
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
            (0, n.jsx)(t.p, { children: "Factory function that returns a WorkbookBuilder." }),
            "\n",
            (0, n.jsx)(t.h2, { id: "import", children: "Import" }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children: 'import { xlkit } from "xlkit";\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "usage", children: "Usage" }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children: "const builder = xlkit();\n",
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "workbookbuilder-methods", children: "WorkbookBuilder Methods" }),
            "\n",
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { children: "Method" }),
                      (0, n.jsx)(t.th, { children: "Returns" }),
                      (0, n.jsx)(t.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "sheet(name?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "SheetBuilder" }) }),
                        (0, n.jsx)(t.td, { children: "Add sheet" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getNode()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<NodeOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Get Node.js output" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getBrowser()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Get browser output" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "sheetbuilder-methods", children: "SheetBuilder Methods" }),
            "\n",
            (0, n.jsxs)(t.table, {
              children: [
                (0, n.jsx)(t.thead, {
                  children: (0, n.jsxs)(t.tr, {
                    children: [
                      (0, n.jsx)(t.th, { children: "Method" }),
                      (0, n.jsx)(t.th, { children: "Returns" }),
                      (0, n.jsx)(t.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, n.jsxs)(t.tbody, {
                  children: [
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "table(options)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "Add table" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "text(input)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "Add text" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "image(options)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "Add image" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "space(lines?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "this" }) }),
                        (0, n.jsx)(t.td, { children: "Add empty rows (default: 1)" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "sheet(name?)" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "SheetBuilder" }) }),
                        (0, n.jsx)(t.td, { children: "Switch to another sheet" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getNode()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<NodeOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Get Node.js output" }),
                      ],
                    }),
                    (0, n.jsxs)(t.tr, {
                      children: [
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "getBrowser()" }) }),
                        (0, n.jsx)(t.td, { children: (0, n.jsx)(t.code, { children: "Promise<BrowserOutput>" }) }),
                        (0, n.jsx)(t.td, { children: "Get browser output" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "sheet", children: "sheet()" }),
            "\n",
            (0, n.jsx)(t.p, { children: "Adds a sheet. Name is auto-generated if omitted." }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '// With name\nxlkit().sheet("Sales Data")\n\n// Without name (Sheet1, Sheet2... auto-generated)\nxlkit().sheet()\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "getnode", children: "getNode()" }),
            "\n",
            (0, n.jsx)(t.p, { children: "Gets output object for Node.js environment." }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({ columns: [...], data: [...] })\n  .getNode();\n\n// Save to file\nawait output.saveToFile("report.xlsx");\n\n// Get as Buffer (for API responses)\nconst buffer = await output.toBuffer();\n',
              }),
            }),
            "\n",
            (0, n.jsx)(t.h2, { id: "getbrowser", children: "getBrowser()" }),
            "\n",
            (0, n.jsx)(t.p, { children: "Gets output object for browser environment." }),
            "\n",
            (0, n.jsx)(t.pre, {
              children: (0, n.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({ columns: [...], data: [...] })\n  .getBrowser();\n\n// Download\nawait output.download("report.xlsx");\n',
              }),
            }),
          ],
        });
      }
      function a(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components };
        return t ? (0, n.jsx)(t, { ...e, children: (0, n.jsx)(h, { ...e }) }) : h(e);
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
