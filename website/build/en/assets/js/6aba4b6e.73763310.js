(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [674],
  {
    2054(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => a,
          contentTitle: () => d,
          default: () => u,
          frontMatter: () => i,
          metadata: () => s,
          toc: () => o,
        });
      const s = JSON.parse(
        '{"id":"guides/styling","title":"Styling","description":"xlkit offers various ways to apply styles.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/styling.md","sourceDirName":"guides","slug":"/guides/styling","permalink":"/xlkit/en/docs/guides/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/styling.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Basic Usage","permalink":"/xlkit/en/docs/guides/basic-usage"},"next":{"title":"Multiple Sheets","permalink":"/xlkit/en/docs/guides/multi-sheet"}}',
      );
      var r = l(5656),
        t = l(6610);
      const i = { sidebar_position: 2 },
        d = "Styling",
        a = {},
        o = [
          { value: "Presets", id: "presets", level: 2 },
          { value: "CellStyle", id: "cellstyle", level: 2 },
          { value: "Table Style", id: "table-style", level: 2 },
          { value: "Column Style", id: "column-style", level: 2 },
          { value: "Conditional Style", id: "conditional-style", level: 2 },
          { value: "Cell-Level Style (_style)", id: "cell-level-style-_style", level: 2 },
          { value: "Style Priority", id: "style-priority", level: 2 },
          { value: "Number Format", id: "number-format", level: 2 },
          { value: "Borders", id: "borders", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function c(e) {
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
          ul: "ul",
          ...(0, t.R)(),
          ...e.components,
        };
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "styling", children: "Styling" }) }),
            "\n",
            (0, r.jsx)(n.p, { children: "xlkit offers various ways to apply styles." }),
            "\n",
            (0, r.jsx)(n.h2, { id: "presets", children: "Presets" }),
            "\n",
            (0, r.jsx)(n.p, { children: "The easiest way is to use presets." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  preset: "basic",  // Blue header + all borders\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.p, { children: "Available presets:" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [(0, r.jsx)(n.code, { children: "basic" }), " - Blue header, white text, all borders"],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [(0, r.jsx)(n.code, { children: "minimal" }), " - Bold header only, no borders"],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.code, { children: "striped" }),
                    " - Blue header, alternating gray background, all borders",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "cellstyle", children: "CellStyle" }),
            "\n",
            (0, r.jsx)(n.p, { children: "You can specify detailed cell styles." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  // Font\n  fontFamily: "Arial",\n  fontSize: 11,\n  bold: true,\n  italic: true,\n  underline: true,\n  strike: true,\n\n  // Colors\n  color: "#FF0000",    // Text color\n  fill: "#FFFF00",     // Background color\n\n  // Alignment\n  align: "center",     // "left" | "center" | "right"\n\n  // Number format\n  format: "number",\n  decimalPlaces: 2,\n  thousandsSeparator: true,\n}\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "table-style", children: "Table Style" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Apply styles to the entire table header and body." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  style: {\n    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },\n    body: { fontSize: 11 },\n  },\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "column-style", children: "Column Style" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Apply styles to specific columns." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [\n    { key: "name", label: "Name" },\n    { key: "price", label: "Price", style: { bold: true } },\n    { key: "warning", label: "Warning", style: { color: "#FF0000" } },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "conditional-style", children: "Conditional Style" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Apply styles based on data values." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  conditionalStyle: (row, col) => {\n    if (col === "profit" && row.profit < 0) {\n      return { color: "#FF0000" };  // Red text\n    }\n    if (col === "price" && row.price >= 10000) {\n      return { bold: true };  // Bold\n    }\n    return {};\n  },\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "cell-level-style-_style", children: "Cell-Level Style (_style)" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Apply styles to specific cells only." }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [\n    { name: "Normal", price: 100 },\n    {\n      name: "Sale",\n      price: 50,\n      _style: {\n        price: { bold: true, fill: "#FFFF00" },\n      },\n    },\n  ],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "style-priority", children: "Style Priority" }),
            "\n",
            (0, r.jsx)(n.p, { children: "Styles are applied in this order (later ones take precedence):" }),
            "\n",
            (0, r.jsxs)(n.ol, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, { children: "Preset" }),
                    " - ",
                    (0, r.jsx)(n.code, { children: 'preset: "basic"' }),
                    " etc.",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, { children: "Table Style" }),
                    " - ",
                    (0, r.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, r.jsx)(n.code, { children: "style.body" }),
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, { children: "Column Style" }),
                    " - ",
                    (0, r.jsx)(n.code, { children: "columns[].style" }),
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, { children: "Conditional Style" }),
                    " - ",
                    (0, r.jsx)(n.code, { children: "conditionalStyle" }),
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.strong, { children: "Cell-Level Style" }),
                    " - ",
                    (0, r.jsx)(n.code, { children: "data[]._style" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "number-format", children: "Number Format" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [\n    {\n      key: "price",\n      label: "Price",\n      style: {\n        format: "number",\n        thousandsSeparator: true,  // 1,234,567\n      },\n    },\n    {\n      key: "rate",\n      label: "Rate",\n      style: {\n        format: "number",\n        decimalPlaces: 2,  // 12.34\n      },\n    },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "borders", children: "Borders" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  border: {\n    outline: "medium",      // Outer border\n    headerBody: "medium",   // Header-body boundary\n    headerInner: "thin",    // Header internal\n    bodyInner: "thin",      // Body internal\n    borderColor: "#000080", // Border color\n  },\n})\n',
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
                    " - All style properties",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/examples/borders", children: "Borders Examples" }),
                    " - Border usage examples",
                  ],
                }),
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, {
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
      function u(e = {}) {
        const { wrapper: n } = { ...(0, t.R)(), ...e.components };
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(c, { ...e }) }) : c(e);
      }
    },
    6610(e, n, l) {
      l.d(n, { R: () => i, x: () => d });
      var s = l(7140);
      const r = {},
        t = s.createContext(r);
      function i(e) {
        const n = s.useContext(t);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : i(e.components)),
          s.createElement(t.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
