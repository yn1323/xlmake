(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [975],
  {
    3868(e, n, i) {
      i.r(n),
        i.d(n, {
          assets: () => c,
          contentTitle: () => a,
          default: () => u,
          frontMatter: () => r,
          metadata: () => s,
          toc: () => o,
        });
      const s = JSON.parse(
        '{"id":"guides/images","title":"\u753b\u50cf\u633f\u5165","description":"xlkit\u3067Excel\u306b\u753b\u50cf\u3092\u633f\u5165\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002","source":"@site/docs/guides/images.md","sourceDirName":"guides","slug":"/guides/images","permalink":"/xlkit/docs/guides/images","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/images.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"\u8907\u6570\u30b7\u30fc\u30c8","permalink":"/xlkit/docs/guides/multi-sheet"},"next":{"title":"\u8aad\u307f\u53d6\u308aAPI","permalink":"/xlkit/docs/guides/reading"}}',
      );
      var t = i(5656),
        l = i(6610);
      const r = { sidebar_position: 4 },
        a = "\u753b\u50cf\u633f\u5165",
        c = {},
        o = [
          {
            value: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            level: 2,
          },
          { value: "ImageOptions", id: "imageoptions", level: 2 },
          { value: "source \u306e\u6307\u5b9a\u65b9\u6cd5", id: "source-\u306e\u6307\u5b9a\u65b9\u6cd5", level: 2 },
          {
            value: "Buffer\u3092\u4f7f\u7528\uff08\u63a8\u5968\uff09",
            id: "buffer\u3092\u4f7f\u7528\u63a8\u5968",
            level: 3,
          },
          {
            value: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528\uff08Node.js\u306e\u307f\uff09",
            id: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528nodejs\u306e\u307f",
            level: 3,
          },
          { value: "\u30b5\u30a4\u30ba\u306e\u6307\u5b9a", id: "\u30b5\u30a4\u30ba\u306e\u6307\u5b9a", level: 2 },
          { value: "\u4f4d\u7f6e\u306e\u6307\u5b9a", id: "\u4f4d\u7f6e\u306e\u6307\u5b9a", level: 2 },
          {
            value: "\u30c6\u30ad\u30b9\u30c8\u3084\u30c6\u30fc\u30d6\u30eb\u3068\u7d44\u307f\u5408\u308f\u305b\u308b",
            id: "\u30c6\u30ad\u30b9\u30c8\u3084\u30c6\u30fc\u30d6\u30eb\u3068\u7d44\u307f\u5408\u308f\u305b\u308b",
            level: 2,
          },
          { value: "\u5b8c\u5168\u306a\u4f8b", id: "\u5b8c\u5168\u306a\u4f8b", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function d(e) {
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
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, {
              children: (0, t.jsx)(n.h1, { id: "\u753b\u50cf\u633f\u5165", children: "\u753b\u50cf\u633f\u5165" }),
            }),
            "\n",
            (0, t.jsx)(n.p, {
              children:
                "xlkit\u3067Excel\u306b\u753b\u50cf\u3092\u633f\u5165\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, t.jsx)(n.h2, {
              id: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
              children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\nimport { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\nconst output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "imageoptions", children: "ImageOptions" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: Buffer | string,  // \u753b\u50cf\u30c7\u30fc\u30bf\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\n  width?: number,           // \u5e45\uff08\u30d4\u30af\u30bb\u30eb\uff09\n  height?: number,          // \u9ad8\u3055\uff08\u30d4\u30af\u30bb\u30eb\uff09\n  row?: number,             // \u884c\u4f4d\u7f6e\uff080-indexed\uff09\n  col?: number,             // \u5217\u4f4d\u7f6e\uff080-indexed\uff09\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, {
              id: "source-\u306e\u6307\u5b9a\u65b9\u6cd5",
              children: "source \u306e\u6307\u5b9a\u65b9\u6cd5",
            }),
            "\n",
            (0, t.jsx)(n.h3, {
              id: "buffer\u3092\u4f7f\u7528\u63a8\u5968",
              children: "Buffer\u3092\u4f7f\u7528\uff08\u63a8\u5968\uff09",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst imageBuffer = readFileSync("./image.png");\n\n.image({\n  source: imageBuffer,\n  width: 200,\n  height: 100,\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h3, {
              id: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528nodejs\u306e\u307f",
              children: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528\uff08Node.js\u306e\u307f\uff09",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children: '.image({\n  source: "./image.png",\n  width: 200,\n  height: 100,\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, {
              id: "\u30b5\u30a4\u30ba\u306e\u6307\u5b9a",
              children: "\u30b5\u30a4\u30ba\u306e\u6307\u5b9a",
            }),
            "\n",
            (0, t.jsx)(n.p, {
              children:
                "\u753b\u50cf\u306e\u30b5\u30a4\u30ba\u306f\u30d4\u30af\u30bb\u30eb\u5358\u4f4d\u3067\u6307\u5b9a\u3057\u307e\u3059\u3002",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: imageBuffer,\n  width: 300,   // \u5e45300\u30d4\u30af\u30bb\u30eb\n  height: 150,  // \u9ad8\u3055150\u30d4\u30af\u30bb\u30eb\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "\u4f4d\u7f6e\u306e\u6307\u5b9a", children: "\u4f4d\u7f6e\u306e\u6307\u5b9a" }),
            "\n",
            (0, t.jsxs)(n.p, {
              children: [
                (0, t.jsx)(n.code, { children: "row" }),
                "\u3068",
                (0, t.jsx)(n.code, { children: "col" }),
                "\u3067\u753b\u50cf\u306e\u914d\u7f6e\u4f4d\u7f6e\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\uff080\u304b\u3089\u958b\u59cb\uff09\u3002",
              ],
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: imageBuffer,\n  width: 200,\n  height: 100,\n  row: 5,   // 6\u884c\u76ee\n  col: 2,   // C\u5217\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, {
              id: "\u30c6\u30ad\u30b9\u30c8\u3084\u30c6\u30fc\u30d6\u30eb\u3068\u7d44\u307f\u5408\u308f\u305b\u308b",
              children:
                "\u30c6\u30ad\u30b9\u30c8\u3084\u30c6\u30fc\u30d6\u30eb\u3068\u7d44\u307f\u5408\u308f\u305b\u308b",
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .text({ value: "\u6708\u6b21\u30ec\u30dd\u30fc\u30c8", style: { bold: true, fontSize: 16 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "\u5b8c\u5168\u306a\u4f8b", children: "\u5b8c\u5168\u306a\u4f8b" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\nimport { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./company-logo.png");\nconst chartBuffer = readFileSync("./sales-chart.png");\n\nconst output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  // \u30d8\u30c3\u30c0\u30fc\u90e8\u5206\n  .text({ value: "\u682a\u5f0f\u4f1a\u793e\u30b5\u30f3\u30d7\u30eb", style: { bold: true, fontSize: 18 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 120,\n    height: 60,\n  })\n  .space(2)\n  // \u30c7\u30fc\u30bf\u30c6\u30fc\u30d6\u30eb\n  .text({ value: "\u58f2\u4e0a\u30c7\u30fc\u30bf", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "month", label: "\u6708" },\n      { key: "sales", label: "\u58f2\u4e0a" },\n    ],\n    data: [\n      { month: "1\u6708", sales: 1000000 },\n      { month: "2\u6708", sales: 1200000 },\n      { month: "3\u6708", sales: 1100000 },\n    ],\n  })\n  .space(2)\n  // \u30b0\u30e9\u30d5\u753b\u50cf\n  .text({ value: "\u58f2\u4e0a\u63a8\u79fb\u30b0\u30e9\u30d5", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .image({\n    source: chartBuffer,\n    width: 400,\n    height: 250,\n  })\n  .getNode();\n\nawait output.saveToFile("report-with-images.xlsx");\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/docs/api-reference/image", children: ".image() API" }),
                    " - \u753b\u50cfAPI\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, {
                      href: "/xlkit/docs/guides/basic-usage",
                      children: "\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9",
                    }),
                    " - xlkit\u306e\u57fa\u672c",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function u(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, n, i) {
      i.d(n, { R: () => r, x: () => a });
      var s = i(7140);
      const t = {},
        l = s.createContext(t);
      function r(e) {
        const n = s.useContext(l);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : r(e.components)),
          s.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
