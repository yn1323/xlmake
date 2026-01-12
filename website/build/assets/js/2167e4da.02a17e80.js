(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [35],
  {
    1315(e, n, r) {
      r.r(n),
        r.d(n, {
          assets: () => l,
          contentTitle: () => c,
          default: () => h,
          frontMatter: () => d,
          metadata: () => i,
          toc: () => o,
        });
      const i = JSON.parse(
        '{"id":"api-reference/image","title":".image()","description":"\u753b\u50cf\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002","source":"@site/docs/api-reference/image.md","sourceDirName":"api-reference","slug":"/api-reference/image","permalink":"/xlkit/docs/api-reference/image","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/image.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":".text()","permalink":"/xlkit/docs/api-reference/text"},"next":{"title":"\u30b9\u30bf\u30a4\u30ebAPI","permalink":"/xlkit/docs/api-reference/styling"}}',
      );
      var t = r(5656),
        s = r(6610);
      const d = { sidebar_position: 6 },
        c = ".image()",
        l = {},
        o = [
          { value: "ImageOptions", id: "imageoptions", level: 2 },
          { value: "source", id: "source", level: 2 },
          { value: "Buffer\u3092\u4f7f\u7528", id: "buffer\u3092\u4f7f\u7528", level: 3 },
          {
            value: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528\uff08Node.js\u306e\u307f\uff09",
            id: "\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\u3092\u4f7f\u7528nodejs\u306e\u307f",
            level: 3,
          },
          { value: "\u4f7f\u7528\u4f8b", id: "\u4f7f\u7528\u4f8b", level: 2 },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function a(e) {
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
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ul: "ul",
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: "image", children: ".image()" }) }),
            "\n",
            (0, t.jsx)(n.p, { children: "\u753b\u50cf\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, t.jsx)(n.h2, { id: "imageoptions", children: "ImageOptions" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: Buffer | string,  // Buffer\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9\n  width?: number,           // \u5e45\uff08\u30d4\u30af\u30bb\u30eb\uff09\n  height?: number,          // \u9ad8\u3055\uff08\u30d4\u30af\u30bb\u30eb\uff09\n  row?: number,             // \u884c\u4f4d\u7f6e\uff080-indexed\uff09\n  col?: number,             // \u5217\u4f4d\u7f6e\uff080-indexed\uff09\n})\n",
              }),
            }),
            "\n",
            (0, t.jsxs)(n.table, {
              children: [
                (0, t.jsx)(n.thead, {
                  children: (0, t.jsxs)(n.tr, {
                    children: [
                      (0, t.jsx)(n.th, { children: "\u30d7\u30ed\u30d1\u30c6\u30a3" }),
                      (0, t.jsx)(n.th, { children: "\u578b" }),
                      (0, t.jsx)(n.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, t.jsxs)(n.tbody, {
                  children: [
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "source" }) }),
                        (0, t.jsxs)(n.td, {
                          children: [
                            (0, t.jsx)(n.code, { children: "Buffer" }),
                            " | ",
                            (0, t.jsx)(n.code, { children: "string" }),
                          ],
                        }),
                        (0, t.jsx)(n.td, {
                          children:
                            "\u753b\u50cf\u30c7\u30fc\u30bf\u307e\u305f\u306f\u30d5\u30a1\u30a4\u30eb\u30d1\u30b9",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "width" }) }),
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "number" }) }),
                        (0, t.jsx)(n.td, { children: "\u753b\u50cf\u306e\u5e45\uff08\u30d4\u30af\u30bb\u30eb\uff09" }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "height" }) }),
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "number" }) }),
                        (0, t.jsx)(n.td, {
                          children: "\u753b\u50cf\u306e\u9ad8\u3055\uff08\u30d4\u30af\u30bb\u30eb\uff09",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "row" }) }),
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "number" }) }),
                        (0, t.jsx)(n.td, {
                          children: "\u914d\u7f6e\u3059\u308b\u884c\uff080\u304b\u3089\u958b\u59cb\uff09",
                        }),
                      ],
                    }),
                    (0, t.jsxs)(n.tr, {
                      children: [
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "col" }) }),
                        (0, t.jsx)(n.td, { children: (0, t.jsx)(n.code, { children: "number" }) }),
                        (0, t.jsx)(n.td, {
                          children: "\u914d\u7f6e\u3059\u308b\u5217\uff080\u304b\u3089\u958b\u59cb\uff09",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "source", children: "source" }),
            "\n",
            (0, t.jsx)(n.h3, { id: "buffer\u3092\u4f7f\u7528", children: "Buffer\u3092\u4f7f\u7528" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\n.image({\n  source: logoBuffer,\n  width: 150,\n  height: 75,\n})\n',
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
                children: '.image({\n  source: "./logo.png",\n  width: 150,\n  height: 75,\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "\u4f7f\u7528\u4f8b", children: "\u4f7f\u7528\u4f8b" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\nconst output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .text({ value: "\u6708\u6b21\u30ec\u30dd\u30fc\u30c8", style: { bold: true, fontSize: 16 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .getNode();\n',
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
                    (0, t.jsx)(n.a, {
                      href: "/xlkit/docs/guides/images",
                      children: "\u753b\u50cf\u633f\u5165\u30ac\u30a4\u30c9",
                    }),
                    " - \u753b\u50cf\u306e\u8a73\u3057\u3044\u4f7f\u3044\u65b9",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, s.R)(), ...e.components };
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(a, { ...e }) }) : a(e);
      }
    },
    6610(e, n, r) {
      r.d(n, { R: () => d, x: () => c });
      var i = r(7140);
      const t = {},
        s = i.createContext(t);
      function d(e) {
        const n = i.useContext(s);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function c(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : d(e.components)),
          i.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
