(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [98],
  {
    8716(e, n, s) {
      s.r(n), s.d(n, { default: () => x });
      s(7140);
      var r = s(6184);
      function t(e, n) {
        return "docs-" + e + "-" + n;
      }
      var i = s(8664),
        o = s(8713),
        a = s(1077),
        c = s(5656);
      function u(e) {
        var n = e.version;
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsx)(a.A, { version: n.version, tag: t(n.pluginId, n.version) }),
            (0, c.jsx)(r.be, {
              children: n.noIndex && (0, c.jsx)("meta", { name: "robots", content: "noindex, nofollow" }),
            }),
          ],
        });
      }
      function l(e) {
        var n = e.version,
          s = e.route;
        return (0, c.jsx)(r.e3, {
          className: n.className,
          children: (0, c.jsx)(i.n, { version: n, children: (0, o.v)(s.routes) }),
        });
      }
      function x(e) {
        return (0, c.jsxs)(c.Fragment, {
          children: [(0, c.jsx)(u, Object.assign({}, e)), (0, c.jsx)(l, Object.assign({}, e))],
        });
      }
    },
  },
]);
