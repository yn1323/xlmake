(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [14],
  {
    5202(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => s,
          default: () => p,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => d,
        });
      const l = JSON.parse(
        '{"id":"examples/multi-header","title":"\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc","description":"\u968e\u5c64\u7684\u306a\u30d8\u30c3\u30c0\u30fc\uff08\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\uff09\u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002","source":"@site/docs/examples/multi-header.md","sourceDirName":"examples","slug":"/examples/multi-header","permalink":"/xlkit/docs/examples/multi-header","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/multi-header.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528","permalink":"/xlkit/docs/examples/presets"},"next":{"title":"\u30bb\u30eb\u30de\u30fc\u30b8","permalink":"/xlkit/docs/examples/cell-merge"}}',
      );
      var a = t(5656),
        i = t(6610);
      const r = { sidebar_position: 3 },
        s = "\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc",
        c = {},
        d = [
          { value: "2\u968e\u5c64\u30d8\u30c3\u30c0\u30fc", id: "2\u968e\u5c64\u30d8\u30c3\u30c0\u30fc", level: 2 },
          { value: "3\u968e\u5c64\u30d8\u30c3\u30c0\u30fc", id: "3\u968e\u5c64\u30d8\u30c3\u30c0\u30fc", level: 2 },
          {
            value: "\u8907\u5408\u7684\u306a\u30d8\u30c3\u30c0\u30fc",
            id: "\u8907\u5408\u7684\u306a\u30d8\u30c3\u30c0\u30fc",
            level: 2,
          },
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
          ul: "ul",
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(n.header, {
              children: (0, a.jsx)(n.h1, {
                id: "\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc",
                children: "\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc",
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "\u968e\u5c64\u7684\u306a\u30d8\u30c3\u30c0\u30fc\uff08\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\uff09\u3092\u4f5c\u6210\u3059\u308b\u4f8b\u3067\u3059\u3002",
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "2\u968e\u5c64\u30d8\u30c3\u30c0\u30fc",
              children: "2\u968e\u5c64\u30d8\u30c3\u30c0\u30fc",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      {\n        label: "\u5546\u54c1\u60c5\u5831",\n        children: [\n          { key: "category", label: "\u30ab\u30c6\u30b4\u30ea" },\n          { key: "name", label: "\u5546\u54c1\u540d" },\n        ],\n      },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: [\n      { category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, { children: "\u7d50\u679c:" }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                children:
                  "| \u5546\u54c1\u60c5\u5831           | \u4fa1\u683c | \u6570\u91cf |\n| \u30ab\u30c6\u30b4\u30ea | \u5546\u54c1\u540d |      |      |\n| \u98df\u54c1     | \u308a\u3093\u3054 | 100  | 50   |\n| \u98df\u54c1     | \u307f\u304b\u3093 | 80   | 100  |\n",
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "3\u968e\u5c64\u30d8\u30c3\u30c0\u30fc",
              children: "3\u968e\u5c64\u30d8\u30c3\u30c0\u30fc",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children: "\u3055\u3089\u306b\u6df1\u3044\u968e\u5c64\u3082\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u8a73\u7d30")\n  .table({\n    preset: "basic",\n    columns: [\n      {\n        label: "\u5546\u54c1",\n        children: [\n          {\n            label: "\u8a73\u7d30",\n            children: [\n              { key: "category", label: "\u30ab\u30c6\u30b4\u30ea" },\n              { key: "name", label: "\u5546\u54c1\u540d" },\n            ],\n          },\n        ],\n      },\n      {\n        label: "\u6570\u5024",\n        children: [\n          { key: "price", label: "\u4fa1\u683c" },\n          { key: "quantity", label: "\u6570\u91cf" },\n        ],\n      },\n    ],\n    data: [\n      { category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, a.jsx)(n.p, { children: "\u7d50\u679c:" }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                children:
                  "| \u5546\u54c1               | \u6570\u5024        |\n| \u8a73\u7d30               | \u4fa1\u683c | \u6570\u91cf |\n| \u30ab\u30c6\u30b4\u30ea | \u5546\u54c1\u540d |      |      |\n| \u98df\u54c1     | \u308a\u3093\u3054 | 100  | 50   |\n",
              }),
            }),
            "\n",
            (0, a.jsx)(n.h2, {
              id: "\u8907\u5408\u7684\u306a\u30d8\u30c3\u30c0\u30fc",
              children: "\u8907\u5408\u7684\u306a\u30d8\u30c3\u30c0\u30fc",
            }),
            "\n",
            (0, a.jsx)(n.p, {
              children:
                "\u4e00\u90e8\u3060\u3051\u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\u306b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, a.jsx)(n.pre, {
              children: (0, a.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "id", label: "ID" },  // \u901a\u5e38\u306e\u30d8\u30c3\u30c0\u30fc\n      {\n        label: "\u5546\u54c1\u60c5\u5831",  // \u30de\u30eb\u30c1\u30d8\u30c3\u30c0\u30fc\n        children: [\n          { key: "category", label: "\u30ab\u30c6\u30b4\u30ea" },\n          { key: "name", label: "\u5546\u54c1\u540d" },\n        ],\n      },\n      { key: "price", label: "\u4fa1\u683c" },  // \u901a\u5e38\u306e\u30d8\u30c3\u30c0\u30fc\n    ],\n    data: [\n      { id: 1, category: "\u98df\u54c1", name: "\u308a\u3093\u3054", price: 100 },\n      { id: 2, category: "\u98df\u54c1", name: "\u307f\u304b\u3093", price: 80 },\n    ],\n  })\n  .getNode();\n',
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
                    " - \u30ab\u30e9\u30e0\u5b9a\u7fa9\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n ? (0, a.jsx)(n, { ...e, children: (0, a.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => r, x: () => s });
      var l = t(7140);
      const a = {},
        i = l.createContext(a);
      function r(e) {
        const n = l.useContext(i);
        return l.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function s(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(a)
              : e.components || a
            : r(e.components)),
          l.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
