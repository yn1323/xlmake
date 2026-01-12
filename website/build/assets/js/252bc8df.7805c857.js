(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [783],
  {
    6610(e, n, r) {
      r.d(n, { R: () => c, x: () => i });
      var t = r(7140);
      const a = {},
        l = t.createContext(a);
      function c(e) {
        const n = t.useContext(l);
        return t.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function i(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : c(e.components)),
          t.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
    7814(e, n, r) {
      r.r(n),
        r.d(n, {
          assets: () => s,
          contentTitle: () => i,
          default: () => p,
          frontMatter: () => c,
          metadata: () => t,
          toc: () => o,
        });
      const t = JSON.parse(
        '{"id":"examples/cell-merge","title":"\u30bb\u30eb\u30de\u30fc\u30b8","description":"\u540c\u3058\u5024\u306e\u30bb\u30eb\u3092\u7e26\u65b9\u5411\u306b\u30de\u30fc\u30b8\u3059\u308b\u4f8b\u3067\u3059\u3002","source":"@site/docs/examples/cell-merge.md","sourceDirName":"examples","slug":"/examples/cell-merge","permalink":"/xlkit/docs/examples/cell-merge","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/cell-merge.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc","permalink":"/xlkit/docs/examples/multi-header"},"next":{"title":"\u7f6b\u7dda","permalink":"/xlkit/docs/examples/borders"}}',
      );
      var a = r(5656),
        l = r(6610);
      const c = { sidebar_position: 4 },
        i = "\u30bb\u30eb\u30de\u30fc\u30b8",
        s = {},
        o = [
          {
            value: "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u3067\u30de\u30fc\u30b8",
            id: "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u3067\u30de\u30fc\u30b8",
            level: 2,
          },
          {
            value: "\u5217\u5358\u4f4d\u3067\u30de\u30fc\u30b8",
            id: "\u5217\u5358\u4f4d\u3067\u30de\u30fc\u30b8",
            level: 2,
          },
          {
            value: "\u8907\u6570\u5217\u3067\u30de\u30fc\u30b8",
            id: "\u8907\u6570\u5217\u3067\u30de\u30fc\u30b8",
            level: 2,
          },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function d(e) {
        const n = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(n.header, {
              children: (0, a.jsx)(n.h1, {
                id: "\u30bb\u30eb\u30de\u30fc\u30b8",
                children: "\u30bb\u30eb\u30de\u30fc\u30b8",
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "\u540c\u3058\u5024\u306e\u30bb\u30eb\u3092\u7e26\u65b9\u5411\u306b\u30de\u30fc\u30b8\u3059\u308b\u4f8b\u3067\u3059\u3002",
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u3067\u30de\u30fc\u30b8",
              children: "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u3067\u30de\u30fc\u30b8",
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                (0, a.jsx)(n.code, { children: "mergeSameValues: true" }),
                "\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u5168\u3066\u306e\u5217\u3067\u540c\u3058\u5024\u306e\u30bb\u30eb\u304c\u30de\u30fc\u30b8\u3055\u308c\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    mergeSameValues: true,\n    columns: [\n      { key: "category", label: "\u30ab\u30c6\u30b4\u30ea" },\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100 },\n      { category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80 },\n      { category: "\u5bb6\u96fb", name: "\u30c6\u30ec\u30d3", price: 50000 },\n      { category: "\u5bb6\u96fb", name: "\u51b7\u8535\u5eab", price: 80000 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, { children: "\u7d50\u679c:" }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                children:
                  "| \u30ab\u30c6\u30b4\u30ea | \u5546\u54c1\u540d | \u4fa1\u683c  |\n| \u98df\u54c1     | \u308a\u3093\u3054 | 100   |\n|   \u2191     | \u307f\u304b\u3093 | 80    |  \u2190 \u300c\u98df\u54c1\u300d\u304c\u30de\u30fc\u30b8\n| \u5bb6\u96fb     | \u30c6\u30ec\u30d3 | 50000 |\n|   \u2191     | \u51b7\u8535\u5eab | 80000 |  \u2190 \u300c\u5bb6\u96fb\u300d\u304c\u30de\u30fc\u30b8\n",
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "\u5217\u5358\u4f4d\u3067\u30de\u30fc\u30b8",
              children: "\u5217\u5358\u4f4d\u3067\u30de\u30fc\u30b8",
            }),
            "\n",
            (0, a.jsxs)(n.p, {
              children: [
                "\u7279\u5b9a\u306e\u5217\u3060\u3051\u30de\u30fc\u30b8\u3057\u305f\u3044\u5834\u5408\u306f\u3001\u30ab\u30e9\u30e0\u5b9a\u7fa9\u3067",
                (0, a.jsx)(n.code, { children: "mergeSameValues" }),
                "\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "category", label: "\u30ab\u30c6\u30b4\u30ea", mergeSameValues: true },  // \u3053\u306e\u5217\u306e\u307f\u30de\u30fc\u30b8\n      { key: "name", label: "\u5546\u54c1\u540d" },  // \u30de\u30fc\u30b8\u3057\u306a\u3044\n      { key: "price", label: "\u4fa1\u683c" },   // \u30de\u30fc\u30b8\u3057\u306a\u3044\n    ],\n    data: [\n      { category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100 },\n      { category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80 },\n      { category: "\u5bb6\u96fb", name: "\u30c6\u30ec\u30d3", price: 50000 },\n      { category: "\u5bb6\u96fb", name: "\u51b7\u8535\u5eab", price: 80000 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "\u8907\u6570\u5217\u3067\u30de\u30fc\u30b8",
              children: "\u8907\u6570\u5217\u3067\u30de\u30fc\u30b8",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "\u8907\u6570\u306e\u5217\u3067\u305d\u308c\u305e\u308c\u30de\u30fc\u30b8\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "region", label: "\u5730\u57df", mergeSameValues: true },\n      { key: "category", label: "\u30ab\u30c6\u30b4\u30ea", mergeSameValues: true },\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { region: "\u6771\u4eac", category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100 },\n      { region: "\u6771\u4eac", category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80 },\n      { region: "\u6771\u4eac", category: "\u5bb6\u96fb", name: "\u30c6\u30ec\u30d3", price: 50000 },\n      { region: "\u5927\u962a", category: "\u98df\u54c1", name: "\u30d0\u30ca\u30ca", price: 120 },\n      { region: "\u5927\u962a", category: "\u98df\u54c1", name: "\u3076\u3069\u3046", price: 300 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, a.jsxs)(n.ul, {
              children: [
                "\n",
                (0, a.jsxs)(n.li, {
                  children: [
                    (0, a.jsx)(n.a, { href: "/xlkit/docs/api-reference/table", children: ".table() API" }),
                    " - mergeSameValues\u306e\u8a73\u7d30",
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
        return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(d, { ...e }) }) : d(e);
      }
    },
  },
]);
