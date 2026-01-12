(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [198],
  {
    6610(e, n, t) {
      t.d(n, { R: () => c, x: () => l });
      var s = t(7140);
      const r = {},
        i = s.createContext(r);
      function c(e) {
        const n = s.useContext(i);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : c(e.components)),
          s.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
    8200(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => a,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => c,
          metadata: () => s,
          toc: () => o,
        });
      const s = JSON.parse(
        '{"id":"reference/excel-constraints","title":"Excel Constraints","description":"xlkit automatically checks Excel specification constraints and throws errors when violated.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/excel-constraints.md","sourceDirName":"reference","slug":"/reference/excel-constraints","permalink":"/xlkit/en/docs/reference/excel-constraints","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/reference/excel-constraints.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Unsupported Features","permalink":"/xlkit/en/docs/reference/limitations"}}',
      );
      var r = t(5656),
        i = t(6610);
      const c = { sidebar_position: 3 },
        l = "Excel Constraints",
        a = {},
        o = [
          { value: "Constraints List", id: "constraints-list", level: 2 },
          { value: "Sheet Name Constraints", id: "sheet-name-constraints", level: 2 },
          { value: "Character Limit", id: "character-limit", level: 3 },
          { value: "Forbidden Characters", id: "forbidden-characters", level: 3 },
          { value: "Row/Column Constraints", id: "rowcolumn-constraints", level: 2 },
          { value: "Error Handling", id: "error-handling", level: 2 },
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, {
              children: (0, r.jsx)(n.h1, { id: "excel-constraints", children: "Excel Constraints" }),
            }),
            "\n",
            (0, r.jsx)(n.p, {
              children: "xlkit automatically checks Excel specification constraints and throws errors when violated.",
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "constraints-list", children: "Constraints List" }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [(0, r.jsx)(n.th, { children: "Item" }), (0, r.jsx)(n.th, { children: "Constraint" })],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: "Sheet name" }),
                        (0, r.jsx)(n.td, { children: "Max 31 characters" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: "Sheet name forbidden characters" }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: ": \\ / ? * [ ]" }) }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: "Max rows" }),
                        (0, r.jsx)(n.td, { children: "1,048,576 rows" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: "Max columns" }),
                        (0, r.jsx)(n.td, { children: "16,384 columns (XFD)" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "sheet-name-constraints", children: "Sheet Name Constraints" }),
            "\n",
            (0, r.jsx)(n.h3, { id: "character-limit", children: "Character Limit" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Sheet names can have a maximum of 31 characters." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// OK\nxlkit().sheet("Sales Data 2024")  // 15 characters\n\n// NG: Error thrown\nxlkit().sheet("This is a very long sheet name that exceeds 31 characters")\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h3, { id: "forbidden-characters", children: "Forbidden Characters" }),
            "\n",
            (0, r.jsx)(n.p, { children: "These characters cannot be used in sheet names:" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: ":" }), " (colon)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "\\" }), " (backslash)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "/" }), " (slash)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "?" }), " (question mark)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "*" }), " (asterisk)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "[" }), " (left bracket)"] }),
                "\n",
                (0, r.jsxs)(n.li, { children: [(0, r.jsx)(n.code, { children: "]" }), " (right bracket)"] }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// NG: Error thrown\nxlkit().sheet("Sales/Stock")    // Contains slash\nxlkit().sheet("Data[2024]")     // Contains brackets\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "rowcolumn-constraints", children: "Row/Column Constraints" }),
            "\n",
            (0, r.jsx)(n.p, {
              children: "Excel's maximum row count is 1,048,576 and maximum column count is 16,384 (XFD column).",
            }),
            "\n",
            (0, r.jsx)(n.p, {
              children: "xlkit automatically checks these constraints and throws errors when exceeded.",
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "error-handling", children: "Error Handling" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Constraint violations throw errors, so you can handle them with try-catch." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'try {\n  const output = await xlkit()\n    .sheet("This is a very long sheet name that exceeds 31 characters")\n    .table({ ... })\n    .getNode();\n} catch (error) {\n  console.error("Excel constraint violation:", error.message);\n}\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/guides/multi-sheet", children: "Multiple Sheets" }),
                    " - Creating multiple sheets",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/reference/limitations", children: "Unsupported Features" }),
                    " - xlkit limitations",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(d, { ...e }) }) : d(e);
      }
    },
  },
]);
