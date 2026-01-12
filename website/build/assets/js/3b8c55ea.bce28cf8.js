(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [803],
  {
    4886(e, n, t) {
      t.r(n),
        t.d(n, {
          assets: () => c,
          contentTitle: () => a,
          default: () => p,
          frontMatter: () => r,
          metadata: () => i,
          toc: () => d,
        });
      const i = JSON.parse(
        '{"id":"installation","title":"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb","description":"xlkit\u306f\u3001npm\u3001pnpm\u3001yarn\u306e\u3044\u305a\u308c\u304b\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002","source":"@site/docs/installation.md","sourceDirName":".","slug":"/installation","permalink":"/xlkit/docs/installation","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/installation.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"\u306f\u3058\u3081\u306b","permalink":"/xlkit/docs/intro"},"next":{"title":"\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8","permalink":"/xlkit/docs/quick-start"}}',
      );
      var s = t(5656),
        l = t(6610);
      const r = { sidebar_position: 2 },
        a = "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
        c = {},
        d = [
          {
            value:
              "\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
            id: "\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
            level: 2,
          },
          { value: "\u52d5\u4f5c\u74b0\u5883", id: "\u52d5\u4f5c\u74b0\u5883", level: 2 },
          { value: "TypeScript", id: "typescript", level: 2 },
          { value: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7", level: 2 },
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
          ...(0, l.R)(),
          ...e.components,
        };
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)(n.header, {
              children: (0, s.jsx)(n.h1, {
                id: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
                children: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
              }),
            }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "xlkit\u306f\u3001npm\u3001pnpm\u3001yarn\u306e\u3044\u305a\u308c\u304b\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
              children:
                "\u30d1\u30c3\u30b1\u30fc\u30b8\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u3067\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "npm install xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "pnpm add xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.pre, {
              children: (0, s.jsx)(n.code, { className: "language-bash", children: "yarn add xlkit\n" }),
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "\u52d5\u4f5c\u74b0\u5883", children: "\u52d5\u4f5c\u74b0\u5883" }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsx)(n.li, { children: "Node.js 18.0\u4ee5\u4e0a" }),
                "\n",
                (0, s.jsx)(n.li, {
                  children:
                    "\u30d6\u30e9\u30a6\u30b6\uff08\u30e2\u30c0\u30f3\u30d6\u30e9\u30a6\u30b6\u3092\u30b5\u30dd\u30fc\u30c8\uff09",
                }),
                "\n",
              ],
            }),
            "\n",
            (0, s.jsx)(n.h2, { id: "typescript", children: "TypeScript" }),
            "\n",
            (0, s.jsx)(n.p, {
              children:
                "xlkit\u306fTypeScript\u3067\u66f8\u304b\u308c\u3066\u304a\u308a\u3001\u578b\u5b9a\u7fa9\u304c\u540c\u68b1\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u8ffd\u52a0\u306e\u578b\u5b9a\u7fa9\u30d1\u30c3\u30b1\u30fc\u30b8\u306f\u4e0d\u8981\u3067\u3059\u3002",
            }),
            "\n",
            (0, s.jsx)(n.h2, {
              id: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
              children: "\u6b21\u306e\u30b9\u30c6\u30c3\u30d7",
            }),
            "\n",
            (0, s.jsxs)(n.ul, {
              children: [
                "\n",
                (0, s.jsxs)(n.li, {
                  children: [
                    (0, s.jsx)(n.a, {
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
      function p(e = {}) {
        const { wrapper: n } = { ...(0, l.R)(), ...e.components };
        return n ? (0, s.jsx)(n, { ...e, children: (0, s.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, n, t) {
      t.d(n, { R: () => r, x: () => a });
      var i = t(7140);
      const s = {},
        l = i.createContext(s);
      function r(e) {
        const n = i.useContext(l);
        return i.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function a(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(s)
              : e.components || s
            : r(e.components)),
          i.createElement(l.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
