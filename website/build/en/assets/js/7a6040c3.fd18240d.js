(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [423],
  {
    5794(e, t, n) {
      n.r(t), n.d(t, { default: () => y });
      var i = n(9400),
        a = n(240),
        s = n(5003),
        r = n(5451),
        l = n(3526);
      const c = "heroBanner_vlok",
        o = "heroDescription_C1He",
        d = "buttons_McgR",
        h = "features_Rz0x",
        u = "codeExample_Hr61",
        x = "codeBlock_f7Bs";
      var m = n(5656);
      function p() {
        var e = (0, a.A)().siteConfig;
        return (0, m.jsx)("header", {
          className: (0, l.A)("hero hero--primary", c),
          children: (0, m.jsxs)("div", {
            className: "container",
            children: [
              (0, m.jsx)(s.A, { as: "h1", className: "hero__title", children: e.title }),
              (0, m.jsx)("p", { className: "hero__subtitle", children: "Declarative Excel Generation Library" }),
              (0, m.jsx)("p", { className: o, children: "Code that clearly shows the final Excel structure" }),
              (0, m.jsxs)("div", {
                className: d,
                children: [
                  (0, m.jsx)(i.A, {
                    className: "button button--secondary button--lg",
                    to: "/docs/intro",
                    children: "Get Started",
                  }),
                  (0, m.jsx)(i.A, {
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
      var j = [
        {
          title: "Declarative API",
          description: (0, m.jsx)(m.Fragment, {
            children:
              "Write code that clearly shows the final Excel structure. Declarative API over imperative for better code readability.",
          }),
        },
        {
          title: "Full TypeScript Support",
          description: (0, m.jsx)(m.Fragment, {
            children: "Type-safe with IntelliSense support. Designed for great developer experience.",
          }),
        },
        {
          title: "Method Chaining",
          description: (0, m.jsx)(m.Fragment, {
            children:
              "Fluent Excel construction with method chaining. Simple and intuitive API to get started quickly.",
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
            children: [(0, m.jsx)(s.A, { as: "h3", children: t }), (0, m.jsx)("p", { children: n })],
          }),
        });
      }
      function v() {
        return (0, m.jsx)("section", {
          className: h,
          children: (0, m.jsx)("div", {
            className: "container",
            children: (0, m.jsx)("div", {
              className: "row",
              children: j.map((e, t) => (0, m.jsx)(b, Object.assign({}, e), t)),
            }),
          }),
        });
      }
      function g() {
        return (0, m.jsx)("section", {
          className: u,
          children: (0, m.jsxs)("div", {
            className: "container",
            children: [
              (0, m.jsx)(s.A, { as: "h2", className: "text--center margin-bottom--lg", children: "Quick Start" }),
              (0, m.jsx)("div", {
                className: "row",
                children: (0, m.jsx)("div", {
                  className: "col",
                  children: (0, m.jsx)("pre", {
                    className: x,
                    children: (0, m.jsx)("code", {
                      children:
                        'import { xlkit } from "xlkit";\n\nconst salesData = [\n  { name: "Apple", price: 100, quantity: 50 },\n  { name: "Orange", price: 80, quantity: 100 },\n  { name: "Banana", price: 120, quantity: 30 },\n];\n\nconst output = await xlkit()\n  .sheet("Sales")\n  .table({\n    preset: "basic",\n    columns: [\n      { key: "name", label: "Product" },\n      { key: "price", label: "Price" },\n      { key: "quantity", label: "Quantity" },\n    ],\n    data: salesData,\n  })\n  .getNode();\n\nawait output.saveToFile("report.xlsx");',
                    }),
                  }),
                }),
              }),
              (0, m.jsx)("div", {
                className: "text--center margin-top--lg",
                children: (0, m.jsx)(i.A, {
                  className: "button button--primary button--lg",
                  to: "/docs/installation",
                  children: "Install and Get Started",
                }),
              }),
            ],
          }),
        });
      }
      function y() {
        var e = (0, a.A)().siteConfig;
        return (0, m.jsxs)(r.A, {
          title: e.title + " - Declarative Excel Generation Library",
          description: "xlkit - Declarative Excel generation library for TypeScript",
          children: [(0, m.jsx)(p, {}), (0, m.jsxs)("main", { children: [(0, m.jsx)(v, {}), (0, m.jsx)(g, {})] })],
        });
      }
    },
  },
]);
