(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [135],
  {
    4761(e, n, i) {
      i.r(n),
        i.d(n, {
          assets: () => r,
          contentTitle: () => o,
          default: () => h,
          frontMatter: () => l,
          metadata: () => s,
          toc: () => c,
        });
      const s = JSON.parse(
        '{"id":"guides/images","title":"Images","description":"Learn how to insert images into Excel with xlkit.","source":"@site/i18n/en/docusaurus-plugin-content-docs/current/guides/images.md","sourceDirName":"guides","slug":"/guides/images","permalink":"/xlkit/en/docs/guides/images","draft":false,"unlisted":false,"editUrl":"https://github.com/yn1323/xlkit/tree/main/website/docs/guides/images.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Multiple Sheets","permalink":"/xlkit/en/docs/guides/multi-sheet"},"next":{"title":"Reading API","permalink":"/xlkit/en/docs/guides/reading"}}',
      );
      var t = i(5656),
        a = i(6610);
      const l = { sidebar_position: 4 },
        o = "Images",
        r = {},
        c = [
          { value: "Basic Usage", id: "basic-usage", level: 2 },
          { value: "ImageOptions", id: "imageoptions", level: 2 },
          { value: "Specifying source", id: "specifying-source", level: 2 },
          { value: "Using Buffer (Recommended)", id: "using-buffer-recommended", level: 3 },
          { value: "Using File Path (Node.js only)", id: "using-file-path-nodejs-only", level: 3 },
          { value: "Specifying Size", id: "specifying-size", level: 2 },
          { value: "Specifying Position", id: "specifying-position", level: 2 },
          { value: "Combining with Text and Tables", id: "combining-with-text-and-tables", level: 2 },
          { value: "Complete Example", id: "complete-example", level: 2 },
          { value: "Related", id: "related", level: 2 },
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
          ...(0, a.R)(),
          ...e.components,
        };
        return (0, t.jsxs)(t.Fragment, {
          children: [
            (0, t.jsx)(n.header, { children: (0, t.jsx)(n.h1, { id: "images", children: "Images" }) }),
            "\n",
            (0, t.jsx)(n.p, { children: "Learn how to insert images into Excel with xlkit." }),
            "\n",
            (0, t.jsx)(n.h2, { id: "basic-usage", children: "Basic Usage" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\nimport { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./logo.png");\n\nconst output = await xlkit()\n  .sheet("Report")\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "imageoptions", children: "ImageOptions" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: Buffer | string,  // Image data or file path\n  width?: number,           // Width (pixels)\n  height?: number,          // Height (pixels)\n  row?: number,             // Row position (0-indexed)\n  col?: number,             // Column position (0-indexed)\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "specifying-source", children: "Specifying source" }),
            "\n",
            (0, t.jsx)(n.h3, { id: "using-buffer-recommended", children: "Using Buffer (Recommended)" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { readFileSync } from "fs";\n\nconst imageBuffer = readFileSync("./image.png");\n\n.image({\n  source: imageBuffer,\n  width: 200,\n  height: 100,\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h3, { id: "using-file-path-nodejs-only", children: "Using File Path (Node.js only)" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children: '.image({\n  source: "./image.png",\n  width: 200,\n  height: 100,\n})\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "specifying-size", children: "Specifying Size" }),
            "\n",
            (0, t.jsx)(n.p, { children: "Image size is specified in pixels." }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: imageBuffer,\n  width: 300,   // 300 pixels wide\n  height: 150,  // 150 pixels tall\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "specifying-position", children: "Specifying Position" }),
            "\n",
            (0, t.jsxs)(n.p, {
              children: [
                "Use ",
                (0, t.jsx)(n.code, { children: "row" }),
                " and ",
                (0, t.jsx)(n.code, { children: "col" }),
                " to specify placement position (starting from 0).",
              ],
            }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  ".image({\n  source: imageBuffer,\n  width: 200,\n  height: 100,\n  row: 5,   // Row 6\n  col: 2,   // Column C\n})\n",
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "combining-with-text-and-tables", children: "Combining with Text and Tables" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'const output = await xlkit()\n  .sheet("Report")\n  .text({ value: "Monthly Report", style: { bold: true, fontSize: 16 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 150,\n    height: 75,\n  })\n  .space(2)\n  .table({\n    preset: "basic",\n    columns: [...],\n    data: [...],\n  })\n  .getNode();\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "complete-example", children: "Complete Example" }),
            "\n",
            (0, t.jsx)(n.pre, {
              children: (0, t.jsx)(n.code, {
                className: "language-typescript",
                children:
                  'import { xlkit } from "xlkit";\nimport { readFileSync } from "fs";\n\nconst logoBuffer = readFileSync("./company-logo.png");\nconst chartBuffer = readFileSync("./sales-chart.png");\n\nconst output = await xlkit()\n  .sheet("Report")\n  // Header section\n  .text({ value: "Sample Corporation", style: { bold: true, fontSize: 18 } })\n  .space(1)\n  .image({\n    source: logoBuffer,\n    width: 120,\n    height: 60,\n  })\n  .space(2)\n  // Data table\n  .text({ value: "Sales Data", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "month", label: "Month" },\n      { key: "sales", label: "Sales" },\n    ],\n    data: [\n      { month: "January", sales: 1000000 },\n      { month: "February", sales: 1200000 },\n      { month: "March", sales: 1100000 },\n    ],\n  })\n  .space(2)\n  // Chart image\n  .text({ value: "Sales Trend Chart", style: { bold: true, fontSize: 14 } })\n  .space(1)\n  .image({\n    source: chartBuffer,\n    width: 400,\n    height: 250,\n  })\n  .getNode();\n\nawait output.saveToFile("report-with-images.xlsx");\n',
              }),
            }),
            "\n",
            (0, t.jsx)(n.h2, { id: "related", children: "Related" }),
            "\n",
            (0, t.jsxs)(n.ul, {
              children: [
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/en/docs/api-reference/image", children: ".image() API" }),
                    " - Image API details",
                  ],
                }),
                "\n",
                (0, t.jsxs)(n.li, {
                  children: [
                    (0, t.jsx)(n.a, { href: "/xlkit/en/docs/guides/basic-usage", children: "Basic Usage" }),
                    " - xlkit basics",
                  ],
                }),
                "\n",
              ],
            }),
          ],
        });
      }
      function h(e = {}) {
        const { wrapper: n } = { ...(0, a.R)(), ...e.components };
        return n ? (0, t.jsx)(n, { ...e, children: (0, t.jsx)(d, { ...e }) }) : d(e);
      }
    },
    6610(e, n, i) {
      i.d(n, { R: () => l, x: () => o });
      var s = i(7140);
      const t = {},
        a = s.createContext(t);
      function l(e) {
        const n = s.useContext(a);
        return s.useMemo(() => ("function" == typeof e ? e(n) : { ...n, ...e }), [n, e]);
      }
      function o(e) {
        let n;
        return (
          (n = e.disableParentContext
            ? "function" == typeof e.components
              ? e.components(t)
              : e.components || t
            : l(e.components)),
          s.createElement(a.Provider, { value: n }, e.children)
        );
      }
    },
  },
]);
