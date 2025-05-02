"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["572"],
  {
    1607: function (e, t, n) {
      n.r(t), n.d(t, { default: () => tT });
      var i = n(85893),
        l = n(67294),
        o = n(67026),
        a = n(92198),
        s = n(89250),
        r = n(88199),
        c = n(30453),
        d = n(37979),
        h = n(2502),
        u = n(66175),
        p = n(22273),
        m = n(89471);
      let g = function () {
        let e = (0, s.TH)(),
          t = (0, s.s0)();
        return {
          deleteQueryString: function (n) {
            let i = new URLSearchParams(e.search);
            i.delete(n), t({ search: i.toString() }, { replace: !0 });
          },
          queryString: (function () {
            let t = new URLSearchParams(e.search),
              n = {};
            return (
              t.forEach((e, t) => {
                n[t] = e;
              }),
              n
            );
          })(),
          setQueryString: function (n) {
            !(function (n) {
              let i = new URLSearchParams(e.search);
              Object.entries(n).forEach((e) => {
                let [t, n] = e;
                void 0 === n ? i.delete(t) : i.set(t, n);
              }),
                t({ search: i.toString() }, { replace: !0 });
            })(n);
          },
        };
      };
      function x(e) {
        let { deleteQueryString: t, queryString: n, setQueryString: i } = g(),
          { isDesktop: o } = (0, h.F)(),
          [a, s] = (0, m.Sx)(),
          r = () => {
            if (
              (n.modal || s.setAll([]),
              (null == e ? void 0 : e.shouldReinitializeModals) !== void 0 &&
                !1 === e.shouldReinitializeModals)
            )
              t("modal");
            else {
              let e = n.modal;
              if (e) {
                let t = e.split(","),
                  n = t.slice(-1)[0];
                s.setAll([]),
                  t.forEach((e) => {
                    s.set(e, !o);
                  }),
                  s.set(n, !0);
              }
            }
          };
        return (
          (0, l.useEffect)(() => {
            r();
          }, []),
          (0, l.useEffect)(() => {
            (null == n ? void 0 : n.modal) || s.reset();
          }, [null == n ? void 0 : n.modal]),
          (0, m.OR)("popstate", () => {
            r();
          }),
          {
            hideModal: (e) => {
              let l = n.modal;
              if (l) {
                let n = l.split(",");
                if (null == e ? void 0 : e.shouldHideAllModals)
                  a.forEach((e, n) => {
                    s.set(n, !1), t("modal");
                  });
                else if (null == e ? void 0 : e.shouldHidePreviousModals) {
                  if (n.length > 1) {
                    let e = n.shift();
                    n.forEach((e) => {
                      s.set(e, !1);
                    }),
                      (n = [e ?? ""]),
                      i({ modal: e });
                  } else 1 === n.length ? i({ modal: n[0] }) : t("modal");
                } else {
                  let e = n.pop(),
                    l = n.slice(-1)[0];
                  l ? (s.set(e, !1), s.set(l, !0)) : s.set(e, !1),
                    0 === n.length ? t("modal") : i({ modal: n.join(",") });
                }
              }
            },
            isModalOpenFor: (e) => a.get(e) || !1,
            showModal: (e, t) => {
              let l = n.modal;
              if (l) {
                let n = l.split(","),
                  a = n.slice(-1)[0];
                if (a === e) return;
                (null == t ? void 0 : t.shouldStackModals) === !1
                  ? s.set(a, !1)
                  : s.set(a, (null == t ? void 0 : t.shouldStackModals) || !o),
                  s.set(e, !0),
                  n.push(e),
                  i({
                    modal: (null == t ? void 0 : t.shouldClearPreviousModals)
                      ? e
                      : n.join(","),
                  });
              } else s.set(e, !0), i({ modal: e });
            },
          }
        );
      }
      let v = () => {
        let e = ["dashboard", "bot_builder", "chart", "tutorial"][
            Number(localStorage.getItem("active_tab"))
          ],
          t = window.location.href.split("#")[0];
        return `${t}#${e}`;
      };
      var f = n(32305),
        _ = n(96223),
        w = n(3693),
        b = n(98146),
        j = n(64410),
        y = n(918),
        C = n(50051),
        N = n(16496),
        I = n(59001),
        k = n(57218),
        Z = n(12811),
        z = n(28505),
        L = n(73971),
        S = n(99243),
        M = n(63066),
        T = n(96396),
        E = n(14249),
        F = n(45322),
        A = n(34273),
        R = n(473);
      let D = [
        {
          code: "EN",
          displayName: "English",
          icon: (0, i.jsx)(f.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(f.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(f.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "AR",
          displayName: "العربية",
          icon: (0, i.jsx)(_.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(_.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(_.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "BN",
          displayName: "বাংলা",
          icon: (0, i.jsx)(w.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(w.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(w.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "DE",
          displayName: "Deutsch",
          icon: (0, i.jsx)(b.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(b.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(b.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "ES",
          displayName: "Espa\xf1ol",
          icon: (0, i.jsx)(j.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(j.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(j.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "FR",
          displayName: "Fran\xe7ais",
          icon: (0, i.jsx)(y.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(y.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(y.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "IT",
          displayName: "Italiano",
          icon: (0, i.jsx)(C.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(C.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(C.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "SW",
          displayName: "Kiswahili",
          icon: (0, i.jsx)(N.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(N.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(N.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "KM",
          displayName: "ខ្មែរ",
          icon: (0, i.jsx)(I.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(I.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(I.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "KO",
          displayName: "한국어",
          icon: (0, i.jsx)(k.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(k.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(k.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "PL",
          displayName: "Polish",
          icon: (0, i.jsx)(Z.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(Z.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(Z.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "PT",
          displayName: "Portugu\xeas",
          icon: (0, i.jsx)(z.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(z.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(z.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "RU",
          displayName: "Русский",
          icon: (0, i.jsx)(L.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(L.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(L.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "SI",
          displayName: "සිංහල",
          icon: (0, i.jsx)(S.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(S.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(S.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "TH",
          displayName: "ไทย",
          icon: (0, i.jsx)(M.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(M.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(M.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "TR",
          displayName: "T\xfcrk\xe7e",
          icon: (0, i.jsx)(T.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(T.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(T.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "UZ",
          displayName: "O'zbek",
          icon: (0, i.jsx)(E.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(E.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(E.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "VI",
          displayName: "Tiếng Việt",
          icon: (0, i.jsx)(F.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(F.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(F.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "ZH_CN",
          displayName: "简体中文",
          icon: (0, i.jsx)(A.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(A.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(A.Z, {
            height: 14.67,
            width: 22,
          }),
        },
        {
          code: "ZH_TW",
          displayName: "繁體中文",
          icon: (0, i.jsx)(R.Z, { height: 24, width: 36 }),
          placeholderIcon: (0, i.jsx)(R.Z, { height: 12, width: 18 }),
          placeholderIconInMobile: (0, i.jsx)(R.Z, {
            height: 14.67,
            width: 22,
          }),
        },
      ];
      var O = n(48059),
        P = n(44412),
        U = n(96877),
        B = n(75324),
        H = n(74541),
        X = n(64915);
      let V = () => {
          let [e, t] = (0, l.useState)(!1);
          return (
            (0, l.useEffect)(() => {
              var e;
              null === (e = window.LiveChatWidget) ||
                void 0 === e ||
                e.on("ready", (e) => {
                  "online" === e.state.availability && t(!0);
                });
            }, []),
            { is_livechat_available: e }
          );
        },
        q = (0, U.Pi)(() => {
          let { isDesktop: e } = (0, h.F)(),
            { is_livechat_available: t } = V(),
            n = (0, B.Lv)();
          if (!t && !n) return null;
          setInterval(() => {
            if (n) {
              var e;
              null === (e = window.LiveChatWidget) ||
                void 0 === e ||
                e.call("destroy");
            }
          }, 10);
          let l = () => {
            var e;
            n
              ? window.Intercom("show")
              : null === (e = window.LiveChatWidget) ||
                void 0 === e ||
                e.call("maximize");
          };
          return e
            ? (0, i.jsx)("div", {
                onKeyDown: l,
                onClick: l,
                children: (0, i.jsx)(X.u, {
                  as: "button",
                  className: "app-footer__icon",
                  tooltipContent: (0, O.NC)("Live chat"),
                  children: (0, i.jsx)(H.Z, { iconSize: "xs" }),
                }),
              })
            : (0, i.jsx)(H.Z, {
                iconSize: "xs",
                className: "mobile-menu__content__items--right-margin",
              });
        });
      var K = n(26325);
      let W = () => {
        let { localize: e } = (0, O.T_)();
        return (0, i.jsx)(X.u, {
          as: "a",
          className: "app-footer__icon",
          href: u.xOw.account_limits,
          tooltipContent: e("Account limits"),
          children: (0, i.jsx)(K.Z, {
            iconSize: "xs",
            fill: "var(--text-general)",
          }),
        });
      };
      var $ = n(83257),
        G = n(53261),
        J = n(21456);
      let Y = (0, U.Pi)(() => {
        let { is_dark_mode_on: e, toggleTheme: t } = (0, $.Z)(),
          { localize: n } = (0, O.T_)();
        return (0, i.jsx)(X.u, {
          as: "button",
          className: "app-footer__icon",
          tooltipContent: n("Change theme"),
          onClick: t,
          children: e
            ? (0, i.jsx)(J.Z, { iconSize: "xs" })
            : (0, i.jsx)(G.Z, { iconSize: "xs" }),
        });
      });
      var Q = n(37410);
      let ee = () => {
        let { localize: e } = (0, O.T_)();
        return (0, i.jsx)(X.u, {
          as: "a",
          className: "app-footer__icon",
          href: u.xOw.deriv_com,
          target: "_blank",
          tooltipContent: e("Go to deriv.com"),
          children: (0, i.jsx)(Q.Z, { iconSize: "xs" }),
        });
      };
      var et = n(79655),
        en = n(45452),
        ei = n(12838);
      let el = () => {
          let e = ei.fV.getValue(ei.sE.configServerURL);
          return e
            ? (0, i.jsxs)(en.Z, {
                className: "app-footer__endpoint",
                color: "red",
                size: "s",
                children: [
                  "The server",
                  " ",
                  (0, i.jsx)(et.rU, {
                    className: "app-footer__endpoint-text",
                    to: u.xOw.endpoint,
                    children: "endpoint",
                  }),
                  " ",
                  `is: ${e}`,
                ],
              })
            : null;
        },
        eo = {
          exit: [
            "exitFullscreen",
            "webkitExitFullscreen",
            "mozCancelFullScreen",
            "msExitFullscreen",
          ],
          request: [
            "requestFullscreen",
            "webkitRequestFullscreen",
            "mozRequestFullScreen",
            "msRequestFullscreen",
          ],
          screenChange: [
            "fullscreenchange",
            "webkitfullscreenchange",
            "mozfullscreenchange",
            "MSFullscreenChange",
          ],
          screenElement: [
            "fullscreenElement",
            "webkitFullscreenElement",
            "mozFullScreenElement",
            "msFullscreenElement",
          ],
        },
        ea = () => {
          let [e, t] = (0, l.useState)(!1),
            { exit: n, request: i, screenChange: o, screenElement: a } = eo,
            s = (0, l.useCallback)(() => t(a.some((e) => document[e])), [a]);
          return (
            (0, l.useEffect)(
              () => (
                o.forEach((e) => {
                  document.addEventListener(e, s, !1);
                }),
                () => {
                  o.forEach((e) => {
                    document.removeEventListener(e, s, !1);
                  });
                }
              ),
              [s, o]
            ),
            {
              toggleFullScreenMode: (l) => {
                null == l || l.stopPropagation();
                let o = n.find((e) => document[e]),
                  a = i.find((e) => document.documentElement[e]);
                e && o
                  ? document[o]()
                  : a
                  ? document.documentElement[a]()
                  : t(!1);
              },
            }
          );
        };
      var es = n(69914);
      let er = () => {
        let { toggleFullScreenMode: e } = ea(),
          { localize: t } = (0, O.T_)();
        return (0, i.jsx)(X.u, {
          as: "button",
          className: "app-footer__icon",
          onClick: e,
          tooltipContent: t("Full screen"),
          children: (0, i.jsx)(es.Z, { iconSize: "xs" }),
        });
      };
      var ec = n(11218);
      let ed = () => {
          let { localize: e } = (0, O.T_)();
          return (0, i.jsx)(X.u, {
            as: "a",
            className: "app-footer__icon",
            href: u.xOw.help_center,
            target: "_blank",
            tooltipContent: e("Help centre"),
            children: (0, i.jsx)(ec.Z, { iconSize: "xs" }),
          });
        },
        eh = (e) => {
          let { openLanguageSettingModal: t } = e,
            { currentLang: n, localize: o } = (0, O.T_)(),
            a = (0, l.useMemo)(() => {
              var e;
              return null ===
                (e = D.find((e) => {
                  let { code: t } = e;
                  return t == n;
                })) || void 0 === e
                ? void 0
                : e.placeholderIcon;
            }, [n]);
          return (0, i.jsxs)(X.u, {
            as: "button",
            className: "app-footer__language",
            onClick: t,
            tooltipContent: o("Language"),
            children: [
              a,
              (0, i.jsx)(en.Z, { size: "xs", weight: "bold", children: n }),
            ],
          });
        },
        eu = () =>
          "undefined" == typeof navigator ||
          "boolean" != typeof navigator.onLine ||
          navigator.onLine,
        ep = () => {
          let [e, t] = (0, l.useState)(eu()),
            n = () => t(!0),
            i = () => t(!1);
          return (
            (0, l.useEffect)(
              () => (
                window.addEventListener("online", n),
                window.addEventListener("offline", i),
                () => {
                  window.removeEventListener("online", n),
                    window.removeEventListener("offline", i);
                }
              ),
              []
            ),
            e
          );
        },
        em = () => {
          let [e, t] = (0, l.useState)("online"),
            n = ep();
          return (
            (0, l.useEffect)(() => {
              n ? t("online") : t("offline");
            }, [n]),
            e
          );
        },
        eg = () => ({
          blinking: {
            className:
              "app-footer__network-status-online app-footer__network-status-blinking",
            tooltip: (0, O.NC)("Connecting to server"),
          },
          offline: {
            className: "app-footer__network-status-offline",
            tooltip: "Offline",
          },
          online: {
            className: "app-footer__network-status-online",
            tooltip: "Online",
          },
        }),
        ex = () => {
          let e = em(),
            { className: t, tooltip: n } = (0, l.useMemo)(() => eg()[e], [e]);
          return (0, i.jsx)(X.u, {
            as: "div",
            className: "app-footer__icon",
            "data-testid": "dt_network_status",
            tooltipContent: (0, O.NC)("Network status: {{status}}", {
              status: n,
            }),
            children: (0, i.jsx)("div", {
              className: (0, o.Z)("app-footer__network-status", t),
              "data-testid": "dt_circle",
            }),
          });
        };
      var ev = n(38376);
      let ef = () => {
        let { localize: e } = (0, O.T_)();
        return (0, i.jsx)(X.u, {
          as: "a",
          className: "app-footer__icon",
          href: u.xOw.responsible,
          target: "_blank",
          tooltipContent: e("Responsible trading"),
          children: (0, i.jsx)(ev.Z, { iconSize: "xs" }),
        });
      };
      var e_ = n(30381),
        ew = n.n(e_),
        eb = n(83274),
        ej = n(27179),
        ey = n(83606);
      let eC = (0, U.Pi)(() => {
        let { isDesktop: e } = (0, h.F)(),
          { common: t } = (0, eb.oR)() ?? { common: { server_time: ew()() } };
        return (0, i.jsx)(X.u, {
          as: "div",
          className: "app-footer__icon",
          "data-testid": "dt_server_time",
          tooltipContent: t.server_time.format(ej.kT),
          children: (0, i.jsx)(ey.x, {
            size: e ? "xs" : "sm",
            children: t.server_time.format(ej.Yp),
          }),
        });
      });
      var eN = n(60821);
      let eI = () => {
          let { localize: e } = (0, O.T_)();
          return (0, i.jsx)(X.u, {
            as: "a",
            className: "app-footer__icon",
            href: ei.WZ.whatsApp,
            target: "_blank",
            tooltipContent: e("WhatsApp"),
            children: (0, i.jsx)(eN.Z, { iconSize: "xs" }),
          });
        },
        ek = () => {
          let {
              currentLang: e = "EN",
              localize: t,
              switchLanguage: n,
            } = (0, O.T_)(),
            { hideModal: l, isModalOpenFor: o, showModal: a } = x(),
            { data: s } = (0, p.Z)(!0),
            { cs_chat_whatsapp: r } = s;
          return (0, i.jsxs)("footer", {
            className: "app-footer",
            children: [
              (0, i.jsx)(er, {}),
              (0, i.jsx)(Y, {}),
              (0, i.jsx)(eh, {
                openLanguageSettingModal: () => a("DesktopLanguagesModal"),
              }),
              (0, i.jsxs)("div", {
                style: { display: "none" },
                children: [
                  (0, i.jsx)(ed, {}),
                  (0, i.jsx)("div", { className: "app-footer__vertical-line" }),
                  (0, i.jsx)(Y, {}),
                  (0, i.jsx)(W, {}),
                  (0, i.jsx)(ef, {}),
                  (0, i.jsx)(ee, {}),
                  (0, i.jsx)(q, {}),
                  r && (0, i.jsx)(eI, {}),
                ],
              }),
              (0, i.jsx)("div", { className: "app-footer__vertical-line" }),
              (0, i.jsxs)("div", {
                className: "app-footer__social-links",
                children: [
                  (0, i.jsx)("a", {
                    href: "https://t.me/+YxTWcTntIK4zNTI8",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "app-footer__social-link",
                    children: (0, i.jsx)("span", {
                      className: "icon-telegram",
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("path", {
                          fill: "currentColor",
                          d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("a", {
                    href: "https://youtube.com/@mrtogetherwewin?si=_Hm4MtJMucvDpC-E",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "app-footer__social-link",
                    children: (0, i.jsx)("span", {
                      className: "icon-youtube",
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("path", {
                          fill: "currentColor",
                          d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("a", {
                    href: "https://www.tiktok.com/@dollarprinter.com?_t=ZM-8uUSTJjTmti&_r=1",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "app-footer__social-link",
                    children: (0, i.jsx)("span", {
                      className: "icon-tiktok",
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("path", {
                          fill: "currentColor",
                          d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("a", {
                    href: "https://www.instagram.com/chosen_dollar_printer_fx_?igsh=NHdvZGpsZTZoc3U=",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "app-footer__social-link",
                    children: (0, i.jsx)("span", {
                      className: "icon-instagram",
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("path", {
                          fill: "currentColor",
                          d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
                        }),
                      }),
                    }),
                  }),
                  (0, i.jsx)("a", {
                    href: "https://whatsapp.com/channel/0029Vb6XXDE8aKvIEKj8KD2o",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "app-footer__social-link",
                    children: (0, i.jsx)("span", {
                      className: "icon-whatsapp",
                      children: (0, i.jsx)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        width: "24",
                        height: "24",
                        children: (0, i.jsx)("path", {
                          fill: "currentColor",
                          d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
                        }),
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", { className: "app-footer__vertical-line" }),
              (0, i.jsx)(eC, {}),
              (0, i.jsx)("div", { className: "app-footer__vertical-line" }),
              (0, i.jsx)(ex, {}),
              (0, i.jsx)(el, {}),
              (0, i.jsx)("style", {
                children: `
                    /* Hide the existing icons shown in the image */
                    .app-footer img[src*="deriv.png"],
                    .app-footer img[src*="facebook.png"],
                    .app-footer img[src*="twitter.png"],
                    .app-footer img[src*="instagram.png"] {
                        display: none !important;
                    }
                    
                    /* Style for the new social icons */
                    .app-footer__social-links {
                        display: flex;
                        align-items: center;
                        gap: 15px;
                    }
                    
                    .app-footer__social-link {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 15px;
                        height: 15px;
                        color: inherit;
                        transition: opacity 0.3s;
                    }
                    
                    .app-footer__social-link:hover {
                        opacity: 0.7;
                    }/* Enhanced styling for social icons in footer */
.app-footer__social-links {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px; /* More balanced spacing between icons */
    padding: 0 8px;
}

.app-footer__social-link {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px; /* Consistent sizing */
    height: 20px;
    color: #b2b2b2; /* Softer color that matches footer */
    transition: all 0.2s ease-in-out;
    opacity: 0.85; /* Slightly dimmed by default */
}

.app-footer__social-link:hover {
    opacity: 1;
    transform: scale(1.1); /* Subtle grow effect on hover */
    color: #ffffff; /* Brighter on hover */
}

.app-footer__social-link svg {
    width: 16px; /* Smaller icon size */
    height: 16px;
}

/* Responsive adjustments */
@media (max-width: 768px) {
    .app-footer__social-links {
        gap: 14px;
    }
    
    .app-footer__social-link svg {
        width: 14px;
        height: 14px;
    }
}

                `,
              }),
              o("DesktopLanguagesModal") &&
                (0, i.jsx)(P.u, {
                  headerTitle: t("Select Language"),
                  isModalOpen: !0,
                  languages: D,
                  onClose: l,
                  onLanguageSwitch: (e) => {
                    n(e),
                      l(),
                      window.location.replace(v()),
                      window.location.reload();
                  },
                  selectedLanguage: e,
                }),
            ],
          });
        };
      var eZ = n(45221);
      let ez = {
          aud: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyAudIcon }))
          ),
          bch: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyBchIcon }))
          ),
          btc: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyBtcIcon }))
          ),
          busd: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyBusdIcon }))
          ),
          dai: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyDaiIcon }))
          ),
          eth: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEthIcon }))
          ),
          eur: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEurIcon }))
          ),
          "eur-check": (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEurIcon }))
          ),
          eurs: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEursIcon }))
          ),
          eusdt: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdtIcon }))
          ),
          gbp: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyGbpIcon }))
          ),
          idk: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyIdkIcon }))
          ),
          ltc: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyLtcIcon }))
          ),
          pax: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyPaxIcon }))
          ),
          tusd: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyTusdIcon }))
          ),
          tusdt: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdtIcon }))
          ),
          unknown: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyPlaceholderIcon }))
          ),
          usd: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdIcon }))
          ),
          usdc: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdcIcon }))
          ),
          usdk: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdkIcon }))
          ),
          ust: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUsdtIcon }))
          ),
          virtual: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyDemoIcon }))
          ),
          xrp: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyXrpIcon }))
          ),
          algo: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyAlgoIcon }))
          ),
          avax: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyAvaxIcon }))
          ),
          bat: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyBatIcon }))
          ),
          bnb: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyBnbIcon }))
          ),
          dash: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyDashIcon }))
          ),
          doge: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyDogeIcon }))
          ),
          dot: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyDotIcon }))
          ),
          eos: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEosIcon }))
          ),
          etc: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyEtcIcon }))
          ),
          fil: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyFilIcon }))
          ),
          iota: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyIotaIcon }))
          ),
          link: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyLinkIcon }))
          ),
          matic: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyMaticIcon }))
          ),
          mkr: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyMkrIcon }))
          ),
          mcd: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyMultiCollateralDaiIcon }))
          ),
          neo: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyNeoIcon }))
          ),
          none: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyNoneIcon }))
          ),
          omg: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyOmgIcon }))
          ),
          p2p: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyP2PIcon }))
          ),
          scd: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencySingleCollateralDaiIcon }))
          ),
          sol: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencySolIcon }))
          ),
          terra: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyTerraIcon }))
          ),
          trx: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyTrxIcon }))
          ),
          uni: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyUniIcon }))
          ),
          xlm: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyXlmIcon }))
          ),
          xmr: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyXmrIcon }))
          ),
          xtz: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyXtzIcon }))
          ),
          zec: (0, l.lazy)(() =>
            n
              .e("609")
              .then(n.bind(n, 19673))
              .then((e) => ({ default: e.CurrencyZecIcon }))
          ),
        },
        eL = (e) => {
          let { currency: t, isVirtual: n } = e,
            o = n
              ? ez.virtual
              : ez[null == t ? void 0 : t.toLowerCase()] || ez.unknown;
          return (0, i.jsx)(l.Suspense, {
            fallback: null,
            children: (0, i.jsx)(o, { iconSize: "sm" }),
          });
        };
      var eS = n(79649);
      let eM = (e) => {
        var t;
        let { allBalanceData: n } = e,
          { accountList: o, activeLoginid: a } = (0, eS.T)(),
          s = (0, l.useMemo)(
            () => (null == o ? void 0 : o.find((e) => e.loginid === a)),
            [a, o]
          ),
          r =
            null == n
              ? void 0
              : null === (t = n.accounts) || void 0 === t
              ? void 0
              : t[(null == s ? void 0 : s.loginid) ?? ""];
        return {
          data: (0, l.useMemo)(() => {
            var e, t;
            return s
              ? {
                  ...s,
                  balance:
                    (0, u.oC5)(
                      null == r
                        ? void 0
                        : null === (e = r.balance) || void 0 === e
                        ? void 0
                        : e.toFixed((0, u.i4S)(r.currency))
                    ) ?? "0",
                  currencyLabel: (null == s ? void 0 : s.is_virtual)
                    ? (0, O.NC)("Demo")
                    : null == s
                    ? void 0
                    : s.currency,
                  icon: (0, i.jsx)(eL, {
                    currency:
                      null == s
                        ? void 0
                        : null === (t = s.currency) || void 0 === t
                        ? void 0
                        : t.toLowerCase(),
                    isVirtual: !!(null == s ? void 0 : s.is_virtual),
                  }),
                  isVirtual: !!(null == s ? void 0 : s.is_virtual),
                  isActive: (null == s ? void 0 : s.loginid) === a,
                }
              : void 0;
          }, [s, a, n]),
        };
      };
      var eT = n(69330),
        eE = n(77898),
        eF = n(16857);
      let eA = () => {
        let { isDesktop: e } = (0, h.F)();
        return e
          ? (0, i.jsx)("a", {
              className: "app-header__logo custom-logo",
              href: u.xOw.deriv_com,
              target: "_blank",
              children: (0, i.jsx)("img", {
                src: "/assetsnew/belex.png",
                alt: "Belex Trading",
                className: "custom-logo__image",
              }),
            })
          : null;
      };
      var eR = n(24561);
      let eD = (e) => {
          let { isMobile: t } = e;
          return (0, i.jsx)(i.Fragment, {
            children: t
              ? (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("circle", { cx: "14", cy: "22", r: "13" }),
                    (0, i.jsx)("rect", {
                      height: "7",
                      rx: "4",
                      ry: "4",
                      width: "76",
                      x: "35",
                      y: "19",
                    }),
                    (0, i.jsx)("rect", {
                      height: "32",
                      rx: "4",
                      ry: "4",
                      width: "82",
                      x: "120",
                      y: "6",
                    }),
                  ],
                })
              : (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)("circle", { cx: "14", cy: "22", r: "12" }),
                    (0, i.jsx)("circle", { cx: "58", cy: "22", r: "12" }),
                    (0, i.jsx)("rect", {
                      height: "7",
                      rx: "4",
                      ry: "4",
                      width: "76",
                      x: "150",
                      y: "20",
                    }),
                    (0, i.jsx)("circle", { cx: "118", cy: "24", r: "13" }),
                    (0, i.jsx)("rect", {
                      height: "30",
                      rx: "4",
                      ry: "4",
                      width: "1",
                      x: "87",
                      y: "8",
                    }),
                    (0, i.jsx)("rect", {
                      height: "32",
                      rx: "4",
                      ry: "4",
                      width: "82",
                      x: "250",
                      y: "8",
                    }),
                  ],
                }),
          });
        },
        eO = (e) => {
          let { isMobile: t, speed: n } = e;
          return (0, i.jsx)(eR.ZP, {
            "data-testid": "dt_accounts_info_loader",
            height: t ? 42 : 46,
            speed: n,
            width: t ? 216 : 350,
            backgroundColor: "var(--general-section-1)",
            foregroundColor: "var(--general-hover)",
            children: (0, i.jsx)(eD, { isMobile: t }),
          });
        };
      var eP = n(30394),
        eU = n(42457),
        eB = n(33281),
        eH = n(35008),
        eX = n(63387),
        eV = n.n(eX);
      let eq = (e) => {
        let { width: t, height: n } = e;
        return (0, i.jsx)("div", {
          className: "skeleton",
          style: { width: t, height: n },
        });
      };
      var eK = n(44884),
        eW = n(37528);
      let e$ = {
          currency: " ",
          currencyLabel: "Options & Multipliers",
          is_virtual: 1,
          loginid: "",
          is_disabled: !1,
          balance: "",
          icon: (0, i.jsx)(Q.Z, { width: 24, height: 24 }),
          isActive: !1,
          isVirtual: !0,
        },
        eG = (e) => Number(e.replace(/,/g, "")),
        eJ = () =>
          (0, i.jsx)(eW.i, {
            color: "var(--general-section-2)",
            height: "4px",
          }),
        eY = (e) => {
          let { oAuthLogout: t, loginid: n, is_logging_out: l } = e,
            o =
              (null == n ? void 0 : n.includes("CR")) ||
              (null == n ? void 0 : n.includes("MF"));
          return (0, i.jsxs)("div", {
            className: "",
            children: [
              (0, i.jsx)(eH.T.TradersHubLink, {
                href: u.xOw.traders_hub,
                children: (0, O.NC)(
                  "Looking for CFD accounts? Go to Trader's Hub"
                ),
              }),
              (0, i.jsx)(eJ, {}),
              (0, i.jsxs)("div", {
                className: eV()("account-switcher-footer__actions", {
                  "account-switcher-footer__actions--hide-manage-button": !o,
                }),
                children: [
                  o &&
                    (0, i.jsx)(eZ.Z, {
                      id: "manage-button",
                      className: "manage-button",
                      onClick: () => location.replace("https://app.deriv.com"),
                      children: (0, i.jsx)(O.Xx, {
                        i18n_default_text: "Manage accounts",
                      }),
                    }),
                  (0, i.jsx)(eH.T.Footer, {
                    children: l
                      ? (0, i.jsx)("div", {
                          className: "deriv-account-switcher__logout--loader",
                          children: (0, i.jsx)(eq, {
                            width: "120px",
                            height: "12px",
                          }),
                        })
                      : (0, i.jsxs)("div", {
                          id: "dt_logout_button",
                          className: "deriv-account-switcher__logout",
                          onClick: t,
                          children: [
                            (0, i.jsx)(en.Z, {
                              color: "prominent",
                              size: "xs",
                              align: "left",
                              className: "deriv-account-switcher__logout-text",
                              children: (0, O.NC)("Logout"),
                            }),
                            (0, i.jsx)(eK.Z, {
                              iconSize: "xs",
                              fill: "var(--text-general)",
                              className: "icon-general-fill-path",
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            ],
          });
        },
        eQ = (e) => {
          let {
            tabs_labels: t,
            modifiedVRTCRAccountList: n,
            switchAccount: l,
            isVirtual: a,
            activeLoginId: s,
            oAuthLogout: c,
            is_logging_out: d,
          } = e;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(
                eH.T.AccountsPanel,
                {
                  isOpen: !0,
                  title: (0, O.NC)("Deriv account"),
                  className: "account-switcher-panel",
                  children:
                    n &&
                    n.map((e) =>
                      (0, i.jsx)(
                        "span",
                        {
                          className: (0, o.Z)("account-switcher__item", {
                            "account-switcher__item--disabled": e.is_disabled,
                          }),
                          children: (0, i.jsx)(eH.T.AccountsItem, {
                            account: e,
                            onSelectAccount: () => {
                              e.is_disabled || l(e.loginid);
                            },
                            onResetBalance:
                              a && s === e.loginid && 1e4 !== eG(e.balance)
                                ? () => {
                                    var e;
                                    null === r.api_base ||
                                      void 0 === r.api_base ||
                                      null === (e = r.api_base.api) ||
                                      void 0 === e ||
                                      e.send({ topup_virtual: 1 });
                                  }
                                : void 0,
                          }),
                        },
                        e.loginid
                      )
                    ),
                },
                t.demo.toLowerCase()
              ),
              (0, i.jsx)(eJ, {}),
              (0, i.jsx)(eY, { loginid: s, oAuthLogout: c, is_logging_out: d }),
            ],
          });
        },
        e0 = (e) => {
          let {
              isVirtual: t,
              tabs_labels: n,
              modifiedMFAccountList: l,
              switchAccount: a,
              is_low_risk_country: s,
            } = e,
            r =
              (null == l ? void 0 : l.length) !== 0 && s
                ? (0, O.NC)("Eu Deriv accounts")
                : (0, O.NC)("Deriv accounts");
          return (0, i.jsx)(
            eH.T.AccountsPanel,
            {
              isOpen: !0,
              title: r,
              className: "account-switcher-panel",
              children: l.map(
                (e) => (
                  (e.currencyLabel = (0, O.NC)("Multipliers")),
                  (0, i.jsx)(
                    "span",
                    {
                      className: (0, o.Z)("account-switcher__item", {
                        "account-switcher__item--disabled": e.is_disabled,
                      }),
                      children: (0, i.jsx)(eH.T.AccountsItem, {
                        account: e,
                        onSelectAccount: () => {
                          e.is_disabled || a(e.loginid);
                        },
                      }),
                    },
                    e.loginid
                  )
                )
              ),
            },
            t ? n.real.toLowerCase() : n.demo.toLowerCase()
          );
        };
      var e1 = n(11527);
      let e2 = (e) => {
          var t, n;
          let { isVirtual: l, tabs_labels: o, is_low_risk_country: a } = e;
          return a
            ? (0, i.jsx)(
                eH.T.AccountsPanel,
                {
                  isOpen: !0,
                  title: (0, O.NC)("Non-Eu Deriv account"),
                  className: "account-switcher-panel",
                  children: (0, i.jsxs)("div", {
                    className: "account-switcher-panel__no-eu-accounts",
                    children: [
                      (0, i.jsx)(eH.T.AccountsItem, {
                        account: e$,
                        onSelectAccount: () => {},
                      }),
                      (0, i.jsx)(eJ, {}),
                      (0, i.jsx)(e1.z, {
                        id: "add-button",
                        className: "add-button",
                        onClick: () => location.replace(u.xOw.traders_hub),
                        children: (0, i.jsx)(O.Xx, {
                          i18n_default_text: "Add",
                        }),
                      }),
                    ],
                  }),
                },
                l
                  ? null == o
                    ? void 0
                    : null === (n = o.real) || void 0 === n
                    ? void 0
                    : n.toLowerCase()
                  : null == o
                  ? void 0
                  : null === (t = o.demo) || void 0 === t
                  ? void 0
                  : t.toLowerCase()
              )
            : null;
        },
        e4 = (e) => {
          let {
            isVirtual: t,
            tabs_labels: n,
            modifiedCRAccountList: l,
            modifiedMFAccountList: a,
            is_low_risk_country: s,
            switchAccount: r,
          } = e;
          if (!s && l && (null == l ? void 0 : l.length) === 0) return null;
          let c =
            (null == a ? void 0 : a.length) === 0
              ? (0, O.NC)("Deriv accounts")
              : (0, O.NC)("Non-Eu Deriv account");
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)(
              eH.T.AccountsPanel,
              {
                isOpen: !0,
                title: c,
                className: "account-switcher-panel",
                style: { maxHeight: "220px" },
                children: l.map((e) =>
                  (0, i.jsx)(
                    "span",
                    {
                      className: (0, o.Z)("account-switcher__item", {
                        "account-switcher__item--disabled": e.is_disabled,
                      }),
                      children: (0, i.jsx)(eH.T.AccountsItem, {
                        account: e,
                        onSelectAccount: () => {
                          e.is_disabled || r(e.loginid);
                        },
                      }),
                    },
                    e.loginid
                  )
                ),
              },
              t
                ? null == n
                  ? void 0
                  : n.real.toLowerCase()
                : n.demo.toLowerCase()
            ),
          });
        },
        e3 = (e) => {
          let {
              modifiedCRAccountList: t,
              modifiedMFAccountList: n,
              switchAccount: l,
              isVirtual: o,
              tabs_labels: a,
              is_low_risk_country: s,
              oAuthLogout: r,
              loginid: c,
              is_logging_out: d,
            } = e,
            h = t && (null == t ? void 0 : t.length) > 0,
            u = n && (null == n ? void 0 : n.length) > 0;
          return (0, i.jsxs)(i.Fragment, {
            children: [
              h
                ? (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(e4, {
                        modifiedCRAccountList: t,
                        modifiedMFAccountList: n,
                        switchAccount: l,
                        isVirtual: o,
                        tabs_labels: a,
                        is_low_risk_country: s,
                      }),
                      (0, i.jsx)(eJ, {}),
                    ],
                  })
                : (0, i.jsxs)(i.Fragment, {
                    children: [
                      (0, i.jsx)(e2, {
                        is_low_risk_country: s,
                        isVirtual: o,
                        tabs_labels: a,
                      }),
                      (0, i.jsx)(eJ, {}),
                    ],
                  }),
              u &&
                (0, i.jsxs)(i.Fragment, {
                  children: [
                    (0, i.jsx)(e0, {
                      modifiedMFAccountList: n,
                      switchAccount: l,
                      isVirtual: o,
                      tabs_labels: a,
                      is_low_risk_country: s,
                    }),
                    (0, i.jsx)(eJ, {}),
                  ],
                }),
              (0, i.jsx)(eY, { oAuthLogout: r, loginid: c, is_logging_out: d }),
            ],
          });
        };
      var e6 = n(17481);
      let e9 = (0, l.lazy)(() => n.e("932").then(n.bind(n, 67568))),
        e7 = { demo: (0, O.NC)("Demo"), real: (0, O.NC)("Real") },
        e8 = (e) => {
          var t;
          let {
              isVirtual: n,
              modifiedCRAccountList: o,
              modifiedMFAccountList: a,
              modifiedVRTCRAccountList: s,
              switchAccount: r,
              activeLoginId: d,
              client: h,
            } = e,
            { oAuthLogout: u } = (0, c.q)({
              handleLogout: async () => h.logout(),
              client: h,
            }),
            p = (0, e6.Gz)().includes(
              (null === (t = h.account_settings) || void 0 === t
                ? void 0
                : t.country_code) ?? ""
            ),
            m = !!n;
          return ((0, l.useEffect)(() => {
            var e, t;
            let i =
              null ===
                (e = document.getElementsByClassName(
                  "account-switcher-panel"
                )) || void 0 === e
                ? void 0
                : e[0];
            !n &&
              i &&
              ((i.style.maxHeight = "70vh"),
              null === (t = (0, eU._)(".deriv-accordion__content", i)) ||
                void 0 === t ||
                t.then((e) => {
                  e && (e.style.maxHeight = "70vh");
                }));
          }, [n]),
          m)
            ? (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(eQ, {
                  modifiedVRTCRAccountList: s,
                  switchAccount: r,
                  activeLoginId: d,
                  isVirtual: m,
                  tabs_labels: e7,
                  oAuthLogout: u,
                  is_logging_out: h.is_logging_out,
                }),
              })
            : (0, i.jsx)(e3, {
                modifiedCRAccountList: o,
                modifiedMFAccountList: a,
                switchAccount: r,
                isVirtual: m,
                tabs_labels: e7,
                is_low_risk_country: p,
                oAuthLogout: u,
                loginid: d,
                is_logging_out: h.is_logging_out,
              });
        },
        e5 = (0, U.Pi)((e) => {
          var t, n;
          let { activeAccount: o } = e,
            { isDesktop: a } = (0, h.F)(),
            { accountList: s } = (0, eS.T)(),
            { ui: c, run_panel: d, client: p } = (0, eb.oR)(),
            { accounts: m } = p,
            {
              toggleAccountsDialog: g,
              is_accounts_switcher_on: x,
              account_switcher_disabled_message: v,
            } = c,
            { is_stop_button_visible: f } = d,
            _ = Object.keys(m).some((e) => "wallet" === m[e].account_category),
            w = (0, l.useMemo)(
              () =>
                null == s
                  ? void 0
                  : s.map((e) => {
                      var t, n, l, a, s, r, c, d;
                      return {
                        ...e,
                        balance: (0, u.oC5)(
                          (null === (a = p.all_accounts_balance) || void 0 === a
                            ? void 0
                            : null === (l = a.accounts) || void 0 === l
                            ? void 0
                            : null ===
                                (n = l[null == e ? void 0 : e.loginid]) ||
                              void 0 === n
                            ? void 0
                            : null === (t = n.balance) || void 0 === t
                            ? void 0
                            : t.toFixed((0, u.i4S)(e.currency))) ?? "0"
                        ),
                        currencyLabel: (null == e ? void 0 : e.is_virtual)
                          ? e7.demo
                          : (null === (c = p.website_status) || void 0 === c
                              ? void 0
                              : null === (r = c.currencies_config) ||
                                void 0 === r
                              ? void 0
                              : null ===
                                  (s = r[null == e ? void 0 : e.currency]) ||
                                void 0 === s
                              ? void 0
                              : s.name) ?? (null == e ? void 0 : e.currency),
                        icon: (0, i.jsx)(eL, {
                          currency:
                            null == e
                              ? void 0
                              : null === (d = e.currency) || void 0 === d
                              ? void 0
                              : d.toLowerCase(),
                          isVirtual: !!(null == e ? void 0 : e.is_virtual),
                        }),
                        isVirtual: !!(null == e ? void 0 : e.is_virtual),
                        isActive:
                          (null == e ? void 0 : e.loginid) ===
                          (null == o ? void 0 : o.loginid),
                      };
                    }),
              [
                s,
                null === (t = p.all_accounts_balance) || void 0 === t
                  ? void 0
                  : t.accounts,
                null === (n = p.website_status) || void 0 === n
                  ? void 0
                  : n.currencies_config,
                null == o ? void 0 : o.loginid,
              ]
            ),
            b = (0, l.useMemo)(
              () =>
                (null == w
                  ? void 0
                  : w.filter((e) => {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.loginid) || void 0 === t
                        ? void 0
                        : t.includes("CR");
                    })) ?? [],
              [w]
            ),
            j = (0, l.useMemo)(
              () =>
                (null == w
                  ? void 0
                  : w.filter((e) => {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.loginid) || void 0 === t
                        ? void 0
                        : t.includes("MF");
                    })) ?? [],
              [w]
            ),
            y = (0, l.useMemo)(
              () =>
                (null == w
                  ? void 0
                  : w.filter((e) => {
                      var t;
                      return null == e
                        ? void 0
                        : null === (t = e.loginid) || void 0 === t
                        ? void 0
                        : t.includes("VRT");
                    })) ?? [],
              [w]
            ),
            C = async (e) => {
              if (e.toString() === (null == o ? void 0 : o.loginid)) return;
              let t = JSON.parse(localStorage.getItem("accountsList") ?? "{}")[
                e
              ];
              if (!t) return;
              localStorage.setItem("authToken", t),
                localStorage.setItem("active_loginid", e.toString()),
                await (null === r.api_base || void 0 === r.api_base
                  ? void 0
                  : r.api_base.init(!0));
              let n = new URLSearchParams(window.location.search),
                i = w.find((t) => t.loginid === e.toString());
              if (!i) return;
              let l = i.is_virtual ? "demo" : i.currency;
              n.set("account", l),
                window.history.pushState(
                  {},
                  "",
                  `${window.location.pathname}?${n.toString()}`
                );
            };
          return (
            o &&
            (_
              ? (0, i.jsx)(l.Suspense, {
                  fallback: (0, i.jsx)(eB.a, {}),
                  children: (0, i.jsx)(e9, {
                    is_dialog_on: x,
                    toggleDialog: g,
                  }),
                })
              : (0, i.jsx)(eP.Z, {
                  className: "run-panel__info",
                  classNameBubble: "run-panel__info--bubble",
                  alignment: "bottom",
                  message: v,
                  zIndex: "5",
                  children: (0, i.jsxs)(eH.T, {
                    activeAccount: o,
                    isDisabled: f,
                    tabsLabels: e7,
                    modalContentStyle: {
                      content: { top: a ? "30%" : "50%", borderRadius: "10px" },
                    },
                    children: [
                      (0, i.jsx)(eH.T.Tab, {
                        title: e7.real,
                        children: (0, i.jsx)(e8, {
                          modifiedCRAccountList: b,
                          modifiedMFAccountList: j,
                          switchAccount: C,
                          activeLoginId: null == o ? void 0 : o.loginid,
                          client: p,
                        }),
                      }),
                      (0, i.jsx)(eH.T.Tab, {
                        title: e7.demo,
                        children: (0, i.jsx)(e8, {
                          modifiedVRTCRAccountList: y,
                          switchAccount: C,
                          isVirtual: !0,
                          activeLoginId: null == o ? void 0 : o.loginid,
                          client: p,
                        }),
                      }),
                    ],
                  }),
                }))
          );
        });
      var te = n(39523),
        tt = n(38051),
        tn = n(39590),
        ti = n(96819),
        tl = n(14393),
        to = n(34215),
        ta = n(44741);
      let ts = [
          {
            active: !1,
            buttonIcon: (0, i.jsx)(tl.Z, { height: 25, width: 114.97 }),
            description: (0, O.NC)(
              "A whole new trading experience on a powerful yet easy to use platform."
            ),
            href: u.xOw.trade,
            icon: (0, i.jsx)(tl.Z, { height: 32, width: 148 }),
            showInEU: !0,
          },
          {
            active: !0,
            buttonIcon: (0, i.jsx)(to.Z, { height: 25, width: 94 }),
            description: (0, O.NC)(
              "Automated trading at your fingertips. No coding needed."
            ),
            href: u.xOw.bot,
            icon: (0, i.jsx)(to.Z, { height: 32, width: 121 }),
            showInEU: !1,
          },
          {
            active: !1,
            buttonIcon: (0, i.jsx)(ta.Z, { height: 24, width: 115 }),
            description: (0, O.NC)(
              "Trade the world's markets with our popular user-friendly platform."
            ),
            href: u.xOw.smarttrader,
            icon: (0, i.jsx)(ta.Z, { height: 32, width: 153 }),
            showInEU: !1,
          },
        ],
        tr = {
          as: "a",
          href: u.xOw.traders_hub,
          icon: (0, i.jsx)(tt.Z, { iconSize: "xs" }),
          label: "Trader's Hub",
          style: { display: "none" },
        },
        tc = [
          {
            as: "a",
            href: u.xOw.reports,
            icon: (0, i.jsx)(tn.Z, { iconSize: "xs" }),
            label: (0, O.NC)("Reports"),
            style: { display: "none" },
          },
          {
            as: "a",
            href: u.xOw.cashier,
            icon: (0, i.jsx)(ti.Z, { iconSize: "xs" }),
            label: (0, O.NC)("Cashier"),
            style: { display: "none" },
          },
        ],
        td = (0, U.Pi)(() => {
          let { localize: e } = (0, O.T_)(),
            { isDesktop: t } = (0, h.F)(),
            n = (0, eb.oR)();
          if (!n) return null;
          let { is_logged_in: l } = n.client;
          return (0, i.jsx)(i.Fragment, {
            children:
              l &&
              (t
                ? tc.map((t) => {
                    let { as: n, href: l, icon: o, label: a } = t;
                    return (0, i.jsx)(
                      te.s,
                      {
                        as: n,
                        className: "app-header__menu",
                        href: l,
                        leftComponent: o,
                        children: (0, i.jsx)(ey.x, { children: e(a) }),
                      },
                      a
                    );
                  })
                : (0, i.jsx)(
                    te.s,
                    {
                      as: tc["1"].as,
                      className: "flex gap-2 p-5",
                      href: tc["1"].href,
                      leftComponent: tc["1"].icon,
                      children: (0, i.jsx)(ey.x, {
                        children: e(tc["1"].label),
                      }),
                    },
                    tc["1"].label
                  )),
          });
        });
      td.TradershubLink = () =>
        (0, i.jsx)(
          te.s,
          {
            as: "a",
            className: "app-header__menu",
            href: tr.href,
            leftComponent: tr.icon,
            children: (0, i.jsx)(ey.x, { children: tr.label }),
          },
          tr.label
        );
      var th = n(17934),
        tu = n(41301),
        tp = n(68782);
      let tm = (e) => {
        let { buttonText: t, onClick: n } = e,
          { isDesktop: l } = (0, h.F)();
        return (0, i.jsxs)("button", {
          className: "flex items-center w-full pt-8 p-[3.2rem]",
          onClick: n,
          children: [
            (0, i.jsx)(tp.Z, { iconSize: "xs", fill: "var(--text-general)" }),
            (0, i.jsx)(ey.x, {
              className: "ml-[1.6rem]",
              size: l ? "md" : "lg",
              weight: "bold",
              children: t,
            }),
          ],
        });
      };
      var tg = n(48796),
        tx = n(16128);
      let tv = () => {
        let { localize: e } = (0, O.T_)();
        return (0, i.jsx)(tg.L, {
          bottomLinkLabel: e("Looking for CFDs? Go to Trader’s Hub"),
          buttonProps: { icon: ts["1"].buttonIcon },
          bottomLinkProps: { href: u.xOw.traders_hub },
          children: ts.map((t) => {
            let { active: n, description: l, href: o, icon: a } = t;
            return (0, i.jsx)(
              tx.X,
              {
                active: n,
                className: "platform-switcher",
                description: e("{{description}}", { description: l }),
                href: window.location.search
                  ? `${o}/${window.location.search}`
                  : o,
                icon: a,
              },
              l
            );
          }),
        });
      };
      var tf = n(68534),
        t_ = n(93217);
      let tw = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
            }),
          }),
        tb = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z",
            }),
          }),
        tj = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z",
            }),
          }),
        ty = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z",
            }),
          }),
        tC = () =>
          (0, i.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "24",
            height: "24",
            fill: "currentColor",
            children: (0, i.jsx)("path", {
              d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
            }),
          }),
        tN = (e) => {
          let { localize: t } = (0, O.T_)(),
            { is_dark_mode_on: n, toggleTheme: l } = (0, $.Z)(),
            { oAuthLogout: o } = (0, c.q)({
              handleLogout: async () => (null == e ? void 0 : e.logout()),
              client: e,
            });
          return {
            config: [
              [
                {
                  as: "button",
                  label: t("Dark theme"),
                  LeftComponent: tf.Z,
                  RightComponent: (0, i.jsx)(t_.Z, { value: n, onChange: l }),
                },
              ],
              [
                {
                  as: "a",
                  href: "https://t.me/+YxTWcTntIK4zNTI8",
                  target: "_blank",
                  label: t("Telegram"),
                  LeftComponent: tw,
                },
                {
                  as: "a",
                  href: "https://youtube.com/@mrtogetherwewin?si=_Hm4MtJMucvDpC-E",
                  target: "_blank",
                  label: t("YouTube"),
                  LeftComponent: tb,
                },
                {
                  as: "a",
                  href: "https://www.tiktok.com/@dollarprinter.com?_t=ZM-8uUSTJjTmti&_r=1",
                  target: "_blank",
                  label: t("TikTok"),
                  LeftComponent: ty,
                },
                {
                  as: "a",
                  href: "https://www.instagram.com/chosen_dollar_printer_fx_?igsh=NHdvZGpsZTZoc3U=",
                  target: "_blank",
                  label: t("Instagram"),
                  LeftComponent: tj,
                },
                {
                  as: "a",
                  href: "https://whatsapp.com/channel/0029Vb6XXDE8aKvIEKj8KD2o",
                  target: "_blank",
                  label: t("WhatsApp"),
                  LeftComponent: tC,
                },
              ],
            ],
          };
        },
        tI = (0, U.Pi)(() => {
          let { isDesktop: e } = (0, h.F)(),
            { client: t } = (0, eb.oR)(),
            n = e ? "sm" : "md",
            { config: l } = tN(t);
          return (0, i.jsxs)("div", {
            className: "mobile-menu__content",
            children: [
              (0, i.jsx)("div", {
                className: "mobile-menu__content__platform",
                children: (0, i.jsx)(tv, {}),
              }),
              (0, i.jsx)("div", {
                className: "mobile-menu__content__items",
                children: l.map((e, t) => {
                  let l = e.find((e) => {
                    let { removeBorderBottom: t } = e;
                    return t;
                  });
                  return (0, i.jsx)(
                    "div",
                    {
                      className: (0, o.Z)(
                        "mobile-menu__content__items--padding",
                        { "mobile-menu__content__items--bottom-border": !l }
                      ),
                      "data-testid": "dt_menu_item",
                      children: e.map((e) => {
                        let {
                            LeftComponent: t,
                            RightComponent: l,
                            as: a,
                            href: s,
                            label: r,
                            onClick: c,
                            target: d,
                          } = e,
                          h = "Deriv.com" === r;
                        return "a" === a
                          ? (0, i.jsx)(
                              te.s,
                              {
                                as: "a",
                                className: (0, o.Z)(
                                  "mobile-menu__content__items__item",
                                  { "mobile-menu__content__items__icons": !h }
                                ),
                                disableHover: !0,
                                href: s,
                                leftComponent: (0, i.jsx)(t, {
                                  className:
                                    "mobile-menu__content__items--right-margin",
                                  height: 16,
                                  width: 16,
                                }),
                                target: d,
                                children: (0, i.jsx)(ey.x, {
                                  size: n,
                                  children: r,
                                }),
                              },
                              r
                            )
                          : (0, i.jsx)(
                              te.s,
                              {
                                as: "button",
                                className: (0, o.Z)(
                                  "mobile-menu__content__items__item",
                                  { "mobile-menu__content__items__icons": !h }
                                ),
                                disableHover: !0,
                                leftComponent: (0, i.jsx)(t, {
                                  className:
                                    "mobile-menu__content__items--right-margin",
                                  iconSize: "xs",
                                }),
                                onClick: c,
                                rightComponent: l,
                                children: (0, i.jsx)(ey.x, {
                                  size: n,
                                  children: r,
                                }),
                              },
                              r
                            );
                      }),
                    },
                    t
                  );
                }),
              }),
            ],
          });
        }),
        tk = (e) => {
          let { hideLanguageSetting: t, openLanguageSetting: n } = e,
            { currentLang: o, localize: a } = (0, O.T_)(),
            { isDesktop: s } = (0, h.F)(),
            r = (0, l.useMemo)(() => {
              var e;
              return null ===
                (e = D.find((e) => {
                  let { code: t } = e;
                  return t === o;
                })) || void 0 === e
                ? void 0
                : e.placeholderIconInMobile;
            }, [o]);
          return (0, i.jsxs)("div", {
            className: "mobile-menu__header",
            children: [
              (0, i.jsx)(ey.x, {
                size: s ? "md" : "lg",
                weight: "bold",
                children: a("Menu"),
              }),
              !t &&
                (0, i.jsxs)("button", {
                  className: "mobile-menu__header__language items-center",
                  onClick: n,
                  children: [
                    r,
                    (0, i.jsx)(ey.x, {
                      className: "ml-[0.4rem]",
                      size: s ? "xs" : "sm",
                      weight: "bold",
                      children: o,
                    }),
                  ],
                }),
            ],
          });
        };
      var tZ = n(89816);
      let tz = (e) => {
          let { onClick: t } = e;
          return (0, i.jsx)("button", {
            onClick: t,
            children: (0, i.jsx)(tZ.Z, {
              iconSize: "xs",
              fill: "var(--text-general)",
            }),
          });
        },
        tL = () => {
          let [e, t] = (0, l.useState)(!1),
            {
              currentLang: n = "EN",
              localize: o,
              switchLanguage: a,
            } = (0, O.T_)(),
            { hideModal: s, isModalOpenFor: r, showModal: c } = x(),
            { isDesktop: d } = (0, h.F)(),
            u = () => t(!1),
            p = !!r("MobileLanguagesDrawer");
          return d
            ? null
            : (0, i.jsxs)("div", {
                className: "mobile-menu",
                children: [
                  (0, i.jsx)("div", {
                    className: "mobile-menu__toggle",
                    children: (0, i.jsx)(tz, { onClick: () => t(!0) }),
                  }),
                  (0, i.jsxs)(th.d, {
                    isOpen: e,
                    onCloseDrawer: u,
                    width: "29.5rem",
                    children: [
                      (0, i.jsx)(th.d.Header, {
                        onCloseDrawer: u,
                        children: (0, i.jsx)(tk, {
                          hideLanguageSetting: p,
                          openLanguageSetting: () => c("MobileLanguagesDrawer"),
                        }),
                      }),
                      (0, i.jsx)(th.d.Content, {
                        children: p
                          ? (0, i.jsxs)(i.Fragment, {
                              children: [
                                (0, i.jsx)("div", {
                                  className: "mobile-menu__back-btn",
                                  children: (0, i.jsx)(tm, {
                                    buttonText: o("Language"),
                                    onClick: s,
                                  }),
                                }),
                                (0, i.jsx)(tu.I, {
                                  isOpen: !0,
                                  languages: D,
                                  onClose: s,
                                  onLanguageSwitch: (e) => {
                                    a(e),
                                      window.location.replace(v()),
                                      window.location.reload();
                                  },
                                  selectedLanguage: n,
                                  wrapperClassName:
                                    "mobile-menu__language-drawer",
                                }),
                              ],
                            })
                          : (0, i.jsx)(tI, {}),
                      }),
                      (0, i.jsxs)(th.d.Footer, {
                        className: "mobile-menu__footer",
                        children: [(0, i.jsx)(eC, {}), (0, i.jsx)(ex, {})],
                      }),
                    ],
                  }),
                ],
              });
        },
        tS = (0, U.Pi)(() => {
          let { isDesktop: e } = (0, h.F)(),
            { isAuthorizing: t, activeLoginid: n } = (0, eS.T)(),
            { client: a } = (0, eb.oR)() ?? {},
            s = (0, l.useRef)(null),
            [r, p] = (0, l.useState)({
              visible: !0,
              message:
                "\uD83D\uDD25 BREAKING: Free signals + proven strategies with a 90% win rate—only on my Telegram! Join now and level up your trades",
              type: "info",
            }),
            m = () => {
              p((e) => ({ ...e, visible: !1 }));
            },
            { data: g } = eM({
              allBalanceData: null == a ? void 0 : a.all_accounts_balance,
            }),
            { accounts: x } = a ?? {},
            v = Object.keys(x ?? {}).some(
              (e) => (null == x ? void 0 : x[e].account_category) === "wallet"
            ),
            { localize: f } = (0, O.T_)(),
            { isOAuth2Enabled: _ } = (0, c.q)(),
            w = () => {
              window.open("https://t.me/+YxTWcTntIK4zNTI8", "_blank");
            };
          return (
            (0, l.useEffect)(() => {
              let e = document.createElement("script");
              (e.src =
                "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js"),
                (e.async = !0),
                (e.innerHTML = JSON.stringify({
                  symbols: [
                    { proName: "FOREXCOM:SPXUSD", title: "S&P 500 Index" },
                    { proName: "FOREXCOM:NSXUSD", title: "US 100 Cash CFD" },
                    { proName: "FX_IDC:EURUSD", title: "EUR to USD" },
                    { proName: "BITSTAMP:BTCUSD", title: "Bitcoin" },
                    { proName: "BITSTAMP:ETHUSD", title: "Ethereum" },
                  ],
                  showSymbolLogo: !0,
                  isTransparent: !0,
                  displayMode: "regular",
                  colorTheme: "dark",
                  locale: "en",
                }));
              let t = s.current;
              return (
                t && t.appendChild(e),
                () => {
                  t && e.parentNode === t && t.removeChild(e);
                }
              );
            }, []),
            (0, i.jsxs)(i.Fragment, {
              children: [
                (0, i.jsxs)(eE.h, {
                  className: (0, o.Z)("app-header", {
                    "app-header--desktop": e,
                    "app-header--mobile": !e,
                  }),
                  children: [
                    (0, i.jsxs)(eF.i, {
                      variant: "left",
                      children: [
                        (0, i.jsx)(eA, {}),
                        (0, i.jsx)(tL, {}),
                        e && (0, i.jsx)(td.TradershubLink, {}),
                        e && (0, i.jsx)(tv, {}),
                        e && (0, i.jsx)(td, {}),
                        (0, i.jsx)(eZ.Z, {
                          className: "telegram-button",
                          has_effect: !0,
                          onClick: w,
                          tertiary: !0,
                          children: (0, i.jsxs)("span", {
                            className: "telegram-icon-wrapper",
                            children: [
                              (0, i.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                viewBox: "0 0 24 24",
                                width: "14",
                                height: "14",
                                style: { marginRight: e ? "6px" : "0" },
                                children: (0, i.jsx)("path", {
                                  fill: "currentColor",
                                  d: "M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.356 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z",
                                }),
                              }),
                              e &&
                                (0, i.jsx)(O.Xx, {
                                  i18n_default_text: "Telegram",
                                }),
                            ],
                          }),
                        }),
                        (0, i.jsx)(eZ.Z, {
                          className: "create-account-button",
                          has_effect: !0,
                          onClick: () => {
                            window.open(
                              "https://fastexchange.co.ke/",
                              "_blank"
                            );
                          },
                          primary: !0,
                          children: (0, i.jsx)(O.Xx, {
                            i18n_default_text: "deposit/withdraw",
                          }),
                        }),
                      ],
                    }),
                    (0, i.jsx)(eF.i, {
                      variant: "right",
                      children: t
                        ? (0, i.jsx)(eO, {
                            isLoggedIn: !0,
                            isMobile: !e,
                            speed: 3,
                          })
                        : n
                        ? (0, i.jsxs)(i.Fragment, {
                            children: [
                              e &&
                                (0, i.jsx)(X.u, {
                                  as: "a",
                                  href: u.xOw.personal_details,
                                  tooltipContent: f("Manage account settings"),
                                  tooltipPosition: "bottom",
                                  className: "app-header__account-settings",
                                  children: (0, i.jsx)(eT.Z, {
                                    className: "app-header__profile_icon",
                                  }),
                                }),
                              (0, i.jsx)(e5, { activeAccount: g }),
                              e &&
                                (v
                                  ? (0, i.jsx)(eZ.Z, {
                                      className: "manage-funds-button",
                                      has_effect: !0,
                                      text: f("Manage funds"),
                                      onClick: () =>
                                        window.location.assign(
                                          u.xOw.wallets_transfer
                                        ),
                                      primary: !0,
                                    })
                                  : (0, i.jsx)(eZ.Z, {
                                      primary: !0,
                                      onClick: () => {
                                        window.location.assign(
                                          u.xOw.cashier_deposit
                                        );
                                      },
                                      className: "deposit-button",
                                      children: f("Deposit"),
                                    })),
                            ],
                          })
                        : (0, i.jsxs)("div", {
                            className: "auth-actions",
                            children: [
                              (0, i.jsx)(eZ.Z, {
                                tertiary: !0,
                                onClick: async () => {
                                  _
                                    ? await (0, d.P6)({
                                        redirectCallbackUri: `${window.location.origin}/callback`,
                                      })
                                    : window.location.replace((0, u.O2o)());
                                },
                                children: (0, i.jsx)(O.Xx, {
                                  i18n_default_text: "Log in",
                                }),
                              }),
                              (0, i.jsx)(eZ.Z, {
                                primary: !0,
                                onClick: () => {
                                  window.open(
                                    "https://track.deriv.com/_SBDSiGetH54KqFKZ7JdnQ2Nd7ZgqdRLk/1/",
                                    "_blank"
                                  );
                                },
                                children: (0, i.jsx)(O.Xx, {
                                  i18n_default_text: "Sign up",
                                }),
                              }),
                            ],
                          }),
                    }),
                  ],
                }),
                r.visible &&
                  (0, i.jsxs)("div", {
                    className: "ticker-ribbon",
                    onClick: w,
                    children: [
                      (0, i.jsx)("div", {
                        className: "ticker-container",
                        children: (0, i.jsxs)("div", {
                          className: "ticker-content",
                          children: [
                            (0, i.jsx)("span", { children: r.message }),
                            (0, i.jsx)("span", { children: r.message }),
                          ],
                        }),
                      }),
                      (0, i.jsx)("button", {
                        className: "ticker-close-btn",
                        onClick: (e) => {
                          e.stopPropagation(), m();
                        },
                        children: "\xd7",
                      }),
                    ],
                  }),
                (0, i.jsx)("style", {
                  children: `
                    .telegram-button {
                        margin-right: 8px;
                        background-color: #ffff;
                        padding: 4px 8px !important; /* Smaller padding */
                        min-width: auto !important; /* Override any min-width */
                        height: auto !important; /* Override fixed height */
                    }

                    .telegram-icon-wrapper {
                        display: flex;
                        align-items: center;
                        font-size: 12px; /* Smaller text */
                    }

                    @media (max-width: 767px) {
                        .telegram-button {
                            padding: 4px !important; /* Even smaller padding on mobile */
                            width: 28px !important; /* Fixed width for icon-only */
                            height: 28px !important; /* Fixed height for icon-only */
                            border-radius: 50% !important; /* Make it circular on mobile */
                            display: flex;
                            justify-content: center;
                        }
                        
                        .telegram-button .telegram-icon-wrapper .i18n_default_text {
                            display: none; /* Hide the text on mobile */
                        }
                        
                        .telegram-icon-wrapper svg {
                            margin-right: 0 !important;
                        }
                    }
                    
                    /* Ticker-style Ribbon Styles */
                    .ticker-ribbon {
                        width: 100%;
                        height: 30px;
                        background-color: #d9000b;
                        color: #ffffff;
                        overflow: hidden;
                        position: relative;
                        z-index: 10;
                        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                        cursor: pointer;
                    }
                    
                    .ticker-container {
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        position: relative;
                    }
                    
                    .ticker-content {
                        display: inline-block;
                        white-space: nowrap;
                        animation: tickerMove 30s linear infinite;
                        padding-right: 40px; /* Space for close button */
                    }
                    
                    .ticker-content span {
                        display: inline-block;
                        padding: 0 30px;
                        font-weight: 500;
                        line-height: 30px;
                    }
                    
                    @keyframes tickerMove {
                        0% {
                            transform: translateX(100%);
                        }
                        100% {
                            transform: translateX(-100%);
                        }
                    }
                    
                    .ticker-close-btn {
                        background: transparent;
                        border: none;
                        color: #fff;
                        font-size: 20px;
                        cursor: pointer;
                        position: absolute;
                        right: 10px;
                        top: 50%;
                        transform: translateY(-50%);
                        padding: 0 8px;
                        line-height: 1;
                        z-index: 11;
                    }
                    
                    .ticker-close-btn:hover {
                        color: #ccc;
                    }
                    
                    @media (max-width: 767px) {
                        .ticker-ribbon {
                            height: 24px;
                        }
                        
                        .ticker-content {
                            animation: tickerMove 20s linear infinite;
                        }
                        
                        .ticker-content span {
                            font-size: 12px;
                            line-height: 24px;
                        }
                    }
                `,
                }),
              ],
            })
          );
        }),
        tM = (e) => {
          let { children: t } = e,
            n = localStorage.getItem("theme") ?? "light",
            { ui: o } = (0, eb.oR)() ?? { ui: { setDevice: () => {} } },
            { setDevice: a } = o,
            { isDesktop: s, isMobile: r, isTablet: c } = (0, h.F)();
          return (
            (0, l.useEffect)(() => {
              let e = document.querySelector("body");
              e &&
                ("light" === n
                  ? (e.classList.remove("theme--dark"),
                    e.classList.add("theme--light"))
                  : (e.classList.remove("theme--light"),
                    e.classList.add("theme--dark")));
            }, [n]),
            (0, l.useEffect)(() => {
              r ? a("mobile") : c ? a("tablet") : a("desktop");
            }, [s, r, c, a]),
            (0, i.jsx)("div", { className: "main-body", children: t })
          );
        },
        tT = () => {
          var e;
          let t;
          let { isDesktop: n } = (0, h.F)(),
            { isOAuth2Enabled: p } = (0, c.q)(),
            m = "/callback" === window.location.pathname,
            g = "true" === a.Z.get("logged_state"),
            x = window.location.pathname.includes("endpoint"),
            v = JSON.parse(localStorage.getItem("clientAccounts") ?? "{}"),
            f = new URLSearchParams(window.location.search),
            _ = f.get("account") ?? "",
            w =
              Object.keys(
                JSON.parse(localStorage.getItem("accountsList") ?? "{}")
              ).length > 0,
            b =
              Object.values(v).some((e) => e.currency === _) ||
              "demo" === _ ||
              "" === _,
            [j, y] = (0, l.useState)(b),
            C = [...u.g$d, ...u.bs3].includes(
              null === (e = f.get("account") ?? "") || void 0 === e
                ? void 0
                : e.toUpperCase()
            ),
            N = [],
            I = (e) => {
              let { data: n } = e;
              if ("authorize" === n.msg_type) {
                N.push(n.authorize.account_list || []);
                let e = new Set(Object.values(v).map((e) => e.currency));
                (
                  null == N
                    ? void 0
                    : N.flat().some(
                        (t) =>
                          !e.has(t.currency) &&
                          (sessionStorage.setItem("query_param_currency", _),
                          !0)
                      )
                )
                  ? y(!1)
                  : (sessionStorage.removeItem("query_param_currency"),
                    console.log("All currencies are present")),
                  t && (null == t || t.unsubscribe());
              }
            };
          return (
            (0, l.useEffect)(() => {
              C &&
                r.api_base.api &&
                (t = r.api_base.api.onMessage().subscribe(I));
            }, []),
            (0, l.useEffect)(() => {
              ((!g || w || !p || x || m) && j) ||
                (0, d.P6)({
                  redirectCallbackUri: `${window.location.origin}/callback`,
                });
            }, [g, w, p, x, m, j]),
            (0, i.jsxs)("div", {
              className: (0, o.Z)("layout", { responsive: n }),
              children: [
                !m && (0, i.jsx)(tS, {}),
                (0, i.jsx)(tM, { children: (0, i.jsx)(s.j3, {}) }),
                !m && n && (0, i.jsx)(ek, {}),
              ],
            })
          );
        };
    },
    30394: function (e, t, n) {
      n.d(t, { Z: () => m });
      var i = n(85893),
        l = n(67294),
        o = n(63387),
        a = n.n(o),
        s = n(82106),
        r = n(86278),
        c = n(14244),
        d = n(26088),
        h = n(92868),
        u = n(2502),
        p = n(45452);
      let m = (e) => {
        let {
            alignment: t,
            children: n,
            className: o,
            classNameBubble: m,
            classNameTarget: g,
            classNameTargetIcon: x,
            counter: v,
            disable_message_icon: f,
            disable_target_icon: _,
            has_error: w,
            icon: b,
            id: j,
            is_open: y,
            is_bubble_hover_enabled: C,
            margin: N = 0,
            message: I,
            onBubbleClose: k,
            onBubbleOpen: Z,
            onClick: z = () => void 0,
            relative_render: L = !1,
            should_disable_pointer_events: S = !1,
            should_show_cursor: M,
            zIndex: T = "1",
            data_testid: E,
            arrow_styles: F,
          } = e,
          A = l.useRef(),
          [R, D] = l.useState(void 0),
          [O, P] = l.useState(!1),
          { isDesktop: U } = (0, u.F)(),
          [B, H] = (0, r.X)(null, !0),
          [X, V] = (0, r.m)(),
          q = l.useMemo(() => !U && void 0 === y, [U, y]);
        l.useEffect(() => {
          A.current && D(A.current);
        }, [w]),
          l.useEffect(() => {
            !H && q && P(!1);
          }, [H, q]);
        let K = () => {
            Z && Z();
          },
          W = () => {
            k && k();
          },
          $ = a()(x, b),
          G = H && I && (!q || O);
        return (0, i.jsxs)("div", {
          ref: B,
          className: a()({ "dc-popover__wrapper": L }),
          onClick: (e) => {
            z(e), q && P(!O);
          },
          "data-testid": "dt_popover_wrapper",
          children: [
            L &&
              (0, i.jsx)("div", {
                className: "dc-popover__container",
                style: { zIndex: T },
                children: (0, i.jsx)("div", {
                  ref: A,
                  className: "dc-popover__container-relative",
                  "data-testid": "dt_popover_relative_container",
                }),
              }),
            (R || !L) &&
              (0, i.jsx)(s.Popover, {
                isOpen: y ?? (G || (C && V)),
                positions: [t],
                padding: N + 8,
                containerClassName: a()({
                  "react-tiny-popover-container--disabled-pointer-event": S,
                  "react-tiny-popover-cursor-option": M,
                }),
                ...(L
                  ? {
                      parentElement: R,
                      contentLocation: (e) => {
                        let { childRect: n, popoverRect: i, nudgedLeft: l } = e,
                          o = document.body.clientWidth,
                          a = n.right + (i.width - n.width / 2),
                          s = 0,
                          r = 0;
                        switch (t) {
                          case "left":
                            (r =
                              -1 *
                              Math.abs((i.height > i.width ? l : i.width) + N)),
                              (s =
                                n.height > i.height
                                  ? (n.height - i.height) / 2
                                  : -(((i.height - n.height) / 2) * 1));
                            break;
                          case "right":
                            (r = i.width + N),
                              (s =
                                n.height > i.height
                                  ? (n.height - i.height) / 2
                                  : -(((i.height - n.height) / 2) * 1));
                            break;
                          case "top":
                            (r = a > o ? -1 * Math.abs(a - o) : 0),
                              (s = -1 * Math.abs(i.height + N));
                            break;
                          case "bottom":
                            (r = a > o ? -1 * Math.abs(a - o) : 0),
                              (s = n.height + N);
                        }
                        return { top: s, left: r };
                      },
                    }
                  : { containerStyle: { zIndex: T } }),
                content: (e) => {
                  let { position: t, childRect: n, popoverRect: l } = e;
                  return (0, i.jsx)(s.ArrowContainer, {
                    position: t,
                    childRect: n,
                    popoverRect: l,
                    arrowColor: w
                      ? "var(--status-danger)"
                      : "var(--general-active)",
                    arrowSize: 5,
                    arrowStyle: L
                      ? {
                          borderTop: "10px solid transparent",
                          borderLeft: "10px solid transparent",
                          borderRight: `10px solid ${
                            w ? "var(--status-danger)" : "var(--general-active)"
                          }`,
                          transform: "rotate(315deg)",
                          right: "0px",
                          top: "5px",
                          height: "10px",
                          margin: "auto",
                          bottom: "0px",
                        }
                      : { ...F },
                    children: (0, i.jsxs)("div", {
                      id: j,
                      onMouseEnter: K,
                      onMouseLeave: W,
                      className: a()(m, "dc-popover__bubble", {
                        "dc-popover__bubble--error": w,
                      }),
                      ref: X,
                      children: [
                        !f &&
                          "info" === b &&
                          (0, i.jsx)("i", {
                            className: "dc-popover__bubble__icon",
                            children: (0, i.jsx)(c.Z, {}),
                          }),
                        (w &&
                          (0, i.jsx)(p.Z, {
                            size: "xxs",
                            color: "colored-background",
                            children: I,
                          })) ||
                          (0, i.jsx)(p.Z, {
                            lineHeight: "md",
                            size: "xxs",
                            className: "dc-popover__bubble__text",
                            children: I,
                          }),
                      ],
                    }),
                  });
                },
                children: (0, i.jsx)("div", {
                  "data-testid": E,
                  className: a()("dc-popover", o),
                  id: j,
                  children: (0, i.jsxs)("div", {
                    className: a()(g, "dc-popover__target"),
                    children: [
                      !_ &&
                        (0, i.jsxs)("i", {
                          className: I
                            ? "dc-popover__target__icon"
                            : "dc-popover__target__icon--disabled",
                          children: [
                            "info" === b && (0, i.jsx)(c.Z, { className: $ }),
                            "question" === b &&
                              (0, i.jsx)(h.Z, { className: $ }),
                            "dot" === b && (0, i.jsx)(d.Z, { className: $ }),
                            "counter" === b &&
                              (0, i.jsx)("span", { className: $, children: v }),
                          ],
                        }),
                      n,
                    ],
                  }),
                }),
              }),
          ],
        });
      };
    },
    86278: function (e, t, n) {
      n.d(t, { X: () => l, m: () => o });
      var i = n(67294);
      let l = (e, t) => {
          let [n, l] = i.useState(!1),
            o = i.useRef(null),
            a = e || o,
            s = () => l(!0),
            r = () => l(!1);
          return (
            i.useEffect(() => {
              let e = a.current;
              if (e)
                return (
                  t
                    ? (e.addEventListener("mouseenter", s),
                      e.addEventListener("mouseleave", r))
                    : (e.addEventListener("mouseover", s),
                      e.addEventListener("mouseout", r)),
                  () => {
                    t
                      ? (e.removeEventListener("mouseenter", s),
                        e.removeEventListener("mouseleave", r))
                      : (e.removeEventListener("mouseover", s),
                        e.removeEventListener("mouseout", r));
                  }
                );
            }, [a, t]),
            [a, n]
          );
        },
        o = () => {
          let [e, t] = i.useState(!1),
            n = i.useCallback(() => t(!0), []),
            l = i.useCallback(() => t(!1), []),
            o = i.useRef(null);
          return [
            i.useCallback(
              (e) => {
                o.current &&
                  (o.current.removeEventListener("mouseover", n),
                  o.current.removeEventListener("mouseout", l)),
                  (o.current = e),
                  o.current &&
                    (o.current.addEventListener("mouseover", n),
                    o.current.addEventListener("mouseout", l));
              },
              [n, l]
            ),
            e,
          ];
        };
    },
    75324: function (e, t, n) {
      n.d(t, { Lv: () => a, ZP: () => s });
      var i = n(67294),
        l = n(89471),
        o = n(46543);
      let a = () => {
          let [e, t] = (0, i.useState)(!1);
          return (
            (0, i.useEffect)(() => {
              let e = Date.now(),
                n = setInterval(() => {
                  "function" == typeof window.Intercom
                    ? (t(!0), clearInterval(n))
                    : Date.now() - e >= 5e3 && clearInterval(n);
                }, 100);
              return () => clearInterval(n);
            }, []),
            e
          );
        },
        s = (e) => {
          let { featureFlagValue: t } = (0, o.Z)({
              featureFlag: "enable_intercom_dbot",
            }),
            n = (0, l.Gq)(
              t ? "https://static.deriv.com/scripts/intercom/v1.0.2.js" : null
            );
          (0, i.useEffect)(() => {
            var i;
            let l;
            if (
              t &&
              "ready" === n &&
              (null === (i = window) || void 0 === i ? void 0 : i.DerivInterCom)
            )
              return (
                window.DerivInterCom.initialize({ hideLauncher: !0, token: e }),
                (l = setInterval(() => {
                  var e;
                  (null === (e = window) || void 0 === e
                    ? void 0
                    : e.Intercom) && clearInterval(l);
                }, 500)),
                () => {
                  clearInterval(l);
                }
              );
          }, [t, n, e]);
        };
    },
    83257: function (e, t, n) {
      n.d(t, { Z: () => o });
      var i = n(67294),
        l = n(83274);
      let o = () => {
        let { ui: e } = (0, l.oR)() ?? {
            ui: { setDarkMode: () => {}, is_dark_mode_on: !1 },
          },
          { setDarkMode: t, is_dark_mode_on: n } = e;
        return {
          toggleTheme: (0, i.useCallback)(() => {
            let e = document.querySelector("body");
            e &&
              (e.classList.contains("theme--dark")
                ? (localStorage.setItem("theme", "light"),
                  e.classList.remove("theme--dark"),
                  e.classList.add("theme--light"),
                  t(!1))
                : (localStorage.setItem("theme", "dark"),
                  e.classList.remove("theme--light"),
                  e.classList.add("theme--dark"),
                  t(!0)));
          }, [t]),
          is_dark_mode_on: n,
          setDarkMode: t,
        };
      };
    },
  },
]);
