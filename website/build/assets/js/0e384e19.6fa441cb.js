(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [976],
  {
    6610(e, t, n) {
      n.d(t, { R: () => l, x: () => c });
      var i = n(7140);
      const s = {},
        r = i.createContext(s);
      function l(e) {
        const t = i.useContext(r);
        return i.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function c(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : l(e.components)),
          i.createElement(r.Provider, { value: t }, e.children)
        );
      }
    },
    8903(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => d,
          contentTitle: () => c,
          default: () => o,
          frontMatter: () => l,
          metadata: () => i,
          toc: () => x,
        });
      const i = JSON.parse(
        '{"id":"intro","title":"\u306f\u3058\u3081\u306b","description":"xlkit\u306f\u3001TypeScript\u5411\u3051\u306e\u5ba3\u8a00\u7684\u306aExcel\u751f\u6210\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/xlkit/docs/intro","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/intro.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","permalink":"/xlkit/docs/installation"}}',
      );
      var s = n(5656),
        r = n(6610);
      const l = { sidebar_position: 1 },
        c = "\u306f\u3058\u3081\u306b",
        d = {},
        x = [
          {
            value: "\u306a\u305cxlkit\u3092\u4f5c\u3063\u305f\u306e\u304b",
            id: "\u306a\u305cxlkit\u3092\u4f5c\u3063\u305f\u306e\u304b",
            level: 2,
          },
          { value: "ExcelJS\u3068\u306e\u6bd4\u8f03", id: "exceljs\u3068\u306e\u6bd4\u8f03", level: 2 },
          { value: "\u4e3b\u306a\u7279\u5fb4", id: "\u4e3b\u306a\u7279\u5fb4", level: 2 },
          { value: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", level: 2 },
        ];
      function h(e) {
        const t = {
          a: "a",
          h1: "h1",
          h2: "h2",
          header: "header",
          li: "li",
          p: "p",
          strong: "strong",
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
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(t.header, {
              children: (0, s.jsx)(t.h1, { id: "\u306f\u3058\u3081\u306b", children: "\u306f\u3058\u3081\u306b" }),
            }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                (0, s.jsx)(t.strong, { children: "xlkit" }),
                "\u306f\u3001TypeScript\u5411\u3051\u306e\u5ba3\u8a00\u7684\u306aExcel\u751f\u6210\u30e9\u30a4\u30d6\u30e9\u30ea\u3067\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, {
              id: "\u306a\u305cxlkit\u3092\u4f5c\u3063\u305f\u306e\u304b",
              children: "\u306a\u305cxlkit\u3092\u4f5c\u3063\u305f\u306e\u304b",
            }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "\u65e2\u5b58\u306eJS/TypeScript\u5411\u3051Excel\u51fa\u529b\u30e9\u30a4\u30d6\u30e9\u30ea\uff08ExcelJS\u7b49\uff09\u306f",
                (0, s.jsx)(t.strong, { children: "\u547d\u4ee4\u7684" }),
                "\u3067\u3042\u308a\u3001\u6700\u7d42\u7684\u306a\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u304c\u30b3\u30fc\u30c9\u304b\u3089\u898b\u3048\u3065\u3089\u3044\u3068\u3044\u3046\u554f\u984c\u304c\u3042\u308a\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsxs)(t.p, {
              children: [
                "xlkit\u306f",
                (0, s.jsx)(t.strong, { children: "\u5ba3\u8a00\u7684" }),
                "\u306aAPI\u3092\u63d0\u4f9b\u3057\u3001\u30b3\u30fc\u30c9\u3092\u898b\u308c\u3070\u6700\u7d42\u7684\u306aExcel\u306e\u69cb\u9020\u304c\u308f\u304b\u308b\u5f62\u3092\u76ee\u6307\u3057\u3066\u3044\u307e\u3059\u3002",
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "exceljs\u3068\u306e\u6bd4\u8f03", children: "ExcelJS\u3068\u306e\u6bd4\u8f03" }),
            "\n",
            (0, s.jsxs)(t.table, {
              children: [
                (0, s.jsx)(t.thead, {
                  children: (0, s.jsxs)(t.tr, {
                    children: [
                      (0, s.jsx)(t.th, { children: "\u89b3\u70b9" }),
                      (0, s.jsx)(t.th, { children: "ExcelJS\uff08\u547d\u4ee4\u7684\uff09" }),
                      (0, s.jsx)(t.th, { children: "xlkit\uff08\u5ba3\u8a00\u7684\uff09" }),
                    ],
                  }),
                }),
                (0, s.jsxs)(t.tbody, {
                  children: [
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "\u66f8\u304d\u65b9" }),
                        (0, s.jsx)(t.td, { children: "\u30bb\u30eb\u30921\u3064\u305a\u3064\u64cd\u4f5c" }),
                        (0, s.jsx)(t.td, { children: "\u6700\u7d42\u5f62\u3092\u5ba3\u8a00" }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "\u898b\u901a\u3057" }),
                        (0, s.jsx)(t.td, {
                          children: "\u30b3\u30fc\u30c9\u304b\u3089\u7d50\u679c\u304c\u898b\u3048\u3065\u3089\u3044",
                        }),
                        (0, s.jsx)(t.td, {
                          children: "\u30b3\u30fc\u30c9\u304b\u3089\u7d50\u679c\u304c\u898b\u3048\u308b",
                        }),
                      ],
                    }),
                    (0, s.jsxs)(t.tr, {
                      children: [
                        (0, s.jsx)(t.td, { children: "\u4f8b\u3048" }),
                        (0, s.jsx)(t.td, { children: "jQuery" }),
                        (0, s.jsx)(t.td, { children: "React" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, s.jsx)(t.h2, { id: "\u4e3b\u306a\u7279\u5fb4", children: "\u4e3b\u306a\u7279\u5fb4" }),
            "\n",
            (0, s.jsxs)(t.ul, {
              children: [
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "\u5ba3\u8a00\u7684API" }),
                    ": \u6700\u7d42\u30a2\u30a6\u30c8\u30d7\u30c3\u30c8\u304c\u308f\u304b\u308a\u3084\u3059\u3044\u5f62\u3067\u66f8\u3051\u308b",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "\u30e1\u30bd\u30c3\u30c9\u30c1\u30a7\u30fc\u30f3\u578b" }),
                    ": \u6d41\u308c\u308b\u3088\u3046\u306bExcel\u3092\u69cb\u7bc9\u3067\u304d\u308b",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "TypeScript\u5b8c\u5168\u5bfe\u5fdc" }),
                    ": \u578b\u88dc\u5b8c\u304c\u52b9\u3044\u3066\u66f8\u304d\u3084\u3059\u3044",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "\u30d7\u30ea\u30bb\u30c3\u30c8\u30b9\u30bf\u30a4\u30eb" }),
                    ": \u3088\u304f\u4f7f\u3046\u30b9\u30bf\u30a4\u30eb\u3092\u7c21\u5358\u306b\u9069\u7528",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.strong, { children: "Node.js + \u30d6\u30e9\u30a6\u30b6\u4e21\u5bfe\u5fdc" }),
                    ": \u3069\u3061\u3089\u306e\u74b0\u5883\u3067\u3082\u52d5\u4f5c",
                  ],
                }),
                "\n",
              ],
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
                      href: "/xlkit/docs/installation",
                      children: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
                    }),
                    "\u3067\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u3092\u59cb\u3081\u308b",
                  ],
                }),
                "\n",
                (0, s.jsxs)(t.li, {
                  children: [
                    (0, s.jsx)(t.a, {
                      href: "/xlkit/docs/quick-start",
                      children: "\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
                    }),
                    "\u3067\u57fa\u672c\u7684\u306a\u4f7f\u3044\u65b9\u3092\u5b66\u3076",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function o(e = {}) {
        const { wrapper: t } = { ...(0, r.R)(), ...e.components };
        return t ? (0, s.jsx)(t, { ...e, children: (0, s.jsx)(h, { ...e }) }) : h(e);
      }
    },
  },
]);
