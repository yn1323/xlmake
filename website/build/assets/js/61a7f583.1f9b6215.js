(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [848],
  {
    3724(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => o,
          contentTitle: () => r,
          default: () => p,
          frontMatter: () => c,
          metadata: () => l,
          toc: () => a,
        });
      const l = JSON.parse(
        '{"id":"examples/conditional-styling","title":"\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb","description":"\u6761\u4ef6\u306b\u57fa\u3065\u3044\u3066\u30bb\u30eb\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3059\u308b\u4f8b\u3067\u3059\u3002","source":"@site/docs/examples/conditional-styling.md","sourceDirName":"examples","slug":"/examples/conditional-styling","permalink":"/xlkit/docs/examples/conditional-styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/examples/conditional-styling.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"\u7f6b\u7dda","permalink":"/xlkit/docs/examples/borders"},"next":{"title":"\u30d7\u30ea\u30bb\u30c3\u30c8\u4e00\u89a7","permalink":"/xlkit/docs/reference/presets"}}',
      );
      var s = t(5656),
        i = t(6610);
      const c = { sidebar_position: 6 },
        r = "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
        o = {},
        a = [
          { value: "conditionalStyle", id: "conditionalstyle", level: 2 },
          {
            value: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb\uff08_style\uff09",
            id: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb_style",
            level: 2,
          },
          { value: "\u8907\u5408\u4f8b", id: "\u8907\u5408\u4f8b", level: 2 },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            id: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
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
          ol: "ol",
          p: "p",
          pre: "pre",
          ul: "ul",
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, {
                id: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
                children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u6761\u4ef6\u306b\u57fa\u3065\u3044\u3066\u30bb\u30eb\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3059\u308b\u4f8b\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "conditionalstyle", children: "conditionalStyle" }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                (0, s.jsx)(n.code, { children: "conditionalStyle" }),
                "\u306f\u5404\u30bb\u30eb\u306b\u5bfe\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u3001\u6761\u4ef6\u306b\u5fdc\u3058\u305f\u30b9\u30bf\u30a4\u30eb\u3092\u8fd4\u3057\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "profit", label: "\u5229\u76ca\u7387" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", price: 100, profit: 20 },\n      { name: "\u307f\u304b\u3093", price: 80, profit: -5 },\n      { name: "\u30d0\u30ca\u30ca", price: 120, profit: 15 },\n    ],\n    conditionalStyle: (row, col) => {\n      // \u5229\u76ca\u7387\u304c\u8ca0\u306e\u5834\u5408\u306f\u8d64\u6587\u5b57\n      if (col === "profit" && row.profit < 0) {\n        return { color: "#FF0000" };\n      }\n      // \u4fa1\u683c\u304c100\u4ee5\u4e0a\u306e\u5834\u5408\u306f\u592a\u5b57\n      if (col === "price" && row.price >= 100) {\n        return { bold: true };\n      }\n      return {};\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb_style",
              children: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb\uff08_style\uff09",
            }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                "\u30c7\u30fc\u30bf\u306b",
                (0, s.jsx)(n.code, { children: "_style" }),
                "\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u8ffd\u52a0\u3059\u308b\u3068\u3001\u7279\u5b9a\u306e\u30bb\u30eb\u3060\u3051\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u5546\u54c1")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u540d\u524d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "status", label: "\u30b9\u30c6\u30fc\u30bf\u30b9" },\n    ],\n    data: [\n      { name: "\u901a\u5e38\u5546\u54c1", price: 100, status: "\u5728\u5eab\u3042\u308a" },\n      {\n        name: "\u7279\u4fa1\u5546\u54c1",\n        price: 50,\n        status: "\u30bb\u30fc\u30eb\u4e2d",\n        _style: {\n          price: { bold: true, fill: "#FFFF00" },  // \u4fa1\u683c\u5217\u3092\u5f37\u8abf\n          status: { color: "#FF0000" },            // \u30b9\u30c6\u30fc\u30bf\u30b9\u3092\u8d64\u6587\u5b57\n        },\n      },\n      {\n        name: "\u54c1\u5207\u308c",\n        price: 200,\n        status: "\u5728\u5eab\u306a\u3057",\n        _style: {\n          status: { color: "#999999", italic: true },\n        },\n      },\n    ],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u8907\u5408\u4f8b", children: "\u8907\u5408\u4f8b" }),
            "\n",
            (0, s.jsxs)(n.p, {
              children: [
                (0, s.jsx)(n.code, { children: "conditionalStyle" }),
                "\u3068",
                (0, s.jsx)(n.code, { children: "_style" }),
                "\u3092\u7d44\u307f\u5408\u308f\u305b\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u5728\u5eab")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "stock", label: "\u5728\u5eab\u6570" },\n      { key: "status", label: "\u72b6\u614b" },\n    ],\n    data: [\n      { name: "\u308a\u3093\u3054", stock: 100, status: "\u5145\u8db3" },\n      { name: "\u307f\u304b\u3093", stock: 5, status: "\u5c11\u91cf" },\n      {\n        name: "\u30d0\u30ca\u30ca",\n        stock: 0,\n        status: "\u6b20\u54c1",\n        _style: {\n          status: { bold: true },  // \u3053\u306e\u30bb\u30eb\u3060\u3051\u592a\u5b57\n        },\n      },\n    ],\n    conditionalStyle: (row, col) => {\n      // \u5728\u5eab\u304c10\u672a\u6e80\u306f\u9ec4\u8272\u80cc\u666f\n      if (col === "stock" && row.stock < 10) {\n        return { fill: "#FFFF00" };\n      }\n      // \u5728\u5eab\u304c0\u306f\u8d64\u80cc\u666f\n      if (col === "stock" && row.stock === 0) {\n        return { fill: "#FF0000", color: "#FFFFFF" };\n      }\n      return {};\n    },\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
              children: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30b9\u30bf\u30a4\u30eb\u306f\u4ee5\u4e0b\u306e\u9806\u3067\u9069\u7528\u3055\u308c\u307e\u3059\uff08\u5f8c\u306e\u3082\u306e\u304c\u512a\u5148\uff09:",
            }),
            "\n",
            (0, s.jsxs)(n.ol, {
              children: [
                "\n",
                (0, s.jsx)(n.li, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8" }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb\uff08",
                    (0, s.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, s.jsx)(n.code, { children: "style.body" }),
                    "\uff09",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    "\u5217\u30b9\u30bf\u30a4\u30eb\uff08",
                    (0, s.jsx)(n.code, { children: "columns[].style" }),
                    "\uff09",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\uff08",
                    (0, s.jsx)(n.code, { children: "conditionalStyle" }),
                    "\uff09",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb\uff08",
                    (0, s.jsx)(n.code, { children: "data[]._style" }),
                    "\uff09",
                  ],
                }),
                "\n",
              ],
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
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - \u30b9\u30bf\u30a4\u30eb\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/docs/api-reference/table", children: ".table() API" }),
                    " - conditionalStyle\u306e\u8a73\u7d30",
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
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => c, x: () => r });
      var l = t(7140);
      const s = {},
        i = l.createContext(s);
      function c(e) {
        const n = l.useContext(i);
        return l.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function r(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : c(e.components)),
          l.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
