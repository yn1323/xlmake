(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [133],
  {
    6610(e, n, l) {
      l.d(n, { R: () => t, x: () => c });
      var i = l(7140);
      const s = {},
        r = i.createContext(s);
      function t(e) {
        const n = i.useContext(r);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : t(e.components)),
          i.createElement(r.Provider, { value: n }, e.children)
        );
      }
    },
    9018(e, n, l) {
      l.r(n),
        l.d(n, {
          assets: () => d,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => t,
          metadata: () => i,
          toc: () => a,
        });
      const i = JSON.parse(
        '{"id":"guides/styling","title":"\u30b9\u30bf\u30a4\u30ea\u30f3\u30b0","description":"xlkit\u3067\u306f\u69d8\u3005\u306a\u65b9\u6cd5\u3067\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002","source":"@site/docs/guides/styling.md","sourceDirName":"guides","slug":"/guides/styling","permalink":"/xlkit/docs/guides/styling","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/styling.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9","permalink":"/xlkit/docs/guides/basic-usage"},"next":{"title":"\u8907\u6570\u30b7\u30fc\u30c8","permalink":"/xlkit/docs/guides/multi-sheet"}}',
      );
      var s = l(5656),
        r = l(6610);
      const t = { sidebar_position: 2 },
        c = "\u30b9\u30bf\u30a4\u30ea\u30f3\u30b0",
        d = {},
        a = [
          { value: "\u30d7\u30ea\u30bb\u30c3\u30c8", id: "\u30d7\u30ea\u30bb\u30c3\u30c8", level: 2 },
          { value: "CellStyle", id: "cellstyle", level: 2 },
          {
            value: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb",
            id: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb",
            level: 2,
          },
          { value: "\u5217\u30b9\u30bf\u30a4\u30eb", id: "\u5217\u30b9\u30bf\u30a4\u30eb", level: 2 },
          {
            value: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
            id: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
            level: 2,
          },
          {
            value: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb\uff08_style\uff09",
            id: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb_style",
            level: 2,
          },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            id: "\u30b9\u30bf\u30a4\u30eb\u306e\u512a\u5148\u5ea6",
            level: 2,
          },
          { value: "\u6570\u5024\u66f8\u5f0f", id: "\u6570\u5024\u66f8\u5f0f", level: 2 },
          { value: "\u7f6b\u7dda", id: "\u7f6b\u7dda", level: 2 },
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
          ol: "ol",
          p: "p",
          pre: "pre",
          strong: "strong",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, {
                id: "\u30b9\u30bf\u30a4\u30ea\u30f3\u30b0",
                children: "\u30b9\u30bf\u30a4\u30ea\u30f3\u30b0",
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "xlkit\u3067\u306f\u69d8\u3005\u306a\u65b9\u6cd5\u3067\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u30d7\u30ea\u30bb\u30c3\u30c8", children: "\u30d7\u30ea\u30bb\u30c3\u30c8" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u6700\u3082\u7c21\u5358\u306a\u65b9\u6cd5\u306f\u30d7\u30ea\u30bb\u30c3\u30c8\u3092\u4f7f\u3046\u3053\u3068\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  preset: "basic",  // \u9752\u30d8\u30c3\u30c0\u30fc + \u5168\u7f6b\u7dda\n  columns: [...],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, { children: "\u5229\u7528\u53ef\u80fd\u306a\u30d7\u30ea\u30bb\u30c3\u30c8:" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, { children: "basic" }),
                    " - \u9752\u30d8\u30c3\u30c0\u30fc\u3001\u767d\u6587\u5b57\u3001\u5168\u7f6b\u7dda",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, { children: "minimal" }),
                    " - \u30d8\u30c3\u30c0\u30fc\u592a\u5b57\u306e\u307f\u3001\u7f6b\u7dda\u306a\u3057",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.code, { children: "striped" }),
                    " - \u9752\u30d8\u30c3\u30c0\u30fc\u3001\u5947\u6570\u884c\u30b0\u30ec\u30fc\u80cc\u666f\u3001\u5168\u7f6b\u7dda",
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "cellstyle", children: "CellStyle" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30bb\u30eb\u306e\u30b9\u30bf\u30a4\u30eb\u3092\u7d30\u304b\u304f\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '{\n  // \u30d5\u30a9\u30f3\u30c8\n  fontFamily: "Arial",\n  fontSize: 11,\n  bold: true,\n  italic: true,\n  underline: true,\n  strike: true,\n\n  // \u8272\n  color: "#FF0000",    // \u6587\u5b57\u8272\n  fill: "#FFFF00",     // \u80cc\u666f\u8272\n\n  // \u914d\u7f6e\n  align: "center",     // "left" | "center" | "right"\n\n  // \u6570\u5024\u66f8\u5f0f\n  format: "number",\n  decimalPlaces: 2,\n  thousandsSeparator: true,\n}\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb",
              children: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb",
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30c6\u30fc\u30d6\u30eb\u5168\u4f53\u306e\u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  style: {\n    header: { bold: true, fill: "#4472C4", color: "#FFFFFF" },\n    body: { fontSize: 11 },\n  },\n})\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u5217\u30b9\u30bf\u30a4\u30eb", children: "\u5217\u30b9\u30bf\u30a4\u30eb" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u7279\u5b9a\u306e\u5217\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [\n    { key: "name", label: "\u540d\u524d" },\n    { key: "price", label: "\u4fa1\u683c", style: { bold: true } },\n    { key: "warning", label: "\u8b66\u544a", style: { color: "#FF0000" } },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
              children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb",
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u30c7\u30fc\u30bf\u306e\u5024\u306b\u57fa\u3065\u3044\u3066\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  conditionalStyle: (row, col) => {\n    if (col === "profit" && row.profit < 0) {\n      return { color: "#FF0000" };  // \u8d64\u6587\u5b57\n    }\n    if (col === "price" && row.price >= 10000) {\n      return { bold: true };  // \u592a\u5b57\n    }\n    return {};\n  },\n})\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb_style",
              children: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb\uff08_style\uff09",
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "\u7279\u5b9a\u306e\u30bb\u30eb\u3060\u3051\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u9069\u7528\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [\n    { name: "\u901a\u5e38", price: 100 },\n    {\n      name: "\u7279\u4fa1",\n      price: 50,\n      _style: {\n        price: { bold: true, fill: "#FFFF00" },\n      },\n    },\n  ],\n})\n',
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
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8" }),
                    " - ",
                    (0, s.jsx)(n.code, { children: 'preset: "basic"' }),
                    " \u306a\u3069",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: "\u30c6\u30fc\u30d6\u30eb\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, s.jsx)(n.code, { children: "style.header" }),
                    " / ",
                    (0, s.jsx)(n.code, { children: "style.body" }),
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: "\u5217\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, s.jsx)(n.code, { children: "columns[].style" }),
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, s.jsx)(n.code, { children: "conditionalStyle" }),
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.strong, { children: "\u30bb\u30eb\u5358\u4f4d\u30b9\u30bf\u30a4\u30eb" }),
                    " - ",
                    (0, s.jsx)(n.code, { children: "data[]._style" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u6570\u5024\u66f8\u5f0f", children: "\u6570\u5024\u66f8\u5f0f" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [\n    {\n      key: "price",\n      label: "\u4fa1\u683c",\n      style: {\n        format: "number",\n        thousandsSeparator: true,  // 1,234,567\n      },\n    },\n    {\n      key: "rate",\n      label: "\u5272\u5408",\n      style: {\n        format: "number",\n        decimalPlaces: 2,  // 12.34\n      },\n    },\n  ],\n  data: [...],\n})\n',
              }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u7f6b\u7dda", children: "\u7f6b\u7dda" }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, {
                className: "language-typescript",
                children:
                  '.table({\n  columns: [...],\n  data: [...],\n  border: {\n    outline: "medium",      // \u5916\u67a0\n    headerBody: "medium",   // \u30d8\u30c3\u30c0\u30fc\u3068\u30dc\u30c7\u30a3\u306e\u5883\u754c\n    headerInner: "thin",    // \u30d8\u30c3\u30c0\u30fc\u5185\u90e8\n    bodyInner: "thin",      // \u30dc\u30c7\u30a3\u5185\u90e8\n    borderColor: "#000080", // \u7f6b\u7dda\u306e\u8272\n  },\n})\n',
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
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - \u5168\u30b9\u30bf\u30a4\u30eb\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, { href: "/xlkit/docs/examples/borders", children: "\u7f6b\u7dda\u306e\u4f8b" }),
                    " - \u7f6b\u7dda\u306e\u4f7f\u7528\u4f8b",
                  ],
                }),
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
                      href: "/xlkit/docs/examples/conditional-styling",
                      children: "\u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\u306e\u4f8b",
                    }),
                    " - \u6761\u4ef6\u4ed8\u304d\u30b9\u30bf\u30a4\u30eb\u306e\u4f7f\u7528\u4f8b",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, r.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
      }
    },
  },
]);
