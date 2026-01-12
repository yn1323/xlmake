(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [636],
  {
    6610(e, n, t) {
      t.d(n, { R: () => r, x: () => a });
      var s = t(7140);
      const i = {},
        l = s.createContext(i);
      function r(e) {
        const n = s.useContext(l);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          s.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
    8737(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => c,
        });
      const s = JSON.parse(
        '{"id":"examples/presets","title":"Using Presets","description":"Presets make it easy to apply common styles.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/examples/presets.md","sourceDirName":"examples","slug":"/examples/presets","permalink":"/xlkit/en/docs/examples/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/presets.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Basic Table","permalink":"/xlkit/en/docs/examples/basic-table"},"next":{"title":"Multi-Header","permalink":"/xlkit/en/docs/examples/multi-header"}}',
      );
      var i = t(5656),
        l = t(6610);
      const r = { sidebar_position: 2 },
        a = "Using Presets",
        d = {},
        c = [
          { value: "Available Presets", id: "available-presets", level: 2 },
          { value: "basic", id: "basic", level: 2 },
          { value: "minimal", id: "minimal", level: 2 },
          { value: "striped", id: "striped", level: 2 },
          { value: "Customizing Presets", id: "customizing-presets", level: 2 },
          { value: "Related", id: "related", level: 2 },
        ];
      function o(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
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
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(n.header, { children: (0, i.jsx)(n.h1, { id: "using-presets", children: "Using Presets" }) }),
            "\n",
            (0, i.jsx)(n.p, { children: "Presets make it easy to apply common styles." }),
            "\n",
            (0, i.jsx)(n.h2, { id: "available-presets", children: "Available Presets" }),
            "\n",
            (0, i.jsxs)(n.table, {
              children: [
                (0, i.jsx)(n.thead, {
                  children: (0, i.jsxs)(n.tr, {
                    children: [
                      (0, i.jsx)(n.th, { children: "Preset" }),
                      (0, i.jsx)(n.th, { children: "Header" }),
                      (0, i.jsx)(n.th, { children: "Body" }),
                      (0, i.jsx)(n.th, { children: "Borders" }),
                    ],
                  }),
                }),
                (0, i.jsxs)(n.tbody, {
                  children: [
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: "basic" }) }),
                        (0, i.jsx)(n.td, { children: "Blue (#4472C4), white text, bold" }),
                        (0, i.jsx)(n.td, { children: "-" }),
                        (0, i.jsx)(n.td, { children: "All borders (thin)" }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: "minimal" }) }),
                        (0, i.jsx)(n.td, { children: "Bold only" }),
                        (0, i.jsx)(n.td, { children: "-" }),
                        (0, i.jsx)(n.td, { children: "None" }),
                      ],
                    }),
                    (0, i.jsxs)(n.tr, {
                      children: [
                        (0, i.jsx)(n.td, { children: (0, i.jsx)(n.code, { children: "striped" }) }),
                        (0, i.jsx)(n.td, { children: "Blue (#4472C4), white text, bold" }),
                        (0, i.jsx)(n.td, { children: "Alternating gray (#F2F2F2)" }),
                        (0, i.jsx)(n.td, { children: "All borders (thin)" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "basic", children: "basic" }),
            "\n",
            (0, i.jsx)(n.p, { children: "Standard business-style preset." }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: [\n      { name: "Apple", price: 100, quantity: 50 },\n      { name: "Orange", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "minimal", children: "minimal" }),
            "\n",
            (0, i.jsx)(n.p, { children: "Simple, lightweight style. No borders, only bold header." }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Data")\n  .table({\n    preset: "minimal",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n    ],\n    data: [\n      { name: "Apple", price: 100 },\n      { name: "Orange", price: 80 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "striped", children: "striped" }),
            "\n",
            (0, i.jsx)(n.p, { children: "Easy-to-read style with alternating row colors." }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("List")\n  .table({\n    preset: "striped",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: [\n      { name: "Apple", price: 100, quantity: 50 },\n      { name: "Orange", price: 80, quantity: 100 },\n      { name: "Banana", price: 120, quantity: 30 },\n      { name: "Grape", price: 300, quantity: 20 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "customizing-presets", children: "Customizing Presets" }),
            "\n",
            (0, i.jsx)(n.p, { children: "You can apply additional styles on top of presets." }),
            "\n",
            (0, i.jsx)(n.pre, {
              children: (0, i.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Custom")\n  .table({\n    preset: "basic",\n    style: {\n      header: { fontSize: 14 },  // Change header font size\n    },\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price", style: { bold: true } },  // Bold this column\n    ],\n    data: [...],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, i.jsxs)(n.ul, {
              children: [
                "\n",
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: "/xlkit/en/docs/reference/presets", children: "Presets Reference" }),
                    " - Preset specifications",
                  ],
                }),
                "\n",
                (0, i.jsxs)(n.li, {
                  children: [
                    (0, i.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - Style priority",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, i.jsx)(n, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
      }
    },
  },
]);
