"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["232"],
  {
    15207: function (e, t, r) {
      r.r(t), r.d(t, { default: () => B });
      var s = r(85893),
        l = r(67294),
        o = r(96877),
        n = r(27412),
        i = r(45697),
        a = r.n(i),
        d = r(48059),
        c = r(48766),
        h = r(94145),
        m = r(66163),
        _ = r(31784),
        u = r(50299),
        g = r(45221),
        x = r(45452);
      let v = (e) => {
          let { error_message: t } = e;
          return (0, s.jsxs)("div", {
            className: "unhandled-error",
            children: [
              (0, s.jsx)(u.Z, {
                height: "120px",
                width: "120px",
                fill: "var(--text-general)",
              }),
              (0, s.jsx)(x.Z, {
                className: "da-icon-with-message__text",
                as: "p",
                lineHeight: "xxl",
                align: "center",
                weight: "bold",
                children: (0, s.jsx)(d.Xx, {
                  i18n_default_text: "Sorry for the interruption",
                }),
              }),
              (0, s.jsx)(x.Z, {
                className: "da-icon-with-message__text__desc",
                as: "p",
                size: "xs",
                lineHeight: "xxs",
                align: "center",
                children: t,
              }),
              (0, s.jsx)(g.Z, {
                onClick: () => location.reload(),
                has_effect: !0,
                primary: !0,
                large: !0,
                children: (0, s.jsx)(d.Xx, { i18n_default_text: "Refresh" }),
              }),
            ],
          });
        },
        p = (e) => {
          var t;
          let { messages: r } = e,
            [o, n] = l.useState(!1),
            i =
              null == r
                ? void 0
                : null === (t = r[0]) || void 0 === t
                ? void 0
                : t.toString();
          l.useEffect(() => {
            n(!0);
          }, []);
          let a = () => {
            n(!o);
          };
          return (0, s.jsxs)(_.Z, {
            has_close_icon: !0,
            width: "440px",
            height: "284px",
            is_open: o,
            toggleModal: a,
            children: [
              (0, s.jsx)(c.Z, {
                children: (0, s.jsx)(_.Z.Body, {
                  children: (0, s.jsx)(v, { error_message: i }),
                }),
              }),
              (0, s.jsx)(m.Z, {
                children: (0, s.jsx)(h.Z, {
                  portal_element_id: "modal_root",
                  has_close_icon: !0,
                  visible: o,
                  onClose: a,
                  children: (0, s.jsx)(_.Z.Body, {
                    children: (0, s.jsx)(v, { error_message: i }),
                  }),
                }),
              }),
            ],
          });
        };
      var j = r(63387),
        f = r.n(j),
        b = r(2502),
        y = r(11527),
        N = r(79655);
      let w = (e) => {
          let {
            children: t,
            className: r,
            to: l,
            onClick: o,
            size: n = "medium",
          } = e;
          return (0, s.jsx)(N.rU, {
            className: f()(
              "dc-btn dc-btn--primary",
              r,
              "effect",
              `dc-btn__${n}`
            ),
            to: l ?? "",
            onClick: o,
            children: t,
          });
        },
        k = (e) => {
          var t;
          let {
              buttonOnClick: r,
              buttonSize: l = "large",
              classNameImage: o,
              header: n,
              image_url: i,
              messages: a,
              redirect_labels: d,
              redirect_urls: h,
              should_clear_error_on_click: _,
              setError: u,
              should_redirect: g = !0,
            } = e,
            v = () => {
              _
                ? (null == u || u(!1, null),
                  window.location.assign("https://app.deriv.com"))
                : null == r || r();
            },
            { isMobile: p } = (0, b.F)();
          return (0, s.jsxs)("div", {
            className: "dc-page-error__container",
            children: [
              !!i &&
                (0, s.jsxs)(s.Fragment, {
                  children: [
                    (0, s.jsx)(c.Z, {
                      children: (0, s.jsx)("img", {
                        className: o,
                        src: i,
                        alt: "404",
                        loading: "lazy",
                        width: "607px",
                        height: "366px",
                      }),
                    }),
                    (0, s.jsx)(m.Z, {
                      children: (0, s.jsx)("img", {
                        className: o,
                        src: i,
                        alt: "404",
                        loading: "lazy",
                        width: "328px",
                        height: "200px",
                      }),
                    }),
                  ],
                }),
              (0, s.jsxs)("div", {
                className: f()("dc-page-error__box", {
                  "dc-page-error__box--left": !!i,
                }),
                children: [
                  (0, s.jsx)(x.Z, {
                    as: "h3",
                    size: p ? "s" : "l",
                    align: "center",
                    weight: "bold",
                    lineHeight: "s",
                    color: "prominent",
                    children: n,
                  }),
                  (0, s.jsx)("div", {
                    className: f()("dc-page-error__message-wrapper", {
                      "dc-page-error__message-wrapper--left": !!i,
                    }),
                    children: (0, s.jsx)(x.Z, {
                      color: "prominent",
                      className: f()("dc-page-error__message", {
                        "dc-page-error__message--left": !!i,
                      }),
                      children: a.map((e, t) =>
                        (null == e ? void 0 : e.has_html)
                          ? (0, s.jsx)(
                              x.Z,
                              {
                                as: "p",
                                size: p ? "xxs" : "s",
                                align: p ? "center" : "left",
                                lineHeight: "x",
                                className: "dc-page-error__message-paragraph",
                                dangerouslySetInnerHTML: {
                                  __html: null == e ? void 0 : e.message,
                                },
                              },
                              t
                            )
                          : (0, s.jsx)(
                              x.Z,
                              {
                                as: "p",
                                size: p ? "xxs" : "s",
                                align: p ? "center" : "left",
                                lineHeight: "x",
                                className: "dc-page-error__message-paragraph",
                                children: e,
                              },
                              t
                            )
                      ),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "dc-page-error__btn-wrapper",
                    "data-testid": "dc-page-error__btn-wrapper",
                    children: [
                      g &&
                        0 !== d.length &&
                        (null == h
                          ? void 0
                          : null === (t = h.map) || void 0 === t
                          ? void 0
                          : t.call(h, (e, t) =>
                              (0, s.jsx)(
                                w,
                                {
                                  className: "dc-page-error__btn",
                                  onClick: v,
                                  size: l,
                                  children: (0, s.jsx)(x.Z, {
                                    weight: "bold",
                                    size: p ? "xs" : "s",
                                    className:
                                      "dc-page-error__btn-text dc-btn__text",
                                    children: d[t],
                                  }),
                                },
                                t
                              )
                            )),
                      !g &&
                        (0, s.jsx)(y.z, {
                          type: "button",
                          className: "dc-page-error__btn--no-redirect",
                          onClick: v,
                          size: p ? "sm" : "md",
                          children: (0, s.jsx)(x.Z, {
                            weight: "bold",
                            size: p ? "xs" : "s",
                            className: "dc-page-error__btn-text dc-btn__text",
                            children: d[0],
                          }),
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      var Z = r(63069);
      let E = () =>
          (0, s.jsxs)("div", {
            className: "unhandled-error",
            children: [
              (0, s.jsx)(u.Z, { height: "120px", width: "120px" }),
              (0, s.jsx)(x.Z, {
                className: "da-icon-with-message__text",
                as: "p",
                size: "s",
                color: "general",
                lineHeight: "xxl",
                align: "center",
                weight: "bold",
                children: (0, Z.sJ)().header,
              }),
              (0, s.jsx)(x.Z, {
                className: "da-icon-with-message__text__desc",
                as: "p",
                size: "xs",
                color: "general",
                lineHeight: "xxs",
                align: "center",
                children: (0, Z.sJ)().description,
              }),
              (0, s.jsx)(g.Z, {
                onClick: () => location.reload(),
                has_effect: !0,
                primary: !0,
                large: !0,
                text: (0, Z.sJ)().cta_label,
              }),
            ],
          }),
        C = () => {
          let [e, t] = l.useState(!1);
          l.useEffect(() => {
            t(!0);
          }, []);
          let r = () => {
            t(!e);
          };
          return (0, s.jsxs)(_.Z, {
            has_close_icon: !0,
            width: "440px",
            height: "284px",
            is_open: e,
            toggleModal: r,
            children: [
              (0, s.jsx)(c.Z, {
                children: (0, s.jsx)(_.Z.Body, { children: (0, s.jsx)(E, {}) }),
              }),
              (0, s.jsx)(m.Z, {
                children: (0, s.jsx)(h.Z, {
                  portal_element_id: "modal_root",
                  has_close_icon: !0,
                  visible: e,
                  onClose: r,
                  children: (0, s.jsx)(_.Z.Body, {
                    children: (0, s.jsx)(E, {}),
                  }),
                }),
              }),
            ],
          });
        },
        $ = (e) => {
          let { error_header: t, error_messages: r, ...l } = e;
          return t && r
            ? (0, s.jsx)(k, { header: t, messages: r, ...l })
            : r
            ? (0, s.jsx)(p, { messages: r })
            : (0, s.jsx)(C, {});
        };
      var z = r(66175);
      let S = (e) => {
        let {
          header: t,
          message: r,
          redirect_label: l,
          redirectOnClick: o = null,
          should_clear_error_on_click: n,
          setError: i,
          redirect_to: a = z.xOw.trade,
          should_redirect: c = !0,
        } = e;
        return (0, s.jsx)($, {
          error_header: t ?? "",
          error_messages: r ? [r, ""] : [],
          redirect_urls: [a],
          redirect_labels: (!l && []) || [l || (0, d.NC)("Refresh")],
          buttonOnClick: o || (() => window.location.reload()),
          should_clear_error_on_click: n,
          setError: i,
          should_redirect: c,
        });
      };
      S.propTypes = {
        header: a().string,
        message: a().oneOfType([a().node, a().string, a().object]),
        redirectOnClick: a().func || a().object,
        redirect_label: a().string,
        setError: a().func,
        should_clear_error_on_click: a().bool,
        should_redirect: a().bool,
        redirect_to: a().string,
        should_show_refresh: a().bool,
      };
      class M extends l.Component {
        constructor(e) {
          super(e),
            (0, n._)(this, "componentDidCatch", (e, t) => {
              window.TrackJS &&
                window.TrackJS.console.log(this.props.root_store),
                this.setState({ hasError: !0, error: e, info: t });
            }),
            (0, n._)(this, "render", () =>
              this.state.hasError
                ? (0, s.jsx)(S, { should_show_refresh: !0 })
                : this.props.children
            ),
            (this.state = { hasError: !1 });
        }
      }
      M.propTypes = {
        root_store: a().object,
        children: a().oneOfType([a().string, a().arrayOf(a().node), a().node]),
      };
      var R = r(83274),
        D = r(89606);
      let L = (0, o.Pi)(() => {
        let { client: e, ui: t } = (0, R.oR)(),
          {
            is_trading_experience_incomplete: r,
            content_flag: o,
            is_logged_in: n,
            accounts: i,
            loginid: a,
          } = e,
          { is_trading_assessment_for_new_user_enabled: c } = t,
          h = (0, l.useMemo)(() => {
            var e;
            return (
              n &&
              (null == i
                ? void 0
                : null === (e = i[a]) || void 0 === e
                ? void 0
                : e.landing_company_name) === "maltainvest" &&
              !c &&
              r &&
              o !== z.DQA.LOW_RISK_CR_EU &&
              o !== z.DQA.LOW_RISK_CR_NON_EU
            );
          }, [n, c, r, o, i, a]);
        return (0, s.jsxs)(_.Z, {
          is_open: h || !1,
          width: "44rem",
          className: "trade-modal-wrapper",
          children: [
            (0, s.jsxs)(_.Z.Body, {
              children: [
                (0, s.jsx)(D.J, {
                  icon: "ic-currency-eur-check",
                  className: "currency-icon",
                  size: 95,
                }),
                (0, s.jsx)(x.Z, {
                  as: "p",
                  align: "center",
                  weight: "bold",
                  className: "verified-account__text",
                  children: (0, s.jsx)(d.Xx, {
                    i18n_default_text: "Trading Experience Assessment<0/>",
                    components: [(0, s.jsx)("br", {}, 0)],
                  }),
                }),
                (0, s.jsx)(x.Z, {
                  as: "p",
                  size: "xs",
                  align: "center",
                  children: (0, s.jsx)(d.Xx, {
                    i18n_default_text:
                      "As per our regulatory obligations, we are required to assess your trading knowledge and experience.<0/><0/>Please click ‘OK’ to continue",
                    components: [(0, s.jsx)("br", {}, 0)],
                  }),
                }),
              ],
            }),
            (0, s.jsx)(_.Z.Footer, {
              children: (0, s.jsx)(g.Z, {
                type: "button",
                large: !0,
                text: (0, d.NC)("OK"),
                primary: !0,
                onClick: () => {
                  window.location.assign(
                    "https://app.deriv.com/account/trading-assessment"
                  );
                },
              }),
            }),
          ],
        });
      });
      var T = r(88199);
      let H = () => {
        let [e, t] = (0, l.useState)(0),
          [r, o] = (0, l.useState)([]);
        (0, l.useEffect)(() => {
          let e = setInterval(() => {
            t((e) => {
              let t = e + 1;
              return t >= 100 ? 100 : t;
            });
          }, 50);
          return () => clearInterval(e);
        }, []),
          (0, l.useEffect)(() => {
            (() => {
              let e = [];
              for (let t = 0; t < 400; t++) {
                let r = Math.random() > 0.5 ? "\uD83D\uDCB5" : "\uD83D\uDDA8️";
                e.push({
                  id: t,
                  left: 100 * Math.random(),
                  delay: 5 * Math.random(),
                  size: 20 + 20 * Math.random(),
                  rotation: 360 * Math.random(),
                  duration: 3 + 3 * Math.random(),
                  symbol: r,
                });
              }
              o(e);
            })();
          }, []);
        let n = [
            {
              title: "Connecting to Forex Markets",
              description: "Establishing secure trading channels",
              icon: "\uD83D\uDD04",
              color: "#3498db",
            },
            {
              title: "Fetching Currency Pairs",
              description: "Syncing EUR/USD, GBP/JPY, USD/CHF rates",
              icon: "\uD83D\uDCB1",
              color: "#2ecc71",
            },
            {
              title: "Calibrating Trading Algorithms",
              description: "Optimizing entry and exit strategies",
              icon: "\uD83D\uDCC8",
              color: "#9b59b6",
            },
            {
              title: "Analyzing Market Conditions",
              description: "Processing technical & fundamental signals",
              icon: "\uD83D\uDCCA",
              color: "#f39c12",
            },
            {
              title: "Trading System Ready",
              description: "All markets accessible for trading",
              icon: "\uD83D\uDE80",
              color: "#27ae60",
            },
          ],
          i = Math.min(Math.floor((e / 100) * n.length), n.length - 1),
          a = n[i],
          [d, c] = (0, l.useState)([]);
        return (
          (0, l.useEffect)(() => {
            (() => {
              let e = [];
              for (let t = 0; t < 8; t++)
                e.push({
                  id: t,
                  left: 10 + 80 * Math.random(),
                  delay: 10 * Math.random(),
                  rotation: -10 + 20 * Math.random(),
                  duration: 6 + 4 * Math.random(),
                });
              c(e);
            })();
          }, []),
          (0, s.jsxs)("div", {
            className: "smooth-loading-screen",
            children: [
              (0, s.jsx)("div", {
                className: "smooth-loading-screen__background",
              }),
              (0, s.jsx)("div", {
                className: "smooth-loading-screen__money-container",
                children: r.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "smooth-loading-screen__money",
                      style: {
                        left: `${e.left}%`,
                        animationDelay: `${e.delay}s`,
                        width: `${e.size}px`,
                        height: `${e.size}px`,
                        transform: `rotate(${e.rotation}deg)`,
                        animationDuration: `${e.duration}s`,
                      },
                      children: e.symbol,
                    },
                    e.id
                  )
                ),
              }),
              (0, s.jsxs)("div", {
                className: "smooth-loading-screen__forex-background",
                children: [
                  (0, s.jsx)("div", {
                    className: "smooth-loading-screen__chart-line",
                  }),
                  (0, s.jsx)("div", {
                    className: "smooth-loading-screen__chart-candles",
                    children: [...Array(18)].map((e, t) => {
                      let r = 25 + 60 * Math.random(),
                        l = Math.random() > 0.4;
                      return (0, s.jsx)(
                        "div",
                        {
                          className: `smooth-loading-screen__candle ${
                            l ? "up" : "down"
                          }`,
                          style: {
                            height: `${r}px`,
                            width: `${8 + 4 * Math.random()}px`,
                            left: `${5.5 * t}%`,
                          },
                          children: (0, s.jsx)("div", {
                            className: "smooth-loading-screen__candle-wick",
                          }),
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "smooth-loading-screen__printer-container",
                children: d.map((e) =>
                  (0, s.jsx)(
                    "div",
                    {
                      className: "smooth-loading-screen__printer",
                      style: {
                        left: `${e.left}%`,
                        animationDelay: `${e.delay}s`,
                        transform: `rotate(${e.rotation}deg)`,
                        animationDuration: `${e.duration}s`,
                      },
                      children: (0, s.jsx)("div", {
                        className: "smooth-loading-screen__printer-body",
                        children: (0, s.jsx)("div", {
                          className: "smooth-loading-screen__printer-output",
                          children: (0, s.jsx)("div", {
                            className: "smooth-loading-screen__printer-bill",
                          }),
                        }),
                      }),
                    },
                    e.id
                  )
                ),
              }),
              (0, s.jsxs)("div", {
                className: "smooth-loading-screen__content",
                children: [
                  (0, s.jsx)("div", {
                    className: "smooth-loading-screen__logo-container",
                    children: (0, s.jsx)("div", {
                      className: "smooth-loading-screen__logo",
                      children: (0, s.jsx)("span", { children: "DP" }),
                    }),
                  }),
                  (0, s.jsx)("h1", {
                    className: "smooth-loading-screen__title",
                    children: "Dollar Printer",
                  }),
                  (0, s.jsx)("div", {
                    className: "smooth-loading-screen__subtitle",
                    children: "Advanced Forex Trading System",
                  }),
                  (0, s.jsxs)("div", {
                    className: "smooth-loading-screen__current-stage",
                    children: [
                      (0, s.jsx)("div", {
                        className: "smooth-loading-screen__stage-icon",
                        style: { backgroundColor: a.color },
                        children: a.icon,
                      }),
                      (0, s.jsxs)("div", {
                        className: "smooth-loading-screen__stage-info",
                        children: [
                          (0, s.jsx)("div", {
                            className: "smooth-loading-screen__stage-title",
                            children: a.title,
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "smooth-loading-screen__stage-description",
                            children: a.description,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "smooth-loading-screen__progress-container",
                    children: [
                      (0, s.jsx)("div", {
                        className: "smooth-loading-screen__stage-progress",
                        children: n.map((t, r) => {
                          let l = r <= i,
                            o =
                              r < i
                                ? 100
                                : r === i
                                ? (e - r * (100 / n.length)) * n.length
                                : 0;
                          return (0, s.jsx)(
                            "div",
                            {
                              className: `smooth-loading-screen__stage-bar ${
                                l ? "active" : ""
                              }`,
                              children: (0, s.jsx)("div", {
                                className: "smooth-loading-screen__stage-fill",
                                style: {
                                  width: `${o}%`,
                                  backgroundColor: t.color,
                                },
                              }),
                            },
                            r
                          );
                        }),
                      }),
                      (0, s.jsxs)("div", {
                        className: "smooth-loading-screen__overall-progress",
                        children: [
                          (0, s.jsx)("div", {
                            className: "smooth-loading-screen__overall-fill",
                            style: { width: `${e}%` },
                          }),
                          (0, s.jsxs)("div", {
                            className: "smooth-loading-screen__progress-text",
                            children: [Math.round(e), "%"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "smooth-loading-screen__stages-list",
                    children: n.map((e, t) => {
                      let r = t <= i,
                        l = t === i;
                      return (0, s.jsxs)(
                        "div",
                        {
                          className: `smooth-loading-screen__stage-item ${
                            r ? "active" : ""
                          } ${l ? "current" : ""}`,
                          children: [
                            (0, s.jsx)("div", {
                              className: "smooth-loading-screen__stage-bullet",
                              style: {
                                backgroundColor: r ? e.color : "transparent",
                                borderColor: e.color,
                              },
                            }),
                            (0, s.jsx)("div", {
                              className: "smooth-loading-screen__stage-label",
                              children: e.title,
                            }),
                          ],
                        },
                        t
                      );
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      };
      var O = r(10434);
      let P = () => {
        let [e, t] = (0, l.useState)(!1),
          r = () => t(!1);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            (0, s.jsx)("button", {
              className: "risk-disclaimer-button",
              onClick: () => t(!0),
              children: (0, s.jsx)(d.Xx, {
                i18n_default_text: "Risk Disclaimer",
              }),
            }),
            (0, s.jsx)(O.Z, {
              className: "risk-disclaimer-dialog",
              is_visible: e,
              title: (0, d.NC)("Risk Disclaimer"),
              onClose: r,
              onConfirm: r,
              confirm_button_text: (0, d.NC)("I understand"),
              has_close_icon: !0,
              portal_element_id: "modal_root",
              children: (0, s.jsxs)("div", {
                className: "risk-disclaimer-content",
                children: [
                  (0, s.jsx)("h3", {
                    children: (0, s.jsx)(d.Xx, {
                      i18n_default_text: "Trading Risk Disclaimer",
                    }),
                  }),
                  (0, s.jsx)("p", {
                    children: (0, s.jsx)(d.Xx, {
                      i18n_default_text:
                        "Deriv offers complex derivatives, such as options and contracts for difference (“CFDs”). These products may not be suitable for all clients, and trading them puts you at risk. Please make sure that you understand the following risks before trading Deriv products: a) you may lose some or all of the money you invest in the trade, b) if your trade involves currency conversion, exchange rates will affect your profit and loss. You should never trade with borrowed money or with money that you cannot afford to lose.",
                    }),
                  }),
                ],
              }),
            }),
          ],
        });
      };
      r(674);
      let F = (0, l.lazy)(() =>
          Promise.all([r.e("361"), r.e("834"), r.e("522"), r.e("565")]).then(
            r.bind(r, 86096)
          )
        ),
        I = (0, o.Pi)(() => {
          var e, t, r, l, o, n, i;
          let { common: a } = (0, R.oR)();
          return a.error
            ? (0, s.jsx)(S, {
                header:
                  null === (e = a.error) || void 0 === e ? void 0 : e.header,
                message:
                  null === (t = a.error) || void 0 === t ? void 0 : t.message,
                redirect_label:
                  null === (r = a.error) || void 0 === r
                    ? void 0
                    : r.redirect_label,
                redirectOnClick:
                  null === (l = a.error) || void 0 === l
                    ? void 0
                    : l.redirectOnClick,
                should_clear_error_on_click:
                  null === (o = a.error) || void 0 === o
                    ? void 0
                    : o.should_clear_error_on_click,
                setError: a.setError,
                redirect_to:
                  null === (n = a.error) || void 0 === n
                    ? void 0
                    : n.redirect_to,
                should_redirect:
                  null === (i = a.error) || void 0 === i
                    ? void 0
                    : i.should_redirect,
              })
            : null;
        }),
        B = () => {
          let e = (0, R.oR)(),
            t = (0, l.useRef)(!1),
            [r, o] = (0, l.useState)(!1);
          return ((0, l.useEffect)(() => {
            (async () => {
              if (!t.current) {
                let e = Date.now();
                await T.api_base.init(),
                  setTimeout(() => {
                    (t.current = !0), o(!0);
                  }, Math.max(0, 2500 - (Date.now() - e)));
              }
            })();
          }, []),
          e && r)
            ? (0, s.jsx)(l.Suspense, {
                fallback: (0, s.jsx)(H, {}),
                children: (0, s.jsxs)(M, {
                  root_store: e,
                  children: [
                    (0, s.jsx)(I, {}),
                    (0, s.jsx)(F, {}),
                    (0, s.jsx)(L, {}),
                    (0, s.jsx)(P, {}),
                    " ",
                  ],
                }),
              })
            : (0, s.jsx)(H, {});
        };
    },
    48766: function (e, t, r) {
      r.d(t, { Z: () => n });
      var s = r(85893),
        l = r(67294),
        o = r(77149);
      let n = (e) => {
        let { children: t } = e;
        return (0, o.nI)() ? (0, s.jsx)(l.Fragment, { children: t }) : null;
      };
    },
    97050: function (e, t, r) {
      r.d(t, { Z: () => n });
      var s = r(85893),
        l = r(67294),
        o = r(93581);
      let n = (e) => {
        let {
            children: t,
            className: r,
            is_bypassed: n = !1,
            is_disabled: i = !1,
            id: a,
            height_offset: d,
            max_autoheight_offset: c,
          } = e,
          h = d ? `calc(100rvh - ${d})` : "calc(100rvh)",
          m = { height: c ? "" : h, maxHeight: c ? `calc(100rvh - ${c})` : "" };
        return (l.useEffect(() => {
          window.dispatchEvent(new Event("resize"));
        }, [d]),
        n)
          ? t
          : (0, s.jsx)(o.default, {
              id: a,
              className: r,
              style: i ? {} : m,
              "data-testid": "dt_div_100_vh",
              children: t,
            });
      };
    },
    94145: function (e, t, r) {
      r.d(t, { Z: () => _ });
      var s = r(85893),
        l = r(67294),
        o = r(63387),
        n = r.n(o),
        i = r(73935),
        a = r(81262),
        d = r(76298),
        c = r(97050),
        h = r(29490),
        m = r(43882);
      let _ = (e) => {
        let {
            children: t,
            footer: r,
            has_close_icon: o = !0,
            has_full_height: _,
            header_classname: u,
            info_banner: g,
            portal_element_id: x,
            renderTitle: v,
            title: p,
            visible: j,
            wrapper_classname: f,
            learn_more_banner: b,
          } = e,
          y = l.useRef(null),
          [N, w] = l.useState(0);
        l.useLayoutEffect(() => {
          y.current && !N && w(y.current.offsetHeight);
        }, [r, N]);
        let k = document.getElementById(x),
          Z = (e, t) => {
            let r = t.getBoundingClientRect();
            if (r.top + t.clientHeight + 20 > window.innerHeight) {
              let s = (window.innerHeight - t.clientHeight) / 2;
              e.scrollTop += r.top - s;
            }
          };
        return (e.visible
          ? ((document.body.style.overflow = "hidden"),
            k && (k.style.overflow = "hidden"))
          : ((document.body.style.overflow = "unset"),
            k && (k.style.overflow = "unset")),
        k)
          ? i.createPortal(
              (0, s.jsx)(a.Z, {
                appear: !0,
                in: j,
                timeout: 250,
                classNames: {
                  enter: "dc-mobile-dialog--enter",
                  enterDone: "dc-mobile-dialog--enter-done",
                  exit: "dc-mobile-dialog--exit",
                },
                unmountOnExit: !0,
                children: (0, s.jsx)("div", {
                  "data-testid": "dt_mobile_dialog",
                  className: "dc-mobile-dialog",
                  onClick: (e) => {
                    let t = e.target;
                    if (
                      ("A" !== t.tagName && e.stopPropagation(),
                      "INPUT" === t.tagName && "number" === t.type)
                    ) {
                      let r = () => Z(e.currentTarget, t);
                      window.addEventListener("resize", r, !1),
                        window.setTimeout(() => {
                          window.removeEventListener("resize", r, !1);
                        }, 2e3);
                    }
                  },
                  children: (0, s.jsxs)(c.Z, {
                    className: n()("dc-mobile-dialog__container", {
                      "dc-mobile-dialog__container--has-scroll":
                        e.has_content_scroll,
                      "dc-mobile-dialog__container--has-info-banner": g || b,
                    }),
                    height_offset: e.content_height_offset || "8px",
                    children: [
                      (0, s.jsxs)(m.Z, {
                        is_bypassed: !g && !b,
                        is_scrollbar_hidden: !0,
                        className:
                          g || b
                            ? n()("dc-mobile-dialog__header-wrapper", u)
                            : "",
                        children: [
                          (0, s.jsxs)("div", {
                            className: n()(
                              "dc-mobile-dialog__header",
                              !g && !b && u
                            ),
                            children: [
                              (0, s.jsx)(h.Z, {
                                as: "h2",
                                size: "xs",
                                color: "prominent",
                                weight: "bold",
                                lineHeight: "unset",
                                className: "dc-mobile-dialog__title",
                                children: v ? v() : p,
                              }),
                              o &&
                                (0, s.jsx)("div", {
                                  "data-testid":
                                    "dt_dc_mobile_dialog_close_btn",
                                  className:
                                    "icons dc-btn-close dc-mobile-dialog__close-btn",
                                  onClick: e.onClose,
                                  children: (0, s.jsx)(d.Z, {
                                    className:
                                      "dc-mobile-dialog__close-btn-icon",
                                    height: "20px",
                                    width: "20px",
                                  }),
                                }),
                            ],
                          }),
                          g,
                          b,
                        ],
                      }),
                      (0, s.jsx)("div", {
                        className: n()("dc-mobile-dialog__content", {
                          "dc-mobile-dialog__content--is-full-height": _,
                        }),
                        style: N ? { height: `calc(100% - ${N}px)` } : void 0,
                        children: (0, s.jsx)("div", {
                          className: n()({ [`dc-mobile-dialog__${f}`]: f }),
                          children: t,
                        }),
                      }),
                      r &&
                        (0, s.jsx)("div", {
                          ref: y,
                          className: "dc-mobile-dialog__footer",
                          children: r,
                        }),
                    ],
                  }),
                }),
              }),
              k
            )
          : null;
      };
    },
    66163: function (e, t, r) {
      r.d(t, { Z: () => n });
      var s = r(85893),
        l = r(67294),
        o = r(77149);
      let n = (e) => {
        let { children: t } = e;
        return (0, o.tq)() ? (0, s.jsx)(l.Fragment, { children: t }) : null;
      };
    },
    31784: function (e, t, r) {
      r.d(t, { Z: () => g });
      var s = r(85893),
        l = r(67294),
        o = r(63387),
        n = r.n(o),
        i = r(73935),
        a = r(81262),
        d = r(1051),
        c = r(14117),
        h = r(76298),
        m = r(29490);
      let _ = (e) => {
          let {
              children: t,
              className: r,
              close_icon_color: o,
              elements_to_ignore: a,
              has_close_icon: _ = !0,
              has_return_icon: u = !1,
              header: g,
              header_background_color: x,
              height: v,
              id: p,
              is_confirmation_modal: j,
              is_open: f,
              is_risk_warning_visible: b,
              is_title_centered: y,
              is_vertical_bottom: N,
              is_vertical_centered: w,
              is_vertical_top: k,
              onMount: Z,
              onReturn: E,
              onUnmount: C,
              portalId: $ = "modal_root",
              renderTitle: z,
              should_close_on_click_outside: S,
              should_header_stick_body: M = !0,
              small: R,
              title: D,
              toggleModal: L,
              width: T,
            } = e,
            H = l.useRef(document.createElement("div")),
            O = $ && document.getElementById($),
            P = l.useRef(O || document.getElementById($)),
            F = l.useRef(null),
            I = [
              ".dc-datepicker__picker",
              ".dc-mobile-dialog",
              ".dc-dropdown-list",
              ".dc-dropdown__list",
              ".modal_root",
            ],
            B = () => {
              var e;
              return null === (e = P.current) || void 0 === e
                ? void 0
                : e.querySelectorAll(I.join(", ")).length;
            };
          (0, d.t)(
            F,
            () => {
              f && (null == L || L());
            },
            (e) => {
              var t, r;
              let s =
                  null === (t = document.getElementById("popup_root")) ||
                  void 0 === t
                    ? void 0
                    : t.hasChildNodes(),
                l =
                  e.path ??
                  (null === (r = e.composedPath) || void 0 === r
                    ? void 0
                    : r.call(e));
              return (
                S ||
                (_ &&
                  !B() &&
                  f &&
                  !s &&
                  !(a && (null == l ? void 0 : l.find((e) => a.includes(e)))))
              );
            }
          ),
            l.useEffect(() => {
              var e, t;
              return (
                H.current.classList.add("dc-modal"),
                null == P ||
                  null === (t = P.current) ||
                  void 0 === t ||
                  null === (e = t.appendChild) ||
                  void 0 === e ||
                  e.call(t, H.current),
                null == Z || Z(),
                () => {
                  let e = null == P ? void 0 : P.current,
                    t = null == H ? void 0 : H.current;
                  e &&
                    t &&
                    (null == e ? void 0 : e.contains(t)) &&
                    (null == e || e.removeChild(t)),
                    null == C || C();
                }
              );
            }, []);
          let A = l.useCallback(
            (e) => {
              "Escape" === e.key && (null == L || L());
            },
            [L]
          );
          l.useEffect(
            () => (
              window.addEventListener("keydown", A),
              () => window.removeEventListener("keydown", A)
            ),
            [A]
          );
          let X = z ? z() : null;
          return i.createPortal(
            (0, s.jsxs)("div", {
              ref: F,
              id: p,
              className: n()("dc-modal__container", {
                [`dc-modal__container_${r}`]: r,
                "dc-modal__container--risk-message": b,
                "dc-modal__container--small": R,
                "dc-modal__container--is-vertical-centered": w,
                "dc-modal__container--is-vertical-bottom": N,
                "dc-modal__container--is-vertical-top": k,
                "dc-modal__container--is-confirmation-modal": j,
              }),
              style: { height: v || "auto", width: T || "auto" },
              children: [
                !b &&
                  (g || D || X) &&
                  (0, s.jsxs)("div", {
                    className: n()("dc-modal-header", {
                      "dc-modal-header__border-bottom": !M,
                      [`dc-modal-header--${r}`]: r,
                      "dc-modal-header--is-title-centered": y,
                    }),
                    style: { background: x },
                    children: [
                      X &&
                        (0, s.jsx)(m.Z, {
                          as: "h3",
                          color: "prominent",
                          weight: "bold",
                          styles: { lineHeight: "2.4rem" },
                          className: n()("dc-modal-header__title", {
                            [`dc-modal-header__title--${r}`]: r,
                          }),
                          children: X,
                        }),
                      D &&
                        (0, s.jsxs)(m.Z, {
                          as: "h3",
                          color: "prominent",
                          weight: "bold",
                          styles: { lineHeight: "2.4rem" },
                          className: n()("dc-modal-header__title", {
                            [`dc-modal-header__title--${r}`]: r,
                          }),
                          children: [
                            u &&
                              (0, s.jsx)(c.Z, {
                                onClick: E,
                                className: "dc-modal-header__icon",
                              }),
                            D,
                          ],
                        }),
                      g &&
                        (0, s.jsx)("div", {
                          className: n()("dc-modal-header__section", {
                            [`dc-modal-header__section--${r}`]: r,
                          }),
                          children: g,
                        }),
                      _ &&
                        (0, s.jsx)("div", {
                          onClick: L,
                          className: "dc-modal-header__close",
                          role: "button",
                          children: (0, s.jsx)(h.Z, {
                            height: "20px",
                            width: "20px",
                            color: o,
                            "data-testid": "dt_modal_close_icon",
                            fill: "var(--text-general)",
                            className: "icon-general-fill-path",
                          }),
                        }),
                    ],
                  }),
                t,
              ],
            }),
            H.current
          );
        },
        u = (e) => {
          let {
            children: t,
            className: r,
            close_icon_color: l,
            elements_to_ignore: o,
            exit_classname: n,
            has_close_icon: i = !0,
            has_return_icon: d = !1,
            header: c,
            header_background_color: h,
            height: m,
            id: u,
            is_confirmation_modal: g,
            is_open: x,
            is_risk_warning_visible: v,
            is_title_centered: p,
            is_vertical_bottom: j,
            is_vertical_centered: f,
            is_vertical_top: b,
            onEntered: y,
            onExited: N,
            onMount: w,
            onReturn: k,
            onUnmount: Z,
            portalId: E = "modal_root",
            renderTitle: C,
            should_close_on_click_outside: $ = !1,
            should_header_stick_body: z = !0,
            small: S,
            title: M,
            transition_timeout: R,
            toggleModal: D,
            width: L,
          } = e;
          return (0, s.jsx)(a.Z, {
            appear: !0,
            in: x,
            timeout: R || 250,
            classNames: {
              appear: "dc-modal__container--enter",
              enter: "dc-modal__container--enter",
              enterDone: "dc-modal__container--enter-done",
              exit: n || "dc-modal__container--exit",
            },
            unmountOnExit: !0,
            onEntered: y,
            onExited: N,
            children: (0, s.jsx)(_, {
              className: r,
              close_icon_color: l,
              should_header_stick_body: z,
              has_return_icon: d,
              header: c,
              header_background_color: h,
              id: u,
              is_open: x,
              is_risk_warning_visible: v,
              is_confirmation_modal: g,
              is_vertical_bottom: j,
              is_vertical_centered: f,
              is_vertical_top: b,
              is_title_centered: p,
              title: M,
              toggleModal: D,
              has_close_icon: i,
              height: m,
              onMount: w,
              onReturn: k,
              onUnmount: Z,
              portalId: E,
              renderTitle: C,
              should_close_on_click_outside: $,
              small: S,
              width: L,
              elements_to_ignore: o,
              children: t,
            }),
          });
        };
      (u.Body = (e) => {
        let { children: t, className: r } = e;
        return (0, s.jsx)("div", {
          className: n()("dc-modal-body", r),
          children: t,
        });
      }),
        (u.Footer = (e) => {
          let {
            children: t,
            className: r,
            has_separator: o,
            is_bypassed: i,
          } = e;
          return i
            ? (0, s.jsx)(l.Fragment, { children: t })
            : (0, s.jsx)("div", {
                "data-testid": "dt_modal_footer",
                className: n()(
                  "dc-modal-footer",
                  { "dc-modal-footer--separator": o },
                  r
                ),
                children: t,
              });
        });
      let g = u;
    },
    43882: function (e, t, r) {
      r.d(t, { Z: () => s });
      let s = r(40150).Z;
    },
    40150: function (e, t, r) {
      r.d(t, { Z: () => a });
      var s = r(85893),
        l = r(67294),
        o = r(63387),
        n = r.n(o),
        i = r(86278);
      let a = (e) => {
        let {
            autohide: t = !0,
            children: r,
            className: o,
            has_horizontal: a,
            height: d,
            is_bypassed: c,
            is_only_horizontal: h,
            is_only_horizontal_overlay: m,
            is_scrollbar_hidden: _,
            testId: u = "dt_themed_scrollbars",
            onScroll: g,
            refSetter: x = null,
            style: v = {},
            scroll_height: p,
            should_scroll_to_selected: j = !1,
            width: f,
          } = e,
          [b, y] = (0, i.X)(x, !1);
        return (l.useEffect(() => {
          if (j && p) {
            var e;
            null == b ||
              null === (e = b.current) ||
              void 0 === e ||
              e.scrollTo(0, p);
          }
        }, [p, b, j]),
        c)
          ? r
          : (0, s.jsx)("div", {
              "data-testid": u,
              ref: b,
              className: n()("dc-themed-scrollbars", o, {
                "dc-themed-scrollbars__autohide": t,
                "dc-themed-scrollbars__autohide--is-hovered": t && y,
                "dc-themed-scrollbars--has-horizontal": a,
                "dc-themed-scrollbars--only-horizontal": h,
                "dc-themed-scrollbars--only-horizontal-overlay": m,
                "dc-themed-scrollbars--hidden-scrollbar": _,
              }),
              style: { maxHeight: d || "100%", maxWidth: f || "none", ...v },
              onScroll: g,
              children: r,
            });
      };
    },
    86278: function (e, t, r) {
      r.d(t, { X: () => l, m: () => o });
      var s = r(67294);
      let l = (e, t) => {
          let [r, l] = s.useState(!1),
            o = s.useRef(null),
            n = e || o,
            i = () => l(!0),
            a = () => l(!1);
          return (
            s.useEffect(() => {
              let e = n.current;
              if (e)
                return (
                  t
                    ? (e.addEventListener("mouseenter", i),
                      e.addEventListener("mouseleave", a))
                    : (e.addEventListener("mouseover", i),
                      e.addEventListener("mouseout", a)),
                  () => {
                    t
                      ? (e.removeEventListener("mouseenter", i),
                        e.removeEventListener("mouseleave", a))
                      : (e.removeEventListener("mouseover", i),
                        e.removeEventListener("mouseout", a));
                  }
                );
            }, [n, t]),
            [n, r]
          );
        },
        o = () => {
          let [e, t] = s.useState(!1),
            r = s.useCallback(() => t(!0), []),
            l = s.useCallback(() => t(!1), []),
            o = s.useRef(null);
          return [
            s.useCallback(
              (e) => {
                o.current &&
                  (o.current.removeEventListener("mouseover", r),
                  o.current.removeEventListener("mouseout", l)),
                  (o.current = e),
                  o.current &&
                    (o.current.addEventListener("mouseover", r),
                    o.current.addEventListener("mouseout", l));
              },
              [r, l]
            ),
            e,
          ];
        };
    },
  },
]);
