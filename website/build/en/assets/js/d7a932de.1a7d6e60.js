(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [720],
  {
    5906(e, t, n) {
      n.r(t),
        n.d(t, {
          assets: () => c,
          contentTitle: () => d,
          default: () => x,
          frontMatter: () => r,
          metadata: () => l,
          toc: () => a,
        });
      const l = JSON.parse(
        '{"id":"api-reference/text","title":".text()","description":"Adds text.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/text.md","sourceDirName":"api-reference","slug":"/api-reference/text","permalink":"/xlkit/en/docs/api-reference/text","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/text.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5},"sidebar":"tutorialSidebar","previous":{"title":".table()","permalink":"/xlkit/en/docs/api-reference/table"},"next":{"title":".image()","permalink":"/xlkit/en/docs/api-reference/image"}}',
      );
      var i = n(5656),
        s = n(6610);
      const r = { sidebar_position: 5 },
        d = ".text()",
        c = {},
        a = [
          { value: "Input Formats", id: "input-formats", level: 2 },
          { value: "Simple Text", id: "simple-text", level: 3 },
          { value: "Styled Text", id: "styled-text", level: 3 },
          { value: "TextInput", id: "textinput", level: 2 },
          { value: "Example", id: "example", level: 2 },
          { value: "Style Options", id: "style-options", level: 2 },
          { value: "Related", id: "related", level: 2 },
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
          ...(0, s.R)(),
          ...e.components,
        };
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(t.header, { children: (0, i.jsx)(t.h1, { id: "text", children: ".text()" }) }),
            "\n",
            (0, i.jsx)(t.p, { children: "Adds text." }),
            "\n",
            (0, i.jsx)(t.h2, { id: "input-formats", children: "Input Formats" }),
            "\n",
            (0, i.jsx)(t.h3, { id: "simple-text", children: "Simple Text" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, { className: "language-typescript", children: '.text("Title")\n' }),
            }),
            "\n",
            (0, i.jsx)(t.h3, { id: "styled-text", children: "Styled Text" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.text({\n  value: "Important text",\n  style: { bold: true, fontSize: 14, color: "#FF0000" }\n})\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "textinput", children: "TextInput" }),
            "\n",
            (0, i.jsxs)(t.table, {
              children: [
                (0, i.jsx)(t.thead, {
                  children: (0, i.jsxs)(t.tr, {
                    children: [(0, i.jsx)(t.th, { children: "Format" }), (0, i.jsx)(t.th, { children: "Description" })],
                  }),
                }),
                (0, i.jsxs)(t.tbody, {
                  children: [
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: (0, i.jsx)(t.code, { children: "string" }) }),
                        (0, i.jsx)(t.td, { children: "Plain text" }),
                      ],
                    }),
                    (0, i.jsxs)(t.tr, {
                      children: [
                        (0, i.jsx)(t.td, { children: (0, i.jsx)(t.code, { children: "{ value, style? }" }) }),
                        (0, i.jsx)(t.td, { children: "Styled text" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "example", children: "Example" }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Report")\n  .text({ value: "Sales Report", style: { bold: true, fontSize: 16 } })\n  .text("January 2024")\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .space(1)\n  .text("* Prices exclude tax")\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "style-options", children: "Style Options" }),
            "\n",
            (0, i.jsxs)(t.p, {
              children: [
                (0, i.jsx)(t.code, { children: "style" }),
                " accepts ",
                (0, i.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/styling#cellstyle", children: "CellStyle" }),
                " properties.",
              ],
            }),
            "\n",
            (0, i.jsx)(t.pre, {
              children: (0, i.jsx)(t.code, {
                className: "language-typescript",
                children:
                  '.text({\n  value: "Warning message",\n  style: {\n    bold: true,\n    color: "#FF0000",\n    fontSize: 12,\n  }\n})\n',
              }),
            }),
            "\n",
            (0, i.jsx)(t.h2, { id: "related", children: "Related" }),
            "\n",
            (0, i.jsxs)(t.ul, {
              children: [
                "\n",
                (0, i.jsxs)(t.li, {
                  children: [
                    (0, i.jsx)(t.a, { href: "/xlkit/en/docs/api-reference/styling", children: "Style API" }),
                    " - CellStyle details",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function x(e = {}) {
        const { wrapper: t } = { ...(0, s.R)(), ...e.components };
        return t ? (0, i.jsx)(t, { ...e, children: (0, i.jsx)(o, { ...e }) }) : o(e);
      }
    },
    6610(e, t, n) {
      n.d(t, { R: () => r, x: () => d });
      var l = n(7140);
      const i = {},
        s = l.createContext(i);
      function r(e) {
        const t = l.useContext(s);
        return l.useMemo(() => ("function" == typeof e ? e(t) : { ...t, ...e }), [t, e]);
      }
      function d(e) {
        let t;
        return (
          (t = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(i)
              : e.components || i
            : r(e.components)),
          l.createElement(s.Provider, { value: t }, e.children)
        );
      }
    },
  },
]);
