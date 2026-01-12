(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [814],
  {
    6610(e, t, n) {
      n.d(t, { R: () => a, x: () => r });
      var i = n(7140);
      const s = {},
        l = i.createContext(s);
      function a(e) {
        const t = i.useContext(l);
        return i.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function r(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : a(e.components)),
          i.createElement(l.Provider, { value: t }, e.children)
        );
      }
    },
    9144(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => r,
          default: () => u,
          frontMatter: () => a,
          metadata: () => i,
          toc: () => o,
        });
      const i = JSON.parse(
        '{"id":"quick-start","title":"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8","description":"xlkit\u3092\u4f7f\u3063\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u306aExcel\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002","source":"@site/docs/quick-start.md","sourceDirName":".","slug":"/quick-start","permalink":"/xlkit/docs/quick-start","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/quick-start.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/xlkit/docs/installation"},"next":{"title":"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9","permalink":"/xlkit/docs/guides/basic-usage"}}',
      );
      var s = n(5656),
        l = n(6610);
      const a = { sidebar_position: 3 },
        r = "\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
        c = {},
        o = [
          {
            value: "Node.js\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            id: "nodejs\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            level: 2,
          },
          {
            value: "\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            id: "\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            level: 2,
          },
          {
            value: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            level: 2,
          },
          {
            value: "1. xlkit()\u3067\u30d3\u30eb\u30c0\u30fc\u3092\u4f5c\u6210",
            id: "1-xlkit\u3067\u30d3\u30eb\u30c0\u30fc\u3092\u4f5c\u6210",
            level: 3,
          },
          {
            value: "2. sheet()\u3067\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0",
            id: "2-sheet\u3067\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0",
            level: 3,
          },
          {
            value: "3. table()\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0",
            id: "3-table\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0",
            level: 3,
          },
          {
            value: "4. getNode() / getBrowser()\u3067\u51fa\u529b",
            id: "4-getnode--getbrowser\u3067\u51fa\u529b",
            level: 3,
          },
          { value: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", level: 2 },
        ];
      function d(e) {
        const t = {
          a: "a",
          code: "code",
          h1: "h1",
          h2: "h2",
          h3: "h3",
          header: "header",
          li: "li",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.header, {
              children: (0, s.jsx)(t.h1, {
                id: "\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
                children: "\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
              }),
            }),
            "\n",
            (0, s.jsx)(t.p, {
              children:
                "xlkit\u3092\u4f7f\u3063\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u306aExcel\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3057\u3066\u307f\u307e\u3057\u3087\u3046\u3002",
            }),
            "\n",
            (0, s.jsx)(t.h2, {
              id: "nodejs\u74b0\u5883\u3067\u306e\u4f7f\u7528",
              children: "Node.js\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n  { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n  { name: "\u30d0\u30ca\u30ca", price: 120, quantity: 30 },\n];\n\nconst output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: salesData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h2, {
              id: "\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u3067\u306e\u4f7f\u7528",
              children: "\u30d6\u30e9\u30a6\u30b6\u74b0\u5883\u3067\u306e\u4f7f\u7528",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("\u30c7\u30fc\u30bf")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u540d\u524d" },\n      { key: "value", label: "\u5024" },\n    ],\n    data: [\n      { name: "\u9805\u76eeA", value: 100 },\n      { name: "\u9805\u76eeB", value: 200 },\n    ],\n  })\n  .getBrowser();\n\nawait output.download("data.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h2, {
              id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
              children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            }),
            "\n",
            (0, s.jsx)(t.h3, {
              id: "1-xlkit\u3067\u30d3\u30eb\u30c0\u30fc\u3092\u4f5c\u6210",
              children: "1. xlkit()\u3067\u30d3\u30eb\u30c0\u30fc\u3092\u4f5c\u6210",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children: "const builder = xlkit();\n",
              }),
            }),
            "\n",
            (0, s.jsx)(t.h3, {
              id: "2-sheet\u3067\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0",
              children: "2. sheet()\u3067\u30b7\u30fc\u30c8\u3092\u8ffd\u52a0",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children: 'builder.sheet("\u30b7\u30fc\u30c8\u540d");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h3, {
              id: "3-table\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0",
              children: "3. table()\u3067\u30c6\u30fc\u30d6\u30eb\u3092\u8ffd\u52a0",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children: 'builder.table({\n  preset: "basic",\n  columns: [...],\n  data: [...],\n});\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h3, {
              id: "4-getnode--getbrowser\u3067\u51fa\u529b",
              children: "4. getNode() / getBrowser()\u3067\u51fa\u529b",
            }),
            "\n",
            (0, s.jsx)(t.pre, {
              children: (0, s.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '// Node.js\nconst output = await builder.getNode();\nawait output.saveToFile("report.xlsx");\n\n// \u30d6\u30e9\u30a6\u30b6\nconst output = await builder.getBrowser();\nawait output.download("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, s.jsx)(t.h2, {
              id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
              children: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
            }),
            "\n",
            (0, s.jsxs)(t.ul, {
              children: [
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: "/xlkit/docs/guides/basic-usage",
                      children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
                    }),
                    "\u3067\u8a73\u3057\u3044\u4f7f\u3044\u65b9\u3092\u5b66\u3076",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: "/xlkit/docs/api-reference/overview",
                      children: "API\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9",
                    }),
                    "\u3067\u5229\u7528\u53ef\u80fd\u306a\u6a5f\u80fd\u3092\u78ba\u8a8d\u3059\u308b",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, { href: "/xlkit/docs/examples/basic-table", children: "Examples" }),
                    "\u3067\u30b5\u30f3\u30d7\u30eb\u30b3\u30fc\u30c9\u3092\u898b\u308b",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: t } = { ...(0, l.R)(), ...e.components };
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
      }
    },
  },
]);
