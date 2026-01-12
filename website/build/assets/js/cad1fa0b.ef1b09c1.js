(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [175],
  {
    6610(e, n, t) {
      t.d(n, { R: () => s, x: () => r });
      var i = t(7140);
      const l = {},
        a = i.createContext(l);
      function s(e) {
        const n = i.useContext(a);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : s(e.components)),
          i.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
    6930(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => o,
        });
      const i = JSON.parse(
        '{"id":"examples/basic-table","title":"\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb","description":"\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30fc\u30d6\u30eb\u306e\u4f5c\u6210\u4f8b\u3067\u3059\u3002","source":"@site/docs/examples/basic-table.md","sourceDirName":"examples","slug":"/examples/basic-table","permalink":"/xlkit/docs/examples/basic-table","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/basic-table.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"\u8aad\u307f\u53d6\u308aAPI","permalink":"/xlkit/docs/api-reference/reading"},"next":{"title":"\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528","permalink":"/xlkit/docs/examples/presets"}}',
      );
      var l = t(5656),
        a = t(6610);
      const s = { sidebar_position: 1 },
        r = "\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb",
        c = {},
        o = [
          { value: "\u57fa\u672c\u4f8b", id: "\u57fa\u672c\u4f8b", level: 2 },
          {
            value: "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u7528",
            id: "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u7528",
            level: 2,
          },
          {
            value: "\u30ab\u30e9\u30e0\u5225\u30b9\u30bf\u30a4\u30eb",
            id: "\u30ab\u30e9\u30e0\u5225\u30b9\u30bf\u30a4\u30eb",
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
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.header, {
              children: (0, l.jsx)(n.h1, {
                id: "\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb",
                children: "\u57fa\u672c\u7684\u306a\u30c6\u30fc\u30d6\u30eb",
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u6700\u3082\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30fc\u30d6\u30eb\u306e\u4f5c\u6210\u4f8b\u3067\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "\u57fa\u672c\u4f8b", children: "\u57fa\u672c\u4f8b" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100 },\n      { name: "\u307f\u304b\u3093", price: 80 },\n    ],\n  })\n  .getNode();\n\nawait output.saveToFile("basic.xlsx");\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u7528",
              children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u7528",
            }),
            "\n",
            (0, l.jsxs)(n.p, {
              children: [
                (0, l.jsx)(n.code, { children: "preset" }),
                "\u3092\u6307\u5b9a\u3059\u308b\u3068\u3001\u30b9\u30bf\u30a4\u30eb\u304c\u81ea\u52d5\u7684\u306b\u9069\u7528\u3055\u308c\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    preset: "basic",  // \u9752\u30d8\u30c3\u30c0\u30fc + \u5168\u7f6b\u7dda\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n      { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n      { name: "\u30d0\u30ca\u30ca", price: 120, quantity: 30 },\n    ],\n  })\n  .getNode();\n\nawait output.saveToFile("basic-preset.xlsx");\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u30ab\u30e9\u30e0\u5225\u30b9\u30bf\u30a4\u30eb",
              children: "\u30ab\u30e9\u30e0\u5225\u30b9\u30bf\u30a4\u30eb",
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u7279\u5b9a\u306e\u5217\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    columns: [\n      { key: "name", label: "\u540d\u524d" },\n      { key: "important", label: "\u91cd\u8981", style: { bold: true } },\n      { key: "warning", label: "\u8b66\u544a", style: { color: "#FF0000" } },\n      { key: "highlight", label: "\u30cf\u30a4\u30e9\u30a4\u30c8", style: { fill: "#FFFF00" } },\n    ],\n    data: [\n      { name: "\u9805\u76ee1", important: "Yes", warning: "\u6ce8\u610f", highlight: "\u2605" },\n      { name: "\u9805\u76ee2", important: "No", warning: "-", highlight: "-" },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, l.jsxs)(n.ul, {
              children: [
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, {
                      href: "/xlkit/docs/examples/presets",
                      children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u4f7f\u7528",
                    }),
                    " - \u30d7\u30ea\u30bb\u30c3\u30c8\u306e\u8a73\u7d30\u306a\u4f7f\u3044\u65b9",
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, { href: "/xlkit/docs/api-reference/table", children: ".table() API" }),
                    " - \u30c6\u30fc\u30d6\u30ebAPI\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function p(e = {}) {
        const { wrapper: n } = { ...(0, a.R)(), ...e.components };
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(d, { ...e }) }) : d(e);
      }
    },
  },
]);
