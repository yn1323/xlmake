(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [297],
  {
    1286(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => c,
          default: () => x,
          frontMatter: () => s,
          metadata: () => i,
          toc: () => a,
        });
      const i = JSON.parse(
        '{"id":"api-reference/text","title":".text()","description":"\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002","source":"@site/docs/api-reference/text.md","sourceDirName":"api-reference","slug":"/api-reference/text","permalink":"/xlkit/docs/api-reference/text","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/text.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":".table()","permalink":"/xlkit/docs/api-reference/table"},"next":{"title":".image()","permalink":"/xlkit/docs/api-reference/image"}}',
      );
      var l = n(5656),
        r = n(6610);
      const s = { sidebar_position: 5 },
        c = ".text()",
        d = {},
        a = [
          { value: "\u5165\u529b\u5f62\u5f0f", id: "\u5165\u529b\u5f62\u5f0f", level: 2 },
          {
            value: "\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30ad\u30b9\u30c8",
            id: "\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30ad\u30b9\u30c8",
            level: 3,
          },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u4ed8\u304d\u30c6\u30ad\u30b9\u30c8",
            id: "\u30b9\u30bf\u30a4\u30eb\u4ed8\u304d\u30c6\u30ad\u30b9\u30c8",
            level: 3,
          },
          { value: "TextInput", id: "textinput", level: 2 },
          { value: "\u4f7f\u7528\u4f8b", id: "\u4f7f\u7528\u4f8b", level: 2 },
          {
            value: "\u30b9\u30bf\u30a4\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3",
            id: "\u30b9\u30bf\u30a4\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3",
            level: 2,
          },
          { value: "\u95a2\u9023", id: "\u95a2\u9023", level: 2 },
        ];
      function o(e) {
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
          table: "table",
          tbody: "tbody",
          td: "td",
          th: "th",
          thead: "thead",
          tr: "tr",
          ul: "ul",
          ...(0, r.R)(),
          ...e.components,
        };
        return (0, l.jsxs)(l.Fragment, {
          children: [
            (0, l.jsx)(t.header, { children: (0, l.jsx)(t.h1, { id: "text", children: ".text()" }) }),
            "\n",
            (0, l.jsx)(t.p, { children: "\u30c6\u30ad\u30b9\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002" }),
            "\n",
            (0, l.jsx)(t.h2, { id: "\u5165\u529b\u5f62\u5f0f", children: "\u5165\u529b\u5f62\u5f0f" }),
            "\n",
            (0, l.jsx)(t.h3, {
              id: "\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30ad\u30b9\u30c8",
              children: "\u30b7\u30f3\u30d7\u30eb\u306a\u30c6\u30ad\u30b9\u30c8",
            }),
            "\n",
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: "language-typescript",
                children: '.text("\u30bf\u30a4\u30c8\u30eb")\n',
              }),
            }),
            "\n",
            (0, l.jsx)(t.h3, {
              id: "\u30b9\u30bf\u30a4\u30eb\u4ed8\u304d\u30c6\u30ad\u30b9\u30c8",
              children: "\u30b9\u30bf\u30a4\u30eb\u4ed8\u304d\u30c6\u30ad\u30b9\u30c8",
            }),
            "\n",
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.text({\n  value: "\u91cd\u8981\u306a\u30c6\u30ad\u30b9\u30c8",\n  style: { bold: true, fontSize: 14, color: "#FF0000" }\n})\n',
              }),
            }),
            "\n",
            (0, l.jsx)(t.h2, { id: "textinput", children: "TextInput" }),
            "\n",
            (0, l.jsxs)(t.table, {
              children: [
                (0, l.jsx)(t.thead, {
                  children: (0, l.jsxs)(t.tr, {
                    children: [
                      (0, l.jsx)(t.th, { children: "\u5f62\u5f0f" }),
                      (0, l.jsx)(t.th, { children: "\u8aac\u660e" }),
                    ],
                  }),
                }),
                (0, l.jsxs)(t.tbody, {
                  children: [
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, { children: (0, l.jsx)(t.code, { children: "string" }) }),
                        (0, l.jsx)(t.td, { children: "\u30d7\u30ec\u30fc\u30f3\u30c6\u30ad\u30b9\u30c8" }),
                      ],
                    }),
                    (0, l.jsxs)(t.tr, {
                      children: [
                        (0, l.jsx)(t.td, { children: (0, l.jsx)(t.code, { children: "{ value, style? }" }) }),
                        (0, l.jsx)(t.td, { children: "\u30b9\u30bf\u30a4\u30eb\u4ed8\u304d\u30c6\u30ad\u30b9\u30c8" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, l.jsx)(t.h2, { id: "\u4f7f\u7528\u4f8b", children: "\u4f7f\u7528\u4f8b" }),
            "\n",
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("\u30ec\u30dd\u30fc\u30c8")\n  .text({ value: "\u58f2\u4e0a\u30ec\u30dd\u30fc\u30c8", style: { bold: true, fontSize: 16 } })\n  .text("2024\u5e741\u6708\u5206")\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .space(1)\n  .text("\u203b \u91d1\u984d\u306f\u7a0e\u629c\u304d\u3067\u3059")\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, l.jsx)(t.h2, {
              id: "\u30b9\u30bf\u30a4\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3",
              children: "\u30b9\u30bf\u30a4\u30eb\u30aa\u30d7\u30b7\u30e7\u30f3",
            }),
            "\n",
            (0, l.jsxs)(t.p, {
              children: [
                (0, l.jsx)(t.code, { children: "style" }),
                "\u306b\u306f",
                (0, l.jsx)(t.a, { href: "/xlkit/docs/api-reference/styling#cellstyle", children: "CellStyle" }),
                "\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u6307\u5b9a\u3067\u304d\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, l.jsx)(t.pre, {
              children: (0, l.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.text({\n  value: "\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8",\n  style: {\n    bold: true,\n    color: "#FF0000",\n    fontSize: 12,\n  }\n})\n',
              }),
            }),
            "\n",
            (0, l.jsx)(t.h2, { id: "\u95a2\u9023", children: "\u95a2\u9023" }),
            "\n",
            (0, l.jsxs)(t.ul, {
              children: [
                "\n",
                (0, l.jsxs)(t.li, {
                  children: [
                    (0, l.jsx)(t.a, {
                      href: "/xlkit/docs/api-reference/styling",
                      children: "\u30b9\u30bf\u30a4\u30ebAPI",
                    }),
                    " - CellStyle\u306e\u8a73\u7d30",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components };
        return t ? (0, l.jsx)(t, { ...e, children: (0, l.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => s, x: () => c });
      var i = n(7140);
      const l = {},
        r = i.createContext(l);
      function s(e) {
        const t = i.useContext(r);
        return i.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(l)
              : e.components || l
            : s(e.components)),
          i.createElement(r.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
