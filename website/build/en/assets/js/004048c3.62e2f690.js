(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [233],
  {
    174(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => c,
          contentTitle: () => t,
          default: () => x,
          frontMatter: () => s,
          metadata: () => r,
          toc: () => o,
        });
      const r = JSON.parse(
        '{"id":"api-reference/styling","title":"Style API","description":"Types for defining cell and table styles.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/styling.md","sourceDirName":"api-reference","slug":"/api-reference/styling","permalink":"/xlkit/en/docs/api-reference/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/styling.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":".image()","permalink":"/xlkit/en/docs/api-reference/image"},"next":{"title":"Reading API","permalink":"/xlkit/en/docs/api-reference/reading"}}',
      );
      var d = l(5656),
        i = l(6610);
      const s = { sidebar_position: 4 },
        t = "Style API",
        c = {},
        o = [
          { value: "CellStyle", id: "cellstyle", level: 2 },
          { value: "TableStyle", id: "tablestyle", level: 2 },
          { value: "BorderStyle", id: "borderstyle", level: 2 },
          { value: "LineStyle", id: "linestyle", level: 2 },
          { value: "Style Priority", id: "style-priority", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function h(e) {
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
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, d.jsxs)(d.Fragment, {
          children: [
            (0, d.jsx)(n.header, { children: (0, d.jsx)(n.h1, { id: "style-api", children: "Style API" }) }),
            "\n",
            (0, d.jsx)(n.p, { children: "Types for defining cell and table styles." }),
            "\n",
            (0, d.jsx)(n.h2, { id: "cellstyle", children: "CellStyle" }),
            "\n",
            (0, d.jsx)(n.p, { children: "Defines cell-level styles." }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  // Font\n  fontFamily?: string,\n  fontSize?: number,\n  bold?: boolean,\n  italic?: boolean,\n  underline?: boolean,\n  strike?: boolean,\n\n  // Colors\n  color?: string,    // Text color "#RRGGBB"\n  fill?: string,     // Background color "#RRGGBB"\n\n  // Alignment\n  align?: "left" | "center" | "right",\n\n  // Format\n  format?: "string" | "number" | "date",\n  decimalPlaces?: number,\n  thousandsSeparator?: boolean,\n}\n',
              }),
            }),
            "\n",
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [
                      (0, d.jsx)(n.th, { children: "Property" }),
                      (0, d.jsx)(n.th, { children: "Type" }),
                      (0, d.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "fontFamily" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "string" }) }),
                        (0, d.jsx)(n.td, { children: "Font name" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "fontSize" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "number" }) }),
                        (0, d.jsx)(n.td, { children: "Font size" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "bold" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "boolean" }) }),
                        (0, d.jsx)(n.td, { children: "Bold" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "italic" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "boolean" }) }),
                        (0, d.jsx)(n.td, { children: "Italic" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "underline" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "boolean" }) }),
                        (0, d.jsx)(n.td, { children: "Underline" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "strike" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "boolean" }) }),
                        (0, d.jsx)(n.td, { children: "Strikethrough" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "color" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "string" }) }),
                        (0, d.jsx)(n.td, { children: "Text color (#RRGGBB format)" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "fill" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "string" }) }),
                        (0, d.jsx)(n.td, { children: "Background color (#RRGGBB format)" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "align" }) }),
                        (0, d.jsxs)(n.td, {
                          children: [
                            (0, d.jsx)(n.code, { children: '"left"' }),
                            " | ",
                            (0, d.jsx)(n.code, { children: '"center"' }),
                            " | ",
                            (0, d.jsx)(n.code, { children: '"right"' }),
                          ],
                        }),
                        (0, d.jsx)(n.td, { children: "Horizontal alignment" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "format" }) }),
                        (0, d.jsxs)(n.td, {
                          children: [
                            (0, d.jsx)(n.code, { children: '"string"' }),
                            " | ",
                            (0, d.jsx)(n.code, { children: '"number"' }),
                            " | ",
                            (0, d.jsx)(n.code, { children: '"date"' }),
                          ],
                        }),
                        (0, d.jsx)(n.td, { children: "Cell format" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "decimalPlaces" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "number" }) }),
                        (0, d.jsx)(n.td, { children: "Decimal places" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "thousandsSeparator" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "boolean" }) }),
                        (0, d.jsx)(n.td, { children: "Use thousands separator" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(n.h2, { id: "tablestyle", children: "TableStyle" }),
            "\n",
            (0, d.jsx)(n.p, { children: "Defines table-wide styles." }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  "{\n  header?: CellStyle,  // Header row style\n  body?: CellStyle,    // Body row style\n}\n",
              }),
            }),
            "\n",
            (0, d.jsx)(n.p, { children: (0, d.jsx)(n.strong, { children: "Example:" }) }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  style: {\n    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },\n    body: { fontSize: 11 },\n  },\n})\n',
              }),
            }),
            "\n",
            (0, d.jsx)(n.h2, { id: "borderstyle", children: "BorderStyle" }),
            "\n",
            (0, d.jsx)(n.p, { children: "Defines borders." }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  outline?: LineStyle,      // Outer border (entire table)\n  headerBody?: LineStyle,   // Header-body boundary\n  headerInner?: LineStyle,  // Header internal\n  bodyInner?: LineStyle,    // Body internal\n  borderColor?: string,     // Border color "#RRGGBB"\n}\n',
              }),
            }),
            "\n",
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [
                      (0, d.jsx)(n.th, { children: "Property" }),
                      (0, d.jsx)(n.th, { children: "Type" }),
                      (0, d.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "outline" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, d.jsx)(n.td, { children: "Table outer border" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "headerBody" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, d.jsx)(n.td, { children: "Header-body boundary line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "headerInner" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, d.jsx)(n.td, { children: "Header internal borders" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "bodyInner" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "LineStyle" }) }),
                        (0, d.jsx)(n.td, { children: "Body internal borders" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "borderColor" }) }),
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: "string" }) }),
                        (0, d.jsx)(n.td, { children: "Border color (#RRGGBB format)" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(n.h2, { id: "linestyle", children: "LineStyle" }),
            "\n",
            (0, d.jsx)(n.p, { children: "Specifies border style." }),
            "\n",
            (0, d.jsxs)(n.table, {
              children: [
                (0, d.jsx)(n.thead, {
                  children: (0, d.jsxs)(n.tr, {
                    children: [(0, d.jsx)(n.th, { children: "Value" }), (0, d.jsx)(n.th, { children: "Description" })],
                  }),
                }),
                (0, d.jsxs)(n.tbody, {
                  children: [
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"thin"' }) }),
                        (0, d.jsx)(n.td, { children: "Thin line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"medium"' }) }),
                        (0, d.jsx)(n.td, { children: "Medium line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"thick"' }) }),
                        (0, d.jsx)(n.td, { children: "Thick line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"dotted"' }) }),
                        (0, d.jsx)(n.td, { children: "Dotted line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"dashed"' }) }),
                        (0, d.jsx)(n.td, { children: "Dashed line" }),
                      ],
                    }),
                    (0, d.jsxs)(n.tr, {
                      children: [
                        (0, d.jsx)(n.td, { children: (0, d.jsx)(n.code, { children: '"double"' }) }),
                        (0, d.jsx)(n.td, { children: "Double line" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, d.jsx)(n.p, { children: (0, d.jsx)(n.strong, { children: "Example:" }) }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  border: {\n    outline: "medium",\n    headerBody: "medium",\n    headerInner: "thin",\n    bodyInner: "thin",\n    borderColor: "#000080",\n  },\n})\n',
              }),
            }),
            "\n",
            (0, d.jsx)(n.h2, { id: "style-priority", children: "Style Priority" }),
            "\n",
            (0, d.jsx)(n.p, { children: "Styles are applied in this order (later ones take precedence):" }),
            "\n",
            (0, d.jsxs)(n.ol, {
              children: [
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, { children: "Preset" }),
                    " - ",
                    (0, d.jsx)(n.code, { children: 'preset: "basic"' }),
                    " etc.",
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, { children: "Table Style" }),
                    " - ",
                    (0, d.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, d.jsx)(n.code, { children: "style.body" }),
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, { children: "Column Style" }),
                    " - ",
                    (0, d.jsx)(n.code, { children: "columns[].style" }),
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, { children: "Conditional Style" }),
                    " - ",
                    (0, d.jsx)(n.code, { children: "conditionalStyle" }),
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.strong, { children: "Cell-Level Style" }),
                    " - ",
                    (0, d.jsx)(n.code, { children: "data[]._style" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, d.jsx)(n.pre, {
              children: (0, d.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '// Priority example\n.table({\n  preset: "basic",              // 1. Base style\n  style: {\n    header: { fontSize: 14 },   // 2. Override header font size\n  },\n  columns: [\n    { key: "price", label: "Price", style: { bold: true } },  // 3. Bold this column\n  ],\n  conditionalStyle: (row, col) => {  // 4. Apply style by condition\n    if (col === "price" && row.price < 0) {\n      return { color: "#FF0000" };\n    }\n    return {};\n  },\n  data: [\n    {\n      name: "Sale",\n      price: 100,\n      _style: { price: { fill: "#FFFF00" } },  // 5. Background for this cell only\n    },\n  ],\n})\n',
              }),
            }),
            "\n",
            (0, d.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, d.jsxs)(n.ul, {
              children: [
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table()" }),
                    " - Table API details",
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.a, { href: "/xlkit/en/docs/examples/borders", children: "Border Examples" }),
                    " - Border usage examples",
                  ],
                }),
                "\n",
                (0, d.jsxs)(n.li, {
                  children: [
                    (0, d.jsx)(n.a, {
                      href: "/xlkit/en/docs/examples/conditional-styling",
                      children: "Conditional Styling Examples",
                    }),
                    " - Conditional style examples",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n ? (0, d.jsx)(n, { ...e, children: (0, d.jsx)(h, { ...e }) }) : h(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => s, x: () => t });
      var r = l(7140);
      const d = {},
        i = r.createContext(d);
      function s(e) {
        const n = r.useContext(i);
        return r.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function t(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(d)
              : e.components || d
            : s(e.components)),
          r.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
