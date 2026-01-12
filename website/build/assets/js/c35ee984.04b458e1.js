(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [965],
  {
    3749(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => r,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => a,
          metadata: () => s,
          toc: () => d,
        });
      const s = JSON.parse(
        '{"id":"guides/multi-sheet","title":"\u8907\u6570\u30b7\u30fc\u30c8","description":"xlkit\u3067\u306f\u8907\u6570\u306e\u30b7\u30fc\u30c8\u3092\u6301\u3064Excel\u30d5\u30a1\u30a4\u30eb\u3092\u7c21\u5358\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002","source":"@site/docs/guides/multi-sheet.md","sourceDirName":"guides","slug":"/guides/multi-sheet","permalink":"/xlkit/docs/guides/multi-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/multi-sheet.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"\u30b9\u30bf\u30a4\u30ea\u30f3\u30b0","permalink":"/xlkit/docs/guides/styling"},"next":{"title":"\u753b\u50cf\u633f\u5165","permalink":"/xlkit/docs/guides/images"}}',
      );
      var l = t(5656),
        i = t(6610);
      const a = { sidebar_position: 3 },
        c = "\u8907\u6570\u30b7\u30fc\u30c8",
        r = {},
        d = [
          {
            value: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            level: 2,
          },
          { value: "\u30b7\u30fc\u30c8\u540d", id: "\u30b7\u30fc\u30c8\u540d", level: 2 },
          { value: "\u660e\u793a\u7684\u306b\u6307\u5b9a", id: "\u660e\u793a\u7684\u306b\u6307\u5b9a", level: 3 },
          { value: "\u81ea\u52d5\u751f\u6210", id: "\u81ea\u52d5\u751f\u6210", level: 3 },
          {
            value: "\u5404\u30b7\u30fc\u30c8\u306b\u7570\u306a\u308b\u30b3\u30f3\u30c6\u30f3\u30c4",
            id: "\u5404\u30b7\u30fc\u30c8\u306b\u7570\u306a\u308b\u30b3\u30f3\u30c6\u30f3\u30c4",
            level: 2,
          },
          {
            value: "\u30b7\u30fc\u30c8\u540d\u306e\u5236\u7d04",
            id: "\u30b7\u30fc\u30c8\u540d\u306e\u5236\u7d04",
            level: 2,
          },
          { value: "\u5b8c\u5168\u306a\u4f8b", id: "\u5b8c\u5168\u306a\u4f8b", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
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
          ul: "ul",
          ...(0, i.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(n.header, {
              children: (0, l.jsx)(n.h1, {
                id: "\u8907\u6570\u30b7\u30fc\u30c8",
                children: "\u8907\u6570\u30b7\u30fc\u30c8",
              }),
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "xlkit\u3067\u306f\u8907\u6570\u306e\u30b7\u30fc\u30c8\u3092\u6301\u3064Excel\u30d5\u30a1\u30a4\u30eb\u3092\u7c21\u5358\u306b\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
              children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            }),
            "\n",
            (0, l.jsxs)(n.p, {
              children: [
                (0, l.jsx)(n.code, { children: "sheet()" }),
                "\u3092\u9023\u7d9a\u3057\u3066\u547c\u3073\u51fa\u3059\u3053\u3068\u3067\u3001\u8907\u6570\u306e\u30b7\u30fc\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "sales", label: "\u58f2\u4e0a" },\n    ],\n    data: salesData,\n  })\n  .sheet("\u5728\u5eab")  // 2\u3064\u76ee\u306e\u30b7\u30fc\u30c8\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "stock", label: "\u5728\u5eab\u6570" },\n    ],\n    data: stockData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "\u30b7\u30fc\u30c8\u540d", children: "\u30b7\u30fc\u30c8\u540d" }),
            "\n",
            (0, l.jsx)(n.h3, {
              id: "\u660e\u793a\u7684\u306b\u6307\u5b9a",
              children: "\u660e\u793a\u7684\u306b\u6307\u5b9a",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'xlkit()\n  .sheet("\u58f2\u4e0a\u30c7\u30fc\u30bf")\n  .sheet("\u5728\u5eab\u30c7\u30fc\u30bf")\n  .sheet("\u9867\u5ba2\u30de\u30b9\u30bf")\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h3, { id: "\u81ea\u52d5\u751f\u6210", children: "\u81ea\u52d5\u751f\u6210" }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u30b7\u30fc\u30c8\u540d\u3092\u7701\u7565\u3059\u308b\u3068\u3001Sheet1, Sheet2... \u3068\u81ea\u52d5\u751f\u6210\u3055\u308c\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children: "xlkit()\n  .sheet()  // Sheet1\n  .sheet()  // Sheet2\n  .sheet()  // Sheet3\n",
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u5404\u30b7\u30fc\u30c8\u306b\u7570\u306a\u308b\u30b3\u30f3\u30c6\u30f3\u30c4",
              children: "\u5404\u30b7\u30fc\u30c8\u306b\u7570\u306a\u308b\u30b3\u30f3\u30c6\u30f3\u30c4",
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u5404\u30b7\u30fc\u30c8\u306b\u306f\u72ec\u7acb\u3057\u305f\u30c6\u30fc\u30d6\u30eb\u3001\u30c6\u30ad\u30b9\u30c8\u3001\u753b\u50cf\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30b5\u30de\u30ea\u30fc")\n  .text({ value: "\u6708\u6b21\u30ec\u30dd\u30fc\u30c8", style: { bold: true, fontSize: 16 } })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: summaryColumns,\n    data: summaryData,\n  })\n  .sheet("\u8a73\u7d30\u30c7\u30fc\u30bf")\n  .table({\n    preset: "striped",\n    columns: detailColumns,\n    data: detailData,\n  })\n  .sheet("\u30b0\u30e9\u30d5\u30c7\u30fc\u30bf")\n  .table({\n    preset: "minimal",\n    columns: chartColumns,\n    data: chartData,\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(n.h2, {
              id: "\u30b7\u30fc\u30c8\u540d\u306e\u5236\u7d04",
              children: "\u30b7\u30fc\u30c8\u540d\u306e\u5236\u7d04",
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "Excel\u306e\u4ed5\u69d8\u306b\u3088\u308a\u3001\u30b7\u30fc\u30c8\u540d\u306b\u306f\u4ee5\u4e0b\u306e\u5236\u7d04\u304c\u3042\u308a\u307e\u3059:",
            }),
            "\n",
            (0, l.jsxs)(n.ul, {
              children: [
                "\n",
                (0, l.jsx)(n.li, { children: "\u6700\u592731\u6587\u5b57" }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    "\u4f7f\u7528\u3067\u304d\u306a\u3044\u6587\u5b57: ",
                    (0, l.jsx)(n.code, { children: ": \\ / ? * [ ]" }),
                  ],
                }),
                "\n",
              ],
            }),
            "\n",
            (0, l.jsx)(n.p, {
              children:
                "\u3053\u308c\u3089\u306e\u5236\u7d04\u306b\u9055\u53cd\u3057\u305f\u5834\u5408\u3001xlkit\u306f\u30a8\u30e9\u30fc\u3092\u30b9\u30ed\u30fc\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, l.jsx)(n.h2, { id: "\u5b8c\u5168\u306a\u4f8b", children: "\u5b8c\u5168\u306a\u4f8b" }),
            "\n",
            (0, l.jsx)(n.pre, {
              children: (0, l.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "\u308a\u3093\u3054", sales: 50000 },\n  { name: "\u307f\u304b\u3093", sales: 40000 },\n];\n\nconst stockData = [\n  { name: "\u308a\u3093\u3054", stock: 100 },\n  { name: "\u307f\u304b\u3093", stock: 200 },\n];\n\nconst output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .text({ value: "\u58f2\u4e0a\u30c7\u30fc\u30bf", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "sales", label: "\u58f2\u4e0a" },\n    ],\n    data: salesData,\n  })\n  .sheet("\u5728\u5eab")\n  .text({ value: "\u5728\u5eab\u30c7\u30fc\u30bf", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "stock", label: "\u5728\u5eab\u6570" },\n    ],\n    data: stockData,\n  })\n  .getNode();\n\nawait output.saveToFile("multi-sheet.xlsx");\n',
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
                      href: "/xlkit/docs/guides/basic-usage",
                      children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
                    }),
                    " - xlkit\u306e\u57fa\u672c",
                  ],
                }),
                "\n",
                (0, l.jsxs)(n.li, {
                  children: [
                    (0, l.jsx)(n.a, { href: "/xlkit/docs/reference/excel-constraints", children: "Excel\u5236\u7d04" }),
                    " - Excel\u306e\u5236\u7d04\u4e8b\u9805",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, i.R)(), ...e.components };
        return n ? (0, l.jsx)(n, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => a, x: () => c });
      var s = t(7140);
      const l = {},
        i = s.createContext(l);
      function a(e) {
        const n = s.useContext(i);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : a(e.components)),
          s.createElement(i.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
