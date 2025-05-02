/*! For license information please see 911.88f700b8.js.LICENSE.txt */
"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["911"],
  {
    56300: function (e, t, r) {
      r.d(t, { Z: () => q });
      var n = (function () {
          function e(e) {
            var t = this;
            (this._insertTag = function (e) {
              var r;
              (r =
                0 === t.tags.length
                  ? t.insertionPoint
                    ? t.insertionPoint.nextSibling
                    : t.prepend
                    ? t.container.firstChild
                    : t.before
                  : t.tags[t.tags.length - 1].nextSibling),
                t.container.insertBefore(e, r),
                t.tags.push(e);
            }),
              (this.isSpeedy = void 0 === e.speedy || e.speedy),
              (this.tags = []),
              (this.ctr = 0),
              (this.nonce = e.nonce),
              (this.key = e.key),
              (this.container = e.container),
              (this.prepend = e.prepend),
              (this.insertionPoint = e.insertionPoint),
              (this.before = null);
          }
          var t = e.prototype;
          return (
            (t.hydrate = function (e) {
              e.forEach(this._insertTag);
            }),
            (t.insert = function (e) {
              if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
                var t;
                this._insertTag(
                  ((t = document.createElement("style")).setAttribute(
                    "data-emotion",
                    this.key
                  ),
                  void 0 !== this.nonce && t.setAttribute("nonce", this.nonce),
                  t.appendChild(document.createTextNode("")),
                  t.setAttribute("data-s", ""),
                  t)
                );
              }
              var r = this.tags[this.tags.length - 1];
              if (this.isSpeedy) {
                var n = (function (e) {
                  if (e.sheet) return e.sheet;
                  for (var t = 0; t < document.styleSheets.length; t++)
                    if (document.styleSheets[t].ownerNode === e)
                      return document.styleSheets[t];
                })(r);
                try {
                  n.insertRule(e, n.cssRules.length);
                } catch (e) {}
              } else r.appendChild(document.createTextNode(e));
              this.ctr++;
            }),
            (t.flush = function () {
              this.tags.forEach(function (e) {
                var t;
                return null == (t = e.parentNode) ? void 0 : t.removeChild(e);
              }),
                (this.tags = []),
                (this.ctr = 0);
            }),
            e
          );
        })(),
        i = Math.abs,
        s = String.fromCharCode,
        a = Object.assign;
      function o(e, t, r) {
        return e.replace(t, r);
      }
      function l(e, t) {
        return e.indexOf(t);
      }
      function u(e, t) {
        return 0 | e.charCodeAt(t);
      }
      function c(e, t, r) {
        return e.slice(t, r);
      }
      function h(e) {
        return e.length;
      }
      function f(e, t) {
        return t.push(e), e;
      }
      var d = 1,
        p = 1,
        g = 0,
        m = 0,
        y = 0,
        v = "";
      function b(e, t, r, n, i, s, a) {
        return {
          value: e,
          root: t,
          parent: r,
          type: n,
          props: i,
          children: s,
          line: d,
          column: p,
          length: a,
          return: "",
        };
      }
      function w(e, t) {
        return a(
          b("", null, null, "", null, null, 0),
          e,
          { length: -e.length },
          t
        );
      }
      function S() {
        return (y = m < g ? u(v, m++) : 0), p++, 10 === y && ((p = 1), d++), y;
      }
      function E() {
        return u(v, m);
      }
      function x(e) {
        switch (e) {
          case 0:
          case 9:
          case 10:
          case 13:
          case 32:
            return 5;
          case 33:
          case 43:
          case 44:
          case 47:
          case 62:
          case 64:
          case 126:
          case 59:
          case 123:
          case 125:
            return 4;
          case 58:
            return 3;
          case 34:
          case 39:
          case 40:
          case 91:
            return 2;
          case 41:
          case 93:
            return 1;
        }
        return 0;
      }
      function T(e) {
        return (d = p = 1), (g = h((v = e))), (m = 0), [];
      }
      function C(e) {
        var t, r;
        return ((t = m - 1),
        (r = (function e(t) {
          for (; S(); )
            switch (y) {
              case t:
                return m;
              case 34:
              case 39:
                34 !== t && 39 !== t && e(y);
                break;
              case 40:
                41 === t && e(t);
                break;
              case 92:
                S();
            }
          return m;
        })(91 === e ? e + 2 : 40 === e ? e + 1 : e)),
        c(v, t, r)).trim();
      }
      var _ = "-ms-",
        k = "-moz-",
        A = "-webkit-",
        I = "comm",
        D = "rule",
        N = "decl",
        R = "@keyframes";
      function P(e, t) {
        for (var r = "", n = e.length, i = 0; i < n; i++)
          r += t(e[i], i, e, t) || "";
        return r;
      }
      function O(e, t, r, n) {
        switch (e.type) {
          case "@layer":
            if (e.children.length) break;
          case "@import":
          case N:
            return (e.return = e.return || e.value);
          case I:
            return "";
          case R:
            return (e.return = e.value + "{" + P(e.children, n) + "}");
          case D:
            e.value = e.props.join(",");
        }
        return h((r = P(e.children, n)))
          ? (e.return = e.value + "{" + r + "}")
          : "";
      }
      function L(e, t, r, n, s, a, l, u, h, f, d) {
        for (
          var p = s - 1,
            g = 0 === s ? a : [""],
            m = g.length,
            y = 0,
            v = 0,
            w = 0;
          y < n;
          ++y
        )
          for (
            var S = 0, E = c(e, p + 1, (p = i((v = l[y])))), x = e;
            S < m;
            ++S
          )
            (x = (v > 0 ? g[S] + " " + E : o(E, /&\f/g, g[S])).trim()) &&
              (h[w++] = x);
        return b(e, t, r, 0 === s ? D : u, h, f, d);
      }
      function M(e, t, r, n) {
        return b(e, t, r, N, c(e, 0, n), c(e, n + 1, -1), n);
      }
      var $ = function (e, t, r) {
          for (
            var n = 0, i = 0;
            (n = i), (i = E()), 38 === n && 12 === i && (t[r] = 1), !x(i);

          )
            S();
          return c(v, e, m);
        },
        V = function (e, t) {
          var r = -1,
            n = 44;
          do
            switch (x(n)) {
              case 0:
                38 === n && 12 === E() && (t[r] = 1), (e[r] += $(m - 1, t, r));
                break;
              case 2:
                e[r] += C(n);
                break;
              case 4:
                if (44 === n) {
                  (e[++r] = 58 === E() ? "&\f" : ""), (t[r] = e[r].length);
                  break;
                }
              default:
                e[r] += s(n);
            }
          while ((n = S()));
          return e;
        },
        F = function (e, t) {
          var r;
          return (r = V(T(e), t)), (v = ""), r;
        },
        B = new WeakMap(),
        U = function (e) {
          if ("rule" === e.type && e.parent && !(e.length < 1)) {
            for (
              var t = e.value,
                r = e.parent,
                n = e.column === r.column && e.line === r.line;
              "rule" !== r.type;

            )
              if (!(r = r.parent)) return;
            if (
              (1 !== e.props.length || 58 === t.charCodeAt(0) || B.get(r)) &&
              !n
            ) {
              B.set(e, !0);
              for (
                var i = [], s = F(t, i), a = r.props, o = 0, l = 0;
                o < s.length;
                o++
              )
                for (var u = 0; u < a.length; u++, l++)
                  e.props[l] = i[o]
                    ? s[o].replace(/&\f/g, a[u])
                    : a[u] + " " + s[o];
            }
          }
        },
        j = function (e) {
          if ("decl" === e.type) {
            var t = e.value;
            108 === t.charCodeAt(0) &&
              98 === t.charCodeAt(2) &&
              ((e.return = ""), (e.value = ""));
          }
        },
        z = [
          function (e, t, r, n) {
            if (e.length > -1 && !e.return)
              switch (e.type) {
                case N:
                  e.return = (function e(t, r) {
                    switch (
                      45 ^ u(t, 0)
                        ? (((((((r << 2) ^ u(t, 0)) << 2) ^ u(t, 1)) << 2) ^
                            u(t, 2)) <<
                            2) ^
                          u(t, 3)
                        : 0
                    ) {
                      case 5103:
                        return A + "print-" + t + t;
                      case 5737:
                      case 4201:
                      case 3177:
                      case 3433:
                      case 1641:
                      case 4457:
                      case 2921:
                      case 5572:
                      case 6356:
                      case 5844:
                      case 3191:
                      case 6645:
                      case 3005:
                      case 6391:
                      case 5879:
                      case 5623:
                      case 6135:
                      case 4599:
                      case 4855:
                      case 4215:
                      case 6389:
                      case 5109:
                      case 5365:
                      case 5621:
                      case 3829:
                        return A + t + t;
                      case 5349:
                      case 4246:
                      case 4810:
                      case 6968:
                      case 2756:
                        return A + t + k + t + _ + t + t;
                      case 6828:
                      case 4268:
                        return A + t + _ + t + t;
                      case 6165:
                        return A + t + _ + "flex-" + t + t;
                      case 5187:
                        return (
                          A +
                          t +
                          o(
                            t,
                            /(\w+).+(:[^]+)/,
                            A + "box-$1$2" + _ + "flex-$1$2"
                          ) +
                          t
                        );
                      case 5443:
                        return (
                          A + t + _ + "flex-item-" + o(t, /flex-|-self/, "") + t
                        );
                      case 4675:
                        return (
                          A +
                          t +
                          _ +
                          "flex-line-pack" +
                          o(t, /align-content|flex-|-self/, "") +
                          t
                        );
                      case 5548:
                        return A + t + _ + o(t, "shrink", "negative") + t;
                      case 5292:
                        return A + t + _ + o(t, "basis", "preferred-size") + t;
                      case 6060:
                        return (
                          A +
                          "box-" +
                          o(t, "-grow", "") +
                          A +
                          t +
                          _ +
                          o(t, "grow", "positive") +
                          t
                        );
                      case 4554:
                        return (
                          A + o(t, /([^-])(transform)/g, "$1" + A + "$2") + t
                        );
                      case 6187:
                        return (
                          o(
                            o(
                              o(t, /(zoom-|grab)/, A + "$1"),
                              /(image-set)/,
                              A + "$1"
                            ),
                            t,
                            ""
                          ) + t
                        );
                      case 5495:
                      case 3959:
                        return o(t, /(image-set\([^]*)/, A + "$1$`$1");
                      case 4968:
                        return (
                          o(
                            o(
                              t,
                              /(.+:)(flex-)?(.*)/,
                              A + "box-pack:$3" + _ + "flex-pack:$3"
                            ),
                            /s.+-b[^;]+/,
                            "justify"
                          ) +
                          A +
                          t +
                          t
                        );
                      case 4095:
                      case 3583:
                      case 4068:
                      case 2532:
                        return o(t, /(.+)-inline(.+)/, A + "$1$2") + t;
                      case 8116:
                      case 7059:
                      case 5753:
                      case 5535:
                      case 5445:
                      case 5701:
                      case 4933:
                      case 4677:
                      case 5533:
                      case 5789:
                      case 5021:
                      case 4765:
                        if (h(t) - 1 - r > 6)
                          switch (u(t, r + 1)) {
                            case 109:
                              if (45 !== u(t, r + 4)) break;
                            case 102:
                              return (
                                o(
                                  t,
                                  /(.+:)(.+)-([^]+)/,
                                  "$1" +
                                    A +
                                    "$2-$3$1" +
                                    k +
                                    (108 == u(t, r + 3) ? "$3" : "$2-$3")
                                ) + t
                              );
                            case 115:
                              return ~l(t, "stretch")
                                ? e(o(t, "stretch", "fill-available"), r) + t
                                : t;
                          }
                        break;
                      case 4949:
                        if (115 !== u(t, r + 1)) break;
                      case 6444:
                        switch (u(t, h(t) - 3 - (~l(t, "!important") && 10))) {
                          case 107:
                            return o(t, ":", ":" + A) + t;
                          case 101:
                            return (
                              o(
                                t,
                                /(.+:)([^;!]+)(;|!.+)?/,
                                "$1" +
                                  A +
                                  (45 === u(t, 14) ? "inline-" : "") +
                                  "box$3$1" +
                                  A +
                                  "$2$3$1" +
                                  _ +
                                  "$2box$3"
                              ) + t
                            );
                        }
                        break;
                      case 5936:
                        switch (u(t, r + 11)) {
                          case 114:
                            return (
                              A + t + _ + o(t, /[svh]\w+-[tblr]{2}/, "tb") + t
                            );
                          case 108:
                            return (
                              A +
                              t +
                              _ +
                              o(t, /[svh]\w+-[tblr]{2}/, "tb-rl") +
                              t
                            );
                          case 45:
                            return (
                              A + t + _ + o(t, /[svh]\w+-[tblr]{2}/, "lr") + t
                            );
                        }
                        return A + t + _ + t + t;
                    }
                    return t;
                  })(e.value, e.length);
                  break;
                case R:
                  return P([w(e, { value: o(e.value, "@", "@" + A) })], n);
                case D:
                  if (e.length) {
                    var i, s;
                    return (
                      (i = e.props),
                      (s = function (t) {
                        var r;
                        switch (
                          ((r = t),
                          (r = /(::plac\w+|:read-\w+)/.exec(r)) ? r[0] : r)
                        ) {
                          case ":read-only":
                          case ":read-write":
                            return P(
                              [
                                w(e, {
                                  props: [o(t, /:(read-\w+)/, ":" + k + "$1")],
                                }),
                              ],
                              n
                            );
                          case "::placeholder":
                            return P(
                              [
                                w(e, {
                                  props: [
                                    o(t, /:(plac\w+)/, ":" + A + "input-$1"),
                                  ],
                                }),
                                w(e, {
                                  props: [o(t, /:(plac\w+)/, ":" + k + "$1")],
                                }),
                                w(e, {
                                  props: [o(t, /:(plac\w+)/, _ + "input-$1")],
                                }),
                              ],
                              n
                            );
                        }
                        return "";
                      }),
                      i.map(s).join("")
                    );
                  }
              }
          },
        ],
        q = function (e) {
          var t,
            r,
            i,
            a,
            g,
            w,
            _ = e.key;
          if ("css" === _) {
            var k = document.querySelectorAll(
              "style[data-emotion]:not([data-s])"
            );
            Array.prototype.forEach.call(k, function (e) {
              -1 !== e.getAttribute("data-emotion").indexOf(" ") &&
                (document.head.appendChild(e), e.setAttribute("data-s", ""));
            });
          }
          var A = e.stylisPlugins || z,
            D = {},
            N = [];
          (r = e.container || document.head),
            Array.prototype.forEach.call(
              document.querySelectorAll('style[data-emotion^="' + _ + ' "]'),
              function (e) {
                for (
                  var t = e.getAttribute("data-emotion").split(" "), r = 1;
                  r < t.length;
                  r++
                )
                  D[t[r]] = !0;
                N.push(e);
              }
            );
          var R =
              ((w = (g = [U, j].concat(A, [
                O,
                ((t = function (e) {
                  a.insert(e);
                }),
                function (e) {
                  !e.root && (e = e.return) && t(e);
                }),
              ])).length),
              function (e, t, r, n) {
                for (var i = "", s = 0; s < w; s++) i += g[s](e, t, r, n) || "";
                return i;
              }),
            $ = function (e) {
              var t, r;
              return P(
                ((r = (function e(t, r, n, i, a, g, w, T, _) {
                  for (
                    var k,
                      A = 0,
                      D = 0,
                      N = w,
                      R = 0,
                      P = 0,
                      O = 0,
                      $ = 1,
                      V = 1,
                      F = 1,
                      B = 0,
                      U = "",
                      j = a,
                      z = g,
                      q = i,
                      H = U;
                    V;

                  )
                    switch (((O = B), (B = S()))) {
                      case 40:
                        if (108 != O && 58 == u(H, N - 1)) {
                          -1 != l((H += o(C(B), "&", "&\f")), "&\f") &&
                            (F = -1);
                          break;
                        }
                      case 34:
                      case 39:
                      case 91:
                        H += C(B);
                        break;
                      case 9:
                      case 10:
                      case 13:
                      case 32:
                        H += (function (e) {
                          for (; (y = E()); )
                            if (y < 33) S();
                            else break;
                          return x(e) > 2 || x(y) > 3 ? "" : " ";
                        })(O);
                        break;
                      case 92:
                        H += (function (e, t) {
                          for (
                            var r;
                            --t &&
                            S() &&
                            !(y < 48) &&
                            !(y > 102) &&
                            (!(y > 57) || !(y < 65)) &&
                            (!(y > 70) || !(y < 97));

                          );
                          return (
                            (r = m + (t < 6 && 32 == E() && 32 == S())),
                            c(v, e, r)
                          );
                        })(m - 1, 7);
                        continue;
                      case 47:
                        switch (E()) {
                          case 42:
                          case 47:
                            f(
                              ((k = (function (e, t) {
                                for (; S(); )
                                  if (e + y === 57) break;
                                  else if (e + y === 84 && 47 === E()) break;
                                return (
                                  "/*" +
                                  c(v, t, m - 1) +
                                  "*" +
                                  s(47 === e ? e : S())
                                );
                              })(S(), m)),
                              b(k, r, n, I, s(y), c(k, 2, -2), 0)),
                              _
                            );
                            break;
                          default:
                            H += "/";
                        }
                        break;
                      case 123 * $:
                        T[A++] = h(H) * F;
                      case 125 * $:
                      case 59:
                      case 0:
                        switch (B) {
                          case 0:
                          case 125:
                            V = 0;
                          case 59 + D:
                            -1 == F && (H = o(H, /\f/g, "")),
                              P > 0 &&
                                h(H) - N &&
                                f(
                                  P > 32
                                    ? M(H + ";", i, n, N - 1)
                                    : M(o(H, " ", "") + ";", i, n, N - 2),
                                  _
                                );
                            break;
                          case 59:
                            H += ";";
                          default:
                            if (
                              (f(
                                (q = L(
                                  H,
                                  r,
                                  n,
                                  A,
                                  D,
                                  a,
                                  T,
                                  U,
                                  (j = []),
                                  (z = []),
                                  N
                                )),
                                g
                              ),
                              123 === B)
                            ) {
                              if (0 === D) e(H, r, q, q, j, g, N, T, z);
                              else
                                switch (99 === R && 110 === u(H, 3) ? 100 : R) {
                                  case 100:
                                  case 108:
                                  case 109:
                                  case 115:
                                    e(
                                      t,
                                      q,
                                      q,
                                      i &&
                                        f(
                                          L(
                                            t,
                                            q,
                                            q,
                                            0,
                                            0,
                                            a,
                                            T,
                                            U,
                                            a,
                                            (j = []),
                                            N
                                          ),
                                          z
                                        ),
                                      a,
                                      z,
                                      N,
                                      T,
                                      i ? j : z
                                    );
                                    break;
                                  default:
                                    e(H, q, q, q, [""], z, 0, T, z);
                                }
                            }
                        }
                        (A = D = P = 0), ($ = F = 1), (U = H = ""), (N = w);
                        break;
                      case 58:
                        (N = 1 + h(H)), (P = O);
                      default:
                        if ($ < 1) {
                          if (123 == B) --$;
                          else if (
                            125 == B &&
                            0 == $++ &&
                            125 ==
                              ((y = m > 0 ? u(v, --m) : 0),
                              p--,
                              10 === y && ((p = 1), d--),
                              y)
                          )
                            continue;
                        }
                        switch (((H += s(B)), B * $)) {
                          case 38:
                            F = D > 0 ? 1 : ((H += "\f"), -1);
                            break;
                          case 44:
                            (T[A++] = (h(H) - 1) * F), (F = 1);
                            break;
                          case 64:
                            45 === E() && (H += C(S())),
                              (R = E()),
                              (D = N =
                                h(
                                  (U = H +=
                                    (function (e) {
                                      for (; !x(E()); ) S();
                                      return c(v, e, m);
                                    })(m))
                                )),
                              B++;
                            break;
                          case 45:
                            45 === O && 2 == h(H) && ($ = 0);
                        }
                    }
                  return g;
                })("", null, null, null, [""], (t = T((t = e))), 0, [0], t)),
                (v = ""),
                r),
                R
              );
            };
          i = function (e, t, r, n) {
            (a = r),
              $(e ? e + "{" + t.styles + "}" : t.styles),
              n && (V.inserted[t.name] = !0);
          };
          var V = {
            key: _,
            sheet: new n({
              key: _,
              container: r,
              nonce: e.nonce,
              speedy: e.speedy,
              prepend: e.prepend,
              insertionPoint: e.insertionPoint,
            }),
            nonce: e.nonce,
            inserted: D,
            registered: {},
            insert: i,
          };
          return V.sheet.hydrate(N), V;
        };
    },
    87685: function (e, t, r) {
      r.d(t, { E: () => g, T: () => c, c: () => d, h: () => h, w: () => u });
      var n = r(67294),
        i = r(56300),
        s = r(70444),
        a = r(67819),
        o = r(27278),
        l = n.createContext(
          "undefined" != typeof HTMLElement ? (0, i.Z)({ key: "css" }) : null
        );
      l.Provider;
      var u = function (e) {
          return (0, n.forwardRef)(function (t, r) {
            return e(t, (0, n.useContext)(l), r);
          });
        },
        c = n.createContext({}),
        h = {}.hasOwnProperty,
        f = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__",
        d = function (e, t) {
          var r = {};
          for (var n in t) h.call(t, n) && (r[n] = t[n]);
          return (r[f] = e), r;
        },
        p = function (e) {
          var t = e.cache,
            r = e.serialized,
            n = e.isStringTag;
          return (
            (0, s.hC)(t, r, n),
            (0, o.L)(function () {
              return (0, s.My)(t, r, n);
            }),
            null
          );
        },
        g = u(function (e, t, r) {
          var i = e.css;
          "string" == typeof i &&
            void 0 !== t.registered[i] &&
            (i = t.registered[i]);
          var o = e[f],
            l = [i],
            u = "";
          "string" == typeof e.className
            ? (u = (0, s.fp)(t.registered, l, e.className))
            : null != e.className && (u = e.className + " ");
          var d = (0, a.O)(l, void 0, n.useContext(c));
          u += t.key + "-" + d.name;
          var g = {};
          for (var m in e)
            h.call(e, m) && "css" !== m && m !== f && (g[m] = e[m]);
          return (
            (g.className = u),
            r && (g.ref = r),
            n.createElement(
              n.Fragment,
              null,
              n.createElement(p, {
                cache: t,
                serialized: d,
                isStringTag: "string" == typeof o,
              }),
              n.createElement(o, g)
            )
          );
        });
    },
    67819: function (e, t, r) {
      r.d(t, { O: () => g });
      var n,
        i,
        s,
        a = {
          animationIterationCount: 1,
          aspectRatio: 1,
          borderImageOutset: 1,
          borderImageSlice: 1,
          borderImageWidth: 1,
          boxFlex: 1,
          boxFlexGroup: 1,
          boxOrdinalGroup: 1,
          columnCount: 1,
          columns: 1,
          flex: 1,
          flexGrow: 1,
          flexPositive: 1,
          flexShrink: 1,
          flexNegative: 1,
          flexOrder: 1,
          gridRow: 1,
          gridRowEnd: 1,
          gridRowSpan: 1,
          gridRowStart: 1,
          gridColumn: 1,
          gridColumnEnd: 1,
          gridColumnSpan: 1,
          gridColumnStart: 1,
          msGridRow: 1,
          msGridRowSpan: 1,
          msGridColumn: 1,
          msGridColumnSpan: 1,
          fontWeight: 1,
          lineHeight: 1,
          opacity: 1,
          order: 1,
          orphans: 1,
          scale: 1,
          tabSize: 1,
          widows: 1,
          zIndex: 1,
          zoom: 1,
          WebkitLineClamp: 1,
          fillOpacity: 1,
          floodOpacity: 1,
          stopOpacity: 1,
          strokeDasharray: 1,
          strokeDashoffset: 1,
          strokeMiterlimit: 1,
          strokeOpacity: 1,
          strokeWidth: 1,
        },
        o = /[A-Z]|^ms/g,
        l = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
        u = function (e) {
          return 45 === e.charCodeAt(1);
        },
        c = function (e) {
          return null != e && "boolean" != typeof e;
        },
        h =
          ((n = function (e) {
            return u(e) ? e : e.replace(o, "-$&").toLowerCase();
          }),
          (i = Object.create(null)),
          function (e) {
            return void 0 === i[e] && (i[e] = n(e)), i[e];
          }),
        f = function (e, t) {
          switch (e) {
            case "animation":
            case "animationName":
              if ("string" == typeof t)
                return t.replace(l, function (e, t, r) {
                  return (s = { name: t, styles: r, next: s }), t;
                });
          }
          return 1 === a[e] || u(e) || "number" != typeof t || 0 === t
            ? t
            : t + "px";
        };
      function d(e, t, r) {
        if (null == r) return "";
        if (void 0 !== r.__emotion_styles) return r;
        switch (typeof r) {
          case "boolean":
            return "";
          case "object":
            if (1 === r.anim)
              return (s = { name: r.name, styles: r.styles, next: s }), r.name;
            if (void 0 !== r.styles) {
              var n = r.next;
              if (void 0 !== n)
                for (; void 0 !== n; )
                  (s = { name: n.name, styles: n.styles, next: s }),
                    (n = n.next);
              return r.styles + ";";
            }
            return (function (e, t, r) {
              var n = "";
              if (Array.isArray(r))
                for (var i = 0; i < r.length; i++) n += d(e, t, r[i]) + ";";
              else
                for (var s in r) {
                  var a = r[s];
                  if ("object" != typeof a)
                    null != t && void 0 !== t[a]
                      ? (n += s + "{" + t[a] + "}")
                      : c(a) && (n += h(s) + ":" + f(s, a) + ";");
                  else if (
                    Array.isArray(a) &&
                    "string" == typeof a[0] &&
                    (null == t || void 0 === t[a[0]])
                  )
                    for (var o = 0; o < a.length; o++)
                      c(a[o]) && (n += h(s) + ":" + f(s, a[o]) + ";");
                  else {
                    var l = d(e, t, a);
                    switch (s) {
                      case "animation":
                      case "animationName":
                        n += h(s) + ":" + l + ";";
                        break;
                      default:
                        n += s + "{" + l + "}";
                    }
                  }
                }
              return n;
            })(e, t, r);
          case "function":
            if (void 0 !== e) {
              var i = s,
                a = r(e);
              return (s = i), d(e, t, a);
            }
        }
        if (null == t) return r;
        var o = t[r];
        return void 0 !== o ? o : r;
      }
      var p = /label:\s*([^\s;{]+)\s*(;|$)/g;
      function g(e, t, r) {
        if (
          1 === e.length &&
          "object" == typeof e[0] &&
          null !== e[0] &&
          void 0 !== e[0].styles
        )
          return e[0];
        var n,
          i = !0,
          a = "";
        s = void 0;
        var o = e[0];
        null == o || void 0 === o.raw
          ? ((i = !1), (a += d(r, t, o)))
          : (a += o[0]);
        for (var l = 1; l < e.length; l++)
          (a += d(r, t, e[l])), i && (a += o[l]);
        p.lastIndex = 0;
        for (var u = ""; null !== (n = p.exec(a)); ) u += "-" + n[1];
        return {
          name:
            (function (e) {
              for (var t, r = 0, n = 0, i = e.length; i >= 4; ++n, i -= 4)
                (t =
                  (65535 &
                    (t =
                      (255 & e.charCodeAt(n)) |
                      ((255 & e.charCodeAt(++n)) << 8) |
                      ((255 & e.charCodeAt(++n)) << 16) |
                      ((255 & e.charCodeAt(++n)) << 24))) *
                    0x5bd1e995 +
                  (((t >>> 16) * 59797) << 16)),
                  (t ^= t >>> 24),
                  (r =
                    ((65535 & t) * 0x5bd1e995 + (((t >>> 16) * 59797) << 16)) ^
                    ((65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16)));
              switch (i) {
                case 3:
                  r ^= (255 & e.charCodeAt(n + 2)) << 16;
                case 2:
                  r ^= (255 & e.charCodeAt(n + 1)) << 8;
                case 1:
                  (r ^= 255 & e.charCodeAt(n)),
                    (r =
                      (65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16));
              }
              return (
                (r ^= r >>> 13),
                (
                  ((r =
                    (65535 & r) * 0x5bd1e995 + (((r >>> 16) * 59797) << 16)) ^
                    (r >>> 15)) >>>
                  0
                ).toString(36)
              );
            })(a) + u,
          styles: a,
          next: s,
        };
      }
    },
    27278: function (e, t, r) {
      r.d(t, { L: () => a });
      var n,
        i = r(67294),
        s =
          !!(n || (n = r.t(i, 2))).useInsertionEffect &&
          (n || (n = r.t(i, 2))).useInsertionEffect,
        a =
          s ||
          function (e) {
            return e();
          };
      s || i.useLayoutEffect;
    },
    70444: function (e, t, r) {
      function n(e, t, r) {
        var n = "";
        return (
          r.split(" ").forEach(function (r) {
            void 0 !== e[r] ? t.push(e[r] + ";") : r && (n += r + " ");
          }),
          n
        );
      }
      r.d(t, { My: () => s, fp: () => n, hC: () => i });
      var i = function (e, t, r) {
          var n = e.key + "-" + t.name;
          !1 === r &&
            void 0 === e.registered[n] &&
            (e.registered[n] = t.styles);
        },
        s = function (e, t, r) {
          i(e, t, r);
          var n = e.key + "-" + t.name;
          if (void 0 === e.inserted[t.name]) {
            var s = t;
            do e.insert(t === s ? "." + n : "", s, e.sheet, !0), (s = s.next);
            while (void 0 !== s);
          }
        };
    },
    24550: function (e, t, r) {
      r.d(t, {
        ZR: () => T,
        vZ: () =>
          function e(t, r) {
            if (t === r) return !0;
            let n = Object.keys(t),
              i = Object.keys(r);
            for (let s of n) {
              if (!i.includes(s)) return !1;
              let n = t[s],
                a = r[s];
              if (k(n) && k(a)) {
                if (!e(n, a)) return !1;
              } else if (n !== a) return !1;
            }
            for (let e of i) if (!n.includes(e)) return !1;
            return !0;
          },
        LL: () => C,
        BH: () => v,
        Sg: () => b,
        eu: () => x,
        tV: () => c,
        aH: () => y,
        L: () => u,
        P0: () => m,
        hl: () => E,
        G6: () => S,
        m9: () => A,
        z$: () => w,
      });
      let n = () => void 0,
        i = function (e) {
          let t = [],
            r = 0;
          for (let n = 0; n < e.length; n++) {
            let i = e.charCodeAt(n);
            i < 128
              ? (t[r++] = i)
              : (i < 2048
                  ? (t[r++] = (i >> 6) | 192)
                  : ((64512 & i) == 55296 &&
                    n + 1 < e.length &&
                    (64512 & e.charCodeAt(n + 1)) == 56320
                      ? ((i =
                          65536 +
                          ((1023 & i) << 10) +
                          (1023 & e.charCodeAt(++n))),
                        (t[r++] = (i >> 18) | 240),
                        (t[r++] = ((i >> 12) & 63) | 128))
                      : (t[r++] = (i >> 12) | 224),
                    (t[r++] = ((i >> 6) & 63) | 128)),
                (t[r++] = (63 & i) | 128));
          }
          return t;
        },
        s = function (e) {
          let t = [],
            r = 0,
            n = 0;
          for (; r < e.length; ) {
            let i = e[r++];
            if (i < 128) t[n++] = String.fromCharCode(i);
            else if (i > 191 && i < 224) {
              let s = e[r++];
              t[n++] = String.fromCharCode(((31 & i) << 6) | (63 & s));
            } else if (i > 239 && i < 365) {
              let s = e[r++],
                a =
                  (((7 & i) << 18) |
                    ((63 & s) << 12) |
                    ((63 & e[r++]) << 6) |
                    (63 & e[r++])) -
                  65536;
              (t[n++] = String.fromCharCode(55296 + (a >> 10))),
                (t[n++] = String.fromCharCode(56320 + (1023 & a)));
            } else {
              let s = e[r++],
                a = e[r++];
              t[n++] = String.fromCharCode(
                ((15 & i) << 12) | ((63 & s) << 6) | (63 & a)
              );
            }
          }
          return t.join("");
        },
        a = {
          byteToCharMap_: null,
          charToByteMap_: null,
          byteToCharMapWebSafe_: null,
          charToByteMapWebSafe_: null,
          ENCODED_VALS_BASE:
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
          get ENCODED_VALS() {
            return this.ENCODED_VALS_BASE + "+/=";
          },
          get ENCODED_VALS_WEBSAFE() {
            return this.ENCODED_VALS_BASE + "-_.";
          },
          HAS_NATIVE_SUPPORT: "function" == typeof atob,
          encodeByteArray(e, t) {
            if (!Array.isArray(e))
              throw Error("encodeByteArray takes an array as a parameter");
            this.init_();
            let r = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
              n = [];
            for (let t = 0; t < e.length; t += 3) {
              let i = e[t],
                s = t + 1 < e.length,
                a = s ? e[t + 1] : 0,
                o = t + 2 < e.length,
                l = o ? e[t + 2] : 0,
                u = i >> 2,
                c = ((3 & i) << 4) | (a >> 4),
                h = ((15 & a) << 2) | (l >> 6),
                f = 63 & l;
              o || ((f = 64), s || (h = 64)), n.push(r[u], r[c], r[h], r[f]);
            }
            return n.join("");
          },
          encodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? btoa(e)
              : this.encodeByteArray(i(e), t);
          },
          decodeString(e, t) {
            return this.HAS_NATIVE_SUPPORT && !t
              ? atob(e)
              : s(this.decodeStringToByteArray(e, t));
          },
          decodeStringToByteArray(e, t) {
            this.init_();
            let r = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
              n = [];
            for (let t = 0; t < e.length; ) {
              let i = r[e.charAt(t++)],
                s = t < e.length ? r[e.charAt(t)] : 0,
                a = ++t < e.length ? r[e.charAt(t)] : 64,
                l = ++t < e.length ? r[e.charAt(t)] : 64;
              if ((++t, null == i || null == s || null == a || null == l))
                throw new o();
              let u = (i << 2) | (s >> 4);
              if ((n.push(u), 64 !== a)) {
                let e = ((s << 4) & 240) | (a >> 2);
                if ((n.push(e), 64 !== l)) {
                  let e = ((a << 6) & 192) | l;
                  n.push(e);
                }
              }
            }
            return n;
          },
          init_() {
            if (!this.byteToCharMap_) {
              (this.byteToCharMap_ = {}),
                (this.charToByteMap_ = {}),
                (this.byteToCharMapWebSafe_ = {}),
                (this.charToByteMapWebSafe_ = {});
              for (let e = 0; e < this.ENCODED_VALS.length; e++)
                (this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e)),
                  (this.charToByteMap_[this.byteToCharMap_[e]] = e),
                  (this.byteToCharMapWebSafe_[e] =
                    this.ENCODED_VALS_WEBSAFE.charAt(e)),
                  (this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] =
                    e),
                  e >= this.ENCODED_VALS_BASE.length &&
                    ((this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] =
                      e),
                    (this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] =
                      e));
            }
          },
        };
      class o extends Error {
        constructor() {
          super(...arguments), (this.name = "DecodeBase64StringError");
        }
      }
      let l = function (e) {
          let t = i(e);
          return a.encodeByteArray(t, !0);
        },
        u = function (e) {
          return l(e).replace(/\./g, "");
        },
        c = function (e) {
          try {
            return a.decodeString(e, !0);
          } catch (e) {
            console.error("base64Decode failed: ", e);
          }
          return null;
        },
        h = () =>
          (function () {
            if ("undefined" != typeof self) return self;
            if ("undefined" != typeof window) return window;
            if (void 0 !== r.g) return r.g;
            throw Error("Unable to locate global object.");
          })().__FIREBASE_DEFAULTS__,
        f = () => {
          if ("undefined" == typeof process) return;
          let e = void 0;
          if (e) return JSON.parse(e);
        },
        d = () => {
          let e;
          if ("undefined" == typeof document) return;
          try {
            e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/);
          } catch (e) {
            return;
          }
          let t = e && c(e[1]);
          return t && JSON.parse(t);
        },
        p = () => {
          try {
            return n() || h() || f() || d();
          } catch (e) {
            console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);
            return;
          }
        },
        g = (e) => {
          var t, r;
          return null ===
            (r =
              null === (t = p()) || void 0 === t ? void 0 : t.emulatorHosts) ||
            void 0 === r
            ? void 0
            : r[e];
        },
        m = (e) => {
          let t = g(e);
          if (!t) return;
          let r = t.lastIndexOf(":");
          if (r <= 0 || r + 1 === t.length)
            throw Error(
              `Invalid host ${t} with no separate hostname and port!`
            );
          let n = parseInt(t.substring(r + 1), 10);
          return "[" === t[0]
            ? [t.substring(1, r - 1), n]
            : [t.substring(0, r), n];
        },
        y = () => {
          var e;
          return null === (e = p()) || void 0 === e ? void 0 : e.config;
        };
      class v {
        constructor() {
          (this.reject = () => {}),
            (this.resolve = () => {}),
            (this.promise = new Promise((e, t) => {
              (this.resolve = e), (this.reject = t);
            }));
        }
        wrapCallback(e) {
          return (t, r) => {
            t ? this.reject(t) : this.resolve(r),
              "function" == typeof e &&
                (this.promise.catch(() => {}), 1 === e.length ? e(t) : e(t, r));
          };
        }
      }
      function b(e, t) {
        if (e.uid)
          throw Error(
            'The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.'
          );
        let r = t || "demo-project",
          n = e.iat || 0,
          i = e.sub || e.user_id;
        if (!i)
          throw Error("mockUserToken must contain 'sub' or 'user_id' field!");
        let s = Object.assign(
          {
            iss: `https://securetoken.google.com/${r}`,
            aud: r,
            iat: n,
            exp: n + 3600,
            auth_time: n,
            sub: i,
            user_id: i,
            firebase: { sign_in_provider: "custom", identities: {} },
          },
          e
        );
        return [
          u(JSON.stringify({ alg: "none", type: "JWT" })),
          u(JSON.stringify(s)),
          "",
        ].join(".");
      }
      function w() {
        return "undefined" != typeof navigator &&
          "string" == typeof navigator.userAgent
          ? navigator.userAgent
          : "";
      }
      function S() {
        return (
          !(function () {
            var e;
            let t =
              null === (e = p()) || void 0 === e ? void 0 : e.forceEnvironment;
            if ("node" === t) return !0;
            if ("browser" === t) return !1;
            try {
              return (
                "[object process]" ===
                Object.prototype.toString.call(r.g.process)
              );
            } catch (e) {
              return !1;
            }
          })() &&
          !!navigator.userAgent &&
          navigator.userAgent.includes("Safari") &&
          !navigator.userAgent.includes("Chrome")
        );
      }
      function E() {
        try {
          return "object" == typeof indexedDB;
        } catch (e) {
          return !1;
        }
      }
      function x() {
        return new Promise((e, t) => {
          try {
            let r = !0,
              n = "validate-browser-context-for-indexeddb-analytics-module",
              i = self.indexedDB.open(n);
            (i.onsuccess = () => {
              i.result.close(), r || self.indexedDB.deleteDatabase(n), e(!0);
            }),
              (i.onupgradeneeded = () => {
                r = !1;
              }),
              (i.onerror = () => {
                var e;
                t(
                  (null === (e = i.error) || void 0 === e
                    ? void 0
                    : e.message) || ""
                );
              });
          } catch (e) {
            t(e);
          }
        });
      }
      class T extends Error {
        constructor(e, t, r) {
          super(t),
            (this.code = e),
            (this.customData = r),
            (this.name = "FirebaseError"),
            Object.setPrototypeOf(this, T.prototype),
            Error.captureStackTrace &&
              Error.captureStackTrace(this, C.prototype.create);
        }
      }
      class C {
        constructor(e, t, r) {
          (this.service = e), (this.serviceName = t), (this.errors = r);
        }
        create(e, ...t) {
          var r, n;
          let i = t[0] || {},
            s = `${this.service}/${e}`,
            a = this.errors[e],
            o = a
              ? ((r = a),
                (n = i),
                r.replace(_, (e, t) => {
                  let r = n[t];
                  return null != r ? String(r) : `<${t}?>`;
                }))
              : "Error",
            l = `${this.serviceName}: ${o} (${s}).`;
          return new T(s, l, i);
        }
      }
      let _ = /\{\$([^}]+)}/g;
      function k(e) {
        return null !== e && "object" == typeof e;
      }
      function A(e) {
        return e && e._delegate ? e._delegate : e;
      }
    },
    48055: function (e, t) {
      var r = Symbol.for("react.transitional.element"),
        n = Symbol.for("react.portal"),
        i = Symbol.for("react.fragment"),
        s = Symbol.for("react.strict_mode"),
        a = Symbol.for("react.profiler");
      Symbol.for("react.provider");
      var o = Symbol.for("react.consumer"),
        l = Symbol.for("react.context"),
        u = Symbol.for("react.forward_ref"),
        c = Symbol.for("react.suspense"),
        h = Symbol.for("react.suspense_list"),
        f = Symbol.for("react.memo"),
        d = Symbol.for("react.lazy"),
        p = Symbol.for("react.view_transition"),
        g = Symbol.for("react.client.reference");
      t.isValidElementType = function (e) {
        return (
          "string" == typeof e ||
          "function" == typeof e ||
          e === i ||
          e === a ||
          e === s ||
          e === c ||
          e === h ||
          ("object" == typeof e &&
            null !== e &&
            (e.$$typeof === d ||
              e.$$typeof === f ||
              e.$$typeof === l ||
              e.$$typeof === o ||
              e.$$typeof === u ||
              e.$$typeof === g ||
              void 0 !== e.getModuleId)) ||
          !1
        );
      };
    },
    84291: function (e, t, r) {
      let n, i, s;
      r.d(t, {
        Jn: () => $,
        Xd: () => R,
        qX: () => P,
        KN: () => B,
        Mq: () => F,
        ZF: () => V,
        rh: () => O,
      });
      var a = r(9337),
        o = r(64289),
        l = r(24550);
      let u = (e, t) => t.some((t) => e instanceof t),
        c = new WeakMap(),
        h = new WeakMap(),
        f = new WeakMap(),
        d = new WeakMap(),
        p = new WeakMap(),
        g = {
          get(e, t, r) {
            if (e instanceof IDBTransaction) {
              if ("done" === t) return h.get(e);
              if ("objectStoreNames" === t)
                return e.objectStoreNames || f.get(e);
              if ("store" === t)
                return r.objectStoreNames[1]
                  ? void 0
                  : r.objectStore(r.objectStoreNames[0]);
            }
            return m(e[t]);
          },
          set: (e, t, r) => ((e[t] = r), !0),
          has: (e, t) =>
            (e instanceof IDBTransaction && ("done" === t || "store" === t)) ||
            t in e,
        };
      function m(e) {
        if (e instanceof IDBRequest)
          return (function (e) {
            let t = new Promise((t, r) => {
              let n = () => {
                  e.removeEventListener("success", i),
                    e.removeEventListener("error", s);
                },
                i = () => {
                  t(m(e.result)), n();
                },
                s = () => {
                  r(e.error), n();
                };
              e.addEventListener("success", i), e.addEventListener("error", s);
            });
            return (
              t
                .then((t) => {
                  t instanceof IDBCursor && c.set(t, e);
                })
                .catch(() => {}),
              p.set(t, e),
              t
            );
          })(e);
        if (d.has(e)) return d.get(e);
        let t = (function (e) {
          if ("function" == typeof e)
            return e !== IDBDatabase.prototype.transaction ||
              "objectStoreNames" in IDBTransaction.prototype
              ? (
                  i ||
                  (i = [
                    IDBCursor.prototype.advance,
                    IDBCursor.prototype.continue,
                    IDBCursor.prototype.continuePrimaryKey,
                  ])
                ).includes(e)
                ? function (...t) {
                    return e.apply(y(this), t), m(c.get(this));
                  }
                : function (...t) {
                    return m(e.apply(y(this), t));
                  }
              : function (t, ...r) {
                  let n = e.call(y(this), t, ...r);
                  return f.set(n, t.sort ? t.sort() : [t]), m(n);
                };
          return (e instanceof IDBTransaction &&
            (function (e) {
              if (h.has(e)) return;
              let t = new Promise((t, r) => {
                let n = () => {
                    e.removeEventListener("complete", i),
                      e.removeEventListener("error", s),
                      e.removeEventListener("abort", s);
                  },
                  i = () => {
                    t(), n();
                  },
                  s = () => {
                    r(e.error || new DOMException("AbortError", "AbortError")),
                      n();
                  };
                e.addEventListener("complete", i),
                  e.addEventListener("error", s),
                  e.addEventListener("abort", s);
              });
              h.set(e, t);
            })(e),
          u(
            e,
            n ||
              (n = [
                IDBDatabase,
                IDBObjectStore,
                IDBIndex,
                IDBCursor,
                IDBTransaction,
              ])
          ))
            ? new Proxy(e, g)
            : e;
        })(e);
        return t !== e && (d.set(e, t), p.set(t, e)), t;
      }
      let y = (e) => p.get(e),
        v = ["get", "getKey", "getAll", "getAllKeys", "count"],
        b = ["put", "add", "delete", "clear"],
        w = new Map();
      function S(e, t) {
        if (!(e instanceof IDBDatabase && !(t in e) && "string" == typeof t))
          return;
        if (w.get(t)) return w.get(t);
        let r = t.replace(/FromIndex$/, ""),
          n = t !== r,
          i = b.includes(r);
        if (
          !(r in (n ? IDBIndex : IDBObjectStore).prototype) ||
          !(i || v.includes(r))
        )
          return;
        let s = async function (e, ...t) {
          let s = this.transaction(e, i ? "readwrite" : "readonly"),
            a = s.store;
          return (
            n && (a = a.index(t.shift())),
            (await Promise.all([a[r](...t), i && s.done]))[0]
          );
        };
        return w.set(t, s), s;
      }
      g = {
        ...(s = g),
        get: (e, t, r) => S(e, t) || s.get(e, t, r),
        has: (e, t) => !!S(e, t) || s.has(e, t),
      };
      class E {
        constructor(e) {
          this.container = e;
        }
        getPlatformInfoString() {
          return this.container
            .getProviders()
            .map((e) => {
              if (
                !(function (e) {
                  let t = e.getComponent();
                  return (null == t ? void 0 : t.type) === "VERSION";
                })(e)
              )
                return null;
              {
                let t = e.getImmediate();
                return `${t.library}/${t.version}`;
              }
            })
            .filter((e) => e)
            .join(" ");
        }
      }
      let x = "@firebase/app",
        T = "0.11.4",
        C = new o.Yd("@firebase/app"),
        _ = "[DEFAULT]",
        k = {
          [x]: "fire-core",
          "@firebase/app-compat": "fire-core-compat",
          "@firebase/analytics": "fire-analytics",
          "@firebase/analytics-compat": "fire-analytics-compat",
          "@firebase/app-check": "fire-app-check",
          "@firebase/app-check-compat": "fire-app-check-compat",
          "@firebase/auth": "fire-auth",
          "@firebase/auth-compat": "fire-auth-compat",
          "@firebase/database": "fire-rtdb",
          "@firebase/data-connect": "fire-data-connect",
          "@firebase/database-compat": "fire-rtdb-compat",
          "@firebase/functions": "fire-fn",
          "@firebase/functions-compat": "fire-fn-compat",
          "@firebase/installations": "fire-iid",
          "@firebase/installations-compat": "fire-iid-compat",
          "@firebase/messaging": "fire-fcm",
          "@firebase/messaging-compat": "fire-fcm-compat",
          "@firebase/performance": "fire-perf",
          "@firebase/performance-compat": "fire-perf-compat",
          "@firebase/remote-config": "fire-rc",
          "@firebase/remote-config-compat": "fire-rc-compat",
          "@firebase/storage": "fire-gcs",
          "@firebase/storage-compat": "fire-gcs-compat",
          "@firebase/firestore": "fire-fst",
          "@firebase/firestore-compat": "fire-fst-compat",
          "@firebase/vertexai": "fire-vertex",
          "fire-js": "fire-js",
          firebase: "fire-js-all",
        },
        A = new Map(),
        I = new Map(),
        D = new Map();
      function N(e, t) {
        try {
          e.container.addComponent(t);
        } catch (r) {
          C.debug(
            `Component ${t.name} failed to register with FirebaseApp ${e.name}`,
            r
          );
        }
      }
      function R(e) {
        let t = e.name;
        if (D.has(t))
          return (
            C.debug(`There were multiple attempts to register component ${t}.`),
            !1
          );
        for (let r of (D.set(t, e), A.values())) N(r, e);
        for (let t of I.values()) N(t, e);
        return !0;
      }
      function P(e, t) {
        let r = e.container
          .getProvider("heartbeat")
          .getImmediate({ optional: !0 });
        return r && r.triggerHeartbeat(), e.container.getProvider(t);
      }
      function O(e) {
        return null != e && void 0 !== e.settings;
      }
      let L = new l.LL("app", "Firebase", {
        "no-app":
          "No Firebase App '{$appName}' has been created - call initializeApp() first",
        "bad-app-name": "Illegal App name: '{$appName}'",
        "duplicate-app":
          "Firebase App named '{$appName}' already exists with different options or config",
        "app-deleted": "Firebase App named '{$appName}' already deleted",
        "server-app-deleted": "Firebase Server App has been deleted",
        "no-options":
          "Need to provide options, when not being deployed to hosting via source.",
        "invalid-app-argument":
          "firebase.{$appName}() takes either no argument or a Firebase App instance.",
        "invalid-log-argument":
          "First argument to `onLog` must be null or a function.",
        "idb-open":
          "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-get":
          "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-set":
          "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
        "idb-delete":
          "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",
        "finalization-registry-not-supported":
          "FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",
        "invalid-server-app-environment":
          "FirebaseServerApp is not for use in browser environments.",
      });
      class M {
        constructor(e, t, r) {
          (this._isDeleted = !1),
            (this._options = Object.assign({}, e)),
            (this._config = Object.assign({}, t)),
            (this._name = t.name),
            (this._automaticDataCollectionEnabled =
              t.automaticDataCollectionEnabled),
            (this._container = r),
            this.container.addComponent(new a.wA("app", () => this, "PUBLIC"));
        }
        get automaticDataCollectionEnabled() {
          return this.checkDestroyed(), this._automaticDataCollectionEnabled;
        }
        set automaticDataCollectionEnabled(e) {
          this.checkDestroyed(), (this._automaticDataCollectionEnabled = e);
        }
        get name() {
          return this.checkDestroyed(), this._name;
        }
        get options() {
          return this.checkDestroyed(), this._options;
        }
        get config() {
          return this.checkDestroyed(), this._config;
        }
        get container() {
          return this._container;
        }
        get isDeleted() {
          return this._isDeleted;
        }
        set isDeleted(e) {
          this._isDeleted = e;
        }
        checkDestroyed() {
          if (this.isDeleted)
            throw L.create("app-deleted", { appName: this._name });
        }
      }
      let $ = "11.6.0";
      function V(e, t = {}) {
        let r = e;
        "object" != typeof t && (t = { name: t });
        let n = Object.assign(
            { name: _, automaticDataCollectionEnabled: !1 },
            t
          ),
          i = n.name;
        if ("string" != typeof i || !i)
          throw L.create("bad-app-name", { appName: String(i) });
        if ((r || (r = (0, l.aH)()), !r)) throw L.create("no-options");
        let s = A.get(i);
        if (s) {
          if ((0, l.vZ)(r, s.options) && (0, l.vZ)(n, s.config)) return s;
          throw L.create("duplicate-app", { appName: i });
        }
        let o = new a.H0(i);
        for (let e of D.values()) o.addComponent(e);
        let u = new M(r, n, o);
        return A.set(i, u), u;
      }
      function F(e = _) {
        let t = A.get(e);
        if (!t && e === _ && (0, l.aH)()) return V();
        if (!t) throw L.create("no-app", { appName: e });
        return t;
      }
      function B(e, t, r) {
        var n;
        let i = null !== (n = k[e]) && void 0 !== n ? n : e;
        r && (i += `-${r}`);
        let s = i.match(/\s|\//),
          o = t.match(/\s|\//);
        if (s || o) {
          let e = [`Unable to register library "${i}" with version "${t}":`];
          s &&
            e.push(
              `library name "${i}" contains illegal characters (whitespace or "/")`
            ),
            s && o && e.push("and"),
            o &&
              e.push(
                `version name "${t}" contains illegal characters (whitespace or "/")`
              ),
            C.warn(e.join(" "));
          return;
        }
        R(
          new a.wA(
            `${i}-version`,
            () => ({ library: i, version: t }),
            "VERSION"
          )
        );
      }
      let U = "firebase-heartbeat-store",
        j = null;
      function z() {
        return (
          j ||
            (j = (function (
              e,
              t,
              { blocked: r, upgrade: n, blocking: i, terminated: s } = {}
            ) {
              let a = indexedDB.open(e, 1),
                o = m(a);
              return (
                n &&
                  a.addEventListener("upgradeneeded", (e) => {
                    n(
                      m(a.result),
                      e.oldVersion,
                      e.newVersion,
                      m(a.transaction),
                      e
                    );
                  }),
                r &&
                  a.addEventListener("blocked", (e) =>
                    r(e.oldVersion, e.newVersion, e)
                  ),
                o
                  .then((e) => {
                    s && e.addEventListener("close", () => s()),
                      i &&
                        e.addEventListener("versionchange", (e) =>
                          i(e.oldVersion, e.newVersion, e)
                        );
                  })
                  .catch(() => {}),
                o
              );
            })("firebase-heartbeat-database", 0, {
              upgrade: (e, t) => {
                if (0 === t)
                  try {
                    e.createObjectStore(U);
                  } catch (e) {
                    console.warn(e);
                  }
              },
            }).catch((e) => {
              throw L.create("idb-open", { originalErrorMessage: e.message });
            })),
          j
        );
      }
      async function q(e) {
        try {
          let t = (await z()).transaction(U),
            r = await t.objectStore(U).get(K(e));
          return await t.done, r;
        } catch (e) {
          if (e instanceof l.ZR) C.warn(e.message);
          else {
            let t = L.create("idb-get", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            C.warn(t.message);
          }
        }
      }
      async function H(e, t) {
        try {
          let r = (await z()).transaction(U, "readwrite"),
            n = r.objectStore(U);
          await n.put(t, K(e)), await r.done;
        } catch (e) {
          if (e instanceof l.ZR) C.warn(e.message);
          else {
            let t = L.create("idb-set", {
              originalErrorMessage: null == e ? void 0 : e.message,
            });
            C.warn(t.message);
          }
        }
      }
      function K(e) {
        return `${e.name}!${e.options.appId}`;
      }
      class Z {
        constructor(e) {
          (this.container = e), (this._heartbeatsCache = null);
          let t = this.container.getProvider("app").getImmediate();
          (this._storage = new W(t)),
            (this._heartbeatsCachePromise = this._storage
              .read()
              .then((e) => ((this._heartbeatsCache = e), e)));
        }
        async triggerHeartbeat() {
          var e, t;
          try {
            let r = this.container
                .getProvider("platform-logger")
                .getImmediate()
                .getPlatformInfoString(),
              n = G();
            if (
              ((null === (e = this._heartbeatsCache) || void 0 === e
                ? void 0
                : e.heartbeats) == null &&
                ((this._heartbeatsCache = await this._heartbeatsCachePromise),
                (null === (t = this._heartbeatsCache) || void 0 === t
                  ? void 0
                  : t.heartbeats) == null)) ||
              this._heartbeatsCache.lastSentHeartbeatDate === n ||
              this._heartbeatsCache.heartbeats.some((e) => e.date === n)
            )
              return;
            if (
              (this._heartbeatsCache.heartbeats.push({ date: n, agent: r }),
              this._heartbeatsCache.heartbeats.length > 30)
            ) {
              let e = (function (e) {
                if (0 === e.length) return -1;
                let t = 0,
                  r = e[0].date;
                for (let n = 1; n < e.length; n++)
                  e[n].date < r && ((r = e[n].date), (t = n));
                return t;
              })(this._heartbeatsCache.heartbeats);
              this._heartbeatsCache.heartbeats.splice(e, 1);
            }
            return this._storage.overwrite(this._heartbeatsCache);
          } catch (e) {
            C.warn(e);
          }
        }
        async getHeartbeatsHeader() {
          var e;
          try {
            if (
              (null === this._heartbeatsCache &&
                (await this._heartbeatsCachePromise),
              (null === (e = this._heartbeatsCache) || void 0 === e
                ? void 0
                : e.heartbeats) == null ||
                0 === this._heartbeatsCache.heartbeats.length)
            )
              return "";
            let t = G(),
              { heartbeatsToSend: r, unsentEntries: n } = (function (
                e,
                t = 1024
              ) {
                let r = [],
                  n = e.slice();
                for (let i of e) {
                  let e = r.find((e) => e.agent === i.agent);
                  if (e) {
                    if ((e.dates.push(i.date), Q(r) > t)) {
                      e.dates.pop();
                      break;
                    }
                  } else if (
                    (r.push({ agent: i.agent, dates: [i.date] }), Q(r) > t)
                  ) {
                    r.pop();
                    break;
                  }
                  n = n.slice(1);
                }
                return { heartbeatsToSend: r, unsentEntries: n };
              })(this._heartbeatsCache.heartbeats),
              i = (0, l.L)(JSON.stringify({ version: 2, heartbeats: r }));
            return (
              (this._heartbeatsCache.lastSentHeartbeatDate = t),
              n.length > 0
                ? ((this._heartbeatsCache.heartbeats = n),
                  await this._storage.overwrite(this._heartbeatsCache))
                : ((this._heartbeatsCache.heartbeats = []),
                  this._storage.overwrite(this._heartbeatsCache)),
              i
            );
          } catch (e) {
            return C.warn(e), "";
          }
        }
      }
      function G() {
        return new Date().toISOString().substring(0, 10);
      }
      class W {
        constructor(e) {
          (this.app = e),
            (this._canUseIndexedDBPromise =
              this.runIndexedDBEnvironmentCheck());
        }
        async runIndexedDBEnvironmentCheck() {
          return (
            !!(0, l.hl)() &&
            (0, l.eu)()
              .then(() => !0)
              .catch(() => !1)
          );
        }
        async read() {
          if (!(await this._canUseIndexedDBPromise)) return { heartbeats: [] };
          {
            let e = await q(this.app);
            return (null == e ? void 0 : e.heartbeats) ? e : { heartbeats: [] };
          }
        }
        async overwrite(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            let r = await this.read();
            return H(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : r.lastSentHeartbeatDate,
              heartbeats: e.heartbeats,
            });
          }
        }
        async add(e) {
          var t;
          if (await this._canUseIndexedDBPromise) {
            let r = await this.read();
            return H(this.app, {
              lastSentHeartbeatDate:
                null !== (t = e.lastSentHeartbeatDate) && void 0 !== t
                  ? t
                  : r.lastSentHeartbeatDate,
              heartbeats: [...r.heartbeats, ...e.heartbeats],
            });
          }
        }
      }
      function Q(e) {
        return (0, l.L)(JSON.stringify({ version: 2, heartbeats: e })).length;
      }
      R(new a.wA("platform-logger", (e) => new E(e), "PRIVATE")),
        R(new a.wA("heartbeat", (e) => new Z(e), "PRIVATE")),
        B(x, T, ""),
        B(x, T, "esm2017"),
        B("fire-js", "");
    },
    9337: function (e, t, r) {
      r.d(t, { H0: () => o, wA: () => i });
      var n = r(24550);
      class i {
        constructor(e, t, r) {
          (this.name = e),
            (this.instanceFactory = t),
            (this.type = r),
            (this.multipleInstances = !1),
            (this.serviceProps = {}),
            (this.instantiationMode = "LAZY"),
            (this.onInstanceCreated = null);
        }
        setInstantiationMode(e) {
          return (this.instantiationMode = e), this;
        }
        setMultipleInstances(e) {
          return (this.multipleInstances = e), this;
        }
        setServiceProps(e) {
          return (this.serviceProps = e), this;
        }
        setInstanceCreatedCallback(e) {
          return (this.onInstanceCreated = e), this;
        }
      }
      let s = "[DEFAULT]";
      class a {
        constructor(e, t) {
          (this.name = e),
            (this.container = t),
            (this.component = null),
            (this.instances = new Map()),
            (this.instancesDeferred = new Map()),
            (this.instancesOptions = new Map()),
            (this.onInitCallbacks = new Map());
        }
        get(e) {
          let t = this.normalizeInstanceIdentifier(e);
          if (!this.instancesDeferred.has(t)) {
            let e = new n.BH();
            if (
              (this.instancesDeferred.set(t, e),
              this.isInitialized(t) || this.shouldAutoInitialize())
            )
              try {
                let r = this.getOrInitializeService({ instanceIdentifier: t });
                r && e.resolve(r);
              } catch (e) {}
          }
          return this.instancesDeferred.get(t).promise;
        }
        getImmediate(e) {
          var t;
          let r = this.normalizeInstanceIdentifier(
              null == e ? void 0 : e.identifier
            ),
            n =
              null !== (t = null == e ? void 0 : e.optional) &&
              void 0 !== t &&
              t;
          if (this.isInitialized(r) || this.shouldAutoInitialize())
            try {
              return this.getOrInitializeService({ instanceIdentifier: r });
            } catch (e) {
              if (n) return null;
              throw e;
            }
          else {
            if (n) return null;
            throw Error(`Service ${this.name} is not available`);
          }
        }
        getComponent() {
          return this.component;
        }
        setComponent(e) {
          if (e.name !== this.name)
            throw Error(
              `Mismatching Component ${e.name} for Provider ${this.name}.`
            );
          if (this.component)
            throw Error(`Component for ${this.name} has already been provided`);
          if (((this.component = e), this.shouldAutoInitialize())) {
            if ("EAGER" === e.instantiationMode)
              try {
                this.getOrInitializeService({ instanceIdentifier: s });
              } catch (e) {}
            for (let [e, t] of this.instancesDeferred.entries()) {
              let r = this.normalizeInstanceIdentifier(e);
              try {
                let e = this.getOrInitializeService({ instanceIdentifier: r });
                t.resolve(e);
              } catch (e) {}
            }
          }
        }
        clearInstance(e = s) {
          this.instancesDeferred.delete(e),
            this.instancesOptions.delete(e),
            this.instances.delete(e);
        }
        async delete() {
          let e = Array.from(this.instances.values());
          await Promise.all([
            ...e.filter((e) => "INTERNAL" in e).map((e) => e.INTERNAL.delete()),
            ...e.filter((e) => "_delete" in e).map((e) => e._delete()),
          ]);
        }
        isComponentSet() {
          return null != this.component;
        }
        isInitialized(e = s) {
          return this.instances.has(e);
        }
        getOptions(e = s) {
          return this.instancesOptions.get(e) || {};
        }
        initialize(e = {}) {
          let { options: t = {} } = e,
            r = this.normalizeInstanceIdentifier(e.instanceIdentifier);
          if (this.isInitialized(r))
            throw Error(`${this.name}(${r}) has already been initialized`);
          if (!this.isComponentSet())
            throw Error(`Component ${this.name} has not been registered yet`);
          let n = this.getOrInitializeService({
            instanceIdentifier: r,
            options: t,
          });
          for (let [e, t] of this.instancesDeferred.entries())
            r === this.normalizeInstanceIdentifier(e) && t.resolve(n);
          return n;
        }
        onInit(e, t) {
          var r;
          let n = this.normalizeInstanceIdentifier(t),
            i =
              null !== (r = this.onInitCallbacks.get(n)) && void 0 !== r
                ? r
                : new Set();
          i.add(e), this.onInitCallbacks.set(n, i);
          let s = this.instances.get(n);
          return (
            s && e(s, n),
            () => {
              i.delete(e);
            }
          );
        }
        invokeOnInitCallbacks(e, t) {
          let r = this.onInitCallbacks.get(t);
          if (r)
            for (let n of r)
              try {
                n(e, t);
              } catch (e) {}
        }
        getOrInitializeService({ instanceIdentifier: e, options: t = {} }) {
          var r;
          let n = this.instances.get(e);
          if (
            !n &&
            this.component &&
            ((n = this.component.instanceFactory(this.container, {
              instanceIdentifier: (r = e) === s ? void 0 : r,
              options: t,
            })),
            this.instances.set(e, n),
            this.instancesOptions.set(e, t),
            this.invokeOnInitCallbacks(n, e),
            this.component.onInstanceCreated)
          )
            try {
              this.component.onInstanceCreated(this.container, e, n);
            } catch (e) {}
          return n || null;
        }
        normalizeInstanceIdentifier(e = s) {
          return this.component
            ? this.component.multipleInstances
              ? e
              : s
            : e;
        }
        shouldAutoInitialize() {
          return (
            !!this.component && "EXPLICIT" !== this.component.instantiationMode
          );
        }
      }
      class o {
        constructor(e) {
          (this.name = e), (this.providers = new Map());
        }
        addComponent(e) {
          let t = this.getProvider(e.name);
          if (t.isComponentSet())
            throw Error(
              `Component ${e.name} has already been registered with ${this.name}`
            );
          t.setComponent(e);
        }
        addOrOverwriteComponent(e) {
          this.getProvider(e.name).isComponentSet() &&
            this.providers.delete(e.name),
            this.addComponent(e);
        }
        getProvider(e) {
          if (this.providers.has(e)) return this.providers.get(e);
          let t = new a(e, this);
          return this.providers.set(e, t), t;
        }
        getProviders() {
          return Array.from(this.providers.values());
        }
      }
    },
    64289: function (e, t, r) {
      var n, i;
      r.d(t, { Yd: () => c, in: () => n });
      let s = [];
      ((i = n || (n = {}))[(i.DEBUG = 0)] = "DEBUG"),
        (i[(i.VERBOSE = 1)] = "VERBOSE"),
        (i[(i.INFO = 2)] = "INFO"),
        (i[(i.WARN = 3)] = "WARN"),
        (i[(i.ERROR = 4)] = "ERROR"),
        (i[(i.SILENT = 5)] = "SILENT");
      let a = {
          debug: n.DEBUG,
          verbose: n.VERBOSE,
          info: n.INFO,
          warn: n.WARN,
          error: n.ERROR,
          silent: n.SILENT,
        },
        o = n.INFO,
        l = {
          [n.DEBUG]: "log",
          [n.VERBOSE]: "log",
          [n.INFO]: "info",
          [n.WARN]: "warn",
          [n.ERROR]: "error",
        },
        u = (e, t, ...r) => {
          if (t < e.logLevel) return;
          let n = new Date().toISOString(),
            i = l[t];
          if (i) console[i](`[${n}]  ${e.name}:`, ...r);
          else
            throw Error(
              `Attempted to log a message with an invalid logType (value: ${t})`
            );
        };
      class c {
        constructor(e) {
          (this.name = e),
            (this._logLevel = o),
            (this._logHandler = u),
            (this._userLogHandler = null),
            s.push(this);
        }
        get logLevel() {
          return this._logLevel;
        }
        set logLevel(e) {
          if (!(e in n))
            throw TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
          this._logLevel = e;
        }
        setLogLevel(e) {
          this._logLevel = "string" == typeof e ? a[e] : e;
        }
        get logHandler() {
          return this._logHandler;
        }
        set logHandler(e) {
          if ("function" != typeof e)
            throw TypeError(
              "Value assigned to `logHandler` must be a function"
            );
          this._logHandler = e;
        }
        get userLogHandler() {
          return this._userLogHandler;
        }
        set userLogHandler(e) {
          this._userLogHandler = e;
        }
        debug(...e) {
          this._userLogHandler && this._userLogHandler(this, n.DEBUG, ...e),
            this._logHandler(this, n.DEBUG, ...e);
        }
        log(...e) {
          this._userLogHandler && this._userLogHandler(this, n.VERBOSE, ...e),
            this._logHandler(this, n.VERBOSE, ...e);
        }
        info(...e) {
          this._userLogHandler && this._userLogHandler(this, n.INFO, ...e),
            this._logHandler(this, n.INFO, ...e);
        }
        warn(...e) {
          this._userLogHandler && this._userLogHandler(this, n.WARN, ...e),
            this._logHandler(this, n.WARN, ...e);
        }
        error(...e) {
          this._userLogHandler && this._userLogHandler(this, n.ERROR, ...e),
            this._logHandler(this, n.ERROR, ...e);
        }
      }
    },
    70521: function (e, t, r) {
      r.d(t, { Z: () => y });
      var n = r(67294),
        i = r(67026),
        s = r(21547),
        a = r(24716),
        o = r(24106),
        l = r(70543),
        u = r(61701),
        c = r(43349),
        h = r(81105);
      function f(e) {
        return (0, h.ZP)("MuiSvgIcon", e);
      }
      (0, c.Z)("MuiSvgIcon", [
        "root",
        "colorPrimary",
        "colorSecondary",
        "colorAction",
        "colorError",
        "colorDisabled",
        "fontSizeInherit",
        "fontSizeSmall",
        "fontSizeMedium",
        "fontSizeLarge",
      ]);
      var d = r(85893);
      let p = (e) => {
          let { color: t, fontSize: r, classes: n } = e,
            i = {
              root: [
                "root",
                "inherit" !== t && `color${(0, a.Z)(t)}`,
                `fontSize${(0, a.Z)(r)}`,
              ],
            };
          return (0, s.Z)(i, f, n);
        },
        g = (0, o.ZP)("svg", {
          name: "MuiSvgIcon",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              "inherit" !== r.color && t[`color${(0, a.Z)(r.color)}`],
              t[`fontSize${(0, a.Z)(r.fontSize)}`],
            ];
          },
        })(
          (0, l.Z)(({ theme: e }) => ({
            userSelect: "none",
            width: "1em",
            height: "1em",
            display: "inline-block",
            flexShrink: 0,
            transition: e.transitions?.create?.("fill", {
              duration: (e.vars ?? e).transitions?.duration?.shorter,
            }),
            variants: [
              {
                props: (e) => !e.hasSvgAsChild,
                style: { fill: "currentColor" },
              },
              {
                props: { fontSize: "inherit" },
                style: { fontSize: "inherit" },
              },
              {
                props: { fontSize: "small" },
                style: { fontSize: e.typography?.pxToRem?.(20) || "1.25rem" },
              },
              {
                props: { fontSize: "medium" },
                style: { fontSize: e.typography?.pxToRem?.(24) || "1.5rem" },
              },
              {
                props: { fontSize: "large" },
                style: { fontSize: e.typography?.pxToRem?.(35) || "2.1875rem" },
              },
              ...Object.entries((e.vars ?? e).palette)
                .filter(([, e]) => e && e.main)
                .map(([t]) => ({
                  props: { color: t },
                  style: { color: (e.vars ?? e).palette?.[t]?.main },
                })),
              {
                props: { color: "action" },
                style: { color: (e.vars ?? e).palette?.action?.active },
              },
              {
                props: { color: "disabled" },
                style: { color: (e.vars ?? e).palette?.action?.disabled },
              },
              { props: { color: "inherit" }, style: { color: void 0 } },
            ],
          }))
        ),
        m = n.forwardRef(function (e, t) {
          let r = (0, u.i)({ props: e, name: "MuiSvgIcon" }),
            {
              children: s,
              className: a,
              color: o = "inherit",
              component: l = "svg",
              fontSize: c = "medium",
              htmlColor: h,
              inheritViewBox: f = !1,
              titleAccess: m,
              viewBox: y = "0 0 24 24",
              ...v
            } = r,
            b = n.isValidElement(s) && "svg" === s.type,
            w = {
              ...r,
              color: o,
              component: l,
              fontSize: c,
              instanceFontSize: e.fontSize,
              inheritViewBox: f,
              viewBox: y,
              hasSvgAsChild: b,
            },
            S = {};
          f || (S.viewBox = y);
          let E = p(w);
          return (0,
          d.jsxs)(g, { as: l, className: (0, i.Z)(E.root, a), focusable: "false", color: h, "aria-hidden": !m || void 0, role: m ? "img" : void 0, ref: t, ...S, ...v, ...(b && s.props), ownerState: w, children: [b ? s.props.children : s, m ? (0, d.jsx)("title", { children: m }) : null] });
        });
      m.muiName = "SvgIcon";
      let y = (function (e, t) {
        function r(t, r) {
          return (0, d.jsx)(m, {
            "data-testid": void 0,
            ref: r,
            ...t,
            children: e,
          });
        }
        return (r.muiName = m.muiName), n.memo(n.forwardRef(r));
      })(
        (0, d.jsx)("path", {
          d: "M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4z",
        }),
        0
      );
    },
    61701: function (e, t, r) {
      r.d(t, { i: () => a });
      var n = r(67294);
      function i(e, t) {
        let r = { ...t };
        for (let n in e)
          if (Object.prototype.hasOwnProperty.call(e, n)) {
            if ("components" === n || "slots" === n)
              r[n] = { ...e[n], ...r[n] };
            else if ("componentsProps" === n || "slotProps" === n) {
              let s = e[n],
                a = t[n];
              if (a) {
                if (s)
                  for (let e in ((r[n] = { ...a }), s))
                    Object.prototype.hasOwnProperty.call(s, e) &&
                      (r[n][e] = i(s[e], a[e]));
                else r[n] = a;
              } else r[n] = s || {};
            } else void 0 === r[n] && (r[n] = e[n]);
          }
        return r;
      }
      r(85893);
      let s = n.createContext(void 0);
      function a(e) {
        return (function ({ props: e, name: t }) {
          return (function (e) {
            let { theme: t, name: r, props: n } = e;
            if (!t || !t.components || !t.components[r]) return n;
            let s = t.components[r];
            return s.defaultProps
              ? i(s.defaultProps, n)
              : s.styleOverrides || s.variants
              ? n
              : i(s, n);
          })({ props: e, name: t, theme: { components: n.useContext(s) } });
        })(e);
      }
    },
    80277: function (e, t, r) {
      r.d(t, { Z: () => D });
      var n = r(67294),
        i = r(67026),
        s = r(21547),
        a = r(64878),
        o = r(24106),
        l = r(70543),
        u = r(61701),
        c = r(78217),
        h = r(31433);
      let f = (e) => {
        let t = { systemProps: {}, otherProps: {} },
          r = e?.theme?.unstable_sxConfig ?? h.Z;
        return (
          Object.keys(e).forEach((n) => {
            r[n] ? (t.systemProps[n] = e[n]) : (t.otherProps[n] = e[n]);
          }),
          t
        );
      };
      var d = r(85893),
        p = r(24716),
        g = r(42111),
        m = r(43349),
        y = r(81105);
      function v(e) {
        return (0, y.ZP)("MuiTypography", e);
      }
      (0, m.Z)("MuiTypography", [
        "root",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "subtitle1",
        "subtitle2",
        "body1",
        "body2",
        "inherit",
        "button",
        "caption",
        "overline",
        "alignLeft",
        "alignRight",
        "alignCenter",
        "alignJustify",
        "noWrap",
        "gutterBottom",
        "paragraph",
      ]);
      let b = {
          primary: !0,
          secondary: !0,
          error: !0,
          info: !0,
          success: !0,
          warning: !0,
          textPrimary: !0,
          textSecondary: !0,
          textDisabled: !0,
        },
        w = (e) => {
          let {
              align: t,
              gutterBottom: r,
              noWrap: n,
              paragraph: i,
              variant: a,
              classes: o,
            } = e,
            l = {
              root: [
                "root",
                a,
                "inherit" !== e.align && `align${(0, p.Z)(t)}`,
                r && "gutterBottom",
                n && "noWrap",
                i && "paragraph",
              ],
            };
          return (0, s.Z)(l, v, o);
        },
        S = (0, o.ZP)("span", {
          name: "MuiTypography",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              r.variant && t[r.variant],
              "inherit" !== r.align && t[`align${(0, p.Z)(r.align)}`],
              r.noWrap && t.noWrap,
              r.gutterBottom && t.gutterBottom,
              r.paragraph && t.paragraph,
            ];
          },
        })(
          (0, l.Z)(({ theme: e }) => ({
            margin: 0,
            variants: [
              {
                props: { variant: "inherit" },
                style: {
                  font: "inherit",
                  lineHeight: "inherit",
                  letterSpacing: "inherit",
                },
              },
              ...Object.entries(e.typography)
                .filter(
                  ([e, t]) => "inherit" !== e && t && "object" == typeof t
                )
                .map(([e, t]) => ({ props: { variant: e }, style: t })),
              ...Object.entries(e.palette)
                .filter((0, g.Z)())
                .map(([t]) => ({
                  props: { color: t },
                  style: { color: (e.vars || e).palette[t].main },
                })),
              ...Object.entries(e.palette?.text || {})
                .filter(([, e]) => "string" == typeof e)
                .map(([t]) => ({
                  props: { color: `text${(0, p.Z)(t)}` },
                  style: { color: (e.vars || e).palette.text[t] },
                })),
              {
                props: ({ ownerState: e }) => "inherit" !== e.align,
                style: { textAlign: "var(--Typography-textAlign)" },
              },
              {
                props: ({ ownerState: e }) => e.noWrap,
                style: {
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                },
              },
              {
                props: ({ ownerState: e }) => e.gutterBottom,
                style: { marginBottom: "0.35em" },
              },
              {
                props: ({ ownerState: e }) => e.paragraph,
                style: { marginBottom: 16 },
              },
            ],
          }))
        ),
        E = {
          h1: "h1",
          h2: "h2",
          h3: "h3",
          h4: "h4",
          h5: "h5",
          h6: "h6",
          subtitle1: "h6",
          subtitle2: "h6",
          body1: "p",
          body2: "p",
          inherit: "p",
        },
        x = n.forwardRef(function (e, t) {
          let { color: r, ...n } = (0, u.i)({
              props: e,
              name: "MuiTypography",
            }),
            s = !b[r],
            a = (function (e) {
              let t;
              let { sx: r, ...n } = e,
                { systemProps: i, otherProps: s } = f(n);
              return (
                (t = Array.isArray(r)
                  ? [i, ...r]
                  : "function" == typeof r
                  ? (...e) => {
                      let t = r(...e);
                      return (0, c.P)(t) ? { ...i, ...t } : i;
                    }
                  : { ...i, ...r }),
                { ...s, sx: t }
              );
            })({ ...n, ...(s && { color: r }) }),
            {
              align: o = "inherit",
              className: l,
              component: h,
              gutterBottom: p = !1,
              noWrap: g = !1,
              paragraph: m = !1,
              variant: y = "body1",
              variantMapping: v = E,
              ...x
            } = a,
            T = {
              ...a,
              align: o,
              color: r,
              className: l,
              component: h,
              gutterBottom: p,
              noWrap: g,
              paragraph: m,
              variant: y,
              variantMapping: v,
            },
            C = h || (m ? "p" : v[y] || E[y]) || "span",
            _ = w(T);
          return (0,
          d.jsx)(S, { as: C, ref: t, className: (0, i.Z)(_.root, l), ...x, ownerState: T, style: { ...("inherit" !== o && { "--Typography-textAlign": o }), ...x.style } });
        });
      function T(e) {
        return (0, y.ZP)("MuiFormControlLabel", e);
      }
      let C = (0, m.Z)("MuiFormControlLabel", [
        "root",
        "labelPlacementStart",
        "labelPlacementTop",
        "labelPlacementBottom",
        "disabled",
        "label",
        "error",
        "required",
        "asterisk",
      ]);
      var _ = r(2379);
      let k = (e) => {
          let {
              classes: t,
              disabled: r,
              labelPlacement: n,
              error: i,
              required: a,
            } = e,
            o = {
              root: [
                "root",
                r && "disabled",
                `labelPlacement${(0, p.Z)(n)}`,
                i && "error",
                a && "required",
              ],
              label: ["label", r && "disabled"],
              asterisk: ["asterisk", i && "error"],
            };
          return (0, s.Z)(o, T, t);
        },
        A = (0, o.ZP)("label", {
          name: "MuiFormControlLabel",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              { [`& .${C.label}`]: t.label },
              t.root,
              t[`labelPlacement${(0, p.Z)(r.labelPlacement)}`],
            ];
          },
        })(
          (0, l.Z)(({ theme: e }) => ({
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",
            verticalAlign: "middle",
            WebkitTapHighlightColor: "transparent",
            marginLeft: -11,
            marginRight: 16,
            [`&.${C.disabled}`]: { cursor: "default" },
            [`& .${C.label}`]: {
              [`&.${C.disabled}`]: {
                color: (e.vars || e).palette.text.disabled,
              },
            },
            variants: [
              {
                props: { labelPlacement: "start" },
                style: { flexDirection: "row-reverse", marginRight: -11 },
              },
              {
                props: { labelPlacement: "top" },
                style: { flexDirection: "column-reverse" },
              },
              {
                props: { labelPlacement: "bottom" },
                style: { flexDirection: "column" },
              },
              {
                props: ({ labelPlacement: e }) =>
                  "start" === e || "top" === e || "bottom" === e,
                style: { marginLeft: 16 },
              },
            ],
          }))
        ),
        I = (0, o.ZP)("span", {
          name: "MuiFormControlLabel",
          slot: "Asterisk",
          overridesResolver: (e, t) => t.asterisk,
        })(
          (0, l.Z)(({ theme: e }) => ({
            [`&.${C.error}`]: { color: (e.vars || e).palette.error.main },
          }))
        ),
        D = n.forwardRef(function (e, t) {
          let r = (0, u.i)({ props: e, name: "MuiFormControlLabel" }),
            {
              checked: s,
              className: o,
              componentsProps: l = {},
              control: c,
              disabled: h,
              disableTypography: f,
              inputRef: p,
              label: g,
              labelPlacement: m = "end",
              name: y,
              onChange: v,
              required: b,
              slots: w = {},
              slotProps: S = {},
              value: E,
              ...T
            } = r,
            C = (0, a.Z)(),
            D = h ?? c.props.disabled ?? C?.disabled,
            N = b ?? c.props.required,
            R = { disabled: D, required: N };
          ["checked", "name", "onChange", "value", "inputRef"].forEach((e) => {
            void 0 === c.props[e] && void 0 !== r[e] && (R[e] = r[e]);
          });
          let P = (function ({ props: e, states: t, muiFormControl: r }) {
              return t.reduce(
                (t, n) => (
                  (t[n] = e[n]), r && void 0 === e[n] && (t[n] = r[n]), t
                ),
                {}
              );
            })({ props: r, muiFormControl: C, states: ["error"] }),
            O = {
              ...r,
              disabled: D,
              labelPlacement: m,
              required: N,
              error: P.error,
            },
            L = k(O),
            M = { slots: w, slotProps: { ...l, ...S } },
            [$, V] = (0, _.Z)("typography", {
              elementType: x,
              externalForwardedProps: M,
              ownerState: O,
            }),
            F = g;
          return (
            null == F ||
              F.type === x ||
              f ||
              (F = (0, d.jsx)($, {
                component: "span",
                ...V,
                className: (0, i.Z)(L.label, V?.className),
                children: F,
              })),
            (0, d.jsxs)(A, {
              className: (0, i.Z)(L.root, o),
              ownerState: O,
              ref: t,
              ...T,
              children: [
                n.cloneElement(c, R),
                N
                  ? (0, d.jsxs)("div", {
                      children: [
                        F,
                        (0, d.jsxs)(I, {
                          ownerState: O,
                          "aria-hidden": !0,
                          className: L.asterisk,
                          children: [" ", "*"],
                        }),
                      ],
                    })
                  : F,
              ],
            })
          );
        });
    },
    64878: function (e, t, r) {
      r.d(t, { Z: () => s });
      var n = r(67294);
      let i = n.createContext(void 0);
      function s() {
        return n.useContext(i);
      }
    },
    15297: function (e, t, r) {
      r.d(t, { Z: () => eo });
      var n,
        i,
        s = r(67294),
        a = r(67026),
        o = r(21547),
        l = r(62403),
        u = r(24716),
        c = r(42111),
        h = r(10186),
        f = r(24106);
      let d = function ({
        controlled: e,
        default: t,
        name: r,
        state: n = "value",
      }) {
        let { current: i } = s.useRef(void 0 !== e),
          [a, o] = s.useState(t),
          l = s.useCallback((e) => {
            i || o(e);
          }, []);
        return [i ? e : a, l];
      };
      var p = r(64878);
      function g(e) {
        try {
          return e.matches(":focus-visible");
        } catch (e) {}
        return !1;
      }
      var m = r(61701);
      let y = r(36055).Z,
        v = "undefined" != typeof window ? s.useLayoutEffect : s.useEffect,
        b = function (e) {
          let t = s.useRef(e);
          return (
            v(() => {
              t.current = e;
            }),
            s.useRef((...e) => (0, t.current)(...e)).current
          );
        },
        w = {};
      function S(e, t) {
        let r = s.useRef(w);
        return r.current === w && (r.current = e(t)), r;
      }
      class E {
        static create() {
          return new E();
        }
        static use() {
          let e = S(E.create).current,
            [t, r] = s.useState(!1);
          return (
            (e.shouldMount = t),
            (e.setShouldMount = r),
            s.useEffect(e.mountEffect, [t]),
            e
          );
        }
        constructor() {
          (this.ref = { current: null }),
            (this.mounted = null),
            (this.didMount = !1),
            (this.shouldMount = !1),
            (this.setShouldMount = null);
        }
        mount() {
          return (
            this.mounted ||
              ((this.mounted = (function () {
                let e, t;
                let r = new Promise((r, n) => {
                  (e = r), (t = n);
                });
                return (r.resolve = e), (r.reject = t), r;
              })()),
              (this.shouldMount = !0),
              this.setShouldMount(this.shouldMount)),
            this.mounted
          );
        }
        mountEffect = () => {
          this.shouldMount &&
            !this.didMount &&
            null !== this.ref.current &&
            ((this.didMount = !0), this.mounted.resolve());
        };
        start(...e) {
          this.mount().then(() => this.ref.current?.start(...e));
        }
        stop(...e) {
          this.mount().then(() => this.ref.current?.stop(...e));
        }
        pulsate(...e) {
          this.mount().then(() => this.ref.current?.pulsate(...e));
        }
      }
      var x = r(44810);
      let T = [];
      class C {
        static create() {
          return new C();
        }
        currentId = null;
        start(e, t) {
          this.clear(),
            (this.currentId = setTimeout(() => {
              (this.currentId = null), t();
            }, e));
        }
        clear = () => {
          null !== this.currentId &&
            (clearTimeout(this.currentId), (this.currentId = null));
        };
        disposeEffect = () => this.clear;
      }
      var _ = r(87685);
      r(27278);
      var k = r(67819);
      r(56300), r(8679);
      var A = function (e, t) {
        var r = arguments;
        if (null == t || !_.h.call(t, "css"))
          return s.createElement.apply(void 0, r);
        var n = r.length,
          i = Array(n);
        (i[0] = _.E), (i[1] = (0, _.c)(e, t));
        for (var a = 2; a < n; a++) i[a] = r[a];
        return s.createElement.apply(null, i);
      };
      function I() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, k.O)(t);
      }
      function D() {
        var e = I.apply(void 0, arguments),
          t = "animation-" + e.name;
        return {
          name: t,
          styles: "@keyframes " + t + "{" + e.styles + "}",
          anim: 1,
          toString: function () {
            return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
          },
        };
      }
      (n = A || (A = {})), i || (i = n.JSX || (n.JSX = {}));
      var N = r(85893),
        R = r(43349);
      let P = (0, R.Z)("MuiTouchRipple", [
          "root",
          "ripple",
          "rippleVisible",
          "ripplePulsate",
          "child",
          "childLeaving",
          "childPulsate",
        ]),
        O = D`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
        L = D`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
        M = D`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
        $ = (0, f.ZP)("span", { name: "MuiTouchRipple", slot: "Root" })({
          overflow: "hidden",
          pointerEvents: "none",
          position: "absolute",
          zIndex: 0,
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          borderRadius: "inherit",
        }),
        V = (0, f.ZP)(
          function (e) {
            let {
                className: t,
                classes: r,
                pulsate: n = !1,
                rippleX: i,
                rippleY: o,
                rippleSize: l,
                in: u,
                onExited: c,
                timeout: h,
              } = e,
              [f, d] = s.useState(!1),
              p = (0, a.Z)(t, r.ripple, r.rippleVisible, n && r.ripplePulsate),
              g = (0, a.Z)(r.child, f && r.childLeaving, n && r.childPulsate);
            return (
              u || f || d(!0),
              s.useEffect(() => {
                if (!u && null != c) {
                  let e = setTimeout(c, h);
                  return () => {
                    clearTimeout(e);
                  };
                }
              }, [c, u, h]),
              (0, N.jsx)("span", {
                className: p,
                style: {
                  width: l,
                  height: l,
                  top: -(l / 2) + o,
                  left: -(l / 2) + i,
                },
                children: (0, N.jsx)("span", { className: g }),
              })
            );
          },
          { name: "MuiTouchRipple", slot: "Ripple" }
        )`
  opacity: 0;
  position: absolute;

  &.${P.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${O};
    animation-duration: ${550}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${P.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${P.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${P.childLeaving} {
    opacity: 0;
    animation-name: ${L};
    animation-duration: ${550}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${P.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${M};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
        F = s.forwardRef(function (e, t) {
          let {
              center: r = !1,
              classes: n = {},
              className: i,
              ...o
            } = (0, m.i)({ props: e, name: "MuiTouchRipple" }),
            [l, u] = s.useState([]),
            c = s.useRef(0),
            h = s.useRef(null);
          s.useEffect(() => {
            h.current && (h.current(), (h.current = null));
          }, [l]);
          let f = s.useRef(!1),
            d = (function () {
              var e;
              let t = S(C.create).current;
              return (e = t.disposeEffect), s.useEffect(e, T), t;
            })(),
            p = s.useRef(null),
            g = s.useRef(null),
            y = s.useCallback(
              (e) => {
                let {
                  pulsate: t,
                  rippleX: r,
                  rippleY: i,
                  rippleSize: s,
                  cb: o,
                } = e;
                u((e) => [
                  ...e,
                  (0, N.jsx)(
                    V,
                    {
                      classes: {
                        ripple: (0, a.Z)(n.ripple, P.ripple),
                        rippleVisible: (0, a.Z)(
                          n.rippleVisible,
                          P.rippleVisible
                        ),
                        ripplePulsate: (0, a.Z)(
                          n.ripplePulsate,
                          P.ripplePulsate
                        ),
                        child: (0, a.Z)(n.child, P.child),
                        childLeaving: (0, a.Z)(n.childLeaving, P.childLeaving),
                        childPulsate: (0, a.Z)(n.childPulsate, P.childPulsate),
                      },
                      timeout: 550,
                      pulsate: t,
                      rippleX: r,
                      rippleY: i,
                      rippleSize: s,
                    },
                    c.current
                  ),
                ]),
                  (c.current += 1),
                  (h.current = o);
              },
              [n]
            ),
            v = s.useCallback(
              (e = {}, t = {}, n = () => {}) => {
                let i, s, a;
                let {
                  pulsate: o = !1,
                  center: l = r || t.pulsate,
                  fakeElement: u = !1,
                } = t;
                if (e?.type === "mousedown" && f.current) {
                  f.current = !1;
                  return;
                }
                e?.type === "touchstart" && (f.current = !0);
                let c = u ? null : g.current,
                  h = c
                    ? c.getBoundingClientRect()
                    : { width: 0, height: 0, left: 0, top: 0 };
                if (
                  !l &&
                  void 0 !== e &&
                  (0 !== e.clientX || 0 !== e.clientY) &&
                  (e.clientX || e.touches)
                ) {
                  let { clientX: t, clientY: r } =
                    e.touches && e.touches.length > 0 ? e.touches[0] : e;
                  (i = Math.round(t - h.left)), (s = Math.round(r - h.top));
                } else
                  (i = Math.round(h.width / 2)), (s = Math.round(h.height / 2));
                l
                  ? (a = Math.sqrt((2 * h.width ** 2 + h.height ** 2) / 3)) %
                      2 ==
                      0 && (a += 1)
                  : (a = Math.sqrt(
                      (2 * Math.max(Math.abs((c ? c.clientWidth : 0) - i), i) +
                        2) **
                        2 +
                        (2 *
                          Math.max(Math.abs((c ? c.clientHeight : 0) - s), s) +
                          2) **
                          2
                    )),
                  e?.touches
                    ? null === p.current &&
                      ((p.current = () => {
                        y({
                          pulsate: o,
                          rippleX: i,
                          rippleY: s,
                          rippleSize: a,
                          cb: n,
                        });
                      }),
                      d.start(80, () => {
                        p.current && (p.current(), (p.current = null));
                      }))
                    : y({
                        pulsate: o,
                        rippleX: i,
                        rippleY: s,
                        rippleSize: a,
                        cb: n,
                      });
              },
              [r, y, d]
            ),
            b = s.useCallback(() => {
              v({}, { pulsate: !0 });
            }, [v]),
            w = s.useCallback(
              (e, t) => {
                if ((d.clear(), e?.type === "touchend" && p.current)) {
                  p.current(),
                    (p.current = null),
                    d.start(0, () => {
                      w(e, t);
                    });
                  return;
                }
                (p.current = null),
                  u((e) => (e.length > 0 ? e.slice(1) : e)),
                  (h.current = t);
              },
              [d]
            );
          return (
            s.useImperativeHandle(
              t,
              () => ({ pulsate: b, start: v, stop: w }),
              [b, v, w]
            ),
            (0, N.jsx)($, {
              className: (0, a.Z)(P.root, n.root, i),
              ref: g,
              ...o,
              children: (0, N.jsx)(x.Z, {
                component: null,
                exit: !0,
                children: l,
              }),
            })
          );
        });
      var B = r(81105);
      function U(e) {
        return (0, B.ZP)("MuiButtonBase", e);
      }
      let j = (0, R.Z)("MuiButtonBase", ["root", "disabled", "focusVisible"]),
        z = (e) => {
          let {
              disabled: t,
              focusVisible: r,
              focusVisibleClassName: n,
              classes: i,
            } = e,
            s = (0, o.Z)(
              { root: ["root", t && "disabled", r && "focusVisible"] },
              U,
              i
            );
          return r && n && (s.root += ` ${n}`), s;
        },
        q = (0, f.ZP)("button", {
          name: "MuiButtonBase",
          slot: "Root",
          overridesResolver: (e, t) => t.root,
        })({
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          boxSizing: "border-box",
          WebkitTapHighlightColor: "transparent",
          backgroundColor: "transparent",
          outline: 0,
          border: 0,
          margin: 0,
          borderRadius: 0,
          padding: 0,
          cursor: "pointer",
          userSelect: "none",
          verticalAlign: "middle",
          MozAppearance: "none",
          WebkitAppearance: "none",
          textDecoration: "none",
          color: "inherit",
          "&::-moz-focus-inner": { borderStyle: "none" },
          [`&.${j.disabled}`]: { pointerEvents: "none", cursor: "default" },
          "@media print": { colorAdjust: "exact" },
        }),
        H = s.forwardRef(function (e, t) {
          let r = (0, m.i)({ props: e, name: "MuiButtonBase" }),
            {
              action: n,
              centerRipple: i = !1,
              children: o,
              className: l,
              component: u = "button",
              disabled: c = !1,
              disableRipple: h = !1,
              disableTouchRipple: f = !1,
              focusRipple: d = !1,
              focusVisibleClassName: p,
              LinkComponent: v = "a",
              onBlur: w,
              onClick: S,
              onContextMenu: x,
              onDragLeave: T,
              onFocus: C,
              onFocusVisible: _,
              onKeyDown: k,
              onKeyUp: A,
              onMouseDown: I,
              onMouseLeave: D,
              onMouseUp: R,
              onTouchEnd: P,
              onTouchMove: O,
              onTouchStart: L,
              tabIndex: M = 0,
              TouchRippleProps: $,
              touchRippleRef: V,
              type: B,
              ...U
            } = r,
            j = s.useRef(null),
            H = E.use(),
            Z = y(H.ref, V),
            [G, W] = s.useState(!1);
          c && G && W(!1),
            s.useImperativeHandle(
              n,
              () => ({
                focusVisible: () => {
                  W(!0), j.current.focus();
                },
              }),
              []
            );
          let Q = H.shouldMount && !h && !c;
          s.useEffect(() => {
            G && d && !h && H.pulsate();
          }, [h, d, G, H]);
          let X = K(H, "start", I, f),
            Y = K(H, "stop", x, f),
            J = K(H, "stop", T, f),
            ee = K(H, "stop", R, f),
            et = K(
              H,
              "stop",
              (e) => {
                G && e.preventDefault(), D && D(e);
              },
              f
            ),
            er = K(H, "start", L, f),
            en = K(H, "stop", P, f),
            ei = K(H, "stop", O, f),
            es = K(
              H,
              "stop",
              (e) => {
                g(e.target) || W(!1), w && w(e);
              },
              !1
            ),
            ea = b((e) => {
              j.current || (j.current = e.currentTarget),
                g(e.target) && (W(!0), _ && _(e)),
                C && C(e);
            }),
            eo = () => {
              let e = j.current;
              return u && "button" !== u && !("A" === e.tagName && e.href);
            },
            el = b((e) => {
              d &&
                !e.repeat &&
                G &&
                " " === e.key &&
                H.stop(e, () => {
                  H.start(e);
                }),
                e.target === e.currentTarget &&
                  eo() &&
                  " " === e.key &&
                  e.preventDefault(),
                k && k(e),
                e.target === e.currentTarget &&
                  eo() &&
                  "Enter" === e.key &&
                  !c &&
                  (e.preventDefault(), S && S(e));
            }),
            eu = b((e) => {
              d &&
                " " === e.key &&
                G &&
                !e.defaultPrevented &&
                H.stop(e, () => {
                  H.pulsate(e);
                }),
                A && A(e),
                S &&
                  e.target === e.currentTarget &&
                  eo() &&
                  " " === e.key &&
                  !e.defaultPrevented &&
                  S(e);
            }),
            ec = u;
          "button" === ec && (U.href || U.to) && (ec = v);
          let eh = {};
          "button" === ec
            ? ((eh.type = void 0 === B ? "button" : B), (eh.disabled = c))
            : (U.href || U.to || (eh.role = "button"),
              c && (eh["aria-disabled"] = c));
          let ef = y(t, j),
            ed = {
              ...r,
              centerRipple: i,
              component: u,
              disabled: c,
              disableRipple: h,
              disableTouchRipple: f,
              focusRipple: d,
              tabIndex: M,
              focusVisible: G,
            },
            ep = z(ed);
          return (0,
          N.jsxs)(q, { as: ec, className: (0, a.Z)(ep.root, l), ownerState: ed, onBlur: es, onClick: S, onContextMenu: Y, onFocus: ea, onKeyDown: el, onKeyUp: eu, onMouseDown: X, onMouseLeave: et, onMouseUp: ee, onDragLeave: J, onTouchEnd: en, onTouchMove: ei, onTouchStart: er, ref: ef, tabIndex: c ? -1 : M, type: B, ...eh, ...U, children: [o, Q ? (0, N.jsx)(F, { ref: Z, center: i, ...$ }) : null] });
        });
      function K(e, t, r, n = !1) {
        return b((i) => (r && r(i), n || e[t](i), !0));
      }
      function Z(e) {
        return (0, B.ZP)("PrivateSwitchBase", e);
      }
      (0, R.Z)("PrivateSwitchBase", [
        "root",
        "checked",
        "disabled",
        "input",
        "edgeStart",
        "edgeEnd",
      ]);
      var G = r(2379);
      let W = (e) => {
          let { classes: t, checked: r, disabled: n, edge: i } = e,
            s = {
              root: [
                "root",
                r && "checked",
                n && "disabled",
                i && `edge${(0, u.Z)(i)}`,
              ],
              input: ["input"],
            };
          return (0, o.Z)(s, Z, t);
        },
        Q = (0, f.ZP)(H)({
          padding: 9,
          borderRadius: "50%",
          variants: [
            {
              props: { edge: "start", size: "small" },
              style: { marginLeft: -3 },
            },
            {
              props: ({ edge: e, ownerState: t }) =>
                "start" === e && "small" !== t.size,
              style: { marginLeft: -12 },
            },
            {
              props: { edge: "end", size: "small" },
              style: { marginRight: -3 },
            },
            {
              props: ({ edge: e, ownerState: t }) =>
                "end" === e && "small" !== t.size,
              style: { marginRight: -12 },
            },
          ],
        }),
        X = (0, f.ZP)("input", { shouldForwardProp: h.Z })({
          cursor: "inherit",
          position: "absolute",
          opacity: 0,
          width: "100%",
          height: "100%",
          top: 0,
          left: 0,
          margin: 0,
          padding: 0,
          zIndex: 1,
        }),
        Y = s.forwardRef(function (e, t) {
          let {
              autoFocus: r,
              checked: n,
              checkedIcon: i,
              defaultChecked: s,
              disabled: a,
              disableFocusRipple: o = !1,
              edge: l = !1,
              icon: u,
              id: c,
              inputProps: h,
              inputRef: f,
              name: g,
              onBlur: m,
              onChange: y,
              onFocus: v,
              readOnly: b,
              required: w = !1,
              tabIndex: S,
              type: E,
              value: x,
              slots: T = {},
              slotProps: C = {},
              ..._
            } = e,
            [k, A] = d({
              controlled: n,
              default: !!s,
              name: "SwitchBase",
              state: "checked",
            }),
            I = (0, p.Z)(),
            D = (e) => {
              v && v(e), I && I.onFocus && I.onFocus(e);
            },
            R = (e) => {
              m && m(e), I && I.onBlur && I.onBlur(e);
            },
            P = (e) => {
              if (e.nativeEvent.defaultPrevented) return;
              let t = e.target.checked;
              A(t), y && y(e, t);
            },
            O = a;
          I && void 0 === O && (O = I.disabled);
          let L = "checkbox" === E || "radio" === E,
            M = {
              ...e,
              checked: k,
              disabled: O,
              disableFocusRipple: o,
              edge: l,
            },
            $ = W(M),
            V = { slots: T, slotProps: { input: h, ...C } },
            [F, B] = (0, G.Z)("root", {
              ref: t,
              elementType: Q,
              className: $.root,
              shouldForwardComponentProp: !0,
              externalForwardedProps: { ...V, component: "span", ..._ },
              getSlotProps: (e) => ({
                ...e,
                onFocus: (t) => {
                  e.onFocus?.(t), D(t);
                },
                onBlur: (t) => {
                  e.onBlur?.(t), R(t);
                },
              }),
              ownerState: M,
              additionalProps: {
                centerRipple: !0,
                focusRipple: !o,
                disabled: O,
                role: void 0,
                tabIndex: null,
              },
            }),
            [U, j] = (0, G.Z)("input", {
              ref: f,
              elementType: X,
              className: $.input,
              externalForwardedProps: V,
              getSlotProps: (e) => ({
                ...e,
                onChange: (t) => {
                  e.onChange?.(t), P(t);
                },
              }),
              ownerState: M,
              additionalProps: {
                autoFocus: r,
                checked: n,
                defaultChecked: s,
                disabled: O,
                id: L ? c : void 0,
                name: g,
                readOnly: b,
                required: w,
                tabIndex: S,
                type: E,
                ...("checkbox" === E && void 0 === x ? {} : { value: x }),
              },
            });
          return (0,
          N.jsxs)(F, { ...B, children: [(0, N.jsx)(U, { ...j }), k ? i : u] });
        });
      var J = r(70543);
      function ee(e) {
        return (0, B.ZP)("MuiSwitch", e);
      }
      let et = (0, R.Z)("MuiSwitch", [
          "root",
          "edgeStart",
          "edgeEnd",
          "switchBase",
          "colorPrimary",
          "colorSecondary",
          "sizeSmall",
          "sizeMedium",
          "checked",
          "disabled",
          "input",
          "thumb",
          "track",
        ]),
        er = (e) => {
          let {
              classes: t,
              edge: r,
              size: n,
              color: i,
              checked: s,
              disabled: a,
            } = e,
            l = {
              root: ["root", r && `edge${(0, u.Z)(r)}`, `size${(0, u.Z)(n)}`],
              switchBase: [
                "switchBase",
                `color${(0, u.Z)(i)}`,
                s && "checked",
                a && "disabled",
              ],
              thumb: ["thumb"],
              track: ["track"],
              input: ["input"],
            },
            c = (0, o.Z)(l, ee, t);
          return { ...t, ...c };
        },
        en = (0, f.ZP)("span", {
          name: "MuiSwitch",
          slot: "Root",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.root,
              r.edge && t[`edge${(0, u.Z)(r.edge)}`],
              t[`size${(0, u.Z)(r.size)}`],
            ];
          },
        })({
          display: "inline-flex",
          width: 58,
          height: 38,
          overflow: "hidden",
          padding: 12,
          boxSizing: "border-box",
          position: "relative",
          flexShrink: 0,
          zIndex: 0,
          verticalAlign: "middle",
          "@media print": { colorAdjust: "exact" },
          variants: [
            { props: { edge: "start" }, style: { marginLeft: -8 } },
            { props: { edge: "end" }, style: { marginRight: -8 } },
            {
              props: { size: "small" },
              style: {
                width: 40,
                height: 24,
                padding: 7,
                [`& .${et.thumb}`]: { width: 16, height: 16 },
                [`& .${et.switchBase}`]: {
                  padding: 4,
                  [`&.${et.checked}`]: { transform: "translateX(16px)" },
                },
              },
            },
          ],
        }),
        ei = (0, f.ZP)(Y, {
          name: "MuiSwitch",
          slot: "SwitchBase",
          overridesResolver: (e, t) => {
            let { ownerState: r } = e;
            return [
              t.switchBase,
              { [`& .${et.input}`]: t.input },
              "default" !== r.color && t[`color${(0, u.Z)(r.color)}`],
            ];
          },
        })(
          (0, J.Z)(({ theme: e }) => ({
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            color: e.vars
              ? e.vars.palette.Switch.defaultColor
              : `${
                  "light" === e.palette.mode
                    ? e.palette.common.white
                    : e.palette.grey[300]
                }`,
            transition: e.transitions.create(["left", "transform"], {
              duration: e.transitions.duration.shortest,
            }),
            [`&.${et.checked}`]: { transform: "translateX(20px)" },
            [`&.${et.disabled}`]: {
              color: e.vars
                ? e.vars.palette.Switch.defaultDisabledColor
                : `${
                    "light" === e.palette.mode
                      ? e.palette.grey[100]
                      : e.palette.grey[600]
                  }`,
            },
            [`&.${et.checked} + .${et.track}`]: { opacity: 0.5 },
            [`&.${et.disabled} + .${et.track}`]: {
              opacity: e.vars
                ? e.vars.opacity.switchTrackDisabled
                : `${"light" === e.palette.mode ? 0.12 : 0.2}`,
            },
            [`& .${et.input}`]: { left: "-100%", width: "300%" },
          })),
          (0, J.Z)(({ theme: e }) => ({
            "&:hover": {
              backgroundColor: e.vars
                ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                : (0, l.Fq)(
                    e.palette.action.active,
                    e.palette.action.hoverOpacity
                  ),
              "@media (hover: none)": { backgroundColor: "transparent" },
            },
            variants: [
              ...Object.entries(e.palette)
                .filter((0, c.Z)(["light"]))
                .map(([t]) => ({
                  props: { color: t },
                  style: {
                    [`&.${et.checked}`]: {
                      color: (e.vars || e).palette[t].main,
                      "&:hover": {
                        backgroundColor: e.vars
                          ? `rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                          : (0, l.Fq)(
                              e.palette[t].main,
                              e.palette.action.hoverOpacity
                            ),
                        "@media (hover: none)": {
                          backgroundColor: "transparent",
                        },
                      },
                      [`&.${et.disabled}`]: {
                        color: e.vars
                          ? e.vars.palette.Switch[`${t}DisabledColor`]
                          : `${
                              "light" === e.palette.mode
                                ? (0, l.$n)(e.palette[t].main, 0.62)
                                : (0, l._j)(e.palette[t].main, 0.55)
                            }`,
                      },
                    },
                    [`&.${et.checked} + .${et.track}`]: {
                      backgroundColor: (e.vars || e).palette[t].main,
                    },
                  },
                })),
            ],
          }))
        ),
        es = (0, f.ZP)("span", {
          name: "MuiSwitch",
          slot: "Track",
          overridesResolver: (e, t) => t.track,
        })(
          (0, J.Z)(({ theme: e }) => ({
            height: "100%",
            width: "100%",
            borderRadius: 7,
            zIndex: -1,
            transition: e.transitions.create(["opacity", "background-color"], {
              duration: e.transitions.duration.shortest,
            }),
            backgroundColor: e.vars
              ? e.vars.palette.common.onBackground
              : `${
                  "light" === e.palette.mode
                    ? e.palette.common.black
                    : e.palette.common.white
                }`,
            opacity: e.vars
              ? e.vars.opacity.switchTrack
              : `${"light" === e.palette.mode ? 0.38 : 0.3}`,
          }))
        ),
        ea = (0, f.ZP)("span", {
          name: "MuiSwitch",
          slot: "Thumb",
          overridesResolver: (e, t) => t.thumb,
        })(
          (0, J.Z)(({ theme: e }) => ({
            boxShadow: (e.vars || e).shadows[1],
            backgroundColor: "currentColor",
            width: 20,
            height: 20,
            borderRadius: "50%",
          }))
        ),
        eo = s.forwardRef(function (e, t) {
          let r = (0, m.i)({ props: e, name: "MuiSwitch" }),
            {
              className: n,
              color: i = "primary",
              edge: s = !1,
              size: o = "medium",
              sx: l,
              slots: u = {},
              slotProps: c = {},
              ...h
            } = r,
            f = { ...r, color: i, edge: s, size: o },
            d = er(f),
            p = { slots: u, slotProps: c },
            [g, y] = (0, G.Z)("root", {
              className: (0, a.Z)(d.root, n),
              elementType: en,
              externalForwardedProps: p,
              ownerState: f,
              additionalProps: { sx: l },
            }),
            [v, b] = (0, G.Z)("thumb", {
              className: d.thumb,
              elementType: ea,
              externalForwardedProps: p,
              ownerState: f,
            }),
            w = (0, N.jsx)(v, { ...b }),
            [S, E] = (0, G.Z)("track", {
              className: d.track,
              elementType: es,
              externalForwardedProps: p,
              ownerState: f,
            });
          return (0,
          N.jsxs)(g, { ...y, children: [(0, N.jsx)(ei, { type: "checkbox", icon: w, checkedIcon: w, ref: t, ownerState: f, ...h, classes: { ...d, root: d.switchBase }, slots: { ...(u.switchBase && { root: u.switchBase }), ...(u.input && { input: u.input }) }, slotProps: { ...(c.switchBase && { root: "function" == typeof c.switchBase ? c.switchBase(f) : c.switchBase }), ...(c.input && { input: "function" == typeof c.input ? c.input(f) : c.input }) } }), (0, N.jsx)(S, { ...E })] });
        });
    },
    10186: function (e, t, r) {
      r.d(t, { Z: () => n });
      let n = (e) =>
        "ownerState" !== e &&
        "theme" !== e &&
        "sx" !== e &&
        "as" !== e &&
        "classes" !== e;
    },
    24106: function (e, t, r) {
      r.d(t, { ZP: () => ep });
      var n = r(12622),
        i = r(78217);
      let s = (e) => {
        let t = Object.keys(e).map((t) => ({ key: t, val: e[t] })) || [];
        return (
          t.sort((e, t) => e.val - t.val),
          t.reduce((e, t) => ({ ...e, [t.key]: t.val }), {})
        );
      };
      var a = r(73712);
      let o = { borderRadius: 4 };
      var l = r(71044);
      function u(e = 8, t = (0, l.hB)({ spacing: e })) {
        if (e.mui) return e;
        let r = (...e) =>
          (0 === e.length ? [1] : e)
            .map((e) => {
              let r = t(e);
              return "number" == typeof r ? `${r}px` : r;
            })
            .join(" ");
        return (r.mui = !0), r;
      }
      var c = r(63979),
        h = r(2902),
        f = r(15294),
        d = r(14279),
        p = r(31433);
      let g = (function () {
        function e(e, t, r, n) {
          let i = { [e]: t, theme: r },
            s = n[e];
          if (!s) return { [e]: t };
          let { cssProperty: a = e, themeKey: o, transform: l, style: u } = s;
          if (null == t) return null;
          if ("typography" === o && "inherit" === t) return { [e]: t };
          let h = (0, f.DW)(r, o) || {};
          return u
            ? u(i)
            : (0, d.k9)(i, t, (t) => {
                let r = (0, f.Jq)(h, l, t);
                return (t === r &&
                  "string" == typeof t &&
                  (r = (0, f.Jq)(
                    h,
                    l,
                    `${e}${"default" === t ? "" : (0, c.Z)(t)}`,
                    t
                  )),
                !1 === a)
                  ? r
                  : { [a]: r };
              });
        }
        return function t(r) {
          let { sx: n, theme: i = {} } = r || {};
          if (!n) return null;
          let s = i.unstable_sxConfig ?? p.Z;
          function o(r) {
            let n = r;
            if ("function" == typeof r) n = r(i);
            else if ("object" != typeof r) return r;
            if (!n) return null;
            let o = (0, d.W8)(i.breakpoints),
              l = Object.keys(o),
              u = o;
            return (
              Object.keys(n).forEach((r) => {
                var a;
                let o = "function" == typeof (a = n[r]) ? a(i) : a;
                if (null != o) {
                  if ("object" == typeof o) {
                    if (s[r]) u = (0, h.Z)(u, e(r, o, i, s));
                    else {
                      let e = (0, d.k9)({ theme: i }, o, (e) => ({ [r]: e }));
                      (function (...e) {
                        let t = new Set(
                          e.reduce((e, t) => e.concat(Object.keys(t)), [])
                        );
                        return e.every((e) => t.size === Object.keys(e).length);
                      })(e, o)
                        ? (u[r] = t({ sx: o, theme: i }))
                        : (u = (0, h.Z)(u, e));
                    }
                  } else u = (0, h.Z)(u, e(r, o, i, s));
                }
              }),
              (0, a.ar)(i, (0, d.L7)(l, u))
            );
          }
          return Array.isArray(n) ? n.map(o) : o(n);
        };
      })();
      function m(e, t) {
        if (this.vars) {
          if (
            !this.colorSchemes?.[e] ||
            "function" != typeof this.getColorSchemeSelector
          )
            return {};
          let r = this.getColorSchemeSelector(e);
          return "&" === r
            ? t
            : ((r.includes("data-") || r.includes(".")) &&
                (r = `*:where(${r.replace(/\s*&$/, "")}) &`),
              { [r]: t });
        }
        return this.palette.mode === e ? t : {};
      }
      g.filterProps = ["sx"];
      let y = function (e = {}, ...t) {
        let {
            breakpoints: r = {},
            palette: n = {},
            spacing: l,
            shape: c = {},
            ...h
          } = e,
          f = (function (e) {
            let {
                values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
                unit: r = "px",
                step: n = 5,
                ...i
              } = e,
              a = s(t),
              o = Object.keys(a);
            function l(e) {
              let n = "number" == typeof t[e] ? t[e] : e;
              return `@media (min-width:${n}${r})`;
            }
            function u(e) {
              let i = "number" == typeof t[e] ? t[e] : e;
              return `@media (max-width:${i - n / 100}${r})`;
            }
            function c(e, i) {
              let s = o.indexOf(i);
              return `@media (min-width:${
                "number" == typeof t[e] ? t[e] : e
              }${r}) and (max-width:${
                (-1 !== s && "number" == typeof t[o[s]] ? t[o[s]] : i) - n / 100
              }${r})`;
            }
            return {
              keys: o,
              values: a,
              up: l,
              down: u,
              between: c,
              only: function (e) {
                return o.indexOf(e) + 1 < o.length
                  ? c(e, o[o.indexOf(e) + 1])
                  : l(e);
              },
              not: function (e) {
                let t = o.indexOf(e);
                return 0 === t
                  ? l(o[1])
                  : t === o.length - 1
                  ? u(o[t])
                  : c(e, o[o.indexOf(e) + 1]).replace(
                      "@media",
                      "@media not all and"
                    );
              },
              unit: r,
              ...i,
            };
          })(r),
          d = u(l),
          y = (0, i.Z)(
            {
              breakpoints: f,
              direction: "ltr",
              components: {},
              palette: { mode: "light", ...n },
              spacing: d,
              shape: { ...o, ...c },
            },
            h
          );
        return (
          ((y = (0, a.ZP)(y)).applyStyles = m),
          ((y = t.reduce((e, t) => (0, i.Z)(e, t), y)).unstable_sxConfig = {
            ...p.Z,
            ...h?.unstable_sxConfig,
          }),
          (y.unstable_sx = function (e) {
            return g({ sx: e, theme: this });
          }),
          y
        );
      };
      var v = r(46818);
      let b = y();
      function w(e) {
        return "ownerState" !== e && "theme" !== e && "sx" !== e && "as" !== e;
      }
      function S(e, t) {
        let r = "function" == typeof t ? t(e) : t;
        if (Array.isArray(r)) return r.flatMap((t) => S(e, t));
        if (Array.isArray(r?.variants)) {
          let t;
          if (r.isProcessed) t = r.style;
          else {
            let { variants: e, ...n } = r;
            t = n;
          }
          return E(e, r.variants, [t]);
        }
        return r?.isProcessed ? r.style : r;
      }
      function E(e, t, r = []) {
        let n;
        e: for (let i = 0; i < t.length; i += 1) {
          let s = t[i];
          if ("function" == typeof s.props) {
            if (
              ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
              !s.props(n))
            )
              continue;
          } else
            for (let t in s.props)
              if (e[t] !== s.props[t] && e.ownerState?.[t] !== s.props[t])
                continue e;
          "function" == typeof s.style
            ? ((n ??= { ...e, ...e.ownerState, ownerState: e.ownerState }),
              r.push(s.style(n)))
            : r.push(s.style);
        }
        return r;
      }
      var x = r(36713),
        T = r(62403);
      let C = { black: "#000", white: "#fff" },
        _ = {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#eeeeee",
          300: "#e0e0e0",
          400: "#bdbdbd",
          500: "#9e9e9e",
          600: "#757575",
          700: "#616161",
          800: "#424242",
          900: "#212121",
          A100: "#f5f5f5",
          A200: "#eeeeee",
          A400: "#bdbdbd",
          A700: "#616161",
        },
        k = {
          50: "#f3e5f5",
          100: "#e1bee7",
          200: "#ce93d8",
          300: "#ba68c8",
          400: "#ab47bc",
          500: "#9c27b0",
          600: "#8e24aa",
          700: "#7b1fa2",
          800: "#6a1b9a",
          900: "#4a148c",
          A100: "#ea80fc",
          A200: "#e040fb",
          A400: "#d500f9",
          A700: "#aa00ff",
        },
        A = {
          50: "#ffebee",
          100: "#ffcdd2",
          200: "#ef9a9a",
          300: "#e57373",
          400: "#ef5350",
          500: "#f44336",
          600: "#e53935",
          700: "#d32f2f",
          800: "#c62828",
          900: "#b71c1c",
          A100: "#ff8a80",
          A200: "#ff5252",
          A400: "#ff1744",
          A700: "#d50000",
        },
        I = {
          50: "#fff3e0",
          100: "#ffe0b2",
          200: "#ffcc80",
          300: "#ffb74d",
          400: "#ffa726",
          500: "#ff9800",
          600: "#fb8c00",
          700: "#f57c00",
          800: "#ef6c00",
          900: "#e65100",
          A100: "#ffd180",
          A200: "#ffab40",
          A400: "#ff9100",
          A700: "#ff6d00",
        },
        D = {
          50: "#e3f2fd",
          100: "#bbdefb",
          200: "#90caf9",
          300: "#64b5f6",
          400: "#42a5f5",
          500: "#2196f3",
          600: "#1e88e5",
          700: "#1976d2",
          800: "#1565c0",
          900: "#0d47a1",
          A100: "#82b1ff",
          A200: "#448aff",
          A400: "#2979ff",
          A700: "#2962ff",
        },
        N = {
          50: "#e1f5fe",
          100: "#b3e5fc",
          200: "#81d4fa",
          300: "#4fc3f7",
          400: "#29b6f6",
          500: "#03a9f4",
          600: "#039be5",
          700: "#0288d1",
          800: "#0277bd",
          900: "#01579b",
          A100: "#80d8ff",
          A200: "#40c4ff",
          A400: "#00b0ff",
          A700: "#0091ea",
        },
        R = {
          50: "#e8f5e9",
          100: "#c8e6c9",
          200: "#a5d6a7",
          300: "#81c784",
          400: "#66bb6a",
          500: "#4caf50",
          600: "#43a047",
          700: "#388e3c",
          800: "#2e7d32",
          900: "#1b5e20",
          A100: "#b9f6ca",
          A200: "#69f0ae",
          A400: "#00e676",
          A700: "#00c853",
        };
      function P() {
        return {
          text: {
            primary: "rgba(0, 0, 0, 0.87)",
            secondary: "rgba(0, 0, 0, 0.6)",
            disabled: "rgba(0, 0, 0, 0.38)",
          },
          divider: "rgba(0, 0, 0, 0.12)",
          background: { paper: C.white, default: C.white },
          action: {
            active: "rgba(0, 0, 0, 0.54)",
            hover: "rgba(0, 0, 0, 0.04)",
            hoverOpacity: 0.04,
            selected: "rgba(0, 0, 0, 0.08)",
            selectedOpacity: 0.08,
            disabled: "rgba(0, 0, 0, 0.26)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(0, 0, 0, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.12,
          },
        };
      }
      let O = P();
      function L() {
        return {
          text: {
            primary: C.white,
            secondary: "rgba(255, 255, 255, 0.7)",
            disabled: "rgba(255, 255, 255, 0.5)",
            icon: "rgba(255, 255, 255, 0.5)",
          },
          divider: "rgba(255, 255, 255, 0.12)",
          background: { paper: "#121212", default: "#121212" },
          action: {
            active: C.white,
            hover: "rgba(255, 255, 255, 0.08)",
            hoverOpacity: 0.08,
            selected: "rgba(255, 255, 255, 0.16)",
            selectedOpacity: 0.16,
            disabled: "rgba(255, 255, 255, 0.3)",
            disabledBackground: "rgba(255, 255, 255, 0.12)",
            disabledOpacity: 0.38,
            focus: "rgba(255, 255, 255, 0.12)",
            focusOpacity: 0.12,
            activatedOpacity: 0.24,
          },
        };
      }
      let M = L();
      function $(e, t, r, n) {
        let i = n.light || n,
          s = n.dark || 1.5 * n;
        e[t] ||
          (e.hasOwnProperty(r)
            ? (e[t] = e[r])
            : "light" === t
            ? (e.light = (0, T.$n)(e.main, i))
            : "dark" === t && (e.dark = (0, T._j)(e.main, s)));
      }
      function V(e) {
        let t;
        let {
            mode: r = "light",
            contrastThreshold: n = 3,
            tonalOffset: s = 0.2,
            ...a
          } = e,
          o =
            e.primary ||
            (function (e = "light") {
              return "dark" === e
                ? { main: D["200"], light: D["50"], dark: D["400"] }
                : { main: D["700"], light: D["400"], dark: D["800"] };
            })(r),
          l =
            e.secondary ||
            (function (e = "light") {
              return "dark" === e
                ? { main: k["200"], light: k["50"], dark: k["400"] }
                : { main: k["500"], light: k["300"], dark: k["700"] };
            })(r),
          u =
            e.error ||
            (function (e = "light") {
              return "dark" === e
                ? { main: A["500"], light: A["300"], dark: A["700"] }
                : { main: A["700"], light: A["400"], dark: A["800"] };
            })(r),
          c =
            e.info ||
            (function (e = "light") {
              return "dark" === e
                ? { main: N["400"], light: N["300"], dark: N["700"] }
                : { main: N["700"], light: N["500"], dark: N["900"] };
            })(r),
          h =
            e.success ||
            (function (e = "light") {
              return "dark" === e
                ? { main: R["400"], light: R["300"], dark: R["700"] }
                : { main: R["800"], light: R["500"], dark: R["900"] };
            })(r),
          f =
            e.warning ||
            (function (e = "light") {
              return "dark" === e
                ? { main: I["400"], light: I["300"], dark: I["700"] }
                : { main: "#ed6c02", light: I["500"], dark: I["900"] };
            })(r);
        function d(e) {
          return (0, T.mi)(e, M.text.primary) >= n
            ? M.text.primary
            : O.text.primary;
        }
        let p = ({
          color: e,
          name: t,
          mainShade: r = 500,
          lightShade: n = 300,
          darkShade: i = 700,
        }) => {
          if (
            (!(e = { ...e }).main && e[r] && (e.main = e[r]),
            !e.hasOwnProperty("main"))
          )
            throw Error((0, x.Z)(11, t ? ` (${t})` : "", r));
          if ("string" != typeof e.main)
            throw Error(
              (0, x.Z)(12, t ? ` (${t})` : "", JSON.stringify(e.main))
            );
          return (
            $(e, "light", n, s),
            $(e, "dark", i, s),
            e.contrastText || (e.contrastText = d(e.main)),
            e
          );
        };
        return (
          "light" === r ? (t = P()) : "dark" === r && (t = L()),
          (0, i.Z)(
            {
              common: { ...C },
              mode: r,
              primary: p({ color: o, name: "primary" }),
              secondary: p({
                color: l,
                name: "secondary",
                mainShade: "A400",
                lightShade: "A200",
                darkShade: "A700",
              }),
              error: p({ color: u, name: "error" }),
              warning: p({ color: f, name: "warning" }),
              info: p({ color: c, name: "info" }),
              success: p({ color: h, name: "success" }),
              grey: _,
              contrastThreshold: n,
              getContrastText: d,
              augmentColor: p,
              tonalOffset: s,
              ...t,
            },
            a
          )
        );
      }
      let F = (e, t, r, n = []) => {
          let i = e;
          t.forEach((e, s) => {
            s === t.length - 1
              ? Array.isArray(i)
                ? (i[Number(e)] = r)
                : i && "object" == typeof i && (i[e] = r)
              : i &&
                "object" == typeof i &&
                (i[e] || (i[e] = n.includes(e) ? [] : {}), (i = i[e]));
          });
        },
        B = (e, t, r) => {
          !(function e(n, i = [], s = []) {
            Object.entries(n).forEach(([n, a]) => {
              (r && (!r || r([...i, n]))) ||
                null == a ||
                ("object" == typeof a && Object.keys(a).length > 0
                  ? e(a, [...i, n], Array.isArray(a) ? [...s, n] : s)
                  : t([...i, n], a, s));
            });
          })(e);
        },
        U = (e, t) =>
          "number" == typeof t
            ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((t) =>
                e.includes(t)
              ) || e[e.length - 1].toLowerCase().includes("opacity")
              ? t
              : `${t}px`
            : t;
      function j(e, t) {
        let { prefix: r, shouldSkipGeneratingVar: n } = t || {},
          i = {},
          s = {},
          a = {};
        return (
          B(
            e,
            (e, t, o) => {
              if (
                ("string" == typeof t || "number" == typeof t) &&
                (!n || !n(e, t))
              ) {
                let n = `--${r ? `${r}-` : ""}${e.join("-")}`,
                  l = U(e, t);
                Object.assign(i, { [n]: l }),
                  F(s, e, `var(${n})`, o),
                  F(a, e, `var(${n}, ${l})`, o);
              }
            },
            (e) => "vars" === e[0]
          ),
          { css: i, vars: s, varsWithDefaults: a }
        );
      }
      let z = function (e, t = {}) {
          let {
              getSelector: r = function (t, r) {
                let n = s;
                if (
                  ("class" === s && (n = ".%s"),
                  "data" === s && (n = "[data-%s]"),
                  s?.startsWith("data-") &&
                    !s.includes("%s") &&
                    (n = `[${s}="%s"]`),
                  t)
                ) {
                  if ("media" === n) {
                    if (e.defaultColorScheme === t) return ":root";
                    let n = a[t]?.palette?.mode || t;
                    return {
                      [`@media (prefers-color-scheme: ${n})`]: { ":root": r },
                    };
                  }
                  if (n)
                    return e.defaultColorScheme === t
                      ? `:root, ${n.replace("%s", String(t))}`
                      : n.replace("%s", String(t));
                }
                return ":root";
              },
              disableCssColorScheme: n,
              colorSchemeSelector: s,
            } = t,
            {
              colorSchemes: a = {},
              components: o,
              defaultColorScheme: l = "light",
              ...u
            } = e,
            { vars: c, css: h, varsWithDefaults: f } = j(u, t),
            d = f,
            p = {},
            { [l]: g, ...m } = a;
          if (
            (Object.entries(m || {}).forEach(([e, r]) => {
              let { vars: n, css: s, varsWithDefaults: a } = j(r, t);
              (d = (0, i.Z)(d, a)), (p[e] = { css: s, vars: n });
            }),
            g)
          ) {
            let { css: e, vars: r, varsWithDefaults: n } = j(g, t);
            (d = (0, i.Z)(d, n)), (p[l] = { css: e, vars: r });
          }
          return {
            vars: d,
            generateThemeVars: () => {
              let e = { ...c };
              return (
                Object.entries(p).forEach(([, { vars: t }]) => {
                  e = (0, i.Z)(e, t);
                }),
                e
              );
            },
            generateStyleSheets: () => {
              let t = [],
                i = e.defaultColorScheme || "light";
              function s(e, r) {
                Object.keys(r).length &&
                  t.push("string" == typeof e ? { [e]: { ...r } } : e);
              }
              s(r(void 0, { ...h }), h);
              let { [i]: o, ...l } = p;
              if (o) {
                let { css: e } = o,
                  t = a[i]?.palette?.mode,
                  l = !n && t ? { colorScheme: t, ...e } : { ...e };
                s(r(i, { ...l }), l);
              }
              return (
                Object.entries(l).forEach(([e, { css: t }]) => {
                  let i = a[e]?.palette?.mode,
                    o = !n && i ? { colorScheme: i, ...t } : { ...t };
                  s(r(e, { ...o }), o);
                }),
                t
              );
            },
          };
        },
        q = { textTransform: "uppercase" },
        H = '"Roboto", "Helvetica", "Arial", sans-serif';
      function K(...e) {
        return `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,0.2),${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,0.14),${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,0.12)`;
      }
      let Z = [
          "none",
          K(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
          K(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
          K(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
          K(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
          K(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
          K(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
          K(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
          K(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
          K(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
          K(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
          K(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
          K(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
          K(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
          K(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
          K(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
          K(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
          K(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
          K(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
          K(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
          K(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
          K(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
          K(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
          K(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
          K(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
        ],
        G = {
          easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
          easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
          easeIn: "cubic-bezier(0.4, 0, 1, 1)",
          sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
        },
        W = {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        };
      function Q(e) {
        return `${Math.round(e)}ms`;
      }
      function X(e) {
        if (!e) return 0;
        let t = e / 36;
        return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
      }
      let Y = {
        mobileStepper: 1e3,
        fab: 1050,
        speedDial: 1050,
        appBar: 1100,
        drawer: 1200,
        modal: 1300,
        snackbar: 1400,
        tooltip: 1500,
      };
      function J(e = {}) {
        let t = { ...e };
        return (
          !(function e(t) {
            let r = Object.entries(t);
            for (let n = 0; n < r.length; n++) {
              let [s, a] = r[n];
              !(
                (0, i.P)(a) ||
                void 0 === a ||
                "string" == typeof a ||
                "boolean" == typeof a ||
                "number" == typeof a ||
                Array.isArray(a)
              ) || s.startsWith("unstable_")
                ? delete t[s]
                : (0, i.P)(a) && ((t[s] = { ...a }), e(t[s]));
            }
          })(t),
          `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
        );
      }
      let ee = function (e = {}, ...t) {
          var r;
          let {
            breakpoints: n,
            mixins: s = {},
            spacing: a,
            palette: o = {},
            transitions: l = {},
            typography: u = {},
            shape: c,
            ...h
          } = e;
          if (e.vars && void 0 === e.generateThemeVars)
            throw Error((0, x.Z)(20));
          let f = V(o),
            d = y(e),
            m = (0, i.Z)(d, {
              mixins: {
                toolbar: {
                  minHeight: 56,
                  [(r = d.breakpoints).up("xs")]: {
                    "@media (orientation: landscape)": { minHeight: 48 },
                  },
                  [r.up("sm")]: { minHeight: 64 },
                },
                ...s,
              },
              palette: f,
              shadows: Z.slice(),
              typography: (function (e, t) {
                let {
                    fontFamily: r = H,
                    fontSize: n = 14,
                    fontWeightLight: s = 300,
                    fontWeightRegular: a = 400,
                    fontWeightMedium: o = 500,
                    fontWeightBold: l = 700,
                    htmlFontSize: u = 16,
                    allVariants: c,
                    pxToRem: h,
                    ...f
                  } = "function" == typeof t ? t(e) : t,
                  d = n / 14,
                  p = h || ((e) => `${(e / u) * d}rem`),
                  g = (e, t, n, i, s) => ({
                    fontFamily: r,
                    fontWeight: e,
                    fontSize: p(t),
                    lineHeight: n,
                    ...(r === H
                      ? {
                          letterSpacing: `${Math.round((i / t) * 1e5) / 1e5}em`,
                        }
                      : {}),
                    ...s,
                    ...c,
                  }),
                  m = {
                    h1: g(s, 96, 1.167, -1.5),
                    h2: g(s, 60, 1.2, -0.5),
                    h3: g(a, 48, 1.167, 0),
                    h4: g(a, 34, 1.235, 0.25),
                    h5: g(a, 24, 1.334, 0),
                    h6: g(o, 20, 1.6, 0.15),
                    subtitle1: g(a, 16, 1.75, 0.15),
                    subtitle2: g(o, 14, 1.57, 0.1),
                    body1: g(a, 16, 1.5, 0.15),
                    body2: g(a, 14, 1.43, 0.15),
                    button: g(o, 14, 1.75, 0.4, q),
                    caption: g(a, 12, 1.66, 0.4),
                    overline: g(a, 12, 2.66, 1, q),
                    inherit: {
                      fontFamily: "inherit",
                      fontWeight: "inherit",
                      fontSize: "inherit",
                      lineHeight: "inherit",
                      letterSpacing: "inherit",
                    },
                  };
                return (0, i.Z)(
                  {
                    htmlFontSize: u,
                    pxToRem: p,
                    fontFamily: r,
                    fontSize: n,
                    fontWeightLight: s,
                    fontWeightRegular: a,
                    fontWeightMedium: o,
                    fontWeightBold: l,
                    ...m,
                  },
                  f,
                  { clone: !1 }
                );
              })(f, u),
              transitions: (function (e) {
                let t = { ...G, ...e.easing },
                  r = { ...W, ...e.duration };
                return {
                  getAutoHeightDuration: X,
                  create: (e = ["all"], n = {}) => {
                    let {
                      duration: i = r.standard,
                      easing: s = t.easeInOut,
                      delay: a = 0,
                      ...o
                    } = n;
                    return (Array.isArray(e) ? e : [e])
                      .map(
                        (e) =>
                          `${e} ${"string" == typeof i ? i : Q(i)} ${s} ${
                            "string" == typeof a ? a : Q(a)
                          }`
                      )
                      .join(",");
                  },
                  ...e,
                  easing: t,
                  duration: r,
                };
              })(l),
              zIndex: { ...Y },
            });
          return (
            (m = (0, i.Z)(m, h)),
            ((m = t.reduce((e, t) => (0, i.Z)(e, t), m)).unstable_sxConfig = {
              ...p.Z,
              ...h?.unstable_sxConfig,
            }),
            (m.unstable_sx = function (e) {
              return g({ sx: e, theme: this });
            }),
            (m.toRuntimeSource = J),
            m
          );
        },
        et = [...Array(25)].map((e, t) => {
          let r;
          if (0 === t) return "none";
          let n =
            Math.round(
              10 * (t < 1 ? 5.11916 * t ** 2 : 4.5 * Math.log(t + 1) + 2)
            ) / 1e3;
          return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
        });
      function er(e) {
        return {
          inputPlaceholder: "dark" === e ? 0.5 : 0.42,
          inputUnderline: "dark" === e ? 0.7 : 0.42,
          switchTrackDisabled: "dark" === e ? 0.2 : 0.12,
          switchTrack: "dark" === e ? 0.3 : 0.38,
        };
      }
      function en(e) {
        return "dark" === e ? et : [];
      }
      function ei(e) {
        return (
          !!e[0].match(
            /(cssVarPrefix|colorSchemeSelector|rootSelector|typography|mixins|breakpoints|direction|transitions)/
          ) ||
          !!e[0].match(/sxConfig$/) ||
          ("palette" === e[0] &&
            !!e[1]?.match(/(mode|contrastThreshold|tonalOffset)/))
        );
      }
      let es = (e) => [
          ...[...Array(25)].map((t, r) => `--${e ? `${e}-` : ""}overlays-${r}`),
          `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
          `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
        ],
        ea = (e) => (t, r) => {
          let n = e.rootSelector || ":root",
            i = e.colorSchemeSelector,
            s = i;
          if (
            ("class" === i && (s = ".%s"),
            "data" === i && (s = "[data-%s]"),
            i?.startsWith("data-") && !i.includes("%s") && (s = `[${i}="%s"]`),
            e.defaultColorScheme === t)
          ) {
            if ("dark" === t) {
              let i = {};
              return (es(e.cssVarPrefix).forEach((e) => {
                (i[e] = r[e]), delete r[e];
              }),
              "media" === s)
                ? { [n]: r, "@media (prefers-color-scheme: dark)": { [n]: i } }
                : s
                ? {
                    [s.replace("%s", t)]: i,
                    [`${n}, ${s.replace("%s", t)}`]: r,
                  }
                : { [n]: { ...r, ...i } };
            }
            if (s && "media" !== s)
              return `${n}, ${s.replace("%s", String(t))}`;
          } else if (t) {
            if ("media" === s)
              return {
                [`@media (prefers-color-scheme: ${String(t)})`]: { [n]: r },
              };
            if (s) return s.replace("%s", String(t));
          }
          return n;
        };
      function eo(e, t, r) {
        !e[t] && r && (e[t] = r);
      }
      function el(e) {
        return "string" == typeof e && e.startsWith("hsl") ? (0, T.ve)(e) : e;
      }
      function eu(e, t) {
        `${t}Channel` in e ||
          (e[`${t}Channel`] = (0, T.LR)(
            el(e[t]),
            `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
          ));
      }
      let ec = (e) => {
          try {
            return e();
          } catch (e) {}
        },
        eh = (e = "mui") =>
          (function (e = "") {
            return (t, ...r) =>
              `var(--${e ? `${e}-` : ""}${t}${(function t(...r) {
                if (!r.length) return "";
                let n = r[0];
                return "string" != typeof n ||
                  n.match(
                    /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
                  )
                  ? `, ${n}`
                  : `, var(--${e ? `${e}-` : ""}${n}${t(...r.slice(1))})`;
              })(...r)})`;
          })(e);
      function ef(e, t, r, n) {
        if (!t) return;
        t = !0 === t ? {} : t;
        let i = "dark" === n ? "dark" : "light";
        if (!r) {
          e[n] = (function (e) {
            let {
                palette: t = { mode: "light" },
                opacity: r,
                overlays: n,
                ...i
              } = e,
              s = V(t);
            return {
              palette: s,
              opacity: { ...er(s.mode), ...r },
              overlays: n || en(s.mode),
              ...i,
            };
          })({ ...t, palette: { mode: i, ...t?.palette } });
          return;
        }
        let { palette: s, ...a } = ee({
          ...r,
          palette: { mode: i, ...t?.palette },
        });
        return (
          (e[n] = {
            ...t,
            palette: s,
            opacity: { ...er(i), ...t?.opacity },
            overlays: t?.overlays || en(i),
          }),
          a
        );
      }
      function ed(e, t, r) {
        e.colorSchemes &&
          r &&
          (e.colorSchemes[t] = {
            ...(!0 !== r && r),
            palette: V({ ...(!0 === r ? {} : r.palette), mode: t }),
          });
      }
      let ep = (function (e = {}) {
        let {
          themeId: t,
          defaultTheme: r = b,
          rootShouldForwardProp: s = w,
          slotShouldForwardProp: a = w,
        } = e;
        function o(e) {
          e.theme = !(function (e) {
            for (let t in e) return !1;
            return !0;
          })(e.theme)
            ? e.theme[t] || e.theme
            : r;
        }
        return (e, t = {}) => {
          var r, l, u, c, h;
          (0, n.nf)(e, (e) => e.filter((e) => e !== g));
          let {
              name: f,
              slot: d,
              skipVariantsResolver: p,
              skipSx: m,
              overridesResolver: y = (r = (l = d)
                ? l.charAt(0).toLowerCase() + l.slice(1)
                : l)
                ? (e, t) => t[r]
                : null,
              ...b
            } = t,
            x = void 0 !== p ? p : (d && "Root" !== d && "root" !== d) || !1,
            T = m || !1,
            C = w;
          "Root" === d || "root" === d
            ? (C = s)
            : d
            ? (C = a)
            : "string" == typeof (u = e) &&
              u.charCodeAt(0) > 96 &&
              (C = void 0);
          let _ = (0, n.ZP)(e, {
              shouldForwardProp: C,
              label: ((c = 0), (h = 0), void 0),
              ...b,
            }),
            k = (e) => {
              if ("function" == typeof e && e.__emotion_real !== e)
                return function (t) {
                  return S(t, e);
                };
              if ((0, i.P)(e)) {
                let t = (0, v.Z)(e);
                return t.variants
                  ? function (e) {
                      return S(e, t);
                    }
                  : t.style;
              }
              return e;
            },
            A = (...t) => {
              let r = [],
                n = t.map(k),
                i = [];
              if (
                (r.push(o),
                f &&
                  y &&
                  i.push(function (e) {
                    let t = e.theme,
                      r = t.components?.[f]?.styleOverrides;
                    if (!r) return null;
                    let n = {};
                    for (let t in r) n[t] = S(e, r[t]);
                    return y(e, n);
                  }),
                f &&
                  !x &&
                  i.push(function (e) {
                    let t = e.theme,
                      r = t?.components?.[f]?.variants;
                    return r ? E(e, r) : null;
                  }),
                T || i.push(g),
                Array.isArray(n[0]))
              ) {
                let e;
                let t = n.shift(),
                  s = Array(r.length).fill(""),
                  a = Array(i.length).fill("");
                ((e = [...s, ...t, ...a]).raw = [...s, ...t.raw, ...a]),
                  r.unshift(e);
              }
              let s = _(...r, ...n, ...i);
              return e.muiName && (s.muiName = e.muiName), s;
            };
          return _.withConfig && (A.withConfig = _.withConfig), A;
        };
      })({
        themeId: "$$material",
        defaultTheme: (function (e = {}, ...t) {
          let {
              palette: r,
              cssVariables: n = !1,
              colorSchemes: s = r ? void 0 : { light: !0 },
              defaultColorScheme: a = r?.mode,
              ...o
            } = e,
            c = a || "light",
            h = s?.[c],
            f = {
              ...s,
              ...(r
                ? { [c]: { ...("boolean" != typeof h && h), palette: r } }
                : void 0),
            };
          if (!1 === n) {
            if (!("colorSchemes" in e)) return ee(e, ...t);
            let n = r;
            "palette" in e ||
              !f[c] ||
              (!0 !== f[c]
                ? (n = f[c].palette)
                : "dark" !== c || (n = { mode: "dark" }));
            let i = ee({ ...e, palette: n }, ...t);
            return (
              (i.defaultColorScheme = c),
              (i.colorSchemes = f),
              "light" === i.palette.mode &&
                ((i.colorSchemes.light = {
                  ...(!0 !== f.light && f.light),
                  palette: i.palette,
                }),
                ed(i, "dark", f.dark)),
              "dark" === i.palette.mode &&
                ((i.colorSchemes.dark = {
                  ...(!0 !== f.dark && f.dark),
                  palette: i.palette,
                }),
                ed(i, "light", f.light)),
              i
            );
          }
          return (
            r || "light" in f || "light" !== c || (f.light = !0),
            (function (e = {}, ...t) {
              var r;
              let {
                  colorSchemes: n = { light: !0 },
                  defaultColorScheme: s,
                  disableCssColorScheme: a = !1,
                  cssVarPrefix: o = "mui",
                  shouldSkipGeneratingVar: c = ei,
                  colorSchemeSelector: h = n.light && n.dark ? "media" : void 0,
                  rootSelector: f = ":root",
                  ...d
                } = e,
                m = Object.keys(n)[0],
                y = s || (n.light && "light" !== m ? "light" : m),
                v = eh(o),
                { [y]: b, light: w, dark: S, ...E } = n,
                C = { ...E },
                _ = b;
              if (
                ((("dark" !== y || "dark" in n) &&
                  ("light" !== y || "light" in n)) ||
                  (_ = !0),
                !_)
              )
                throw Error((0, x.Z)(21, y));
              let k = ef(C, _, d, y);
              w && !C.light && ef(C, w, void 0, "light"),
                S && !C.dark && ef(C, S, void 0, "dark");
              let A = {
                defaultColorScheme: y,
                ...k,
                cssVarPrefix: o,
                colorSchemeSelector: h,
                rootSelector: f,
                getCssVar: v,
                colorSchemes: C,
                font: {
                  ...(function (e) {
                    let t = {};
                    return (
                      Object.entries(e).forEach((e) => {
                        let [r, n] = e;
                        "object" == typeof n &&
                          (t[r] = `${n.fontStyle ? `${n.fontStyle} ` : ""}${
                            n.fontVariant ? `${n.fontVariant} ` : ""
                          }${n.fontWeight ? `${n.fontWeight} ` : ""}${
                            n.fontStretch ? `${n.fontStretch} ` : ""
                          }${n.fontSize || ""}${
                            n.lineHeight ? `/${n.lineHeight} ` : ""
                          }${n.fontFamily || ""}`);
                      }),
                      t
                    );
                  })(k.typography),
                  ...k.font,
                },
                spacing:
                  "number" == typeof (r = d.spacing)
                    ? `${r}px`
                    : "string" == typeof r ||
                      "function" == typeof r ||
                      Array.isArray(r)
                    ? r
                    : "8px",
              };
              Object.keys(A.colorSchemes).forEach((e) => {
                let t = A.colorSchemes[e].palette,
                  r = (e) => {
                    let r = e.split("-"),
                      n = r[1],
                      i = r[2];
                    return v(e, t[n][i]);
                  };
                if (
                  ("light" === t.mode &&
                    (eo(t.common, "background", "#fff"),
                    eo(t.common, "onBackground", "#000")),
                  "dark" === t.mode &&
                    (eo(t.common, "background", "#000"),
                    eo(t.common, "onBackground", "#fff")),
                  (function (e, t) {
                    t.forEach((t) => {
                      e[t] || (e[t] = {});
                    });
                  })(t, [
                    "Alert",
                    "AppBar",
                    "Avatar",
                    "Button",
                    "Chip",
                    "FilledInput",
                    "LinearProgress",
                    "Skeleton",
                    "Slider",
                    "SnackbarContent",
                    "SpeedDialAction",
                    "StepConnector",
                    "StepContent",
                    "Switch",
                    "TableCell",
                    "Tooltip",
                  ]),
                  "light" === t.mode)
                ) {
                  eo(t.Alert, "errorColor", (0, T.q8)(t.error.light, 0.6)),
                    eo(t.Alert, "infoColor", (0, T.q8)(t.info.light, 0.6)),
                    eo(
                      t.Alert,
                      "successColor",
                      (0, T.q8)(t.success.light, 0.6)
                    ),
                    eo(
                      t.Alert,
                      "warningColor",
                      (0, T.q8)(t.warning.light, 0.6)
                    ),
                    eo(t.Alert, "errorFilledBg", r("palette-error-main")),
                    eo(t.Alert, "infoFilledBg", r("palette-info-main")),
                    eo(t.Alert, "successFilledBg", r("palette-success-main")),
                    eo(t.Alert, "warningFilledBg", r("palette-warning-main")),
                    eo(
                      t.Alert,
                      "errorFilledColor",
                      ec(() => t.getContrastText(t.error.main))
                    ),
                    eo(
                      t.Alert,
                      "infoFilledColor",
                      ec(() => t.getContrastText(t.info.main))
                    ),
                    eo(
                      t.Alert,
                      "successFilledColor",
                      ec(() => t.getContrastText(t.success.main))
                    ),
                    eo(
                      t.Alert,
                      "warningFilledColor",
                      ec(() => t.getContrastText(t.warning.main))
                    ),
                    eo(
                      t.Alert,
                      "errorStandardBg",
                      (0, T.ux)(t.error.light, 0.9)
                    ),
                    eo(t.Alert, "infoStandardBg", (0, T.ux)(t.info.light, 0.9)),
                    eo(
                      t.Alert,
                      "successStandardBg",
                      (0, T.ux)(t.success.light, 0.9)
                    ),
                    eo(
                      t.Alert,
                      "warningStandardBg",
                      (0, T.ux)(t.warning.light, 0.9)
                    ),
                    eo(t.Alert, "errorIconColor", r("palette-error-main")),
                    eo(t.Alert, "infoIconColor", r("palette-info-main")),
                    eo(t.Alert, "successIconColor", r("palette-success-main")),
                    eo(t.Alert, "warningIconColor", r("palette-warning-main")),
                    eo(t.AppBar, "defaultBg", r("palette-grey-100")),
                    eo(t.Avatar, "defaultBg", r("palette-grey-400")),
                    eo(t.Button, "inheritContainedBg", r("palette-grey-300")),
                    eo(
                      t.Button,
                      "inheritContainedHoverBg",
                      r("palette-grey-A100")
                    ),
                    eo(t.Chip, "defaultBorder", r("palette-grey-400")),
                    eo(t.Chip, "defaultAvatarColor", r("palette-grey-700")),
                    eo(t.Chip, "defaultIconColor", r("palette-grey-700")),
                    eo(t.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
                    eo(t.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
                    eo(t.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
                    eo(
                      t.LinearProgress,
                      "primaryBg",
                      (0, T.ux)(t.primary.main, 0.62)
                    ),
                    eo(
                      t.LinearProgress,
                      "secondaryBg",
                      (0, T.ux)(t.secondary.main, 0.62)
                    ),
                    eo(
                      t.LinearProgress,
                      "errorBg",
                      (0, T.ux)(t.error.main, 0.62)
                    ),
                    eo(
                      t.LinearProgress,
                      "infoBg",
                      (0, T.ux)(t.info.main, 0.62)
                    ),
                    eo(
                      t.LinearProgress,
                      "successBg",
                      (0, T.ux)(t.success.main, 0.62)
                    ),
                    eo(
                      t.LinearProgress,
                      "warningBg",
                      (0, T.ux)(t.warning.main, 0.62)
                    ),
                    eo(
                      t.Skeleton,
                      "bg",
                      `rgba(${r("palette-text-primaryChannel")} / 0.11)`
                    ),
                    eo(
                      t.Slider,
                      "primaryTrack",
                      (0, T.ux)(t.primary.main, 0.62)
                    ),
                    eo(
                      t.Slider,
                      "secondaryTrack",
                      (0, T.ux)(t.secondary.main, 0.62)
                    ),
                    eo(t.Slider, "errorTrack", (0, T.ux)(t.error.main, 0.62)),
                    eo(t.Slider, "infoTrack", (0, T.ux)(t.info.main, 0.62)),
                    eo(
                      t.Slider,
                      "successTrack",
                      (0, T.ux)(t.success.main, 0.62)
                    ),
                    eo(
                      t.Slider,
                      "warningTrack",
                      (0, T.ux)(t.warning.main, 0.62)
                    );
                  let e = (0, T.fk)(t.background.default, 0.8);
                  eo(t.SnackbarContent, "bg", e),
                    eo(
                      t.SnackbarContent,
                      "color",
                      ec(() => t.getContrastText(e))
                    ),
                    eo(
                      t.SpeedDialAction,
                      "fabHoverBg",
                      (0, T.fk)(t.background.paper, 0.15)
                    ),
                    eo(t.StepConnector, "border", r("palette-grey-400")),
                    eo(t.StepContent, "border", r("palette-grey-400")),
                    eo(t.Switch, "defaultColor", r("palette-common-white")),
                    eo(t.Switch, "defaultDisabledColor", r("palette-grey-100")),
                    eo(
                      t.Switch,
                      "primaryDisabledColor",
                      (0, T.ux)(t.primary.main, 0.62)
                    ),
                    eo(
                      t.Switch,
                      "secondaryDisabledColor",
                      (0, T.ux)(t.secondary.main, 0.62)
                    ),
                    eo(
                      t.Switch,
                      "errorDisabledColor",
                      (0, T.ux)(t.error.main, 0.62)
                    ),
                    eo(
                      t.Switch,
                      "infoDisabledColor",
                      (0, T.ux)(t.info.main, 0.62)
                    ),
                    eo(
                      t.Switch,
                      "successDisabledColor",
                      (0, T.ux)(t.success.main, 0.62)
                    ),
                    eo(
                      t.Switch,
                      "warningDisabledColor",
                      (0, T.ux)(t.warning.main, 0.62)
                    ),
                    eo(
                      t.TableCell,
                      "border",
                      (0, T.ux)((0, T.zp)(t.divider, 1), 0.88)
                    ),
                    eo(t.Tooltip, "bg", (0, T.zp)(t.grey[700], 0.92));
                }
                if ("dark" === t.mode) {
                  eo(t.Alert, "errorColor", (0, T.ux)(t.error.light, 0.6)),
                    eo(t.Alert, "infoColor", (0, T.ux)(t.info.light, 0.6)),
                    eo(
                      t.Alert,
                      "successColor",
                      (0, T.ux)(t.success.light, 0.6)
                    ),
                    eo(
                      t.Alert,
                      "warningColor",
                      (0, T.ux)(t.warning.light, 0.6)
                    ),
                    eo(t.Alert, "errorFilledBg", r("palette-error-dark")),
                    eo(t.Alert, "infoFilledBg", r("palette-info-dark")),
                    eo(t.Alert, "successFilledBg", r("palette-success-dark")),
                    eo(t.Alert, "warningFilledBg", r("palette-warning-dark")),
                    eo(
                      t.Alert,
                      "errorFilledColor",
                      ec(() => t.getContrastText(t.error.dark))
                    ),
                    eo(
                      t.Alert,
                      "infoFilledColor",
                      ec(() => t.getContrastText(t.info.dark))
                    ),
                    eo(
                      t.Alert,
                      "successFilledColor",
                      ec(() => t.getContrastText(t.success.dark))
                    ),
                    eo(
                      t.Alert,
                      "warningFilledColor",
                      ec(() => t.getContrastText(t.warning.dark))
                    ),
                    eo(
                      t.Alert,
                      "errorStandardBg",
                      (0, T.q8)(t.error.light, 0.9)
                    ),
                    eo(t.Alert, "infoStandardBg", (0, T.q8)(t.info.light, 0.9)),
                    eo(
                      t.Alert,
                      "successStandardBg",
                      (0, T.q8)(t.success.light, 0.9)
                    ),
                    eo(
                      t.Alert,
                      "warningStandardBg",
                      (0, T.q8)(t.warning.light, 0.9)
                    ),
                    eo(t.Alert, "errorIconColor", r("palette-error-main")),
                    eo(t.Alert, "infoIconColor", r("palette-info-main")),
                    eo(t.Alert, "successIconColor", r("palette-success-main")),
                    eo(t.Alert, "warningIconColor", r("palette-warning-main")),
                    eo(t.AppBar, "defaultBg", r("palette-grey-900")),
                    eo(t.AppBar, "darkBg", r("palette-background-paper")),
                    eo(t.AppBar, "darkColor", r("palette-text-primary")),
                    eo(t.Avatar, "defaultBg", r("palette-grey-600")),
                    eo(t.Button, "inheritContainedBg", r("palette-grey-800")),
                    eo(
                      t.Button,
                      "inheritContainedHoverBg",
                      r("palette-grey-700")
                    ),
                    eo(t.Chip, "defaultBorder", r("palette-grey-700")),
                    eo(t.Chip, "defaultAvatarColor", r("palette-grey-300")),
                    eo(t.Chip, "defaultIconColor", r("palette-grey-300")),
                    eo(t.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
                    eo(t.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
                    eo(
                      t.FilledInput,
                      "disabledBg",
                      "rgba(255, 255, 255, 0.12)"
                    ),
                    eo(
                      t.LinearProgress,
                      "primaryBg",
                      (0, T.q8)(t.primary.main, 0.5)
                    ),
                    eo(
                      t.LinearProgress,
                      "secondaryBg",
                      (0, T.q8)(t.secondary.main, 0.5)
                    ),
                    eo(
                      t.LinearProgress,
                      "errorBg",
                      (0, T.q8)(t.error.main, 0.5)
                    ),
                    eo(t.LinearProgress, "infoBg", (0, T.q8)(t.info.main, 0.5)),
                    eo(
                      t.LinearProgress,
                      "successBg",
                      (0, T.q8)(t.success.main, 0.5)
                    ),
                    eo(
                      t.LinearProgress,
                      "warningBg",
                      (0, T.q8)(t.warning.main, 0.5)
                    ),
                    eo(
                      t.Skeleton,
                      "bg",
                      `rgba(${r("palette-text-primaryChannel")} / 0.13)`
                    ),
                    eo(
                      t.Slider,
                      "primaryTrack",
                      (0, T.q8)(t.primary.main, 0.5)
                    ),
                    eo(
                      t.Slider,
                      "secondaryTrack",
                      (0, T.q8)(t.secondary.main, 0.5)
                    ),
                    eo(t.Slider, "errorTrack", (0, T.q8)(t.error.main, 0.5)),
                    eo(t.Slider, "infoTrack", (0, T.q8)(t.info.main, 0.5)),
                    eo(
                      t.Slider,
                      "successTrack",
                      (0, T.q8)(t.success.main, 0.5)
                    ),
                    eo(
                      t.Slider,
                      "warningTrack",
                      (0, T.q8)(t.warning.main, 0.5)
                    );
                  let e = (0, T.fk)(t.background.default, 0.98);
                  eo(t.SnackbarContent, "bg", e),
                    eo(
                      t.SnackbarContent,
                      "color",
                      ec(() => t.getContrastText(e))
                    ),
                    eo(
                      t.SpeedDialAction,
                      "fabHoverBg",
                      (0, T.fk)(t.background.paper, 0.15)
                    ),
                    eo(t.StepConnector, "border", r("palette-grey-600")),
                    eo(t.StepContent, "border", r("palette-grey-600")),
                    eo(t.Switch, "defaultColor", r("palette-grey-300")),
                    eo(t.Switch, "defaultDisabledColor", r("palette-grey-600")),
                    eo(
                      t.Switch,
                      "primaryDisabledColor",
                      (0, T.q8)(t.primary.main, 0.55)
                    ),
                    eo(
                      t.Switch,
                      "secondaryDisabledColor",
                      (0, T.q8)(t.secondary.main, 0.55)
                    ),
                    eo(
                      t.Switch,
                      "errorDisabledColor",
                      (0, T.q8)(t.error.main, 0.55)
                    ),
                    eo(
                      t.Switch,
                      "infoDisabledColor",
                      (0, T.q8)(t.info.main, 0.55)
                    ),
                    eo(
                      t.Switch,
                      "successDisabledColor",
                      (0, T.q8)(t.success.main, 0.55)
                    ),
                    eo(
                      t.Switch,
                      "warningDisabledColor",
                      (0, T.q8)(t.warning.main, 0.55)
                    ),
                    eo(
                      t.TableCell,
                      "border",
                      (0, T.q8)((0, T.zp)(t.divider, 1), 0.68)
                    ),
                    eo(t.Tooltip, "bg", (0, T.zp)(t.grey[700], 0.92));
                }
                eu(t.background, "default"),
                  eu(t.background, "paper"),
                  eu(t.common, "background"),
                  eu(t.common, "onBackground"),
                  eu(t, "divider"),
                  Object.keys(t).forEach((e) => {
                    let r = t[e];
                    "tonalOffset" !== e &&
                      r &&
                      "object" == typeof r &&
                      (r.main && eo(t[e], "mainChannel", (0, T.LR)(el(r.main))),
                      r.light &&
                        eo(t[e], "lightChannel", (0, T.LR)(el(r.light))),
                      r.dark && eo(t[e], "darkChannel", (0, T.LR)(el(r.dark))),
                      r.contrastText &&
                        eo(
                          t[e],
                          "contrastTextChannel",
                          (0, T.LR)(el(r.contrastText))
                        ),
                      "text" === e &&
                        (eu(t[e], "primary"), eu(t[e], "secondary")),
                      "action" === e &&
                        (r.active && eu(t[e], "active"),
                        r.selected && eu(t[e], "selected")));
                  });
              });
              let I = {
                  prefix: o,
                  disableCssColorScheme: a,
                  shouldSkipGeneratingVar: c,
                  getSelector: ea((A = t.reduce((e, t) => (0, i.Z)(e, t), A))),
                },
                {
                  vars: D,
                  generateThemeVars: N,
                  generateStyleSheets: R,
                } = z(A, I);
              return (
                (A.vars = D),
                Object.entries(A.colorSchemes[A.defaultColorScheme]).forEach(
                  ([e, t]) => {
                    A[e] = t;
                  }
                ),
                (A.generateThemeVars = N),
                (A.generateStyleSheets = R),
                (A.generateSpacing = function () {
                  return u(d.spacing, (0, l.hB)(this));
                }),
                (A.getColorSchemeSelector = function (e) {
                  return "media" === h
                    ? `@media (prefers-color-scheme: ${e})`
                    : h
                    ? h.startsWith("data-") && !h.includes("%s")
                      ? `[${h}="${e}"] &`
                      : "class" === h
                      ? `.${e} &`
                      : "data" === h
                      ? `[data-${e}] &`
                      : `${h.replace("%s", e)} &`
                    : "&";
                }),
                (A.spacing = A.generateSpacing()),
                (A.shouldSkipGeneratingVar = c),
                (A.unstable_sxConfig = { ...p.Z, ...d?.unstable_sxConfig }),
                (A.unstable_sx = function (e) {
                  return g({ sx: e, theme: this });
                }),
                (A.toRuntimeSource = J),
                A
              );
            })(
              {
                ...o,
                colorSchemes: f,
                defaultColorScheme: c,
                ...("boolean" != typeof n && n),
              },
              ...t
            )
          );
        })(),
        rootShouldForwardProp: r(10186).Z,
      });
    },
    24716: function (e, t, r) {
      r.d(t, { Z: () => n });
      let n = r(63979).Z;
    },
    42111: function (e, t, r) {
      r.d(t, { Z: () => n });
      function n(e = []) {
        return ([, t]) =>
          t &&
          (function (e, t = []) {
            if ("string" != typeof e.main) return !1;
            for (let r of t)
              if (!e.hasOwnProperty(r) || "string" != typeof e[r]) return !1;
            return !0;
          })(t, e);
      }
    },
    70543: function (e, t, r) {
      r.d(t, { Z: () => s });
      var n = r(46818);
      let i = { theme: void 0 },
        s = function (e) {
          let t, r;
          return function (s) {
            let a = t;
            return (
              (void 0 === a || s.theme !== r) &&
                ((i.theme = s.theme), (t = a = (0, n.Z)(e(i))), (r = s.theme)),
              a
            );
          };
        };
    },
    2379: function (e, t, r) {
      r.d(t, { Z: () => l });
      var n = r(36055),
        i = r(67026);
      let s = function (e, t = []) {
          if (void 0 === e) return {};
          let r = {};
          return (
            Object.keys(e)
              .filter(
                (r) =>
                  r.match(/^on[A-Z]/) &&
                  "function" == typeof e[r] &&
                  !t.includes(r)
              )
              .forEach((t) => {
                r[t] = e[t];
              }),
            r
          );
        },
        a = function (e) {
          if (void 0 === e) return {};
          let t = {};
          return (
            Object.keys(e)
              .filter(
                (t) => !(t.match(/^on[A-Z]/) && "function" == typeof e[t])
              )
              .forEach((r) => {
                t[r] = e[r];
              }),
            t
          );
        },
        o = function (e) {
          let {
            getSlotProps: t,
            additionalProps: r,
            externalSlotProps: n,
            externalForwardedProps: o,
            className: l,
          } = e;
          if (!t) {
            let e = (0, i.Z)(r?.className, l, o?.className, n?.className),
              t = { ...r?.style, ...o?.style, ...n?.style },
              s = { ...r, ...o, ...n };
            return (
              e.length > 0 && (s.className = e),
              Object.keys(t).length > 0 && (s.style = t),
              { props: s, internalRef: void 0 }
            );
          }
          let u = s({ ...o, ...n }),
            c = a(n),
            h = a(o),
            f = t(u),
            d = (0, i.Z)(
              f?.className,
              r?.className,
              l,
              o?.className,
              n?.className
            ),
            p = { ...f?.style, ...r?.style, ...o?.style, ...n?.style },
            g = { ...f, ...r, ...h, ...c };
          return (
            d.length > 0 && (g.className = d),
            Object.keys(p).length > 0 && (g.style = p),
            { props: g, internalRef: f.ref }
          );
        };
      function l(e, t) {
        var r, i, s, a;
        let {
            className: l,
            elementType: u,
            ownerState: c,
            externalForwardedProps: h,
            internalForwardedProps: f,
            shouldForwardComponentProp: d = !1,
            ...p
          } = t,
          {
            component: g,
            slots: m = { [e]: void 0 },
            slotProps: y = { [e]: void 0 },
            ...v
          } = h,
          b = m[e] || u,
          w = "function" == typeof (r = y[e]) ? r(c, void 0) : r,
          {
            props: { component: S, ...E },
            internalRef: x,
          } = o({
            className: l,
            ...p,
            externalForwardedProps: "root" === e ? v : void 0,
            externalSlotProps: w,
          }),
          T = (0, n.Z)(x, w?.ref, t.ref),
          C = "root" === e ? S || g : S,
          _ =
            ((i = b),
            (s = {
              ...("root" === e && !g && !m[e] && f),
              ...("root" !== e && !m[e] && f),
              ...E,
              ...(C && !d && { as: C }),
              ...(C && d && { component: C }),
              ref: T,
            }),
            (a = c),
            void 0 === i || "string" == typeof i
              ? s
              : { ...s, ownerState: { ...s.ownerState, ...a } });
        return [b, _];
      }
    },
    12622: function (e, t, r) {
      r.d(t, { bu: () => S, ZP: () => v, nf: () => b });
      var n,
        i,
        s = r(16019),
        a = r(87685),
        o = r(67819),
        l = r(27278),
        u = r(70444),
        c = r(67294),
        h =
          /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        f =
          ((n = function (e) {
            return (
              h.test(e) ||
              (111 === e.charCodeAt(0) &&
                110 === e.charCodeAt(1) &&
                91 > e.charCodeAt(2))
            );
          }),
          (i = Object.create(null)),
          function (e) {
            return void 0 === i[e] && (i[e] = n(e)), i[e];
          }),
        d = function (e) {
          return "theme" !== e;
        },
        p = function (e) {
          return "string" == typeof e && e.charCodeAt(0) > 96 ? f : d;
        },
        g = function (e, t, r) {
          var n;
          if (t) {
            var i = t.shouldForwardProp;
            n =
              e.__emotion_forwardProp && i
                ? function (t) {
                    return e.__emotion_forwardProp(t) && i(t);
                  }
                : i;
          }
          return (
            "function" != typeof n && r && (n = e.__emotion_forwardProp), n
          );
        },
        m = function (e) {
          var t = e.cache,
            r = e.serialized,
            n = e.isStringTag;
          return (
            (0, u.hC)(t, r, n),
            (0, l.L)(function () {
              return (0, u.My)(t, r, n);
            }),
            null
          );
        },
        y = function e(t, r) {
          var n,
            i,
            l = t.__emotion_real === t,
            h = (l && t.__emotion_base) || t;
          void 0 !== r && ((n = r.label), (i = r.target));
          var f = g(t, r, l),
            d = f || p(h),
            y = !d("as");
          return function () {
            var v = arguments,
              b =
                l && void 0 !== t.__emotion_styles
                  ? t.__emotion_styles.slice(0)
                  : [];
            if (
              (void 0 !== n && b.push("label:" + n + ";"),
              null == v[0] || void 0 === v[0].raw)
            )
              b.push.apply(b, v);
            else {
              var w = v[0];
              b.push(w[0]);
              for (var S = v.length, E = 1; E < S; E++) b.push(v[E], w[E]);
            }
            var x = (0, a.w)(function (e, t, r) {
              var n = (y && e.as) || h,
                s = "",
                l = [],
                g = e;
              if (null == e.theme) {
                for (var v in ((g = {}), e)) g[v] = e[v];
                g.theme = c.useContext(a.T);
              }
              "string" == typeof e.className
                ? (s = (0, u.fp)(t.registered, l, e.className))
                : null != e.className && (s = e.className + " ");
              var w = (0, o.O)(b.concat(l), t.registered, g);
              (s += t.key + "-" + w.name), void 0 !== i && (s += " " + i);
              var S = y && void 0 === f ? p(n) : d,
                E = {};
              for (var x in e) (!y || "as" !== x) && S(x) && (E[x] = e[x]);
              return (
                (E.className = s),
                r && (E.ref = r),
                c.createElement(
                  c.Fragment,
                  null,
                  c.createElement(m, {
                    cache: t,
                    serialized: w,
                    isStringTag: "string" == typeof n,
                  }),
                  c.createElement(n, E)
                )
              );
            });
            return (
              (x.displayName =
                void 0 !== n
                  ? n
                  : "Styled(" +
                    ("string" == typeof h
                      ? h
                      : h.displayName || h.name || "Component") +
                    ")"),
              (x.defaultProps = t.defaultProps),
              (x.__emotion_real = x),
              (x.__emotion_base = h),
              (x.__emotion_styles = b),
              (x.__emotion_forwardProp = f),
              Object.defineProperty(x, "toString", {
                value: function () {
                  return "." + i;
                },
              }),
              (x.withComponent = function (t, n) {
                return e(
                  t,
                  (0, s.Z)({}, r, n, { shouldForwardProp: g(x, n, !0) })
                ).apply(void 0, b);
              }),
              x
            );
          };
        }.bind(null);
      function v(e, t) {
        return y(e, t);
      }
      function b(e, t) {
        Array.isArray(e.__emotion_styles) &&
          (e.__emotion_styles = t(e.__emotion_styles));
      }
      [
        "a",
        "abbr",
        "address",
        "area",
        "article",
        "aside",
        "audio",
        "b",
        "base",
        "bdi",
        "bdo",
        "big",
        "blockquote",
        "body",
        "br",
        "button",
        "canvas",
        "caption",
        "cite",
        "code",
        "col",
        "colgroup",
        "data",
        "datalist",
        "dd",
        "del",
        "details",
        "dfn",
        "dialog",
        "div",
        "dl",
        "dt",
        "em",
        "embed",
        "fieldset",
        "figcaption",
        "figure",
        "footer",
        "form",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "head",
        "header",
        "hgroup",
        "hr",
        "html",
        "i",
        "iframe",
        "img",
        "input",
        "ins",
        "kbd",
        "keygen",
        "label",
        "legend",
        "li",
        "link",
        "main",
        "map",
        "mark",
        "marquee",
        "menu",
        "menuitem",
        "meta",
        "meter",
        "nav",
        "noscript",
        "object",
        "ol",
        "optgroup",
        "option",
        "output",
        "p",
        "param",
        "picture",
        "pre",
        "progress",
        "q",
        "rp",
        "rt",
        "ruby",
        "s",
        "samp",
        "script",
        "section",
        "select",
        "small",
        "source",
        "span",
        "strong",
        "style",
        "sub",
        "summary",
        "sup",
        "table",
        "tbody",
        "td",
        "textarea",
        "tfoot",
        "th",
        "thead",
        "time",
        "title",
        "tr",
        "track",
        "u",
        "ul",
        "var",
        "video",
        "wbr",
        "circle",
        "clipPath",
        "defs",
        "ellipse",
        "foreignObject",
        "g",
        "image",
        "line",
        "linearGradient",
        "mask",
        "path",
        "pattern",
        "polygon",
        "polyline",
        "radialGradient",
        "rect",
        "stop",
        "svg",
        "text",
        "tspan",
      ].forEach(function (e) {
        y[e] = y(e);
      });
      let w = [];
      function S(e) {
        return (w[0] = e), (0, o.O)(w);
      }
    },
    14279: function (e, t, r) {
      r.d(t, { L7: () => u, VO: () => i, W8: () => l, k9: () => o });
      var n = r(73712);
      let i = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        s = {
          keys: ["xs", "sm", "md", "lg", "xl"],
          up: (e) => `@media (min-width:${i[e]}px)`,
        },
        a = {
          containerQueries: (e) => ({
            up: (t) => {
              let r = "number" == typeof t ? t : i[t] || t;
              return (
                "number" == typeof r && (r = `${r}px`),
                e
                  ? `@container ${e} (min-width:${r})`
                  : `@container (min-width:${r})`
              );
            },
          }),
        };
      function o(e, t, r) {
        let o = e.theme || {};
        if (Array.isArray(t)) {
          let e = o.breakpoints || s;
          return t.reduce((n, i, s) => ((n[e.up(e.keys[s])] = r(t[s])), n), {});
        }
        if ("object" == typeof t) {
          let e = o.breakpoints || s;
          return Object.keys(t).reduce((s, l) => {
            if ((0, n.WX)(e.keys, l)) {
              let e = (0, n.ue)(o.containerQueries ? o : a, l);
              e && (s[e] = r(t[l], l));
            } else
              Object.keys(e.values || i).includes(l)
                ? (s[e.up(l)] = r(t[l], l))
                : (s[l] = t[l]);
            return s;
          }, {});
        }
        return r(t);
      }
      function l(e = {}) {
        return e.keys?.reduce((t, r) => ((t[e.up(r)] = {}), t), {}) || {};
      }
      function u(e, t) {
        return e.reduce((e, t) => {
          let r = e[t];
          return (r && 0 !== Object.keys(r).length) || delete e[t], e;
        }, t);
      }
    },
    62403: function (e, t, r) {
      r.d(t, {
        ve: () => u,
        LR: () => o,
        Fq: () => f,
        q8: () => g,
        fk: () => v,
        mi: () => h,
        ux: () => y,
        $n: () => m,
        zp: () => d,
        _j: () => p,
      });
      var n = r(36713);
      function i(e, t = 0, r = 1) {
        return (function (
          e,
          t = Number.MIN_SAFE_INTEGER,
          r = Number.MAX_SAFE_INTEGER
        ) {
          return Math.max(t, Math.min(e, r));
        })(e, t, r);
      }
      function s(e) {
        let t;
        if (e.type) return e;
        if ("#" === e.charAt(0))
          return s(
            (function (e) {
              e = e.slice(1);
              let t = RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g"),
                r = e.match(t);
              return (
                r && 1 === r[0].length && (r = r.map((e) => e + e)),
                r
                  ? `rgb${4 === r.length ? "a" : ""}(${r
                      .map((e, t) =>
                        t < 3
                          ? parseInt(e, 16)
                          : Math.round((parseInt(e, 16) / 255) * 1e3) / 1e3
                      )
                      .join(", ")})`
                  : ""
              );
            })(e)
          );
        let r = e.indexOf("("),
          i = e.substring(0, r);
        if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(i))
          throw Error((0, n.Z)(9, e));
        let a = e.substring(r + 1, e.length - 1);
        if ("color" === i) {
          if (
            ((t = (a = a.split(" ")).shift()),
            4 === a.length && "/" === a[3].charAt(0) && (a[3] = a[3].slice(1)),
            ![
              "srgb",
              "display-p3",
              "a98-rgb",
              "prophoto-rgb",
              "rec-2020",
            ].includes(t))
          )
            throw Error((0, n.Z)(10, t));
        } else a = a.split(",");
        return {
          type: i,
          values: (a = a.map((e) => parseFloat(e))),
          colorSpace: t,
        };
      }
      let a = (e) => {
          let t = s(e);
          return t.values
            .slice(0, 3)
            .map((e, r) => (t.type.includes("hsl") && 0 !== r ? `${e}%` : e))
            .join(" ");
        },
        o = (e, t) => {
          try {
            return a(e);
          } catch (t) {
            return e;
          }
        };
      function l(e) {
        let { type: t, colorSpace: r } = e,
          { values: n } = e;
        return (
          t.includes("rgb")
            ? (n = n.map((e, t) => (t < 3 ? parseInt(e, 10) : e)))
            : t.includes("hsl") && ((n[1] = `${n[1]}%`), (n[2] = `${n[2]}%`)),
          (n = t.includes("color") ? `${r} ${n.join(" ")}` : `${n.join(", ")}`),
          `${t}(${n})`
        );
      }
      function u(e) {
        let { values: t } = (e = s(e)),
          r = t[0],
          n = t[1] / 100,
          i = t[2] / 100,
          a = n * Math.min(i, 1 - i),
          o = (e, t = (e + r / 30) % 12) =>
            i - a * Math.max(Math.min(t - 3, 9 - t, 1), -1),
          u = "rgb",
          c = [
            Math.round(255 * o(0)),
            Math.round(255 * o(8)),
            Math.round(255 * o(4)),
          ];
        return (
          "hsla" === e.type && ((u += "a"), c.push(t[3])),
          l({ type: u, values: c })
        );
      }
      function c(e) {
        let t =
          "hsl" === (e = s(e)).type || "hsla" === e.type
            ? s(u(e)).values
            : e.values;
        return Number(
          (
            0.2126 *
              (t = t.map(
                (t) => (
                  "color" !== e.type && (t /= 255),
                  t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4
                )
              ))[0] +
            0.7152 * t[1] +
            0.0722 * t[2]
          ).toFixed(3)
        );
      }
      function h(e, t) {
        let r = c(e),
          n = c(t);
        return (Math.max(r, n) + 0.05) / (Math.min(r, n) + 0.05);
      }
      function f(e, t) {
        return (
          (e = s(e)),
          (t = i(t)),
          ("rgb" === e.type || "hsl" === e.type) && (e.type += "a"),
          "color" === e.type ? (e.values[3] = `/${t}`) : (e.values[3] = t),
          l(e)
        );
      }
      function d(e, t, r) {
        try {
          return f(e, t);
        } catch (t) {
          return e;
        }
      }
      function p(e, t) {
        if (((e = s(e)), (t = i(t)), e.type.includes("hsl")))
          e.values[2] *= 1 - t;
        else if (e.type.includes("rgb") || e.type.includes("color"))
          for (let r = 0; r < 3; r += 1) e.values[r] *= 1 - t;
        return l(e);
      }
      function g(e, t, r) {
        try {
          return p(e, t);
        } catch (t) {
          return e;
        }
      }
      function m(e, t) {
        if (((e = s(e)), (t = i(t)), e.type.includes("hsl")))
          e.values[2] += (100 - e.values[2]) * t;
        else if (e.type.includes("rgb"))
          for (let r = 0; r < 3; r += 1) e.values[r] += (255 - e.values[r]) * t;
        else if (e.type.includes("color"))
          for (let r = 0; r < 3; r += 1) e.values[r] += (1 - e.values[r]) * t;
        return l(e);
      }
      function y(e, t, r) {
        try {
          return m(e, t);
        } catch (t) {
          return e;
        }
      }
      function v(e, t, r) {
        try {
          return (function (e, t = 0.15) {
            return c(e) > 0.5 ? p(e, t) : m(e, t);
          })(e, t);
        } catch (t) {
          return e;
        }
      }
    },
    73712: function (e, t, r) {
      function n(e, t) {
        if (!e.containerQueries) return t;
        let r = Object.keys(t)
          .filter((e) => e.startsWith("@container"))
          .sort((e, t) => {
            let r = /min-width:\s*([0-9.]+)/;
            return +(e.match(r)?.[1] || 0) - +(t.match(r)?.[1] || 0);
          });
        return r.length
          ? r.reduce(
              (e, r) => {
                let n = t[r];
                return delete e[r], (e[r] = n), e;
              },
              { ...t }
            )
          : t;
      }
      function i(e, t) {
        return (
          "@" === t ||
          (t.startsWith("@") &&
            (e.some((e) => t.startsWith(`@${e}`)) || !!t.match(/^@\d/)))
        );
      }
      function s(e, t) {
        let r = t.match(/^@([^/]+)?\/?(.+)?$/);
        if (!r) return null;
        let [, n, i] = r,
          s = Number.isNaN(+n) ? n || 0 : +n;
        return e.containerQueries(i).up(s);
      }
      function a(e) {
        let t = (e, t) =>
          e.replace("@media", t ? `@container ${t}` : "@container");
        function r(r, n) {
          (r.up = (...r) => t(e.breakpoints.up(...r), n)),
            (r.down = (...r) => t(e.breakpoints.down(...r), n)),
            (r.between = (...r) => t(e.breakpoints.between(...r), n)),
            (r.only = (...r) => t(e.breakpoints.only(...r), n)),
            (r.not = (...r) => {
              let i = t(e.breakpoints.not(...r), n);
              return i.includes("not all and")
                ? i
                    .replace("not all and ", "")
                    .replace("min-width:", "width<")
                    .replace("max-width:", "width>")
                    .replace("and", "or")
                : i;
            });
        }
        let n = {},
          i = (e) => (r(n, e), n);
        return r(i), { ...e, containerQueries: i };
      }
      r.d(t, { WX: () => i, ZP: () => a, ar: () => n, ue: () => s });
    },
    2902: function (e, t, r) {
      r.d(t, { Z: () => i });
      var n = r(78217);
      let i = function (e, t) {
        return t ? (0, n.Z)(e, t, { clone: !1 }) : e;
      };
    },
    46818: function (e, t, r) {
      r.d(t, { Z: () => i });
      var n = r(12622);
      function i(e) {
        let { variants: t, ...r } = e,
          i = { variants: t, style: (0, n.bu)(r), isProcessed: !0 };
        return (
          i.style === r ||
            (t &&
              t.forEach((e) => {
                "function" != typeof e.style && (e.style = (0, n.bu)(e.style));
              })),
          i
        );
      }
    },
    71044: function (e, t, r) {
      r.d(t, {
        NA: () => g,
        hB: () => p,
        e6: () => y,
        o3: () => v,
        eI: () => d,
      });
      var n = r(14279),
        i = r(15294),
        s = r(2902);
      let a = { m: "margin", p: "padding" },
        o = {
          t: "Top",
          r: "Right",
          b: "Bottom",
          l: "Left",
          x: ["Left", "Right"],
          y: ["Top", "Bottom"],
        },
        l = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
        u = (function (e) {
          let t = {};
          return (r) => (void 0 === t[r] && (t[r] = e(r)), t[r]);
        })((e) => {
          if (e.length > 2) {
            if (!l[e]) return [e];
            e = l[e];
          }
          let [t, r] = e.split(""),
            n = a[t],
            i = o[r] || "";
          return Array.isArray(i) ? i.map((e) => n + e) : [n + i];
        }),
        c = [
          "m",
          "mt",
          "mr",
          "mb",
          "ml",
          "mx",
          "my",
          "margin",
          "marginTop",
          "marginRight",
          "marginBottom",
          "marginLeft",
          "marginX",
          "marginY",
          "marginInline",
          "marginInlineStart",
          "marginInlineEnd",
          "marginBlock",
          "marginBlockStart",
          "marginBlockEnd",
        ],
        h = [
          "p",
          "pt",
          "pr",
          "pb",
          "pl",
          "px",
          "py",
          "padding",
          "paddingTop",
          "paddingRight",
          "paddingBottom",
          "paddingLeft",
          "paddingX",
          "paddingY",
          "paddingInline",
          "paddingInlineStart",
          "paddingInlineEnd",
          "paddingBlock",
          "paddingBlockStart",
          "paddingBlockEnd",
        ],
        f = [...c, ...h];
      function d(e, t, r, n) {
        let s = (0, i.DW)(e, t, !0) ?? r;
        return "number" == typeof s || "string" == typeof s
          ? (e) =>
              "string" == typeof e
                ? e
                : "string" == typeof s
                ? s.startsWith("var(") && 0 === e
                  ? 0
                  : s.startsWith("var(") && 1 === e
                  ? s
                  : `calc(${e} * ${s})`
                : s * e
          : Array.isArray(s)
          ? (e) => {
              if ("string" == typeof e) return e;
              let t = s[Math.abs(e)];
              return e >= 0
                ? t
                : "number" == typeof t
                ? -t
                : "string" == typeof t && t.startsWith("var(")
                ? `calc(-1 * ${t})`
                : `-${t}`;
            }
          : "function" == typeof s
          ? s
          : () => void 0;
      }
      function p(e) {
        return d(e, "spacing", 8, "spacing");
      }
      function g(e, t) {
        return "string" == typeof t || null == t ? t : e(t);
      }
      function m(e, t) {
        let r = p(e.theme);
        return Object.keys(e)
          .map((i) =>
            (function (e, t, r, i) {
              var s;
              if (!t.includes(r)) return null;
              let a =
                  ((s = u(r)),
                  (e) => s.reduce((t, r) => ((t[r] = g(i, e)), t), {})),
                o = e[r];
              return (0, n.k9)(e, o, a);
            })(e, t, i, r)
          )
          .reduce(s.Z, {});
      }
      function y(e) {
        return m(e, c);
      }
      function v(e) {
        return m(e, h);
      }
      function b(e) {
        return m(e, f);
      }
      (y.propTypes = {}),
        (y.filterProps = c),
        (v.propTypes = {}),
        (v.filterProps = h),
        (b.propTypes = {}),
        (b.filterProps = f);
    },
    31433: function (e, t, r) {
      r.d(t, { Z: () => j });
      var n = r(71044),
        i = r(15294),
        s = r(2902);
      let a = function (...e) {
        let t = e.reduce(
            (e, t) => (
              t.filterProps.forEach((r) => {
                e[r] = t;
              }),
              e
            ),
            {}
          ),
          r = (e) =>
            Object.keys(e).reduce(
              (r, n) => (t[n] ? (0, s.Z)(r, t[n](e)) : r),
              {}
            );
        return (
          (r.propTypes = {}),
          (r.filterProps = e.reduce((e, t) => e.concat(t.filterProps), [])),
          r
        );
      };
      var o = r(14279);
      function l(e) {
        return "number" != typeof e ? e : `${e}px solid`;
      }
      function u(e, t) {
        return (0, i.ZP)({ prop: e, themeKey: "borders", transform: t });
      }
      let c = u("border", l),
        h = u("borderTop", l),
        f = u("borderRight", l),
        d = u("borderBottom", l),
        p = u("borderLeft", l),
        g = u("borderColor"),
        m = u("borderTopColor"),
        y = u("borderRightColor"),
        v = u("borderBottomColor"),
        b = u("borderLeftColor"),
        w = u("outline", l),
        S = u("outlineColor"),
        E = (e) => {
          if (void 0 !== e.borderRadius && null !== e.borderRadius) {
            let t = (0, n.eI)(e.theme, "shape.borderRadius", 4, "borderRadius");
            return (0, o.k9)(e, e.borderRadius, (e) => ({
              borderRadius: (0, n.NA)(t, e),
            }));
          }
          return null;
        };
      (E.propTypes = {}),
        (E.filterProps = ["borderRadius"]),
        a(c, h, f, d, p, g, m, y, v, b, E, w, S);
      let x = (e) => {
        if (void 0 !== e.gap && null !== e.gap) {
          let t = (0, n.eI)(e.theme, "spacing", 8, "gap");
          return (0, o.k9)(e, e.gap, (e) => ({ gap: (0, n.NA)(t, e) }));
        }
        return null;
      };
      (x.propTypes = {}), (x.filterProps = ["gap"]);
      let T = (e) => {
        if (void 0 !== e.columnGap && null !== e.columnGap) {
          let t = (0, n.eI)(e.theme, "spacing", 8, "columnGap");
          return (0, o.k9)(e, e.columnGap, (e) => ({
            columnGap: (0, n.NA)(t, e),
          }));
        }
        return null;
      };
      (T.propTypes = {}), (T.filterProps = ["columnGap"]);
      let C = (e) => {
        if (void 0 !== e.rowGap && null !== e.rowGap) {
          let t = (0, n.eI)(e.theme, "spacing", 8, "rowGap");
          return (0, o.k9)(e, e.rowGap, (e) => ({ rowGap: (0, n.NA)(t, e) }));
        }
        return null;
      };
      (C.propTypes = {}), (C.filterProps = ["rowGap"]);
      let _ = (0, i.ZP)({ prop: "gridColumn" }),
        k = (0, i.ZP)({ prop: "gridRow" }),
        A = (0, i.ZP)({ prop: "gridAutoFlow" }),
        I = (0, i.ZP)({ prop: "gridAutoColumns" }),
        D = (0, i.ZP)({ prop: "gridAutoRows" }),
        N = (0, i.ZP)({ prop: "gridTemplateColumns" }),
        R = (0, i.ZP)({ prop: "gridTemplateRows" });
      function P(e, t) {
        return "grey" === t ? t : e;
      }
      a(
        x,
        T,
        C,
        _,
        k,
        A,
        I,
        D,
        N,
        R,
        (0, i.ZP)({ prop: "gridTemplateAreas" }),
        (0, i.ZP)({ prop: "gridArea" })
      );
      let O = (0, i.ZP)({ prop: "color", themeKey: "palette", transform: P });
      function L(e) {
        return e <= 1 && 0 !== e ? `${100 * e}%` : e;
      }
      a(
        O,
        (0, i.ZP)({
          prop: "bgcolor",
          cssProperty: "backgroundColor",
          themeKey: "palette",
          transform: P,
        }),
        (0, i.ZP)({
          prop: "backgroundColor",
          themeKey: "palette",
          transform: P,
        })
      );
      let M = (0, i.ZP)({ prop: "width", transform: L }),
        $ = (e) =>
          void 0 !== e.maxWidth && null !== e.maxWidth
            ? (0, o.k9)(e, e.maxWidth, (t) => {
                let r = e.theme?.breakpoints?.values?.[t] || o.VO[t];
                return r
                  ? e.theme?.breakpoints?.unit !== "px"
                    ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
                    : { maxWidth: r }
                  : { maxWidth: L(t) };
              })
            : null;
      $.filterProps = ["maxWidth"];
      let V = (0, i.ZP)({ prop: "minWidth", transform: L }),
        F = (0, i.ZP)({ prop: "height", transform: L }),
        B = (0, i.ZP)({ prop: "maxHeight", transform: L }),
        U = (0, i.ZP)({ prop: "minHeight", transform: L });
      (0, i.ZP)({ prop: "size", cssProperty: "width", transform: L }),
        (0, i.ZP)({ prop: "size", cssProperty: "height", transform: L }),
        a(M, $, V, F, B, U, (0, i.ZP)({ prop: "boxSizing" }));
      let j = {
        border: { themeKey: "borders", transform: l },
        borderTop: { themeKey: "borders", transform: l },
        borderRight: { themeKey: "borders", transform: l },
        borderBottom: { themeKey: "borders", transform: l },
        borderLeft: { themeKey: "borders", transform: l },
        borderColor: { themeKey: "palette" },
        borderTopColor: { themeKey: "palette" },
        borderRightColor: { themeKey: "palette" },
        borderBottomColor: { themeKey: "palette" },
        borderLeftColor: { themeKey: "palette" },
        outline: { themeKey: "borders", transform: l },
        outlineColor: { themeKey: "palette" },
        borderRadius: { themeKey: "shape.borderRadius", style: E },
        color: { themeKey: "palette", transform: P },
        bgcolor: {
          themeKey: "palette",
          cssProperty: "backgroundColor",
          transform: P,
        },
        backgroundColor: { themeKey: "palette", transform: P },
        p: { style: n.o3 },
        pt: { style: n.o3 },
        pr: { style: n.o3 },
        pb: { style: n.o3 },
        pl: { style: n.o3 },
        px: { style: n.o3 },
        py: { style: n.o3 },
        padding: { style: n.o3 },
        paddingTop: { style: n.o3 },
        paddingRight: { style: n.o3 },
        paddingBottom: { style: n.o3 },
        paddingLeft: { style: n.o3 },
        paddingX: { style: n.o3 },
        paddingY: { style: n.o3 },
        paddingInline: { style: n.o3 },
        paddingInlineStart: { style: n.o3 },
        paddingInlineEnd: { style: n.o3 },
        paddingBlock: { style: n.o3 },
        paddingBlockStart: { style: n.o3 },
        paddingBlockEnd: { style: n.o3 },
        m: { style: n.e6 },
        mt: { style: n.e6 },
        mr: { style: n.e6 },
        mb: { style: n.e6 },
        ml: { style: n.e6 },
        mx: { style: n.e6 },
        my: { style: n.e6 },
        margin: { style: n.e6 },
        marginTop: { style: n.e6 },
        marginRight: { style: n.e6 },
        marginBottom: { style: n.e6 },
        marginLeft: { style: n.e6 },
        marginX: { style: n.e6 },
        marginY: { style: n.e6 },
        marginInline: { style: n.e6 },
        marginInlineStart: { style: n.e6 },
        marginInlineEnd: { style: n.e6 },
        marginBlock: { style: n.e6 },
        marginBlockStart: { style: n.e6 },
        marginBlockEnd: { style: n.e6 },
        displayPrint: {
          cssProperty: !1,
          transform: (e) => ({ "@media print": { display: e } }),
        },
        display: {},
        overflow: {},
        textOverflow: {},
        visibility: {},
        whiteSpace: {},
        flexBasis: {},
        flexDirection: {},
        flexWrap: {},
        justifyContent: {},
        alignItems: {},
        alignContent: {},
        order: {},
        flex: {},
        flexGrow: {},
        flexShrink: {},
        alignSelf: {},
        justifyItems: {},
        justifySelf: {},
        gap: { style: x },
        rowGap: { style: C },
        columnGap: { style: T },
        gridColumn: {},
        gridRow: {},
        gridAutoFlow: {},
        gridAutoColumns: {},
        gridAutoRows: {},
        gridTemplateColumns: {},
        gridTemplateRows: {},
        gridTemplateAreas: {},
        gridArea: {},
        position: {},
        zIndex: { themeKey: "zIndex" },
        top: {},
        right: {},
        bottom: {},
        left: {},
        boxShadow: { themeKey: "shadows" },
        width: { transform: L },
        maxWidth: { style: $ },
        minWidth: { transform: L },
        height: { transform: L },
        maxHeight: { transform: L },
        minHeight: { transform: L },
        boxSizing: {},
        font: { themeKey: "font" },
        fontFamily: { themeKey: "typography" },
        fontSize: { themeKey: "typography" },
        fontStyle: { themeKey: "typography" },
        fontWeight: { themeKey: "typography" },
        letterSpacing: {},
        textTransform: {},
        lineHeight: {},
        textAlign: {},
        typography: { cssProperty: !1, themeKey: "typography" },
      };
    },
    15294: function (e, t, r) {
      r.d(t, { DW: () => s, Jq: () => a, ZP: () => o });
      var n = r(63979),
        i = r(14279);
      function s(e, t, r = !0) {
        if (!t || "string" != typeof t) return null;
        if (e && e.vars && r) {
          let r = `vars.${t}`
            .split(".")
            .reduce((e, t) => (e && e[t] ? e[t] : null), e);
          if (null != r) return r;
        }
        return t
          .split(".")
          .reduce((e, t) => (e && null != e[t] ? e[t] : null), e);
      }
      function a(e, t, r, n = r) {
        let i;
        return (
          (i =
            "function" == typeof e
              ? e(r)
              : Array.isArray(e)
              ? e[r] || n
              : s(e, r) || n),
          t && (i = t(i, n, e)),
          i
        );
      }
      let o = function (e) {
        let { prop: t, cssProperty: r = e.prop, themeKey: o, transform: l } = e,
          u = (e) => {
            if (null == e[t]) return null;
            let u = e[t],
              c = s(e.theme, o) || {};
            return (0, i.k9)(e, u, (e) => {
              let i = a(c, l, e);
              return (e === i &&
                "string" == typeof e &&
                (i = a(c, l, `${t}${"default" === e ? "" : (0, n.Z)(e)}`, e)),
              !1 === r)
                ? i
                : { [r]: i };
            });
          };
        return (u.propTypes = {}), (u.filterProps = [t]), u;
      };
    },
    63979: function (e, t, r) {
      r.d(t, { Z: () => i });
      var n = r(36713);
      function i(e) {
        if ("string" != typeof e) throw Error((0, n.Z)(7));
        return e.charAt(0).toUpperCase() + e.slice(1);
      }
    },
    21547: function (e, t, r) {
      r.d(t, { Z: () => n });
      function n(e, t, r) {
        let n = {};
        for (let i in e) {
          let s = e[i],
            a = "",
            o = !0;
          for (let e = 0; e < s.length; e += 1) {
            let n = s[e];
            n &&
              ((a += (!0 === o ? "" : " ") + t(n)),
              (o = !1),
              r && r[n] && (a += " " + r[n]));
          }
          n[i] = a;
        }
        return n;
      }
    },
    78217: function (e, t, r) {
      r.d(t, {
        P: () => s,
        Z: () =>
          function e(t, r, a = { clone: !0 }) {
            let o = a.clone ? { ...t } : t;
            return (
              s(t) &&
                s(r) &&
                Object.keys(r).forEach((l) => {
                  n.isValidElement(r[l]) || (0, i.isValidElementType)(r[l])
                    ? (o[l] = r[l])
                    : s(r[l]) &&
                      Object.prototype.hasOwnProperty.call(t, l) &&
                      s(t[l])
                    ? (o[l] = e(t[l], r[l], a))
                    : a.clone
                    ? (o[l] = s(r[l])
                        ? (function e(t) {
                            if (
                              n.isValidElement(t) ||
                              (0, i.isValidElementType)(t) ||
                              !s(t)
                            )
                              return t;
                            let r = {};
                            return (
                              Object.keys(t).forEach((n) => {
                                r[n] = e(t[n]);
                              }),
                              r
                            );
                          })(r[l])
                        : r[l])
                    : (o[l] = r[l]);
                }),
              o
            );
          },
      });
      var n = r(67294),
        i = r(48055);
      function s(e) {
        if ("object" != typeof e || null === e) return !1;
        let t = Object.getPrototypeOf(e);
        return (
          (null === t ||
            t === Object.prototype ||
            null === Object.getPrototypeOf(t)) &&
          !(Symbol.toStringTag in e) &&
          !(Symbol.iterator in e)
        );
      }
    },
    36713: function (e, t, r) {
      r.d(t, { Z: () => n });
      function n(e, ...t) {
        let r = new URL(`https://mui.com/production-error/?code=${e}`);
        return (
          t.forEach((e) => r.searchParams.append("args[]", e)),
          `Minified MUI error #${e}; visit ${r} for the full message.`
        );
      }
    },
    81105: function (e, t, r) {
      let n;
      r.d(t, { ZP: () => o });
      let i = (e) => e,
        s =
          ((n = i),
          {
            configure(e) {
              n = e;
            },
            generate: (e) => n(e),
            reset() {
              n = i;
            },
          }),
        a = {
          active: "active",
          checked: "checked",
          completed: "completed",
          disabled: "disabled",
          error: "error",
          expanded: "expanded",
          focused: "focused",
          focusVisible: "focusVisible",
          open: "open",
          readOnly: "readOnly",
          required: "required",
          selected: "selected",
        };
      function o(e, t, r = "Mui") {
        let n = a[t];
        return n ? `${r}-${n}` : `${s.generate(e)}-${t}`;
      }
    },
    43349: function (e, t, r) {
      r.d(t, { Z: () => i });
      var n = r(81105);
      function i(e, t, r = "Mui") {
        let s = {};
        return (
          t.forEach((t) => {
            s[t] = (0, n.ZP)(e, t, r);
          }),
          s
        );
      }
    },
    36055: function (e, t, r) {
      r.d(t, { Z: () => i });
      var n = r(67294);
      function i(...e) {
        let t = n.useRef(void 0),
          r = n.useCallback((t) => {
            let r = e.map((e) => {
              if (null == e) return null;
              if ("function" == typeof e) {
                let r = e(t);
                return "function" == typeof r
                  ? r
                  : () => {
                      e(null);
                    };
              }
              return (
                (e.current = t),
                () => {
                  e.current = null;
                }
              );
            });
            return () => {
              r.forEach((e) => e?.());
            };
          }, e);
        return n.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (e) => {
                  t.current && (t.current(), (t.current = void 0)),
                    null != e && (t.current = r(e));
                },
          e
        );
      }
    },
    1599: function (e, t, r) {
      r.d(t, { ZF: () => n.ZF });
      var n = r(84291);
      (0, n.KN)("firebase", "11.6.0", "app");
    },
    67850: function (e, t, r) {
      r.d(t, { QT: () => sR, ad: () => sl, pl: () => sO, JU: () => si });
      var n,
        i,
        s,
        a,
        o,
        l,
        u,
        c,
        h,
        f,
        d,
        p,
        g,
        m,
        y = r(84291),
        v = r(9337),
        b = r(64289),
        w = r(24550),
        S =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        E = {};
      (function () {
        function e() {
          (this.blockSize = -1),
            (this.blockSize = 64),
            (this.g = [, , , ,]),
            (this.B = Array(this.blockSize)),
            (this.o = this.h = 0),
            this.s();
        }
        function t(e, t, r) {
          r || (r = 0);
          var n = Array(16);
          if ("string" == typeof t)
            for (var i = 0; 16 > i; ++i)
              n[i] =
                t.charCodeAt(r++) |
                (t.charCodeAt(r++) << 8) |
                (t.charCodeAt(r++) << 16) |
                (t.charCodeAt(r++) << 24);
          else
            for (i = 0; 16 > i; ++i)
              n[i] = t[r++] | (t[r++] << 8) | (t[r++] << 16) | (t[r++] << 24);
          (t = e.g[0]), (r = e.g[1]), (i = e.g[2]);
          var s = e.g[3],
            a = (t + (s ^ (r & (i ^ s))) + n[0] + 0xd76aa478) & 0xffffffff;
          (a =
            (s +
              (i ^
                ((t = r + (((a << 7) & 0xffffffff) | (a >>> 25))) & (r ^ i))) +
              n[1] +
              0xe8c7b756) &
            0xffffffff),
            (a =
              (i +
                (r ^
                  ((s = t + (((a << 12) & 0xffffffff) | (a >>> 20))) &
                    (t ^ r))) +
                n[2] +
                0x242070db) &
              0xffffffff),
            (a =
              (r +
                (t ^
                  ((i = s + (((a << 17) & 0xffffffff) | (a >>> 15))) &
                    (s ^ t))) +
                n[3] +
                0xc1bdceee) &
              0xffffffff),
            (a =
              (t +
                (s ^
                  ((r = i + (((a << 22) & 0xffffffff) | (a >>> 10))) &
                    (i ^ s))) +
                n[4] +
                0xf57c0faf) &
              0xffffffff),
            (a =
              (s +
                (i ^
                  ((t = r + (((a << 7) & 0xffffffff) | (a >>> 25))) &
                    (r ^ i))) +
                n[5] +
                0x4787c62a) &
              0xffffffff),
            (a =
              (i +
                (r ^
                  ((s = t + (((a << 12) & 0xffffffff) | (a >>> 20))) &
                    (t ^ r))) +
                n[6] +
                0xa8304613) &
              0xffffffff),
            (a =
              (r +
                (t ^
                  ((i = s + (((a << 17) & 0xffffffff) | (a >>> 15))) &
                    (s ^ t))) +
                n[7] +
                0xfd469501) &
              0xffffffff),
            (a =
              (t +
                (s ^
                  ((r = i + (((a << 22) & 0xffffffff) | (a >>> 10))) &
                    (i ^ s))) +
                n[8] +
                0x698098d8) &
              0xffffffff),
            (a =
              (s +
                (i ^
                  ((t = r + (((a << 7) & 0xffffffff) | (a >>> 25))) &
                    (r ^ i))) +
                n[9] +
                0x8b44f7af) &
              0xffffffff),
            (a =
              (i +
                (r ^
                  ((s = t + (((a << 12) & 0xffffffff) | (a >>> 20))) &
                    (t ^ r))) +
                n[10] +
                0xffff5bb1) &
              0xffffffff),
            (a =
              (r +
                (t ^
                  ((i = s + (((a << 17) & 0xffffffff) | (a >>> 15))) &
                    (s ^ t))) +
                n[11] +
                0x895cd7be) &
              0xffffffff),
            (a =
              (t +
                (s ^
                  ((r = i + (((a << 22) & 0xffffffff) | (a >>> 10))) &
                    (i ^ s))) +
                n[12] +
                0x6b901122) &
              0xffffffff),
            (a =
              (s +
                (i ^
                  ((t = r + (((a << 7) & 0xffffffff) | (a >>> 25))) &
                    (r ^ i))) +
                n[13] +
                0xfd987193) &
              0xffffffff),
            (a =
              (i +
                (r ^
                  ((s = t + (((a << 12) & 0xffffffff) | (a >>> 20))) &
                    (t ^ r))) +
                n[14] +
                0xa679438e) &
              0xffffffff),
            (a =
              (r +
                (t ^
                  ((i = s + (((a << 17) & 0xffffffff) | (a >>> 15))) &
                    (s ^ t))) +
                n[15] +
                0x49b40821) &
              0xffffffff),
            (r = i + (((a << 22) & 0xffffffff) | (a >>> 10))),
            (a = (t + (i ^ (s & (r ^ i))) + n[1] + 0xf61e2562) & 0xffffffff),
            (t = r + (((a << 5) & 0xffffffff) | (a >>> 27))),
            (a = (s + (r ^ (i & (t ^ r))) + n[6] + 0xc040b340) & 0xffffffff),
            (s = t + (((a << 9) & 0xffffffff) | (a >>> 23))),
            (a = (i + (t ^ (r & (s ^ t))) + n[11] + 0x265e5a51) & 0xffffffff),
            (i = s + (((a << 14) & 0xffffffff) | (a >>> 18))),
            (a = (r + (s ^ (t & (i ^ s))) + n[0] + 0xe9b6c7aa) & 0xffffffff),
            (r = i + (((a << 20) & 0xffffffff) | (a >>> 12))),
            (a = (t + (i ^ (s & (r ^ i))) + n[5] + 0xd62f105d) & 0xffffffff),
            (t = r + (((a << 5) & 0xffffffff) | (a >>> 27))),
            (a = (s + (r ^ (i & (t ^ r))) + n[10] + 0x2441453) & 0xffffffff),
            (s = t + (((a << 9) & 0xffffffff) | (a >>> 23))),
            (a = (i + (t ^ (r & (s ^ t))) + n[15] + 0xd8a1e681) & 0xffffffff),
            (i = s + (((a << 14) & 0xffffffff) | (a >>> 18))),
            (a = (r + (s ^ (t & (i ^ s))) + n[4] + 0xe7d3fbc8) & 0xffffffff),
            (r = i + (((a << 20) & 0xffffffff) | (a >>> 12))),
            (a = (t + (i ^ (s & (r ^ i))) + n[9] + 0x21e1cde6) & 0xffffffff),
            (t = r + (((a << 5) & 0xffffffff) | (a >>> 27))),
            (a = (s + (r ^ (i & (t ^ r))) + n[14] + 0xc33707d6) & 0xffffffff),
            (s = t + (((a << 9) & 0xffffffff) | (a >>> 23))),
            (a = (i + (t ^ (r & (s ^ t))) + n[3] + 0xf4d50d87) & 0xffffffff),
            (i = s + (((a << 14) & 0xffffffff) | (a >>> 18))),
            (a = (r + (s ^ (t & (i ^ s))) + n[8] + 0x455a14ed) & 0xffffffff),
            (r = i + (((a << 20) & 0xffffffff) | (a >>> 12))),
            (a = (t + (i ^ (s & (r ^ i))) + n[13] + 0xa9e3e905) & 0xffffffff),
            (t = r + (((a << 5) & 0xffffffff) | (a >>> 27))),
            (a = (s + (r ^ (i & (t ^ r))) + n[2] + 0xfcefa3f8) & 0xffffffff),
            (s = t + (((a << 9) & 0xffffffff) | (a >>> 23))),
            (a = (i + (t ^ (r & (s ^ t))) + n[7] + 0x676f02d9) & 0xffffffff),
            (i = s + (((a << 14) & 0xffffffff) | (a >>> 18))),
            (a = (r + (s ^ (t & (i ^ s))) + n[12] + 0x8d2a4c8a) & 0xffffffff),
            (a =
              (t +
                ((r = i + (((a << 20) & 0xffffffff) | (a >>> 12))) ^ i ^ s) +
                n[5] +
                0xfffa3942) &
              0xffffffff),
            (a =
              (s +
                ((t = r + (((a << 4) & 0xffffffff) | (a >>> 28))) ^ r ^ i) +
                n[8] +
                0x8771f681) &
              0xffffffff),
            (a =
              (i +
                ((s = t + (((a << 11) & 0xffffffff) | (a >>> 21))) ^ t ^ r) +
                n[11] +
                0x6d9d6122) &
              0xffffffff),
            (a =
              (r +
                ((i = s + (((a << 16) & 0xffffffff) | (a >>> 16))) ^ s ^ t) +
                n[14] +
                0xfde5380c) &
              0xffffffff),
            (a =
              (t +
                ((r = i + (((a << 23) & 0xffffffff) | (a >>> 9))) ^ i ^ s) +
                n[1] +
                0xa4beea44) &
              0xffffffff),
            (a =
              (s +
                ((t = r + (((a << 4) & 0xffffffff) | (a >>> 28))) ^ r ^ i) +
                n[4] +
                0x4bdecfa9) &
              0xffffffff),
            (a =
              (i +
                ((s = t + (((a << 11) & 0xffffffff) | (a >>> 21))) ^ t ^ r) +
                n[7] +
                0xf6bb4b60) &
              0xffffffff),
            (a =
              (r +
                ((i = s + (((a << 16) & 0xffffffff) | (a >>> 16))) ^ s ^ t) +
                n[10] +
                0xbebfbc70) &
              0xffffffff),
            (a =
              (t +
                ((r = i + (((a << 23) & 0xffffffff) | (a >>> 9))) ^ i ^ s) +
                n[13] +
                0x289b7ec6) &
              0xffffffff),
            (a =
              (s +
                ((t = r + (((a << 4) & 0xffffffff) | (a >>> 28))) ^ r ^ i) +
                n[0] +
                0xeaa127fa) &
              0xffffffff),
            (a =
              (i +
                ((s = t + (((a << 11) & 0xffffffff) | (a >>> 21))) ^ t ^ r) +
                n[3] +
                0xd4ef3085) &
              0xffffffff),
            (a =
              (r +
                ((i = s + (((a << 16) & 0xffffffff) | (a >>> 16))) ^ s ^ t) +
                n[6] +
                0x4881d05) &
              0xffffffff),
            (a =
              (t +
                ((r = i + (((a << 23) & 0xffffffff) | (a >>> 9))) ^ i ^ s) +
                n[9] +
                0xd9d4d039) &
              0xffffffff),
            (a =
              (s +
                ((t = r + (((a << 4) & 0xffffffff) | (a >>> 28))) ^ r ^ i) +
                n[12] +
                0xe6db99e5) &
              0xffffffff),
            (a =
              (i +
                ((s = t + (((a << 11) & 0xffffffff) | (a >>> 21))) ^ t ^ r) +
                n[15] +
                0x1fa27cf8) &
              0xffffffff),
            (a =
              (r +
                ((i = s + (((a << 16) & 0xffffffff) | (a >>> 16))) ^ s ^ t) +
                n[2] +
                0xc4ac5665) &
              0xffffffff),
            (r = i + (((a << 23) & 0xffffffff) | (a >>> 9))),
            (a = (t + (i ^ (r | ~s)) + n[0] + 0xf4292244) & 0xffffffff),
            (t = r + (((a << 6) & 0xffffffff) | (a >>> 26))),
            (a = (s + (r ^ (t | ~i)) + n[7] + 0x432aff97) & 0xffffffff),
            (s = t + (((a << 10) & 0xffffffff) | (a >>> 22))),
            (a = (i + (t ^ (s | ~r)) + n[14] + 0xab9423a7) & 0xffffffff),
            (i = s + (((a << 15) & 0xffffffff) | (a >>> 17))),
            (a = (r + (s ^ (i | ~t)) + n[5] + 0xfc93a039) & 0xffffffff),
            (r = i + (((a << 21) & 0xffffffff) | (a >>> 11))),
            (a = (t + (i ^ (r | ~s)) + n[12] + 0x655b59c3) & 0xffffffff),
            (t = r + (((a << 6) & 0xffffffff) | (a >>> 26))),
            (a = (s + (r ^ (t | ~i)) + n[3] + 0x8f0ccc92) & 0xffffffff),
            (s = t + (((a << 10) & 0xffffffff) | (a >>> 22))),
            (a = (i + (t ^ (s | ~r)) + n[10] + 0xffeff47d) & 0xffffffff),
            (i = s + (((a << 15) & 0xffffffff) | (a >>> 17))),
            (a = (r + (s ^ (i | ~t)) + n[1] + 0x85845dd1) & 0xffffffff),
            (r = i + (((a << 21) & 0xffffffff) | (a >>> 11))),
            (a = (t + (i ^ (r | ~s)) + n[8] + 0x6fa87e4f) & 0xffffffff),
            (t = r + (((a << 6) & 0xffffffff) | (a >>> 26))),
            (a = (s + (r ^ (t | ~i)) + n[15] + 0xfe2ce6e0) & 0xffffffff),
            (s = t + (((a << 10) & 0xffffffff) | (a >>> 22))),
            (a = (i + (t ^ (s | ~r)) + n[6] + 0xa3014314) & 0xffffffff),
            (i = s + (((a << 15) & 0xffffffff) | (a >>> 17))),
            (a = (r + (s ^ (i | ~t)) + n[13] + 0x4e0811a1) & 0xffffffff),
            (r = i + (((a << 21) & 0xffffffff) | (a >>> 11))),
            (a = (t + (i ^ (r | ~s)) + n[4] + 0xf7537e82) & 0xffffffff),
            (t = r + (((a << 6) & 0xffffffff) | (a >>> 26))),
            (a = (s + (r ^ (t | ~i)) + n[11] + 0xbd3af235) & 0xffffffff),
            (s = t + (((a << 10) & 0xffffffff) | (a >>> 22))),
            (a = (i + (t ^ (s | ~r)) + n[2] + 0x2ad7d2bb) & 0xffffffff),
            (i = s + (((a << 15) & 0xffffffff) | (a >>> 17))),
            (a = (r + (s ^ (i | ~t)) + n[9] + 0xeb86d391) & 0xffffffff),
            (e.g[0] = (e.g[0] + t) & 0xffffffff),
            (e.g[1] =
              (e.g[1] + (i + (((a << 21) & 0xffffffff) | (a >>> 11)))) &
              0xffffffff),
            (e.g[2] = (e.g[2] + i) & 0xffffffff),
            (e.g[3] = (e.g[3] + s) & 0xffffffff);
        }
        function r(e, t) {
          this.h = t;
          for (var r = [], n = !0, i = e.length - 1; 0 <= i; i--) {
            var s = 0 | e[i];
            (n && s == t) || ((r[i] = s), (n = !1));
          }
          this.g = r;
        }
        !(function (e, t) {
          function r() {}
          (r.prototype = t.prototype),
            (e.D = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e),
            (e.C = function (e, r, n) {
              for (
                var i = Array(arguments.length - 2), s = 2;
                s < arguments.length;
                s++
              )
                i[s - 2] = arguments[s];
              return t.prototype[r].apply(e, i);
            });
        })(e, function () {
          this.blockSize = -1;
        }),
          (e.prototype.s = function () {
            (this.g[0] = 0x67452301),
              (this.g[1] = 0xefcdab89),
              (this.g[2] = 0x98badcfe),
              (this.g[3] = 0x10325476),
              (this.o = this.h = 0);
          }),
          (e.prototype.u = function (e, r) {
            void 0 === r && (r = e.length);
            for (
              var n = r - this.blockSize, i = this.B, s = this.h, a = 0;
              a < r;

            ) {
              if (0 == s) for (; a <= n; ) t(this, e, a), (a += this.blockSize);
              if ("string" == typeof e) {
                for (; a < r; )
                  if (((i[s++] = e.charCodeAt(a++)), s == this.blockSize)) {
                    t(this, i), (s = 0);
                    break;
                  }
              } else
                for (; a < r; )
                  if (((i[s++] = e[a++]), s == this.blockSize)) {
                    t(this, i), (s = 0);
                    break;
                  }
            }
            (this.h = s), (this.o += r);
          }),
          (e.prototype.v = function () {
            var e = Array(
              (56 > this.h ? this.blockSize : 2 * this.blockSize) - this.h
            );
            e[0] = 128;
            for (var t = 1; t < e.length - 8; ++t) e[t] = 0;
            var r = 8 * this.o;
            for (t = e.length - 8; t < e.length; ++t)
              (e[t] = 255 & r), (r /= 256);
            for (this.u(e), e = Array(16), t = r = 0; 4 > t; ++t)
              for (var n = 0; 32 > n; n += 8) e[r++] = (this.g[t] >>> n) & 255;
            return e;
          });
        var s,
          a = {};
        function o(e) {
          var t;
          return -128 <= e && 128 > e
            ? ((t = function (e) {
                return new r([0 | e], 0 > e ? -1 : 0);
              }),
              Object.prototype.hasOwnProperty.call(a, e) ? a[e] : (a[e] = t(e)))
            : new r([0 | e], 0 > e ? -1 : 0);
        }
        function l(e) {
          if (isNaN(e) || !isFinite(e)) return u;
          if (0 > e) return p(l(-e));
          for (var t = [], n = 1, i = 0; e >= n; i++)
            (t[i] = (e / n) | 0), (n *= 0x100000000);
          return new r(t, 0);
        }
        var u = o(0),
          c = o(1),
          h = o(0x1000000);
        function f(e) {
          if (0 != e.h) return !1;
          for (var t = 0; t < e.g.length; t++) if (0 != e.g[t]) return !1;
          return !0;
        }
        function d(e) {
          return -1 == e.h;
        }
        function p(e) {
          for (var t = e.g.length, n = [], i = 0; i < t; i++) n[i] = ~e.g[i];
          return new r(n, ~e.h).add(c);
        }
        function g(e, t) {
          return e.add(p(t));
        }
        function m(e, t) {
          for (; (65535 & e[t]) != e[t]; )
            (e[t + 1] += e[t] >>> 16), (e[t] &= 65535), t++;
        }
        function y(e, t) {
          (this.g = e), (this.h = t);
        }
        function v(e, t) {
          if (f(t)) throw Error("division by zero");
          if (f(e)) return new y(u, u);
          if (d(e)) return (t = v(p(e), t)), new y(p(t.g), p(t.h));
          if (d(t)) return (t = v(e, p(t))), new y(p(t.g), t.h);
          if (30 < e.g.length) {
            if (d(e) || d(t))
              throw Error("slowDivide_ only works with positive integers.");
            for (var r = c, n = t; 0 >= n.l(e); ) (r = b(r)), (n = b(n));
            var i = w(r, 1),
              s = w(n, 1);
            for (n = w(n, 2), r = w(r, 2); !f(n); ) {
              var a = s.add(n);
              0 >= a.l(e) && ((i = i.add(r)), (s = a)),
                (n = w(n, 1)),
                (r = w(r, 1));
            }
            return (t = g(e, i.j(t))), new y(i, t);
          }
          for (i = u; 0 <= e.l(t); ) {
            for (
              n =
                48 >=
                (n = Math.ceil(
                  Math.log((r = Math.max(1, Math.floor(e.m() / t.m())))) /
                    Math.LN2
                ))
                  ? 1
                  : Math.pow(2, n - 48),
                a = (s = l(r)).j(t);
              d(a) || 0 < a.l(e);

            )
              (r -= n), (a = (s = l(r)).j(t));
            f(s) && (s = c), (i = i.add(s)), (e = g(e, a));
          }
          return new y(i, e);
        }
        function b(e) {
          for (var t = e.g.length + 1, n = [], i = 0; i < t; i++)
            n[i] = (e.i(i) << 1) | (e.i(i - 1) >>> 31);
          return new r(n, e.h);
        }
        function w(e, t) {
          var n = t >> 5;
          t %= 32;
          for (var i = e.g.length - n, s = [], a = 0; a < i; a++)
            s[a] =
              0 < t
                ? (e.i(a + n) >>> t) | (e.i(a + n + 1) << (32 - t))
                : e.i(a + n);
          return new r(s, e.h);
        }
        ((s = r.prototype).m = function () {
          if (d(this)) return -p(this).m();
          for (var e = 0, t = 1, r = 0; r < this.g.length; r++) {
            var n = this.i(r);
            (e += (0 <= n ? n : 0x100000000 + n) * t), (t *= 0x100000000);
          }
          return e;
        }),
          (s.toString = function (e) {
            if (2 > (e = e || 10) || 36 < e)
              throw Error("radix out of range: " + e);
            if (f(this)) return "0";
            if (d(this)) return "-" + p(this).toString(e);
            for (var t = l(Math.pow(e, 6)), r = this, n = ""; ; ) {
              var i = v(r, t).g,
                s = (
                  (0 < (r = g(r, i.j(t))).g.length ? r.g[0] : r.h) >>> 0
                ).toString(e);
              if (f((r = i))) return s + n;
              for (; 6 > s.length; ) s = "0" + s;
              n = s + n;
            }
          }),
          (s.i = function (e) {
            return 0 > e ? 0 : e < this.g.length ? this.g[e] : this.h;
          }),
          (s.l = function (e) {
            return d((e = g(this, e))) ? -1 : +!f(e);
          }),
          (s.abs = function () {
            return d(this) ? p(this) : this;
          }),
          (s.add = function (e) {
            for (
              var t = Math.max(this.g.length, e.g.length), n = [], i = 0, s = 0;
              s <= t;
              s++
            ) {
              var a = i + (65535 & this.i(s)) + (65535 & e.i(s)),
                o = (a >>> 16) + (this.i(s) >>> 16) + (e.i(s) >>> 16);
              (i = o >>> 16),
                (a &= 65535),
                (o &= 65535),
                (n[s] = (o << 16) | a);
            }
            return new r(n, -0x80000000 & n[n.length - 1] ? -1 : 0);
          }),
          (s.j = function (e) {
            if (f(this) || f(e)) return u;
            if (d(this)) return d(e) ? p(this).j(p(e)) : p(p(this).j(e));
            if (d(e)) return p(this.j(p(e)));
            if (0 > this.l(h) && 0 > e.l(h)) return l(this.m() * e.m());
            for (
              var t = this.g.length + e.g.length, n = [], i = 0;
              i < 2 * t;
              i++
            )
              n[i] = 0;
            for (i = 0; i < this.g.length; i++)
              for (var s = 0; s < e.g.length; s++) {
                var a = this.i(i) >>> 16,
                  o = 65535 & this.i(i),
                  c = e.i(s) >>> 16,
                  g = 65535 & e.i(s);
                (n[2 * i + 2 * s] += o * g),
                  m(n, 2 * i + 2 * s),
                  (n[2 * i + 2 * s + 1] += a * g),
                  m(n, 2 * i + 2 * s + 1),
                  (n[2 * i + 2 * s + 1] += o * c),
                  m(n, 2 * i + 2 * s + 1),
                  (n[2 * i + 2 * s + 2] += a * c),
                  m(n, 2 * i + 2 * s + 2);
              }
            for (i = 0; i < t; i++) n[i] = (n[2 * i + 1] << 16) | n[2 * i];
            for (i = t; i < 2 * t; i++) n[i] = 0;
            return new r(n, 0);
          }),
          (s.A = function (e) {
            return v(this, e).h;
          }),
          (s.and = function (e) {
            for (
              var t = Math.max(this.g.length, e.g.length), n = [], i = 0;
              i < t;
              i++
            )
              n[i] = this.i(i) & e.i(i);
            return new r(n, this.h & e.h);
          }),
          (s.or = function (e) {
            for (
              var t = Math.max(this.g.length, e.g.length), n = [], i = 0;
              i < t;
              i++
            )
              n[i] = this.i(i) | e.i(i);
            return new r(n, this.h | e.h);
          }),
          (s.xor = function (e) {
            for (
              var t = Math.max(this.g.length, e.g.length), n = [], i = 0;
              i < t;
              i++
            )
              n[i] = this.i(i) ^ e.i(i);
            return new r(n, this.h ^ e.h);
          }),
          (e.prototype.digest = e.prototype.v),
          (e.prototype.reset = e.prototype.s),
          (e.prototype.update = e.prototype.u),
          (i = E.Md5 = e),
          (r.prototype.add = r.prototype.add),
          (r.prototype.multiply = r.prototype.j),
          (r.prototype.modulo = r.prototype.A),
          (r.prototype.compare = r.prototype.l),
          (r.prototype.toNumber = r.prototype.m),
          (r.prototype.toString = r.prototype.toString),
          (r.prototype.getBits = r.prototype.i),
          (r.fromNumber = l),
          (r.fromString = function e(t, r) {
            if (0 == t.length) throw Error("number format error: empty string");
            if (2 > (r = r || 10) || 36 < r)
              throw Error("radix out of range: " + r);
            if ("-" == t.charAt(0)) return p(e(t.substring(1), r));
            if (0 <= t.indexOf("-"))
              throw Error('number format error: interior "-" character');
            for (
              var n = l(Math.pow(r, 8)), i = u, s = 0;
              s < t.length;
              s += 8
            ) {
              var a = Math.min(8, t.length - s),
                o = parseInt(t.substring(s, s + a), r);
              8 > a
                ? ((a = l(Math.pow(r, a))), (i = i.j(a).add(l(o))))
                : (i = (i = i.j(n)).add(l(o)));
            }
            return i;
          }),
          (n = E.Integer = r);
      }).apply(
        void 0 !== S
          ? S
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : {}
      );
      var x =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : {},
        T = {};
      (function () {
        var e,
          t,
          r,
          n =
            "function" == typeof Object.defineProperties
              ? Object.defineProperty
              : function (e, t, r) {
                  return (
                    e == Array.prototype ||
                      e == Object.prototype ||
                      (e[t] = r.value),
                    e
                  );
                },
          i = (function (e) {
            e = [
              "object" == typeof globalThis && globalThis,
              e,
              "object" == typeof window && window,
              "object" == typeof self && self,
              "object" == typeof x && x,
            ];
            for (var t = 0; t < e.length; ++t) {
              var r = e[t];
              if (r && r.Math == Math) return r;
            }
            throw Error("Cannot find global object");
          })(this);
        !(function (e, t) {
          if (t)
            t: {
              var r = i;
              e = e.split(".");
              for (var s = 0; s < e.length - 1; s++) {
                var a = e[s];
                if (!(a in r)) break t;
                r = r[a];
              }
              (t = t((s = r[(e = e[e.length - 1])]))) != s &&
                null != t &&
                n(r, e, { configurable: !0, writable: !0, value: t });
            }
        })("Array.prototype.values", function (e) {
          return (
            e ||
            function () {
              var e, t, r, n, i;
              return (
                (e = this),
                (t = function (e, t) {
                  return t;
                }),
                e instanceof String && (e += ""),
                (r = 0),
                (n = !1),
                ((i = {
                  next: function () {
                    if (!n && r < e.length) {
                      var i = r++;
                      return { value: t(i, e[i]), done: !1 };
                    }
                    return (n = !0), { done: !0, value: void 0 };
                  },
                })[Symbol.iterator] = function () {
                  return i;
                }),
                i
              );
            }
          );
        });
        var d = d || {},
          p = this || self;
        function g(e) {
          var t = typeof e;
          return (
            "array" ==
              (t =
                "object" != t
                  ? t
                  : e
                  ? Array.isArray(e)
                    ? "array"
                    : t
                  : "null") ||
            ("object" == t && "number" == typeof e.length)
          );
        }
        function m(e) {
          var t = typeof e;
          return ("object" == t && null != e) || "function" == t;
        }
        function y(e, t, r) {
          return e.call.apply(e.bind, arguments);
        }
        function v(e, t, r) {
          if (!e) throw Error();
          if (2 < arguments.length) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function () {
              var r = Array.prototype.slice.call(arguments);
              return Array.prototype.unshift.apply(r, n), e.apply(t, r);
            };
          }
          return function () {
            return e.apply(t, arguments);
          };
        }
        function b(e, t, r) {
          return (b =
            Function.prototype.bind &&
            -1 != Function.prototype.bind.toString().indexOf("native code")
              ? y
              : v).apply(null, arguments);
        }
        function w(e, t) {
          var r = Array.prototype.slice.call(arguments, 1);
          return function () {
            var t = r.slice();
            return t.push.apply(t, arguments), e.apply(this, t);
          };
        }
        function S(e, t) {
          function r() {}
          (r.prototype = t.prototype),
            (e.aa = t.prototype),
            (e.prototype = new r()),
            (e.prototype.constructor = e),
            (e.Qb = function (e, r, n) {
              for (
                var i = Array(arguments.length - 2), s = 2;
                s < arguments.length;
                s++
              )
                i[s - 2] = arguments[s];
              return t.prototype[r].apply(e, i);
            });
        }
        function E(e) {
          let t = e.length;
          if (0 < t) {
            let r = Array(t);
            for (let n = 0; n < t; n++) r[n] = e[n];
            return r;
          }
          return [];
        }
        function C(e, t) {
          for (let t = 1; t < arguments.length; t++) {
            let r = arguments[t];
            if (g(r)) {
              let t = e.length || 0,
                n = r.length || 0;
              e.length = t + n;
              for (let i = 0; i < n; i++) e[t + i] = r[i];
            } else e.push(r);
          }
        }
        function _(e) {
          return /^[\s\xa0]*$/.test(e);
        }
        function k() {
          var e = p.navigator;
          return e && (e = e.userAgent) ? e : "";
        }
        function A(e) {
          return A[" "](e), e;
        }
        A[" "] = function () {};
        var I =
          -1 != k().indexOf("Gecko") &&
          (-1 == k().toLowerCase().indexOf("webkit") ||
            -1 != k().indexOf("Edge")) &&
          -1 == k().indexOf("Trident") &&
          -1 == k().indexOf("MSIE") &&
          -1 == k().indexOf("Edge");
        function D(e, t, r) {
          for (let n in e) t.call(r, e[n], n, e);
        }
        function N(e) {
          let t = {};
          for (let r in e) t[r] = e[r];
          return t;
        }
        let R =
          "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(
            " "
          );
        function P(e, t) {
          let r, n;
          for (let t = 1; t < arguments.length; t++) {
            for (r in (n = arguments[t])) e[r] = n[r];
            for (let t = 0; t < R.length; t++)
              (r = R[t]),
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
        }
        var O = new (class {
          constructor(e, t) {
            (this.i = e), (this.j = t), (this.h = 0), (this.g = null);
          }
          get() {
            let e;
            return (
              0 < this.h
                ? (this.h--, (e = this.g), (this.g = e.next), (e.next = null))
                : (e = this.i()),
              e
            );
          }
        })(
          () => new L(),
          (e) => e.reset()
        );
        class L {
          constructor() {
            this.next = this.g = this.h = null;
          }
          set(e, t) {
            (this.h = e), (this.g = t), (this.next = null);
          }
          reset() {
            this.next = this.g = this.h = null;
          }
        }
        let M,
          $ = !1,
          V = new (class {
            constructor() {
              this.h = this.g = null;
            }
            add(e, t) {
              let r = O.get();
              r.set(e, t),
                this.h ? (this.h.next = r) : (this.g = r),
                (this.h = r);
            }
          })(),
          F = () => {
            let e = p.Promise.resolve(void 0);
            M = () => {
              e.then(B);
            };
          };
        var B = () => {
          let e;
          for (
            var t;
            (e = null),
              V.g &&
                ((e = V.g),
                (V.g = V.g.next),
                V.g || (V.h = null),
                (e.next = null)),
              (t = e);

          ) {
            try {
              t.h.call(t.g);
            } catch (e) {
              !(function (e) {
                p.setTimeout(() => {
                  throw e;
                }, 0);
              })(e);
            }
            O.j(t), 100 > O.h && (O.h++, (t.next = O.g), (O.g = t));
          }
          $ = !1;
        };
        function U() {
          (this.s = this.s), (this.C = this.C);
        }
        function j(e, t) {
          (this.type = e),
            (this.g = this.target = t),
            (this.defaultPrevented = !1);
        }
        (U.prototype.s = !1),
          (U.prototype.ma = function () {
            this.s || ((this.s = !0), this.N());
          }),
          (U.prototype.N = function () {
            if (this.C) for (; this.C.length; ) this.C.shift()();
          }),
          (j.prototype.h = function () {
            this.defaultPrevented = !0;
          });
        var z = (function () {
          if (!p.addEventListener || !Object.defineProperty) return !1;
          var e = !1,
            t = Object.defineProperty({}, "passive", {
              get: function () {
                e = !0;
              },
            });
          try {
            let e = () => {};
            p.addEventListener("test", e, t),
              p.removeEventListener("test", e, t);
          } catch (e) {}
          return e;
        })();
        function q(e, t) {
          if (
            (j.call(this, e ? e.type : ""),
            (this.relatedTarget = this.g = this.target = null),
            (this.button =
              this.screenY =
              this.screenX =
              this.clientY =
              this.clientX =
                0),
            (this.key = ""),
            (this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1),
            (this.state = null),
            (this.pointerId = 0),
            (this.pointerType = ""),
            (this.i = null),
            e)
          ) {
            var r = (this.type = e.type),
              n =
                e.changedTouches && e.changedTouches.length
                  ? e.changedTouches[0]
                  : null;
            if (
              ((this.target = e.target || e.srcElement),
              (this.g = t),
              (t = e.relatedTarget))
            ) {
              if (I) {
                t: {
                  try {
                    A(t.nodeName);
                    var i = !0;
                    break t;
                  } catch (e) {}
                  i = !1;
                }
                i || (t = null);
              }
            } else
              "mouseover" == r
                ? (t = e.fromElement)
                : "mouseout" == r && (t = e.toElement);
            (this.relatedTarget = t),
              n
                ? ((this.clientX = void 0 !== n.clientX ? n.clientX : n.pageX),
                  (this.clientY = void 0 !== n.clientY ? n.clientY : n.pageY),
                  (this.screenX = n.screenX || 0),
                  (this.screenY = n.screenY || 0))
                : ((this.clientX = void 0 !== e.clientX ? e.clientX : e.pageX),
                  (this.clientY = void 0 !== e.clientY ? e.clientY : e.pageY),
                  (this.screenX = e.screenX || 0),
                  (this.screenY = e.screenY || 0)),
              (this.button = e.button),
              (this.key = e.key || ""),
              (this.ctrlKey = e.ctrlKey),
              (this.altKey = e.altKey),
              (this.shiftKey = e.shiftKey),
              (this.metaKey = e.metaKey),
              (this.pointerId = e.pointerId || 0),
              (this.pointerType =
                "string" == typeof e.pointerType
                  ? e.pointerType
                  : H[e.pointerType] || ""),
              (this.state = e.state),
              (this.i = e),
              e.defaultPrevented && q.aa.h.call(this);
          }
        }
        S(q, j);
        var H = { 2: "touch", 3: "pen", 4: "mouse" };
        q.prototype.h = function () {
          q.aa.h.call(this);
          var e = this.i;
          e.preventDefault ? e.preventDefault() : (e.returnValue = !1);
        };
        var K = "closure_listenable_" + ((1e6 * Math.random()) | 0),
          Z = 0;
        function G(e, t, r, n, i) {
          (this.listener = e),
            (this.proxy = null),
            (this.src = t),
            (this.type = r),
            (this.capture = !!n),
            (this.ha = i),
            (this.key = ++Z),
            (this.da = this.fa = !1);
        }
        function W(e) {
          (e.da = !0),
            (e.listener = null),
            (e.proxy = null),
            (e.src = null),
            (e.ha = null);
        }
        function Q(e) {
          (this.src = e), (this.g = {}), (this.h = 0);
        }
        function X(e, t) {
          var r = t.type;
          if (r in e.g) {
            var n,
              i = e.g[r],
              s = Array.prototype.indexOf.call(i, t, void 0);
            (n = 0 <= s) && Array.prototype.splice.call(i, s, 1),
              n && (W(t), 0 == e.g[r].length && (delete e.g[r], e.h--));
          }
        }
        function Y(e, t, r, n) {
          for (var i = 0; i < e.length; ++i) {
            var s = e[i];
            if (!s.da && s.listener == t && !!r == s.capture && s.ha == n)
              return i;
          }
          return -1;
        }
        Q.prototype.add = function (e, t, r, n, i) {
          var s = e.toString();
          (e = this.g[s]) || ((e = this.g[s] = []), this.h++);
          var a = Y(e, t, n, i);
          return (
            -1 < a
              ? ((t = e[a]), r || (t.fa = !1))
              : (((t = new G(t, this.src, s, !!n, i)).fa = r), e.push(t)),
            t
          );
        };
        var J = "closure_lm_" + ((1e6 * Math.random()) | 0),
          ee = {};
        function et(e, t, r, n, i, s) {
          if (!t) throw Error("Invalid event type");
          var a = m(i) ? !!i.capture : !!i,
            o = es(e);
          if ((o || (e[J] = o = new Q(e)), (r = o.add(t, r, n, a, s)).proxy))
            return r;
          if (
            ((n = function e(t) {
              return ei.call(e.src, e.listener, t);
            }),
            (r.proxy = n),
            (n.src = e),
            (n.listener = r),
            e.addEventListener)
          )
            z || (i = a),
              void 0 === i && (i = !1),
              e.addEventListener(t.toString(), n, i);
          else if (e.attachEvent) e.attachEvent(en(t.toString()), n);
          else if (e.addListener && e.removeListener) e.addListener(n);
          else throw Error("addEventListener and attachEvent are unavailable.");
          return r;
        }
        function er(e) {
          if ("number" != typeof e && e && !e.da) {
            var t = e.src;
            if (t && t[K]) X(t.i, e);
            else {
              var r = e.type,
                n = e.proxy;
              t.removeEventListener
                ? t.removeEventListener(r, n, e.capture)
                : t.detachEvent
                ? t.detachEvent(en(r), n)
                : t.addListener && t.removeListener && t.removeListener(n),
                (r = es(t))
                  ? (X(r, e), 0 == r.h && ((r.src = null), (t[J] = null)))
                  : W(e);
            }
          }
        }
        function en(e) {
          return e in ee ? ee[e] : (ee[e] = "on" + e);
        }
        function ei(e, t) {
          if (e.da) e = !0;
          else {
            t = new q(t, this);
            var r = e.listener,
              n = e.ha || e.src;
            e.fa && er(e), (e = r.call(n, t));
          }
          return e;
        }
        function es(e) {
          return (e = e[J]) instanceof Q ? e : null;
        }
        var ea = "__closure_events_fn_" + ((1e9 * Math.random()) >>> 0);
        function eo(e) {
          return "function" == typeof e
            ? e
            : (e[ea] ||
                (e[ea] = function (t) {
                  return e.handleEvent(t);
                }),
              e[ea]);
        }
        function el() {
          U.call(this),
            (this.i = new Q(this)),
            (this.M = this),
            (this.F = null);
        }
        function eu(e, t) {
          var r,
            n = e.F;
          if (n) for (r = []; n; n = n.F) r.push(n);
          if (((e = e.M), (n = t.type || t), "string" == typeof t))
            t = new j(t, e);
          else if (t instanceof j) t.target = t.target || e;
          else {
            var i = t;
            P((t = new j(n, e)), i);
          }
          if (((i = !0), r))
            for (var s = r.length - 1; 0 <= s; s--) {
              var a = (t.g = r[s]);
              i = ec(a, n, !0, t) && i;
            }
          if (
            ((i = ec((a = t.g = e), n, !0, t) && i),
            (i = ec(a, n, !1, t) && i),
            r)
          )
            for (s = 0; s < r.length; s++)
              i = ec((a = t.g = r[s]), n, !1, t) && i;
        }
        function ec(e, t, r, n) {
          if (!(t = e.i.g[String(t)])) return !0;
          t = t.concat();
          for (var i = !0, s = 0; s < t.length; ++s) {
            var a = t[s];
            if (a && !a.da && a.capture == r) {
              var o = a.listener,
                l = a.ha || a.src;
              a.fa && X(e.i, a), (i = !1 !== o.call(l, n) && i);
            }
          }
          return i && !n.defaultPrevented;
        }
        function eh(e, t, r) {
          if ("function" == typeof e) r && (e = b(e, r));
          else if (e && "function" == typeof e.handleEvent)
            e = b(e.handleEvent, e);
          else throw Error("Invalid listener argument");
          return 0x7fffffff < Number(t) ? -1 : p.setTimeout(e, t || 0);
        }
        S(el, U),
          (el.prototype[K] = !0),
          (el.prototype.removeEventListener = function (e, t, r, n) {
            !(function e(t, r, n, i, s) {
              if (Array.isArray(r))
                for (var a = 0; a < r.length; a++) e(t, r[a], n, i, s);
              else
                ((i = m(i) ? !!i.capture : !!i), (n = eo(n)), t && t[K])
                  ? ((t = t.i),
                    (r = String(r).toString()) in t.g &&
                      -1 < (n = Y((a = t.g[r]), n, i, s)) &&
                      (W(a[n]),
                      Array.prototype.splice.call(a, n, 1),
                      0 == a.length && (delete t.g[r], t.h--)))
                  : t &&
                    (t = es(t)) &&
                    ((r = t.g[r.toString()]),
                    (t = -1),
                    r && (t = Y(r, n, i, s)),
                    (n = -1 < t ? r[t] : null) && er(n));
            })(this, e, t, r, n);
          }),
          (el.prototype.N = function () {
            if ((el.aa.N.call(this), this.i)) {
              var e,
                t = this.i;
              for (e in t.g) {
                for (var r = t.g[e], n = 0; n < r.length; n++) W(r[n]);
                delete t.g[e], t.h--;
              }
            }
            this.F = null;
          }),
          (el.prototype.K = function (e, t, r, n) {
            return this.i.add(String(e), t, !1, r, n);
          }),
          (el.prototype.L = function (e, t, r, n) {
            return this.i.add(String(e), t, !0, r, n);
          });
        class ef extends U {
          constructor(e, t) {
            super(),
              (this.m = e),
              (this.l = t),
              (this.h = null),
              (this.i = !1),
              (this.g = null);
          }
          j(e) {
            (this.h = arguments),
              this.g
                ? (this.i = !0)
                : (function e(t) {
                    t.g = eh(() => {
                      (t.g = null), t.i && ((t.i = !1), e(t));
                    }, t.l);
                    let r = t.h;
                    (t.h = null), t.m.apply(null, r);
                  })(this);
          }
          N() {
            super.N(),
              this.g &&
                (p.clearTimeout(this.g),
                (this.g = null),
                (this.i = !1),
                (this.h = null));
          }
        }
        function ed(e) {
          U.call(this), (this.h = e), (this.g = {});
        }
        S(ed, U);
        var ep = [];
        function eg(e) {
          D(
            e.g,
            function (e, t) {
              this.g.hasOwnProperty(t) && er(e);
            },
            e
          ),
            (e.g = {});
        }
        (ed.prototype.N = function () {
          ed.aa.N.call(this), eg(this);
        }),
          (ed.prototype.handleEvent = function () {
            throw Error("EventHandler.handleEvent not implemented");
          });
        var em = p.JSON.stringify,
          ey = p.JSON.parse,
          ev = class {
            stringify(e) {
              return p.JSON.stringify(e, void 0);
            }
            parse(e) {
              return p.JSON.parse(e, void 0);
            }
          };
        function eb() {}
        function ew(e) {
          return e.h || (e.h = e.i());
        }
        function eS() {}
        eb.prototype.h = null;
        var eE = { OPEN: "a", kb: "b", Ja: "c", wb: "d" };
        function ex() {
          j.call(this, "d");
        }
        function eT() {
          j.call(this, "c");
        }
        S(ex, j), S(eT, j);
        var eC = {},
          e_ = null;
        function ek() {
          return (e_ = e_ || new el());
        }
        function eA(e) {
          j.call(this, eC.La, e);
        }
        function eI(e) {
          let t = ek();
          eu(t, new eA(t));
        }
        function eD(e, t) {
          j.call(this, eC.STAT_EVENT, e), (this.stat = t);
        }
        function eN(e) {
          let t = ek();
          eu(t, new eD(t, e));
        }
        function eR(e, t) {
          j.call(this, eC.Ma, e), (this.size = t);
        }
        function eP(e, t) {
          if ("function" != typeof e)
            throw Error("Fn must not be null and must be a function");
          return p.setTimeout(function () {
            e();
          }, t);
        }
        function eO() {
          this.g = !0;
        }
        function eL(e, t, r, n) {
          e.info(function () {
            return (
              "XMLHTTP TEXT (" +
              t +
              "): " +
              (function (e, t) {
                if (!e.g) return t;
                if (!t) return null;
                try {
                  var r = JSON.parse(t);
                  if (r) {
                    for (e = 0; e < r.length; e++)
                      if (Array.isArray(r[e])) {
                        var n = r[e];
                        if (!(2 > n.length)) {
                          var i = n[1];
                          if (Array.isArray(i) && !(1 > i.length)) {
                            var s = i[0];
                            if ("noop" != s && "stop" != s && "close" != s)
                              for (var a = 1; a < i.length; a++) i[a] = "";
                          }
                        }
                      }
                  }
                  return em(r);
                } catch (e) {
                  return t;
                }
              })(e, r) +
              (n ? " " + n : "")
            );
          });
        }
        (eC.La = "serverreachability"),
          S(eA, j),
          (eC.STAT_EVENT = "statevent"),
          S(eD, j),
          (eC.Ma = "timingevent"),
          S(eR, j),
          (eO.prototype.xa = function () {
            this.g = !1;
          }),
          (eO.prototype.info = function () {});
        var eM = {
            NO_ERROR: 0,
            gb: 1,
            tb: 2,
            sb: 3,
            nb: 4,
            rb: 5,
            ub: 6,
            Ia: 7,
            TIMEOUT: 8,
            xb: 9,
          },
          e$ = {
            lb: "complete",
            Hb: "success",
            Ja: "error",
            Ia: "abort",
            zb: "ready",
            Ab: "readystatechange",
            TIMEOUT: "timeout",
            vb: "incrementaldata",
            yb: "progress",
            ob: "downloadprogress",
            Pb: "uploadprogress",
          };
        function eV() {}
        function eF(e, t, r, n) {
          (this.j = e),
            (this.i = t),
            (this.l = r),
            (this.R = n || 1),
            (this.U = new ed(this)),
            (this.I = 45e3),
            (this.H = null),
            (this.o = !1),
            (this.m =
              this.A =
              this.v =
              this.L =
              this.F =
              this.S =
              this.B =
                null),
            (this.D = []),
            (this.g = null),
            (this.C = 0),
            (this.s = this.u = null),
            (this.X = -1),
            (this.J = !1),
            (this.O = 0),
            (this.M = null),
            (this.W = this.K = this.T = this.P = !1),
            (this.h = new eB());
        }
        function eB() {
          (this.i = null), (this.g = ""), (this.h = !1);
        }
        S(eV, eb),
          (eV.prototype.g = function () {
            return new XMLHttpRequest();
          }),
          (eV.prototype.i = function () {
            return {};
          }),
          (t = new eV());
        var eU = {},
          ej = {};
        function ez(e, t, r) {
          (e.L = 1), (e.v = ti(e9(t))), (e.m = r), (e.P = !0), eq(e, null);
        }
        function eq(e, t) {
          (e.F = Date.now()), eK(e), (e.A = e9(e.v));
          var r = e.A,
            n = e.R;
          Array.isArray(n) || (n = [String(n)]),
            ty(r.i, "t", n),
            (e.C = 0),
            (r = e.j.J),
            (e.h = new eB()),
            (e.g = t5(e.j, r ? t : null, !e.m)),
            0 < e.O && (e.M = new ef(b(e.Y, e, e.g), e.O)),
            (t = e.U),
            (r = e.g),
            (n = e.ca);
          var i = "readystatechange";
          Array.isArray(i) || (i && (ep[0] = i.toString()), (i = ep));
          for (var s = 0; s < i.length; s++) {
            var a = (function e(t, r, n, i, s) {
              if (i && i.once)
                return (function e(t, r, n, i, s) {
                  if (Array.isArray(r)) {
                    for (var a = 0; a < r.length; a++) e(t, r[a], n, i, s);
                    return null;
                  }
                  return (
                    (n = eo(n)),
                    t && t[K]
                      ? t.L(r, n, m(i) ? !!i.capture : !!i, s)
                      : et(t, r, n, !0, i, s)
                  );
                })(t, r, n, i, s);
              if (Array.isArray(r)) {
                for (var a = 0; a < r.length; a++) e(t, r[a], n, i, s);
                return null;
              }
              return (
                (n = eo(n)),
                t && t[K]
                  ? t.K(r, n, m(i) ? !!i.capture : !!i, s)
                  : et(t, r, n, !1, i, s)
              );
            })(r, i[s], n || t.handleEvent, !1, t.h || t);
            if (!a) break;
            t.g[a.key] = a;
          }
          (t = e.H ? N(e.H) : {}),
            e.m
              ? (e.u || (e.u = "POST"),
                (t["Content-Type"] = "application/x-www-form-urlencoded"),
                e.g.ea(e.A, e.u, e.m, t))
              : ((e.u = "GET"), e.g.ea(e.A, e.u, null, t)),
            eI(),
            (function (e, t, r, n, i, s) {
              e.info(function () {
                if (e.g) {
                  if (s)
                    for (
                      var a = "", o = s.split("&"), l = 0;
                      l < o.length;
                      l++
                    ) {
                      var u = o[l].split("=");
                      if (1 < u.length) {
                        var c = u[0];
                        u = u[1];
                        var h = c.split("_");
                        a =
                          2 <= h.length && "type" == h[1]
                            ? a + (c + "=") + u + "&"
                            : a + (c + "=redacted&");
                      }
                    }
                  else a = null;
                } else a = s;
                return (
                  "XMLHTTP REQ (" +
                  n +
                  ") [attempt " +
                  i +
                  "]: " +
                  t +
                  "\n" +
                  r +
                  "\n" +
                  a
                );
              });
            })(e.i, e.u, e.A, e.l, e.R, e.m);
        }
        function eH(e) {
          return !!e.g && "GET" == e.u && 2 != e.L && e.j.Ca;
        }
        function eK(e) {
          (e.S = Date.now() + e.I), eZ(e, e.I);
        }
        function eZ(e, t) {
          if (null != e.B) throw Error("WatchDog timer not null");
          e.B = eP(b(e.ba, e), t);
        }
        function eG(e) {
          e.B && (p.clearTimeout(e.B), (e.B = null));
        }
        function eW(e) {
          0 == e.j.G || e.J || tY(e.j, e);
        }
        function eQ(e) {
          eG(e);
          var t = e.M;
          t && "function" == typeof t.ma && t.ma(),
            (e.M = null),
            eg(e.U),
            e.g && ((t = e.g), (e.g = null), t.abort(), t.ma());
        }
        function eX(e, t) {
          try {
            var r = e.j;
            if (0 != r.G && (r.g == e || e2(r.h, e))) {
              if (!e.K && e2(r.h, e) && 3 == r.G) {
                try {
                  var n = r.Da.g.parse(t);
                } catch (e) {
                  n = null;
                }
                if (Array.isArray(n) && 3 == n.length) {
                  var i = n;
                  if (0 == i[0]) {
                    t: if (!r.u) {
                      if (r.g) {
                        if (r.g.F + 3e3 < e.F) tX(r), tU(r);
                        else break t;
                      }
                      tG(r), eN(18);
                    }
                  } else
                    (r.za = i[1]),
                      0 < r.za - r.T &&
                        37500 > i[2] &&
                        r.F &&
                        0 == r.v &&
                        !r.C &&
                        (r.C = eP(b(r.Za, r), 6e3));
                  if (1 >= e1(r.h) && r.ca) {
                    try {
                      r.ca();
                    } catch (e) {}
                    r.ca = void 0;
                  }
                } else t0(r, 11);
              } else if (((e.K || r.g == e) && tX(r), !_(t)))
                for (i = r.Da.g.parse(t), t = 0; t < i.length; t++) {
                  let o = i[t];
                  if (((r.T = o[0]), (o = o[1]), 2 == r.G)) {
                    if ("c" == o[0]) {
                      (r.K = o[1]), (r.ia = o[2]);
                      let t = o[3];
                      null != t && ((r.la = t), r.j.info("VER=" + r.la));
                      let i = o[4];
                      null != i && ((r.Aa = i), r.j.info("SVER=" + r.Aa));
                      let l = o[5];
                      null != l &&
                        "number" == typeof l &&
                        0 < l &&
                        ((n = 1.5 * l),
                        (r.L = n),
                        r.j.info("backChannelRequestTimeoutMs_=" + n)),
                        (n = r);
                      let u = e.g;
                      if (u) {
                        let e = u.g
                          ? u.g.getResponseHeader("X-Client-Wire-Protocol")
                          : null;
                        if (e) {
                          var s = n.h;
                          s.g ||
                            (-1 == e.indexOf("spdy") &&
                              -1 == e.indexOf("quic") &&
                              -1 == e.indexOf("h2")) ||
                            ((s.j = s.l),
                            (s.g = new Set()),
                            s.h && (e5(s, s.h), (s.h = null)));
                        }
                        if (n.D) {
                          let e = u.g
                            ? u.g.getResponseHeader("X-HTTP-Session-Id")
                            : null;
                          e && ((n.ya = e), tn(n.I, n.D, e));
                        }
                      }
                      if (
                        ((r.G = 3),
                        r.l && r.l.ua(),
                        r.ba &&
                          ((r.R = Date.now() - e.F),
                          r.j.info("Handshake RTT: " + r.R + "ms")),
                        ((n = r).qa = t2(n, n.J ? n.ia : null, n.W)),
                        e.K)
                      ) {
                        e3(n.h, e);
                        var a = n.L;
                        a && (e.I = a), e.B && (eG(e), eK(e)), (n.g = e);
                      } else tZ(n);
                      0 < r.i.length && tz(r);
                    } else ("stop" != o[0] && "close" != o[0]) || t0(r, 7);
                  } else
                    3 == r.G &&
                      ("stop" == o[0] || "close" == o[0]
                        ? "stop" == o[0]
                          ? t0(r, 7)
                          : tB(r)
                        : "noop" != o[0] && r.l && r.l.ta(o),
                      (r.v = 0));
                }
            }
            eI(4);
          } catch (e) {}
        }
        (eF.prototype.ca = function (e) {
          e = e.target;
          let t = this.M;
          t && 3 == tM(e) ? t.j() : this.Y(e);
        }),
          (eF.prototype.Y = function (e) {
            try {
              if (e == this.g)
                t: {
                  let h = tM(this.g);
                  var t = this.g.Ba();
                  let f = this.g.Z();
                  if (
                    !(3 > h) &&
                    (3 != h ||
                      (this.g && (this.h.h || this.g.oa() || t$(this.g))))
                  ) {
                    this.J ||
                      4 != h ||
                      7 == t ||
                      (8 == t || 0 >= f ? eI(3) : eI(2)),
                      eG(this);
                    var r = this.g.Z();
                    this.X = r;
                    r: if (eH(this)) {
                      var n = t$(this.g);
                      e = "";
                      var i = n.length,
                        s = 4 == tM(this.g);
                      if (!this.h.i) {
                        if ("undefined" == typeof TextDecoder) {
                          eQ(this), eW(this);
                          var a = "";
                          break r;
                        }
                        this.h.i = new p.TextDecoder();
                      }
                      for (t = 0; t < i; t++)
                        (this.h.h = !0),
                          (e += this.h.i.decode(n[t], {
                            stream: !(s && t == i - 1),
                          }));
                      (n.length = 0),
                        (this.h.g += e),
                        (this.C = 0),
                        (a = this.h.g);
                    } else a = this.g.oa();
                    if (
                      ((this.o = 200 == r),
                      (function (e, t, r, n, i, s, a) {
                        e.info(function () {
                          return (
                            "XMLHTTP RESP (" +
                            n +
                            ") [ attempt " +
                            i +
                            "]: " +
                            t +
                            "\n" +
                            r +
                            "\n" +
                            s +
                            " " +
                            a
                          );
                        });
                      })(this.i, this.u, this.A, this.l, this.R, h, r),
                      this.o)
                    ) {
                      if (this.T && !this.K) {
                        r: {
                          if (this.g) {
                            var o,
                              l = this.g;
                            if (
                              (o = l.g
                                ? l.g.getResponseHeader(
                                    "X-HTTP-Initial-Response"
                                  )
                                : null) &&
                              !_(o)
                            ) {
                              var u = o;
                              break r;
                            }
                          }
                          u = null;
                        }
                        if ((r = u))
                          eL(
                            this.i,
                            this.l,
                            r,
                            "Initial handshake response via X-HTTP-Initial-Response"
                          ),
                            (this.K = !0),
                            eX(this, r);
                        else {
                          (this.o = !1),
                            (this.s = 3),
                            eN(12),
                            eQ(this),
                            eW(this);
                          break t;
                        }
                      }
                      if (this.P) {
                        let e;
                        for (r = !0; !this.J && this.C < a.length; )
                          if (
                            (e = (function (e, t) {
                              var r = e.C,
                                n = t.indexOf("\n", r);
                              return -1 == n
                                ? ej
                                : isNaN((r = Number(t.substring(r, n))))
                                ? eU
                                : (n += 1) + r > t.length
                                ? ej
                                : ((t = t.slice(n, n + r)), (e.C = n + r), t);
                            })(this, a)) == ej
                          ) {
                            4 == h && ((this.s = 4), eN(14), (r = !1)),
                              eL(this.i, this.l, null, "[Incomplete Response]");
                            break;
                          } else if (e == eU) {
                            (this.s = 4),
                              eN(15),
                              eL(this.i, this.l, a, "[Invalid Chunk]"),
                              (r = !1);
                            break;
                          } else eL(this.i, this.l, e, null), eX(this, e);
                        if (
                          (eH(this) &&
                            0 != this.C &&
                            ((this.h.g = this.h.g.slice(this.C)), (this.C = 0)),
                          4 != h ||
                            0 != a.length ||
                            this.h.h ||
                            ((this.s = 1), eN(16), (r = !1)),
                          (this.o = this.o && r),
                          r)
                        ) {
                          if (0 < a.length && !this.W) {
                            this.W = !0;
                            var c = this.j;
                            c.g == this &&
                              c.ba &&
                              !c.M &&
                              (c.j.info(
                                "Great, no buffering proxy detected. Bytes received: " +
                                  a.length
                              ),
                              tW(c),
                              (c.M = !0),
                              eN(11));
                          }
                        } else
                          eL(this.i, this.l, a, "[Invalid Chunked Response]"),
                            eQ(this),
                            eW(this);
                      } else eL(this.i, this.l, a, null), eX(this, a);
                      4 == h && eQ(this),
                        this.o &&
                          !this.J &&
                          (4 == h
                            ? tY(this.j, this)
                            : ((this.o = !1), eK(this)));
                    } else
                      (function (e) {
                        let t = {};
                        e = (
                          (e.g && 2 <= tM(e) && e.g.getAllResponseHeaders()) ||
                          ""
                        ).split("\r\n");
                        for (let n = 0; n < e.length; n++) {
                          if (_(e[n])) continue;
                          var r = (function (e) {
                            var t = 1;
                            e = e.split(":");
                            let r = [];
                            for (; 0 < t && e.length; ) r.push(e.shift()), t--;
                            return e.length && r.push(e.join(":")), r;
                          })(e[n]);
                          let i = r[0];
                          if ("string" != typeof (r = r[1])) continue;
                          r = r.trim();
                          let s = t[i] || [];
                          (t[i] = s), s.push(r);
                        }
                        !(function (e, t) {
                          for (let r in e) t.call(void 0, e[r], r, e);
                        })(t, function (e) {
                          return e.join(", ");
                        });
                      })(this.g),
                        400 == r && 0 < a.indexOf("Unknown SID")
                          ? ((this.s = 3), eN(12))
                          : ((this.s = 0), eN(13)),
                        eQ(this),
                        eW(this);
                  }
                }
            } catch (e) {
            } finally {
            }
          }),
          (eF.prototype.cancel = function () {
            (this.J = !0), eQ(this);
          }),
          (eF.prototype.ba = function () {
            this.B = null;
            let e = Date.now();
            0 <= e - this.S
              ? ((function (e, t) {
                  e.info(function () {
                    return "TIMEOUT: " + t;
                  });
                })(this.i, this.A),
                2 != this.L && (eI(), eN(17)),
                eQ(this),
                (this.s = 2),
                eW(this))
              : eZ(this, this.S - e);
          });
        var eY = class {
          constructor(e, t) {
            (this.g = e), (this.map = t);
          }
        };
        function eJ(e) {
          (this.l = e || 10),
            (e = p.PerformanceNavigationTiming
              ? 0 < (e = p.performance.getEntriesByType("navigation")).length &&
                ("hq" == e[0].nextHopProtocol || "h2" == e[0].nextHopProtocol)
              : !!(
                  p.chrome &&
                  p.chrome.loadTimes &&
                  p.chrome.loadTimes() &&
                  p.chrome.loadTimes().wasFetchedViaSpdy
                )),
            (this.j = e ? this.l : 1),
            (this.g = null),
            1 < this.j && (this.g = new Set()),
            (this.h = null),
            (this.i = []);
        }
        function e0(e) {
          return !!e.h || (!!e.g && e.g.size >= e.j);
        }
        function e1(e) {
          return e.h ? 1 : e.g ? e.g.size : 0;
        }
        function e2(e, t) {
          return e.h ? e.h == t : !!e.g && e.g.has(t);
        }
        function e5(e, t) {
          e.g ? e.g.add(t) : (e.h = t);
        }
        function e3(e, t) {
          e.h && e.h == t ? (e.h = null) : e.g && e.g.has(t) && e.g.delete(t);
        }
        function e6(e) {
          if (null != e.h) return e.i.concat(e.h.D);
          if (null != e.g && 0 !== e.g.size) {
            let t = e.i;
            for (let r of e.g.values()) t = t.concat(r.D);
            return t;
          }
          return E(e.i);
        }
        function e4(e, t) {
          if (e.forEach && "function" == typeof e.forEach) e.forEach(t, void 0);
          else if (g(e) || "string" == typeof e)
            Array.prototype.forEach.call(e, t, void 0);
          else
            for (
              var r = (function (e) {
                  if (e.na && "function" == typeof e.na) return e.na();
                  if (!e.V || "function" != typeof e.V) {
                    if ("undefined" != typeof Map && e instanceof Map)
                      return Array.from(e.keys());
                    if (!("undefined" != typeof Set && e instanceof Set)) {
                      if (g(e) || "string" == typeof e) {
                        var t = [];
                        e = e.length;
                        for (var r = 0; r < e; r++) t.push(r);
                        return t;
                      }
                      for (let n in ((t = []), (r = 0), e)) t[r++] = n;
                      return t;
                    }
                  }
                })(e),
                n = (function (e) {
                  if (e.V && "function" == typeof e.V) return e.V();
                  if (
                    ("undefined" != typeof Map && e instanceof Map) ||
                    ("undefined" != typeof Set && e instanceof Set)
                  )
                    return Array.from(e.values());
                  if ("string" == typeof e) return e.split("");
                  if (g(e)) {
                    for (var t = [], r = e.length, n = 0; n < r; n++)
                      t.push(e[n]);
                    return t;
                  }
                  for (n in ((t = []), (r = 0), e)) t[r++] = e[n];
                  return t;
                })(e),
                i = n.length,
                s = 0;
              s < i;
              s++
            )
              t.call(void 0, n[s], r && r[s], e);
        }
        eJ.prototype.cancel = function () {
          if (((this.i = e6(this)), this.h)) this.h.cancel(), (this.h = null);
          else if (this.g && 0 !== this.g.size) {
            for (let e of this.g.values()) e.cancel();
            this.g.clear();
          }
        };
        var e8 = RegExp(
          "^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$"
        );
        function e7(e) {
          if (
            ((this.g = this.o = this.j = ""),
            (this.s = null),
            (this.m = this.l = ""),
            (this.h = !1),
            e instanceof e7)
          ) {
            (this.h = e.h),
              te(this, e.j),
              (this.o = e.o),
              (this.g = e.g),
              tt(this, e.s),
              (this.l = e.l);
            var t = e.i,
              r = new td();
            (r.i = t.i),
              t.g && ((r.g = new Map(t.g)), (r.h = t.h)),
              tr(this, r),
              (this.m = e.m);
          } else
            e && (t = String(e).match(e8))
              ? ((this.h = !1),
                te(this, t[1] || "", !0),
                (this.o = ts(t[2] || "")),
                (this.g = ts(t[3] || "", !0)),
                tt(this, t[4]),
                (this.l = ts(t[5] || "", !0)),
                tr(this, t[6] || "", !0),
                (this.m = ts(t[7] || "")))
              : ((this.h = !1), (this.i = new td(null, this.h)));
        }
        function e9(e) {
          return new e7(e);
        }
        function te(e, t, r) {
          (e.j = r ? ts(t, !0) : t), e.j && (e.j = e.j.replace(/:$/, ""));
        }
        function tt(e, t) {
          if (t) {
            if (isNaN((t = Number(t))) || 0 > t)
              throw Error("Bad port number " + t);
            e.s = t;
          } else e.s = null;
        }
        function tr(e, t, r) {
          var n, i;
          t instanceof td
            ? ((e.i = t),
              (n = e.i),
              (i = e.h) &&
                !n.j &&
                (tp(n),
                (n.i = null),
                n.g.forEach(function (e, t) {
                  var r = t.toLowerCase();
                  t != r && (tg(this, t), ty(this, r, e));
                }, n)),
              (n.j = i))
            : (r || (t = ta(t, th)), (e.i = new td(t, e.h)));
        }
        function tn(e, t, r) {
          e.i.set(t, r);
        }
        function ti(e) {
          return (
            tn(
              e,
              "zx",
              Math.floor(0x80000000 * Math.random()).toString(36) +
                Math.abs(
                  Math.floor(0x80000000 * Math.random()) ^ Date.now()
                ).toString(36)
            ),
            e
          );
        }
        function ts(e, t) {
          return e
            ? t
              ? decodeURI(e.replace(/%25/g, "%2525"))
              : decodeURIComponent(e)
            : "";
        }
        function ta(e, t, r) {
          return "string" == typeof e
            ? ((e = encodeURI(e).replace(t, to)),
              r && (e = e.replace(/%25([0-9a-fA-F]{2})/g, "%$1")),
              e)
            : null;
        }
        function to(e) {
          return (
            "%" +
            (((e = e.charCodeAt(0)) >> 4) & 15).toString(16) +
            (15 & e).toString(16)
          );
        }
        e7.prototype.toString = function () {
          var e = [],
            t = this.j;
          t && e.push(ta(t, tl, !0), ":");
          var r = this.g;
          return (
            (r || "file" == t) &&
              (e.push("//"),
              (t = this.o) && e.push(ta(t, tl, !0), "@"),
              e.push(
                encodeURIComponent(String(r)).replace(
                  /%25([0-9a-fA-F]{2})/g,
                  "%$1"
                )
              ),
              null != (r = this.s) && e.push(":", String(r))),
            (r = this.l) &&
              (this.g && "/" != r.charAt(0) && e.push("/"),
              e.push(ta(r, "/" == r.charAt(0) ? tc : tu, !0))),
            (r = this.i.toString()) && e.push("?", r),
            (r = this.m) && e.push("#", ta(r, tf)),
            e.join("")
          );
        };
        var tl = /[#\/\?@]/g,
          tu = /[#\?:]/g,
          tc = /[#\?]/g,
          th = /[#\?@]/g,
          tf = /#/g;
        function td(e, t) {
          (this.h = this.g = null), (this.i = e || null), (this.j = !!t);
        }
        function tp(e) {
          e.g ||
            ((e.g = new Map()),
            (e.h = 0),
            e.i &&
              (function (e, t) {
                if (e) {
                  e = e.split("&");
                  for (var r = 0; r < e.length; r++) {
                    var n = e[r].indexOf("="),
                      i = null;
                    if (0 <= n) {
                      var s = e[r].substring(0, n);
                      i = e[r].substring(n + 1);
                    } else s = e[r];
                    t(s, i ? decodeURIComponent(i.replace(/\+/g, " ")) : "");
                  }
                }
              })(e.i, function (t, r) {
                e.add(decodeURIComponent(t.replace(/\+/g, " ")), r);
              }));
        }
        function tg(e, t) {
          tp(e),
            (t = tv(e, t)),
            e.g.has(t) &&
              ((e.i = null), (e.h -= e.g.get(t).length), e.g.delete(t));
        }
        function tm(e, t) {
          return tp(e), (t = tv(e, t)), e.g.has(t);
        }
        function ty(e, t, r) {
          tg(e, t),
            0 < r.length &&
              ((e.i = null), e.g.set(tv(e, t), E(r)), (e.h += r.length));
        }
        function tv(e, t) {
          return (t = String(t)), e.j && (t = t.toLowerCase()), t;
        }
        function tb(e, t, r, n, i) {
          try {
            i &&
              ((i.onload = null),
              (i.onerror = null),
              (i.onabort = null),
              (i.ontimeout = null)),
              n(r);
          } catch (e) {}
        }
        function tw() {
          this.g = new ev();
        }
        function tS(e) {
          (this.l = e.Ub || null), (this.j = e.eb || !1);
        }
        function tE(e, t) {
          el.call(this),
            (this.D = e),
            (this.o = t),
            (this.m = void 0),
            (this.status = this.readyState = 0),
            (this.responseType =
              this.responseText =
              this.response =
              this.statusText =
                ""),
            (this.onreadystatechange = null),
            (this.u = new Headers()),
            (this.h = null),
            (this.B = "GET"),
            (this.A = ""),
            (this.g = !1),
            (this.v = this.j = this.l = null);
        }
        function tx(e) {
          e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e));
        }
        function tT(e) {
          (e.readyState = 4), (e.l = null), (e.j = null), (e.v = null), tC(e);
        }
        function tC(e) {
          e.onreadystatechange && e.onreadystatechange.call(e);
        }
        function t_(e) {
          let t = "";
          return (
            D(e, function (e, r) {
              (t += r), (t += ":"), (t += e), (t += "\r\n");
            }),
            t
          );
        }
        function tk(e, t, r) {
          t: {
            for (n in r) {
              var n = !1;
              break t;
            }
            n = !0;
          }
          n ||
            ((r = t_(r)),
            "string" == typeof e
              ? null != r && encodeURIComponent(String(r))
              : tn(e, t, r));
        }
        function tA(e) {
          el.call(this),
            (this.headers = new Map()),
            (this.o = e || null),
            (this.h = !1),
            (this.v = this.g = null),
            (this.D = ""),
            (this.m = 0),
            (this.l = ""),
            (this.j = this.B = this.u = this.A = !1),
            (this.I = null),
            (this.H = ""),
            (this.J = !1);
        }
        ((r = td.prototype).add = function (e, t) {
          tp(this), (this.i = null), (e = tv(this, e));
          var r = this.g.get(e);
          return r || this.g.set(e, (r = [])), r.push(t), (this.h += 1), this;
        }),
          (r.forEach = function (e, t) {
            tp(this),
              this.g.forEach(function (r, n) {
                r.forEach(function (r) {
                  e.call(t, r, n, this);
                }, this);
              }, this);
          }),
          (r.na = function () {
            tp(this);
            let e = Array.from(this.g.values()),
              t = Array.from(this.g.keys()),
              r = [];
            for (let n = 0; n < t.length; n++) {
              let i = e[n];
              for (let e = 0; e < i.length; e++) r.push(t[n]);
            }
            return r;
          }),
          (r.V = function (e) {
            tp(this);
            let t = [];
            if ("string" == typeof e)
              tm(this, e) && (t = t.concat(this.g.get(tv(this, e))));
            else {
              e = Array.from(this.g.values());
              for (let r = 0; r < e.length; r++) t = t.concat(e[r]);
            }
            return t;
          }),
          (r.set = function (e, t) {
            return (
              tp(this),
              (this.i = null),
              tm(this, (e = tv(this, e))) && (this.h -= this.g.get(e).length),
              this.g.set(e, [t]),
              (this.h += 1),
              this
            );
          }),
          (r.get = function (e, t) {
            return e && 0 < (e = this.V(e)).length ? String(e[0]) : t;
          }),
          (r.toString = function () {
            if (this.i) return this.i;
            if (!this.g) return "";
            let e = [],
              t = Array.from(this.g.keys());
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              let s = encodeURIComponent(String(n)),
                a = this.V(n);
              for (n = 0; n < a.length; n++) {
                var i = s;
                "" !== a[n] && (i += "=" + encodeURIComponent(String(a[n]))),
                  e.push(i);
              }
            }
            return (this.i = e.join("&"));
          }),
          S(tS, eb),
          (tS.prototype.g = function () {
            return new tE(this.l, this.j);
          }),
          (tS.prototype.i =
            ((e = {}),
            function () {
              return e;
            })),
          S(tE, el),
          ((r = tE.prototype).open = function (e, t) {
            if (0 != this.readyState)
              throw (this.abort(), Error("Error reopening a connection"));
            (this.B = e), (this.A = t), (this.readyState = 1), tC(this);
          }),
          (r.send = function (e) {
            if (1 != this.readyState)
              throw (this.abort(), Error("need to call open() first. "));
            this.g = !0;
            let t = {
              headers: this.u,
              method: this.B,
              credentials: this.m,
              cache: void 0,
            };
            e && (t.body = e),
              (this.D || p)
                .fetch(new Request(this.A, t))
                .then(this.Sa.bind(this), this.ga.bind(this));
          }),
          (r.abort = function () {
            (this.response = this.responseText = ""),
              (this.u = new Headers()),
              (this.status = 0),
              this.j && this.j.cancel("Request was aborted.").catch(() => {}),
              1 <= this.readyState &&
                this.g &&
                4 != this.readyState &&
                ((this.g = !1), tT(this)),
              (this.readyState = 0);
          }),
          (r.Sa = function (e) {
            if (
              this.g &&
              ((this.l = e),
              this.h ||
                ((this.status = this.l.status),
                (this.statusText = this.l.statusText),
                (this.h = e.headers),
                (this.readyState = 2),
                tC(this)),
              this.g && ((this.readyState = 3), tC(this), this.g))
            ) {
              if ("arraybuffer" === this.responseType)
                e.arrayBuffer().then(this.Qa.bind(this), this.ga.bind(this));
              else if (void 0 !== p.ReadableStream && "body" in e) {
                if (((this.j = e.body.getReader()), this.o)) {
                  if (this.responseType)
                    throw Error(
                      'responseType must be empty for "streamBinaryChunks" mode responses.'
                    );
                  this.response = [];
                } else
                  (this.response = this.responseText = ""),
                    (this.v = new TextDecoder());
                tx(this);
              } else e.text().then(this.Ra.bind(this), this.ga.bind(this));
            }
          }),
          (r.Pa = function (e) {
            if (this.g) {
              if (this.o && e.value) this.response.push(e.value);
              else if (!this.o) {
                var t = e.value ? e.value : new Uint8Array(0);
                (t = this.v.decode(t, { stream: !e.done })) &&
                  (this.response = this.responseText += t);
              }
              e.done ? tT(this) : tC(this), 3 == this.readyState && tx(this);
            }
          }),
          (r.Ra = function (e) {
            this.g && ((this.response = this.responseText = e), tT(this));
          }),
          (r.Qa = function (e) {
            this.g && ((this.response = e), tT(this));
          }),
          (r.ga = function () {
            this.g && tT(this);
          }),
          (r.setRequestHeader = function (e, t) {
            this.u.append(e, t);
          }),
          (r.getResponseHeader = function (e) {
            return (this.h && this.h.get(e.toLowerCase())) || "";
          }),
          (r.getAllResponseHeaders = function () {
            if (!this.h) return "";
            let e = [],
              t = this.h.entries();
            for (var r = t.next(); !r.done; )
              e.push((r = r.value)[0] + ": " + r[1]), (r = t.next());
            return e.join("\r\n");
          }),
          Object.defineProperty(tE.prototype, "withCredentials", {
            get: function () {
              return "include" === this.m;
            },
            set: function (e) {
              this.m = e ? "include" : "same-origin";
            },
          }),
          S(tA, el);
        var tI = /^https?$/i,
          tD = ["POST", "PUT"];
        function tN(e, t) {
          (e.h = !1),
            e.g && ((e.j = !0), e.g.abort(), (e.j = !1)),
            (e.l = t),
            (e.m = 5),
            tR(e),
            tO(e);
        }
        function tR(e) {
          e.A || ((e.A = !0), eu(e, "complete"), eu(e, "error"));
        }
        function tP(e) {
          if (e.h && void 0 !== d && (!e.v[1] || 4 != tM(e) || 2 != e.Z())) {
            if (e.u && 4 == tM(e)) eh(e.Ea, 0, e);
            else if ((eu(e, "readystatechange"), 4 == tM(e))) {
              e.h = !1;
              try {
                let a = e.Z();
                switch (a) {
                  case 200:
                  case 201:
                  case 202:
                  case 204:
                  case 206:
                  case 304:
                  case 1223:
                    var t,
                      r,
                      n = !0;
                    break;
                  default:
                    n = !1;
                }
                if (!(t = n)) {
                  if ((r = 0 === a)) {
                    var i = String(e.D).match(e8)[1] || null;
                    !i &&
                      p.self &&
                      p.self.location &&
                      (i = p.self.location.protocol.slice(0, -1)),
                      (r = !tI.test(i ? i.toLowerCase() : ""));
                  }
                  t = r;
                }
                if (t) eu(e, "complete"), eu(e, "success");
                else {
                  e.m = 6;
                  try {
                    var s = 2 < tM(e) ? e.g.statusText : "";
                  } catch (e) {
                    s = "";
                  }
                  (e.l = s + " [" + e.Z() + "]"), tR(e);
                }
              } finally {
                tO(e);
              }
            }
          }
        }
        function tO(e, t) {
          if (e.g) {
            tL(e);
            let r = e.g,
              n = e.v[0] ? () => {} : null;
            (e.g = null), (e.v = null), t || eu(e, "ready");
            try {
              r.onreadystatechange = n;
            } catch (e) {}
          }
        }
        function tL(e) {
          e.I && (p.clearTimeout(e.I), (e.I = null));
        }
        function tM(e) {
          return e.g ? e.g.readyState : 0;
        }
        function t$(e) {
          try {
            if (!e.g) return null;
            if ("response" in e.g) return e.g.response;
            switch (e.H) {
              case "":
              case "text":
                return e.g.responseText;
              case "arraybuffer":
                if ("mozResponseArrayBuffer" in e.g)
                  return e.g.mozResponseArrayBuffer;
            }
            return null;
          } catch (e) {
            return null;
          }
        }
        function tV(e, t, r) {
          return (
            (r && r.internalChannelParams && r.internalChannelParams[e]) || t
          );
        }
        function tF(e) {
          (this.Aa = 0),
            (this.i = []),
            (this.j = new eO()),
            (this.ia =
              this.qa =
              this.I =
              this.W =
              this.g =
              this.ya =
              this.D =
              this.H =
              this.m =
              this.S =
              this.o =
                null),
            (this.Ya = this.U = 0),
            (this.Va = tV("failFast", !1, e)),
            (this.F = this.C = this.u = this.s = this.l = null),
            (this.X = !0),
            (this.za = this.T = -1),
            (this.Y = this.v = this.B = 0),
            (this.Ta = tV("baseRetryDelayMs", 5e3, e)),
            (this.cb = tV("retryDelaySeedMs", 1e4, e)),
            (this.Wa = tV("forwardChannelMaxRetries", 2, e)),
            (this.wa = tV("forwardChannelRequestTimeoutMs", 2e4, e)),
            (this.pa = (e && e.xmlHttpFactory) || void 0),
            (this.Xa = (e && e.Tb) || void 0),
            (this.Ca = (e && e.useFetchStreams) || !1),
            (this.L = void 0),
            (this.J = (e && e.supportsCrossDomainXhr) || !1),
            (this.K = ""),
            (this.h = new eJ(e && e.concurrentRequestLimit)),
            (this.Da = new tw()),
            (this.P = (e && e.fastHandshake) || !1),
            (this.O = (e && e.encodeInitMessageHeaders) || !1),
            this.P && this.O && (this.O = !1),
            (this.Ua = (e && e.Rb) || !1),
            e && e.xa && this.j.xa(),
            e && e.forceLongPolling && (this.X = !1),
            (this.ba =
              (!this.P && this.X && e && e.detectBufferingProxy) || !1),
            (this.ja = void 0),
            e &&
              e.longPollingTimeout &&
              0 < e.longPollingTimeout &&
              (this.ja = e.longPollingTimeout),
            (this.ca = void 0),
            (this.R = 0),
            (this.M = !1),
            (this.ka = this.A = null);
        }
        function tB(e) {
          if ((tj(e), 3 == e.G)) {
            var t = e.U++,
              r = e9(e.I);
            if (
              (tn(r, "SID", e.K),
              tn(r, "RID", t),
              tn(r, "TYPE", "terminate"),
              tH(e, r),
              ((t = new eF(e, e.j, t)).L = 2),
              (t.v = ti(e9(r))),
              (r = !1),
              p.navigator && p.navigator.sendBeacon)
            )
              try {
                r = p.navigator.sendBeacon(t.v.toString(), "");
              } catch (e) {}
            !r && p.Image && ((new Image().src = t.v), (r = !0)),
              r || ((t.g = t5(t.j, null)), t.g.ea(t.v)),
              (t.F = Date.now()),
              eK(t);
          }
          t1(e);
        }
        function tU(e) {
          e.g && (tW(e), e.g.cancel(), (e.g = null));
        }
        function tj(e) {
          tU(e),
            e.u && (p.clearTimeout(e.u), (e.u = null)),
            tX(e),
            e.h.cancel(),
            e.s &&
              ("number" == typeof e.s && p.clearTimeout(e.s), (e.s = null));
        }
        function tz(e) {
          if (!e0(e.h) && !e.s) {
            e.s = !0;
            var t = e.Ga;
            M || F(), $ || (M(), ($ = !0)), V.add(t, e), (e.B = 0);
          }
        }
        function tq(e, t) {
          var r;
          r = t ? t.l : e.U++;
          let n = e9(e.I);
          tn(n, "SID", e.K),
            tn(n, "RID", r),
            tn(n, "AID", e.T),
            tH(e, n),
            e.m && e.o && tk(n, e.m, e.o),
            (r = new eF(e, e.j, r, e.B + 1)),
            null === e.m && (r.H = e.o),
            t && (e.i = t.D.concat(e.i)),
            (t = tK(e, r, 1e3)),
            (r.I =
              Math.round(0.5 * e.wa) + Math.round(0.5 * e.wa * Math.random())),
            e5(e.h, r),
            ez(r, n, t);
        }
        function tH(e, t) {
          e.H &&
            D(e.H, function (e, r) {
              tn(t, r, e);
            }),
            e.l &&
              e4({}, function (e, r) {
                tn(t, r, e);
              });
        }
        function tK(e, t, r) {
          r = Math.min(e.i.length, r);
          var n = e.l ? b(e.l.Na, e.l, e) : null;
          t: {
            var i = e.i;
            let t = -1;
            for (;;) {
              let e = ["count=" + r];
              -1 == t
                ? 0 < r
                  ? ((t = i[0].g), e.push("ofs=" + t))
                  : (t = 0)
                : e.push("ofs=" + t);
              let s = !0;
              for (let a = 0; a < r; a++) {
                let r = i[a].g,
                  o = i[a].map;
                if (0 > (r -= t)) (t = Math.max(0, i[a].g - 100)), (s = !1);
                else
                  try {
                    !(function (e, t, r) {
                      let n = r || "";
                      try {
                        e4(e, function (e, r) {
                          let i = e;
                          m(e) && (i = em(e)),
                            t.push(n + r + "=" + encodeURIComponent(i));
                        });
                      } catch (e) {
                        throw (
                          (t.push(n + "type=" + encodeURIComponent("_badmap")),
                          e)
                        );
                      }
                    })(o, e, "req" + r + "_");
                  } catch (e) {
                    n && n(o);
                  }
              }
              if (s) {
                n = e.join("&");
                break t;
              }
            }
          }
          return (e = e.i.splice(0, r)), (t.D = e), n;
        }
        function tZ(e) {
          if (!e.g && !e.u) {
            e.Y = 1;
            var t = e.Fa;
            M || F(), $ || (M(), ($ = !0)), V.add(t, e), (e.v = 0);
          }
        }
        function tG(e) {
          return (
            !e.g &&
            !e.u &&
            !(3 <= e.v) &&
            (e.Y++, (e.u = eP(b(e.Fa, e), tJ(e, e.v))), e.v++, !0)
          );
        }
        function tW(e) {
          null != e.A && (p.clearTimeout(e.A), (e.A = null));
        }
        function tQ(e) {
          (e.g = new eF(e, e.j, "rpc", e.Y)),
            null === e.m && (e.g.H = e.o),
            (e.g.O = 0);
          var t = e9(e.qa);
          tn(t, "RID", "rpc"),
            tn(t, "SID", e.K),
            tn(t, "AID", e.T),
            tn(t, "CI", e.F ? "0" : "1"),
            !e.F && e.ja && tn(t, "TO", e.ja),
            tn(t, "TYPE", "xmlhttp"),
            tH(e, t),
            e.m && e.o && tk(t, e.m, e.o),
            e.L && (e.g.I = e.L);
          var r = e.g;
          (e = e.ia),
            (r.L = 1),
            (r.v = ti(e9(t))),
            (r.m = null),
            (r.P = !0),
            eq(r, e);
        }
        function tX(e) {
          null != e.C && (p.clearTimeout(e.C), (e.C = null));
        }
        function tY(e, t) {
          var r = null;
          if (e.g == t) {
            tX(e), tW(e), (e.g = null);
            var n = 2;
          } else {
            if (!e2(e.h, t)) return;
            (r = t.D), e3(e.h, t), (n = 1);
          }
          if (0 != e.G) {
            if (t.o) {
              if (1 == n) {
                (r = t.m ? t.m.length : 0), (t = Date.now() - t.F);
                var i,
                  s = e.B;
                eu((n = ek()), new eR(n, r)), tz(e);
              } else tZ(e);
            } else if (
              3 == (s = t.s) ||
              (0 == s && 0 < t.X) ||
              !(
                (1 == n &&
                  ((i = t),
                  !(e1(e.h) >= e.h.j - +!!e.s) &&
                    (e.s
                      ? ((e.i = i.D.concat(e.i)), !0)
                      : 1 != e.G &&
                        2 != e.G &&
                        !(e.B >= (e.Va ? 0 : e.Wa)) &&
                        ((e.s = eP(b(e.Ga, e, i), tJ(e, e.B))), e.B++, !0)))) ||
                (2 == n && tG(e))
              )
            )
              switch ((r && 0 < r.length && ((t = e.h).i = t.i.concat(r)), s)) {
                case 1:
                  t0(e, 5);
                  break;
                case 4:
                  t0(e, 10);
                  break;
                case 3:
                  t0(e, 6);
                  break;
                default:
                  t0(e, 2);
              }
          }
        }
        function tJ(e, t) {
          let r = e.Ta + Math.floor(Math.random() * e.cb);
          return e.isActive() || (r *= 2), r * t;
        }
        function t0(e, t) {
          if ((e.j.info("Error code " + t), 2 == t)) {
            var r = b(e.fb, e),
              n = e.Xa;
            let t = !n;
            (n = new e7(n || "//www.google.com/images/cleardot.gif")),
              (p.location && "http" == p.location.protocol) || te(n, "https"),
              ti(n),
              t
                ? (function (e, t) {
                    let r = new eO();
                    if (p.Image) {
                      let n = new Image();
                      (n.onload = w(tb, r, "TestLoadImage: loaded", !0, t, n)),
                        (n.onerror = w(
                          tb,
                          r,
                          "TestLoadImage: error",
                          !1,
                          t,
                          n
                        )),
                        (n.onabort = w(
                          tb,
                          r,
                          "TestLoadImage: abort",
                          !1,
                          t,
                          n
                        )),
                        (n.ontimeout = w(
                          tb,
                          r,
                          "TestLoadImage: timeout",
                          !1,
                          t,
                          n
                        )),
                        p.setTimeout(function () {
                          n.ontimeout && n.ontimeout();
                        }, 1e4),
                        (n.src = e);
                    } else t(!1);
                  })(n.toString(), r)
                : (function (e, t) {
                    let r = new eO(),
                      n = new AbortController(),
                      i = setTimeout(() => {
                        n.abort(), tb(r, "TestPingServer: timeout", !1, t);
                      }, 1e4);
                    fetch(e, { signal: n.signal })
                      .then((e) => {
                        clearTimeout(i),
                          e.ok
                            ? tb(r, "TestPingServer: ok", !0, t)
                            : tb(r, "TestPingServer: server error", !1, t);
                      })
                      .catch(() => {
                        clearTimeout(i), tb(r, "TestPingServer: error", !1, t);
                      });
                  })(n.toString(), r);
          } else eN(2);
          (e.G = 0), e.l && e.l.sa(t), t1(e), tj(e);
        }
        function t1(e) {
          if (((e.G = 0), (e.ka = []), e.l)) {
            let t = e6(e.h);
            (0 != t.length || 0 != e.i.length) &&
              (C(e.ka, t),
              C(e.ka, e.i),
              (e.h.i.length = 0),
              E(e.i),
              (e.i.length = 0)),
              e.l.ra();
          }
        }
        function t2(e, t, r) {
          var n = r instanceof e7 ? e9(r) : new e7(r);
          if ("" != n.g) t && (n.g = t + "." + n.g), tt(n, n.s);
          else {
            var i = p.location;
            (n = i.protocol),
              (t = t ? t + "." + i.hostname : i.hostname),
              (i = +i.port);
            var s = new e7(null);
            n && te(s, n),
              t && (s.g = t),
              i && tt(s, i),
              r && (s.l = r),
              (n = s);
          }
          return (
            (r = e.D),
            (t = e.ya),
            r && t && tn(n, r, t),
            tn(n, "VER", e.la),
            tH(e, n),
            n
          );
        }
        function t5(e, t, r) {
          if (t && !e.J)
            throw Error("Can't create secondary domain capable XhrIo object.");
          return (
            (t = new tA(e.Ca && !e.pa ? new tS({ eb: r }) : e.pa)).Ha(e.J), t
          );
        }
        function t3() {}
        function t6() {}
        function t4(e, t) {
          el.call(this),
            (this.g = new tF(t)),
            (this.l = e),
            (this.h = (t && t.messageUrlParams) || null),
            (e = (t && t.messageHeaders) || null),
            t &&
              t.clientProtocolHeaderRequired &&
              (e
                ? (e["X-Client-Protocol"] = "webchannel")
                : (e = { "X-Client-Protocol": "webchannel" })),
            (this.g.o = e),
            (e = (t && t.initMessageHeaders) || null),
            t &&
              t.messageContentType &&
              (e
                ? (e["X-WebChannel-Content-Type"] = t.messageContentType)
                : (e = { "X-WebChannel-Content-Type": t.messageContentType })),
            t &&
              t.va &&
              (e
                ? (e["X-WebChannel-Client-Profile"] = t.va)
                : (e = { "X-WebChannel-Client-Profile": t.va })),
            (this.g.S = e),
            (e = t && t.Sb) && !_(e) && (this.g.m = e),
            (this.v = (t && t.supportsCrossDomainXhr) || !1),
            (this.u = (t && t.sendRawJson) || !1),
            (t = t && t.httpSessionIdParam) &&
              !_(t) &&
              ((this.g.D = t),
              null !== (e = this.h) &&
                t in e &&
                t in (e = this.h) &&
                delete e[t]),
            (this.j = new t9(this));
        }
        function t8(e) {
          ex.call(this),
            e.__headers__ &&
              ((this.headers = e.__headers__),
              (this.statusCode = e.__status__),
              delete e.__headers__,
              delete e.__status__);
          var t = e.__sm__;
          if (t) {
            t: {
              for (let r in t) {
                e = r;
                break t;
              }
              e = void 0;
            }
            (this.i = e) &&
              ((e = this.i), (t = null !== t && e in t ? t[e] : void 0)),
              (this.data = t);
          } else this.data = e;
        }
        function t7() {
          eT.call(this), (this.status = 1);
        }
        function t9(e) {
          this.g = e;
        }
        ((r = tA.prototype).Ha = function (e) {
          this.J = e;
        }),
          (r.ea = function (e, r, n, i) {
            if (this.g)
              throw Error(
                "[goog.net.XhrIo] Object is active with another request=" +
                  this.D +
                  "; newUri=" +
                  e
              );
            (r = r ? r.toUpperCase() : "GET"),
              (this.D = e),
              (this.l = ""),
              (this.m = 0),
              (this.A = !1),
              (this.h = !0),
              (this.g = this.o ? this.o.g() : t.g()),
              (this.v = this.o ? ew(this.o) : ew(t)),
              (this.g.onreadystatechange = b(this.Ea, this));
            try {
              (this.B = !0), this.g.open(r, String(e), !0), (this.B = !1);
            } catch (e) {
              tN(this, e);
              return;
            }
            if (((e = n || ""), (n = new Map(this.headers)), i)) {
              if (Object.getPrototypeOf(i) === Object.prototype)
                for (var s in i) n.set(s, i[s]);
              else if (
                "function" == typeof i.keys &&
                "function" == typeof i.get
              )
                for (let e of i.keys()) n.set(e, i.get(e));
              else
                throw Error("Unknown input type for opt_headers: " + String(i));
            }
            for (let [t, a] of ((i = Array.from(n.keys()).find(
              (e) => "content-type" == e.toLowerCase()
            )),
            (s = p.FormData && e instanceof p.FormData),
            !(0 <= Array.prototype.indexOf.call(tD, r, void 0)) ||
              i ||
              s ||
              n.set(
                "Content-Type",
                "application/x-www-form-urlencoded;charset=utf-8"
              ),
            n))
              this.g.setRequestHeader(t, a);
            this.H && (this.g.responseType = this.H),
              "withCredentials" in this.g &&
                this.g.withCredentials !== this.J &&
                (this.g.withCredentials = this.J);
            try {
              tL(this), (this.u = !0), this.g.send(e), (this.u = !1);
            } catch (e) {
              tN(this, e);
            }
          }),
          (r.abort = function (e) {
            this.g &&
              this.h &&
              ((this.h = !1),
              (this.j = !0),
              this.g.abort(),
              (this.j = !1),
              (this.m = e || 7),
              eu(this, "complete"),
              eu(this, "abort"),
              tO(this));
          }),
          (r.N = function () {
            this.g &&
              (this.h &&
                ((this.h = !1), (this.j = !0), this.g.abort(), (this.j = !1)),
              tO(this, !0)),
              tA.aa.N.call(this);
          }),
          (r.Ea = function () {
            this.s || (this.B || this.u || this.j ? tP(this) : this.bb());
          }),
          (r.bb = function () {
            tP(this);
          }),
          (r.isActive = function () {
            return !!this.g;
          }),
          (r.Z = function () {
            try {
              return 2 < tM(this) ? this.g.status : -1;
            } catch (e) {
              return -1;
            }
          }),
          (r.oa = function () {
            try {
              return this.g ? this.g.responseText : "";
            } catch (e) {
              return "";
            }
          }),
          (r.Oa = function (e) {
            if (this.g) {
              var t = this.g.responseText;
              return (
                e && 0 == t.indexOf(e) && (t = t.substring(e.length)), ey(t)
              );
            }
          }),
          (r.Ba = function () {
            return this.m;
          }),
          (r.Ka = function () {
            return "string" == typeof this.l ? this.l : String(this.l);
          }),
          ((r = tF.prototype).la = 8),
          (r.G = 1),
          (r.connect = function (e, t, r, n) {
            eN(0),
              (this.W = e),
              (this.H = t || {}),
              r && void 0 !== n && ((this.H.OSID = r), (this.H.OAID = n)),
              (this.F = this.X),
              (this.I = t2(this, null, this.W)),
              tz(this);
          }),
          (r.Ga = function (e) {
            if (this.s) {
              if (((this.s = null), 1 == this.G)) {
                if (!e) {
                  (this.U = Math.floor(1e5 * Math.random())), (e = this.U++);
                  let i = new eF(this, this.j, e),
                    s = this.o;
                  if (
                    (this.S && (s ? P((s = N(s)), this.S) : (s = this.S)),
                    null !== this.m || this.O || ((i.H = s), (s = null)),
                    this.P)
                  )
                    t: {
                      for (var t = 0, r = 0; r < this.i.length; r++) {
                        r: {
                          var n = this.i[r];
                          if (
                            "__data__" in n.map &&
                            "string" == typeof (n = n.map.__data__)
                          ) {
                            n = n.length;
                            break r;
                          }
                          n = void 0;
                        }
                        if (void 0 === n) break;
                        if (4096 < (t += n)) {
                          t = r;
                          break t;
                        }
                        if (4096 === t || r === this.i.length - 1) {
                          t = r + 1;
                          break t;
                        }
                      }
                      t = 1e3;
                    }
                  else t = 1e3;
                  (t = tK(this, i, t)),
                    tn((r = e9(this.I)), "RID", e),
                    tn(r, "CVER", 22),
                    this.D && tn(r, "X-HTTP-Session-Id", this.D),
                    tH(this, r),
                    s &&
                      (this.O
                        ? (t =
                            "headers=" +
                            encodeURIComponent(String(t_(s))) +
                            "&" +
                            t)
                        : this.m && tk(r, this.m, s)),
                    e5(this.h, i),
                    this.Ua && tn(r, "TYPE", "init"),
                    this.P
                      ? (tn(r, "$req", t),
                        tn(r, "SID", "null"),
                        (i.T = !0),
                        ez(i, r, null))
                      : ez(i, r, t),
                    (this.G = 2);
                }
              } else
                3 == this.G &&
                  (e
                    ? tq(this, e)
                    : 0 == this.i.length || e0(this.h) || tq(this));
            }
          }),
          (r.Fa = function () {
            if (
              ((this.u = null),
              tQ(this),
              this.ba && !(this.M || null == this.g || 0 >= this.R))
            ) {
              var e = 2 * this.R;
              this.j.info("BP detection timer enabled: " + e),
                (this.A = eP(b(this.ab, this), e));
            }
          }),
          (r.ab = function () {
            this.A &&
              ((this.A = null),
              this.j.info("BP detection timeout reached."),
              this.j.info(
                "Buffering proxy detected and switch to long-polling!"
              ),
              (this.F = !1),
              (this.M = !0),
              eN(10),
              tU(this),
              tQ(this));
          }),
          (r.Za = function () {
            null != this.C && ((this.C = null), tU(this), tG(this), eN(19));
          }),
          (r.fb = function (e) {
            e
              ? (this.j.info("Successfully pinged google.com"), eN(2))
              : (this.j.info("Failed to ping google.com"), eN(1));
          }),
          (r.isActive = function () {
            return !!this.l && this.l.isActive(this);
          }),
          ((r = t3.prototype).ua = function () {}),
          (r.ta = function () {}),
          (r.sa = function () {}),
          (r.ra = function () {}),
          (r.isActive = function () {
            return !0;
          }),
          (r.Na = function () {}),
          (t6.prototype.g = function (e, t) {
            return new t4(e, t);
          }),
          S(t4, el),
          (t4.prototype.m = function () {
            (this.g.l = this.j),
              this.v && (this.g.J = !0),
              this.g.connect(this.l, this.h || void 0);
          }),
          (t4.prototype.close = function () {
            tB(this.g);
          }),
          (t4.prototype.o = function (e) {
            var t = this.g;
            if ("string" == typeof e) {
              var r = {};
              (r.__data__ = e), (e = r);
            } else this.u && (((r = {}).__data__ = em(e)), (e = r));
            t.i.push(new eY(t.Ya++, e)), 3 == t.G && tz(t);
          }),
          (t4.prototype.N = function () {
            (this.g.l = null),
              delete this.j,
              tB(this.g),
              delete this.g,
              t4.aa.N.call(this);
          }),
          S(t8, ex),
          S(t7, eT),
          S(t9, t3),
          (t9.prototype.ua = function () {
            eu(this.g, "a");
          }),
          (t9.prototype.ta = function (e) {
            eu(this.g, new t8(e));
          }),
          (t9.prototype.sa = function (e) {
            eu(this.g, new t7());
          }),
          (t9.prototype.ra = function () {
            eu(this.g, "b");
          }),
          (t6.prototype.createWebChannel = t6.prototype.g),
          (t4.prototype.send = t4.prototype.o),
          (t4.prototype.open = t4.prototype.m),
          (t4.prototype.close = t4.prototype.close),
          (f = T.createWebChannelTransport =
            function () {
              return new t6();
            }),
          (h = T.getStatEventTarget =
            function () {
              return ek();
            }),
          (c = T.Event = eC),
          (u = T.Stat =
            {
              mb: 0,
              pb: 1,
              qb: 2,
              Jb: 3,
              Ob: 4,
              Lb: 5,
              Mb: 6,
              Kb: 7,
              Ib: 8,
              Nb: 9,
              PROXY: 10,
              NOPROXY: 11,
              Gb: 12,
              Cb: 13,
              Db: 14,
              Bb: 15,
              Eb: 16,
              Fb: 17,
              ib: 18,
              hb: 19,
              jb: 20,
            }),
          (eM.NO_ERROR = 0),
          (eM.TIMEOUT = 8),
          (eM.HTTP_ERROR = 6),
          (l = T.ErrorCode = eM),
          (e$.COMPLETE = "complete"),
          (o = T.EventType = e$),
          (eS.EventType = eE),
          (eE.OPEN = "a"),
          (eE.CLOSE = "b"),
          (eE.ERROR = "c"),
          (eE.MESSAGE = "d"),
          (el.prototype.listen = el.prototype.K),
          (a = T.WebChannel = eS),
          (T.FetchXmlHttpFactory = tS),
          (tA.prototype.listenOnce = tA.prototype.L),
          (tA.prototype.getLastError = tA.prototype.Ka),
          (tA.prototype.getLastErrorCode = tA.prototype.Ba),
          (tA.prototype.getStatus = tA.prototype.Z),
          (tA.prototype.getResponseJson = tA.prototype.Oa),
          (tA.prototype.getResponseText = tA.prototype.oa),
          (tA.prototype.send = tA.prototype.ea),
          (tA.prototype.setWithCredentials = tA.prototype.Ha),
          (s = T.XhrIo = tA);
      }).apply(
        void 0 !== x
          ? x
          : "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : {}
      );
      let C = "@firebase/firestore",
        _ = "4.7.10";
      class k {
        constructor(e) {
          this.uid = e;
        }
        isAuthenticated() {
          return null != this.uid;
        }
        toKey() {
          return this.isAuthenticated() ? "uid:" + this.uid : "anonymous-user";
        }
        isEqual(e) {
          return e.uid === this.uid;
        }
      }
      (k.UNAUTHENTICATED = new k(null)),
        (k.GOOGLE_CREDENTIALS = new k("google-credentials-uid")),
        (k.FIRST_PARTY = new k("first-party-uid")),
        (k.MOCK_USER = new k("mock-user"));
      let A = "11.5.0",
        I = new b.Yd("@firebase/firestore");
      function D() {
        return I.logLevel;
      }
      function N(e, ...t) {
        if (I.logLevel <= b.in.DEBUG) {
          let r = t.map(O);
          I.debug(`Firestore (${A}): ${e}`, ...r);
        }
      }
      function R(e, ...t) {
        if (I.logLevel <= b.in.ERROR) {
          let r = t.map(O);
          I.error(`Firestore (${A}): ${e}`, ...r);
        }
      }
      function P(e, ...t) {
        if (I.logLevel <= b.in.WARN) {
          let r = t.map(O);
          I.warn(`Firestore (${A}): ${e}`, ...r);
        }
      }
      function O(e) {
        if ("string" == typeof e) return e;
        try {
          return JSON.stringify(e);
        } catch (t) {
          return e;
        }
      }
      function L(e = "Unexpected state") {
        let t = `FIRESTORE (${A}) INTERNAL ASSERTION FAILED: ` + e;
        throw (R(t), Error(t));
      }
      let M = {
        OK: "ok",
        CANCELLED: "cancelled",
        UNKNOWN: "unknown",
        INVALID_ARGUMENT: "invalid-argument",
        DEADLINE_EXCEEDED: "deadline-exceeded",
        NOT_FOUND: "not-found",
        ALREADY_EXISTS: "already-exists",
        PERMISSION_DENIED: "permission-denied",
        UNAUTHENTICATED: "unauthenticated",
        RESOURCE_EXHAUSTED: "resource-exhausted",
        FAILED_PRECONDITION: "failed-precondition",
        ABORTED: "aborted",
        OUT_OF_RANGE: "out-of-range",
        UNIMPLEMENTED: "unimplemented",
        INTERNAL: "internal",
        UNAVAILABLE: "unavailable",
        DATA_LOSS: "data-loss",
      };
      class $ extends w.ZR {
        constructor(e, t) {
          super(e, t),
            (this.code = e),
            (this.message = t),
            (this.toString = () =>
              `${this.name}: [code=${this.code}]: ${this.message}`);
        }
      }
      class V {
        constructor() {
          this.promise = new Promise((e, t) => {
            (this.resolve = e), (this.reject = t);
          });
        }
      }
      class F {
        constructor(e, t) {
          (this.user = t),
            (this.type = "OAuth"),
            (this.headers = new Map()),
            this.headers.set("Authorization", `Bearer ${e}`);
        }
      }
      class B {
        getToken() {
          return Promise.resolve(null);
        }
        invalidateToken() {}
        start(e, t) {
          e.enqueueRetryable(() => t(k.UNAUTHENTICATED));
        }
        shutdown() {}
      }
      class U {
        constructor(e) {
          (this.token = e), (this.changeListener = null);
        }
        getToken() {
          return Promise.resolve(this.token);
        }
        invalidateToken() {}
        start(e, t) {
          (this.changeListener = t),
            e.enqueueRetryable(() => t(this.token.user));
        }
        shutdown() {
          this.changeListener = null;
        }
      }
      class j {
        constructor(e) {
          (this.t = e),
            (this.currentUser = k.UNAUTHENTICATED),
            (this.i = 0),
            (this.forceRefresh = !1),
            (this.auth = null);
        }
        start(e, t) {
          void 0 === this.o || L();
          let r = this.i,
            n = (e) =>
              this.i !== r ? ((r = this.i), t(e)) : Promise.resolve(),
            i = new V();
          this.o = () => {
            this.i++,
              (this.currentUser = this.u()),
              i.resolve(),
              (i = new V()),
              e.enqueueRetryable(() => n(this.currentUser));
          };
          let s = () => {
              let t = i;
              e.enqueueRetryable(async () => {
                await t.promise, await n(this.currentUser);
              });
            },
            a = (e) => {
              N("FirebaseAuthCredentialsProvider", "Auth detected"),
                (this.auth = e),
                this.o && (this.auth.addAuthTokenListener(this.o), s());
            };
          this.t.onInit((e) => a(e)),
            setTimeout(() => {
              if (!this.auth) {
                let e = this.t.getImmediate({ optional: !0 });
                e
                  ? a(e)
                  : (N(
                      "FirebaseAuthCredentialsProvider",
                      "Auth not yet detected"
                    ),
                    i.resolve(),
                    (i = new V()));
              }
            }, 0),
            s();
        }
        getToken() {
          let e = this.i,
            t = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.auth
              ? this.auth
                  .getToken(t)
                  .then((t) =>
                    this.i !== e
                      ? (N(
                          "FirebaseAuthCredentialsProvider",
                          "getToken aborted due to token change."
                        ),
                        this.getToken())
                      : t
                      ? ("string" == typeof t.accessToken || L(),
                        new F(t.accessToken, this.currentUser))
                      : null
                  )
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.auth && this.o && this.auth.removeAuthTokenListener(this.o),
            (this.o = void 0);
        }
        u() {
          let e = this.auth && this.auth.getUid();
          return null === e || "string" == typeof e || L(), new k(e);
        }
      }
      class z {
        constructor(e, t, r) {
          (this.l = e),
            (this.h = t),
            (this.P = r),
            (this.type = "FirstParty"),
            (this.user = k.FIRST_PARTY),
            (this.T = new Map());
        }
        I() {
          return this.P ? this.P() : null;
        }
        get headers() {
          this.T.set("X-Goog-AuthUser", this.l);
          let e = this.I();
          return (
            e && this.T.set("Authorization", e),
            this.h && this.T.set("X-Goog-Iam-Authorization-Token", this.h),
            this.T
          );
        }
      }
      class q {
        constructor(e, t, r) {
          (this.l = e), (this.h = t), (this.P = r);
        }
        getToken() {
          return Promise.resolve(new z(this.l, this.h, this.P));
        }
        start(e, t) {
          e.enqueueRetryable(() => t(k.FIRST_PARTY));
        }
        shutdown() {}
        invalidateToken() {}
      }
      class H {
        constructor(e) {
          (this.value = e),
            (this.type = "AppCheck"),
            (this.headers = new Map()),
            e &&
              e.length > 0 &&
              this.headers.set("x-firebase-appcheck", this.value);
        }
      }
      class K {
        constructor(e, t) {
          (this.A = t),
            (this.forceRefresh = !1),
            (this.appCheck = null),
            (this.R = null),
            (this.V = null),
            (0, y.rh)(e) &&
              e.settings.appCheckToken &&
              (this.V = e.settings.appCheckToken);
        }
        start(e, t) {
          void 0 === this.o || L();
          let r = (e) => {
            null != e.error &&
              N(
                "FirebaseAppCheckTokenProvider",
                `Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`
              );
            let r = e.token !== this.R;
            return (
              (this.R = e.token),
              N(
                "FirebaseAppCheckTokenProvider",
                `Received ${r ? "new" : "existing"} token.`
              ),
              r ? t(e.token) : Promise.resolve()
            );
          };
          this.o = (t) => {
            e.enqueueRetryable(() => r(t));
          };
          let n = (e) => {
            N("FirebaseAppCheckTokenProvider", "AppCheck detected"),
              (this.appCheck = e),
              this.o && this.appCheck.addTokenListener(this.o);
          };
          this.A.onInit((e) => n(e)),
            setTimeout(() => {
              if (!this.appCheck) {
                let e = this.A.getImmediate({ optional: !0 });
                e
                  ? n(e)
                  : N(
                      "FirebaseAppCheckTokenProvider",
                      "AppCheck not yet detected"
                    );
              }
            }, 0);
        }
        getToken() {
          if (this.V) return Promise.resolve(new H(this.V));
          let e = this.forceRefresh;
          return (
            (this.forceRefresh = !1),
            this.appCheck
              ? this.appCheck
                  .getToken(e)
                  .then((e) =>
                    e
                      ? ("string" == typeof e.token || L(),
                        (this.R = e.token),
                        new H(e.token))
                      : null
                  )
              : Promise.resolve(null)
          );
        }
        invalidateToken() {
          this.forceRefresh = !0;
        }
        shutdown() {
          this.appCheck && this.o && this.appCheck.removeTokenListener(this.o),
            (this.o = void 0);
        }
      }
      function Z() {
        return new TextEncoder();
      }
      class G {
        static newId() {
          let e = 62 * Math.floor(256 / 62),
            t = "";
          for (; t.length < 20; ) {
            let r = (function (e) {
              let t =
                  "undefined" != typeof self && (self.crypto || self.msCrypto),
                r = new Uint8Array(40);
              if (t && "function" == typeof t.getRandomValues)
                t.getRandomValues(r);
              else
                for (let e = 0; e < 40; e++)
                  r[e] = Math.floor(256 * Math.random());
              return r;
            })(40);
            for (let n = 0; n < r.length; ++n)
              t.length < 20 &&
                r[n] < e &&
                (t +=
                  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(
                    r[n] % 62
                  ));
          }
          return t;
        }
      }
      function W(e, t) {
        return e < t ? -1 : +(e > t);
      }
      function Q(e, t) {
        let r = 0;
        for (; r < e.length && r < t.length; ) {
          let n = e.codePointAt(r),
            i = t.codePointAt(r);
          if (n !== i) {
            if (n < 128 && i < 128) return W(n, i);
            {
              let s = Z(),
                a = (function (e, t) {
                  for (let r = 0; r < e.length && r < t.length; ++r)
                    if (e[r] !== t[r]) return W(e[r], t[r]);
                  return W(e.length, t.length);
                })(s.encode(X(e, r)), s.encode(X(t, r)));
              return 0 !== a ? a : W(n, i);
            }
          }
          r += n > 65535 ? 2 : 1;
        }
        return W(e.length, t.length);
      }
      function X(e, t) {
        return e.codePointAt(t) > 65535
          ? e.substring(t, t + 2)
          : e.substring(t, t + 1);
      }
      function Y(e, t, r) {
        return e.length === t.length && e.every((e, n) => r(e, t[n]));
      }
      class J {
        static now() {
          return J.fromMillis(Date.now());
        }
        static fromDate(e) {
          return J.fromMillis(e.getTime());
        }
        static fromMillis(e) {
          let t = Math.floor(e / 1e3),
            r = Math.floor((e - 1e3 * t) * 1e6);
          return new J(t, r);
        }
        constructor(e, t) {
          if (((this.seconds = e), (this.nanoseconds = t), t < 0 || t >= 1e9))
            throw new $(
              M.INVALID_ARGUMENT,
              "Timestamp nanoseconds out of range: " + t
            );
          if (e < -0xe7791f700 || e >= 0x3afff44180)
            throw new $(
              M.INVALID_ARGUMENT,
              "Timestamp seconds out of range: " + e
            );
        }
        toDate() {
          return new Date(this.toMillis());
        }
        toMillis() {
          return 1e3 * this.seconds + this.nanoseconds / 1e6;
        }
        _compareTo(e) {
          return this.seconds === e.seconds
            ? W(this.nanoseconds, e.nanoseconds)
            : W(this.seconds, e.seconds);
        }
        isEqual(e) {
          return (
            e.seconds === this.seconds && e.nanoseconds === this.nanoseconds
          );
        }
        toString() {
          return (
            "Timestamp(seconds=" +
            this.seconds +
            ", nanoseconds=" +
            this.nanoseconds +
            ")"
          );
        }
        toJSON() {
          return { seconds: this.seconds, nanoseconds: this.nanoseconds };
        }
        valueOf() {
          return (
            String(this.seconds - -0xe7791f700).padStart(12, "0") +
            "." +
            String(this.nanoseconds).padStart(9, "0")
          );
        }
      }
      class ee {
        static fromTimestamp(e) {
          return new ee(e);
        }
        static min() {
          return new ee(new J(0, 0));
        }
        static max() {
          return new ee(new J(0x3afff4417f, 0x3b9ac9ff));
        }
        constructor(e) {
          this.timestamp = e;
        }
        compareTo(e) {
          return this.timestamp._compareTo(e.timestamp);
        }
        isEqual(e) {
          return this.timestamp.isEqual(e.timestamp);
        }
        toMicroseconds() {
          return (
            1e6 * this.timestamp.seconds + this.timestamp.nanoseconds / 1e3
          );
        }
        toString() {
          return "SnapshotVersion(" + this.timestamp.toString() + ")";
        }
        toTimestamp() {
          return this.timestamp;
        }
      }
      let et = "__name__";
      class er {
        constructor(e, t, r) {
          void 0 === t ? (t = 0) : t > e.length && L(),
            void 0 === r ? (r = e.length - t) : r > e.length - t && L(),
            (this.segments = e),
            (this.offset = t),
            (this.len = r);
        }
        get length() {
          return this.len;
        }
        isEqual(e) {
          return 0 === er.comparator(this, e);
        }
        child(e) {
          let t = this.segments.slice(this.offset, this.limit());
          return (
            e instanceof er
              ? e.forEach((e) => {
                  t.push(e);
                })
              : t.push(e),
            this.construct(t)
          );
        }
        limit() {
          return this.offset + this.length;
        }
        popFirst(e) {
          return (
            (e = void 0 === e ? 1 : e),
            this.construct(this.segments, this.offset + e, this.length - e)
          );
        }
        popLast() {
          return this.construct(this.segments, this.offset, this.length - 1);
        }
        firstSegment() {
          return this.segments[this.offset];
        }
        lastSegment() {
          return this.get(this.length - 1);
        }
        get(e) {
          return this.segments[this.offset + e];
        }
        isEmpty() {
          return 0 === this.length;
        }
        isPrefixOf(e) {
          if (e.length < this.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        isImmediateParentOf(e) {
          if (this.length + 1 !== e.length) return !1;
          for (let t = 0; t < this.length; t++)
            if (this.get(t) !== e.get(t)) return !1;
          return !0;
        }
        forEach(e) {
          for (let t = this.offset, r = this.limit(); t < r; t++)
            e(this.segments[t]);
        }
        toArray() {
          return this.segments.slice(this.offset, this.limit());
        }
        static comparator(e, t) {
          let r = Math.min(e.length, t.length);
          for (let n = 0; n < r; n++) {
            let r = er.compareSegments(e.get(n), t.get(n));
            if (0 !== r) return r;
          }
          return W(e.length, t.length);
        }
        static compareSegments(e, t) {
          let r = er.isNumericId(e),
            n = er.isNumericId(t);
          return r && !n
            ? -1
            : !r && n
            ? 1
            : r && n
            ? er.extractNumericId(e).compare(er.extractNumericId(t))
            : Q(e, t);
        }
        static isNumericId(e) {
          return e.startsWith("__id") && e.endsWith("__");
        }
        static extractNumericId(e) {
          return n.fromString(e.substring(4, e.length - 2));
        }
      }
      class en extends er {
        construct(e, t, r) {
          return new en(e, t, r);
        }
        canonicalString() {
          return this.toArray().join("/");
        }
        toString() {
          return this.canonicalString();
        }
        toUriEncodedString() {
          return this.toArray().map(encodeURIComponent).join("/");
        }
        static fromString(...e) {
          let t = [];
          for (let r of e) {
            if (r.indexOf("//") >= 0)
              throw new $(
                M.INVALID_ARGUMENT,
                `Invalid segment (${r}). Paths must not contain // in them.`
              );
            t.push(...r.split("/").filter((e) => e.length > 0));
          }
          return new en(t);
        }
        static emptyPath() {
          return new en([]);
        }
      }
      let ei = /^[_a-zA-Z][_a-zA-Z0-9]*$/;
      class es extends er {
        construct(e, t, r) {
          return new es(e, t, r);
        }
        static isValidIdentifier(e) {
          return ei.test(e);
        }
        canonicalString() {
          return this.toArray()
            .map(
              (e) => (
                (e = e.replace(/\\/g, "\\\\").replace(/`/g, "\\`")),
                es.isValidIdentifier(e) || (e = "`" + e + "`"),
                e
              )
            )
            .join(".");
        }
        toString() {
          return this.canonicalString();
        }
        isKeyField() {
          return 1 === this.length && this.get(0) === et;
        }
        static keyField() {
          return new es([et]);
        }
        static fromServerFormat(e) {
          let t = [],
            r = "",
            n = 0,
            i = () => {
              if (0 === r.length)
                throw new $(
                  M.INVALID_ARGUMENT,
                  `Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`
                );
              t.push(r), (r = "");
            },
            s = !1;
          for (; n < e.length; ) {
            let t = e[n];
            if ("\\" === t) {
              if (n + 1 === e.length)
                throw new $(
                  M.INVALID_ARGUMENT,
                  "Path has trailing escape character: " + e
                );
              let t = e[n + 1];
              if ("\\" !== t && "." !== t && "`" !== t)
                throw new $(
                  M.INVALID_ARGUMENT,
                  "Path has invalid escape sequence: " + e
                );
              (r += t), (n += 2);
            } else "`" === t ? (s = !s) : "." !== t || s ? (r += t) : i(), n++;
          }
          if ((i(), s))
            throw new $(M.INVALID_ARGUMENT, "Unterminated ` in path: " + e);
          return new es(t);
        }
        static emptyPath() {
          return new es([]);
        }
      }
      class ea {
        constructor(e) {
          this.path = e;
        }
        static fromPath(e) {
          return new ea(en.fromString(e));
        }
        static fromName(e) {
          return new ea(en.fromString(e).popFirst(5));
        }
        static empty() {
          return new ea(en.emptyPath());
        }
        get collectionGroup() {
          return this.path.popLast().lastSegment();
        }
        hasCollectionId(e) {
          return (
            this.path.length >= 2 && this.path.get(this.path.length - 2) === e
          );
        }
        getCollectionGroup() {
          return this.path.get(this.path.length - 2);
        }
        getCollectionPath() {
          return this.path.popLast();
        }
        isEqual(e) {
          return null !== e && 0 === en.comparator(this.path, e.path);
        }
        toString() {
          return this.path.toString();
        }
        static comparator(e, t) {
          return en.comparator(e.path, t.path);
        }
        static isDocumentKey(e) {
          return e.length % 2 == 0;
        }
        static fromSegments(e) {
          return new ea(new en(e.slice()));
        }
      }
      class eo {
        constructor(e, t, r) {
          (this.readTime = e),
            (this.documentKey = t),
            (this.largestBatchId = r);
        }
        static min() {
          return new eo(ee.min(), ea.empty(), -1);
        }
        static max() {
          return new eo(ee.max(), ea.empty(), -1);
        }
      }
      class el {
        constructor() {
          this.onCommittedListeners = [];
        }
        addOnCommittedListener(e) {
          this.onCommittedListeners.push(e);
        }
        raiseOnCommittedEvent() {
          this.onCommittedListeners.forEach((e) => e());
        }
      }
      async function eu(e) {
        if (
          e.code !== M.FAILED_PRECONDITION ||
          "The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab." !==
            e.message
        )
          throw e;
        N("LocalStore", "Unexpectedly lost primary lease");
      }
      class ec {
        constructor(e) {
          (this.nextCallback = null),
            (this.catchCallback = null),
            (this.result = void 0),
            (this.error = void 0),
            (this.isDone = !1),
            (this.callbackAttached = !1),
            e(
              (e) => {
                (this.isDone = !0),
                  (this.result = e),
                  this.nextCallback && this.nextCallback(e);
              },
              (e) => {
                (this.isDone = !0),
                  (this.error = e),
                  this.catchCallback && this.catchCallback(e);
              }
            );
        }
        catch(e) {
          return this.next(void 0, e);
        }
        next(e, t) {
          return (
            this.callbackAttached && L(),
            (this.callbackAttached = !0),
            this.isDone
              ? this.error
                ? this.wrapFailure(t, this.error)
                : this.wrapSuccess(e, this.result)
              : new ec((r, n) => {
                  (this.nextCallback = (t) => {
                    this.wrapSuccess(e, t).next(r, n);
                  }),
                    (this.catchCallback = (e) => {
                      this.wrapFailure(t, e).next(r, n);
                    });
                })
          );
        }
        toPromise() {
          return new Promise((e, t) => {
            this.next(e, t);
          });
        }
        wrapUserFunction(e) {
          try {
            let t = e();
            return t instanceof ec ? t : ec.resolve(t);
          } catch (e) {
            return ec.reject(e);
          }
        }
        wrapSuccess(e, t) {
          return e ? this.wrapUserFunction(() => e(t)) : ec.resolve(t);
        }
        wrapFailure(e, t) {
          return e ? this.wrapUserFunction(() => e(t)) : ec.reject(t);
        }
        static resolve(e) {
          return new ec((t, r) => {
            t(e);
          });
        }
        static reject(e) {
          return new ec((t, r) => {
            r(e);
          });
        }
        static waitFor(e) {
          return new ec((t, r) => {
            let n = 0,
              i = 0,
              s = !1;
            e.forEach((e) => {
              ++n,
                e.next(
                  () => {
                    ++i, s && i === n && t();
                  },
                  (e) => r(e)
                );
            }),
              (s = !0),
              i === n && t();
          });
        }
        static or(e) {
          let t = ec.resolve(!1);
          for (let r of e) t = t.next((e) => (e ? ec.resolve(e) : r()));
          return t;
        }
        static forEach(e, t) {
          let r = [];
          return (
            e.forEach((e, n) => {
              r.push(t.call(this, e, n));
            }),
            this.waitFor(r)
          );
        }
        static mapArray(e, t) {
          return new ec((r, n) => {
            let i = e.length,
              s = Array(i),
              a = 0;
            for (let o = 0; o < i; o++) {
              let l = o;
              t(e[l]).next(
                (e) => {
                  (s[l] = e), ++a === i && r(s);
                },
                (e) => n(e)
              );
            }
          });
        }
        static doWhile(e, t) {
          return new ec((r, n) => {
            let i = () => {
              !0 === e()
                ? t().next(() => {
                    i();
                  }, n)
                : r();
            };
            i();
          });
        }
      }
      function eh(e) {
        return "IndexedDbTransactionError" === e.name;
      }
      class ef {
        constructor(e, t) {
          (this.previousValue = e),
            t &&
              ((t.sequenceNumberHandler = (e) => this.oe(e)),
              (this._e = (e) => t.writeSequenceNumber(e)));
        }
        oe(e) {
          return (
            (this.previousValue = Math.max(e, this.previousValue)),
            this.previousValue
          );
        }
        next() {
          let e = ++this.previousValue;
          return this._e && this._e(e), e;
        }
      }
      ef.ae = -1;
      function ed(e) {
        return 0 === e && 1 / e == -1 / 0;
      }
      function ep(e) {
        let t = 0;
        for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && t++;
        return t;
      }
      function eg(e, t) {
        for (let r in e)
          Object.prototype.hasOwnProperty.call(e, r) && t(r, e[r]);
      }
      function em(e) {
        for (let t in e)
          if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
        return !0;
      }
      class ey {
        constructor(e, t) {
          (this.comparator = e), (this.root = t || eb.EMPTY);
        }
        insert(e, t) {
          return new ey(
            this.comparator,
            this.root
              .insert(e, t, this.comparator)
              .copy(null, null, eb.BLACK, null, null)
          );
        }
        remove(e) {
          return new ey(
            this.comparator,
            this.root
              .remove(e, this.comparator)
              .copy(null, null, eb.BLACK, null, null)
          );
        }
        get(e) {
          let t = this.root;
          for (; !t.isEmpty(); ) {
            let r = this.comparator(e, t.key);
            if (0 === r) return t.value;
            r < 0 ? (t = t.left) : r > 0 && (t = t.right);
          }
          return null;
        }
        indexOf(e) {
          let t = 0,
            r = this.root;
          for (; !r.isEmpty(); ) {
            let n = this.comparator(e, r.key);
            if (0 === n) return t + r.left.size;
            n < 0 ? (r = r.left) : ((t += r.left.size + 1), (r = r.right));
          }
          return -1;
        }
        isEmpty() {
          return this.root.isEmpty();
        }
        get size() {
          return this.root.size;
        }
        minKey() {
          return this.root.minKey();
        }
        maxKey() {
          return this.root.maxKey();
        }
        inorderTraversal(e) {
          return this.root.inorderTraversal(e);
        }
        forEach(e) {
          this.inorderTraversal((t, r) => (e(t, r), !1));
        }
        toString() {
          let e = [];
          return (
            this.inorderTraversal((t, r) => (e.push(`${t}:${r}`), !1)),
            `{${e.join(", ")}}`
          );
        }
        reverseTraversal(e) {
          return this.root.reverseTraversal(e);
        }
        getIterator() {
          return new ev(this.root, null, this.comparator, !1);
        }
        getIteratorFrom(e) {
          return new ev(this.root, e, this.comparator, !1);
        }
        getReverseIterator() {
          return new ev(this.root, null, this.comparator, !0);
        }
        getReverseIteratorFrom(e) {
          return new ev(this.root, e, this.comparator, !0);
        }
      }
      class ev {
        constructor(e, t, r, n) {
          (this.isReverse = n), (this.nodeStack = []);
          let i = 1;
          for (; !e.isEmpty(); )
            if (((i = t ? r(e.key, t) : 1), t && n && (i *= -1), i < 0))
              e = this.isReverse ? e.left : e.right;
            else {
              if (0 === i) {
                this.nodeStack.push(e);
                break;
              }
              this.nodeStack.push(e), (e = this.isReverse ? e.right : e.left);
            }
        }
        getNext() {
          let e = this.nodeStack.pop(),
            t = { key: e.key, value: e.value };
          if (this.isReverse)
            for (e = e.left; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.right);
          else
            for (e = e.right; !e.isEmpty(); )
              this.nodeStack.push(e), (e = e.left);
          return t;
        }
        hasNext() {
          return this.nodeStack.length > 0;
        }
        peek() {
          if (0 === this.nodeStack.length) return null;
          let e = this.nodeStack[this.nodeStack.length - 1];
          return { key: e.key, value: e.value };
        }
      }
      class eb {
        constructor(e, t, r, n, i) {
          (this.key = e),
            (this.value = t),
            (this.color = null != r ? r : eb.RED),
            (this.left = null != n ? n : eb.EMPTY),
            (this.right = null != i ? i : eb.EMPTY),
            (this.size = this.left.size + 1 + this.right.size);
        }
        copy(e, t, r, n, i) {
          return new eb(
            null != e ? e : this.key,
            null != t ? t : this.value,
            null != r ? r : this.color,
            null != n ? n : this.left,
            null != i ? i : this.right
          );
        }
        isEmpty() {
          return !1;
        }
        inorderTraversal(e) {
          return (
            this.left.inorderTraversal(e) ||
            e(this.key, this.value) ||
            this.right.inorderTraversal(e)
          );
        }
        reverseTraversal(e) {
          return (
            this.right.reverseTraversal(e) ||
            e(this.key, this.value) ||
            this.left.reverseTraversal(e)
          );
        }
        min() {
          return this.left.isEmpty() ? this : this.left.min();
        }
        minKey() {
          return this.min().key;
        }
        maxKey() {
          return this.right.isEmpty() ? this.key : this.right.maxKey();
        }
        insert(e, t, r) {
          let n = this,
            i = r(e, n.key);
          return (n =
            i < 0
              ? n.copy(null, null, null, n.left.insert(e, t, r), null)
              : 0 === i
              ? n.copy(null, t, null, null, null)
              : n.copy(
                  null,
                  null,
                  null,
                  null,
                  n.right.insert(e, t, r)
                )).fixUp();
        }
        removeMin() {
          if (this.left.isEmpty()) return eb.EMPTY;
          let e = this;
          return (
            e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()),
            (e = e.copy(null, null, null, e.left.removeMin(), null)).fixUp()
          );
        }
        remove(e, t) {
          let r,
            n = this;
          if (0 > t(e, n.key))
            n.left.isEmpty() ||
              n.left.isRed() ||
              n.left.left.isRed() ||
              (n = n.moveRedLeft()),
              (n = n.copy(null, null, null, n.left.remove(e, t), null));
          else {
            if (
              (n.left.isRed() && (n = n.rotateRight()),
              n.right.isEmpty() ||
                n.right.isRed() ||
                n.right.left.isRed() ||
                (n = n.moveRedRight()),
              0 === t(e, n.key))
            ) {
              if (n.right.isEmpty()) return eb.EMPTY;
              (r = n.right.min()),
                (n = n.copy(r.key, r.value, null, null, n.right.removeMin()));
            }
            n = n.copy(null, null, null, null, n.right.remove(e, t));
          }
          return n.fixUp();
        }
        isRed() {
          return this.color;
        }
        fixUp() {
          let e = this;
          return (
            e.right.isRed() && !e.left.isRed() && (e = e.rotateLeft()),
            e.left.isRed() && e.left.left.isRed() && (e = e.rotateRight()),
            e.left.isRed() && e.right.isRed() && (e = e.colorFlip()),
            e
          );
        }
        moveRedLeft() {
          let e = this.colorFlip();
          return (
            e.right.left.isRed() &&
              (e = (e = (e = e.copy(
                null,
                null,
                null,
                null,
                e.right.rotateRight()
              )).rotateLeft()).colorFlip()),
            e
          );
        }
        moveRedRight() {
          let e = this.colorFlip();
          return (
            e.left.left.isRed() && (e = (e = e.rotateRight()).colorFlip()), e
          );
        }
        rotateLeft() {
          let e = this.copy(null, null, eb.RED, null, this.right.left);
          return this.right.copy(null, null, this.color, e, null);
        }
        rotateRight() {
          let e = this.copy(null, null, eb.RED, this.left.right, null);
          return this.left.copy(null, null, this.color, null, e);
        }
        colorFlip() {
          let e = this.left.copy(null, null, !this.left.color, null, null),
            t = this.right.copy(null, null, !this.right.color, null, null);
          return this.copy(null, null, !this.color, e, t);
        }
        checkMaxDepth() {
          return Math.pow(2, this.check()) <= this.size + 1;
        }
        check() {
          if ((this.isRed() && this.left.isRed()) || this.right.isRed())
            throw L();
          let e = this.left.check();
          if (e !== this.right.check()) throw L();
          return e + +!this.isRed();
        }
      }
      (eb.EMPTY = null),
        (eb.RED = !0),
        (eb.BLACK = !1),
        (eb.EMPTY = new (class {
          constructor() {
            this.size = 0;
          }
          get key() {
            throw L();
          }
          get value() {
            throw L();
          }
          get color() {
            throw L();
          }
          get left() {
            throw L();
          }
          get right() {
            throw L();
          }
          copy(e, t, r, n, i) {
            return this;
          }
          insert(e, t, r) {
            return new eb(e, t);
          }
          remove(e, t) {
            return this;
          }
          isEmpty() {
            return !0;
          }
          inorderTraversal(e) {
            return !1;
          }
          reverseTraversal(e) {
            return !1;
          }
          minKey() {
            return null;
          }
          maxKey() {
            return null;
          }
          isRed() {
            return !1;
          }
          checkMaxDepth() {
            return !0;
          }
          check() {
            return 0;
          }
        })());
      class ew {
        constructor(e) {
          (this.comparator = e), (this.data = new ey(this.comparator));
        }
        has(e) {
          return null !== this.data.get(e);
        }
        first() {
          return this.data.minKey();
        }
        last() {
          return this.data.maxKey();
        }
        get size() {
          return this.data.size;
        }
        indexOf(e) {
          return this.data.indexOf(e);
        }
        forEach(e) {
          this.data.inorderTraversal((t, r) => (e(t), !1));
        }
        forEachInRange(e, t) {
          let r = this.data.getIteratorFrom(e[0]);
          for (; r.hasNext(); ) {
            let n = r.getNext();
            if (this.comparator(n.key, e[1]) >= 0) return;
            t(n.key);
          }
        }
        forEachWhile(e, t) {
          let r;
          for (
            r =
              void 0 !== t
                ? this.data.getIteratorFrom(t)
                : this.data.getIterator();
            r.hasNext();

          )
            if (!e(r.getNext().key)) return;
        }
        firstAfterOrEqual(e) {
          let t = this.data.getIteratorFrom(e);
          return t.hasNext() ? t.getNext().key : null;
        }
        getIterator() {
          return new eS(this.data.getIterator());
        }
        getIteratorFrom(e) {
          return new eS(this.data.getIteratorFrom(e));
        }
        add(e) {
          return this.copy(this.data.remove(e).insert(e, !0));
        }
        delete(e) {
          return this.has(e) ? this.copy(this.data.remove(e)) : this;
        }
        isEmpty() {
          return this.data.isEmpty();
        }
        unionWith(e) {
          let t = this;
          return (
            t.size < e.size && ((t = e), (e = this)),
            e.forEach((e) => {
              t = t.add(e);
            }),
            t
          );
        }
        isEqual(e) {
          if (!(e instanceof ew) || this.size !== e.size) return !1;
          let t = this.data.getIterator(),
            r = e.data.getIterator();
          for (; t.hasNext(); ) {
            let e = t.getNext().key,
              n = r.getNext().key;
            if (0 !== this.comparator(e, n)) return !1;
          }
          return !0;
        }
        toArray() {
          let e = [];
          return (
            this.forEach((t) => {
              e.push(t);
            }),
            e
          );
        }
        toString() {
          let e = [];
          return (
            this.forEach((t) => e.push(t)), "SortedSet(" + e.toString() + ")"
          );
        }
        copy(e) {
          let t = new ew(this.comparator);
          return (t.data = e), t;
        }
      }
      class eS {
        constructor(e) {
          this.iter = e;
        }
        getNext() {
          return this.iter.getNext().key;
        }
        hasNext() {
          return this.iter.hasNext();
        }
      }
      class eE {
        constructor(e) {
          (this.fields = e), e.sort(es.comparator);
        }
        static empty() {
          return new eE([]);
        }
        unionWith(e) {
          let t = new ew(es.comparator);
          for (let e of this.fields) t = t.add(e);
          for (let r of e) t = t.add(r);
          return new eE(t.toArray());
        }
        covers(e) {
          for (let t of this.fields) if (t.isPrefixOf(e)) return !0;
          return !1;
        }
        isEqual(e) {
          return Y(this.fields, e.fields, (e, t) => e.isEqual(t));
        }
      }
      class ex extends Error {
        constructor() {
          super(...arguments), (this.name = "Base64DecodeError");
        }
      }
      class eT {
        constructor(e) {
          this.binaryString = e;
        }
        static fromBase64String(e) {
          return new eT(
            (function (e) {
              try {
                return atob(e);
              } catch (e) {
                throw "undefined" != typeof DOMException &&
                  e instanceof DOMException
                  ? new ex("Invalid base64 string: " + e)
                  : e;
              }
            })(e)
          );
        }
        static fromUint8Array(e) {
          return new eT(
            (function (e) {
              let t = "";
              for (let r = 0; r < e.length; ++r) t += String.fromCharCode(e[r]);
              return t;
            })(e)
          );
        }
        [Symbol.iterator]() {
          let e = 0;
          return {
            next: () =>
              e < this.binaryString.length
                ? { value: this.binaryString.charCodeAt(e++), done: !1 }
                : { value: void 0, done: !0 },
          };
        }
        toBase64() {
          return btoa(this.binaryString);
        }
        toUint8Array() {
          return (function (e) {
            let t = new Uint8Array(e.length);
            for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
            return t;
          })(this.binaryString);
        }
        approximateByteSize() {
          return 2 * this.binaryString.length;
        }
        compareTo(e) {
          return W(this.binaryString, e.binaryString);
        }
        isEqual(e) {
          return this.binaryString === e.binaryString;
        }
      }
      eT.EMPTY_BYTE_STRING = new eT("");
      let eC = new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);
      function e_(e) {
        if ((e || L(), "string" == typeof e)) {
          let t = 0,
            r = eC.exec(e);
          if ((r || L(), r[1])) {
            let e = r[1];
            t = Number((e = (e + "000000000").substr(0, 9)));
          }
          return { seconds: Math.floor(new Date(e).getTime() / 1e3), nanos: t };
        }
        return { seconds: ek(e.seconds), nanos: ek(e.nanos) };
      }
      function ek(e) {
        return "number" == typeof e ? e : "string" == typeof e ? Number(e) : 0;
      }
      function eA(e) {
        return "string" == typeof e
          ? eT.fromBase64String(e)
          : eT.fromUint8Array(e);
      }
      let eI = "server_timestamp",
        eD = "__type__",
        eN = "__previous_value__",
        eR = "__local_write_time__";
      function eP(e) {
        var t, r;
        return (
          (null ===
            (r = ((null === (t = null == e ? void 0 : e.mapValue) ||
            void 0 === t
              ? void 0
              : t.fields) || {})[eD]) || void 0 === r
            ? void 0
            : r.stringValue) === eI
        );
      }
      function eO(e) {
        let t = e.mapValue.fields[eN];
        return eP(t) ? eO(t) : t;
      }
      function eL(e) {
        let t = e_(e.mapValue.fields[eR].timestampValue);
        return new J(t.seconds, t.nanos);
      }
      class eM {
        constructor(e, t, r, n, i, s, a, o, l) {
          (this.databaseId = e),
            (this.appId = t),
            (this.persistenceKey = r),
            (this.host = n),
            (this.ssl = i),
            (this.forceLongPolling = s),
            (this.autoDetectLongPolling = a),
            (this.longPollingOptions = o),
            (this.useFetchStreams = l);
        }
      }
      let e$ = "(default)";
      class eV {
        constructor(e, t) {
          (this.projectId = e), (this.database = t || e$);
        }
        static empty() {
          return new eV("", "");
        }
        get isDefaultDatabase() {
          return this.database === e$;
        }
        isEqual(e) {
          return (
            e instanceof eV &&
            e.projectId === this.projectId &&
            e.database === this.database
          );
        }
      }
      let eF = "__type__",
        eB = "__max__",
        eU = { mapValue: { fields: { __type__: { stringValue: eB } } } },
        ej = "__vector__",
        ez = "value";
      function eq(e) {
        return "nullValue" in e
          ? 0
          : "booleanValue" in e
          ? 1
          : "integerValue" in e || "doubleValue" in e
          ? 2
          : "timestampValue" in e
          ? 3
          : "stringValue" in e
          ? 5
          : "bytesValue" in e
          ? 6
          : "referenceValue" in e
          ? 7
          : "geoPointValue" in e
          ? 8
          : "arrayValue" in e
          ? 9
          : "mapValue" in e
          ? eP(e)
            ? 4
            : e3(e)
            ? 0x1fffffffffffff
            : e2(e)
            ? 10
            : 11
          : L();
      }
      function eH(e, t) {
        if (e === t) return !0;
        let r = eq(e);
        if (r !== eq(t)) return !1;
        switch (r) {
          case 0:
          case 0x1fffffffffffff:
            return !0;
          case 1:
            return e.booleanValue === t.booleanValue;
          case 4:
            return eL(e).isEqual(eL(t));
          case 3:
            return (function (e, t) {
              if (
                "string" == typeof e.timestampValue &&
                "string" == typeof t.timestampValue &&
                e.timestampValue.length === t.timestampValue.length
              )
                return e.timestampValue === t.timestampValue;
              let r = e_(e.timestampValue),
                n = e_(t.timestampValue);
              return r.seconds === n.seconds && r.nanos === n.nanos;
            })(e, t);
          case 5:
            return e.stringValue === t.stringValue;
          case 6:
            return eA(e.bytesValue).isEqual(eA(t.bytesValue));
          case 7:
            return e.referenceValue === t.referenceValue;
          case 8:
            return (
              ek(e.geoPointValue.latitude) === ek(t.geoPointValue.latitude) &&
              ek(e.geoPointValue.longitude) === ek(t.geoPointValue.longitude)
            );
          case 2:
            return (function (e, t) {
              if ("integerValue" in e && "integerValue" in t)
                return ek(e.integerValue) === ek(t.integerValue);
              if ("doubleValue" in e && "doubleValue" in t) {
                let r = ek(e.doubleValue),
                  n = ek(t.doubleValue);
                return r === n ? ed(r) === ed(n) : isNaN(r) && isNaN(n);
              }
              return !1;
            })(e, t);
          case 9:
            return Y(e.arrayValue.values || [], t.arrayValue.values || [], eH);
          case 10:
          case 11:
            return (function (e, t) {
              let r = e.mapValue.fields || {},
                n = t.mapValue.fields || {};
              if (ep(r) !== ep(n)) return !1;
              for (let e in r)
                if (r.hasOwnProperty(e) && (void 0 === n[e] || !eH(r[e], n[e])))
                  return !1;
              return !0;
            })(e, t);
          default:
            return L();
        }
      }
      function eK(e, t) {
        return void 0 !== (e.values || []).find((e) => eH(e, t));
      }
      function eZ(e, t) {
        if (e === t) return 0;
        let r = eq(e),
          n = eq(t);
        if (r !== n) return W(r, n);
        switch (r) {
          case 0:
          case 0x1fffffffffffff:
            return 0;
          case 1:
            return W(e.booleanValue, t.booleanValue);
          case 2:
            return (function (e, t) {
              let r = ek(e.integerValue || e.doubleValue),
                n = ek(t.integerValue || t.doubleValue);
              return r < n
                ? -1
                : r > n
                ? 1
                : r === n
                ? 0
                : isNaN(r)
                ? isNaN(n)
                  ? 0
                  : -1
                : 1;
            })(e, t);
          case 3:
            return eG(e.timestampValue, t.timestampValue);
          case 4:
            return eG(eL(e), eL(t));
          case 5:
            return Q(e.stringValue, t.stringValue);
          case 6:
            return (function (e, t) {
              let r = eA(e),
                n = eA(t);
              return r.compareTo(n);
            })(e.bytesValue, t.bytesValue);
          case 7:
            return (function (e, t) {
              let r = e.split("/"),
                n = t.split("/");
              for (let e = 0; e < r.length && e < n.length; e++) {
                let t = W(r[e], n[e]);
                if (0 !== t) return t;
              }
              return W(r.length, n.length);
            })(e.referenceValue, t.referenceValue);
          case 8:
            return (function (e, t) {
              let r = W(ek(e.latitude), ek(t.latitude));
              return 0 !== r ? r : W(ek(e.longitude), ek(t.longitude));
            })(e.geoPointValue, t.geoPointValue);
          case 9:
            return eW(e.arrayValue, t.arrayValue);
          case 10:
            return (function (e, t) {
              var r, n, i, s;
              let a = e.fields || {},
                o = t.fields || {},
                l =
                  null === (r = a[ez]) || void 0 === r ? void 0 : r.arrayValue,
                u =
                  null === (n = o[ez]) || void 0 === n ? void 0 : n.arrayValue,
                c = W(
                  (null === (i = null == l ? void 0 : l.values) || void 0 === i
                    ? void 0
                    : i.length) || 0,
                  (null === (s = null == u ? void 0 : u.values) || void 0 === s
                    ? void 0
                    : s.length) || 0
                );
              return 0 !== c ? c : eW(l, u);
            })(e.mapValue, t.mapValue);
          case 11:
            return (function (e, t) {
              if (e === eU.mapValue && t === eU.mapValue) return 0;
              if (e === eU.mapValue) return 1;
              if (t === eU.mapValue) return -1;
              let r = e.fields || {},
                n = Object.keys(r),
                i = t.fields || {},
                s = Object.keys(i);
              n.sort(), s.sort();
              for (let e = 0; e < n.length && e < s.length; ++e) {
                let t = Q(n[e], s[e]);
                if (0 !== t) return t;
                let a = eZ(r[n[e]], i[s[e]]);
                if (0 !== a) return a;
              }
              return W(n.length, s.length);
            })(e.mapValue, t.mapValue);
          default:
            throw L();
        }
      }
      function eG(e, t) {
        if (
          "string" == typeof e &&
          "string" == typeof t &&
          e.length === t.length
        )
          return W(e, t);
        let r = e_(e),
          n = e_(t),
          i = W(r.seconds, n.seconds);
        return 0 !== i ? i : W(r.nanos, n.nanos);
      }
      function eW(e, t) {
        let r = e.values || [],
          n = t.values || [];
        for (let e = 0; e < r.length && e < n.length; ++e) {
          let t = eZ(r[e], n[e]);
          if (t) return t;
        }
        return W(r.length, n.length);
      }
      function eQ(e) {
        var t, r;
        return "nullValue" in e
          ? "null"
          : "booleanValue" in e
          ? "" + e.booleanValue
          : "integerValue" in e
          ? "" + e.integerValue
          : "doubleValue" in e
          ? "" + e.doubleValue
          : "timestampValue" in e
          ? (function (e) {
              let t = e_(e);
              return `time(${t.seconds},${t.nanos})`;
            })(e.timestampValue)
          : "stringValue" in e
          ? e.stringValue
          : "bytesValue" in e
          ? eA(e.bytesValue).toBase64()
          : "referenceValue" in e
          ? ((t = e.referenceValue), ea.fromName(t).toString())
          : "geoPointValue" in e
          ? ((r = e.geoPointValue), `geo(${r.latitude},${r.longitude})`)
          : "arrayValue" in e
          ? (function (e) {
              let t = "[",
                r = !0;
              for (let n of e.values || [])
                r ? (r = !1) : (t += ","), (t += eQ(n));
              return t + "]";
            })(e.arrayValue)
          : "mapValue" in e
          ? (function (e) {
              let t = Object.keys(e.fields || {}).sort(),
                r = "{",
                n = !0;
              for (let i of t)
                n ? (n = !1) : (r += ","), (r += `${i}:${eQ(e.fields[i])}`);
              return r + "}";
            })(e.mapValue)
          : L();
      }
      function eX(e) {
        return !!e && "integerValue" in e;
      }
      function eY(e) {
        return !!e && "arrayValue" in e;
      }
      function eJ(e) {
        return !!e && "nullValue" in e;
      }
      function e0(e) {
        return !!e && "doubleValue" in e && isNaN(Number(e.doubleValue));
      }
      function e1(e) {
        return !!e && "mapValue" in e;
      }
      function e2(e) {
        var t, r;
        return (
          (null ===
            (r = ((null === (t = null == e ? void 0 : e.mapValue) ||
            void 0 === t
              ? void 0
              : t.fields) || {})[eF]) || void 0 === r
            ? void 0
            : r.stringValue) === ej
        );
      }
      function e5(e) {
        if (e.geoPointValue)
          return { geoPointValue: Object.assign({}, e.geoPointValue) };
        if (e.timestampValue && "object" == typeof e.timestampValue)
          return { timestampValue: Object.assign({}, e.timestampValue) };
        if (e.mapValue) {
          let t = { mapValue: { fields: {} } };
          return (
            eg(e.mapValue.fields, (e, r) => (t.mapValue.fields[e] = e5(r))), t
          );
        }
        if (e.arrayValue) {
          let t = { arrayValue: { values: [] } };
          for (let r = 0; r < (e.arrayValue.values || []).length; ++r)
            t.arrayValue.values[r] = e5(e.arrayValue.values[r]);
          return t;
        }
        return Object.assign({}, e);
      }
      function e3(e) {
        return (
          (((e.mapValue || {}).fields || {}).__type__ || {}).stringValue === eB
        );
      }
      class e6 {
        constructor(e) {
          this.value = e;
        }
        static empty() {
          return new e6({ mapValue: {} });
        }
        field(e) {
          if (e.isEmpty()) return this.value;
          {
            let t = this.value;
            for (let r = 0; r < e.length - 1; ++r)
              if (!e1((t = (t.mapValue.fields || {})[e.get(r)]))) return null;
            return (t = (t.mapValue.fields || {})[e.lastSegment()]) || null;
          }
        }
        set(e, t) {
          this.getFieldsMap(e.popLast())[e.lastSegment()] = e5(t);
        }
        setAll(e) {
          let t = es.emptyPath(),
            r = {},
            n = [];
          e.forEach((e, i) => {
            if (!t.isImmediateParentOf(i)) {
              let e = this.getFieldsMap(t);
              this.applyChanges(e, r, n), (r = {}), (n = []), (t = i.popLast());
            }
            e ? (r[i.lastSegment()] = e5(e)) : n.push(i.lastSegment());
          });
          let i = this.getFieldsMap(t);
          this.applyChanges(i, r, n);
        }
        delete(e) {
          let t = this.field(e.popLast());
          e1(t) &&
            t.mapValue.fields &&
            delete t.mapValue.fields[e.lastSegment()];
        }
        isEqual(e) {
          return eH(this.value, e.value);
        }
        getFieldsMap(e) {
          let t = this.value;
          t.mapValue.fields || (t.mapValue = { fields: {} });
          for (let r = 0; r < e.length; ++r) {
            let n = t.mapValue.fields[e.get(r)];
            (e1(n) && n.mapValue.fields) ||
              ((n = { mapValue: { fields: {} } }),
              (t.mapValue.fields[e.get(r)] = n)),
              (t = n);
          }
          return t.mapValue.fields;
        }
        applyChanges(e, t, r) {
          for (let n of (eg(t, (t, r) => (e[t] = r)), r)) delete e[n];
        }
        clone() {
          return new e6(e5(this.value));
        }
      }
      class e4 {
        constructor(e, t, r, n, i, s, a) {
          (this.key = e),
            (this.documentType = t),
            (this.version = r),
            (this.readTime = n),
            (this.createTime = i),
            (this.data = s),
            (this.documentState = a);
        }
        static newInvalidDocument(e) {
          return new e4(e, 0, ee.min(), ee.min(), ee.min(), e6.empty(), 0);
        }
        static newFoundDocument(e, t, r, n) {
          return new e4(e, 1, t, ee.min(), r, n, 0);
        }
        static newNoDocument(e, t) {
          return new e4(e, 2, t, ee.min(), ee.min(), e6.empty(), 0);
        }
        static newUnknownDocument(e, t) {
          return new e4(e, 3, t, ee.min(), ee.min(), e6.empty(), 2);
        }
        convertToFoundDocument(e, t) {
          return (
            this.createTime.isEqual(ee.min()) &&
              (2 === this.documentType || 0 === this.documentType) &&
              (this.createTime = e),
            (this.version = e),
            (this.documentType = 1),
            (this.data = t),
            (this.documentState = 0),
            this
          );
        }
        convertToNoDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 2),
            (this.data = e6.empty()),
            (this.documentState = 0),
            this
          );
        }
        convertToUnknownDocument(e) {
          return (
            (this.version = e),
            (this.documentType = 3),
            (this.data = e6.empty()),
            (this.documentState = 2),
            this
          );
        }
        setHasCommittedMutations() {
          return (this.documentState = 2), this;
        }
        setHasLocalMutations() {
          return (this.documentState = 1), (this.version = ee.min()), this;
        }
        setReadTime(e) {
          return (this.readTime = e), this;
        }
        get hasLocalMutations() {
          return 1 === this.documentState;
        }
        get hasCommittedMutations() {
          return 2 === this.documentState;
        }
        get hasPendingWrites() {
          return this.hasLocalMutations || this.hasCommittedMutations;
        }
        isValidDocument() {
          return 0 !== this.documentType;
        }
        isFoundDocument() {
          return 1 === this.documentType;
        }
        isNoDocument() {
          return 2 === this.documentType;
        }
        isUnknownDocument() {
          return 3 === this.documentType;
        }
        isEqual(e) {
          return (
            e instanceof e4 &&
            this.key.isEqual(e.key) &&
            this.version.isEqual(e.version) &&
            this.documentType === e.documentType &&
            this.documentState === e.documentState &&
            this.data.isEqual(e.data)
          );
        }
        mutableCopy() {
          return new e4(
            this.key,
            this.documentType,
            this.version,
            this.readTime,
            this.createTime,
            this.data.clone(),
            this.documentState
          );
        }
        toString() {
          return `Document(${this.key}, ${this.version}, ${JSON.stringify(
            this.data.value
          )}, {createTime: ${this.createTime}}), {documentType: ${
            this.documentType
          }}), {documentState: ${this.documentState}})`;
        }
      }
      class e8 {
        constructor(e, t) {
          (this.position = e), (this.inclusive = t);
        }
      }
      function e7(e, t, r) {
        let n = 0;
        for (let i = 0; i < e.position.length; i++) {
          let s = t[i],
            a = e.position[i];
          if (
            ((n = s.field.isKeyField()
              ? ea.comparator(ea.fromName(a.referenceValue), r.key)
              : eZ(a, r.data.field(s.field))),
            "desc" === s.dir && (n *= -1),
            0 !== n)
          )
            break;
        }
        return n;
      }
      function e9(e, t) {
        if (null === e) return null === t;
        if (
          null === t ||
          e.inclusive !== t.inclusive ||
          e.position.length !== t.position.length
        )
          return !1;
        for (let r = 0; r < e.position.length; r++)
          if (!eH(e.position[r], t.position[r])) return !1;
        return !0;
      }
      class te {
        constructor(e, t = "asc") {
          (this.field = e), (this.dir = t);
        }
      }
      class tt {}
      class tr extends tt {
        constructor(e, t, r) {
          super(), (this.field = e), (this.op = t), (this.value = r);
        }
        static create(e, t, r) {
          return e.isKeyField()
            ? "in" === t || "not-in" === t
              ? this.createKeyFieldInFilter(e, t, r)
              : new ta(e, t, r)
            : "array-contains" === t
            ? new tc(e, r)
            : "in" === t
            ? new th(e, r)
            : "not-in" === t
            ? new tf(e, r)
            : "array-contains-any" === t
            ? new td(e, r)
            : new tr(e, t, r);
        }
        static createKeyFieldInFilter(e, t, r) {
          return "in" === t ? new to(e, r) : new tl(e, r);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return "!=" === this.op
            ? null !== t && this.matchesComparison(eZ(t, this.value))
            : null !== t &&
                eq(this.value) === eq(t) &&
                this.matchesComparison(eZ(t, this.value));
        }
        matchesComparison(e) {
          switch (this.op) {
            case "<":
              return e < 0;
            case "<=":
              return e <= 0;
            case "==":
              return 0 === e;
            case "!=":
              return 0 !== e;
            case ">":
              return e > 0;
            case ">=":
              return e >= 0;
            default:
              return L();
          }
        }
        isInequality() {
          return ["<", "<=", ">", ">=", "!=", "not-in"].indexOf(this.op) >= 0;
        }
        getFlattenedFilters() {
          return [this];
        }
        getFilters() {
          return [this];
        }
      }
      class tn extends tt {
        constructor(e, t) {
          super(), (this.filters = e), (this.op = t), (this.ce = null);
        }
        static create(e, t) {
          return new tn(e, t);
        }
        matches(e) {
          return ti(this)
            ? void 0 === this.filters.find((t) => !t.matches(e))
            : void 0 !== this.filters.find((t) => t.matches(e));
        }
        getFlattenedFilters() {
          return (
            null !== this.ce ||
              (this.ce = this.filters.reduce(
                (e, t) => e.concat(t.getFlattenedFilters()),
                []
              )),
            this.ce
          );
        }
        getFilters() {
          return Object.assign([], this.filters);
        }
      }
      function ti(e) {
        return "and" === e.op;
      }
      function ts(e) {
        for (let t of e.filters) if (t instanceof tn) return !1;
        return !0;
      }
      class ta extends tr {
        constructor(e, t, r) {
          super(e, t, r), (this.key = ea.fromName(r.referenceValue));
        }
        matches(e) {
          let t = ea.comparator(e.key, this.key);
          return this.matchesComparison(t);
        }
      }
      class to extends tr {
        constructor(e, t) {
          super(e, "in", t), (this.keys = tu("in", t));
        }
        matches(e) {
          return this.keys.some((t) => t.isEqual(e.key));
        }
      }
      class tl extends tr {
        constructor(e, t) {
          super(e, "not-in", t), (this.keys = tu("not-in", t));
        }
        matches(e) {
          return !this.keys.some((t) => t.isEqual(e.key));
        }
      }
      function tu(e, t) {
        var r;
        return (
          (null === (r = t.arrayValue) || void 0 === r ? void 0 : r.values) ||
          []
        ).map((e) => ea.fromName(e.referenceValue));
      }
      class tc extends tr {
        constructor(e, t) {
          super(e, "array-contains", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return eY(t) && eK(t.arrayValue, this.value);
        }
      }
      class th extends tr {
        constructor(e, t) {
          super(e, "in", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return null !== t && eK(this.value.arrayValue, t);
        }
      }
      class tf extends tr {
        constructor(e, t) {
          super(e, "not-in", t);
        }
        matches(e) {
          if (eK(this.value.arrayValue, { nullValue: "NULL_VALUE" })) return !1;
          let t = e.data.field(this.field);
          return null !== t && !eK(this.value.arrayValue, t);
        }
      }
      class td extends tr {
        constructor(e, t) {
          super(e, "array-contains-any", t);
        }
        matches(e) {
          let t = e.data.field(this.field);
          return (
            !(!eY(t) || !t.arrayValue.values) &&
            t.arrayValue.values.some((e) => eK(this.value.arrayValue, e))
          );
        }
      }
      class tp {
        constructor(e, t = null, r = [], n = [], i = null, s = null, a = null) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.orderBy = r),
            (this.filters = n),
            (this.limit = i),
            (this.startAt = s),
            (this.endAt = a),
            (this.le = null);
        }
      }
      function tg(e, t = null, r = [], n = [], i = null, s = null, a = null) {
        return new tp(e, t, r, n, i, s, a);
      }
      function tm(e) {
        if (null === e.le) {
          let t = e.path.canonicalString();
          null !== e.collectionGroup && (t += "|cg:" + e.collectionGroup),
            (t += "|f:"),
            (t += e.filters
              .map((e) =>
                (function e(t) {
                  if (t instanceof tr)
                    return (
                      t.field.canonicalString() + t.op.toString() + eQ(t.value)
                    );
                  if (ts(t) && ti(t))
                    return t.filters.map((t) => e(t)).join(",");
                  {
                    let r = t.filters.map((t) => e(t)).join(",");
                    return `${t.op}(${r})`;
                  }
                })(e)
              )
              .join(",")),
            (t += "|ob:"),
            (t += e.orderBy
              .map((e) => e.field.canonicalString() + e.dir)
              .join(",")),
            null == e.limit || ((t += "|l:"), (t += e.limit)),
            e.startAt &&
              ((t += "|lb:"),
              (t += e.startAt.inclusive ? "b:" : "a:"),
              (t += e.startAt.position.map((e) => eQ(e)).join(","))),
            e.endAt &&
              ((t += "|ub:"),
              (t += e.endAt.inclusive ? "a:" : "b:"),
              (t += e.endAt.position.map((e) => eQ(e)).join(","))),
            (e.le = t);
        }
        return e.le;
      }
      function ty(e, t) {
        if (e.limit !== t.limit || e.orderBy.length !== t.orderBy.length)
          return !1;
        for (let i = 0; i < e.orderBy.length; i++) {
          var r, n;
          if (
            ((r = e.orderBy[i]),
            (n = t.orderBy[i]),
            !(r.dir === n.dir && r.field.isEqual(n.field)))
          )
            return !1;
        }
        if (e.filters.length !== t.filters.length) return !1;
        for (let r = 0; r < e.filters.length; r++)
          if (
            !(function e(t, r) {
              return t instanceof tr
                ? r instanceof tr &&
                    t.op === r.op &&
                    t.field.isEqual(r.field) &&
                    eH(t.value, r.value)
                : t instanceof tn
                ? r instanceof tn &&
                  t.op === r.op &&
                  t.filters.length === r.filters.length &&
                  t.filters.reduce((t, n, i) => t && e(n, r.filters[i]), !0)
                : void L();
            })(e.filters[r], t.filters[r])
          )
            return !1;
        return (
          e.collectionGroup === t.collectionGroup &&
          !!e.path.isEqual(t.path) &&
          !!e9(e.startAt, t.startAt) &&
          e9(e.endAt, t.endAt)
        );
      }
      function tv(e) {
        return (
          ea.isDocumentKey(e.path) &&
          null === e.collectionGroup &&
          0 === e.filters.length
        );
      }
      class tb {
        constructor(
          e,
          t = null,
          r = [],
          n = [],
          i = null,
          s = "F",
          a = null,
          o = null
        ) {
          (this.path = e),
            (this.collectionGroup = t),
            (this.explicitOrderBy = r),
            (this.filters = n),
            (this.limit = i),
            (this.limitType = s),
            (this.startAt = a),
            (this.endAt = o),
            (this.he = null),
            (this.Pe = null),
            (this.Te = null),
            this.startAt,
            this.endAt;
        }
      }
      function tw(e) {
        return (
          0 === e.filters.length &&
          null === e.limit &&
          null == e.startAt &&
          null == e.endAt &&
          (0 === e.explicitOrderBy.length ||
            (1 === e.explicitOrderBy.length &&
              e.explicitOrderBy[0].field.isKeyField()))
        );
      }
      function tS(e) {
        if (null === e.he) {
          let t;
          e.he = [];
          let r = new Set();
          for (let t of e.explicitOrderBy)
            e.he.push(t), r.add(t.field.canonicalString());
          let n =
            e.explicitOrderBy.length > 0
              ? e.explicitOrderBy[e.explicitOrderBy.length - 1].dir
              : "asc";
          ((t = new ew(es.comparator)),
          e.filters.forEach((e) => {
            e.getFlattenedFilters().forEach((e) => {
              e.isInequality() && (t = t.add(e.field));
            });
          }),
          t).forEach((t) => {
            r.has(t.canonicalString()) ||
              t.isKeyField() ||
              e.he.push(new te(t, n));
          }),
            r.has(es.keyField().canonicalString()) ||
              e.he.push(new te(es.keyField(), n));
        }
        return e.he;
      }
      function tE(e) {
        return (
          e.Pe ||
            (e.Pe = (function (e, t) {
              if ("F" === e.limitType)
                return tg(
                  e.path,
                  e.collectionGroup,
                  t,
                  e.filters,
                  e.limit,
                  e.startAt,
                  e.endAt
                );
              {
                t = t.map((e) => {
                  let t = "desc" === e.dir ? "asc" : "desc";
                  return new te(e.field, t);
                });
                let r = e.endAt
                    ? new e8(e.endAt.position, e.endAt.inclusive)
                    : null,
                  n = e.startAt
                    ? new e8(e.startAt.position, e.startAt.inclusive)
                    : null;
                return tg(
                  e.path,
                  e.collectionGroup,
                  t,
                  e.filters,
                  e.limit,
                  r,
                  n
                );
              }
            })(e, tS(e))),
          e.Pe
        );
      }
      function tx(e, t, r) {
        return new tb(
          e.path,
          e.collectionGroup,
          e.explicitOrderBy.slice(),
          e.filters.slice(),
          t,
          r,
          e.startAt,
          e.endAt
        );
      }
      function tT(e, t) {
        return ty(tE(e), tE(t)) && e.limitType === t.limitType;
      }
      function tC(e) {
        return `${tm(tE(e))}|lt:${e.limitType}`;
      }
      function t_(e) {
        var t;
        let r;
        return `Query(target=${
          ((r = (t = tE(e)).path.canonicalString()),
          null !== t.collectionGroup &&
            (r += " collectionGroup=" + t.collectionGroup),
          t.filters.length > 0 &&
            (r += `, filters: [${t.filters
              .map((e) =>
                (function e(t) {
                  return t instanceof tr
                    ? `${t.field.canonicalString()} ${t.op} ${eQ(t.value)}`
                    : t instanceof tn
                    ? t.op.toString() +
                      " {" +
                      t.getFilters().map(e).join(" ,") +
                      "}"
                    : "Filter";
                })(e)
              )
              .join(", ")}]`),
          null == t.limit || (r += ", limit: " + t.limit),
          t.orderBy.length > 0 &&
            (r += `, orderBy: [${t.orderBy
              .map((e) => `${e.field.canonicalString()} (${e.dir})`)
              .join(", ")}]`),
          t.startAt &&
            ((r += ", startAt: "),
            (r += t.startAt.inclusive ? "b:" : "a:"),
            (r += t.startAt.position.map((e) => eQ(e)).join(","))),
          t.endAt &&
            ((r += ", endAt: "),
            (r += t.endAt.inclusive ? "a:" : "b:"),
            (r += t.endAt.position.map((e) => eQ(e)).join(","))),
          `Target(${r})`)
        }; limitType=${e.limitType})`;
      }
      function tk(e, t) {
        return (
          t.isFoundDocument() &&
          (function (e, t) {
            let r = t.key.path;
            return null !== e.collectionGroup
              ? t.key.hasCollectionId(e.collectionGroup) && e.path.isPrefixOf(r)
              : ea.isDocumentKey(e.path)
              ? e.path.isEqual(r)
              : e.path.isImmediateParentOf(r);
          })(e, t) &&
          (function (e, t) {
            for (let r of tS(e))
              if (!r.field.isKeyField() && null === t.data.field(r.field))
                return !1;
            return !0;
          })(e, t) &&
          (function (e, t) {
            for (let r of e.filters) if (!r.matches(t)) return !1;
            return !0;
          })(e, t) &&
          (!e.startAt ||
            !!(function (e, t, r) {
              let n = e7(e, t, r);
              return e.inclusive ? n <= 0 : n < 0;
            })(e.startAt, tS(e), t)) &&
          (!e.endAt ||
            !!(function (e, t, r) {
              let n = e7(e, t, r);
              return e.inclusive ? n >= 0 : n > 0;
            })(e.endAt, tS(e), t))
        );
      }
      function tA(e) {
        return (t, r) => {
          let n = !1;
          for (let i of tS(e)) {
            let e = (function (e, t, r) {
              let n = e.field.isKeyField()
                ? ea.comparator(t.key, r.key)
                : (function (e, t, r) {
                    let n = t.data.field(e),
                      i = r.data.field(e);
                    return null !== n && null !== i ? eZ(n, i) : L();
                  })(e.field, t, r);
              switch (e.dir) {
                case "asc":
                  return n;
                case "desc":
                  return -1 * n;
                default:
                  return L();
              }
            })(i, t, r);
            if (0 !== e) return e;
            n = n || i.field.isKeyField();
          }
          return 0;
        };
      }
      class tI {
        constructor(e, t) {
          (this.mapKeyFn = e),
            (this.equalsFn = t),
            (this.inner = {}),
            (this.innerSize = 0);
        }
        get(e) {
          let t = this.mapKeyFn(e),
            r = this.inner[t];
          if (void 0 !== r) {
            for (let [t, n] of r) if (this.equalsFn(t, e)) return n;
          }
        }
        has(e) {
          return void 0 !== this.get(e);
        }
        set(e, t) {
          let r = this.mapKeyFn(e),
            n = this.inner[r];
          if (void 0 === n)
            return (this.inner[r] = [[e, t]]), void this.innerSize++;
          for (let r = 0; r < n.length; r++)
            if (this.equalsFn(n[r][0], e)) return void (n[r] = [e, t]);
          n.push([e, t]), this.innerSize++;
        }
        delete(e) {
          let t = this.mapKeyFn(e),
            r = this.inner[t];
          if (void 0 === r) return !1;
          for (let n = 0; n < r.length; n++)
            if (this.equalsFn(r[n][0], e))
              return (
                1 === r.length ? delete this.inner[t] : r.splice(n, 1),
                this.innerSize--,
                !0
              );
          return !1;
        }
        forEach(e) {
          eg(this.inner, (t, r) => {
            for (let [t, n] of r) e(t, n);
          });
        }
        isEmpty() {
          return em(this.inner);
        }
        size() {
          return this.innerSize;
        }
      }
      let tD = new ey(ea.comparator),
        tN = new ey(ea.comparator);
      function tR(...e) {
        let t = tN;
        for (let r of e) t = t.insert(r.key, r);
        return t;
      }
      function tP(e) {
        let t = tN;
        return e.forEach((e, r) => (t = t.insert(e, r.overlayedDocument))), t;
      }
      function tO() {
        return new tI(
          (e) => e.toString(),
          (e, t) => e.isEqual(t)
        );
      }
      let tL = new ey(ea.comparator),
        tM = new ew(ea.comparator);
      function t$(...e) {
        let t = tM;
        for (let r of e) t = t.add(r);
        return t;
      }
      let tV = new ew(W);
      function tF(e, t) {
        if (e.useProto3Json) {
          if (isNaN(t)) return { doubleValue: "NaN" };
          if (t === 1 / 0) return { doubleValue: "Infinity" };
          if (t === -1 / 0) return { doubleValue: "-Infinity" };
        }
        return { doubleValue: ed(t) ? "-0" : t };
      }
      function tB(e) {
        return { integerValue: "" + e };
      }
      class tU {
        constructor() {
          this._ = void 0;
        }
      }
      function tj(e, t) {
        return e instanceof tG
          ? eX(t) || (t && "doubleValue" in t)
            ? t
            : { integerValue: 0 }
          : null;
      }
      class tz extends tU {}
      class tq extends tU {
        constructor(e) {
          super(), (this.elements = e);
        }
      }
      function tH(e, t) {
        let r = tQ(t);
        for (let t of e.elements) r.some((e) => eH(e, t)) || r.push(t);
        return { arrayValue: { values: r } };
      }
      class tK extends tU {
        constructor(e) {
          super(), (this.elements = e);
        }
      }
      function tZ(e, t) {
        let r = tQ(t);
        for (let t of e.elements) r = r.filter((e) => !eH(e, t));
        return { arrayValue: { values: r } };
      }
      class tG extends tU {
        constructor(e, t) {
          super(), (this.serializer = e), (this.Ie = t);
        }
      }
      function tW(e) {
        return ek(e.integerValue || e.doubleValue);
      }
      function tQ(e) {
        return eY(e) && e.arrayValue.values ? e.arrayValue.values.slice() : [];
      }
      class tX {
        constructor(e, t) {
          (this.version = e), (this.transformResults = t);
        }
      }
      class tY {
        constructor(e, t) {
          (this.updateTime = e), (this.exists = t);
        }
        static none() {
          return new tY();
        }
        static exists(e) {
          return new tY(void 0, e);
        }
        static updateTime(e) {
          return new tY(e);
        }
        get isNone() {
          return void 0 === this.updateTime && void 0 === this.exists;
        }
        isEqual(e) {
          return (
            this.exists === e.exists &&
            (this.updateTime
              ? !!e.updateTime && this.updateTime.isEqual(e.updateTime)
              : !e.updateTime)
          );
        }
      }
      function tJ(e, t) {
        return void 0 !== e.updateTime
          ? t.isFoundDocument() && t.version.isEqual(e.updateTime)
          : void 0 === e.exists || e.exists === t.isFoundDocument();
      }
      class t0 {}
      function t1(e, t) {
        if (!e.hasLocalMutations || (t && 0 === t.fields.length)) return null;
        if (null === t)
          return e.isNoDocument()
            ? new t9(e.key, tY.none())
            : new t3(e.key, e.data, tY.none());
        {
          let r = e.data,
            n = e6.empty(),
            i = new ew(es.comparator);
          for (let e of t.fields)
            if (!i.has(e)) {
              let t = r.field(e);
              null === t &&
                e.length > 1 &&
                ((e = e.popLast()), (t = r.field(e))),
                null === t ? n.delete(e) : n.set(e, t),
                (i = i.add(e));
            }
          return new t6(e.key, n, new eE(i.toArray()), tY.none());
        }
      }
      function t2(e, t, r, n) {
        return e instanceof t3
          ? (function (e, t, r, n) {
              if (!tJ(e.precondition, t)) return r;
              let i = e.value.clone(),
                s = t7(e.fieldTransforms, n, t);
              return (
                i.setAll(s),
                t.convertToFoundDocument(t.version, i).setHasLocalMutations(),
                null
              );
            })(e, t, r, n)
          : e instanceof t6
          ? (function (e, t, r, n) {
              if (!tJ(e.precondition, t)) return r;
              let i = t7(e.fieldTransforms, n, t),
                s = t.data;
              return (s.setAll(t4(e)),
              s.setAll(i),
              t.convertToFoundDocument(t.version, s).setHasLocalMutations(),
              null === r)
                ? null
                : r
                    .unionWith(e.fieldMask.fields)
                    .unionWith(e.fieldTransforms.map((e) => e.field));
            })(e, t, r, n)
          : tJ(e.precondition, t)
          ? (t.convertToNoDocument(t.version).setHasLocalMutations(), null)
          : r;
      }
      function t5(e, t) {
        var r, n;
        return (
          e.type === t.type &&
          !!e.key.isEqual(t.key) &&
          !!e.precondition.isEqual(t.precondition) &&
          ((r = e.fieldTransforms),
          (n = t.fieldTransforms),
          !!(
            (void 0 === r && void 0 === n) ||
            (!(!r || !n) &&
              Y(r, n, (e, t) => {
                var r, n;
                return (
                  e.field.isEqual(t.field) &&
                  ((r = e.transform),
                  (n = t.transform),
                  (r instanceof tq && n instanceof tq) ||
                  (r instanceof tK && n instanceof tK)
                    ? Y(r.elements, n.elements, eH)
                    : r instanceof tG && n instanceof tG
                    ? eH(r.Ie, n.Ie)
                    : r instanceof tz && n instanceof tz)
                );
              }))
          )) &&
          (0 === e.type
            ? e.value.isEqual(t.value)
            : 1 !== e.type ||
              (e.data.isEqual(t.data) && e.fieldMask.isEqual(t.fieldMask)))
        );
      }
      class t3 extends t0 {
        constructor(e, t, r, n = []) {
          super(),
            (this.key = e),
            (this.value = t),
            (this.precondition = r),
            (this.fieldTransforms = n),
            (this.type = 0);
        }
        getFieldMask() {
          return null;
        }
      }
      class t6 extends t0 {
        constructor(e, t, r, n, i = []) {
          super(),
            (this.key = e),
            (this.data = t),
            (this.fieldMask = r),
            (this.precondition = n),
            (this.fieldTransforms = i),
            (this.type = 1);
        }
        getFieldMask() {
          return this.fieldMask;
        }
      }
      function t4(e) {
        let t = new Map();
        return (
          e.fieldMask.fields.forEach((r) => {
            if (!r.isEmpty()) {
              let n = e.data.field(r);
              t.set(r, n);
            }
          }),
          t
        );
      }
      function t8(e, t, r) {
        var n;
        let i = new Map();
        e.length === r.length || L();
        for (let s = 0; s < r.length; s++) {
          let a = e[s],
            o = a.transform,
            l = t.data.field(a.field);
          i.set(
            a.field,
            ((n = r[s]),
            o instanceof tq ? tH(o, l) : o instanceof tK ? tZ(o, l) : n)
          );
        }
        return i;
      }
      function t7(e, t, r) {
        let n = new Map();
        for (let i of e) {
          let e = i.transform,
            s = r.data.field(i.field);
          n.set(
            i.field,
            e instanceof tz
              ? (function (e, t) {
                  let r = {
                    fields: {
                      [eD]: { stringValue: eI },
                      [eR]: {
                        timestampValue: {
                          seconds: e.seconds,
                          nanos: e.nanoseconds,
                        },
                      },
                    },
                  };
                  return (
                    t && eP(t) && (t = eO(t)),
                    t && (r.fields[eN] = t),
                    { mapValue: r }
                  );
                })(t, s)
              : e instanceof tq
              ? tH(e, s)
              : e instanceof tK
              ? tZ(e, s)
              : (function (e, t) {
                  let r = tj(e, t),
                    n = tW(r) + tW(e.Ie);
                  return eX(r) && eX(e.Ie) ? tB(n) : tF(e.serializer, n);
                })(e, s)
          );
        }
        return n;
      }
      class t9 extends t0 {
        constructor(e, t) {
          super(),
            (this.key = e),
            (this.precondition = t),
            (this.type = 2),
            (this.fieldTransforms = []);
        }
        getFieldMask() {
          return null;
        }
      }
      class re extends t0 {
        constructor(e, t) {
          super(),
            (this.key = e),
            (this.precondition = t),
            (this.type = 3),
            (this.fieldTransforms = []);
        }
        getFieldMask() {
          return null;
        }
      }
      class rt {
        constructor(e, t, r, n) {
          (this.batchId = e),
            (this.localWriteTime = t),
            (this.baseMutations = r),
            (this.mutations = n);
        }
        applyToRemoteDocument(e, t) {
          let r = t.mutationResults;
          for (let t = 0; t < this.mutations.length; t++) {
            let i = this.mutations[t];
            if (i.key.isEqual(e.key)) {
              var n;
              (n = r[t]),
                i instanceof t3
                  ? (function (e, t, r) {
                      let n = e.value.clone(),
                        i = t8(e.fieldTransforms, t, r.transformResults);
                      n.setAll(i),
                        t
                          .convertToFoundDocument(r.version, n)
                          .setHasCommittedMutations();
                    })(i, e, n)
                  : i instanceof t6
                  ? (function (e, t, r) {
                      if (!tJ(e.precondition, t))
                        return void t.convertToUnknownDocument(r.version);
                      let n = t8(e.fieldTransforms, t, r.transformResults),
                        i = t.data;
                      i.setAll(t4(e)),
                        i.setAll(n),
                        t
                          .convertToFoundDocument(r.version, i)
                          .setHasCommittedMutations();
                    })(i, e, n)
                  : (function (e, t, r) {
                      t.convertToNoDocument(
                        r.version
                      ).setHasCommittedMutations();
                    })(0, e, n);
            }
          }
        }
        applyToLocalView(e, t) {
          for (let r of this.baseMutations)
            r.key.isEqual(e.key) && (t = t2(r, e, t, this.localWriteTime));
          for (let r of this.mutations)
            r.key.isEqual(e.key) && (t = t2(r, e, t, this.localWriteTime));
          return t;
        }
        applyToLocalDocumentSet(e, t) {
          let r = tO();
          return (
            this.mutations.forEach((n) => {
              let i = e.get(n.key),
                s = i.overlayedDocument,
                a = this.applyToLocalView(s, i.mutatedFields),
                o = t1(s, (a = t.has(n.key) ? null : a));
              null !== o && r.set(n.key, o),
                s.isValidDocument() || s.convertToNoDocument(ee.min());
            }),
            r
          );
        }
        keys() {
          return this.mutations.reduce((e, t) => e.add(t.key), t$());
        }
        isEqual(e) {
          return (
            this.batchId === e.batchId &&
            Y(this.mutations, e.mutations, (e, t) => t5(e, t)) &&
            Y(this.baseMutations, e.baseMutations, (e, t) => t5(e, t))
          );
        }
      }
      class rr {
        constructor(e, t, r, n) {
          (this.batch = e),
            (this.commitVersion = t),
            (this.mutationResults = r),
            (this.docVersions = n);
        }
        static from(e, t, r) {
          e.mutations.length === r.length || L();
          let n = tL,
            i = e.mutations;
          for (let e = 0; e < i.length; e++)
            n = n.insert(i[e].key, r[e].version);
          return new rr(e, t, r, n);
        }
      }
      class rn {
        constructor(e, t) {
          (this.largestBatchId = e), (this.mutation = t);
        }
        getKey() {
          return this.mutation.key;
        }
        isEqual(e) {
          return null !== e && this.mutation === e.mutation;
        }
        toString() {
          return `Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`;
        }
      }
      class ri {
        constructor(e, t) {
          (this.count = e), (this.unchangedNames = t);
        }
      }
      function rs(e) {
        if (void 0 === e) return R("GRPC error has no .code"), M.UNKNOWN;
        switch (e) {
          case d.OK:
            return M.OK;
          case d.CANCELLED:
            return M.CANCELLED;
          case d.UNKNOWN:
            return M.UNKNOWN;
          case d.DEADLINE_EXCEEDED:
            return M.DEADLINE_EXCEEDED;
          case d.RESOURCE_EXHAUSTED:
            return M.RESOURCE_EXHAUSTED;
          case d.INTERNAL:
            return M.INTERNAL;
          case d.UNAVAILABLE:
            return M.UNAVAILABLE;
          case d.UNAUTHENTICATED:
            return M.UNAUTHENTICATED;
          case d.INVALID_ARGUMENT:
            return M.INVALID_ARGUMENT;
          case d.NOT_FOUND:
            return M.NOT_FOUND;
          case d.ALREADY_EXISTS:
            return M.ALREADY_EXISTS;
          case d.PERMISSION_DENIED:
            return M.PERMISSION_DENIED;
          case d.FAILED_PRECONDITION:
            return M.FAILED_PRECONDITION;
          case d.ABORTED:
            return M.ABORTED;
          case d.OUT_OF_RANGE:
            return M.OUT_OF_RANGE;
          case d.UNIMPLEMENTED:
            return M.UNIMPLEMENTED;
          case d.DATA_LOSS:
            return M.DATA_LOSS;
          default:
            return L();
        }
      }
      ((p = d || (d = {}))[(p.OK = 0)] = "OK"),
        (p[(p.CANCELLED = 1)] = "CANCELLED"),
        (p[(p.UNKNOWN = 2)] = "UNKNOWN"),
        (p[(p.INVALID_ARGUMENT = 3)] = "INVALID_ARGUMENT"),
        (p[(p.DEADLINE_EXCEEDED = 4)] = "DEADLINE_EXCEEDED"),
        (p[(p.NOT_FOUND = 5)] = "NOT_FOUND"),
        (p[(p.ALREADY_EXISTS = 6)] = "ALREADY_EXISTS"),
        (p[(p.PERMISSION_DENIED = 7)] = "PERMISSION_DENIED"),
        (p[(p.UNAUTHENTICATED = 16)] = "UNAUTHENTICATED"),
        (p[(p.RESOURCE_EXHAUSTED = 8)] = "RESOURCE_EXHAUSTED"),
        (p[(p.FAILED_PRECONDITION = 9)] = "FAILED_PRECONDITION"),
        (p[(p.ABORTED = 10)] = "ABORTED"),
        (p[(p.OUT_OF_RANGE = 11)] = "OUT_OF_RANGE"),
        (p[(p.UNIMPLEMENTED = 12)] = "UNIMPLEMENTED"),
        (p[(p.INTERNAL = 13)] = "INTERNAL"),
        (p[(p.UNAVAILABLE = 14)] = "UNAVAILABLE"),
        (p[(p.DATA_LOSS = 15)] = "DATA_LOSS");
      let ra = new n([0xffffffff, 0xffffffff], 0);
      function ro(e) {
        let t = Z().encode(e),
          r = new i();
        return r.update(t), new Uint8Array(r.digest());
      }
      function rl(e) {
        let t = new DataView(e.buffer),
          r = t.getUint32(0, !0),
          i = t.getUint32(4, !0),
          s = t.getUint32(8, !0),
          a = t.getUint32(12, !0);
        return [new n([r, i], 0), new n([s, a], 0)];
      }
      class ru {
        constructor(e, t, r) {
          if (
            ((this.bitmap = e),
            (this.padding = t),
            (this.hashCount = r),
            t < 0 || t >= 8)
          )
            throw new rc(`Invalid padding: ${t}`);
          if (r < 0 || (e.length > 0 && 0 === this.hashCount))
            throw new rc(`Invalid hash count: ${r}`);
          if (0 === e.length && 0 !== t)
            throw new rc(`Invalid padding when bitmap length is 0: ${t}`);
          (this.Ee = 8 * e.length - t), (this.de = n.fromNumber(this.Ee));
        }
        Ae(e, t, r) {
          let i = e.add(t.multiply(n.fromNumber(r)));
          return (
            1 === i.compare(ra) && (i = new n([i.getBits(0), i.getBits(1)], 0)),
            i.modulo(this.de).toNumber()
          );
        }
        Re(e) {
          return !!(this.bitmap[Math.floor(e / 8)] & (1 << e % 8));
        }
        mightContain(e) {
          if (0 === this.Ee) return !1;
          let [t, r] = rl(ro(e));
          for (let e = 0; e < this.hashCount; e++) {
            let n = this.Ae(t, r, e);
            if (!this.Re(n)) return !1;
          }
          return !0;
        }
        static create(e, t, r) {
          let n = new ru(
            new Uint8Array(Math.ceil(e / 8)),
            e % 8 == 0 ? 0 : 8 - (e % 8),
            t
          );
          return r.forEach((e) => n.insert(e)), n;
        }
        insert(e) {
          if (0 === this.Ee) return;
          let [t, r] = rl(ro(e));
          for (let e = 0; e < this.hashCount; e++) {
            let n = this.Ae(t, r, e);
            this.Ve(n);
          }
        }
        Ve(e) {
          let t = Math.floor(e / 8);
          this.bitmap[t] |= 1 << e % 8;
        }
      }
      class rc extends Error {
        constructor() {
          super(...arguments), (this.name = "BloomFilterError");
        }
      }
      class rh {
        constructor(e, t, r, n, i) {
          (this.snapshotVersion = e),
            (this.targetChanges = t),
            (this.targetMismatches = r),
            (this.documentUpdates = n),
            (this.resolvedLimboDocuments = i);
        }
        static createSynthesizedRemoteEventForCurrentChange(e, t, r) {
          let n = new Map();
          return (
            n.set(e, rf.createSynthesizedTargetChangeForCurrentChange(e, t, r)),
            new rh(ee.min(), n, new ey(W), tD, t$())
          );
        }
      }
      class rf {
        constructor(e, t, r, n, i) {
          (this.resumeToken = e),
            (this.current = t),
            (this.addedDocuments = r),
            (this.modifiedDocuments = n),
            (this.removedDocuments = i);
        }
        static createSynthesizedTargetChangeForCurrentChange(e, t, r) {
          return new rf(r, t, t$(), t$(), t$());
        }
      }
      class rd {
        constructor(e, t, r, n) {
          (this.me = e),
            (this.removedTargetIds = t),
            (this.key = r),
            (this.fe = n);
        }
      }
      class rp {
        constructor(e, t) {
          (this.targetId = e), (this.ge = t);
        }
      }
      class rg {
        constructor(e, t, r = eT.EMPTY_BYTE_STRING, n = null) {
          (this.state = e),
            (this.targetIds = t),
            (this.resumeToken = r),
            (this.cause = n);
        }
      }
      class rm {
        constructor() {
          (this.pe = 0),
            (this.ye = rb()),
            (this.we = eT.EMPTY_BYTE_STRING),
            (this.Se = !1),
            (this.be = !0);
        }
        get current() {
          return this.Se;
        }
        get resumeToken() {
          return this.we;
        }
        get De() {
          return 0 !== this.pe;
        }
        get ve() {
          return this.be;
        }
        Ce(e) {
          e.approximateByteSize() > 0 && ((this.be = !0), (this.we = e));
        }
        Fe() {
          let e = t$(),
            t = t$(),
            r = t$();
          return (
            this.ye.forEach((n, i) => {
              switch (i) {
                case 0:
                  e = e.add(n);
                  break;
                case 2:
                  t = t.add(n);
                  break;
                case 1:
                  r = r.add(n);
                  break;
                default:
                  L();
              }
            }),
            new rf(this.we, this.Se, e, t, r)
          );
        }
        Me() {
          (this.be = !1), (this.ye = rb());
        }
        xe(e, t) {
          (this.be = !0), (this.ye = this.ye.insert(e, t));
        }
        Oe(e) {
          (this.be = !0), (this.ye = this.ye.remove(e));
        }
        Ne() {
          this.pe += 1;
        }
        Be() {
          (this.pe -= 1), this.pe >= 0 || L();
        }
        Le() {
          (this.be = !0), (this.Se = !0);
        }
      }
      class ry {
        constructor(e) {
          (this.ke = e),
            (this.qe = new Map()),
            (this.Qe = tD),
            (this.$e = rv()),
            (this.Ue = rv()),
            (this.Ke = new ey(W));
        }
        We(e) {
          for (let t of e.me)
            e.fe && e.fe.isFoundDocument()
              ? this.Ge(t, e.fe)
              : this.ze(t, e.key, e.fe);
          for (let t of e.removedTargetIds) this.ze(t, e.key, e.fe);
        }
        je(e) {
          this.forEachTarget(e, (t) => {
            let r = this.He(t);
            switch (e.state) {
              case 0:
                this.Je(t) && r.Ce(e.resumeToken);
                break;
              case 1:
                r.Be(), r.De || r.Me(), r.Ce(e.resumeToken);
                break;
              case 2:
                r.Be(), r.De || this.removeTarget(t);
                break;
              case 3:
                this.Je(t) && (r.Le(), r.Ce(e.resumeToken));
                break;
              case 4:
                this.Je(t) && (this.Ye(t), r.Ce(e.resumeToken));
                break;
              default:
                L();
            }
          });
        }
        forEachTarget(e, t) {
          e.targetIds.length > 0
            ? e.targetIds.forEach(t)
            : this.qe.forEach((e, r) => {
                this.Je(r) && t(r);
              });
        }
        Ze(e) {
          let t = e.targetId,
            r = e.ge.count,
            n = this.Xe(t);
          if (n) {
            let i = n.target;
            if (tv(i)) {
              if (0 === r) {
                let e = new ea(i.path);
                this.ze(t, e, e4.newNoDocument(e, ee.min()));
              } else 1 === r || L();
            } else {
              let n = this.et(t);
              if (n !== r) {
                let r = this.tt(e),
                  i = r ? this.nt(r, e, n) : 1;
                0 !== i &&
                  (this.Ye(t),
                  (this.Ke = this.Ke.insert(
                    t,
                    2 === i
                      ? "TargetPurposeExistenceFilterMismatchBloom"
                      : "TargetPurposeExistenceFilterMismatch"
                  )));
              }
            }
          }
        }
        tt(e) {
          let t, r;
          let n = e.ge.unchangedNames;
          if (!n || !n.bits) return null;
          let {
            bits: { bitmap: i = "", padding: s = 0 },
            hashCount: a = 0,
          } = n;
          try {
            t = eA(i).toUint8Array();
          } catch (e) {
            if (e instanceof ex)
              return (
                P(
                  "Decoding the base64 bloom filter in existence filter failed (" +
                    e.message +
                    "); ignoring the bloom filter and falling back to full re-query."
                ),
                null
              );
            throw e;
          }
          try {
            r = new ru(t, s, a);
          } catch (e) {
            return (
              P(
                e instanceof rc
                  ? "BloomFilter error: "
                  : "Applying bloom filter failed: ",
                e
              ),
              null
            );
          }
          return 0 === r.Ee ? null : r;
        }
        nt(e, t, r) {
          return 2 * (t.ge.count !== r - this.st(e, t.targetId));
        }
        st(e, t) {
          let r = this.ke.getRemoteKeysForTarget(t),
            n = 0;
          return (
            r.forEach((r) => {
              let i = this.ke.it(),
                s = `projects/${i.projectId}/databases/${
                  i.database
                }/documents/${r.path.canonicalString()}`;
              e.mightContain(s) || (this.ze(t, r, null), n++);
            }),
            n
          );
        }
        ot(e) {
          let t = new Map();
          this.qe.forEach((r, n) => {
            let i = this.Xe(n);
            if (i) {
              if (r.current && tv(i.target)) {
                let t = new ea(i.target.path);
                this._t(t).has(n) ||
                  this.ut(n, t) ||
                  this.ze(n, t, e4.newNoDocument(t, e));
              }
              r.ve && (t.set(n, r.Fe()), r.Me());
            }
          });
          let r = t$();
          this.Ue.forEach((e, t) => {
            let n = !0;
            t.forEachWhile((e) => {
              let t = this.Xe(e);
              return (
                !t ||
                "TargetPurposeLimboResolution" === t.purpose ||
                ((n = !1), !1)
              );
            }),
              n && (r = r.add(e));
          }),
            this.Qe.forEach((t, r) => r.setReadTime(e));
          let n = new rh(e, t, this.Ke, this.Qe, r);
          return (
            (this.Qe = tD),
            (this.$e = rv()),
            (this.Ue = rv()),
            (this.Ke = new ey(W)),
            n
          );
        }
        Ge(e, t) {
          if (!this.Je(e)) return;
          let r = 2 * !!this.ut(e, t.key);
          this.He(e).xe(t.key, r),
            (this.Qe = this.Qe.insert(t.key, t)),
            (this.$e = this.$e.insert(t.key, this._t(t.key).add(e))),
            (this.Ue = this.Ue.insert(t.key, this.ct(t.key).add(e)));
        }
        ze(e, t, r) {
          if (!this.Je(e)) return;
          let n = this.He(e);
          this.ut(e, t) ? n.xe(t, 1) : n.Oe(t),
            (this.Ue = this.Ue.insert(t, this.ct(t).delete(e))),
            (this.Ue = this.Ue.insert(t, this.ct(t).add(e))),
            r && (this.Qe = this.Qe.insert(t, r));
        }
        removeTarget(e) {
          this.qe.delete(e);
        }
        et(e) {
          let t = this.He(e).Fe();
          return (
            this.ke.getRemoteKeysForTarget(e).size +
            t.addedDocuments.size -
            t.removedDocuments.size
          );
        }
        Ne(e) {
          this.He(e).Ne();
        }
        He(e) {
          let t = this.qe.get(e);
          return t || ((t = new rm()), this.qe.set(e, t)), t;
        }
        ct(e) {
          let t = this.Ue.get(e);
          return t || ((t = new ew(W)), (this.Ue = this.Ue.insert(e, t))), t;
        }
        _t(e) {
          let t = this.$e.get(e);
          return t || ((t = new ew(W)), (this.$e = this.$e.insert(e, t))), t;
        }
        Je(e) {
          let t = null !== this.Xe(e);
          return (
            t || N("WatchChangeAggregator", "Detected inactive target", e), t
          );
        }
        Xe(e) {
          let t = this.qe.get(e);
          return t && t.De ? null : this.ke.lt(e);
        }
        Ye(e) {
          this.qe.set(e, new rm()),
            this.ke.getRemoteKeysForTarget(e).forEach((t) => {
              this.ze(e, t, null);
            });
        }
        ut(e, t) {
          return this.ke.getRemoteKeysForTarget(e).has(t);
        }
      }
      function rv() {
        return new ey(ea.comparator);
      }
      function rb() {
        return new ey(ea.comparator);
      }
      let rw = { asc: "ASCENDING", desc: "DESCENDING" },
        rS = {
          "<": "LESS_THAN",
          "<=": "LESS_THAN_OR_EQUAL",
          ">": "GREATER_THAN",
          ">=": "GREATER_THAN_OR_EQUAL",
          "==": "EQUAL",
          "!=": "NOT_EQUAL",
          "array-contains": "ARRAY_CONTAINS",
          in: "IN",
          "not-in": "NOT_IN",
          "array-contains-any": "ARRAY_CONTAINS_ANY",
        },
        rE = { and: "AND", or: "OR" };
      class rx {
        constructor(e, t) {
          (this.databaseId = e), (this.useProto3Json = t);
        }
      }
      function rT(e, t) {
        return e.useProto3Json || null == t ? t : { value: t };
      }
      function rC(e, t) {
        return e.useProto3Json
          ? `${new Date(1e3 * t.seconds)
              .toISOString()
              .replace(/\.\d*/, "")
              .replace("Z", "")}.${("000000000" + t.nanoseconds).slice(-9)}Z`
          : { seconds: "" + t.seconds, nanos: t.nanoseconds };
      }
      function r_(e, t) {
        return e.useProto3Json ? t.toBase64() : t.toUint8Array();
      }
      function rk(e) {
        return (
          e || L(),
          ee.fromTimestamp(
            (function (e) {
              let t = e_(e);
              return new J(t.seconds, t.nanos);
            })(e)
          )
        );
      }
      function rA(e, t) {
        return rI(e, t).canonicalString();
      }
      function rI(e, t) {
        let r = new en([
          "projects",
          e.projectId,
          "databases",
          e.database,
        ]).child("documents");
        return void 0 === t ? r : r.child(t);
      }
      function rD(e) {
        let t = en.fromString(e);
        return rF(t) || L(), t;
      }
      function rN(e, t) {
        return rA(e.databaseId, t.path);
      }
      function rR(e, t) {
        let r = rD(t);
        if (r.get(1) !== e.databaseId.projectId)
          throw new $(
            M.INVALID_ARGUMENT,
            "Tried to deserialize key from different project: " +
              r.get(1) +
              " vs " +
              e.databaseId.projectId
          );
        if (r.get(3) !== e.databaseId.database)
          throw new $(
            M.INVALID_ARGUMENT,
            "Tried to deserialize key from different database: " +
              r.get(3) +
              " vs " +
              e.databaseId.database
          );
        return new ea(rL(r));
      }
      function rP(e, t) {
        return rA(e.databaseId, t);
      }
      function rO(e) {
        return new en([
          "projects",
          e.databaseId.projectId,
          "databases",
          e.databaseId.database,
        ]).canonicalString();
      }
      function rL(e) {
        return (e.length > 4 && "documents" === e.get(4)) || L(), e.popFirst(5);
      }
      function rM(e, t, r) {
        return { name: rN(e, t), fields: r.value.mapValue.fields };
      }
      function r$(e) {
        return { fieldPath: e.canonicalString() };
      }
      function rV(e) {
        return es.fromServerFormat(e.fieldPath);
      }
      function rF(e) {
        return (
          e.length >= 4 && "projects" === e.get(0) && "databases" === e.get(2)
        );
      }
      class rB {
        constructor(
          e,
          t,
          r,
          n,
          i = ee.min(),
          s = ee.min(),
          a = eT.EMPTY_BYTE_STRING,
          o = null
        ) {
          (this.target = e),
            (this.targetId = t),
            (this.purpose = r),
            (this.sequenceNumber = n),
            (this.snapshotVersion = i),
            (this.lastLimboFreeSnapshotVersion = s),
            (this.resumeToken = a),
            (this.expectedCount = o);
        }
        withSequenceNumber(e) {
          return new rB(
            this.target,
            this.targetId,
            this.purpose,
            e,
            this.snapshotVersion,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken,
            this.expectedCount
          );
        }
        withResumeToken(e, t) {
          return new rB(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            t,
            this.lastLimboFreeSnapshotVersion,
            e,
            null
          );
        }
        withExpectedCount(e) {
          return new rB(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            this.snapshotVersion,
            this.lastLimboFreeSnapshotVersion,
            this.resumeToken,
            e
          );
        }
        withLastLimboFreeSnapshotVersion(e) {
          return new rB(
            this.target,
            this.targetId,
            this.purpose,
            this.sequenceNumber,
            this.snapshotVersion,
            e,
            this.resumeToken,
            this.expectedCount
          );
        }
      }
      class rU {
        constructor(e) {
          this.Tt = e;
        }
      }
      class rj {
        constructor() {}
        At(e, t) {
          this.Rt(e, t), t.Vt();
        }
        Rt(e, t) {
          if ("nullValue" in e) this.ft(t, 5);
          else if ("booleanValue" in e) this.ft(t, 10), t.gt(+!!e.booleanValue);
          else if ("integerValue" in e)
            this.ft(t, 15), t.gt(ek(e.integerValue));
          else if ("doubleValue" in e) {
            let r = ek(e.doubleValue);
            isNaN(r)
              ? this.ft(t, 13)
              : (this.ft(t, 15), ed(r) ? t.gt(0) : t.gt(r));
          } else if ("timestampValue" in e) {
            let r = e.timestampValue;
            this.ft(t, 20),
              "string" == typeof r && (r = e_(r)),
              t.yt(`${r.seconds || ""}`),
              t.gt(r.nanos || 0);
          } else if ("stringValue" in e) this.wt(e.stringValue, t), this.St(t);
          else if ("bytesValue" in e)
            this.ft(t, 30), t.bt(eA(e.bytesValue)), this.St(t);
          else if ("referenceValue" in e) this.Dt(e.referenceValue, t);
          else if ("geoPointValue" in e) {
            let r = e.geoPointValue;
            this.ft(t, 45), t.gt(r.latitude || 0), t.gt(r.longitude || 0);
          } else
            "mapValue" in e
              ? e3(e)
                ? this.ft(t, Number.MAX_SAFE_INTEGER)
                : e2(e)
                ? this.vt(e.mapValue, t)
                : (this.Ct(e.mapValue, t), this.St(t))
              : "arrayValue" in e
              ? (this.Ft(e.arrayValue, t), this.St(t))
              : L();
        }
        wt(e, t) {
          this.ft(t, 25), this.Mt(e, t);
        }
        Mt(e, t) {
          t.yt(e);
        }
        Ct(e, t) {
          let r = e.fields || {};
          for (let e of (this.ft(t, 55), Object.keys(r)))
            this.wt(e, t), this.Rt(r[e], t);
        }
        vt(e, t) {
          var r, n;
          let i = e.fields || {};
          this.ft(t, 53);
          let s =
            (null ===
              (n =
                null === (r = i[ez].arrayValue) || void 0 === r
                  ? void 0
                  : r.values) || void 0 === n
              ? void 0
              : n.length) || 0;
          this.ft(t, 15), t.gt(ek(s)), this.wt(ez, t), this.Rt(i[ez], t);
        }
        Ft(e, t) {
          let r = e.values || [];
          for (let e of (this.ft(t, 50), r)) this.Rt(e, t);
        }
        Dt(e, t) {
          this.ft(t, 37),
            ea.fromName(e).path.forEach((e) => {
              this.ft(t, 60), this.Mt(e, t);
            });
        }
        ft(e, t) {
          e.gt(t);
        }
        St(e) {
          e.gt(2);
        }
      }
      rj.xt = new rj();
      class rz {
        constructor() {
          this.Tn = new rq();
        }
        addToCollectionParentIndex(e, t) {
          return this.Tn.add(t), ec.resolve();
        }
        getCollectionParents(e, t) {
          return ec.resolve(this.Tn.getEntries(t));
        }
        addFieldIndex(e, t) {
          return ec.resolve();
        }
        deleteFieldIndex(e, t) {
          return ec.resolve();
        }
        deleteAllFieldIndexes(e) {
          return ec.resolve();
        }
        createTargetIndexes(e, t) {
          return ec.resolve();
        }
        getDocumentsMatchingTarget(e, t) {
          return ec.resolve(null);
        }
        getIndexType(e, t) {
          return ec.resolve(0);
        }
        getFieldIndexes(e, t) {
          return ec.resolve([]);
        }
        getNextCollectionGroupToUpdate(e) {
          return ec.resolve(null);
        }
        getMinOffset(e, t) {
          return ec.resolve(eo.min());
        }
        getMinOffsetFromCollectionGroup(e, t) {
          return ec.resolve(eo.min());
        }
        updateCollectionGroup(e, t, r) {
          return ec.resolve();
        }
        updateIndexEntries(e, t) {
          return ec.resolve();
        }
      }
      class rq {
        constructor() {
          this.index = {};
        }
        add(e) {
          let t = e.lastSegment(),
            r = e.popLast(),
            n = this.index[t] || new ew(en.comparator),
            i = !n.has(r);
          return (this.index[t] = n.add(r)), i;
        }
        has(e) {
          let t = e.lastSegment(),
            r = e.popLast(),
            n = this.index[t];
          return n && n.has(r);
        }
        getEntries(e) {
          return (this.index[e] || new ew(en.comparator)).toArray();
        }
      }
      new Uint8Array(0);
      let rH = {
        didRun: !1,
        sequenceNumbersCollected: 0,
        targetsRemoved: 0,
        documentsRemoved: 0,
      };
      class rK {
        static withCacheSize(e) {
          return new rK(
            e,
            rK.DEFAULT_COLLECTION_PERCENTILE,
            rK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
          );
        }
        constructor(e, t, r) {
          (this.cacheSizeCollectionThreshold = e),
            (this.percentileToCollect = t),
            (this.maximumSequenceNumbersToCollect = r);
        }
      }
      (rK.DEFAULT_COLLECTION_PERCENTILE = 10),
        (rK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT = 1e3),
        (rK.DEFAULT = new rK(
          0x2800000,
          rK.DEFAULT_COLLECTION_PERCENTILE,
          rK.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT
        )),
        (rK.DISABLED = new rK(-1, 0, 0));
      class rZ {
        constructor(e) {
          this.$n = e;
        }
        next() {
          return (this.$n += 2), this.$n;
        }
        static Un() {
          return new rZ(0);
        }
        static Kn() {
          return new rZ(-1);
        }
      }
      let rG = "LruGarbageCollector";
      function rW([e, t], [r, n]) {
        let i = W(e, r);
        return 0 === i ? W(t, n) : i;
      }
      class rQ {
        constructor(e) {
          (this.Hn = e), (this.buffer = new ew(rW)), (this.Jn = 0);
        }
        Yn() {
          return ++this.Jn;
        }
        Zn(e) {
          let t = [e, this.Yn()];
          if (this.buffer.size < this.Hn) this.buffer = this.buffer.add(t);
          else {
            let e = this.buffer.last();
            0 > rW(t, e) && (this.buffer = this.buffer.delete(e).add(t));
          }
        }
        get maxValue() {
          return this.buffer.last()[0];
        }
      }
      class rX {
        constructor(e, t, r) {
          (this.garbageCollector = e),
            (this.asyncQueue = t),
            (this.localStore = r),
            (this.Xn = null);
        }
        start() {
          -1 !== this.garbageCollector.params.cacheSizeCollectionThreshold &&
            this.er(6e4);
        }
        stop() {
          this.Xn && (this.Xn.cancel(), (this.Xn = null));
        }
        get started() {
          return null !== this.Xn;
        }
        er(e) {
          N(rG, `Garbage collection scheduled in ${e}ms`),
            (this.Xn = this.asyncQueue.enqueueAfterDelay(
              "lru_garbage_collection",
              e,
              async () => {
                this.Xn = null;
                try {
                  await this.localStore.collectGarbage(this.garbageCollector);
                } catch (e) {
                  eh(e)
                    ? N(
                        rG,
                        "Ignoring IndexedDB error during garbage collection: ",
                        e
                      )
                    : await eu(e);
                }
                await this.er(3e5);
              }
            ));
        }
      }
      class rY {
        constructor(e, t) {
          (this.tr = e), (this.params = t);
        }
        calculateTargetCount(e, t) {
          return this.tr.nr(e).next((e) => Math.floor((t / 100) * e));
        }
        nthSequenceNumber(e, t) {
          if (0 === t) return ec.resolve(ef.ae);
          let r = new rQ(t);
          return this.tr
            .forEachTarget(e, (e) => r.Zn(e.sequenceNumber))
            .next(() => this.tr.rr(e, (e) => r.Zn(e)))
            .next(() => r.maxValue);
        }
        removeTargets(e, t, r) {
          return this.tr.removeTargets(e, t, r);
        }
        removeOrphanedDocuments(e, t) {
          return this.tr.removeOrphanedDocuments(e, t);
        }
        collect(e, t) {
          return -1 === this.params.cacheSizeCollectionThreshold
            ? (N("LruGarbageCollector", "Garbage collection skipped; disabled"),
              ec.resolve(rH))
            : this.getCacheSize(e).next((r) =>
                r < this.params.cacheSizeCollectionThreshold
                  ? (N(
                      "LruGarbageCollector",
                      `Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`
                    ),
                    rH)
                  : this.ir(e, t)
              );
        }
        getCacheSize(e) {
          return this.tr.getCacheSize(e);
        }
        ir(e, t) {
          let r, n, i, s, a, o, l;
          let u = Date.now();
          return this.calculateTargetCount(e, this.params.percentileToCollect)
            .next(
              (t) => (
                t > this.params.maximumSequenceNumbersToCollect
                  ? (N(
                      "LruGarbageCollector",
                      `Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`
                    ),
                    (n = this.params.maximumSequenceNumbersToCollect))
                  : (n = t),
                (s = Date.now()),
                this.nthSequenceNumber(e, n)
              )
            )
            .next(
              (n) => ((r = n), (a = Date.now()), this.removeTargets(e, r, t))
            )
            .next(
              (t) => (
                (i = t), (o = Date.now()), this.removeOrphanedDocuments(e, r)
              )
            )
            .next(
              (e) => (
                (l = Date.now()),
                D() <= b.in.DEBUG &&
                  N(
                    "LruGarbageCollector",
                    `LRU Garbage Collection
	Counted targets in ${s - u}ms
	Determined least recently used ${n} in ` +
                      (a - s) +
                      "ms\n" +
                      `	Removed ${i} targets in ` +
                      (o - a) +
                      "ms\n" +
                      `	Removed ${e} documents in ` +
                      (l - o) +
                      "ms\n" +
                      `Total Duration: ${l - u}ms`
                  ),
                ec.resolve({
                  didRun: !0,
                  sequenceNumbersCollected: n,
                  targetsRemoved: i,
                  documentsRemoved: e,
                })
              )
            );
        }
      }
      class rJ {
        constructor() {
          (this.changes = new tI(
            (e) => e.toString(),
            (e, t) => e.isEqual(t)
          )),
            (this.changesApplied = !1);
        }
        addEntry(e) {
          this.assertNotApplied(), this.changes.set(e.key, e);
        }
        removeEntry(e, t) {
          this.assertNotApplied(),
            this.changes.set(e, e4.newInvalidDocument(e).setReadTime(t));
        }
        getEntry(e, t) {
          this.assertNotApplied();
          let r = this.changes.get(t);
          return void 0 !== r ? ec.resolve(r) : this.getFromCache(e, t);
        }
        getEntries(e, t) {
          return this.getAllFromCache(e, t);
        }
        apply(e) {
          return (
            this.assertNotApplied(),
            (this.changesApplied = !0),
            this.applyChanges(e)
          );
        }
        assertNotApplied() {}
      }
      class r0 {
        constructor(e, t) {
          (this.overlayedDocument = e), (this.mutatedFields = t);
        }
      }
      class r1 {
        constructor(e, t, r, n) {
          (this.remoteDocumentCache = e),
            (this.mutationQueue = t),
            (this.documentOverlayCache = r),
            (this.indexManager = n);
        }
        getDocument(e, t) {
          let r = null;
          return this.documentOverlayCache
            .getOverlay(e, t)
            .next((n) => ((r = n), this.remoteDocumentCache.getEntry(e, t)))
            .next(
              (e) => (null !== r && t2(r.mutation, e, eE.empty(), J.now()), e)
            );
        }
        getDocuments(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) =>
              this.getLocalViewOfDocuments(e, t, t$()).next(() => t)
            );
        }
        getLocalViewOfDocuments(e, t, r = t$()) {
          let n = tO();
          return this.populateOverlays(e, n, t).next(() =>
            this.computeViews(e, t, n, r).next((e) => {
              let t = tR();
              return (
                e.forEach((e, r) => {
                  t = t.insert(e, r.overlayedDocument);
                }),
                t
              );
            })
          );
        }
        getOverlayedDocuments(e, t) {
          let r = tO();
          return this.populateOverlays(e, r, t).next(() =>
            this.computeViews(e, t, r, t$())
          );
        }
        populateOverlays(e, t, r) {
          let n = [];
          return (
            r.forEach((e) => {
              t.has(e) || n.push(e);
            }),
            this.documentOverlayCache.getOverlays(e, n).next((e) => {
              e.forEach((e, r) => {
                t.set(e, r);
              });
            })
          );
        }
        computeViews(e, t, r, n) {
          let i = tD,
            s = tO(),
            a = tO();
          return (
            t.forEach((e, t) => {
              let a = r.get(t.key);
              n.has(t.key) && (void 0 === a || a.mutation instanceof t6)
                ? (i = i.insert(t.key, t))
                : void 0 !== a
                ? (s.set(t.key, a.mutation.getFieldMask()),
                  t2(a.mutation, t, a.mutation.getFieldMask(), J.now()))
                : s.set(t.key, eE.empty());
            }),
            this.recalculateAndSaveOverlays(e, i).next(
              (e) => (
                e.forEach((e, t) => s.set(e, t)),
                t.forEach((e, t) => {
                  var r;
                  return a.set(
                    e,
                    new r0(
                      t,
                      null !== (r = s.get(e)) && void 0 !== r ? r : null
                    )
                  );
                }),
                a
              )
            )
          );
        }
        recalculateAndSaveOverlays(e, t) {
          let r = tO(),
            n = new ey((e, t) => e - t),
            i = t$();
          return this.mutationQueue
            .getAllMutationBatchesAffectingDocumentKeys(e, t)
            .next((e) => {
              for (let i of e)
                i.keys().forEach((e) => {
                  let s = t.get(e);
                  if (null === s) return;
                  let a = r.get(e) || eE.empty();
                  (a = i.applyToLocalView(s, a)), r.set(e, a);
                  let o = (n.get(i.batchId) || t$()).add(e);
                  n = n.insert(i.batchId, o);
                });
            })
            .next(() => {
              let s = [],
                a = n.getReverseIterator();
              for (; a.hasNext(); ) {
                let n = a.getNext(),
                  o = n.key,
                  l = n.value,
                  u = tO();
                l.forEach((e) => {
                  if (!i.has(e)) {
                    let n = t1(t.get(e), r.get(e));
                    null !== n && u.set(e, n), (i = i.add(e));
                  }
                }),
                  s.push(this.documentOverlayCache.saveOverlays(e, o, u));
              }
              return ec.waitFor(s);
            })
            .next(() => r);
        }
        recalculateAndSaveOverlaysForDocumentKeys(e, t) {
          return this.remoteDocumentCache
            .getEntries(e, t)
            .next((t) => this.recalculateAndSaveOverlays(e, t));
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          return ea.isDocumentKey(t.path) &&
            null === t.collectionGroup &&
            0 === t.filters.length
            ? this.getDocumentsMatchingDocumentQuery(e, t.path)
            : null !== t.collectionGroup
            ? this.getDocumentsMatchingCollectionGroupQuery(e, t, r, n)
            : this.getDocumentsMatchingCollectionQuery(e, t, r, n);
        }
        getNextDocuments(e, t, r, n) {
          return this.remoteDocumentCache
            .getAllFromCollectionGroup(e, t, r, n)
            .next((i) => {
              let s =
                  n - i.size > 0
                    ? this.documentOverlayCache.getOverlaysForCollectionGroup(
                        e,
                        t,
                        r.largestBatchId,
                        n - i.size
                      )
                    : ec.resolve(tO()),
                a = -1,
                o = i;
              return s.next((t) =>
                ec
                  .forEach(
                    t,
                    (t, r) => (
                      a < r.largestBatchId && (a = r.largestBatchId),
                      i.get(t)
                        ? ec.resolve()
                        : this.remoteDocumentCache.getEntry(e, t).next((e) => {
                            o = o.insert(t, e);
                          })
                    )
                  )
                  .next(() => this.populateOverlays(e, t, i))
                  .next(() => this.computeViews(e, o, t, t$()))
                  .next((e) => ({ batchId: a, changes: tP(e) }))
              );
            });
        }
        getDocumentsMatchingDocumentQuery(e, t) {
          return this.getDocument(e, new ea(t)).next((e) => {
            let t = tR();
            return e.isFoundDocument() && (t = t.insert(e.key, e)), t;
          });
        }
        getDocumentsMatchingCollectionGroupQuery(e, t, r, n) {
          let i = t.collectionGroup,
            s = tR();
          return this.indexManager.getCollectionParents(e, i).next((a) =>
            ec
              .forEach(a, (a) => {
                let o = new tb(
                  a.child(i),
                  null,
                  t.explicitOrderBy.slice(),
                  t.filters.slice(),
                  t.limit,
                  t.limitType,
                  t.startAt,
                  t.endAt
                );
                return this.getDocumentsMatchingCollectionQuery(
                  e,
                  o,
                  r,
                  n
                ).next((e) => {
                  e.forEach((e, t) => {
                    s = s.insert(e, t);
                  });
                });
              })
              .next(() => s)
          );
        }
        getDocumentsMatchingCollectionQuery(e, t, r, n) {
          let i;
          return this.documentOverlayCache
            .getOverlaysForCollection(e, t.path, r.largestBatchId)
            .next(
              (s) => (
                (i = s),
                this.remoteDocumentCache.getDocumentsMatchingQuery(
                  e,
                  t,
                  r,
                  i,
                  n
                )
              )
            )
            .next((e) => {
              i.forEach((t, r) => {
                let n = r.getKey();
                null === e.get(n) &&
                  (e = e.insert(n, e4.newInvalidDocument(n)));
              });
              let r = tR();
              return (
                e.forEach((e, n) => {
                  let s = i.get(e);
                  void 0 !== s && t2(s.mutation, n, eE.empty(), J.now()),
                    tk(t, n) && (r = r.insert(e, n));
                }),
                r
              );
            });
        }
      }
      class r2 {
        constructor(e) {
          (this.serializer = e), (this.dr = new Map()), (this.Ar = new Map());
        }
        getBundleMetadata(e, t) {
          return ec.resolve(this.dr.get(t));
        }
        saveBundleMetadata(e, t) {
          return (
            this.dr.set(t.id, {
              id: t.id,
              version: t.version,
              createTime: rk(t.createTime),
            }),
            ec.resolve()
          );
        }
        getNamedQuery(e, t) {
          return ec.resolve(this.Ar.get(t));
        }
        saveNamedQuery(e, t) {
          return (
            this.Ar.set(t.name, {
              name: t.name,
              query: (function (e) {
                let t = (function (e) {
                  var t;
                  let r,
                    n = (function (e) {
                      let t = rD(e);
                      return 4 === t.length ? en.emptyPath() : rL(t);
                    })(e.parent),
                    i = e.structuredQuery,
                    s = i.from ? i.from.length : 0,
                    a = null;
                  if (s > 0) {
                    1 === s || L();
                    let e = i.from[0];
                    e.allDescendants
                      ? (a = e.collectionId)
                      : (n = n.child(e.collectionId));
                  }
                  let o = [];
                  i.where &&
                    (o = (function (e) {
                      var t;
                      let r = (function e(t) {
                        return void 0 !== t.unaryFilter
                          ? (function (e) {
                              switch (e.unaryFilter.op) {
                                case "IS_NAN":
                                  let t = rV(e.unaryFilter.field);
                                  return tr.create(t, "==", {
                                    doubleValue: NaN,
                                  });
                                case "IS_NULL":
                                  let r = rV(e.unaryFilter.field);
                                  return tr.create(r, "==", {
                                    nullValue: "NULL_VALUE",
                                  });
                                case "IS_NOT_NAN":
                                  let n = rV(e.unaryFilter.field);
                                  return tr.create(n, "!=", {
                                    doubleValue: NaN,
                                  });
                                case "IS_NOT_NULL":
                                  let i = rV(e.unaryFilter.field);
                                  return tr.create(i, "!=", {
                                    nullValue: "NULL_VALUE",
                                  });
                                default:
                                  return L();
                              }
                            })(t)
                          : void 0 !== t.fieldFilter
                          ? tr.create(
                              rV(t.fieldFilter.field),
                              (function (e) {
                                switch (e) {
                                  case "EQUAL":
                                    return "==";
                                  case "NOT_EQUAL":
                                    return "!=";
                                  case "GREATER_THAN":
                                    return ">";
                                  case "GREATER_THAN_OR_EQUAL":
                                    return ">=";
                                  case "LESS_THAN":
                                    return "<";
                                  case "LESS_THAN_OR_EQUAL":
                                    return "<=";
                                  case "ARRAY_CONTAINS":
                                    return "array-contains";
                                  case "IN":
                                    return "in";
                                  case "NOT_IN":
                                    return "not-in";
                                  case "ARRAY_CONTAINS_ANY":
                                    return "array-contains-any";
                                  default:
                                    return L();
                                }
                              })(t.fieldFilter.op),
                              t.fieldFilter.value
                            )
                          : void 0 !== t.compositeFilter
                          ? tn.create(
                              t.compositeFilter.filters.map((t) => e(t)),
                              (function (e) {
                                switch (e) {
                                  case "AND":
                                    return "and";
                                  case "OR":
                                    return "or";
                                  default:
                                    return L();
                                }
                              })(t.compositeFilter.op)
                            )
                          : L();
                      })(e);
                      return r instanceof tn && ts((t = r)) && ti(t)
                        ? r.getFilters()
                        : [r];
                    })(i.where));
                  let l = [];
                  i.orderBy &&
                    (l = i.orderBy.map(
                      (e) =>
                        new te(
                          rV(e.field),
                          (function (e) {
                            switch (e) {
                              case "ASCENDING":
                                return "asc";
                              case "DESCENDING":
                                return "desc";
                              default:
                                return;
                            }
                          })(e.direction)
                        )
                    ));
                  let u = null;
                  i.limit &&
                    (u =
                      null ==
                      (r = "object" == typeof (t = i.limit) ? t.value : t)
                        ? null
                        : r);
                  let c = null;
                  i.startAt &&
                    (c = (function (e) {
                      let t = !!e.before;
                      return new e8(e.values || [], t);
                    })(i.startAt));
                  let h = null;
                  return (
                    i.endAt &&
                      (h = (function (e) {
                        let t = !e.before;
                        return new e8(e.values || [], t);
                      })(i.endAt)),
                    new tb(n, a, l, o, u, "F", c, h)
                  );
                })({ parent: e.parent, structuredQuery: e.structuredQuery });
                return "LAST" === e.limitType ? tx(t, t.limit, "L") : t;
              })(t.bundledQuery),
              readTime: rk(t.readTime),
            }),
            ec.resolve()
          );
        }
      }
      class r5 {
        constructor() {
          (this.overlays = new ey(ea.comparator)), (this.Rr = new Map());
        }
        getOverlay(e, t) {
          return ec.resolve(this.overlays.get(t));
        }
        getOverlays(e, t) {
          let r = tO();
          return ec
            .forEach(t, (t) =>
              this.getOverlay(e, t).next((e) => {
                null !== e && r.set(t, e);
              })
            )
            .next(() => r);
        }
        saveOverlays(e, t, r) {
          return (
            r.forEach((r, n) => {
              this.Et(e, t, n);
            }),
            ec.resolve()
          );
        }
        removeOverlaysForBatchId(e, t, r) {
          let n = this.Rr.get(r);
          return (
            void 0 !== n &&
              (n.forEach((e) => (this.overlays = this.overlays.remove(e))),
              this.Rr.delete(r)),
            ec.resolve()
          );
        }
        getOverlaysForCollection(e, t, r) {
          let n = tO(),
            i = t.length + 1,
            s = new ea(t.child("")),
            a = this.overlays.getIteratorFrom(s);
          for (; a.hasNext(); ) {
            let e = a.getNext().value,
              s = e.getKey();
            if (!t.isPrefixOf(s.path)) break;
            s.path.length === i && e.largestBatchId > r && n.set(e.getKey(), e);
          }
          return ec.resolve(n);
        }
        getOverlaysForCollectionGroup(e, t, r, n) {
          let i = new ey((e, t) => e - t),
            s = this.overlays.getIterator();
          for (; s.hasNext(); ) {
            let e = s.getNext().value;
            if (e.getKey().getCollectionGroup() === t && e.largestBatchId > r) {
              let t = i.get(e.largestBatchId);
              null === t && ((t = tO()), (i = i.insert(e.largestBatchId, t))),
                t.set(e.getKey(), e);
            }
          }
          let a = tO(),
            o = i.getIterator();
          for (
            ;
            o.hasNext() &&
            (o.getNext().value.forEach((e, t) => a.set(e, t)),
            !(a.size() >= n));

          );
          return ec.resolve(a);
        }
        Et(e, t, r) {
          let n = this.overlays.get(r.key);
          if (null !== n) {
            let e = this.Rr.get(n.largestBatchId).delete(r.key);
            this.Rr.set(n.largestBatchId, e);
          }
          this.overlays = this.overlays.insert(r.key, new rn(t, r));
          let i = this.Rr.get(t);
          void 0 === i && ((i = t$()), this.Rr.set(t, i)),
            this.Rr.set(t, i.add(r.key));
        }
      }
      class r3 {
        constructor() {
          this.sessionToken = eT.EMPTY_BYTE_STRING;
        }
        getSessionToken(e) {
          return ec.resolve(this.sessionToken);
        }
        setSessionToken(e, t) {
          return (this.sessionToken = t), ec.resolve();
        }
      }
      class r6 {
        constructor() {
          (this.Vr = new ew(r4.mr)), (this.gr = new ew(r4.pr));
        }
        isEmpty() {
          return this.Vr.isEmpty();
        }
        addReference(e, t) {
          let r = new r4(e, t);
          (this.Vr = this.Vr.add(r)), (this.gr = this.gr.add(r));
        }
        yr(e, t) {
          e.forEach((e) => this.addReference(e, t));
        }
        removeReference(e, t) {
          this.wr(new r4(e, t));
        }
        Sr(e, t) {
          e.forEach((e) => this.removeReference(e, t));
        }
        br(e) {
          let t = new ea(new en([])),
            r = new r4(t, e),
            n = new r4(t, e + 1),
            i = [];
          return (
            this.gr.forEachInRange([r, n], (e) => {
              this.wr(e), i.push(e.key);
            }),
            i
          );
        }
        Dr() {
          this.Vr.forEach((e) => this.wr(e));
        }
        wr(e) {
          (this.Vr = this.Vr.delete(e)), (this.gr = this.gr.delete(e));
        }
        vr(e) {
          let t = new ea(new en([])),
            r = new r4(t, e),
            n = new r4(t, e + 1),
            i = t$();
          return (
            this.gr.forEachInRange([r, n], (e) => {
              i = i.add(e.key);
            }),
            i
          );
        }
        containsKey(e) {
          let t = new r4(e, 0),
            r = this.Vr.firstAfterOrEqual(t);
          return null !== r && e.isEqual(r.key);
        }
      }
      class r4 {
        constructor(e, t) {
          (this.key = e), (this.Cr = t);
        }
        static mr(e, t) {
          return ea.comparator(e.key, t.key) || W(e.Cr, t.Cr);
        }
        static pr(e, t) {
          return W(e.Cr, t.Cr) || ea.comparator(e.key, t.key);
        }
      }
      class r8 {
        constructor(e, t) {
          (this.indexManager = e),
            (this.referenceDelegate = t),
            (this.mutationQueue = []),
            (this.Fr = 1),
            (this.Mr = new ew(r4.mr));
        }
        checkEmpty(e) {
          return ec.resolve(0 === this.mutationQueue.length);
        }
        addMutationBatch(e, t, r, n) {
          let i = this.Fr;
          this.Fr++,
            this.mutationQueue.length > 0 &&
              this.mutationQueue[this.mutationQueue.length - 1];
          let s = new rt(i, t, r, n);
          for (let t of (this.mutationQueue.push(s), n))
            (this.Mr = this.Mr.add(new r4(t.key, i))),
              this.indexManager.addToCollectionParentIndex(
                e,
                t.key.path.popLast()
              );
          return ec.resolve(s);
        }
        lookupMutationBatch(e, t) {
          return ec.resolve(this.Or(t));
        }
        getNextMutationBatchAfterBatchId(e, t) {
          let r = this.Nr(t + 1),
            n = r < 0 ? 0 : r;
          return ec.resolve(
            this.mutationQueue.length > n ? this.mutationQueue[n] : null
          );
        }
        getHighestUnacknowledgedBatchId() {
          return ec.resolve(0 === this.mutationQueue.length ? -1 : this.Fr - 1);
        }
        getAllMutationBatches(e) {
          return ec.resolve(this.mutationQueue.slice());
        }
        getAllMutationBatchesAffectingDocumentKey(e, t) {
          let r = new r4(t, 0),
            n = new r4(t, Number.POSITIVE_INFINITY),
            i = [];
          return (
            this.Mr.forEachInRange([r, n], (e) => {
              let t = this.Or(e.Cr);
              i.push(t);
            }),
            ec.resolve(i)
          );
        }
        getAllMutationBatchesAffectingDocumentKeys(e, t) {
          let r = new ew(W);
          return (
            t.forEach((e) => {
              let t = new r4(e, 0),
                n = new r4(e, Number.POSITIVE_INFINITY);
              this.Mr.forEachInRange([t, n], (e) => {
                r = r.add(e.Cr);
              });
            }),
            ec.resolve(this.Br(r))
          );
        }
        getAllMutationBatchesAffectingQuery(e, t) {
          let r = t.path,
            n = r.length + 1,
            i = r;
          ea.isDocumentKey(i) || (i = i.child(""));
          let s = new r4(new ea(i), 0),
            a = new ew(W);
          return (
            this.Mr.forEachWhile((e) => {
              let t = e.key.path;
              return (
                !!r.isPrefixOf(t) && (t.length === n && (a = a.add(e.Cr)), !0)
              );
            }, s),
            ec.resolve(this.Br(a))
          );
        }
        Br(e) {
          let t = [];
          return (
            e.forEach((e) => {
              let r = this.Or(e);
              null !== r && t.push(r);
            }),
            t
          );
        }
        removeMutationBatch(e, t) {
          0 === this.Lr(t.batchId, "removed") || L(),
            this.mutationQueue.shift();
          let r = this.Mr;
          return ec
            .forEach(t.mutations, (n) => {
              let i = new r4(n.key, t.batchId);
              return (
                (r = r.delete(i)),
                this.referenceDelegate.markPotentiallyOrphaned(e, n.key)
              );
            })
            .next(() => {
              this.Mr = r;
            });
        }
        qn(e) {}
        containsKey(e, t) {
          let r = new r4(t, 0),
            n = this.Mr.firstAfterOrEqual(r);
          return ec.resolve(t.isEqual(n && n.key));
        }
        performConsistencyCheck(e) {
          return this.mutationQueue.length, ec.resolve();
        }
        Lr(e, t) {
          return this.Nr(e);
        }
        Nr(e) {
          return 0 === this.mutationQueue.length
            ? 0
            : e - this.mutationQueue[0].batchId;
        }
        Or(e) {
          let t = this.Nr(e);
          return t < 0 || t >= this.mutationQueue.length
            ? null
            : this.mutationQueue[t];
        }
      }
      class r7 {
        constructor(e) {
          (this.kr = e), (this.docs = new ey(ea.comparator)), (this.size = 0);
        }
        setIndexManager(e) {
          this.indexManager = e;
        }
        addEntry(e, t) {
          let r = t.key,
            n = this.docs.get(r),
            i = n ? n.size : 0,
            s = this.kr(t);
          return (
            (this.docs = this.docs.insert(r, {
              document: t.mutableCopy(),
              size: s,
            })),
            (this.size += s - i),
            this.indexManager.addToCollectionParentIndex(e, r.path.popLast())
          );
        }
        removeEntry(e) {
          let t = this.docs.get(e);
          t && ((this.docs = this.docs.remove(e)), (this.size -= t.size));
        }
        getEntry(e, t) {
          let r = this.docs.get(t);
          return ec.resolve(
            r ? r.document.mutableCopy() : e4.newInvalidDocument(t)
          );
        }
        getEntries(e, t) {
          let r = tD;
          return (
            t.forEach((e) => {
              let t = this.docs.get(e);
              r = r.insert(
                e,
                t ? t.document.mutableCopy() : e4.newInvalidDocument(e)
              );
            }),
            ec.resolve(r)
          );
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          let i = tD,
            s = t.path,
            a = new ea(s.child("__id-9223372036854775808__")),
            o = this.docs.getIteratorFrom(a);
          for (; o.hasNext(); ) {
            let {
              key: e,
              value: { document: a },
            } = o.getNext();
            if (!s.isPrefixOf(e.path)) break;
            e.path.length > s.length + 1 ||
              0 >=
                (function (e, t) {
                  let r = e.readTime.compareTo(t.readTime);
                  return 0 !== r
                    ? r
                    : 0 !== (r = ea.comparator(e.documentKey, t.documentKey))
                    ? r
                    : W(e.largestBatchId, t.largestBatchId);
                })(new eo(a.readTime, a.key, -1), r) ||
              ((n.has(a.key) || tk(t, a)) &&
                (i = i.insert(a.key, a.mutableCopy())));
          }
          return ec.resolve(i);
        }
        getAllFromCollectionGroup(e, t, r, n) {
          L();
        }
        qr(e, t) {
          return ec.forEach(this.docs, (e) => t(e));
        }
        newChangeBuffer(e) {
          return new r9(this);
        }
        getSize(e) {
          return ec.resolve(this.size);
        }
      }
      class r9 extends rJ {
        constructor(e) {
          super(), (this.Ir = e);
        }
        applyChanges(e) {
          let t = [];
          return (
            this.changes.forEach((r, n) => {
              n.isValidDocument()
                ? t.push(this.Ir.addEntry(e, n))
                : this.Ir.removeEntry(r);
            }),
            ec.waitFor(t)
          );
        }
        getFromCache(e, t) {
          return this.Ir.getEntry(e, t);
        }
        getAllFromCache(e, t) {
          return this.Ir.getEntries(e, t);
        }
      }
      class ne {
        constructor(e) {
          (this.persistence = e),
            (this.Qr = new tI((e) => tm(e), ty)),
            (this.lastRemoteSnapshotVersion = ee.min()),
            (this.highestTargetId = 0),
            (this.$r = 0),
            (this.Ur = new r6()),
            (this.targetCount = 0),
            (this.Kr = rZ.Un());
        }
        forEachTarget(e, t) {
          return this.Qr.forEach((e, r) => t(r)), ec.resolve();
        }
        getLastRemoteSnapshotVersion(e) {
          return ec.resolve(this.lastRemoteSnapshotVersion);
        }
        getHighestSequenceNumber(e) {
          return ec.resolve(this.$r);
        }
        allocateTargetId(e) {
          return (
            (this.highestTargetId = this.Kr.next()),
            ec.resolve(this.highestTargetId)
          );
        }
        setTargetsMetadata(e, t, r) {
          return (
            r && (this.lastRemoteSnapshotVersion = r),
            t > this.$r && (this.$r = t),
            ec.resolve()
          );
        }
        zn(e) {
          this.Qr.set(e.target, e);
          let t = e.targetId;
          t > this.highestTargetId &&
            ((this.Kr = new rZ(t)), (this.highestTargetId = t)),
            e.sequenceNumber > this.$r && (this.$r = e.sequenceNumber);
        }
        addTargetData(e, t) {
          return this.zn(t), (this.targetCount += 1), ec.resolve();
        }
        updateTargetData(e, t) {
          return this.zn(t), ec.resolve();
        }
        removeTargetData(e, t) {
          return (
            this.Qr.delete(t.target),
            this.Ur.br(t.targetId),
            (this.targetCount -= 1),
            ec.resolve()
          );
        }
        removeTargets(e, t, r) {
          let n = 0,
            i = [];
          return (
            this.Qr.forEach((s, a) => {
              a.sequenceNumber <= t &&
                null === r.get(a.targetId) &&
                (this.Qr.delete(s),
                i.push(this.removeMatchingKeysForTargetId(e, a.targetId)),
                n++);
            }),
            ec.waitFor(i).next(() => n)
          );
        }
        getTargetCount(e) {
          return ec.resolve(this.targetCount);
        }
        getTargetData(e, t) {
          let r = this.Qr.get(t) || null;
          return ec.resolve(r);
        }
        addMatchingKeys(e, t, r) {
          return this.Ur.yr(t, r), ec.resolve();
        }
        removeMatchingKeys(e, t, r) {
          this.Ur.Sr(t, r);
          let n = this.persistence.referenceDelegate,
            i = [];
          return (
            n &&
              t.forEach((t) => {
                i.push(n.markPotentiallyOrphaned(e, t));
              }),
            ec.waitFor(i)
          );
        }
        removeMatchingKeysForTargetId(e, t) {
          return this.Ur.br(t), ec.resolve();
        }
        getMatchingKeysForTargetId(e, t) {
          let r = this.Ur.vr(t);
          return ec.resolve(r);
        }
        containsKey(e, t) {
          return ec.resolve(this.Ur.containsKey(t));
        }
      }
      class nt {
        constructor(e, t) {
          (this.Wr = {}),
            (this.overlays = {}),
            (this.Gr = new ef(0)),
            (this.zr = !1),
            (this.zr = !0),
            (this.jr = new r3()),
            (this.referenceDelegate = e(this)),
            (this.Hr = new ne(this)),
            (this.indexManager = new rz()),
            (this.remoteDocumentCache = new r7((e) =>
              this.referenceDelegate.Jr(e)
            )),
            (this.serializer = new rU(t)),
            (this.Yr = new r2(this.serializer));
        }
        start() {
          return Promise.resolve();
        }
        shutdown() {
          return (this.zr = !1), Promise.resolve();
        }
        get started() {
          return this.zr;
        }
        setDatabaseDeletedListener() {}
        setNetworkEnabled() {}
        getIndexManager(e) {
          return this.indexManager;
        }
        getDocumentOverlayCache(e) {
          let t = this.overlays[e.toKey()];
          return t || ((t = new r5()), (this.overlays[e.toKey()] = t)), t;
        }
        getMutationQueue(e, t) {
          let r = this.Wr[e.toKey()];
          return (
            r ||
              ((r = new r8(t, this.referenceDelegate)),
              (this.Wr[e.toKey()] = r)),
            r
          );
        }
        getGlobalsCache() {
          return this.jr;
        }
        getTargetCache() {
          return this.Hr;
        }
        getRemoteDocumentCache() {
          return this.remoteDocumentCache;
        }
        getBundleCache() {
          return this.Yr;
        }
        runTransaction(e, t, r) {
          N("MemoryPersistence", "Starting transaction:", e);
          let n = new nr(this.Gr.next());
          return (
            this.referenceDelegate.Zr(),
            r(n)
              .next((e) => this.referenceDelegate.Xr(n).next(() => e))
              .toPromise()
              .then((e) => (n.raiseOnCommittedEvent(), e))
          );
        }
        ei(e, t) {
          return ec.or(
            Object.values(this.Wr).map((r) => () => r.containsKey(e, t))
          );
        }
      }
      class nr extends el {
        constructor(e) {
          super(), (this.currentSequenceNumber = e);
        }
      }
      class nn {
        constructor(e) {
          (this.persistence = e), (this.ti = new r6()), (this.ni = null);
        }
        static ri(e) {
          return new nn(e);
        }
        get ii() {
          if (this.ni) return this.ni;
          throw L();
        }
        addReference(e, t, r) {
          return (
            this.ti.addReference(r, t),
            this.ii.delete(r.toString()),
            ec.resolve()
          );
        }
        removeReference(e, t, r) {
          return (
            this.ti.removeReference(r, t),
            this.ii.add(r.toString()),
            ec.resolve()
          );
        }
        markPotentiallyOrphaned(e, t) {
          return this.ii.add(t.toString()), ec.resolve();
        }
        removeTarget(e, t) {
          this.ti.br(t.targetId).forEach((e) => this.ii.add(e.toString()));
          let r = this.persistence.getTargetCache();
          return r
            .getMatchingKeysForTargetId(e, t.targetId)
            .next((e) => {
              e.forEach((e) => this.ii.add(e.toString()));
            })
            .next(() => r.removeTargetData(e, t));
        }
        Zr() {
          this.ni = new Set();
        }
        Xr(e) {
          let t = this.persistence.getRemoteDocumentCache().newChangeBuffer();
          return ec
            .forEach(this.ii, (r) => {
              let n = ea.fromPath(r);
              return this.si(e, n).next((e) => {
                e || t.removeEntry(n, ee.min());
              });
            })
            .next(() => ((this.ni = null), t.apply(e)));
        }
        updateLimboDocument(e, t) {
          return this.si(e, t).next((e) => {
            e ? this.ii.delete(t.toString()) : this.ii.add(t.toString());
          });
        }
        Jr(e) {
          return 0;
        }
        si(e, t) {
          return ec.or([
            () => ec.resolve(this.ti.containsKey(t)),
            () => this.persistence.getTargetCache().containsKey(e, t),
            () => this.persistence.ei(e, t),
          ]);
        }
      }
      class ni {
        constructor(e, t) {
          (this.persistence = e),
            (this.oi = new tI(
              (e) =>
                (function (e) {
                  let t = "";
                  for (let r = 0; r < e.length; r++)
                    t.length > 0 && (t += "\x01\x01"),
                      (t = (function (e, t) {
                        let r = t,
                          n = e.length;
                        for (let t = 0; t < n; t++) {
                          let n = e.charAt(t);
                          switch (n) {
                            case "\0":
                              r += "\x01\x10";
                              break;
                            case "\x01":
                              r += "\x01\x11";
                              break;
                            default:
                              r += n;
                          }
                        }
                        return r;
                      })(e.get(r), t));
                  return t + "\x01\x01";
                })(e.path),
              (e, t) => e.isEqual(t)
            )),
            (this.garbageCollector = new rY(this, t));
        }
        static ri(e, t) {
          return new ni(e, t);
        }
        Zr() {}
        Xr(e) {
          return ec.resolve();
        }
        forEachTarget(e, t) {
          return this.persistence.getTargetCache().forEachTarget(e, t);
        }
        nr(e) {
          let t = this.sr(e);
          return this.persistence
            .getTargetCache()
            .getTargetCount(e)
            .next((e) => t.next((t) => e + t));
        }
        sr(e) {
          let t = 0;
          return this.rr(e, (e) => {
            t++;
          }).next(() => t);
        }
        rr(e, t) {
          return ec.forEach(this.oi, (r, n) =>
            this.ar(e, r, n).next((e) => (e ? ec.resolve() : t(n)))
          );
        }
        removeTargets(e, t, r) {
          return this.persistence.getTargetCache().removeTargets(e, t, r);
        }
        removeOrphanedDocuments(e, t) {
          let r = 0,
            n = this.persistence.getRemoteDocumentCache(),
            i = n.newChangeBuffer();
          return n
            .qr(e, (n) =>
              this.ar(e, n, t).next((e) => {
                e || (r++, i.removeEntry(n, ee.min()));
              })
            )
            .next(() => i.apply(e))
            .next(() => r);
        }
        markPotentiallyOrphaned(e, t) {
          return this.oi.set(t, e.currentSequenceNumber), ec.resolve();
        }
        removeTarget(e, t) {
          let r = t.withSequenceNumber(e.currentSequenceNumber);
          return this.persistence.getTargetCache().updateTargetData(e, r);
        }
        addReference(e, t, r) {
          return this.oi.set(r, e.currentSequenceNumber), ec.resolve();
        }
        removeReference(e, t, r) {
          return this.oi.set(r, e.currentSequenceNumber), ec.resolve();
        }
        updateLimboDocument(e, t) {
          return this.oi.set(t, e.currentSequenceNumber), ec.resolve();
        }
        Jr(e) {
          let t = e.key.toString().length;
          return (
            e.isFoundDocument() &&
              (t += (function e(t) {
                switch (eq(t)) {
                  case 0:
                  case 1:
                    return 4;
                  case 2:
                    return 8;
                  case 3:
                  case 8:
                    return 16;
                  case 4:
                    let r = eO(t);
                    return r ? 16 + e(r) : 16;
                  case 5:
                    return 2 * t.stringValue.length;
                  case 6:
                    return eA(t.bytesValue).approximateByteSize();
                  case 7:
                    return t.referenceValue.length;
                  case 9:
                    return (t.arrayValue.values || []).reduce(
                      (t, r) => t + e(r),
                      0
                    );
                  case 10:
                  case 11:
                    var n;
                    let i;
                    return (
                      (n = t.mapValue),
                      (i = 0),
                      eg(n.fields, (t, r) => {
                        i += t.length + e(r);
                      }),
                      i
                    );
                  default:
                    throw L();
                }
              })(e.data.value)),
            t
          );
        }
        ar(e, t, r) {
          return ec.or([
            () => this.persistence.ei(e, t),
            () => this.persistence.getTargetCache().containsKey(e, t),
            () => {
              let e = this.oi.get(t);
              return ec.resolve(void 0 !== e && e > r);
            },
          ]);
        }
        getCacheSize(e) {
          return this.persistence.getRemoteDocumentCache().getSize(e);
        }
      }
      class ns {
        constructor(e, t, r, n) {
          (this.targetId = e),
            (this.fromCache = t),
            (this.Hi = r),
            (this.Ji = n);
        }
        static Yi(e, t) {
          let r = t$(),
            n = t$();
          for (let e of t.docChanges)
            switch (e.type) {
              case 0:
                r = r.add(e.doc.key);
                break;
              case 1:
                n = n.add(e.doc.key);
            }
          return new ns(e, t.fromCache, r, n);
        }
      }
      class na {
        constructor() {
          this._documentReadCount = 0;
        }
        get documentReadCount() {
          return this._documentReadCount;
        }
        incrementDocumentReadCount(e) {
          this._documentReadCount += e;
        }
      }
      class no {
        constructor() {
          (this.Zi = !1),
            (this.Xi = !1),
            (this.es = 100),
            (this.ts = (0, w.G6)()
              ? 8
              : (function (e) {
                  let t = e.match(/Android ([\d.]+)/i);
                  return Number(
                    t ? t[1].split(".").slice(0, 2).join(".") : "-1"
                  );
                })((0, w.z$)()) > 0
              ? 6
              : 4);
        }
        initialize(e, t) {
          (this.ns = e), (this.indexManager = t), (this.Zi = !0);
        }
        getDocumentsMatchingQuery(e, t, r, n) {
          let i = { result: null };
          return this.rs(e, t)
            .next((e) => {
              i.result = e;
            })
            .next(() => {
              if (!i.result)
                return this.ss(e, t, n, r).next((e) => {
                  i.result = e;
                });
            })
            .next(() => {
              if (i.result) return;
              let r = new na();
              return this._s(e, t, r).next((n) => {
                if (((i.result = n), this.Xi)) return this.us(e, t, r, n.size);
              });
            })
            .next(() => i.result);
        }
        us(e, t, r, n) {
          return r.documentReadCount < this.es
            ? (D() <= b.in.DEBUG &&
                N(
                  "QueryEngine",
                  "SDK will not create cache indexes for query:",
                  t_(t),
                  "since it only creates cache indexes for collection contains",
                  "more than or equal to",
                  this.es,
                  "documents"
                ),
              ec.resolve())
            : (D() <= b.in.DEBUG &&
                N(
                  "QueryEngine",
                  "Query:",
                  t_(t),
                  "scans",
                  r.documentReadCount,
                  "local documents and returns",
                  n,
                  "documents as results."
                ),
              r.documentReadCount > this.ts * n
                ? (D() <= b.in.DEBUG &&
                    N(
                      "QueryEngine",
                      "The SDK decides to create cache indexes for query:",
                      t_(t),
                      "as using cache indexes may help improve performance."
                    ),
                  this.indexManager.createTargetIndexes(e, tE(t)))
                : ec.resolve());
        }
        rs(e, t) {
          if (tw(t)) return ec.resolve(null);
          let r = tE(t);
          return this.indexManager.getIndexType(e, r).next((n) =>
            0 === n
              ? null
              : (null !== t.limit &&
                  1 === n &&
                  (r = tE((t = tx(t, null, "F")))),
                this.indexManager.getDocumentsMatchingTarget(e, r).next((n) => {
                  let i = t$(...n);
                  return this.ns.getDocuments(e, i).next((n) =>
                    this.indexManager.getMinOffset(e, r).next((r) => {
                      let s = this.cs(t, n);
                      return this.ls(t, s, i, r.readTime)
                        ? this.rs(e, tx(t, null, "F"))
                        : this.hs(e, s, t, r);
                    })
                  );
                }))
          );
        }
        ss(e, t, r, n) {
          return tw(t) || n.isEqual(ee.min())
            ? ec.resolve(null)
            : this.ns.getDocuments(e, r).next((i) => {
                let s = this.cs(t, i);
                return this.ls(t, s, r, n)
                  ? ec.resolve(null)
                  : (D() <= b.in.DEBUG &&
                      N(
                        "QueryEngine",
                        "Re-using previous result from %s to execute query: %s",
                        n.toString(),
                        t_(t)
                      ),
                    this.hs(
                      e,
                      s,
                      t,
                      (function (e, t) {
                        let r = e.toTimestamp().seconds,
                          n = e.toTimestamp().nanoseconds + 1;
                        return new eo(
                          ee.fromTimestamp(
                            1e9 === n ? new J(r + 1, 0) : new J(r, n)
                          ),
                          ea.empty(),
                          -1
                        );
                      })(n, 0)
                    ).next((e) => e));
              });
        }
        cs(e, t) {
          let r = new ew(tA(e));
          return (
            t.forEach((t, n) => {
              tk(e, n) && (r = r.add(n));
            }),
            r
          );
        }
        ls(e, t, r, n) {
          if (null === e.limit) return !1;
          if (r.size !== t.size) return !0;
          let i = "F" === e.limitType ? t.last() : t.first();
          return !!i && (i.hasPendingWrites || i.version.compareTo(n) > 0);
        }
        _s(e, t, r) {
          return (
            D() <= b.in.DEBUG &&
              N(
                "QueryEngine",
                "Using full collection scan to execute query:",
                t_(t)
              ),
            this.ns.getDocumentsMatchingQuery(e, t, eo.min(), r)
          );
        }
        hs(e, t, r, n) {
          return this.ns.getDocumentsMatchingQuery(e, r, n).next(
            (e) => (
              t.forEach((t) => {
                e = e.insert(t.key, t);
              }),
              e
            )
          );
        }
      }
      let nl = "LocalStore";
      class nu {
        constructor(e, t, r, n) {
          (this.persistence = e),
            (this.Ps = t),
            (this.serializer = n),
            (this.Ts = new ey(W)),
            (this.Is = new tI((e) => tm(e), ty)),
            (this.Es = new Map()),
            (this.ds = e.getRemoteDocumentCache()),
            (this.Hr = e.getTargetCache()),
            (this.Yr = e.getBundleCache()),
            this.As(r);
        }
        As(e) {
          (this.documentOverlayCache =
            this.persistence.getDocumentOverlayCache(e)),
            (this.indexManager = this.persistence.getIndexManager(e)),
            (this.mutationQueue = this.persistence.getMutationQueue(
              e,
              this.indexManager
            )),
            (this.localDocuments = new r1(
              this.ds,
              this.mutationQueue,
              this.documentOverlayCache,
              this.indexManager
            )),
            this.ds.setIndexManager(this.indexManager),
            this.Ps.initialize(this.localDocuments, this.indexManager);
        }
        collectGarbage(e) {
          return this.persistence.runTransaction(
            "Collect garbage",
            "readwrite-primary",
            (t) => e.collect(t, this.Ts)
          );
        }
      }
      async function nc(e, t) {
        return await e.persistence.runTransaction(
          "Handle user change",
          "readonly",
          (r) => {
            let n;
            return e.mutationQueue
              .getAllMutationBatches(r)
              .next(
                (i) => (
                  (n = i), e.As(t), e.mutationQueue.getAllMutationBatches(r)
                )
              )
              .next((t) => {
                let i = [],
                  s = [],
                  a = t$();
                for (let e of n)
                  for (let t of (i.push(e.batchId), e.mutations))
                    a = a.add(t.key);
                for (let e of t)
                  for (let t of (s.push(e.batchId), e.mutations))
                    a = a.add(t.key);
                return e.localDocuments
                  .getDocuments(r, a)
                  .next((e) => ({
                    Rs: e,
                    removedBatchIds: i,
                    addedBatchIds: s,
                  }));
              });
          }
        );
      }
      function nh(e) {
        return e.persistence.runTransaction(
          "Get last remote snapshot version",
          "readonly",
          (t) => e.Hr.getLastRemoteSnapshotVersion(t)
        );
      }
      async function nf(e, t, r) {
        let n = e.Ts.get(t);
        try {
          r ||
            (await e.persistence.runTransaction(
              "Release target",
              r ? "readwrite" : "readwrite-primary",
              (t) => e.persistence.referenceDelegate.removeTarget(t, n)
            ));
        } catch (e) {
          if (!eh(e)) throw e;
          N(nl, `Failed to update sequence numbers for target ${t}: ${e}`);
        }
        (e.Ts = e.Ts.remove(t)), e.Is.delete(n.target);
      }
      function nd(e, t, r) {
        let n = ee.min(),
          i = t$();
        return e.persistence.runTransaction("Execute query", "readwrite", (s) =>
          (function (e, t, r) {
            let n = e.Is.get(r);
            return void 0 !== n
              ? ec.resolve(e.Ts.get(n))
              : e.Hr.getTargetData(t, r);
          })(e, s, tE(t))
            .next((t) => {
              if (t)
                return (
                  (n = t.lastLimboFreeSnapshotVersion),
                  e.Hr.getMatchingKeysForTargetId(s, t.targetId).next((e) => {
                    i = e;
                  })
                );
            })
            .next(() =>
              e.Ps.getDocumentsMatchingQuery(
                s,
                t,
                r ? n : ee.min(),
                r ? i : t$()
              )
            )
            .next((r) => {
              var n, s, a;
              let o;
              return (
                (n = e),
                (s =
                  t.collectionGroup ||
                  (t.path.length % 2 == 1
                    ? t.path.lastSegment()
                    : t.path.get(t.path.length - 2))),
                (a = r),
                (o = n.Es.get(s) || ee.min()),
                a.forEach((e, t) => {
                  t.readTime.compareTo(o) > 0 && (o = t.readTime);
                }),
                n.Es.set(s, o),
                { documents: r, gs: i }
              );
            })
        );
      }
      class np {
        constructor() {
          this.activeTargetIds = tV;
        }
        Ds(e) {
          this.activeTargetIds = this.activeTargetIds.add(e);
        }
        vs(e) {
          this.activeTargetIds = this.activeTargetIds.delete(e);
        }
        bs() {
          return JSON.stringify({
            activeTargetIds: this.activeTargetIds.toArray(),
            updateTimeMs: Date.now(),
          });
        }
      }
      class ng {
        constructor() {
          (this.ho = new np()),
            (this.Po = {}),
            (this.onlineStateHandler = null),
            (this.sequenceNumberHandler = null);
        }
        addPendingMutation(e) {}
        updateMutationState(e, t, r) {}
        addLocalQueryTarget(e, t = !0) {
          return t && this.ho.Ds(e), this.Po[e] || "not-current";
        }
        updateQueryState(e, t, r) {
          this.Po[e] = t;
        }
        removeLocalQueryTarget(e) {
          this.ho.vs(e);
        }
        isLocalQueryTarget(e) {
          return this.ho.activeTargetIds.has(e);
        }
        clearQueryState(e) {
          delete this.Po[e];
        }
        getAllActiveQueryTargets() {
          return this.ho.activeTargetIds;
        }
        isActiveQueryTarget(e) {
          return this.ho.activeTargetIds.has(e);
        }
        start() {
          return (this.ho = new np()), Promise.resolve();
        }
        handleUserChange(e, t, r) {}
        setOnlineState(e) {}
        shutdown() {}
        writeSequenceNumber(e) {}
        notifyBundleLoaded(e) {}
      }
      class nm {
        To(e) {}
        shutdown() {}
      }
      let ny = "ConnectivityMonitor";
      class nv {
        constructor() {
          (this.Io = () => this.Eo()),
            (this.Ao = () => this.Ro()),
            (this.Vo = []),
            this.mo();
        }
        To(e) {
          this.Vo.push(e);
        }
        shutdown() {
          window.removeEventListener("online", this.Io),
            window.removeEventListener("offline", this.Ao);
        }
        mo() {
          window.addEventListener("online", this.Io),
            window.addEventListener("offline", this.Ao);
        }
        Eo() {
          for (let e of (N(ny, "Network connectivity changed: AVAILABLE"),
          this.Vo))
            e(0);
        }
        Ro() {
          for (let e of (N(ny, "Network connectivity changed: UNAVAILABLE"),
          this.Vo))
            e(1);
        }
        static D() {
          return (
            "undefined" != typeof window &&
            void 0 !== window.addEventListener &&
            void 0 !== window.removeEventListener
          );
        }
      }
      let nb = null;
      function nw() {
        return (
          null === nb
            ? (nb = 0x10000000 + Math.round(0x80000000 * Math.random()))
            : nb++,
          "0x" + nb.toString(16)
        );
      }
      let nS = "RestConnection",
        nE = {
          BatchGetDocuments: "batchGet",
          Commit: "commit",
          RunQuery: "runQuery",
          RunAggregationQuery: "runAggregationQuery",
        };
      class nx {
        get fo() {
          return !1;
        }
        constructor(e) {
          (this.databaseInfo = e), (this.databaseId = e.databaseId);
          let t = e.ssl ? "https" : "http",
            r = encodeURIComponent(this.databaseId.projectId),
            n = encodeURIComponent(this.databaseId.database);
          (this.po = t + "://" + e.host),
            (this.yo = `projects/${r}/databases/${n}`),
            (this.wo =
              this.databaseId.database === e$
                ? `project_id=${r}`
                : `project_id=${r}&database_id=${n}`);
        }
        So(e, t, r, n, i) {
          let s = nw(),
            a = this.bo(e, t.toUriEncodedString());
          N(nS, `Sending RPC '${e}' ${s}:`, a, r);
          let o = {
            "google-cloud-resource-prefix": this.yo,
            "x-goog-request-params": this.wo,
          };
          return (
            this.Do(o, n, i),
            this.vo(e, a, o, r).then(
              (t) => (N(nS, `Received RPC '${e}' ${s}: `, t), t),
              (t) => {
                throw (
                  (P(
                    nS,
                    `RPC '${e}' ${s} failed with error: `,
                    t,
                    "url: ",
                    a,
                    "request:",
                    r
                  ),
                  t)
                );
              }
            )
          );
        }
        Co(e, t, r, n, i, s) {
          return this.So(e, t, r, n, i);
        }
        Do(e, t, r) {
          (e["X-Goog-Api-Client"] = "gl-js/ fire/" + A),
            (e["Content-Type"] = "text/plain"),
            this.databaseInfo.appId &&
              (e["X-Firebase-GMPID"] = this.databaseInfo.appId),
            t && t.headers.forEach((t, r) => (e[r] = t)),
            r && r.headers.forEach((t, r) => (e[r] = t));
        }
        bo(e, t) {
          let r = nE[e];
          return `${this.po}/v1/${t}:${r}`;
        }
        terminate() {}
      }
      class nT {
        constructor(e) {
          (this.Fo = e.Fo), (this.Mo = e.Mo);
        }
        xo(e) {
          this.Oo = e;
        }
        No(e) {
          this.Bo = e;
        }
        Lo(e) {
          this.ko = e;
        }
        onMessage(e) {
          this.qo = e;
        }
        close() {
          this.Mo();
        }
        send(e) {
          this.Fo(e);
        }
        Qo() {
          this.Oo();
        }
        $o() {
          this.Bo();
        }
        Uo(e) {
          this.ko(e);
        }
        Ko(e) {
          this.qo(e);
        }
      }
      let nC = "WebChannelConnection";
      class n_ extends nx {
        constructor(e) {
          super(e),
            (this.forceLongPolling = e.forceLongPolling),
            (this.autoDetectLongPolling = e.autoDetectLongPolling),
            (this.useFetchStreams = e.useFetchStreams),
            (this.longPollingOptions = e.longPollingOptions);
        }
        vo(e, t, r, n) {
          let i = nw();
          return new Promise((a, u) => {
            let c = new s();
            c.setWithCredentials(!0),
              c.listenOnce(o.COMPLETE, () => {
                try {
                  switch (c.getLastErrorCode()) {
                    case l.NO_ERROR:
                      let t = c.getResponseJson();
                      N(
                        nC,
                        `XHR for RPC '${e}' ${i} received:`,
                        JSON.stringify(t)
                      ),
                        a(t);
                      break;
                    case l.TIMEOUT:
                      N(nC, `RPC '${e}' ${i} timed out`),
                        u(new $(M.DEADLINE_EXCEEDED, "Request time out"));
                      break;
                    case l.HTTP_ERROR:
                      let r = c.getStatus();
                      if (
                        (N(
                          nC,
                          `RPC '${e}' ${i} failed with status:`,
                          r,
                          "response text:",
                          c.getResponseText()
                        ),
                        r > 0)
                      ) {
                        let e = c.getResponseJson();
                        Array.isArray(e) && (e = e[0]);
                        let t = null == e ? void 0 : e.error;
                        if (t && t.status && t.message) {
                          let e = (function (e) {
                            let t = e.toLowerCase().replace(/_/g, "-");
                            return Object.values(M).indexOf(t) >= 0
                              ? t
                              : M.UNKNOWN;
                          })(t.status);
                          u(new $(e, t.message));
                        } else
                          u(
                            new $(
                              M.UNKNOWN,
                              "Server responded with status " + c.getStatus()
                            )
                          );
                      } else u(new $(M.UNAVAILABLE, "Connection failed."));
                      break;
                    default:
                      L();
                  }
                } finally {
                  N(nC, `RPC '${e}' ${i} completed.`);
                }
              });
            let h = JSON.stringify(n);
            N(nC, `RPC '${e}' ${i} sending request:`, n),
              c.send(t, "POST", h, r, 15);
          });
        }
        Wo(e, t, r) {
          let n = nw(),
            i = [
              this.po,
              "/",
              "google.firestore.v1.Firestore",
              "/",
              e,
              "/channel",
            ],
            s = f(),
            o = h(),
            l = {
              httpSessionIdParam: "gsessionid",
              initMessageHeaders: {},
              messageUrlParams: {
                database: `projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`,
              },
              sendRawJson: !0,
              supportsCrossDomainXhr: !0,
              internalChannelParams: { forwardChannelRequestTimeoutMs: 6e5 },
              forceLongPolling: this.forceLongPolling,
              detectBufferingProxy: this.autoDetectLongPolling,
            },
            p = this.longPollingOptions.timeoutSeconds;
          void 0 !== p && (l.longPollingTimeout = Math.round(1e3 * p)),
            this.useFetchStreams && (l.useFetchStreams = !0),
            this.Do(l.initMessageHeaders, t, r),
            (l.encodeInitMessageHeaders = !0);
          let g = i.join("");
          N(nC, `Creating RPC '${e}' stream ${n}: ${g}`, l);
          let m = s.createWebChannel(g, l),
            y = !1,
            v = !1,
            b = new nT({
              Fo: (t) => {
                v
                  ? N(
                      nC,
                      `Not sending because RPC '${e}' stream ${n} is closed:`,
                      t
                    )
                  : (y ||
                      (N(nC, `Opening RPC '${e}' stream ${n} transport.`),
                      m.open(),
                      (y = !0)),
                    N(nC, `RPC '${e}' stream ${n} sending:`, t),
                    m.send(t));
              },
              Mo: () => m.close(),
            }),
            w = (e, t, r) => {
              e.listen(t, (e) => {
                try {
                  r(e);
                } catch (e) {
                  setTimeout(() => {
                    throw e;
                  }, 0);
                }
              });
            };
          return (
            w(m, a.EventType.OPEN, () => {
              v || (N(nC, `RPC '${e}' stream ${n} transport opened.`), b.Qo());
            }),
            w(m, a.EventType.CLOSE, () => {
              v ||
                ((v = !0),
                N(nC, `RPC '${e}' stream ${n} transport closed`),
                b.Uo());
            }),
            w(m, a.EventType.ERROR, (t) => {
              v ||
                ((v = !0),
                P(nC, `RPC '${e}' stream ${n} transport errored:`, t),
                b.Uo(
                  new $(M.UNAVAILABLE, "The operation could not be completed")
                ));
            }),
            w(m, a.EventType.MESSAGE, (t) => {
              var r;
              if (!v) {
                let i = t.data[0];
                i || L();
                let s =
                  (null == i ? void 0 : i.error) ||
                  (null === (r = i[0]) || void 0 === r ? void 0 : r.error);
                if (s) {
                  N(nC, `RPC '${e}' stream ${n} received error:`, s);
                  let t = s.status,
                    r = (function (e) {
                      let t = d[e];
                      if (void 0 !== t) return rs(t);
                    })(t),
                    i = s.message;
                  void 0 === r &&
                    ((r = M.INTERNAL),
                    (i =
                      "Unknown error status: " +
                      t +
                      " with message " +
                      s.message)),
                    (v = !0),
                    b.Uo(new $(r, i)),
                    m.close();
                } else N(nC, `RPC '${e}' stream ${n} received:`, i), b.Ko(i);
              }
            }),
            w(o, c.STAT_EVENT, (t) => {
              t.stat === u.PROXY
                ? N(nC, `RPC '${e}' stream ${n} detected buffering proxy`)
                : t.stat === u.NOPROXY &&
                  N(nC, `RPC '${e}' stream ${n} detected no buffering proxy`);
            }),
            setTimeout(() => {
              b.$o();
            }, 0),
            b
          );
        }
      }
      function nk() {
        return "undefined" != typeof document ? document : null;
      }
      function nA(e) {
        return new rx(e, !0);
      }
      class nI {
        constructor(e, t, r = 1e3, n = 1.5, i = 6e4) {
          (this.Ti = e),
            (this.timerId = t),
            (this.Go = r),
            (this.zo = n),
            (this.jo = i),
            (this.Ho = 0),
            (this.Jo = null),
            (this.Yo = Date.now()),
            this.reset();
        }
        reset() {
          this.Ho = 0;
        }
        Zo() {
          this.Ho = this.jo;
        }
        Xo(e) {
          this.cancel();
          let t = Math.floor(this.Ho + this.e_()),
            r = Math.max(0, Date.now() - this.Yo),
            n = Math.max(0, t - r);
          n > 0 &&
            N(
              "ExponentialBackoff",
              `Backing off for ${n} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`
            ),
            (this.Jo = this.Ti.enqueueAfterDelay(
              this.timerId,
              n,
              () => ((this.Yo = Date.now()), e())
            )),
            (this.Ho *= this.zo),
            this.Ho < this.Go && (this.Ho = this.Go),
            this.Ho > this.jo && (this.Ho = this.jo);
        }
        t_() {
          null !== this.Jo && (this.Jo.skipDelay(), (this.Jo = null));
        }
        cancel() {
          null !== this.Jo && (this.Jo.cancel(), (this.Jo = null));
        }
        e_() {
          return (Math.random() - 0.5) * this.Ho;
        }
      }
      let nD = "PersistentStream";
      class nN {
        constructor(e, t, r, n, i, s, a, o) {
          (this.Ti = e),
            (this.n_ = r),
            (this.r_ = n),
            (this.connection = i),
            (this.authCredentialsProvider = s),
            (this.appCheckCredentialsProvider = a),
            (this.listener = o),
            (this.state = 0),
            (this.i_ = 0),
            (this.s_ = null),
            (this.o_ = null),
            (this.stream = null),
            (this.__ = 0),
            (this.a_ = new nI(e, t));
        }
        u_() {
          return 1 === this.state || 5 === this.state || this.c_();
        }
        c_() {
          return 2 === this.state || 3 === this.state;
        }
        start() {
          (this.__ = 0), 4 !== this.state ? this.auth() : this.l_();
        }
        async stop() {
          this.u_() && (await this.close(0));
        }
        h_() {
          (this.state = 0), this.a_.reset();
        }
        P_() {
          this.c_() &&
            null === this.s_ &&
            (this.s_ = this.Ti.enqueueAfterDelay(this.n_, 6e4, () =>
              this.T_()
            ));
        }
        I_(e) {
          this.E_(), this.stream.send(e);
        }
        async T_() {
          if (this.c_()) return this.close(0);
        }
        E_() {
          this.s_ && (this.s_.cancel(), (this.s_ = null));
        }
        d_() {
          this.o_ && (this.o_.cancel(), (this.o_ = null));
        }
        async close(e, t) {
          this.E_(),
            this.d_(),
            this.a_.cancel(),
            this.i_++,
            4 !== e
              ? this.a_.reset()
              : t && t.code === M.RESOURCE_EXHAUSTED
              ? (R(t.toString()),
                R(
                  "Using maximum backoff delay to prevent overloading the backend."
                ),
                this.a_.Zo())
              : t &&
                t.code === M.UNAUTHENTICATED &&
                3 !== this.state &&
                (this.authCredentialsProvider.invalidateToken(),
                this.appCheckCredentialsProvider.invalidateToken()),
            null !== this.stream &&
              (this.A_(), this.stream.close(), (this.stream = null)),
            (this.state = e),
            await this.listener.Lo(t);
        }
        A_() {}
        auth() {
          this.state = 1;
          let e = this.R_(this.i_),
            t = this.i_;
          Promise.all([
            this.authCredentialsProvider.getToken(),
            this.appCheckCredentialsProvider.getToken(),
          ]).then(
            ([e, r]) => {
              this.i_ === t && this.V_(e, r);
            },
            (t) => {
              e(() => {
                let e = new $(
                  M.UNKNOWN,
                  "Fetching auth token failed: " + t.message
                );
                return this.m_(e);
              });
            }
          );
        }
        V_(e, t) {
          let r = this.R_(this.i_);
          (this.stream = this.f_(e, t)),
            this.stream.xo(() => {
              r(() => this.listener.xo());
            }),
            this.stream.No(() => {
              r(
                () => (
                  (this.state = 2),
                  (this.o_ = this.Ti.enqueueAfterDelay(
                    this.r_,
                    1e4,
                    () => (this.c_() && (this.state = 3), Promise.resolve())
                  )),
                  this.listener.No()
                )
              );
            }),
            this.stream.Lo((e) => {
              r(() => this.m_(e));
            }),
            this.stream.onMessage((e) => {
              r(() => (1 == ++this.__ ? this.g_(e) : this.onNext(e)));
            });
        }
        l_() {
          (this.state = 5),
            this.a_.Xo(async () => {
              (this.state = 0), this.start();
            });
        }
        m_(e) {
          return (
            N(nD, `close with error: ${e}`),
            (this.stream = null),
            this.close(4, e)
          );
        }
        R_(e) {
          return (t) => {
            this.Ti.enqueueAndForget(() =>
              this.i_ === e
                ? t()
                : (N(
                    nD,
                    "stream callback skipped by getCloseGuardedDispatcher."
                  ),
                  Promise.resolve())
            );
          };
        }
      }
      class nR extends nN {
        constructor(e, t, r, n, i, s) {
          super(
            e,
            "listen_stream_connection_backoff",
            "listen_stream_idle",
            "health_check_timeout",
            t,
            r,
            n,
            s
          ),
            (this.serializer = i);
        }
        f_(e, t) {
          return this.connection.Wo("Listen", e, t);
        }
        g_(e) {
          return this.onNext(e);
        }
        onNext(e) {
          this.a_.reset();
          let t = (function (e, t) {
              let r;
              if ("targetChange" in t) {
                var n, i;
                t.targetChange;
                let s =
                    "NO_CHANGE" ===
                    (n = t.targetChange.targetChangeType || "NO_CHANGE")
                      ? 0
                      : "ADD" === n
                      ? 1
                      : "REMOVE" === n
                      ? 2
                      : "CURRENT" === n
                      ? 3
                      : "RESET" === n
                      ? 4
                      : L(),
                  a = t.targetChange.targetIds || [],
                  o =
                    ((i = t.targetChange.resumeToken),
                    e.useProto3Json
                      ? (void 0 === i || "string" == typeof i || L(),
                        eT.fromBase64String(i || ""))
                      : (void 0 === i ||
                          i instanceof Buffer ||
                          i instanceof Uint8Array ||
                          L(),
                        eT.fromUint8Array(i || new Uint8Array()))),
                  l = t.targetChange.cause;
                r = new rg(
                  s,
                  a,
                  o,
                  (l &&
                    new $(
                      void 0 === l.code ? M.UNKNOWN : rs(l.code),
                      l.message || ""
                    )) ||
                    null
                );
              } else if ("documentChange" in t) {
                t.documentChange;
                let n = t.documentChange;
                n.document, n.document.name, n.document.updateTime;
                let i = rR(e, n.document.name),
                  s = rk(n.document.updateTime),
                  a = n.document.createTime
                    ? rk(n.document.createTime)
                    : ee.min(),
                  o = new e6({ mapValue: { fields: n.document.fields } }),
                  l = e4.newFoundDocument(i, s, a, o);
                r = new rd(
                  n.targetIds || [],
                  n.removedTargetIds || [],
                  l.key,
                  l
                );
              } else if ("documentDelete" in t) {
                t.documentDelete;
                let n = t.documentDelete;
                n.document;
                let i = rR(e, n.document),
                  s = n.readTime ? rk(n.readTime) : ee.min(),
                  a = e4.newNoDocument(i, s);
                r = new rd([], n.removedTargetIds || [], a.key, a);
              } else if ("documentRemove" in t) {
                t.documentRemove;
                let n = t.documentRemove;
                n.document;
                let i = rR(e, n.document);
                r = new rd([], n.removedTargetIds || [], i, null);
              } else {
                if (!("filter" in t)) return L();
                {
                  t.filter;
                  let e = t.filter;
                  e.targetId;
                  let { count: n = 0, unchangedNames: i } = e,
                    s = new ri(n, i);
                  r = new rp(e.targetId, s);
                }
              }
              return r;
            })(this.serializer, e),
            r = (function (e) {
              if (!("targetChange" in e)) return ee.min();
              let t = e.targetChange;
              return t.targetIds && t.targetIds.length
                ? ee.min()
                : t.readTime
                ? rk(t.readTime)
                : ee.min();
            })(e);
          return this.listener.p_(t, r);
        }
        y_(e) {
          let t = {};
          (t.database = rO(this.serializer)),
            (t.addTarget = (function (e, t) {
              let r;
              let n = t.target;
              if (
                (((r = tv(n)
                  ? { documents: { documents: [rP(e, n.path)] } }
                  : {
                      query: (function (e, t) {
                        var r, n;
                        let i;
                        let s = { structuredQuery: {} },
                          a = t.path;
                        null !== t.collectionGroup
                          ? ((i = a),
                            (s.structuredQuery.from = [
                              {
                                collectionId: t.collectionGroup,
                                allDescendants: !0,
                              },
                            ]))
                          : ((i = a.popLast()),
                            (s.structuredQuery.from = [
                              { collectionId: a.lastSegment() },
                            ])),
                          (s.parent = rP(e, i));
                        let o = (function (e) {
                          if (0 !== e.length)
                            return (function e(t) {
                              return t instanceof tr
                                ? (function (e) {
                                    if ("==" === e.op) {
                                      if (e0(e.value))
                                        return {
                                          unaryFilter: {
                                            field: r$(e.field),
                                            op: "IS_NAN",
                                          },
                                        };
                                      if (eJ(e.value))
                                        return {
                                          unaryFilter: {
                                            field: r$(e.field),
                                            op: "IS_NULL",
                                          },
                                        };
                                    } else if ("!=" === e.op) {
                                      if (e0(e.value))
                                        return {
                                          unaryFilter: {
                                            field: r$(e.field),
                                            op: "IS_NOT_NAN",
                                          },
                                        };
                                      if (eJ(e.value))
                                        return {
                                          unaryFilter: {
                                            field: r$(e.field),
                                            op: "IS_NOT_NULL",
                                          },
                                        };
                                    }
                                    return {
                                      fieldFilter: {
                                        field: r$(e.field),
                                        op: rS[e.op],
                                        value: e.value,
                                      },
                                    };
                                  })(t)
                                : t instanceof tn
                                ? (function (t) {
                                    let r = t.getFilters().map((t) => e(t));
                                    return 1 === r.length
                                      ? r[0]
                                      : {
                                          compositeFilter: {
                                            op: rE[t.op],
                                            filters: r,
                                          },
                                        };
                                  })(t)
                                : L();
                            })(tn.create(e, "and"));
                        })(t.filters);
                        o && (s.structuredQuery.where = o);
                        let l = (function (e) {
                          if (0 !== e.length)
                            return e.map((e) => ({
                              field: r$(e.field),
                              direction: rw[e.dir],
                            }));
                        })(t.orderBy);
                        l && (s.structuredQuery.orderBy = l);
                        let u = rT(e, t.limit);
                        return (
                          null !== u && (s.structuredQuery.limit = u),
                          t.startAt &&
                            (s.structuredQuery.startAt = {
                              before: (r = t.startAt).inclusive,
                              values: r.position,
                            }),
                          t.endAt &&
                            (s.structuredQuery.endAt = {
                              before: !(n = t.endAt).inclusive,
                              values: n.position,
                            }),
                          { ht: s, parent: i }
                        );
                      })(e, n).ht,
                    }).targetId = t.targetId),
                t.resumeToken.approximateByteSize() > 0)
              ) {
                r.resumeToken = r_(e, t.resumeToken);
                let n = rT(e, t.expectedCount);
                null !== n && (r.expectedCount = n);
              } else if (t.snapshotVersion.compareTo(ee.min()) > 0) {
                r.readTime = rC(e, t.snapshotVersion.toTimestamp());
                let n = rT(e, t.expectedCount);
                null !== n && (r.expectedCount = n);
              }
              return r;
            })(this.serializer, e));
          let r = (function (e, t) {
            let r = (function (e) {
              switch (e) {
                case "TargetPurposeListen":
                  return null;
                case "TargetPurposeExistenceFilterMismatch":
                  return "existence-filter-mismatch";
                case "TargetPurposeExistenceFilterMismatchBloom":
                  return "existence-filter-mismatch-bloom";
                case "TargetPurposeLimboResolution":
                  return "limbo-document";
                default:
                  return L();
              }
            })(t.purpose);
            return null == r ? null : { "goog-listen-tags": r };
          })(this.serializer, e);
          r && (t.labels = r), this.I_(t);
        }
        w_(e) {
          let t = {};
          (t.database = rO(this.serializer)), (t.removeTarget = e), this.I_(t);
        }
      }
      class nP extends nN {
        constructor(e, t, r, n, i, s) {
          super(
            e,
            "write_stream_connection_backoff",
            "write_stream_idle",
            "health_check_timeout",
            t,
            r,
            n,
            s
          ),
            (this.serializer = i);
        }
        get S_() {
          return this.__ > 0;
        }
        start() {
          (this.lastStreamToken = void 0), super.start();
        }
        A_() {
          this.S_ && this.b_([]);
        }
        f_(e, t) {
          return this.connection.Wo("Write", e, t);
        }
        g_(e) {
          return (
            e.streamToken || L(),
            (this.lastStreamToken = e.streamToken),
            e.writeResults && 0 !== e.writeResults.length && L(),
            this.listener.D_()
          );
        }
        onNext(e) {
          var t, r;
          e.streamToken || L(),
            (this.lastStreamToken = e.streamToken),
            this.a_.reset();
          let n =
              ((t = e.writeResults),
              (r = e.commitTime),
              t && t.length > 0
                ? (void 0 !== r || L(),
                  t.map((e) => {
                    let t;
                    return (
                      (t = e.updateTime ? rk(e.updateTime) : rk(r)).isEqual(
                        ee.min()
                      ) && (t = rk(r)),
                      new tX(t, e.transformResults || [])
                    );
                  }))
                : []),
            i = rk(e.commitTime);
          return this.listener.v_(i, n);
        }
        C_() {
          let e = {};
          (e.database = rO(this.serializer)), this.I_(e);
        }
        b_(e) {
          let t = {
            streamToken: this.lastStreamToken,
            writes: e.map((e) =>
              (function (e, t) {
                var r;
                let n;
                if (t instanceof t3) n = { update: rM(e, t.key, t.value) };
                else if (t instanceof t9) n = { delete: rN(e, t.key) };
                else if (t instanceof t6)
                  n = {
                    update: rM(e, t.key, t.data),
                    updateMask: (function (e) {
                      let t = [];
                      return (
                        e.fields.forEach((e) => t.push(e.canonicalString())),
                        { fieldPaths: t }
                      );
                    })(t.fieldMask),
                  };
                else {
                  if (!(t instanceof re)) return L();
                  n = { verify: rN(e, t.key) };
                }
                return (
                  t.fieldTransforms.length > 0 &&
                    (n.updateTransforms = t.fieldTransforms.map((e) =>
                      (function (e, t) {
                        let r = t.transform;
                        if (r instanceof tz)
                          return {
                            fieldPath: t.field.canonicalString(),
                            setToServerValue: "REQUEST_TIME",
                          };
                        if (r instanceof tq)
                          return {
                            fieldPath: t.field.canonicalString(),
                            appendMissingElements: { values: r.elements },
                          };
                        if (r instanceof tK)
                          return {
                            fieldPath: t.field.canonicalString(),
                            removeAllFromArray: { values: r.elements },
                          };
                        if (r instanceof tG)
                          return {
                            fieldPath: t.field.canonicalString(),
                            increment: r.Ie,
                          };
                        throw L();
                      })(0, e)
                    )),
                  t.precondition.isNone ||
                    (n.currentDocument =
                      void 0 !== (r = t.precondition).updateTime
                        ? { updateTime: rC(e, r.updateTime.toTimestamp()) }
                        : void 0 !== r.exists
                        ? { exists: r.exists }
                        : L()),
                  n
                );
              })(this.serializer, e)
            ),
          };
          this.I_(t);
        }
      }
      class nO {}
      class nL extends nO {
        constructor(e, t, r, n) {
          super(),
            (this.authCredentials = e),
            (this.appCheckCredentials = t),
            (this.connection = r),
            (this.serializer = n),
            (this.F_ = !1);
        }
        M_() {
          if (this.F_)
            throw new $(
              M.FAILED_PRECONDITION,
              "The client has already been terminated."
            );
        }
        So(e, t, r, n) {
          return (
            this.M_(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken(),
            ])
              .then(([i, s]) => this.connection.So(e, rI(t, r), n, i, s))
              .catch((e) => {
                throw "FirebaseError" === e.name
                  ? (e.code === M.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new $(M.UNKNOWN, e.toString());
              })
          );
        }
        Co(e, t, r, n, i) {
          return (
            this.M_(),
            Promise.all([
              this.authCredentials.getToken(),
              this.appCheckCredentials.getToken(),
            ])
              .then(([s, a]) => this.connection.Co(e, rI(t, r), n, s, a, i))
              .catch((e) => {
                throw "FirebaseError" === e.name
                  ? (e.code === M.UNAUTHENTICATED &&
                      (this.authCredentials.invalidateToken(),
                      this.appCheckCredentials.invalidateToken()),
                    e)
                  : new $(M.UNKNOWN, e.toString());
              })
          );
        }
        terminate() {
          (this.F_ = !0), this.connection.terminate();
        }
      }
      class nM {
        constructor(e, t) {
          (this.asyncQueue = e),
            (this.onlineStateHandler = t),
            (this.state = "Unknown"),
            (this.x_ = 0),
            (this.O_ = null),
            (this.N_ = !0);
        }
        B_() {
          0 === this.x_ &&
            (this.L_("Unknown"),
            (this.O_ = this.asyncQueue.enqueueAfterDelay(
              "online_state_timeout",
              1e4,
              () => (
                (this.O_ = null),
                this.k_("Backend didn't respond within 10 seconds."),
                this.L_("Offline"),
                Promise.resolve()
              )
            )));
        }
        q_(e) {
          "Online" === this.state
            ? this.L_("Unknown")
            : (this.x_++,
              this.x_ >= 1 &&
                (this.Q_(),
                this.k_(
                  `Connection failed 1 times. Most recent error: ${e.toString()}`
                ),
                this.L_("Offline")));
        }
        set(e) {
          this.Q_(),
            (this.x_ = 0),
            "Online" === e && (this.N_ = !1),
            this.L_(e);
        }
        L_(e) {
          e !== this.state && ((this.state = e), this.onlineStateHandler(e));
        }
        k_(e) {
          let t = `Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;
          this.N_ ? (R(t), (this.N_ = !1)) : N("OnlineStateTracker", t);
        }
        Q_() {
          null !== this.O_ && (this.O_.cancel(), (this.O_ = null));
        }
      }
      let n$ = "RemoteStore";
      class nV {
        constructor(e, t, r, n, i) {
          (this.localStore = e),
            (this.datastore = t),
            (this.asyncQueue = r),
            (this.remoteSyncer = {}),
            (this.U_ = []),
            (this.K_ = new Map()),
            (this.W_ = new Set()),
            (this.G_ = []),
            (this.z_ = i),
            this.z_.To((e) => {
              r.enqueueAndForget(async () => {
                nZ(this) &&
                  (N(n$, "Restarting streams for network reachability change."),
                  await (async function (e) {
                    e.W_.add(4),
                      await nB(e),
                      e.j_.set("Unknown"),
                      e.W_.delete(4),
                      await nF(e);
                  })(this));
              });
            }),
            (this.j_ = new nM(r, n));
        }
      }
      async function nF(e) {
        if (nZ(e)) for (let t of e.G_) await t(!0);
      }
      async function nB(e) {
        for (let t of e.G_) await t(!1);
      }
      function nU(e, t) {
        e.K_.has(t.targetId) ||
          (e.K_.set(t.targetId, t), nK(e) ? nH(e) : n9(e).c_() && nz(e, t));
      }
      function nj(e, t) {
        let r = n9(e);
        e.K_.delete(t),
          r.c_() && nq(e, t),
          0 === e.K_.size && (r.c_() ? r.P_() : nZ(e) && e.j_.set("Unknown"));
      }
      function nz(e, t) {
        if (
          (e.H_.Ne(t.targetId),
          t.resumeToken.approximateByteSize() > 0 ||
            t.snapshotVersion.compareTo(ee.min()) > 0)
        ) {
          let r = e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;
          t = t.withExpectedCount(r);
        }
        n9(e).y_(t);
      }
      function nq(e, t) {
        e.H_.Ne(t), n9(e).w_(t);
      }
      function nH(e) {
        (e.H_ = new ry({
          getRemoteKeysForTarget: (t) =>
            e.remoteSyncer.getRemoteKeysForTarget(t),
          lt: (t) => e.K_.get(t) || null,
          it: () => e.datastore.serializer.databaseId,
        })),
          n9(e).start(),
          e.j_.B_();
      }
      function nK(e) {
        return nZ(e) && !n9(e).u_() && e.K_.size > 0;
      }
      function nZ(e) {
        return 0 === e.W_.size;
      }
      async function nG(e) {
        e.j_.set("Online");
      }
      async function nW(e) {
        e.K_.forEach((t, r) => {
          nz(e, t);
        });
      }
      async function nQ(e, t) {
        (e.H_ = void 0), nK(e) ? (e.j_.q_(t), nH(e)) : e.j_.set("Unknown");
      }
      async function nX(e, t, r) {
        if ((e.j_.set("Online"), t instanceof rg && 2 === t.state && t.cause))
          try {
            await (async function (e, t) {
              let r = t.cause;
              for (let n of t.targetIds)
                e.K_.has(n) &&
                  (await e.remoteSyncer.rejectListen(n, r),
                  e.K_.delete(n),
                  e.H_.removeTarget(n));
            })(e, t);
          } catch (r) {
            N(n$, "Failed to remove targets %s: %s ", t.targetIds.join(","), r),
              await nY(e, r);
          }
        else if (
          (t instanceof rd
            ? e.H_.We(t)
            : t instanceof rp
            ? e.H_.Ze(t)
            : e.H_.je(t),
          !r.isEqual(ee.min()))
        )
          try {
            let t = await nh(e.localStore);
            r.compareTo(t) >= 0 &&
              (await (function (e, t) {
                let r = e.H_.ot(t);
                return (
                  r.targetChanges.forEach((r, n) => {
                    if (r.resumeToken.approximateByteSize() > 0) {
                      let i = e.K_.get(n);
                      i && e.K_.set(n, i.withResumeToken(r.resumeToken, t));
                    }
                  }),
                  r.targetMismatches.forEach((t, r) => {
                    let n = e.K_.get(t);
                    if (!n) return;
                    e.K_.set(
                      t,
                      n.withResumeToken(eT.EMPTY_BYTE_STRING, n.snapshotVersion)
                    ),
                      nq(e, t);
                    let i = new rB(n.target, t, r, n.sequenceNumber);
                    nz(e, i);
                  }),
                  e.remoteSyncer.applyRemoteEvent(r)
                );
              })(e, r));
          } catch (t) {
            N(n$, "Failed to raise snapshot:", t), await nY(e, t);
          }
      }
      async function nY(e, t, r) {
        if (!eh(t)) throw t;
        e.W_.add(1),
          await nB(e),
          e.j_.set("Offline"),
          r || (r = () => nh(e.localStore)),
          e.asyncQueue.enqueueRetryable(async () => {
            N(n$, "Retrying IndexedDB access"),
              await r(),
              e.W_.delete(1),
              await nF(e);
          });
      }
      function nJ(e, t) {
        return t().catch((r) => nY(e, r, t));
      }
      async function n0(e) {
        var t;
        let r = ie(e),
          n = e.U_.length > 0 ? e.U_[e.U_.length - 1].batchId : -1;
        for (; nZ((t = e)) && t.U_.length < 10; )
          try {
            let t = await (function (e, t) {
              return e.persistence.runTransaction(
                "Get next mutation batch",
                "readonly",
                (r) => (
                  void 0 === t && (t = -1),
                  e.mutationQueue.getNextMutationBatchAfterBatchId(r, t)
                )
              );
            })(e.localStore, n);
            if (null === t) {
              0 === e.U_.length && r.P_();
              break;
            }
            (n = t.batchId),
              (function (e, t) {
                e.U_.push(t);
                let r = ie(e);
                r.c_() && r.S_ && r.b_(t.mutations);
              })(e, t);
          } catch (t) {
            await nY(e, t);
          }
        n1(e) && n2(e);
      }
      function n1(e) {
        return nZ(e) && !ie(e).u_() && e.U_.length > 0;
      }
      function n2(e) {
        ie(e).start();
      }
      async function n5(e) {
        ie(e).C_();
      }
      async function n3(e) {
        let t = ie(e);
        for (let r of e.U_) t.b_(r.mutations);
      }
      async function n6(e, t, r) {
        let n = e.U_.shift(),
          i = rr.from(n, t, r);
        await nJ(e, () => e.remoteSyncer.applySuccessfulWrite(i)), await n0(e);
      }
      async function n4(e, t) {
        t &&
          ie(e).S_ &&
          (await (async function (e, t) {
            var r;
            if (
              (function (e) {
                switch (e) {
                  case M.OK:
                    return L();
                  case M.CANCELLED:
                  case M.UNKNOWN:
                  case M.DEADLINE_EXCEEDED:
                  case M.RESOURCE_EXHAUSTED:
                  case M.INTERNAL:
                  case M.UNAVAILABLE:
                  case M.UNAUTHENTICATED:
                    return !1;
                  case M.INVALID_ARGUMENT:
                  case M.NOT_FOUND:
                  case M.ALREADY_EXISTS:
                  case M.PERMISSION_DENIED:
                  case M.FAILED_PRECONDITION:
                  case M.ABORTED:
                  case M.OUT_OF_RANGE:
                  case M.UNIMPLEMENTED:
                  case M.DATA_LOSS:
                    return !0;
                  default:
                    return L();
                }
              })((r = t.code)) &&
              r !== M.ABORTED
            ) {
              let r = e.U_.shift();
              ie(e).h_(),
                await nJ(e, () =>
                  e.remoteSyncer.rejectFailedWrite(r.batchId, t)
                ),
                await n0(e);
            }
          })(e, t)),
          n1(e) && n2(e);
      }
      async function n8(e, t) {
        e.asyncQueue.verifyOperationInProgress(),
          N(n$, "RemoteStore received new credentials");
        let r = nZ(e);
        e.W_.add(3),
          await nB(e),
          r && e.j_.set("Unknown"),
          await e.remoteSyncer.handleCredentialChange(t),
          e.W_.delete(3),
          await nF(e);
      }
      async function n7(e, t) {
        t
          ? (e.W_.delete(2), await nF(e))
          : t || (e.W_.add(2), await nB(e), e.j_.set("Unknown"));
      }
      function n9(e) {
        var t, r, n;
        return (
          e.J_ ||
            ((e.J_ =
              ((t = e.datastore),
              (r = e.asyncQueue),
              (n = {
                xo: nG.bind(null, e),
                No: nW.bind(null, e),
                Lo: nQ.bind(null, e),
                p_: nX.bind(null, e),
              }),
              t.M_(),
              new nR(
                r,
                t.connection,
                t.authCredentials,
                t.appCheckCredentials,
                t.serializer,
                n
              ))),
            e.G_.push(async (t) => {
              t
                ? (e.J_.h_(), nK(e) ? nH(e) : e.j_.set("Unknown"))
                : (await e.J_.stop(), (e.H_ = void 0));
            })),
          e.J_
        );
      }
      function ie(e) {
        var t, r, n;
        return (
          e.Y_ ||
            ((e.Y_ =
              ((t = e.datastore),
              (r = e.asyncQueue),
              (n = {
                xo: () => Promise.resolve(),
                No: n5.bind(null, e),
                Lo: n4.bind(null, e),
                D_: n3.bind(null, e),
                v_: n6.bind(null, e),
              }),
              t.M_(),
              new nP(
                r,
                t.connection,
                t.authCredentials,
                t.appCheckCredentials,
                t.serializer,
                n
              ))),
            e.G_.push(async (t) => {
              t
                ? (e.Y_.h_(), await n0(e))
                : (await e.Y_.stop(),
                  e.U_.length > 0 &&
                    (N(
                      n$,
                      `Stopping write stream with ${e.U_.length} pending writes`
                    ),
                    (e.U_ = [])));
            })),
          e.Y_
        );
      }
      class it {
        constructor(e, t, r, n, i) {
          (this.asyncQueue = e),
            (this.timerId = t),
            (this.targetTimeMs = r),
            (this.op = n),
            (this.removalCallback = i),
            (this.deferred = new V()),
            (this.then = this.deferred.promise.then.bind(
              this.deferred.promise
            )),
            this.deferred.promise.catch((e) => {});
        }
        get promise() {
          return this.deferred.promise;
        }
        static createAndSchedule(e, t, r, n, i) {
          let s = new it(e, t, Date.now() + r, n, i);
          return s.start(r), s;
        }
        start(e) {
          this.timerHandle = setTimeout(() => this.handleDelayElapsed(), e);
        }
        skipDelay() {
          return this.handleDelayElapsed();
        }
        cancel(e) {
          null !== this.timerHandle &&
            (this.clearTimeout(),
            this.deferred.reject(
              new $(M.CANCELLED, "Operation cancelled" + (e ? ": " + e : ""))
            ));
        }
        handleDelayElapsed() {
          this.asyncQueue.enqueueAndForget(() =>
            null !== this.timerHandle
              ? (this.clearTimeout(),
                this.op().then((e) => this.deferred.resolve(e)))
              : Promise.resolve()
          );
        }
        clearTimeout() {
          null !== this.timerHandle &&
            (this.removalCallback(this),
            clearTimeout(this.timerHandle),
            (this.timerHandle = null));
        }
      }
      function ir(e, t) {
        if ((R("AsyncQueue", `${t}: ${e}`), eh(e)))
          return new $(M.UNAVAILABLE, `${t}: ${e}`);
        throw e;
      }
      class ii {
        static emptySet(e) {
          return new ii(e.comparator);
        }
        constructor(e) {
          (this.comparator = e
            ? (t, r) => e(t, r) || ea.comparator(t.key, r.key)
            : (e, t) => ea.comparator(e.key, t.key)),
            (this.keyedMap = tR()),
            (this.sortedSet = new ey(this.comparator));
        }
        has(e) {
          return null != this.keyedMap.get(e);
        }
        get(e) {
          return this.keyedMap.get(e);
        }
        first() {
          return this.sortedSet.minKey();
        }
        last() {
          return this.sortedSet.maxKey();
        }
        isEmpty() {
          return this.sortedSet.isEmpty();
        }
        indexOf(e) {
          let t = this.keyedMap.get(e);
          return t ? this.sortedSet.indexOf(t) : -1;
        }
        get size() {
          return this.sortedSet.size;
        }
        forEach(e) {
          this.sortedSet.inorderTraversal((t, r) => (e(t), !1));
        }
        add(e) {
          let t = this.delete(e.key);
          return t.copy(
            t.keyedMap.insert(e.key, e),
            t.sortedSet.insert(e, null)
          );
        }
        delete(e) {
          let t = this.get(e);
          return t
            ? this.copy(this.keyedMap.remove(e), this.sortedSet.remove(t))
            : this;
        }
        isEqual(e) {
          if (!(e instanceof ii) || this.size !== e.size) return !1;
          let t = this.sortedSet.getIterator(),
            r = e.sortedSet.getIterator();
          for (; t.hasNext(); ) {
            let e = t.getNext().key,
              n = r.getNext().key;
            if (!e.isEqual(n)) return !1;
          }
          return !0;
        }
        toString() {
          let e = [];
          return (
            this.forEach((t) => {
              e.push(t.toString());
            }),
            0 === e.length
              ? "DocumentSet ()"
              : "DocumentSet (\n  " + e.join("  \n") + "\n)"
          );
        }
        copy(e, t) {
          let r = new ii();
          return (
            (r.comparator = this.comparator),
            (r.keyedMap = e),
            (r.sortedSet = t),
            r
          );
        }
      }
      class is {
        constructor() {
          this.Z_ = new ey(ea.comparator);
        }
        track(e) {
          let t = e.doc.key,
            r = this.Z_.get(t);
          r
            ? 0 !== e.type && 3 === r.type
              ? (this.Z_ = this.Z_.insert(t, e))
              : 3 === e.type && 1 !== r.type
              ? (this.Z_ = this.Z_.insert(t, { type: r.type, doc: e.doc }))
              : 2 === e.type && 2 === r.type
              ? (this.Z_ = this.Z_.insert(t, { type: 2, doc: e.doc }))
              : 2 === e.type && 0 === r.type
              ? (this.Z_ = this.Z_.insert(t, { type: 0, doc: e.doc }))
              : 1 === e.type && 0 === r.type
              ? (this.Z_ = this.Z_.remove(t))
              : 1 === e.type && 2 === r.type
              ? (this.Z_ = this.Z_.insert(t, { type: 1, doc: r.doc }))
              : 0 === e.type && 1 === r.type
              ? (this.Z_ = this.Z_.insert(t, { type: 2, doc: e.doc }))
              : L()
            : (this.Z_ = this.Z_.insert(t, e));
        }
        X_() {
          let e = [];
          return (
            this.Z_.inorderTraversal((t, r) => {
              e.push(r);
            }),
            e
          );
        }
      }
      class ia {
        constructor(e, t, r, n, i, s, a, o, l) {
          (this.query = e),
            (this.docs = t),
            (this.oldDocs = r),
            (this.docChanges = n),
            (this.mutatedKeys = i),
            (this.fromCache = s),
            (this.syncStateChanged = a),
            (this.excludesMetadataChanges = o),
            (this.hasCachedResults = l);
        }
        static fromInitialDocuments(e, t, r, n, i) {
          let s = [];
          return (
            t.forEach((e) => {
              s.push({ type: 0, doc: e });
            }),
            new ia(e, t, ii.emptySet(t), s, r, n, !0, !1, i)
          );
        }
        get hasPendingWrites() {
          return !this.mutatedKeys.isEmpty();
        }
        isEqual(e) {
          if (
            !(
              this.fromCache === e.fromCache &&
              this.hasCachedResults === e.hasCachedResults &&
              this.syncStateChanged === e.syncStateChanged &&
              this.mutatedKeys.isEqual(e.mutatedKeys) &&
              tT(this.query, e.query) &&
              this.docs.isEqual(e.docs) &&
              this.oldDocs.isEqual(e.oldDocs)
            )
          )
            return !1;
          let t = this.docChanges,
            r = e.docChanges;
          if (t.length !== r.length) return !1;
          for (let e = 0; e < t.length; e++)
            if (t[e].type !== r[e].type || !t[e].doc.isEqual(r[e].doc))
              return !1;
          return !0;
        }
      }
      class io {
        constructor() {
          (this.ea = void 0), (this.ta = []);
        }
        na() {
          return this.ta.some((e) => e.ra());
        }
      }
      class il {
        constructor() {
          (this.queries = iu()),
            (this.onlineState = "Unknown"),
            (this.ia = new Set());
        }
        terminate() {
          !(function (e, t) {
            let r = e.queries;
            (e.queries = iu()),
              r.forEach((e, r) => {
                for (let e of r.ta) e.onError(t);
              });
          })(this, new $(M.ABORTED, "Firestore shutting down"));
        }
      }
      function iu() {
        return new tI((e) => tC(e), tT);
      }
      async function ic(e, t) {
        let r = 3,
          n = t.query,
          i = e.queries.get(n);
        i ? !i.na() && t.ra() && (r = 2) : ((i = new io()), (r = +!t.ra()));
        try {
          switch (r) {
            case 0:
              i.ea = await e.onListen(n, !0);
              break;
            case 1:
              i.ea = await e.onListen(n, !1);
              break;
            case 2:
              await e.onFirstRemoteStoreListen(n);
          }
        } catch (r) {
          let e = ir(r, `Initialization of query '${t_(t.query)}' failed`);
          return void t.onError(e);
        }
        e.queries.set(n, i),
          i.ta.push(t),
          t.sa(e.onlineState),
          i.ea && t.oa(i.ea) && ig(e);
      }
      async function ih(e, t) {
        let r = t.query,
          n = 3,
          i = e.queries.get(r);
        if (i) {
          let e = i.ta.indexOf(t);
          e >= 0 &&
            (i.ta.splice(e, 1),
            0 === i.ta.length ? (n = +!t.ra()) : !i.na() && t.ra() && (n = 2));
        }
        switch (n) {
          case 0:
            return e.queries.delete(r), e.onUnlisten(r, !0);
          case 1:
            return e.queries.delete(r), e.onUnlisten(r, !1);
          case 2:
            return e.onLastRemoteStoreUnlisten(r);
          default:
            return;
        }
      }
      function id(e, t) {
        let r = !1;
        for (let n of t) {
          let t = n.query,
            i = e.queries.get(t);
          if (i) {
            for (let e of i.ta) e.oa(n) && (r = !0);
            i.ea = n;
          }
        }
        r && ig(e);
      }
      function ip(e, t, r) {
        let n = e.queries.get(t);
        if (n) for (let e of n.ta) e.onError(r);
        e.queries.delete(t);
      }
      function ig(e) {
        e.ia.forEach((e) => {
          e.next();
        });
      }
      ((m = g || (g = {}))._a = "default"), (m.Cache = "cache");
      class im {
        constructor(e, t, r) {
          (this.query = e),
            (this.aa = t),
            (this.ua = !1),
            (this.ca = null),
            (this.onlineState = "Unknown"),
            (this.options = r || {});
        }
        oa(e) {
          if (!this.options.includeMetadataChanges) {
            let t = [];
            for (let r of e.docChanges) 3 !== r.type && t.push(r);
            e = new ia(
              e.query,
              e.docs,
              e.oldDocs,
              t,
              e.mutatedKeys,
              e.fromCache,
              e.syncStateChanged,
              !0,
              e.hasCachedResults
            );
          }
          let t = !1;
          return (
            this.ua
              ? this.la(e) && (this.aa.next(e), (t = !0))
              : this.ha(e, this.onlineState) && (this.Pa(e), (t = !0)),
            (this.ca = e),
            t
          );
        }
        onError(e) {
          this.aa.error(e);
        }
        sa(e) {
          this.onlineState = e;
          let t = !1;
          return (
            this.ca &&
              !this.ua &&
              this.ha(this.ca, e) &&
              (this.Pa(this.ca), (t = !0)),
            t
          );
        }
        ha(e, t) {
          return (
            !(e.fromCache && this.ra()) ||
            ((!this.options.Ta || "Offline" === t) &&
              (!e.docs.isEmpty() || e.hasCachedResults || "Offline" === t))
          );
        }
        la(e) {
          if (e.docChanges.length > 0) return !0;
          let t = this.ca && this.ca.hasPendingWrites !== e.hasPendingWrites;
          return (
            !(!e.syncStateChanged && !t) &&
            !0 === this.options.includeMetadataChanges
          );
        }
        Pa(e) {
          (e = ia.fromInitialDocuments(
            e.query,
            e.docs,
            e.mutatedKeys,
            e.fromCache,
            e.hasCachedResults
          )),
            (this.ua = !0),
            this.aa.next(e);
        }
        ra() {
          return this.options.source !== g.Cache;
        }
      }
      class iy {
        constructor(e) {
          this.key = e;
        }
      }
      class iv {
        constructor(e) {
          this.key = e;
        }
      }
      class ib {
        constructor(e, t) {
          (this.query = e),
            (this.fa = t),
            (this.ga = null),
            (this.hasCachedResults = !1),
            (this.current = !1),
            (this.pa = t$()),
            (this.mutatedKeys = t$()),
            (this.ya = tA(e)),
            (this.wa = new ii(this.ya));
        }
        get Sa() {
          return this.fa;
        }
        ba(e, t) {
          let r = t ? t.Da : new is(),
            n = t ? t.wa : this.wa,
            i = t ? t.mutatedKeys : this.mutatedKeys,
            s = n,
            a = !1,
            o =
              "F" === this.query.limitType && n.size === this.query.limit
                ? n.last()
                : null,
            l =
              "L" === this.query.limitType && n.size === this.query.limit
                ? n.first()
                : null;
          if (
            (e.inorderTraversal((e, t) => {
              let u = n.get(e),
                c = tk(this.query, t) ? t : null,
                h = !!u && this.mutatedKeys.has(u.key),
                f =
                  !!c &&
                  (c.hasLocalMutations ||
                    (this.mutatedKeys.has(c.key) && c.hasCommittedMutations)),
                d = !1;
              u && c
                ? u.data.isEqual(c.data)
                  ? h !== f && (r.track({ type: 3, doc: c }), (d = !0))
                  : this.va(u, c) ||
                    (r.track({ type: 2, doc: c }),
                    (d = !0),
                    ((o && this.ya(c, o) > 0) || (l && 0 > this.ya(c, l))) &&
                      (a = !0))
                : !u && c
                ? (r.track({ type: 0, doc: c }), (d = !0))
                : u &&
                  !c &&
                  (r.track({ type: 1, doc: u }),
                  (d = !0),
                  (o || l) && (a = !0)),
                d &&
                  (c
                    ? ((s = s.add(c)), (i = f ? i.add(e) : i.delete(e)))
                    : ((s = s.delete(e)), (i = i.delete(e))));
            }),
            null !== this.query.limit)
          )
            for (; s.size > this.query.limit; ) {
              let e = "F" === this.query.limitType ? s.last() : s.first();
              (s = s.delete(e.key)),
                (i = i.delete(e.key)),
                r.track({ type: 1, doc: e });
            }
          return { wa: s, Da: r, ls: a, mutatedKeys: i };
        }
        va(e, t) {
          return (
            e.hasLocalMutations &&
            t.hasCommittedMutations &&
            !t.hasLocalMutations
          );
        }
        applyChanges(e, t, r, n) {
          let i = this.wa;
          (this.wa = e.wa), (this.mutatedKeys = e.mutatedKeys);
          let s = e.Da.X_();
          s.sort(
            (e, t) =>
              (function (e, t) {
                let r = (e) => {
                  switch (e) {
                    case 0:
                      return 1;
                    case 2:
                    case 3:
                      return 2;
                    case 1:
                      return 0;
                    default:
                      return L();
                  }
                };
                return r(e) - r(t);
              })(e.type, t.type) || this.ya(e.doc, t.doc)
          ),
            this.Ca(r),
            (n = null != n && n);
          let a = t && !n ? this.Fa() : [],
            o = 0 === this.pa.size && this.current && !n ? 1 : 0,
            l = o !== this.ga;
          return ((this.ga = o), 0 !== s.length || l)
            ? {
                snapshot: new ia(
                  this.query,
                  e.wa,
                  i,
                  s,
                  e.mutatedKeys,
                  0 === o,
                  l,
                  !1,
                  !!r && r.resumeToken.approximateByteSize() > 0
                ),
                Ma: a,
              }
            : { Ma: a };
        }
        sa(e) {
          return this.current && "Offline" === e
            ? ((this.current = !1),
              this.applyChanges(
                {
                  wa: this.wa,
                  Da: new is(),
                  mutatedKeys: this.mutatedKeys,
                  ls: !1,
                },
                !1
              ))
            : { Ma: [] };
        }
        xa(e) {
          return (
            !this.fa.has(e) &&
            !!this.wa.has(e) &&
            !this.wa.get(e).hasLocalMutations
          );
        }
        Ca(e) {
          e &&
            (e.addedDocuments.forEach((e) => (this.fa = this.fa.add(e))),
            e.modifiedDocuments.forEach((e) => {}),
            e.removedDocuments.forEach((e) => (this.fa = this.fa.delete(e))),
            (this.current = e.current));
        }
        Fa() {
          if (!this.current) return [];
          let e = this.pa;
          (this.pa = t$()),
            this.wa.forEach((e) => {
              this.xa(e.key) && (this.pa = this.pa.add(e.key));
            });
          let t = [];
          return (
            e.forEach((e) => {
              this.pa.has(e) || t.push(new iv(e));
            }),
            this.pa.forEach((r) => {
              e.has(r) || t.push(new iy(r));
            }),
            t
          );
        }
        Oa(e) {
          (this.fa = e.gs), (this.pa = t$());
          let t = this.ba(e.documents);
          return this.applyChanges(t, !0);
        }
        Na() {
          return ia.fromInitialDocuments(
            this.query,
            this.wa,
            this.mutatedKeys,
            0 === this.ga,
            this.hasCachedResults
          );
        }
      }
      let iw = "SyncEngine";
      class iS {
        constructor(e, t, r) {
          (this.query = e), (this.targetId = t), (this.view = r);
        }
      }
      class iE {
        constructor(e) {
          (this.key = e), (this.Ba = !1);
        }
      }
      class ix {
        constructor(e, t, r, n, i, s) {
          (this.localStore = e),
            (this.remoteStore = t),
            (this.eventManager = r),
            (this.sharedClientState = n),
            (this.currentUser = i),
            (this.maxConcurrentLimboResolutions = s),
            (this.La = {}),
            (this.ka = new tI((e) => tC(e), tT)),
            (this.qa = new Map()),
            (this.Qa = new Set()),
            (this.$a = new ey(ea.comparator)),
            (this.Ua = new Map()),
            (this.Ka = new r6()),
            (this.Wa = {}),
            (this.Ga = new Map()),
            (this.za = rZ.Kn()),
            (this.onlineState = "Unknown"),
            (this.ja = void 0);
        }
        get isPrimaryClient() {
          return !0 === this.ja;
        }
      }
      async function iT(e, t, r = !0) {
        let n;
        let i = iH(e),
          s = i.ka.get(t);
        return (
          s
            ? (i.sharedClientState.addLocalQueryTarget(s.targetId),
              (n = s.view.Na()))
            : (n = await i_(i, t, r, !0)),
          n
        );
      }
      async function iC(e, t) {
        let r = iH(e);
        await i_(r, t, !0, !1);
      }
      async function i_(e, t, r, n) {
        var i, s;
        let a;
        let o = await ((i = e.localStore),
          (s = tE(t)),
          i.persistence
            .runTransaction("Allocate target", "readwrite", (e) => {
              let t;
              return i.Hr.getTargetData(e, s).next((r) =>
                r
                  ? ((t = r), ec.resolve(t))
                  : i.Hr.allocateTargetId(e).next(
                      (r) => (
                        (t = new rB(
                          s,
                          r,
                          "TargetPurposeListen",
                          e.currentSequenceNumber
                        )),
                        i.Hr.addTargetData(e, t).next(() => t)
                      )
                    )
              );
            })
            .then((e) => {
              let t = i.Ts.get(e.targetId);
              return (
                (null === t ||
                  e.snapshotVersion.compareTo(t.snapshotVersion) > 0) &&
                  ((i.Ts = i.Ts.insert(e.targetId, e)),
                  i.Is.set(s, e.targetId)),
                e
              );
            })),
          l = o.targetId,
          u = e.sharedClientState.addLocalQueryTarget(l, r);
        return (
          n && (a = await ik(e, t, l, "current" === u, o.resumeToken)),
          e.isPrimaryClient && r && nU(e.remoteStore, o),
          a
        );
      }
      async function ik(e, t, r, n, i) {
        e.Ha = (t, r, n) =>
          (async function (e, t, r, n) {
            let i = t.view.ba(r);
            i.ls &&
              (i = await nd(e.localStore, t.query, !1).then(
                ({ documents: e }) => t.view.ba(e, i)
              ));
            let s = n && n.targetChanges.get(t.targetId),
              a = n && null != n.targetMismatches.get(t.targetId),
              o = t.view.applyChanges(i, e.isPrimaryClient, s, a);
            return iB(e, t.targetId, o.Ma), o.snapshot;
          })(e, t, r, n);
        let s = await nd(e.localStore, t, !0),
          a = new ib(t, s.gs),
          o = a.ba(s.documents),
          l = rf.createSynthesizedTargetChangeForCurrentChange(
            r,
            n && "Offline" !== e.onlineState,
            i
          ),
          u = a.applyChanges(o, e.isPrimaryClient, l);
        iB(e, r, u.Ma);
        let c = new iS(t, r, a);
        return (
          e.ka.set(t, c),
          e.qa.has(r) ? e.qa.get(r).push(t) : e.qa.set(r, [t]),
          u.snapshot
        );
      }
      async function iA(e, t, r) {
        let n = e.ka.get(t),
          i = e.qa.get(n.targetId);
        if (i.length > 1)
          return (
            e.qa.set(
              n.targetId,
              i.filter((e) => !tT(e, t))
            ),
            void e.ka.delete(t)
          );
        e.isPrimaryClient
          ? (e.sharedClientState.removeLocalQueryTarget(n.targetId),
            e.sharedClientState.isActiveQueryTarget(n.targetId) ||
              (await nf(e.localStore, n.targetId, !1)
                .then(() => {
                  e.sharedClientState.clearQueryState(n.targetId),
                    r && nj(e.remoteStore, n.targetId),
                    iV(e, n.targetId);
                })
                .catch(eu)))
          : (iV(e, n.targetId), await nf(e.localStore, n.targetId, !0));
      }
      async function iI(e, t) {
        let r = e.ka.get(t),
          n = e.qa.get(r.targetId);
        e.isPrimaryClient &&
          1 === n.length &&
          (e.sharedClientState.removeLocalQueryTarget(r.targetId),
          nj(e.remoteStore, r.targetId));
      }
      async function iD(e, t, r) {
        var n, i;
        let s =
          (((n = e).remoteStore.remoteSyncer.applySuccessfulWrite = iO.bind(
            null,
            n
          )),
          (n.remoteStore.remoteSyncer.rejectFailedWrite = iL.bind(null, n)),
          n);
        try {
          let e;
          let n = await (function (e, t) {
            let r, n;
            let i = J.now(),
              s = t.reduce((e, t) => e.add(t.key), t$());
            return e.persistence
              .runTransaction("Locally write mutations", "readwrite", (a) => {
                let o = tD,
                  l = t$();
                return e.ds
                  .getEntries(a, s)
                  .next((e) => {
                    (o = e).forEach((e, t) => {
                      t.isValidDocument() || (l = l.add(e));
                    });
                  })
                  .next(() => e.localDocuments.getOverlayedDocuments(a, o))
                  .next((n) => {
                    r = n;
                    let s = [];
                    for (let e of t) {
                      let t = (function (e, t) {
                        let r = null;
                        for (let n of e.fieldTransforms) {
                          let e = t.data.field(n.field),
                            i = tj(n.transform, e || null);
                          null != i &&
                            (null === r && (r = e6.empty()), r.set(n.field, i));
                        }
                        return r || null;
                      })(e, r.get(e.key).overlayedDocument);
                      null != t &&
                        s.push(
                          new t6(
                            e.key,
                            t,
                            (function e(t) {
                              let r = [];
                              return (
                                eg(t.fields, (t, n) => {
                                  let i = new es([t]);
                                  if (e1(n)) {
                                    let t = e(n.mapValue).fields;
                                    if (0 === t.length) r.push(i);
                                    else for (let e of t) r.push(i.child(e));
                                  } else r.push(i);
                                }),
                                new eE(r)
                              );
                            })(t.value.mapValue),
                            tY.exists(!0)
                          )
                        );
                    }
                    return e.mutationQueue.addMutationBatch(a, i, s, t);
                  })
                  .next((t) => {
                    n = t;
                    let i = t.applyToLocalDocumentSet(r, l);
                    return e.documentOverlayCache.saveOverlays(a, t.batchId, i);
                  });
              })
              .then(() => ({ batchId: n.batchId, changes: tP(r) }));
          })(s.localStore, t);
          s.sharedClientState.addPendingMutation(n.batchId),
            (i = n.batchId),
            (e = s.Wa[s.currentUser.toKey()]) || (e = new ey(W)),
            (e = e.insert(i, r)),
            (s.Wa[s.currentUser.toKey()] = e),
            await ij(s, n.changes),
            await n0(s.remoteStore);
        } catch (t) {
          let e = ir(t, "Failed to persist write");
          r.reject(e);
        }
      }
      async function iN(e, t) {
        try {
          let r = await (function (e, t) {
            let r = t.snapshotVersion,
              n = e.Ts;
            return e.persistence
              .runTransaction(
                "Apply remote event",
                "readwrite-primary",
                (i) => {
                  var s, a, o;
                  let l,
                    u,
                    c = e.ds.newChangeBuffer({ trackRemovals: !0 });
                  n = e.Ts;
                  let h = [];
                  t.targetChanges.forEach((s, a) => {
                    var o;
                    let l = n.get(a);
                    if (!l) return;
                    h.push(
                      e.Hr.removeMatchingKeys(i, s.removedDocuments, a).next(
                        () => e.Hr.addMatchingKeys(i, s.addedDocuments, a)
                      )
                    );
                    let u = l.withSequenceNumber(i.currentSequenceNumber);
                    null !== t.targetMismatches.get(a)
                      ? (u = u
                          .withResumeToken(eT.EMPTY_BYTE_STRING, ee.min())
                          .withLastLimboFreeSnapshotVersion(ee.min()))
                      : s.resumeToken.approximateByteSize() > 0 &&
                        (u = u.withResumeToken(s.resumeToken, r)),
                      (n = n.insert(a, u)),
                      (o = u),
                      (0 === l.resumeToken.approximateByteSize() ||
                        o.snapshotVersion.toMicroseconds() -
                          l.snapshotVersion.toMicroseconds() >=
                          3e8 ||
                        s.addedDocuments.size +
                          s.modifiedDocuments.size +
                          s.removedDocuments.size >
                          0) &&
                        h.push(e.Hr.updateTargetData(i, u));
                  });
                  let f = tD,
                    d = t$();
                  if (
                    (t.documentUpdates.forEach((r) => {
                      t.resolvedLimboDocuments.has(r) &&
                        h.push(
                          e.persistence.referenceDelegate.updateLimboDocument(
                            i,
                            r
                          )
                        );
                    }),
                    h.push(
                      ((s = i),
                      (a = c),
                      (o = t.documentUpdates),
                      (l = t$()),
                      (u = t$()),
                      o.forEach((e) => (l = l.add(e))),
                      a.getEntries(s, l).next((e) => {
                        let t = tD;
                        return (
                          o.forEach((r, n) => {
                            let i = e.get(r);
                            n.isFoundDocument() !== i.isFoundDocument() &&
                              (u = u.add(r)),
                              n.isNoDocument() && n.version.isEqual(ee.min())
                                ? (a.removeEntry(r, n.readTime),
                                  (t = t.insert(r, n)))
                                : !i.isValidDocument() ||
                                  n.version.compareTo(i.version) > 0 ||
                                  (0 === n.version.compareTo(i.version) &&
                                    i.hasPendingWrites)
                                ? (a.addEntry(n), (t = t.insert(r, n)))
                                : N(
                                    nl,
                                    "Ignoring outdated watch update for ",
                                    r,
                                    ". Current version:",
                                    i.version,
                                    " Watch version:",
                                    n.version
                                  );
                          }),
                          { Vs: t, fs: u }
                        );
                      })).next((e) => {
                        (f = e.Vs), (d = e.fs);
                      })
                    ),
                    !r.isEqual(ee.min()))
                  ) {
                    let t = e.Hr.getLastRemoteSnapshotVersion(i).next((t) =>
                      e.Hr.setTargetsMetadata(i, i.currentSequenceNumber, r)
                    );
                    h.push(t);
                  }
                  return ec
                    .waitFor(h)
                    .next(() => c.apply(i))
                    .next(() =>
                      e.localDocuments.getLocalViewOfDocuments(i, f, d)
                    )
                    .next(() => f);
                }
              )
              .then((t) => ((e.Ts = n), t));
          })(e.localStore, t);
          t.targetChanges.forEach((t, r) => {
            let n = e.Ua.get(r);
            n &&
              (t.addedDocuments.size +
                t.modifiedDocuments.size +
                t.removedDocuments.size <=
                1 || L(),
              t.addedDocuments.size > 0
                ? (n.Ba = !0)
                : t.modifiedDocuments.size > 0
                ? n.Ba || L()
                : t.removedDocuments.size > 0 && (n.Ba || L(), (n.Ba = !1)));
          }),
            await ij(e, r, t);
        } catch (e) {
          await eu(e);
        }
      }
      function iR(e, t, r) {
        var n;
        if ((e.isPrimaryClient && 0 === r) || (!e.isPrimaryClient && 1 === r)) {
          let r;
          let i = [];
          e.ka.forEach((e, r) => {
            let n = r.view.sa(t);
            n.snapshot && i.push(n.snapshot);
          }),
            ((n = e.eventManager).onlineState = t),
            (r = !1),
            n.queries.forEach((e, n) => {
              for (let e of n.ta) e.sa(t) && (r = !0);
            }),
            r && ig(n),
            i.length && e.La.p_(i),
            (e.onlineState = t),
            e.isPrimaryClient && e.sharedClientState.setOnlineState(t);
        }
      }
      async function iP(e, t, r) {
        e.sharedClientState.updateQueryState(t, "rejected", r);
        let n = e.Ua.get(t),
          i = n && n.key;
        if (i) {
          let r = new ey(ea.comparator);
          r = r.insert(i, e4.newNoDocument(i, ee.min()));
          let n = t$().add(i),
            s = new rh(ee.min(), new Map(), new ey(W), r, n);
          await iN(e, s), (e.$a = e.$a.remove(i)), e.Ua.delete(t), iU(e);
        } else
          await nf(e.localStore, t, !1)
            .then(() => iV(e, t, r))
            .catch(eu);
      }
      async function iO(e, t) {
        var r;
        let n = t.batch.batchId;
        try {
          let i = await (r = e.localStore).persistence.runTransaction(
            "Acknowledge batch",
            "readwrite-primary",
            (e) => {
              let n = t.batch.keys(),
                i = r.ds.newChangeBuffer({ trackRemovals: !0 });
              return (function (e, t, r, n) {
                let i = r.batch,
                  s = i.keys(),
                  a = ec.resolve();
                return (
                  s.forEach((e) => {
                    a = a
                      .next(() => n.getEntry(t, e))
                      .next((t) => {
                        let s = r.docVersions.get(e);
                        null !== s || L(),
                          0 > t.version.compareTo(s) &&
                            (i.applyToRemoteDocument(t, r),
                            t.isValidDocument() &&
                              (t.setReadTime(r.commitVersion), n.addEntry(t)));
                      });
                  }),
                  a.next(() => e.mutationQueue.removeMutationBatch(t, i))
                );
              })(r, e, t, i)
                .next(() => i.apply(e))
                .next(() => r.mutationQueue.performConsistencyCheck(e))
                .next(() =>
                  r.documentOverlayCache.removeOverlaysForBatchId(
                    e,
                    n,
                    t.batch.batchId
                  )
                )
                .next(() =>
                  r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                    e,
                    (function (e) {
                      let t = t$();
                      for (let r = 0; r < e.mutationResults.length; ++r)
                        e.mutationResults[r].transformResults.length > 0 &&
                          (t = t.add(e.batch.mutations[r].key));
                      return t;
                    })(t)
                  )
                )
                .next(() => r.localDocuments.getDocuments(e, n));
            }
          );
          i$(e, n, null),
            iM(e, n),
            e.sharedClientState.updateMutationState(n, "acknowledged"),
            await ij(e, i);
        } catch (e) {
          await eu(e);
        }
      }
      async function iL(e, t, r) {
        var n;
        try {
          let i = await (n = e.localStore).persistence.runTransaction(
            "Reject batch",
            "readwrite-primary",
            (e) => {
              let r;
              return n.mutationQueue
                .lookupMutationBatch(e, t)
                .next(
                  (t) => (
                    null !== t || L(),
                    (r = t.keys()),
                    n.mutationQueue.removeMutationBatch(e, t)
                  )
                )
                .next(() => n.mutationQueue.performConsistencyCheck(e))
                .next(() =>
                  n.documentOverlayCache.removeOverlaysForBatchId(e, r, t)
                )
                .next(() =>
                  n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(
                    e,
                    r
                  )
                )
                .next(() => n.localDocuments.getDocuments(e, r));
            }
          );
          i$(e, t, r),
            iM(e, t),
            e.sharedClientState.updateMutationState(t, "rejected", r),
            await ij(e, i);
        } catch (e) {
          await eu(e);
        }
      }
      function iM(e, t) {
        (e.Ga.get(t) || []).forEach((e) => {
          e.resolve();
        }),
          e.Ga.delete(t);
      }
      function i$(e, t, r) {
        let n = e.Wa[e.currentUser.toKey()];
        if (n) {
          let i = n.get(t);
          i && (r ? i.reject(r) : i.resolve(), (n = n.remove(t))),
            (e.Wa[e.currentUser.toKey()] = n);
        }
      }
      function iV(e, t, r = null) {
        for (let n of (e.sharedClientState.removeLocalQueryTarget(t),
        e.qa.get(t)))
          e.ka.delete(n), r && e.La.Ja(n, r);
        e.qa.delete(t),
          e.isPrimaryClient &&
            e.Ka.br(t).forEach((t) => {
              e.Ka.containsKey(t) || iF(e, t);
            });
      }
      function iF(e, t) {
        e.Qa.delete(t.path.canonicalString());
        let r = e.$a.get(t);
        null !== r &&
          (nj(e.remoteStore, r),
          (e.$a = e.$a.remove(t)),
          e.Ua.delete(r),
          iU(e));
      }
      function iB(e, t, r) {
        for (let n of r)
          n instanceof iy
            ? (e.Ka.addReference(n.key, t),
              (function (e, t) {
                let r = t.key,
                  n = r.path.canonicalString();
                e.$a.get(r) ||
                  e.Qa.has(n) ||
                  (N(iw, "New document in limbo: " + r), e.Qa.add(n), iU(e));
              })(e, n))
            : n instanceof iv
            ? (N(iw, "Document no longer in limbo: " + n.key),
              e.Ka.removeReference(n.key, t),
              e.Ka.containsKey(n.key) || iF(e, n.key))
            : L();
      }
      function iU(e) {
        for (; e.Qa.size > 0 && e.$a.size < e.maxConcurrentLimboResolutions; ) {
          let t = e.Qa.values().next().value;
          e.Qa.delete(t);
          let r = new ea(en.fromString(t)),
            n = e.za.next();
          e.Ua.set(n, new iE(r)),
            (e.$a = e.$a.insert(r, n)),
            nU(
              e.remoteStore,
              new rB(
                tE(new tb(r.path)),
                n,
                "TargetPurposeLimboResolution",
                ef.ae
              )
            );
        }
      }
      async function ij(e, t, r) {
        let n = [],
          i = [],
          s = [];
        e.ka.isEmpty() ||
          (e.ka.forEach((a, o) => {
            s.push(
              e.Ha(o, t, r).then((t) => {
                var s;
                if ((t || r) && e.isPrimaryClient) {
                  let n = t
                    ? !t.fromCache
                    : null ===
                        (s =
                          null == r
                            ? void 0
                            : r.targetChanges.get(o.targetId)) || void 0 === s
                    ? void 0
                    : s.current;
                  e.sharedClientState.updateQueryState(
                    o.targetId,
                    n ? "current" : "not-current"
                  );
                }
                if (t) {
                  n.push(t);
                  let e = ns.Yi(o.targetId, t);
                  i.push(e);
                }
              })
            );
          }),
          await Promise.all(s),
          e.La.p_(n),
          await (async function (e, t) {
            try {
              await e.persistence.runTransaction(
                "notifyLocalViewChanges",
                "readwrite",
                (r) =>
                  ec.forEach(t, (t) =>
                    ec
                      .forEach(t.Hi, (n) =>
                        e.persistence.referenceDelegate.addReference(
                          r,
                          t.targetId,
                          n
                        )
                      )
                      .next(() =>
                        ec.forEach(t.Ji, (n) =>
                          e.persistence.referenceDelegate.removeReference(
                            r,
                            t.targetId,
                            n
                          )
                        )
                      )
                  )
              );
            } catch (e) {
              if (!eh(e)) throw e;
              N(nl, "Failed to update sequence numbers: " + e);
            }
            for (let r of t) {
              let t = r.targetId;
              if (!r.fromCache) {
                let r = e.Ts.get(t),
                  n = r.snapshotVersion,
                  i = r.withLastLimboFreeSnapshotVersion(n);
                e.Ts = e.Ts.insert(t, i);
              }
            }
          })(e.localStore, i));
      }
      async function iz(e, t) {
        var r;
        if (!e.currentUser.isEqual(t)) {
          N(iw, "User change. New user:", t.toKey());
          let n = await nc(e.localStore, t);
          (e.currentUser = t),
            (r =
              "'waitForPendingWrites' promise is rejected due to a user change."),
            e.Ga.forEach((e) => {
              e.forEach((e) => {
                e.reject(new $(M.CANCELLED, r));
              });
            }),
            e.Ga.clear(),
            e.sharedClientState.handleUserChange(
              t,
              n.removedBatchIds,
              n.addedBatchIds
            ),
            await ij(e, n.Rs);
        }
      }
      function iq(e, t) {
        let r = e.Ua.get(t);
        if (r && r.Ba) return t$().add(r.key);
        {
          let r = t$(),
            n = e.qa.get(t);
          if (!n) return r;
          for (let t of n) {
            let n = e.ka.get(t);
            r = r.unionWith(n.view.Sa);
          }
          return r;
        }
      }
      function iH(e) {
        return (
          (e.remoteStore.remoteSyncer.applyRemoteEvent = iN.bind(null, e)),
          (e.remoteStore.remoteSyncer.getRemoteKeysForTarget = iq.bind(
            null,
            e
          )),
          (e.remoteStore.remoteSyncer.rejectListen = iP.bind(null, e)),
          (e.La.p_ = id.bind(null, e.eventManager)),
          (e.La.Ja = ip.bind(null, e.eventManager)),
          e
        );
      }
      class iK {
        constructor() {
          (this.kind = "memory"), (this.synchronizeTabs = !1);
        }
        async initialize(e) {
          (this.serializer = nA(e.databaseInfo.databaseId)),
            (this.sharedClientState = this.Za(e)),
            (this.persistence = this.Xa(e)),
            await this.persistence.start(),
            (this.localStore = this.eu(e)),
            (this.gcScheduler = this.tu(e, this.localStore)),
            (this.indexBackfillerScheduler = this.nu(e, this.localStore));
        }
        tu(e, t) {
          return null;
        }
        nu(e, t) {
          return null;
        }
        eu(e) {
          var t, r;
          return (
            (t = this.persistence),
            (r = new no()),
            new nu(t, r, e.initialUser, this.serializer)
          );
        }
        Xa(e) {
          return new nt(nn.ri, this.serializer);
        }
        Za(e) {
          return new ng();
        }
        async terminate() {
          var e, t;
          null === (e = this.gcScheduler) || void 0 === e || e.stop(),
            null === (t = this.indexBackfillerScheduler) ||
              void 0 === t ||
              t.stop(),
            this.sharedClientState.shutdown(),
            await this.persistence.shutdown();
        }
      }
      iK.provider = { build: () => new iK() };
      class iZ extends iK {
        constructor(e) {
          super(), (this.cacheSizeBytes = e);
        }
        tu(e, t) {
          return (
            this.persistence.referenceDelegate instanceof ni || L(),
            new rX(
              this.persistence.referenceDelegate.garbageCollector,
              e.asyncQueue,
              t
            )
          );
        }
        Xa(e) {
          let t =
            void 0 !== this.cacheSizeBytes
              ? rK.withCacheSize(this.cacheSizeBytes)
              : rK.DEFAULT;
          return new nt((e) => ni.ri(e, t), this.serializer);
        }
      }
      class iG {
        async initialize(e, t) {
          this.localStore ||
            ((this.localStore = e.localStore),
            (this.sharedClientState = e.sharedClientState),
            (this.datastore = this.createDatastore(t)),
            (this.remoteStore = this.createRemoteStore(t)),
            (this.eventManager = this.createEventManager(t)),
            (this.syncEngine = this.createSyncEngine(t, !e.synchronizeTabs)),
            (this.sharedClientState.onlineStateHandler = (e) =>
              iR(this.syncEngine, e, 1)),
            (this.remoteStore.remoteSyncer.handleCredentialChange = iz.bind(
              null,
              this.syncEngine
            )),
            await n7(this.remoteStore, this.syncEngine.isPrimaryClient));
        }
        createEventManager(e) {
          return new il();
        }
        createDatastore(e) {
          var t;
          let r = nA(e.databaseInfo.databaseId),
            n = new n_(e.databaseInfo);
          return (
            (t = e.authCredentials), new nL(t, e.appCheckCredentials, n, r)
          );
        }
        createRemoteStore(e) {
          var t, r;
          return (
            (t = this.localStore),
            (r = this.datastore),
            new nV(
              t,
              r,
              e.asyncQueue,
              (e) => iR(this.syncEngine, e, 0),
              nv.D() ? new nv() : new nm()
            )
          );
        }
        createSyncEngine(e, t) {
          return (function (e, t, r, n, i, s, a) {
            let o = new ix(e, t, r, n, i, s);
            return a && (o.ja = !0), o;
          })(
            this.localStore,
            this.remoteStore,
            this.eventManager,
            this.sharedClientState,
            e.initialUser,
            e.maxConcurrentLimboResolutions,
            t
          );
        }
        async terminate() {
          var e, t;
          await (async function (e) {
            N(n$, "RemoteStore shutting down."),
              e.W_.add(5),
              await nB(e),
              e.z_.shutdown(),
              e.j_.set("Unknown");
          })(this.remoteStore),
            null === (e = this.datastore) || void 0 === e || e.terminate(),
            null === (t = this.eventManager) || void 0 === t || t.terminate();
        }
      }
      iG.provider = { build: () => new iG() };
      class iW {
        constructor(e) {
          (this.observer = e), (this.muted = !1);
        }
        next(e) {
          this.muted || (this.observer.next && this.iu(this.observer.next, e));
        }
        error(e) {
          this.muted ||
            (this.observer.error
              ? this.iu(this.observer.error, e)
              : R("Uncaught Error in snapshot listener:", e.toString()));
        }
        su() {
          this.muted = !0;
        }
        iu(e, t) {
          setTimeout(() => {
            this.muted || e(t);
          }, 0);
        }
      }
      let iQ = "FirestoreClient";
      class iX {
        constructor(e, t, r, n, i) {
          (this.authCredentials = e),
            (this.appCheckCredentials = t),
            (this.asyncQueue = r),
            (this.databaseInfo = n),
            (this.user = k.UNAUTHENTICATED),
            (this.clientId = G.newId()),
            (this.authCredentialListener = () => Promise.resolve()),
            (this.appCheckCredentialListener = () => Promise.resolve()),
            (this._uninitializedComponentsProvider = i),
            this.authCredentials.start(r, async (e) => {
              N(iQ, "Received user=", e.uid),
                await this.authCredentialListener(e),
                (this.user = e);
            }),
            this.appCheckCredentials.start(
              r,
              (e) => (
                N(iQ, "Received new app check token=", e),
                this.appCheckCredentialListener(e, this.user)
              )
            );
        }
        get configuration() {
          return {
            asyncQueue: this.asyncQueue,
            databaseInfo: this.databaseInfo,
            clientId: this.clientId,
            authCredentials: this.authCredentials,
            appCheckCredentials: this.appCheckCredentials,
            initialUser: this.user,
            maxConcurrentLimboResolutions: 100,
          };
        }
        setCredentialChangeListener(e) {
          this.authCredentialListener = e;
        }
        setAppCheckTokenChangeListener(e) {
          this.appCheckCredentialListener = e;
        }
        terminate() {
          this.asyncQueue.enterRestrictedMode();
          let e = new V();
          return (
            this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async () => {
              try {
                this._onlineComponents &&
                  (await this._onlineComponents.terminate()),
                  this._offlineComponents &&
                    (await this._offlineComponents.terminate()),
                  this.authCredentials.shutdown(),
                  this.appCheckCredentials.shutdown(),
                  e.resolve();
              } catch (r) {
                let t = ir(r, "Failed to shutdown persistence");
                e.reject(t);
              }
            }),
            e.promise
          );
        }
      }
      async function iY(e, t) {
        e.asyncQueue.verifyOperationInProgress(),
          N(iQ, "Initializing OfflineComponentProvider");
        let r = e.configuration;
        await t.initialize(r);
        let n = r.initialUser;
        e.setCredentialChangeListener(async (e) => {
          n.isEqual(e) || (await nc(t.localStore, e), (n = e));
        }),
          t.persistence.setDatabaseDeletedListener(() => e.terminate()),
          (e._offlineComponents = t);
      }
      async function iJ(e, t) {
        e.asyncQueue.verifyOperationInProgress();
        let r = await i0(e);
        N(iQ, "Initializing OnlineComponentProvider"),
          await t.initialize(r, e.configuration),
          e.setCredentialChangeListener((e) => n8(t.remoteStore, e)),
          e.setAppCheckTokenChangeListener((e, r) => n8(t.remoteStore, r)),
          (e._onlineComponents = t);
      }
      async function i0(e) {
        if (!e._offlineComponents) {
          if (e._uninitializedComponentsProvider) {
            N(iQ, "Using user provided OfflineComponentProvider");
            try {
              await iY(e, e._uninitializedComponentsProvider._offline);
            } catch (t) {
              if (
                !("FirebaseError" === t.name
                  ? t.code === M.FAILED_PRECONDITION ||
                    t.code === M.UNIMPLEMENTED
                  : !(
                      "undefined" != typeof DOMException &&
                      t instanceof DOMException
                    ) ||
                    22 === t.code ||
                    20 === t.code ||
                    11 === t.code)
              )
                throw t;
              P(
                "Error using user provided cache. Falling back to memory cache: " +
                  t
              ),
                await iY(e, new iK());
            }
          } else
            N(iQ, "Using default OfflineComponentProvider"),
              await iY(e, new iZ(void 0));
        }
        return e._offlineComponents;
      }
      async function i1(e) {
        return (
          e._onlineComponents ||
            (e._uninitializedComponentsProvider
              ? (N(iQ, "Using user provided OnlineComponentProvider"),
                await iJ(e, e._uninitializedComponentsProvider._online))
              : (N(iQ, "Using default OnlineComponentProvider"),
                await iJ(e, new iG()))),
          e._onlineComponents
        );
      }
      async function i2(e) {
        let t = await i1(e),
          r = t.eventManager;
        return (
          (r.onListen = iT.bind(null, t.syncEngine)),
          (r.onUnlisten = iA.bind(null, t.syncEngine)),
          (r.onFirstRemoteStoreListen = iC.bind(null, t.syncEngine)),
          (r.onLastRemoteStoreUnlisten = iI.bind(null, t.syncEngine)),
          r
        );
      }
      function i5(e) {
        let t = {};
        return (
          void 0 !== e.timeoutSeconds && (t.timeoutSeconds = e.timeoutSeconds),
          t
        );
      }
      let i3 = new Map();
      function i6(e) {
        if (!ea.isDocumentKey(e))
          throw new $(
            M.INVALID_ARGUMENT,
            `Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`
          );
      }
      function i4(e) {
        if (void 0 === e) return "undefined";
        if (null === e) return "null";
        if ("string" == typeof e)
          return (
            e.length > 20 && (e = `${e.substring(0, 20)}...`), JSON.stringify(e)
          );
        if ("number" == typeof e || "boolean" == typeof e) return "" + e;
        if ("object" == typeof e) {
          if (e instanceof Array) return "an array";
          {
            var t;
            let r = (t = e).constructor ? t.constructor.name : null;
            return r ? `a custom ${r} object` : "an object";
          }
        }
        return "function" == typeof e ? "a function" : L();
      }
      function i8(e, t) {
        if (("_delegate" in e && (e = e._delegate), !(e instanceof t))) {
          if (t.name === e.constructor.name)
            throw new $(
              M.INVALID_ARGUMENT,
              "Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?"
            );
          {
            let r = i4(e);
            throw new $(
              M.INVALID_ARGUMENT,
              `Expected type '${t.name}', but it was: ${r}`
            );
          }
        }
        return e;
      }
      let i7 = "firestore.googleapis.com";
      class i9 {
        constructor(e) {
          var t, r;
          if (void 0 === e.host) {
            if (void 0 !== e.ssl)
              throw new $(
                M.INVALID_ARGUMENT,
                "Can't provide ssl option if host option is not set"
              );
            (this.host = i7), (this.ssl = !0);
          } else
            (this.host = e.host),
              (this.ssl = null === (t = e.ssl) || void 0 === t || t);
          if (
            ((this.credentials = e.credentials),
            (this.ignoreUndefinedProperties = !!e.ignoreUndefinedProperties),
            (this.localCache = e.localCache),
            void 0 === e.cacheSizeBytes)
          )
            this.cacheSizeBytes = 0x2800000;
          else {
            if (-1 !== e.cacheSizeBytes && e.cacheSizeBytes < 1048576)
              throw new $(
                M.INVALID_ARGUMENT,
                "cacheSizeBytes must be at least 1048576"
              );
            this.cacheSizeBytes = e.cacheSizeBytes;
          }
          (function (e, t, r, n) {
            if (!0 === t && !0 === n)
              throw new $(
                M.INVALID_ARGUMENT,
                `${e} and ${r} cannot be used together.`
              );
          })(
            "experimentalForceLongPolling",
            e.experimentalForceLongPolling,
            "experimentalAutoDetectLongPolling",
            e.experimentalAutoDetectLongPolling
          ),
            (this.experimentalForceLongPolling =
              !!e.experimentalForceLongPolling),
            this.experimentalForceLongPolling
              ? (this.experimentalAutoDetectLongPolling = !1)
              : void 0 === e.experimentalAutoDetectLongPolling
              ? (this.experimentalAutoDetectLongPolling = !0)
              : (this.experimentalAutoDetectLongPolling =
                  !!e.experimentalAutoDetectLongPolling),
            (this.experimentalLongPollingOptions = i5(
              null !== (r = e.experimentalLongPollingOptions) && void 0 !== r
                ? r
                : {}
            )),
            (function (e) {
              if (void 0 !== e.timeoutSeconds) {
                if (isNaN(e.timeoutSeconds))
                  throw new $(
                    M.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`
                  );
                if (e.timeoutSeconds < 5)
                  throw new $(
                    M.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`
                  );
                if (e.timeoutSeconds > 30)
                  throw new $(
                    M.INVALID_ARGUMENT,
                    `invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`
                  );
              }
            })(this.experimentalLongPollingOptions),
            (this.useFetchStreams = !!e.useFetchStreams);
        }
        isEqual(e) {
          var t, r;
          return (
            this.host === e.host &&
            this.ssl === e.ssl &&
            this.credentials === e.credentials &&
            this.cacheSizeBytes === e.cacheSizeBytes &&
            this.experimentalForceLongPolling ===
              e.experimentalForceLongPolling &&
            this.experimentalAutoDetectLongPolling ===
              e.experimentalAutoDetectLongPolling &&
            ((t = this.experimentalLongPollingOptions),
            (r = e.experimentalLongPollingOptions),
            t.timeoutSeconds === r.timeoutSeconds) &&
            this.ignoreUndefinedProperties === e.ignoreUndefinedProperties &&
            this.useFetchStreams === e.useFetchStreams
          );
        }
      }
      class se {
        constructor(e, t, r, n) {
          (this._authCredentials = e),
            (this._appCheckCredentials = t),
            (this._databaseId = r),
            (this._app = n),
            (this.type = "firestore-lite"),
            (this._persistenceKey = "(lite)"),
            (this._settings = new i9({})),
            (this._settingsFrozen = !1),
            (this._emulatorOptions = {}),
            (this._terminateTask = "notTerminated");
        }
        get app() {
          if (!this._app)
            throw new $(
              M.FAILED_PRECONDITION,
              "Firestore was not initialized using the Firebase SDK. 'app' is not available"
            );
          return this._app;
        }
        get _initialized() {
          return this._settingsFrozen;
        }
        get _terminated() {
          return "notTerminated" !== this._terminateTask;
        }
        _setSettings(e) {
          if (this._settingsFrozen)
            throw new $(
              M.FAILED_PRECONDITION,
              "Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object."
            );
          (this._settings = new i9(e)),
            (this._emulatorOptions = e.emulatorOptions || {}),
            void 0 !== e.credentials &&
              (this._authCredentials = (function (e) {
                if (!e) return new B();
                switch (e.type) {
                  case "firstParty":
                    return new q(
                      e.sessionIndex || "0",
                      e.iamToken || null,
                      e.authTokenFactory || null
                    );
                  case "provider":
                    return e.client;
                  default:
                    throw new $(
                      M.INVALID_ARGUMENT,
                      "makeAuthCredentialsProvider failed due to invalid credential type"
                    );
                }
              })(e.credentials));
        }
        _getSettings() {
          return this._settings;
        }
        _getEmulatorOptions() {
          return this._emulatorOptions;
        }
        _freezeSettings() {
          return (this._settingsFrozen = !0), this._settings;
        }
        _delete() {
          return (
            "notTerminated" === this._terminateTask &&
              (this._terminateTask = this._terminate()),
            this._terminateTask
          );
        }
        async _restart() {
          "notTerminated" === this._terminateTask
            ? await this._terminate()
            : (this._terminateTask = "notTerminated");
        }
        toJSON() {
          return {
            app: this._app,
            databaseId: this._databaseId,
            settings: this._settings,
          };
        }
        _terminate() {
          return (
            (function (e) {
              let t = i3.get(e);
              t &&
                (N("ComponentProvider", "Removing Datastore"),
                i3.delete(e),
                t.terminate());
            })(this),
            Promise.resolve()
          );
        }
      }
      class st {
        constructor(e, t, r) {
          (this.converter = t),
            (this._query = r),
            (this.type = "query"),
            (this.firestore = e);
        }
        withConverter(e) {
          return new st(this.firestore, e, this._query);
        }
      }
      class sr {
        constructor(e, t, r) {
          (this.converter = t),
            (this._key = r),
            (this.type = "document"),
            (this.firestore = e);
        }
        get _path() {
          return this._key.path;
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get path() {
          return this._key.path.canonicalString();
        }
        get parent() {
          return new sn(
            this.firestore,
            this.converter,
            this._key.path.popLast()
          );
        }
        withConverter(e) {
          return new sr(this.firestore, e, this._key);
        }
      }
      class sn extends st {
        constructor(e, t, r) {
          super(e, t, new tb(r)), (this._path = r), (this.type = "collection");
        }
        get id() {
          return this._query.path.lastSegment();
        }
        get path() {
          return this._query.path.canonicalString();
        }
        get parent() {
          let e = this._path.popLast();
          return e.isEmpty() ? null : new sr(this.firestore, null, new ea(e));
        }
        withConverter(e) {
          return new sn(this.firestore, e, this._path);
        }
      }
      function si(e, t, ...r) {
        if (
          ((e = (0, w.m9)(e)),
          1 == arguments.length && (t = G.newId()),
          (function (e, t, r) {
            if (!r)
              throw new $(
                M.INVALID_ARGUMENT,
                `Function doc() cannot be called with an empty ${t}.`
              );
          })(0, "path", t),
          e instanceof se)
        ) {
          let n = en.fromString(t, ...r);
          return i6(n), new sr(e, null, new ea(n));
        }
        {
          if (!(e instanceof sr || e instanceof sn))
            throw new $(
              M.INVALID_ARGUMENT,
              "Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore"
            );
          let n = e._path.child(en.fromString(t, ...r));
          return (
            i6(n),
            new sr(e.firestore, e instanceof sn ? e.converter : null, new ea(n))
          );
        }
      }
      let ss = "AsyncQueue";
      class sa {
        constructor(e = Promise.resolve()) {
          (this.Vu = []),
            (this.mu = !1),
            (this.fu = []),
            (this.gu = null),
            (this.pu = !1),
            (this.yu = !1),
            (this.wu = []),
            (this.a_ = new nI(this, "async_queue_retry")),
            (this.Su = () => {
              let e = nk();
              e && N(ss, "Visibility state changed to " + e.visibilityState),
                this.a_.t_();
            }),
            (this.bu = e);
          let t = nk();
          t &&
            "function" == typeof t.addEventListener &&
            t.addEventListener("visibilitychange", this.Su);
        }
        get isShuttingDown() {
          return this.mu;
        }
        enqueueAndForget(e) {
          this.enqueue(e);
        }
        enqueueAndForgetEvenWhileRestricted(e) {
          this.Du(), this.vu(e);
        }
        enterRestrictedMode(e) {
          if (!this.mu) {
            (this.mu = !0), (this.yu = e || !1);
            let t = nk();
            t &&
              "function" == typeof t.removeEventListener &&
              t.removeEventListener("visibilitychange", this.Su);
          }
        }
        enqueue(e) {
          if ((this.Du(), this.mu)) return new Promise(() => {});
          let t = new V();
          return this.vu(() =>
            this.mu && this.yu
              ? Promise.resolve()
              : (e().then(t.resolve, t.reject), t.promise)
          ).then(() => t.promise);
        }
        enqueueRetryable(e) {
          this.enqueueAndForget(() => (this.Vu.push(e), this.Cu()));
        }
        async Cu() {
          if (0 !== this.Vu.length) {
            try {
              await this.Vu[0](), this.Vu.shift(), this.a_.reset();
            } catch (e) {
              if (!eh(e)) throw e;
              N(ss, "Operation failed with retryable error: " + e);
            }
            this.Vu.length > 0 && this.a_.Xo(() => this.Cu());
          }
        }
        vu(e) {
          let t = this.bu.then(
            () => (
              (this.pu = !0),
              e()
                .catch((e) => {
                  let t;
                  throw (
                    ((this.gu = e),
                    (this.pu = !1),
                    R(
                      "INTERNAL UNHANDLED ERROR: ",
                      ((t = e.message || ""),
                      e.stack &&
                        (t = e.stack.includes(e.message)
                          ? e.stack
                          : e.message + "\n" + e.stack),
                      t)
                    ),
                    e)
                  );
                })
                .then((e) => ((this.pu = !1), e))
            )
          );
          return (this.bu = t), t;
        }
        enqueueAfterDelay(e, t, r) {
          this.Du(), this.wu.indexOf(e) > -1 && (t = 0);
          let n = it.createAndSchedule(this, e, t, r, (e) => this.Fu(e));
          return this.fu.push(n), n;
        }
        Du() {
          this.gu && L();
        }
        verifyOperationInProgress() {}
        async Mu() {
          let e;
          do (e = this.bu), await e;
          while (e !== this.bu);
        }
        xu(e) {
          for (let t of this.fu) if (t.timerId === e) return !0;
          return !1;
        }
        Ou(e) {
          return this.Mu().then(() => {
            for (let t of (this.fu.sort(
              (e, t) => e.targetTimeMs - t.targetTimeMs
            ),
            this.fu))
              if ((t.skipDelay(), "all" !== e && t.timerId === e)) break;
            return this.Mu();
          });
        }
        Nu(e) {
          this.wu.push(e);
        }
        Fu(e) {
          let t = this.fu.indexOf(e);
          this.fu.splice(t, 1);
        }
      }
      class so extends se {
        constructor(e, t, r, n) {
          super(e, t, r, n),
            (this.type = "firestore"),
            (this._queue = new sa()),
            (this._persistenceKey =
              (null == n ? void 0 : n.name) || "[DEFAULT]");
        }
        async _terminate() {
          if (this._firestoreClient) {
            let e = this._firestoreClient.terminate();
            (this._queue = new sa(e)),
              (this._firestoreClient = void 0),
              await e;
          }
        }
      }
      function sl(e, t) {
        let r = "object" == typeof e ? e : (0, y.Mq)(),
          n = (0, y.qX)(r, "firestore").getImmediate({
            identifier: "string" == typeof e ? e : t || e$,
          });
        if (!n._initialized) {
          let e = (0, w.P0)("firestore");
          e &&
            (function (e, t, r, n = {}) {
              var i;
              let s = (e = i8(e, se))._getSettings(),
                a = Object.assign(Object.assign({}, s), {
                  emulatorOptions: e._getEmulatorOptions(),
                }),
                o = `${t}:${r}`;
              s.host !== i7 &&
                s.host !== o &&
                P(
                  "Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."
                );
              let l = Object.assign(Object.assign({}, s), {
                host: o,
                ssl: !1,
                emulatorOptions: n,
              });
              if (!(0, w.vZ)(l, a) && (e._setSettings(l), n.mockUserToken)) {
                let t, r;
                if ("string" == typeof n.mockUserToken)
                  (t = n.mockUserToken), (r = k.MOCK_USER);
                else {
                  t = (0, w.Sg)(
                    n.mockUserToken,
                    null === (i = e._app) || void 0 === i
                      ? void 0
                      : i.options.projectId
                  );
                  let s = n.mockUserToken.sub || n.mockUserToken.user_id;
                  if (!s)
                    throw new $(
                      M.INVALID_ARGUMENT,
                      "mockUserToken must contain 'sub' or 'user_id' field!"
                    );
                  r = new k(s);
                }
                e._authCredentials = new U(new F(t, r));
              }
            })(n, ...e);
        }
        return n;
      }
      function su(e) {
        if (e._terminated)
          throw new $(
            M.FAILED_PRECONDITION,
            "The client has already been terminated."
          );
        return (
          e._firestoreClient ||
            (function (e) {
              var t, r, n, i, s;
              let a = e._freezeSettings(),
                o =
                  ((i = e._databaseId),
                  (s =
                    (null === (t = e._app) || void 0 === t
                      ? void 0
                      : t.options.appId) || ""),
                  new eM(
                    i,
                    s,
                    e._persistenceKey,
                    a.host,
                    a.ssl,
                    a.experimentalForceLongPolling,
                    a.experimentalAutoDetectLongPolling,
                    i5(a.experimentalLongPollingOptions),
                    a.useFetchStreams
                  ));
              e._componentsProvider ||
                ((null === (r = a.localCache) || void 0 === r
                  ? void 0
                  : r._offlineComponentProvider) &&
                  (null === (n = a.localCache) || void 0 === n
                    ? void 0
                    : n._onlineComponentProvider) &&
                  (e._componentsProvider = {
                    _offline: a.localCache._offlineComponentProvider,
                    _online: a.localCache._onlineComponentProvider,
                  })),
                (e._firestoreClient = new iX(
                  e._authCredentials,
                  e._appCheckCredentials,
                  e._queue,
                  o,
                  e._componentsProvider &&
                    (function (e) {
                      let t = null == e ? void 0 : e._online.build();
                      return {
                        _offline: null == e ? void 0 : e._offline.build(t),
                        _online: t,
                      };
                    })(e._componentsProvider)
                ));
            })(e),
          e._firestoreClient
        );
      }
      class sc {
        constructor(e) {
          this._byteString = e;
        }
        static fromBase64String(e) {
          try {
            return new sc(eT.fromBase64String(e));
          } catch (e) {
            throw new $(
              M.INVALID_ARGUMENT,
              "Failed to construct data from Base64 string: " + e
            );
          }
        }
        static fromUint8Array(e) {
          return new sc(eT.fromUint8Array(e));
        }
        toBase64() {
          return this._byteString.toBase64();
        }
        toUint8Array() {
          return this._byteString.toUint8Array();
        }
        toString() {
          return "Bytes(base64: " + this.toBase64() + ")";
        }
        isEqual(e) {
          return this._byteString.isEqual(e._byteString);
        }
      }
      class sh {
        constructor(...e) {
          for (let t = 0; t < e.length; ++t)
            if (0 === e[t].length)
              throw new $(
                M.INVALID_ARGUMENT,
                "Invalid field name at argument $(i + 1). Field names must not be empty."
              );
          this._internalPath = new es(e);
        }
        isEqual(e) {
          return this._internalPath.isEqual(e._internalPath);
        }
      }
      class sf {
        constructor(e) {
          this._methodName = e;
        }
      }
      class sd {
        constructor(e, t) {
          if (!isFinite(e) || e < -90 || e > 90)
            throw new $(
              M.INVALID_ARGUMENT,
              "Latitude must be a number between -90 and 90, but was: " + e
            );
          if (!isFinite(t) || t < -180 || t > 180)
            throw new $(
              M.INVALID_ARGUMENT,
              "Longitude must be a number between -180 and 180, but was: " + t
            );
          (this._lat = e), (this._long = t);
        }
        get latitude() {
          return this._lat;
        }
        get longitude() {
          return this._long;
        }
        isEqual(e) {
          return this._lat === e._lat && this._long === e._long;
        }
        toJSON() {
          return { latitude: this._lat, longitude: this._long };
        }
        _compareTo(e) {
          return W(this._lat, e._lat) || W(this._long, e._long);
        }
      }
      class sp {
        constructor(e) {
          this._values = (e || []).map((e) => e);
        }
        toArray() {
          return this._values.map((e) => e);
        }
        isEqual(e) {
          return (function (e, t) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; ++r) if (e[r] !== t[r]) return !1;
            return !0;
          })(this._values, e._values);
        }
      }
      let sg = /^__.*__$/;
      class sm {
        constructor(e, t, r) {
          (this.data = e), (this.fieldMask = t), (this.fieldTransforms = r);
        }
        toMutation(e, t) {
          return null !== this.fieldMask
            ? new t6(e, this.data, this.fieldMask, t, this.fieldTransforms)
            : new t3(e, this.data, t, this.fieldTransforms);
        }
      }
      function sy(e) {
        switch (e) {
          case 0:
          case 2:
          case 1:
            return !0;
          case 3:
          case 4:
            return !1;
          default:
            throw L();
        }
      }
      class sv {
        constructor(e, t, r, n, i, s) {
          (this.settings = e),
            (this.databaseId = t),
            (this.serializer = r),
            (this.ignoreUndefinedProperties = n),
            void 0 === i && this.Bu(),
            (this.fieldTransforms = i || []),
            (this.fieldMask = s || []);
        }
        get path() {
          return this.settings.path;
        }
        get Lu() {
          return this.settings.Lu;
        }
        ku(e) {
          return new sv(
            Object.assign(Object.assign({}, this.settings), e),
            this.databaseId,
            this.serializer,
            this.ignoreUndefinedProperties,
            this.fieldTransforms,
            this.fieldMask
          );
        }
        qu(e) {
          var t;
          let r =
              null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
            n = this.ku({ path: r, Qu: !1 });
          return n.$u(e), n;
        }
        Uu(e) {
          var t;
          let r =
              null === (t = this.path) || void 0 === t ? void 0 : t.child(e),
            n = this.ku({ path: r, Qu: !1 });
          return n.Bu(), n;
        }
        Ku(e) {
          return this.ku({ path: void 0, Qu: !0 });
        }
        Wu(e) {
          return sT(
            e,
            this.settings.methodName,
            this.settings.Gu || !1,
            this.path,
            this.settings.zu
          );
        }
        contains(e) {
          return (
            void 0 !== this.fieldMask.find((t) => e.isPrefixOf(t)) ||
            void 0 !== this.fieldTransforms.find((t) => e.isPrefixOf(t.field))
          );
        }
        Bu() {
          if (this.path)
            for (let e = 0; e < this.path.length; e++)
              this.$u(this.path.get(e));
        }
        $u(e) {
          if (0 === e.length)
            throw this.Wu("Document fields must not be empty");
          if (sy(this.Lu) && sg.test(e))
            throw this.Wu('Document fields cannot begin and end with "__"');
        }
      }
      class sb {
        constructor(e, t, r) {
          (this.databaseId = e),
            (this.ignoreUndefinedProperties = t),
            (this.serializer = r || nA(e));
        }
        ju(e, t, r, n = !1) {
          return new sv(
            {
              Lu: e,
              methodName: t,
              zu: r,
              path: es.emptyPath(),
              Qu: !1,
              Gu: n,
            },
            this.databaseId,
            this.serializer,
            this.ignoreUndefinedProperties
          );
        }
      }
      function sw(e) {
        return !(
          "object" != typeof e ||
          null === e ||
          e instanceof Array ||
          e instanceof Date ||
          e instanceof J ||
          e instanceof sd ||
          e instanceof sc ||
          e instanceof sr ||
          e instanceof sf ||
          e instanceof sp
        );
      }
      function sS(e, t, r) {
        if (
          !sw(r) ||
          "object" != typeof r ||
          null === r ||
          (Object.getPrototypeOf(r) !== Object.prototype &&
            null !== Object.getPrototypeOf(r))
        ) {
          let n = i4(r);
          throw "an object" === n
            ? t.Wu(e + " a custom object")
            : t.Wu(e + " " + n);
        }
      }
      let sE = RegExp("[~\\*/\\[\\]]");
      function sx(e, t, r) {
        if (t.search(sE) >= 0)
          throw sT(
            `Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,
            e,
            !1,
            void 0,
            r
          );
        try {
          return new sh(...t.split("."))._internalPath;
        } catch (n) {
          throw sT(
            `Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,
            e,
            !1,
            void 0,
            r
          );
        }
      }
      function sT(e, t, r, n, i) {
        let s = n && !n.isEmpty(),
          a = void 0 !== i,
          o = `Function ${t}() called with invalid data`;
        r && (o += " (via `toFirestore()`)"), (o += ". ");
        let l = "";
        return (
          (s || a) &&
            ((l += " (found"),
            s && (l += ` in field ${n}`),
            a && (l += ` in document ${i}`),
            (l += ")")),
          new $(M.INVALID_ARGUMENT, o + e + l)
        );
      }
      class sC {
        constructor(e, t, r, n, i) {
          (this._firestore = e),
            (this._userDataWriter = t),
            (this._key = r),
            (this._document = n),
            (this._converter = i);
        }
        get id() {
          return this._key.path.lastSegment();
        }
        get ref() {
          return new sr(this._firestore, this._converter, this._key);
        }
        exists() {
          return null !== this._document;
        }
        data() {
          if (this._document) {
            if (this._converter) {
              let e = new s_(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                null
              );
              return this._converter.fromFirestore(e);
            }
            return this._userDataWriter.convertValue(this._document.data.value);
          }
        }
        get(e) {
          if (this._document) {
            let t = this._document.data.field(sk("DocumentSnapshot.get", e));
            if (null !== t) return this._userDataWriter.convertValue(t);
          }
        }
      }
      class s_ extends sC {
        data() {
          return super.data();
        }
      }
      function sk(e, t) {
        return "string" == typeof t
          ? sx(e, t)
          : t instanceof sh
          ? t._internalPath
          : t._delegate._internalPath;
      }
      class sA {
        convertValue(e, t = "none") {
          switch (eq(e)) {
            case 0:
              return null;
            case 1:
              return e.booleanValue;
            case 2:
              return ek(e.integerValue || e.doubleValue);
            case 3:
              return this.convertTimestamp(e.timestampValue);
            case 4:
              return this.convertServerTimestamp(e, t);
            case 5:
              return e.stringValue;
            case 6:
              return this.convertBytes(eA(e.bytesValue));
            case 7:
              return this.convertReference(e.referenceValue);
            case 8:
              return this.convertGeoPoint(e.geoPointValue);
            case 9:
              return this.convertArray(e.arrayValue, t);
            case 11:
              return this.convertObject(e.mapValue, t);
            case 10:
              return this.convertVectorValue(e.mapValue);
            default:
              throw L();
          }
        }
        convertObject(e, t) {
          return this.convertObjectMap(e.fields, t);
        }
        convertObjectMap(e, t = "none") {
          let r = {};
          return (
            eg(e, (e, n) => {
              r[e] = this.convertValue(n, t);
            }),
            r
          );
        }
        convertVectorValue(e) {
          var t, r, n;
          return new sp(
            null ===
              (n =
                null ===
                  (r =
                    null === (t = e.fields) || void 0 === t
                      ? void 0
                      : t[ez].arrayValue) || void 0 === r
                  ? void 0
                  : r.values) || void 0 === n
              ? void 0
              : n.map((e) => ek(e.doubleValue))
          );
        }
        convertGeoPoint(e) {
          return new sd(ek(e.latitude), ek(e.longitude));
        }
        convertArray(e, t) {
          return (e.values || []).map((e) => this.convertValue(e, t));
        }
        convertServerTimestamp(e, t) {
          switch (t) {
            case "previous":
              let r = eO(e);
              return null == r ? null : this.convertValue(r, t);
            case "estimate":
              return this.convertTimestamp(eL(e));
            default:
              return null;
          }
        }
        convertTimestamp(e) {
          let t = e_(e);
          return new J(t.seconds, t.nanos);
        }
        convertDocumentKey(e, t) {
          let r = en.fromString(e);
          rF(r) || L();
          let n = new eV(r.get(1), r.get(3)),
            i = new ea(r.popFirst(5));
          return (
            n.isEqual(t) ||
              R(
                `Document ${i} contains a document reference within a different database (${n.projectId}/${n.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`
              ),
            i
          );
        }
      }
      class sI {
        constructor(e, t) {
          (this.hasPendingWrites = e), (this.fromCache = t);
        }
        isEqual(e) {
          return (
            this.hasPendingWrites === e.hasPendingWrites &&
            this.fromCache === e.fromCache
          );
        }
      }
      class sD extends sC {
        constructor(e, t, r, n, i, s) {
          super(e, t, r, n, s),
            (this._firestore = e),
            (this._firestoreImpl = e),
            (this.metadata = i);
        }
        exists() {
          return super.exists();
        }
        data(e = {}) {
          if (this._document) {
            if (this._converter) {
              let t = new sN(
                this._firestore,
                this._userDataWriter,
                this._key,
                this._document,
                this.metadata,
                null
              );
              return this._converter.fromFirestore(t, e);
            }
            return this._userDataWriter.convertValue(
              this._document.data.value,
              e.serverTimestamps
            );
          }
        }
        get(e, t = {}) {
          if (this._document) {
            let r = this._document.data.field(sk("DocumentSnapshot.get", e));
            if (null !== r)
              return this._userDataWriter.convertValue(r, t.serverTimestamps);
          }
        }
      }
      class sN extends sD {
        data(e = {}) {
          return super.data(e);
        }
      }
      function sR(e) {
        e = i8(e, sr);
        let t = i8(e.firestore, so);
        return (function (e, t, r = {}) {
          let n = new V();
          return (
            e.asyncQueue.enqueueAndForget(async () =>
              (function (e, t, r, n, i) {
                let s = new iW({
                    next: (o) => {
                      s.su(), t.enqueueAndForget(() => ih(e, a));
                      let l = o.docs.has(r);
                      !l && o.fromCache
                        ? i.reject(
                            new $(
                              M.UNAVAILABLE,
                              "Failed to get document because the client is offline."
                            )
                          )
                        : l && o.fromCache && n && "server" === n.source
                        ? i.reject(
                            new $(
                              M.UNAVAILABLE,
                              'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)'
                            )
                          )
                        : i.resolve(o);
                    },
                    error: (e) => i.reject(e),
                  }),
                  a = new im(new tb(r.path), s, {
                    includeMetadataChanges: !0,
                    Ta: !0,
                  });
                return ic(e, a);
              })(await i2(e), e.asyncQueue, t, r, n)
            ),
            n.promise
          );
        })(su(t), e._key).then((r) =>
          (function (e, t, r) {
            let n = r.docs.get(t._key),
              i = new sP(e);
            return new sD(
              e,
              i,
              t._key,
              n,
              new sI(r.hasPendingWrites, r.fromCache),
              t.converter
            );
          })(t, e, r)
        );
      }
      class sP extends sA {
        constructor(e) {
          super(), (this.firestore = e);
        }
        convertBytes(e) {
          return new sc(e);
        }
        convertReference(e) {
          let t = this.convertDocumentKey(e, this.firestore._databaseId);
          return new sr(this.firestore, null, t);
        }
      }
      function sO(e, t, r) {
        var n, i, s;
        e = i8(e, sr);
        let a = i8(e.firestore, so),
          o = (n = e.converter)
            ? r && (r.merge || r.mergeFields)
              ? n.toFirestore(t, r)
              : n.toFirestore(t)
            : t;
        return (
          (i = a),
          (s = [
            (function (e, t, r, n, i, s = {}) {
              let a, o;
              let l = e.ju(s.merge || s.mergeFields ? 2 : 0, t, r, i);
              sS("Data must be an object, but it was:", l, n);
              let u = (function e(t, r) {
                let n = {};
                return (
                  em(t)
                    ? r.path && r.path.length > 0 && r.fieldMask.push(r.path)
                    : eg(t, (t, i) => {
                        let s = (function t(r, n) {
                          if (sw((r = (0, w.m9)(r))))
                            return (
                              sS("Unsupported field value:", n, r), e(r, n)
                            );
                          if (r instanceof sf)
                            return (
                              (function (e, t) {
                                if (!sy(t.Lu))
                                  throw t.Wu(
                                    `${e._methodName}() can only be used with update() and set()`
                                  );
                                if (!t.path)
                                  throw t.Wu(
                                    `${e._methodName}() is not currently supported inside arrays`
                                  );
                                let r = e._toFieldTransform(t);
                                r && t.fieldTransforms.push(r);
                              })(r, n),
                              null
                            );
                          if (void 0 === r && n.ignoreUndefinedProperties)
                            return null;
                          if (
                            (n.path && n.fieldMask.push(n.path),
                            r instanceof Array)
                          ) {
                            if (n.settings.Qu && 4 !== n.Lu)
                              throw n.Wu("Nested arrays are not supported");
                            return (function (e, r) {
                              let n = [],
                                i = 0;
                              for (let s of e) {
                                let e = t(s, r.Ku(i));
                                null == e && (e = { nullValue: "NULL_VALUE" }),
                                  n.push(e),
                                  i++;
                              }
                              return { arrayValue: { values: n } };
                            })(r, n);
                          }
                          return (function (e, t) {
                            var r, n, i;
                            if (null === (e = (0, w.m9)(e)))
                              return { nullValue: "NULL_VALUE" };
                            if ("number" == typeof e)
                              return (
                                (r = t.serializer),
                                "number" == typeof (i = n = e) &&
                                Number.isInteger(i) &&
                                !ed(i) &&
                                i <= Number.MAX_SAFE_INTEGER &&
                                i >= Number.MIN_SAFE_INTEGER
                                  ? tB(n)
                                  : tF(r, n)
                              );
                            if ("boolean" == typeof e)
                              return { booleanValue: e };
                            if ("string" == typeof e) return { stringValue: e };
                            if (e instanceof Date) {
                              let r = J.fromDate(e);
                              return { timestampValue: rC(t.serializer, r) };
                            }
                            if (e instanceof J) {
                              let r = new J(
                                e.seconds,
                                1e3 * Math.floor(e.nanoseconds / 1e3)
                              );
                              return { timestampValue: rC(t.serializer, r) };
                            }
                            if (e instanceof sd)
                              return {
                                geoPointValue: {
                                  latitude: e.latitude,
                                  longitude: e.longitude,
                                },
                              };
                            if (e instanceof sc)
                              return {
                                bytesValue: r_(t.serializer, e._byteString),
                              };
                            if (e instanceof sr) {
                              let r = t.databaseId,
                                n = e.firestore._databaseId;
                              if (!n.isEqual(r))
                                throw t.Wu(
                                  `Document reference is for database ${n.projectId}/${n.database} but should be for database ${r.projectId}/${r.database}`
                                );
                              return {
                                referenceValue: rA(
                                  e.firestore._databaseId || t.databaseId,
                                  e._key.path
                                ),
                              };
                            }
                            if (e instanceof sp)
                              return {
                                mapValue: {
                                  fields: {
                                    [eF]: { stringValue: ej },
                                    [ez]: {
                                      arrayValue: {
                                        values: e.toArray().map((e) => {
                                          if ("number" != typeof e)
                                            throw t.Wu(
                                              "VectorValues must only contain numeric values."
                                            );
                                          return tF(t.serializer, e);
                                        }),
                                      },
                                    },
                                  },
                                },
                              };
                            throw t.Wu(`Unsupported field value: ${i4(e)}`);
                          })(r, n);
                        })(i, r.qu(t));
                        null != s && (n[t] = s);
                      }),
                  { mapValue: { fields: n } }
                );
              })(n, l);
              if (s.merge) (a = new eE(l.fieldMask)), (o = l.fieldTransforms);
              else if (s.mergeFields) {
                let e = [];
                for (let n of s.mergeFields) {
                  let i = (function (e, t, r) {
                    if ((t = (0, w.m9)(t)) instanceof sh)
                      return t._internalPath;
                    if ("string" == typeof t) return sx(e, t);
                    throw sT(
                      "Field path arguments must be of type string or ",
                      e,
                      !1,
                      void 0,
                      r
                    );
                  })(t, n, r);
                  if (!l.contains(i))
                    throw new $(
                      M.INVALID_ARGUMENT,
                      `Field '${i}' is specified in your field mask but missing from your input data.`
                    );
                  (function (e, t) {
                    return e.some((e) => e.isEqual(t));
                  })(e, i) || e.push(i);
                }
                (a = new eE(e)),
                  (o = l.fieldTransforms.filter((e) => a.covers(e.field)));
              } else (a = null), (o = l.fieldTransforms);
              return new sm(new e6(u), a, o);
            })(
              (function (e) {
                let t = e._freezeSettings(),
                  r = nA(e._databaseId);
                return new sb(e._databaseId, !!t.ignoreUndefinedProperties, r);
              })(a),
              "setDoc",
              e._key,
              o,
              null !== e.converter,
              r
            ).toMutation(e._key, tY.none()),
          ]),
          (function (e, t) {
            let r = new V();
            return (
              e.asyncQueue.enqueueAndForget(async () =>
                iD(await i1(e).then((e) => e.syncEngine), t, r)
              ),
              r.promise
            );
          })(su(i), s)
        );
      }
      new WeakMap(),
        (function (e = !0) {
          (A = y.Jn),
            (0, y.Xd)(
              new v.wA(
                "firestore",
                (t, { instanceIdentifier: r, options: n }) => {
                  let i = t.getProvider("app").getImmediate(),
                    s = new so(
                      new j(t.getProvider("auth-internal")),
                      new K(i, t.getProvider("app-check-internal")),
                      (function (e, t) {
                        if (
                          !Object.prototype.hasOwnProperty.apply(e.options, [
                            "projectId",
                          ])
                        )
                          throw new $(
                            M.INVALID_ARGUMENT,
                            '"projectId" not provided in firebase.initializeApp.'
                          );
                        return new eV(e.options.projectId, t);
                      })(i, r),
                      i
                    );
                  return (
                    (n = Object.assign({ useFetchStreams: e }, n)),
                    s._setSettings(n),
                    s
                  );
                },
                "PUBLIC"
              ).setMultipleInstances(!0)
            ),
            (0, y.KN)(C, _, void 0),
            (0, y.KN)(C, _, "esm2017");
        })();
    },
  },
]);
