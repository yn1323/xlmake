(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [634],
  {
    3917(e, t, n) {
      n.r(t), n.d(t, { default: () => v });
      var s = n(9400),
        i = n(240),
        a = n(5003),
        c = n(5451),
        l = n(3526);
      const r = "heroBanner_qdFl",
        o = "heroDescription_UJGW",
        d = "buttons_AeoN",
        x = "features_cAfv",
        h = "codeExample_BekQ",
        u = "codeBlock_NVHr";
      var m = n(5656);
      function j() {
        var e = (0, i.A)().siteConfig;
        return (0, m.jsx)("header", {
          className: (0, l.A)("hero hero--primary", r),
          children: (0, m.jsxs)("div", {
            className: "container",
            children: [
              (0, m.jsx)(a.A, { as: "h1", className: "hero__title", children: e.title }),
              (0, m.jsx)("p", { className: "hero__subtitle", children: e.tagline }),
              (0, m.jsx)("p", {
                className: o,
                children:
                  "\u30b3\u30fc\u30c9\u3092\u898b\u308c\u3070\u6700\u7d42\u7684\u306aExcel\u306e\u69cb\u9020\u304c\u308f\u304b\u308b",
              }),
              (0, m.jsxs)("div", {
                className: d,
                children: [
                  (0, m.jsx)(s.A, {
                    className: "button button--secondary button--lg",
                    to: "/docs/intro",
                    children: "Get Started",
                  }),
                  (0, m.jsx)(s.A, {
                    className: "button button--outline button--secondary button--lg",
                    to: "https://github.com/yn1323/xlkit",
                    children: "GitHub",
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var p = [
        {
          title: "\u5ba3\u8a00\u7684API",
          description: (0, m.jsx)(m.Fragment, {
            children:
              "\u6700\u7d42\u7684\u306aExcel\u306e\u69cb\u9020\u304c\u308f\u304b\u308a\u3084\u3059\u3044\u5f62\u3067\u66f8\u3051\u307e\u3059\u3002 \u547d\u4ee4\u7684\u306aAPI\u3067\u306f\u306a\u304f\u3001\u5ba3\u8a00\u7684\u306aAPI\u3067\u30b3\u30fc\u30c9\u306e\u898b\u901a\u3057\u304c\u826f\u304f\u306a\u308a\u307e\u3059\u3002",
          }),
        },
        {
          title: "TypeScript\u5b8c\u5168\u5bfe\u5fdc",
          description: (0, m.jsx)(m.Fragment, {
            children:
              "\u578b\u88dc\u5b8c\u304c\u52b9\u3044\u3066\u66f8\u304d\u3084\u3059\u304f\u3001\u578b\u5b89\u5168\u306a\u30b3\u30fc\u30c9\u3092\u66f8\u3051\u307e\u3059\u3002 \u958b\u767a\u4f53\u9a13\u3092\u91cd\u8996\u3057\u305f\u8a2d\u8a08\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002",
          }),
        },
        {
          title: "\u30e1\u30bd\u30c3\u30c9\u30c1\u30a7\u30fc\u30f3\u578b",
          description: (0, m.jsx)(m.Fragment, {
            children:
              "\u6d41\u308c\u308b\u3088\u3046\u306bExcel\u3092\u69cb\u7bc9\u3067\u304d\u307e\u3059\u3002 \u30b7\u30f3\u30d7\u30eb\u3067\u76f4\u611f\u7684\u306aAPI\u3067\u3001\u3059\u3050\u306b\u4f7f\u3044\u59cb\u3081\u3089\u308c\u307e\u3059\u3002",
          }),
        },
      ];
      function b(e) {
        var t = e.title,
          n = e.description;
        return (0, m.jsx)("div", {
          className: (0, l.A)("col col--4"),
          children: (0, m.jsxs)("div", {
            className: "text--center padding-horiz--md",
            children: [(0, m.jsx)(a.A, { as: "h3", children: t }), (0, m.jsx)("p", { children: n })],
          }),
        });
      }
      function N() {
        return (0, m.jsx)("section", {
          className: x,
          children: (0, m.jsx)("div", {
            className: "container",
            children: (0, m.jsx)("div", {
              className: "row",
              children: p.map((e, t) => (0, m.jsx)(b, Object.assign({}, e), t)),
            }),
          }),
        });
      }
      function g() {
        return (0, m.jsx)("section", {
          className: h,
          children: (0, m.jsxs)("div", {
            className: "container",
            children: [
              (0, m.jsx)(a.A, {
                as: "h2",
                className: "text--center margin-bottom--lg",
                children: "\u30af\u30a4\u30c3\u30af\u30b9\u30bf\u30fc\u30c8",
              }),
              (0, m.jsx)("div", {
                className: "row",
                children: (0, m.jsx)("div", {
                  className: "col",
                  children: (0, m.jsx)("pre", {
                    className: u,
                    children: (0, m.jsx)("code", {
                      children:
                        'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "\u308a\u3093\u3054", price: 100, quantity: 50 },\n  { name: "\u307f\u304b\u3093", price: 80, quantity: 100 },\n  { name: "\u30d0\u30ca\u30ca", price: 120, quantity: 30 },\n];\n\nconst output = await xlkit()\n  .sheet("\u58f2\u4e0a")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "\u5546\u54c1\u540d" },\n      { key: "price", label: "\u4fa1\u683c" },\n      { key: "quantity", label: "\u6570\u91cf" },\n    ],\n    data: salesData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");',
                    }),
                  }),
                }),
              }),
              (0, m.jsx)("div", {
                className: "text--center margin-top--lg",
                children: (0, m.jsx)(s.A, {
                  className: "button button--primary button--lg",
                  to: "/docs/installation",
                  children: "\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3066\u59cb\u3081\u308b",
                }),
              }),
            ],
          }),
        });
      }
      function v() {
        var e = (0, i.A)().siteConfig;
        return (0, m.jsxs)(c.A, {
          title: e.title + " - " + e.tagline,
          description: "xlkit - \u5ba3\u8a00\u7684\u306aExcel\u751f\u6210\u30e9\u30a4\u30d6\u30e9\u30ea",
          children: [(0, m.jsx)(j, {}), (0, m.jsxs)("main", { children: [(0, m.jsx)(N, {}), (0, m.jsx)(g, {})] })],
        });
      }
    },
  },
]);
