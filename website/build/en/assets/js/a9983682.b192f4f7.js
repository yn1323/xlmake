(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [107],
  {
    1342(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => o,
          metadata: () => l,
          toc: () => a,
        });
      const l = JSON.parse(
        '{"id":"examples/conditional-styling","title":"Conditional Styling","description":"Examples of applying styles to cells based on conditions.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/conditional-styling.md","sourceDirName":"examples","slug":"/examples/conditional-styling","permalink":"/xlkit/en/docs/examples/conditional-styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/conditional-styling.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Borders","permalink":"/xlkit/en/docs/examples/borders"},"next":{"title":"Presets Reference","permalink":"/xlkit/en/docs/reference/presets"}}',
      );
      var i = t(5656),
        s = t(6610);
      const o = { sidebar_position: 6 },
        r = "Conditional Styling",
        c = {},
        a = [
          { value: "conditionalStyle", id: "conditionalstyle", level: 2 },
          { value: "Cell-Level Style (_style)", id: "cell-level-style-_style", level: 2 },
          { value: "Combined Example", id: "combined-example", level: 2 },
          { value: "Style Priority", id: "style-priority", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function d(e) {
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
          ul: "ul",
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.header, {
              children: (0, i.jsx)(n.h1, { id: "conditional-styling", children: "Conditional Styling" }),
            }),
            "\n",
            (0, i.jsx)(n.p, { children: "Examples of applying styles to cells based on conditions." }),
            "\n",
            (0, i.jsx)(n.h2, { id: "conditionalstyle", children: "conditionalStyle" }),
            "\n",
            (0, i.jsxs)(n.p, {
              children: [
                (0, i.jsx)(n.code, { children: "conditionalStyle" }),
                " is called for each cell and returns styles based on conditions.",
              ],
            }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "profit", label: "Profit" },\n    ],\n    data: [\n      { name: "Apple", price: 100, profit: 20 },\n      { name: "Orange", price: 80, profit: -5 },\n      { name: "Banana", price: 120, profit: 15 },\n    ],\n    conditionalStyle: (row, col) => {\n      // Red text for negative profit\n      if (col === "profit" && row.profit < 0) {\n        return { color: "#FF0000" };\n      }\n      // Bold for price >= 100\n      if (col === "price" && row.price >= 100) {\n        return { bold: true };\n      }\n      return {};\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "cell-level-style-_style", children: "Cell-Level Style (_style)" }),
            "\n",
            (0, i.jsxs)(n.p, {
              children: [
                "Add ",
                (0, i.jsx)(n.code, { children: "_style" }),
                " property to data to apply styles to specific cells only.",
              ],
            }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Products")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Name" },\n      { key: "price", label: "Price" },\n      { key: "status", label: "Status" },\n    ],\n    data: [\n      { name: "Regular Item", price: 100, status: "In Stock" },\n      {\n        name: "Sale Item",\n        price: 50,\n        status: "On Sale",\n        _style: {\n          price: { bold: true, fill: "#FFFF00" },  // Highlight price\n          status: { color: "#FF0000" },            // Red status\n        },\n      },\n      {\n        name: "Out of Stock",\n        price: 200,\n        status: "Unavailable",\n        _style: {\n          status: { color: "#999999", italic: true },\n        },\n      },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "combined-example", children: "Combined Example" }),
            "\n",
            (0, i.jsxs)(n.p, {
              children: [
                "You can combine ",
                (0, i.jsx)(n.code, { children: "conditionalStyle" }),
                " and ",
                (0, i.jsx)(n.code, { children: "_style" }),
                ".",
              ],
            }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Inventory")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "stock", label: "Stock" },\n      { key: "status", label: "Status" },\n    ],\n    data: [\n      { name: "Apple", stock: 100, status: "Sufficient" },\n      { name: "Orange", stock: 5, status: "Low" },\n      {\n        name: "Banana",\n        stock: 0,\n        status: "Out of Stock",\n        _style: {\n          status: { bold: true },  // Bold this cell only\n        },\n      },\n    ],\n    conditionalStyle: (row, col) => {\n      // Yellow background for stock < 10\n      if (col === "stock" && row.stock < 10) {\n        return { fill: "#FFFF00" };\n      }\n      // Red background for stock = 0\n      if (col === "stock" && row.stock === 0) {\n        return { fill: "#FF0000", color: "#FFFFFF" };\n      }\n      return {};\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "style-priority", children: "Style Priority" }),
            "\n",
            (0, i.jsx)(n.p, { children: "Styles are applied in this order (later ones take precedence):" }),
            "\n",
            (0, i.jsxs)(n.ol, {
              children: [
                "\n",
                (0, i.jsx)(n.li, { children: "Preset" }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: [
                    "Table Style (",
                    (0, i.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, i.jsx)(n.code, { children: "style.body" }),
                    ")",
                  ],
                }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: ["Column Style (", (0, i.jsx)(n.code, { children: "columns[].style" }), ")"],
                }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: ["Conditional Style (", (0, i.jsx)(n.code, { children: "conditionalStyle" }), ")"],
                }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: ["Cell-Level Style (", (0, i.jsx)(n.code, { children: "data[]._style" }), ")"],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, i.jsxs)(n.ul, {
              children: [
                "\n",
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - Style details",
                  ],
                }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/table", children: ".table() API" }),
                    " - conditionalStyle details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => o, x: () => r });
      var l = t(7140);
      const i = {},
        s = l.createContext(i);
      function o(e) {
        const n = l.useContext(s);
        return l.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : o(e.components)),
          l.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
