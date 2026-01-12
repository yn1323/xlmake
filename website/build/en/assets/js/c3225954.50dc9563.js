(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [792],
  {
    6610(e, n, s) {
      s.d(n, { R: () => i, x: () => d });
      var r = s(7140);
      const t = {},
        l = r.createContext(t);
      function i(e) {
        const n = r.useContext(l);
        return r.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function d(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : i(e.components)),
          r.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
    9350(e, n, s) {
      s.r(n),
        s.d(n, {
          assets: () => a,
          contentTitle: () => d,
          default: () => h,
          frontMatter: () => i,
          metadata: () => r,
          toc: () => c,
        });
      const r = JSON.parse(
        '{"id":"reference/presets","title":"Presets Reference","description":"Table style presets provided by xlkit.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/reference/presets.md","sourceDirName":"reference","slug":"/reference/presets","permalink":"/xlkit/en/docs/reference/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/reference/presets.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Conditional Styling","permalink":"/xlkit/en/docs/examples/conditional-styling"},"next":{"title":"Unsupported Features","permalink":"/xlkit/en/docs/reference/limitations"}}',
      );
      var t = s(5656),
        l = s(6610);
      const i = { sidebar_position: 1 },
        d = "Presets Reference",
        a = {},
        c = [
          { value: "Preset Comparison", id: "preset-comparison", level: 2 },
          { value: "basic", id: "basic", level: 2 },
          { value: "Features", id: "features", level: 3 },
          { value: "Usage", id: "usage", level: 3 },
          { value: "minimal", id: "minimal", level: 2 },
          { value: "Features", id: "features-1", level: 3 },
          { value: "Usage", id: "usage-1", level: 3 },
          { value: "striped", id: "striped", level: 2 },
          { value: "Features", id: "features-2", level: 3 },
          { value: "Usage", id: "usage-2", level: 3 },
          { value: "Customization", id: "customization", level: 2 },
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
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, {
              children: (0, t.jsx)(n.h1, { id: "presets-reference", children: "Presets Reference" }),
            }),
            "\n",
            (0, t.jsx)(n.p, { children: "Table style presets provided by xlkit." }),
            "\n",
            (0, t.jsx)(n.h2, { id: "preset-comparison", children: "Preset Comparison" }),
            "\n",
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, { children: "Preset" }),
                      (0, t.jsx)(n.th, { children: "Header" }),
                      (0, t.jsx)(n.th, { children: "Body" }),
                      (0, t.jsx)(n.th, { children: "Borders" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "basic" }) }),
                        (0, t.jsx)(n.td, { children: "Blue (#4472C4), white text, bold" }),
                        (0, t.jsx)(n.td, { children: "-" }),
                        (0, t.jsx)(n.td, { children: "All borders (thin)" }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "minimal" }) }),
                        (0, t.jsx)(n.td, { children: "Bold only" }),
                        (0, t.jsx)(n.td, { children: "-" }),
                        (0, t.jsx)(n.td, { children: "None" }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "striped" }) }),
                        (0, t.jsx)(n.td, { children: "Blue (#4472C4), white text, bold" }),
                        (0, t.jsx)(n.td, { children: "Alternating gray (#F2F2F2)" }),
                        (0, t.jsx)(n.td, { children: "All borders (thin)" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "basic", children: "basic" }),
            "\n",
            (0, t.jsx)(n.p, { children: "Standard business-style preset." }),
            "\n",
            (0, t.jsx)(n.h3, { id: "features", children: "Features" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsx)(n.li, { children: "Header: Blue background (#4472C4), white text, bold" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Body: Default" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Borders: All borders (thin)" }),
                "\n",
              ],
            }),
            "\n",
            (0, t.jsx)(n.h3, { id: "usage", children: "Usage" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children: '.table({\n  preset: "basic",\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "minimal", children: "minimal" }),
            "\n",
            (0, t.jsx)(n.p, { children: "Simple, lightweight style." }),
            "\n",
            (0, t.jsx)(n.h3, { id: "features-1", children: "Features" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsx)(n.li, { children: "Header: Bold only" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Body: Default" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Borders: None" }),
                "\n",
              ],
            }),
            "\n",
            (0, t.jsx)(n.h3, { id: "usage-1", children: "Usage" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children: '.table({\n  preset: "minimal",\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "striped", children: "striped" }),
            "\n",
            (0, t.jsx)(n.p, { children: "Easy-to-read style with alternating row colors." }),
            "\n",
            (0, t.jsx)(n.h3, { id: "features-2", children: "Features" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsx)(n.li, { children: "Header: Blue background (#4472C4), white text, bold" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Body: Alternating gray background (#F2F2F2)" }),
                "\n",
                (0, t.jsx)(n.li, { children: "Borders: All borders (thin)" }),
                "\n",
              ],
            }),
            "\n",
            (0, t.jsx)(n.h3, { id: "usage-2", children: "Usage" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children: '.table({\n  preset: "striped",\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "customization", children: "Customization" }),
            "\n",
            (0, t.jsx)(n.p, {
              children: "You can apply additional styles on top of presets. Later styles take precedence.",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  preset: "basic",\n  style: {\n    header: { fontSize: 14 },  // Change header font size\n  },\n  columns: [\n    { key: "price", label: "Price", style: { bold: true } },  // Bold this column\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/en/docs/examples/presets", children: "Preset Examples" }),
                    " - Preset usage examples",
                  ],
                }),
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - Style priority",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(o, { ...e }) }) : o(e);
      }
    },
  },
]);
