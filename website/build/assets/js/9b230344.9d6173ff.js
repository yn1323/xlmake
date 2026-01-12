(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [712],
  {
    2879(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => h,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => a,
        });
      const i = JSON.parse(
        '{"id":"examples/borders","title":"\u7f6b\u7dda","description":"\u30c6\u30fc\u30d6\u30eb\u306b\u7f6b\u7dda\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u3067\u3059\u3002","source":"@site/docs/examples/borders.md","sourceDirName":"examples","slug":"/examples/borders","permalink":"/xlkit/docs/examples/borders","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/borders.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":"\u30bb\u30eb\u30de\u30fc\u30b8","permalink":"/xlkit/docs/examples/cell-merge"},"next":{"title":"\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb","permalink":"/xlkit/docs/examples/conditional-styling"}}',
      );
      var r = t(5656),
        l = t(6610);
      const d = { sidebar_position: 5 },
        s = "\u7f6b\u7dda",
        c = {},
        a = [
          { value: "\u5916\u67a0\u306e\u307f", id: "\u5916\u67a0\u306e\u307f", level: 2 },
          {
            value: "\u30d8\u30c3\u30c0\u30fc\u4e0b\u7dda\u306e\u307f",
            id: "\u30d8\u30c3\u30c0\u30fc\u4e0b\u7dda\u306e\u307f",
            level: 2,
          },
          { value: "\u5168\u7f6b\u7dda", id: "\u5168\u7f6b\u7dda", level: 2 },
          {
            value: "\u30d5\u30eb\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            id: "\u30d5\u30eb\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            level: 2,
          },
          { value: "LineStyle\u306e\u7a2e\u985e", id: "linestyle\u306e\u7a2e\u985e", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "\u7f6b\u7dda", children: "\u7f6b\u7dda" }) }),
            "\n",
            (0, r.jsx)(n.p, {
              children:
                "\u30c6\u30fc\u30d6\u30eb\u306b\u7f6b\u7dda\u3092\u8ffd\u52a0\u3059\u308b\u4f8b\u3067\u3059\u3002",
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "\u5916\u67a0\u306e\u307f", children: "\u5916\u67a0\u306e\u307f" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100 },\n      { name: "\u307f\u304b\u3093", price: 80 },\n    ],\n    border: { outline: "medium" },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, {
              id: "\u30d8\u30c3\u30c0\u30fc\u4e0b\u7dda\u306e\u307f",
              children: "\u30d8\u30c3\u30c0\u30fc\u4e0b\u7dda\u306e\u307f",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100 },\n      { name: "\u307f\u304b\u3093", price: 80 },\n    ],\n    border: { headerBody: "thin" },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "\u5168\u7f6b\u7dda", children: "\u5168\u7f6b\u7dda" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100 },\n      { name: "\u307f\u304b\u3093", price: 80 },\n    ],\n    border: {\n      outline: "thin",\n      headerBody: "thin",\n      headerInner: "thin",\n      bodyInner: "thin",\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, {
              id: "\u30d5\u30eb\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
              children: "\u30d5\u30eb\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            }),
            "\n",
            (0, r.jsx)(n.p, {
              children:
                "\u7f6b\u7dda\u306e\u7a2e\u985e\u3068\u8272\u3092\u8a73\u7d30\u306b\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .table({\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n      { name: "\u30d0\u30ca\u30ca", price: 120, quantity: 30 },\n    ],\n    border: {\n      outline: "medium",      // \u5916\u67a0\u306f\u4e2d\u7dda\n      headerBody: "medium",   // \u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u306e\u5883\u754c\u306f\u4e2d\u7dda\n      headerInner: "thin",    // \u30d8\u30c3\u30c0\u30fc\u5185\u90e8\u306f\u7d30\u7dda\n      bodyInner: "thin",      // \u30dc\u30c7\u30a3\u5185\u90e8\u306f\u7d30\u7dda\n      borderColor: "#000080", // \u7d3a\u8272\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "linestyle\u306e\u7a2e\u985e", children: "LineStyle\u306e\u7a2e\u985e" }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: "\u5024" }),
                      (0, r.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"thin"' }) }),
                        (0, r.jsx)(n.td, { children: "\u7d30\u7dda" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"medium"' }) }),
                        (0, r.jsx)(n.td, { children: "\u4e2d\u7dda" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"thick"' }) }),
                        (0, r.jsx)(n.td, { children: "\u592a\u7dda" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"dotted"' }) }),
                        (0, r.jsx)(n.td, { children: "\u70b9\u7dda" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"dashed"' }) }),
                        (0, r.jsx)(n.td, { children: "\u7834\u7dda" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: '"double"' }) }),
                        (0, r.jsx)(n.td, { children: "\u4e8c\u91cd\u7dda" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, {
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - BorderStyle\u306e\u8a73\u7d30",
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
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => d, x: () => s });
      var i = t(7140);
      const r = {},
        l = i.createContext(r);
      function d(e) {
        const n = i.useContext(l);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          i.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
