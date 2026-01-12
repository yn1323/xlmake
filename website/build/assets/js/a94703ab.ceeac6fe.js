(self.webpackChunkxlkit_website = self.webpackChunkxlkit_website || []).push([
  [48],
  {
    1119(e, t, a) {
      a.r(t), a.d(t, { default: () => Be });
      var n = a(7140),
        i = a(3526),
        s = a(6184),
        r = a(5667),
        l = a(4701),
        o = a(2568),
        c = a(43),
        d = a(716),
        u = a(3458);
      const m = "backToTopButton_NILX",
        b = "backToTopButtonShow_qT1S";
      var h = a(5656);
      function p() {
        var e = ((e) => {
            var t = e.threshold,
              a = (0, n.useState)(!1),
              i = a[0],
              s = a[1],
              r = (0, n.useRef)(!1),
              l = (0, d.gk)(),
              o = l.startScroll,
              c = l.cancelScroll;
            return (
              (0, d.Mq)((e, a) => {
                var n = e.scrollY,
                  i = null == a ? void 0 : a.scrollY;
                i &&
                  (r.current
                    ? (r.current = !1)
                    : n >= i
                      ? (c(), s(!1))
                      : n < t
                        ? s(!1)
                        : n + window.innerHeight < document.documentElement.scrollHeight && s(!0));
              }),
              (0, u.$)((e) => {
                e.location.hash && ((r.current = !0), s(!1));
              }),
              { shown: i, scrollToTop: () => o(0) }
            );
          })({ threshold: 300 }),
          t = e.shown,
          a = e.scrollToTop;
        return (0, h.jsx)("button", {
          "aria-label": (0, c.T)({
            id: "theme.BackToTopButton.buttonAriaLabel",
            message: "Scroll back to top",
            description: "The ARIA label for the back to top button",
          }),
          className: (0, i.A)("clean-btn", r.G.common.backToTopButton, m, t && b),
          type: "button",
          onClick: a,
        });
      }
      var x = a(3081),
        v = a(559),
        f = a(5273),
        j = a(4282),
        g = a(1711);
      function _(e) {
        return (0, h.jsx)(
          "svg",
          Object.assign({ width: "20", height: "20", "aria-hidden": "true" }, e, {
            children: (0, h.jsxs)("g", {
              fill: "#7a7a7a",
              children: [
                (0, h.jsx)("path", {
                  d: "M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0",
                }),
                (0, h.jsx)("path", {
                  d: "M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0",
                }),
              ],
            }),
          }),
        );
      }
      const A = "collapseSidebarButton_lW9Q",
        k = "collapseSidebarButtonIcon_KS_w";
      function C(e) {
        var t = e.onClick;
        return (0, h.jsx)("button", {
          type: "button",
          title: (0, c.T)({
            id: "theme.docs.sidebar.collapseButtonTitle",
            message: "Collapse sidebar",
            description: "The title attribute for collapse button of doc sidebar",
          }),
          "aria-label": (0, c.T)({
            id: "theme.docs.sidebar.collapseButtonAriaLabel",
            message: "Collapse sidebar",
            description: "The title attribute for collapse button of doc sidebar",
          }),
          className: (0, i.A)("button button--secondary button--outline", A),
          onClick: t,
          children: (0, h.jsx)(_, { className: k }),
        });
      }
      var S = a(3557),
        N = a(8915),
        I = a(8919),
        T = Symbol("EmptyContext"),
        y = n.createContext(T);
      function w(e) {
        var t = e.children,
          a = (0, n.useState)(null),
          i = a[0],
          s = a[1],
          r = (0, n.useMemo)(() => ({ expandedItem: i, setExpandedItem: s }), [i]);
        return (0, h.jsx)(y.Provider, { value: r, children: t });
      }
      var L = a(8490),
        B = a(7349),
        E = a(9400),
        M = a(9377),
        H = a(2976),
        O = a(2339);
      const P = "menuExternalLink_SmIs",
        G = "linkLabel_u2Kq";
      var D = ["item", "onItemClick", "activePath", "level", "index"];
      function R(e) {
        var t = e.label;
        return (0, h.jsx)("span", { title: t, className: G, children: t });
      }
      function W(e) {
        var t = e.item,
          a = e.onItemClick,
          n = e.activePath,
          s = e.level,
          o = (e.index, (0, N.A)(e, D)),
          c = t.href,
          d = t.label,
          u = t.className,
          m = t.autoAddBaseUrl,
          b = (0, l.w8)(t, n),
          p = (0, H.A)(c);
        return (0, h.jsx)(
          "li",
          {
            className: (0, i.A)(r.G.docs.docSidebarItemLink, r.G.docs.docSidebarItemLinkLevel(s), "menu__list-item", u),
            children: (0, h.jsxs)(
              E.A,
              Object.assign(
                {
                  className: (0, i.A)("menu__link", !p && P, { "menu__link--active": b }),
                  autoAddBaseUrl: m,
                  "aria-current": b ? "page" : void 0,
                  to: c,
                },
                p && { onClick: a ? () => a(t) : void 0 },
                o,
                { children: [(0, h.jsx)(R, { label: d }), !p && (0, h.jsx)(O.A, {})] },
              ),
            ),
          },
          d,
        );
      }
      const U = "categoryLink_kMxI",
        Y = "categoryLinkLabel_Jmwr";
      var F = ["item"],
        V = ["type", "collapsed", "collapsible", "items", "linkUnlisted"],
        q = ["item", "onItemClick", "activePath", "level", "index"];
      function z(e) {
        var t = e.collapsed,
          a = e.categoryLabel,
          n = e.onClick;
        return (0, h.jsx)("button", {
          "aria-label": t
            ? (0, c.T)(
                {
                  id: "theme.DocSidebarItem.expandCategoryAriaLabel",
                  message: "Expand sidebar category '{label}'",
                  description: "The ARIA label to expand the sidebar category",
                },
                { label: a },
              )
            : (0, c.T)(
                {
                  id: "theme.DocSidebarItem.collapseCategoryAriaLabel",
                  message: "Collapse sidebar category '{label}'",
                  description: "The ARIA label to collapse the sidebar category",
                },
                { label: a },
              ),
          "aria-expanded": !t,
          type: "button",
          className: "clean-btn menu__caret",
          onClick: n,
        });
      }
      function K(e) {
        var t = e.label;
        return (0, h.jsx)("span", { title: t, className: Y, children: t });
      }
      function Z(e) {
        return 0 === (0, l.Y)(e.item.items, e.activePath).length
          ? (0, h.jsx)(J, Object.assign({}, e))
          : (0, h.jsx)(X, Object.assign({}, e));
      }
      function J(e) {
        var t = e.item,
          a = (0, N.A)(e, F);
        if ("string" != typeof t.href) return null;
        t.type, t.collapsed, t.collapsible, t.items, t.linkUnlisted;
        var n = (0, N.A)(t, V),
          i = Object.assign({ type: "link" }, n);
        return (0, h.jsx)(W, Object.assign({ item: i }, a));
      }
      function X(e) {
        var t = e.item,
          a = e.onItemClick,
          s = e.activePath,
          o = e.level,
          c = e.index,
          d = (0, N.A)(e, q),
          u = t.items,
          m = t.label,
          b = t.collapsible,
          p = t.className,
          x = t.href,
          v = (0, j.p)().docs.sidebar.autoCollapseCategories,
          f = ((e) => {
            var t = (0, M.A)();
            return (0, n.useMemo)(
              () => (e.href && !e.linkUnlisted ? e.href : !t && e.collapsible ? (0, l.Nr)(e) : void 0),
              [e, t],
            );
          })(t),
          g = (0, l.w8)(t, s),
          _ = (0, B.ys)(x, s),
          A = (0, L.u)({ initialState: () => !!b && !g && t.collapsed }),
          k = A.collapsed,
          C = A.setCollapsed,
          S = (() => {
            var e = (0, n.useContext)(y);
            if (e === T) throw new I.dV("DocSidebarItemsExpandedStateProvider");
            return e;
          })(),
          w = S.expandedItem,
          H = S.setExpandedItem,
          O = (e) => {
            void 0 === e && (e = !k), H(e ? null : c), C(e);
          };
        !((e) => {
          var t = e.isActive,
            a = e.collapsed,
            i = e.updateCollapsed,
            s = e.activePath,
            r = (0, I.ZC)(t),
            l = (0, I.ZC)(s);
          (0, n.useEffect)(() => {
            ((t && !r) || (t && r && s !== l)) && a && i(!1);
          }, [t, r, a, i, s, l]);
        })({ isActive: g, collapsed: k, updateCollapsed: O, activePath: s }),
          (0, n.useEffect)(() => {
            b && null != w && w !== c && v && C(!0);
          }, [b, w, c, C, v]);
        return (0, h.jsxs)("li", {
          className: (0, i.A)(
            r.G.docs.docSidebarItemCategory,
            r.G.docs.docSidebarItemCategoryLevel(o),
            "menu__list-item",
            { "menu__list-item--collapsed": k },
            p,
          ),
          children: [
            (0, h.jsxs)("div", {
              className: (0, i.A)("menu__list-item-collapsible", { "menu__list-item-collapsible--active": _ }),
              children: [
                (0, h.jsx)(
                  E.A,
                  Object.assign(
                    {
                      className: (0, i.A)(U, "menu__link", {
                        "menu__link--sublist": b,
                        "menu__link--sublist-caret": !x && b,
                        "menu__link--active": g,
                      }),
                      onClick: (e) => {
                        null == a || a(t),
                          b && (x ? (_ ? (e.preventDefault(), O()) : O(!1)) : (e.preventDefault(), O()));
                      },
                      "aria-current": _ ? "page" : void 0,
                      role: b && !x ? "button" : void 0,
                      "aria-expanded": b && !x ? !k : void 0,
                      href: b ? (null != f ? f : "#") : f,
                    },
                    d,
                    { children: (0, h.jsx)(K, { label: m }) },
                  ),
                ),
                x &&
                  b &&
                  (0, h.jsx)(z, {
                    collapsed: k,
                    categoryLabel: m,
                    onClick: (e) => {
                      e.preventDefault(), O();
                    },
                  }),
              ],
            }),
            (0, h.jsx)(L.N, {
              lazy: !0,
              as: "ul",
              className: "menu__list",
              collapsed: k,
              children: (0, h.jsx)(ie, { items: u, tabIndex: k ? -1 : 0, onItemClick: a, activePath: s, level: o + 1 }),
            }),
          ],
        });
      }
      const Q = "menuHtmlItem_J1g8";
      function $(e) {
        var t = e.item,
          a = e.level,
          n = e.index,
          s = t.value,
          l = t.defaultStyle,
          o = t.className;
        return (0, h.jsx)(
          "li",
          {
            className: (0, i.A)(
              r.G.docs.docSidebarItemLink,
              r.G.docs.docSidebarItemLinkLevel(a),
              l && [Q, "menu__list-item"],
              o,
            ),
            dangerouslySetInnerHTML: { __html: s },
          },
          n,
        );
      }
      var ee = ["item"];
      function te(e) {
        var t = e.item,
          a = (0, N.A)(e, ee);
        switch (t.type) {
          case "category":
            return (0, h.jsx)(Z, Object.assign({ item: t }, a));
          case "html":
            return (0, h.jsx)($, Object.assign({ item: t }, a));
          default:
            return (0, h.jsx)(W, Object.assign({ item: t }, a));
        }
      }
      var ae = ["items"];
      function ne(e) {
        var t = e.items,
          a = (0, N.A)(e, ae),
          n = (0, l.Y)(t, a.activePath);
        return (0, h.jsx)(w, { children: n.map((e, t) => (0, h.jsx)(te, Object.assign({ item: e, index: t }, a), t)) });
      }
      const ie = (0, n.memo)(ne),
        se = "menu_Sklw",
        re = "menuWithAnnouncementBar_orhO";
      function le(e) {
        var t = e.path,
          a = e.sidebar,
          s = e.className,
          l = (() => {
            var e = (0, S.M)().isActive,
              t = (0, n.useState)(e),
              a = t[0],
              i = t[1];
            return (
              (0, d.Mq)(
                (t) => {
                  var a = t.scrollY;
                  e && i(0 === a);
                },
                [e],
              ),
              e && a
            );
          })();
        return (0, h.jsx)("nav", {
          "aria-label": (0, c.T)({
            id: "theme.docs.sidebar.navAriaLabel",
            message: "Docs sidebar",
            description: "The ARIA label for the sidebar navigation",
          }),
          className: (0, i.A)("menu thin-scrollbar", se, l && re, s),
          children: (0, h.jsx)("ul", {
            className: (0, i.A)(r.G.docs.docSidebarMenu, "menu__list"),
            children: (0, h.jsx)(ie, { items: a, activePath: t, level: 1 }),
          }),
        });
      }
      const oe = "sidebar_lAmv",
        ce = "sidebarWithHideableNavbar_HdAS",
        de = "sidebarHidden_xghc",
        ue = "sidebarLogo_z5kl";
      function me(e) {
        var t = e.path,
          a = e.sidebar,
          n = e.onCollapse,
          s = e.isHidden,
          r = (0, j.p)(),
          l = r.navbar.hideOnScroll,
          o = r.docs.sidebar.hideable;
        return (0, h.jsxs)("div", {
          className: (0, i.A)(oe, l && ce, s && de),
          children: [
            l && (0, h.jsx)(g.A, { tabIndex: -1, className: ue }),
            (0, h.jsx)(le, { path: t, sidebar: a }),
            o && (0, h.jsx)(C, { onClick: n }),
          ],
        });
      }
      const be = n.memo(me);
      var he = a(9372),
        pe = a(7177),
        xe = (e) => {
          var t = e.sidebar,
            a = e.path,
            n = (0, pe.M)();
          return (0, h.jsx)("ul", {
            className: (0, i.A)(r.G.docs.docSidebarMenu, "menu__list"),
            children: (0, h.jsx)(ie, {
              items: t,
              activePath: a,
              onItemClick: (e) => {
                "category" === e.type && e.href && n.toggle(), "link" === e.type && n.toggle();
              },
              level: 1,
            }),
          });
        };
      function ve(e) {
        return (0, h.jsx)(he.GX, { component: xe, props: e });
      }
      const fe = n.memo(ve);
      function je(e) {
        var t = (0, f.l)(),
          a = "desktop" === t || "ssr" === t,
          n = "mobile" === t;
        return (0, h.jsxs)(h.Fragment, {
          children: [a && (0, h.jsx)(be, Object.assign({}, e)), n && (0, h.jsx)(fe, Object.assign({}, e))],
        });
      }
      const ge = "expandButton_yBxh",
        _e = "expandButtonIcon_KfWD";
      function Ae(e) {
        var t = e.toggleSidebar;
        return (0, h.jsx)("div", {
          className: ge,
          title: (0, c.T)({
            id: "theme.docs.sidebar.expandButtonTitle",
            message: "Expand sidebar",
            description: "The ARIA label and title attribute for expand button of doc sidebar",
          }),
          "aria-label": (0, c.T)({
            id: "theme.docs.sidebar.expandButtonAriaLabel",
            message: "Expand sidebar",
            description: "The ARIA label and title attribute for expand button of doc sidebar",
          }),
          tabIndex: 0,
          role: "button",
          onKeyDown: t,
          onClick: t,
          children: (0, h.jsx)(_, { className: _e }),
        });
      }
      const ke = {
        docSidebarContainer: "docSidebarContainer_ZUxi",
        docSidebarContainerHidden: "docSidebarContainerHidden_b5p8",
        sidebarViewport: "sidebarViewport_qjHb",
      };
      function Ce(e) {
        var t,
          a = e.children,
          i = (0, o.t)();
        return (0, h.jsx)(n.Fragment, { children: a }, null != (t = null == i ? void 0 : i.name) ? t : "noSidebar");
      }
      function Se(e) {
        var t = e.sidebar,
          a = e.hiddenSidebarContainer,
          s = e.setHiddenSidebarContainer,
          l = (0, v.zy)().pathname,
          o = (0, n.useState)(!1),
          c = o[0],
          d = o[1],
          u = (0, n.useCallback)(() => {
            c && d(!1), !c && (0, x.O)() && d(!0), s((e) => !e);
          }, [s, c]);
        return (0, h.jsx)("aside", {
          className: (0, i.A)(r.G.docs.docSidebarContainer, ke.docSidebarContainer, a && ke.docSidebarContainerHidden),
          onTransitionEnd: (e) => {
            e.currentTarget.classList.contains(ke.docSidebarContainer) && a && d(!0);
          },
          children: (0, h.jsx)(Ce, {
            children: (0, h.jsxs)("div", {
              className: (0, i.A)(ke.sidebarViewport, c && ke.sidebarViewportHidden),
              children: [
                (0, h.jsx)(je, { sidebar: t, path: l, onCollapse: u, isHidden: c }),
                c && (0, h.jsx)(Ae, { toggleSidebar: u }),
              ],
            }),
          }),
        });
      }
      const Ne = {
        docMainContainer: "docMainContainer_UY9h",
        docMainContainerEnhanced: "docMainContainerEnhanced_aikj",
        docItemWrapperEnhanced: "docItemWrapperEnhanced_Zam2",
      };
      function Ie(e) {
        var t = e.hiddenSidebarContainer,
          a = e.children,
          n = (0, o.t)();
        return (0, h.jsx)("main", {
          className: (0, i.A)(Ne.docMainContainer, (t || !n) && Ne.docMainContainerEnhanced),
          children: (0, h.jsx)("div", {
            className: (0, i.A)(
              "container padding-top--md padding-bottom--lg",
              Ne.docItemWrapper,
              t && Ne.docItemWrapperEnhanced,
            ),
            children: a,
          }),
        });
      }
      const Te = "docRoot_vIUB",
        ye = "docsWrapper_fYRj";
      function we(e) {
        var t = e.children,
          a = (0, o.t)(),
          i = (0, n.useState)(!1),
          s = i[0],
          r = i[1];
        return (0, h.jsxs)("div", {
          className: ye,
          children: [
            (0, h.jsx)(p, {}),
            (0, h.jsxs)("div", {
              className: Te,
              children: [
                a && (0, h.jsx)(Se, { sidebar: a.items, hiddenSidebarContainer: s, setHiddenSidebarContainer: r }),
                (0, h.jsx)(Ie, { hiddenSidebarContainer: s, children: t }),
              ],
            }),
          ],
        });
      }
      var Le = a(6469);
      function Be(e) {
        var t = (0, l.B5)(e);
        if (!t) return (0, h.jsx)(Le.A, {});
        var a = t.docElement,
          n = t.sidebarName,
          c = t.sidebarItems;
        return (0, h.jsx)(s.e3, {
          className: (0, i.A)(r.G.page.docsDocPage),
          children: (0, h.jsx)(o.V, { name: n, items: c, children: (0, h.jsx)(we, { children: a }) }),
        });
      }
    },
    6469(e, t, a) {
      a.d(t, { A: () => l });
      a(7140);
      var n = a(3526),
        i = a(43),
        s = a(5003),
        r = a(5656);
      function l(e) {
        var t = e.className;
        return (0, r.jsx)("main", {
          className: (0, n.A)("container margin-vert--xl", t),
          children: (0, r.jsx)("div", {
            className: "row",
            children: (0, r.jsxs)("div", {
              className: "col col--6 col--offset-3",
              children: [
                (0, r.jsx)(s.A, {
                  as: "h1",
                  className: "hero__title",
                  children: (0, r.jsx)(i.A, {
                    id: "theme.NotFound.title",
                    description: "The title of the 404 page",
                    children: "Page Not Found",
                  }),
                }),
                (0, r.jsx)("p", {
                  children: (0, r.jsx)(i.A, {
                    id: "theme.NotFound.p1",
                    description: "The first paragraph of the 404 page",
                    children: "We could not find what you were looking for.",
                  }),
                }),
                (0, r.jsx)("p", {
                  children: (0, r.jsx)(i.A, {
                    id: "theme.NotFound.p2",
                    description: "The 2nd paragraph of the 404 page",
                    children:
                      "Please contact the owner of the site that linked you to the original URL and let them know their link is broken.",
                  }),
                }),
              ],
            }),
          }),
        });
      }
    },
  },
]);
