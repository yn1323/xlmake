(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [249],
  {
    6610(e, n, t) {
      t.d(n, { R: () => r, x: () => a });
      var i = t(7140);
      const s = {},
        l = i.createContext(s);
      function r(e) {
        const n = i.useContext(l);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
    8569(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => d,
          contentTitle: () => a,
          default: () => o,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => c,
        });
      const i = JSON.parse(
        '{"id":"examples/presets","title":"\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528","description":"\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u3046\u3068\u3001\u3088\u304f\u4f7f\u3046\u30b9\u30bf\u30a4\u30eb\u3092\u7c21\u5358\u306b\u9069\u7528\u3067\u304d\u307e\u3059\u3002","source":"@site/docs/examples/presets.md","sourceDirName":"examples","slug":"/examples/presets","permalink":"/xlkit/docs/examples/presets","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/presets.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb","permalink":"/xlkit/docs/examples/basic-table"},"next":{"title":"\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc","permalink":"/xlkit/docs/examples/multi-header"}}',
      );
      var s = t(5656),
        l = t(6610);
      const r = { sidebar_position: 2 },
        a = "\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528",
        d = {},
        c = [
          {
            value: "\u5229\u7528\u53ef\u80fd\u306a\u30d7\u30ea\u30bb\u30c3\u30c8",
            id: "\u5229\u7528\u53ef\u80fd\u306a\u30d7\u30ea\u30bb\u30c3\u30c8",
            level: 2,
          },
          { value: "basic", id: "basic", level: 2 },
          { value: "minimal", id: "minimal", level: 2 },
          { value: "striped", id: "striped", level: 2 },
          {
            value: "\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            id: "\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            level: 2,
          },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function h(e) {
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, {
                id: "\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528",
                children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528",
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u3046\u3068\u3001\u3088\u304f\u4f7f\u3046\u30b9\u30bf\u30a4\u30eb\u3092\u7c21\u5358\u306b\u9069\u7528\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u5229\u7528\u53ef\u80fd\u306a\u30d7\u30ea\u30bb\u30c3\u30c8",
              children: "\u5229\u7528\u53ef\u80fd\u306a\u30d7\u30ea\u30bb\u30c3\u30c8",
            }),
            "\n",
            (0, s.jsxs)(n.table, {
              children: [
                (0, s.jsx)(n.thead, {
                  children: (0, s.jsxs)(n.tr, {
                    children: [
                      (0, s.jsx)(n.th, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8" }),
                      (0, s.jsx)(n.th, { children: "\u30d8\u30c3\u30c0\u30fc" }),
                      (0, s.jsx)(n.th, { children: "\u30dc\u30c7\u30a3" }),
                      (0, s.jsx)(n.th, { children: "\u7f6b\u7dda" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(n.tbody, {
                  children: [
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "basic" }) }),
                        (0, s.jsx)(n.td, {
                          children: "\u9752\u80cc\u666f\uff08#4472C4\uff09\u30fb\u767d\u6587\u5b57\u30fb\u592a\u5b57",
                        }),
                        (0, s.jsx)(n.td, { children: "-" }),
                        (0, s.jsx)(n.td, { children: "\u5168\u7f6b\u7dda\uff08thin\uff09" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "minimal" }) }),
                        (0, s.jsx)(n.td, { children: "\u592a\u5b57\u306e\u307f" }),
                        (0, s.jsx)(n.td, { children: "-" }),
                        (0, s.jsx)(n.td, { children: "\u306a\u3057" }),
                      ],
                    }),
                    (0, s.jsxs)(n.tr, {
                      children: [
                        (0, s.jsx)(n.td, { children: (0, s.jsx)(n.code, { children: "striped" }) }),
                        (0, s.jsx)(n.td, {
                          children: "\u9752\u80cc\u666f\uff08#4472C4\uff09\u30fb\u767d\u6587\u5b57\u30fb\u592a\u5b57",
                        }),
                        (0, s.jsx)(n.td, {
                          children: "\u5947\u6570\u884c\u30b0\u30ec\u30fc\u80cc\u666f\uff08#F2F2F2\uff09",
                        }),
                        (0, s.jsx)(n.td, { children: "\u5168\u7f6b\u7dda\uff08thin\uff09" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "basic", children: "basic" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u6a19\u6e96\u7684\u306a\u30d3\u30b8\u30cd\u30b9\u5411\u3051\u30b9\u30bf\u30a4\u30eb\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "minimal", children: "minimal" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30b7\u30f3\u30d7\u30eb\u306a\u30b9\u30bf\u30a4\u30eb\u3067\u3059\u3002\u7f6b\u7dda\u304c\u306a\u304f\u3001\u30d8\u30c3\u30c0\u30fc\u304c\u592a\u5b57\u306e\u307f\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    preset: "minimal",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100 },\n      { name: "\u307f\u304b\u3093", price: 80 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "striped", children: "striped" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u884c\u3054\u3068\u306b\u80cc\u666f\u8272\u304c\u4ea4\u4e92\u306b\u5909\u308f\u308a\u3001\u898b\u3084\u3059\u3044\u30b9\u30bf\u30a4\u30eb\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u4e00\u89a7")\n  .table({\n    preset: "striped",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n      { name: "\u30d0\u30ca\u30ca", price: 120, quantity: 30 },\n      { name: "\u3076\u3069\u3046", price: 300, quantity: 20 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
              children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u30ab\u30b9\u30bf\u30de\u30a4\u30ba",
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u30d9\u30fc\u30b9\u306b\u3001\u8ffd\u52a0\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30ab\u30b9\u30bf\u30e0")\n  .table({\n    preset: "basic",\n    style: {\n      header: { fontSize: 14 },  // \u30d8\u30c3\u30c0\u30fc\u306e\u30d5\u30a9\u30f3\u30c8\u30b5\u30a4\u30ba\u3092\u5909\u66f4\n    },\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c", style: { bold: true } },  // \u3053\u306e\u5217\u3092\u592a\u5b57\n    ],\n    data: [...],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
                      href: "/xlkit/docs/reference/presets",
                      children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7",
                    }),
                    " - \u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u4ed5\u69d8",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - \u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function o(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
      }
    },
  },
]);
