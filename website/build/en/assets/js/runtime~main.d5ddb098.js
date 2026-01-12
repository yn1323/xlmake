(() => {
  var e,
    a,
    t,
    r,
    c,
    o = {},
    n = {};
  function d(e) {
    var a = n[e];
    if (void 0 !== a) return a.exports;
    var t = (n[e] = { id: e, loaded: !1, exports: {} });
    return o[e].call(t.exports, t, t.exports, d), (t.loaded = !0), t.exports;
  }
  (d.m = o),
    (d.c = n),
    (e = []),
    (d.O = (a, t, r, c) => {
      if (!t) {
        var o = 1 / 0;
        for (b = 0; b < e.length; b++) {
          for (var [t, r, c] = e[b], n = !0, f = 0; f < t.length; f++)
            (!1 & c || o >= c) && Object.keys(d.O).every((e) => d.O[e](t[f]))
              ? t.splice(f--, 1)
              : ((n = !1), c < o && (o = c));
          if (n) {
            e.splice(b--, 1);
            var i = r();
            void 0 !== i && (a = i);
          }
        }
        return a;
      }
      c = c || 0;
      for (var b = e.length; b > 0 && e[b - 1][2] > c; b--) e[b] = e[b - 1];
      e[b] = [t, r, c];
    }),
    (d.n = (e) => {
      var a = e && e.__esModule ? () => e.default : () => e;
      return d.d(a, { a: a }), a;
    }),
    (t = Object.getPrototypeOf ? (e) => Object.getPrototypeOf(e) : (e) => e.__proto__),
    (d.t = function (e, r) {
      if ((1 & r && (e = this(e)), 8 & r)) return e;
      if ("object" == typeof e && e) {
        if (4 & r && e.__esModule) return e;
        if (16 & r && "function" == typeof e.then) return e;
      }
      var c = Object.create(null);
      d.r(c);
      var o = {};
      a = a || [null, t({}), t([]), t(t)];
      for (var n = 2 & r && e; ("object" == typeof n || "function" == typeof n) && !~a.indexOf(n); n = t(n))
        Object.getOwnPropertyNames(n).forEach((a) => (o[a] = () => e[a]));
      return (o.default = () => e), d.d(c, o), c;
    }),
    (d.d = (e, a) => {
      for (var t in a) d.o(a, t) && !d.o(e, t) && Object.defineProperty(e, t, { enumerable: !0, get: a[t] });
    }),
    (d.f = {}),
    (d.e = (e) => Promise.all(Object.keys(d.f).reduce((a, t) => (d.f[t](e, a), a), []))),
    (d.u = (e) =>
      "assets/js/" +
      ({
        12: "c1cd0e8c",
        39: "3092c5b2",
        48: "a94703ab",
        98: "a7bd4aaa",
        107: "a9983682",
        115: "5231a473",
        135: "de3d638e",
        198: "1c63ca71",
        233: "004048c3",
        235: "a7456010",
        285: "ef831638",
        299: "2acb2c2c",
        319: "317ec75a",
        401: "17896441",
        407: "ab839bf5",
        423: "7a6040c3",
        636: "6fec6f2e",
        644: "7047e198",
        647: "5e95c892",
        652: "5b44acae",
        668: "3256fe4b",
        674: "6aba4b6e",
        703: "0748aca8",
        720: "d7a932de",
        723: "3aa4a0ca",
        742: "aba21aa0",
        763: "10385272",
        792: "c3225954",
        817: "e530810c",
        891: "50addfbd",
        896: "508ede7a",
        992: "42cc389a",
      }[e] || e) +
      "." +
      {
        12: "84e09a8c",
        39: "64132faf",
        48: "ceeac6fe",
        98: "a46637dd",
        107: "b192f4f7",
        115: "634adb69",
        135: "dc05464b",
        198: "dca0b654",
        233: "62e2f690",
        235: "bb1705c8",
        285: "f968725d",
        299: "47952a37",
        319: "7e65e2a2",
        401: "dc926875",
        407: "ee8d3491",
        423: "fd18240d",
        636: "26858ddf",
        644: "02206d4f",
        647: "884ee979",
        649: "f6a1ffc8",
        652: "8283e5b7",
        668: "9697a7a8",
        674: "73763310",
        703: "2db0c305",
        720: "1a7d6e60",
        723: "7263c8a4",
        742: "6c2d04ab",
        763: "a2dfb2c4",
        792: "50dc9563",
        817: "9bf8ef9b",
        891: "092827c0",
        896: "b461a586",
        992: "bc4d7dfd",
      }[e] +
      ".js"),
    (d.miniCssF = (e) => {}),
    (d.g = (function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
        return this || new Function("return this")();
      } catch (e) {
        if ("object" == typeof window) return window;
      }
    })()),
    (d.o = (e, a) => Object.hasOwn(e, a)),
    (r = {}),
    (c = "xlkit-website:"),
    (d.l = (e, a, t, o) => {
      if (r[e]) r[e].push(a);
      else {
        var n, f;
        if (void 0 !== t)
          for (var i = document.getElementsByTagName("script"), b = 0; b < i.length; b++) {
            var l = i[b];
            if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == c + t) {
              n = l;
              break;
            }
          }
        n ||
          ((f = !0),
          ((n = document.createElement("script")).charset = "utf-8"),
          d.nc && n.setAttribute("nonce", d.nc),
          n.setAttribute("data-webpack", c + t),
          (n.src = e)),
          (r[e] = [a]);
        var u = (a, t) => {
            (n.onerror = n.onload = null), clearTimeout(s);
            var c = r[e];
            if ((delete r[e], n.parentNode && n.parentNode.removeChild(n), c && c.forEach((e) => e(t)), a)) return a(t);
          },
          s = setTimeout(u.bind(null, void 0, { type: "timeout", target: n }), 12e4);
        (n.onerror = u.bind(null, n.onerror)), (n.onload = u.bind(null, n.onload)), f && document.head.appendChild(n);
      }
    }),
    (d.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (d.p = "/xlkit/en/"),
    (d.gca = (e) => (
      (e =
        {
          10385272: "763",
          17896441: "401",
          c1cd0e8c: "12",
          "3092c5b2": "39",
          a94703ab: "48",
          a7bd4aaa: "98",
          a9983682: "107",
          "5231a473": "115",
          de3d638e: "135",
          "1c63ca71": "198",
          "004048c3": "233",
          a7456010: "235",
          ef831638: "285",
          "2acb2c2c": "299",
          "317ec75a": "319",
          ab839bf5: "407",
          "7a6040c3": "423",
          "6fec6f2e": "636",
          "7047e198": "644",
          "5e95c892": "647",
          "5b44acae": "652",
          "3256fe4b": "668",
          "6aba4b6e": "674",
          "0748aca8": "703",
          d7a932de: "720",
          "3aa4a0ca": "723",
          aba21aa0: "742",
          c3225954: "792",
          e530810c: "817",
          "50addfbd": "891",
          "508ede7a": "896",
          "42cc389a": "992",
        }[e] || e),
      d.p + d.u(e)
    )),
    (() => {
      var e = { 354: 0, 869: 0 };
      (d.f.j = (a, t) => {
        var r = d.o(e, a) ? e[a] : void 0;
        if (0 !== r)
          if (r) t.push(r[2]);
          else if (/^(354|869)$/.test(a)) e[a] = 0;
          else {
            var c = new Promise((t, c) => (r = e[a] = [t, c]));
            t.push((r[2] = c));
            var o = d.p + d.u(a),
              n = new Error();
            d.l(
              o,
              (t) => {
                if (d.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                  var c = t && ("load" === t.type ? "missing" : t.type),
                    o = t && t.target && t.target.src;
                  (n.message = "Loading chunk " + a + " failed.\n(" + c + ": " + o + ")"),
                    (n.name = "ChunkLoadError"),
                    (n.type = c),
                    (n.request = o),
                    r[1](n);
                }
              },
              "chunk-" + a,
              a,
            );
          }
      }),
        (d.O.j = (a) => 0 === e[a]);
      var a = (a, t) => {
          var r,
            c,
            [o, n, f] = t,
            i = 0;
          if (o.some((a) => 0 !== e[a])) {
            for (r in n) d.o(n, r) && (d.m[r] = n[r]);
            if (f) var b = f(d);
          }
          for (a && a(t); i < o.length; i++) (c = o[i]), d.o(e, c) && e[c] && e[c][0](), (e[c] = 0);
          return d.O(b);
        },
        t = (self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []);
      t.forEach(a.bind(null, 0)), (t.push = a.bind(null, t.push.bind(t)));
    })();
})();
