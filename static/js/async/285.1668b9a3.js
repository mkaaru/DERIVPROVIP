"use strict";
(self.webpackChunkbot = self.webpackChunkbot || []).push([
  ["285"],
  {
    99770: function (e, t, s) {
      s.r(t), s.d(t, { default: () => y });
      var r = s(85893),
        a = s(67294),
        n = s(18470),
        i = s(96877),
        o = s(80277),
        d = s(15297),
        l = s(1599),
        c = s(67850),
        g = s(70521);
      let p = (0, l.ZF)({
          apiKey: "AIzaSyBSvoI9s0EJNXAYiSj0aiLZJxr-JAxa7q8",
          authDomain: "bot-analysis-tool-belex.firebaseapp.com",
          projectId: "bot-analysis-tool-belex",
          storageBucket: "bot-analysis-tool-belex.appspot.com",
          messagingSenderId: "1088891054402",
          appId: "1:1088891054402:web:b28fde06f1f060fd1000db",
        }),
        u = (0, c.ad)(p),
        m = async (e) => {
          let t = (0, c.JU)(u, "accountTokens", e),
            s = await (0, c.QT)(t);
          return s.exists() ? s.data().tokens : [];
        },
        h = async (e, t) => {
          let s = (0, c.JU)(u, "accountTokens", e);
          await (0, c.pl)(s, { tokens: t }, { merge: !0 });
        },
        x = async (e, t, s) => {
          let r = (await m(e)).map((e) =>
            e.token === t ? { ...e, status: s } : e
          );
          await h(e, r);
        },
        y = (0, i.Pi)(() => {
          let [e, t] = (0, a.useState)(null),
            [s, i] = (0, a.useState)([]),
            [l, c] = (0, a.useState)(""),
            [p, u] = (0, a.useState)({ text: "", className: "" }),
            [y, N] = (0, a.useState)(!1),
            [f, v] = (0, a.useState)(!1),
            [j, b] = (0, a.useState)(""),
            [S, _] = (0, a.useState)(""),
            [k, E] = (0, a.useState)("acct1"),
            [w, T] = (0, a.useState)(null),
            [O, L] = (0, a.useState)(localStorage.getItem("authToken") || ""),
            [C, A] = (0, a.useState)(""),
            [J, q] = (0, a.useState)(""),
            [$, I] = (0, a.useState)("trader-list"),
            [z, P] = (0, a.useState)([]),
            [D, R] = (0, a.useState)({}),
            W = (0, a.useRef)(null),
            [U, Y] = (0, a.useState)(!1),
            [B, M] = (0, a.useState)({}),
            F = (0, a.useRef)(null),
            V = async () => {
              if (e)
                try {
                  let t = await m(e);
                  i(t),
                    t.forEach((t) => {
                      if ("pending" === t.status) {
                        let s = Date.now();
                        null == w ||
                          w.send(
                            JSON.stringify({ authorize: t.token, req_id: s })
                          );
                        let r = (a) => {
                          let n = JSON.parse(a.data);
                          if ("authorize" === n.msg_type && n.req_id === s) {
                            null == w || w.removeEventListener("message", r);
                            let s = n.error ? "error" : "verified";
                            x(e, t.token, s).then(() => V());
                          }
                        };
                        null == w || w.addEventListener("message", r);
                      }
                    });
                } catch (e) {
                  console.error("Error loading tokens:", e);
                }
            },
            Z = (e) => {
              let t = "string" == typeof e ? e : e.token;
              return "string" != typeof t
                ? (console.error("Invalid token format:", e), "Invalid Token")
                : t.length <= 8
                ? t
                : t.substring(0, 4) + "..." + t.substring(t.length - 4);
            },
            G = async () => {
              if (!e || !w) {
                alert("Please authorize your main account first");
                return;
              }
              let t = l.trim();
              if (t)
                try {
                  await new Promise((e, t) => {
                    let s = Date.now();
                    w.send(JSON.stringify({ authorize: O, req_id: s }));
                    let r = (a) => {
                      let n = JSON.parse(a.data);
                      if ("authorize" === n.msg_type && n.req_id === s) {
                        if ((w.removeEventListener("message", r), n.error)) {
                          t(Error("Authorization failed: " + n.error.message));
                          return;
                        }
                        w.send(
                          JSON.stringify({
                            set_settings: 1,
                            allow_copiers: 1,
                            req_id: s + 1,
                          })
                        );
                        let a = (r) => {
                          let n = JSON.parse(r.data);
                          "set_settings" === n.msg_type &&
                            n.req_id === s + 1 &&
                            (w.removeEventListener("message", a),
                            n.error
                              ? t(
                                  Error(
                                    "Failed to allow copy trading: " +
                                      n.error.message
                                  )
                                )
                              : e());
                        };
                        w.addEventListener("message", a);
                      }
                    };
                    w.addEventListener("message", r);
                  });
                  let s = await m(e);
                  if (s.some((e) => e.token === t)) {
                    alert("This token is already added");
                    return;
                  }
                  let r = [...s, { token: t, status: "pending" }];
                  await h(e, r),
                    i(r),
                    c(""),
                    u({
                      text: "Starting copy trading...",
                      className: "pending",
                    });
                  let a = Date.now();
                  w.send(JSON.stringify({ authorize: t, req_id: a })),
                    await new Promise((e, t) => {
                      let s = (r) => {
                        let n = JSON.parse(r.data);
                        if ("authorize" === n.msg_type && n.req_id === a) {
                          if ((w.removeEventListener("message", s), n.error)) {
                            t(
                              Error(
                                "Token verification failed: " + n.error.message
                              )
                            );
                            return;
                          }
                          e();
                        }
                      };
                      w.addEventListener("message", s);
                    }),
                    console.log("copy started for " + O);
                  let n = a + 1,
                    o = { copy_start: O, req_id: n };
                  C && (o.max_trade_stake = Number(C)),
                    J && (o.min_trade_stake = Number(J)),
                    w.send(JSON.stringify(o)),
                    await new Promise((e, t) => {
                      let s = (r) => {
                        let a = JSON.parse(r.data);
                        "copy_start" === a.msg_type &&
                          a.req_id === n &&
                          (w.removeEventListener("message", s),
                          a.error
                            ? t(Error("Copy start failed: " + a.error.message))
                            : e());
                      };
                      w.addEventListener("message", s);
                    }),
                    await x(e, t, "success"),
                    V(),
                    u({
                      text: "Copy trading started successfully!",
                      className: "success",
                    });
                } catch (s) {
                  console.error("Error in add token process:", s),
                    await x(e, t, "error"),
                    u({
                      text: `Error: ${
                        s instanceof Error
                          ? s.message
                          : "Failed to start copy trading"
                      }`,
                      className: "error",
                    }),
                    V();
                }
            },
            K = (e) => {
              let t;
              let s = () => {
                  t = setInterval(() => {
                    e.readyState === WebSocket.OPEN &&
                      e.send(JSON.stringify({ ping: 1 }));
                  }, 3e4);
                },
                r = (e) => {
                  "pong" === JSON.parse(e.data).msg_type &&
                    console.log("Pong received - connection healthy");
                };
              return (
                e.addEventListener("open", s),
                e.addEventListener("message", r),
                () => {
                  clearInterval(t),
                    e.removeEventListener("message", r),
                    e.removeEventListener("open", s);
                }
              );
            },
            H = async (t) => {
              let r = s[t];
              if (r && w && e) {
                u({
                  text: `Stopping copy trading for ${Z(r)}...`,
                  className: "pending",
                });
                try {
                  let a = Date.now();
                  w.send(JSON.stringify({ authorize: r.token, req_id: a })),
                    await new Promise((e, t) => {
                      let s = setTimeout(
                          () => t(Error("Authorization timeout")),
                          5e3
                        ),
                        r = (n) => {
                          let i = JSON.parse(n.data);
                          "authorize" === i.msg_type &&
                            i.req_id === a &&
                            (clearTimeout(s),
                            null == w || w.removeEventListener("message", r),
                            i.error ? t(i.error) : e(null));
                        };
                      w.addEventListener("message", r);
                    });
                  let n = Date.now() + 1;
                  w.send(JSON.stringify({ copy_stop: O, req_id: n })),
                    await new Promise((e, t) => {
                      let s = setTimeout(
                          () => t(Error("Copy stop timeout")),
                          5e3
                        ),
                        r = (a) => {
                          let i = JSON.parse(a.data);
                          "copy_stop" === i.msg_type &&
                            i.req_id === n &&
                            (clearTimeout(s),
                            null == w || w.removeEventListener("message", r),
                            i.error ? t(i.error) : e(null));
                        };
                      w.addEventListener("message", r);
                    });
                  let o = s.filter((e, s) => s !== t);
                  await h(e, o),
                    i(o),
                    u({
                      text: `Successfully stopped copy trading for ${Z(r)}`,
                      className: "success",
                    });
                } catch (e) {
                  console.error("Error stopping copy trading:", e),
                    u({
                      text: `Failed to stop copy trading: ${e.message}`,
                      className: "error",
                    });
                }
              }
            },
            Q = async () => {
              u({ text: "Starting copy trading...", className: "pending" });
              let e = 0,
                t = 0,
                r = [];
              for (let a = 0; a < s.length; a++) {
                let n = s[a];
                try {
                  let t = { authorize: n.token, req_id: 1e3 + a };
                  null == w || w.send(JSON.stringify(t)),
                    await new Promise((e, t) => {
                      let s = setTimeout(() => {
                          t(Error("Authorization timeout"));
                        }, 5e3),
                        r = (n) => {
                          let i = JSON.parse(n.data);
                          "authorize" === i.msg_type &&
                            i.req_id === 1e3 + a &&
                            (clearTimeout(s),
                            null == w || w.removeEventListener("message", r),
                            i.error ? t(Error(i.error.message)) : e(null));
                        };
                      null == w || w.addEventListener("message", r);
                    });
                  let r = { copy_start: O, req_id: 2e3 + a };
                  C && (r.max_trade_stake = Number(C)),
                    J && (r.min_trade_stake = Number(J)),
                    await new Promise((e, t) => {
                      let s = setTimeout(() => {
                          t(Error("Copy start timeout"));
                        }, 5e3),
                        n = (r) => {
                          let i = JSON.parse(r.data);
                          "copy_start" === i.msg_type &&
                            i.req_id === 2e3 + a &&
                            (clearTimeout(s),
                            null == w || w.removeEventListener("message", n),
                            i.error ? t(Error(i.error.message)) : e(null));
                        };
                      null == w || w.addEventListener("message", n),
                        null == w || w.send(JSON.stringify(r));
                    });
                  let o = [...s];
                  (o[a] = { ...o[a], status: "success" }), i(o), e++;
                } catch (n) {
                  console.error(
                    `Error starting copy trading for token ${a}:`,
                    n
                  );
                  let e = [...s];
                  (e[a] = { ...e[a], status: "error" }),
                    i(e),
                    t++,
                    r.push(
                      `Token ${a}: ${
                        n instanceof Error ? n.message : String(n)
                      }`
                    );
                }
              }
              0 === t
                ? u({
                    text: `Copy trading started successfully for all ${e} tokens!`,
                    className: "success",
                  })
                : u({
                    text: `Copy trading failed for ${t} tokens. Successful: ${e}. Errors: ${r.join(
                      "; "
                    )}`,
                    className: "error",
                  }),
                null == w ||
                  w.send(JSON.stringify({ copytrading_list: 1, req_id: 100 }));
            },
            X = async () => {
              u({ text: "Stopping copy trading...", className: "pending" });
              let e = 0,
                t = 0,
                r = [];
              for (let a = 0; a < s.length; a++) {
                let n = s[a];
                try {
                  let t = { authorize: n.token, req_id: 1e3 + a };
                  null == w || w.send(JSON.stringify(t)),
                    await new Promise((e, t) => {
                      let s = setTimeout(() => {
                          t(Error("Authorization timeout"));
                        }, 5e3),
                        r = (n) => {
                          let i = JSON.parse(n.data);
                          "authorize" === i.msg_type &&
                            i.req_id === 1e3 + a &&
                            (clearTimeout(s),
                            null == w || w.removeEventListener("message", r),
                            i.error ? t(Error(i.error.message)) : e(null));
                        };
                      null == w || w.addEventListener("message", r);
                    });
                  let r = { copy_stop: O, req_id: 3e3 + a };
                  await new Promise((e, t) => {
                    let s = setTimeout(() => {
                        t(Error("Copy stop timeout"));
                      }, 5e3),
                      n = (r) => {
                        let i = JSON.parse(r.data);
                        "copy_stop" === i.msg_type &&
                          i.req_id === 3e3 + a &&
                          (clearTimeout(s),
                          null == w || w.removeEventListener("message", n),
                          i.error ? t(Error(i.error.message)) : e(null));
                      };
                    null == w || w.addEventListener("message", n),
                      null == w || w.send(JSON.stringify(r));
                  });
                  let o = [...s];
                  (o[a] = { ...o[a], status: "pending" }), i(o), e++;
                } catch (n) {
                  console.error(
                    `Error stopping copy trading for token ${a}:`,
                    n
                  );
                  let e = [...s];
                  (e[a] = { ...e[a], status: "error" }),
                    i(e),
                    t++,
                    r.push(
                      `Token ${a}: ${
                        n instanceof Error ? n.message : String(n)
                      }`
                    );
                }
              }
              0 === t
                ? u({
                    text: `Copy trading stopped successfully for all ${e} tokens!`,
                    className: "success",
                  })
                : u({
                    text: `Copy trading stop failed for ${t} tokens. Successful: ${e}. Errors: ${r.join(
                      "; "
                    )}`,
                    className: "error",
                  }),
                null == w ||
                  w.send(JSON.stringify({ copytrading_list: 1, req_id: 100 }));
            },
            ee = (e) => {
              E(e),
                sessionStorage.setItem("selectedAccount", e),
                w && w.close(),
                L(
                  "acct1" === e
                    ? sessionStorage.getItem("token1") || ""
                    : sessionStorage.getItem("token2") || ""
                );
              let r = (0, n.rh)(),
                a = new WebSocket(
                  `wss://ws.derivws.com/websockets/v3?app_id=${r}`
                ),
                o = K(a);
              a.addEventListener("open", (e) => {
                console.log("Websocket connection established:", e), N(!0);
                let t = localStorage.getItem("authToken") || "";
                if ((L(t), !t)) {
                  console.error("WebSocket connection failed: No auth token");
                  return;
                }
                let s = JSON.stringify({ authorize: t, req_id: 9999 });
                a.send(s);
              }),
                a.addEventListener("message", (r) => {
                  let n = JSON.parse(r.data),
                    o = JSON.parse(r.data);
                  if ("authorize" === o.msg_type && 9999 === o.req_id) {
                    console.log("Main account authorization successful:", n),
                      v(!0),
                      t(o.authorize.loginid),
                      console.log(
                        "Loading tokens for loginId:",
                        o.authorize.loginid
                      ),
                      setTimeout(() => V(), 0),
                      a.send(
                        JSON.stringify({ copytrading_list: 1, req_id: 1 })
                      ),
                      a.send(
                        JSON.stringify({
                          copytrading_statistics: 1,
                          trader_id: "VRTC8609996",
                          req_id: 2,
                        })
                      );
                    let s = JSON.stringify({
                      balance: 1,
                      account: "current",
                      subscribe: 1,
                      passthrough: {},
                      req_id: 1,
                    });
                    a.send(s),
                      "acct1" === e
                        ? _(sessionStorage.getItem("acct1") || "")
                        : "acct2" === e &&
                          _(sessionStorage.getItem("acct2") || "");
                  } else if (
                    "authorize" === o.msg_type &&
                    o.req_id >= 1e3 &&
                    o.req_id < 2e3
                  ) {
                    let e = o.req_id - 1e3,
                      t = [...s];
                    o.error
                      ? (console.error(
                          `Trader authorization failed for token ${e}:`,
                          o.error
                        ),
                        (t[e] = { ...t[e], status: "error" }))
                      : (console.log(
                          `Trader authorization successful for token ${e}`
                        ),
                        (t[e] = { ...t[e], status: "pending" })),
                      i(t);
                  }
                  if (
                    "copy_start" === o.msg_type &&
                    o.req_id >= 2e3 &&
                    o.req_id < 3e3
                  ) {
                    let e = o.req_id - 2e3,
                      t = [...s];
                    o.error
                      ? (console.error(
                          `Copy start failed for token ${e}:`,
                          o.error
                        ),
                        (t[e] = { ...t[e], status: "error" }))
                      : (console.log(
                          `Copy trading started successfully for token ${e}`
                        ),
                        (t[e] = { ...t[e], status: "success" })),
                      i(t);
                  }
                  if (
                    "copy_stop" === o.msg_type &&
                    o.req_id >= 3e3 &&
                    o.req_id < 4e3
                  ) {
                    let e = o.req_id - 3e3,
                      t = [...s];
                    o.error
                      ? (console.error(
                          `Copy stop failed for token ${e}:`,
                          o.error
                        ),
                        (t[e] = { ...t[e], status: "error" }))
                      : (console.log(
                          `Copy trading stopped successfully for token ${e}`
                        ),
                        (t[e] = { ...t[e], status: "pending" })),
                      i(t);
                  }
                  if (
                    ("copytrading_list" === o.msg_type &&
                      100 === o.req_id &&
                      P(o.copytrading_list.traders || []),
                    "copytrading_statistics" === o.msg_type)
                  )
                    R(o.copytrading_statistics || {});
                  else if ("balance" === n.msg_type) {
                    if (n.error) {
                      if (
                        (console.error("Balance request error:", n.error),
                        b(""),
                        "acct1" === e)
                      ) {
                        let e = sessionStorage.getItem("acct1"),
                          t = sessionStorage.getItem("cur1");
                        _(e ? `${e}${t}` : "create or/switch to demo");
                      } else if ("acct2" === e) {
                        let e = sessionStorage.getItem("acct2"),
                          t = sessionStorage.getItem("cur2");
                        _(e ? `${e}${t}` : "Demo Acct - No Account");
                      }
                    } else if ("acct1" === e) {
                      let e = sessionStorage.getItem("acct1");
                      sessionStorage.getItem("cur1"),
                        _(e || ""),
                        b(`Balance: ${n.balance.balance} USD`);
                    } else if ("acct2" === e) {
                      let e = sessionStorage.getItem("acct2");
                      sessionStorage.getItem("cur2"),
                        _(e || ""),
                        b(`Balance: ${n.balance.balance} USD`);
                    }
                  } else console.log("received message: ", n);
                }),
                a.addEventListener("close", (e) => {
                  o(),
                    console.log("websocket connection closed: ", e),
                    v(!1),
                    N(!1);
                }),
                a.addEventListener("error", (e) => {
                  console.log(
                    "an error happened in our websocket connection",
                    e
                  );
                }),
                T(a);
            };
          return (
            (0, a.useEffect)(() => {
              let e = (0, n.rh)(),
                t = new WebSocket(
                  `wss://ws.derivws.com/websockets/v3?app_id=${e}`
                );
              return (
                (F.current = t),
                (t.onopen = () => {
                  let e = localStorage.getItem("authToken") || "";
                  t.send(JSON.stringify({ authorize: e })),
                    t.send(JSON.stringify({ subscribe: 1, transaction: 1 }));
                }),
                () => {
                  t.close();
                }
              );
            }, []),
            (0, a.useEffect)(() => {
              if (!U || !F.current) return;
              let e = F.current,
                t = (e) => {
                  var t;
                  let r = JSON.parse(e.data);
                  if (
                    "transaction" === r.msg_type &&
                    (null === (t = r.transaction) || void 0 === t
                      ? void 0
                      : t.action) === "buy"
                  ) {
                    let e = r.transaction,
                      t = e.transaction_id;
                    if (B[t]) return;
                    M((s) => ({ ...s, [t]: e })),
                      s.forEach(async (e) => {
                        e.status;
                      });
                  }
                };
              return (
                e.addEventListener("message", t),
                () => e.removeEventListener("message", t)
              );
            }, [U, s, B]),
            (0, a.useEffect)(() => {
              (async () => {
                let e = sessionStorage.getItem("selectedAccount") || "acct1";
                E(e);
                let t = localStorage.getItem("authToken");
                t ? (L(t), ee(e)) : console.error("No auth token found");
              })();
            }, []),
            (0, a.useEffect)(() => {
              e && f && V();
            }, [e, f]),
            (0, a.useEffect)(() => {
              if (!O) {
                let e = localStorage.getItem("authToken");
                e ? L(e) : console.error("User not authenticated");
              }
            }, [O]),
            (0, a.useEffect)(() => {
              let e = (e) => {
                "authToken" === e.key && L(e.newValue || "");
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, []),
            (0, a.useEffect)(() => {
              let e = () => {
                  let e = new Date();
                  e.getHours(),
                    e.getMinutes(),
                    e.getMonth(),
                    e.getDate(),
                    e.getFullYear();
                },
                t = setInterval(e, 6e4);
              return e(), () => clearInterval(t);
            }, []),
            (0, r.jsx)("div", {
              className: "copy-trading",
              children: (0, r.jsxs)("div", {
                className: "copy-trading__content",
                children: [
                  (0, r.jsx)("div", {
                    className: "top-navbar",
                    children: (0, r.jsxs)("div", {
                      className: "inner-nav",
                      children: [
                        (0, r.jsx)("div", { className: "row" }),
                        (0, r.jsxs)("div", {
                          className: "balance",
                          children: [
                            (0, r.jsx)("p", { children: S }),
                            (0, r.jsx)("p", { children: j }),
                          ],
                        }),
                        (0, r.jsx)("div", {
                          className: "status",
                          children: (0, r.jsxs)("div", {
                            className: "status-item",
                            children: [
                              (0, r.jsx)("span", { children: "Status" }),
                              (0, r.jsx)("div", {
                                id: "websocket-status-indicator",
                                className: `status-indicator ${
                                  y ? "online" : "offline"
                                }`,
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, r.jsx)("div", {
                    className: "tab-container",
                    children: (0, r.jsx)("div", {
                      className: "tab-content",
                      children: (0, r.jsx)("div", {
                        className: "trading-hub",
                        children: (0, r.jsxs)("div", {
                          className: "hub-content",
                          children: [
                            (0, r.jsxs)("div", {
                              className: "cards-grid",
                              children: [
                                (0, r.jsxs)("div", {
                                  id: "trading-options",
                                  className: "hub-card config-card",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "card-shine",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "hub-card-header",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className: "card-title",
                                          children: "TRADING SETUP",
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "card-controls",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className: "control-dot",
                                            }),
                                            (0, r.jsx)("div", {
                                              className: "control-dot",
                                            }),
                                            (0, r.jsx)("div", {
                                              className: "control-dot",
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      id: "copy-trading-settings",
                                      className: "hub-card-content",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "trader-selection",
                                          children: [
                                            (0, r.jsx)("label", {
                                              className: "neon-label",
                                              children: "MANAGE TRADER TOKENS",
                                            }),
                                            (0, r.jsxs)("div", {
                                              className: "token-input-group",
                                              children: [
                                                (0, r.jsx)("input", {
                                                  type: "text",
                                                  id: "tokenInput",
                                                  className: "futuristic-input",
                                                  placeholder:
                                                    "Enter trader auth token",
                                                  value: l,
                                                  onChange: (e) =>
                                                    c(e.target.value),
                                                }),
                                                (0, r.jsx)("button", {
                                                  id: "addTokenBtn",
                                                  className: "token-action-btn",
                                                  onClick: G,
                                                  children: "Add",
                                                }),
                                                (0, r.jsxs)("button", {
                                                  id: "syncBtn",
                                                  className:
                                                    "token-action-btn sync-btn",
                                                  onClick: () => {
                                                    window.location.reload();
                                                  },
                                                  children: [
                                                    "Reload ",
                                                    (0, r.jsx)(g.Z, {
                                                      style: {
                                                        fontSize: "1.2rem",
                                                      },
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                            (0, r.jsx)("div", {
                                              style: { margin: "20px 0" },
                                              children: (0, r.jsx)(o.Z, {
                                                control: (0, r.jsx)(d.Z, {
                                                  checked: U,
                                                  onChange: (e) =>
                                                    Y(e.target.checked),
                                                  color: "primary",
                                                }),
                                                label: "Enable Copy Trading",
                                                style: { color: "#fff" },
                                              }),
                                            }),
                                            p.text &&
                                              (0, r.jsx)("p", {
                                                id: "copy-trading-status",
                                                className: `copy-trading-status ${p.className}`,
                                                children: p.text,
                                              }),
                                            (0, r.jsx)("div", {
                                              id: "tokenListContainer",
                                              className: "token-list-container",
                                              ref: W,
                                              children:
                                                0 === s.length
                                                  ? (0, r.jsx)("div", {
                                                      className:
                                                        "empty-list-message",
                                                      children:
                                                        "No tokens added yet",
                                                    })
                                                  : s.map((e, t) =>
                                                      (0, r.jsxs)(
                                                        "div",
                                                        {
                                                          className:
                                                            "token-item",
                                                          children: [
                                                            (0, r.jsxs)("div", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className:
                                                                      "token-text",
                                                                    children:
                                                                      Z(e),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "span",
                                                                  {
                                                                    className: `token-status ${e.status}`,
                                                                    children:
                                                                      "success" ===
                                                                      e.status
                                                                        ? (0,
                                                                          r.jsx)(
                                                                            "span",
                                                                            {
                                                                              style:
                                                                                {
                                                                                  color:
                                                                                    "#212121",
                                                                                  backgroundColor:
                                                                                    "rgba(0, 255, 157, 0.7)",
                                                                                  padding:
                                                                                    "2px 6px",
                                                                                  borderRadius:
                                                                                    "3px",
                                                                                  fontWeight: 500,
                                                                                },
                                                                              children:
                                                                                "Trader Active ✓",
                                                                            }
                                                                          )
                                                                        : "error" ===
                                                                          e.status
                                                                        ? (0,
                                                                          r.jsx)(
                                                                            "span",
                                                                            {
                                                                              style:
                                                                                {
                                                                                  color:
                                                                                    "#212121",
                                                                                  backgroundColor:
                                                                                    "rgba(255, 58, 58, 0.7)",
                                                                                  padding:
                                                                                    "2px 6px",
                                                                                  borderRadius:
                                                                                    "3px",
                                                                                  fontWeight: 500,
                                                                                },
                                                                              children:
                                                                                "Configuration Error ⚠️",
                                                                            }
                                                                          )
                                                                        : (0,
                                                                          r.jsx)(
                                                                            "span",
                                                                            {
                                                                              style:
                                                                                {
                                                                                  color:
                                                                                    "#212121",
                                                                                  backgroundColor:
                                                                                    "rgba(255, 204, 0, 0.7)",
                                                                                  padding:
                                                                                    "2px 6px",
                                                                                  borderRadius:
                                                                                    "3px",
                                                                                  fontWeight: 500,
                                                                                },
                                                                              children:
                                                                                "Awaiting Activation",
                                                                            }
                                                                          ),
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsx)("span", {
                                                              className:
                                                                "remove-token",
                                                              title:
                                                                "Stop Copy Trading",
                                                              onClick: () =>
                                                                H(t),
                                                              children: "\xd7",
                                                            }),
                                                          ],
                                                        },
                                                        t
                                                      )
                                                    ),
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "button-container",
                                          style: { display: "none" },
                                          children: [
                                            (0, r.jsxs)("button", {
                                              id: "start-copy-trading",
                                              className:
                                                "cyber-button activate",
                                              onClick: Q,
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "button-text",
                                                  children:
                                                    "START COPY TRADING",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className: "button-glitch",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("button", {
                                              id: "stop-copy-trading",
                                              className:
                                                "cyber-button deactivate",
                                              onClick: X,
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "button-text",
                                                  children: "STOP COPY TRADING",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className: "button-glitch",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("button", {
                                              id: "allow-copy",
                                              className: "cyber-button",
                                              onClick: () => {
                                                console.log(
                                                  "Allow Copy Clicked"
                                                ),
                                                  null == w ||
                                                    w.send(
                                                      JSON.stringify({
                                                        authorize: O,
                                                        req_id: 9998,
                                                      })
                                                    );
                                                let e = (t) => {
                                                  let s = JSON.parse(t.data);
                                                  "authorize" === s.msg_type &&
                                                    9998 === s.req_id &&
                                                    (s.error
                                                      ? console.error(
                                                          "Authorization failed:",
                                                          s.error
                                                        )
                                                      : null == w ||
                                                        w.send(
                                                          JSON.stringify({
                                                            set_settings: 1,
                                                            allow_copiers: 1,
                                                          })
                                                        ),
                                                    null == w ||
                                                      w.removeEventListener(
                                                        "message",
                                                        e
                                                      ));
                                                };
                                                null == w ||
                                                  w.addEventListener(
                                                    "message",
                                                    e
                                                  );
                                              },
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "button-text",
                                                  children: "ALLOW COPY",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className: "button-glitch",
                                                }),
                                              ],
                                            }),
                                            (0, r.jsxs)("button", {
                                              id: "disallow-copy",
                                              className:
                                                "cyber-button secondary",
                                              onClick: () => {
                                                console.log(
                                                  "Disallow Copy Clicked"
                                                ),
                                                  null == w ||
                                                    w.send(
                                                      JSON.stringify({
                                                        authorize: O,
                                                        req_id: 9997,
                                                      })
                                                    );
                                                let e = (t) => {
                                                  let s = JSON.parse(t.data);
                                                  "authorize" === s.msg_type &&
                                                    9997 === s.req_id &&
                                                    (s.error
                                                      ? console.error(
                                                          "Authorization failed:",
                                                          s.error
                                                        )
                                                      : null == w ||
                                                        w.send(
                                                          JSON.stringify({
                                                            set_settings: 1,
                                                            allow_copiers: 0,
                                                          })
                                                        ),
                                                    null == w ||
                                                      w.removeEventListener(
                                                        "message",
                                                        e
                                                      ));
                                                };
                                                null == w ||
                                                  w.addEventListener(
                                                    "message",
                                                    e
                                                  );
                                              },
                                              children: [
                                                (0, r.jsx)("span", {
                                                  className: "button-text",
                                                  children: "DIS-ALLOW COPY",
                                                }),
                                                (0, r.jsx)("span", {
                                                  className: "button-glitch",
                                                }),
                                              ],
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  id: "copy-trading-list",
                                  className: "hub-card results-card",
                                  children: [
                                    (0, r.jsx)("div", {
                                      className: "card-shine",
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "hub-card-header",
                                      children: [
                                        (0, r.jsx)("div", {
                                          className: "card-title",
                                          children: "TRADE ANALYTICS",
                                        }),
                                        (0, r.jsx)("div", {
                                          className: "card-status",
                                          children: "LIVE",
                                        }),
                                      ],
                                    }),
                                    (0, r.jsxs)("div", {
                                      className: "hub-card-content",
                                      children: [
                                        (0, r.jsxs)("div", {
                                          className: "data-tabs",
                                          children: [
                                            (0, r.jsx)("div", {
                                              className: `data-tab ${
                                                "trader-list" === $
                                                  ? "active"
                                                  : ""
                                              }`,
                                              "data-target": "trader-list",
                                              onClick: () => I("trader-list"),
                                              children: "Trader Data",
                                            }),
                                            (0, r.jsx)("div", {
                                              className: `data-tab ${
                                                "trading-stats" === $
                                                  ? "active"
                                                  : ""
                                              }`,
                                              "data-target": "trading-stats",
                                              onClick: () => I("trading-stats"),
                                              children: "Statistics",
                                            }),
                                          ],
                                        }),
                                        (0, r.jsxs)("div", {
                                          className: "data-content-wrapper",
                                          children: [
                                            (0, r.jsx)("div", {
                                              id: "copy-trading-list-container",
                                              className: `data-container ${
                                                "trader-list" === $
                                                  ? "active"
                                                  : ""
                                              }`,
                                              children:
                                                0 === z.length
                                                  ? (0, r.jsx)("div", {
                                                      className:
                                                        "placeholder-text",
                                                      children:
                                                        "Awaiting trader data...",
                                                    })
                                                  : (0, r.jsx)("ul", {
                                                      style: {
                                                        listStyleType: "none",
                                                        padding: 0,
                                                      },
                                                      children: z.map(
                                                        (e, t) => {
                                                          var s;
                                                          return (0, r.jsxs)(
                                                            "li",
                                                            {
                                                              style: {
                                                                marginBottom:
                                                                  "10px",
                                                              },
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "strong",
                                                                  {
                                                                    children:
                                                                      "Linked Copy Trader:",
                                                                  }
                                                                ),
                                                                " ",
                                                                "VRTC8609996" ===
                                                                e.loginid
                                                                  ? "ELITESCOPE TRADERS"
                                                                  : e.loginid,
                                                                " ",
                                                                (0, r.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                                (0, r.jsx)(
                                                                  "strong",
                                                                  {
                                                                    children:
                                                                      "Assets:",
                                                                  }
                                                                ),
                                                                " ",
                                                                (null ===
                                                                  (s =
                                                                    e.assets) ||
                                                                void 0 === s
                                                                  ? void 0
                                                                  : s
                                                                      .map(
                                                                        (e) =>
                                                                          "*" ===
                                                                          e
                                                                            ? "ALL ASSETS"
                                                                            : e
                                                                      )
                                                                      .join(
                                                                        ", "
                                                                      )) ||
                                                                  "N/A",
                                                                " ",
                                                                (0, r.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                                (0, r.jsx)(
                                                                  "strong",
                                                                  {
                                                                    children:
                                                                      "Max Trade Stake:",
                                                                  }
                                                                ),
                                                                " ",
                                                                e.max_trade_stake ||
                                                                  "N/A",
                                                                " ",
                                                                (0, r.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                                (0, r.jsx)(
                                                                  "strong",
                                                                  {
                                                                    children:
                                                                      "Min Trade Stake:",
                                                                  }
                                                                ),
                                                                " ",
                                                                e.min_trade_stake ||
                                                                  "N/A",
                                                                " ",
                                                                (0, r.jsx)(
                                                                  "br",
                                                                  {}
                                                                ),
                                                              ],
                                                            },
                                                            t
                                                          );
                                                        }
                                                      ),
                                                    }),
                                            }),
                                            (0, r.jsx)("div", {
                                              id: "copy-trading-stats-container",
                                              className: `data-container stats-container ${
                                                "trading-stats" === $
                                                  ? "active"
                                                  : ""
                                              }`,
                                              children:
                                                0 === Object.keys(D).length
                                                  ? (0, r.jsx)("div", {
                                                      className:
                                                        "placeholder-text",
                                                      children:
                                                        "Calculating statistics...",
                                                    })
                                                  : (0, r.jsxs)("table", {
                                                      style: {
                                                        width: "100%",
                                                        borderCollapse:
                                                          "collapse",
                                                      },
                                                      children: [
                                                        (0, r.jsx)("thead", {
                                                          children: (0, r.jsxs)(
                                                            "tr",
                                                            {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "th",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      "Statistic",
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "th",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      "Value",
                                                                  }
                                                                ),
                                                              ],
                                                            }
                                                          ),
                                                        }),
                                                        (0, r.jsxs)("tbody", {
                                                          children: [
                                                            D.active_since &&
                                                              (0, r.jsxs)(
                                                                "tr",
                                                                {
                                                                  children: [
                                                                    (0, r.jsx)(
                                                                      "td",
                                                                      {
                                                                        style: {
                                                                          border:
                                                                            "1px solid #ddd",
                                                                          padding:
                                                                            "8px",
                                                                        },
                                                                        children:
                                                                          (0,
                                                                          r.jsx)(
                                                                            "strong",
                                                                            {
                                                                              children:
                                                                                "Active Since",
                                                                            }
                                                                          ),
                                                                      }
                                                                    ),
                                                                    (0, r.jsx)(
                                                                      "td",
                                                                      {
                                                                        style: {
                                                                          border:
                                                                            "1px solid #ddd",
                                                                          padding:
                                                                            "8px",
                                                                        },
                                                                        children:
                                                                          new Date(
                                                                            1e3 *
                                                                              D.active_since
                                                                          ).toLocaleDateString(),
                                                                      }
                                                                    ),
                                                                  ],
                                                                }
                                                              ),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Average Duration",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.avg_duration ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Average Loss",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.avg_loss ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Average Profit",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.avg_profit ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Number of Copiers",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.copiers ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Total Trades",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.total_trades ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Trades Profitable",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.trades_profitable ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            (0, r.jsxs)("tr", {
                                                              children: [
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      (0,
                                                                      r.jsx)(
                                                                        "strong",
                                                                        {
                                                                          children:
                                                                            "Performance Probability",
                                                                        }
                                                                      ),
                                                                  }
                                                                ),
                                                                (0, r.jsx)(
                                                                  "td",
                                                                  {
                                                                    style: {
                                                                      border:
                                                                        "1px solid #ddd",
                                                                      padding:
                                                                        "8px",
                                                                    },
                                                                    children:
                                                                      D.performance_probability ||
                                                                      "N/A",
                                                                  }
                                                                ),
                                                              ],
                                                            }),
                                                            D.monthly_profitable_trades &&
                                                              Object.entries(
                                                                D.monthly_profitable_trades
                                                              ).map((e) => {
                                                                let [t, s] = e;
                                                                return (0,
                                                                r.jsxs)(
                                                                  "tr",
                                                                  {
                                                                    children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                        "td",
                                                                        {
                                                                          style:
                                                                            {
                                                                              border:
                                                                                "1px solid #ddd",
                                                                              padding:
                                                                                "8px",
                                                                            },
                                                                          children:
                                                                            (0,
                                                                            r.jsxs)(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    "Monthly Profit - ",
                                                                                    t,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                        "td",
                                                                        {
                                                                          style:
                                                                            {
                                                                              border:
                                                                                "1px solid #ddd",
                                                                              padding:
                                                                                "8px",
                                                                            },
                                                                          children:
                                                                            String(
                                                                              s
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  `month-${t}`
                                                                );
                                                              }),
                                                            D.yearly_profitable_trades &&
                                                              Object.entries(
                                                                D.yearly_profitable_trades
                                                              ).map((e) => {
                                                                let [t, s] = e;
                                                                return (0,
                                                                r.jsxs)(
                                                                  "tr",
                                                                  {
                                                                    children: [
                                                                      (0,
                                                                      r.jsx)(
                                                                        "td",
                                                                        {
                                                                          style:
                                                                            {
                                                                              border:
                                                                                "1px solid #ddd",
                                                                              padding:
                                                                                "8px",
                                                                            },
                                                                          children:
                                                                            (0,
                                                                            r.jsxs)(
                                                                              "strong",
                                                                              {
                                                                                children:
                                                                                  [
                                                                                    "Yearly Profit - ",
                                                                                    t,
                                                                                  ],
                                                                              }
                                                                            ),
                                                                        }
                                                                      ),
                                                                      (0,
                                                                      r.jsx)(
                                                                        "td",
                                                                        {
                                                                          style:
                                                                            {
                                                                              border:
                                                                                "1px solid #ddd",
                                                                              padding:
                                                                                "8px",
                                                                            },
                                                                          children:
                                                                            String(
                                                                              s
                                                                            ),
                                                                        }
                                                                      ),
                                                                    ],
                                                                  },
                                                                  `year-${t}`
                                                                );
                                                              }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                            }),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, r.jsxs)("div", {
                              className: "status-bar",
                              children: [
                                (0, r.jsxs)("div", {
                                  className: "status-item",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "status-label",
                                      children: "CONNECTION:",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "status-value good",
                                      children: "SECURE",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "status-item",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "status-label",
                                      children: "LATENCY:",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "status-value good",
                                      children: "23ms",
                                    }),
                                  ],
                                }),
                                (0, r.jsxs)("div", {
                                  className: "status-item",
                                  children: [
                                    (0, r.jsx)("span", {
                                      className: "status-label",
                                      children: "LAST UPDATE:",
                                    }),
                                    (0, r.jsx)("span", {
                                      className: "status-value",
                                      children: "JUST NOW",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            })
          );
        });
    },
  },
]);
