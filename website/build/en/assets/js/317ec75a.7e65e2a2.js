(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [319],
  {
    6610(e, n, l) {
      l.d(n, { R: () => s, x: () => i });
      var t = l(7140);
      const r = {},
        d = t.createContext(r);
      function s(e) {
        const n = t.useContext(d);
        return t.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function i(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : s(e.components)),
          t.createElement(d.Provider, { value: n }, e.children)
        );
      }
    },
    9453(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => c,
          contentTitle: () => i,
          default: () => h,
          frontMatter: () => s,
          metadata: () => t,
          toc: () => a,
        });
      const t = JSON.parse(
        '{"id":"api-reference/table","title":".table()","description":"Adds a table.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/table.md","sourceDirName":"api-reference","slug":"/api-reference/table","permalink":"/xlkit/en/docs/api-reference/table","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/table.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"xlkit()","permalink":"/xlkit/en/docs/api-reference/xlkit"},"next":{"title":".text()","permalink":"/xlkit/en/docs/api-reference/text"}}',
      );
      var r = l(5656),
        d = l(6610);
      const s = { sidebar_position: 3 },
        i = ".table()",
        c = {},
        a = [
          { value: "TableOptions", id: "tableoptions", level: 2 },
          { value: "Column Definition (Column)", id: "column-definition-column", level: 2 },
          { value: "LeafColumn (Regular Column)", id: "leafcolumn-regular-column", level: 3 },
          { value: "ParentColumn (Multi-Header)", id: "parentcolumn-multi-header", level: 3 },
          { value: "autoWidth", id: "autowidth", level: 2 },
          { value: "mergeSameValues", id: "mergesamevalues", level: 2 },
          { value: "conditionalStyle", id: "conditionalstyle", level: 2 },
          { value: "Related", id: "related", level: 2 },
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
          ...(0, d.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "table", children: ".table()" }) }),
            "\n",
            (0, r.jsx)(n.p, { children: "Adds a table." }),
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
                      (0, r.jsx)(n.th, { children: "Option" }),
                      (0, r.jsx)(n.th, { children: "Type" }),
                      (0, r.jsx)(n.th, { children: "Default" }),
                      (0, r.jsx)(n.th, { children: "Description" }),
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
                        (0, r.jsx)(n.td, { children: "Preset style" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "columns" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "Column<T>[]" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.strong, { children: "Required" }) }),
                        (0, r.jsx)(n.td, { children: "Column definitions" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "data" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "T[]" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.strong, { children: "Required" }) }),
                        (0, r.jsx)(n.td, { children: "Data array" }),
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
                        (0, r.jsx)(n.td, { children: "Auto column width" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "mergeSameValues" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "boolean" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "false" }) }),
                        (0, r.jsx)(n.td, { children: "Merge cells with same values vertically" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "style" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "TableStyle" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "Table-wide style" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "border" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "BorderStyle" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "Border settings" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "conditionalStyle" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "function" }) }),
                        (0, r.jsx)(n.td, { children: "-" }),
                        (0, r.jsx)(n.td, { children: "Conditional styling" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "column-definition-column", children: "Column Definition (Column)" }),
            "\n",
            (0, r.jsx)(n.h3, { id: "leafcolumn-regular-column", children: "LeafColumn (Regular Column)" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  key: keyof T & string,     // Data key\n  label: string,             // Header text\n  style?: CellStyle,         // Default style for this column\n  mergeSameValues?: boolean, // Merge same values in this column\n}\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.h3, { id: "parentcolumn-multi-header", children: "ParentColumn (Multi-Header)" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  label: string,             // Parent header text\n  children: Column<T>[],     // Child columns (recursive)\n}\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.p, { children: (0, r.jsx)(n.strong, { children: "Multi-header example:" }) }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'columns: [\n  {\n    label: "Product Info",\n    children: [\n      { key: "category", label: "Category" },\n      { key: "name", label: "Name" },\n    ],\n  },\n  { key: "price", label: "Price" },\n]\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.p, { children: "Result:" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                children: "| Product Info       | Price |\n| Category | Name    |       |\n",
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "autowidth", children: "autoWidth" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Auto-adjusts column width." }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [(0, r.jsx)(n.th, { children: "Value" }), (0, r.jsx)(n.th, { children: "Description" })],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"all"' }) }),
                        (0, r.jsx)(n.td, { children: "Adjust by max width of header and body" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"body"' }) }),
                        (0, r.jsx)(n.td, { children: "Adjust by body only (ignore header)" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "false" }) }),
                        (0, r.jsx)(n.td, { children: "No auto-adjustment (default)" }),
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
            (0, r.jsx)(n.p, { children: "Merges cells with same values vertically." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// Merge entire table\n.table({\n  mergeSameValues: true,\n  columns: [...],\n  data: [...],\n})\n\n// Merge by column\n.table({\n  columns: [\n    { key: "category", label: "Category", mergeSameValues: true },\n    { key: "name", label: "Name" },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "conditionalstyle", children: "conditionalStyle" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Applies styles to cells based on conditions." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  conditionalStyle: (row, col) => {\n    if (col === "profit" && row.profit < 0) {\n      return { color: "#FF0000" };\n    }\n    return {};\n  },\n})\n',
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
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - CellStyle, TableStyle, BorderStyle details",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/reference/presets", children: "Presets" }),
                    " - Preset details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, d.R)(), ...e.components };
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
      }
    },
  },
]);
