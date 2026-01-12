(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [12],
  {
    628(e, n, i) {
      i.r(n),
        i.d(n, {
          assets: () => c,
          contentTitle: () => l,
          default: () => h,
          frontMatter: () => d,
          metadata: () => t,
          toc: () => o,
        });
      const t = JSON.parse(
        '{"id":"api-reference/image","title":".image()","description":"Adds an image.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/api-reference/image.md","sourceDirName":"api-reference","slug":"/api-reference/image","permalink":"/xlkit/en/docs/api-reference/image","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/api-reference/image.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":".text()","permalink":"/xlkit/en/docs/api-reference/text"},"next":{"title":"Style API","permalink":"/xlkit/en/docs/api-reference/styling"}}',
      );
      var r = i(5656),
        s = i(6610);
      const d = { sidebar_position: 6 },
        l = ".image()",
        c = {},
        o = [
          { value: "ImageOptions", id: "imageoptions", level: 2 },
          { value: "source", id: "source", level: 2 },
          { value: "Using Buffer", id: "using-buffer", level: 3 },
          { value: "Using File Path (Node.js only)", id: "using-file-path-nodejs-only", level: 3 },
          { value: "Example", id: "example", level: 2 },
          { value: "Related", id: "related", level: 2 },
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
        return (0, r.jsxs)(r.Fragment, {
          children: [
            (0, r.jsx)(n.header, { children: (0, r.jsx)(n.h1, { id: "image", children: ".image()" }) }),
            "\n",
            (0, r.jsx)(n.p, { children: "Adds an image." }),
            "\n",
            (0, r.jsx)(n.h2, { id: "imageoptions", children: "ImageOptions" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: Buffer | string,  // Buffer or file path\n  width?: number,           // Width (pixels)\n  height?: number,          // Height (pixels)\n  row?: number,             // Row position (0-indexed)\n  col?: number,             // Column position (0-indexed)\n})\n",
              }),
            }),
            "\n",
            (0, r.jsxs)(n.table, {
              children: [
                (0, r.jsx)(n.thead, {
                  children: (0, r.jsxs)(n.tr, {
                    children: [
                      (0, r.jsx)(n.th, { children: "Property" }),
                      (0, r.jsx)(n.th, { children: "Type" }),
                      (0, r.jsx)(n.th, { children: "Description" }),
                    ],
                  }),
                }),
                (0, r.jsxs)(n.tbody, {
                  children: [
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "source" }) }),
                        (0, r.jsxs)(n.td, {
                          children: [
                            (0, r.jsx)(n.code, { children: "Buffer" }),
                            " | ",
                            (0, r.jsx)(n.code, { children: "string" }),
                          ],
                        }),
                        (0, r.jsx)(n.td, { children: "Image data or file path" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "width" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "number" }) }),
                        (0, r.jsx)(n.td, { children: "Image width (pixels)" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "height" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "number" }) }),
                        (0, r.jsx)(n.td, { children: "Image height (pixels)" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "row" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "number" }) }),
                        (0, r.jsx)(n.td, { children: "Row to place (starting from 0)" }),
                      ],
                    }),
                    (0, r.jsxs)(n.tr, {
                      children: [
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "col" }) }),
                        (0, r.jsx)(n.td, { children: (0, r.jsx)(n.code, { children: "number" }) }),
                        (0, r.jsx)(n.td, { children: "Column to place (starting from 0)" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "source", children: "source" }),
            "\n",
            (0, r.jsx)(n.h3, { id: "using-buffer", children: "Using Buffer" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\n.image({\n  source: logoBuffer,\n  width: 150,\n  height: 75,\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h3, { id: "using-file-path-nodejs-only", children: "Using File Path (Node.js only)" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children: '.image({\n  source: "./logo.png",\n  width: 150,\n  height: 75,\n})\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "example", children: "Example" }),
            "\n",
            (0, r.jsx)(n.pre, {
              children: (0, r.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\nconst output = await xlkit()\n  .sheet("Report")\n  .text({ value: "Monthly Report", style: { bold: true, fontSize: 16 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, r.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, r.jsxs)(n.ul, {
              children: [
                "\n",
                (0, r.jsxs)(n.li, {
                  children: [
                    (0, r.jsx)(n.a, { href: "/xlkit/en/docs/guides/images", children: "Images Guide" }),
                    " - Detailed image usage",
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
        return n ? (0, r.jsx)(n, { ...e, children: (0, r.jsx)(a, { ...e }) }) : a(e);
      }
    },
    6610(e, n, i) {
      i.d(n, { R: () => d, x: () => l });
      var t = i(7140);
      const r = {},
        s = t.createContext(r);
      function d(e) {
        const n = t.useContext(s);
        return t.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function l(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(r)
              : e.components || r
            : d(e.components)),
          t.createElement(s.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
