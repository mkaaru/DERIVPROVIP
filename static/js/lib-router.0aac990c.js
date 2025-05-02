/*! For license information please see lib-router.0aac990c.js.LICENSE.txt */
"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["118"],
  {
    12599: function (e, t, r) {
      var n, a, o, i;
      function l() {
        return (l = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      r.d(t, {
        Ep: () => p,
        J0: () => c,
        LX: () => x,
        OF: () => j,
        RQ: () => P,
        WK: () => _,
        X3: () => M,
        Zn: () => R,
        aU: () => n,
        cP: () => m,
        cm: () => C,
        fp: () => g,
        lX: () => u,
        p7: () => V,
        pC: () => L,
        qp: () => I,
      }),
        ((o = n || (n = {})).Pop = "POP"),
        (o.Push = "PUSH"),
        (o.Replace = "REPLACE");
      let s = "popstate";
      function u(e) {
        return (
          void 0 === e && (e = {}),
          (function (e, t, r, a) {
            void 0 === a && (a = {});
            let { window: o = document.defaultView, v5Compat: i = !1 } = a,
              u = o.history,
              d = n.Pop,
              m = null,
              v = y();
            function y() {
              return (u.state || { idx: null }).idx;
            }
            function g() {
              d = n.Pop;
              let e = y(),
                t = null == e ? null : e - v;
              (v = e), m && m({ action: d, location: b.location, delta: t });
            }
            function w(e) {
              let t =
                  "null" !== o.location.origin
                    ? o.location.origin
                    : o.location.href,
                r = "string" == typeof e ? e : p(e);
              return (
                c(
                  t,
                  "No window.location.(origin|href) available to create URL for href: " +
                    (r = r.replace(/ $/, "%20"))
                ),
                new URL(r, t)
              );
            }
            null == v &&
              ((v = 0), u.replaceState(l({}, u.state, { idx: v }), ""));
            let b = {
              get action() {
                return d;
              },
              get location() {
                return e(o, u);
              },
              listen(e) {
                if (m)
                  throw Error("A history only accepts one active listener");
                return (
                  o.addEventListener(s, g),
                  (m = e),
                  () => {
                    o.removeEventListener(s, g), (m = null);
                  }
                );
              },
              createHref: (e) => t(o, e),
              createURL: w,
              encodeLocation(e) {
                let t = w(e);
                return { pathname: t.pathname, search: t.search, hash: t.hash };
              },
              push: function (e, t) {
                d = n.Push;
                let r = f(b.location, e, t),
                  a = h(r, (v = y() + 1)),
                  l = b.createHref(r);
                try {
                  u.pushState(a, "", l);
                } catch (e) {
                  if (e instanceof DOMException && "DataCloneError" === e.name)
                    throw e;
                  o.location.assign(l);
                }
                i && m && m({ action: d, location: b.location, delta: 1 });
              },
              replace: function (e, t) {
                d = n.Replace;
                let a = f(b.location, e, t);
                r && r(a, e);
                let o = h(a, (v = y())),
                  l = b.createHref(a);
                u.replaceState(o, "", l),
                  i && m && m({ action: d, location: b.location, delta: 0 });
              },
              go: (e) => u.go(e),
            };
            return b;
          })(
            function (e, t) {
              let { pathname: r, search: n, hash: a } = e.location;
              return f(
                "",
                { pathname: r, search: n, hash: a },
                (t.state && t.state.usr) || null,
                (t.state && t.state.key) || "default"
              );
            },
            function (e, t) {
              return "string" == typeof t ? t : p(t);
            },
            null,
            e
          )
        );
      }
      function c(e, t) {
        if (!1 === e || null == e) throw Error(t);
      }
      function d(e, t) {
        if (!e) {
          "undefined" != typeof console && console.warn(t);
          try {
            throw Error(t);
          } catch (e) {}
        }
      }
      function h(e, t) {
        return { usr: e.state, key: e.key, idx: t };
      }
      function f(e, t, r, n) {
        return (
          void 0 === r && (r = null),
          l(
            {
              pathname: "string" == typeof e ? e : e.pathname,
              search: "",
              hash: "",
            },
            "string" == typeof t ? m(t) : t,
            {
              state: r,
              key: (t && t.key) || n || Math.random().toString(36).substr(2, 8),
            }
          )
        );
      }
      function p(e) {
        let { pathname: t = "/", search: r = "", hash: n = "" } = e;
        return (
          r && "?" !== r && (t += "?" === r.charAt(0) ? r : "?" + r),
          n && "#" !== n && (t += "#" === n.charAt(0) ? n : "#" + n),
          t
        );
      }
      function m(e) {
        let t = {};
        if (e) {
          let r = e.indexOf("#");
          r >= 0 && ((t.hash = e.substr(r)), (e = e.substr(0, r)));
          let n = e.indexOf("?");
          n >= 0 && ((t.search = e.substr(n)), (e = e.substr(0, n))),
            e && (t.pathname = e);
        }
        return t;
      }
      ((i = a || (a = {})).data = "data"),
        (i.deferred = "deferred"),
        (i.redirect = "redirect"),
        (i.error = "error");
      let v = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children",
      ]);
      function y(e, t, r, n) {
        return (
          void 0 === r && (r = []),
          void 0 === n && (n = {}),
          e.map((e, a) => {
            let o = [...r, String(a)],
              i = "string" == typeof e.id ? e.id : o.join("-");
            if (
              (c(
                !0 !== e.index || !e.children,
                "Cannot specify children on an index route"
              ),
              c(
                !n[i],
                'Found a route id collision on id "' +
                  i +
                  "\".  Route id's must be globally unique within Data Router usages"
              ),
              !0 === e.index)
            ) {
              let r = l({}, e, t(e), { id: i });
              return (n[i] = r), r;
            }
            {
              let r = l({}, e, t(e), { id: i, children: void 0 });
              return (
                (n[i] = r),
                e.children && (r.children = y(e.children, t, o, n)),
                r
              );
            }
          })
        );
      }
      function g(e, t, r) {
        return void 0 === r && (r = "/"), w(e, t, r, !1);
      }
      function w(e, t, r, n) {
        let a = R(("string" == typeof t ? m(t) : t).pathname || "/", r);
        if (null == a) return null;
        let o = (function e(t, r, n, a) {
          void 0 === r && (r = []),
            void 0 === n && (n = []),
            void 0 === a && (a = "");
          let o = (t, o, i) => {
            let l = {
              relativePath: void 0 === i ? t.path || "" : i,
              caseSensitive: !0 === t.caseSensitive,
              childrenIndex: o,
              route: t,
            };
            l.relativePath.startsWith("/") &&
              (c(
                l.relativePath.startsWith(a),
                'Absolute route path "' +
                  l.relativePath +
                  '" nested under path "' +
                  a +
                  '" is not valid. An absolute child route path must start with the combined path of all its parent routes.'
              ),
              (l.relativePath = l.relativePath.slice(a.length)));
            let s = P([a, l.relativePath]),
              u = n.concat(l);
            if (
              (t.children &&
                t.children.length > 0 &&
                (c(
                  !0 !== t.index,
                  'Index routes must not have child routes. Please remove all child routes from route path "' +
                    s +
                    '".'
                ),
                e(t.children, r, u, s)),
              null != t.path || t.index)
            ) {
              var d, h;
              let e, n;
              r.push({
                path: s,
                score:
                  ((d = s),
                  (h = t.index),
                  (n = (e = d.split("/")).length),
                  e.some(E) && (n += -2),
                  h && (n += 2),
                  e
                    .filter((e) => !E(e))
                    .reduce(
                      (e, t) => e + (b.test(t) ? 3 : "" === t ? 1 : 10),
                      n
                    )),
                routesMeta: u,
              });
            }
          };
          return (
            t.forEach((e, t) => {
              var r;
              if ("" !== e.path && null != (r = e.path) && r.includes("?"))
                for (let r of (function e(t) {
                  let r = t.split("/");
                  if (0 === r.length) return [];
                  let [n, ...a] = r,
                    o = n.endsWith("?"),
                    i = n.replace(/\?$/, "");
                  if (0 === a.length) return o ? [i, ""] : [i];
                  let l = e(a.join("/")),
                    s = [];
                  return (
                    s.push(...l.map((e) => ("" === e ? i : [i, e].join("/")))),
                    o && s.push(...l),
                    s.map((e) => (t.startsWith("/") && "" === e ? "/" : e))
                  );
                })(e.path))
                  o(e, t, r);
              else o(e, t);
            }),
            r
          );
        })(e);
        !(function (e) {
          e.sort((e, t) => {
            var r, n;
            return e.score !== t.score
              ? t.score - e.score
              : ((r = e.routesMeta.map((e) => e.childrenIndex)),
                (n = t.routesMeta.map((e) => e.childrenIndex)),
                r.length === n.length &&
                r.slice(0, -1).every((e, t) => e === n[t])
                  ? r[r.length - 1] - n[n.length - 1]
                  : 0);
          });
        })(o);
        let i = null;
        for (let e = 0; null == i && e < o.length; ++e) {
          let t = (function (e) {
            try {
              return e
                .split("/")
                .map((e) => decodeURIComponent(e).replace(/\//g, "%2F"))
                .join("/");
            } catch (t) {
              return (
                d(
                  !1,
                  'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (' +
                    t +
                    ")."
                ),
                e
              );
            }
          })(a);
          i = (function (e, t, r) {
            void 0 === r && (r = !1);
            let { routesMeta: n } = e,
              a = {},
              o = "/",
              i = [];
            for (let e = 0; e < n.length; ++e) {
              let l = n[e],
                s = e === n.length - 1,
                u = "/" === o ? t : t.slice(o.length) || "/",
                c = x(
                  {
                    path: l.relativePath,
                    caseSensitive: l.caseSensitive,
                    end: s,
                  },
                  u
                ),
                d = l.route;
              if (
                (!c &&
                  s &&
                  r &&
                  !n[n.length - 1].route.index &&
                  (c = x(
                    {
                      path: l.relativePath,
                      caseSensitive: l.caseSensitive,
                      end: !1,
                    },
                    u
                  )),
                !c)
              )
                return null;
              Object.assign(a, c.params),
                i.push({
                  params: a,
                  pathname: P([o, c.pathname]),
                  pathnameBase: k(P([o, c.pathnameBase])),
                  route: d,
                }),
                "/" !== c.pathnameBase && (o = P([o, c.pathnameBase]));
            }
            return i;
          })(o[e], t, n);
        }
        return i;
      }
      let b = /^:[\w-]+$/,
        E = (e) => "*" === e;
      function x(e, t) {
        var r, n, a;
        let o, i;
        "string" == typeof e && (e = { path: e, caseSensitive: !1, end: !0 });
        let [l, s] =
            ((r = e.path),
            (n = e.caseSensitive),
            (a = e.end),
            void 0 === n && (n = !1),
            void 0 === a && (a = !0),
            d(
              "*" === r || !r.endsWith("*") || r.endsWith("/*"),
              'Route path "' +
                r +
                '" will be treated as if it were "' +
                r.replace(/\*$/, "/*") +
                '" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "' +
                r.replace(/\*$/, "/*") +
                '".'
            ),
            (o = []),
            (i =
              "^" +
              r
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                  /\/:([\w-]+)(\?)?/g,
                  (e, t, r) => (
                    o.push({ paramName: t, isOptional: null != r }),
                    r ? "/?([^\\/]+)?" : "/([^\\/]+)"
                  )
                )),
            r.endsWith("*")
              ? (o.push({ paramName: "*" }),
                (i += "*" === r || "/*" === r ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
              : a
              ? (i += "\\/*$")
              : "" !== r && "/" !== r && (i += "(?:(?=\\/|$))"),
            [new RegExp(i, n ? void 0 : "i"), o]),
          u = t.match(l);
        if (!u) return null;
        let c = u[0],
          h = c.replace(/(.)\/+$/, "$1"),
          f = u.slice(1);
        return {
          params: s.reduce((e, t, r) => {
            let { paramName: n, isOptional: a } = t;
            if ("*" === n) {
              let e = f[r] || "";
              h = c.slice(0, c.length - e.length).replace(/(.)\/+$/, "$1");
            }
            let o = f[r];
            return (
              a && !o
                ? (e[n] = void 0)
                : (e[n] = (o || "").replace(/%2F/g, "/")),
              e
            );
          }, {}),
          pathname: c,
          pathnameBase: h,
          pattern: e,
        };
      }
      function R(e, t) {
        if ("/" === t) return e;
        if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
        let r = t.endsWith("/") ? t.length - 1 : t.length,
          n = e.charAt(r);
        return n && "/" !== n ? null : e.slice(r) || "/";
      }
      function S(e, t, r, n) {
        return (
          "Cannot include a '" +
          e +
          "' character in a manually specified " +
          ("`to." + t + "` field [") +
          JSON.stringify(n) +
          "].  Please separate it out to the `to." +
          r +
          '` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'
        );
      }
      function D(e) {
        return e.filter(
          (e, t) => 0 === t || (e.route.path && e.route.path.length > 0)
        );
      }
      function C(e, t) {
        let r = D(e);
        return t
          ? r.map((e, t) => (t === r.length - 1 ? e.pathname : e.pathnameBase))
          : r.map((e) => e.pathnameBase);
      }
      function L(e, t, r, n) {
        let a, o;
        void 0 === n && (n = !1),
          "string" == typeof e
            ? (a = m(e))
            : (c(
                !(a = l({}, e)).pathname || !a.pathname.includes("?"),
                S("?", "pathname", "search", a)
              ),
              c(
                !a.pathname || !a.pathname.includes("#"),
                S("#", "pathname", "hash", a)
              ),
              c(
                !a.search || !a.search.includes("#"),
                S("#", "search", "hash", a)
              ));
        let i = "" === e || "" === a.pathname,
          s = i ? "/" : a.pathname;
        if (null == s) o = r;
        else {
          let e = t.length - 1;
          if (!n && s.startsWith("..")) {
            let t = s.split("/");
            for (; ".." === t[0]; ) t.shift(), (e -= 1);
            a.pathname = t.join("/");
          }
          o = e >= 0 ? t[e] : "/";
        }
        let u = (function (e, t) {
            var r;
            let n;
            void 0 === t && (t = "/");
            let {
              pathname: a,
              search: o = "",
              hash: i = "",
            } = "string" == typeof e ? m(e) : e;
            return {
              pathname: a
                ? a.startsWith("/")
                  ? a
                  : ((r = a),
                    (n = t.replace(/\/+$/, "").split("/")),
                    r.split("/").forEach((e) => {
                      ".." === e
                        ? n.length > 1 && n.pop()
                        : "." !== e && n.push(e);
                    }),
                    n.length > 1 ? n.join("/") : "/")
                : t,
              search: T(o),
              hash: U(i),
            };
          })(a, o),
          d = s && "/" !== s && s.endsWith("/"),
          h = (i || "." === s) && r.endsWith("/");
        return !u.pathname.endsWith("/") && (d || h) && (u.pathname += "/"), u;
      }
      let P = (e) => e.join("/").replace(/\/\/+/g, "/"),
        k = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
        T = (e) => (e && "?" !== e ? (e.startsWith("?") ? e : "?" + e) : ""),
        U = (e) => (e && "#" !== e ? (e.startsWith("#") ? e : "#" + e) : "");
      class M extends Error {}
      class j {
        constructor(e, t, r, n) {
          void 0 === n && (n = !1),
            (this.status = e),
            (this.statusText = t || ""),
            (this.internal = n),
            r instanceof Error
              ? ((this.data = r.toString()), (this.error = r))
              : (this.data = r);
        }
      }
      function _(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "boolean" == typeof e.internal &&
          "data" in e
        );
      }
      let O = ["post", "put", "patch", "delete"],
        A = new Set(O),
        F = new Set(["get", ...O]),
        B = new Set([301, 302, 303, 307, 308]),
        z = new Set([307, 308]),
        N = {
          state: "idle",
          location: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        H = {
          state: "idle",
          data: void 0,
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
        },
        I = {
          state: "unblocked",
          proceed: void 0,
          reset: void 0,
          location: void 0,
        },
        W = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        J = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
        $ = "remix-router-transitions";
      function V(e) {
        let t, r, o, i, s, u;
        let h = e.window
            ? e.window
            : "undefined" != typeof window
            ? window
            : void 0,
          p =
            void 0 !== h &&
            void 0 !== h.document &&
            void 0 !== h.document.createElement,
          m = !p;
        if (
          (c(
            e.routes.length > 0,
            "You must provide a non-empty routes array to createRouter"
          ),
          e.mapRouteProperties)
        )
          t = e.mapRouteProperties;
        else if (e.detectErrorBoundary) {
          let r = e.detectErrorBoundary;
          t = (e) => ({ hasErrorBoundary: r(e) });
        } else t = J;
        let v = {},
          b = y(e.routes, t, void 0, v),
          E = e.basename || "/",
          x = e.dataStrategy || er,
          S = e.patchRoutesOnNavigation,
          D = l(
            {
              v7_fetcherPersist: !1,
              v7_normalizeFormMethod: !1,
              v7_partialHydration: !1,
              v7_prependBasename: !1,
              v7_relativeSplatPath: !1,
              v7_skipActionErrorRevalidation: !1,
            },
            e.future
          ),
          C = null,
          L = new Set(),
          P = null,
          k = null,
          T = null,
          U = null != e.hydrationData,
          M = g(b, e.history.location, E),
          j = null;
        if (null == M && !S) {
          let t = em(404, { pathname: e.history.location.pathname }),
            { matches: r, route: n } = ep(b);
          (M = r), (j = { [n.id]: t });
        }
        if (
          (M &&
            !e.hydrationData &&
            tn(M, b, e.history.location.pathname).active &&
            (M = null),
          M)
        ) {
          if (M.some((e) => e.route.lazy)) o = !1;
          else if (M.some((e) => e.route.loader)) {
            if (D.v7_partialHydration) {
              let t = e.hydrationData ? e.hydrationData.loaderData : null,
                r = e.hydrationData ? e.hydrationData.errors : null;
              if (r) {
                let e = M.findIndex((e) => void 0 !== r[e.route.id]);
                o = M.slice(0, e + 1).every((e) => !Q(e.route, t, r));
              } else o = M.every((e) => !Q(e.route, t, r));
            } else o = null != e.hydrationData;
          } else o = !0;
        } else if (((o = !1), (M = []), D.v7_partialHydration)) {
          let t = tn(null, b, e.history.location.pathname);
          t.active && t.matches && (M = t.matches);
        }
        let O = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: M,
            initialized: o,
            navigation: N,
            restoreScrollPosition: null == e.hydrationData && null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || j,
            fetchers: new Map(),
            blockers: new Map(),
          },
          A = n.Pop,
          F = !1,
          V = !1,
          Y = new Map(),
          K = null,
          G = !1,
          et = !1,
          ea = [],
          es = new Set(),
          eu = new Map(),
          ey = 0,
          eE = -1,
          eL = new Map(),
          ej = new Set(),
          e_ = new Map(),
          eO = new Map(),
          eA = new Set(),
          eF = new Map(),
          eB = new Map();
        function ez(e, t) {
          void 0 === t && (t = {}), (O = l({}, O, e));
          let r = [],
            n = [];
          D.v7_fetcherPersist &&
            O.fetchers.forEach((e, t) => {
              "idle" === e.state && (eA.has(t) ? n.push(t) : r.push(t));
            }),
            [...L].forEach((e) =>
              e(O, {
                deletedFetchers: n,
                viewTransitionOpts: t.viewTransitionOpts,
                flushSync: !0 === t.flushSync,
              })
            ),
            D.v7_fetcherPersist &&
              (r.forEach((e) => O.fetchers.delete(e)), n.forEach((e) => e1(e)));
        }
        function eN(t, a, o) {
          var i, s;
          let u, c;
          let { flushSync: d } = void 0 === o ? {} : o,
            h =
              null != O.actionData &&
              null != O.navigation.formMethod &&
              eR(O.navigation.formMethod) &&
              "loading" === O.navigation.state &&
              (null == (i = t.state) ? void 0 : i._isRedirect) !== !0;
          u = a.actionData
            ? Object.keys(a.actionData).length > 0
              ? a.actionData
              : null
            : h
            ? O.actionData
            : null;
          let f = a.loaderData
              ? ed(O.loaderData, a.loaderData, a.matches || [], a.errors)
              : O.loaderData,
            p = O.blockers;
          p.size > 0 && (p = new Map(p)).forEach((e, t) => p.set(t, I));
          let m =
            !0 === F ||
            (null != O.navigation.formMethod &&
              eR(O.navigation.formMethod) &&
              (null == (s = t.state) ? void 0 : s._isRedirect) !== !0);
          if (
            (r && ((b = r), (r = void 0)),
            G ||
              A === n.Pop ||
              (A === n.Push
                ? e.history.push(t, t.state)
                : A === n.Replace && e.history.replace(t, t.state)),
            A === n.Pop)
          ) {
            let e = Y.get(O.location.pathname);
            e && e.has(t.pathname)
              ? (c = { currentLocation: O.location, nextLocation: t })
              : Y.has(t.pathname) &&
                (c = { currentLocation: t, nextLocation: O.location });
          } else if (V) {
            let e = Y.get(O.location.pathname);
            e
              ? e.add(t.pathname)
              : ((e = new Set([t.pathname])), Y.set(O.location.pathname, e)),
              (c = { currentLocation: O.location, nextLocation: t });
          }
          ez(
            l({}, a, {
              actionData: u,
              loaderData: f,
              historyAction: A,
              location: t,
              initialized: !0,
              navigation: N,
              revalidation: "idle",
              restoreScrollPosition: tr(t, a.matches || O.matches),
              preventScrollReset: m,
              blockers: p,
            }),
            { viewTransitionOpts: c, flushSync: !0 === d }
          ),
            (A = n.Pop),
            (F = !1),
            (V = !1),
            (G = !1),
            (et = !1),
            (ea = []);
        }
        async function eH(t, r) {
          if ("number" == typeof t) {
            e.history.go(t);
            return;
          }
          let a = q(
              O.location,
              O.matches,
              E,
              D.v7_prependBasename,
              t,
              D.v7_relativeSplatPath,
              null == r ? void 0 : r.fromRouteId,
              null == r ? void 0 : r.relative
            ),
            {
              path: o,
              submission: i,
              error: s,
            } = X(D.v7_normalizeFormMethod, !1, a, r),
            u = O.location,
            c = f(O.location, o, r && r.state);
          c = l({}, c, e.history.encodeLocation(c));
          let d = r && null != r.replace ? r.replace : void 0,
            h = n.Push;
          !0 === d
            ? (h = n.Replace)
            : !1 === d ||
              (null != i &&
                eR(i.formMethod) &&
                i.formAction === O.location.pathname + O.location.search &&
                (h = n.Replace));
          let p =
              r && "preventScrollReset" in r
                ? !0 === r.preventScrollReset
                : void 0,
            m = !0 === (r && r.flushSync),
            v = e8({ currentLocation: u, nextLocation: c, historyAction: h });
          if (v) {
            e9(v, {
              state: "blocked",
              location: c,
              proceed() {
                e9(v, {
                  state: "proceeding",
                  proceed: void 0,
                  reset: void 0,
                  location: c,
                }),
                  eH(t, r);
              },
              reset() {
                let e = new Map(O.blockers);
                e.set(v, I), ez({ blockers: e });
              },
            });
            return;
          }
          return await eI(h, c, {
            submission: i,
            pendingError: s,
            preventScrollReset: p,
            replace: r && r.replace,
            enableViewTransition: r && r.viewTransition,
            flushSync: m,
          });
        }
        async function eI(t, n, o) {
          var i, u, c, d;
          let h;
          s && s.abort(),
            (s = null),
            (A = t),
            (G = !0 === (o && o.startUninterruptedRevalidation)),
            (i = O.location),
            (u = O.matches),
            P && T && (P[tt(i, u)] = T()),
            (F = !0 === (o && o.preventScrollReset)),
            (V = !0 === (o && o.enableViewTransition));
          let f = r || b,
            p = o && o.overrideNavigation,
            m = g(f, n, E),
            v = !0 === (o && o.flushSync),
            y = tn(m, f, n.pathname);
          if ((y.active && y.matches && (m = y.matches), !m)) {
            let { error: e, notFoundMatches: t, route: r } = e6(n.pathname);
            eN(
              n,
              { matches: t, loaderData: {}, errors: { [r.id]: e } },
              { flushSync: v }
            );
            return;
          }
          if (
            O.initialized &&
            !et &&
            ((c = O.location),
            (d = n),
            c.pathname === d.pathname &&
              c.search === d.search &&
              ("" === c.hash
                ? "" !== d.hash
                : c.hash === d.hash || "" !== d.hash)) &&
            !(o && o.submission && eR(o.submission.formMethod))
          ) {
            eN(n, { matches: m }, { flushSync: v });
            return;
          }
          s = new AbortController();
          let w = el(e.history, n, s.signal, o && o.submission);
          if (o && o.pendingError)
            h = [ef(m).route.id, { type: a.error, error: o.pendingError }];
          else if (o && o.submission && eR(o.submission.formMethod)) {
            let t = await eW(w, n, o.submission, m, y.active, {
              replace: o.replace,
              flushSync: v,
            });
            if (t.shortCircuited) return;
            if (t.pendingActionResult) {
              let [e, r] = t.pendingActionResult;
              if (ew(r) && _(r.error) && 404 === r.error.status) {
                (s = null),
                  eN(n, {
                    matches: t.matches,
                    loaderData: {},
                    errors: { [e]: r.error },
                  });
                return;
              }
            }
            (m = t.matches || m),
              (h = t.pendingActionResult),
              (p = eT(n, o.submission)),
              (v = !1),
              (y.active = !1),
              (w = el(e.history, w.url, w.signal));
          }
          let {
            shortCircuited: x,
            matches: R,
            loaderData: S,
            errors: D,
          } = await eJ(
            w,
            n,
            m,
            y.active,
            p,
            o && o.submission,
            o && o.fetcherSubmission,
            o && o.replace,
            o && !0 === o.initialHydration,
            v,
            h
          );
          !x &&
            ((s = null),
            eN(n, l({ matches: R || m }, eh(h), { loaderData: S, errors: D })));
        }
        async function eW(e, t, r, o, i, l) {
          var s;
          let u;
          if (
            (void 0 === l && (l = {}),
            eQ(),
            ez(
              {
                navigation: {
                  state: "submitting",
                  location: t,
                  formMethod: (s = r).formMethod,
                  formAction: s.formAction,
                  formEncType: s.formEncType,
                  formData: s.formData,
                  json: s.json,
                  text: s.text,
                },
              },
              { flushSync: !0 === l.flushSync }
            ),
            i)
          ) {
            let r = await ta(o, t.pathname, e.signal);
            if ("aborted" === r.type) return { shortCircuited: !0 };
            if ("error" === r.type) {
              let e = ef(r.partialMatches).route.id;
              return {
                matches: r.partialMatches,
                pendingActionResult: [e, { type: a.error, error: r.error }],
              };
            }
            if (r.matches) o = r.matches;
            else {
              let { notFoundMatches: e, error: r, route: n } = e6(t.pathname);
              return {
                matches: e,
                pendingActionResult: [n.id, { type: a.error, error: r }],
              };
            }
          }
          let c = eP(o, t);
          if (c.route.action || c.route.lazy) {
            if (
              ((u = (await eY("action", O, e, [c], o, null))[c.route.id]),
              e.signal.aborted)
            )
              return { shortCircuited: !0 };
          } else
            u = {
              type: a.error,
              error: em(405, {
                method: e.method,
                pathname: t.pathname,
                routeId: c.route.id,
              }),
            };
          if (eb(u)) {
            let t;
            return (
              (t =
                l && null != l.replace
                  ? l.replace
                  : ei(
                      u.response.headers.get("Location"),
                      new URL(e.url),
                      E
                    ) ===
                    O.location.pathname + O.location.search),
              await eX(e, u, !0, { submission: r, replace: t }),
              { shortCircuited: !0 }
            );
          }
          if (eg(u)) throw em(400, { type: "defer-action" });
          if (ew(u)) {
            let e = ef(o, c.route.id);
            return (
              !0 !== (l && l.replace) && (A = n.Push),
              { matches: o, pendingActionResult: [e.route.id, u] }
            );
          }
          return { matches: o, pendingActionResult: [c.route.id, u] };
        }
        async function eJ(t, n, a, o, i, u, c, d, h, f, p) {
          let m = i || eT(n, u),
            v = u || c || ek(m),
            y = !G && (!D.v7_partialHydration || !h);
          if (o) {
            if (y) {
              let e = e$(p);
              ez(l({ navigation: m }, void 0 !== e ? { actionData: e } : {}), {
                flushSync: f,
              });
            }
            let e = await ta(a, n.pathname, t.signal);
            if ("aborted" === e.type) return { shortCircuited: !0 };
            if ("error" === e.type) {
              let t = ef(e.partialMatches).route.id;
              return {
                matches: e.partialMatches,
                loaderData: {},
                errors: { [t]: e.error },
              };
            }
            if (e.matches) a = e.matches;
            else {
              let { error: e, notFoundMatches: t, route: r } = e6(n.pathname);
              return { matches: t, loaderData: {}, errors: { [r.id]: e } };
            }
          }
          let g = r || b,
            [w, x] = Z(
              e.history,
              O,
              a,
              v,
              n,
              D.v7_partialHydration && !0 === h,
              D.v7_skipActionErrorRevalidation,
              et,
              ea,
              es,
              eA,
              e_,
              ej,
              g,
              E,
              p
            );
          if (
            (te(
              (e) =>
                !(a && a.some((t) => t.route.id === e)) ||
                (w && w.some((t) => t.route.id === e))
            ),
            (eE = ++ey),
            0 === w.length && 0 === x.length)
          ) {
            let e = e2();
            return (
              eN(
                n,
                l(
                  {
                    matches: a,
                    loaderData: {},
                    errors: p && ew(p[1]) ? { [p[0]]: p[1].error } : null,
                  },
                  eh(p),
                  e ? { fetchers: new Map(O.fetchers) } : {}
                ),
                { flushSync: f }
              ),
              { shortCircuited: !0 }
            );
          }
          if (y) {
            let e = {};
            if (!o) {
              e.navigation = m;
              let t = e$(p);
              void 0 !== t && (e.actionData = t);
            }
            x.length > 0 &&
              (e.fetchers =
                (x.forEach((e) => {
                  let t = O.fetchers.get(e.key),
                    r = eU(void 0, t ? t.data : void 0);
                  O.fetchers.set(e.key, r);
                }),
                new Map(O.fetchers))),
              ez(e, { flushSync: f });
          }
          x.forEach((e) => {
            e7(e.key), e.controller && eu.set(e.key, e.controller);
          });
          let R = () => x.forEach((e) => e7(e.key));
          s && s.signal.addEventListener("abort", R);
          let { loaderResults: S, fetcherResults: C } = await eZ(O, a, w, x, t);
          if (t.signal.aborted) return { shortCircuited: !0 };
          s && s.signal.removeEventListener("abort", R),
            x.forEach((e) => eu.delete(e.key));
          let L = ev(S);
          if (L)
            return (
              await eX(t, L.result, !0, { replace: d }), { shortCircuited: !0 }
            );
          if ((L = ev(C)))
            return (
              ej.add(L.key),
              await eX(t, L.result, !0, { replace: d }),
              { shortCircuited: !0 }
            );
          let { loaderData: P, errors: k } = ec(O, a, S, p, x, C, eF);
          eF.forEach((e, t) => {
            e.subscribe((r) => {
              (r || e.done) && eF.delete(t);
            });
          }),
            D.v7_partialHydration && h && O.errors && (k = l({}, O.errors, k));
          let T = e2(),
            U = e3(eE),
            M = T || U || x.length > 0;
          return l(
            { matches: a, loaderData: P, errors: k },
            M ? { fetchers: new Map(O.fetchers) } : {}
          );
        }
        function e$(e) {
          return e && !ew(e[1])
            ? { [e[0]]: e[1].data }
            : O.actionData
            ? 0 === Object.keys(O.actionData).length
              ? null
              : O.actionData
            : void 0;
        }
        async function eV(t, n, a, o, i, l, u, d, h) {
          var f, p;
          function m(e) {
            if (!e.route.action && !e.route.lazy) {
              let e = em(405, {
                method: h.formMethod,
                pathname: a,
                routeId: n,
              });
              return eG(t, n, e, { flushSync: u }), !0;
            }
            return !1;
          }
          if ((eQ(), e_.delete(t), !l && m(o))) return;
          let v = O.fetchers.get(t);
          eK(
            t,
            ((f = h),
            (p = v),
            {
              state: "submitting",
              formMethod: f.formMethod,
              formAction: f.formAction,
              formEncType: f.formEncType,
              formData: f.formData,
              json: f.json,
              text: f.text,
              data: p ? p.data : void 0,
            }),
            { flushSync: u }
          );
          let y = new AbortController(),
            w = el(e.history, a, y.signal, h);
          if (l) {
            let e = await ta(i, a, w.signal);
            if ("aborted" === e.type) return;
            if ("error" === e.type) {
              eG(t, n, e.error, { flushSync: u });
              return;
            }
            if (e.matches) {
              if (m((o = eP((i = e.matches), a)))) return;
            } else {
              eG(t, n, em(404, { pathname: a }), { flushSync: u });
              return;
            }
          }
          eu.set(t, y);
          let x = ey,
            R = (await eY("action", O, w, [o], i, t))[o.route.id];
          if (w.signal.aborted) {
            eu.get(t) === y && eu.delete(t);
            return;
          }
          if (D.v7_fetcherPersist && eA.has(t)) {
            if (eb(R) || ew(R)) {
              eK(t, eM(void 0));
              return;
            }
          } else {
            if (eb(R))
              return (eu.delete(t), eE > x)
                ? (eK(t, eM(void 0)), void 0)
                : (ej.add(t),
                  eK(t, eU(h)),
                  eX(w, R, !1, {
                    fetcherSubmission: h,
                    preventScrollReset: d,
                  }));
            if (ew(R)) {
              eG(t, n, R.error);
              return;
            }
          }
          if (eg(R)) throw em(400, { type: "defer-action" });
          let S = O.navigation.location || O.location,
            C = el(e.history, S, y.signal),
            L = r || b,
            P =
              "idle" !== O.navigation.state
                ? g(L, O.navigation.location, E)
                : O.matches;
          c(P, "Didn't find any matches after fetcher action");
          let k = ++ey;
          eL.set(t, k);
          let T = eU(h, R.data);
          O.fetchers.set(t, T);
          let [U, M] = Z(
            e.history,
            O,
            P,
            h,
            S,
            !1,
            D.v7_skipActionErrorRevalidation,
            et,
            ea,
            es,
            eA,
            e_,
            ej,
            L,
            E,
            [o.route.id, R]
          );
          M.filter((e) => e.key !== t).forEach((e) => {
            let t = e.key,
              r = O.fetchers.get(t),
              n = eU(void 0, r ? r.data : void 0);
            O.fetchers.set(t, n),
              e7(t),
              e.controller && eu.set(t, e.controller);
          }),
            ez({ fetchers: new Map(O.fetchers) });
          let j = () => M.forEach((e) => e7(e.key));
          y.signal.addEventListener("abort", j);
          let { loaderResults: _, fetcherResults: F } = await eZ(O, P, U, M, C);
          if (y.signal.aborted) return;
          y.signal.removeEventListener("abort", j),
            eL.delete(t),
            eu.delete(t),
            M.forEach((e) => eu.delete(e.key));
          let B = ev(_);
          if (B) return eX(C, B.result, !1, { preventScrollReset: d });
          if ((B = ev(F)))
            return (
              ej.add(B.key), eX(C, B.result, !1, { preventScrollReset: d })
            );
          let { loaderData: z, errors: N } = ec(O, P, _, void 0, M, F, eF);
          if (O.fetchers.has(t)) {
            let e = eM(R.data);
            O.fetchers.set(t, e);
          }
          e3(k),
            "loading" === O.navigation.state && k > eE
              ? (c(A, "Expected pending action"),
                s && s.abort(),
                eN(O.navigation.location, {
                  matches: P,
                  loaderData: z,
                  errors: N,
                  fetchers: new Map(O.fetchers),
                }))
              : (ez({
                  errors: N,
                  loaderData: ed(O.loaderData, z, P, N),
                  fetchers: new Map(O.fetchers),
                }),
                (et = !1));
        }
        async function eq(t, r, n, a, o, i, l, s, u) {
          let d = O.fetchers.get(t);
          eK(t, eU(u, d ? d.data : void 0), { flushSync: l });
          let h = new AbortController(),
            f = el(e.history, n, h.signal);
          if (i) {
            let e = await ta(o, n, f.signal);
            if ("aborted" === e.type) return;
            if ("error" === e.type) {
              eG(t, r, e.error, { flushSync: l });
              return;
            }
            if (e.matches) a = eP((o = e.matches), n);
            else {
              eG(t, r, em(404, { pathname: n }), { flushSync: l });
              return;
            }
          }
          eu.set(t, h);
          let p = ey,
            m = (await eY("loader", O, f, [a], o, t))[a.route.id];
          if (
            (eg(m) && (m = (await eC(m, f.signal, !0)) || m),
            eu.get(t) === h && eu.delete(t),
            !f.signal.aborted)
          ) {
            if (eA.has(t)) {
              eK(t, eM(void 0));
              return;
            }
            if (eb(m)) {
              if (eE > p) {
                eK(t, eM(void 0));
                return;
              }
              ej.add(t), await eX(f, m, !1, { preventScrollReset: s });
              return;
            }
            if (ew(m)) {
              eG(t, r, m.error);
              return;
            }
            c(!eg(m), "Unhandled fetcher deferred data"), eK(t, eM(m.data));
          }
        }
        async function eX(t, r, a, o) {
          let {
            submission: i,
            fetcherSubmission: u,
            preventScrollReset: d,
            replace: m,
          } = void 0 === o ? {} : o;
          r.response.headers.has("X-Remix-Revalidate") && (et = !0);
          let v = r.response.headers.get("Location");
          c(v, "Expected a Location header on the redirect Response"),
            (v = ei(v, new URL(t.url), E));
          let y = f(O.location, v, { _isRedirect: !0 });
          if (p) {
            let t = !1;
            if (r.response.headers.has("X-Remix-Reload-Document")) t = !0;
            else if (W.test(v)) {
              let r = e.history.createURL(v);
              t = r.origin !== h.location.origin || null == R(r.pathname, E);
            }
            if (t) {
              m ? h.location.replace(v) : h.location.assign(v);
              return;
            }
          }
          s = null;
          let g =
              !0 === m || r.response.headers.has("X-Remix-Replace")
                ? n.Replace
                : n.Push,
            { formMethod: w, formAction: b, formEncType: x } = O.navigation;
          !i && !u && w && b && x && (i = ek(O.navigation));
          let S = i || u;
          if (z.has(r.response.status) && S && eR(S.formMethod))
            await eI(g, y, {
              submission: l({}, S, { formAction: v }),
              preventScrollReset: d || F,
              enableViewTransition: a ? V : void 0,
            });
          else {
            let e = eT(y, i);
            await eI(g, y, {
              overrideNavigation: e,
              fetcherSubmission: u,
              preventScrollReset: d || F,
              enableViewTransition: a ? V : void 0,
            });
          }
        }
        async function eY(e, r, n, o, i, l) {
          let s;
          let u = {};
          try {
            s = await en(x, e, r, n, o, i, l, v, t);
          } catch (e) {
            return (
              o.forEach((t) => {
                u[t.route.id] = { type: a.error, error: e };
              }),
              u
            );
          }
          for (let [e, t] of Object.entries(s)) {
            var d;
            if (ex((d = t).result) && B.has(d.result.status)) {
              let r = t.result;
              u[e] = {
                type: a.redirect,
                response: (function (e, t, r, n, a, o) {
                  let i = e.headers.get("Location");
                  if (
                    (c(
                      i,
                      "Redirects returned/thrown from loaders/actions must have a Location header"
                    ),
                    !W.test(i))
                  ) {
                    let l = n.slice(
                      0,
                      n.findIndex((e) => e.route.id === r) + 1
                    );
                    (i = q(new URL(t.url), l, a, !0, i, o)),
                      e.headers.set("Location", i);
                  }
                  return e;
                })(r, n, e, i, E, D.v7_relativeSplatPath),
              };
            } else u[e] = await eo(t);
          }
          return u;
        }
        async function eZ(t, r, n, o, i) {
          let l = t.matches,
            s = eY("loader", t, i, n, r, null),
            u = Promise.all(
              o.map(async (r) => {
                if (!r.matches || !r.match || !r.controller)
                  return Promise.resolve({
                    [r.key]: {
                      type: a.error,
                      error: em(404, { pathname: r.path }),
                    },
                  });
                {
                  let n = (
                    await eY(
                      "loader",
                      t,
                      el(e.history, r.path, r.controller.signal),
                      [r.match],
                      r.matches,
                      r.key
                    )
                  )[r.match.route.id];
                  return { [r.key]: n };
                }
              })
            ),
            c = await s,
            d = (await u).reduce((e, t) => Object.assign(e, t), {});
          return (
            await Promise.all([
              eS(r, c, i.signal, l, t.loaderData),
              eD(r, d, o),
            ]),
            { loaderResults: c, fetcherResults: d }
          );
        }
        function eQ() {
          (et = !0),
            ea.push(...te()),
            e_.forEach((e, t) => {
              eu.has(t) && es.add(t), e7(t);
            });
        }
        function eK(e, t, r) {
          void 0 === r && (r = {}),
            O.fetchers.set(e, t),
            ez(
              { fetchers: new Map(O.fetchers) },
              { flushSync: !0 === (r && r.flushSync) }
            );
        }
        function eG(e, t, r, n) {
          void 0 === n && (n = {});
          let a = ef(O.matches, t);
          e1(e),
            ez(
              { errors: { [a.route.id]: r }, fetchers: new Map(O.fetchers) },
              { flushSync: !0 === (n && n.flushSync) }
            );
        }
        function e0(e) {
          return (
            D.v7_fetcherPersist &&
              (eO.set(e, (eO.get(e) || 0) + 1), eA.has(e) && eA.delete(e)),
            O.fetchers.get(e) || H
          );
        }
        function e1(e) {
          let t = O.fetchers.get(e);
          eu.has(e) && !(t && "loading" === t.state && eL.has(e)) && e7(e),
            e_.delete(e),
            eL.delete(e),
            ej.delete(e),
            eA.delete(e),
            es.delete(e),
            O.fetchers.delete(e);
        }
        function e7(e) {
          let t = eu.get(e);
          t && (t.abort(), eu.delete(e));
        }
        function e4(e) {
          for (let t of e) {
            let e = eM(e0(t).data);
            O.fetchers.set(t, e);
          }
        }
        function e2() {
          let e = [],
            t = !1;
          for (let r of ej) {
            let n = O.fetchers.get(r);
            c(n, "Expected fetcher: " + r),
              "loading" === n.state && (ej.delete(r), e.push(r), (t = !0));
          }
          return e4(e), t;
        }
        function e3(e) {
          let t = [];
          for (let [r, n] of eL)
            if (n < e) {
              let e = O.fetchers.get(r);
              c(e, "Expected fetcher: " + r),
                "loading" === e.state && (e7(r), eL.delete(r), t.push(r));
            }
          return e4(t), t.length > 0;
        }
        function e5(e) {
          O.blockers.delete(e), eB.delete(e);
        }
        function e9(e, t) {
          let r = O.blockers.get(e) || I;
          c(
            ("unblocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "blocked" === t.state) ||
              ("blocked" === r.state && "proceeding" === t.state) ||
              ("blocked" === r.state && "unblocked" === t.state) ||
              ("proceeding" === r.state && "unblocked" === t.state),
            "Invalid blocker state transition: " + r.state + " -> " + t.state
          );
          let n = new Map(O.blockers);
          n.set(e, t), ez({ blockers: n });
        }
        function e8(e) {
          let { currentLocation: t, nextLocation: r, historyAction: n } = e;
          if (0 === eB.size) return;
          eB.size > 1 && d(!1, "A router only supports one blocker at a time");
          let a = Array.from(eB.entries()),
            [o, i] = a[a.length - 1],
            l = O.blockers.get(o);
          if (
            (!l || "proceeding" !== l.state) &&
            i({ currentLocation: t, nextLocation: r, historyAction: n })
          )
            return o;
        }
        function e6(e) {
          let t = em(404, { pathname: e }),
            { matches: n, route: a } = ep(r || b);
          return te(), { notFoundMatches: n, route: a, error: t };
        }
        function te(e) {
          let t = [];
          return (
            eF.forEach((r, n) => {
              (!e || e(n)) && (r.cancel(), t.push(n), eF.delete(n));
            }),
            t
          );
        }
        function tt(e, t) {
          return (
            (k &&
              k(
                e,
                t.map((e) =>
                  (function (e, t) {
                    let { route: r, pathname: n, params: a } = e;
                    return {
                      id: r.id,
                      pathname: n,
                      params: a,
                      data: t[r.id],
                      handle: r.handle,
                    };
                  })(e, O.loaderData)
                )
              )) ||
            e.key
          );
        }
        function tr(e, t) {
          if (P) {
            let r = P[tt(e, t)];
            if ("number" == typeof r) return r;
          }
          return null;
        }
        function tn(e, t, r) {
          if (S) {
            if (!e) return { active: !0, matches: w(t, r, E, !0) || [] };
            if (Object.keys(e[0].params).length > 0)
              return { active: !0, matches: w(t, r, E, !0) };
          }
          return { active: !1, matches: null };
        }
        async function ta(e, n, a) {
          if (!S) return { type: "success", matches: e };
          let o = e;
          for (;;) {
            let e = null == r,
              i = r || b,
              l = v;
            try {
              await S({
                path: n,
                matches: o,
                patch: (e, r) => {
                  a.aborted || ee(e, r, i, l, t);
                },
              });
            } catch (e) {
              return { type: "error", error: e, partialMatches: o };
            } finally {
              e && !a.aborted && (b = [...b]);
            }
            if (a.aborted) return { type: "aborted" };
            let s = g(i, n, E);
            if (s) return { type: "success", matches: s };
            let u = w(i, n, E, !0);
            if (
              !u ||
              (o.length === u.length &&
                o.every((e, t) => e.route.id === u[t].route.id))
            )
              return { type: "success", matches: null };
            o = u;
          }
        }
        return (i = {
          get basename() {
            return E;
          },
          get future() {
            return D;
          },
          get state() {
            return O;
          },
          get routes() {
            return b;
          },
          get window() {
            return h;
          },
          initialize: function () {
            if (
              ((C = e.history.listen((t) => {
                let { action: r, location: n, delta: a } = t;
                if (u) {
                  u(), (u = void 0);
                  return;
                }
                d(
                  0 === eB.size || null != a,
                  "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL."
                );
                let o = e8({
                  currentLocation: O.location,
                  nextLocation: n,
                  historyAction: r,
                });
                if (o && null != a) {
                  let t = new Promise((e) => {
                    u = e;
                  });
                  e.history.go(-1 * a),
                    e9(o, {
                      state: "blocked",
                      location: n,
                      proceed() {
                        e9(o, {
                          state: "proceeding",
                          proceed: void 0,
                          reset: void 0,
                          location: n,
                        }),
                          t.then(() => e.history.go(a));
                      },
                      reset() {
                        let e = new Map(O.blockers);
                        e.set(o, I), ez({ blockers: e });
                      },
                    });
                  return;
                }
                return eI(r, n);
              })),
              p)
            ) {
              !(function (e, t) {
                try {
                  let r = e.sessionStorage.getItem($);
                  if (r) {
                    let e = JSON.parse(r);
                    for (let [r, n] of Object.entries(e || {}))
                      n && Array.isArray(n) && t.set(r, new Set(n || []));
                  }
                } catch (e) {}
              })(h, Y);
              let e = () =>
                (function (e, t) {
                  if (t.size > 0) {
                    let r = {};
                    for (let [e, n] of t) r[e] = [...n];
                    try {
                      e.sessionStorage.setItem($, JSON.stringify(r));
                    } catch (e) {
                      d(
                        !1,
                        "Failed to save applied view transitions in sessionStorage (" +
                          e +
                          ")."
                      );
                    }
                  }
                })(h, Y);
              h.addEventListener("pagehide", e),
                (K = () => h.removeEventListener("pagehide", e));
            }
            return (
              O.initialized || eI(n.Pop, O.location, { initialHydration: !0 }),
              i
            );
          },
          subscribe: function (e) {
            return L.add(e), () => L.delete(e);
          },
          enableScrollRestoration: function (e, t, r) {
            if (((P = e), (T = t), (k = r || null), !U && O.navigation === N)) {
              U = !0;
              let e = tr(O.location, O.matches);
              null != e && ez({ restoreScrollPosition: e });
            }
            return () => {
              (P = null), (T = null), (k = null);
            };
          },
          navigate: eH,
          fetch: function (e, t, n, a) {
            if (m)
              throw Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
              );
            e7(e);
            let o = !0 === (a && a.flushSync),
              i = r || b,
              l = q(
                O.location,
                O.matches,
                E,
                D.v7_prependBasename,
                n,
                D.v7_relativeSplatPath,
                t,
                null == a ? void 0 : a.relative
              ),
              s = g(i, l, E),
              u = tn(s, i, l);
            if ((u.active && u.matches && (s = u.matches), !s)) {
              eG(e, t, em(404, { pathname: l }), { flushSync: o });
              return;
            }
            let {
              path: c,
              submission: d,
              error: h,
            } = X(D.v7_normalizeFormMethod, !0, l, a);
            if (h) {
              eG(e, t, h, { flushSync: o });
              return;
            }
            let f = eP(s, c),
              p = !0 === (a && a.preventScrollReset);
            if (d && eR(d.formMethod)) {
              eV(e, t, c, f, s, u.active, o, p, d);
              return;
            }
            e_.set(e, { routeId: t, path: c }),
              eq(e, t, c, f, s, u.active, o, p, d);
          },
          revalidate: function () {
            if (
              (eQ(),
              ez({ revalidation: "loading" }),
              "submitting" !== O.navigation.state)
            ) {
              if ("idle" === O.navigation.state) {
                eI(O.historyAction, O.location, {
                  startUninterruptedRevalidation: !0,
                });
                return;
              }
              eI(A || O.historyAction, O.navigation.location, {
                overrideNavigation: O.navigation,
                enableViewTransition: !0 === V,
              });
            }
          },
          createHref: (t) => e.history.createHref(t),
          encodeLocation: (t) => e.history.encodeLocation(t),
          getFetcher: e0,
          deleteFetcher: function (e) {
            if (D.v7_fetcherPersist) {
              let t = (eO.get(e) || 0) - 1;
              t <= 0 ? (eO.delete(e), eA.add(e)) : eO.set(e, t);
            } else e1(e);
            ez({ fetchers: new Map(O.fetchers) });
          },
          dispose: function () {
            C && C(),
              K && K(),
              L.clear(),
              s && s.abort(),
              O.fetchers.forEach((e, t) => e1(t)),
              O.blockers.forEach((e, t) => e5(t));
          },
          getBlocker: function (e, t) {
            let r = O.blockers.get(e) || I;
            return eB.get(e) !== t && eB.set(e, t), r;
          },
          deleteBlocker: e5,
          patchRoutes: function (e, n) {
            let a = null == r;
            ee(e, n, r || b, v, t), a && ((b = [...b]), ez({}));
          },
          _internalFetchControllers: eu,
          _internalActiveDeferreds: eF,
          _internalSetRoutes: function (e) {
            r = y(e, t, void 0, (v = {}));
          },
        });
      }
      function q(e, t, r, n, a, o, i, l) {
        let s, u;
        if (i) {
          for (let e of ((s = []), t))
            if ((s.push(e), e.route.id === i)) {
              u = e;
              break;
            }
        } else (s = t), (u = t[t.length - 1]);
        let c = L(
          a || ".",
          C(s, o),
          R(e.pathname, r) || e.pathname,
          "path" === l
        );
        if (
          (null == a && ((c.search = e.search), (c.hash = e.hash)),
          (null == a || "" === a || "." === a) && u)
        ) {
          let e = eL(c.search);
          if (u.route.index && !e)
            c.search = c.search ? c.search.replace(/^\?/, "?index&") : "?index";
          else if (!u.route.index && e) {
            let e = new URLSearchParams(c.search),
              t = e.getAll("index");
            e.delete("index"),
              t.filter((e) => e).forEach((t) => e.append("index", t));
            let r = e.toString();
            c.search = r ? "?" + r : "";
          }
        }
        return (
          n &&
            "/" !== r &&
            (c.pathname = "/" === c.pathname ? r : P([r, c.pathname])),
          p(c)
        );
      }
      function X(e, t, r, n) {
        var a;
        let o, i;
        if (
          !n ||
          !(
            null != n &&
            (("formData" in n && null != n.formData) ||
              ("body" in n && void 0 !== n.body))
          )
        )
          return { path: r };
        if (n.formMethod && ((a = n.formMethod), !F.has(a.toLowerCase())))
          return { path: r, error: em(405, { method: n.formMethod }) };
        let l = () => ({ path: r, error: em(400, { type: "invalid-body" }) }),
          s = n.formMethod || "get",
          u = e ? s.toUpperCase() : s.toLowerCase(),
          d = ey(r);
        if (void 0 !== n.body) {
          if ("text/plain" === n.formEncType) {
            if (!eR(u)) return l();
            let e =
              "string" == typeof n.body
                ? n.body
                : n.body instanceof FormData ||
                  n.body instanceof URLSearchParams
                ? Array.from(n.body.entries()).reduce((e, t) => {
                    let [r, n] = t;
                    return "" + e + r + "=" + n + "\n";
                  }, "")
                : String(n.body);
            return {
              path: r,
              submission: {
                formMethod: u,
                formAction: d,
                formEncType: n.formEncType,
                formData: void 0,
                json: void 0,
                text: e,
              },
            };
          }
          if ("application/json" === n.formEncType) {
            if (!eR(u)) return l();
            try {
              let e = "string" == typeof n.body ? JSON.parse(n.body) : n.body;
              return {
                path: r,
                submission: {
                  formMethod: u,
                  formAction: d,
                  formEncType: n.formEncType,
                  formData: void 0,
                  json: e,
                  text: void 0,
                },
              };
            } catch (e) {
              return l();
            }
          }
        }
        if (
          (c(
            "function" == typeof FormData,
            "FormData is not available in this environment"
          ),
          n.formData)
        )
          (o = es(n.formData)), (i = n.formData);
        else if (n.body instanceof FormData) (o = es(n.body)), (i = n.body);
        else if (n.body instanceof URLSearchParams) i = eu((o = n.body));
        else if (null == n.body)
          (o = new URLSearchParams()), (i = new FormData());
        else
          try {
            (o = new URLSearchParams(n.body)), (i = eu(o));
          } catch (e) {
            return l();
          }
        let h = {
          formMethod: u,
          formAction: d,
          formEncType:
            (n && n.formEncType) || "application/x-www-form-urlencoded",
          formData: i,
          json: void 0,
          text: void 0,
        };
        if (eR(h.formMethod)) return { path: r, submission: h };
        let f = m(r);
        return (
          t && f.search && eL(f.search) && o.append("index", ""),
          (f.search = "?" + o),
          { path: p(f), submission: h }
        );
      }
      function Y(e, t, r) {
        void 0 === r && (r = !1);
        let n = e.findIndex((e) => e.route.id === t);
        return n >= 0 ? e.slice(0, r ? n + 1 : n) : e;
      }
      function Z(e, t, r, n, a, o, i, s, u, c, d, h, f, p, m, v) {
        let y = v ? (ew(v[1]) ? v[1].error : v[1].data) : void 0,
          w = e.createURL(t.location),
          b = e.createURL(a),
          E = r;
        o && t.errors
          ? (E = Y(r, Object.keys(t.errors)[0], !0))
          : v && ew(v[1]) && (E = Y(r, v[0]));
        let x = v ? v[1].statusCode : void 0,
          R = i && x && x >= 400,
          S = E.filter((e, r) => {
            var a, i, c;
            let d,
              h,
              { route: f } = e;
            if (f.lazy) return !0;
            if (null == f.loader) return !1;
            if (o) return Q(f, t.loaderData, t.errors);
            if (
              ((a = t.loaderData),
              (i = t.matches[r]),
              (c = e),
              (d = !i || c.route.id !== i.route.id),
              (h = void 0 === a[c.route.id]),
              d || h || u.some((t) => t === e.route.id))
            )
              return !0;
            let p = t.matches[r];
            return G(
              e,
              l(
                {
                  currentUrl: w,
                  currentParams: p.params,
                  nextUrl: b,
                  nextParams: e.params,
                },
                n,
                {
                  actionResult: y,
                  actionStatus: x,
                  defaultShouldRevalidate:
                    !R &&
                    (s ||
                      w.pathname + w.search === b.pathname + b.search ||
                      w.search !== b.search ||
                      K(p, e)),
                }
              )
            );
          }),
          D = [];
        return (
          h.forEach((e, a) => {
            if (o || !r.some((t) => t.route.id === e.routeId) || d.has(a))
              return;
            let i = g(p, e.path, m);
            if (!i) {
              D.push({
                key: a,
                routeId: e.routeId,
                path: e.path,
                matches: null,
                match: null,
                controller: null,
              });
              return;
            }
            let u = t.fetchers.get(a),
              h = eP(i, e.path),
              v = !1;
            f.has(a)
              ? (v = !1)
              : c.has(a)
              ? (c.delete(a), (v = !0))
              : (v =
                  u && "idle" !== u.state && void 0 === u.data
                    ? s
                    : G(
                        h,
                        l(
                          {
                            currentUrl: w,
                            currentParams:
                              t.matches[t.matches.length - 1].params,
                            nextUrl: b,
                            nextParams: r[r.length - 1].params,
                          },
                          n,
                          {
                            actionResult: y,
                            actionStatus: x,
                            defaultShouldRevalidate: !R && s,
                          }
                        )
                      )),
              v &&
                D.push({
                  key: a,
                  routeId: e.routeId,
                  path: e.path,
                  matches: i,
                  match: h,
                  controller: new AbortController(),
                });
          }),
          [S, D]
        );
      }
      function Q(e, t, r) {
        if (e.lazy) return !0;
        if (!e.loader) return !1;
        let n = null != t && void 0 !== t[e.id],
          a = null != r && void 0 !== r[e.id];
        return (
          (!!n || !a) &&
          (("function" == typeof e.loader && !0 === e.loader.hydrate) ||
            (!n && !a))
        );
      }
      function K(e, t) {
        let r = e.route.path;
        return (
          e.pathname !== t.pathname ||
          (null != r && r.endsWith("*") && e.params["*"] !== t.params["*"])
        );
      }
      function G(e, t) {
        if (e.route.shouldRevalidate) {
          let r = e.route.shouldRevalidate(t);
          if ("boolean" == typeof r) return r;
        }
        return t.defaultShouldRevalidate;
      }
      function ee(e, t, r, n, a) {
        var o;
        let i;
        if (e) {
          let t = n[e];
          c(t, "No route found to patch children into: routeId = " + e),
            t.children || (t.children = []),
            (i = t.children);
        } else i = r;
        let l = y(
          t.filter(
            (e) =>
              !i.some((t) =>
                (function e(t, r) {
                  return (
                    ("id" in t && "id" in r && t.id === r.id) ||
                    (t.index === r.index &&
                      t.path === r.path &&
                      t.caseSensitive === r.caseSensitive &&
                      (((!t.children || 0 === t.children.length) &&
                        (!r.children || 0 === r.children.length)) ||
                        t.children.every((t, n) => {
                          var a;
                          return null == (a = r.children)
                            ? void 0
                            : a.some((r) => e(t, r));
                        })))
                  );
                })(e, t)
              )
          ),
          a,
          [
            e || "_",
            "patch",
            String((null == (o = i) ? void 0 : o.length) || "0"),
          ],
          n
        );
        i.push(...l);
      }
      async function et(e, t, r) {
        if (!e.lazy) return;
        let n = await e.lazy();
        if (!e.lazy) return;
        let a = r[e.id];
        c(a, "No route found in manifest");
        let o = {};
        for (let e in n) {
          let t = void 0 !== a[e] && "hasErrorBoundary" !== e;
          d(
            !t,
            'Route "' +
              a.id +
              '" has a static property "' +
              e +
              '" defined but its lazy function is also returning a value for this property. The lazy route property "' +
              e +
              '" will be ignored.'
          ),
            t || v.has(e) || (o[e] = n[e]);
        }
        Object.assign(a, o), Object.assign(a, l({}, t(a), { lazy: void 0 }));
      }
      async function er(e) {
        let { matches: t } = e,
          r = t.filter((e) => e.shouldLoad);
        return (await Promise.all(r.map((e) => e.resolve()))).reduce(
          (e, t, n) => Object.assign(e, { [r[n].route.id]: t }),
          {}
        );
      }
      async function en(e, t, r, n, o, i, s, u, c, d) {
        let h = i.map((e) => (e.route.lazy ? et(e.route, c, u) : void 0)),
          f = i.map((e, r) => {
            let i = h[r],
              s = o.some((t) => t.route.id === e.route.id),
              u = async (r) => (
                r &&
                  "GET" === n.method &&
                  (e.route.lazy || e.route.loader) &&
                  (s = !0),
                s
                  ? ea(t, n, e, i, r, d)
                  : Promise.resolve({ type: a.data, result: void 0 })
              );
            return l({}, e, { shouldLoad: s, resolve: u });
          }),
          p = await e({
            matches: f,
            request: n,
            params: i[0].params,
            fetcherKey: s,
            context: d,
          });
        try {
          await Promise.all(h);
        } catch (e) {}
        return p;
      }
      async function ea(e, t, r, n, o, i) {
        let l, s;
        let u = (n) => {
          let a;
          let l = new Promise((e, t) => (a = t));
          (s = () => a()), t.signal.addEventListener("abort", s);
          let u = (a) =>
            "function" != typeof n
              ? Promise.reject(
                  Error(
                    "You cannot call the handler for a route which defines a boolean " +
                      ('"' + e + '" [routeId: ') +
                      r.route.id +
                      "]"
                  )
                )
              : n(
                  { request: t, params: r.params, context: i },
                  ...(void 0 !== a ? [a] : [])
                );
          return Promise.race([
            (async () => {
              try {
                let e = await (o ? o((e) => u(e)) : u());
                return { type: "data", result: e };
              } catch (e) {
                return { type: "error", result: e };
              }
            })(),
            l,
          ]);
        };
        try {
          let o = r.route[e];
          if (n) {
            if (o) {
              let e;
              let [t] = await Promise.all([
                u(o).catch((t) => {
                  e = t;
                }),
                n,
              ]);
              if (void 0 !== e) throw e;
              l = t;
            } else if ((await n, (o = r.route[e]))) l = await u(o);
            else {
              if ("action" !== e) return { type: a.data, result: void 0 };
              let n = new URL(t.url),
                o = n.pathname + n.search;
              throw em(405, {
                method: t.method,
                pathname: o,
                routeId: r.route.id,
              });
            }
          } else if (o) l = await u(o);
          else {
            let e = new URL(t.url),
              r = e.pathname + e.search;
            throw em(404, { pathname: r });
          }
          c(
            void 0 !== l.result,
            "You defined " +
              ("action" === e ? "an action" : "a loader") +
              " for route " +
              ('"' + r.route.id + "\" but didn't return anything from your `") +
              e +
              "` function. Please return a value or `null`."
          );
        } catch (e) {
          return { type: a.error, result: e };
        } finally {
          s && t.signal.removeEventListener("abort", s);
        }
        return l;
      }
      async function eo(e) {
        var t, r, n, o, i, l, s;
        let { result: u, type: c } = e;
        if (ex(u)) {
          let e;
          try {
            let t = u.headers.get("Content-Type");
            e =
              t && /\bapplication\/json\b/.test(t)
                ? null == u.body
                  ? null
                  : await u.json()
                : await u.text();
          } catch (e) {
            return { type: a.error, error: e };
          }
          return c === a.error
            ? {
                type: a.error,
                error: new j(u.status, u.statusText, e),
                statusCode: u.status,
                headers: u.headers,
              }
            : {
                type: a.data,
                data: e,
                statusCode: u.status,
                headers: u.headers,
              };
        }
        if (c === a.error) {
          if (eE(u)) {
            if (u.data instanceof Error)
              return {
                type: a.error,
                error: u.data,
                statusCode: null == (r = u.init) ? void 0 : r.status,
              };
            u = new j(
              (null == (t = u.init) ? void 0 : t.status) || 500,
              void 0,
              u.data
            );
          }
          return {
            type: a.error,
            error: u,
            statusCode: _(u) ? u.status : void 0,
          };
        }
        return (s = u) &&
          "object" == typeof s &&
          "object" == typeof s.data &&
          "function" == typeof s.subscribe &&
          "function" == typeof s.cancel &&
          "function" == typeof s.resolveData
          ? {
              type: a.deferred,
              deferredData: u,
              statusCode: null == (n = u.init) ? void 0 : n.status,
              headers:
                (null == (o = u.init) ? void 0 : o.headers) &&
                new Headers(u.init.headers),
            }
          : eE(u)
          ? {
              type: a.data,
              data: u.data,
              statusCode: null == (i = u.init) ? void 0 : i.status,
              headers:
                null != (l = u.init) && l.headers
                  ? new Headers(u.init.headers)
                  : void 0,
            }
          : { type: a.data, data: u };
      }
      function ei(e, t, r) {
        if (W.test(e)) {
          let n = new URL(e.startsWith("//") ? t.protocol + e : e),
            a = null != R(n.pathname, r);
          if (n.origin === t.origin && a) return n.pathname + n.search + n.hash;
        }
        return e;
      }
      function el(e, t, r, n) {
        let a = e.createURL(ey(t)).toString(),
          o = { signal: r };
        if (n && eR(n.formMethod)) {
          let { formMethod: e, formEncType: t } = n;
          (o.method = e.toUpperCase()),
            "application/json" === t
              ? ((o.headers = new Headers({ "Content-Type": t })),
                (o.body = JSON.stringify(n.json)))
              : "text/plain" === t
              ? (o.body = n.text)
              : "application/x-www-form-urlencoded" === t && n.formData
              ? (o.body = es(n.formData))
              : (o.body = n.formData);
        }
        return new Request(a, o);
      }
      function es(e) {
        let t = new URLSearchParams();
        for (let [r, n] of e.entries())
          t.append(r, "string" == typeof n ? n : n.name);
        return t;
      }
      function eu(e) {
        let t = new FormData();
        for (let [r, n] of e.entries()) t.append(r, n);
        return t;
      }
      function ec(e, t, r, n, a, o, i) {
        let s, u, d, h, f, p;
        let { loaderData: m, errors: v } =
          ((u = {}),
          (d = null),
          (h = !1),
          (f = {}),
          (p = n && ew(n[1]) ? n[1].error : void 0),
          t.forEach((e) => {
            if (!(e.route.id in r)) return;
            let n = e.route.id,
              a = r[n];
            if (
              (c(!eb(a), "Cannot handle redirect results in processLoaderData"),
              ew(a))
            ) {
              let e = a.error;
              void 0 !== p && ((e = p), (p = void 0)), (d = d || {});
              {
                let r = ef(t, n);
                null == d[r.route.id] && (d[r.route.id] = e);
              }
              (u[n] = void 0),
                h || ((h = !0), (s = _(a.error) ? a.error.status : 500)),
                a.headers && (f[n] = a.headers);
            } else
              eg(a)
                ? (i.set(n, a.deferredData),
                  (u[n] = a.deferredData.data),
                  null == a.statusCode ||
                    200 === a.statusCode ||
                    h ||
                    (s = a.statusCode))
                : ((u[n] = a.data),
                  a.statusCode &&
                    200 !== a.statusCode &&
                    !h &&
                    (s = a.statusCode)),
                a.headers && (f[n] = a.headers);
          }),
          void 0 !== p && n && ((d = { [n[0]]: p }), (u[n[0]] = void 0)),
          { loaderData: u, errors: d, statusCode: s || 200, loaderHeaders: f });
        return (
          a.forEach((t) => {
            let { key: r, match: n, controller: a } = t,
              i = o[r];
            if (
              (c(i, "Did not find corresponding fetcher result"),
              !a || !a.signal.aborted)
            ) {
              if (ew(i)) {
                let t = ef(e.matches, null == n ? void 0 : n.route.id);
                (v && v[t.route.id]) ||
                  (v = l({}, v, { [t.route.id]: i.error })),
                  e.fetchers.delete(r);
              } else if (eb(i))
                c(!1, "Unhandled fetcher revalidation redirect");
              else if (eg(i)) c(!1, "Unhandled fetcher deferred data");
              else {
                let t = eM(i.data);
                e.fetchers.set(r, t);
              }
            }
          }),
          { loaderData: m, errors: v }
        );
      }
      function ed(e, t, r, n) {
        let a = l({}, t);
        for (let o of r) {
          let r = o.route.id;
          if (
            (t.hasOwnProperty(r)
              ? void 0 !== t[r] && (a[r] = t[r])
              : void 0 !== e[r] && o.route.loader && (a[r] = e[r]),
            n && n.hasOwnProperty(r))
          )
            break;
        }
        return a;
      }
      function eh(e) {
        return e
          ? ew(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
          : {};
      }
      function ef(e, t) {
        return (
          (t ? e.slice(0, e.findIndex((e) => e.route.id === t) + 1) : [...e])
            .reverse()
            .find((e) => !0 === e.route.hasErrorBoundary) || e[0]
        );
      }
      function ep(e) {
        let t =
          1 === e.length
            ? e[0]
            : e.find((e) => e.index || !e.path || "/" === e.path) || {
                id: "__shim-error-route__",
              };
        return {
          matches: [{ params: {}, pathname: "", pathnameBase: "", route: t }],
          route: t,
        };
      }
      function em(e, t) {
        let {
            pathname: r,
            routeId: n,
            method: a,
            type: o,
            message: i,
          } = void 0 === t ? {} : t,
          l = "Unknown Server Error",
          s = "Unknown @remix-run/router error";
        return (
          400 === e
            ? ((l = "Bad Request"),
              a && r && n
                ? (s =
                    "You made a " +
                    a +
                    ' request to "' +
                    r +
                    '" but did not provide a `loader` for route "' +
                    n +
                    '", so there is no way to handle the request.')
                : "defer-action" === o
                ? (s = "defer() is not supported in actions")
                : "invalid-body" === o &&
                  (s = "Unable to encode submission body"))
            : 403 === e
            ? ((l = "Forbidden"),
              (s = 'Route "' + n + '" does not match URL "' + r + '"'))
            : 404 === e
            ? ((l = "Not Found"), (s = 'No route matches URL "' + r + '"'))
            : 405 === e &&
              ((l = "Method Not Allowed"),
              a && r && n
                ? (s =
                    "You made a " +
                    a.toUpperCase() +
                    ' request to "' +
                    r +
                    '" but did not provide an `action` for route "' +
                    n +
                    '", so there is no way to handle the request.')
                : a &&
                  (s = 'Invalid request method "' + a.toUpperCase() + '"')),
          new j(e || 500, l, Error(s), !0)
        );
      }
      function ev(e) {
        let t = Object.entries(e);
        for (let e = t.length - 1; e >= 0; e--) {
          let [r, n] = t[e];
          if (eb(n)) return { key: r, result: n };
        }
      }
      function ey(e) {
        let t = "string" == typeof e ? m(e) : e;
        return p(l({}, t, { hash: "" }));
      }
      function eg(e) {
        return e.type === a.deferred;
      }
      function ew(e) {
        return e.type === a.error;
      }
      function eb(e) {
        return (e && e.type) === a.redirect;
      }
      function eE(e) {
        return (
          "object" == typeof e &&
          null != e &&
          "type" in e &&
          "data" in e &&
          "init" in e &&
          "DataWithResponseInit" === e.type
        );
      }
      function ex(e) {
        return (
          null != e &&
          "number" == typeof e.status &&
          "string" == typeof e.statusText &&
          "object" == typeof e.headers &&
          void 0 !== e.body
        );
      }
      function eR(e) {
        return A.has(e.toLowerCase());
      }
      async function eS(e, t, r, n, a) {
        let o = Object.entries(t);
        for (let i = 0; i < o.length; i++) {
          let [l, s] = o[i],
            u = e.find((e) => (null == e ? void 0 : e.route.id) === l);
          if (!u) continue;
          let c = n.find((e) => e.route.id === u.route.id),
            d = null != c && !K(c, u) && (a && a[u.route.id]) !== void 0;
          eg(s) &&
            d &&
            (await eC(s, r, !1).then((e) => {
              e && (t[l] = e);
            }));
        }
      }
      async function eD(e, t, r) {
        for (let n = 0; n < r.length; n++) {
          let { key: a, routeId: o, controller: i } = r[n],
            l = t[a];
          e.find((e) => (null == e ? void 0 : e.route.id) === o) &&
            eg(l) &&
            (c(
              i,
              "Expected an AbortController for revalidating fetcher deferred result"
            ),
            await eC(l, i.signal, !0).then((e) => {
              e && (t[a] = e);
            }));
        }
      }
      async function eC(e, t, r) {
        if (
          (void 0 === r && (r = !1), !(await e.deferredData.resolveData(t)))
        ) {
          if (r)
            try {
              return { type: a.data, data: e.deferredData.unwrappedData };
            } catch (e) {
              return { type: a.error, error: e };
            }
          return { type: a.data, data: e.deferredData.data };
        }
      }
      function eL(e) {
        return new URLSearchParams(e).getAll("index").some((e) => "" === e);
      }
      function eP(e, t) {
        let r = "string" == typeof t ? m(t).search : t.search;
        if (e[e.length - 1].route.index && eL(r || "")) return e[e.length - 1];
        let n = D(e);
        return n[n.length - 1];
      }
      function ek(e) {
        let {
          formMethod: t,
          formAction: r,
          formEncType: n,
          text: a,
          formData: o,
          json: i,
        } = e;
        if (t && r && n) {
          if (null != a)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: void 0,
              json: void 0,
              text: a,
            };
          if (null != o)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: o,
              json: void 0,
              text: void 0,
            };
          if (void 0 !== i)
            return {
              formMethod: t,
              formAction: r,
              formEncType: n,
              formData: void 0,
              json: i,
              text: void 0,
            };
        }
      }
      function eT(e, t) {
        return t
          ? {
              state: "loading",
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
            }
          : {
              state: "loading",
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
            };
      }
      function eU(e, t) {
        return e
          ? {
              state: "loading",
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
            }
          : {
              state: "loading",
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
            };
      }
      function eM(e) {
        return {
          state: "idle",
          formMethod: void 0,
          formAction: void 0,
          formEncType: void 0,
          formData: void 0,
          json: void 0,
          text: void 0,
          data: e,
        };
      }
      Symbol("deferred");
    },
    79655: function (e, t, r) {
      r.d(t, { OL: () => k, aj: () => y, pG: () => S, rU: () => P });
      var n,
        a,
        o,
        i,
        l,
        s,
        u = r(67294),
        c = r(73935),
        d = r(89250),
        h = r(12599);
      function f() {
        return (f = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      function p(e, t) {
        if (null == e) return {};
        var r,
          n,
          a = {},
          o = Object.keys(e);
        for (n = 0; n < o.length; n++)
          (r = o[n]), t.indexOf(r) >= 0 || (a[r] = e[r]);
        return a;
      }
      let m = [
          "onClick",
          "relative",
          "reloadDocument",
          "replace",
          "state",
          "target",
          "to",
          "preventScrollReset",
          "viewTransition",
        ],
        v = [
          "aria-current",
          "caseSensitive",
          "className",
          "end",
          "style",
          "to",
          "viewTransition",
          "children",
        ];
      try {
        window.__reactRouterVersion = "6";
      } catch (e) {}
      function y(e, t) {
        var r;
        let n;
        return (0, h.p7)({
          basename: null == t ? void 0 : t.basename,
          future: f({}, null == t ? void 0 : t.future, {
            v7_prependBasename: !0,
          }),
          history: (0, h.lX)({ window: null == t ? void 0 : t.window }),
          hydrationData:
            (null == t ? void 0 : t.hydrationData) ||
            ((n =
              null == (r = window) ? void 0 : r.__staticRouterHydrationData) &&
              n.errors &&
              (n = f({}, n, {
                errors: (function (e) {
                  if (!e) return null;
                  let t = Object.entries(e),
                    r = {};
                  for (let [e, n] of t)
                    if (n && "RouteErrorResponse" === n.__type)
                      r[e] = new h.OF(
                        n.status,
                        n.statusText,
                        n.data,
                        !0 === n.internal
                      );
                    else if (n && "Error" === n.__type) {
                      if (n.__subType) {
                        let t = window[n.__subType];
                        if ("function" == typeof t)
                          try {
                            let a = new t(n.message);
                            (a.stack = ""), (r[e] = a);
                          } catch (e) {}
                      }
                      if (null == r[e]) {
                        let t = Error(n.message);
                        (t.stack = ""), (r[e] = t);
                      }
                    } else r[e] = n;
                  return r;
                })(n.errors),
              })),
            n),
          routes: e,
          mapRouteProperties: d.us,
          dataStrategy: null == t ? void 0 : t.dataStrategy,
          patchRoutesOnNavigation:
            null == t ? void 0 : t.patchRoutesOnNavigation,
          window: null == t ? void 0 : t.window,
        }).initialize();
      }
      let g = u.createContext({ isTransitioning: !1 }),
        w = u.createContext(new Map()),
        b = (o || (o = r.t(u, 2))).startTransition,
        E = (i || (i = r.t(c, 2))).flushSync;
      function x(e) {
        E ? E(e) : e();
      }
      (o || (o = r.t(u, 2))).useId;
      class R {
        constructor() {
          (this.status = "pending"),
            (this.promise = new Promise((e, t) => {
              (this.resolve = (t) => {
                "pending" === this.status && ((this.status = "resolved"), e(t));
              }),
                (this.reject = (e) => {
                  "pending" === this.status &&
                    ((this.status = "rejected"), t(e));
                });
            }));
        }
      }
      function S(e) {
        let { fallbackElement: t, router: r, future: n } = e,
          [a, o] = u.useState(r.state),
          [i, l] = u.useState(),
          [s, c] = u.useState({ isTransitioning: !1 }),
          [h, f] = u.useState(),
          [p, m] = u.useState(),
          [v, y] = u.useState(),
          E = u.useRef(new Map()),
          { v7_startTransition: S } = n || {},
          C = u.useCallback(
            (e) => {
              if (S) b ? b(e) : e();
              else e();
            },
            [S]
          ),
          L = u.useCallback(
            (e, t) => {
              let {
                deletedFetchers: n,
                flushSync: a,
                viewTransitionOpts: i,
              } = t;
              n.forEach((e) => E.current.delete(e)),
                e.fetchers.forEach((e, t) => {
                  void 0 !== e.data && E.current.set(t, e.data);
                });
              let s =
                null == r.window ||
                null == r.window.document ||
                "function" != typeof r.window.document.startViewTransition;
              if (!i || s) {
                a ? x(() => o(e)) : C(() => o(e));
                return;
              }
              if (a) {
                x(() => {
                  p && (h && h.resolve(), p.skipTransition()),
                    c({
                      isTransitioning: !0,
                      flushSync: !0,
                      currentLocation: i.currentLocation,
                      nextLocation: i.nextLocation,
                    });
                });
                let t = r.window.document.startViewTransition(() => {
                  x(() => o(e));
                });
                t.finished.finally(() => {
                  x(() => {
                    f(void 0), m(void 0), l(void 0), c({ isTransitioning: !1 });
                  });
                }),
                  x(() => m(t));
                return;
              }
              p
                ? (h && h.resolve(),
                  p.skipTransition(),
                  y({
                    state: e,
                    currentLocation: i.currentLocation,
                    nextLocation: i.nextLocation,
                  }))
                : (l(e),
                  c({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: i.currentLocation,
                    nextLocation: i.nextLocation,
                  }));
            },
            [r.window, p, h, E, C]
          );
        u.useLayoutEffect(() => r.subscribe(L), [r, L]),
          u.useEffect(() => {
            s.isTransitioning && !s.flushSync && f(new R());
          }, [s]),
          u.useEffect(() => {
            if (h && i && r.window) {
              let e = h.promise,
                t = r.window.document.startViewTransition(async () => {
                  C(() => o(i)), await e;
                });
              t.finished.finally(() => {
                f(void 0), m(void 0), l(void 0), c({ isTransitioning: !1 });
              }),
                m(t);
            }
          }, [C, i, h, r.window]),
          u.useEffect(() => {
            h && i && a.location.key === i.location.key && h.resolve();
          }, [h, p, a.location, i]),
          u.useEffect(() => {
            !s.isTransitioning &&
              v &&
              (l(v.state),
              c({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: v.currentLocation,
                nextLocation: v.nextLocation,
              }),
              y(void 0));
          }, [s.isTransitioning, v]),
          u.useEffect(() => {}, []);
        let P = u.useMemo(
            () => ({
              createHref: r.createHref,
              encodeLocation: r.encodeLocation,
              go: (e) => r.navigate(e),
              push: (e, t, n) =>
                r.navigate(e, {
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
              replace: (e, t, n) =>
                r.navigate(e, {
                  replace: !0,
                  state: t,
                  preventScrollReset: null == n ? void 0 : n.preventScrollReset,
                }),
            }),
            [r]
          ),
          k = r.basename || "/",
          T = u.useMemo(
            () => ({ router: r, navigator: P, static: !1, basename: k }),
            [r, P, k]
          ),
          U = u.useMemo(
            () => ({ v7_relativeSplatPath: r.future.v7_relativeSplatPath }),
            [r.future.v7_relativeSplatPath]
          );
        return u.createElement(
          u.Fragment,
          null,
          u.createElement(
            d.w3.Provider,
            { value: T },
            u.createElement(
              d.FR.Provider,
              { value: a },
              u.createElement(
                w.Provider,
                { value: E.current },
                u.createElement(
                  g.Provider,
                  { value: s },
                  u.createElement(
                    d.F0,
                    {
                      basename: k,
                      location: a.location,
                      navigationType: a.historyAction,
                      navigator: P,
                      future: U,
                    },
                    a.initialized || r.future.v7_partialHydration
                      ? u.createElement(D, {
                          routes: r.routes,
                          future: r.future,
                          state: a,
                        })
                      : t
                  )
                )
              )
            )
          ),
          null
        );
      }
      let D = u.memo(function (e) {
          let { routes: t, future: r, state: n } = e;
          return (0, d.DY)(t, void 0, n, r);
        }),
        C =
          "undefined" != typeof window &&
          void 0 !== window.document &&
          void 0 !== window.document.createElement,
        L = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
        P = u.forwardRef(function (e, t) {
          let r,
            {
              onClick: n,
              relative: a,
              reloadDocument: o,
              replace: i,
              state: l,
              target: s,
              to: c,
              preventScrollReset: v,
              viewTransition: y,
            } = e,
            g = p(e, m),
            { basename: w } = u.useContext(d.Us),
            b = !1;
          if ("string" == typeof c && L.test(c) && ((r = c), C))
            try {
              let e = new URL(window.location.href),
                t = new URL(c.startsWith("//") ? e.protocol + c : c),
                r = (0, h.Zn)(t.pathname, w);
              t.origin === e.origin && null != r
                ? (c = r + t.search + t.hash)
                : (b = !0);
            } catch (e) {}
          let E = (0, d.oQ)(c, { relative: a }),
            x = (function (e, t) {
              let {
                  target: r,
                  replace: n,
                  state: a,
                  preventScrollReset: o,
                  relative: i,
                  viewTransition: l,
                } = void 0 === t ? {} : t,
                s = (0, d.s0)(),
                c = (0, d.TH)(),
                f = (0, d.WU)(e, { relative: i });
              return u.useCallback(
                (t) => {
                  0 === t.button &&
                    (!r || "_self" === r) &&
                    !(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey) &&
                    (t.preventDefault(),
                    s(e, {
                      replace: void 0 !== n ? n : (0, h.Ep)(c) === (0, h.Ep)(f),
                      state: a,
                      preventScrollReset: o,
                      relative: i,
                      viewTransition: l,
                    }));
                },
                [c, s, f, n, a, r, e, o, i, l]
              );
            })(c, {
              replace: i,
              state: l,
              target: s,
              preventScrollReset: v,
              relative: a,
              viewTransition: y,
            });
          return u.createElement(
            "a",
            f({}, g, {
              href: r || E,
              onClick:
                b || o
                  ? n
                  : function (e) {
                      n && n(e), e.defaultPrevented || x(e);
                    },
              ref: t,
              target: s,
            })
          );
        }),
        k = u.forwardRef(function (e, t) {
          let r,
            {
              "aria-current": n = "page",
              caseSensitive: a = !1,
              className: o = "",
              end: i = !1,
              style: s,
              to: c,
              viewTransition: m,
              children: y,
            } = e,
            w = p(e, v),
            b = (0, d.WU)(c, { relative: w.relative }),
            E = (0, d.TH)(),
            x = u.useContext(d.FR),
            { navigator: R, basename: S } = u.useContext(d.Us),
            D =
              null != x &&
              (function (e, t) {
                var r;
                let n;
                void 0 === t && (t = {});
                let a = u.useContext(g);
                null == a && (0, h.J0)(!1);
                let { basename: o } =
                    (l.useViewTransitionState,
                    (n = u.useContext(d.w3)) || (0, h.J0)(!1),
                    n),
                  i = (0, d.WU)(e, { relative: t.relative });
                if (!a.isTransitioning) return !1;
                let s =
                    (0, h.Zn)(a.currentLocation.pathname, o) ||
                    a.currentLocation.pathname,
                  c =
                    (0, h.Zn)(a.nextLocation.pathname, o) ||
                    a.nextLocation.pathname;
                return (
                  null != (0, h.LX)(i.pathname, c) ||
                  null != (0, h.LX)(i.pathname, s)
                );
              })(b) &&
              !0 === m,
            C = R.encodeLocation ? R.encodeLocation(b).pathname : b.pathname,
            L = E.pathname,
            k =
              x && x.navigation && x.navigation.location
                ? x.navigation.location.pathname
                : null;
          a ||
            ((L = L.toLowerCase()),
            (k = k ? k.toLowerCase() : null),
            (C = C.toLowerCase())),
            k && S && (k = (0, h.Zn)(k, S) || k);
          let T = "/" !== C && C.endsWith("/") ? C.length - 1 : C.length,
            U = L === C || (!i && L.startsWith(C) && "/" === L.charAt(T)),
            M =
              null != k &&
              (k === C ||
                (!i && k.startsWith(C) && "/" === k.charAt(C.length))),
            j = { isActive: U, isPending: M, isTransitioning: D },
            _ = U ? n : void 0;
          r =
            "function" == typeof o
              ? o(j)
              : [
                  o,
                  U ? "active" : null,
                  M ? "pending" : null,
                  D ? "transitioning" : null,
                ]
                  .filter(Boolean)
                  .join(" ");
          let O = "function" == typeof s ? s(j) : s;
          return u.createElement(
            P,
            f({}, w, {
              "aria-current": _,
              className: r,
              ref: t,
              style: O,
              to: c,
              viewTransition: m,
            }),
            "function" == typeof y ? y(j) : y
          );
        });
      ((n = l || (l = {})).UseScrollRestoration = "useScrollRestoration"),
        (n.UseSubmit = "useSubmit"),
        (n.UseSubmitFetcher = "useSubmitFetcher"),
        (n.UseFetcher = "useFetcher"),
        (n.useViewTransitionState = "useViewTransitionState"),
        ((a = s || (s = {})).UseFetcher = "useFetcher"),
        (a.UseFetchers = "useFetchers"),
        (a.UseScrollRestoration = "useScrollRestoration");
    },
    89250: function (e, t, r) {
      r.d(t, {
        AW: () => A,
        DY: () => R,
        F0: () => F,
        FR: () => d,
        TH: () => g,
        Us: () => h,
        WU: () => x,
        _Z: () => j,
        i7: () =>
          function e(t, r) {
            void 0 === r && (r = []);
            let n = [];
            return (
              l.Children.forEach(t, (t, a) => {
                if (!l.isValidElement(t)) return;
                let o = [...r, a];
                if (t.type === l.Fragment) {
                  n.push.apply(n, e(t.props.children, o));
                  return;
                }
                t.type !== A && (0, s.J0)(!1),
                  t.props.index && t.props.children && (0, s.J0)(!1);
                let i = {
                  id: t.props.id || o.join("-"),
                  caseSensitive: t.props.caseSensitive,
                  element: t.props.element,
                  Component: t.props.Component,
                  index: t.props.index,
                  path: t.props.path,
                  loader: t.props.loader,
                  action: t.props.action,
                  errorElement: t.props.errorElement,
                  ErrorBoundary: t.props.ErrorBoundary,
                  hasErrorBoundary:
                    null != t.props.ErrorBoundary ||
                    null != t.props.errorElement,
                  shouldRevalidate: t.props.shouldRevalidate,
                  handle: t.props.handle,
                  lazy: t.props.lazy,
                };
                t.props.children && (i.children = e(t.props.children, o)),
                  n.push(i);
              }),
              n
            );
          },
        j3: () => O,
        oQ: () => v,
        s0: () => b,
        us: () => z,
        w3: () => c,
      });
      var n,
        a,
        o,
        i,
        l = r(67294),
        s = r(12599);
      function u() {
        return (u = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                  Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      let c = l.createContext(null),
        d = l.createContext(null),
        h = l.createContext(null),
        f = l.createContext(null),
        p = l.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
        m = l.createContext(null);
      function v(e, t) {
        let { relative: r } = void 0 === t ? {} : t;
        y() || (0, s.J0)(!1);
        let { basename: n, navigator: a } = l.useContext(h),
          { hash: o, pathname: i, search: u } = x(e, { relative: r }),
          c = i;
        return (
          "/" !== n && (c = "/" === i ? n : (0, s.RQ)([n, i])),
          a.createHref({ pathname: c, search: u, hash: o })
        );
      }
      function y() {
        return null != l.useContext(f);
      }
      function g() {
        return y() || (0, s.J0)(!1), l.useContext(f).location;
      }
      function w(e) {
        l.useContext(h).static || l.useLayoutEffect(e);
      }
      function b() {
        let { isDataRoute: e } = l.useContext(p);
        return e
          ? (function () {
              let { router: e } = k(L.UseNavigateStable),
                t = U(P.UseNavigateStable),
                r = l.useRef(!1);
              return (
                w(() => {
                  r.current = !0;
                }),
                l.useCallback(
                  function (n, a) {
                    void 0 === a && (a = {}),
                      r.current &&
                        ("number" == typeof n
                          ? e.navigate(n)
                          : e.navigate(n, u({ fromRouteId: t }, a)));
                  },
                  [e, t]
                )
              );
            })()
          : (function () {
              y() || (0, s.J0)(!1);
              let e = l.useContext(c),
                { basename: t, future: r, navigator: n } = l.useContext(h),
                { matches: a } = l.useContext(p),
                { pathname: o } = g(),
                i = JSON.stringify((0, s.cm)(a, r.v7_relativeSplatPath)),
                u = l.useRef(!1);
              return (
                w(() => {
                  u.current = !0;
                }),
                l.useCallback(
                  function (r, a) {
                    if ((void 0 === a && (a = {}), !u.current)) return;
                    if ("number" == typeof r) {
                      n.go(r);
                      return;
                    }
                    let l = (0, s.pC)(
                      r,
                      JSON.parse(i),
                      o,
                      "path" === a.relative
                    );
                    null == e &&
                      "/" !== t &&
                      (l.pathname =
                        "/" === l.pathname ? t : (0, s.RQ)([t, l.pathname])),
                      (a.replace ? n.replace : n.push)(l, a.state, a);
                  },
                  [t, n, i, o, e]
                )
              );
            })();
      }
      let E = l.createContext(null);
      function x(e, t) {
        let { relative: r } = void 0 === t ? {} : t,
          { future: n } = l.useContext(h),
          { matches: a } = l.useContext(p),
          { pathname: o } = g(),
          i = JSON.stringify((0, s.cm)(a, n.v7_relativeSplatPath));
        return l.useMemo(
          () => (0, s.pC)(e, JSON.parse(i), o, "path" === r),
          [e, i, o, r]
        );
      }
      function R(e, t, r, n) {
        let a;
        y() || (0, s.J0)(!1);
        let { navigator: o } = l.useContext(h),
          { matches: i } = l.useContext(p),
          c = i[i.length - 1],
          d = c ? c.params : {};
        c && c.pathname;
        let m = c ? c.pathnameBase : "/";
        c && c.route;
        let v = g();
        if (t) {
          var w;
          let e = "string" == typeof t ? (0, s.cP)(t) : t;
          "/" === m ||
            (null == (w = e.pathname) ? void 0 : w.startsWith(m)) ||
            (0, s.J0)(!1),
            (a = e);
        } else a = v;
        let b = a.pathname || "/",
          E = b;
        if ("/" !== m) {
          let e = m.replace(/^\//, "").split("/");
          E = "/" + b.replace(/^\//, "").split("/").slice(e.length).join("/");
        }
        let x = (0, s.fp)(e, { pathname: E }),
          R = (function (e, t, r, n) {
            var a, o;
            if (
              (void 0 === t && (t = []),
              void 0 === r && (r = null),
              void 0 === n && (n = null),
              null == e)
            ) {
              if (!r) return null;
              if (r.errors) e = r.matches;
              else {
                if (
                  null == (o = n) ||
                  !o.v7_partialHydration ||
                  0 !== t.length ||
                  r.initialized ||
                  !(r.matches.length > 0)
                )
                  return null;
                e = r.matches;
              }
            }
            let i = e,
              u = null == (a = r) ? void 0 : a.errors;
            if (null != u) {
              let e = i.findIndex(
                (e) =>
                  e.route.id && (null == u ? void 0 : u[e.route.id]) !== void 0
              );
              e >= 0 || (0, s.J0)(!1),
                (i = i.slice(0, Math.min(i.length, e + 1)));
            }
            let c = !1,
              d = -1;
            if (r && n && n.v7_partialHydration)
              for (let e = 0; e < i.length; e++) {
                let t = i[e];
                if (
                  ((t.route.HydrateFallback ||
                    t.route.hydrateFallbackElement) &&
                    (d = e),
                  t.route.id)
                ) {
                  let { loaderData: e, errors: n } = r,
                    a =
                      t.route.loader &&
                      void 0 === e[t.route.id] &&
                      (!n || void 0 === n[t.route.id]);
                  if (t.route.lazy || a) {
                    (c = !0), (i = d >= 0 ? i.slice(0, d + 1) : [i[0]]);
                    break;
                  }
                }
              }
            return i.reduceRight((e, n, a) => {
              var o, s;
              let h;
              let f = !1,
                p = null,
                m = null;
              r &&
                ((h = u && n.route.id ? u[n.route.id] : void 0),
                (p = n.route.errorElement || S),
                c &&
                  (d < 0 && 0 === a
                    ? ((o = "route-fallback"),
                      (s = 0),
                      _[o] || (_[o] = !0),
                      (f = !0),
                      (m = null))
                    : d === a &&
                      ((f = !0),
                      (m = n.route.hydrateFallbackElement || null))));
              let v = t.concat(i.slice(0, a + 1)),
                y = () => {
                  let t;
                  return (
                    (t = h
                      ? p
                      : f
                      ? m
                      : n.route.Component
                      ? l.createElement(n.route.Component, null)
                      : n.route.element
                      ? n.route.element
                      : e),
                    l.createElement(C, {
                      match: n,
                      routeContext: {
                        outlet: e,
                        matches: v,
                        isDataRoute: null != r,
                      },
                      children: t,
                    })
                  );
                };
              return r &&
                (n.route.ErrorBoundary || n.route.errorElement || 0 === a)
                ? l.createElement(D, {
                    location: r.location,
                    revalidation: r.revalidation,
                    component: p,
                    error: h,
                    children: y(),
                    routeContext: { outlet: null, matches: v, isDataRoute: !0 },
                  })
                : y();
            }, null);
          })(
            x &&
              x.map((e) =>
                Object.assign({}, e, {
                  params: Object.assign({}, d, e.params),
                  pathname: (0, s.RQ)([
                    m,
                    o.encodeLocation
                      ? o.encodeLocation(e.pathname).pathname
                      : e.pathname,
                  ]),
                  pathnameBase:
                    "/" === e.pathnameBase
                      ? m
                      : (0, s.RQ)([
                          m,
                          o.encodeLocation
                            ? o.encodeLocation(e.pathnameBase).pathname
                            : e.pathnameBase,
                        ]),
                })
              ),
            i,
            r,
            n
          );
        return t && R
          ? l.createElement(
              f.Provider,
              {
                value: {
                  location: u(
                    {
                      pathname: "/",
                      search: "",
                      hash: "",
                      state: null,
                      key: "default",
                    },
                    a
                  ),
                  navigationType: s.aU.Pop,
                },
              },
              R
            )
          : R;
      }
      let S = l.createElement(function () {
        var e;
        let t, r, n;
        let a =
            ((t = l.useContext(m)),
            (r = T(P.UseRouteError)),
            (n = U(P.UseRouteError)),
            void 0 !== t ? t : null == (e = r.errors) ? void 0 : e[n]),
          o = (0, s.WK)(a)
            ? a.status + " " + a.statusText
            : a instanceof Error
            ? a.message
            : JSON.stringify(a),
          i = a instanceof Error ? a.stack : null;
        return l.createElement(
          l.Fragment,
          null,
          l.createElement("h2", null, "Unexpected Application Error!"),
          l.createElement("h3", { style: { fontStyle: "italic" } }, o),
          i
            ? l.createElement(
                "pre",
                {
                  style: {
                    padding: "0.5rem",
                    backgroundColor: "rgba(200,200,200, 0.5)",
                  },
                },
                i
              )
            : null,
          null
        );
      }, null);
      class D extends l.Component {
        constructor(e) {
          super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            });
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            ("idle" !== t.revalidation && "idle" === e.revalidation)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: void 0 !== e.error ? e.error : t.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          console.error(
            "React Router caught the following error during render",
            e,
            t
          );
        }
        render() {
          return void 0 !== this.state.error
            ? l.createElement(
                p.Provider,
                { value: this.props.routeContext },
                l.createElement(m.Provider, {
                  value: this.state.error,
                  children: this.props.component,
                })
              )
            : this.props.children;
        }
      }
      function C(e) {
        let { routeContext: t, match: r, children: n } = e,
          a = l.useContext(c);
        return (
          a &&
            a.static &&
            a.staticContext &&
            (r.route.errorElement || r.route.ErrorBoundary) &&
            (a.staticContext._deepestRenderedBoundaryId = r.route.id),
          l.createElement(p.Provider, { value: t }, n)
        );
      }
      var L =
          (((n = L || {}).UseBlocker = "useBlocker"),
          (n.UseRevalidator = "useRevalidator"),
          (n.UseNavigateStable = "useNavigate"),
          n),
        P =
          (((a = P || {}).UseBlocker = "useBlocker"),
          (a.UseLoaderData = "useLoaderData"),
          (a.UseActionData = "useActionData"),
          (a.UseRouteError = "useRouteError"),
          (a.UseNavigation = "useNavigation"),
          (a.UseRouteLoaderData = "useRouteLoaderData"),
          (a.UseMatches = "useMatches"),
          (a.UseRevalidator = "useRevalidator"),
          (a.UseNavigateStable = "useNavigate"),
          (a.UseRouteId = "useRouteId"),
          a);
      function k(e) {
        let t = l.useContext(c);
        return t || (0, s.J0)(!1), t;
      }
      function T(e) {
        let t = l.useContext(d);
        return t || (0, s.J0)(!1), t;
      }
      function U(e) {
        let t;
        let r = ((t = l.useContext(p)) || (0, s.J0)(!1), t),
          n = r.matches[r.matches.length - 1];
        return n.route.id || (0, s.J0)(!1), n.route.id;
      }
      let M = 0;
      function j(e) {
        let { router: t, basename: r } = k(L.UseBlocker),
          n = T(P.UseBlocker),
          [a, o] = l.useState(""),
          i = l.useCallback(
            (t) => {
              if ("function" != typeof e) return !!e;
              if ("/" === r) return e(t);
              let { currentLocation: n, nextLocation: a, historyAction: o } = t;
              return e({
                currentLocation: u({}, n, {
                  pathname: (0, s.Zn)(n.pathname, r) || n.pathname,
                }),
                nextLocation: u({}, a, {
                  pathname: (0, s.Zn)(a.pathname, r) || a.pathname,
                }),
                historyAction: o,
              });
            },
            [r, e]
          );
        return (
          l.useEffect(() => {
            let e = String(++M);
            return o(e), () => t.deleteBlocker(e);
          }, [t]),
          l.useEffect(() => {
            "" !== a && t.getBlocker(a, i);
          }, [t, a, i]),
          a && n.blockers.has(a) ? n.blockers.get(a) : s.qp
        );
      }
      let _ = {};
      function O(e) {
        var t;
        let r;
        return (
          (t = e.context),
          (r = l.useContext(p).outlet)
            ? l.createElement(E.Provider, { value: t }, r)
            : r
        );
      }
      function A(e) {
        (0, s.J0)(!1);
      }
      function F(e) {
        let {
          basename: t = "/",
          children: r = null,
          location: n,
          navigationType: a = s.aU.Pop,
          navigator: o,
          static: i = !1,
          future: c,
        } = e;
        y() && (0, s.J0)(!1);
        let d = t.replace(/^\/*/, "/"),
          p = l.useMemo(
            () => ({
              basename: d,
              navigator: o,
              static: i,
              future: u({ v7_relativeSplatPath: !1 }, c),
            }),
            [d, c, o, i]
          );
        "string" == typeof n && (n = (0, s.cP)(n));
        let {
            pathname: m = "/",
            search: v = "",
            hash: g = "",
            state: w = null,
            key: b = "default",
          } = n,
          E = l.useMemo(() => {
            let e = (0, s.Zn)(m, d);
            return null == e
              ? null
              : {
                  location: {
                    pathname: e,
                    search: v,
                    hash: g,
                    state: w,
                    key: b,
                  },
                  navigationType: a,
                };
          }, [d, m, v, g, w, b, a]);
        return null == E
          ? null
          : l.createElement(
              h.Provider,
              { value: p },
              l.createElement(f.Provider, { children: r, value: E })
            );
      }
      (i || (i = r.t(l, 2))).startTransition;
      var B =
        (((o = B || {})[(o.pending = 0)] = "pending"),
        (o[(o.success = 1)] = "success"),
        (o[(o.error = 2)] = "error"),
        o);
      function z(e) {
        let t = {
          hasErrorBoundary: null != e.ErrorBoundary || null != e.errorElement,
        };
        return (
          e.Component &&
            Object.assign(t, {
              element: l.createElement(e.Component),
              Component: void 0,
            }),
          e.HydrateFallback &&
            Object.assign(t, {
              hydrateFallbackElement: l.createElement(e.HydrateFallback),
              HydrateFallback: void 0,
            }),
          e.ErrorBoundary &&
            Object.assign(t, {
              errorElement: l.createElement(e.ErrorBoundary),
              ErrorBoundary: void 0,
            }),
          t
        );
      }
      new Promise(() => {}), l.Component;
    },
  },
]);
