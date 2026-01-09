import { renderStoryString as P_, persona_description_positions as Jg } from "../../../../power-user.js";
import { parseMesExamples as B_, baseChatReplace as U_, chat_metadata as Rs, getMaxContextSize as H_, name1 as xr, name2 as Jr, this_chid as xn, extension_prompt_types as Ca, depth_prompt_role_default as q_, depth_prompt_depth_default as F_ } from "../../../../../script.js";
import { world_info_include_names as Z_, wi_anchor_position as G_, world_names as Kg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as V_, formatInstructModeSystemPrompt as Y_ } from "../../../../instruct-mode.js";
import { appendFileContent as X_ } from "../../../../chats.js";
import { setOpenAIMessages as $_, setOpenAIMessageExamples as Q_, formatWorldInfo as J_, getPromptPosition as K_, getPromptRole as W_, prepareOpenAIMessages as e2 } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as t2, selected_group as Er } from "../../../../group-chats.js";
import { getRegexedString as n2, regex_placement as Wg } from "../../../regex/engine.js";
import { removeFromArray as ev, runAfterAnimation as r2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as Ci, fixToastrForDialogs as qf } from "../../../../popup.js";
import tv from "../../../../../lib/dialog-polyfill.esm.js";
function a2(t, r) {
  for (var i = 0; i < r.length; i++) {
    const s = r[i];
    if (typeof s != "string" && !Array.isArray(s)) {
      for (const o in s)
        if (o !== "default" && !(o in t)) {
          const u = Object.getOwnPropertyDescriptor(s, o);
          u && Object.defineProperty(t, o, u.get ? u : {
            enumerable: !0,
            get: () => s[o]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }));
}
function Gd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ff = { exports: {} }, Ls = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nv;
function i2() {
  if (nv) return Ls;
  nv = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.fragment");
  function i(s, o, u) {
    var f = null;
    if (u !== void 0 && (f = "" + u), o.key !== void 0 && (f = "" + o.key), "key" in o) {
      u = {};
      for (var p in o)
        p !== "key" && (u[p] = o[p]);
    } else u = o;
    return o = u.ref, {
      $$typeof: t,
      type: s,
      key: f,
      ref: o !== void 0 ? o : null,
      props: u
    };
  }
  return Ls.Fragment = r, Ls.jsx = i, Ls.jsxs = i, Ls;
}
var rv;
function s2() {
  return rv || (rv = 1, Ff.exports = i2()), Ff.exports;
}
var S = s2(), Zf = { exports: {} }, ke = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var av;
function l2() {
  if (av) return ke;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function m(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var v = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, d = Object.assign, x = {};
  function C(R, W, ae) {
    this.props = R, this.context = W, this.refs = x, this.updater = ae || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(R, W) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, W, "setState");
  }, C.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = C.prototype;
  function w(R, W, ae) {
    this.props = R, this.context = W, this.refs = x, this.updater = ae || v;
  }
  var O = w.prototype = new T();
  O.constructor = w, d(O, C.prototype), O.isPureReactComponent = !0;
  var E = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, D = Object.prototype.hasOwnProperty;
  function M(R, W, ae, le, oe, Me) {
    return ae = Me.ref, {
      $$typeof: t,
      type: R,
      key: W,
      ref: ae !== void 0 ? ae : null,
      props: Me
    };
  }
  function U(R, W) {
    return M(
      R.type,
      W,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function F(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function I(R) {
    var W = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ae) {
      return W[ae];
    });
  }
  var X = /\/+/g;
  function V(R, W) {
    return typeof R == "object" && R !== null && R.key != null ? I("" + R.key) : W.toString(36);
  }
  function ue() {
  }
  function ie(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(ue, ue) : (R.status = "pending", R.then(
          function(W) {
            R.status === "pending" && (R.status = "fulfilled", R.value = W);
          },
          function(W) {
            R.status === "pending" && (R.status = "rejected", R.reason = W);
          }
        )), R.status) {
          case "fulfilled":
            return R.value;
          case "rejected":
            throw R.reason;
        }
    }
    throw R;
  }
  function de(R, W, ae, le, oe) {
    var Me = typeof R;
    (Me === "undefined" || Me === "boolean") && (R = null);
    var Q = !1;
    if (R === null) Q = !0;
    else
      switch (Me) {
        case "bigint":
        case "string":
        case "number":
          Q = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              Q = !0;
              break;
            case b:
              return Q = R._init, de(
                Q(R._payload),
                W,
                ae,
                le,
                oe
              );
          }
      }
    if (Q)
      return oe = oe(R), Q = le === "" ? "." + V(R, 0) : le, E(oe) ? (ae = "", Q != null && (ae = Q.replace(X, "$&/") + "/"), de(oe, W, ae, "", function(Ue) {
        return Ue;
      })) : oe != null && (F(oe) && (oe = U(
        oe,
        ae + (oe.key == null || R && R.key === oe.key ? "" : ("" + oe.key).replace(
          X,
          "$&/"
        ) + "/") + Q
      )), W.push(oe)), 1;
    Q = 0;
    var me = le === "" ? "." : le + ":";
    if (E(R))
      for (var ve = 0; ve < R.length; ve++)
        le = R[ve], Me = me + V(le, ve), Q += de(
          le,
          W,
          ae,
          Me,
          oe
        );
    else if (ve = m(R), typeof ve == "function")
      for (R = ve.call(R), ve = 0; !(le = R.next()).done; )
        le = le.value, Me = me + V(le, ve++), Q += de(
          le,
          W,
          ae,
          Me,
          oe
        );
    else if (Me === "object") {
      if (typeof R.then == "function")
        return de(
          ie(R),
          W,
          ae,
          le,
          oe
        );
      throw W = String(R), Error(
        "Objects are not valid as a React child (found: " + (W === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : W) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Q;
  }
  function B(R, W, ae) {
    if (R == null) return R;
    var le = [], oe = 0;
    return de(R, le, "", "", function(Me) {
      return W.call(ae, Me, oe++);
    }), le;
  }
  function re(R) {
    if (R._status === -1) {
      var W = R._result;
      W = W(), W.then(
        function(ae) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ae);
        },
        function(ae) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ae);
        }
      ), R._status === -1 && (R._status = 0, R._result = W);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var W = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(W)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function we() {
  }
  return ke.Children = {
    map: B,
    forEach: function(R, W, ae) {
      B(
        R,
        function() {
          W.apply(this, arguments);
        },
        ae
      );
    },
    count: function(R) {
      var W = 0;
      return B(R, function() {
        W++;
      }), W;
    },
    toArray: function(R) {
      return B(R, function(W) {
        return W;
      }) || [];
    },
    only: function(R) {
      if (!F(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, ke.Component = C, ke.Fragment = i, ke.Profiler = o, ke.PureComponent = w, ke.StrictMode = s, ke.Suspense = h, ke.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, ke.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, ke.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, ke.cloneElement = function(R, W, ae) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var le = d({}, R.props), oe = R.key, Me = void 0;
    if (W != null)
      for (Q in W.ref !== void 0 && (Me = void 0), W.key !== void 0 && (oe = "" + W.key), W)
        !D.call(W, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && W.ref === void 0 || (le[Q] = W[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) le.children = ae;
    else if (1 < Q) {
      for (var me = Array(Q), ve = 0; ve < Q; ve++)
        me[ve] = arguments[ve + 2];
      le.children = me;
    }
    return M(R.type, oe, void 0, void 0, Me, le);
  }, ke.createContext = function(R) {
    return R = {
      $$typeof: f,
      _currentValue: R,
      _currentValue2: R,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, R.Provider = R, R.Consumer = {
      $$typeof: u,
      _context: R
    }, R;
  }, ke.createElement = function(R, W, ae) {
    var le, oe = {}, Me = null;
    if (W != null)
      for (le in W.key !== void 0 && (Me = "" + W.key), W)
        D.call(W, le) && le !== "key" && le !== "__self" && le !== "__source" && (oe[le] = W[le]);
    var Q = arguments.length - 2;
    if (Q === 1) oe.children = ae;
    else if (1 < Q) {
      for (var me = Array(Q), ve = 0; ve < Q; ve++)
        me[ve] = arguments[ve + 2];
      oe.children = me;
    }
    if (R && R.defaultProps)
      for (le in Q = R.defaultProps, Q)
        oe[le] === void 0 && (oe[le] = Q[le]);
    return M(R, Me, void 0, void 0, null, oe);
  }, ke.createRef = function() {
    return { current: null };
  }, ke.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, ke.isValidElement = F, ke.lazy = function(R) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: R },
      _init: re
    };
  }, ke.memo = function(R, W) {
    return {
      $$typeof: g,
      type: R,
      compare: W === void 0 ? null : W
    };
  }, ke.startTransition = function(R) {
    var W = N.T, ae = {};
    N.T = ae;
    try {
      var le = R(), oe = N.S;
      oe !== null && oe(ae, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(we, ce);
    } catch (Me) {
      ce(Me);
    } finally {
      N.T = W;
    }
  }, ke.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, ke.use = function(R) {
    return N.H.use(R);
  }, ke.useActionState = function(R, W, ae) {
    return N.H.useActionState(R, W, ae);
  }, ke.useCallback = function(R, W) {
    return N.H.useCallback(R, W);
  }, ke.useContext = function(R) {
    return N.H.useContext(R);
  }, ke.useDebugValue = function() {
  }, ke.useDeferredValue = function(R, W) {
    return N.H.useDeferredValue(R, W);
  }, ke.useEffect = function(R, W, ae) {
    var le = N.H;
    if (typeof ae == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(R, W);
  }, ke.useId = function() {
    return N.H.useId();
  }, ke.useImperativeHandle = function(R, W, ae) {
    return N.H.useImperativeHandle(R, W, ae);
  }, ke.useInsertionEffect = function(R, W) {
    return N.H.useInsertionEffect(R, W);
  }, ke.useLayoutEffect = function(R, W) {
    return N.H.useLayoutEffect(R, W);
  }, ke.useMemo = function(R, W) {
    return N.H.useMemo(R, W);
  }, ke.useOptimistic = function(R, W) {
    return N.H.useOptimistic(R, W);
  }, ke.useReducer = function(R, W, ae) {
    return N.H.useReducer(R, W, ae);
  }, ke.useRef = function(R) {
    return N.H.useRef(R);
  }, ke.useState = function(R) {
    return N.H.useState(R);
  }, ke.useSyncExternalStore = function(R, W, ae) {
    return N.H.useSyncExternalStore(
      R,
      W,
      ae
    );
  }, ke.useTransition = function() {
    return N.H.useTransition();
  }, ke.version = "19.1.1", ke;
}
var iv;
function Vd() {
  return iv || (iv = 1, Zf.exports = l2()), Zf.exports;
}
var $ = Vd();
const cu = /* @__PURE__ */ Gd($);
var Gf = { exports: {} }, Is = {}, Vf = { exports: {} }, Yf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sv;
function o2() {
  return sv || (sv = 1, (function(t) {
    function r(B, re) {
      var ce = B.length;
      B.push(re);
      e: for (; 0 < ce; ) {
        var we = ce - 1 >>> 1, R = B[we];
        if (0 < o(R, re))
          B[we] = re, B[ce] = R, ce = we;
        else break e;
      }
    }
    function i(B) {
      return B.length === 0 ? null : B[0];
    }
    function s(B) {
      if (B.length === 0) return null;
      var re = B[0], ce = B.pop();
      if (ce !== re) {
        B[0] = ce;
        e: for (var we = 0, R = B.length, W = R >>> 1; we < W; ) {
          var ae = 2 * (we + 1) - 1, le = B[ae], oe = ae + 1, Me = B[oe];
          if (0 > o(le, ce))
            oe < R && 0 > o(Me, le) ? (B[we] = Me, B[oe] = ce, we = oe) : (B[we] = le, B[ae] = ce, we = ae);
          else if (oe < R && 0 > o(Me, ce))
            B[we] = Me, B[oe] = ce, we = oe;
          else break e;
        }
      }
      return re;
    }
    function o(B, re) {
      var ce = B.sortIndex - re.sortIndex;
      return ce !== 0 ? ce : B.id - re.id;
    }
    if (t.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      t.unstable_now = function() {
        return u.now();
      };
    } else {
      var f = Date, p = f.now();
      t.unstable_now = function() {
        return f.now() - p;
      };
    }
    var h = [], g = [], b = 1, _ = null, m = 3, v = !1, d = !1, x = !1, C = !1, T = typeof setTimeout == "function" ? setTimeout : null, w = typeof clearTimeout == "function" ? clearTimeout : null, O = typeof setImmediate < "u" ? setImmediate : null;
    function E(B) {
      for (var re = i(g); re !== null; ) {
        if (re.callback === null) s(g);
        else if (re.startTime <= B)
          s(g), re.sortIndex = re.expirationTime, r(h, re);
        else break;
        re = i(g);
      }
    }
    function N(B) {
      if (x = !1, E(B), !d)
        if (i(h) !== null)
          d = !0, D || (D = !0, V());
        else {
          var re = i(g);
          re !== null && de(N, re.startTime - B);
        }
    }
    var D = !1, M = -1, U = 5, F = -1;
    function I() {
      return C ? !0 : !(t.unstable_now() - F < U);
    }
    function X() {
      if (C = !1, D) {
        var B = t.unstable_now();
        F = B;
        var re = !0;
        try {
          e: {
            d = !1, x && (x = !1, w(M), M = -1), v = !0;
            var ce = m;
            try {
              t: {
                for (E(B), _ = i(h); _ !== null && !(_.expirationTime > B && I()); ) {
                  var we = _.callback;
                  if (typeof we == "function") {
                    _.callback = null, m = _.priorityLevel;
                    var R = we(
                      _.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof R == "function") {
                      _.callback = R, E(B), re = !0;
                      break t;
                    }
                    _ === i(h) && s(h), E(B);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) re = !0;
                else {
                  var W = i(g);
                  W !== null && de(
                    N,
                    W.startTime - B
                  ), re = !1;
                }
              }
              break e;
            } finally {
              _ = null, m = ce, v = !1;
            }
            re = void 0;
          }
        } finally {
          re ? V() : D = !1;
        }
      }
    }
    var V;
    if (typeof O == "function")
      V = function() {
        O(X);
      };
    else if (typeof MessageChannel < "u") {
      var ue = new MessageChannel(), ie = ue.port2;
      ue.port1.onmessage = X, V = function() {
        ie.postMessage(null);
      };
    } else
      V = function() {
        T(X, 0);
      };
    function de(B, re) {
      M = T(function() {
        B(t.unstable_now());
      }, re);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : U = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, t.unstable_next = function(B) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = m;
      }
      var ce = m;
      m = re;
      try {
        return B();
      } finally {
        m = ce;
      }
    }, t.unstable_requestPaint = function() {
      C = !0;
    }, t.unstable_runWithPriority = function(B, re) {
      switch (B) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          B = 3;
      }
      var ce = m;
      m = B;
      try {
        return re();
      } finally {
        m = ce;
      }
    }, t.unstable_scheduleCallback = function(B, re, ce) {
      var we = t.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? we + ce : we) : ce = we, B) {
        case 1:
          var R = -1;
          break;
        case 2:
          R = 250;
          break;
        case 5:
          R = 1073741823;
          break;
        case 4:
          R = 1e4;
          break;
        default:
          R = 5e3;
      }
      return R = ce + R, B = {
        id: b++,
        callback: re,
        priorityLevel: B,
        startTime: ce,
        expirationTime: R,
        sortIndex: -1
      }, ce > we ? (B.sortIndex = ce, r(g, B), i(h) === null && B === i(g) && (x ? (w(M), M = -1) : x = !0, de(N, ce - we))) : (B.sortIndex = R, r(h, B), d || v || (d = !0, D || (D = !0, V()))), B;
    }, t.unstable_shouldYield = I, t.unstable_wrapCallback = function(B) {
      var re = m;
      return function() {
        var ce = m;
        m = re;
        try {
          return B.apply(this, arguments);
        } finally {
          m = ce;
        }
      };
    };
  })(Yf)), Yf;
}
var lv;
function u2() {
  return lv || (lv = 1, Vf.exports = o2()), Vf.exports;
}
var Xf = { exports: {} }, Ft = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ov;
function c2() {
  if (ov) return Ft;
  ov = 1;
  var t = Vd();
  function r(h) {
    var g = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        g += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + h + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function i() {
  }
  var s = {
    d: {
      f: i,
      r: function() {
        throw Error(r(522));
      },
      D: i,
      C: i,
      L: i,
      m: i,
      X: i,
      S: i,
      M: i
    },
    p: 0,
    findDOMNode: null
  }, o = Symbol.for("react.portal");
  function u(h, g, b) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: g,
      implementation: b
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, g) {
    if (h === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Ft.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ft.createPortal = function(h, g) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return u(h, g, null, b);
  }, Ft.flushSync = function(h) {
    var g = f.T, b = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = g, s.p = b, s.d.f();
    }
  }, Ft.preconnect = function(h, g) {
    typeof h == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(h, g));
  }, Ft.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Ft.preinit = function(h, g) {
    if (typeof h == "string" && g && typeof g.as == "string") {
      var b = g.as, _ = p(b, g.crossOrigin), m = typeof g.integrity == "string" ? g.integrity : void 0, v = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      b === "style" ? s.d.S(
        h,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: _,
          integrity: m,
          fetchPriority: v
        }
      ) : b === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: m,
        fetchPriority: v,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Ft.preinitModule = function(h, g) {
    if (typeof h == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var b = p(
            g.as,
            g.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: b,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0
          });
        }
      } else g == null && s.d.M(h);
  }, Ft.preload = function(h, g) {
    if (typeof h == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var b = g.as, _ = p(b, g.crossOrigin);
      s.d.L(h, b, {
        crossOrigin: _,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Ft.preloadModule = function(h, g) {
    if (typeof h == "string")
      if (g) {
        var b = p(g.as, g.crossOrigin);
        s.d.m(h, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: b,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0
        });
      } else s.d.m(h);
  }, Ft.requestFormReset = function(h) {
    s.d.r(h);
  }, Ft.unstable_batchedUpdates = function(h, g) {
    return h(g);
  }, Ft.useFormState = function(h, g, b) {
    return f.H.useFormState(h, g, b);
  }, Ft.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Ft.version = "19.1.1", Ft;
}
var uv;
function t0() {
  if (uv) return Xf.exports;
  uv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Xf.exports = c2(), Xf.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cv;
function f2() {
  if (cv) return Is;
  cv = 1;
  var t = u2(), r = Vd(), i = t0();
  function s(e) {
    var n = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        n += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
    var n = e, a = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, (n.flags & 4098) !== 0 && (a = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? a : null;
  }
  function f(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function p(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
    var n = e.alternate;
    if (!n) {
      if (n = u(e), n === null) throw Error(s(188));
      return n !== e ? null : e;
    }
    for (var a = e, l = n; ; ) {
      var c = a.return;
      if (c === null) break;
      var y = c.alternate;
      if (y === null) {
        if (l = c.return, l !== null) {
          a = l;
          continue;
        }
        break;
      }
      if (c.child === y.child) {
        for (y = c.child; y; ) {
          if (y === a) return p(c), e;
          if (y === l) return p(c), n;
          y = y.sibling;
        }
        throw Error(s(188));
      }
      if (a.return !== l.return) a = c, l = y;
      else {
        for (var A = !1, k = c.child; k; ) {
          if (k === a) {
            A = !0, a = c, l = y;
            break;
          }
          if (k === l) {
            A = !0, l = c, a = y;
            break;
          }
          k = k.sibling;
        }
        if (!A) {
          for (k = y.child; k; ) {
            if (k === a) {
              A = !0, a = y, l = c;
              break;
            }
            if (k === l) {
              A = !0, l = y, a = c;
              break;
            }
            k = k.sibling;
          }
          if (!A) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function g(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = g(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, _ = Symbol.for("react.element"), m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), w = Symbol.for("react.consumer"), O = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), D = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), U = Symbol.for("react.lazy"), F = Symbol.for("react.activity"), I = Symbol.for("react.memo_cache_sentinel"), X = Symbol.iterator;
  function V(e) {
    return e === null || typeof e != "object" ? null : (e = X && e[X] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ue = Symbol.for("react.client.reference");
  function ie(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ue ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case D:
        return "SuspenseList";
      case F:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case O:
          return (e.displayName || "Context") + ".Provider";
        case w:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case M:
          return n = e.displayName || null, n !== null ? n : ie(e.type) || "Memo";
        case U:
          n = e._payload, e = e._init;
          try {
            return ie(e(n));
          } catch {
          }
      }
    return null;
  }
  var de = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, we = [], R = -1;
  function W(e) {
    return { current: e };
  }
  function ae(e) {
    0 > R || (e.current = we[R], we[R] = null, R--);
  }
  function le(e, n) {
    R++, we[R] = e.current, e.current = n;
  }
  var oe = W(null), Me = W(null), Q = W(null), me = W(null);
  function ve(e, n) {
    switch (le(Q, n), le(Me, e), le(oe, null), n.nodeType) {
      case 9:
      case 11:
        e = (e = n.documentElement) && (e = e.namespaceURI) ? wg(e) : 0;
        break;
      default:
        if (e = n.tagName, n = n.namespaceURI)
          n = wg(n), e = Ag(n, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    ae(oe), le(oe, e);
  }
  function Ue() {
    ae(oe), ae(Me), ae(Q);
  }
  function rt(e) {
    e.memoizedState !== null && le(me, e);
    var n = oe.current, a = Ag(n, e.type);
    n !== a && (le(Me, e), le(oe, a));
  }
  function Te(e) {
    Me.current === e && (ae(oe), ae(Me)), me.current === e && (ae(me), Os._currentValue = ce);
  }
  var mt = Object.prototype.hasOwnProperty, Pn = t.unstable_scheduleCallback, Tt = t.unstable_cancelCallback, Gt = t.unstable_shouldYield, Be = t.unstable_requestPaint, Fe = t.unstable_now, He = t.unstable_getCurrentPriorityLevel, Xe = t.unstable_ImmediatePriority, z = t.unstable_UserBlockingPriority, Y = t.unstable_NormalPriority, ne = t.unstable_LowPriority, fe = t.unstable_IdlePriority, Oe = t.log, Ze = t.unstable_setDisableYieldValue, ft = null, at = null;
  function un(e) {
    if (typeof Oe == "function" && Ze(e), at && typeof at.setStrictMode == "function")
      try {
        at.setStrictMode(ft, e);
      } catch {
      }
  }
  var jt = Math.clz32 ? Math.clz32 : sa, We = Math.log, Ut = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (We(e) / Ut | 0) | 0;
  }
  var ar = 256, Yn = 4194304;
  function En(e) {
    var n = e & 42;
    if (n !== 0) return n;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Vt(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, y = e.suspendedLanes, A = e.pingedLanes;
    e = e.warmLanes;
    var k = l & 134217727;
    return k !== 0 ? (l = k & ~y, l !== 0 ? c = En(l) : (A &= k, A !== 0 ? c = En(A) : a || (a = k & ~e, a !== 0 && (c = En(a))))) : (k = l & ~y, k !== 0 ? c = En(k) : A !== 0 ? c = En(A) : a || (a = l & ~e, a !== 0 && (c = En(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & y) === 0 && (y = c & -c, a = n & -n, y >= a || y === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Jt(e, n) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & n) === 0;
  }
  function ul(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Pa() {
    var e = ar;
    return ar <<= 1, (ar & 4194048) === 0 && (ar = 256), e;
  }
  function uh() {
    var e = Yn;
    return Yn <<= 1, (Yn & 62914560) === 0 && (Yn = 4194304), e;
  }
  function ku(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Bi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function A1(e, n, a, l, c, y) {
    var A = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var k = e.entanglements, j = e.expirationTimes, q = e.hiddenUpdates;
    for (a = A & ~a; 0 < a; ) {
      var J = 31 - jt(a), ee = 1 << J;
      k[J] = 0, j[J] = -1;
      var Z = q[J];
      if (Z !== null)
        for (q[J] = null, J = 0; J < Z.length; J++) {
          var G = Z[J];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~ee;
    }
    l !== 0 && ch(e, l, 0), y !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= y & ~(A & ~n));
  }
  function ch(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - jt(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function fh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - jt(a), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), a &= ~c;
    }
  }
  function Du(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Mu(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function dh() {
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Gg(e.type));
  }
  function N1(e, n) {
    var a = re.p;
    try {
      return re.p = e, n();
    } finally {
      re.p = a;
    }
  }
  var Tr = Math.random().toString(36).slice(2), Ht = "__reactFiber$" + Tr, Kt = "__reactProps$" + Tr, Ba = "__reactContainer$" + Tr, ju = "__reactEvents$" + Tr, T1 = "__reactListeners$" + Tr, O1 = "__reactHandles$" + Tr, hh = "__reactResources$" + Tr, Ui = "__reactMarker$" + Tr;
  function Ru(e) {
    delete e[Ht], delete e[Kt], delete e[ju], delete e[T1], delete e[O1];
  }
  function Ua(e) {
    var n = e[Ht];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ba] || a[Ht]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = kg(e); e !== null; ) {
            if (a = e[Ht]) return a;
            e = kg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ha(e) {
    if (e = e[Ht] || e[Ba]) {
      var n = e.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return e;
    }
    return null;
  }
  function Hi(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e.stateNode;
    throw Error(s(33));
  }
  function qa(e) {
    var n = e[hh];
    return n || (n = e[hh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), n;
  }
  function Ot(e) {
    e[Ui] = !0;
  }
  var ph = /* @__PURE__ */ new Set(), mh = {};
  function la(e, n) {
    Fa(e, n), Fa(e + "Capture", n);
  }
  function Fa(e, n) {
    for (mh[e] = n, e = 0; e < n.length; e++)
      ph.add(n[e]);
  }
  var k1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), gh = {}, vh = {};
  function D1(e) {
    return mt.call(vh, e) ? !0 : mt.call(gh, e) ? !1 : k1.test(e) ? vh[e] = !0 : (gh[e] = !0, !1);
  }
  function cl(e, n, a) {
    if (D1(n))
      if (a === null) e.removeAttribute(n);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(n);
            return;
          case "boolean":
            var l = n.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(n);
              return;
            }
        }
        e.setAttribute(n, "" + a);
      }
  }
  function fl(e, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttribute(n, "" + a);
    }
  }
  function ir(e, n, a, l) {
    if (l === null) e.removeAttribute(a);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(a);
          return;
      }
      e.setAttributeNS(n, a, "" + l);
    }
  }
  var zu, yh;
  function Za(e) {
    if (zu === void 0)
      try {
        throw Error();
      } catch (a) {
        var n = a.stack.trim().match(/\n( *(at )?)/);
        zu = n && n[1] || "", yh = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + zu + e + yh;
  }
  var Lu = !1;
  function Iu(e, n) {
    if (!e || Lu) return "";
    Lu = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (n) {
              var ee = function() {
                throw Error();
              };
              if (Object.defineProperty(ee.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(ee, []);
                } catch (G) {
                  var Z = G;
                }
                Reflect.construct(e, [], ee);
              } else {
                try {
                  ee.call();
                } catch (G) {
                  Z = G;
                }
                e.call(ee.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                Z = G;
              }
              (ee = e()) && typeof ee.catch == "function" && ee.catch(function() {
              });
            }
          } catch (G) {
            if (G && Z && typeof G.stack == "string")
              return [G.stack, Z.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var c = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      c && c.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var y = l.DetermineComponentFrameRoot(), A = y[0], k = y[1];
      if (A && k) {
        var j = A.split(`
`), q = k.split(`
`);
        for (c = l = 0; l < j.length && !j[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < q.length && !q[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === j.length || c === q.length)
          for (l = j.length - 1, c = q.length - 1; 1 <= l && 0 <= c && j[l] !== q[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (j[l] !== q[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || j[l] !== q[c]) {
                  var J = `
` + j[l].replace(" at new ", " at ");
                  return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), J;
                }
              while (1 <= l && 0 <= c);
            break;
          }
      }
    } finally {
      Lu = !1, Error.prepareStackTrace = a;
    }
    return (a = e ? e.displayName || e.name : "") ? Za(a) : "";
  }
  function M1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Za(e.type);
      case 16:
        return Za("Lazy");
      case 13:
        return Za("Suspense");
      case 19:
        return Za("SuspenseList");
      case 0:
      case 15:
        return Iu(e.type, !1);
      case 11:
        return Iu(e.type.render, !1);
      case 1:
        return Iu(e.type, !0);
      case 31:
        return Za("Activity");
      default:
        return "";
    }
  }
  function bh(e) {
    try {
      var n = "";
      do
        n += M1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Cn(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function _h(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function j1(e) {
    var n = _h(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      n
    ), l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var c = a.get, y = a.set;
      return Object.defineProperty(e, n, {
        configurable: !0,
        get: function() {
          return c.call(this);
        },
        set: function(A) {
          l = "" + A, y.call(this, A);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(A) {
          l = "" + A;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[n];
        }
      };
    }
  }
  function dl(e) {
    e._valueTracker || (e._valueTracker = j1(e));
  }
  function Sh(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var a = n.getValue(), l = "";
    return e && (l = _h(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== a ? (n.setValue(e), !0) : !1;
  }
  function hl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var R1 = /[\n"\\]/g;
  function wn(e) {
    return e.replace(
      R1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pu(e, n, a, l, c, y, A, k) {
    e.name = "", A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" ? e.type = A : e.removeAttribute("type"), n != null ? A === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Cn(n)) : e.value !== "" + Cn(n) && (e.value = "" + Cn(n)) : A !== "submit" && A !== "reset" || e.removeAttribute("value"), n != null ? Bu(e, A, Cn(n)) : a != null ? Bu(e, A, Cn(a)) : l != null && e.removeAttribute("value"), c == null && y != null && (e.defaultChecked = !!y), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), k != null && typeof k != "function" && typeof k != "symbol" && typeof k != "boolean" ? e.name = "" + Cn(k) : e.removeAttribute("name");
  }
  function xh(e, n, a, l, c, y, A, k) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.type = y), n != null || a != null) {
      if (!(y !== "submit" && y !== "reset" || n != null))
        return;
      a = a != null ? "" + Cn(a) : "", n = n != null ? "" + Cn(n) : a, k || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = k ? e.checked : !!l, e.defaultChecked = !!l, A != null && typeof A != "function" && typeof A != "symbol" && typeof A != "boolean" && (e.name = A);
  }
  function Bu(e, n, a) {
    n === "number" && hl(e.ownerDocument) === e || e.defaultValue === "" + a || (e.defaultValue = "" + a);
  }
  function Ga(e, n, a, l) {
    if (e = e.options, n) {
      n = {};
      for (var c = 0; c < a.length; c++)
        n["$" + a[c]] = !0;
      for (a = 0; a < e.length; a++)
        c = n.hasOwnProperty("$" + e[a].value), e[a].selected !== c && (e[a].selected = c), c && l && (e[a].defaultSelected = !0);
    } else {
      for (a = "" + Cn(a), n = null, c = 0; c < e.length; c++) {
        if (e[c].value === a) {
          e[c].selected = !0, l && (e[c].defaultSelected = !0);
          return;
        }
        n !== null || e[c].disabled || (n = e[c]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Eh(e, n, a) {
    if (n != null && (n = "" + Cn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + Cn(a) : "";
  }
  function Ch(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (de(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), n = a;
    }
    a = Cn(n), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
  }
  function Va(e, n) {
    if (n) {
      var a = e.firstChild;
      if (a && a === e.lastChild && a.nodeType === 3) {
        a.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var z1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function wh(e, n, a) {
    var l = n.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? l ? e.setProperty(n, "") : n === "float" ? e.cssFloat = "" : e[n] = "" : l ? e.setProperty(n, a) : typeof a != "number" || a === 0 || z1.has(n) ? n === "float" ? e.cssFloat = a : e[n] = ("" + a).trim() : e[n] = a + "px";
  }
  function Ah(e, n, a) {
    if (n != null && typeof n != "object")
      throw Error(s(62));
    if (e = e.style, a != null) {
      for (var l in a)
        !a.hasOwnProperty(l) || n != null && n.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var c in n)
        l = n[c], n.hasOwnProperty(c) && a[c] !== l && wh(e, c, l);
    } else
      for (var y in n)
        n.hasOwnProperty(y) && wh(e, y, n[y]);
  }
  function Uu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var L1 = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), I1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pl(e) {
    return I1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var Hu = null;
  function qu(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ya = null, Xa = null;
  function Nh(e) {
    var n = Ha(e);
    if (n && (e = n.stateNode)) {
      var a = e[Kt] || null;
      e: switch (e = n.stateNode, n.type) {
        case "input":
          if (Pu(
            e,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), n = a.name, a.type === "radio" && n != null) {
            for (a = e; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + wn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var l = a[n];
              if (l !== e && l.form === e.form) {
                var c = l[Kt] || null;
                if (!c) throw Error(s(90));
                Pu(
                  l,
                  c.value,
                  c.defaultValue,
                  c.defaultValue,
                  c.checked,
                  c.defaultChecked,
                  c.type,
                  c.name
                );
              }
            }
            for (n = 0; n < a.length; n++)
              l = a[n], l.form === e.form && Sh(l);
          }
          break e;
        case "textarea":
          Eh(e, a.value, a.defaultValue);
          break e;
        case "select":
          n = a.value, n != null && Ga(e, !!a.multiple, n, !1);
      }
    }
  }
  var Fu = !1;
  function Th(e, n, a) {
    if (Fu) return e(n, a);
    Fu = !0;
    try {
      var l = e(n);
      return l;
    } finally {
      if (Fu = !1, (Ya !== null || Xa !== null) && (Wl(), Ya && (n = Ya, e = Xa, Xa = Ya = null, Nh(n), e)))
        for (n = 0; n < e.length; n++) Nh(e[n]);
    }
  }
  function qi(e, n) {
    var a = e.stateNode;
    if (a === null) return null;
    var l = a[Kt] || null;
    if (l === null) return null;
    a = l[n];
    e: switch (n) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (a && typeof a != "function")
      throw Error(
        s(231, n, typeof a)
      );
    return a;
  }
  var sr = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zu = !1;
  if (sr)
    try {
      var Fi = {};
      Object.defineProperty(Fi, "passive", {
        get: function() {
          Zu = !0;
        }
      }), window.addEventListener("test", Fi, Fi), window.removeEventListener("test", Fi, Fi);
    } catch {
      Zu = !1;
    }
  var Or = null, Gu = null, ml = null;
  function Oh() {
    if (ml) return ml;
    var e, n = Gu, a = n.length, l, c = "value" in Or ? Or.value : Or.textContent, y = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var A = a - e;
    for (l = 1; l <= A && n[a - l] === c[y - l]; l++) ;
    return ml = c.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gl(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function vl() {
    return !0;
  }
  function kh() {
    return !1;
  }
  function Wt(e) {
    function n(a, l, c, y, A) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = y, this.target = A, this.currentTarget = null;
      for (var k in e)
        e.hasOwnProperty(k) && (a = e[k], this[k] = a ? a(y) : y[k]);
      return this.isDefaultPrevented = (y.defaultPrevented != null ? y.defaultPrevented : y.returnValue === !1) ? vl : kh, this.isPropagationStopped = kh, this;
    }
    return b(n.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = vl);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = vl);
      },
      persist: function() {
      },
      isPersistent: vl
    }), n;
  }
  var oa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yl = Wt(oa), Zi = b({}, oa, { view: 0, detail: 0 }), P1 = Wt(Zi), Vu, Yu, Gi, bl = b({}, Zi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: $u,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Gi && (Gi && e.type === "mousemove" ? (Vu = e.screenX - Gi.screenX, Yu = e.screenY - Gi.screenY) : Yu = Vu = 0, Gi = e), Vu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Yu;
    }
  }), Dh = Wt(bl), B1 = b({}, bl, { dataTransfer: 0 }), U1 = Wt(B1), H1 = b({}, Zi, { relatedTarget: 0 }), Xu = Wt(H1), q1 = b({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F1 = Wt(q1), Z1 = b({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G1 = Wt(Z1), V1 = b({}, oa, { data: 0 }), Mh = Wt(V1), Y1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, X1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, $1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Q1(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = $1[e]) ? !!n[e] : !1;
  }
  function $u() {
    return Q1;
  }
  var J1 = b({}, Zi, {
    key: function(e) {
      if (e.key) {
        var n = Y1[e.key] || e.key;
        if (n !== "Unidentified") return n;
      }
      return e.type === "keypress" ? (e = gl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? X1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: $u,
    charCode: function(e) {
      return e.type === "keypress" ? gl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), K1 = Wt(J1), W1 = b({}, bl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), jh = Wt(W1), eb = b({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), tb = Wt(eb), nb = b({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rb = Wt(nb), ab = b({}, bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ib = Wt(ab), sb = b({}, oa, {
    newState: 0,
    oldState: 0
  }), lb = Wt(sb), ob = [9, 13, 27, 32], Qu = sr && "CompositionEvent" in window, Vi = null;
  sr && "documentMode" in document && (Vi = document.documentMode);
  var ub = sr && "TextEvent" in window && !Vi, Rh = sr && (!Qu || Vi && 8 < Vi && 11 >= Vi), zh = " ", Lh = !1;
  function Ih(e, n) {
    switch (e) {
      case "keyup":
        return ob.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ph(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $a = !1;
  function cb(e, n) {
    switch (e) {
      case "compositionend":
        return Ph(n);
      case "keypress":
        return n.which !== 32 ? null : (Lh = !0, zh);
      case "textInput":
        return e = n.data, e === zh && Lh ? null : e;
      default:
        return null;
    }
  }
  function fb(e, n) {
    if ($a)
      return e === "compositionend" || !Qu && Ih(e, n) ? (e = Oh(), ml = Gu = Or = null, $a = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return Rh && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var db = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Bh(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!db[e.type] : n === "textarea";
  }
  function Uh(e, n, a, l) {
    Ya ? Xa ? Xa.push(l) : Xa = [l] : Ya = l, n = io(n, "onChange"), 0 < n.length && (a = new yl(
      "onChange",
      "change",
      null,
      a,
      l
    ), e.push({ event: a, listeners: n }));
  }
  var Yi = null, Xi = null;
  function hb(e) {
    _g(e, 0);
  }
  function _l(e) {
    var n = Hi(e);
    if (Sh(n)) return e;
  }
  function Hh(e, n) {
    if (e === "change") return n;
  }
  var qh = !1;
  if (sr) {
    var Ju;
    if (sr) {
      var Ku = "oninput" in document;
      if (!Ku) {
        var Fh = document.createElement("div");
        Fh.setAttribute("oninput", "return;"), Ku = typeof Fh.oninput == "function";
      }
      Ju = Ku;
    } else Ju = !1;
    qh = Ju && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    Yi && (Yi.detachEvent("onpropertychange", Gh), Xi = Yi = null);
  }
  function Gh(e) {
    if (e.propertyName === "value" && _l(Xi)) {
      var n = [];
      Uh(
        n,
        Xi,
        e,
        qu(e)
      ), Th(hb, n);
    }
  }
  function pb(e, n, a) {
    e === "focusin" ? (Zh(), Yi = n, Xi = a, Yi.attachEvent("onpropertychange", Gh)) : e === "focusout" && Zh();
  }
  function mb(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return _l(Xi);
  }
  function gb(e, n) {
    if (e === "click") return _l(n);
  }
  function vb(e, n) {
    if (e === "input" || e === "change")
      return _l(n);
  }
  function yb(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var cn = typeof Object.is == "function" ? Object.is : yb;
  function $i(e, n) {
    if (cn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!mt.call(n, c) || !cn(e[c], n[c]))
        return !1;
    }
    return !0;
  }
  function Vh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Yh(e, n) {
    var a = Vh(e);
    e = 0;
    for (var l; a; ) {
      if (a.nodeType === 3) {
        if (l = e + a.textContent.length, e <= n && l >= n)
          return { node: a, offset: n - e };
        e = l;
      }
      e: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break e;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Vh(a);
    }
  }
  function Xh(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Xh(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function $h(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var n = hl(e.document); n instanceof e.HTMLIFrameElement; ) {
      try {
        var a = typeof n.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) e = n.contentWindow;
      else break;
      n = hl(e.document);
    }
    return n;
  }
  function Wu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  var bb = sr && "documentMode" in document && 11 >= document.documentMode, Qa = null, ec = null, Qi = null, tc = !1;
  function Qh(e, n, a) {
    var l = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    tc || Qa == null || Qa !== hl(l) || (l = Qa, "selectionStart" in l && Wu(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Qi && $i(Qi, l) || (Qi = l, l = io(ec, "onSelect"), 0 < l.length && (n = new yl(
      "onSelect",
      "select",
      null,
      n,
      a
    ), e.push({ event: n, listeners: l }), n.target = Qa)));
  }
  function ua(e, n) {
    var a = {};
    return a[e.toLowerCase()] = n.toLowerCase(), a["Webkit" + e] = "webkit" + n, a["Moz" + e] = "moz" + n, a;
  }
  var Ja = {
    animationend: ua("Animation", "AnimationEnd"),
    animationiteration: ua("Animation", "AnimationIteration"),
    animationstart: ua("Animation", "AnimationStart"),
    transitionrun: ua("Transition", "TransitionRun"),
    transitionstart: ua("Transition", "TransitionStart"),
    transitioncancel: ua("Transition", "TransitionCancel"),
    transitionend: ua("Transition", "TransitionEnd")
  }, nc = {}, Jh = {};
  sr && (Jh = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function ca(e) {
    if (nc[e]) return nc[e];
    if (!Ja[e]) return e;
    var n = Ja[e], a;
    for (a in n)
      if (n.hasOwnProperty(a) && a in Jh)
        return nc[e] = n[a];
    return e;
  }
  var Kh = ca("animationend"), Wh = ca("animationiteration"), ep = ca("animationstart"), _b = ca("transitionrun"), Sb = ca("transitionstart"), xb = ca("transitioncancel"), tp = ca("transitionend"), np = /* @__PURE__ */ new Map(), rc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  rc.push("scrollEnd");
  function Bn(e, n) {
    np.set(e, n), la(n, [e]);
  }
  var rp = /* @__PURE__ */ new WeakMap();
  function An(e, n) {
    if (typeof e == "object" && e !== null) {
      var a = rp.get(e);
      return a !== void 0 ? a : (n = {
        value: e,
        source: n,
        stack: bh(n)
      }, rp.set(e, n), n);
    }
    return {
      value: e,
      source: n,
      stack: bh(n)
    };
  }
  var Nn = [], Ka = 0, ac = 0;
  function Sl() {
    for (var e = Ka, n = ac = Ka = 0; n < e; ) {
      var a = Nn[n];
      Nn[n++] = null;
      var l = Nn[n];
      Nn[n++] = null;
      var c = Nn[n];
      Nn[n++] = null;
      var y = Nn[n];
      if (Nn[n++] = null, l !== null && c !== null) {
        var A = l.pending;
        A === null ? c.next = c : (c.next = A.next, A.next = c), l.pending = c;
      }
      y !== 0 && ap(a, c, y);
    }
  }
  function xl(e, n, a, l) {
    Nn[Ka++] = e, Nn[Ka++] = n, Nn[Ka++] = a, Nn[Ka++] = l, ac |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ic(e, n, a, l) {
    return xl(e, n, a, l), El(e);
  }
  function Wa(e, n) {
    return xl(e, null, null, n), El(e);
  }
  function ap(e, n, a) {
    e.lanes |= a;
    var l = e.alternate;
    l !== null && (l.lanes |= a);
    for (var c = !1, y = e.return; y !== null; )
      y.childLanes |= a, l = y.alternate, l !== null && (l.childLanes |= a), y.tag === 22 && (e = y.stateNode, e === null || e._visibility & 1 || (c = !0)), e = y, y = y.return;
    return e.tag === 3 ? (y = e.stateNode, c && n !== null && (c = 31 - jt(a), e = y.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), y) : null;
  }
  function El(e) {
    if (50 < Ss)
      throw Ss = 0, df = null, Error(s(185));
    for (var n = e.return; n !== null; )
      e = n, n = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ei = {};
  function Eb(e, n, a, l) {
    this.tag = e, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function fn(e, n, a, l) {
    return new Eb(e, n, a, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function lr(e, n) {
    var a = e.alternate;
    return a === null ? (a = fn(
      e.tag,
      n,
      e.key,
      e.mode
    ), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a.alternate = e, e.alternate = a) : (a.pendingProps = n, a.type = e.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = e.flags & 65011712, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue, n = e.dependencies, a.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.refCleanup = e.refCleanup, a;
  }
  function ip(e, n) {
    e.flags &= 65011714;
    var a = e.alternate;
    return a === null ? (e.childLanes = 0, e.lanes = n, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type, n = a.dependencies, e.dependencies = n === null ? null : {
      lanes: n.lanes,
      firstContext: n.firstContext
    }), e;
  }
  function Cl(e, n, a, l, c, y) {
    var A = 0;
    if (l = e, typeof e == "function") sc(e) && (A = 1);
    else if (typeof e == "string")
      A = w_(
        e,
        a,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case F:
          return e = fn(31, a, n, c), e.elementType = F, e.lanes = y, e;
        case d:
          return fa(a.children, c, y, n);
        case x:
          A = 8, c |= 24;
          break;
        case C:
          return e = fn(12, a, n, c | 2), e.elementType = C, e.lanes = y, e;
        case N:
          return e = fn(13, a, n, c), e.elementType = N, e.lanes = y, e;
        case D:
          return e = fn(19, a, n, c), e.elementType = D, e.lanes = y, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case O:
                A = 10;
                break e;
              case w:
                A = 9;
                break e;
              case E:
                A = 11;
                break e;
              case M:
                A = 14;
                break e;
              case U:
                A = 16, l = null;
                break e;
            }
          A = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = fn(A, a, n, c), n.elementType = e, n.type = l, n.lanes = y, n;
  }
  function fa(e, n, a, l) {
    return e = fn(7, e, l, n), e.lanes = a, e;
  }
  function lc(e, n, a) {
    return e = fn(6, e, null, n), e.lanes = a, e;
  }
  function oc(e, n, a) {
    return n = fn(
      4,
      e.children !== null ? e.children : [],
      e.key,
      n
    ), n.lanes = a, n.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, n;
  }
  var ti = [], ni = 0, wl = null, Al = 0, Tn = [], On = 0, da = null, or = 1, ur = "";
  function ha(e, n) {
    ti[ni++] = Al, ti[ni++] = wl, wl = e, Al = n;
  }
  function sp(e, n, a) {
    Tn[On++] = or, Tn[On++] = ur, Tn[On++] = da, da = e;
    var l = or;
    e = ur;
    var c = 32 - jt(l) - 1;
    l &= ~(1 << c), a += 1;
    var y = 32 - jt(n) + c;
    if (30 < y) {
      var A = c - c % 5;
      y = (l & (1 << A) - 1).toString(32), l >>= A, c -= A, or = 1 << 32 - jt(n) + c | a << c | l, ur = y + e;
    } else
      or = 1 << y | a << c | l, ur = e;
  }
  function uc(e) {
    e.return !== null && (ha(e, 1), sp(e, 1, 0));
  }
  function cc(e) {
    for (; e === wl; )
      wl = ti[--ni], ti[ni] = null, Al = ti[--ni], ti[ni] = null;
    for (; e === da; )
      da = Tn[--On], Tn[On] = null, ur = Tn[--On], Tn[On] = null, or = Tn[--On], Tn[On] = null;
  }
  var Yt = null, dt = null, Ge = !1, pa = null, Xn = !1, fc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw Wi(An(n, e)), fc;
  }
  function lp(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[Ht] = e, n[Kt] = l, a) {
      case "dialog":
        ze("cancel", n), ze("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        ze("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          ze(Es[a], n);
        break;
      case "source":
        ze("error", n);
        break;
      case "img":
      case "image":
      case "link":
        ze("error", n), ze("load", n);
        break;
      case "details":
        ze("toggle", n);
        break;
      case "input":
        ze("invalid", n), xh(
          n,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        ), dl(n);
        break;
      case "select":
        ze("invalid", n);
        break;
      case "textarea":
        ze("invalid", n), Ch(n, l.value, l.defaultValue, l.children), dl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Cg(n.textContent, a) ? (l.popover != null && (ze("beforetoggle", n), ze("toggle", n)), l.onScroll != null && ze("scroll", n), l.onScrollEnd != null && ze("scrollend", n), l.onClick != null && (n.onclick = so), n = !0) : n = !1, n || ma(e);
  }
  function op(e) {
    for (Yt = e.return; Yt; )
      switch (Yt.tag) {
        case 5:
        case 13:
          Xn = !1;
          return;
        case 27:
        case 3:
          Xn = !0;
          return;
        default:
          Yt = Yt.return;
      }
  }
  function Ji(e) {
    if (e !== Yt) return !1;
    if (!Ge) return op(e), Ge = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && dt && ma(e), op(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                dt = Hn(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        dt = null;
      }
    } else
      n === 27 ? (n = dt, Gr(e.type) ? (e = Mf, Mf = null, dt = e) : dt = n) : dt = Yt ? Hn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    dt = Yt = null, Ge = !1;
  }
  function up() {
    var e = pa;
    return e !== null && (nn === null ? nn = e : nn.push.apply(
      nn,
      e
    ), pa = null), e;
  }
  function Wi(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var dc = W(null), ga = null, cr = null;
  function kr(e, n, a) {
    le(dc, n._currentValue), n._currentValue = a;
  }
  function fr(e) {
    e._currentValue = dc.current, ae(dc);
  }
  function hc(e, n, a) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n), e === a) break;
      e = e.return;
    }
  }
  function pc(e, n, a, l) {
    var c = e.child;
    for (c !== null && (c.return = e); c !== null; ) {
      var y = c.dependencies;
      if (y !== null) {
        var A = c.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var k = y;
          y = c;
          for (var j = 0; j < n.length; j++)
            if (k.context === n[j]) {
              y.lanes |= a, k = y.alternate, k !== null && (k.lanes |= a), hc(
                y.return,
                a,
                e
              ), l || (A = null);
              break e;
            }
          y = k.next;
        }
      } else if (c.tag === 18) {
        if (A = c.return, A === null) throw Error(s(341));
        A.lanes |= a, y = A.alternate, y !== null && (y.lanes |= a), hc(A, a, e), A = null;
      } else A = c.child;
      if (A !== null) A.return = c;
      else
        for (A = c; A !== null; ) {
          if (A === e) {
            A = null;
            break;
          }
          if (c = A.sibling, c !== null) {
            c.return = A.return, A = c;
            break;
          }
          A = A.return;
        }
      c = A;
    }
  }
  function es(e, n, a, l) {
    e = null;
    for (var c = n, y = !1; c !== null; ) {
      if (!y) {
        if ((c.flags & 524288) !== 0) y = !0;
        else if ((c.flags & 262144) !== 0) break;
      }
      if (c.tag === 10) {
        var A = c.alternate;
        if (A === null) throw Error(s(387));
        if (A = A.memoizedProps, A !== null) {
          var k = c.type;
          cn(c.pendingProps.value, A.value) || (e !== null ? e.push(k) : e = [k]);
        }
      } else if (c === me.current) {
        if (A = c.alternate, A === null) throw Error(s(387));
        A.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
      }
      c = c.return;
    }
    e !== null && pc(
      n,
      e,
      a,
      l
    ), n.flags |= 262144;
  }
  function Nl(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!cn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, cr = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function qt(e) {
    return cp(ga, e);
  }
  function Tl(e, n) {
    return ga === null && va(e), cp(e, n);
  }
  function cp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, cr === null) {
      if (e === null) throw Error(s(308));
      cr = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else cr = cr.next = n;
    return a;
  }
  var Cb = typeof AbortController < "u" ? AbortController : function() {
    var e = [], n = this.signal = {
      aborted: !1,
      addEventListener: function(a, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      n.aborted = !0, e.forEach(function(a) {
        return a();
      });
    };
  }, wb = t.unstable_scheduleCallback, Ab = t.unstable_NormalPriority, Ct = {
    $$typeof: O,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function mc() {
    return {
      controller: new Cb(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ts(e) {
    e.refCount--, e.refCount === 0 && wb(Ab, function() {
      e.controller.abort();
    });
  }
  var ns = null, gc = 0, ri = 0, ai = null;
  function Nb(e, n) {
    if (ns === null) {
      var a = ns = [];
      gc = 0, ri = bf(), ai = {
        status: "pending",
        value: void 0,
        then: function(l) {
          a.push(l);
        }
      };
    }
    return gc++, n.then(fp, fp), n;
  }
  function fp() {
    if (--gc === 0 && ns !== null) {
      ai !== null && (ai.status = "fulfilled");
      var e = ns;
      ns = null, ri = 0, ai = null;
      for (var n = 0; n < e.length; n++) (0, e[n])();
    }
  }
  function Tb(e, n) {
    var a = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(c) {
        a.push(c);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = n;
        for (var c = 0; c < a.length; c++) (0, a[c])(n);
      },
      function(c) {
        for (l.status = "rejected", l.reason = c, c = 0; c < a.length; c++)
          (0, a[c])(void 0);
      }
    ), l;
  }
  var dp = B.S;
  B.S = function(e, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && Nb(e, n), dp !== null && dp(e, n);
  };
  var ya = W(null);
  function vc() {
    var e = ya.current;
    return e !== null ? e : tt.pooledCache;
  }
  function Ol(e, n) {
    n === null ? le(ya, ya.current) : le(ya, n.pool);
  }
  function hp() {
    var e = vc();
    return e === null ? null : { parent: Ct._currentValue, pool: e };
  }
  var rs = Error(s(460)), pp = Error(s(474)), kl = Error(s(542)), yc = { then: function() {
  } };
  function mp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Dl() {
  }
  function gp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Dl, Dl), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, yp(e), e;
      default:
        if (typeof n.status == "string") n.then(Dl, Dl);
        else {
          if (e = tt, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = n, e.status = "pending", e.then(
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "fulfilled", c.value = l;
              }
            },
            function(l) {
              if (n.status === "pending") {
                var c = n;
                c.status = "rejected", c.reason = l;
              }
            }
          );
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw e = n.reason, yp(e), e;
        }
        throw as = n, rs;
    }
  }
  var as = null;
  function vp() {
    if (as === null) throw Error(s(459));
    var e = as;
    return as = null, e;
  }
  function yp(e) {
    if (e === rs || e === kl)
      throw Error(s(483));
  }
  var Dr = !1;
  function bc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function _c(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Mr(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function jr(e, n, a) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (Ve & 2) !== 0) {
      var c = l.pending;
      return c === null ? n.next = n : (n.next = c.next, c.next = n), l.pending = n, n = El(e), ap(e, null, a), n;
    }
    return xl(e, l, n, a), El(e);
  }
  function is(e, n, a) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (a & 4194048) !== 0)) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, fh(e, a);
    }
  }
  function Sc(e, n) {
    var a = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, a === l)) {
      var c = null, y = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var A = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          y === null ? c = y = A : y = y.next = A, a = a.next;
        } while (a !== null);
        y === null ? c = y = n : y = y.next = n;
      } else c = y = n;
      a = {
        baseState: l.baseState,
        firstBaseUpdate: c,
        lastBaseUpdate: y,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = a;
      return;
    }
    e = a.lastBaseUpdate, e === null ? a.firstBaseUpdate = n : e.next = n, a.lastBaseUpdate = n;
  }
  var xc = !1;
  function ss() {
    if (xc) {
      var e = ai;
      if (e !== null) throw e;
    }
  }
  function ls(e, n, a, l) {
    xc = !1;
    var c = e.updateQueue;
    Dr = !1;
    var y = c.firstBaseUpdate, A = c.lastBaseUpdate, k = c.shared.pending;
    if (k !== null) {
      c.shared.pending = null;
      var j = k, q = j.next;
      j.next = null, A === null ? y = q : A.next = q, A = j;
      var J = e.alternate;
      J !== null && (J = J.updateQueue, k = J.lastBaseUpdate, k !== A && (k === null ? J.firstBaseUpdate = q : k.next = q, J.lastBaseUpdate = j));
    }
    if (y !== null) {
      var ee = c.baseState;
      A = 0, J = q = j = null, k = y;
      do {
        var Z = k.lane & -536870913, G = Z !== k.lane;
        if (G ? (Pe & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ri && (xc = !0), J !== null && (J = J.next = {
            lane: 0,
            tag: k.tag,
            payload: k.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, be = k;
            Z = n;
            var Je = a;
            switch (be.tag) {
              case 1:
                if (Se = be.payload, typeof Se == "function") {
                  ee = Se.call(Je, ee, Z);
                  break e;
                }
                ee = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = be.payload, Z = typeof Se == "function" ? Se.call(Je, ee, Z) : Se, Z == null) break e;
                ee = b({}, ee, Z);
                break e;
              case 2:
                Dr = !0;
            }
          }
          Z = k.callback, Z !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [Z] : G.push(Z));
        } else
          G = {
            lane: Z,
            tag: k.tag,
            payload: k.payload,
            callback: k.callback,
            next: null
          }, J === null ? (q = J = G, j = ee) : J = J.next = G, A |= Z;
        if (k = k.next, k === null) {
          if (k = c.shared.pending, k === null)
            break;
          G = k, k = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      J === null && (j = ee), c.baseState = j, c.firstBaseUpdate = q, c.lastBaseUpdate = J, y === null && (c.shared.lanes = 0), Hr |= A, e.lanes = A, e.memoizedState = ee;
    }
  }
  function bp(e, n) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(n);
  }
  function _p(e, n) {
    var a = e.callbacks;
    if (a !== null)
      for (e.callbacks = null, e = 0; e < a.length; e++)
        bp(a[e], n);
  }
  var ii = W(null), Ml = W(0);
  function Sp(e, n) {
    e = yr, le(Ml, e), le(ii, n), yr = e | n.baseLanes;
  }
  function Ec() {
    le(Ml, yr), le(ii, ii.current);
  }
  function Cc() {
    yr = Ml.current, ae(ii), ae(Ml);
  }
  var Rr = 0, De = null, $e = null, bt = null, jl = !1, si = !1, ba = !1, Rl = 0, os = 0, li = null, Ob = 0;
  function gt() {
    throw Error(s(321));
  }
  function wc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!cn(e[a], n[a])) return !1;
    return !0;
  }
  function Ac(e, n, a, l, c, y) {
    return Rr = y, De = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? am : im, ba = !1, y = a(l, c), ba = !1, si && (y = Ep(
      n,
      a,
      l,
      c
    )), xp(e), y;
  }
  function xp(e) {
    B.H = Ul;
    var n = $e !== null && $e.next !== null;
    if (Rr = 0, bt = $e = De = null, jl = !1, os = 0, li = null, n) throw Error(s(300));
    e === null || kt || (e = e.dependencies, e !== null && Nl(e) && (kt = !0));
  }
  function Ep(e, n, a, l) {
    De = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, bt = $e = null, e.updateQueue != null) {
        var y = e.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      B.H = Lb, y = n(a, l);
    } while (si);
    return y;
  }
  function kb() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? us(n) : n, e = e.useState()[0], ($e !== null ? $e.memoizedState : null) !== e && (De.flags |= 1024), n;
  }
  function Nc() {
    var e = Rl !== 0;
    return Rl = 0, e;
  }
  function Tc(e, n, a) {
    n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~a;
  }
  function Oc(e) {
    if (jl) {
      for (e = e.memoizedState; e !== null; ) {
        var n = e.queue;
        n !== null && (n.pending = null), e = e.next;
      }
      jl = !1;
    }
    Rr = 0, bt = $e = De = null, si = !1, os = Rl = 0, li = null;
  }
  function en() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bt === null ? De.memoizedState = bt = e : bt = bt.next = e, bt;
  }
  function _t() {
    if ($e === null) {
      var e = De.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = $e.next;
    var n = bt === null ? De.memoizedState : bt.next;
    if (n !== null)
      bt = n, $e = e;
    else {
      if (e === null)
        throw De.alternate === null ? Error(s(467)) : Error(s(310));
      $e = e, e = {
        memoizedState: $e.memoizedState,
        baseState: $e.baseState,
        baseQueue: $e.baseQueue,
        queue: $e.queue,
        next: null
      }, bt === null ? De.memoizedState = bt = e : bt = bt.next = e;
    }
    return bt;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var n = os;
    return os += 1, li === null && (li = []), e = gp(li, e, n), n = De, (bt === null ? n.memoizedState : bt.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? am : im), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === O) return qt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Dc(e) {
    var n = null, a = De.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = De.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = kc(), De.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = I;
    return n.index++, a;
  }
  function dr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = _t();
    return Mc(n, $e, e);
  }
  function Mc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, y = l.pending;
    if (y !== null) {
      if (c !== null) {
        var A = c.next;
        c.next = y.next, y.next = A;
      }
      n.baseQueue = c = y, l.pending = null;
    }
    if (y = e.baseState, c === null) e.memoizedState = y;
    else {
      n = c.next;
      var k = A = null, j = null, q = n, J = !1;
      do {
        var ee = q.lane & -536870913;
        if (ee !== q.lane ? (Pe & ee) === ee : (Rr & ee) === ee) {
          var Z = q.revertLane;
          if (Z === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), ee === ri && (J = !0);
          else if ((Rr & Z) === Z) {
            q = q.next, Z === ri && (J = !0);
            continue;
          } else
            ee = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, j === null ? (k = j = ee, A = y) : j = j.next = ee, De.lanes |= Z, Hr |= Z;
          ee = q.action, ba && a(y, ee), y = q.hasEagerState ? q.eagerState : a(y, ee);
        } else
          Z = {
            lane: ee,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, j === null ? (k = j = Z, A = y) : j = j.next = Z, De.lanes |= ee, Hr |= ee;
        q = q.next;
      } while (q !== null && q !== n);
      if (j === null ? A = y : j.next = k, !cn(y, e.memoizedState) && (kt = !0, J && (a = ai, a !== null)))
        throw a;
      e.memoizedState = y, e.baseState = A, e.baseQueue = j, l.lastRenderedState = y;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jc(e) {
    var n = _t(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, y = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var A = c = c.next;
      do
        y = e(y, A.action), A = A.next;
      while (A !== c);
      cn(y, n.memoizedState) || (kt = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), a.lastRenderedState = y;
    }
    return [y, l];
  }
  function Cp(e, n, a) {
    var l = De, c = _t(), y = Ge;
    if (y) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var A = !cn(
      ($e || c).memoizedState,
      a
    );
    A && (c.memoizedState = a, kt = !0), c = c.queue;
    var k = Np.bind(null, l, c, e);
    if (cs(2048, 8, k, [e]), c.getSnapshot !== n || A || bt !== null && bt.memoizedState.tag & 1) {
      if (l.flags |= 2048, oi(
        9,
        Il(),
        Ap.bind(
          null,
          l,
          c,
          a,
          n
        ),
        null
      ), tt === null) throw Error(s(349));
      y || (Rr & 124) !== 0 || wp(l, n, a);
    }
    return a;
  }
  function wp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = De.updateQueue, n === null ? (n = kc(), De.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
  }
  function Ap(e, n, a, l) {
    n.value = a, n.getSnapshot = l, Tp(n) && Op(e);
  }
  function Np(e, n, a) {
    return a(function() {
      Tp(n) && Op(e);
    });
  }
  function Tp(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var a = n();
      return !cn(e, a);
    } catch {
      return !0;
    }
  }
  function Op(e) {
    var n = Wa(e, 2);
    n !== null && gn(n, e, 2);
  }
  function Rc(e) {
    var n = en();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        un(!0);
        try {
          a();
        } finally {
          un(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: dr,
      lastRenderedState: e
    }, n;
  }
  function kp(e, n, a, l) {
    return e.baseState = a, Mc(
      e,
      $e,
      typeof l == "function" ? l : dr
    );
  }
  function Db(e, n, a, l, c) {
    if (Bl(e)) throw Error(s(485));
    if (e = n.action, e !== null) {
      var y = {
        payload: c,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(A) {
          y.listeners.push(A);
        }
      };
      B.T !== null ? a(!0) : y.isTransition = !1, l(y), a = n.pending, a === null ? (y.next = n.pending = y, Dp(n, y)) : (y.next = a.next, n.pending = a.next = y);
    }
  }
  function Dp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var y = B.T, A = {};
      B.T = A;
      try {
        var k = a(c, l), j = B.S;
        j !== null && j(A, k), Mp(e, n, k);
      } catch (q) {
        zc(e, n, q);
      } finally {
        B.T = y;
      }
    } else
      try {
        y = a(c, l), Mp(e, n, y);
      } catch (q) {
        zc(e, n, q);
      }
  }
  function Mp(e, n, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(l) {
        jp(e, n, l);
      },
      function(l) {
        return zc(e, n, l);
      }
    ) : jp(e, n, a);
  }
  function jp(e, n, a) {
    n.status = "fulfilled", n.value = a, Rp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Dp(e, a)));
  }
  function zc(e, n, a) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        n.status = "rejected", n.reason = a, Rp(n), n = n.next;
      while (n !== l);
    }
    e.action = null;
  }
  function Rp(e) {
    e = e.listeners;
    for (var n = 0; n < e.length; n++) (0, e[n])();
  }
  function zp(e, n) {
    return n;
  }
  function Lp(e, n) {
    if (Ge) {
      var a = tt.formState;
      if (a !== null) {
        e: {
          var l = De;
          if (Ge) {
            if (dt) {
              t: {
                for (var c = dt, y = Xn; c.nodeType !== 8; ) {
                  if (!y) {
                    c = null;
                    break t;
                  }
                  if (c = Hn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                y = c.data, c = y === "F!" || y === "F" ? c : null;
              }
              if (c) {
                dt = Hn(
                  c.nextSibling
                ), l = c.data === "F!";
                break e;
              }
            }
            ma(l);
          }
          l = !1;
        }
        l && (n = a[0]);
      }
    }
    return a = en(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: n
    }, a.queue = l, a = tm.bind(
      null,
      De,
      l
    ), l.dispatch = a, l = Rc(!1), y = Uc.bind(
      null,
      De,
      !1,
      l.queue
    ), l = en(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = Db.bind(
      null,
      De,
      c,
      y,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Ip(e) {
    var n = _t();
    return Pp(n, $e, e);
  }
  function Pp(e, n, a) {
    if (n = Mc(
      e,
      n,
      zp
    )[0], e = Ll(dr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = us(n);
      } catch (A) {
        throw A === rs ? kl : A;
      }
    else l = n;
    n = _t();
    var c = n.queue, y = c.dispatch;
    return a !== n.memoizedState && (De.flags |= 2048, oi(
      9,
      Il(),
      Mb.bind(null, c, a),
      null
    )), [l, y, e];
  }
  function Mb(e, n) {
    e.action = n;
  }
  function Bp(e) {
    var n = _t(), a = $e;
    if (a !== null)
      return Pp(n, a, e);
    _t(), n = n.memoizedState, a = _t();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function oi(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = De.updateQueue, n === null && (n = kc(), De.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Il() {
    return { destroy: void 0, resource: void 0 };
  }
  function Up() {
    return _t().memoizedState;
  }
  function Pl(e, n, a, l) {
    var c = en();
    l = l === void 0 ? null : l, De.flags |= e, c.memoizedState = oi(
      1 | n,
      Il(),
      a,
      l
    );
  }
  function cs(e, n, a, l) {
    var c = _t();
    l = l === void 0 ? null : l;
    var y = c.memoizedState.inst;
    $e !== null && l !== null && wc(l, $e.memoizedState.deps) ? c.memoizedState = oi(n, y, a, l) : (De.flags |= e, c.memoizedState = oi(
      1 | n,
      y,
      a,
      l
    ));
  }
  function Hp(e, n) {
    Pl(8390656, 8, e, n);
  }
  function qp(e, n) {
    cs(2048, 8, e, n);
  }
  function Fp(e, n) {
    return cs(4, 2, e, n);
  }
  function Zp(e, n) {
    return cs(4, 4, e, n);
  }
  function Gp(e, n) {
    if (typeof n == "function") {
      e = e();
      var a = n(e);
      return function() {
        typeof a == "function" ? a() : n(null);
      };
    }
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Vp(e, n, a) {
    a = a != null ? a.concat([e]) : null, cs(4, 4, Gp.bind(null, n, e), a);
  }
  function Lc() {
  }
  function Yp(e, n) {
    var a = _t();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && wc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Xp(e, n) {
    var a = _t();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && wc(n, l[1]))
      return l[0];
    if (l = e(), ba) {
      un(!0);
      try {
        e();
      } finally {
        un(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Ic(e, n, a) {
    return a === void 0 || (Rr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Jm(), De.lanes |= e, Hr |= e, a);
  }
  function $p(e, n, a, l) {
    return cn(a, n) ? a : ii.current !== null ? (e = Ic(e, a, l), cn(e, n) || (kt = !0), e) : (Rr & 42) === 0 ? (kt = !0, e.memoizedState = a) : (e = Jm(), De.lanes |= e, Hr |= e, n);
  }
  function Qp(e, n, a, l, c) {
    var y = re.p;
    re.p = y !== 0 && 8 > y ? y : 8;
    var A = B.T, k = {};
    B.T = k, Uc(e, !1, n, a);
    try {
      var j = c(), q = B.S;
      if (q !== null && q(k, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var J = Tb(
          j,
          l
        );
        fs(
          e,
          n,
          J,
          mn(e)
        );
      } else
        fs(
          e,
          n,
          l,
          mn(e)
        );
    } catch (ee) {
      fs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: ee },
        mn()
      );
    } finally {
      re.p = y, B.T = A;
    }
  }
  function jb() {
  }
  function Pc(e, n, a, l) {
    if (e.tag !== 5) throw Error(s(476));
    var c = Jp(e).queue;
    Qp(
      e,
      c,
      n,
      ce,
      a === null ? jb : function() {
        return Kp(e), a(l);
      }
    );
  }
  function Jp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: ce
      },
      next: null
    };
    var a = {};
    return n.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: dr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Kp(e) {
    var n = Jp(e).next.queue;
    fs(e, n, {}, mn());
  }
  function Bc() {
    return qt(Os);
  }
  function Wp() {
    return _t().memoizedState;
  }
  function em() {
    return _t().memoizedState;
  }
  function Rb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = mn();
          e = Mr(a);
          var l = jr(n, e, a);
          l !== null && (gn(l, n, a), is(l, n, a)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function zb(e, n, a) {
    var l = mn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e) ? nm(n, a) : (a = ic(e, n, a, l), a !== null && (gn(a, e, l), rm(a, n, l)));
  }
  function tm(e, n, a) {
    var l = mn();
    fs(e, n, a, l);
  }
  function fs(e, n, a, l) {
    var c = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Bl(e)) nm(n, c);
    else {
      var y = e.alternate;
      if (e.lanes === 0 && (y === null || y.lanes === 0) && (y = n.lastRenderedReducer, y !== null))
        try {
          var A = n.lastRenderedState, k = y(A, a);
          if (c.hasEagerState = !0, c.eagerState = k, cn(k, A))
            return xl(e, n, c, 0), tt === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = ic(e, n, c, l), a !== null)
        return gn(a, e, l), rm(a, n, l), !0;
    }
    return !1;
  }
  function Uc(e, n, a, l) {
    if (l = {
      lane: 2,
      revertLane: bf(),
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e)) {
      if (n) throw Error(s(479));
    } else
      n = ic(
        e,
        a,
        l,
        2
      ), n !== null && gn(n, e, 2);
  }
  function Bl(e) {
    var n = e.alternate;
    return e === De || n !== null && n === De;
  }
  function nm(e, n) {
    si = jl = !0;
    var a = e.pending;
    a === null ? n.next = n : (n.next = a.next, a.next = n), e.pending = n;
  }
  function rm(e, n, a) {
    if ((a & 4194048) !== 0) {
      var l = n.lanes;
      l &= e.pendingLanes, a |= l, n.lanes = a, fh(e, a);
    }
  }
  var Ul = {
    readContext: qt,
    use: zl,
    useCallback: gt,
    useContext: gt,
    useEffect: gt,
    useImperativeHandle: gt,
    useLayoutEffect: gt,
    useInsertionEffect: gt,
    useMemo: gt,
    useReducer: gt,
    useRef: gt,
    useState: gt,
    useDebugValue: gt,
    useDeferredValue: gt,
    useTransition: gt,
    useSyncExternalStore: gt,
    useId: gt,
    useHostTransitionStatus: gt,
    useFormState: gt,
    useActionState: gt,
    useOptimistic: gt,
    useMemoCache: gt,
    useCacheRefresh: gt
  }, am = {
    readContext: qt,
    use: zl,
    useCallback: function(e, n) {
      return en().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: qt,
    useEffect: Hp,
    useImperativeHandle: function(e, n, a) {
      a = a != null ? a.concat([e]) : null, Pl(
        4194308,
        4,
        Gp.bind(null, n, e),
        a
      );
    },
    useLayoutEffect: function(e, n) {
      return Pl(4194308, 4, e, n);
    },
    useInsertionEffect: function(e, n) {
      Pl(4, 2, e, n);
    },
    useMemo: function(e, n) {
      var a = en();
      n = n === void 0 ? null : n;
      var l = e();
      if (ba) {
        un(!0);
        try {
          e();
        } finally {
          un(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = en();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          un(!0);
          try {
            a(n);
          } finally {
            un(!1);
          }
        }
      } else c = n;
      return l.memoizedState = l.baseState = c, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: c
      }, l.queue = e, e = e.dispatch = zb.bind(
        null,
        De,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = en();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, a = tm.bind(null, De, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = en();
      return Ic(a, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = Qp.bind(
        null,
        De,
        e.queue,
        !0,
        !1
      ), en().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = De, c = en();
      if (Ge) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), tt === null)
          throw Error(s(349));
        (Pe & 124) !== 0 || wp(l, n, a);
      }
      c.memoizedState = a;
      var y = { value: a, getSnapshot: n };
      return c.queue = y, Hp(Np.bind(null, l, y, e), [
        e
      ]), l.flags |= 2048, oi(
        9,
        Il(),
        Ap.bind(
          null,
          l,
          y,
          a,
          n
        ),
        null
      ), a;
    },
    useId: function() {
      var e = en(), n = tt.identifierPrefix;
      if (Ge) {
        var a = ur, l = or;
        a = (l & ~(1 << 32 - jt(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Rl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Ob++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Bc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(e) {
      var n = en();
      n.memoizedState = n.baseState = e;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return n.queue = a, n = Uc.bind(
        null,
        De,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Dc,
    useCacheRefresh: function() {
      return en().memoizedState = Rb.bind(
        null,
        De
      );
    }
  }, im = {
    readContext: qt,
    use: zl,
    useCallback: Yp,
    useContext: qt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Fp,
    useLayoutEffect: Zp,
    useMemo: Xp,
    useReducer: Ll,
    useRef: Up,
    useState: function() {
      return Ll(dr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = _t();
      return $p(
        a,
        $e.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ll(dr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        n
      ];
    },
    useSyncExternalStore: Cp,
    useId: Wp,
    useHostTransitionStatus: Bc,
    useFormState: Ip,
    useActionState: Ip,
    useOptimistic: function(e, n) {
      var a = _t();
      return kp(a, $e, e, n);
    },
    useMemoCache: Dc,
    useCacheRefresh: em
  }, Lb = {
    readContext: qt,
    use: zl,
    useCallback: Yp,
    useContext: qt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Fp,
    useLayoutEffect: Zp,
    useMemo: Xp,
    useReducer: jc,
    useRef: Up,
    useState: function() {
      return jc(dr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = _t();
      return $e === null ? Ic(a, e, n) : $p(
        a,
        $e.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = jc(dr)[0], n = _t().memoizedState;
      return [
        typeof e == "boolean" ? e : us(e),
        n
      ];
    },
    useSyncExternalStore: Cp,
    useId: Wp,
    useHostTransitionStatus: Bc,
    useFormState: Bp,
    useActionState: Bp,
    useOptimistic: function(e, n) {
      var a = _t();
      return $e !== null ? kp(a, $e, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Dc,
    useCacheRefresh: em
  }, ui = null, ds = 0;
  function Hl(e) {
    var n = ds;
    return ds += 1, ui === null && (ui = []), gp(ui, e, n);
  }
  function hs(e, n) {
    n = n.props.ref, e.ref = n !== void 0 ? n : null;
  }
  function ql(e, n) {
    throw n.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(n), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e
      )
    ));
  }
  function sm(e) {
    var n = e._init;
    return n(e._payload);
  }
  function lm(e) {
    function n(P, L) {
      if (e) {
        var H = P.deletions;
        H === null ? (P.deletions = [L], P.flags |= 16) : H.push(L);
      }
    }
    function a(P, L) {
      if (!e) return null;
      for (; L !== null; )
        n(P, L), L = L.sibling;
      return null;
    }
    function l(P) {
      for (var L = /* @__PURE__ */ new Map(); P !== null; )
        P.key !== null ? L.set(P.key, P) : L.set(P.index, P), P = P.sibling;
      return L;
    }
    function c(P, L) {
      return P = lr(P, L), P.index = 0, P.sibling = null, P;
    }
    function y(P, L, H) {
      return P.index = H, e ? (H = P.alternate, H !== null ? (H = H.index, H < L ? (P.flags |= 67108866, L) : H) : (P.flags |= 67108866, L)) : (P.flags |= 1048576, L);
    }
    function A(P) {
      return e && P.alternate === null && (P.flags |= 67108866), P;
    }
    function k(P, L, H, K) {
      return L === null || L.tag !== 6 ? (L = lc(H, P.mode, K), L.return = P, L) : (L = c(L, H), L.return = P, L);
    }
    function j(P, L, H, K) {
      var he = H.type;
      return he === d ? J(
        P,
        L,
        H.props.children,
        K,
        H.key
      ) : L !== null && (L.elementType === he || typeof he == "object" && he !== null && he.$$typeof === U && sm(he) === L.type) ? (L = c(L, H.props), hs(L, H), L.return = P, L) : (L = Cl(
        H.type,
        H.key,
        H.props,
        null,
        P.mode,
        K
      ), hs(L, H), L.return = P, L);
    }
    function q(P, L, H, K) {
      return L === null || L.tag !== 4 || L.stateNode.containerInfo !== H.containerInfo || L.stateNode.implementation !== H.implementation ? (L = oc(H, P.mode, K), L.return = P, L) : (L = c(L, H.children || []), L.return = P, L);
    }
    function J(P, L, H, K, he) {
      return L === null || L.tag !== 7 ? (L = fa(
        H,
        P.mode,
        K,
        he
      ), L.return = P, L) : (L = c(L, H), L.return = P, L);
    }
    function ee(P, L, H) {
      if (typeof L == "string" && L !== "" || typeof L == "number" || typeof L == "bigint")
        return L = lc(
          "" + L,
          P.mode,
          H
        ), L.return = P, L;
      if (typeof L == "object" && L !== null) {
        switch (L.$$typeof) {
          case m:
            return H = Cl(
              L.type,
              L.key,
              L.props,
              null,
              P.mode,
              H
            ), hs(H, L), H.return = P, H;
          case v:
            return L = oc(
              L,
              P.mode,
              H
            ), L.return = P, L;
          case U:
            var K = L._init;
            return L = K(L._payload), ee(P, L, H);
        }
        if (de(L) || V(L))
          return L = fa(
            L,
            P.mode,
            H,
            null
          ), L.return = P, L;
        if (typeof L.then == "function")
          return ee(P, Hl(L), H);
        if (L.$$typeof === O)
          return ee(
            P,
            Tl(P, L),
            H
          );
        ql(P, L);
      }
      return null;
    }
    function Z(P, L, H, K) {
      var he = L !== null ? L.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return he !== null ? null : k(P, L, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            return H.key === he ? j(P, L, H, K) : null;
          case v:
            return H.key === he ? q(P, L, H, K) : null;
          case U:
            return he = H._init, H = he(H._payload), Z(P, L, H, K);
        }
        if (de(H) || V(H))
          return he !== null ? null : J(P, L, H, K, null);
        if (typeof H.then == "function")
          return Z(
            P,
            L,
            Hl(H),
            K
          );
        if (H.$$typeof === O)
          return Z(
            P,
            L,
            Tl(P, H),
            K
          );
        ql(P, H);
      }
      return null;
    }
    function G(P, L, H, K, he) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return P = P.get(H) || null, k(L, P, "" + K, he);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case m:
            return P = P.get(
              K.key === null ? H : K.key
            ) || null, j(L, P, K, he);
          case v:
            return P = P.get(
              K.key === null ? H : K.key
            ) || null, q(L, P, K, he);
          case U:
            var je = K._init;
            return K = je(K._payload), G(
              P,
              L,
              H,
              K,
              he
            );
        }
        if (de(K) || V(K))
          return P = P.get(H) || null, J(L, P, K, he, null);
        if (typeof K.then == "function")
          return G(
            P,
            L,
            H,
            Hl(K),
            he
          );
        if (K.$$typeof === O)
          return G(
            P,
            L,
            H,
            Tl(L, K),
            he
          );
        ql(L, K);
      }
      return null;
    }
    function Se(P, L, H, K) {
      for (var he = null, je = null, ge = L, _e = L = 0, Mt = null; ge !== null && _e < H.length; _e++) {
        ge.index > _e ? (Mt = ge, ge = null) : Mt = ge.sibling;
        var qe = Z(
          P,
          ge,
          H[_e],
          K
        );
        if (qe === null) {
          ge === null && (ge = Mt);
          break;
        }
        e && ge && qe.alternate === null && n(P, ge), L = y(qe, L, _e), je === null ? he = qe : je.sibling = qe, je = qe, ge = Mt;
      }
      if (_e === H.length)
        return a(P, ge), Ge && ha(P, _e), he;
      if (ge === null) {
        for (; _e < H.length; _e++)
          ge = ee(P, H[_e], K), ge !== null && (L = y(
            ge,
            L,
            _e
          ), je === null ? he = ge : je.sibling = ge, je = ge);
        return Ge && ha(P, _e), he;
      }
      for (ge = l(ge); _e < H.length; _e++)
        Mt = G(
          ge,
          P,
          _e,
          H[_e],
          K
        ), Mt !== null && (e && Mt.alternate !== null && ge.delete(
          Mt.key === null ? _e : Mt.key
        ), L = y(
          Mt,
          L,
          _e
        ), je === null ? he = Mt : je.sibling = Mt, je = Mt);
      return e && ge.forEach(function(Qr) {
        return n(P, Qr);
      }), Ge && ha(P, _e), he;
    }
    function be(P, L, H, K) {
      if (H == null) throw Error(s(151));
      for (var he = null, je = null, ge = L, _e = L = 0, Mt = null, qe = H.next(); ge !== null && !qe.done; _e++, qe = H.next()) {
        ge.index > _e ? (Mt = ge, ge = null) : Mt = ge.sibling;
        var Qr = Z(P, ge, qe.value, K);
        if (Qr === null) {
          ge === null && (ge = Mt);
          break;
        }
        e && ge && Qr.alternate === null && n(P, ge), L = y(Qr, L, _e), je === null ? he = Qr : je.sibling = Qr, je = Qr, ge = Mt;
      }
      if (qe.done)
        return a(P, ge), Ge && ha(P, _e), he;
      if (ge === null) {
        for (; !qe.done; _e++, qe = H.next())
          qe = ee(P, qe.value, K), qe !== null && (L = y(qe, L, _e), je === null ? he = qe : je.sibling = qe, je = qe);
        return Ge && ha(P, _e), he;
      }
      for (ge = l(ge); !qe.done; _e++, qe = H.next())
        qe = G(ge, P, _e, qe.value, K), qe !== null && (e && qe.alternate !== null && ge.delete(qe.key === null ? _e : qe.key), L = y(qe, L, _e), je === null ? he = qe : je.sibling = qe, je = qe);
      return e && ge.forEach(function(I_) {
        return n(P, I_);
      }), Ge && ha(P, _e), he;
    }
    function Je(P, L, H, K) {
      if (typeof H == "object" && H !== null && H.type === d && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            e: {
              for (var he = H.key; L !== null; ) {
                if (L.key === he) {
                  if (he = H.type, he === d) {
                    if (L.tag === 7) {
                      a(
                        P,
                        L.sibling
                      ), K = c(
                        L,
                        H.props.children
                      ), K.return = P, P = K;
                      break e;
                    }
                  } else if (L.elementType === he || typeof he == "object" && he !== null && he.$$typeof === U && sm(he) === L.type) {
                    a(
                      P,
                      L.sibling
                    ), K = c(L, H.props), hs(K, H), K.return = P, P = K;
                    break e;
                  }
                  a(P, L);
                  break;
                } else n(P, L);
                L = L.sibling;
              }
              H.type === d ? (K = fa(
                H.props.children,
                P.mode,
                K,
                H.key
              ), K.return = P, P = K) : (K = Cl(
                H.type,
                H.key,
                H.props,
                null,
                P.mode,
                K
              ), hs(K, H), K.return = P, P = K);
            }
            return A(P);
          case v:
            e: {
              for (he = H.key; L !== null; ) {
                if (L.key === he)
                  if (L.tag === 4 && L.stateNode.containerInfo === H.containerInfo && L.stateNode.implementation === H.implementation) {
                    a(
                      P,
                      L.sibling
                    ), K = c(L, H.children || []), K.return = P, P = K;
                    break e;
                  } else {
                    a(P, L);
                    break;
                  }
                else n(P, L);
                L = L.sibling;
              }
              K = oc(H, P.mode, K), K.return = P, P = K;
            }
            return A(P);
          case U:
            return he = H._init, H = he(H._payload), Je(
              P,
              L,
              H,
              K
            );
        }
        if (de(H))
          return Se(
            P,
            L,
            H,
            K
          );
        if (V(H)) {
          if (he = V(H), typeof he != "function") throw Error(s(150));
          return H = he.call(H), be(
            P,
            L,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return Je(
            P,
            L,
            Hl(H),
            K
          );
        if (H.$$typeof === O)
          return Je(
            P,
            L,
            Tl(P, H),
            K
          );
        ql(P, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, L !== null && L.tag === 6 ? (a(P, L.sibling), K = c(L, H), K.return = P, P = K) : (a(P, L), K = lc(H, P.mode, K), K.return = P, P = K), A(P)) : a(P, L);
    }
    return function(P, L, H, K) {
      try {
        ds = 0;
        var he = Je(
          P,
          L,
          H,
          K
        );
        return ui = null, he;
      } catch (ge) {
        if (ge === rs || ge === kl) throw ge;
        var je = fn(29, ge, null, P.mode);
        return je.lanes = K, je.return = P, je;
      } finally {
      }
    };
  }
  var ci = lm(!0), om = lm(!1), kn = W(null), $n = null;
  function zr(e) {
    var n = e.alternate;
    le(wt, wt.current & 1), le(kn, e), $n === null && (n === null || ii.current !== null || n.memoizedState !== null) && ($n = e);
  }
  function um(e) {
    if (e.tag === 22) {
      if (le(wt, wt.current), le(kn, e), $n === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && ($n = e);
      }
    } else Lr();
  }
  function Lr() {
    le(wt, wt.current), le(kn, kn.current);
  }
  function hr(e) {
    ae(kn), $n === e && ($n = null), ae(wt);
  }
  var wt = W(0);
  function Fl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Df(a)))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  function Hc(e, n, a, l) {
    n = e.memoizedState, a = a(l, n), a = a == null ? n : b({}, n, a), e.memoizedState = a, e.lanes === 0 && (e.updateQueue.baseState = a);
  }
  var qc = {
    enqueueSetState: function(e, n, a) {
      e = e._reactInternals;
      var l = mn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = jr(e, c, l), n !== null && (gn(n, e, l), is(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = mn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = jr(e, c, l), n !== null && (gn(n, e, l), is(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = mn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = jr(e, l, a), n !== null && (gn(n, e, a), is(n, e, a));
    }
  };
  function cm(e, n, a, l, c, y, A) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, y, A) : n.prototype && n.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, y) : !0;
  }
  function fm(e, n, a, l) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(a, l), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(a, l), n.state !== e && qc.enqueueReplaceState(n, n.state, null);
  }
  function _a(e, n) {
    var a = n;
    if ("ref" in n) {
      a = {};
      for (var l in n)
        l !== "ref" && (a[l] = n[l]);
    }
    if (e = e.defaultProps) {
      a === n && (a = b({}, a));
      for (var c in e)
        a[c] === void 0 && (a[c] = e[c]);
    }
    return a;
  }
  var Zl = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(n)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function dm(e) {
    Zl(e);
  }
  function hm(e) {
    console.error(e);
  }
  function pm(e) {
    Zl(e);
  }
  function Gl(e, n) {
    try {
      var a = e.onUncaughtError;
      a(n.value, { componentStack: n.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function mm(e, n, a) {
    try {
      var l = e.onCaughtError;
      l(a.value, {
        componentStack: a.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      });
    } catch (c) {
      setTimeout(function() {
        throw c;
      });
    }
  }
  function Fc(e, n, a) {
    return a = Mr(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Gl(e, n);
    }, a;
  }
  function gm(e) {
    return e = Mr(e), e.tag = 3, e;
  }
  function vm(e, n, a, l) {
    var c = a.type.getDerivedStateFromError;
    if (typeof c == "function") {
      var y = l.value;
      e.payload = function() {
        return c(y);
      }, e.callback = function() {
        mm(n, a, l);
      };
    }
    var A = a.stateNode;
    A !== null && typeof A.componentDidCatch == "function" && (e.callback = function() {
      mm(n, a, l), typeof c != "function" && (qr === null ? qr = /* @__PURE__ */ new Set([this]) : qr.add(this));
      var k = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: k !== null ? k : ""
      });
    });
  }
  function Ib(e, n, a, l, c) {
    if (a.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (n = a.alternate, n !== null && es(
        n,
        a,
        c,
        !0
      ), a = kn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return $n === null ? pf() : a.alternate === null && ht === 0 && (ht = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), gf(e, l, c)), !1;
          case 22:
            return a.flags |= 65536, l === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? (n = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, a.updateQueue = n) : (a = n.retryQueue, a === null ? n.retryQueue = /* @__PURE__ */ new Set([l]) : a.add(l)), gf(e, l, c)), !1;
        }
        throw Error(s(435, a.tag));
      }
      return gf(e, l, c), pf(), !1;
    }
    if (Ge)
      return n = kn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== fc && (e = Error(s(422), { cause: l }), Wi(An(e, a)))) : (l !== fc && (n = Error(s(423), {
        cause: l
      }), Wi(
        An(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = An(l, a), c = Fc(
        e.stateNode,
        l,
        c
      ), Sc(e, c), ht !== 4 && (ht = 2)), !1;
    var y = Error(s(520), { cause: l });
    if (y = An(y, a), _s === null ? _s = [y] : _s.push(y), ht !== 4 && (ht = 2), n === null) return !0;
    l = An(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Fc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (n = a.type, y = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (qr === null || !qr.has(y))))
            return a.flags |= 65536, c &= -c, a.lanes |= c, c = gm(c), vm(
              c,
              e,
              a,
              l
            ), Sc(a, c), !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ym = Error(s(461)), kt = !1;
  function Rt(e, n, a, l) {
    n.child = e === null ? om(n, null, a, l) : ci(
      n,
      e.child,
      a,
      l
    );
  }
  function bm(e, n, a, l, c) {
    a = a.render;
    var y = n.ref;
    if ("ref" in l) {
      var A = {};
      for (var k in l)
        k !== "ref" && (A[k] = l[k]);
    } else A = l;
    return va(n), l = Ac(
      e,
      n,
      a,
      A,
      y,
      c
    ), k = Nc(), e !== null && !kt ? (Tc(e, n, c), pr(e, n, c)) : (Ge && k && uc(n), n.flags |= 1, Rt(e, n, l, c), n.child);
  }
  function _m(e, n, a, l, c) {
    if (e === null) {
      var y = a.type;
      return typeof y == "function" && !sc(y) && y.defaultProps === void 0 && a.compare === null ? (n.tag = 15, n.type = y, Sm(
        e,
        n,
        y,
        l,
        c
      )) : (e = Cl(
        a.type,
        null,
        l,
        n,
        n.mode,
        c
      ), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (y = e.child, !Jc(e, c)) {
      var A = y.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(A, l) && e.ref === n.ref)
        return pr(e, n, c);
    }
    return n.flags |= 1, e = lr(y, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Sm(e, n, a, l, c) {
    if (e !== null) {
      var y = e.memoizedProps;
      if ($i(y, l) && e.ref === n.ref)
        if (kt = !1, n.pendingProps = l = y, Jc(e, c))
          (e.flags & 131072) !== 0 && (kt = !0);
        else
          return n.lanes = e.lanes, pr(e, n, c);
    }
    return Zc(
      e,
      n,
      a,
      l,
      c
    );
  }
  function xm(e, n, a) {
    var l = n.pendingProps, c = l.children, y = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (l = y !== null ? y.baseLanes | a : a, e !== null) {
          for (c = n.child = e.child, y = 0; c !== null; )
            y = y | c.lanes | c.childLanes, c = c.sibling;
          n.childLanes = y & ~l;
        } else n.childLanes = 0, n.child = null;
        return Em(
          e,
          n,
          l,
          a
        );
      }
      if ((a & 536870912) !== 0)
        n.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Ol(
          n,
          y !== null ? y.cachePool : null
        ), y !== null ? Sp(n, y) : Ec(), um(n);
      else
        return n.lanes = n.childLanes = 536870912, Em(
          e,
          n,
          y !== null ? y.baseLanes | a : a,
          a
        );
    } else
      y !== null ? (Ol(n, y.cachePool), Sp(n, y), Lr(), n.memoizedState = null) : (e !== null && Ol(n, null), Ec(), Lr());
    return Rt(e, n, c, a), n.child;
  }
  function Em(e, n, a, l) {
    var c = vc();
    return c = c === null ? null : { parent: Ct._currentValue, pool: c }, n.memoizedState = {
      baseLanes: a,
      cachePool: c
    }, e !== null && Ol(n, null), Ec(), um(n), e !== null && es(e, n, l, !0), null;
  }
  function Vl(e, n) {
    var a = n.ref;
    if (a === null)
      e !== null && e.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(s(284));
      (e === null || e.ref !== a) && (n.flags |= 4194816);
    }
  }
  function Zc(e, n, a, l, c) {
    return va(n), a = Ac(
      e,
      n,
      a,
      l,
      void 0,
      c
    ), l = Nc(), e !== null && !kt ? (Tc(e, n, c), pr(e, n, c)) : (Ge && l && uc(n), n.flags |= 1, Rt(e, n, a, c), n.child);
  }
  function Cm(e, n, a, l, c, y) {
    return va(n), n.updateQueue = null, a = Ep(
      n,
      l,
      a,
      c
    ), xp(e), l = Nc(), e !== null && !kt ? (Tc(e, n, y), pr(e, n, y)) : (Ge && l && uc(n), n.flags |= 1, Rt(e, n, a, y), n.child);
  }
  function wm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var y = ei, A = a.contextType;
      typeof A == "object" && A !== null && (y = qt(A)), y = new a(l, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = qc, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = l, y.state = n.memoizedState, y.refs = {}, bc(n), A = a.contextType, y.context = typeof A == "object" && A !== null ? qt(A) : ei, y.state = n.memoizedState, A = a.getDerivedStateFromProps, typeof A == "function" && (Hc(
        n,
        a,
        A,
        l
      ), y.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (A = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), A !== y.state && qc.enqueueReplaceState(y, y.state, null), ls(n, l, y, c), ss(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      y = n.stateNode;
      var k = n.memoizedProps, j = _a(a, k);
      y.props = j;
      var q = y.context, J = a.contextType;
      A = ei, typeof J == "object" && J !== null && (A = qt(J));
      var ee = a.getDerivedStateFromProps;
      J = typeof ee == "function" || typeof y.getSnapshotBeforeUpdate == "function", k = n.pendingProps !== k, J || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (k || q !== A) && fm(
        n,
        y,
        l,
        A
      ), Dr = !1;
      var Z = n.memoizedState;
      y.state = Z, ls(n, l, y, c), ss(), q = n.memoizedState, k || Z !== q || Dr ? (typeof ee == "function" && (Hc(
        n,
        a,
        ee,
        l
      ), q = n.memoizedState), (j = Dr || cm(
        n,
        a,
        j,
        l,
        Z,
        q,
        A
      )) ? (J || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = q), y.props = l, y.state = q, y.context = A, l = j) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      y = n.stateNode, _c(e, n), A = n.memoizedProps, J = _a(a, A), y.props = J, ee = n.pendingProps, Z = y.context, q = a.contextType, j = ei, typeof q == "object" && q !== null && (j = qt(q)), k = a.getDerivedStateFromProps, (q = typeof k == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (A !== ee || Z !== j) && fm(
        n,
        y,
        l,
        j
      ), Dr = !1, Z = n.memoizedState, y.state = Z, ls(n, l, y, c), ss();
      var G = n.memoizedState;
      A !== ee || Z !== G || Dr || e !== null && e.dependencies !== null && Nl(e.dependencies) ? (typeof k == "function" && (Hc(
        n,
        a,
        k,
        l
      ), G = n.memoizedState), (J = Dr || cm(
        n,
        a,
        J,
        l,
        Z,
        G,
        j
      ) || e !== null && e.dependencies !== null && Nl(e.dependencies)) ? (q || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, G, j), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        l,
        G,
        j
      )), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = G), y.props = l, y.state = G, y.context = j, l = J) : (typeof y.componentDidUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || A === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), l = !1);
    }
    return y = l, Vl(e, n), l = (n.flags & 128) !== 0, y || l ? (y = n.stateNode, a = l && typeof a.getDerivedStateFromError != "function" ? null : y.render(), n.flags |= 1, e !== null && l ? (n.child = ci(
      n,
      e.child,
      null,
      c
    ), n.child = ci(
      n,
      null,
      a,
      c
    )) : Rt(e, n, a, c), n.memoizedState = y.state, e = n.child) : e = pr(
      e,
      n,
      c
    ), e;
  }
  function Am(e, n, a, l) {
    return Ki(), n.flags |= 256, Rt(e, n, a, l), n.child;
  }
  var Gc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vc(e) {
    return { baseLanes: e, cachePool: hp() };
  }
  function Yc(e, n, a) {
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Dn), e;
  }
  function Nm(e, n, a) {
    var l = n.pendingProps, c = !1, y = (n.flags & 128) !== 0, A;
    if ((A = y) || (A = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), A && (c = !0, n.flags &= -129), A = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ge) {
        if (c ? zr(n) : Lr(), Ge) {
          var k = dt, j;
          if (j = k) {
            e: {
              for (j = k, k = Xn; j.nodeType !== 8; ) {
                if (!k) {
                  k = null;
                  break e;
                }
                if (j = Hn(
                  j.nextSibling
                ), j === null) {
                  k = null;
                  break e;
                }
              }
              k = j;
            }
            k !== null ? (n.memoizedState = {
              dehydrated: k,
              treeContext: da !== null ? { id: or, overflow: ur } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, j = fn(
              18,
              null,
              null,
              0
            ), j.stateNode = k, j.return = n, n.child = j, Yt = n, dt = null, j = !0) : j = !1;
          }
          j || ma(n);
        }
        if (k = n.memoizedState, k !== null && (k = k.dehydrated, k !== null))
          return Df(k) ? n.lanes = 32 : n.lanes = 536870912, null;
        hr(n);
      }
      return k = l.children, l = l.fallback, c ? (Lr(), c = n.mode, k = Yl(
        { mode: "hidden", children: k },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), k.return = n, l.return = n, k.sibling = l, n.child = k, c = n.child, c.memoizedState = Vc(a), c.childLanes = Yc(
        e,
        A,
        a
      ), n.memoizedState = Gc, l) : (zr(n), Xc(n, k));
    }
    if (j = e.memoizedState, j !== null && (k = j.dehydrated, k !== null)) {
      if (y)
        n.flags & 256 ? (zr(n), n.flags &= -257, n = $c(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (Lr(), n.child = e.child, n.flags |= 128, n = null) : (Lr(), c = l.fallback, k = n.mode, l = Yl(
          { mode: "visible", children: l.children },
          k
        ), c = fa(
          c,
          k,
          a,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, ci(
          n,
          e.child,
          null,
          a
        ), l = n.child, l.memoizedState = Vc(a), l.childLanes = Yc(
          e,
          A,
          a
        ), n.memoizedState = Gc, n = c);
      else if (zr(n), Df(k)) {
        if (A = k.nextSibling && k.nextSibling.dataset, A) var q = A.dgst;
        A = q, l = Error(s(419)), l.stack = "", l.digest = A, Wi({ value: l, source: null, stack: null }), n = $c(
          e,
          n,
          a
        );
      } else if (kt || es(e, n, a, !1), A = (a & e.childLanes) !== 0, kt || A) {
        if (A = tt, A !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Du(l), l = (l & (A.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== j.retryLane))
          throw j.retryLane = l, Wa(e, l), gn(A, e, l), ym;
        k.data === "$?" || pf(), n = $c(
          e,
          n,
          a
        );
      } else
        k.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, dt = Hn(
          k.nextSibling
        ), Yt = n, Ge = !0, pa = null, Xn = !1, e !== null && (Tn[On++] = or, Tn[On++] = ur, Tn[On++] = da, or = e.id, ur = e.overflow, da = n), n = Xc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (Lr(), c = l.fallback, k = n.mode, j = e.child, q = j.sibling, l = lr(j, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = j.subtreeFlags & 65011712, q !== null ? c = lr(q, c) : (c = fa(
      c,
      k,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, k = e.child.memoizedState, k === null ? k = Vc(a) : (j = k.cachePool, j !== null ? (q = Ct._currentValue, j = j.parent !== q ? { parent: q, pool: q } : j) : j = hp(), k = {
      baseLanes: k.baseLanes | a,
      cachePool: j
    }), c.memoizedState = k, c.childLanes = Yc(
      e,
      A,
      a
    ), n.memoizedState = Gc, l) : (zr(n), a = e.child, e = a.sibling, a = lr(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (A = n.deletions, A === null ? (n.deletions = [e], n.flags |= 16) : A.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Xc(e, n) {
    return n = Yl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Yl(e, n) {
    return e = fn(22, e, null, n), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function $c(e, n, a) {
    return ci(n, e.child, null, a), e = Xc(
      n,
      n.pendingProps.children
    ), e.flags |= 2, n.memoizedState = null, e;
  }
  function Tm(e, n, a) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n), hc(e.return, n, a);
  }
  function Qc(e, n, a, l, c) {
    var y = e.memoizedState;
    y === null ? e.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: a,
      tailMode: c
    } : (y.isBackwards = n, y.rendering = null, y.renderingStartTime = 0, y.last = l, y.tail = a, y.tailMode = c);
  }
  function Om(e, n, a) {
    var l = n.pendingProps, c = l.revealOrder, y = l.tail;
    if (Rt(e, n, l.children, a), l = wt.current, (l & 2) !== 0)
      l = l & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = n.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && Tm(e, a, n);
          else if (e.tag === 19)
            Tm(e, a, n);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === n) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === n)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      l &= 1;
    }
    switch (le(wt, l), c) {
      case "forwards":
        for (a = n.child, c = null; a !== null; )
          e = a.alternate, e !== null && Fl(e) === null && (c = a), a = a.sibling;
        a = c, a === null ? (c = n.child, n.child = null) : (c = a.sibling, a.sibling = null), Qc(
          n,
          !1,
          c,
          a,
          y
        );
        break;
      case "backwards":
        for (a = null, c = n.child, n.child = null; c !== null; ) {
          if (e = c.alternate, e !== null && Fl(e) === null) {
            n.child = c;
            break;
          }
          e = c.sibling, c.sibling = a, a = c, c = e;
        }
        Qc(
          n,
          !0,
          a,
          null,
          y
        );
        break;
      case "together":
        Qc(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function pr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Hr |= n.lanes, (a & n.childLanes) === 0)
      if (e !== null) {
        if (es(
          e,
          n,
          a,
          !1
        ), (a & n.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && n.child !== e.child)
      throw Error(s(153));
    if (n.child !== null) {
      for (e = n.child, a = lr(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = lr(e, e.pendingProps), a.return = n;
      a.sibling = null;
    }
    return n.child;
  }
  function Jc(e, n) {
    return (e.lanes & n) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Nl(e)));
  }
  function Pb(e, n, a) {
    switch (n.tag) {
      case 3:
        ve(n, n.stateNode.containerInfo), kr(n, Ct, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        rt(n);
        break;
      case 4:
        ve(n, n.stateNode.containerInfo);
        break;
      case 10:
        kr(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (zr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Nm(e, n, a) : (zr(n), e = pr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        zr(n);
        break;
      case 19:
        var c = (e.flags & 128) !== 0;
        if (l = (a & n.childLanes) !== 0, l || (es(
          e,
          n,
          a,
          !1
        ), l = (a & n.childLanes) !== 0), c) {
          if (l)
            return Om(
              e,
              n,
              a
            );
          n.flags |= 128;
        }
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), le(wt, wt.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, xm(e, n, a);
      case 24:
        kr(n, Ct, e.memoizedState.cache);
    }
    return pr(e, n, a);
  }
  function km(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        kt = !0;
      else {
        if (!Jc(e, a) && (n.flags & 128) === 0)
          return kt = !1, Pb(
            e,
            n,
            a
          );
        kt = (e.flags & 131072) !== 0;
      }
    else
      kt = !1, Ge && (n.flags & 1048576) !== 0 && sp(n, Al, n.index);
    switch (n.lanes = 0, n.tag) {
      case 16:
        e: {
          e = n.pendingProps;
          var l = n.elementType, c = l._init;
          if (l = c(l._payload), n.type = l, typeof l == "function")
            sc(l) ? (e = _a(l, e), n.tag = 1, n = wm(
              null,
              n,
              l,
              e,
              a
            )) : (n.tag = 0, n = Zc(
              null,
              n,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              if (c = l.$$typeof, c === E) {
                n.tag = 11, n = bm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === M) {
                n.tag = 14, n = _m(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              }
            }
            throw n = ie(l) || l, Error(s(306, n, ""));
          }
        }
        return n;
      case 0:
        return Zc(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 1:
        return l = n.type, c = _a(
          l,
          n.pendingProps
        ), wm(
          e,
          n,
          l,
          c,
          a
        );
      case 3:
        e: {
          if (ve(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var y = n.memoizedState;
          c = y.element, _c(e, n), ls(n, l, null, a);
          var A = n.memoizedState;
          if (l = A.cache, kr(n, Ct, l), l !== y.cache && pc(
            n,
            [Ct],
            a,
            !0
          ), ss(), l = A.element, y.isDehydrated)
            if (y = {
              element: l,
              isDehydrated: !1,
              cache: A.cache
            }, n.updateQueue.baseState = y, n.memoizedState = y, n.flags & 256) {
              n = Am(
                e,
                n,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = An(
                Error(s(424)),
                n
              ), Wi(c), n = Am(
                e,
                n,
                l,
                a
              );
              break e;
            } else {
              switch (e = n.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (dt = Hn(e.firstChild), Yt = n, Ge = !0, pa = null, Xn = !0, a = om(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ki(), l === c) {
              n = pr(
                e,
                n,
                a
              );
              break e;
            }
            Rt(
              e,
              n,
              l,
              a
            );
          }
          n = n.child;
        }
        return n;
      case 26:
        return Vl(e, n), e === null ? (a = Rg(
          n.type,
          null,
          n.pendingProps,
          null
        )) ? n.memoizedState = a : Ge || (a = n.type, e = n.pendingProps, l = lo(
          Q.current
        ).createElement(a), l[Ht] = n, l[Kt] = e, Lt(l, a, e), Ot(l), n.stateNode = l) : n.memoizedState = Rg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return rt(n), e === null && Ge && (l = n.stateNode = Dg(
          n.type,
          n.pendingProps,
          Q.current
        ), Yt = n, Xn = !0, c = dt, Gr(n.type) ? (Mf = c, dt = Hn(
          l.firstChild
        )) : dt = c), Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Vl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ge && ((c = l = dt) && (l = d_(
          l,
          n.type,
          n.pendingProps,
          Xn
        ), l !== null ? (n.stateNode = l, Yt = n, dt = Hn(
          l.firstChild
        ), Xn = !1, c = !0) : c = !1), c || ma(n)), rt(n), c = n.type, y = n.pendingProps, A = e !== null ? e.memoizedProps : null, l = y.children, Tf(c, y) ? l = null : A !== null && Tf(c, A) && (n.flags |= 32), n.memoizedState !== null && (c = Ac(
          e,
          n,
          kb,
          null,
          null,
          a
        ), Os._currentValue = c), Vl(e, n), Rt(e, n, l, a), n.child;
      case 6:
        return e === null && Ge && ((e = a = dt) && (a = h_(
          a,
          n.pendingProps,
          Xn
        ), a !== null ? (n.stateNode = a, Yt = n, dt = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Nm(e, n, a);
      case 4:
        return ve(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = ci(
          n,
          null,
          l,
          a
        ) : Rt(
          e,
          n,
          l,
          a
        ), n.child;
      case 11:
        return bm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 7:
        return Rt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return l = n.pendingProps, kr(n, n.type, l.value), Rt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = qt(c), l = l(c), n.flags |= 1, Rt(e, n, l, a), n.child;
      case 14:
        return _m(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 15:
        return Sm(
          e,
          n,
          n.type,
          n.pendingProps,
          a
        );
      case 19:
        return Om(e, n, a);
      case 31:
        return l = n.pendingProps, a = n.mode, l = {
          mode: l.mode,
          children: l.children
        }, e === null ? (a = Yl(
          l,
          a
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = lr(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return xm(e, n, a);
      case 24:
        return va(n), l = qt(Ct), e === null ? (c = vc(), c === null && (c = tt, y = mc(), c.pooledCache = y, y.refCount++, y !== null && (c.pooledCacheLanes |= a), c = y), n.memoizedState = {
          parent: l,
          cache: c
        }, bc(n), kr(n, Ct, c)) : ((e.lanes & a) !== 0 && (_c(e, n), ls(n, null, null, a), ss()), c = e.memoizedState, y = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), kr(n, Ct, l)) : (l = y.cache, kr(n, Ct, l), l !== c.cache && pc(
          n,
          [Ct],
          a,
          !0
        ))), Rt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 29:
        throw n.pendingProps;
    }
    throw Error(s(156, n.tag));
  }
  function mr(e) {
    e.flags |= 4;
  }
  function Dm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bg(n)) {
      if (n = kn.current, n !== null && ((Pe & 4194048) === Pe ? $n !== null : (Pe & 62914560) !== Pe && (Pe & 536870912) === 0 || n !== $n))
        throw as = yc, pp;
      e.flags |= 8192;
    }
  }
  function Xl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? uh() : 536870912, e.lanes |= n, pi |= n);
  }
  function ps(e, n) {
    if (!Ge)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? e.tail = null : a.sibling = null;
          break;
        case "collapsed":
          a = e.tail;
          for (var l = null; a !== null; )
            a.alternate !== null && (l = a), a = a.sibling;
          l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function ot(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, a = 0, l = 0;
    if (n)
      for (var c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags & 65011712, l |= c.flags & 65011712, c.return = e, c = c.sibling;
    else
      for (c = e.child; c !== null; )
        a |= c.lanes | c.childLanes, l |= c.subtreeFlags, l |= c.flags, c.return = e, c = c.sibling;
    return e.subtreeFlags |= l, e.childLanes = a, n;
  }
  function Bb(e, n, a) {
    var l = n.pendingProps;
    switch (cc(n), n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ot(n), null;
      case 1:
        return ot(n), null;
      case 3:
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), fr(Ct), Ue(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(n) ? mr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, up())), ot(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (mr(n), a !== null ? (ot(n), Dm(n, a)) : (ot(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (mr(n), ot(n), Dm(n, a)) : (ot(n), n.flags &= -16777217) : (e.memoizedProps !== l && mr(n), ot(n), n.flags &= -16777217), null;
      case 27:
        Te(n), a = Q.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && mr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ot(n), null;
          }
          e = oe.current, Ji(n) ? lp(n) : (e = Dg(c, l, a), n.stateNode = e, mr(n));
        }
        return ot(n), null;
      case 5:
        if (Te(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && mr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return ot(n), null;
          }
          if (e = oe.current, Ji(n))
            lp(n);
          else {
            switch (c = lo(
              Q.current
            ), e) {
              case 1:
                e = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                e = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    e = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    e = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    e = c.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof l.is == "string" ? c.createElement("select", { is: l.is }) : c.createElement("select"), l.multiple ? e.multiple = !0 : l.size && (e.size = l.size);
                    break;
                  default:
                    e = typeof l.is == "string" ? c.createElement(a, { is: l.is }) : c.createElement(a);
                }
            }
            e[Ht] = n, e[Kt] = l;
            e: for (c = n.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                e.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === n) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === n)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            n.stateNode = e;
            e: switch (Lt(e, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!l.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && mr(n);
          }
        }
        return ot(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && mr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = Q.current, Ji(n)) {
            if (e = n.stateNode, a = n.memoizedProps, l = null, c = Yt, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[Ht] = n, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Cg(e.nodeValue, a)), e || ma(n);
          } else
            e = lo(e).createTextNode(
              l
            ), e[Ht] = n, n.stateNode = e;
        }
        return ot(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ji(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[Ht] = n;
            } else
              Ki(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            ot(n), c = !1;
          } else
            c = up(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (hr(n), n) : (hr(n), null);
        }
        if (hr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var y = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (y = l.memoizedState.cachePool.pool), y !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xl(n, n.updateQueue), ot(n), null;
      case 4:
        return Ue(), e === null && Ef(n.stateNode.containerInfo), ot(n), null;
      case 10:
        return fr(n.type), ot(n), null;
      case 19:
        if (ae(wt), c = n.memoizedState, c === null) return ot(n), null;
        if (l = (n.flags & 128) !== 0, y = c.rendering, y === null)
          if (l) ps(c, !1);
          else {
            if (ht !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (y = Fl(e), y !== null) {
                  for (n.flags |= 128, ps(c, !1), e = y.updateQueue, n.updateQueue = e, Xl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    ip(a, e), a = a.sibling;
                  return le(
                    wt,
                    wt.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && Fe() > Jl && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Fl(y), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Xl(n, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !Ge)
                return ot(n), null;
            } else
              2 * Fe() - c.renderingStartTime > Jl && a !== 536870912 && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          c.isBackwards ? (y.sibling = n.child, n.child = y) : (e = c.last, e !== null ? e.sibling = y : n.child = y, c.last = y);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = Fe(), n.sibling = null, e = wt.current, le(wt, l ? e & 1 | 2 : e & 1), n) : (ot(n), null);
      case 22:
      case 23:
        return hr(n), Cc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (ot(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ot(n), a = n.updateQueue, a !== null && Xl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ae(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), fr(Ct), ot(n), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, n.tag));
  }
  function Ub(e, n) {
    switch (cc(n), n.tag) {
      case 1:
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return fr(Ct), Ue(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return Te(n), null;
      case 13:
        if (hr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Ki();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ae(wt), null;
      case 4:
        return Ue(), null;
      case 10:
        return fr(n.type), null;
      case 22:
      case 23:
        return hr(n), Cc(), e !== null && ae(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return fr(Ct), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Mm(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        fr(Ct), Ue();
        break;
      case 26:
      case 27:
      case 5:
        Te(n);
        break;
      case 4:
        Ue();
        break;
      case 13:
        hr(n);
        break;
      case 19:
        ae(wt);
        break;
      case 10:
        fr(n.type);
        break;
      case 22:
      case 23:
        hr(n), Cc(), e !== null && ae(ya);
        break;
      case 24:
        fr(Ct);
    }
  }
  function ms(e, n) {
    try {
      var a = n.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var c = l.next;
        a = c;
        do {
          if ((a.tag & e) === e) {
            l = void 0;
            var y = a.create, A = a.inst;
            l = y(), A.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (k) {
      et(n, n.return, k);
    }
  }
  function Ir(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var y = c.next;
        l = y;
        do {
          if ((l.tag & e) === e) {
            var A = l.inst, k = A.destroy;
            if (k !== void 0) {
              A.destroy = void 0, c = n;
              var j = a, q = k;
              try {
                q();
              } catch (J) {
                et(
                  c,
                  j,
                  J
                );
              }
            }
          }
          l = l.next;
        } while (l !== y);
      }
    } catch (J) {
      et(n, n.return, J);
    }
  }
  function jm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        _p(n, a);
      } catch (l) {
        et(e, e.return, l);
      }
    }
  }
  function Rm(e, n, a) {
    a.props = _a(
      e.type,
      e.memoizedProps
    ), a.state = e.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (l) {
      et(e, n, l);
    }
  }
  function gs(e, n) {
    try {
      var a = e.ref;
      if (a !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof a == "function" ? e.refCleanup = a(l) : a.current = l;
      }
    } catch (c) {
      et(e, n, c);
    }
  }
  function Qn(e, n) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          et(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          et(e, n, c);
        }
      else a.current = null;
  }
  function zm(e) {
    var n = e.type, a = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && l.focus();
          break e;
        case "img":
          a.src ? l.src = a.src : a.srcSet && (l.srcset = a.srcSet);
      }
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Kc(e, n, a) {
    try {
      var l = e.stateNode;
      l_(l, e.type, a, n), l[Kt] = n;
    } catch (c) {
      et(e, e.return, c);
    }
  }
  function Lm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Gr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Gr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = so));
    else if (l !== 4 && (l === 27 && Gr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (ef(e, n, a), e = e.sibling; e !== null; )
        ef(e, n, a), e = e.sibling;
  }
  function $l(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Gr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, n, a), e = e.sibling; e !== null; )
        $l(e, n, a), e = e.sibling;
  }
  function Im(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      Lt(n, l, a), n[Ht] = e, n[Kt] = a;
    } catch (y) {
      et(e, e.return, y);
    }
  }
  var gr = !1, vt = !1, tf = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, Dt = null;
  function Hb(e, n) {
    if (e = e.containerInfo, Af = po, e = $h(e), Wu(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var c = l.anchorOffset, y = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, y.nodeType;
            } catch {
              a = null;
              break e;
            }
            var A = 0, k = -1, j = -1, q = 0, J = 0, ee = e, Z = null;
            t: for (; ; ) {
              for (var G; ee !== a || c !== 0 && ee.nodeType !== 3 || (k = A + c), ee !== y || l !== 0 && ee.nodeType !== 3 || (j = A + l), ee.nodeType === 3 && (A += ee.nodeValue.length), (G = ee.firstChild) !== null; )
                Z = ee, ee = G;
              for (; ; ) {
                if (ee === e) break t;
                if (Z === a && ++q === c && (k = A), Z === y && ++J === l && (j = A), (G = ee.nextSibling) !== null) break;
                ee = Z, Z = ee.parentNode;
              }
              ee = G;
            }
            a = k === -1 || j === -1 ? null : { start: k, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Nf = { focusedElem: e, selectionRange: a }, po = !1, Dt = n; Dt !== null; )
      if (n = Dt, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Dt = e;
      else
        for (; Dt !== null; ) {
          switch (n = Dt, y = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && y !== null) {
                e = void 0, a = n, c = y.memoizedProps, y = y.memoizedState, l = a.stateNode;
                try {
                  var Se = _a(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Se,
                    y
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (be) {
                  et(
                    a,
                    a.return,
                    be
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = n.stateNode.containerInfo, a = e.nodeType, a === 9)
                  kf(e);
                else if (a === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      kf(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, Dt = e;
            break;
          }
          Dt = n.return;
        }
  }
  function Bm(e, n, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Pr(e, a), l & 4 && ms(5, a);
        break;
      case 1:
        if (Pr(e, a), l & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (A) {
              et(a, a.return, A);
            }
          else {
            var c = _a(
              a.type,
              n.memoizedProps
            );
            n = n.memoizedState;
            try {
              e.componentDidUpdate(
                c,
                n,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (A) {
              et(
                a,
                a.return,
                A
              );
            }
          }
        l & 64 && jm(a), l & 512 && gs(a, a.return);
        break;
      case 3:
        if (Pr(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
          if (n = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                n = a.child.stateNode;
                break;
              case 1:
                n = a.child.stateNode;
            }
          try {
            _p(e, n);
          } catch (A) {
            et(a, a.return, A);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Im(a);
      case 26:
      case 5:
        Pr(e, a), n === null && l & 4 && zm(a), l & 512 && gs(a, a.return);
        break;
      case 12:
        Pr(e, a);
        break;
      case 13:
        Pr(e, a), l & 4 && qm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Qb.bind(
          null,
          a
        ), p_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || gr, !l) {
          n = n !== null && n.memoizedState !== null || vt, c = gr;
          var y = vt;
          gr = l, (vt = n) && !y ? Br(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Pr(e, a), gr = c, vt = y;
        }
        break;
      case 30:
        break;
      default:
        Pr(e, a);
    }
  }
  function Um(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Um(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Ru(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var it = null, tn = !1;
  function vr(e, n, a) {
    for (a = a.child; a !== null; )
      Hm(e, n, a), a = a.sibling;
  }
  function Hm(e, n, a) {
    if (at && typeof at.onCommitFiberUnmount == "function")
      try {
        at.onCommitFiberUnmount(ft, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        vt || Qn(a, n), vr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        vt || Qn(a, n);
        var l = it, c = tn;
        Gr(a.type) && (it = a.stateNode, tn = !1), vr(
          e,
          n,
          a
        ), ws(a.stateNode), it = l, tn = c;
        break;
      case 5:
        vt || Qn(a, n);
      case 6:
        if (l = it, c = tn, it = null, vr(
          e,
          n,
          a
        ), it = l, tn = c, it !== null)
          if (tn)
            try {
              (it.nodeType === 9 ? it.body : it.nodeName === "HTML" ? it.ownerDocument.body : it).removeChild(a.stateNode);
            } catch (y) {
              et(
                a,
                n,
                y
              );
            }
          else
            try {
              it.removeChild(a.stateNode);
            } catch (y) {
              et(
                a,
                n,
                y
              );
            }
        break;
      case 18:
        it !== null && (tn ? (e = it, Og(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), js(e)) : Og(it, a.stateNode));
        break;
      case 4:
        l = it, c = tn, it = a.stateNode.containerInfo, tn = !0, vr(
          e,
          n,
          a
        ), it = l, tn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vt || Ir(2, a, n), vt || Ir(4, a, n), vr(
          e,
          n,
          a
        );
        break;
      case 1:
        vt || (Qn(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Rm(
          a,
          n,
          l
        )), vr(
          e,
          n,
          a
        );
        break;
      case 21:
        vr(
          e,
          n,
          a
        );
        break;
      case 22:
        vt = (l = vt) || a.memoizedState !== null, vr(
          e,
          n,
          a
        ), vt = l;
        break;
      default:
        vr(
          e,
          n,
          a
        );
    }
  }
  function qm(e, n) {
    if (n.memoizedState === null && (e = n.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        js(e);
      } catch (a) {
        et(n, n.return, a);
      }
  }
  function qb(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var n = e.stateNode;
        return n === null && (n = e.stateNode = new Pm()), n;
      case 22:
        return e = e.stateNode, n = e._retryCache, n === null && (n = e._retryCache = new Pm()), n;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function nf(e, n) {
    var a = qb(e);
    n.forEach(function(l) {
      var c = Jb.bind(null, e, l);
      a.has(l) || (a.add(l), l.then(c, c));
    });
  }
  function dn(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], y = e, A = n, k = A;
        e: for (; k !== null; ) {
          switch (k.tag) {
            case 27:
              if (Gr(k.type)) {
                it = k.stateNode, tn = !1;
                break e;
              }
              break;
            case 5:
              it = k.stateNode, tn = !1;
              break e;
            case 3:
            case 4:
              it = k.stateNode.containerInfo, tn = !0;
              break e;
          }
          k = k.return;
        }
        if (it === null) throw Error(s(160));
        Hm(y, A, c), it = null, tn = !1, y = c.alternate, y !== null && (y.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Fm(n, e), n = n.sibling;
  }
  var Un = null;
  function Fm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        dn(n, e), hn(e), l & 4 && (Ir(3, e, e.return), ms(3, e), Ir(5, e, e.return));
        break;
      case 1:
        dn(n, e), hn(e), l & 512 && (vt || a === null || Qn(a, a.return)), l & 64 && gr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = Un;
        if (dn(n, e), hn(e), l & 512 && (vt || a === null || Qn(a, a.return)), l & 4) {
          var y = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      y = c.getElementsByTagName("title")[0], (!y || y[Ui] || y[Ht] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = c.createElement(l), c.head.insertBefore(
                        y,
                        c.querySelector("head > title")
                      )), Lt(y, l, a), y[Ht] = e, Ot(y), l = y;
                      break e;
                    case "link":
                      var A = Ig(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (A) {
                        for (var k = 0; k < A.length; k++)
                          if (y = A[k], y.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && y.getAttribute("rel") === (a.rel == null ? null : a.rel) && y.getAttribute("title") === (a.title == null ? null : a.title) && y.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            A.splice(k, 1);
                            break t;
                          }
                      }
                      y = c.createElement(l), Lt(y, l, a), c.head.appendChild(y);
                      break;
                    case "meta":
                      if (A = Ig(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (k = 0; k < A.length; k++)
                          if (y = A[k], y.getAttribute("content") === (a.content == null ? null : "" + a.content) && y.getAttribute("name") === (a.name == null ? null : a.name) && y.getAttribute("property") === (a.property == null ? null : a.property) && y.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && y.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            A.splice(k, 1);
                            break t;
                          }
                      }
                      y = c.createElement(l), Lt(y, l, a), c.head.appendChild(y);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  y[Ht] = e, Ot(y), l = y;
                }
                e.stateNode = l;
              } else
                Pg(
                  c,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Lg(
                c,
                l,
                e.memoizedProps
              );
          else
            y !== l ? (y === null ? a.stateNode !== null && (a = a.stateNode, a.parentNode.removeChild(a)) : y.count--, l === null ? Pg(
              c,
              e.type,
              e.stateNode
            ) : Lg(
              c,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Kc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        }
        break;
      case 27:
        dn(n, e), hn(e), l & 512 && (vt || a === null || Qn(a, a.return)), a !== null && l & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (dn(n, e), hn(e), l & 512 && (vt || a === null || Qn(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (G) {
            et(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, Kc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (tf = !0);
        break;
      case 6:
        if (dn(n, e), hn(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (G) {
            et(e, e.return, G);
          }
        }
        break;
      case 3:
        if (co = null, c = Un, Un = oo(n.containerInfo), dn(n, e), Un = c, hn(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            js(n.containerInfo);
          } catch (G) {
            et(e, e.return, G);
          }
        tf && (tf = !1, Zm(e));
        break;
      case 4:
        l = Un, Un = oo(
          e.stateNode.containerInfo
        ), dn(n, e), hn(e), Un = l;
        break;
      case 12:
        dn(n, e), hn(e);
        break;
      case 13:
        dn(n, e), hn(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = Fe()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, q = gr, J = vt;
        if (gr = q || c, vt = J || j, dn(n, e), vt = J, gr = q, hn(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || gr || vt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (y = j.stateNode, c)
                    A = y.style, typeof A.setProperty == "function" ? A.setProperty("display", "none", "important") : A.display = "none";
                  else {
                    k = j.stateNode;
                    var ee = j.memoizedProps.style, Z = ee != null && ee.hasOwnProperty("display") ? ee.display : null;
                    k.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (G) {
                  et(j, j.return, G);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                j = n;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (G) {
                  et(j, j.return, G);
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === e) && n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === e) break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === e) break e;
              a === n && (a = null), n = n.return;
            }
            a === n && (a = null), n.sibling.return = n.return, n = n.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (a = l.retryQueue, a !== null && (l.retryQueue = null, nf(e, a))));
        break;
      case 19:
        dn(n, e), hn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        dn(n, e), hn(e);
    }
  }
  function hn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        for (var a, l = e.return; l !== null; ) {
          if (Lm(l)) {
            a = l;
            break;
          }
          l = l.return;
        }
        if (a == null) throw Error(s(160));
        switch (a.tag) {
          case 27:
            var c = a.stateNode, y = Wc(e);
            $l(e, y, c);
            break;
          case 5:
            var A = a.stateNode;
            a.flags & 32 && (Va(A, ""), a.flags &= -33);
            var k = Wc(e);
            $l(e, k, A);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, q = Wc(e);
            ef(
              e,
              q,
              j
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (J) {
        et(e, e.return, J);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function Zm(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var n = e;
        Zm(n), n.tag === 5 && n.flags & 1024 && n.stateNode.reset(), e = e.sibling;
      }
  }
  function Pr(e, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null; )
        Bm(e, n.alternate, n), n = n.sibling;
  }
  function Sa(e) {
    for (e = e.child; e !== null; ) {
      var n = e;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Ir(4, n, n.return), Sa(n);
          break;
        case 1:
          Qn(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && Rm(
            n,
            n.return,
            a
          ), Sa(n);
          break;
        case 27:
          ws(n.stateNode);
        case 26:
        case 5:
          Qn(n, n.return), Sa(n);
          break;
        case 22:
          n.memoizedState === null && Sa(n);
          break;
        case 30:
          Sa(n);
          break;
        default:
          Sa(n);
      }
      e = e.sibling;
    }
  }
  function Br(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, y = n, A = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Br(
            c,
            y,
            a
          ), ms(4, y);
          break;
        case 1:
          if (Br(
            c,
            y,
            a
          ), l = y, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (q) {
              et(l, l.return, q);
            }
          if (l = y, c = l.updateQueue, c !== null) {
            var k = l.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  bp(j[c], k);
            } catch (q) {
              et(l, l.return, q);
            }
          }
          a && A & 64 && jm(y), gs(y, y.return);
          break;
        case 27:
          Im(y);
        case 26:
        case 5:
          Br(
            c,
            y,
            a
          ), a && l === null && A & 4 && zm(y), gs(y, y.return);
          break;
        case 12:
          Br(
            c,
            y,
            a
          );
          break;
        case 13:
          Br(
            c,
            y,
            a
          ), a && A & 4 && qm(c, y);
          break;
        case 22:
          y.memoizedState === null && Br(
            c,
            y,
            a
          ), gs(y, y.return);
          break;
        case 30:
          break;
        default:
          Br(
            c,
            y,
            a
          );
      }
      n = n.sibling;
    }
  }
  function rf(e, n) {
    var a = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), e = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (e = n.memoizedState.cachePool.pool), e !== a && (e != null && e.refCount++, a != null && ts(a));
  }
  function af(e, n) {
    e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e));
  }
  function Jn(e, n, a, l) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; )
        Gm(
          e,
          n,
          a,
          l
        ), n = n.sibling;
  }
  function Gm(e, n, a, l) {
    var c = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Jn(
          e,
          n,
          a,
          l
        ), c & 2048 && ms(9, n);
        break;
      case 1:
        Jn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Jn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          Jn(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var y = n.memoizedProps, A = y.id, k = y.onPostCommit;
            typeof k == "function" && k(
              A,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            et(n, n.return, j);
          }
        } else
          Jn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Jn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, A = n.alternate, n.memoizedState !== null ? y._visibility & 2 ? Jn(
          e,
          n,
          a,
          l
        ) : vs(e, n) : y._visibility & 2 ? Jn(
          e,
          n,
          a,
          l
        ) : (y._visibility |= 2, fi(
          e,
          n,
          a,
          l,
          (n.subtreeFlags & 10256) !== 0
        )), c & 2048 && rf(A, n);
        break;
      case 24:
        Jn(
          e,
          n,
          a,
          l
        ), c & 2048 && af(n.alternate, n);
        break;
      default:
        Jn(
          e,
          n,
          a,
          l
        );
    }
  }
  function fi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var y = e, A = n, k = a, j = l, q = A.flags;
      switch (A.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            y,
            A,
            k,
            j,
            c
          ), ms(8, A);
          break;
        case 23:
          break;
        case 22:
          var J = A.stateNode;
          A.memoizedState !== null ? J._visibility & 2 ? fi(
            y,
            A,
            k,
            j,
            c
          ) : vs(
            y,
            A
          ) : (J._visibility |= 2, fi(
            y,
            A,
            k,
            j,
            c
          )), c && q & 2048 && rf(
            A.alternate,
            A
          );
          break;
        case 24:
          fi(
            y,
            A,
            k,
            j,
            c
          ), c && q & 2048 && af(A.alternate, A);
          break;
        default:
          fi(
            y,
            A,
            k,
            j,
            c
          );
      }
      n = n.sibling;
    }
  }
  function vs(e, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null; ) {
        var a = e, l = n, c = l.flags;
        switch (l.tag) {
          case 22:
            vs(a, l), c & 2048 && rf(
              l.alternate,
              l
            );
            break;
          case 24:
            vs(a, l), c & 2048 && af(l.alternate, l);
            break;
          default:
            vs(a, l);
        }
        n = n.sibling;
      }
  }
  var ys = 8192;
  function di(e) {
    if (e.subtreeFlags & ys)
      for (e = e.child; e !== null; )
        Vm(e), e = e.sibling;
  }
  function Vm(e) {
    switch (e.tag) {
      case 26:
        di(e), e.flags & ys && e.memoizedState !== null && N_(
          Un,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = Un;
        Un = oo(e.stateNode.containerInfo), di(e), Un = n;
        break;
      case 22:
        e.memoizedState === null && (n = e.alternate, n !== null && n.memoizedState !== null ? (n = ys, ys = 16777216, di(e), ys = n) : di(e));
        break;
      default:
        di(e);
    }
  }
  function Ym(e) {
    var n = e.alternate;
    if (n !== null && (e = n.child, e !== null)) {
      n.child = null;
      do
        n = e.sibling, e.sibling = null, e = n;
      while (e !== null);
    }
  }
  function bs(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          Dt = l, $m(
            l,
            e
          );
        }
      Ym(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Xm(e), e = e.sibling;
  }
  function Xm(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        bs(e), e.flags & 2048 && Ir(9, e, e.return);
        break;
      case 3:
        bs(e);
        break;
      case 12:
        bs(e);
        break;
      case 22:
        var n = e.stateNode;
        e.memoizedState !== null && n._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (n._visibility &= -3, Ql(e)) : bs(e);
        break;
      default:
        bs(e);
    }
  }
  function Ql(e) {
    var n = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (n !== null)
        for (var a = 0; a < n.length; a++) {
          var l = n[a];
          Dt = l, $m(
            l,
            e
          );
        }
      Ym(e);
    }
    for (e = e.child; e !== null; ) {
      switch (n = e, n.tag) {
        case 0:
        case 11:
        case 15:
          Ir(8, n, n.return), Ql(n);
          break;
        case 22:
          a = n.stateNode, a._visibility & 2 && (a._visibility &= -3, Ql(n));
          break;
        default:
          Ql(n);
      }
      e = e.sibling;
    }
  }
  function $m(e, n) {
    for (; Dt !== null; ) {
      var a = Dt;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Ir(8, a, n);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var l = a.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          ts(a.memoizedState.cache);
      }
      if (l = a.child, l !== null) l.return = a, Dt = l;
      else
        e: for (a = e; Dt !== null; ) {
          l = Dt;
          var c = l.sibling, y = l.return;
          if (Um(l), l === a) {
            Dt = null;
            break e;
          }
          if (c !== null) {
            c.return = y, Dt = c;
            break e;
          }
          Dt = y;
        }
    }
  }
  var Fb = {
    getCacheForType: function(e) {
      var n = qt(Ct), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Zb = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, tt = null, Re = null, Pe = 0, Ye = 0, pn = null, Ur = !1, hi = !1, sf = !1, yr = 0, ht = 0, Hr = 0, xa = 0, lf = 0, Dn = 0, pi = 0, _s = null, nn = null, of = !1, uf = 0, Jl = 1 / 0, Kl = null, qr = null, zt = 0, Fr = null, mi = null, gi = 0, cf = 0, ff = null, Qm = null, Ss = 0, df = null;
  function mn() {
    if ((Ve & 2) !== 0 && Pe !== 0)
      return Pe & -Pe;
    if (B.T !== null) {
      var e = ri;
      return e !== 0 ? e : bf();
    }
    return dh();
  }
  function Jm() {
    Dn === 0 && (Dn = (Pe & 536870912) === 0 || Ge ? Pa() : 536870912);
    var e = kn.current;
    return e !== null && (e.flags |= 32), Dn;
  }
  function gn(e, n, a) {
    (e === tt && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Zr(
      e,
      Pe,
      Dn,
      !1
    )), Bi(e, a), ((Ve & 2) === 0 || e !== tt) && (e === tt && ((Ve & 2) === 0 && (xa |= a), ht === 4 && Zr(
      e,
      Pe,
      Dn,
      !1
    )), Kn(e));
  }
  function Km(e, n, a) {
    if ((Ve & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Jt(e, n), c = l ? Yb(e, n) : mf(e, n, !0), y = l;
    do {
      if (c === 0) {
        hi && !l && Zr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, y && !Gb(a)) {
          c = mf(e, n, !1), y = !1;
          continue;
        }
        if (c === 2) {
          if (y = n, e.errorRecoveryDisabledLanes & y)
            var A = 0;
          else
            A = e.pendingLanes & -536870913, A = A !== 0 ? A : A & 536870912 ? 536870912 : 0;
          if (A !== 0) {
            n = A;
            e: {
              var k = e;
              c = _s;
              var j = k.current.memoizedState.isDehydrated;
              if (j && (vi(k, A).flags |= 256), A = mf(
                k,
                A,
                !1
              ), A !== 2) {
                if (sf && !j) {
                  k.errorRecoveryDisabledLanes |= y, xa |= y, c = 4;
                  break e;
                }
                y = nn, nn = c, y !== null && (nn === null ? nn = y : nn.push.apply(
                  nn,
                  y
                ));
              }
              c = A;
            }
            if (y = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          vi(e, 0), Zr(e, n, 0, !0);
          break;
        }
        e: {
          switch (l = e, y = c, y) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((n & 4194048) !== n) break;
            case 6:
              Zr(
                l,
                n,
                Dn,
                !Ur
              );
              break e;
            case 2:
              nn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = uf + 300 - Fe(), 10 < c)) {
            if (Zr(
              l,
              n,
              Dn,
              !Ur
            ), Vt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Ng(
              Wm.bind(
                null,
                l,
                a,
                nn,
                Kl,
                of,
                n,
                Dn,
                xa,
                pi,
                Ur,
                y,
                2,
                -0,
                0
              ),
              c
            );
            break e;
          }
          Wm(
            l,
            a,
            nn,
            Kl,
            of,
            n,
            Dn,
            xa,
            pi,
            Ur,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Kn(e);
  }
  function Wm(e, n, a, l, c, y, A, k, j, q, J, ee, Z, G) {
    if (e.timeoutHandle = -1, ee = n.subtreeFlags, (ee & 8192 || (ee & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: A_ }, Vm(n), ee = T_(), ee !== null)) {
      e.cancelPendingCommit = ee(
        sg.bind(
          null,
          e,
          n,
          y,
          a,
          l,
          c,
          A,
          k,
          j,
          J,
          1,
          Z,
          G
        )
      ), Zr(e, y, A, !q);
      return;
    }
    sg(
      e,
      n,
      y,
      a,
      l,
      c,
      A,
      k,
      j
    );
  }
  function Gb(e) {
    for (var n = e; ; ) {
      var a = n.tag;
      if ((a === 0 || a === 11 || a === 15) && n.flags & 16384 && (a = n.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var l = 0; l < a.length; l++) {
          var c = a[l], y = c.getSnapshot;
          c = c.value;
          try {
            if (!cn(y(), c)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = n.child, n.subtreeFlags & 16384 && a !== null)
        a.return = n, n = a;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Zr(e, n, a, l) {
    n &= ~lf, n &= ~xa, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var y = 31 - jt(c), A = 1 << y;
      l[y] = -1, c &= ~A;
    }
    a !== 0 && ch(e, a, n);
  }
  function Wl() {
    return (Ve & 6) === 0 ? (xs(0), !1) : !0;
  }
  function hf() {
    if (Re !== null) {
      if (Ye === 0)
        var e = Re.return;
      else
        e = Re, cr = ga = null, Oc(e), ui = null, ds = 0, e = Re;
      for (; e !== null; )
        Mm(e.alternate, e), e = e.return;
      Re = null;
    }
  }
  function vi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, u_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hf(), tt = e, Re = a = lr(e.current, null), Pe = n, Ye = 0, pn = null, Ur = !1, hi = Jt(e, n), sf = !1, pi = Dn = lf = xa = Hr = ht = 0, nn = _s = null, of = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - jt(l), y = 1 << c;
        n |= e[c], l &= ~y;
      }
    return yr = n, Sl(), a;
  }
  function eg(e, n) {
    De = null, B.H = Ul, n === rs || n === kl ? (n = vp(), Ye = 3) : n === pp ? (n = vp(), Ye = 4) : Ye = n === ym ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, pn = n, Re === null && (ht = 1, Gl(
      e,
      An(n, e.current)
    ));
  }
  function tg() {
    var e = B.H;
    return B.H = Ul, e === null ? Ul : e;
  }
  function ng() {
    var e = B.A;
    return B.A = Fb, e;
  }
  function pf() {
    ht = 4, Ur || (Pe & 4194048) !== Pe && kn.current !== null || (hi = !0), (Hr & 134217727) === 0 && (xa & 134217727) === 0 || tt === null || Zr(
      tt,
      Pe,
      Dn,
      !1
    );
  }
  function mf(e, n, a) {
    var l = Ve;
    Ve |= 2;
    var c = tg(), y = ng();
    (tt !== e || Pe !== n) && (Kl = null, vi(e, n)), n = !1;
    var A = ht;
    e: do
      try {
        if (Ye !== 0 && Re !== null) {
          var k = Re, j = pn;
          switch (Ye) {
            case 8:
              hf(), A = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              kn.current === null && (n = !0);
              var q = Ye;
              if (Ye = 0, pn = null, yi(e, k, j, q), a && hi) {
                A = 0;
                break e;
              }
              break;
            default:
              q = Ye, Ye = 0, pn = null, yi(e, k, j, q);
          }
        }
        Vb(), A = ht;
        break;
      } catch (J) {
        eg(e, J);
      }
    while (!0);
    return n && e.shellSuspendCounter++, cr = ga = null, Ve = l, B.H = c, B.A = y, Re === null && (tt = null, Pe = 0, Sl()), A;
  }
  function Vb() {
    for (; Re !== null; ) rg(Re);
  }
  function Yb(e, n) {
    var a = Ve;
    Ve |= 2;
    var l = tg(), c = ng();
    tt !== e || Pe !== n ? (Kl = null, Jl = Fe() + 500, vi(e, n)) : hi = Jt(
      e,
      n
    );
    e: do
      try {
        if (Ye !== 0 && Re !== null) {
          n = Re;
          var y = pn;
          t: switch (Ye) {
            case 1:
              Ye = 0, pn = null, yi(e, n, y, 1);
              break;
            case 2:
            case 9:
              if (mp(y)) {
                Ye = 0, pn = null, ag(n);
                break;
              }
              n = function() {
                Ye !== 2 && Ye !== 9 || tt !== e || (Ye = 7), Kn(e);
              }, y.then(n, n);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              mp(y) ? (Ye = 0, pn = null, ag(n)) : (Ye = 0, pn = null, yi(e, n, y, 7));
              break;
            case 5:
              var A = null;
              switch (Re.tag) {
                case 26:
                  A = Re.memoizedState;
                case 5:
                case 27:
                  var k = Re;
                  if (!A || Bg(A)) {
                    Ye = 0, pn = null;
                    var j = k.sibling;
                    if (j !== null) Re = j;
                    else {
                      var q = k.return;
                      q !== null ? (Re = q, eo(q)) : Re = null;
                    }
                    break t;
                  }
              }
              Ye = 0, pn = null, yi(e, n, y, 5);
              break;
            case 6:
              Ye = 0, pn = null, yi(e, n, y, 6);
              break;
            case 8:
              hf(), ht = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Xb();
        break;
      } catch (J) {
        eg(e, J);
      }
    while (!0);
    return cr = ga = null, B.H = l, B.A = c, Ve = a, Re !== null ? 0 : (tt = null, Pe = 0, Sl(), ht);
  }
  function Xb() {
    for (; Re !== null && !Gt(); )
      rg(Re);
  }
  function rg(e) {
    var n = km(e.alternate, e, yr);
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Re = n;
  }
  function ag(e) {
    var n = e, a = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = Cm(
          a,
          n,
          n.pendingProps,
          n.type,
          void 0,
          Pe
        );
        break;
      case 11:
        n = Cm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          Pe
        );
        break;
      case 5:
        Oc(n);
      default:
        Mm(a, n), n = Re = ip(n, yr), n = km(a, n, yr);
    }
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Re = n;
  }
  function yi(e, n, a, l) {
    cr = ga = null, Oc(n), ui = null, ds = 0;
    var c = n.return;
    try {
      if (Ib(
        e,
        c,
        n,
        a,
        Pe
      )) {
        ht = 1, Gl(
          e,
          An(a, e.current)
        ), Re = null;
        return;
      }
    } catch (y) {
      if (c !== null) throw Re = c, y;
      ht = 1, Gl(
        e,
        An(a, e.current)
      ), Re = null;
      return;
    }
    n.flags & 32768 ? (Ge || l === 1 ? e = !0 : hi || (Pe & 536870912) !== 0 ? e = !1 : (Ur = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = kn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ig(n, e)) : eo(n);
  }
  function eo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        ig(
          n,
          Ur
        );
        return;
      }
      e = n.return;
      var a = Bb(
        n.alternate,
        n,
        yr
      );
      if (a !== null) {
        Re = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Re = n;
        return;
      }
      Re = n = e;
    } while (n !== null);
    ht === 0 && (ht = 5);
  }
  function ig(e, n) {
    do {
      var a = Ub(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Re = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Re = e;
        return;
      }
      Re = e = a;
    } while (e !== null);
    ht = 6, Re = null;
  }
  function sg(e, n, a, l, c, y, A, k, j) {
    e.cancelPendingCommit = null;
    do
      to();
    while (zt !== 0);
    if ((Ve & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (y = n.lanes | n.childLanes, y |= ac, A1(
        e,
        a,
        y,
        A,
        k,
        j
      ), e === tt && (Re = tt = null, Pe = 0), mi = n, Fr = e, gi = a, cf = y, ff = c, Qm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Kb(Y, function() {
        return fg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null, c = re.p, re.p = 2, A = Ve, Ve |= 4;
        try {
          Hb(e, n, a);
        } finally {
          Ve = A, re.p = c, B.T = l;
        }
      }
      zt = 1, lg(), og(), ug();
    }
  }
  function lg() {
    if (zt === 1) {
      zt = 0;
      var e = Fr, n = mi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var l = re.p;
        re.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Fm(n, e);
          var y = Nf, A = $h(e.containerInfo), k = y.focusedElem, j = y.selectionRange;
          if (A !== k && k && k.ownerDocument && Xh(
            k.ownerDocument.documentElement,
            k
          )) {
            if (j !== null && Wu(k)) {
              var q = j.start, J = j.end;
              if (J === void 0 && (J = q), "selectionStart" in k)
                k.selectionStart = q, k.selectionEnd = Math.min(
                  J,
                  k.value.length
                );
              else {
                var ee = k.ownerDocument || document, Z = ee && ee.defaultView || window;
                if (Z.getSelection) {
                  var G = Z.getSelection(), Se = k.textContent.length, be = Math.min(j.start, Se), Je = j.end === void 0 ? be : Math.min(j.end, Se);
                  !G.extend && be > Je && (A = Je, Je = be, be = A);
                  var P = Yh(
                    k,
                    be
                  ), L = Yh(
                    k,
                    Je
                  );
                  if (P && L && (G.rangeCount !== 1 || G.anchorNode !== P.node || G.anchorOffset !== P.offset || G.focusNode !== L.node || G.focusOffset !== L.offset)) {
                    var H = ee.createRange();
                    H.setStart(P.node, P.offset), G.removeAllRanges(), be > Je ? (G.addRange(H), G.extend(L.node, L.offset)) : (H.setEnd(L.node, L.offset), G.addRange(H));
                  }
                }
              }
            }
            for (ee = [], G = k; G = G.parentNode; )
              G.nodeType === 1 && ee.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof k.focus == "function" && k.focus(), k = 0; k < ee.length; k++) {
              var K = ee[k];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          po = !!Af, Nf = Af = null;
        } finally {
          Ve = c, re.p = l, B.T = a;
        }
      }
      e.current = n, zt = 2;
    }
  }
  function og() {
    if (zt === 2) {
      zt = 0;
      var e = Fr, n = mi, a = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || a) {
        a = B.T, B.T = null;
        var l = re.p;
        re.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Bm(e, n.alternate, n);
        } finally {
          Ve = c, re.p = l, B.T = a;
        }
      }
      zt = 3;
    }
  }
  function ug() {
    if (zt === 4 || zt === 3) {
      zt = 0, Be();
      var e = Fr, n = mi, a = gi, l = Qm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? zt = 5 : (zt = 0, mi = Fr = null, cg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (qr = null), Mu(a), n = n.stateNode, at && typeof at.onCommitFiberRoot == "function")
        try {
          at.onCommitFiberRoot(
            ft,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = B.T, c = re.p, re.p = 2, B.T = null;
        try {
          for (var y = e.onRecoverableError, A = 0; A < l.length; A++) {
            var k = l[A];
            y(k.value, {
              componentStack: k.stack
            });
          }
        } finally {
          B.T = n, re.p = c;
        }
      }
      (gi & 3) !== 0 && to(), Kn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === df ? Ss++ : (Ss = 0, df = e) : Ss = 0, xs(0);
    }
  }
  function cg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ts(n)));
  }
  function to(e) {
    return lg(), og(), ug(), fg();
  }
  function fg() {
    if (zt !== 5) return !1;
    var e = Fr, n = cf;
    cf = 0;
    var a = Mu(gi), l = B.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, B.T = null, a = ff, ff = null;
      var y = Fr, A = gi;
      if (zt = 0, mi = Fr = null, gi = 0, (Ve & 6) !== 0) throw Error(s(331));
      var k = Ve;
      if (Ve |= 4, Xm(y.current), Gm(
        y,
        y.current,
        A,
        a
      ), Ve = k, xs(0, !1), at && typeof at.onPostCommitFiberRoot == "function")
        try {
          at.onPostCommitFiberRoot(ft, y);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, B.T = l, cg(e, n);
    }
  }
  function dg(e, n, a) {
    n = An(a, n), n = Fc(e.stateNode, n, 2), e = jr(e, n, 2), e !== null && (Bi(e, 2), Kn(e));
  }
  function et(e, n, a) {
    if (e.tag === 3)
      dg(e, e, a);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          dg(
            n,
            e,
            a
          );
          break;
        } else if (n.tag === 1) {
          var l = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (qr === null || !qr.has(l))) {
            e = An(a, e), a = gm(2), l = jr(n, a, 2), l !== null && (vm(
              a,
              l,
              n,
              e
            ), Bi(l, 2), Kn(l));
            break;
          }
        }
        n = n.return;
      }
  }
  function gf(e, n, a) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Zb();
      var c = /* @__PURE__ */ new Set();
      l.set(n, c);
    } else
      c = l.get(n), c === void 0 && (c = /* @__PURE__ */ new Set(), l.set(n, c));
    c.has(a) || (sf = !0, c.add(a), e = $b.bind(null, e, n, a), n.then(e, e));
  }
  function $b(e, n, a) {
    var l = e.pingCache;
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, tt === e && (Pe & a) === a && (ht === 4 || ht === 3 && (Pe & 62914560) === Pe && 300 > Fe() - uf ? (Ve & 2) === 0 && vi(e, 0) : lf |= a, pi === Pe && (pi = 0)), Kn(e);
  }
  function hg(e, n) {
    n === 0 && (n = uh()), e = Wa(e, n), e !== null && (Bi(e, n), Kn(e));
  }
  function Qb(e) {
    var n = e.memoizedState, a = 0;
    n !== null && (a = n.retryLane), hg(e, a);
  }
  function Jb(e, n) {
    var a = 0;
    switch (e.tag) {
      case 13:
        var l = e.stateNode, c = e.memoizedState;
        c !== null && (a = c.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    l !== null && l.delete(n), hg(e, a);
  }
  function Kb(e, n) {
    return Pn(e, n);
  }
  var no = null, bi = null, vf = !1, ro = !1, yf = !1, Ea = 0;
  function Kn(e) {
    e !== bi && e.next === null && (bi === null ? no = bi = e : bi = bi.next = e), ro = !0, vf || (vf = !0, e_());
  }
  function xs(e, n) {
    if (!yf && ro) {
      yf = !0;
      do
        for (var a = !1, l = no; l !== null; ) {
          if (e !== 0) {
            var c = l.pendingLanes;
            if (c === 0) var y = 0;
            else {
              var A = l.suspendedLanes, k = l.pingedLanes;
              y = (1 << 31 - jt(42 | e) + 1) - 1, y &= c & ~(A & ~k), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (a = !0, vg(l, y));
          } else
            y = Pe, y = Vt(
              l,
              l === tt ? y : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (y & 3) === 0 || Jt(l, y) || (a = !0, vg(l, y));
          l = l.next;
        }
      while (a);
      yf = !1;
    }
  }
  function Wb() {
    pg();
  }
  function pg() {
    ro = vf = !1;
    var e = 0;
    Ea !== 0 && (o_() && (e = Ea), Ea = 0);
    for (var n = Fe(), a = null, l = no; l !== null; ) {
      var c = l.next, y = mg(l, n);
      y === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (bi = a)) : (a = l, (e !== 0 || (y & 3) !== 0) && (ro = !0)), l = c;
    }
    xs(e);
  }
  function mg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, y = e.pendingLanes & -62914561; 0 < y; ) {
      var A = 31 - jt(y), k = 1 << A, j = c[A];
      j === -1 ? ((k & a) === 0 || (k & l) !== 0) && (c[A] = ul(k, n)) : j <= n && (e.expiredLanes |= k), y &= ~k;
    }
    if (n = tt, a = Pe, a = Vt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Tt(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Jt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && Tt(l), Mu(a)) {
        case 2:
        case 8:
          a = z;
          break;
        case 32:
          a = Y;
          break;
        case 268435456:
          a = fe;
          break;
        default:
          a = Y;
      }
      return l = gg.bind(null, e), a = Pn(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && Tt(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gg(e, n) {
    if (zt !== 0 && zt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = Pe;
    return l = Vt(
      e,
      e === tt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Km(e, l, n), mg(e, Fe()), e.callbackNode != null && e.callbackNode === a ? gg.bind(null, e) : null);
  }
  function vg(e, n) {
    if (to()) return null;
    Km(e, n, !0);
  }
  function e_() {
    c_(function() {
      (Ve & 6) !== 0 ? Pn(
        Xe,
        Wb
      ) : pg();
    });
  }
  function bf() {
    return Ea === 0 && (Ea = Pa()), Ea;
  }
  function yg(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pl("" + e);
  }
  function bg(e, n) {
    var a = n.ownerDocument.createElement("input");
    return a.name = n.name, a.value = n.value, e.id && a.setAttribute("form", e.id), n.parentNode.insertBefore(a, n), e = new FormData(e), a.parentNode.removeChild(a), e;
  }
  function t_(e, n, a, l, c) {
    if (n === "submit" && a && a.stateNode === c) {
      var y = yg(
        (c[Kt] || null).action
      ), A = l.submitter;
      A && (n = (n = A[Kt] || null) ? yg(n.formAction) : A.getAttribute("formAction"), n !== null && (y = n, A = null));
      var k = new yl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: k,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ea !== 0) {
                  var j = A ? bg(c, A) : new FormData(c);
                  Pc(
                    a,
                    {
                      pending: !0,
                      data: j,
                      method: c.method,
                      action: y
                    },
                    null,
                    j
                  );
                }
              } else
                typeof y == "function" && (k.preventDefault(), j = A ? bg(c, A) : new FormData(c), Pc(
                  a,
                  {
                    pending: !0,
                    data: j,
                    method: c.method,
                    action: y
                  },
                  y,
                  j
                ));
            },
            currentTarget: c
          }
        ]
      });
    }
  }
  for (var _f = 0; _f < rc.length; _f++) {
    var Sf = rc[_f], n_ = Sf.toLowerCase(), r_ = Sf[0].toUpperCase() + Sf.slice(1);
    Bn(
      n_,
      "on" + r_
    );
  }
  Bn(Kh, "onAnimationEnd"), Bn(Wh, "onAnimationIteration"), Bn(ep, "onAnimationStart"), Bn("dblclick", "onDoubleClick"), Bn("focusin", "onFocus"), Bn("focusout", "onBlur"), Bn(_b, "onTransitionRun"), Bn(Sb, "onTransitionStart"), Bn(xb, "onTransitionCancel"), Bn(tp, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), la(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), la(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), la("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), la(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), la(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Es = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), a_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Es)
  );
  function _g(e, n) {
    n = (n & 4) !== 0;
    for (var a = 0; a < e.length; a++) {
      var l = e[a], c = l.event;
      l = l.listeners;
      e: {
        var y = void 0;
        if (n)
          for (var A = l.length - 1; 0 <= A; A--) {
            var k = l[A], j = k.instance, q = k.currentTarget;
            if (k = k.listener, j !== y && c.isPropagationStopped())
              break e;
            y = k, c.currentTarget = q;
            try {
              y(c);
            } catch (J) {
              Zl(J);
            }
            c.currentTarget = null, y = j;
          }
        else
          for (A = 0; A < l.length; A++) {
            if (k = l[A], j = k.instance, q = k.currentTarget, k = k.listener, j !== y && c.isPropagationStopped())
              break e;
            y = k, c.currentTarget = q;
            try {
              y(c);
            } catch (J) {
              Zl(J);
            }
            c.currentTarget = null, y = j;
          }
      }
    }
  }
  function ze(e, n) {
    var a = n[ju];
    a === void 0 && (a = n[ju] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    a.has(l) || (Sg(n, e, 2, !1), a.add(l));
  }
  function xf(e, n, a) {
    var l = 0;
    n && (l |= 4), Sg(
      a,
      e,
      l,
      n
    );
  }
  var ao = "_reactListening" + Math.random().toString(36).slice(2);
  function Ef(e) {
    if (!e[ao]) {
      e[ao] = !0, ph.forEach(function(a) {
        a !== "selectionchange" && (a_.has(a) || xf(a, !1, e), xf(a, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[ao] || (n[ao] = !0, xf("selectionchange", !1, n));
    }
  }
  function Sg(e, n, a, l) {
    switch (Gg(n)) {
      case 2:
        var c = D_;
        break;
      case 8:
        c = M_;
        break;
      default:
        c = If;
    }
    a = c.bind(
      null,
      n,
      a,
      e
    ), c = void 0, !Zu || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (c = !0), l ? c !== void 0 ? e.addEventListener(n, a, {
      capture: !0,
      passive: c
    }) : e.addEventListener(n, a, !0) : c !== void 0 ? e.addEventListener(n, a, {
      passive: c
    }) : e.addEventListener(n, a, !1);
  }
  function Cf(e, n, a, l, c) {
    var y = l;
    if ((n & 1) === 0 && (n & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var A = l.tag;
        if (A === 3 || A === 4) {
          var k = l.stateNode.containerInfo;
          if (k === c) break;
          if (A === 4)
            for (A = l.return; A !== null; ) {
              var j = A.tag;
              if ((j === 3 || j === 4) && A.stateNode.containerInfo === c)
                return;
              A = A.return;
            }
          for (; k !== null; ) {
            if (A = Ua(k), A === null) return;
            if (j = A.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              l = y = A;
              continue e;
            }
            k = k.parentNode;
          }
        }
        l = l.return;
      }
    Th(function() {
      var q = y, J = qu(a), ee = [];
      e: {
        var Z = np.get(e);
        if (Z !== void 0) {
          var G = yl, Se = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = K1;
              break;
            case "focusin":
              Se = "focus", G = Xu;
              break;
            case "focusout":
              Se = "blur", G = Xu;
              break;
            case "beforeblur":
            case "afterblur":
              G = Xu;
              break;
            case "click":
              if (a.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              G = Dh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = U1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = tb;
              break;
            case Kh:
            case Wh:
            case ep:
              G = F1;
              break;
            case tp:
              G = rb;
              break;
            case "scroll":
            case "scrollend":
              G = P1;
              break;
            case "wheel":
              G = ib;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = G1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = jh;
              break;
            case "toggle":
            case "beforetoggle":
              G = lb;
          }
          var be = (n & 4) !== 0, Je = !be && (e === "scroll" || e === "scrollend"), P = be ? Z !== null ? Z + "Capture" : null : Z;
          be = [];
          for (var L = q, H; L !== null; ) {
            var K = L;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || P === null || (K = qi(L, P), K != null && be.push(
              Cs(L, K, H)
            )), Je) break;
            L = L.return;
          }
          0 < be.length && (Z = new G(
            Z,
            Se,
            null,
            a,
            J
          ), ee.push({ event: Z, listeners: be }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", Z && a !== Hu && (Se = a.relatedTarget || a.fromElement) && (Ua(Se) || Se[Ba]))
            break e;
          if ((G || Z) && (Z = J.window === J ? J : (Z = J.ownerDocument) ? Z.defaultView || Z.parentWindow : window, G ? (Se = a.relatedTarget || a.toElement, G = q, Se = Se ? Ua(Se) : null, Se !== null && (Je = u(Se), be = Se.tag, Se !== Je || be !== 5 && be !== 27 && be !== 6) && (Se = null)) : (G = null, Se = q), G !== Se)) {
            if (be = Dh, K = "onMouseLeave", P = "onMouseEnter", L = "mouse", (e === "pointerout" || e === "pointerover") && (be = jh, K = "onPointerLeave", P = "onPointerEnter", L = "pointer"), Je = G == null ? Z : Hi(G), H = Se == null ? Z : Hi(Se), Z = new be(
              K,
              L + "leave",
              G,
              a,
              J
            ), Z.target = Je, Z.relatedTarget = H, K = null, Ua(J) === q && (be = new be(
              P,
              L + "enter",
              Se,
              a,
              J
            ), be.target = H, be.relatedTarget = Je, K = be), Je = K, G && Se)
              t: {
                for (be = G, P = Se, L = 0, H = be; H; H = _i(H))
                  L++;
                for (H = 0, K = P; K; K = _i(K))
                  H++;
                for (; 0 < L - H; )
                  be = _i(be), L--;
                for (; 0 < H - L; )
                  P = _i(P), H--;
                for (; L--; ) {
                  if (be === P || P !== null && be === P.alternate)
                    break t;
                  be = _i(be), P = _i(P);
                }
                be = null;
              }
            else be = null;
            G !== null && xg(
              ee,
              Z,
              G,
              be,
              !1
            ), Se !== null && Je !== null && xg(
              ee,
              Je,
              Se,
              be,
              !0
            );
          }
        }
        e: {
          if (Z = q ? Hi(q) : window, G = Z.nodeName && Z.nodeName.toLowerCase(), G === "select" || G === "input" && Z.type === "file")
            var he = Hh;
          else if (Bh(Z))
            if (qh)
              he = vb;
            else {
              he = mb;
              var je = pb;
            }
          else
            G = Z.nodeName, !G || G.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? q && Uu(q.elementType) && (he = Hh) : he = gb;
          if (he && (he = he(e, q))) {
            Uh(
              ee,
              he,
              a,
              J
            );
            break e;
          }
          je && je(e, Z, q), e === "focusout" && q && Z.type === "number" && q.memoizedProps.value != null && Bu(Z, "number", Z.value);
        }
        switch (je = q ? Hi(q) : window, e) {
          case "focusin":
            (Bh(je) || je.contentEditable === "true") && (Qa = je, ec = q, Qi = null);
            break;
          case "focusout":
            Qi = ec = Qa = null;
            break;
          case "mousedown":
            tc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            tc = !1, Qh(ee, a, J);
            break;
          case "selectionchange":
            if (bb) break;
          case "keydown":
          case "keyup":
            Qh(ee, a, J);
        }
        var ge;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          $a ? Ih(e, a) && (_e = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Rh && a.locale !== "ko" && ($a || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && $a && (ge = Oh()) : (Or = J, Gu = "value" in Or ? Or.value : Or.textContent, $a = !0)), je = io(q, _e), 0 < je.length && (_e = new Mh(
          _e,
          e,
          null,
          a,
          J
        ), ee.push({ event: _e, listeners: je }), ge ? _e.data = ge : (ge = Ph(a), ge !== null && (_e.data = ge)))), (ge = ub ? cb(e, a) : fb(e, a)) && (_e = io(q, "onBeforeInput"), 0 < _e.length && (je = new Mh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          J
        ), ee.push({
          event: je,
          listeners: _e
        }), je.data = ge)), t_(
          ee,
          e,
          q,
          a,
          J
        );
      }
      _g(ee, n);
    });
  }
  function Cs(e, n, a) {
    return {
      instance: e,
      listener: n,
      currentTarget: a
    };
  }
  function io(e, n) {
    for (var a = n + "Capture", l = []; e !== null; ) {
      var c = e, y = c.stateNode;
      if (c = c.tag, c !== 5 && c !== 26 && c !== 27 || y === null || (c = qi(e, a), c != null && l.unshift(
        Cs(e, c, y)
      ), c = qi(e, n), c != null && l.push(
        Cs(e, c, y)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function _i(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function xg(e, n, a, l, c) {
    for (var y = n._reactName, A = []; a !== null && a !== l; ) {
      var k = a, j = k.alternate, q = k.stateNode;
      if (k = k.tag, j !== null && j === l) break;
      k !== 5 && k !== 26 && k !== 27 || q === null || (j = q, c ? (q = qi(a, y), q != null && A.unshift(
        Cs(a, q, j)
      )) : c || (q = qi(a, y), q != null && A.push(
        Cs(a, q, j)
      ))), a = a.return;
    }
    A.length !== 0 && e.push({ event: n, listeners: A });
  }
  var i_ = /\r\n?/g, s_ = /\u0000|\uFFFD/g;
  function Eg(e) {
    return (typeof e == "string" ? e : "" + e).replace(i_, `
`).replace(s_, "");
  }
  function Cg(e, n) {
    return n = Eg(n), Eg(e) === n;
  }
  function so() {
  }
  function Qe(e, n, a, l, c, y) {
    switch (a) {
      case "children":
        typeof l == "string" ? n === "body" || n === "textarea" && l === "" || Va(e, l) : (typeof l == "number" || typeof l == "bigint") && n !== "body" && Va(e, "" + l);
        break;
      case "className":
        fl(e, "class", l);
        break;
      case "tabIndex":
        fl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        fl(e, a, l);
        break;
      case "style":
        Ah(e, l, y);
        break;
      case "data":
        if (n !== "object") {
          fl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (n !== "a" || a !== "href")) {
          e.removeAttribute(a);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof y == "function" && (a === "formAction" ? (n !== "input" && Qe(e, n, "name", c.name, c, null), Qe(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), Qe(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), Qe(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : (Qe(e, n, "encType", c.encType, c, null), Qe(e, n, "method", c.method, c, null), Qe(e, n, "target", c.target, c, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(a);
          break;
        }
        l = pl("" + l), e.setAttribute(a, l);
        break;
      case "onClick":
        l != null && (e.onclick = so);
        break;
      case "onScroll":
        l != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ze("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        a = pl("" + l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "" + l) : e.removeAttribute(a);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, "") : e.removeAttribute(a);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(a, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(a, l) : e.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(a) : e.setAttribute(a, l);
        break;
      case "popover":
        ze("beforetoggle", e), ze("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ir(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ir(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        cl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (a = L1.get(a) || a, cl(e, a, l));
    }
  }
  function wf(e, n, a, l, c, y) {
    switch (a) {
      case "style":
        Ah(e, l, y);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(s(61));
          if (a = l.__html, a != null) {
            if (c.children != null) throw Error(s(60));
            e.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof l == "string" ? Va(e, l) : (typeof l == "number" || typeof l == "bigint") && Va(e, "" + l);
        break;
      case "onScroll":
        l != null && ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && ze("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = so);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mh.hasOwnProperty(a))
          e: {
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), y = e[Kt] || null, y = y != null ? y[a] : null, typeof y == "function" && e.removeEventListener(n, y, c), typeof l == "function")) {
              typeof y != "function" && y !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function Lt(e, n, a) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        ze("error", e), ze("load", e);
        var l = !1, c = !1, y;
        for (y in a)
          if (a.hasOwnProperty(y)) {
            var A = a[y];
            if (A != null)
              switch (y) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  c = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, n));
                default:
                  Qe(e, n, y, A, a, null);
              }
          }
        c && Qe(e, n, "srcSet", a.srcSet, a, null), l && Qe(e, n, "src", a.src, a, null);
        return;
      case "input":
        ze("invalid", e);
        var k = y = A = c = null, j = null, q = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var J = a[l];
            if (J != null)
              switch (l) {
                case "name":
                  c = J;
                  break;
                case "type":
                  A = J;
                  break;
                case "checked":
                  j = J;
                  break;
                case "defaultChecked":
                  q = J;
                  break;
                case "value":
                  y = J;
                  break;
                case "defaultValue":
                  k = J;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (J != null)
                    throw Error(s(137, n));
                  break;
                default:
                  Qe(e, n, l, J, a, null);
              }
          }
        xh(
          e,
          y,
          k,
          j,
          q,
          A,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        ze("invalid", e), l = A = y = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (k = a[c], k != null))
            switch (c) {
              case "value":
                y = k;
                break;
              case "defaultValue":
                A = k;
                break;
              case "multiple":
                l = k;
              default:
                Qe(e, n, c, k, a, null);
            }
        n = y, a = A, e.multiple = !!l, n != null ? Ga(e, !!l, n, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        ze("invalid", e), y = c = l = null;
        for (A in a)
          if (a.hasOwnProperty(A) && (k = a[A], k != null))
            switch (A) {
              case "value":
                l = k;
                break;
              case "defaultValue":
                c = k;
                break;
              case "children":
                y = k;
                break;
              case "dangerouslySetInnerHTML":
                if (k != null) throw Error(s(91));
                break;
              default:
                Qe(e, n, A, k, a, null);
            }
        Ch(e, l, c, y), dl(e);
        return;
      case "option":
        for (j in a)
          if (a.hasOwnProperty(j) && (l = a[j], l != null))
            switch (j) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                Qe(e, n, j, l, a, null);
            }
        return;
      case "dialog":
        ze("beforetoggle", e), ze("toggle", e), ze("cancel", e), ze("close", e);
        break;
      case "iframe":
      case "object":
        ze("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          ze(Es[l], e);
        break;
      case "image":
        ze("error", e), ze("load", e);
        break;
      case "details":
        ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        ze("error", e), ze("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in a)
          if (a.hasOwnProperty(q) && (l = a[q], l != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                Qe(e, n, q, l, a, null);
            }
        return;
      default:
        if (Uu(n)) {
          for (J in a)
            a.hasOwnProperty(J) && (l = a[J], l !== void 0 && wf(
              e,
              n,
              J,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (k in a)
      a.hasOwnProperty(k) && (l = a[k], l != null && Qe(e, n, k, l, a, null));
  }
  function l_(e, n, a, l) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var c = null, y = null, A = null, k = null, j = null, q = null, J = null;
        for (G in a) {
          var ee = a[G];
          if (a.hasOwnProperty(G) && ee != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = ee;
              default:
                l.hasOwnProperty(G) || Qe(e, n, G, null, l, ee);
            }
        }
        for (var Z in l) {
          var G = l[Z];
          if (ee = a[Z], l.hasOwnProperty(Z) && (G != null || ee != null))
            switch (Z) {
              case "type":
                y = G;
                break;
              case "name":
                c = G;
                break;
              case "checked":
                q = G;
                break;
              case "defaultChecked":
                J = G;
                break;
              case "value":
                A = G;
                break;
              case "defaultValue":
                k = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, n));
                break;
              default:
                G !== ee && Qe(
                  e,
                  n,
                  Z,
                  G,
                  l,
                  ee
                );
            }
        }
        Pu(
          e,
          A,
          k,
          j,
          q,
          J,
          y,
          c
        );
        return;
      case "select":
        G = A = k = Z = null;
        for (y in a)
          if (j = a[y], a.hasOwnProperty(y) && j != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                G = j;
              default:
                l.hasOwnProperty(y) || Qe(
                  e,
                  n,
                  y,
                  null,
                  l,
                  j
                );
            }
        for (c in l)
          if (y = l[c], j = a[c], l.hasOwnProperty(c) && (y != null || j != null))
            switch (c) {
              case "value":
                Z = y;
                break;
              case "defaultValue":
                k = y;
                break;
              case "multiple":
                A = y;
              default:
                y !== j && Qe(
                  e,
                  n,
                  c,
                  y,
                  l,
                  j
                );
            }
        n = k, a = A, l = G, Z != null ? Ga(e, !!a, Z, !1) : !!l != !!a && (n != null ? Ga(e, !!a, n, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = Z = null;
        for (k in a)
          if (c = a[k], a.hasOwnProperty(k) && c != null && !l.hasOwnProperty(k))
            switch (k) {
              case "value":
                break;
              case "children":
                break;
              default:
                Qe(e, n, k, null, l, c);
            }
        for (A in l)
          if (c = l[A], y = a[A], l.hasOwnProperty(A) && (c != null || y != null))
            switch (A) {
              case "value":
                Z = c;
                break;
              case "defaultValue":
                G = c;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(s(91));
                break;
              default:
                c !== y && Qe(e, n, A, c, l, y);
            }
        Eh(e, Z, G);
        return;
      case "option":
        for (var Se in a)
          if (Z = a[Se], a.hasOwnProperty(Se) && Z != null && !l.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Qe(
                  e,
                  n,
                  Se,
                  null,
                  l,
                  Z
                );
            }
        for (j in l)
          if (Z = l[j], G = a[j], l.hasOwnProperty(j) && Z !== G && (Z != null || G != null))
            switch (j) {
              case "selected":
                e.selected = Z && typeof Z != "function" && typeof Z != "symbol";
                break;
              default:
                Qe(
                  e,
                  n,
                  j,
                  Z,
                  l,
                  G
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var be in a)
          Z = a[be], a.hasOwnProperty(be) && Z != null && !l.hasOwnProperty(be) && Qe(e, n, be, null, l, Z);
        for (q in l)
          if (Z = l[q], G = a[q], l.hasOwnProperty(q) && Z !== G && (Z != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                Qe(
                  e,
                  n,
                  q,
                  Z,
                  l,
                  G
                );
            }
        return;
      default:
        if (Uu(n)) {
          for (var Je in a)
            Z = a[Je], a.hasOwnProperty(Je) && Z !== void 0 && !l.hasOwnProperty(Je) && wf(
              e,
              n,
              Je,
              void 0,
              l,
              Z
            );
          for (J in l)
            Z = l[J], G = a[J], !l.hasOwnProperty(J) || Z === G || Z === void 0 && G === void 0 || wf(
              e,
              n,
              J,
              Z,
              l,
              G
            );
          return;
        }
    }
    for (var P in a)
      Z = a[P], a.hasOwnProperty(P) && Z != null && !l.hasOwnProperty(P) && Qe(e, n, P, null, l, Z);
    for (ee in l)
      Z = l[ee], G = a[ee], !l.hasOwnProperty(ee) || Z === G || Z == null && G == null || Qe(e, n, ee, Z, l, G);
  }
  var Af = null, Nf = null;
  function lo(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function wg(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Ag(e, n) {
    if (e === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && n === "foreignObject" ? 0 : e;
  }
  function Tf(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var Of = null;
  function o_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Of ? !1 : (Of = e, !0) : (Of = null, !1);
  }
  var Ng = typeof setTimeout == "function" ? setTimeout : void 0, u_ = typeof clearTimeout == "function" ? clearTimeout : void 0, Tg = typeof Promise == "function" ? Promise : void 0, c_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tg < "u" ? function(e) {
    return Tg.resolve(null).then(e).catch(f_);
  } : Ng;
  function f_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Gr(e) {
    return e === "head";
  }
  function Og(e, n) {
    var a = n, l = 0, c = 0;
    do {
      var y = a.nextSibling;
      if (e.removeChild(a), y && y.nodeType === 8)
        if (a = y.data, a === "/$") {
          if (0 < l && 8 > l) {
            a = l;
            var A = e.ownerDocument;
            if (a & 1 && ws(A.documentElement), a & 2 && ws(A.body), a & 4)
              for (a = A.head, ws(a), A = a.firstChild; A; ) {
                var k = A.nextSibling, j = A.nodeName;
                A[Ui] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && A.rel.toLowerCase() === "stylesheet" || a.removeChild(A), A = k;
              }
          }
          if (c === 0) {
            e.removeChild(y), js(n);
            return;
          }
          c--;
        } else
          a === "$" || a === "$?" || a === "$!" ? c++ : l = a.charCodeAt(0) - 48;
      else l = 0;
      a = y;
    } while (a);
    js(n);
  }
  function kf(e) {
    var n = e.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n; ) {
      var a = n;
      switch (n = n.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          kf(a), Ru(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(a);
    }
  }
  function d_(e, n, a, l) {
    for (; e.nodeType === 1; ) {
      var c = a;
      if (e.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[Ui])
          switch (n) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (y = e.getAttribute("rel"), y === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (y !== c.rel || e.getAttribute("href") !== (c.href == null || c.href === "" ? null : c.href) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin) || e.getAttribute("title") !== (c.title == null ? null : c.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (y = e.getAttribute("src"), (y !== (c.src == null ? null : c.src) || e.getAttribute("type") !== (c.type == null ? null : c.type) || e.getAttribute("crossorigin") !== (c.crossOrigin == null ? null : c.crossOrigin)) && y && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (n === "input" && e.type === "hidden") {
        var y = c.name == null ? null : "" + c.name;
        if (c.type === "hidden" && e.getAttribute("name") === y)
          return e;
      } else return e;
      if (e = Hn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function h_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Hn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Df(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function p_(e, n) {
    var a = e.ownerDocument;
    if (e.data !== "$?" || a.readyState === "complete")
      n();
    else {
      var l = function() {
        n(), a.removeEventListener("DOMContentLoaded", l);
      };
      a.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Hn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  var Mf = null;
  function kg(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var a = e.data;
        if (a === "$" || a === "$!" || a === "$?") {
          if (n === 0) return e;
          n--;
        } else a === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dg(e, n, a) {
    switch (n = lo(a), e) {
      case "html":
        if (e = n.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = n.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = n.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function ws(e) {
    for (var n = e.attributes; n.length; )
      e.removeAttributeNode(n[0]);
    Ru(e);
  }
  var Mn = /* @__PURE__ */ new Map(), Mg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var br = re.d;
  re.d = {
    f: m_,
    r: g_,
    D: v_,
    C: y_,
    L: b_,
    m: __,
    X: x_,
    S: S_,
    M: E_
  };
  function m_() {
    var e = br.f(), n = Wl();
    return e || n;
  }
  function g_(e) {
    var n = Ha(e);
    n !== null && n.tag === 5 && n.type === "form" ? Kp(n) : br.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function jg(e, n, a) {
    var l = Si;
    if (l && typeof n == "string" && n) {
      var c = wn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Mg.has(c) || (Mg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), Lt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function v_(e) {
    br.D(e), jg("dns-prefetch", e, null);
  }
  function y_(e, n) {
    br.C(e, n), jg("preconnect", e, n);
  }
  function b_(e, n, a) {
    br.L(e, n, a);
    var l = Si;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + wn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + wn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + wn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + wn(e) + '"]';
      var y = c;
      switch (n) {
        case "style":
          y = xi(e);
          break;
        case "script":
          y = Ei(e);
      }
      Mn.has(y) || (e = b(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), Mn.set(y, e), l.querySelector(c) !== null || n === "style" && l.querySelector(As(y)) || n === "script" && l.querySelector(Ns(y)) || (n = l.createElement("link"), Lt(n, "link", e), Ot(n), l.head.appendChild(n)));
    }
  }
  function __(e, n) {
    br.m(e, n);
    var a = Si;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + wn(l) + '"][href="' + wn(e) + '"]', y = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Ei(e);
      }
      if (!Mn.has(y) && (e = b({ rel: "modulepreload", href: e }, n), Mn.set(y, e), a.querySelector(c) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(Ns(y)))
              return;
        }
        l = a.createElement("link"), Lt(l, "link", e), Ot(l), a.head.appendChild(l);
      }
    }
  }
  function S_(e, n, a) {
    br.S(e, n, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, y = xi(e);
      n = n || "default";
      var A = c.get(y);
      if (!A) {
        var k = { loading: 0, preload: null };
        if (A = l.querySelector(
          As(y)
        ))
          k.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = Mn.get(y)) && jf(e, a);
          var j = A = l.createElement("link");
          Ot(j), Lt(j, "link", e), j._p = new Promise(function(q, J) {
            j.onload = q, j.onerror = J;
          }), j.addEventListener("load", function() {
            k.loading |= 1;
          }), j.addEventListener("error", function() {
            k.loading |= 2;
          }), k.loading |= 4, uo(A, n, l);
        }
        A = {
          type: "stylesheet",
          instance: A,
          count: 1,
          state: k
        }, c.set(y, A);
      }
    }
  }
  function x_(e, n) {
    br.X(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), y = l.get(c);
      y || (y = a.querySelector(Ns(c)), y || (e = b({ src: e, async: !0 }, n), (n = Mn.get(c)) && Rf(e, n), y = a.createElement("script"), Ot(y), Lt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, l.set(c, y));
    }
  }
  function E_(e, n) {
    br.M(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), y = l.get(c);
      y || (y = a.querySelector(Ns(c)), y || (e = b({ src: e, async: !0, type: "module" }, n), (n = Mn.get(c)) && Rf(e, n), y = a.createElement("script"), Ot(y), Lt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, l.set(c, y));
    }
  }
  function Rg(e, n, a, l) {
    var c = (c = Q.current) ? oo(c) : null;
    if (!c) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (n = xi(a.href), a = qa(
          c
        ).hoistableStyles, l = a.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          e = xi(a.href);
          var y = qa(
            c
          ).hoistableStyles, A = y.get(e);
          if (A || (c = c.ownerDocument || c, A = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(e, A), (y = c.querySelector(
            As(e)
          )) && !y._p && (A.instance = y, A.state.loading = 5), Mn.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Mn.set(e, a), y || C_(
            c,
            e,
            a,
            A.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return A;
        }
        if (n && l !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return n = a.async, a = a.src, typeof a == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ei(a), a = qa(
          c
        ).hoistableScripts, l = a.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, a.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function xi(e) {
    return 'href="' + wn(e) + '"';
  }
  function As(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function zg(e) {
    return b({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function C_(e, n, a, l) {
    e.querySelector('link[rel="preload"][as="style"][' + n + "]") ? l.loading = 1 : (n = e.createElement("link"), l.preload = n, n.addEventListener("load", function() {
      return l.loading |= 1;
    }), n.addEventListener("error", function() {
      return l.loading |= 2;
    }), Lt(n, "link", a), Ot(n), e.head.appendChild(n));
  }
  function Ei(e) {
    return '[src="' + wn(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Lg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + wn(a.href) + '"]'
          );
          if (l)
            return n.instance = l, Ot(l), l;
          var c = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Ot(l), Lt(l, "style", c), uo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = xi(a.href);
          var y = e.querySelector(
            As(c)
          );
          if (y)
            return n.state.loading |= 4, n.instance = y, Ot(y), y;
          l = zg(a), (c = Mn.get(c)) && jf(l, c), y = (e.ownerDocument || e).createElement("link"), Ot(y);
          var A = y;
          return A._p = new Promise(function(k, j) {
            A.onload = k, A.onerror = j;
          }), Lt(y, "link", l), n.state.loading |= 4, uo(y, a.precedence, e), n.instance = y;
        case "script":
          return y = Ei(a.src), (c = e.querySelector(
            Ns(y)
          )) ? (n.instance = c, Ot(c), c) : (l = a, (c = Mn.get(y)) && (l = b({}, a), Rf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Ot(c), Lt(c, "link", l), e.head.appendChild(c), n.instance = c);
        case "void":
          return null;
        default:
          throw Error(s(443, n.type));
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (l = n.instance, n.state.loading |= 4, uo(l, a.precedence, e));
    return n.instance;
  }
  function uo(e, n, a) {
    for (var l = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), c = l.length ? l[l.length - 1] : null, y = c, A = 0; A < l.length; A++) {
      var k = l[A];
      if (k.dataset.precedence === n) y = k;
      else if (y !== c) break;
    }
    y ? y.parentNode.insertBefore(e, y.nextSibling) : (n = a.nodeType === 9 ? a.head : a, n.insertBefore(e, n.firstChild));
  }
  function jf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.title == null && (e.title = n.title);
  }
  function Rf(e, n) {
    e.crossOrigin == null && (e.crossOrigin = n.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = n.referrerPolicy), e.integrity == null && (e.integrity = n.integrity);
  }
  var co = null;
  function Ig(e, n, a) {
    if (co === null) {
      var l = /* @__PURE__ */ new Map(), c = co = /* @__PURE__ */ new Map();
      c.set(a, l);
    } else
      c = co, l = c.get(a), l || (l = /* @__PURE__ */ new Map(), c.set(a, l));
    if (l.has(e)) return l;
    for (l.set(e, null), a = a.getElementsByTagName(e), c = 0; c < a.length; c++) {
      var y = a[c];
      if (!(y[Ui] || y[Ht] || e === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var A = y.getAttribute(n) || "";
        A = e + A;
        var k = l.get(A);
        k ? k.push(y) : l.set(A, [y]);
      }
    }
    return l;
  }
  function Pg(e, n, a) {
    e = e.ownerDocument || e, e.head.insertBefore(
      a,
      n === "title" ? e.querySelector("head > title") : null
    );
  }
  function w_(e, n, a) {
    if (a === 1 || n.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        switch (n.rel) {
          case "stylesheet":
            return e = n.disabled, typeof n.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0;
    }
    return !1;
  }
  function Bg(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var Ts = null;
  function A_() {
  }
  function N_(e, n, a) {
    if (Ts === null) throw Error(s(475));
    var l = Ts;
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var c = xi(a.href), y = e.querySelector(
          As(c)
        );
        if (y) {
          e = y._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = y, Ot(y);
          return;
        }
        y = e.ownerDocument || e, a = zg(a), (c = Mn.get(c)) && jf(a, c), y = y.createElement("link"), Ot(y);
        var A = y;
        A._p = new Promise(function(k, j) {
          A.onload = k, A.onerror = j;
        }), Lt(y, "link", a), n.instance = y;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(n, e), (e = n.state.preload) && (n.state.loading & 3) === 0 && (l.count++, n = fo.bind(l), e.addEventListener("load", n), e.addEventListener("error", n));
    }
  }
  function T_() {
    if (Ts === null) throw Error(s(475));
    var e = Ts;
    return e.stylesheets && e.count === 0 && zf(e, e.stylesheets), 0 < e.count ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && zf(e, e.stylesheets), e.unsuspend) {
          var l = e.unsuspend;
          e.unsuspend = null, l();
        }
      }, 6e4);
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a);
      };
    } : null;
  }
  function fo() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) zf(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var ho = null;
  function zf(e, n) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, ho = /* @__PURE__ */ new Map(), n.forEach(O_, e), ho = null, fo.call(e));
  }
  function O_(e, n) {
    if (!(n.state.loading & 4)) {
      var a = ho.get(e);
      if (a) var l = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), ho.set(e, a);
        for (var c = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), y = 0; y < c.length; y++) {
          var A = c[y];
          (A.nodeName === "LINK" || A.getAttribute("media") !== "not all") && (a.set(A.dataset.precedence, A), l = A);
        }
        l && a.set(null, l);
      }
      c = n.instance, A = c.getAttribute("data-precedence"), y = a.get(A) || l, y === l && a.set(null, c), a.set(A, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), y ? y.parentNode.insertBefore(c, y.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: O,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function k_(e, n, a, l, c, y, A, k) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ku(0), this.hiddenUpdates = ku(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = y, this.onRecoverableError = A, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = k, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ug(e, n, a, l, c, y, A, k, j, q, J, ee) {
    return e = new k_(
      e,
      n,
      a,
      A,
      k,
      j,
      q,
      ee
    ), n = 1, y === !0 && (n |= 24), y = fn(3, null, null, n), e.current = y, y.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, y.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, bc(y), e;
  }
  function Hg(e) {
    return e ? (e = ei, e) : ei;
  }
  function qg(e, n, a, l, c, y) {
    c = Hg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, y = y === void 0 ? null : y, y !== null && (l.callback = y), a = jr(e, l, n), a !== null && (gn(a, e, n), is(a, e, n));
  }
  function Fg(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var a = e.retryLane;
      e.retryLane = a !== 0 && a < n ? a : n;
    }
  }
  function Lf(e, n) {
    Fg(e, n), (e = e.alternate) && Fg(e, n);
  }
  function Zg(e) {
    if (e.tag === 13) {
      var n = Wa(e, 67108864);
      n !== null && gn(n, e, 67108864), Lf(e, 67108864);
    }
  }
  var po = !0;
  function D_(e, n, a, l) {
    var c = B.T;
    B.T = null;
    var y = re.p;
    try {
      re.p = 2, If(e, n, a, l);
    } finally {
      re.p = y, B.T = c;
    }
  }
  function M_(e, n, a, l) {
    var c = B.T;
    B.T = null;
    var y = re.p;
    try {
      re.p = 8, If(e, n, a, l);
    } finally {
      re.p = y, B.T = c;
    }
  }
  function If(e, n, a, l) {
    if (po) {
      var c = Pf(l);
      if (c === null)
        Cf(
          e,
          n,
          l,
          mo,
          a
        ), Vg(e, l);
      else if (R_(
        c,
        e,
        n,
        a,
        l
      ))
        l.stopPropagation();
      else if (Vg(e, l), n & 4 && -1 < j_.indexOf(e)) {
        for (; c !== null; ) {
          var y = Ha(c);
          if (y !== null)
            switch (y.tag) {
              case 3:
                if (y = y.stateNode, y.current.memoizedState.isDehydrated) {
                  var A = En(y.pendingLanes);
                  if (A !== 0) {
                    var k = y;
                    for (k.pendingLanes |= 2, k.entangledLanes |= 2; A; ) {
                      var j = 1 << 31 - jt(A);
                      k.entanglements[1] |= j, A &= ~j;
                    }
                    Kn(y), (Ve & 6) === 0 && (Jl = Fe() + 500, xs(0));
                  }
                }
                break;
              case 13:
                k = Wa(y, 2), k !== null && gn(k, y, 2), Wl(), Lf(y, 2);
            }
          if (y = Pf(l), y === null && Cf(
            e,
            n,
            l,
            mo,
            a
          ), y === c) break;
          c = y;
        }
        c !== null && l.stopPropagation();
      } else
        Cf(
          e,
          n,
          l,
          null,
          a
        );
    }
  }
  function Pf(e) {
    return e = qu(e), Bf(e);
  }
  var mo = null;
  function Bf(e) {
    if (mo = null, e = Ua(e), e !== null) {
      var n = u(e);
      if (n === null) e = null;
      else {
        var a = n.tag;
        if (a === 13) {
          if (e = f(n), e !== null) return e;
          e = null;
        } else if (a === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          e = null;
        } else n !== e && (e = null);
      }
    }
    return mo = e, null;
  }
  function Gg(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (He()) {
          case Xe:
            return 2;
          case z:
            return 8;
          case Y:
          case ne:
            return 32;
          case fe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, Vr = null, Yr = null, Xr = null, ks = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ new Map(), $r = [], j_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Vr = null;
        break;
      case "dragenter":
      case "dragleave":
        Yr = null;
        break;
      case "mouseover":
      case "mouseout":
        Xr = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ds.delete(n.pointerId);
    }
  }
  function Ms(e, n, a, l, c, y) {
    return e === null || e.nativeEvent !== y ? (e = {
      blockedOn: n,
      domEventName: a,
      eventSystemFlags: l,
      nativeEvent: y,
      targetContainers: [c]
    }, n !== null && (n = Ha(n), n !== null && Zg(n)), e) : (e.eventSystemFlags |= l, n = e.targetContainers, c !== null && n.indexOf(c) === -1 && n.push(c), e);
  }
  function R_(e, n, a, l, c) {
    switch (n) {
      case "focusin":
        return Vr = Ms(
          Vr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Yr = Ms(
          Yr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Xr = Ms(
          Xr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "pointerover":
        var y = c.pointerId;
        return ks.set(
          y,
          Ms(
            ks.get(y) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return y = c.pointerId, Ds.set(
          y,
          Ms(
            Ds.get(y) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
    }
    return !1;
  }
  function Yg(e) {
    var n = Ua(e.target);
    if (n !== null) {
      var a = u(n);
      if (a !== null) {
        if (n = a.tag, n === 13) {
          if (n = f(a), n !== null) {
            e.blockedOn = n, N1(e.priority, function() {
              if (a.tag === 13) {
                var l = mn();
                l = Du(l);
                var c = Wa(a, l);
                c !== null && gn(c, a, l), Lf(a, l);
              }
            });
            return;
          }
        } else if (n === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function go(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var a = Pf(e.nativeEvent);
      if (a === null) {
        a = e.nativeEvent;
        var l = new a.constructor(
          a.type,
          a
        );
        Hu = l, a.target.dispatchEvent(l), Hu = null;
      } else
        return n = Ha(a), n !== null && Zg(n), e.blockedOn = a, !1;
      n.shift();
    }
    return !0;
  }
  function Xg(e, n, a) {
    go(e) && a.delete(n);
  }
  function z_() {
    Uf = !1, Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), Xr !== null && go(Xr) && (Xr = null), ks.forEach(Xg), Ds.forEach(Xg);
  }
  function vo(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Uf || (Uf = !0, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      z_
    )));
  }
  var yo = null;
  function $g(e) {
    yo !== e && (yo = e, t.unstable_scheduleCallback(
      t.unstable_NormalPriority,
      function() {
        yo === e && (yo = null);
        for (var n = 0; n < e.length; n += 3) {
          var a = e[n], l = e[n + 1], c = e[n + 2];
          if (typeof l != "function") {
            if (Bf(l || a) === null)
              continue;
            break;
          }
          var y = Ha(a);
          y !== null && (e.splice(n, 3), n -= 3, Pc(
            y,
            {
              pending: !0,
              data: c,
              method: a.method,
              action: l
            },
            l,
            c
          ));
        }
      }
    ));
  }
  function js(e) {
    function n(j) {
      return vo(j, e);
    }
    Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), Xr !== null && vo(Xr, e), ks.forEach(n), Ds.forEach(n);
    for (var a = 0; a < $r.length; a++) {
      var l = $r[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < $r.length && (a = $r[0], a.blockedOn === null); )
      Yg(a), a.blockedOn === null && $r.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], y = a[l + 1], A = c[Kt] || null;
        if (typeof y == "function")
          A || $g(a);
        else if (A) {
          var k = null;
          if (y && y.hasAttribute("formAction")) {
            if (c = y, A = y[Kt] || null)
              k = A.formAction;
            else if (Bf(c) !== null) continue;
          } else k = A.action;
          typeof k == "function" ? a[l + 1] = k : (a.splice(l, 3), l -= 3), $g(a);
        }
      }
  }
  function Hf(e) {
    this._internalRoot = e;
  }
  bo.prototype.render = Hf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = mn();
    qg(a, l, e, n, null, null);
  }, bo.prototype.unmount = Hf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      qg(e.current, 2, null, e, null, null), Wl(), n[Ba] = null;
    }
  };
  function bo(e) {
    this._internalRoot = e;
  }
  bo.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = dh();
      e = { blockedOn: null, target: e, priority: n };
      for (var a = 0; a < $r.length && n !== 0 && n < $r[a].priority; a++) ;
      $r.splice(a, 0, e), a === 0 && Yg(e);
    }
  };
  var Qg = r.version;
  if (Qg !== "19.1.1")
    throw Error(
      s(
        527,
        Qg,
        "19.1.1"
      )
    );
  re.findDOMNode = function(e) {
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(n), e = e !== null ? g(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var L_ = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: B,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var _o = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!_o.isDisabled && _o.supportsFiber)
      try {
        ft = _o.inject(
          L_
        ), at = _o;
      } catch {
      }
  }
  return Is.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = dm, y = hm, A = pm, k = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (y = n.onCaughtError), n.onRecoverableError !== void 0 && (A = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (k = n.unstable_transitionCallbacks)), n = Ug(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      y,
      A,
      k,
      null
    ), e[Ba] = n.current, Ef(e), new Hf(n);
  }, Is.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", y = dm, A = hm, k = pm, j = null, q = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (y = a.onUncaughtError), a.onCaughtError !== void 0 && (A = a.onCaughtError), a.onRecoverableError !== void 0 && (k = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (q = a.formState)), n = Ug(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      y,
      A,
      k,
      j,
      q
    ), n.context = Hg(null), a = n.current, l = mn(), l = Du(l), c = Mr(l), c.callback = null, jr(a, c, l), a = l, n.current.lanes = a, Bi(n, a), Kn(n), e[Ba] = n.current, Ef(e), new bo(n);
  }, Is.version = "19.1.1", Is;
}
var fv;
function d2() {
  if (fv) return Gf.exports;
  fv = 1;
  function t() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t);
      } catch (r) {
        console.error(r);
      }
  }
  return t(), Gf.exports = f2(), Gf.exports;
}
var h2 = d2();
const dv = /* @__PURE__ */ Gd(h2);
var p2 = Object.defineProperty, m2 = (t, r, i) => r in t ? p2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, g2 = (t, r, i) => m2(t, r + "", i);
class n0 extends Error {
  constructor(r, i) {
    super(r), g2(this, "data"), this.data = i;
  }
  toString() {
    return this.message;
  }
}
async function v2(t, r) {
  const i = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(t)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const o = i.getRequestHeaders();
  delete o["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: o,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new n0(u.statusText, u);
  await i.getCharacters();
}
async function y2(t, r) {
  var i;
  const s = SillyTavern.getContext();
  if (!t.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  t == null || delete t.json_data, (i = t?.data) == null || delete i.json_data;
  const o = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: o,
    body: JSON.stringify(t),
    cache: "no-cache"
  });
  if (!u.ok) {
    const f = await u.json().catch(() => ({ message: u.statusText }));
    throw new n0(f.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var b2 = Object.defineProperty, _2 = (t, r, i) => r in t ? b2(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, hv = (t, r, i) => _2(t, typeof r != "symbol" ? r + "" : r, i);
class r0 {
  constructor(r, i) {
    hv(this, "settingsKey"), hv(this, "defaultSettings"), this.settingsKey = r, this.defaultSettings = i;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(r = {}) {
    const { strategy: i = "recursive" } = r, s = this.defaultSettings.version, o = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], f = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: o ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), f;
    const p = {
      ...f,
      oldSettings: structuredClone(u),
      version: {
        changed: !1,
        old: u.version,
        new: u.version
      },
      formatVersion: {
        changed: !1,
        old: u.formatVersion,
        new: u.formatVersion
      }
    };
    if (i === "recursive") {
      let h = function(g, b) {
        let _ = !1;
        for (const m of Object.keys(b))
          g[m] === void 0 ? (g[m] = b[m], _ = !0) : typeof b[m] == "object" && b[m] !== null && (g[m] = g[m] || {}, h(g[m], b[m]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), g = u.formatVersion;
      try {
        let b;
        do {
          b = !1;
          let _ = i.find((m) => m.from === g);
          if (_ && _.to > g)
            h = await _.action(h), g = _.to, h.formatVersion = _.to, b = !0;
          else
            for (const m of i)
              if (m.from === "*" && m.to > g && g !== m.to) {
                h = await m.action(h), g = m.to, h.formatVersion = m.to, b = !0;
                break;
              }
        } while (b);
        if (g !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = g;
          const _ = this.defaultSettings.version;
          _ && (h.version = _);
        }
        if (p.formatVersion.changed) {
          for (const _ of Object.keys(u))
            delete u[_];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (b) {
        throw console.error("Failed to apply version changes:", b), new Error(`Version migration failed: ${b instanceof Error ? b.message : b}`, {
          cause: b
        });
      }
    }
    return p.newSettings = u, p;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(r, i) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][r] = i, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function wr(t) {
  return Array.isArray ? Array.isArray(t) : s0(t) === "[object Array]";
}
function S2(t) {
  if (typeof t == "string")
    return t;
  let r = t + "";
  return r == "0" && 1 / t == -1 / 0 ? "-0" : r;
}
function x2(t) {
  return t == null ? "" : S2(t);
}
function tr(t) {
  return typeof t == "string";
}
function a0(t) {
  return typeof t == "number";
}
function E2(t) {
  return t === !0 || t === !1 || C2(t) && s0(t) == "[object Boolean]";
}
function i0(t) {
  return typeof t == "object";
}
function C2(t) {
  return i0(t) && t !== null;
}
function _n(t) {
  return t != null;
}
function $f(t) {
  return !t.trim().length;
}
function s0(t) {
  return t == null ? t === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(t);
}
const w2 = "Incorrect 'index' type", A2 = (t) => `Invalid value for key ${t}`, N2 = (t) => `Pattern length exceeds max of ${t}.`, T2 = (t) => `Missing ${t} property in key`, O2 = (t) => `Property 'weight' in key '${t}' must be a positive integer`, pv = Object.prototype.hasOwnProperty;
class k2 {
  constructor(r) {
    this._keys = [], this._keyMap = {};
    let i = 0;
    r.forEach((s) => {
      let o = l0(s);
      this._keys.push(o), this._keyMap[o.id] = o, i += o.weight;
    }), this._keys.forEach((s) => {
      s.weight /= i;
    });
  }
  get(r) {
    return this._keyMap[r];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function l0(t) {
  let r = null, i = null, s = null, o = 1, u = null;
  if (tr(t) || wr(t))
    s = t, r = mv(t), i = _d(t);
  else {
    if (!pv.call(t, "name"))
      throw new Error(T2("name"));
    const f = t.name;
    if (s = f, pv.call(t, "weight") && (o = t.weight, o <= 0))
      throw new Error(O2(f));
    r = mv(f), i = _d(f), u = t.getFn;
  }
  return { path: r, id: i, weight: o, src: s, getFn: u };
}
function mv(t) {
  return wr(t) ? t : t.split(".");
}
function _d(t) {
  return wr(t) ? t.join(".") : t;
}
function D2(t, r) {
  let i = [], s = !1;
  const o = (u, f, p) => {
    if (_n(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const g = u[h];
        if (!_n(g))
          return;
        if (p === f.length - 1 && (tr(g) || a0(g) || E2(g)))
          i.push(x2(g));
        else if (wr(g)) {
          s = !0;
          for (let b = 0, _ = g.length; b < _; b += 1)
            o(g[b], f, p + 1);
        } else f.length && o(g, f, p + 1);
      }
  };
  return o(t, tr(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const M2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, j2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (t, r) => t.score === r.score ? t.idx < r.idx ? -1 : 1 : t.score < r.score ? -1 : 1
}, R2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, z2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: D2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ce = {
  ...j2,
  ...M2,
  ...R2,
  ...z2
};
const L2 = /[^ ]+/g;
function I2(t = 1, r = 3) {
  const i = /* @__PURE__ */ new Map(), s = Math.pow(10, r);
  return {
    get(o) {
      const u = o.match(L2).length;
      if (i.has(u))
        return i.get(u);
      const f = 1 / Math.pow(u, 0.5 * t), p = parseFloat(Math.round(f * s) / s);
      return i.set(u, p), p;
    },
    clear() {
      i.clear();
    }
  };
}
class Yd {
  constructor({
    getFn: r = Ce.getFn,
    fieldNormWeight: i = Ce.fieldNormWeight
  } = {}) {
    this.norm = I2(i, 3), this.getFn = r, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(r = []) {
    this.docs = r;
  }
  setIndexRecords(r = []) {
    this.records = r;
  }
  setKeys(r = []) {
    this.keys = r, this._keysMap = {}, r.forEach((i, s) => {
      this._keysMap[i.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, tr(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    tr(r) ? this._addString(r, i) : this._addObject(r, i);
  }
  // Removes the doc at the specified index of the index
  removeAt(r) {
    this.records.splice(r, 1);
    for (let i = r, s = this.size(); i < s; i += 1)
      this.records[i].i -= 1;
  }
  getValueForItemAtKeyId(r, i) {
    return r[this._keysMap[i]];
  }
  size() {
    return this.records.length;
  }
  _addString(r, i) {
    if (!_n(r) || $f(r))
      return;
    let s = {
      v: r,
      i,
      n: this.norm.get(r)
    };
    this.records.push(s);
  }
  _addObject(r, i) {
    let s = { i, $: {} };
    this.keys.forEach((o, u) => {
      let f = o.getFn ? o.getFn(r) : this.getFn(r, o.path);
      if (_n(f)) {
        if (wr(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: g, value: b } = h.pop();
            if (_n(b))
              if (tr(b) && !$f(b)) {
                let _ = {
                  v: b,
                  i: g,
                  n: this.norm.get(b)
                };
                p.push(_);
              } else wr(b) && b.forEach((_, m) => {
                h.push({
                  nestedArrIndex: m,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (tr(f) && !$f(f)) {
          let p = {
            v: f,
            n: this.norm.get(f)
          };
          s.$[u] = p;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function o0(t, r, { getFn: i = Ce.getFn, fieldNormWeight: s = Ce.fieldNormWeight } = {}) {
  const o = new Yd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(l0)), o.setSources(r), o.create(), o;
}
function P2(t, { getFn: r = Ce.getFn, fieldNormWeight: i = Ce.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Yd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ce.distance,
  ignoreLocation: u = Ce.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return o ? f + p / o : p ? 1 : f;
}
function B2(t = [], r = Ce.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const ka = 32;
function U2(t, r, i, {
  location: s = Ce.location,
  distance: o = Ce.distance,
  threshold: u = Ce.threshold,
  findAllMatches: f = Ce.findAllMatches,
  minMatchCharLength: p = Ce.minMatchCharLength,
  includeMatches: h = Ce.includeMatches,
  ignoreLocation: g = Ce.ignoreLocation
} = {}) {
  if (r.length > ka)
    throw new Error(N2(ka));
  const b = r.length, _ = t.length, m = Math.max(0, Math.min(s, _));
  let v = u, d = m;
  const x = p > 1 || h, C = x ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, d)) > -1; ) {
    let M = So(r, {
      currentLocation: T,
      expectedLocation: m,
      distance: o,
      ignoreLocation: g
    });
    if (v = Math.min(M, v), d = T + b, x) {
      let U = 0;
      for (; U < b; )
        C[T + U] = 1, U += 1;
    }
  }
  d = -1;
  let w = [], O = 1, E = b + _;
  const N = 1 << b - 1;
  for (let M = 0; M < b; M += 1) {
    let U = 0, F = E;
    for (; U < F; )
      So(r, {
        errors: M,
        currentLocation: m + F,
        expectedLocation: m,
        distance: o,
        ignoreLocation: g
      }) <= v ? U = F : E = F, F = Math.floor((E - U) / 2 + U);
    E = F;
    let I = Math.max(1, m - F + 1), X = f ? _ : Math.min(m + F, _) + b, V = Array(X + 2);
    V[X + 1] = (1 << M) - 1;
    for (let ie = X; ie >= I; ie -= 1) {
      let de = ie - 1, B = i[t.charAt(de)];
      if (x && (C[de] = +!!B), V[ie] = (V[ie + 1] << 1 | 1) & B, M && (V[ie] |= (w[ie + 1] | w[ie]) << 1 | 1 | w[ie + 1]), V[ie] & N && (O = So(r, {
        errors: M,
        currentLocation: de,
        expectedLocation: m,
        distance: o,
        ignoreLocation: g
      }), O <= v)) {
        if (v = O, d = de, d <= m)
          break;
        I = Math.max(1, 2 * m - d);
      }
    }
    if (So(r, {
      errors: M + 1,
      currentLocation: m,
      expectedLocation: m,
      distance: o,
      ignoreLocation: g
    }) > v)
      break;
    w = V;
  }
  const D = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, O)
  };
  if (x) {
    const M = B2(C, p);
    M.length ? h && (D.indices = M) : D.isMatch = !1;
  }
  return D;
}
function H2(t) {
  let r = {};
  for (let i = 0, s = t.length; i < s; i += 1) {
    const o = t.charAt(i);
    r[o] = (r[o] || 0) | 1 << s - i - 1;
  }
  return r;
}
const fu = String.prototype.normalize ? ((t) => t.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((t) => t);
class u0 {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: u = Ce.includeMatches,
    findAllMatches: f = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: h = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: b = Ce.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: b
    }, r = h ? r : r.toLowerCase(), r = g ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (v, d) => {
      this.chunks.push({
        pattern: v,
        alphabet: H2(v),
        startIndex: d
      });
    }, m = this.pattern.length;
    if (m > ka) {
      let v = 0;
      const d = m % ka, x = m - d;
      for (; v < x; )
        _(this.pattern.substr(v, ka), v), v += ka;
      if (d) {
        const C = m - ka;
        _(this.pattern.substr(C), C);
      }
    } else
      _(this.pattern, 0);
  }
  searchIn(r) {
    const { isCaseSensitive: i, ignoreDiacritics: s, includeMatches: o } = this.options;
    if (r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern === r) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return o && (x.indices = [[0, r.length - 1]]), x;
    }
    const {
      location: u,
      distance: f,
      threshold: p,
      findAllMatches: h,
      minMatchCharLength: g,
      ignoreLocation: b
    } = this.options;
    let _ = [], m = 0, v = !1;
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: T }) => {
      const { isMatch: w, score: O, indices: E } = U2(r, x, C, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: g,
        includeMatches: o,
        ignoreLocation: b
      });
      w && (v = !0), m += O, w && E && (_ = [..._, ...E]);
    });
    let d = {
      isMatch: v,
      score: v ? m / this.chunks.length : 1
    };
    return v && o && (d.indices = _), d;
  }
}
class ra {
  constructor(r) {
    this.pattern = r;
  }
  static isMultiMatch(r) {
    return gv(r, this.multiRegex);
  }
  static isSingleMatch(r) {
    return gv(r, this.singleRegex);
  }
  search() {
  }
}
function gv(t, r) {
  const i = t.match(r);
  return i ? i[1] : null;
}
class q2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(r) {
    const i = r === this.pattern;
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class F2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(r) {
    const s = r.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class Z2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(r) {
    const i = r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class G2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(r) {
    const i = !r.startsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class V2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(r) {
    const i = r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [r.length - this.pattern.length, r.length - 1]
    };
  }
}
class Y2 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(r) {
    const i = !r.endsWith(this.pattern);
    return {
      isMatch: i,
      score: i ? 0 : 1,
      indices: [0, r.length - 1]
    };
  }
}
class c0 extends ra {
  constructor(r, {
    location: i = Ce.location,
    threshold: s = Ce.threshold,
    distance: o = Ce.distance,
    includeMatches: u = Ce.includeMatches,
    findAllMatches: f = Ce.findAllMatches,
    minMatchCharLength: p = Ce.minMatchCharLength,
    isCaseSensitive: h = Ce.isCaseSensitive,
    ignoreDiacritics: g = Ce.ignoreDiacritics,
    ignoreLocation: b = Ce.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new u0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: g,
      ignoreLocation: b
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(r) {
    return this._bitapSearch.searchIn(r);
  }
}
class f0 extends ra {
  constructor(r) {
    super(r);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(r) {
    let i = 0, s;
    const o = [], u = this.pattern.length;
    for (; (s = r.indexOf(this.pattern, i)) > -1; )
      i = s + u, o.push([s, i - 1]);
    const f = !!o.length;
    return {
      isMatch: f,
      score: f ? 0 : 1,
      indices: o
    };
  }
}
const Sd = [
  q2,
  f0,
  Z2,
  G2,
  Y2,
  V2,
  F2,
  c0
], vv = Sd.length, X2 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, $2 = "|";
function Q2(t, r = {}) {
  return t.split($2).map((i) => {
    let s = i.trim().split(X2).filter((u) => u && !!u.trim()), o = [];
    for (let u = 0, f = s.length; u < f; u += 1) {
      const p = s[u];
      let h = !1, g = -1;
      for (; !h && ++g < vv; ) {
        const b = Sd[g];
        let _ = b.isMultiMatch(p);
        _ && (o.push(new b(_, r)), h = !0);
      }
      if (!h)
        for (g = -1; ++g < vv; ) {
          const b = Sd[g];
          let _ = b.isSingleMatch(p);
          if (_) {
            o.push(new b(_, r));
            break;
          }
        }
    }
    return o;
  });
}
const J2 = /* @__PURE__ */ new Set([c0.type, f0.type]);
class K2 {
  constructor(r, {
    isCaseSensitive: i = Ce.isCaseSensitive,
    ignoreDiacritics: s = Ce.ignoreDiacritics,
    includeMatches: o = Ce.includeMatches,
    minMatchCharLength: u = Ce.minMatchCharLength,
    ignoreLocation: f = Ce.ignoreLocation,
    findAllMatches: p = Ce.findAllMatches,
    location: h = Ce.location,
    threshold: g = Ce.threshold,
    distance: b = Ce.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: g,
      distance: b
    }, r = i ? r : r.toLowerCase(), r = s ? fu(r) : r, this.pattern = r, this.query = Q2(this.pattern, this.options);
  }
  static condition(r, i) {
    return i.useExtendedSearch;
  }
  searchIn(r) {
    const i = this.query;
    if (!i)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: u } = this.options;
    r = o ? r : r.toLowerCase(), r = u ? fu(r) : r;
    let f = 0, p = [], h = 0;
    for (let g = 0, b = i.length; g < b; g += 1) {
      const _ = i[g];
      p.length = 0, f = 0;
      for (let m = 0, v = _.length; m < v; m += 1) {
        const d = _[m], { isMatch: x, indices: C, score: T } = d.search(r);
        if (x) {
          if (f += 1, h += T, s) {
            const w = d.constructor.type;
            J2.has(w) ? p = [...p, ...C] : p.push(C);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let m = {
          isMatch: !0,
          score: h / f
        };
        return s && (m.indices = p), m;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const xd = [];
function W2(...t) {
  xd.push(...t);
}
function Ed(t, r) {
  for (let i = 0, s = xd.length; i < s; i += 1) {
    let o = xd[i];
    if (o.condition(t, r))
      return new o(t, r);
  }
  return new u0(t, r);
}
const du = {
  AND: "$and",
  OR: "$or"
}, Cd = {
  PATH: "$path",
  PATTERN: "$val"
}, wd = (t) => !!(t[du.AND] || t[du.OR]), eS = (t) => !!t[Cd.PATH], tS = (t) => !wr(t) && i0(t) && !wd(t), yv = (t) => ({
  [du.AND]: Object.keys(t).map((r) => ({
    [r]: t[r]
  }))
});
function d0(t, r, { auto: i = !0 } = {}) {
  const s = (o) => {
    let u = Object.keys(o);
    const f = eS(o);
    if (!f && u.length > 1 && !wd(o))
      return s(yv(o));
    if (tS(o)) {
      const h = f ? o[Cd.PATH] : u[0], g = f ? o[Cd.PATTERN] : o[h];
      if (!tr(g))
        throw new Error(A2(h));
      const b = {
        keyId: _d(h),
        pattern: g
      };
      return i && (b.searcher = Ed(g, r)), b;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const g = o[h];
      wr(g) && g.forEach((b) => {
        p.children.push(s(b));
      });
    }), p;
  };
  return wd(t) || (t = yv(t)), s(t);
}
function nS(t, { ignoreFieldNorm: r = Ce.ignoreFieldNorm }) {
  t.forEach((i) => {
    let s = 1;
    i.matches.forEach(({ key: o, norm: u, score: f }) => {
      const p = o ? o.weight : null;
      s *= Math.pow(
        f === 0 && p ? Number.EPSILON : f,
        (p || 1) * (r ? 1 : u)
      );
    }), i.score = s;
  });
}
function rS(t, r) {
  const i = t.matches;
  r.matches = [], _n(i) && i.forEach((s) => {
    if (!_n(s.indices) || !s.indices.length)
      return;
    const { indices: o, value: u } = s;
    let f = {
      indices: o,
      value: u
    };
    s.key && (f.key = s.key.src), s.idx > -1 && (f.refIndex = s.idx), r.matches.push(f);
  });
}
function aS(t, r) {
  r.score = t.score;
}
function iS(t, r, {
  includeMatches: i = Ce.includeMatches,
  includeScore: s = Ce.includeScore
} = {}) {
  const o = [];
  return i && o.push(rS), s && o.push(aS), t.map((u) => {
    const { idx: f } = u, p = {
      item: r[f],
      refIndex: f
    };
    return o.length && o.forEach((h) => {
      h(u, p);
    }), p;
  });
}
class Pi {
  constructor(r, i = {}, s) {
    this.options = { ...Ce, ...i }, this.options.useExtendedSearch, this._keyStore = new k2(this.options.keys), this.setCollection(r, s);
  }
  setCollection(r, i) {
    if (this._docs = r, i && !(i instanceof Yd))
      throw new Error(w2);
    this._myIndex = i || o0(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(r) {
    _n(r) && (this._docs.push(r), this._myIndex.add(r));
  }
  remove(r = () => !1) {
    const i = [];
    for (let s = 0, o = this._docs.length; s < o; s += 1) {
      const u = this._docs[s];
      r(u, s) && (this.removeAt(s), s -= 1, o -= 1, i.push(u));
    }
    return i;
  }
  removeAt(r) {
    this._docs.splice(r, 1), this._myIndex.removeAt(r);
  }
  getIndex() {
    return this._myIndex;
  }
  search(r, { limit: i = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: o,
      shouldSort: u,
      sortFn: f,
      ignoreFieldNorm: p
    } = this.options;
    let h = tr(r) ? tr(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return nS(h, { ignoreFieldNorm: p }), u && h.sort(f), a0(i) && i > -1 && (h = h.slice(0, i)), iS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Ed(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!_n(u))
        return;
      const { isMatch: h, score: g, indices: b } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: g, value: u, norm: p, indices: b }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = d0(r, this.options), s = (p, h, g) => {
      if (!p.children) {
        const { keyId: _, searcher: m } = p, v = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: m
        });
        return v && v.length ? [
          {
            idx: g,
            item: h,
            matches: v
          }
        ] : [];
      }
      const b = [];
      for (let _ = 0, m = p.children.length; _ < m; _ += 1) {
        const v = p.children[_], d = s(v, h, g);
        if (d.length)
          b.push(...d);
        else if (p.operator === du.AND)
          return [];
      }
      return b;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (_n(p)) {
        let g = s(i, p, h);
        g.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), g.forEach(({ matches: b }) => {
          u[h].matches.push(...b);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Ed(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!_n(f))
        return;
      let h = [];
      s.forEach((g, b) => {
        h.push(
          ...this._findMatches({
            key: g,
            value: f[b],
            searcher: i
          })
        );
      }), h.length && u.push({
        idx: p,
        item: f,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: r, value: i, searcher: s }) {
    if (!_n(i))
      return [];
    let o = [];
    if (wr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!_n(u))
          return;
        const { isMatch: h, score: g, indices: b } = s.searchIn(u);
        h && o.push({
          score: g,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: b
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: g } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: g });
    }
    return o;
  }
}
Pi.version = "7.1.0";
Pi.createIndex = o0;
Pi.parseIndex = P2;
Pi.config = Ce;
Pi.parseQuery = d0;
W2(K2);
var sS = Object.defineProperty, lS = (t, r, i) => r in t ? sS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, oS = (t, r, i) => lS(t, r + "", i);
let uS = class {
  constructor() {
    oS(this, "requestMap"), this.requestMap = /* @__PURE__ */ new Map();
  }
  async abortRequest(r) {
    var i;
    const s = this.requestMap.get(r);
    if (s) {
      if (s.abortController)
        try {
          s.abortController.abort();
        } catch {
        }
      (i = s.options) != null && i.onFinish && await s.options.onFinish(r), this.requestMap.delete(r);
    }
  }
  /**
   * @returns return value is not important because request would be finished anyway. So use "options".
   */
  async generateRequest(r, i) {
    var s;
    const o = SillyTavern.getContext(), u = o.uuidv4(), f = ((s = r?.custom) == null ? void 0 : s.stream) ?? !1;
    if (this.requestMap.set(u, {
      abortController: i?.abortController,
      isStream: f,
      options: i
    }), f)
      try {
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        i != null && i.onStart && await i.onStart(u);
        let h;
        for await (const g of p())
          h = g, i != null && i.onEntry && await i.onEntry(u, g);
        i != null && i.onFinish && await i.onFinish(u, h);
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    else
      try {
        i != null && i.onStart && await i.onStart(u);
        const p = await o.ConnectionManagerRequestService.sendRequest(
          r.profileId,
          r.prompt,
          r.maxTokens,
          r.custom,
          r.overridePayload
        );
        this.requestMap.get(u) && (i != null && i.onEntry && await i.onEntry(u, p), i != null && i.onFinish && await i.onFinish(u, p));
      } catch (p) {
        i != null && i.onFinish && await i.onFinish(u, void 0, p);
      } finally {
        this.requestMap.delete(u);
      }
    return u;
  }
  getActiveRequest(r) {
    var i;
    return (i = this.requestMap.get(r)) == null ? void 0 : i.abortController;
  }
  getAllActiveRequests() {
    const r = /* @__PURE__ */ new Map();
    for (const [i, s] of this.requestMap)
      r.set(i, s.abortController);
    return r;
  }
};
async function cS(t, ...r) {
  await SillyTavern.getContext().SlashCommandParser.commands[t].callback(...r);
}
async function Ne(t, r, { escapeHtml: i = !0 } = {}) {
  await cS("echo", { severity: t, escapeHtml: (!!i).toString() }, r);
}
function Qf(t) {
  return H_(t);
}
function bv(t, r) {
  return B_(t, r);
}
function xo(t, r, i) {
  return U_(t, r, i);
}
function fS(t, r, i) {
  return V_(t, r, i);
}
function dS(t, r) {
  return Y_(t, r);
}
function hS(t, {
  customStoryString: r,
  customInstructSettings: i
} = {}) {
  return P_(t, { customStoryString: r, customInstructSettings: i });
}
function wa(t) {
  return W_(t);
}
function pS() {
  return {
    prompt: Rs[zs.prompt],
    interval: Rs[zs.interval],
    position: Rs[zs.position],
    depth: Rs[zs.depth],
    role: Rs[zs.role]
  };
}
function mS(t, r) {
  return t2(t, r);
}
function gS({
  name2: t,
  charDescription: r,
  charPersonality: i,
  Scenario: s,
  worldInfoBefore: o,
  worldInfoAfter: u,
  bias: f,
  type: p,
  quietPrompt: h,
  quietImage: g,
  extensionPrompts: b,
  cyclePrompt: _,
  systemPromptOverride: m,
  jailbreakPromptOverride: v,
  personaDescription: d,
  messages: x,
  messageExamples: C
}, T) {
  return e2(
    {
      name2: t,
      charDescription: r,
      charPersonality: i,
      Scenario: s,
      worldInfoBefore: o,
      worldInfoAfter: u,
      bias: f,
      type: p,
      quietPrompt: h,
      quietImage: g,
      cyclePrompt: _,
      systemPromptOverride: m,
      jailbreakPromptOverride: v,
      personaDescription: d,
      extensionPrompts: b,
      messages: x,
      messageExamples: C
    },
    T
  );
}
function vS(t) {
  return $_(t);
}
function yS(t) {
  return Q_(t);
}
function bS(t, r, {
  characterOverride: i,
  isMarkdown: s,
  isPrompt: o,
  isEdit: u,
  depth: f
}) {
  return n2(t, r, { characterOverride: i, isMarkdown: s, isPrompt: o, isEdit: u, depth: f });
}
async function _S(t, r) {
  return await X_(t, r);
}
function _v(t, {
  wiFormat: r
} = {}) {
  return J_(t, { wiFormat: r });
}
function Ps(t) {
  return K_(t);
}
class SS {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(r) {
    const i = Math.ceil(r.length / 4);
    return new Array(i).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(r) {
    return r.join("");
  }
}
var xS = Object.defineProperty, ES = (t, r, i) => r in t ? xS(t, r, { enumerable: !0, configurable: !0, writable: !0, value: i }) : t[r] = i, Eo = (t, r, i) => ES(t, typeof r != "symbol" ? r + "" : r, i);
class CS {
  constructor(r) {
    Eo(this, "messages", []), Eo(this, "tokenizer"), Eo(this, "maxContext"), Eo(this, "currentTokenCount", 0), this.tokenizer = new SS(), this.maxContext = r;
  }
  getTokenCount(r) {
    var i, s;
    return r.content ? ((s = (i = r.source) == null ? void 0 : i.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(r.content).length : 0;
  }
  canFit(r) {
    return this.currentTokenCount + this.getTokenCount(r) <= this.maxContext;
  }
  add(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.push(r), this.currentTokenCount += i, !0);
  }
  addFront(r) {
    if (!r.content) return !0;
    const i = this.getTokenCount(r);
    return this.currentTokenCount + i > this.maxContext ? !1 : (this.messages.unshift(r), this.currentTokenCount += i, !0);
  }
  addMany(r) {
    const i = r.filter((p) => p.content), s = i.map((p) => this.getTokenCount(p)), o = s.reduce((p, h) => p + h, 0);
    if (this.currentTokenCount + o <= this.maxContext)
      return this.messages.push(...i), this.currentTokenCount += o, !0;
    let u = 0;
    const f = [];
    for (let p = i.length - 1; p >= 0; p--) {
      const h = i[p], g = s[p];
      if (this.currentTokenCount + u + g <= this.maxContext)
        f.unshift(h), u += g;
      else
        break;
    }
    return f.length > 0 && (this.messages.push(...f), this.currentTokenCount += u), f.length === i.length;
  }
  insert(r, i) {
    if (!i.content) return !0;
    const s = this.getTokenCount(i);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(r, 0, i), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function h0(t, {
  targetCharacterId: r,
  presetName: i,
  instructName: s,
  contextName: o,
  syspromptName: u,
  maxContext: f,
  includeNames: p,
  ignoreCharacterFields: h,
  ignoreAuthorNote: g,
  ignoreWorldInfo: b,
  messageIndexesBetween: _
} = {}) {
  var m, v, d, x, C, T, w, O, E, N, D, M, U, F;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const I = SillyTavern.getContext();
  let { description: X, personality: V, persona: ue, scenario: ie, mesExamples: de, system: B, jailbreak: re } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : I.getCharacterCardFields({
    chid: r
  });
  const ce = t === "textgenerationwebui" ? (m = I.getPresetManager("instruct")) == null ? void 0 : m.getCompletionPresetByName(s) : void 0, we = !!(ce != null && ce.enabled);
  let R = bv(de, we);
  function W() {
    var z, Y;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let ne;
    if (t === "textgenerationwebui") {
      const fe = (z = I.getPresetManager("textgenerationwebui")) == null ? void 0 : z.getCompletionPresetByName(i);
      ne = fe?.max_length;
    } else {
      const fe = (Y = I.getPresetManager("openai")) == null ? void 0 : Y.getCompletionPresetByName(i);
      ne = fe?.openai_max_context;
    }
    return typeof ne == "number" ? ne : Qf();
  }
  let ae = [];
  const le = W();
  if (le <= 0)
    return { result: [], warnings: ae };
  const oe = new CS(le), Me = I.ToolManager.isToolCallingSupported(), Q = _?.start ?? 0, me = _ != null && _.end ? _.end + 1 : void 0;
  let ve = Q === -1 && me === 0 ? [] : I.chat.slice(Q, me).filter((z) => {
    var Y;
    return !z.is_system || Me && Array.isArray((Y = z.extra) == null ? void 0 : Y.tool_invocations);
  });
  ve = await Promise.all(
    ve.map(async (z, Y) => {
      var ne, fe;
      let Oe = z.mes, Ze = z.is_user ? Wg.USER_INPUT : Wg.AI_OUTPUT, ft = { isPrompt: !0, depth: ve.length - Y - 1 }, at = bS(Oe, Ze, ft);
      return at = await _S(z, at), (ne = z?.extra) != null && ne.append_title && (fe = z?.extra) != null && fe.title && (at = `${at}

${z.extra.title}`), {
        ...z,
        mes: at,
        index: Y
      };
    })
  );
  const Ue = ve.map((z) => Z_ ? `${z.name}: ${z.mes}` : z.mes).reverse(), { worldInfoString: rt, worldInfoBefore: Te, worldInfoAfter: mt, worldInfoExamples: Pn, worldInfoDepth: Tt, anBefore: Gt, anAfter: Be } = b ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await I.getWorldInfoPrompt(Ue, le, !1);
  for (const z of Pn) {
    const Y = z.content;
    if (Y.length === 0)
      continue;
    const ne = xo(Y, xr, Jr), fe = bv(ne, we);
    z.position === G_.before ? R.unshift(...fe) : R.push(...fe);
  }
  function Fe() {
    const z = [];
    for (let Y = ve.length - 1; Y >= 0; Y--) {
      const ne = ve[Y], fe = ne.name === "System" && !ne.is_user ? "system" : ne.is_user ? "user" : "assistant";
      z.unshift({
        role: fe,
        content: p && fe != "system" ? `${ne.name}: ${ne.mes}` : ne.mes,
        source: ne
      });
    }
    oe.addMany(z);
  }
  if (t === "textgenerationwebui") {
    const z = [...R];
    R && (R = fS(R, xr, Jr));
    const Y = (v = I.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    Y && (B = I.powerUserSettings.prefer_character_prompt && B ? B : xo(Y.content, xr, Jr), B = we ? dS(
      I.substituteParams(B, xr, Jr, Y.content),
      ce
    ) : B);
    const ne = {
      description: X,
      personality: V,
      persona: I.powerUserSettings.persona_description_position == Jg.IN_PROMPT ? ue : "",
      scenario: ie,
      system: B,
      char: Jr,
      user: xr,
      wiBefore: Te,
      wiAfter: mt,
      loreBefore: Te,
      loreAfter: mt,
      mesExamples: R.join(""),
      mesExamplesRaw: z.join("")
    }, fe = (d = I.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let Oe = hS(ne, {
      customInstructSettings: ce,
      customStoryString: fe?.story_string
    });
    Oe && oe.add({ role: "system", content: Oe, ignoreInstruct: !0 }), Fe();
  } else {
    let z = function(Vt) {
      const Jt = We.find((Pa) => Pa.identifier === Vt);
      if (Jt)
        return Jt;
      const ul = Oe.prompts.find((Pa) => Pa.identifier === Vt);
      if (ul)
        return ul;
    }, Y = vS(ve), ne = yS(R);
    async function fe() {
      let [Vt, Jt] = await gS(
        {
          name2: Jr,
          charDescription: X,
          charPersonality: V,
          Scenario: ie,
          worldInfoBefore: Te,
          worldInfoAfter: mt,
          extensionPrompts: I.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: B,
          jailbreakPromptOverride: re,
          personaDescription: ue,
          messages: Y,
          messageExamples: ne
        },
        !1
      );
      oe.addMany(Vt);
    }
    if (!i)
      return ae.push("No preset name provided. Using default preset."), await fe(), { result: oe.getMessages(), warnings: ae };
    const Oe = (x = I.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!Oe)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ae.push(`Preset not found: ${i}. Using current preset.`), fe(), { result: oe.getMessages(), warnings: ae };
    let Ze = (C = Oe.prompt_order) == null ? void 0 : C.find((Vt) => Vt.character_id === xn);
    if (!Ze && Oe.prompt_order && Oe.prompt_order.length > 0 && (Ze = Oe.prompt_order[0]), !Ze)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ae.push(`No prompt order found for preset: ${i}. Using current preset.`), fe(), { result: oe.getMessages(), warnings: ae };
    const ft = ie && Oe.scenario_format ? I.substituteParams(Oe.scenario_format) : "", at = V && Oe.personality_format ? I.substituteParams(Oe.personality_format) : "", un = I.substituteParams(Oe.group_nudge_prompt), jt = Oe.impersonation_prompt ? I.substituteParams(Oe.impersonation_prompt) : "", We = [];
    b || We.push(
      {
        role: "system",
        content: _v(Te, { wiFormat: Oe.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: _v(mt, { wiFormat: Oe.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || We.push(
      { role: "system", content: X, identifier: "charDescription" },
      { role: "system", content: at, identifier: "charPersonality" },
      { role: "system", content: ft, identifier: "scenario" }
    ), We.push(
      { role: "system", content: jt, identifier: "impersonate" },
      { role: "system", content: un, identifier: "groupNudge" }
    );
    const Ut = I.extensionPrompts["1_memory"];
    Ut && Ut.value && We.push({
      role: wa(Ut.role),
      content: Ut.value,
      identifier: "summary",
      position: Ps(Ut.position)
    });
    const sa = I.extensionPrompts["2_floating_prompt"];
    !g && sa && sa.value && We.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Ps(sa.position)
    });
    const ar = I.extensionPrompts["3_vectors"];
    ar && ar.value && We.push({
      role: "system",
      content: ar.value,
      identifier: "vectorsMemory",
      position: Ps(ar.position)
    });
    const Yn = I.extensionPrompts["4_vectors_data_bank"];
    Yn && Yn.value && We.push({
      role: wa(Yn.role),
      content: Yn.value,
      identifier: "vectorsDataBank",
      position: Ps(Yn.position)
    });
    const En = I.extensionPrompts.chromadb;
    En && En.value && We.push({
      role: "system",
      content: En.value,
      identifier: "smartContext",
      position: Ps(En.position)
    }), !h && I.powerUserSettings.persona_description && I.powerUserSettings.persona_description_position === Jg.IN_PROMPT && We.push({
      role: "system",
      content: I.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ze.order.forEach((Vt) => {
      if (!Vt.enabled)
        return;
      const Jt = z(Vt.identifier);
      if (Jt && Jt.content) {
        oe.add({
          role: Jt.role ?? "system",
          content: I.substituteParams(Jt.content)
        });
        return;
      }
      Vt.identifier === "chatHistory" && Fe();
    });
  }
  const He = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const z in I.extensionPrompts)
    if (Object.hasOwn(I.extensionPrompts, z)) {
      const Y = I.extensionPrompts[z];
      if (He.includes(z) || !I.extensionPrompts[z].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(Y.position) || typeof Y.filter == "function" && !await Y.filter()) continue;
      const ne = {
        role: wa(Y.role) ?? "system",
        content: Y.value
      };
      if (Y.position === Ca.BEFORE_PROMPT)
        oe.insert(Y.depth, ne);
      else if (Y.position === Ca.IN_PROMPT) {
        const fe = oe.getMessages();
        oe.insert(fe.length - Y.depth, ne);
      }
    }
  for (const z of Tt) {
    const Y = oe.getMessages();
    oe.insert(Y.length - z.depth, {
      role: wa(z.role),
      content: z.entries.join(`
`)
    });
  }
  if (!h) {
    const z = mS(Er, Number(xn));
    if (Er && Array.isArray(z) && z.length > 0)
      z.filter((Y) => Y.text).forEach((Y, ne) => {
        const fe = oe.getMessages();
        oe.insert(fe.length - Y.depth, { role: Y.role, content: Y.text });
      });
    else {
      const Y = xo(
        (N = (E = (O = (w = (T = I.characters[xn]) == null ? void 0 : T.data) == null ? void 0 : w.extensions) == null ? void 0 : O.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : N.trim(),
        xr,
        Jr
      ) || "";
      if (Y) {
        const ne = F_, fe = ((F = (U = (M = (D = I.characters[xn]) == null ? void 0 : D.data) == null ? void 0 : M.extensions) == null ? void 0 : U.depth_prompt) == null ? void 0 : F.role) ?? q_, Oe = oe.getMessages();
        oe.insert(Oe.length - ne, {
          role: wa(fe),
          content: Y
        });
      }
    }
  }
  let Xe = -1;
  if (!g) {
    const z = pS();
    if (z.prompt) {
      z.prompt = xo(z.prompt, xr, Jr);
      const Y = { role: wa(z.role), content: z.prompt };
      switch (z.position) {
        case Ca.IN_PROMPT:
          oe.insert(1, Y), Xe = 1;
          break;
        case Ca.IN_CHAT:
          Xe = oe.getMessages().length - z.depth, oe.insert(Xe, Y);
          break;
        case Ca.BEFORE_PROMPT:
          oe.addFront(Y), Xe = 0;
          break;
      }
    }
  }
  return Xe >= 0 && (Gt.length > 0 && (oe.insert(Xe, { role: "system", content: Gt.join(`
`) }), Xe++), Be.length > 0 && oe.insert(Xe + 1, { role: "system", content: Be.join(`
`) })), { result: oe.getMessages(), warnings: ae };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Sv(t, r) {
  var i = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(t);
    r && (s = s.filter(function(o) {
      return Object.getOwnPropertyDescriptor(t, o).enumerable;
    })), i.push.apply(i, s);
  }
  return i;
}
function rr(t) {
  for (var r = 1; r < arguments.length; r++) {
    var i = arguments[r] != null ? arguments[r] : {};
    r % 2 ? Sv(Object(i), !0).forEach(function(s) {
      wS(t, s, i[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : Sv(Object(i)).forEach(function(s) {
      Object.defineProperty(t, s, Object.getOwnPropertyDescriptor(i, s));
    });
  }
  return t;
}
function iu(t) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? iu = function(r) {
    return typeof r;
  } : iu = function(r) {
    return r && typeof Symbol == "function" && r.constructor === Symbol && r !== Symbol.prototype ? "symbol" : typeof r;
  }, iu(t);
}
function wS(t, r, i) {
  return r in t ? Object.defineProperty(t, r, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[r] = i, t;
}
function Ar() {
  return Ar = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, Ar.apply(this, arguments);
}
function AS(t, r) {
  if (t == null) return {};
  var i = {}, s = Object.keys(t), o, u;
  for (u = 0; u < s.length; u++)
    o = s[u], !(r.indexOf(o) >= 0) && (i[o] = t[o]);
  return i;
}
function NS(t, r) {
  if (t == null) return {};
  var i = AS(t, r), s, o;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(t);
    for (o = 0; o < u.length; o++)
      s = u[o], !(r.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(t, s) && (i[s] = t[s]);
  }
  return i;
}
var TS = "1.15.6";
function Cr(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Nr = Cr(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = Cr(/Edge/i), xv = Cr(/firefox/i), Js = Cr(/safari/i) && !Cr(/chrome/i) && !Cr(/android/i), Xd = Cr(/iP(ad|od|hone)/i), p0 = Cr(/chrome/i) && Cr(/android/i), m0 = {
  capture: !1,
  passive: !1
};
function Ie(t, r, i) {
  t.addEventListener(r, i, !Nr && m0);
}
function Le(t, r, i) {
  t.removeEventListener(r, i, !Nr && m0);
}
function hu(t, r) {
  if (r) {
    if (r[0] === ">" && (r = r.substring(1)), t)
      try {
        if (t.matches)
          return t.matches(r);
        if (t.msMatchesSelector)
          return t.msMatchesSelector(r);
        if (t.webkitMatchesSelector)
          return t.webkitMatchesSelector(r);
      } catch {
        return !1;
      }
    return !1;
  }
}
function g0(t) {
  return t.host && t !== document && t.host.nodeType ? t.host : t.parentNode;
}
function Zn(t, r, i, s) {
  if (t) {
    i = i || document;
    do {
      if (r != null && (r[0] === ">" ? t.parentNode === i && hu(t, r) : hu(t, r)) || s && t === i)
        return t;
      if (t === i) break;
    } while (t = g0(t));
  }
  return null;
}
var Ev = /\s+/g;
function yn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Ev, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Ev, " ");
    }
}
function xe(t, r, i) {
  var s = t && t.style;
  if (s) {
    if (i === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, "") : t.currentStyle && (i = t.currentStyle), r === void 0 ? i : i[r];
    !(r in s) && r.indexOf("webkit") === -1 && (r = "-webkit-" + r), s[r] = i + (typeof i == "string" ? "" : "px");
  }
}
function Ri(t, r) {
  var i = "";
  if (typeof t == "string")
    i = t;
  else
    do {
      var s = xe(t, "transform");
      s && s !== "none" && (i = s + " " + i);
    } while (!r && (t = t.parentNode));
  var o = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return o && new o(i);
}
function v0(t, r, i) {
  if (t) {
    var s = t.getElementsByTagName(r), o = 0, u = s.length;
    if (i)
      for (; o < u; o++)
        i(s[o], o);
    return s;
  }
  return [];
}
function nr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function xt(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, g, b, _;
    if (t !== window && t.parentNode && t !== nr() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, g = u.right, b = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, g = window.innerWidth, b = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !Nr))
      do
        if (o && o.getBoundingClientRect && (xe(o, "transform") !== "none" || i && xe(o, "position") !== "static")) {
          var m = o.getBoundingClientRect();
          f -= m.top + parseInt(xe(o, "border-top-width")), p -= m.left + parseInt(xe(o, "border-left-width")), h = f + u.height, g = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var v = Ri(o || t), d = v && v.a, x = v && v.d;
      v && (f /= x, p /= d, _ /= d, b /= x, h = f + b, g = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: g,
      width: _,
      height: b
    };
  }
}
function Cv(t, r, i) {
  for (var s = na(t, !0), o = xt(t)[r]; s; ) {
    var u = xt(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === nr()) break;
    s = na(s, !1);
  }
  return !1;
}
function Ii(t, r, i, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== Ee.ghost && (s || f[u] !== Ee.dragged) && Zn(f[u], i.draggable, t, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function $d(t, r) {
  for (var i = t.lastElementChild; i && (i === Ee.ghost || xe(i, "display") === "none" || r && !hu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Rn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== Ee.clone && (!r || hu(t, r)) && i++;
  return i;
}
function wv(t) {
  var r = 0, i = 0, s = nr();
  if (t)
    do {
      var o = Ri(t), u = o.a, f = o.d;
      r += t.scrollLeft * u, i += t.scrollTop * f;
    } while (t !== s && (t = t.parentNode));
  return [r, i];
}
function OS(t, r) {
  for (var i in t)
    if (t.hasOwnProperty(i)) {
      for (var s in r)
        if (r.hasOwnProperty(s) && r[s] === t[i][s]) return Number(i);
    }
  return -1;
}
function na(t, r) {
  if (!t || !t.getBoundingClientRect) return nr();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = xe(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return nr();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return nr();
}
function kS(t, r) {
  if (t && r)
    for (var i in r)
      r.hasOwnProperty(i) && (t[i] = r[i]);
  return t;
}
function Jf(t, r) {
  return Math.round(t.top) === Math.round(r.top) && Math.round(t.left) === Math.round(r.left) && Math.round(t.height) === Math.round(r.height) && Math.round(t.width) === Math.round(r.width);
}
var Ks;
function y0(t, r) {
  return function() {
    if (!Ks) {
      var i = arguments, s = this;
      i.length === 1 ? t.call(s, i[0]) : t.apply(s, i), Ks = setTimeout(function() {
        Ks = void 0;
      }, r);
    }
  };
}
function DS() {
  clearTimeout(Ks), Ks = void 0;
}
function b0(t, r, i) {
  t.scrollLeft += r, t.scrollTop += i;
}
function _0(t) {
  var r = window.Polymer, i = window.jQuery || window.Zepto;
  return r && r.dom ? r.dom(t).cloneNode(!0) : i ? i(t).clone(!0)[0] : t.cloneNode(!0);
}
function S0(t, r, i) {
  var s = {};
  return Array.from(t.children).forEach(function(o) {
    var u, f, p, h;
    if (!(!Zn(o, r.draggable, t, !1) || o.animated || o === i)) {
      var g = xt(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, g.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, g.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, g.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, g.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var sn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function MS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(xe(o, "display") === "none" || o === Ee.ghost)) {
            t.push({
              target: o,
              rect: xt(o)
            });
            var u = rr({}, t[t.length - 1].rect);
            if (o.thisAnimationDuration) {
              var f = Ri(o, !0);
              f && (u.top -= f.f, u.left -= f.e);
            }
            o.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      t.push(s);
    },
    removeAnimationState: function(s) {
      t.splice(OS(t, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var o = this;
      if (!this.options.animation) {
        clearTimeout(r), typeof s == "function" && s();
        return;
      }
      var u = !1, f = 0;
      t.forEach(function(p) {
        var h = 0, g = p.target, b = g.fromRect, _ = xt(g), m = g.prevFromRect, v = g.prevToRect, d = p.rect, x = Ri(g, !0);
        x && (_.top -= x.f, _.left -= x.e), g.toRect = _, g.thisAnimationDuration && Jf(m, _) && !Jf(b, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (b.top - _.top) / (b.left - _.left) && (h = RS(d, m, v, o.options)), Jf(_, b) || (g.prevFromRect = b, g.prevToRect = _, h || (h = o.options.animation), o.animate(g, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(g.animationResetTimer), g.animationResetTimer = setTimeout(function() {
          g.animationTime = 0, g.prevFromRect = null, g.fromRect = null, g.prevToRect = null, g.thisAnimationDuration = null;
        }, h), g.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        xe(s, "transition", ""), xe(s, "transform", "");
        var p = Ri(this.el), h = p && p.a, g = p && p.d, b = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (g || 1);
        s.animatingX = !!b, s.animatingY = !!_, xe(s, "transform", "translate3d(" + b + "px," + _ + "px,0)"), this.forRepaintDummy = jS(s), xe(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), xe(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          xe(s, "transition", ""), xe(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, f);
      }
    }
  };
}
function jS(t) {
  return t.offsetWidth;
}
function RS(t, r, i, s) {
  return Math.sqrt(Math.pow(r.top - t.top, 2) + Math.pow(r.left - t.left, 2)) / Math.sqrt(Math.pow(r.top - i.top, 2) + Math.pow(r.left - i.left, 2)) * s.animation;
}
var wi = [], Kf = {
  initializeByDefault: !0
}, sl = {
  mount: function(r) {
    for (var i in Kf)
      Kf.hasOwnProperty(i) && !(i in r) && (r[i] = Kf[i]);
    wi.forEach(function(s) {
      if (s.pluginName === r.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(r.pluginName, " more than once");
    }), wi.push(r);
  },
  pluginEvent: function(r, i, s) {
    var o = this;
    this.eventCanceled = !1, s.cancel = function() {
      o.eventCanceled = !0;
    };
    var u = r + "Global";
    wi.forEach(function(f) {
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](rr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](rr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var g = new p(r, i, r.options);
        g.sortable = r, g.options = r.options, r[h] = g, Ar(s, g.defaults);
      }
    });
    for (var u in r.options)
      if (r.options.hasOwnProperty(u)) {
        var f = this.modifyOption(r, u, r.options[u]);
        typeof f < "u" && (r.options[u] = f);
      }
  },
  getEventProperties: function(r, i) {
    var s = {};
    return wi.forEach(function(o) {
      typeof o.eventProperties == "function" && Ar(s, o.eventProperties.call(i[o.pluginName], r));
    }), s;
  },
  modifyOption: function(r, i, s) {
    var o;
    return wi.forEach(function(u) {
      r[u.pluginName] && u.optionListeners && typeof u.optionListeners[i] == "function" && (o = u.optionListeners[i].call(r[u.pluginName], s));
    }), o;
  }
};
function zS(t) {
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, g = t.newIndex, b = t.oldDraggableIndex, _ = t.newDraggableIndex, m = t.originalEvent, v = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[sn], !!r) {
    var x, C = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Nr && !il ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = o || i, x.clone = u, x.oldIndex = h, x.newIndex = g, x.oldDraggableIndex = b, x.newDraggableIndex = _, x.originalEvent = m, x.pullMode = v ? v.lastPutMode : void 0;
    var w = rr(rr({}, d), sl.getEventProperties(s, r));
    for (var O in w)
      x[O] = w[O];
    i && i.dispatchEvent(x), C[T] && C[T].call(r, x);
  }
}
var LS = ["evt"], rn = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = NS(s, LS);
  sl.pluginEvent.bind(Ee)(r, i, rr({
    dragEl: se,
    parentEl: pt,
    ghostEl: Ae,
    rootEl: st,
    nextEl: Ta,
    lastDownEl: su,
    cloneEl: ut,
    cloneHidden: ta,
    dragStarted: Ys,
    putSortable: It,
    activeSortable: Ee.active,
    originalEvent: o,
    oldIndex: Mi,
    oldDraggableIndex: Ws,
    newIndex: bn,
    newDraggableIndex: ea,
    hideGhostForTarget: w0,
    unhideGhostForTarget: A0,
    cloneNowHidden: function() {
      ta = !0;
    },
    cloneNowShown: function() {
      ta = !1;
    },
    dispatchSortableEvent: function(p) {
      Xt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Xt(t) {
  zS(rr({
    putSortable: It,
    cloneEl: ut,
    targetEl: se,
    rootEl: st,
    oldIndex: Mi,
    oldDraggableIndex: Ws,
    newIndex: bn,
    newDraggableIndex: ea
  }, t));
}
var se, pt, Ae, st, Ta, su, ut, ta, Mi, bn, Ws, ea, Co, It, Di = !1, pu = !1, mu = [], Aa, qn, Wf, ed, Av, Nv, Ys, Ai, el, tl = !1, wo = !1, lu, Zt, td = [], Ad = !1, gu = [], wu = typeof document < "u", Ao = Xd, Tv = il || Nr ? "cssFloat" : "float", IS = wu && !p0 && !Xd && "draggable" in document.createElement("div"), x0 = (function() {
  if (wu) {
    if (Nr)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), E0 = function(r, i) {
  var s = xe(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Ii(r, 0, i), f = Ii(r, 1, i), p = u && xe(u), h = f && xe(f), g = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + xt(u).width, b = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + xt(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || g >= o && s[Tv] === "none" || f && s[Tv] === "none" && g + b > o) ? "vertical" : "horizontal";
}, PS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, g = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + g / 2;
}, BS = function(r, i) {
  var s;
  return mu.some(function(o) {
    var u = o[sn].options.emptyInsertThreshold;
    if (!(!u || $d(o))) {
      var f = xt(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, C0 = function(r) {
  function i(u, f) {
    return function(p, h, g, b) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, g, b), f)(p, h, g, b);
      var m = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === m || u.join && u.indexOf(m) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || iu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, w0 = function() {
  !x0 && Ae && xe(Ae, "display", "none");
}, A0 = function() {
  !x0 && Ae && xe(Ae, "display", "");
};
wu && !p0 && document.addEventListener("click", function(t) {
  if (pu)
    return t.preventDefault(), t.stopPropagation && t.stopPropagation(), t.stopImmediatePropagation && t.stopImmediatePropagation(), pu = !1, !1;
}, !0);
var Na = function(r) {
  if (se) {
    r = r.touches ? r.touches[0] : r;
    var i = BS(r.clientX, r.clientY);
    if (i) {
      var s = {};
      for (var o in r)
        r.hasOwnProperty(o) && (s[o] = r[o]);
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[sn]._onDragOver(s);
    }
  }
}, US = function(r) {
  se && se.parentNode[sn]._isOutsideThisEl(r.target);
};
function Ee(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = Ar({}, r), t[sn] = this;
  var i = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(t.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return E0(t, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(f, p) {
      f.setData("Text", p.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: Ee.supportPointer !== !1 && "PointerEvent" in window && (!Js || Xd),
    emptyInsertThreshold: 5
  };
  sl.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  C0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : IS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ie(t, "pointerdown", this._onTapStart) : (Ie(t, "mousedown", this._onTapStart), Ie(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ie(t, "dragover", this), Ie(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), Ar(this, MS());
}
Ee.prototype = /** @lends Sortable.prototype */
{
  constructor: Ee,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, se) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, g = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, b = o.filter;
      if (XS(s), !se && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !g.isContentEditable && !(!this.nativeDraggable && Js && h && h.tagName.toUpperCase() === "SELECT") && (h = Zn(h, o.draggable, s, !1), !(h && h.animated) && su !== h)) {
        if (Mi = Rn(h), Ws = Rn(h, o.draggable), typeof b == "function") {
          if (b.call(this, r, h, this)) {
            Xt({
              sortable: i,
              rootEl: g,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), rn("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (b && (b = b.split(",").some(function(_) {
          if (_ = Zn(g, _.trim(), s, !1), _)
            return Xt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), rn("filter", i, {
              evt: r
            }), !0;
        }), b)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Zn(g, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !se && s.parentNode === u) {
      var g = xt(s);
      if (st = u, se = s, pt = se.parentNode, Ta = se.nextSibling, su = s, Co = f.group, Ee.dragged = se, Aa = {
        target: se,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Av = Aa.clientX - g.left, Nv = Aa.clientY - g.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, se.style["will-change"] = "all", h = function() {
        if (rn("delayEnded", o, {
          evt: r
        }), Ee.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !xv && o.nativeDraggable && (se.draggable = !0), o._triggerDragStart(r, i), Xt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), yn(se, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(b) {
        v0(se, b.trim(), nd);
      }), Ie(p, "dragover", Na), Ie(p, "mousemove", Na), Ie(p, "touchmove", Na), f.supportPointer ? (Ie(p, "pointerup", o._onDrop), !this.nativeDraggable && Ie(p, "pointercancel", o._onDrop)) : (Ie(p, "mouseup", o._onDrop), Ie(p, "touchend", o._onDrop), Ie(p, "touchcancel", o._onDrop)), xv && this.nativeDraggable && (this.options.touchStartThreshold = 4, se.draggable = !0), rn("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || Nr))) {
        if (Ee.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ie(p, "pointerup", o._disableDelayedDrag), Ie(p, "pointercancel", o._disableDelayedDrag)) : (Ie(p, "mouseup", o._disableDelayedDrag), Ie(p, "touchend", o._disableDelayedDrag), Ie(p, "touchcancel", o._disableDelayedDrag)), Ie(p, "mousemove", o._delayedDragTouchMoveHandler), Ie(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Ie(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
      } else
        h();
    }
  },
  _delayedDragTouchMoveHandler: function(r) {
    var i = r.touches ? r.touches[0] : r;
    Math.max(Math.abs(i.clientX - this._lastX), Math.abs(i.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    se && nd(se), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._disableDelayedDrag), Le(r, "touchend", this._disableDelayedDrag), Le(r, "touchcancel", this._disableDelayedDrag), Le(r, "pointerup", this._disableDelayedDrag), Le(r, "pointercancel", this._disableDelayedDrag), Le(r, "mousemove", this._delayedDragTouchMoveHandler), Le(r, "touchmove", this._delayedDragTouchMoveHandler), Le(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ie(document, "pointermove", this._onTouchMove) : i ? Ie(document, "touchmove", this._onTouchMove) : Ie(document, "mousemove", this._onTouchMove) : (Ie(se, "dragend", this), Ie(st, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Di = !1, st && se) {
      rn("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ie(document, "dragover", US);
      var s = this.options;
      !r && yn(se, s.dragClass, !1), yn(se, s.ghostClass, !0), Ee.active = this, r && this._appendGhost(), Xt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (qn) {
      this._lastX = qn.clientX, this._lastY = qn.clientY, w0();
      for (var r = document.elementFromPoint(qn.clientX, qn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(qn.clientX, qn.clientY), r !== i); )
        i = r;
      if (se.parentNode[sn]._isOutsideThisEl(r), i)
        do {
          if (i[sn]) {
            var s = void 0;
            if (s = i[sn]._onDragOver({
              clientX: qn.clientX,
              clientY: qn.clientY,
              target: r,
              rootEl: i
            }), s && !this.options.dragoverBubble)
              break;
          }
          r = i;
        } while (i = g0(i));
      A0();
    }
  },
  _onTouchMove: function(r) {
    if (Aa) {
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Ae && Ri(Ae, !0), p = Ae && f && f.a, h = Ae && f && f.d, g = Ao && Zt && wv(Zt), b = (u.clientX - Aa.clientX + o.x) / (p || 1) + (g ? g[0] - td[0] : 0) / (p || 1), _ = (u.clientY - Aa.clientY + o.y) / (h || 1) + (g ? g[1] - td[1] : 0) / (h || 1);
      if (!Ee.active && !Di) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Ae) {
        f ? (f.e += b - (Wf || 0), f.f += _ - (ed || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: _
        };
        var m = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        xe(Ae, "webkitTransform", m), xe(Ae, "mozTransform", m), xe(Ae, "msTransform", m), xe(Ae, "transform", m), Wf = b, ed = _, qn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ae) {
      var r = this.options.fallbackOnBody ? document.body : st, i = xt(se, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Zt = r; xe(Zt, "position") === "static" && xe(Zt, "transform") === "none" && Zt !== document; )
          Zt = Zt.parentNode;
        Zt !== document.body && Zt !== document.documentElement ? (Zt === document && (Zt = nr()), i.top += Zt.scrollTop, i.left += Zt.scrollLeft) : Zt = nr(), td = wv(Zt);
      }
      Ae = se.cloneNode(!0), yn(Ae, s.ghostClass, !1), yn(Ae, s.fallbackClass, !0), yn(Ae, s.dragClass, !0), xe(Ae, "transition", ""), xe(Ae, "transform", ""), xe(Ae, "box-sizing", "border-box"), xe(Ae, "margin", 0), xe(Ae, "top", i.top), xe(Ae, "left", i.left), xe(Ae, "width", i.width), xe(Ae, "height", i.height), xe(Ae, "opacity", "0.8"), xe(Ae, "position", Ao ? "absolute" : "fixed"), xe(Ae, "zIndex", "100000"), xe(Ae, "pointerEvents", "none"), Ee.ghost = Ae, r.appendChild(Ae), xe(Ae, "transform-origin", Av / parseInt(Ae.style.width) * 100 + "% " + Nv / parseInt(Ae.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (rn("dragStart", this, {
      evt: r
    }), Ee.eventCanceled) {
      this._onDrop();
      return;
    }
    rn("setupClone", this), Ee.eventCanceled || (ut = _0(se), ut.removeAttribute("id"), ut.draggable = !1, ut.style["will-change"] = "", this._hideClone(), yn(ut, this.options.chosenClass, !1), Ee.clone = ut), s.cloneId = ou(function() {
      rn("clone", s), !Ee.eventCanceled && (s.options.removeCloneOnHide || st.insertBefore(ut, se), s._hideClone(), Xt({
        sortable: s,
        name: "clone"
      }));
    }), !i && yn(se, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Le(document, "mouseup", s._onDrop), Le(document, "touchend", s._onDrop), Le(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, se)), Ie(document, "drop", s), xe(se, "transform", "translateZ(0)")), Di = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), Ie(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Js && xe(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, g = Ee.active, b = Co === h, _ = p.sort, m = It || g, v, d = this, x = !1;
    if (Ad) return;
    function C(ce, we) {
      rn(ce, d, rr({
        evt: r,
        isOwner: b,
        axis: v ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: m,
        target: s,
        completed: w,
        onMove: function(W, ae) {
          return No(st, i, se, o, W, xt(W), r, ae);
        },
        changed: O
      }, we));
    }
    function T() {
      C("dragOverAnimationCapture"), d.captureAnimationState(), d !== m && m.captureAnimationState();
    }
    function w(ce) {
      return C("dragOverCompleted", {
        insertion: ce
      }), ce && (b ? g._hideClone() : g._showClone(d), d !== m && (yn(se, It ? It.options.ghostClass : g.options.ghostClass, !1), yn(se, p.ghostClass, !0)), It !== d && d !== Ee.active ? It = d : d === Ee.active && It && (It = null), m === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        C("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (s === se && !se.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (se.parentNode[sn]._isOutsideThisEl(r.target), !ce && Na(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function O() {
      bn = Rn(se), ea = Rn(se, p.draggable), Xt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: bn,
        newDraggableIndex: ea,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Zn(s, p.draggable, i, !0), C("dragOver"), Ee.eventCanceled) return x;
    if (se.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return w(!1);
    if (pu = !1, g && !p.disabled && (b ? _ || (f = pt !== st) : It === this || (this.lastPutMode = Co.checkPull(this, g, se, r)) && h.checkPut(this, g, se, r))) {
      if (v = this._getDirection(r, s) === "vertical", o = xt(se), C("dragOverValid"), Ee.eventCanceled) return x;
      if (f)
        return pt = st, T(), this._hideClone(), C("revert"), Ee.eventCanceled || (Ta ? st.insertBefore(se, Ta) : st.appendChild(se)), w(!0);
      var E = $d(i, p.draggable);
      if (!E || ZS(r, v, this) && !E.animated) {
        if (E === se)
          return w(!1);
        if (E && i === r.target && (s = E), s && (u = xt(s)), No(st, i, se, o, s, u, r, !!s) !== !1)
          return T(), E && E.nextSibling ? i.insertBefore(se, E.nextSibling) : i.appendChild(se), pt = i, O(), w(!0);
      } else if (E && FS(r, v, this)) {
        var N = Ii(i, 0, p, !0);
        if (N === se)
          return w(!1);
        if (s = N, u = xt(s), No(st, i, se, o, s, u, r, !1) !== !1)
          return T(), i.insertBefore(se, N), pt = i, O(), w(!0);
      } else if (s.parentNode === i) {
        u = xt(s);
        var D = 0, M, U = se.parentNode !== i, F = !PS(se.animated && se.toRect || o, s.animated && s.toRect || u, v), I = v ? "top" : "left", X = Cv(s, "top", "top") || Cv(se, "top", "top"), V = X ? X.scrollTop : void 0;
        Ai !== s && (M = u[I], tl = !1, wo = !F && p.invertSwap || U), D = GS(r, s, u, v, F ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var ue;
        if (D !== 0) {
          var ie = Rn(se);
          do
            ie -= D, ue = pt.children[ie];
          while (ue && (xe(ue, "display") === "none" || ue === Ae));
        }
        if (D === 0 || ue === s)
          return w(!1);
        Ai = s, el = D;
        var de = s.nextElementSibling, B = !1;
        B = D === 1;
        var re = No(st, i, se, o, s, u, r, B);
        if (re !== !1)
          return (re === 1 || re === -1) && (B = re === 1), Ad = !0, setTimeout(qS, 30), T(), B && !de ? i.appendChild(se) : s.parentNode.insertBefore(se, B ? de : s), X && b0(X, 0, V - X.scrollTop), pt = se.parentNode, M !== void 0 && !wo && (lu = Math.abs(M - xt(s)[I])), O(), w(!0);
      }
      if (i.contains(se))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Le(document, "mousemove", this._onTouchMove), Le(document, "touchmove", this._onTouchMove), Le(document, "pointermove", this._onTouchMove), Le(document, "dragover", Na), Le(document, "mousemove", Na), Le(document, "touchmove", Na);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Le(r, "mouseup", this._onDrop), Le(r, "touchend", this._onDrop), Le(r, "pointerup", this._onDrop), Le(r, "pointercancel", this._onDrop), Le(r, "touchcancel", this._onDrop), Le(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (bn = Rn(se), ea = Rn(se, s.draggable), rn("drop", this, {
      evt: r
    }), pt = se && se.parentNode, bn = Rn(se), ea = Rn(se, s.draggable), Ee.eventCanceled) {
      this._nulling();
      return;
    }
    Di = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nd(this.cloneId), Nd(this._dragStartId), this.nativeDraggable && (Le(document, "drop", this), Le(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Js && xe(document.body, "user-select", ""), xe(se, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Ae && Ae.parentNode && Ae.parentNode.removeChild(Ae), (st === pt || It && It.lastPutMode !== "clone") && ut && ut.parentNode && ut.parentNode.removeChild(ut), se && (this.nativeDraggable && Le(se, "dragend", this), nd(se), se.style["will-change"] = "", Ys && !Di && yn(se, It ? It.options.ghostClass : this.options.ghostClass, !1), yn(se, this.options.chosenClass, !1), Xt({
      sortable: this,
      name: "unchoose",
      toEl: pt,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), st !== pt ? (bn >= 0 && (Xt({
      rootEl: pt,
      name: "add",
      toEl: pt,
      fromEl: st,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "remove",
      toEl: pt,
      originalEvent: r
    }), Xt({
      rootEl: pt,
      name: "sort",
      toEl: pt,
      fromEl: st,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), It && It.save()) : bn !== Mi && bn >= 0 && (Xt({
      sortable: this,
      name: "update",
      toEl: pt,
      originalEvent: r
    }), Xt({
      sortable: this,
      name: "sort",
      toEl: pt,
      originalEvent: r
    })), Ee.active && ((bn == null || bn === -1) && (bn = Mi, ea = Ws), Xt({
      sortable: this,
      name: "end",
      toEl: pt,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    rn("nulling", this), st = se = pt = Ae = Ta = ut = su = ta = Aa = qn = Ys = bn = ea = Mi = Ws = Ai = el = It = Co = Ee.dragged = Ee.ghost = Ee.clone = Ee.active = null, gu.forEach(function(r) {
      r.checked = !0;
    }), gu.length = Wf = ed = 0;
  },
  handleEvent: function(r) {
    switch (r.type) {
      case "drop":
      case "dragend":
        this._onDrop(r);
        break;
      case "dragenter":
      case "dragover":
        se && (this._onDragOver(r), HS(r));
        break;
      case "selectstart":
        r.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var r = [], i, s = this.el.children, o = 0, u = s.length, f = this.options; o < u; o++)
      i = s[o], Zn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || YS(i));
    return r;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(r, i) {
    var s = {}, o = this.el;
    this.toArray().forEach(function(u, f) {
      var p = o.children[f];
      Zn(p, this.options.draggable, o, !1) && (s[u] = p);
    }, this), i && this.captureAnimationState(), r.forEach(function(u) {
      s[u] && (o.removeChild(s[u]), o.appendChild(s[u]));
    }), i && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var r = this.options.store;
    r && r.set && r.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(r, i) {
    return Zn(r, i || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(r, i) {
    var s = this.options;
    if (i === void 0)
      return s[r];
    var o = sl.modifyOption(this, r, i);
    typeof o < "u" ? s[r] = o : s[r] = i, r === "group" && C0(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    rn("destroy", this);
    var r = this.el;
    r[sn] = null, Le(r, "mousedown", this._onTapStart), Le(r, "touchstart", this._onTapStart), Le(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Le(r, "dragover", this), Le(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ta) {
      if (rn("hideClone", this), Ee.eventCanceled) return;
      xe(ut, "display", "none"), this.options.removeCloneOnHide && ut.parentNode && ut.parentNode.removeChild(ut), ta = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ta) {
      if (rn("showClone", this), Ee.eventCanceled) return;
      se.parentNode == st && !this.options.group.revertClone ? st.insertBefore(ut, se) : Ta ? st.insertBefore(ut, Ta) : st.appendChild(ut), this.options.group.revertClone && this.animate(se, ut), xe(ut, "display", ""), ta = !1;
    }
  }
};
function HS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function No(t, r, i, s, o, u, f, p) {
  var h, g = t[sn], b = g.options.onMove, _;
  return window.CustomEvent && !Nr && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || xt(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), b && (_ = b.call(g, h, f)), _;
}
function nd(t) {
  t.draggable = !1;
}
function qS() {
  Ad = !1;
}
function FS(t, r, i) {
  var s = xt(Ii(i.el, 0, i.options, !0)), o = S0(i.el, i.options, Ae), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function ZS(t, r, i) {
  var s = xt($d(i.el, i.options.draggable)), o = S0(i.el, i.options, Ae), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function GS(t, r, i, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, g = s ? i.height : i.width, b = s ? i.top : i.left, _ = s ? i.bottom : i.right, m = !1;
  if (!f) {
    if (p && lu < g * o) {
      if (!tl && (el === 1 ? h > b + g * u / 2 : h < _ - g * u / 2) && (tl = !0), tl)
        m = !0;
      else if (el === 1 ? h < b + lu : h > _ - lu)
        return -el;
    } else if (h > b + g * (1 - o) / 2 && h < _ - g * (1 - o) / 2)
      return VS(r);
  }
  return m = m || f, m && (h < b + g * u / 2 || h > _ - g * u / 2) ? h > b + g / 2 ? 1 : -1 : 0;
}
function VS(t) {
  return Rn(se) < Rn(t) ? 1 : -1;
}
function YS(t) {
  for (var r = t.tagName + t.className + t.src + t.href + t.textContent, i = r.length, s = 0; i--; )
    s += r.charCodeAt(i);
  return s.toString(36);
}
function XS(t) {
  gu.length = 0;
  for (var r = t.getElementsByTagName("input"), i = r.length; i--; ) {
    var s = r[i];
    s.checked && gu.push(s);
  }
}
function ou(t) {
  return setTimeout(t, 0);
}
function Nd(t) {
  return clearTimeout(t);
}
wu && Ie(document, "touchmove", function(t) {
  (Ee.active || Di) && t.cancelable && t.preventDefault();
});
Ee.utils = {
  on: Ie,
  off: Le,
  css: xe,
  find: v0,
  is: function(r, i) {
    return !!Zn(r, i, r, !1);
  },
  extend: kS,
  throttle: y0,
  closest: Zn,
  toggleClass: yn,
  clone: _0,
  index: Rn,
  nextTick: ou,
  cancelNextTick: Nd,
  detectDirection: E0,
  getChild: Ii,
  expando: sn
};
Ee.get = function(t) {
  return t[sn];
};
Ee.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (Ee.utils = rr(rr({}, Ee.utils), s.utils)), sl.mount(s);
  });
};
Ee.create = function(t, r) {
  return new Ee(t, r);
};
Ee.version = TS;
var St = [], Xs, Td, Od = !1, rd, ad, vu, $s;
function $S() {
  function t() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var r in this)
      r.charAt(0) === "_" && typeof this[r] == "function" && (this[r] = this[r].bind(this));
  }
  return t.prototype = {
    dragStarted: function(i) {
      var s = i.originalEvent;
      this.sortable.nativeDraggable ? Ie(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ie(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ie(document, "touchmove", this._handleFallbackAutoScroll) : Ie(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : (Le(document, "pointermove", this._handleFallbackAutoScroll), Le(document, "touchmove", this._handleFallbackAutoScroll), Le(document, "mousemove", this._handleFallbackAutoScroll)), Ov(), uu(), DS();
    },
    nulling: function() {
      vu = Td = Xs = Od = $s = rd = ad = null, St.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (vu = i, s || this.options.forceAutoScrollFallback || il || Nr || Js) {
        id(i, this.options, p, s);
        var h = na(p, !0);
        Od && (!$s || u !== rd || f !== ad) && ($s && Ov(), $s = setInterval(function() {
          var g = na(document.elementFromPoint(u, f), !0);
          g !== h && (h = g, uu()), id(i, o.options, g, s);
        }, 10), rd = u, ad = f);
      } else {
        if (!this.options.bubbleScroll || na(p, !0) === nr()) {
          uu();
          return;
        }
        id(i, this.options, na(p, !1), !1);
      }
    }
  }, Ar(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function uu() {
  St.forEach(function(t) {
    clearInterval(t.pid);
  }), St = [];
}
function Ov() {
  clearInterval($s);
}
var id = y0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = nr(), g = !1, b;
    Td !== i && (Td = i, uu(), Xs = r.scroll, b = r.scrollFn, Xs === !0 && (Xs = na(i, !0)));
    var _ = 0, m = Xs;
    do {
      var v = m, d = xt(v), x = d.top, C = d.bottom, T = d.left, w = d.right, O = d.width, E = d.height, N = void 0, D = void 0, M = v.scrollWidth, U = v.scrollHeight, F = xe(v), I = v.scrollLeft, X = v.scrollTop;
      v === h ? (N = O < M && (F.overflowX === "auto" || F.overflowX === "scroll" || F.overflowX === "visible"), D = E < U && (F.overflowY === "auto" || F.overflowY === "scroll" || F.overflowY === "visible")) : (N = O < M && (F.overflowX === "auto" || F.overflowX === "scroll"), D = E < U && (F.overflowY === "auto" || F.overflowY === "scroll"));
      var V = N && (Math.abs(w - o) <= f && I + O < M) - (Math.abs(T - o) <= f && !!I), ue = D && (Math.abs(C - u) <= f && X + E < U) - (Math.abs(x - u) <= f && !!X);
      if (!St[_])
        for (var ie = 0; ie <= _; ie++)
          St[ie] || (St[ie] = {});
      (St[_].vx != V || St[_].vy != ue || St[_].el !== v) && (St[_].el = v, St[_].vx = V, St[_].vy = ue, clearInterval(St[_].pid), (V != 0 || ue != 0) && (g = !0, St[_].pid = setInterval((function() {
        s && this.layer === 0 && Ee.active._onTouchMove(vu);
        var de = St[this.layer].vy ? St[this.layer].vy * p : 0, B = St[this.layer].vx ? St[this.layer].vx * p : 0;
        typeof b == "function" && b.call(Ee.dragged.parentNode[sn], B, de, t, vu, St[this.layer].el) !== "continue" || b0(St[this.layer].el, B, de);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && m !== h && (m = na(m, !1)));
    Od = g;
  }
}, 30), N0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var g = s || u;
    p();
    var b = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(b.clientX, b.clientY);
    h(), g && !g.el.contains(_) && (f("spill"), this.onSpill({
      dragEl: o,
      putSortable: s
    }));
  }
};
function Qd() {
}
Qd.prototype = {
  startIndex: null,
  dragStart: function(r) {
    var i = r.oldDraggableIndex;
    this.startIndex = i;
  },
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var o = Ii(this.sortable.el, this.startIndex, this.options);
    o ? this.sortable.el.insertBefore(i, o) : this.sortable.el.appendChild(i), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: N0
};
Ar(Qd, {
  pluginName: "revertOnSpill"
});
function Jd() {
}
Jd.prototype = {
  onSpill: function(r) {
    var i = r.dragEl, s = r.putSortable, o = s || this.sortable;
    o.captureAnimationState(), i.parentNode && i.parentNode.removeChild(i), o.animateAll();
  },
  drop: N0
};
Ar(Jd, {
  pluginName: "removeOnSpill"
});
Ee.mount(new $S());
Ee.mount(Jd, Qd);
const kd = `=======

A character card is the blueprint for your AI. Its purpose is to provide a clear, consistent, and compelling set of instructions that guide the AI's personality, behavior, and speech. A well-crafted card is the difference between a forgettable bot and an immersive, believable character.

This guide is structured into two parts:
1.  **Core Identity:** The essential fields that define who your character is.
2.  **Interaction & Context:** The fields that define how the user will interact with them.

---

### Part 1: Core Identity - Defining Who The Character Is

These fields build the foundation of your character's being.

#### 1. Name
The character's primary identifier. It sets the first impression.

*   **Purpose**: To give the AI and user a clear reference point.
*   **Best Practices**:
    *   **Be Evocative**: A name like "Sergeant Rex 'Ironclad' Jones" tells a story. "Bob" does not.
    *   **Prioritize Clarity**: Avoid names that are difficult to spell or pronounce, as the AI may misuse them.
*   **Example**:
    *   **Strong**: "Kaelen, the Whisperwood Scout"
    *   **Weak**: "Xy'zth'gor"

#### 2. Description (The "At-a-Glance" Summary)
This is a concise paragraph that gives the AI a holistic "mental image" of the character. It should blend their most critical physical and personality traits into a single snapshot.

*   **Purpose**: To provide a quick, high-level summary the AI can reference for appearance, demeanor, and key details.
*   **Structure**:
    1.  **Appearance**: Start with their most defining physical features.
    2.  **Demeanor**: Describe their general personality and how they carry themselves.
    3.  **A Key Quirk**: End with a unique detail that makes them memorable.
*   **Example**:
    > A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves.

#### 3. Personality (The "Rulebook" for Behavior)
While the **Description** is a summary, this field contains direct, explicit instructions for the AI. It defines the character's internal thoughts, motivations, and behavioral rules in detail.

*   **Purpose**: To eliminate ambiguity and give the AI a clear, actionable set of traits to follow.
*   **Best Practices**:
    *   Use clear, declarative sentences to define the character's core rules.
    *   Focus on core motivations, deep-seated fears, and moral alignment.
    *   Avoid contradictions (e.g., describing a character as both "Patient" and "Impulsive") to ensure the AI's behavior remains consistent.
*   **Example**:
    > A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words.

---

### Part 2: Interaction & Context - Setting the Stage

These fields define the environment and the way your character communicates.

#### 4. Scenario (The "Where, When, and Why")
This sets the scene for the interaction, providing the context that frames the roleplay.

*   **Purpose**: To establish the setting, the timeline, and the initial relationship between the character and the user.
*   **What to Include**:
    *   **Location**: Where is the interaction taking place?
    *   **Context**: What is happening?
    *   **Relationship**: How do {{char}} and {{user}} know each other?
*   **Example**:
    > The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a "console cowboy," a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job.

#### 5. First Message (The Opening Hook)
This is the character's opening line. It's the single most important field for establishing tone, voice, and immediate engagement.

*   **Purpose**: To kick off the roleplay with a compelling hook that embodies the character's personality.
*   **Key Elements**:
    1.  **Action**: Start with a physical action to ground the scene.
    2.  **Dialogue**: Write a line that reveals their personality.
    3.  **A Hook**: End with something that prompts a response.
*   **Example**:
    > *{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"

#### 6. Example Dialogue (The Voice & Style Guide)
This is a "style guide" that teaches the AI *how* your character speaks, thinks, and formats their responses.

*   **Purpose**: To provide a clear template for the character's speech patterns, vocabulary, and interaction style.
*   **Structure**:
    *   Use {{user}} and {{char}} to create 2-3 short exchanges.
    *   Showcase a range of emotions.
    *   Mix dialogue with actions (in asterisks) to demonstrate their body language.
*   **Example**:
    \`\`\`
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, T0 = `{{#if characters}}
## Selected Characters for Context
{{#each characters}}
### {{this.name}}
{{#if this.description}}
#### Description
{{this.description}}
{{/if}}
{{#if this.personality}}
#### Personality
{{this.personality}}
{{/if}}
{{#if this.scenario}}
#### Scenario
{{this.scenario}}
{{/if}}
{{#if this.first_mes}}
#### First Message
{{this.first_mes}}
{{/if}}
{{#if this.mes_example}}
#### Example Dialogue
{{this.mes_example}}
{{/if}}
{{#if this.alternate_greetings}}
#### Alternate Greetings
{{#each this.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, QS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response wrapped ONLY in a single <response> XML tag.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
<response>Generated content for the field goes here.</response>
\`\`\``, JS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide your response as a JSON object with a single key "response" containing the generated content as a string.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
{
  "response": "Generated content for the field goes here."
}
\`\`\``, KS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST provide ONLY the raw text content for the field, without any formatting, XML tags, JSON structure, or explanatory text. Just the content itself.

When providing code in your response, wrap it in triple backticks:

Example:
\`\`\`
Generated content for the field goes here.
\`\`\``, Kd = "{{activeFormatInstructions}}", O0 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, WS = `### {{character.name}}
- **Description:** {{#if character.description}}{{character.description}}{{else}}*Not provided*{{/if}}
- **Personality:** {{#if character.personality}}{{character.personality}}{{else}}*Not provided*{{/if}}
- **Scenario:** {{#if character.scenario}}{{character.scenario}}{{else}}*Not provided*{{/if}}
- **First Message:** {{#if character.first_mes}}{{character.first_mes}}{{else}}*Not provided*{{/if}}
- **Example Dialogue:**
  {{#if character.mes_example}}{{character.mes_example}}{{else}}*Not provided*{{/if}}
- **Alternate Greetings:**
  {{#if character.alternate_greetings}}
  {{#each character.alternate_greetings}}
  **{{add @index 1}}:** {{this}}
  {{/each}}
  {{else}}*Not provided*{{/if}}`, nl = `{{#is_not_empty fields}}
=== CURRENT CHARACTER FIELD VALUES ===
{{#is_not_empty fields.core}}
**Core Fields:**
{{#each fields.core as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.alternate_greetings}}
**Alternate Greetings:**
{{#each fields.alternate_greetings as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.draft}}
**Draft Fields:**
{{#each fields.draft as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}
{{/is_not_empty}}`, ex = `## User's Persona Description
name: {{user}}
{{persona}}`, Wd = `Your task is to generate the content for the "{{targetField}}" field of a character card. Base your response on the preceding context (chat history, persona, system prompts, character/lore definitions, existing fields, etc.).
{{#if userInstructions}}

Follow these user instructions: {{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions: {{fieldSpecificInstructions}}
{{/if}}`, tx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid JSON object that strictly adheres to the provided JSON schema.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire JSON object in a markdown code block (```json\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The JSON object inside the code block MUST be valid and conform to the schema.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", nx = "You are a highly specialized AI assistant. Your SOLE purpose is to generate a single, valid XML structure that strictly adheres to the provided example.\n\n**CRITICAL INSTRUCTIONS:**\n1.  You MUST wrap the entire XML object in a markdown code block (```xml\\n...\\n```).\n2.  Your response MUST NOT contain any explanatory text, comments, or any other content outside of this single code block.\n3.  The XML object inside the code block MUST be valid.\n\n**JSON SCHEMA TO FOLLOW:**\n```json\n{{schema}}\n```\n\n**EXAMPLE OF A PERFECT RESPONSE:**\n```json\n{{example_response}}\n```", rx = `You are an expert character writer assisting a user. Your task is to respond with the modified character data in the required structured format.
Your justification should be friendly and conversational. Be direct and focus on the changes you've made. Vary your responses and do not start every message the same way. Do not repeat the user's request back to them.

For this session, we are focusing on: {{#if isFieldSession}}the "{{targetLabel}}" field.{{else}}the entire character card.{{/if}}

Initial character state is provided in the context. Read the user's request, and provide a response that incorporates their changes.`, k0 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", ax = k0 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ix = "[" + k0 + "][" + ax + "]*", sx = new RegExp("^" + ix + "$");
function D0(t, r) {
  const i = [];
  let s = r.exec(t);
  for (; s; ) {
    const o = [];
    o.startIndex = r.lastIndex - s[0].length;
    const u = s.length;
    for (let f = 0; f < u; f++)
      o.push(s[f]);
    i.push(o), s = r.exec(t);
  }
  return i;
}
const eh = function(t) {
  const r = sx.exec(t);
  return !(r === null || typeof r > "u");
};
function lx(t) {
  return typeof t < "u";
}
const ox = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function M0(t, r) {
  r = Object.assign({}, ox, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Dv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Mv(t, u);
        continue;
      } else {
        let p = !1;
        t[u] === "/" && (p = !0, u++);
        let h = "";
        for (; u < t.length && t[u] !== ">" && t[u] !== " " && t[u] !== "	" && t[u] !== `
` && t[u] !== "\r"; u++)
          h += t[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !gx(h)) {
          let _;
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", yt("InvalidTag", _, $t(t, u));
        }
        const g = fx(t, u);
        if (g === !1)
          return yt("InvalidAttr", "Attributes for '" + h + "' have open quote.", $t(t, u));
        let b = g.value;
        if (u = g.index, b[b.length - 1] === "/") {
          const _ = u - b.length;
          b = b.substring(0, b.length - 1);
          const m = jv(b, r);
          if (m === !0)
            s = !0;
          else
            return yt(m.err.code, m.err.msg, $t(t, _ + m.err.line));
        } else if (p)
          if (g.tagClosed) {
            if (b.trim().length > 0)
              return yt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", $t(t, f));
            if (i.length === 0)
              return yt("InvalidTag", "Closing tag '" + h + "' has not been opened.", $t(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let m = $t(t, _.tagStartPos);
                return yt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + h + "'.",
                  $t(t, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return yt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", $t(t, u));
        else {
          const _ = jv(b, r);
          if (_ !== !0)
            return yt(_.err.code, _.err.msg, $t(t, u - b.length + _.err.line));
          if (o === !0)
            return yt("InvalidXml", "Multiple possible root nodes found.", $t(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Mv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Dv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = px(t, u);
            if (_ == -1)
              return yt("InvalidChar", "char '&' is not expected.", $t(t, u));
            u = _;
          } else if (o === !0 && !kv(t[u]))
            return yt("InvalidXml", "Extra text at the end", $t(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (kv(t[u]))
        continue;
      return yt("InvalidChar", "char '" + t[u] + "' is not expected.", $t(t, u));
    }
  if (s) {
    if (i.length == 1)
      return yt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", $t(t, i[0].tagStartPos));
    if (i.length > 0)
      return yt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return yt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function kv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Dv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return yt("InvalidXml", "XML declaration allowed only at the start of the document.", $t(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Mv(t, r) {
  if (t.length > r + 5 && t[r + 1] === "-" && t[r + 2] === "-") {
    for (r += 3; r < t.length; r++)
      if (t[r] === "-" && t[r + 1] === "-" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  } else if (t.length > r + 8 && t[r + 1] === "D" && t[r + 2] === "O" && t[r + 3] === "C" && t[r + 4] === "T" && t[r + 5] === "Y" && t[r + 6] === "P" && t[r + 7] === "E") {
    let i = 1;
    for (r += 8; r < t.length; r++)
      if (t[r] === "<")
        i++;
      else if (t[r] === ">" && (i--, i === 0))
        break;
  } else if (t.length > r + 9 && t[r + 1] === "[" && t[r + 2] === "C" && t[r + 3] === "D" && t[r + 4] === "A" && t[r + 5] === "T" && t[r + 6] === "A" && t[r + 7] === "[") {
    for (r += 8; r < t.length; r++)
      if (t[r] === "]" && t[r + 1] === "]" && t[r + 2] === ">") {
        r += 2;
        break;
      }
  }
  return r;
}
const ux = '"', cx = "'";
function fx(t, r) {
  let i = "", s = "", o = !1;
  for (; r < t.length; r++) {
    if (t[r] === ux || t[r] === cx)
      s === "" ? s = t[r] : s !== t[r] || (s = "");
    else if (t[r] === ">" && s === "") {
      o = !0;
      break;
    }
    i += t[r];
  }
  return s !== "" ? !1 : {
    value: i,
    index: r,
    tagClosed: o
  };
}
const dx = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function jv(t, r) {
  const i = D0(t, dx), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return yt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return yt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!mx(u))
      return yt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return yt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
  }
  return !0;
}
function hx(t, r) {
  let i = /\d/;
  for (t[r] === "x" && (r++, i = /[\da-fA-F]/); r < t.length; r++) {
    if (t[r] === ";")
      return r;
    if (!t[r].match(i))
      break;
  }
  return -1;
}
function px(t, r) {
  if (r++, t[r] === ";")
    return -1;
  if (t[r] === "#")
    return r++, hx(t, r);
  let i = 0;
  for (; r < t.length; r++, i++)
    if (!(t[r].match(/\w/) && i < 20)) {
      if (t[r] === ";")
        break;
      return -1;
    }
  return r;
}
function yt(t, r, i) {
  return {
    err: {
      code: t,
      msg: r,
      line: i.line || i,
      col: i.col
    }
  };
}
function mx(t) {
  return eh(t);
}
function gx(t) {
  return eh(t);
}
function $t(t, r) {
  const i = t.substring(0, r).split(/\r?\n/);
  return {
    line: i.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: i[i.length - 1].length + 1
  };
}
function Bs(t) {
  return t.startIndex + t[1].length;
}
const vx = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(t, r) {
    return r;
  },
  attributeValueProcessor: function(t, r) {
    return r;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(t, r, i) {
    return t;
  }
  // skipEmptyListItem: false
}, yx = function(t) {
  return Object.assign({}, vx, t);
};
class Us {
  constructor(r) {
    this.tagname = r, this.child = [], this[":@"] = {};
  }
  add(r, i) {
    r === "__proto__" && (r = "#__proto__"), this.child.push({ [r]: i });
  }
  addChild(r) {
    r.tagname === "__proto__" && (r.tagname = "#__proto__"), r[":@"] && Object.keys(r[":@"]).length > 0 ? this.child.push({ [r.tagname]: r.child, ":@": r[":@"] }) : this.child.push({ [r.tagname]: r.child });
  }
}
function bx(t, r) {
  const i = {};
  if (t[r + 3] === "O" && t[r + 4] === "C" && t[r + 5] === "T" && t[r + 6] === "Y" && t[r + 7] === "P" && t[r + 8] === "E") {
    r = r + 9;
    let s = 1, o = !1, u = !1, f = "";
    for (; r < t.length; r++)
      if (t[r] === "<" && !u) {
        if (o && xx(t, r)) {
          r += 7;
          let p, h;
          [p, h, r] = _x(t, r + 1), h.indexOf("&") === -1 && (i[Ax(p)] = {
            regx: RegExp(`&${p};`, "g"),
            val: h
          });
        } else if (o && Ex(t, r)) r += 8;
        else if (o && Cx(t, r)) r += 8;
        else if (o && wx(t, r)) r += 9;
        else if (Sx) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, f = "";
      } else if (t[r] === ">") {
        if (u ? t[r - 1] === "-" && t[r - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else t[r] === "[" ? o = !0 : f += t[r];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: i, i: r };
}
function _x(t, r) {
  let i = "";
  for (; r < t.length && t[r] !== "'" && t[r] !== '"'; r++)
    i += t[r];
  if (i = i.trim(), i.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = t[r++];
  let o = "";
  for (; r < t.length && t[r] !== s; r++)
    o += t[r];
  return [i, o, r];
}
function Sx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "-" && t[r + 3] === "-";
}
function xx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "N" && t[r + 4] === "T" && t[r + 5] === "I" && t[r + 6] === "T" && t[r + 7] === "Y";
}
function Ex(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "E" && t[r + 3] === "L" && t[r + 4] === "E" && t[r + 5] === "M" && t[r + 6] === "E" && t[r + 7] === "N" && t[r + 8] === "T";
}
function Cx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "A" && t[r + 3] === "T" && t[r + 4] === "T" && t[r + 5] === "L" && t[r + 6] === "I" && t[r + 7] === "S" && t[r + 8] === "T";
}
function wx(t, r) {
  return t[r + 1] === "!" && t[r + 2] === "N" && t[r + 3] === "O" && t[r + 4] === "T" && t[r + 5] === "A" && t[r + 6] === "T" && t[r + 7] === "I" && t[r + 8] === "O" && t[r + 9] === "N";
}
function Ax(t) {
  if (eh(t))
    return t;
  throw new Error(`Invalid entity name ${t}`);
}
const Nx = /^[-+]?0x[a-fA-F0-9]+$/, Tx = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, Ox = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function kx(t, r = {}) {
  if (r = Object.assign({}, Ox, r), !t || typeof t != "string") return t;
  let i = t.trim();
  if (r.skipLike !== void 0 && r.skipLike.test(i)) return t;
  if (t === "0") return 0;
  if (r.hex && Nx.test(i))
    return Mx(i, 16);
  if (i.search(/[eE]/) !== -1) {
    const s = i.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (r.leadingZeros)
        i = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return t;
      return r.eNotation ? Number(i) : t;
    } else
      return t;
  } else {
    const s = Tx.exec(i);
    if (s) {
      const o = s[1], u = s[2];
      let f = Dx(s[3]);
      if (!r.leadingZeros && u.length > 0 && o && i[2] !== ".") return t;
      if (!r.leadingZeros && u.length > 0 && !o && i[1] !== ".") return t;
      if (r.leadingZeros && u === t) return 0;
      {
        const p = Number(i), h = "" + p;
        return h.search(/[eE]/) !== -1 ? r.eNotation ? p : t : i.indexOf(".") !== -1 ? h === "0" && f === "" || h === f || o && h === "-" + f ? p : t : u ? f === h || o + f === h ? p : t : i === h || i === o + h ? p : t;
      }
    } else
      return t;
  }
}
function Dx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Mx(t, r) {
  if (parseInt) return parseInt(t, r);
  if (Number.parseInt) return Number.parseInt(t, r);
  if (window && window.parseInt) return window.parseInt(t, r);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function jx(t) {
  return typeof t == "function" ? t : Array.isArray(t) ? (r) => {
    for (const i of t)
      if (typeof i == "string" && r === i || i instanceof RegExp && i.test(r))
        return !0;
  } : () => !1;
}
class Rx {
  constructor(r) {
    this.options = r, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (i, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = zx, this.parseXml = Ux, this.parseTextData = Lx, this.resolveNameSpace = Ix, this.buildAttributesMap = Bx, this.isItStopNode = Zx, this.replaceEntitiesValue = qx, this.readStopNodeData = Vx, this.saveTextToParentTag = Fx, this.addChild = Hx, this.ignoreAttributesFn = jx(this.options.ignoreAttributes);
  }
}
function zx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: t[s]
    };
  }
}
function Lx(t, r, i, s, o, u, f) {
  if (t !== void 0 && (this.options.trimValues && !s && (t = t.trim()), t.length > 0)) {
    f || (t = this.replaceEntitiesValue(t));
    const p = this.options.tagValueProcessor(r, t, i, o, u);
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Md(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Md(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
  }
}
function Ix(t) {
  if (this.options.removeNSPrefix) {
    const r = t.split(":"), i = t.charAt(0) === "/" ? "/" : "";
    if (r[0] === "xmlns")
      return "";
    r.length === 2 && (t = i + r[1]);
  }
  return t;
}
const Px = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function Bx(t, r, i) {
  if (this.options.ignoreAttributes !== !0 && typeof t == "string") {
    const s = D0(t, Px), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], g = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (g = this.options.transformAttributeName(g)), g === "__proto__" && (g = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const b = this.options.attributeValueProcessor(p, h, r);
          b == null ? u[g] = h : typeof b != typeof h || b !== h ? u[g] = b : u[g] = Md(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[g] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const f = {};
      return f[this.options.attributesGroupName] = u, f;
    }
    return u;
  }
}
const Ux = function(t) {
  t = t.replace(/\r\n?/g, `
`);
  const r = new Us("!xml");
  let i = r, s = "", o = "";
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<")
      if (t[u + 1] === "/") {
        const p = Ma(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const g = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let b = 0;
        g && this.options.unpairedTags.indexOf(g) !== -1 ? (b = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : b = o.lastIndexOf("."), o = o.substring(0, b), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Dd(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Us(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Ma(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = bx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Ma(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let g = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        g == null && (g = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, g), u = p + 2;
      } else {
        let p = Dd(t, u, this.options.removeNSPrefix), h = p.tagName;
        const g = p.rawTagName;
        let b = p.tagExp, _ = p.attrExpPresent, m = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const v = i;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (b.length > 0 && b.lastIndexOf("/") === b.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), b = h) : b = b.substr(0, b.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const C = this.readStopNodeData(t, g, m + 1);
            if (!C) throw new Error(`Unexpected end of ${g}`);
            u = C.i, d = C.tagContent;
          }
          const x = new Us(h);
          h !== b && _ && (x[":@"] = this.buildAttributesMap(b, o, h)), d && (d = this.parseTextData(d, h, o, !0, _, !0, !0)), o = o.substr(0, o.lastIndexOf(".")), x.add(this.options.textNodeName, d), this.addChild(i, x, o);
        } else {
          if (b.length > 0 && b.lastIndexOf("/") === b.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), b = h) : b = b.substr(0, b.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Us(h);
            h !== b && _ && (d[":@"] = this.buildAttributesMap(b, o, h)), this.addChild(i, d, o), o = o.substr(0, o.lastIndexOf("."));
          } else {
            const d = new Us(h);
            this.tagsNodeStack.push(i), h !== b && _ && (d[":@"] = this.buildAttributesMap(b, o, h)), this.addChild(i, d, o), i = d;
          }
          s = "", u = m;
        }
      }
    else
      s += t[u];
  return r.child;
};
function Hx(t, r, i) {
  const s = this.options.updateTag(r.tagname, i, r[":@"]);
  s === !1 || (typeof s == "string" && (r.tagname = s), t.addChild(r));
}
const qx = function(t) {
  if (this.options.processEntities) {
    for (let r in this.docTypeEntities) {
      const i = this.docTypeEntities[r];
      t = t.replace(i.regx, i.val);
    }
    for (let r in this.lastEntities) {
      const i = this.lastEntities[r];
      t = t.replace(i.regex, i.val);
    }
    if (this.options.htmlEntities)
      for (let r in this.htmlEntities) {
        const i = this.htmlEntities[r];
        t = t.replace(i.regex, i.val);
      }
    t = t.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return t;
};
function Fx(t, r, i, s) {
  return t && (s === void 0 && (s = r.child.length === 0), t = this.parseTextData(
    t,
    r.tagname,
    i,
    !1,
    r[":@"] ? Object.keys(r[":@"]).length !== 0 : !1,
    s
  ), t !== void 0 && t !== "" && r.add(this.options.textNodeName, t), t = ""), t;
}
function Zx(t, r, i) {
  const s = "*." + i;
  for (const o in t) {
    const u = t[o];
    if (s === u || r === u) return !0;
  }
  return !1;
}
function Gx(t, r, i = ">") {
  let s, o = "";
  for (let u = r; u < t.length; u++) {
    let f = t[u];
    if (s)
      f === s && (s = "");
    else if (f === '"' || f === "'")
      s = f;
    else if (f === i[0])
      if (i[1]) {
        if (t[u + 1] === i[1])
          return {
            data: o,
            index: u
          };
      } else
        return {
          data: o,
          index: u
        };
    else f === "	" && (f = " ");
    o += f;
  }
}
function Ma(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Dd(t, r, i, s = ">") {
  const o = Gx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, g = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const b = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), g = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: g,
    rawTagName: b
  };
}
function Vx(t, r, i) {
  const s = i;
  let o = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = Ma(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, i),
            i: u
          };
        i = u;
      } else if (t[i + 1] === "?")
        i = Ma(t, "?>", i + 1, "StopNode is not closed.");
      else if (t.substr(i + 1, 3) === "!--")
        i = Ma(t, "-->", i + 3, "StopNode is not closed.");
      else if (t.substr(i + 1, 2) === "![")
        i = Ma(t, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = Dd(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Md(t, r, i) {
  if (r && typeof t == "string") {
    const s = t.trim();
    return s === "true" ? !0 : s === "false" ? !1 : kx(t, i);
  } else
    return lx(t) ? t : "";
}
function Yx(t, r) {
  return j0(t, r);
}
function j0(t, r, i) {
  let s;
  const o = {};
  for (let u = 0; u < t.length; u++) {
    const f = t[u], p = Xx(f);
    let h = "";
    if (i === void 0 ? h = p : h = i + "." + p, p === r.textNodeName)
      s === void 0 ? s = f[p] : s += "" + f[p];
    else {
      if (p === void 0)
        continue;
      if (f[p]) {
        let g = j0(f[p], r, h);
        const b = Qx(g, r);
        f[":@"] ? $x(g, f[":@"], h, r) : Object.keys(g).length === 1 && g[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? g = g[r.textNodeName] : Object.keys(g).length === 0 && (r.alwaysCreateTextNode ? g[r.textNodeName] = "" : g = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(g)) : r.isArray(p, h, b) ? o[p] = [g] : o[p] = g;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (o[r.textNodeName] = s) : s !== void 0 && (o[r.textNodeName] = s), o;
}
function Xx(t) {
  const r = Object.keys(t);
  for (let i = 0; i < r.length; i++) {
    const s = r[i];
    if (s !== ":@") return s;
  }
}
function $x(t, r, i, s) {
  if (r) {
    const o = Object.keys(r), u = o.length;
    for (let f = 0; f < u; f++) {
      const p = o[f];
      s.isArray(p, i + "." + p, !0, !0) ? t[p] = [r[p]] : t[p] = r[p];
    }
  }
}
function Qx(t, r) {
  const { textNodeName: i } = r, s = Object.keys(t).length;
  return !!(s === 0 || s === 1 && (t[i] || typeof t[i] == "boolean" || t[i] === 0));
}
class Jx {
  constructor(r) {
    this.externalEntities = {}, this.options = yx(r);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(r, i) {
    if (typeof r != "string") if (r.toString)
      r = r.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (i) {
      i === !0 && (i = {});
      const u = M0(r, i);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new Rx(this.options);
    s.addExternalEntities(this.externalEntities);
    const o = s.parseXml(r);
    return this.options.preserveOrder || o === void 0 ? o : Yx(o, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(r, i) {
    if (i.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (r.indexOf("&") !== -1 || r.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (i === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[r] = i;
  }
}
const Kx = {
  validate: M0
}, Wx = new Jx({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
});
function jd(t, r) {
  if (!(!r || !t || !r.properties))
    for (const i in r.properties) {
      if (!t.hasOwnProperty(i)) continue;
      const s = r.properties[i];
      let o = t[i];
      s.type === "array" && !Array.isArray(o) && (o = [o], t[i] = o), s.type === "object" && typeof o == "object" && o !== null ? jd(o, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(o) && o.forEach((u) => jd(u, s.items)), s.type === "string" && typeof o != "string" ? t[i] = String(o) : s.type === "array" && s.items?.type === "string" && Array.isArray(o) && (t[i] = o.map(String));
    }
}
function R0(t, r, i = {}) {
  const s = /```(?:\w+\n|\n)?([\s\S]*?)```/, o = t.match(s);
  let u = o ? o[1].trim() : t.trim();
  try {
    switch (r) {
      case "xml":
        if (i.schema) {
          const h = Kx.validate(u);
          if (h !== !0)
            throw new Error(`Model response is not valid XML: ${h.err.msg}`);
        }
        let f = Wx.parse(u);
        if (f.root)
          f = f.root;
        else if (f.response)
          return f.response;
        return i.schema && jd(f, i.schema), f;
      case "json":
        return JSON.parse(u);
      case "none":
        return u;
      default:
        throw new Error(`Unsupported format specified: ${r}`);
    }
  } catch (f) {
    if (r !== "none" && !i.schema) {
      const p = u.match(/<response>([\s\S]*)/);
      if (p) return p[1];
      const h = u.match(/"response":\s*"([\s\S]*)/);
      return h ? h[1].replace(/"\s*}\s*$/, "") : u;
    }
    throw console.error(`Error parsing response in format '${r}':`, f), console.error("Raw content received:", t), r === "xml" ? f.message.startsWith("Model response is not valid XML:") ? f : new Error(`Model response is not valid XML: ${f.message}`) : r === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${r}: ${f.message}`);
  }
}
function Rv(t, r) {
  const i = t.trim();
  switch (r) {
    case "xml":
      return `<response>${i}`;
    case "json":
      return `{
  "response": "${i.replace(/"/g, '\\"')}`;
    // Basic escaping
    case "none":
      return i;
    default:
      throw new Error(`Unsupported format specified: ${r}`);
  }
}
var To = { exports: {} }, Oo = { exports: {} }, Fn = {}, an = {}, zv;
function ln() {
  if (zv) return an;
  zv = 1, an.__esModule = !0, an.extend = o, an.indexOf = h, an.escapeExpression = g, an.isEmpty = b, an.createFrame = _, an.blockParams = m, an.appendContextPath = v;
  var t = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, r = /[&<>"'`=]/g, i = /[&<>"'`=]/;
  function s(d) {
    return t[d];
  }
  function o(d) {
    for (var x = 1; x < arguments.length; x++)
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (d[C] = arguments[x][C]);
    return d;
  }
  var u = Object.prototype.toString;
  an.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (an.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), an.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  an.isArray = p;
  function h(d, x) {
    for (var C = 0, T = d.length; C < T; C++)
      if (d[C] === x)
        return C;
    return -1;
  }
  function g(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return i.test(d) ? d.replace(r, s) : d;
  }
  function b(d) {
    return !d && d !== 0 ? !0 : !!(p(d) && d.length === 0);
  }
  function _(d) {
    var x = o({}, d);
    return x._parent = d, x;
  }
  function m(d, x) {
    return d.path = x, d;
  }
  function v(d, x) {
    return (d ? d + "." : "") + x;
  }
  return an;
}
var ko = { exports: {} }, Lv;
function Vn() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, g = void 0, b = void 0;
      f && (p = f.start.line, h = f.end.line, g = f.start.column, b = f.end.column, o += " - " + p + ":" + g);
      for (var _ = Error.prototype.constructor.call(this, o), m = 0; m < i.length; m++)
        this[i[m]] = _[i[m]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: g,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: b,
          enumerable: !0
        })) : (this.column = g, this.endColumn = b));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Hs = {}, Do = { exports: {} }, Iv;
function eE() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln();
    r.default = function(s) {
      s.registerHelper("blockHelperMissing", function(o, u) {
        var f = u.inverse, p = u.fn;
        if (o === !0)
          return p(this);
        if (o === !1 || o == null)
          return f(this);
        if (i.isArray(o))
          return o.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(o, u)) : f(this);
        if (u.data && u.ids) {
          var h = i.createFrame(u.data);
          h.contextPath = i.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return p(o, u);
      });
    }, t.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var Mo = { exports: {} }, Pv;
function tE() {
  return Pv || (Pv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), o = Vn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var g = h.fn, b = h.inverse, _ = 0, m = "", v = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (v = s.createFrame(h.data));
        function x(E, N, D) {
          v && (v.key = E, v.index = N, v.first = N === 0, v.last = !!D, d && (v.contextPath = d + E)), m = m + g(p[E], {
            data: v,
            blockParams: s.blockParams([p[E], E], [d + E, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var C = p.length; _ < C; _++)
              _ in p && x(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], w = p[Symbol.iterator](), O = w.next(); !O.done; O = w.next())
              T.push(O.value);
            p = T;
            for (var C = p.length; _ < C; _++)
              x(_, _, _ === p.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(p).forEach(function(N) {
                E !== void 0 && x(E, _ - 1), E = N, _++;
              }), E !== void 0 && x(E, _ - 1, !0);
            })();
        return _ === 0 && (m = b(this)), m;
      });
    }, t.exports = r.default;
  })(Mo, Mo.exports)), Mo.exports;
}
var jo = { exports: {} }, Bv;
function nE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Vn(), o = i(s);
    r.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new o.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, t.exports = r.default;
  })(jo, jo.exports)), jo.exports;
}
var Ro = { exports: {} }, Uv;
function rE() {
  return Uv || (Uv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), o = Vn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("if", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(p) && (p = p.call(this)), !h.hash.includeZero && !p || s.isEmpty(p) ? h.inverse(this) : h.fn(this);
      }), f.registerHelper("unless", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return f.helpers.if.call(this, p, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, t.exports = r.default;
  })(Ro, Ro.exports)), Ro.exports;
}
var zo = { exports: {} }, Hv;
function aE() {
  return Hv || (Hv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("log", function() {
        for (var s = [void 0], o = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var f = 1;
        o.hash.level != null ? f = o.hash.level : o.data && o.data.level != null && (f = o.data.level), s[0] = f, i.log.apply(i, s);
      });
    }, t.exports = r.default;
  })(zo, zo.exports)), zo.exports;
}
var Lo = { exports: {} }, qv;
function iE() {
  return qv || (qv = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      i.registerHelper("lookup", function(s, o, u) {
        return s && u.lookupProperty(s, o);
      });
    }, t.exports = r.default;
  })(Lo, Lo.exports)), Lo.exports;
}
var Io = { exports: {} }, Fv;
function sE() {
  return Fv || (Fv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = ln(), o = Vn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var g = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var b = h.data;
        return h.data && h.ids && (b = s.createFrame(h.data), b.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), g(p, {
          data: b,
          blockParams: s.blockParams([p], [b && b.contextPath])
        });
      });
    }, t.exports = r.default;
  })(Io, Io.exports)), Io.exports;
}
var Zv;
function z0() {
  if (Zv) return Hs;
  Zv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = x, Hs.moveHelperToHooks = C;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = eE(), i = t(r), s = tE(), o = t(s), u = nE(), f = t(u), p = rE(), h = t(p), g = aE(), b = t(g), _ = iE(), m = t(_), v = sE(), d = t(v);
  function x(T) {
    i.default(T), o.default(T), f.default(T), h.default(T), b.default(T), m.default(T), d.default(T);
  }
  function C(T, w, O) {
    T.helpers[w] && (T.hooks[w] = T.helpers[w], O || delete T.helpers[w]);
  }
  return Hs;
}
var Po = {}, Bo = { exports: {} }, Gv;
function lE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(g, b) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var m = o(g, b);
          return f.partials = _, m;
        }), u.partials[p.args[0]] = p.fn, h;
      });
    }, t.exports = r.default;
  })(Bo, Bo.exports)), Bo.exports;
}
var Vv;
function oE() {
  if (Vv) return Po;
  Vv = 1, Po.__esModule = !0, Po.registerDefaultDecorators = s;
  function t(o) {
    return o && o.__esModule ? o : { default: o };
  }
  var r = lE(), i = t(r);
  function s(o) {
    i.default(o);
  }
  return Po;
}
var Uo = { exports: {} }, Yv;
function L0() {
  return Yv || (Yv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var f = i.indexOf(s.methodMap, u.toLowerCase());
          f >= 0 ? u = f : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var f = s.methodMap[u];
          console[f] || (f = "log");
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), g = 1; g < p; g++)
            h[g - 1] = arguments[g];
          console[f].apply(console, h);
        }
      }
    };
    r.default = s, t.exports = r.default;
  })(Uo, Uo.exports)), Uo.exports;
}
var Ni = {}, Ho = {}, Xv;
function uE() {
  if (Xv) return Ho;
  Xv = 1, Ho.__esModule = !0, Ho.createNewLookupObject = r;
  var t = ln();
  function r() {
    for (var i = arguments.length, s = Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return t.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return Ho;
}
var $v;
function I0() {
  if ($v) return Ni;
  $v = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = g;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = uE(), i = L0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(b) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var m = /* @__PURE__ */ Object.create(null);
    return m.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(m, b.allowedProtoProperties),
        defaultValue: b.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, b.allowedProtoMethods),
        defaultValue: b.allowProtoMethodsByDefault
      }
    };
  }
  function f(b, _, m) {
    return p(typeof b == "function" ? _.methods : _.properties, m);
  }
  function p(b, _) {
    return b.whitelist[_] !== void 0 ? b.whitelist[_] === !0 : b.defaultValue !== void 0 ? b.defaultValue : (h(_), !1);
  }
  function h(b) {
    o[b] !== !0 && (o[b] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + b + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function g() {
    Object.keys(o).forEach(function(b) {
      delete o[b];
    });
  }
  return Ni;
}
var Qv;
function th() {
  if (Qv) return Fn;
  Qv = 1, Fn.__esModule = !0, Fn.HandlebarsEnvironment = d;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var r = ln(), i = Vn(), s = t(i), o = z0(), u = oE(), f = L0(), p = t(f), h = I0(), g = "4.7.8";
  Fn.VERSION = g;
  var b = 8;
  Fn.COMPILER_REVISION = b;
  var _ = 7;
  Fn.LAST_COMPATIBLE_COMPILER_REVISION = _;
  var m = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  Fn.REVISION_CHANGES = m;
  var v = "[object Object]";
  function d(C, T, w) {
    this.helpers = C || {}, this.partials = T || {}, this.decorators = w || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, w) {
      if (r.toString.call(T) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = w;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, w) {
      if (r.toString.call(T) === v)
        r.extend(this.partials, T);
      else {
        if (typeof w > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = w;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, w) {
      if (r.toString.call(T) === v) {
        if (w)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = w;
    },
    unregisterDecorator: function(T) {
      delete this.decorators[T];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      h.resetLoggedProperties();
    }
  };
  var x = p.default.log;
  return Fn.log = x, Fn.createFrame = r.createFrame, Fn.logger = p.default, Fn;
}
var qo = { exports: {} }, Jv;
function cE() {
  return Jv || (Jv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(s) {
      this.string = s;
    }
    i.prototype.toString = i.prototype.toHTML = function() {
      return "" + this.string;
    }, r.default = i, t.exports = r.default;
  })(qo, qo.exports)), qo.exports;
}
var _r = {}, Fo = {}, Kv;
function fE() {
  if (Kv) return Fo;
  Kv = 1, Fo.__esModule = !0, Fo.wrapHelper = t;
  function t(r, i) {
    if (typeof r != "function")
      return r;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = i(u), r.apply(this, arguments);
    };
    return s;
  }
  return Fo;
}
var Wv;
function dE() {
  if (Wv) return _r;
  Wv = 1, _r.__esModule = !0, _r.checkRevision = b, _r.template = _, _r.wrapProgram = m, _r.resolvePartial = v, _r.invokePartial = d, _r.noop = x;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function r(E) {
    if (E && E.__esModule)
      return E;
    var N = {};
    if (E != null)
      for (var D in E)
        Object.prototype.hasOwnProperty.call(E, D) && (N[D] = E[D]);
    return N.default = E, N;
  }
  var i = ln(), s = r(i), o = Vn(), u = t(o), f = th(), p = z0(), h = fE(), g = I0();
  function b(E) {
    var N = E && E[0] || 1, D = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var M = f.REVISION_CHANGES[D], U = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + M + ") or downgrade your runtime to an older version (" + U + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function _(E, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, N.VM.checkRevision(E.compiler);
    var D = E.compiler && E.compiler[0] === 7;
    function M(I, X, V) {
      V.hash && (X = s.extend({}, X, V.hash), V.ids && (V.ids[0] = !0)), I = N.VM.resolvePartial.call(this, I, X, V);
      var ue = s.extend({}, V, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), ie = N.VM.invokePartial.call(this, I, X, ue);
      if (ie == null && N.compile && (V.partials[V.name] = N.compile(I, E.compilerOptions, N), ie = V.partials[V.name](X, ue)), ie != null) {
        if (V.indent) {
          for (var de = ie.split(`
`), B = 0, re = de.length; B < re && !(!de[B] && B + 1 === re); B++)
            de[B] = V.indent + de[B];
          ie = de.join(`
`);
        }
        return ie;
      } else
        throw new u.default("The partial " + V.name + " could not be compiled when running in runtime-only mode");
    }
    var U = {
      strict: function(X, V, ue) {
        if (!X || !(V in X))
          throw new u.default('"' + V + '" not defined in ' + X, {
            loc: ue
          });
        return U.lookupProperty(X, V);
      },
      lookupProperty: function(X, V) {
        var ue = X[V];
        if (ue == null || Object.prototype.hasOwnProperty.call(X, V) || g.resultIsAllowed(ue, U.protoAccessControl, V))
          return ue;
      },
      lookup: function(X, V) {
        for (var ue = X.length, ie = 0; ie < ue; ie++) {
          var de = X[ie] && U.lookupProperty(X[ie], V);
          if (de != null)
            return X[ie][V];
        }
      },
      lambda: function(X, V) {
        return typeof X == "function" ? X.call(V) : X;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: M,
      fn: function(X) {
        var V = E[X];
        return V.decorator = E[X + "_d"], V;
      },
      programs: [],
      program: function(X, V, ue, ie, de) {
        var B = this.programs[X], re = this.fn(X);
        return V || de || ie || ue ? B = m(this, X, re, V, ue, ie, de) : B || (B = this.programs[X] = m(this, X, re)), B;
      },
      data: function(X, V) {
        for (; X && V--; )
          X = X._parent;
        return X;
      },
      mergeIfNeeded: function(X, V) {
        var ue = X || V;
        return X && V && X !== V && (ue = s.extend({}, V, X)), ue;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: E.compiler
    };
    function F(I) {
      var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], V = X.data;
      F._setup(X), !X.partial && E.useData && (V = C(I, V));
      var ue = void 0, ie = E.useBlockParams ? [] : void 0;
      E.useDepths && (X.depths ? ue = I != X.depths[0] ? [I].concat(X.depths) : X.depths : ue = [I]);
      function de(B) {
        return "" + E.main(U, B, U.helpers, U.partials, V, ie, ue);
      }
      return de = T(E.main, de, U, X.depths || [], V, ie), de(I, X);
    }
    return F.isTop = !0, F._setup = function(I) {
      if (I.partial)
        U.protoAccessControl = I.protoAccessControl, U.helpers = I.helpers, U.partials = I.partials, U.decorators = I.decorators, U.hooks = I.hooks;
      else {
        var X = s.extend({}, N.helpers, I.helpers);
        w(X, U), U.helpers = X, E.usePartial && (U.partials = U.mergeIfNeeded(I.partials, N.partials)), (E.usePartial || E.useDecorators) && (U.decorators = s.extend({}, N.decorators, I.decorators)), U.hooks = {}, U.protoAccessControl = g.createProtoAccessControl(I);
        var V = I.allowCallsToHelperMissing || D;
        p.moveHelperToHooks(U, "helperMissing", V), p.moveHelperToHooks(U, "blockHelperMissing", V);
      }
    }, F._child = function(I, X, V, ue) {
      if (E.useBlockParams && !V)
        throw new u.default("must pass block params");
      if (E.useDepths && !ue)
        throw new u.default("must pass parent depths");
      return m(U, I, E[I], X, 0, V, ue);
    }, F;
  }
  function m(E, N, D, M, U, F, I) {
    function X(V) {
      var ue = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], ie = I;
      return I && V != I[0] && !(V === E.nullContext && I[0] === null) && (ie = [V].concat(I)), D(E, V, E.helpers, E.partials, ue.data || M, F && [ue.blockParams].concat(F), ie);
    }
    return X = T(D, X, E, I, M, F), X.program = N, X.depth = I ? I.length : 0, X.blockParams = U || 0, X;
  }
  function v(E, N, D) {
    return E ? !E.call && !D.name && (D.name = E, E = D.partials[E]) : D.name === "@partial-block" ? E = D.data["partial-block"] : E = D.partials[D.name], E;
  }
  function d(E, N, D) {
    var M = D.data && D.data["partial-block"];
    D.partial = !0, D.ids && (D.data.contextPath = D.ids[0] || D.data.contextPath);
    var U = void 0;
    if (D.fn && D.fn !== x && (function() {
      D.data = f.createFrame(D.data);
      var F = D.fn;
      U = D.data["partial-block"] = function(X) {
        var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return V.data = f.createFrame(V.data), V.data["partial-block"] = M, F(X, V);
      }, F.partials && (D.partials = s.extend({}, D.partials, F.partials));
    })(), E === void 0 && U && (E = U), E === void 0)
      throw new u.default("The partial " + D.name + " could not be found");
    if (E instanceof Function)
      return E(N, D);
  }
  function x() {
    return "";
  }
  function C(E, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = E), N;
  }
  function T(E, N, D, M, U, F) {
    if (E.decorator) {
      var I = {};
      N = E.decorator(N, I, D, M && M[0], U, F, M), s.extend(N, I);
    }
    return N;
  }
  function w(E, N) {
    Object.keys(E).forEach(function(D) {
      var M = E[D];
      E[D] = O(M, N);
    });
  }
  function O(E, N) {
    var D = N.lookupProperty;
    return h.wrapHelper(E, function(M) {
      return s.extend({ lookupProperty: D }, M);
    });
  }
  return _r;
}
var Zo = { exports: {} }, ey;
function P0() {
  return ey || (ey = 1, (function(t, r) {
    r.__esModule = !0, r.default = function(i) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      i.noConflict = function() {
        return globalThis.Handlebars === i && (globalThis.Handlebars = s), i;
      };
    }, t.exports = r.default;
  })(Zo, Zo.exports)), Zo.exports;
}
var ty;
function hE() {
  return ty || (ty = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    function s(w) {
      if (w && w.__esModule)
        return w;
      var O = {};
      if (w != null)
        for (var E in w)
          Object.prototype.hasOwnProperty.call(w, E) && (O[E] = w[E]);
      return O.default = w, O;
    }
    var o = th(), u = s(o), f = cE(), p = i(f), h = Vn(), g = i(h), b = ln(), _ = s(b), m = dE(), v = s(m), d = P0(), x = i(d);
    function C() {
      var w = new u.HandlebarsEnvironment();
      return _.extend(w, u), w.SafeString = p.default, w.Exception = g.default, w.Utils = _, w.escapeExpression = _.escapeExpression, w.VM = v, w.template = function(O) {
        return v.template(O, w);
      }, w;
    }
    var T = C();
    T.create = C, x.default(T), T.default = T, r.default = T, t.exports = r.default;
  })(Oo, Oo.exports)), Oo.exports;
}
var Go = { exports: {} }, ny;
function B0() {
  return ny || (ny = 1, (function(t, r) {
    r.__esModule = !0;
    var i = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(o) {
          return o.type === "SubExpression" || (o.type === "MustacheStatement" || o.type === "BlockStatement") && !!(o.params && o.params.length || o.hash);
        },
        scopedId: function(o) {
          return /^\.|this\b/.test(o.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(o) {
          return o.parts.length === 1 && !i.helpers.scopedId(o) && !o.depth;
        }
      }
    };
    r.default = i, t.exports = r.default;
  })(Go, Go.exports)), Go.exports;
}
var Ti = {}, Vo = { exports: {} }, ry;
function pE() {
  return ry || (ry = 1, (function(t, r) {
    r.__esModule = !0;
    var i = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(p, h, g, b, _, m, v) {
          var d = m.length - 1;
          switch (_) {
            case 1:
              return m[d - 1];
            case 2:
              this.$ = b.prepareProgram(m[d]);
              break;
            case 3:
              this.$ = m[d];
              break;
            case 4:
              this.$ = m[d];
              break;
            case 5:
              this.$ = m[d];
              break;
            case 6:
              this.$ = m[d];
              break;
            case 7:
              this.$ = m[d];
              break;
            case 8:
              this.$ = m[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: b.stripComment(m[d]),
                strip: b.stripFlags(m[d], m[d]),
                loc: b.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: m[d],
                value: m[d],
                loc: b.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = b.prepareRawBlock(m[d - 2], m[d - 1], m[d], this._$);
              break;
            case 12:
              this.$ = { path: m[d - 3], params: m[d - 2], hash: m[d - 1] };
              break;
            case 13:
              this.$ = b.prepareBlock(m[d - 3], m[d - 2], m[d - 1], m[d], !1, this._$);
              break;
            case 14:
              this.$ = b.prepareBlock(m[d - 3], m[d - 2], m[d - 1], m[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: m[d - 5], path: m[d - 4], params: m[d - 3], hash: m[d - 2], blockParams: m[d - 1], strip: b.stripFlags(m[d - 5], m[d]) };
              break;
            case 16:
              this.$ = { path: m[d - 4], params: m[d - 3], hash: m[d - 2], blockParams: m[d - 1], strip: b.stripFlags(m[d - 5], m[d]) };
              break;
            case 17:
              this.$ = { path: m[d - 4], params: m[d - 3], hash: m[d - 2], blockParams: m[d - 1], strip: b.stripFlags(m[d - 5], m[d]) };
              break;
            case 18:
              this.$ = { strip: b.stripFlags(m[d - 1], m[d - 1]), program: m[d] };
              break;
            case 19:
              var x = b.prepareBlock(m[d - 2], m[d - 1], m[d], m[d], !1, this._$), C = b.prepareProgram([x], m[d - 1].loc);
              C.chained = !0, this.$ = { strip: m[d - 2].strip, program: C, chain: !0 };
              break;
            case 20:
              this.$ = m[d];
              break;
            case 21:
              this.$ = { path: m[d - 1], strip: b.stripFlags(m[d - 2], m[d]) };
              break;
            case 22:
              this.$ = b.prepareMustache(m[d - 3], m[d - 2], m[d - 1], m[d - 4], b.stripFlags(m[d - 4], m[d]), this._$);
              break;
            case 23:
              this.$ = b.prepareMustache(m[d - 3], m[d - 2], m[d - 1], m[d - 4], b.stripFlags(m[d - 4], m[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: m[d - 3],
                params: m[d - 2],
                hash: m[d - 1],
                indent: "",
                strip: b.stripFlags(m[d - 4], m[d]),
                loc: b.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = b.preparePartialBlock(m[d - 2], m[d - 1], m[d], this._$);
              break;
            case 26:
              this.$ = { path: m[d - 3], params: m[d - 2], hash: m[d - 1], strip: b.stripFlags(m[d - 4], m[d]) };
              break;
            case 27:
              this.$ = m[d];
              break;
            case 28:
              this.$ = m[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: m[d - 3],
                params: m[d - 2],
                hash: m[d - 1],
                loc: b.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: m[d], loc: b.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: b.id(m[d - 2]), value: m[d], loc: b.locInfo(this._$) };
              break;
            case 32:
              this.$ = b.id(m[d - 1]);
              break;
            case 33:
              this.$ = m[d];
              break;
            case 34:
              this.$ = m[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: m[d], original: m[d], loc: b.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(m[d]), original: Number(m[d]), loc: b.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: m[d] === "true", original: m[d] === "true", loc: b.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: b.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: b.locInfo(this._$) };
              break;
            case 40:
              this.$ = m[d];
              break;
            case 41:
              this.$ = m[d];
              break;
            case 42:
              this.$ = b.preparePath(!0, m[d], this._$);
              break;
            case 43:
              this.$ = b.preparePath(!1, m[d], this._$);
              break;
            case 44:
              m[d - 2].push({ part: b.id(m[d]), original: m[d], separator: m[d - 1] }), this.$ = m[d - 2];
              break;
            case 45:
              this.$ = [{ part: b.id(m[d]), original: m[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              m[d - 1].push(m[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              m[d - 1].push(m[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              m[d - 1].push(m[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              m[d - 1].push(m[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              m[d - 1].push(m[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              m[d - 1].push(m[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              m[d - 1].push(m[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              m[d - 1].push(m[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              m[d - 1].push(m[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              m[d - 1].push(m[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              m[d - 1].push(m[d]);
              break;
            case 98:
              this.$ = [m[d]];
              break;
            case 99:
              m[d - 1].push(m[d]);
              break;
            case 100:
              this.$ = [m[d]];
              break;
            case 101:
              m[d - 1].push(m[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, g = [0], b = [null], _ = [], m = this.table, v = "", d = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          _.push(C);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function w() {
            var ue;
            return ue = h.lexer.lex() || 1, typeof ue != "number" && (ue = h.symbols_[ue] || ue), ue;
          }
          for (var O, E, N, D, M = {}, U, F, I, X; ; ) {
            if (E = g[g.length - 1], this.defaultActions[E] ? N = this.defaultActions[E] : ((O === null || typeof O > "u") && (O = w()), N = m[E] && m[E][O]), typeof N > "u" || !N.length || !N[0]) {
              var V = "";
              {
                X = [];
                for (U in m[E]) this.terminals_[U] && U > 2 && X.push("'" + this.terminals_[U] + "'");
                this.lexer.showPosition ? V = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + X.join(", ") + ", got '" + (this.terminals_[O] || O) + "'" : V = "Parse error on line " + (d + 1) + ": Unexpected " + (O == 1 ? "end of input" : "'" + (this.terminals_[O] || O) + "'"), this.parseError(V, { text: this.lexer.match, token: this.terminals_[O] || O, line: this.lexer.yylineno, loc: C, expected: X });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + O);
            switch (N[0]) {
              case 1:
                g.push(O), b.push(this.lexer.yytext), _.push(this.lexer.yylloc), g.push(N[1]), O = null, x = this.lexer.yyleng, v = this.lexer.yytext, d = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (F = this.productions_[N[1]][1], M.$ = b[b.length - F], M._$ = { first_line: _[_.length - (F || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (F || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (M._$.range = [_[_.length - (F || 1)].range[0], _[_.length - 1].range[1]]), D = this.performAction.call(M, v, x, d, this.yy, N[1], b, _), typeof D < "u")
                  return D;
                F && (g = g.slice(0, -1 * F * 2), b = b.slice(0, -1 * F), _ = _.slice(0, -1 * F)), g.push(this.productions_[N[1]][0]), b.push(M.$), _.push(M._$), I = m[g[g.length - 2]][g[g.length - 1]], g.push(I);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, o = (function() {
        var f = {
          EOF: 1,
          parseError: function(h, g) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, g);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var g = h.match(/(?:\r\n?|\n).*/g);
            return g ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var g = h.length, b = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - g - 1), this.offset -= g;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
            var m = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: b ? (b.length === _.length ? this.yylloc.first_column : 0) + _[_.length - b.length].length - b[0].length : this.yylloc.first_column - g
            }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - g]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(h) {
            this.unput(this.match.slice(h));
          },
          pastInput: function() {
            var h = this.matched.substr(0, this.matched.length - this.match.length);
            return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var h = this.match;
            return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var h = this.pastInput(), g = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + g + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, g, b, _, m;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), d = 0; d < v.length && (b = this._input.match(this.rules[v[d]]), !(b && (!g || b[0].length > g[0].length) && (g = b, _ = d, !this.options.flex))); d++)
              ;
            return g ? (m = g[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + g[0].length
            }, this.yytext += g[0], this.match += g[0], this.matches = g, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(g[0].length), this.matched += g[0], h = this.performAction.call(this, this.yy, this, v[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var h = this.next();
            return typeof h < "u" ? h : this.lex();
          },
          begin: function(h) {
            this.conditionStack.push(h);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(h) {
            this.begin(h);
          }
        };
        return f.options = {}, f.performAction = function(h, g, b, _) {
          function m(v, d) {
            return g.yytext = g.yytext.substring(v, g.yyleng - d + v);
          }
          switch (b) {
            case 0:
              if (g.yytext.slice(-2) === "\\\\" ? (m(0, 1), this.begin("mu")) : g.yytext.slice(-1) === "\\" ? (m(0, 1), this.begin("emu")) : this.begin("mu"), g.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (m(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(g.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return g.yytext = m(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return g.yytext = m(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return g.yytext = g.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, f.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], f.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, f;
      })();
      s.lexer = o;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    r.default = i, t.exports = r.default;
  })(Vo, Vo.exports)), Vo.exports;
}
var Yo = { exports: {} }, Xo = { exports: {} }, ay;
function U0() {
  return ay || (ay = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = Vn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(b, _) {
        var m = this.accept(b[_]);
        if (this.mutating) {
          if (m && !u.prototype[m.type])
            throw new o.default('Unexpected node type "' + m.type + '" found when accepting ' + _ + " on " + b.type);
          b[_] = m;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(b, _) {
        if (this.acceptKey(b, _), !b[_])
          throw new o.default(b.type + " requires " + _);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(b) {
        for (var _ = 0, m = b.length; _ < m; _++)
          this.acceptKey(b, _), b[_] || (b.splice(_, 1), _--, m--);
      },
      accept: function(b) {
        if (b) {
          if (!this[b.type])
            throw new o.default("Unknown type: " + b.type, b);
          this.current && this.parents.unshift(this.current), this.current = b;
          var _ = this[b.type](b);
          if (this.current = this.parents.shift(), !this.mutating || _)
            return _;
          if (_ !== !1)
            return b;
        }
      },
      Program: function(b) {
        this.acceptArray(b.body);
      },
      MustacheStatement: f,
      Decorator: f,
      BlockStatement: p,
      DecoratorBlock: p,
      PartialStatement: h,
      PartialBlockStatement: function(b) {
        h.call(this, b), this.acceptKey(b, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: f,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(b) {
        this.acceptArray(b.pairs);
      },
      HashPair: function(b) {
        this.acceptRequired(b, "value");
      }
    };
    function f(g) {
      this.acceptRequired(g, "path"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    function p(g) {
      f.call(this, g), this.acceptKey(g, "program"), this.acceptKey(g, "inverse");
    }
    function h(g) {
      this.acceptRequired(g, "name"), this.acceptArray(g.params), this.acceptKey(g, "hash");
    }
    r.default = u, t.exports = r.default;
  })(Xo, Xo.exports)), Xo.exports;
}
var iy;
function mE() {
  return iy || (iy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = U0(), o = i(s);
    function u() {
      var b = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = b;
    }
    u.prototype = new o.default(), u.prototype.Program = function(b) {
      var _ = !this.options.ignoreStandalone, m = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = b.body, d = 0, x = v.length; d < x; d++) {
        var C = v[d], T = this.accept(C);
        if (T) {
          var w = f(v, d, m), O = p(v, d, m), E = T.openStandalone && w, N = T.closeStandalone && O, D = T.inlineStandalone && w && O;
          T.close && h(v, d, !0), T.open && g(v, d, !0), _ && D && (h(v, d), g(v, d) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(v[d - 1].original)[1])), _ && E && (h((C.program || C.inverse).body), g(v, d)), _ && N && (h(v, d), g((C.inverse || C.program).body));
        }
      }
      return b;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(b) {
      this.accept(b.program), this.accept(b.inverse);
      var _ = b.program || b.inverse, m = b.program && b.inverse, v = m, d = m;
      if (m && m.chained)
        for (v = m.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: b.openStrip.open,
        close: b.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((v || _).body)
      };
      if (b.openStrip.close && h(_.body, null, !0), m) {
        var C = b.inverseStrip;
        C.open && g(_.body, null, !0), C.close && h(v.body, null, !0), b.closeStrip.open && g(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(v.body) && (g(_.body), h(v.body));
      } else b.closeStrip.open && g(_.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(b) {
      return b.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(b) {
      var _ = b.strip || {};
      return {
        inlineStandalone: !0,
        open: _.open,
        close: _.close
      };
    };
    function f(b, _, m) {
      _ === void 0 && (_ = b.length);
      var v = b[_ - 1], d = b[_ - 2];
      if (!v)
        return m;
      if (v.type === "ContentStatement")
        return (d || !m ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function p(b, _, m) {
      _ === void 0 && (_ = -1);
      var v = b[_ + 1], d = b[_ + 2];
      if (!v)
        return m;
      if (v.type === "ContentStatement")
        return (d || !m ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function h(b, _, m) {
      var v = b[_ == null ? 0 : _ + 1];
      if (!(!v || v.type !== "ContentStatement" || !m && v.rightStripped)) {
        var d = v.value;
        v.value = v.value.replace(m ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== d;
      }
    }
    function g(b, _, m) {
      var v = b[_ == null ? b.length - 1 : _ - 1];
      if (!(!v || v.type !== "ContentStatement" || !m && v.leftStripped)) {
        var d = v.value;
        return v.value = v.value.replace(m ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== d, v.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var vn = {}, sy;
function gE() {
  if (sy) return vn;
  sy = 1, vn.__esModule = !0, vn.SourceLocation = o, vn.id = u, vn.stripFlags = f, vn.stripComment = p, vn.preparePath = h, vn.prepareMustache = g, vn.prepareRawBlock = b, vn.prepareBlock = _, vn.prepareProgram = m, vn.preparePartialBlock = v;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Vn(), i = t(r);
  function s(d, x) {
    if (x = x.path ? x.path.original : x, d.path.original !== x) {
      var C = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + x, C);
    }
  }
  function o(d, x) {
    this.source = d, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function f(d, x) {
    return {
      open: d.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function p(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, x, C) {
    C = this.locInfo(C);
    for (var T = d ? "@" : "", w = [], O = 0, E = 0, N = x.length; E < N; E++) {
      var D = x[E].part, M = x[E].original !== D;
      if (T += (x[E].separator || "") + D, !M && (D === ".." || D === "." || D === "this")) {
        if (w.length > 0)
          throw new i.default("Invalid path: " + T, { loc: C });
        D === ".." && O++;
      } else
        w.push(D);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: O,
      parts: w,
      original: T,
      loc: C
    };
  }
  function g(d, x, C, T, w, O) {
    var E = T.charAt(3) || T.charAt(2), N = E !== "{" && E !== "&", D = /\*/.test(T);
    return {
      type: D ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: C,
      escaped: N,
      strip: w,
      loc: this.locInfo(O)
    };
  }
  function b(d, x, C, T) {
    s(d, C), T = this.locInfo(T);
    var w = {
      type: "Program",
      body: x,
      strip: {},
      loc: T
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: w,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function _(d, x, C, T, w, O) {
    T && T.path && s(d, T);
    var E = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var N = void 0, D = void 0;
    if (C) {
      if (E)
        throw new i.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = T.strip), D = C.strip, N = C.program;
    }
    return w && (w = N, N = x, x = w), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: N,
      openStrip: d.strip,
      inverseStrip: D,
      closeStrip: T && T.strip,
      loc: this.locInfo(O)
    };
  }
  function m(d, x) {
    if (!x && d.length) {
      var C = d[0].loc, T = d[d.length - 1].loc;
      C && T && (x = {
        source: C.source,
        start: {
          line: C.start.line,
          column: C.start.column
        },
        end: {
          line: T.end.line,
          column: T.end.column
        }
      });
    }
    return {
      type: "Program",
      body: d,
      strip: {},
      loc: x
    };
  }
  function v(d, x, C, T) {
    return s(d, C), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      openStrip: d.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(T)
    };
  }
  return vn;
}
var ly;
function vE() {
  if (ly) return Ti;
  ly = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = b, Ti.parse = _;
  function t(m) {
    if (m && m.__esModule)
      return m;
    var v = {};
    if (m != null)
      for (var d in m)
        Object.prototype.hasOwnProperty.call(m, d) && (v[d] = m[d]);
    return v.default = m, v;
  }
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var i = pE(), s = r(i), o = mE(), u = r(o), f = gE(), p = t(f), h = ln();
  Ti.parser = s.default;
  var g = {};
  h.extend(g, p);
  function b(m, v) {
    if (m.type === "Program")
      return m;
    s.default.yy = g, g.locInfo = function(x) {
      return new g.SourceLocation(v && v.srcName, x);
    };
    var d = s.default.parse(m);
    return d;
  }
  function _(m, v) {
    var d = b(m, v), x = new u.default(v);
    return x.accept(d);
  }
  return Ti;
}
var Oi = {}, oy;
function yE() {
  if (oy) return Oi;
  oy = 1, Oi.__esModule = !0, Oi.Compiler = p, Oi.precompile = h, Oi.compile = g;
  function t(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var r = Vn(), i = t(r), s = ln(), o = B0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(v) {
      var d = this.opcodes.length;
      if (v.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var C = this.opcodes[x], T = v.opcodes[x];
        if (C.opcode !== T.opcode || !b(C.args, T.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(v.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var d = new this.compiler(), x = d.compile(v, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new i.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var d = this[v.type](v);
      return this.sourceNode.shift(), d;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var d = v.body, x = d.length, C = 0; C < x; C++)
        this.accept(d[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      _(v);
      var d = v.program, x = v.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var C = this.classifySexpr(v);
      C === "helper" ? this.helperSexpr(v, d, x) : C === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var d = v.program && this.compileProgram(v.program), x = this.setupFullMustacheParams(v, d, void 0), C = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var d = v.program;
      d && (d = this.compileProgram(v.program));
      var x = v.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, v);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = v.name.original, T = v.name.type === "SubExpression";
      T && this.accept(v.name), this.setupFullMustacheParams(v, d, void 0, !0);
      var w = v.indent || "";
      this.options.preventIndent && w && (this.opcode("appendContent", w), w = ""), this.opcode("invokePartial", T, C, w), this.opcode("append");
    },
    PartialBlockStatement: function(v) {
      this.PartialStatement(v);
    },
    MustacheStatement: function(v) {
      this.SubExpression(v), v.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(v) {
      this.DecoratorBlock(v);
    },
    ContentStatement: function(v) {
      v.value && this.opcode("appendContent", v.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(v) {
      _(v);
      var d = this.classifySexpr(v);
      d === "simple" ? this.simpleSexpr(v) : d === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, d, x) {
      var C = v.path, T = C.parts[0], w = d != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", T, w);
    },
    simpleSexpr: function(v) {
      var d = v.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, d, x) {
      var C = this.setupFullMustacheParams(v, d, x), T = v.path, w = T.parts[0];
      if (this.options.knownHelpers[w])
        this.opcode("invokeKnownHelper", C.length, w);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + w, v);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", C.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var d = v.parts[0], x = u.default.helpers.scopedId(v), C = !v.depth && !x && this.blockParamIndex(d);
      C ? this.opcode("lookupBlockParam", C, v.parts) : d ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(v) {
      this.opcode("pushString", v.value);
    },
    NumberLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    BooleanLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(v) {
      var d = v.pairs, x = 0, C = d.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var d = u.default.helpers.simpleId(v.path), x = d && !!this.blockParamIndex(v.path.parts[0]), C = !x && u.default.helpers.helperExpression(v), T = !x && (C || d);
      if (T && !C) {
        var w = v.path.parts[0], O = this.options;
        O.knownHelpers[w] ? C = !0 : O.knownHelpersOnly && (T = !1);
      }
      return C ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var d = 0, x = v.length; d < x; d++)
        this.pushParam(v[d]);
    },
    pushParam: function(v) {
      var d = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", d, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (x = this.blockParamIndex(v.parts[0])), x) {
            var C = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            d = v.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, d);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, d, x, C) {
      var T = v.params;
      return this.pushParams(T), this.opcode("pushProgram", d), this.opcode("pushProgram", x), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", C), T;
    },
    blockParamIndex: function(v) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var C = this.options.blockParams[d], T = C && s.indexOf(C, v);
        if (C && T >= 0)
          return [d, T];
      }
    }
  };
  function h(m, v, d) {
    if (m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + m);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = d.parse(m, v), C = new d.Compiler().compile(x, v);
    return new d.JavaScriptCompiler().compile(C, v);
  }
  function g(m, v, d) {
    if (v === void 0 && (v = {}), m == null || typeof m != "string" && m.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + m);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = void 0;
    function C() {
      var w = d.parse(m, v), O = new d.Compiler().compile(w, v), E = new d.JavaScriptCompiler().compile(O, v, void 0, !0);
      return d.template(E);
    }
    function T(w, O) {
      return x || (x = C()), x.call(this, w, O);
    }
    return T._setup = function(w) {
      return x || (x = C()), x._setup(w);
    }, T._child = function(w, O, E, N) {
      return x || (x = C()), x._child(w, O, E, N);
    }, T;
  }
  function b(m, v) {
    if (m === v)
      return !0;
    if (s.isArray(m) && s.isArray(v) && m.length === v.length) {
      for (var d = 0; d < m.length; d++)
        if (!b(m[d], v[d]))
          return !1;
      return !0;
    }
  }
  function _(m) {
    if (!m.path.parts) {
      var v = m.path;
      m.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return Oi;
}
var $o = { exports: {} }, Qo = { exports: {} }, qs = {}, sd = {}, Jo = {}, Ko = {}, uy;
function bE() {
  if (uy) return Ko;
  uy = 1;
  var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return Ko.encode = function(r) {
    if (0 <= r && r < t.length)
      return t[r];
    throw new TypeError("Must be between 0 and 63: " + r);
  }, Ko.decode = function(r) {
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, g = 47, b = 26, _ = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + b : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == g ? 63 : -1;
  }, Ko;
}
var cy;
function H0() {
  if (cy) return Jo;
  cy = 1;
  var t = bE(), r = 5, i = 1 << r, s = i - 1, o = i;
  function u(p) {
    return p < 0 ? (-p << 1) + 1 : (p << 1) + 0;
  }
  function f(p) {
    var h = (p & 1) === 1, g = p >> 1;
    return h ? -g : g;
  }
  return Jo.encode = function(h) {
    var g = "", b, _ = u(h);
    do
      b = _ & s, _ >>>= r, _ > 0 && (b |= o), g += t.encode(b);
    while (_ > 0);
    return g;
  }, Jo.decode = function(h, g, b) {
    var _ = h.length, m = 0, v = 0, d, x;
    do {
      if (g >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(g++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(g - 1));
      d = !!(x & o), x &= s, m = m + (x << v), v += r;
    } while (d);
    b.value = f(m), b.rest = g;
  }, Jo;
}
var ld = {}, fy;
function ll() {
  return fy || (fy = 1, (function(t) {
    function r(E, N, D) {
      if (N in E)
        return E[N];
      if (arguments.length === 3)
        return D;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(E) {
      var N = E.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = o;
    function u(E) {
      var N = "";
      return E.scheme && (N += E.scheme + ":"), N += "//", E.auth && (N += E.auth + "@"), E.host && (N += E.host), E.port && (N += ":" + E.port), E.path && (N += E.path), N;
    }
    t.urlGenerate = u;
    function f(E) {
      var N = E, D = o(E);
      if (D) {
        if (!D.path)
          return E;
        N = D.path;
      }
      for (var M = t.isAbsolute(N), U = N.split(/\/+/), F, I = 0, X = U.length - 1; X >= 0; X--)
        F = U[X], F === "." ? U.splice(X, 1) : F === ".." ? I++ : I > 0 && (F === "" ? (U.splice(X + 1, I), I = 0) : (U.splice(X, 2), I--));
      return N = U.join("/"), N === "" && (N = M ? "/" : "."), D ? (D.path = N, u(D)) : N;
    }
    t.normalize = f;
    function p(E, N) {
      E === "" && (E = "."), N === "" && (N = ".");
      var D = o(N), M = o(E);
      if (M && (E = M.path || "/"), D && !D.scheme)
        return M && (D.scheme = M.scheme), u(D);
      if (D || N.match(s))
        return N;
      if (M && !M.host && !M.path)
        return M.host = N, u(M);
      var U = N.charAt(0) === "/" ? N : f(E.replace(/\/+$/, "") + "/" + N);
      return M ? (M.path = U, u(M)) : U;
    }
    t.join = p, t.isAbsolute = function(E) {
      return E.charAt(0) === "/" || i.test(E);
    };
    function h(E, N) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var D = 0; N.indexOf(E + "/") !== 0; ) {
        var M = E.lastIndexOf("/");
        if (M < 0 || (E = E.slice(0, M), E.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++D;
      }
      return Array(D + 1).join("../") + N.substr(E.length + 1);
    }
    t.relative = h;
    var g = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function b(E) {
      return E;
    }
    function _(E) {
      return v(E) ? "$" + E : E;
    }
    t.toSetString = g ? b : _;
    function m(E) {
      return v(E) ? E.slice(1) : E;
    }
    t.fromSetString = g ? b : m;
    function v(E) {
      if (!E)
        return !1;
      var N = E.length;
      if (N < 9 || E.charCodeAt(N - 1) !== 95 || E.charCodeAt(N - 2) !== 95 || E.charCodeAt(N - 3) !== 111 || E.charCodeAt(N - 4) !== 116 || E.charCodeAt(N - 5) !== 111 || E.charCodeAt(N - 6) !== 114 || E.charCodeAt(N - 7) !== 112 || E.charCodeAt(N - 8) !== 95 || E.charCodeAt(N - 9) !== 95)
        return !1;
      for (var D = N - 10; D >= 0; D--)
        if (E.charCodeAt(D) !== 36)
          return !1;
      return !0;
    }
    function d(E, N, D) {
      var M = C(E.source, N.source);
      return M !== 0 || (M = E.originalLine - N.originalLine, M !== 0) || (M = E.originalColumn - N.originalColumn, M !== 0 || D) || (M = E.generatedColumn - N.generatedColumn, M !== 0) || (M = E.generatedLine - N.generatedLine, M !== 0) ? M : C(E.name, N.name);
    }
    t.compareByOriginalPositions = d;
    function x(E, N, D) {
      var M = E.generatedLine - N.generatedLine;
      return M !== 0 || (M = E.generatedColumn - N.generatedColumn, M !== 0 || D) || (M = C(E.source, N.source), M !== 0) || (M = E.originalLine - N.originalLine, M !== 0) || (M = E.originalColumn - N.originalColumn, M !== 0) ? M : C(E.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function C(E, N) {
      return E === N ? 0 : E === null ? 1 : N === null ? -1 : E > N ? 1 : -1;
    }
    function T(E, N) {
      var D = E.generatedLine - N.generatedLine;
      return D !== 0 || (D = E.generatedColumn - N.generatedColumn, D !== 0) || (D = C(E.source, N.source), D !== 0) || (D = E.originalLine - N.originalLine, D !== 0) || (D = E.originalColumn - N.originalColumn, D !== 0) ? D : C(E.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function w(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = w;
    function O(E, N, D) {
      if (N = N || "", E && (E[E.length - 1] !== "/" && N[0] !== "/" && (E += "/"), N = E + N), D) {
        var M = o(D);
        if (!M)
          throw new Error("sourceMapURL could not be parsed");
        if (M.path) {
          var U = M.path.lastIndexOf("/");
          U >= 0 && (M.path = M.path.substring(0, U + 1));
        }
        N = p(u(M), N);
      }
      return f(N);
    }
    t.computeSourceURL = O;
  })(ld)), ld;
}
var od = {}, dy;
function q0() {
  if (dy) return od;
  dy = 1;
  var t = ll(), r = Object.prototype.hasOwnProperty, i = typeof Map < "u";
  function s() {
    this._array = [], this._set = i ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, f) {
    for (var p = new s(), h = 0, g = u.length; h < g; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), g = this._array.length;
    (!h || f) && this._array.push(u), h || (i ? this._set.set(u, g) : this._set[p] = g);
  }, s.prototype.has = function(u) {
    if (i)
      return this._set.has(u);
    var f = t.toSetString(u);
    return r.call(this._set, f);
  }, s.prototype.indexOf = function(u) {
    if (i) {
      var f = this._set.get(u);
      if (f >= 0)
        return f;
    } else {
      var p = t.toSetString(u);
      if (r.call(this._set, p))
        return this._set[p];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, od.ArraySet = s, od;
}
var ud = {}, hy;
function _E() {
  if (hy) return ud;
  hy = 1;
  var t = ll();
  function r(s, o) {
    var u = s.generatedLine, f = o.generatedLine, p = s.generatedColumn, h = o.generatedColumn;
    return f > u || f == u && h >= p || t.compareByGeneratedPositionsInflated(s, o) <= 0;
  }
  function i() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return i.prototype.unsortedForEach = function(o, u) {
    this._array.forEach(o, u);
  }, i.prototype.add = function(o) {
    r(this._last, o) ? (this._last = o, this._array.push(o)) : (this._sorted = !1, this._array.push(o));
  }, i.prototype.toArray = function() {
    return this._sorted || (this._array.sort(t.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, ud.MappingList = i, ud;
}
var py;
function F0() {
  if (py) return sd;
  py = 1;
  var t = H0(), r = ll(), i = q0().ArraySet, s = _E().MappingList;
  function o(u) {
    u || (u = {}), this._file = r.getArg(u, "file", null), this._sourceRoot = r.getArg(u, "sourceRoot", null), this._skipValidation = r.getArg(u, "skipValidation", !1), this._sources = new i(), this._names = new i(), this._mappings = new s(), this._sourcesContents = null;
  }
  return o.prototype._version = 3, o.fromSourceMap = function(f) {
    var p = f.sourceRoot, h = new o({
      file: f.file,
      sourceRoot: p
    });
    return f.eachMapping(function(g) {
      var b = {
        generated: {
          line: g.generatedLine,
          column: g.generatedColumn
        }
      };
      g.source != null && (b.source = g.source, p != null && (b.source = r.relative(p, b.source)), b.original = {
        line: g.originalLine,
        column: g.originalColumn
      }, g.name != null && (b.name = g.name)), h.addMapping(b);
    }), f.sources.forEach(function(g) {
      var b = g;
      p !== null && (b = r.relative(p, g)), h._sources.has(b) || h._sources.add(b);
      var _ = f.sourceContentFor(g);
      _ != null && h.setSourceContent(g, _);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), g = r.getArg(f, "source", null), b = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, g, b), g != null && (g = String(g), this._sources.has(g) || this._sources.add(g)), b != null && (b = String(b), this._names.has(b) || this._names.add(b)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: g,
      name: b
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var g = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      g = f.file;
    }
    var b = this._sourceRoot;
    b != null && (g = r.relative(b, g));
    var _ = new i(), m = new i();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === g && v.originalLine != null) {
        var d = f.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        d.source != null && (v.source = d.source, h != null && (v.source = r.join(h, v.source)), b != null && (v.source = r.relative(b, v.source)), v.originalLine = d.line, v.originalColumn = d.column, d.name != null && (v.name = d.name));
      }
      var x = v.source;
      x != null && !_.has(x) && _.add(x);
      var C = v.name;
      C != null && !m.has(C) && m.add(C);
    }, this), this._sources = _, this._names = m, f.sources.forEach(function(v) {
      var d = f.sourceContentFor(v);
      d != null && (h != null && (v = r.join(h, v)), b != null && (v = r.relative(b, v)), this.setSourceContent(v, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, g) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !g)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: g
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, g = 0, b = 0, _ = 0, m = "", v, d, x, C, T = this._mappings.toArray(), w = 0, O = T.length; w < O; w++) {
      if (d = T[w], v = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          v += ";", p++;
      else if (w > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, T[w - 1]))
          continue;
        v += ",";
      }
      v += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (C = this._sources.indexOf(d.source), v += t.encode(C - _), _ = C, v += t.encode(d.originalLine - 1 - g), g = d.originalLine - 1, v += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), v += t.encode(x - b), b = x)), m += v;
    }
    return m;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var g = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, g) ? this._sourcesContents[g] : null;
    }, this);
  }, o.prototype.toJSON = function() {
    var f = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (f.file = this._file), this._sourceRoot != null && (f.sourceRoot = this._sourceRoot), this._sourcesContents && (f.sourcesContent = this._generateSourcesContent(f.sources, f.sourceRoot)), f;
  }, o.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, sd.SourceMapGenerator = o, sd;
}
var Fs = {}, cd = {}, my;
function SE() {
  return my || (my = 1, (function(t) {
    t.GREATEST_LOWER_BOUND = 1, t.LEAST_UPPER_BOUND = 2;
    function r(i, s, o, u, f, p) {
      var h = Math.floor((s - i) / 2) + i, g = f(o, u[h], !0);
      return g === 0 ? h : g > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
    }
    t.search = function(s, o, u, f) {
      if (o.length === 0)
        return -1;
      var p = r(
        -1,
        o.length,
        s,
        o,
        u,
        f || t.GREATEST_LOWER_BOUND
      );
      if (p < 0)
        return -1;
      for (; p - 1 >= 0 && u(o[p], o[p - 1], !0) === 0; )
        --p;
      return p;
    };
  })(cd)), cd;
}
var fd = {}, gy;
function xE() {
  if (gy) return fd;
  gy = 1;
  function t(s, o, u) {
    var f = s[o];
    s[o] = s[u], s[u] = f;
  }
  function r(s, o) {
    return Math.round(s + Math.random() * (o - s));
  }
  function i(s, o, u, f) {
    if (u < f) {
      var p = r(u, f), h = u - 1;
      t(s, p, f);
      for (var g = s[f], b = u; b < f; b++)
        o(s[b], g) <= 0 && (h += 1, t(s, h, b));
      t(s, h + 1, b);
      var _ = h + 1;
      i(s, o, u, _ - 1), i(s, o, _ + 1, f);
    }
  }
  return fd.quickSort = function(s, o) {
    i(s, o, 0, s.length - 1);
  }, fd;
}
var vy;
function EE() {
  if (vy) return Fs;
  vy = 1;
  var t = ll(), r = SE(), i = q0().ArraySet, s = H0(), o = xE().quickSort;
  function u(g, b) {
    var _ = g;
    return typeof g == "string" && (_ = t.parseSourceMapInput(g)), _.sections != null ? new h(_, b) : new f(_, b);
  }
  u.fromSourceMap = function(g, b) {
    return f.fromSourceMap(g, b);
  }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), u.prototype._charIsMappingSeparator = function(b, _) {
    var m = b.charAt(_);
    return m === ";" || m === ",";
  }, u.prototype._parseMappings = function(b, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(b, _, m) {
    var v = _ || null, d = m || u.GENERATED_ORDER, x;
    switch (d) {
      case u.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
        x = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var C = this.sourceRoot;
    x.map(function(T) {
      var w = T.source === null ? null : this._sources.at(T.source);
      return w = t.computeSourceURL(C, w, this._sourceMapURL), {
        source: w,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(b, v);
  }, u.prototype.allGeneratedPositionsFor = function(b) {
    var _ = t.getArg(b, "line"), m = {
      source: t.getArg(b, "source"),
      originalLine: _,
      originalColumn: t.getArg(b, "column", 0)
    };
    if (m.source = this._findSourceIndex(m.source), m.source < 0)
      return [];
    var v = [], d = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var x = this._originalMappings[d];
      if (b.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          v.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var T = x.originalColumn; x && x.originalLine === _ && x.originalColumn == T; )
          v.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return v;
  }, Fs.SourceMapConsumer = u;
  function f(g, b) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var m = t.getArg(_, "version"), v = t.getArg(_, "sources"), d = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), C = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), w = t.getArg(_, "file", null);
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    x && (x = t.normalize(x)), v = v.map(String).map(t.normalize).map(function(O) {
      return x && t.isAbsolute(x) && t.isAbsolute(O) ? t.relative(x, O) : O;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(O) {
      return t.computeSourceURL(x, O, b);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = T, this._sourceMapURL = b, this.file = w;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(g) {
    var b = g;
    if (this.sourceRoot != null && (b = t.relative(this.sourceRoot, b)), this._sources.has(b))
      return this._sources.indexOf(b);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == g)
        return _;
    return -1;
  }, f.fromSourceMap = function(b, _) {
    var m = Object.create(f.prototype), v = m._names = i.fromArray(b._names.toArray(), !0), d = m._sources = i.fromArray(b._sources.toArray(), !0);
    m.sourceRoot = b._sourceRoot, m.sourcesContent = b._generateSourcesContent(
      m._sources.toArray(),
      m.sourceRoot
    ), m.file = b._file, m._sourceMapURL = _, m._absoluteSources = m._sources.toArray().map(function(D) {
      return t.computeSourceURL(m.sourceRoot, D, _);
    });
    for (var x = b._mappings.toArray().slice(), C = m.__generatedMappings = [], T = m.__originalMappings = [], w = 0, O = x.length; w < O; w++) {
      var E = x[w], N = new p();
      N.generatedLine = E.generatedLine, N.generatedColumn = E.generatedColumn, E.source && (N.source = d.indexOf(E.source), N.originalLine = E.originalLine, N.originalColumn = E.originalColumn, E.name && (N.name = v.indexOf(E.name)), T.push(N)), C.push(N);
    }
    return o(m.__originalMappings, t.compareByOriginalPositions), m;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(b, _) {
    for (var m = 1, v = 0, d = 0, x = 0, C = 0, T = 0, w = b.length, O = 0, E = {}, N = {}, D = [], M = [], U, F, I, X, V; O < w; )
      if (b.charAt(O) === ";")
        m++, O++, v = 0;
      else if (b.charAt(O) === ",")
        O++;
      else {
        for (U = new p(), U.generatedLine = m, X = O; X < w && !this._charIsMappingSeparator(b, X); X++)
          ;
        if (F = b.slice(O, X), I = E[F], I)
          O += F.length;
        else {
          for (I = []; O < X; )
            s.decode(b, O, N), V = N.value, O = N.rest, I.push(V);
          if (I.length === 2)
            throw new Error("Found a source, but no line and column");
          if (I.length === 3)
            throw new Error("Found a source and line, but no column");
          E[F] = I;
        }
        U.generatedColumn = v + I[0], v = U.generatedColumn, I.length > 1 && (U.source = C + I[1], C += I[1], U.originalLine = d + I[2], d = U.originalLine, U.originalLine += 1, U.originalColumn = x + I[3], x = U.originalColumn, I.length > 4 && (U.name = T + I[4], T += I[4])), M.push(U), typeof U.originalLine == "number" && D.push(U);
      }
    o(M, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = M, o(D, t.compareByOriginalPositions), this.__originalMappings = D;
  }, f.prototype._findMapping = function(b, _, m, v, d, x) {
    if (b[m] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + b[m]);
    if (b[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + b[v]);
    return r.search(b, _, d, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var b = 0; b < this._generatedMappings.length; ++b) {
      var _ = this._generatedMappings[b];
      if (b + 1 < this._generatedMappings.length) {
        var m = this._generatedMappings[b + 1];
        if (_.generatedLine === m.generatedLine) {
          _.lastGeneratedColumn = m.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(b) {
    var _ = {
      generatedLine: t.getArg(b, "line"),
      generatedColumn: t.getArg(b, "column")
    }, m = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(b, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var v = this._generatedMappings[m];
      if (v.generatedLine === _.generatedLine) {
        var d = t.getArg(v, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var x = t.getArg(v, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
          line: t.getArg(v, "originalLine", null),
          column: t.getArg(v, "originalColumn", null),
          name: x
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, f.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(b) {
      return b == null;
    }) : !1;
  }, f.prototype.sourceContentFor = function(b, _) {
    if (!this.sourcesContent)
      return null;
    var m = this._findSourceIndex(b);
    if (m >= 0)
      return this.sourcesContent[m];
    var v = b;
    this.sourceRoot != null && (v = t.relative(this.sourceRoot, v));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var x = v.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (_)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(b) {
    var _ = t.getArg(b, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var m = {
      source: _,
      originalLine: t.getArg(b, "line"),
      originalColumn: t.getArg(b, "column")
    }, v = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(b, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var d = this._originalMappings[v];
      if (d.source === m.source)
        return {
          line: t.getArg(d, "generatedLine", null),
          column: t.getArg(d, "generatedColumn", null),
          lastColumn: t.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, Fs.BasicSourceMapConsumer = f;
  function h(g, b) {
    var _ = g;
    typeof g == "string" && (_ = t.parseSourceMapInput(g));
    var m = t.getArg(_, "version"), v = t.getArg(_, "sections");
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var C = t.getArg(x, "offset"), T = t.getArg(C, "line"), w = t.getArg(C, "column");
      if (T < d.line || T === d.line && w < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = C, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: w + 1
        },
        consumer: new u(t.getArg(x, "map"), b)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var g = [], b = 0; b < this._sections.length; b++)
        for (var _ = 0; _ < this._sections[b].consumer.sources.length; _++)
          g.push(this._sections[b].consumer.sources[_]);
      return g;
    }
  }), h.prototype.originalPositionFor = function(b) {
    var _ = {
      generatedLine: t.getArg(b, "line"),
      generatedColumn: t.getArg(b, "column")
    }, m = r.search(
      _,
      this._sections,
      function(d, x) {
        var C = d.generatedLine - x.generatedOffset.generatedLine;
        return C || d.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), v = this._sections[m];
    return v ? v.consumer.originalPositionFor({
      line: _.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (v.generatedOffset.generatedLine === _.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: b.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(b) {
      return b.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(b, _) {
    for (var m = 0; m < this._sections.length; m++) {
      var v = this._sections[m], d = v.consumer.sourceContentFor(b, !0);
      if (d)
        return d;
    }
    if (_)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var m = this._sections[_];
      if (m.consumer._findSourceIndex(t.getArg(b, "source")) !== -1) {
        var v = m.consumer.generatedPositionFor(b);
        if (v) {
          var d = {
            line: v.line + (m.generatedOffset.generatedLine - 1),
            column: v.column + (m.generatedOffset.generatedLine === v.line ? m.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(b, _) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var m = 0; m < this._sections.length; m++)
      for (var v = this._sections[m], d = v.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var C = d[x], T = v.consumer._sources.at(C.source);
        T = t.computeSourceURL(v.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var w = null;
        C.name && (w = v.consumer._names.at(C.name), this._names.add(w), w = this._names.indexOf(w));
        var O = {
          source: T,
          generatedLine: C.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (v.generatedOffset.generatedLine === C.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: w
        };
        this.__generatedMappings.push(O), typeof O.originalLine == "number" && this.__originalMappings.push(O);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Fs.IndexedSourceMapConsumer = h, Fs;
}
var dd = {}, yy;
function CE() {
  if (yy) return dd;
  yy = 1;
  var t = F0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, g, b) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = b ?? null, this[o] = !0, g != null && this.add(g);
  }
  return u.fromStringWithSourceMap = function(p, h, g) {
    var b = new u(), _ = p.split(i), m = 0, v = function() {
      var w = E(), O = E() || "";
      return w + O;
      function E() {
        return m < _.length ? _[m++] : void 0;
      }
    }, d = 1, x = 0, C = null;
    return h.eachMapping(function(w) {
      if (C !== null)
        if (d < w.generatedLine)
          T(C, v()), d++, x = 0;
        else {
          var O = _[m] || "", E = O.substr(0, w.generatedColumn - x);
          _[m] = O.substr(w.generatedColumn - x), x = w.generatedColumn, T(C, E), C = w;
          return;
        }
      for (; d < w.generatedLine; )
        b.add(v()), d++;
      if (x < w.generatedColumn) {
        var O = _[m] || "";
        b.add(O.substr(0, w.generatedColumn)), _[m] = O.substr(w.generatedColumn), x = w.generatedColumn;
      }
      C = w;
    }, this), m < _.length && (C && T(C, v()), b.add(_.splice(m).join(""))), h.sources.forEach(function(w) {
      var O = h.sourceContentFor(w);
      O != null && (g != null && (w = r.join(g, w)), b.setSourceContent(w, O));
    }), b;
    function T(w, O) {
      if (w === null || w.source === void 0)
        b.add(O);
      else {
        var E = g ? r.join(g, w.source) : w.source;
        b.add(new u(
          w.originalLine,
          w.originalColumn,
          E,
          O,
          w.name
        ));
      }
    }
  }, u.prototype.add = function(p) {
    if (Array.isArray(p))
      p.forEach(function(h) {
        this.add(h);
      }, this);
    else if (p[o] || typeof p == "string")
      p && this.children.push(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.prepend = function(p) {
    if (Array.isArray(p))
      for (var h = p.length - 1; h >= 0; h--)
        this.prepend(p[h]);
    else if (p[o] || typeof p == "string")
      this.children.unshift(p);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + p
      );
    return this;
  }, u.prototype.walk = function(p) {
    for (var h, g = 0, b = this.children.length; g < b; g++)
      h = this.children[g], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, g, b = this.children.length;
    if (b > 0) {
      for (h = [], g = 0; g < b - 1; g++)
        h.push(this.children[g]), h.push(p);
      h.push(this.children[g]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var g = this.children[this.children.length - 1];
    return g[o] ? g.replaceRight(p, h) : typeof g == "string" ? this.children[this.children.length - 1] = g.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, g = this.children.length; h < g; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var b = Object.keys(this.sourceContents), h = 0, g = b.length; h < g; h++)
      p(r.fromSetString(b[h]), this.sourceContents[b[h]]);
  }, u.prototype.toString = function() {
    var p = "";
    return this.walk(function(h) {
      p += h;
    }), p;
  }, u.prototype.toStringWithSourceMap = function(p) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, g = new t(p), b = !1, _ = null, m = null, v = null, d = null;
    return this.walk(function(x, C) {
      h.code += x, C.source !== null && C.line !== null && C.column !== null ? ((_ !== C.source || m !== C.line || v !== C.column || d !== C.name) && g.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: C.name
      }), _ = C.source, m = C.line, v = C.column, d = C.name, b = !0) : b && (g.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, b = !1);
      for (var T = 0, w = x.length; T < w; T++)
        x.charCodeAt(T) === s ? (h.line++, h.column = 0, T + 1 === w ? (_ = null, b = !1) : b && g.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: C.name
        })) : h.column++;
    }), this.walkSourceContents(function(x, C) {
      g.setSourceContent(x, C);
    }), { code: h.code, map: g };
  }, dd.SourceNode = u, dd;
}
var by;
function wE() {
  return by || (by = 1, qs.SourceMapGenerator = F0().SourceMapGenerator, qs.SourceMapConsumer = EE().SourceMapConsumer, qs.SourceNode = CE().SourceNode), qs;
}
var _y;
function AE() {
  return _y || (_y = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ln(), s = void 0;
    try {
      var o = wE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, g, b) {
      this.src = "", b && this.add(b);
    }, s.prototype = {
      add: function(h) {
        i.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        i.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(p, h, g) {
      if (i.isArray(p)) {
        for (var b = [], _ = 0, m = p.length; _ < m; _++)
          b.push(h.wrap(p[_], g));
        return b;
      } else if (typeof p == "boolean" || typeof p == "number")
        return p + "";
      return p;
    }
    function f(p) {
      this.srcFile = p, this.source = [];
    }
    f.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(h, g) {
        this.source.unshift(this.wrap(h, g));
      },
      push: function(h, g) {
        this.source.push(this.wrap(h, g));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(g) {
          h.add(["  ", g, `
`]);
        }), h;
      },
      each: function(h) {
        for (var g = 0, b = this.source.length; g < b; g++)
          h(this.source[g]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var g = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, g), new s(g.start.line, g.start.column, this.srcFile, h));
      },
      functionCall: function(h, g, b) {
        return b = this.generateList(b), this.wrap([h, g ? "." + g + "(" : "(", b, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var g = this, b = [];
        Object.keys(h).forEach(function(m) {
          var v = u(h[m], g);
          v !== "undefined" && b.push([g.quotedString(m), ":", v]);
        });
        var _ = this.generateList(b);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var g = this.empty(), b = 0, _ = h.length; b < _; b++)
          b && g.add(","), g.add(u(h[b], this));
        return g;
      },
      generateArray: function(h) {
        var g = this.generateList(h);
        return g.prepend("["), g.add("]"), g;
      }
    }, r.default = f, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var Sy;
function NE() {
  return Sy || (Sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = th(), o = Vn(), u = i(o), f = ln(), p = AE(), h = i(p);
    function g(m) {
      this.value = m;
    }
    function b() {
    }
    b.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, d) {
        return this.internalNameLookup(v, d);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, d = s.REVISION_CHANGES[v];
        return [v, d];
      },
      appendToBuffer: function(v, d, x) {
        return f.isArray(v) || (v = [v]), v = this.source.wrap(v, d), this.environment.isSimple ? ["return ", v, ";"] : x ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, d, x, C) {
        this.environment = v, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, d), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var T = v.opcodes, w = void 0, O = void 0, E = void 0, N = void 0;
        for (E = 0, N = T.length; E < N; E++)
          w = T[E], this.source.currentLocation = w.loc, O = O || w.loc, this[w.opcode].apply(this, w.args);
        if (this.source.currentLocation = O, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var D = this.createFunctionContext(C);
        if (this.isChild)
          return D;
        var M = {
          compiler: this.compilerInfo(),
          main: D
        };
        this.decorators && (M.main_d = this.decorators, M.useDecorators = !0);
        var U = this.context, F = U.programs, I = U.decorators;
        for (E = 0, N = F.length; E < N; E++)
          F[E] && (M[E] = F[E], I[E] && (M[E + "_d"] = I[E], M.useDecorators = !0));
        return this.environment.usePartial && (M.usePartial = !0), this.options.data && (M.useData = !0), this.useDepths && (M.useDepths = !0), this.useBlockParams && (M.useBlockParams = !0), this.options.compat && (M.compat = !0), C ? M.compilerOptions = this.options : (M.compiler = JSON.stringify(M.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, M = this.objectLiteral(M), d.srcName ? (M = M.toStringWithSourceMap({ file: d.destName }), M.map = M.map && M.map.toString()) : M = M.toString()), M;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var d = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var N = d.aliases[E];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + E, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var w = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && w.push("blockParams"), this.useDepths && w.push("depths");
        var O = this.mergeSource(x);
        return v ? (w.push(O), Function.apply(this, w)) : this.source.wrap(["function(", w.join(","), `) {
  `, O, "}"]);
      },
      mergeSource: function(v) {
        var d = this.environment.isSimple, x = !this.forceBuffer, C = void 0, T = void 0, w = void 0, O = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (w ? E.prepend("  + ") : w = E, O = E) : (w && (T ? w.prepend("buffer += ") : C = !0, O.add(";"), w = O = void 0), T = !0, d || (x = !1));
        }), x ? w ? (w.prepend("return "), O.add(";")) : T || this.source.push('return "";') : (v += ", buffer = " + (C ? "" : this.initializeBuffer()), w ? (w.prepend("return buffer + "), O.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (C ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(v) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(v, 0, x);
        var C = this.popStack();
        x.splice(1, 0, C), this.push(this.source.functionCall(d, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var v = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(v, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(v) {
        this.pendingContent ? v = this.pendingContent + v : this.pendingLocation = this.source.currentLocation, this.pendingContent = v;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var v = this.popStack();
          this.pushSource(["if (", v, " != null) { ", this.appendToBuffer(v, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(v) {
        this.lastContext = v;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(v, d, x, C) {
        var T = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[T++])) : this.pushContext(), this.resolvePath("context", v, T, d, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, d) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, d, x) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(v, d, x, C, T) {
        var w = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, d, x, v));
          return;
        }
        for (var O = d.length; x < O; x++)
          this.replaceStack(function(E) {
            var N = w.nameLookup(E, d[x], v);
            return C ? [" && ", N] : [" != null ? ", N, " : ", E];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(v, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
      },
      emptyHash: function(v) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(v ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var v = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(v.ids)), this.stringParams && (this.push(this.objectLiteral(v.contexts)), this.push(this.objectLiteral(v.types))), this.push(this.objectLiteral(v.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(v) {
        this.pushStackLiteral(this.quotedString(v));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(v) {
        this.pushStackLiteral(v);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(v) {
        v != null ? this.pushStackLiteral(this.programExpression(v)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(v, d) {
        var x = this.nameLookup("decorators", d, "decorator"), C = this.setupHelperArgs(d, v);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", C]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(v, d, x) {
        var C = this.popStack(), T = this.setupHelper(v, d), w = [];
        x && w.push(T.name), w.push(C), this.options.strict || w.push(this.aliasable("container.hooks.helperMissing"));
        var O = ["(", this.itemsSeparatedBy(w, "||"), ")"], E = this.source.functionCall(O, "call", T.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(v, d) {
        var x = [];
        x.push(v[0]);
        for (var C = 1; C < v.length; C++)
          x.push(d, v[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, d) {
        var x = this.setupHelper(v, d);
        this.push(this.source.functionCall(x.name, "call", x.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(v, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, v, d), T = this.lastHelper = this.nameLookup("helpers", v, "helper"), w = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (w[0] = "(helper = ", w.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", w, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, d, x) {
        var C = [], T = this.setupParams(d, 1, C);
        v && (d = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", v ? C.unshift(d) : C.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), C.push(T), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var d = this.popStack(), x = void 0, C = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var w = this.hash;
        x && (w.contexts[v] = x), C && (w.types[v] = C), T && (w.ids[v] = T), w.values[v] = d;
      },
      pushId: function(v, d, x) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : v === "PathExpression" ? this.pushString(d) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: b,
      compileChildren: function(v, d) {
        for (var x = v.children, C = void 0, T = void 0, w = 0, O = x.length; w < O; w++) {
          C = x[w], T = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            C.index = N, C.name = "program" + N, this.context.programs[N] = T.compile(C, d, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = C, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var C = this.context.environments[d];
          if (C && C.equals(v))
            return C;
        }
      },
      programExpression: function(v) {
        var d = this.environment.children[v], x = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(v) {
        this.registers[v] || (this.registers[v] = !0, this.registers.list.push(v));
      },
      push: function(v) {
        return v instanceof g || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new g(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var d = ["("], x = void 0, C = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var w = this.popStack(!0);
        if (w instanceof g)
          x = [w.value], d = ["(", x], T = !0;
        else {
          C = !0;
          var O = this.incrStack();
          d = ["((", this.push(O), " = ", w, ")"], x = this.topStack();
        }
        var E = v.call(this, x);
        T || this.popStack(), C && this.stackSlot--, this.push(d.concat(E, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var v = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, x = v.length; d < x; d++) {
          var C = v[d];
          if (C instanceof g)
            this.compileStack.push(C);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", C, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(v) {
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!v && x instanceof g)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, d = v[v.length - 1];
        return d instanceof g ? d.value : d;
      },
      contextName: function(v) {
        return this.useDepths && v ? "depths[" + v + "]" : "depth" + v;
      },
      quotedString: function(v) {
        return this.source.quotedString(v);
      },
      objectLiteral: function(v) {
        return this.source.objectLiteral(v);
      },
      aliasable: function(v) {
        var d = this.aliases[v];
        return d ? (d.referenceCount++, d) : (d = this.aliases[v] = this.source.wrap(v), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(v, d, x) {
        var C = [], T = this.setupHelperArgs(d, v, C, x), w = this.nameLookup("helpers", d, "helper"), O = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: T,
          name: w,
          callParams: [O].concat(C)
        };
      },
      setupParams: function(v, d, x) {
        var C = {}, T = [], w = [], O = [], E = !x, N = void 0;
        E && (x = []), C.name = this.quotedString(v), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var D = this.popStack(), M = this.popStack();
        (M || D) && (C.fn = M || "container.noop", C.inverse = D || "container.noop");
        for (var U = d; U--; )
          N = this.popStack(), x[U] = N, this.trackIds && (O[U] = this.popStack()), this.stringParams && (w[U] = this.popStack(), T[U] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(O)), this.stringParams && (C.types = this.source.generateArray(w), C.contexts = this.source.generateArray(T)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(v, d, x, C) {
        var T = this.setupParams(v, d, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), C ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var m = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = b.RESERVED_WORDS = {}, d = 0, x = m.length; d < x; d++)
        v[m[d]] = !0;
    })(), b.isValidJavaScriptVariableName = function(m) {
      return !b.RESERVED_WORDS[m] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(m);
    };
    function _(m, v, d, x, C) {
      var T = v.popStack(), w = d.length;
      for (m && w--; x < w; x++)
        T = v.nameLookup(T, d[x], C);
      return m ? [v.aliasable("container.strict"), "(", T, ", ", v.quotedString(d[x]), ", ", JSON.stringify(v.source.currentLocation), " )"] : T;
    }
    r.default = b, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var xy;
function TE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(w) {
      return w && w.__esModule ? w : { default: w };
    }
    var s = hE(), o = i(s), u = B0(), f = i(u), p = vE(), h = yE(), g = NE(), b = i(g), _ = U0(), m = i(_), v = P0(), d = i(v), x = o.default.create;
    function C() {
      var w = x();
      return w.compile = function(O, E) {
        return h.compile(O, E, w);
      }, w.precompile = function(O, E) {
        return h.precompile(O, E, w);
      }, w.AST = f.default, w.Compiler = h.Compiler, w.JavaScriptCompiler = b.default, w.Parser = p.parser, w.parse = p.parse, w.parseWithoutProcessing = p.parseWithoutProcessing, w;
    }
    var T = C();
    T.create = C, d.default(T), T.Visitor = m.default, T.default = T, r.default = T, t.exports = r.default;
  })(To, To.exports)), To.exports;
}
var Pt = TE();
const OE = /* @__PURE__ */ Gd(Pt), Z0 = /* @__PURE__ */ a2({
  __proto__: null,
  default: OE
}, [Pt]), er = SillyTavern.getContext(), zn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Wn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
};
new r0("dumb", {}).getSettings();
async function kE({
  profileId: t,
  userPrompt: r,
  buildPromptOptions: i,
  continueFrom: s,
  session: o,
  allCharacters: u,
  entriesGroupByWorldName: f,
  promptSettings: p,
  formatDescription: h,
  mainContextList: g,
  includeUserMacro: b,
  maxResponseToken: _,
  targetField: m,
  outputFormat: v
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = er.extensionSettings.connectionManager?.profiles?.find((D) => D.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = d.api ? er.CONNECT_API_MAP[d.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const C = {};
  C.char = o.fields.name.value ?? "{{char}}", C.user = b && xr ? xr : "{{user}}", C.persona = "{{persona}}", C.targetField = m, C.userInstructions = Pt.compile(r.trim(), { noEscape: !0 })(C), C.fieldSpecificInstructions = Pt.compile(
    o.draftFields[m]?.prompt ?? o.fields[m]?.prompt,
    { noEscape: !0 }
  )({
    ...C,
    char: m === "mes_example" ? "{{char}}" : C.char,
    user: m === "mes_example" ? "{{user}}" : C.user
  }), C.activeFormatInstructions = Pt.compile(h.content, { noEscape: !0 })(
    C
  );
  {
    const D = [];
    o.selectedCharacterIndexes.forEach((M) => {
      const U = parseInt(M), F = u[U];
      F && D.push(F);
    }), C.characters = D;
  }
  {
    const D = {};
    Object.entries(f).filter(
      ([M, U]) => U.length > 0 && o.selectedWorldNames.includes(M) && U.some((F) => !F.disable)
    ).forEach(([M, U]) => {
      D[M] = U.filter((F) => !F.disable);
    }), C.lorebooks = D;
  }
  {
    const D = {}, M = {}, U = {}, F = m.startsWith("alternate_greetings_"), I = Bt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([V, ue]) => {
      let ie = !1;
      if (I) {
        const de = V.startsWith("alternate_greetings_");
        F ? ie = de && V !== m || V === "first_mes" : ie = de;
      }
      if (!ie) {
        const de = Pt.compile(ue.value, { noEscape: !0 })({
          ...C,
          char: V === "mes_example" ? "{{char}}" : C.char,
          user: V === "mes_example" ? "{{user}}" : C.user
        });
        zn.includes(V) ? D[ue.label] = de : V.startsWith("alternate_greetings_") && (M[V] = de);
      }
    }), Object.entries(o.draftFields || {}).forEach(([V, ue]) => {
      U[ue.label] = Pt.compile(ue.value, { noEscape: !0 })(C);
    });
    const X = {};
    Object.keys(D).length > 0 && (X.core = D), Object.keys(M).length > 0 && (X.alternate_greetings = M), Object.keys(U).length > 0 && (X.draft = U), C.fields = X;
  }
  const T = [];
  {
    for (const D of g) {
      if (D.promptName === "chatHistory") {
        const I = await h0(x, i);
        if (I.warnings && I.warnings.length > 0)
          for (const X of I.warnings)
            Ne("warning", X);
        T.push(...I.result);
        continue;
      }
      let M = structuredClone(C);
      D.promptName === "stDescription" && (M.char = "{{char}}", M.user = "{{user}}");
      const U = p[D.promptName];
      if (!U)
        continue;
      const F = {
        role: D.role,
        content: Pt.compile(U.content, { noEscape: !0 })(M)
      };
      F.content = F.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), F.content = F.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), F.content = er.substituteParams(F.content), F.content = F.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), F.content = F.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), F.content && T.push(F);
    }
    s && T.push({
      role: "assistant",
      content: Rv(s, v)
    });
  }
  const w = await er.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    _
  ), O = s ? Rv(s, v) + w.content : w.content, E = R0(O, v);
  let N;
  if (typeof E == "string")
    N = E;
  else if (typeof E == "object" && E !== null)
    if ("response" in E && typeof E.response == "string")
      N = E.response;
    else {
      const D = Object.values(E)[0];
      N = D ? String(D) : "";
    }
  else
    N = "";
  return N;
}
const Da = "SillyTavern-Character-Creator", G0 = "0.3.0", DE = "F_1.9", ME = {
  EXTENSION: "charCreator"
}, Wo = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "xmlFormat",
  "jsonFormat",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription",
  "reviseJsonPrompt",
  "reviseXmlPrompt",
  "reviseTaskDescription"
], Ke = {
  stDescription: kd,
  charDefinitions: T0,
  lorebookDefinitions: O0,
  xmlFormat: QS,
  jsonFormat: JS,
  noneFormat: KS,
  worldInfoCharDefinition: WS,
  existingFieldDefinitions: nl,
  taskDescription: Wd,
  outputFormatInstructions: Kd,
  personaDescription: ex,
  reviseJsonPrompt: tx,
  reviseXmlPrompt: nx,
  reviseTaskDescription: rx
}, V0 = {
  version: G0,
  formatVersion: DE,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  outputFormat: "xml",
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "last",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    existingFields: !0,
    worldInfo: !0,
    persona: !0,
    dontSendOtherGreetings: !1
  },
  defaultPromptEngineeringMode: "native",
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: Ke.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: Ke.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: Ke.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: Ke.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: Ke.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: Ke.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: Ke.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: nl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: Wd,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: Kd,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: Ke.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: Ke.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: Ke.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: Ke.reviseTaskDescription,
      isDefault: !0,
      label: "Revise Session Task Description"
    }
  },
  // Generic Prompt Presets
  promptPreset: "default",
  promptPresets: {
    default: {
      content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "chatHistory",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "stDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "charDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "lorebookDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "existingFieldDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "personaDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "outputFormatInstructions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "taskDescription",
          role: "user"
        }
      ]
    }
  },
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function Rd(t) {
  const i = t.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return i.map((o, u) => {
    const f = o.replace(/^\d+/, "");
    if (f) {
      const p = s ? `${f[0].toUpperCase()}${f.slice(1).toLowerCase()}` : f.toLowerCase();
      return s || (s = !0), p;
    }
    return "";
  }).join("");
}
const Bt = new r0(ME.EXTENSION, V0);
async function jE() {
  return new Promise((t, r) => {
    Bt.initializeSettings({
      strategy: [
        {
          from: "*",
          to: "F_1.4",
          action(i) {
            return {
              profileId: i?.profileId ?? "",
              maxContextType: i?.maxContextType ?? "profile",
              maxContextValue: i?.maxContextValue ?? 16384,
              maxResponseToken: i?.maxResponseToken ?? 1024,
              outputFormat: i?.outputFormat ?? "xml",
              contextToSend: {
                ...i?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: Ke.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Ke.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: Ke.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: Ke.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: Ke.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: Ke.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: Ke.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: Wd,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: Kd,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: Ke.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: i?.default ?? "default",
              promptPresets: i?.promptPresets ?? {
                default: {
                  content: "Generate the field content based on the chat history and existing character details. Be creative but consistent."
                }
              },
              mainContextTemplatePreset: "default",
              mainContextTemplatePresets: {
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              },
              // World Info
              showSaveAsWorldInfoEntry: i?.showSaveAsWorldInfoEntry ?? {
                show: i?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(i) {
            return {
              ...i,
              // Update persona
              prompts: {
                ...i?.prompts,
                personaDescription: {
                  content: Ke.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...i?.mainContextTemplatePresets,
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(i) {
            return await Ne("info", `[${Da}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: Ke.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Ke.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: Ke.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: nl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                }
              }
            };
          }
        },
        {
          from: "F_1.6",
          to: "F_1.7",
          async action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kd), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(i) {
            const s = {
              ...i,
              defaultPromptEngineeringMode: "native"
            };
            return s.prompts || (s.prompts = {}), s.prompts.reviseJsonPrompt = {
              content: Ke.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: Ke.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: Ke.reviseTaskDescription,
              isDefault: !0,
              label: "Revise Session Task Description"
            }, i.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = T0), i.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = O0), i.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = nl), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(i) {
            const s = {
              ...i
            };
            return i.prompts.stDescription.isDefault && (s.prompts.stDescription.content = kd), s;
          }
        }
      ]
    }).then((i) => {
      t();
    }).catch((i) => {
      console.error(`[${Da}] Error initializing settings:`, i), Ne("error", `[${Da}] Failed to initialize settings: ${i.message}`), er.Popup.show.confirm(
        `[${Da}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Bt.resetSettings(), Ne("success", `[${Da}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const pe = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("button", { className: o, ...s, children: t });
}, RE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = $.useMemo(() => {
    const f = [];
    return i || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && f.push("text_pole"), f.push(r), f.filter(Boolean).join(" ");
  }, [i, r, s]);
  if (s === "checkbox") {
    const f = i ? r : `checkbox_label ${r ?? ""}`.trim();
    return /* @__PURE__ */ S.jsxs("label", { className: f, children: [
      /* @__PURE__ */ S.jsx("input", { type: "checkbox", ...o }),
      t && /* @__PURE__ */ S.jsx("span", { children: t })
    ] });
  }
  return /* @__PURE__ */ S.jsx("input", { type: s, className: u, ...o });
}, yu = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("select", { className: o, ...s, children: t });
}, Qt = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = $.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: o, ...s, children: t });
};
var zE = t0(), Sn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(Sn || {}), Wr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Wr || {});
const LE = SillyTavern.getContext(), zi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = $.useRef(null), h = $.useRef(null), [g, b] = $.useState(!1), [_, m] = $.useState(null), v = $.useRef(LE.uuidv4()), d = $.useRef({
    id: v.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  $.useEffect(() => {
    const w = p.current;
    if (!w) return;
    const O = (E) => {
      E.preventDefault(), o || x(Wr.CANCELLED);
    };
    return w.addEventListener("cancel", O), d.current.dlg = w, d.current.mainInput = h.current, Ci.util.popups.push(d.current), w.showModal || (w.classList.add("poly_dialog"), tv.registerDialog(w), new ResizeObserver((E) => {
      for (const N of E)
        tv.reposition(N.target);
    }).observe(w)), w.showModal(), qf(), () => {
      ev(Ci.util.popups, d.current), qf(), w.removeEventListener("cancel", O);
    };
  }, []);
  const x = async (w) => {
    var O, E;
    let N = w;
    if (r === Sn.INPUT && (w >= Wr.AFFIRMATIVE ? N = (O = h.current) == null ? void 0 : O.value : w === Wr.NEGATIVE ? N = !1 : w === Wr.CANCELLED ? N = null : N = !1), (E = s.customInputs) != null && E.length) {
      const M = new Map(
        s.customInputs.map((U) => {
          var F;
          const I = (F = p.current) == null ? void 0 : F.querySelector(`#${U.id}`);
          return [I.id, I.checked];
        })
      );
      d.current.inputResults = M;
    }
    if (d.current.result = w, d.current.value = N, s.onClosing && !await s.onClosing(d.current)) {
      b(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    b(!1), Ci.util.lastResult = {
      value: N,
      result: w,
      inputResults: d.current.inputResults
    };
    const D = p.current;
    D && (D.setAttribute("closing", ""), qf(), r2(D, async () => {
      var M;
      if (D.close(), s.onClose && await s.onClose(d.current), ev(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const U = (M = document.activeElement) == null ? void 0 : M.closest(".popup"), F = U?.getAttribute("data-id"), I = Ci.util.popups.find((X) => X.id === F);
        I && I.lastFocus && I.lastFocus.focus();
      }
      u(N);
    }));
  }, C = (w) => {
    w.target instanceof HTMLElement && w.target !== p.current && (m(w.target), d.current.lastFocus = w.target);
  }, T = async (w) => {
  };
  return zE.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const w = ["popup"];
          return s.wide && w.push("wide_dialogue_popup"), s.wider && w.push("wider_dialogue_popup"), s.large && w.push("large_dialogue_popup"), s.transparent && w.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && w.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && w.push("vertical_scrolling_dialogue_popup"), s.animation && w.push(`popup--animation-${s.animation}`), w.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: T,
        onFocus: C,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === Sn.INPUT && /* @__PURE__ */ S.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: i,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ S.jsx("div", { className: "popup-inputs", children: s.customInputs.map((w) => /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: w.id, children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", id: w.id, defaultChecked: w.defaultState }),
            /* @__PURE__ */ S.jsx("span", { "data-i18n": w.label, children: w.label }),
            w.tooltip && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: w.tooltip,
                "data-i18n": `[title]${w.tooltip}`
              }
            )
          ] }, w.id)) }),
          r !== Sn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((w, O) => {
              const E = typeof w == "string" ? { text: w, result: O + 2 } : w;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var N;
                    (N = E.action) == null || N.call(E), x(E.result ?? O + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                O
              );
            }),
            r !== Sn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(Wr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== Sn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(Wr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === Sn.DISPLAY && /* @__PURE__ */ S.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(Wr.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, Zs = (t, r, i) => {
  if (!t || !t.api)
    return !1;
  const s = i[t.api];
  if (!s || !Object.hasOwn(r, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, Sr = SillyTavern.getContext(), Y0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = $.useState(t ?? ""), [g, b] = $.useState(Date.now()), { isEnabled: _, profiles: m, connectApiMap: v } = $.useMemo(() => {
    var C, T;
    return (C = Sr.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = Sr.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: Sr.CONNECT_API_MAP
    };
  }, [g]);
  $.useEffect(() => {
    if (!_) return;
    const C = (O) => {
      Zs(O, r, v) && (b(Date.now()), o?.(O));
    }, T = (O, E) => {
      const N = Zs(O, r, v), D = Zs(E, r, v);
      (N || D) && b(Date.now()), u?.(O, E), p === O.id && !D && (h(""), s?.(void 0));
    }, w = (O) => {
      Zs(O, r, v) && (b(Date.now()), f?.(O), p === O.id && (h(""), s?.(void 0)));
    };
    return Sr.eventSource.on("CONNECTION_PROFILE_CREATED", C), Sr.eventSource.on("CONNECTION_PROFILE_UPDATED", T), Sr.eventSource.on("CONNECTION_PROFILE_DELETED", w), () => {
      Sr.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), Sr.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), Sr.eventSource.removeListener("CONNECTION_PROFILE_DELETED", w);
    };
  }, [_, p, r, v, s, o, u, f]);
  const d = $.useMemo(() => {
    if (!_) return [];
    const C = m.filter((w) => Zs(w, r, v)), T = {};
    for (const [w, O] of Object.entries(r))
      T[w] = { label: O, profiles: [] };
    for (const w of C) {
      const O = v[w.api];
      T[O.selected] && T[O.selected].profiles.push(w);
    }
    for (const w of Object.values(T))
      w.profiles.sort((O, E) => (O.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(T).filter((w) => w.profiles.length > 0);
  }, [_, m, r, v]), x = $.useCallback(
    (C) => {
      const T = C.target.value;
      h(T);
      const w = m.find((O) => O.id === T);
      s?.(w);
    },
    [m, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(yu, { value: p, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: i }),
    d.map((C) => /* @__PURE__ */ S.jsx("optgroup", { label: C.label, children: C.profiles.map((T) => /* @__PURE__ */ S.jsx("option", { value: T.id, children: T.name }, T.id)) }, C.label))
  ] }) : /* @__PURE__ */ S.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, IE = cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: g,
      canDelete: b = !0,
      canToggle: _ = !0,
      showSelect: m = !0,
      canSelect: v = !0,
      selectOptions: d = [],
      selectValue: x
    } = t, C = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !g ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, w = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ S.jsxs("li", { className: "sortable-list-item", style: C, "data-id": p, children: [
      /* @__PURE__ */ S.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ S.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: h
        }
      ),
      s && m && v && /* @__PURE__ */ S.jsx(
        yu,
        {
          value: x,
          onChange: (O) => f(p, O.target.value),
          disabled: !g,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : d.map((O) => /* @__PURE__ */ S.jsx("option", { value: O.value, children: O.label }, O.value))
        }
      ),
      s && (!m || !v) && /* @__PURE__ */ S.jsx("span", { style: w }),
      r && _ && /* @__PURE__ */ S.jsx(
        pe,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${g ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: g ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: w }),
      i && b && /* @__PURE__ */ S.jsx(
        pe,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...T,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(p)
        }
      ),
      i && !b && /* @__PURE__ */ S.jsx("span", { style: { ...w, marginRight: 0 } })
    ] });
  }
), PE = ({
  items: t,
  onItemsChange: r,
  showToggleButton: i = !1,
  showDeleteButton: s = !1,
  showSelectInput: o = !1,
  sortableJsOptions: u = {}
}) => {
  const f = $.useRef(null), p = $.useRef(null);
  $.useEffect(() => (f.current && (p.current = Ee.create(f.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (_) => {
      const { oldIndex: m, newIndex: v } = _;
      if (m === void 0 || v === void 0 || m === v)
        return;
      const d = Array.from(t), [x] = d.splice(m, 1);
      d.splice(v, 0, x), r(d);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((m) => m.id === _ ? { ...m, enabled: !m.enabled } : m));
  }, g = (_) => {
    r(t.filter((m) => m.id !== _));
  }, b = (_, m) => {
    r(t.map((v) => v.id === _ ? { ...v, selectValue: m } : v));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    IE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: g,
      onSelectChange: b
    },
    _.id
  )) });
}, hd = ({
  items: t,
  value: r,
  onChange: i,
  placeholder: s = "Select items...",
  closeOnSelect: o = !1,
  multiple: u = !0,
  disabled: f = !1,
  onBeforeSelection: p,
  enableSearch: h = !1,
  searchPlaceholder: g = "Search...",
  searchNoResultsText: b = "No results found",
  searchFuseOptions: _,
  inputClasses: m,
  containerClasses: v
}) => {
  const [d, x] = $.useState(!1), [C, T] = $.useState(""), w = $.useRef(null);
  $.useEffect(() => {
    const M = (U) => {
      w.current && !w.current.contains(U.target) && x(!1);
    };
    return document.addEventListener("mousedown", M), () => document.removeEventListener("mousedown", M);
  }, []), $.useEffect(() => {
    d || T("");
  }, [d]);
  const O = $.useMemo(() => {
    if (!h) return null;
    const M = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Pi(t, M);
  }, [t, h, _]), E = $.useMemo(() => !h || !C.trim() || !O ? t : O.search(C.trim()).map((M) => M.item), [t, C, h, O]), N = async (M) => {
    let U;
    u ? U = r.includes(M) ? r.filter((F) => F !== M) : [...r, M] : U = r.includes(M) ? [] : [M], !(p && !await Promise.resolve(p(r, U))) && (i(U), o && x(!1));
  }, D = $.useMemo(() => {
    var M;
    return r.length === 0 ? s : r.length === 1 ? ((M = t.find((U) => U.value === r[0])) == null ? void 0 : M.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: w,
      className: `fancy-dropdown-container ${v ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: f ? 0.6 : 1,
        pointerEvents: f ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !f && x(!d),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ S.jsx("span", { className: "fancy-dropdown-trigger-text", children: D }),
              /* @__PURE__ */ S.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              h && /* @__PURE__ */ S.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ S.jsx(
                    RE,
                    {
                      type: "text",
                      placeholder: g,
                      value: C,
                      onChange: (M) => T(M.target.value),
                      autoFocus: !0,
                      className: m
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((M) => /* @__PURE__ */ S.jsx(
                BE,
                {
                  item: M,
                  isSelected: r.includes(M.value),
                  onClick: N
                },
                M.value
              )) : /* @__PURE__ */ S.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: b
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, BE = cu.memo(({ item: t, isSelected: r, onClick: i }) => {
  const [s, o] = $.useState(!1);
  return /* @__PURE__ */ S.jsxs(
    "li",
    {
      onClick: () => i(t.value),
      onMouseEnter: () => o(!0),
      onMouseLeave: () => o(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: r ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ S.jsx("span", { children: t.label }),
        r && /* @__PURE__ */ S.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), pd = SillyTavern.getContext(), bu = ({
  value: t,
  items: r,
  readOnlyValues: i = [],
  label: s,
  onChange: o,
  onItemsChange: u,
  enableCreate: f = !1,
  enableRename: p = !1,
  enableDelete: h = !1,
  onCreate: g,
  onRename: b,
  onDelete: _,
  buttons: m
}) => {
  const v = $.useMemo(() => r.find((w) => w.value === t), [r, t]), d = $.useCallback((w) => w ? i.includes(w) : !1, [i]), x = async () => {
    const w = await pd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!w || w.trim() === "") return;
    const O = w.trim();
    if (r.some((N) => N.value === O)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: O, label: O };
    if (g) {
      const N = await Promise.resolve(g(O));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? E = { value: N.value, label: N.value } : E = N.value);
    }
    u([...r, E]), o(E.value, t);
  }, C = async () => {
    if (!v) {
      await Ne("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(v.value)) {
      await Ne("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const w = await pd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!w || w.trim() === "" || w.trim() === v.value) return;
    const O = w.trim();
    if (r.some((D) => D.value === O)) {
      await Ne("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: O, label: O };
    if (b) {
      const D = await Promise.resolve(b(v.value, O));
      if (!D.confirmed) return;
      D.value && (typeof D.value == "string" ? E = { value: D.value, label: D.value } : E = D.value);
    }
    const N = r.map((D) => D.value === v.value ? E : D);
    u(N), o(E.value, t);
  }, T = async () => {
    var w;
    if (!v) {
      await Ne("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(v.value)) {
      await Ne("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || _ && !await Promise.resolve(_(v.value)))
      return;
    const O = r.findIndex((D) => D.value === v.value), E = r.filter((D) => D.value !== v.value);
    u(E);
    let N;
    if (E.length > 0) {
      const D = Math.min(O, E.length - 1);
      N = (w = E[D]) == null ? void 0 : w.value;
    }
    o(N, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(yu, { value: t ?? "", onChange: (w) => o(w.target.value, t), children: r.map((w) => /* @__PURE__ */ S.jsx("option", { value: w.value, children: w.label }, w.value)) }),
    f && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      pe,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    m?.map((w) => /* @__PURE__ */ S.jsx(
      pe,
      {
        className: w.icon,
        title: w.title,
        onClick: w.onClick,
        disabled: w.disabled,
        "data-i18n": w.i18n ? `[title]${w.i18n}` : void 0
      },
      w.key
    ))
  ] });
}, X0 = () => {
  const [, t] = $.useState(0);
  return $.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, md = SillyTavern.getContext(), UE = () => {
  const t = X0(), r = Bt.getSettings(), [i, s] = $.useState(Wo[0]), o = $.useCallback(
    (E) => {
      const N = Bt.getSettings();
      E(N), Bt.saveSettings(), t();
    },
    [t]
  ), u = $.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [r.mainContextTemplatePresets]
  ), f = $.useMemo(
    () => Object.entries(r.prompts).map(([E, N]) => ({
      value: E,
      label: `${N.label} (${E})`
    })),
    [r.prompts]
  ), p = $.useMemo(() => {
    const E = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return E ? E.prompts.map((N) => {
      const D = r.prompts[N.promptName], M = D ? `${D.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: M,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (E) => {
    o((N) => {
      N.mainContextTemplatePreset = E ?? "default";
    });
  }, g = (E) => {
    o((N) => {
      const D = {};
      E.forEach((M) => {
        D[M.value] = N.mainContextTemplatePresets[M.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = D;
    });
  }, b = (E) => {
    o((N) => {
      const D = E.map((F) => ({
        promptName: F.id,
        enabled: F.enabled,
        role: F.selectValue ?? "user"
      })), M = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: D
      }, U = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: M
      };
      N.mainContextTemplatePresets = U;
    });
  }, _ = async () => {
    await md.Popup.show.confirm("Restore default", "Are you sure?") && o((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(V0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, m = (E) => {
    o((N) => {
      const D = E.map((I) => I.value);
      Object.keys(N.prompts).filter((I) => !D.includes(I)).forEach((I) => {
        Object.values(N.mainContextTemplatePresets).forEach((X) => {
          X.prompts = X.prompts.filter((V) => V.promptName !== I);
        });
      });
      const F = {};
      E.forEach((I) => {
        F[I.value] = N.prompts[I.value] ?? { content: "", isDefault: !1, label: I.label };
      }), N.prompts = F;
    });
  }, v = (E) => {
    const N = Rd(E);
    return N ? r.prompts[N] ? (Ne("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (o((D) => {
      D.prompts = {
        ...D.prompts,
        [N]: { content: D.prompts[i]?.content ?? "", isDefault: !1, label: E }
      };
      const M = Object.fromEntries(
        Object.entries(D.mainContextTemplatePresets).map(([U, F]) => [
          U,
          {
            ...F,
            prompts: [...F.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      D.mainContextTemplatePresets = M;
    }), s(N), { confirmed: !0, value: N }) : (Ne("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, d = (E, N) => {
    const D = Rd(N);
    return D ? r.prompts[D] ? (Ne("error", `Prompt name already exists: ${D}`), { confirmed: !1 }) : (o((M) => {
      const { [E]: U, ...F } = M.prompts;
      M.prompts = {
        ...F,
        [D]: { ...U, label: N }
      };
      const I = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([X, V]) => [
          X,
          {
            ...V,
            prompts: V.prompts.map((ue) => ue.promptName === E ? { ...ue, promptName: D } : ue)
          }
        ])
      );
      M.mainContextTemplatePresets = I;
    }), s(D), { confirmed: !0, value: D }) : (Ne("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (E) => {
    const N = E.target.value;
    o((D) => {
      const M = D.prompts[i];
      M && (D.prompts = {
        ...D.prompts,
        [i]: {
          ...M,
          // Copy existing properties
          content: N,
          isDefault: Wo.includes(i) ? Ke[i] === N : !1
        }
      });
    });
  }, C = async () => {
    const E = r.prompts[i];
    if (!E) return Ne("warning", "No prompt selected.");
    await md.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && o((D) => {
      D.prompts = {
        ...D.prompts,
        [i]: {
          ...D.prompts[i],
          content: Ke[i]
        }
      };
    });
  }, T = async () => {
    await md.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Bt.resetSettings(), t(), Ne("success", "Settings have been reset."));
  }, w = r.prompts[i], O = Wo.includes(i);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: _
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        bu,
        {
          label: "Template",
          items: u,
          value: r.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: g,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
        PE,
        {
          items: p,
          onItemsChange: b,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Prompt Templates" }),
        O && /* @__PURE__ */ S.jsx(
          pe,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx(
        bu,
        {
          label: "Prompt",
          items: f,
          value: i,
          readOnlyValues: Wo,
          onChange: (E) => s(E ?? ""),
          onItemsChange: m,
          onCreate: v,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        Qt,
        {
          value: w?.content ?? "",
          onChange: x,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: "checkbox",
          checked: r.showSaveAsWorldInfoEntry.show,
          onChange: (E) => o((N) => {
            N.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(pe, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
      /* @__PURE__ */ S.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Ey = ({
  fieldId: t,
  label: r,
  value: i,
  prompt: s,
  large: o = !1,
  rows: u = 3,
  promptEnabled: f = !0,
  isDraft: p = !1,
  isGenerating: h = !1,
  onValueChange: g,
  onPromptChange: b,
  onGenerate: _,
  onContinue: m,
  onClear: v,
  onCompare: d,
  onDelete: x,
  onOpenReviseSessions: C
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(Qt, { value: i, onChange: (T) => g(t, T.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
      /* @__PURE__ */ S.jsx(pe, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => m(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(pe, { onClick: () => v(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      C && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(pe, { onClick: () => C(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ S.jsx(pe, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && x && /* @__PURE__ */ S.jsx(pe, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    Qt,
    {
      value: s,
      onChange: (T) => b(t, T.target.value),
      placeholder: `Enter additional prompt for ${r.toLowerCase()}...`,
      rows: 3
    }
  ) })
] }), HE = SillyTavern.getContext(), qE = ({
  greetings: t,
  onGreetingsChange: r,
  onGenerate: i,
  onContinue: s,
  onCompare: o,
  isGenerating: u
}) => {
  const [f, p] = $.useState(0);
  $.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const m = [...t, { value: "", prompt: "" }];
    r(m), p(m.length - 1);
  }, g = async () => {
    if (t.length === 0) return;
    if (await HE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const v = t.filter((d, x) => x !== f);
      r(v);
    }
  }, b = (m, v, d) => {
    const x = [...t];
    x[m][v] = d, r(x);
  }, _ = t[f];
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((m, v) => /* @__PURE__ */ S.jsxs(
            pe,
            {
              onClick: () => p(v),
              className: `menu_button ${v === f ? "active" : ""}`,
              children: [
                "Greeting ",
                v + 1
              ]
            },
            v
          ))
        }
      ),
      /* @__PURE__ */ S.jsxs(pe, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          Qt,
          {
            value: _?.value ?? "",
            onChange: (m) => b(f, "value", m.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          Qt,
          {
            value: _?.prompt ?? "",
            onChange: (m) => b(f, "prompt", m.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ S.jsx(pe, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            onClick: () => b(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ S.jsx(pe, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ S.jsx(
          pe,
          {
            onClick: g,
            disabled: u,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var aa = (
  /** @class */
  (function() {
    function t() {
    }
    return t.prototype.diff = function(r, i, s) {
      s === void 0 && (s = {});
      var o;
      typeof s == "function" ? (o = s, s = {}) : "callback" in s && (o = s.callback);
      var u = this.castInput(r, s), f = this.castInput(i, s), p = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(f, s));
      return this.diffWithOptionsObj(p, h, s, o);
    }, t.prototype.diffWithOptionsObj = function(r, i, s, o) {
      var u = this, f, p = function(E) {
        if (E = u.postProcess(E, s), o) {
          setTimeout(function() {
            o(E);
          }, 0);
          return;
        } else
          return E;
      }, h = i.length, g = r.length, b = 1, _ = h + g;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var m = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, v = Date.now() + m, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= g && x + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var C = -1 / 0, T = 1 / 0, w = function() {
        for (var E = Math.max(C, -b); E <= Math.min(T, b); E += 2) {
          var N = void 0, D = d[E - 1], M = d[E + 1];
          D && (d[E - 1] = void 0);
          var U = !1;
          if (M) {
            var F = M.oldPos - E;
            U = M && 0 <= F && F < h;
          }
          var I = D && D.oldPos + 1 < g;
          if (!U && !I) {
            d[E] = void 0;
            continue;
          }
          if (!I || U && D.oldPos < M.oldPos ? N = u.addToPath(M, !0, !1, 0, s) : N = u.addToPath(D, !1, !0, 1, s), x = u.extractCommon(N, i, r, E, s), N.oldPos + 1 >= g && x + 1 >= h)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          d[E] = N, N.oldPos + 1 >= g && (T = Math.min(T, E - 1)), x + 1 >= h && (C = Math.max(C, E + 1));
        }
        b++;
      };
      if (o)
        (function E() {
          setTimeout(function() {
            if (b > _ || Date.now() > v)
              return o(void 0);
            w() || E();
          }, 0);
        })();
      else
        for (; b <= _ && Date.now() <= v; ) {
          var O = w();
          if (O)
            return O;
        }
    }, t.prototype.addToPath = function(r, i, s, o, u) {
      var f = r.lastComponent;
      return f && !u.oneChangePerToken && f.added === i && f.removed === s ? {
        oldPos: r.oldPos + o,
        lastComponent: { count: f.count + 1, added: i, removed: s, previousComponent: f.previousComponent }
      } : {
        oldPos: r.oldPos + o,
        lastComponent: { count: 1, added: i, removed: s, previousComponent: f }
      };
    }, t.prototype.extractCommon = function(r, i, s, o, u) {
      for (var f = i.length, p = s.length, h = r.oldPos, g = h - o, b = 0; g + 1 < f && h + 1 < p && this.equals(s[h + 1], i[g + 1], u); )
        g++, h++, b++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return b && !u.oneChangePerToken && (r.lastComponent = { count: b, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, g;
    }, t.prototype.equals = function(r, i, s) {
      return s.comparator ? s.comparator(r, i) : r === i || !!s.ignoreCase && r.toLowerCase() === i.toLowerCase();
    }, t.prototype.removeEmpty = function(r) {
      for (var i = [], s = 0; s < r.length; s++)
        r[s] && i.push(r[s]);
      return i;
    }, t.prototype.castInput = function(r, i) {
      return r;
    }, t.prototype.tokenize = function(r, i) {
      return Array.from(r);
    }, t.prototype.join = function(r) {
      return r.join("");
    }, t.prototype.postProcess = function(r, i) {
      return r;
    }, Object.defineProperty(t.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.buildValues = function(r, i, s) {
      for (var o = [], u; r; )
        o.push(r), u = r.previousComponent, delete r.previousComponent, r = u;
      o.reverse();
      for (var f = o.length, p = 0, h = 0, g = 0; p < f; p++) {
        var b = o[p];
        if (b.removed)
          b.value = this.join(s.slice(g, g + b.count)), g += b.count;
        else {
          if (!b.added && this.useLongestToken) {
            var _ = i.slice(h, h + b.count);
            _ = _.map(function(m, v) {
              var d = s[g + v];
              return d.length > m.length ? d : m;
            }), b.value = this.join(_);
          } else
            b.value = this.join(i.slice(h, h + b.count));
          h += b.count, b.added || (g += b.count);
        }
      }
      return o;
    }, t;
  })()
), FE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), ZE = (
  /** @class */
  (function(t) {
    FE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r;
  })(aa)
);
new ZE();
function Cy(t, r) {
  var i;
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[i] != r[i])
      return t.slice(0, i);
  return t.slice(0, i);
}
function wy(t, r) {
  var i;
  if (!t || !r || t[t.length - 1] != r[r.length - 1])
    return "";
  for (i = 0; i < t.length && i < r.length; i++)
    if (t[t.length - (i + 1)] != r[r.length - (i + 1)])
      return t.slice(-i);
  return t.slice(-i);
}
function zd(t, r, i) {
  if (t.slice(0, r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't start with prefix ").concat(JSON.stringify(r), "; this is a bug"));
  return i + t.slice(r.length);
}
function Ld(t, r, i) {
  if (!r)
    return t + i;
  if (t.slice(-r.length) != r)
    throw Error("string ".concat(JSON.stringify(t), " doesn't end with suffix ").concat(JSON.stringify(r), "; this is a bug"));
  return t.slice(0, -r.length) + i;
}
function Gs(t, r) {
  return zd(t, r, "");
}
function eu(t, r) {
  return Ld(t, r, "");
}
function Ay(t, r) {
  return r.slice(0, GE(t, r));
}
function GE(t, r) {
  var i = 0;
  t.length > r.length && (i = t.length - r.length);
  var s = r.length;
  t.length < r.length && (s = t.length);
  var o = Array(s), u = 0;
  o[0] = 0;
  for (var f = 1; f < s; f++) {
    for (r[f] == r[u] ? o[f] = o[u] : o[f] = u; u > 0 && r[f] != r[u]; )
      u = o[u];
    r[f] == r[u] && u++;
  }
  u = 0;
  for (var p = i; p < t.length; p++) {
    for (; u > 0 && t[p] != r[u]; )
      u = o[u];
    t[p] == r[u] && u++;
  }
  return u;
}
function Vs(t) {
  var r;
  for (r = t.length - 1; r >= 0 && t[r].match(/\s/); r--)
    ;
  return t.substring(r + 1);
}
function Kr(t) {
  var r = t.match(/^\s*/);
  return r ? r[0] : "";
}
var $0 = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), _u = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", VE = new RegExp("[".concat(_u, "]+|\\s+|[^").concat(_u, "]"), "ug"), YE = (
  /** @class */
  (function(t) {
    $0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreCase && (i = i.toLowerCase(), s = s.toLowerCase()), i.trim() === s.trim();
    }, r.prototype.tokenize = function(i, s) {
      s === void 0 && (s = {});
      var o;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        o = Array.from(u.segment(i), function(h) {
          return h.segment;
        });
      } else
        o = i.match(VE) || [];
      var f = [], p = null;
      return o.forEach(function(h) {
        /\s/.test(h) ? p == null ? f.push(h) : f.push(f.pop() + h) : p != null && /\s/.test(p) ? f[f.length - 1] == p ? f.push(f.pop() + h) : f.push(p + h) : f.push(h), p = h;
      }), f;
    }, r.prototype.join = function(i) {
      return i.map(function(s, o) {
        return o == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, r.prototype.postProcess = function(i, s) {
      if (!i || s.oneChangePerToken)
        return i;
      var o = null, u = null, f = null;
      return i.forEach(function(p) {
        p.added ? u = p : p.removed ? f = p : ((u || f) && Ny(o, f, u, p), o = p, u = null, f = null);
      }), (u || f) && Ny(o, f, u, null), i;
    }, r;
  })(aa)
), XE = new YE();
function Q0(t, r, i) {
  return XE.diff(t, r, i);
}
function Ny(t, r, i, s) {
  if (r && i) {
    var o = Kr(r.value), u = Vs(r.value), f = Kr(i.value), p = Vs(i.value);
    if (t) {
      var h = Cy(o, f);
      t.value = Ld(t.value, f, h), r.value = Gs(r.value, h), i.value = Gs(i.value, h);
    }
    if (s) {
      var g = wy(u, p);
      s.value = zd(s.value, p, g), r.value = eu(r.value, g), i.value = eu(i.value, g);
    }
  } else if (i) {
    if (t) {
      var b = Kr(i.value);
      i.value = i.value.substring(b.length);
    }
    if (s) {
      var b = Kr(s.value);
      s.value = s.value.substring(b.length);
    }
  } else if (t && s) {
    var _ = Kr(s.value), m = Kr(r.value), v = Vs(r.value), d = Cy(_, m);
    r.value = Gs(r.value, d);
    var x = wy(Gs(_, d), v);
    r.value = eu(r.value, x), s.value = zd(s.value, _, x), t.value = Ld(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var C = Kr(s.value), T = Vs(r.value), w = Ay(T, C);
    r.value = eu(r.value, w);
  } else if (t) {
    var O = Vs(t.value), E = Kr(r.value), w = Ay(O, E);
    r.value = Gs(r.value, w);
  }
}
var $E = (
  /** @class */
  (function(t) {
    $0(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      var s = new RegExp("(\\r?\\n)|[".concat(_u, "]+|[^\\S\\n\\r]+|[^").concat(_u, "]"), "ug");
      return i.match(s) || [];
    }, r;
  })(aa)
);
new $E();
var QE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), JE = (
  /** @class */
  (function(t) {
    QE(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = J0, i;
    }
    return r.prototype.equals = function(i, s, o) {
      return o.ignoreWhitespace ? ((!o.newlineIsToken || !i.includes(`
`)) && (i = i.trim()), (!o.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : o.ignoreNewlineAtEof && !o.newlineIsToken && (i.endsWith(`
`) && (i = i.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), t.prototype.equals.call(this, i, s, o);
    }, r;
  })(aa)
);
new JE();
function J0(t, r) {
  r.stripTrailingCr && (t = t.replace(/\r\n/g, `
`));
  var i = [], s = t.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var o = 0; o < s.length; o++) {
    var u = s[o];
    o % 2 && !r.newlineIsToken ? i[i.length - 1] += u : i.push(u);
  }
  return i;
}
var KE = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), WE = (
  /** @class */
  (function(t) {
    KE(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, r;
  })(aa)
);
new WE();
var eC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), tC = (
  /** @class */
  (function(t) {
    eC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.split(/([{}:;,]|\s+)/);
    }, r;
  })(aa)
);
new tC();
var nC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), rC = (
  /** @class */
  (function(t) {
    nC(r, t);
    function r() {
      var i = t !== null && t.apply(this, arguments) || this;
      return i.tokenize = J0, i;
    }
    return Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.castInput = function(i, s) {
      var o = s.undefinedReplacement, u = s.stringifyReplacer, f = u === void 0 ? function(p, h) {
        return typeof h > "u" ? o : h;
      } : u;
      return typeof i == "string" ? i : JSON.stringify(Id(i, null, null, f), null, "  ");
    }, r.prototype.equals = function(i, s, o) {
      return t.prototype.equals.call(this, i.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), o);
    }, r;
  })(aa)
);
new rC();
function Id(t, r, i, s, o) {
  r = r || [], i = i || [], s && (t = s(o === void 0 ? "" : o, t));
  var u;
  for (u = 0; u < r.length; u += 1)
    if (r[u] === t)
      return i[u];
  var f;
  if (Object.prototype.toString.call(t) === "[object Array]") {
    for (r.push(t), f = new Array(t.length), i.push(f), u = 0; u < t.length; u += 1)
      f[u] = Id(t[u], r, i, s, String(u));
    return r.pop(), i.pop(), f;
  }
  if (t && t.toJSON && (t = t.toJSON()), typeof t == "object" && t !== null) {
    r.push(t), f = {}, i.push(f);
    var p = [], h;
    for (h in t)
      Object.prototype.hasOwnProperty.call(t, h) && p.push(h);
    for (p.sort(), u = 0; u < p.length; u += 1)
      h = p[u], f[h] = Id(t[h], r, i, s, h);
    r.pop(), i.pop();
  } else
    f = t;
  return f;
}
var aC = /* @__PURE__ */ (function() {
  var t = function(r, i) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, o) {
      s.__proto__ = o;
    } || function(s, o) {
      for (var u in o) Object.prototype.hasOwnProperty.call(o, u) && (s[u] = o[u]);
    }, t(r, i);
  };
  return function(r, i) {
    if (typeof i != "function" && i !== null)
      throw new TypeError("Class extends value " + String(i) + " is not a constructor or null");
    t(r, i);
    function s() {
      this.constructor = r;
    }
    r.prototype = i === null ? Object.create(i) : (s.prototype = i.prototype, new s());
  };
})(), iC = (
  /** @class */
  (function(t) {
    aC(r, t);
    function r() {
      return t !== null && t.apply(this, arguments) || this;
    }
    return r.prototype.tokenize = function(i) {
      return i.slice();
    }, r.prototype.join = function(i) {
      return i;
    }, r.prototype.removeEmpty = function(i) {
      return i;
    }, r;
  })(aa)
);
new iC();
const sC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = $.useMemo(() => {
    const o = Q0(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const g = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += g), p.removed || (f += g);
    }), { originalHtml: u, newHtml: f };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ S.jsxs("h3", { children: [
      "Compare Changes for: ",
      i
    ] }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ S.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ S.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
};
function te(t, r, i) {
  function s(p, h) {
    var g;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (g = p._zod).traits ?? (g.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
    for (const b in f.prototype)
      b in p || Object.defineProperty(p, b, { value: f.prototype[b].bind(p) });
    p._zod.constr = f, p._zod.def = h;
  }
  const o = i?.Parent ?? Object;
  class u extends o {
  }
  Object.defineProperty(u, "name", { value: t });
  function f(p) {
    var h;
    const g = i?.Parent ? new u() : this;
    s(g, p), (h = g._zod).deferred ?? (h.deferred = []);
    for (const b of g._zod.deferred)
      b();
    return g;
  }
  return Object.defineProperty(f, "init", { value: s }), Object.defineProperty(f, Symbol.hasInstance, {
    value: (p) => i?.Parent && p instanceof i.Parent ? !0 : p?._zod?.traits?.has(t)
  }), Object.defineProperty(f, "name", { value: t }), f;
}
class Li extends Error {
  constructor() {
    super("Encountered Promise during synchronous parse. Use .parseAsync() instead.");
  }
}
class K0 extends Error {
  constructor(r) {
    super(`Encountered unidirectional transform during encode: ${r}`), this.name = "ZodEncodeError";
  }
}
const W0 = {};
function Ra(t) {
  return W0;
}
function e1(t) {
  const r = Object.values(t).filter((s) => typeof s == "number");
  return Object.entries(t).filter(([s, o]) => r.indexOf(+s) === -1).map(([s, o]) => o);
}
function Pd(t, r) {
  return typeof r == "bigint" ? r.toString() : r;
}
function nh(t) {
  return {
    get value() {
      {
        const r = t();
        return Object.defineProperty(this, "value", { value: r }), r;
      }
    }
  };
}
function rh(t) {
  return t == null;
}
function ah(t) {
  const r = t.startsWith("^") ? 1 : 0, i = t.endsWith("$") ? t.length - 1 : t.length;
  return t.slice(r, i);
}
function lC(t, r) {
  const i = (t.toString().split(".")[1] || "").length, s = r.toString();
  let o = (s.split(".")[1] || "").length;
  if (o === 0 && /\d?e-\d?/.test(s)) {
    const h = s.match(/\d?e-(\d?)/);
    h?.[1] && (o = Number.parseInt(h[1]));
  }
  const u = i > o ? i : o, f = Number.parseInt(t.toFixed(u).replace(".", "")), p = Number.parseInt(r.toFixed(u).replace(".", ""));
  return f % p / 10 ** u;
}
const Ty = Symbol("evaluating");
function nt(t, r, i) {
  let s;
  Object.defineProperty(t, r, {
    get() {
      if (s !== Ty)
        return s === void 0 && (s = Ty, s = i()), s;
    },
    set(o) {
      Object.defineProperty(t, r, {
        value: o
        // configurable: true,
      });
    },
    configurable: !0
  });
}
function La(t, r, i) {
  Object.defineProperty(t, r, {
    value: i,
    writable: !0,
    enumerable: !0,
    configurable: !0
  });
}
function Ia(...t) {
  const r = {};
  for (const i of t) {
    const s = Object.getOwnPropertyDescriptors(i);
    Object.assign(r, s);
  }
  return Object.defineProperties({}, r);
}
function Oy(t) {
  return JSON.stringify(t);
}
const t1 = "captureStackTrace" in Error ? Error.captureStackTrace : (...t) => {
};
function Su(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
const oC = nh(() => {
  if (typeof navigator < "u" && navigator?.userAgent?.includes("Cloudflare"))
    return !1;
  try {
    const t = Function;
    return new t(""), !0;
  } catch {
    return !1;
  }
});
function rl(t) {
  if (Su(t) === !1)
    return !1;
  const r = t.constructor;
  if (r === void 0)
    return !0;
  const i = r.prototype;
  return !(Su(i) === !1 || Object.prototype.hasOwnProperty.call(i, "isPrototypeOf") === !1);
}
function n1(t) {
  return rl(t) ? { ...t } : Array.isArray(t) ? [...t] : t;
}
const uC = /* @__PURE__ */ new Set(["string", "number", "symbol"]);
function Au(t) {
  return t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function ia(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function ye(t) {
  const r = t;
  if (!r)
    return {};
  if (typeof r == "string")
    return { error: () => r };
  if (r?.message !== void 0) {
    if (r?.error !== void 0)
      throw new Error("Cannot specify both `message` and `error` params");
    r.error = r.message;
  }
  return delete r.message, typeof r.error == "string" ? { ...r, error: () => r.error } : r;
}
function cC(t) {
  return Object.keys(t).filter((r) => t[r]._zod.optin === "optional" && t[r]._zod.optout === "optional");
}
const fC = {
  safeint: [Number.MIN_SAFE_INTEGER, Number.MAX_SAFE_INTEGER],
  int32: [-2147483648, 2147483647],
  uint32: [0, 4294967295],
  float32: [-34028234663852886e22, 34028234663852886e22],
  float64: [-Number.MAX_VALUE, Number.MAX_VALUE]
};
function dC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = {};
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && (o[u] = i.shape[u]);
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return ia(t, s);
}
function hC(t, r) {
  const i = t._zod.def, s = Ia(t._zod.def, {
    get shape() {
      const o = { ...t._zod.def.shape };
      for (const u in r) {
        if (!(u in i.shape))
          throw new Error(`Unrecognized key: "${u}"`);
        r[u] && delete o[u];
      }
      return La(this, "shape", o), o;
    },
    checks: []
  });
  return ia(t, s);
}
function pC(t, r) {
  if (!rl(r))
    throw new Error("Invalid input to extend: expected a plain object");
  const i = t._zod.def.checks;
  if (i && i.length > 0)
    throw new Error("Object schemas containing refinements cannot be extended. Use `.safeExtend()` instead.");
  const o = Ia(t._zod.def, {
    get shape() {
      const u = { ...t._zod.def.shape, ...r };
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return ia(t, o);
}
function mC(t, r) {
  if (!rl(r))
    throw new Error("Invalid input to safeExtend: expected a plain object");
  const i = {
    ...t._zod.def,
    get shape() {
      const s = { ...t._zod.def.shape, ...r };
      return La(this, "shape", s), s;
    },
    checks: t._zod.def.checks
  };
  return ia(t, i);
}
function gC(t, r) {
  const i = Ia(t._zod.def, {
    get shape() {
      const s = { ...t._zod.def.shape, ...r._zod.def.shape };
      return La(this, "shape", s), s;
    },
    get catchall() {
      return r._zod.def.catchall;
    },
    checks: []
    // delete existing checks
  });
  return ia(t, i);
}
function vC(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in o))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f]);
        }
      else
        for (const f in o)
          u[f] = t ? new t({
            type: "optional",
            innerType: o[f]
          }) : o[f];
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function yC(t, r, i) {
  const s = Ia(r._zod.def, {
    get shape() {
      const o = r._zod.def.shape, u = { ...o };
      if (i)
        for (const f in i) {
          if (!(f in u))
            throw new Error(`Unrecognized key: "${f}"`);
          i[f] && (u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          }));
        }
      else
        for (const f in o)
          u[f] = new t({
            type: "nonoptional",
            innerType: o[f]
          });
      return La(this, "shape", u), u;
    },
    checks: []
  });
  return ia(r, s);
}
function ji(t, r = 0) {
  if (t.aborted === !0)
    return !0;
  for (let i = r; i < t.issues.length; i++)
    if (t.issues[i]?.continue !== !0)
      return !0;
  return !1;
}
function r1(t, r) {
  return r.map((i) => {
    var s;
    return (s = i).path ?? (s.path = []), i.path.unshift(t), i;
  });
}
function tu(t) {
  return typeof t == "string" ? t : t?.message;
}
function za(t, r, i) {
  const s = { ...t, path: t.path ?? [] };
  if (!t.message) {
    const o = tu(t.inst?._zod.def?.error?.(t)) ?? tu(r?.error?.(t)) ?? tu(i.customError?.(t)) ?? tu(i.localeError?.(t)) ?? "Invalid input";
    s.message = o;
  }
  return delete s.inst, delete s.continue, r?.reportInput || delete s.input, s;
}
function ih(t) {
  return Array.isArray(t) ? "array" : typeof t == "string" ? "string" : "unknown";
}
function al(...t) {
  const [r, i, s] = t;
  return typeof r == "string" ? {
    message: r,
    code: "custom",
    input: i,
    inst: s
  } : { ...r };
}
const a1 = (t, r) => {
  t.name = "$ZodError", Object.defineProperty(t, "_zod", {
    value: t._zod,
    enumerable: !1
  }), Object.defineProperty(t, "issues", {
    value: r,
    enumerable: !1
  }), t.message = JSON.stringify(r, Pd, 2), Object.defineProperty(t, "toString", {
    value: () => t.message,
    enumerable: !1
  });
}, i1 = te("$ZodError", a1), s1 = te("$ZodError", a1, { Parent: Error });
function bC(t, r = (i) => i.message) {
  const i = {}, s = [];
  for (const o of t.issues)
    o.path.length > 0 ? (i[o.path[0]] = i[o.path[0]] || [], i[o.path[0]].push(r(o))) : s.push(r(o));
  return { formErrors: s, fieldErrors: i };
}
function _C(t, r = (i) => i.message) {
  const i = { _errors: [] }, s = (o) => {
    for (const u of o.issues)
      if (u.code === "invalid_union" && u.errors.length)
        u.errors.map((f) => s({ issues: f }));
      else if (u.code === "invalid_key")
        s({ issues: u.issues });
      else if (u.code === "invalid_element")
        s({ issues: u.issues });
      else if (u.path.length === 0)
        i._errors.push(r(u));
      else {
        let f = i, p = 0;
        for (; p < u.path.length; ) {
          const h = u.path[p];
          p === u.path.length - 1 ? (f[h] = f[h] || { _errors: [] }, f[h]._errors.push(r(u))) : f[h] = f[h] || { _errors: [] }, f = f[h], p++;
        }
      }
  };
  return s(t), i;
}
const sh = (t) => (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !1 }) : { async: !1 }, f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise)
    throw new Li();
  if (f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, Ra())));
    throw t1(p, o?.callee), p;
  }
  return f.value;
}, lh = (t) => async (r, i, s, o) => {
  const u = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let f = r._zod.run({ value: i, issues: [] }, u);
  if (f instanceof Promise && (f = await f), f.issues.length) {
    const p = new (o?.Err ?? t)(f.issues.map((h) => za(h, u, Ra())));
    throw t1(p, o?.callee), p;
  }
  return f.value;
}, Nu = (t) => (r, i, s) => {
  const o = s ? { ...s, async: !1 } : { async: !1 }, u = r._zod.run({ value: i, issues: [] }, o);
  if (u instanceof Promise)
    throw new Li();
  return u.issues.length ? {
    success: !1,
    error: new (t ?? i1)(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, SC = /* @__PURE__ */ Nu(s1), Tu = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { async: !0 }) : { async: !0 };
  let u = r._zod.run({ value: i, issues: [] }, o);
  return u instanceof Promise && (u = await u), u.issues.length ? {
    success: !1,
    error: new t(u.issues.map((f) => za(f, o, Ra())))
  } : { success: !0, data: u.value };
}, xC = /* @__PURE__ */ Tu(s1), EC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return sh(t)(r, i, o);
}, CC = (t) => (r, i, s) => sh(t)(r, i, s), wC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return lh(t)(r, i, o);
}, AC = (t) => async (r, i, s) => lh(t)(r, i, s), NC = (t) => (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Nu(t)(r, i, o);
}, TC = (t) => (r, i, s) => Nu(t)(r, i, s), OC = (t) => async (r, i, s) => {
  const o = s ? Object.assign(s, { direction: "backward" }) : { direction: "backward" };
  return Tu(t)(r, i, o);
}, kC = (t) => async (r, i, s) => Tu(t)(r, i, s), DC = /^[cC][^\s-]{8,}$/, MC = /^[0-9a-z]+$/, jC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, RC = /^[0-9a-vA-V]{20}$/, zC = /^[A-Za-z0-9]{27}$/, LC = /^[a-zA-Z0-9_-]{21}$/, IC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, PC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ky = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, BC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, UC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
function HC() {
  return new RegExp(UC, "u");
}
const qC = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/, FC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/, ZC = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/, GC = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|::|([0-9a-fA-F]{1,4})?::([0-9a-fA-F]{1,4}:?){0,6})\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/, VC = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/, l1 = /^[A-Za-z0-9_-]*$/, YC = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/, XC = /^\+(?:[0-9]){6,14}[0-9]$/, o1 = "(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))", $C = /* @__PURE__ */ new RegExp(`^${o1}$`);
function u1(t) {
  const r = "(?:[01]\\d|2[0-3]):[0-5]\\d";
  return typeof t.precision == "number" ? t.precision === -1 ? `${r}` : t.precision === 0 ? `${r}:[0-5]\\d` : `${r}:[0-5]\\d\\.\\d{${t.precision}}` : `${r}(?::[0-5]\\d(?:\\.\\d+)?)?`;
}
function QC(t) {
  return new RegExp(`^${u1(t)}$`);
}
function JC(t) {
  const r = u1({ precision: t.precision }), i = ["Z"];
  t.local && i.push(""), t.offset && i.push("([+-](?:[01]\\d|2[0-3]):[0-5]\\d)");
  const s = `${r}(?:${i.join("|")})`;
  return new RegExp(`^${o1}T(?:${s})$`);
}
const KC = (t) => {
  const r = t ? `[\\s\\S]{${t?.minimum ?? 0},${t?.maximum ?? ""}}` : "[\\s\\S]*";
  return new RegExp(`^${r}$`);
}, WC = /^-?\d+$/, ew = /^-?\d+(?:\.\d+)?/, tw = /^[^A-Z]*$/, nw = /^[^a-z]*$/, on = /* @__PURE__ */ te("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), c1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, f1 = /* @__PURE__ */ te("$ZodCheckLessThan", (t, r) => {
  on.init(t, r);
  const i = c1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.maximum : o.exclusiveMaximum) ?? Number.POSITIVE_INFINITY;
    r.value < u && (r.inclusive ? o.maximum = r.value : o.exclusiveMaximum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value <= r.value : s.value < r.value) || s.issues.push({
      origin: i,
      code: "too_big",
      maximum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), d1 = /* @__PURE__ */ te("$ZodCheckGreaterThan", (t, r) => {
  on.init(t, r);
  const i = c1[typeof r.value];
  t._zod.onattach.push((s) => {
    const o = s._zod.bag, u = (r.inclusive ? o.minimum : o.exclusiveMinimum) ?? Number.NEGATIVE_INFINITY;
    r.value > u && (r.inclusive ? o.minimum = r.value : o.exclusiveMinimum = r.value);
  }), t._zod.check = (s) => {
    (r.inclusive ? s.value >= r.value : s.value > r.value) || s.issues.push({
      origin: i,
      code: "too_small",
      minimum: r.value,
      input: s.value,
      inclusive: r.inclusive,
      inst: t,
      continue: !r.abort
    });
  };
}), rw = /* @__PURE__ */ te("$ZodCheckMultipleOf", (t, r) => {
  on.init(t, r), t._zod.onattach.push((i) => {
    var s;
    (s = i._zod.bag).multipleOf ?? (s.multipleOf = r.value);
  }), t._zod.check = (i) => {
    if (typeof i.value != typeof r.value)
      throw new Error("Cannot mix number and bigint in multiple_of check.");
    (typeof i.value == "bigint" ? i.value % r.value === BigInt(0) : lC(i.value, r.value) === 0) || i.issues.push({
      origin: typeof i.value,
      code: "not_multiple_of",
      divisor: r.value,
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), aw = /* @__PURE__ */ te("$ZodCheckNumberFormat", (t, r) => {
  on.init(t, r), r.format = r.format || "float64";
  const i = r.format?.includes("int"), s = i ? "int" : "number", [o, u] = fC[r.format];
  t._zod.onattach.push((f) => {
    const p = f._zod.bag;
    p.format = r.format, p.minimum = o, p.maximum = u, i && (p.pattern = WC);
  }), t._zod.check = (f) => {
    const p = f.value;
    if (i) {
      if (!Number.isInteger(p)) {
        f.issues.push({
          expected: s,
          format: r.format,
          code: "invalid_type",
          continue: !1,
          input: p,
          inst: t
        });
        return;
      }
      if (!Number.isSafeInteger(p)) {
        p > 0 ? f.issues.push({
          input: p,
          code: "too_big",
          maximum: Number.MAX_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        }) : f.issues.push({
          input: p,
          code: "too_small",
          minimum: Number.MIN_SAFE_INTEGER,
          note: "Integers must be within the safe integer range.",
          inst: t,
          origin: s,
          continue: !r.abort
        });
        return;
      }
    }
    p < o && f.issues.push({
      origin: "number",
      input: p,
      code: "too_small",
      minimum: o,
      inclusive: !0,
      inst: t,
      continue: !r.abort
    }), p > u && f.issues.push({
      origin: "number",
      input: p,
      code: "too_big",
      maximum: u,
      inst: t
    });
  };
}), iw = /* @__PURE__ */ te("$ZodCheckMaxLength", (t, r) => {
  var i;
  on.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !rh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.maximum ?? Number.POSITIVE_INFINITY;
    r.maximum < o && (s._zod.bag.maximum = r.maximum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length <= r.maximum)
      return;
    const f = ih(o);
    s.issues.push({
      origin: f,
      code: "too_big",
      maximum: r.maximum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), sw = /* @__PURE__ */ te("$ZodCheckMinLength", (t, r) => {
  var i;
  on.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !rh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag.minimum ?? Number.NEGATIVE_INFINITY;
    r.minimum > o && (s._zod.bag.minimum = r.minimum);
  }), t._zod.check = (s) => {
    const o = s.value;
    if (o.length >= r.minimum)
      return;
    const f = ih(o);
    s.issues.push({
      origin: f,
      code: "too_small",
      minimum: r.minimum,
      inclusive: !0,
      input: o,
      inst: t,
      continue: !r.abort
    });
  };
}), lw = /* @__PURE__ */ te("$ZodCheckLengthEquals", (t, r) => {
  var i;
  on.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
    const o = s.value;
    return !rh(o) && o.length !== void 0;
  }), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.minimum = r.length, o.maximum = r.length, o.length = r.length;
  }), t._zod.check = (s) => {
    const o = s.value, u = o.length;
    if (u === r.length)
      return;
    const f = ih(o), p = u > r.length;
    s.issues.push({
      origin: f,
      ...p ? { code: "too_big", maximum: r.length } : { code: "too_small", minimum: r.length },
      inclusive: !0,
      exact: !0,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Ou = /* @__PURE__ */ te("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  on.init(t, r), t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.format = r.format, r.pattern && (u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(r.pattern));
  }), r.pattern ? (i = t._zod).check ?? (i.check = (o) => {
    r.pattern.lastIndex = 0, !r.pattern.test(o.value) && o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: r.format,
      input: o.value,
      ...r.pattern ? { pattern: r.pattern.toString() } : {},
      inst: t,
      continue: !r.abort
    });
  }) : (s = t._zod).check ?? (s.check = () => {
  });
}), ow = /* @__PURE__ */ te("$ZodCheckRegex", (t, r) => {
  Ou.init(t, r), t._zod.check = (i) => {
    r.pattern.lastIndex = 0, !r.pattern.test(i.value) && i.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "regex",
      input: i.value,
      pattern: r.pattern.toString(),
      inst: t,
      continue: !r.abort
    });
  };
}), uw = /* @__PURE__ */ te("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = tw), Ou.init(t, r);
}), cw = /* @__PURE__ */ te("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = nw), Ou.init(t, r);
}), fw = /* @__PURE__ */ te("$ZodCheckIncludes", (t, r) => {
  on.init(t, r);
  const i = Au(r.includes), s = new RegExp(typeof r.position == "number" ? `^.{${r.position}}${i}` : i);
  r.pattern = s, t._zod.onattach.push((o) => {
    const u = o._zod.bag;
    u.patterns ?? (u.patterns = /* @__PURE__ */ new Set()), u.patterns.add(s);
  }), t._zod.check = (o) => {
    o.value.includes(r.includes, r.position) || o.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "includes",
      includes: r.includes,
      input: o.value,
      inst: t,
      continue: !r.abort
    });
  };
}), dw = /* @__PURE__ */ te("$ZodCheckStartsWith", (t, r) => {
  on.init(t, r);
  const i = new RegExp(`^${Au(r.prefix)}.*`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.startsWith(r.prefix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "starts_with",
      prefix: r.prefix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), hw = /* @__PURE__ */ te("$ZodCheckEndsWith", (t, r) => {
  on.init(t, r);
  const i = new RegExp(`.*${Au(r.suffix)}$`);
  r.pattern ?? (r.pattern = i), t._zod.onattach.push((s) => {
    const o = s._zod.bag;
    o.patterns ?? (o.patterns = /* @__PURE__ */ new Set()), o.patterns.add(i);
  }), t._zod.check = (s) => {
    s.value.endsWith(r.suffix) || s.issues.push({
      origin: "string",
      code: "invalid_format",
      format: "ends_with",
      suffix: r.suffix,
      input: s.value,
      inst: t,
      continue: !r.abort
    });
  };
}), pw = /* @__PURE__ */ te("$ZodCheckOverwrite", (t, r) => {
  on.init(t, r), t._zod.check = (i) => {
    i.value = r.tx(i.value);
  };
});
class mw {
  constructor(r = []) {
    this.content = [], this.indent = 0, this && (this.args = r);
  }
  indented(r) {
    this.indent += 1, r(this), this.indent -= 1;
  }
  write(r) {
    if (typeof r == "function") {
      r(this, { execution: "sync" }), r(this, { execution: "async" });
      return;
    }
    const s = r.split(`
`).filter((f) => f), o = Math.min(...s.map((f) => f.length - f.trimStart().length)), u = s.map((f) => f.slice(o)).map((f) => " ".repeat(this.indent * 2) + f);
    for (const f of u)
      this.content.push(f);
  }
  compile() {
    const r = Function, i = this?.args, o = [...(this?.content ?? [""]).map((u) => `  ${u}`)];
    return new r(...i, o.join(`
`));
  }
}
const gw = {
  major: 4,
  minor: 1,
  patch: 12
}, Et = /* @__PURE__ */ te("$ZodType", (t, r) => {
  var i;
  t ?? (t = {}), t._zod.def = r, t._zod.bag = t._zod.bag || {}, t._zod.version = gw;
  const s = [...t._zod.def.checks ?? []];
  t._zod.traits.has("$ZodCheck") && s.unshift(t);
  for (const o of s)
    for (const u of o._zod.onattach)
      u(t);
  if (s.length === 0)
    (i = t._zod).deferred ?? (i.deferred = []), t._zod.deferred?.push(() => {
      t._zod.run = t._zod.parse;
    });
  else {
    const o = (f, p, h) => {
      let g = ji(f), b;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (g)
          continue;
        const m = f.issues.length, v = _._zod.check(f);
        if (v instanceof Promise && h?.async === !1)
          throw new Li();
        if (b || v instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await v, f.issues.length !== m && (g || (g = ji(f, m)));
          });
        else {
          if (f.issues.length === m)
            continue;
          g || (g = ji(f, m));
        }
      }
      return b ? b.then(() => f) : f;
    }, u = (f, p, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const g = o(p, s, h);
      if (g instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return g.then((b) => t._zod.parse(b, h));
      }
      return t._zod.parse(g, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const g = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return g instanceof Promise ? g.then((b) => u(b, f, p)) : u(g, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return h.then((g) => o(g, s, p));
      }
      return o(h, s, p);
    };
  }
  t["~standard"] = {
    validate: (o) => {
      try {
        const u = SC(t, o);
        return u.success ? { value: u.data } : { issues: u.error?.issues };
      } catch {
        return xC(t, o).then((f) => f.success ? { value: f.data } : { issues: f.error?.issues });
      }
    },
    vendor: "zod",
    version: 1
  };
}), oh = /* @__PURE__ */ te("$ZodString", (t, r) => {
  Et.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? KC(t._zod.bag), t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = String(i.value);
      } catch {
      }
    return typeof i.value == "string" || i.issues.push({
      expected: "string",
      code: "invalid_type",
      input: i.value,
      inst: t
    }), i;
  };
}), lt = /* @__PURE__ */ te("$ZodStringFormat", (t, r) => {
  Ou.init(t, r), oh.init(t, r);
}), vw = /* @__PURE__ */ te("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = PC), lt.init(t, r);
}), yw = /* @__PURE__ */ te("$ZodUUID", (t, r) => {
  if (r.version) {
    const s = {
      v1: 1,
      v2: 2,
      v3: 3,
      v4: 4,
      v5: 5,
      v6: 6,
      v7: 7,
      v8: 8
    }[r.version];
    if (s === void 0)
      throw new Error(`Invalid UUID version: "${r.version}"`);
    r.pattern ?? (r.pattern = ky(s));
  } else
    r.pattern ?? (r.pattern = ky());
  lt.init(t, r);
}), bw = /* @__PURE__ */ te("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = BC), lt.init(t, r);
}), _w = /* @__PURE__ */ te("$ZodURL", (t, r) => {
  lt.init(t, r), t._zod.check = (i) => {
    try {
      const s = i.value.trim(), o = new URL(s);
      r.hostname && (r.hostname.lastIndex = 0, r.hostname.test(o.hostname) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid hostname",
        pattern: YC.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.protocol && (r.protocol.lastIndex = 0, r.protocol.test(o.protocol.endsWith(":") ? o.protocol.slice(0, -1) : o.protocol) || i.issues.push({
        code: "invalid_format",
        format: "url",
        note: "Invalid protocol",
        pattern: r.protocol.source,
        input: i.value,
        inst: t,
        continue: !r.abort
      })), r.normalize ? i.value = o.href : i.value = s;
      return;
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "url",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Sw = /* @__PURE__ */ te("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = HC()), lt.init(t, r);
}), xw = /* @__PURE__ */ te("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = LC), lt.init(t, r);
}), Ew = /* @__PURE__ */ te("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = DC), lt.init(t, r);
}), Cw = /* @__PURE__ */ te("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = MC), lt.init(t, r);
}), ww = /* @__PURE__ */ te("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = jC), lt.init(t, r);
}), Aw = /* @__PURE__ */ te("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = RC), lt.init(t, r);
}), Nw = /* @__PURE__ */ te("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = zC), lt.init(t, r);
}), Tw = /* @__PURE__ */ te("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = JC(r)), lt.init(t, r);
}), Ow = /* @__PURE__ */ te("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = $C), lt.init(t, r);
}), kw = /* @__PURE__ */ te("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = QC(r)), lt.init(t, r);
}), Dw = /* @__PURE__ */ te("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = IC), lt.init(t, r);
}), Mw = /* @__PURE__ */ te("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = qC), lt.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), jw = /* @__PURE__ */ te("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = FC), lt.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv6";
  }), t._zod.check = (i) => {
    try {
      new URL(`http://[${i.value}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "ipv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
}), Rw = /* @__PURE__ */ te("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = ZC), lt.init(t, r);
}), zw = /* @__PURE__ */ te("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = GC), lt.init(t, r), t._zod.check = (i) => {
    const s = i.value.split("/");
    try {
      if (s.length !== 2)
        throw new Error();
      const [o, u] = s;
      if (!u)
        throw new Error();
      const f = Number(u);
      if (`${f}` !== u)
        throw new Error();
      if (f < 0 || f > 128)
        throw new Error();
      new URL(`http://[${o}]`);
    } catch {
      i.issues.push({
        code: "invalid_format",
        format: "cidrv6",
        input: i.value,
        inst: t,
        continue: !r.abort
      });
    }
  };
});
function h1(t) {
  if (t === "")
    return !0;
  if (t.length % 4 !== 0)
    return !1;
  try {
    return atob(t), !0;
  } catch {
    return !1;
  }
}
const Lw = /* @__PURE__ */ te("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = VC), lt.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64";
  }), t._zod.check = (i) => {
    h1(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
});
function Iw(t) {
  if (!l1.test(t))
    return !1;
  const r = t.replace(/[-_]/g, (s) => s === "-" ? "+" : "/"), i = r.padEnd(Math.ceil(r.length / 4) * 4, "=");
  return h1(i);
}
const Pw = /* @__PURE__ */ te("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = l1), lt.init(t, r), t._zod.onattach.push((i) => {
    i._zod.bag.contentEncoding = "base64url";
  }), t._zod.check = (i) => {
    Iw(i.value) || i.issues.push({
      code: "invalid_format",
      format: "base64url",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), Bw = /* @__PURE__ */ te("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = XC), lt.init(t, r);
});
function Uw(t, r = null) {
  try {
    const i = t.split(".");
    if (i.length !== 3)
      return !1;
    const [s] = i;
    if (!s)
      return !1;
    const o = JSON.parse(atob(s));
    return !("typ" in o && o?.typ !== "JWT" || !o.alg || r && (!("alg" in o) || o.alg !== r));
  } catch {
    return !1;
  }
}
const Hw = /* @__PURE__ */ te("$ZodJWT", (t, r) => {
  lt.init(t, r), t._zod.check = (i) => {
    Uw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), p1 = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  Et.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? ew, t._zod.parse = (i, s) => {
    if (r.coerce)
      try {
        i.value = Number(i.value);
      } catch {
      }
    const o = i.value;
    if (typeof o == "number" && !Number.isNaN(o) && Number.isFinite(o))
      return i;
    const u = typeof o == "number" ? Number.isNaN(o) ? "NaN" : Number.isFinite(o) ? void 0 : "Infinity" : void 0;
    return i.issues.push({
      expected: "number",
      code: "invalid_type",
      input: o,
      inst: t,
      ...u ? { received: u } : {}
    }), i;
  };
}), qw = /* @__PURE__ */ te("$ZodNumber", (t, r) => {
  aw.init(t, r), p1.init(t, r);
}), Fw = /* @__PURE__ */ te("$ZodUnknown", (t, r) => {
  Et.init(t, r), t._zod.parse = (i) => i;
}), Zw = /* @__PURE__ */ te("$ZodNever", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function Dy(t, r, i) {
  t.issues.length && r.issues.push(...r1(i, t.issues)), r.value[i] = t.value;
}
const Gw = /* @__PURE__ */ te("$ZodArray", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value;
    if (!Array.isArray(o))
      return i.issues.push({
        expected: "array",
        code: "invalid_type",
        input: o,
        inst: t
      }), i;
    i.value = Array(o.length);
    const u = [];
    for (let f = 0; f < o.length; f++) {
      const p = o[f], h = r.element._zod.run({
        value: p,
        issues: []
      }, s);
      h instanceof Promise ? u.push(h.then((g) => Dy(g, i, f))) : Dy(h, i, f);
    }
    return u.length ? Promise.all(u).then(() => i) : i;
  };
});
function xu(t, r, i, s) {
  t.issues.length && r.issues.push(...r1(i, t.issues)), t.value === void 0 ? i in s && (r.value[i] = void 0) : r.value[i] = t.value;
}
function m1(t) {
  const r = Object.keys(t.shape);
  for (const s of r)
    if (!t.shape?.[s]?._zod?.traits?.has("$ZodType"))
      throw new Error(`Invalid element at key "${s}": expected a Zod schema`);
  const i = cC(t.shape);
  return {
    ...t,
    keys: r,
    keySet: new Set(r),
    numKeys: r.length,
    optionalKeys: new Set(i)
  };
}
function g1(t, r, i, s, o, u) {
  const f = [], p = o.keySet, h = o.catchall._zod, g = h.def.type;
  for (const b of Object.keys(r)) {
    if (p.has(b))
      continue;
    if (g === "never") {
      f.push(b);
      continue;
    }
    const _ = h.run({ value: r[b], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((m) => xu(m, i, b, r))) : xu(_, i, b, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const Vw = /* @__PURE__ */ te("$ZodObject", (t, r) => {
  if (Et.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
    const p = r.shape;
    Object.defineProperty(r, "shape", {
      get: () => {
        const h = { ...p };
        return Object.defineProperty(r, "shape", {
          value: h
        }), h;
      }
    });
  }
  const s = nh(() => m1(r));
  nt(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const g in p) {
      const b = p[g]._zod;
      if (b.values) {
        h[g] ?? (h[g] = /* @__PURE__ */ new Set());
        for (const _ of b.values)
          h[g].add(_);
      }
    }
    return h;
  });
  const o = Su, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const g = p.value;
    if (!o(g))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: g,
        inst: t
      }), p;
    p.value = {};
    const b = [], _ = f.shape;
    for (const m of f.keys) {
      const d = _[m]._zod.run({ value: g[m], issues: [] }, h);
      d instanceof Promise ? b.push(d.then((x) => xu(x, p, m, g))) : xu(d, p, m, g);
    }
    return u ? g1(b, g, p, h, s.value, t) : b.length ? Promise.all(b).then(() => p) : p;
  };
}), Yw = /* @__PURE__ */ te("$ZodObjectJIT", (t, r) => {
  Vw.init(t, r);
  const i = t._zod.parse, s = nh(() => m1(r)), o = (m) => {
    const v = new mw(["shape", "payload", "ctx"]), d = s.value, x = (O) => {
      const E = Oy(O);
      return `shape[${E}]._zod.run({ value: input[${E}], issues: [] }, ctx)`;
    };
    v.write("const input = payload.value;");
    const C = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const O of d.keys)
      C[O] = `key_${T++}`;
    v.write("const newResult = {};");
    for (const O of d.keys) {
      const E = C[O], N = Oy(O);
      v.write(`const ${E} = ${x(O)};`), v.write(`
        if (${E}.issues.length) {
          payload.issues = payload.issues.concat(${E}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${N}, ...iss.path] : [${N}]
          })));
        }
        
        
        if (${E}.value === undefined) {
          if (${N} in input) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${E}.value;
        }
        
      `);
    }
    v.write("payload.value = newResult;"), v.write("return payload;");
    const w = v.compile();
    return (O, E) => w(m, O, E);
  };
  let u;
  const f = Su, p = !W0.jitless, g = p && oC.value, b = r.catchall;
  let _;
  t._zod.parse = (m, v) => {
    _ ?? (_ = s.value);
    const d = m.value;
    return f(d) ? p && g && v?.async === !1 && v.jitless !== !0 ? (u || (u = o(r.shape)), m = u(m, v), b ? g1([], d, m, v, _, t) : m) : i(m, v) : (m.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), m);
  };
});
function My(t, r, i, s) {
  for (const u of t)
    if (u.issues.length === 0)
      return r.value = u.value, r;
  const o = t.filter((u) => !ji(u));
  return o.length === 1 ? (r.value = o[0].value, o[0]) : (r.issues.push({
    code: "invalid_union",
    input: r.value,
    inst: i,
    errors: t.map((u) => u.issues.map((f) => za(f, s, Ra())))
  }), r);
}
const Xw = /* @__PURE__ */ te("$ZodUnion", (t, r) => {
  Et.init(t, r), nt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), nt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), nt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), nt(t._zod, "pattern", () => {
    if (r.options.every((o) => o._zod.pattern)) {
      const o = r.options.map((u) => u._zod.pattern);
      return new RegExp(`^(${o.map((u) => ah(u.source)).join("|")})$`);
    }
  });
  const i = r.options.length === 1, s = r.options[0]._zod.run;
  t._zod.parse = (o, u) => {
    if (i)
      return s(o, u);
    let f = !1;
    const p = [];
    for (const h of r.options) {
      const g = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (g instanceof Promise)
        p.push(g), f = !0;
      else {
        if (g.issues.length === 0)
          return g;
        p.push(g);
      }
    }
    return f ? Promise.all(p).then((h) => My(h, o, t, u)) : My(p, o, t, u);
  };
}), $w = /* @__PURE__ */ te("$ZodIntersection", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, g]) => jy(i, h, g)) : jy(i, u, f);
  };
});
function Bd(t, r) {
  if (t === r)
    return { valid: !0, data: t };
  if (t instanceof Date && r instanceof Date && +t == +r)
    return { valid: !0, data: t };
  if (rl(t) && rl(r)) {
    const i = Object.keys(r), s = Object.keys(t).filter((u) => i.indexOf(u) !== -1), o = { ...t, ...r };
    for (const u of s) {
      const f = Bd(t[u], r[u]);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [u, ...f.mergeErrorPath]
        };
      o[u] = f.data;
    }
    return { valid: !0, data: o };
  }
  if (Array.isArray(t) && Array.isArray(r)) {
    if (t.length !== r.length)
      return { valid: !1, mergeErrorPath: [] };
    const i = [];
    for (let s = 0; s < t.length; s++) {
      const o = t[s], u = r[s], f = Bd(o, u);
      if (!f.valid)
        return {
          valid: !1,
          mergeErrorPath: [s, ...f.mergeErrorPath]
        };
      i.push(f.data);
    }
    return { valid: !0, data: i };
  }
  return { valid: !1, mergeErrorPath: [] };
}
function jy(t, r, i) {
  if (r.issues.length && t.issues.push(...r.issues), i.issues.length && t.issues.push(...i.issues), ji(t))
    return t;
  const s = Bd(r.value, i.value);
  if (!s.valid)
    throw new Error(`Unmergable intersection. Error path: ${JSON.stringify(s.mergeErrorPath)}`);
  return t.value = s.data, t;
}
const Qw = /* @__PURE__ */ te("$ZodEnum", (t, r) => {
  Et.init(t, r);
  const i = e1(r.entries), s = new Set(i);
  t._zod.values = s, t._zod.pattern = new RegExp(`^(${i.filter((o) => uC.has(typeof o)).map((o) => typeof o == "string" ? Au(o) : o.toString()).join("|")})$`), t._zod.parse = (o, u) => {
    const f = o.value;
    return s.has(f) || o.issues.push({
      code: "invalid_value",
      values: i,
      input: f,
      inst: t
    }), o;
  };
}), Jw = /* @__PURE__ */ te("$ZodTransform", (t, r) => {
  Et.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new K0(t.constructor.name);
    const o = r.transform(i.value, i);
    if (s.async)
      return (o instanceof Promise ? o : Promise.resolve(o)).then((f) => (i.value = f, i));
    if (o instanceof Promise)
      throw new Li();
    return i.value = o, i;
  };
});
function Ry(t, r) {
  return t.issues.length && r === void 0 ? { issues: [], value: void 0 } : t;
}
const Kw = /* @__PURE__ */ te("$ZodOptional", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", nt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), nt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ry(u, i.value)) : Ry(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), Ww = /* @__PURE__ */ te("$ZodNullable", (t, r) => {
  Et.init(t, r), nt(t._zod, "optin", () => r.innerType._zod.optin), nt(t._zod, "optout", () => r.innerType._zod.optout), nt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)}|null)$`) : void 0;
  }), nt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), e3 = /* @__PURE__ */ te("$ZodDefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", nt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    if (i.value === void 0)
      return i.value = r.defaultValue, i;
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => zy(u, r)) : zy(o, r);
  };
});
function zy(t, r) {
  return t.value === void 0 && (t.value = r.defaultValue), t;
}
const t3 = /* @__PURE__ */ te("$ZodPrefault", (t, r) => {
  Et.init(t, r), t._zod.optin = "optional", nt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), n3 = /* @__PURE__ */ te("$ZodNonOptional", (t, r) => {
  Et.init(t, r), nt(t._zod, "values", () => {
    const i = r.innerType._zod.values;
    return i ? new Set([...i].filter((s) => s !== void 0)) : void 0;
  }), t._zod.parse = (i, s) => {
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => Ly(u, t)) : Ly(o, t);
  };
});
function Ly(t, r) {
  return !t.issues.length && t.value === void 0 && t.issues.push({
    code: "invalid_type",
    expected: "nonoptional",
    input: t.value,
    inst: r
  }), t;
}
const r3 = /* @__PURE__ */ te("$ZodCatch", (t, r) => {
  Et.init(t, r), nt(t._zod, "optin", () => r.innerType._zod.optin), nt(t._zod, "optout", () => r.innerType._zod.optout), nt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => (i.value = u.value, u.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: u.issues.map((f) => za(f, s, Ra()))
      },
      input: i.value
    }), i.issues = []), i)) : (i.value = o.value, o.issues.length && (i.value = r.catchValue({
      ...i,
      error: {
        issues: o.issues.map((u) => za(u, s, Ra()))
      },
      input: i.value
    }), i.issues = []), i);
  };
}), a3 = /* @__PURE__ */ te("$ZodPipe", (t, r) => {
  Et.init(t, r), nt(t._zod, "values", () => r.in._zod.values), nt(t._zod, "optin", () => r.in._zod.optin), nt(t._zod, "optout", () => r.out._zod.optout), nt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
    if (s.direction === "backward") {
      const u = r.out._zod.run(i, s);
      return u instanceof Promise ? u.then((f) => nu(f, r.in, s)) : nu(u, r.in, s);
    }
    const o = r.in._zod.run(i, s);
    return o instanceof Promise ? o.then((u) => nu(u, r.out, s)) : nu(o, r.out, s);
  };
});
function nu(t, r, i) {
  return t.issues.length ? (t.aborted = !0, t) : r._zod.run({ value: t.value, issues: t.issues }, i);
}
const i3 = /* @__PURE__ */ te("$ZodReadonly", (t, r) => {
  Et.init(t, r), nt(t._zod, "propValues", () => r.innerType._zod.propValues), nt(t._zod, "values", () => r.innerType._zod.values), nt(t._zod, "optin", () => r.innerType._zod.optin), nt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(Iy) : Iy(o);
  };
});
function Iy(t) {
  return t.value = Object.freeze(t.value), t;
}
const s3 = /* @__PURE__ */ te("$ZodCustom", (t, r) => {
  on.init(t, r), Et.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
    const s = i.value, o = r.fn(s);
    if (o instanceof Promise)
      return o.then((u) => Py(u, i, s, t));
    Py(o, i, s, t);
  };
});
function Py(t, r, i, s) {
  if (!t) {
    const o = {
      code: "custom",
      input: i,
      inst: s,
      // incorporates params.error into issue reporting
      path: [...s._zod.def.path ?? []],
      // incorporates params.error into issue reporting
      continue: !s._zod.def.abort
      // params: inst._zod.def.params,
    };
    s._zod.def.params && (o.params = s._zod.def.params), r.issues.push(al(o));
  }
}
class v1 {
  constructor() {
    this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map();
  }
  add(r, ...i) {
    const s = i[0];
    if (this._map.set(r, s), s && typeof s == "object" && "id" in s) {
      if (this._idmap.has(s.id))
        throw new Error(`ID ${s.id} already exists in the registry`);
      this._idmap.set(s.id, r);
    }
    return this;
  }
  clear() {
    return this._map = /* @__PURE__ */ new WeakMap(), this._idmap = /* @__PURE__ */ new Map(), this;
  }
  remove(r) {
    const i = this._map.get(r);
    return i && typeof i == "object" && "id" in i && this._idmap.delete(i.id), this._map.delete(r), this;
  }
  get(r) {
    const i = r._zod.parent;
    if (i) {
      const s = { ...this.get(i) ?? {} };
      delete s.id;
      const o = { ...s, ...this._map.get(r) };
      return Object.keys(o).length ? o : void 0;
    }
    return this._map.get(r);
  }
  has(r) {
    return this._map.has(r);
  }
}
function l3() {
  return new v1();
}
const Qs = /* @__PURE__ */ l3();
function o3(t, r) {
  return new t({
    type: "string",
    ...ye(r)
  });
}
function u3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function By(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function c3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ...ye(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ...ye(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ...ye(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ...ye(r)
  });
}
function k3(t, r) {
  return new t({
    type: "string",
    format: "datetime",
    check: "string_format",
    offset: !1,
    local: !1,
    precision: null,
    ...ye(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ...ye(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ...ye(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ...ye(r)
  });
}
function R3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ...ye(r)
  });
}
function z3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ...ye(r)
  });
}
function L3(t) {
  return new t({
    type: "unknown"
  });
}
function I3(t, r) {
  return new t({
    type: "never",
    ...ye(r)
  });
}
function Uy(t, r) {
  return new f1({
    check: "less_than",
    ...ye(r),
    value: t,
    inclusive: !1
  });
}
function gd(t, r) {
  return new f1({
    check: "less_than",
    ...ye(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new d1({
    check: "greater_than",
    ...ye(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new d1({
    check: "greater_than",
    ...ye(r),
    value: t,
    inclusive: !0
  });
}
function qy(t, r) {
  return new rw({
    check: "multiple_of",
    ...ye(r),
    value: t
  });
}
function y1(t, r) {
  return new iw({
    check: "max_length",
    ...ye(r),
    maximum: t
  });
}
function Eu(t, r) {
  return new sw({
    check: "min_length",
    ...ye(r),
    minimum: t
  });
}
function b1(t, r) {
  return new lw({
    check: "length_equals",
    ...ye(r),
    length: t
  });
}
function P3(t, r) {
  return new ow({
    check: "string_format",
    format: "regex",
    ...ye(r),
    pattern: t
  });
}
function B3(t) {
  return new uw({
    check: "string_format",
    format: "lowercase",
    ...ye(t)
  });
}
function U3(t) {
  return new cw({
    check: "string_format",
    format: "uppercase",
    ...ye(t)
  });
}
function H3(t, r) {
  return new fw({
    check: "string_format",
    format: "includes",
    ...ye(r),
    includes: t
  });
}
function q3(t, r) {
  return new dw({
    check: "string_format",
    format: "starts_with",
    ...ye(r),
    prefix: t
  });
}
function F3(t, r) {
  return new hw({
    check: "string_format",
    format: "ends_with",
    ...ye(r),
    suffix: t
  });
}
function ol(t) {
  return new pw({
    check: "overwrite",
    tx: t
  });
}
function Z3(t) {
  return ol((r) => r.normalize(t));
}
function G3() {
  return ol((t) => t.trim());
}
function V3() {
  return ol((t) => t.toLowerCase());
}
function Y3() {
  return ol((t) => t.toUpperCase());
}
function X3(t, r, i) {
  return new t({
    type: "array",
    element: r,
    // get element() {
    //   return element;
    // },
    ...ye(i)
  });
}
function $3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ...ye(i)
  });
}
function Q3(t) {
  const r = J3((i) => (i.addIssue = (s) => {
    if (typeof s == "string")
      i.issues.push(al(s, i.value, r._zod.def));
    else {
      const o = s;
      o.fatal && (o.continue = !1), o.code ?? (o.code = "custom"), o.input ?? (o.input = i.value), o.inst ?? (o.inst = r), o.continue ?? (o.continue = !r._zod.def.abort), i.issues.push(al(o));
    }
  }, t(i.value, i)));
  return r;
}
function J3(t, r) {
  const i = new on({
    check: "custom",
    ...ye(r)
  });
  return i._zod.check = t, i;
}
class Fy {
  constructor(r) {
    this.counter = 0, this.metadataRegistry = r?.metadata ?? Qs, this.target = r?.target ?? "draft-2020-12", this.unrepresentable = r?.unrepresentable ?? "throw", this.override = r?.override ?? (() => {
    }), this.io = r?.io ?? "output", this.seen = /* @__PURE__ */ new Map();
  }
  process(r, i = { path: [], schemaPath: [] }) {
    var s;
    const o = r._zod.def, u = {
      guid: "uuid",
      url: "uri",
      datetime: "date-time",
      json_string: "json-string",
      regex: ""
      // do not set
    }, f = this.seen.get(r);
    if (f)
      return f.count++, i.schemaPath.includes(r) && (f.cycle = i.path), f.schema;
    const p = { schema: {}, count: 1, cycle: void 0, path: i.path };
    this.seen.set(r, p);
    const h = r._zod.toJSONSchema?.();
    if (h)
      p.schema = h;
    else {
      const _ = {
        ...i,
        schemaPath: [...i.schemaPath, r],
        path: i.path
      }, m = r._zod.parent;
      if (m)
        p.ref = m, this.process(m, _), this.seen.get(m).isParent = !0;
      else {
        const v = p.schema;
        switch (o.type) {
          case "string": {
            const d = v;
            d.type = "string";
            const { minimum: x, maximum: C, format: T, patterns: w, contentEncoding: O } = r._zod.bag;
            if (typeof x == "number" && (d.minLength = x), typeof C == "number" && (d.maxLength = C), T && (d.format = u[T] ?? T, d.format === "" && delete d.format), O && (d.contentEncoding = O), w && w.size > 0) {
              const E = [...w];
              E.length === 1 ? d.pattern = E[0].source : E.length > 1 && (p.schema.allOf = [
                ...E.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = v, { minimum: x, maximum: C, format: T, multipleOf: w, exclusiveMaximum: O, exclusiveMinimum: E } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? d.type = "integer" : d.type = "number", typeof E == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = E, d.exclusiveMinimum = !0) : d.exclusiveMinimum = E), typeof x == "number" && (d.minimum = x, typeof E == "number" && this.target !== "draft-4" && (E >= x ? delete d.minimum : delete d.exclusiveMinimum)), typeof O == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = O, d.exclusiveMaximum = !0) : d.exclusiveMaximum = O), typeof C == "number" && (d.maximum = C, typeof O == "number" && this.target !== "draft-4" && (O <= C ? delete d.maximum : delete d.exclusiveMaximum)), typeof w == "number" && (d.multipleOf = w);
            break;
          }
          case "boolean": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "bigint": {
            if (this.unrepresentable === "throw")
              throw new Error("BigInt cannot be represented in JSON Schema");
            break;
          }
          case "symbol": {
            if (this.unrepresentable === "throw")
              throw new Error("Symbols cannot be represented in JSON Schema");
            break;
          }
          case "null": {
            this.target === "openapi-3.0" ? (v.type = "string", v.nullable = !0, v.enum = [null]) : v.type = "null";
            break;
          }
          case "any":
            break;
          case "unknown":
            break;
          case "undefined": {
            if (this.unrepresentable === "throw")
              throw new Error("Undefined cannot be represented in JSON Schema");
            break;
          }
          case "void": {
            if (this.unrepresentable === "throw")
              throw new Error("Void cannot be represented in JSON Schema");
            break;
          }
          case "never": {
            v.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = v, { minimum: x, maximum: C } = r._zod.bag;
            typeof x == "number" && (d.minItems = x), typeof C == "number" && (d.maxItems = C), d.type = "array", d.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = v;
            d.type = "object", d.properties = {};
            const x = o.shape;
            for (const w in x)
              d.properties[w] = this.process(x[w], {
                ..._,
                path: [..._.path, "properties", w]
              });
            const C = new Set(Object.keys(x)), T = new Set([...C].filter((w) => {
              const O = o.shape[w]._zod;
              return this.io === "input" ? O.optin === void 0 : O.optout === void 0;
            }));
            T.size > 0 && (d.required = Array.from(T)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = v, x = o.options.map((C, T) => this.process(C, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            d.anyOf = x;
            break;
          }
          case "intersection": {
            const d = v, x = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), C = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (O) => "allOf" in O && Object.keys(O).length === 1, w = [
              ...T(x) ? x.allOf : [x],
              ...T(C) ? C.allOf : [C]
            ];
            d.allOf = w;
            break;
          }
          case "tuple": {
            const d = v;
            d.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", C = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((N, D) => this.process(N, {
              ..._,
              path: [..._.path, x, D]
            })), w = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, C, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = T, w && (d.items = w)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: T
            }, w && d.items.anyOf.push(w), d.minItems = T.length, w || (d.maxItems = T.length)) : (d.items = T, w && (d.additionalItems = w));
            const { minimum: O, maximum: E } = r._zod.bag;
            typeof O == "number" && (d.minItems = O), typeof E == "number" && (d.maxItems = E);
            break;
          }
          case "record": {
            const d = v;
            d.type = "object", (this.target === "draft-7" || this.target === "draft-2020-12") && (d.propertyNames = this.process(o.keyType, {
              ..._,
              path: [..._.path, "propertyNames"]
            })), d.additionalProperties = this.process(o.valueType, {
              ..._,
              path: [..._.path, "additionalProperties"]
            });
            break;
          }
          case "map": {
            if (this.unrepresentable === "throw")
              throw new Error("Map cannot be represented in JSON Schema");
            break;
          }
          case "set": {
            if (this.unrepresentable === "throw")
              throw new Error("Set cannot be represented in JSON Schema");
            break;
          }
          case "enum": {
            const d = v, x = e1(o.entries);
            x.every((C) => typeof C == "number") && (d.type = "number"), x.every((C) => typeof C == "string") && (d.type = "string"), d.enum = x;
            break;
          }
          case "literal": {
            const d = v, x = [];
            for (const C of o.values)
              if (C === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof C == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(C));
              } else
                x.push(C);
            if (x.length !== 0) if (x.length === 1) {
              const C = x[0];
              d.type = C === null ? "null" : typeof C, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [C] : d.const = C;
            } else
              x.every((C) => typeof C == "number") && (d.type = "number"), x.every((C) => typeof C == "string") && (d.type = "string"), x.every((C) => typeof C == "boolean") && (d.type = "string"), x.every((C) => C === null) && (d.type = "null"), d.enum = x;
            break;
          }
          case "file": {
            const d = v, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: C, maximum: T, mime: w } = r._zod.bag;
            C !== void 0 && (x.minLength = C), T !== void 0 && (x.maxLength = T), w ? w.length === 1 ? (x.contentMediaType = w[0], Object.assign(d, x)) : d.anyOf = w.map((O) => ({ ...x, contentMediaType: O })) : Object.assign(d, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, v.nullable = !0) : v.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = v;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, v.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (v._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
            break;
          }
          case "catch": {
            this.process(o.innerType, _), p.ref = o.innerType;
            let d;
            try {
              d = o.catchValue(void 0);
            } catch {
              throw new Error("Dynamic catch values are not supported in JSON Schema");
            }
            v.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = v, x = r._zod.pattern;
            if (!x)
              throw new Error("Pattern not found in template literal");
            d.type = "string", d.pattern = x.source;
            break;
          }
          case "pipe": {
            const d = this.io === "input" ? o.in._zod.def.type === "transform" ? o.out : o.in : o.out;
            this.process(d, _), p.ref = d;
            break;
          }
          case "readonly": {
            this.process(o.innerType, _), p.ref = o.innerType, v.readOnly = !0;
            break;
          }
          // passthrough types
          case "promise": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "optional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "lazy": {
            const d = r._zod.innerType;
            this.process(d, _), p.ref = d;
            break;
          }
          case "custom": {
            if (this.unrepresentable === "throw")
              throw new Error("Custom types cannot be represented in JSON Schema");
            break;
          }
          case "function": {
            if (this.unrepresentable === "throw")
              throw new Error("Function types cannot be represented in JSON Schema");
            break;
          }
        }
      }
    }
    const g = this.metadataRegistry.get(r);
    return g && Object.assign(p.schema, g), this.io === "input" && At(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
  }
  emit(r, i) {
    const s = {
      cycles: i?.cycles ?? "ref",
      reused: i?.reused ?? "inline",
      // unrepresentable: _params?.unrepresentable ?? "throw",
      // uri: _params?.uri ?? ((id) => `${id}`),
      external: i?.external ?? void 0
    }, o = this.seen.get(r);
    if (!o)
      throw new Error("Unprocessed schema. This is a bug in Zod.");
    const u = (b) => {
      const _ = this.target === "draft-2020-12" ? "$defs" : "definitions";
      if (s.external) {
        const x = s.external.registry.get(b[0])?.id, C = s.external.uri ?? ((w) => w);
        if (x)
          return { ref: C(x) };
        const T = b[1].defId ?? b[1].schema.id ?? `schema${this.counter++}`;
        return b[1].defId = T, { defId: T, ref: `${C("__shared")}#/${_}/${T}` };
      }
      if (b[1] === o)
        return { ref: "#" };
      const v = `#/${_}/`, d = b[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: v + d };
    }, f = (b) => {
      if (b[1].schema.$ref)
        return;
      const _ = b[1], { ref: m, defId: v } = u(b);
      _.def = { ..._.schema }, v && (_.defId = v);
      const d = _.schema;
      for (const x in d)
        delete d[x];
      d.$ref = m;
    };
    if (s.cycles === "throw")
      for (const b of this.seen.entries()) {
        const _ = b[1];
        if (_.cycle)
          throw new Error(`Cycle detected: #/${_.cycle?.join("/")}/<root>

Set the \`cycles\` parameter to \`"ref"\` to resolve cyclical schemas with defs.`);
      }
    for (const b of this.seen.entries()) {
      const _ = b[1];
      if (r === b[0]) {
        f(b);
        continue;
      }
      if (s.external) {
        const v = s.external.registry.get(b[0])?.id;
        if (r !== b[0] && v) {
          f(b);
          continue;
        }
      }
      if (this.metadataRegistry.get(b[0])?.id) {
        f(b);
        continue;
      }
      if (_.cycle) {
        f(b);
        continue;
      }
      if (_.count > 1 && s.reused === "ref") {
        f(b);
        continue;
      }
    }
    const p = (b, _) => {
      const m = this.seen.get(b), v = m.def ?? m.schema, d = { ...v };
      if (m.ref === null)
        return;
      const x = m.ref;
      if (m.ref = null, x) {
        p(x, _);
        const C = this.seen.get(x).schema;
        C.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (v.allOf = v.allOf ?? [], v.allOf.push(C)) : (Object.assign(v, C), Object.assign(v, d));
      }
      m.isParent || this.override({
        zodSchema: b,
        jsonSchema: v,
        path: m.path ?? []
      });
    };
    for (const b of [...this.seen.entries()].reverse())
      p(b[0], { target: this.target });
    const h = {};
    if (this.target === "draft-2020-12" ? h.$schema = "https://json-schema.org/draft/2020-12/schema" : this.target === "draft-7" ? h.$schema = "http://json-schema.org/draft-07/schema#" : this.target === "draft-4" ? h.$schema = "http://json-schema.org/draft-04/schema#" : this.target === "openapi-3.0" || console.warn(`Invalid target: ${this.target}`), s.external?.uri) {
      const b = s.external.registry.get(r)?.id;
      if (!b)
        throw new Error("Schema is missing an `id` property");
      h.$id = s.external.uri(b);
    }
    Object.assign(h, o.def);
    const g = s.external?.defs ?? {};
    for (const b of this.seen.entries()) {
      const _ = b[1];
      _.def && _.defId && (g[_.defId] = _.def);
    }
    s.external || Object.keys(g).length > 0 && (this.target === "draft-2020-12" ? h.$defs = g : h.definitions = g);
    try {
      return JSON.parse(JSON.stringify(h));
    } catch {
      throw new Error("Error converting schema to JSON.");
    }
  }
}
function K3(t, r) {
  if (t instanceof v1) {
    const s = new Fy(r), o = {};
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      s.process(g);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, g] = p;
      u[h] = s.emit(g, {
        ...r,
        external: f
      });
    }
    if (Object.keys(o).length > 0) {
      const p = s.target === "draft-2020-12" ? "$defs" : "definitions";
      u.__shared = {
        [p]: o
      };
    }
    return { schemas: u };
  }
  const i = new Fy(r);
  return i.process(t), i.emit(t, r);
}
function At(t, r) {
  const i = r ?? { seen: /* @__PURE__ */ new Set() };
  if (i.seen.has(t))
    return !1;
  i.seen.add(t);
  const o = t._zod.def;
  switch (o.type) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "date":
    case "symbol":
    case "undefined":
    case "null":
    case "any":
    case "unknown":
    case "never":
    case "void":
    case "literal":
    case "enum":
    case "nan":
    case "file":
    case "template_literal":
      return !1;
    case "array":
      return At(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (At(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (At(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return At(o.left, i) || At(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (At(u, i))
          return !0;
      return !!(o.rest && At(o.rest, i));
    }
    case "record":
      return At(o.keyType, i) || At(o.valueType, i);
    case "map":
      return At(o.keyType, i) || At(o.valueType, i);
    case "set":
      return At(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return At(o.innerType, i);
    case "lazy":
      return At(o.getter(), i);
    case "default":
      return At(o.innerType, i);
    case "prefault":
      return At(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return At(o.in, i) || At(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const W3 = /* @__PURE__ */ te("ZodISODateTime", (t, r) => {
  Tw.init(t, r), ct.init(t, r);
});
function e4(t) {
  return k3(W3, t);
}
const t4 = /* @__PURE__ */ te("ZodISODate", (t, r) => {
  Ow.init(t, r), ct.init(t, r);
});
function n4(t) {
  return D3(t4, t);
}
const r4 = /* @__PURE__ */ te("ZodISOTime", (t, r) => {
  kw.init(t, r), ct.init(t, r);
});
function a4(t) {
  return M3(r4, t);
}
const i4 = /* @__PURE__ */ te("ZodISODuration", (t, r) => {
  Dw.init(t, r), ct.init(t, r);
});
function s4(t) {
  return j3(i4, t);
}
const l4 = (t, r) => {
  i1.init(t, r), t.name = "ZodError", Object.defineProperties(t, {
    format: {
      value: (i) => _C(t, i)
      // enumerable: false,
    },
    flatten: {
      value: (i) => bC(t, i)
      // enumerable: false,
    },
    addIssue: {
      value: (i) => {
        t.issues.push(i), t.message = JSON.stringify(t.issues, Pd, 2);
      }
      // enumerable: false,
    },
    addIssues: {
      value: (i) => {
        t.issues.push(...i), t.message = JSON.stringify(t.issues, Pd, 2);
      }
      // enumerable: false,
    },
    isEmpty: {
      get() {
        return t.issues.length === 0;
      }
      // enumerable: false,
    }
  });
}, In = te("ZodError", l4, {
  Parent: Error
}), o4 = /* @__PURE__ */ sh(In), u4 = /* @__PURE__ */ lh(In), c4 = /* @__PURE__ */ Nu(In), f4 = /* @__PURE__ */ Tu(In), d4 = /* @__PURE__ */ EC(In), h4 = /* @__PURE__ */ CC(In), p4 = /* @__PURE__ */ wC(In), m4 = /* @__PURE__ */ AC(In), g4 = /* @__PURE__ */ NC(In), v4 = /* @__PURE__ */ TC(In), y4 = /* @__PURE__ */ OC(In), b4 = /* @__PURE__ */ kC(In), Nt = /* @__PURE__ */ te("ZodType", (t, r) => (Et.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => ia(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => o4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => c4(t, i, s), t.parseAsync = async (i, s) => u4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => f4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => d4(t, i, s), t.decode = (i, s) => h4(t, i, s), t.encodeAsync = async (i, s) => p4(t, i, s), t.decodeAsync = async (i, s) => m4(t, i, s), t.safeEncode = (i, s) => g4(t, i, s), t.safeDecode = (i, s) => v4(t, i, s), t.safeEncodeAsync = async (i, s) => y4(t, i, s), t.safeDecodeAsync = async (i, s) => b4(t, i, s), t.refine = (i, s) => t.check(oA(i, s)), t.superRefine = (i) => t.check(uA(i)), t.overwrite = (i) => t.check(ol(i)), t.optional = () => Yy(t), t.nullable = () => Xy(t), t.nullish = () => Yy(Xy(t)), t.nonoptional = (i) => tA(t, i), t.array = () => Gn(t), t.or = (i) => G4([t, i]), t.and = (i) => Y4(t, i), t.transform = (i) => $y(t, $4(i)), t.default = (i) => K4(t, i), t.prefault = (i) => eA(t, i), t.catch = (i) => rA(t, i), t.pipe = (i) => $y(t, i), t.readonly = () => sA(t), t.describe = (i) => {
  const s = t.clone();
  return Qs.add(s, { description: i }), s;
}, Object.defineProperty(t, "description", {
  get() {
    return Qs.get(t)?.description;
  },
  configurable: !0
}), t.meta = (...i) => {
  if (i.length === 0)
    return Qs.get(t);
  const s = t.clone();
  return Qs.add(s, i[0]), s;
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), _1 = /* @__PURE__ */ te("_ZodString", (t, r) => {
  oh.init(t, r), Nt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(P3(...s)), t.includes = (...s) => t.check(H3(...s)), t.startsWith = (...s) => t.check(q3(...s)), t.endsWith = (...s) => t.check(F3(...s)), t.min = (...s) => t.check(Eu(...s)), t.max = (...s) => t.check(y1(...s)), t.length = (...s) => t.check(b1(...s)), t.nonempty = (...s) => t.check(Eu(1, ...s)), t.lowercase = (s) => t.check(B3(s)), t.uppercase = (s) => t.check(U3(s)), t.trim = () => t.check(G3()), t.normalize = (...s) => t.check(Z3(...s)), t.toLowerCase = () => t.check(V3()), t.toUpperCase = () => t.check(Y3());
}), _4 = /* @__PURE__ */ te("ZodString", (t, r) => {
  oh.init(t, r), _1.init(t, r), t.email = (i) => t.check(u3(S4, i)), t.url = (i) => t.check(p3(x4, i)), t.jwt = (i) => t.check(O3(I4, i)), t.emoji = (i) => t.check(m3(E4, i)), t.guid = (i) => t.check(By(Zy, i)), t.uuid = (i) => t.check(c3(ru, i)), t.uuidv4 = (i) => t.check(f3(ru, i)), t.uuidv6 = (i) => t.check(d3(ru, i)), t.uuidv7 = (i) => t.check(h3(ru, i)), t.nanoid = (i) => t.check(g3(C4, i)), t.guid = (i) => t.check(By(Zy, i)), t.cuid = (i) => t.check(v3(w4, i)), t.cuid2 = (i) => t.check(y3(A4, i)), t.ulid = (i) => t.check(b3(N4, i)), t.base64 = (i) => t.check(A3(R4, i)), t.base64url = (i) => t.check(N3(z4, i)), t.xid = (i) => t.check(_3(T4, i)), t.ksuid = (i) => t.check(S3(O4, i)), t.ipv4 = (i) => t.check(x3(k4, i)), t.ipv6 = (i) => t.check(E3(D4, i)), t.cidrv4 = (i) => t.check(C3(M4, i)), t.cidrv6 = (i) => t.check(w3(j4, i)), t.e164 = (i) => t.check(T3(L4, i)), t.datetime = (i) => t.check(e4(i)), t.date = (i) => t.check(n4(i)), t.time = (i) => t.check(a4(i)), t.duration = (i) => t.check(s4(i));
});
function Ln(t) {
  return o3(_4, t);
}
const ct = /* @__PURE__ */ te("ZodStringFormat", (t, r) => {
  lt.init(t, r), _1.init(t, r);
}), S4 = /* @__PURE__ */ te("ZodEmail", (t, r) => {
  bw.init(t, r), ct.init(t, r);
}), Zy = /* @__PURE__ */ te("ZodGUID", (t, r) => {
  vw.init(t, r), ct.init(t, r);
}), ru = /* @__PURE__ */ te("ZodUUID", (t, r) => {
  yw.init(t, r), ct.init(t, r);
}), x4 = /* @__PURE__ */ te("ZodURL", (t, r) => {
  _w.init(t, r), ct.init(t, r);
}), E4 = /* @__PURE__ */ te("ZodEmoji", (t, r) => {
  Sw.init(t, r), ct.init(t, r);
}), C4 = /* @__PURE__ */ te("ZodNanoID", (t, r) => {
  xw.init(t, r), ct.init(t, r);
}), w4 = /* @__PURE__ */ te("ZodCUID", (t, r) => {
  Ew.init(t, r), ct.init(t, r);
}), A4 = /* @__PURE__ */ te("ZodCUID2", (t, r) => {
  Cw.init(t, r), ct.init(t, r);
}), N4 = /* @__PURE__ */ te("ZodULID", (t, r) => {
  ww.init(t, r), ct.init(t, r);
}), T4 = /* @__PURE__ */ te("ZodXID", (t, r) => {
  Aw.init(t, r), ct.init(t, r);
}), O4 = /* @__PURE__ */ te("ZodKSUID", (t, r) => {
  Nw.init(t, r), ct.init(t, r);
}), k4 = /* @__PURE__ */ te("ZodIPv4", (t, r) => {
  Mw.init(t, r), ct.init(t, r);
}), D4 = /* @__PURE__ */ te("ZodIPv6", (t, r) => {
  jw.init(t, r), ct.init(t, r);
}), M4 = /* @__PURE__ */ te("ZodCIDRv4", (t, r) => {
  Rw.init(t, r), ct.init(t, r);
}), j4 = /* @__PURE__ */ te("ZodCIDRv6", (t, r) => {
  zw.init(t, r), ct.init(t, r);
}), R4 = /* @__PURE__ */ te("ZodBase64", (t, r) => {
  Lw.init(t, r), ct.init(t, r);
}), z4 = /* @__PURE__ */ te("ZodBase64URL", (t, r) => {
  Pw.init(t, r), ct.init(t, r);
}), L4 = /* @__PURE__ */ te("ZodE164", (t, r) => {
  Bw.init(t, r), ct.init(t, r);
}), I4 = /* @__PURE__ */ te("ZodJWT", (t, r) => {
  Hw.init(t, r), ct.init(t, r);
}), S1 = /* @__PURE__ */ te("ZodNumber", (t, r) => {
  p1.init(t, r), Nt.init(t, r), t.gt = (s, o) => t.check(Hy(s, o)), t.gte = (s, o) => t.check(vd(s, o)), t.min = (s, o) => t.check(vd(s, o)), t.lt = (s, o) => t.check(Uy(s, o)), t.lte = (s, o) => t.check(gd(s, o)), t.max = (s, o) => t.check(gd(s, o)), t.int = (s) => t.check(Gy(s)), t.safe = (s) => t.check(Gy(s)), t.positive = (s) => t.check(Hy(0, s)), t.nonnegative = (s) => t.check(vd(0, s)), t.negative = (s) => t.check(Uy(0, s)), t.nonpositive = (s) => t.check(gd(0, s)), t.multipleOf = (s, o) => t.check(qy(s, o)), t.step = (s, o) => t.check(qy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Cu(t) {
  return R3(S1, t);
}
const P4 = /* @__PURE__ */ te("ZodNumberFormat", (t, r) => {
  qw.init(t, r), S1.init(t, r);
});
function Gy(t) {
  return z3(P4, t);
}
const B4 = /* @__PURE__ */ te("ZodUnknown", (t, r) => {
  Fw.init(t, r), Nt.init(t, r);
});
function Vy() {
  return L3(B4);
}
const U4 = /* @__PURE__ */ te("ZodNever", (t, r) => {
  Zw.init(t, r), Nt.init(t, r);
});
function H4(t) {
  return I3(U4, t);
}
const q4 = /* @__PURE__ */ te("ZodArray", (t, r) => {
  Gw.init(t, r), Nt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Eu(i, s)), t.nonempty = (i) => t.check(Eu(1, i)), t.max = (i, s) => t.check(y1(i, s)), t.length = (i, s) => t.check(b1(i, s)), t.unwrap = () => t.element;
});
function Gn(t, r) {
  return X3(q4, t, r);
}
const F4 = /* @__PURE__ */ te("ZodObject", (t, r) => {
  Yw.init(t, r), Nt.init(t, r), nt(t, "shape", () => r.shape), t.keyof = () => Hd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: H4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => pC(t, i), t.safeExtend = (i) => mC(t, i), t.merge = (i) => gC(t, i), t.pick = (i) => dC(t, i), t.omit = (i) => hC(t, i), t.partial = (...i) => vC(x1, t, i[0]), t.required = (...i) => yC(E1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ...ye(r)
  };
  return new F4(i);
}
const Z4 = /* @__PURE__ */ te("ZodUnion", (t, r) => {
  Xw.init(t, r), Nt.init(t, r), t.options = r.options;
});
function G4(t, r) {
  return new Z4({
    type: "union",
    options: t,
    ...ye(r)
  });
}
const V4 = /* @__PURE__ */ te("ZodIntersection", (t, r) => {
  $w.init(t, r), Nt.init(t, r);
});
function Y4(t, r) {
  return new V4({
    type: "intersection",
    left: t,
    right: r
  });
}
const Ud = /* @__PURE__ */ te("ZodEnum", (t, r) => {
  Qw.init(t, r), Nt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
  const i = new Set(Object.keys(r.entries));
  t.extract = (s, o) => {
    const u = {};
    for (const f of s)
      if (i.has(f))
        u[f] = r.entries[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Ud({
      ...r,
      checks: [],
      ...ye(o),
      entries: u
    });
  }, t.exclude = (s, o) => {
    const u = { ...r.entries };
    for (const f of s)
      if (i.has(f))
        delete u[f];
      else
        throw new Error(`Key ${f} not found in enum`);
    return new Ud({
      ...r,
      checks: [],
      ...ye(o),
      entries: u
    });
  };
});
function Hd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Ud({
    type: "enum",
    entries: i,
    ...ye(r)
  });
}
const X4 = /* @__PURE__ */ te("ZodTransform", (t, r) => {
  Jw.init(t, r), Nt.init(t, r), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      throw new K0(t.constructor.name);
    i.addIssue = (u) => {
      if (typeof u == "string")
        i.issues.push(al(u, i.value, r));
      else {
        const f = u;
        f.fatal && (f.continue = !1), f.code ?? (f.code = "custom"), f.input ?? (f.input = i.value), f.inst ?? (f.inst = t), i.issues.push(al(f));
      }
    };
    const o = r.transform(i.value, i);
    return o instanceof Promise ? o.then((u) => (i.value = u, i)) : (i.value = o, i);
  };
});
function $4(t) {
  return new X4({
    type: "transform",
    transform: t
  });
}
const x1 = /* @__PURE__ */ te("ZodOptional", (t, r) => {
  Kw.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new x1({
    type: "optional",
    innerType: t
  });
}
const Q4 = /* @__PURE__ */ te("ZodNullable", (t, r) => {
  Ww.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Xy(t) {
  return new Q4({
    type: "nullable",
    innerType: t
  });
}
const J4 = /* @__PURE__ */ te("ZodDefault", (t, r) => {
  e3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
});
function K4(t, r) {
  return new J4({
    type: "default",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : n1(r);
    }
  });
}
const W4 = /* @__PURE__ */ te("ZodPrefault", (t, r) => {
  t3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function eA(t, r) {
  return new W4({
    type: "prefault",
    innerType: t,
    get defaultValue() {
      return typeof r == "function" ? r() : n1(r);
    }
  });
}
const E1 = /* @__PURE__ */ te("ZodNonOptional", (t, r) => {
  n3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function tA(t, r) {
  return new E1({
    type: "nonoptional",
    innerType: t,
    ...ye(r)
  });
}
const nA = /* @__PURE__ */ te("ZodCatch", (t, r) => {
  r3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function rA(t, r) {
  return new nA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const aA = /* @__PURE__ */ te("ZodPipe", (t, r) => {
  a3.init(t, r), Nt.init(t, r), t.in = r.in, t.out = r.out;
});
function $y(t, r) {
  return new aA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const iA = /* @__PURE__ */ te("ZodReadonly", (t, r) => {
  i3.init(t, r), Nt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function sA(t) {
  return new iA({
    type: "readonly",
    innerType: t
  });
}
const lA = /* @__PURE__ */ te("ZodCustom", (t, r) => {
  s3.init(t, r), Nt.init(t, r);
});
function oA(t, r = {}) {
  return $3(lA, t, r);
}
function uA(t) {
  return Q3(t);
}
const Qy = {
  FIELD: "FieldRevision",
  GLOBAL: "GlobalRevision"
}, qd = "placeholder-chatHistory", cA = ja({
  justification: Ln().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: Ln().describe("The new, full content for the character field.")
}), fA = ja({
  field: Ln(),
  value: Ln()
}), dA = ja({
  index: Cu().int().positive(),
  value: Ln()
});
ja({
  justification: Ln(),
  fields_to_change: Gn(fA).optional(),
  draft_fields_to_remove: Gn(Ln()).optional(),
  greetings_to_add: Gn(Ln()).optional(),
  greetings_to_remove: Gn(Cu().int().positive()).optional(),
  greetings_to_change: Gn(dA).optional()
});
const hA = (t, r) => {
  const i = ja({
    index: Cu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: Ln().describe("The new content for the alternate greeting.")
  }), s = {
    justification: Ln().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: Gn(Ln()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: Gn(Cu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: Gn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Hd(t).describe("The unique ID of the field to change (core or draft)."),
      value: Ln().describe("The new content for the field.")
    });
    s.fields_to_change = Gn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = Gn(Hd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
};
function yd(t) {
  return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");
}
function Fd(t, r = 0) {
  const i = "  ".repeat(r);
  if (Array.isArray(t))
    return t.map((s) => s !== null && typeof s == "object" ? `${i}<item>
${Fd(s, r + 1)}${i}</item>
` : `${i}<item>${yd(s)}</item>
`).join("");
  if (t !== null && typeof t == "object") {
    let s = "";
    for (const o of Object.keys(t)) {
      const u = t[o];
      u !== null && typeof u == "object" ? s += `${i}<${o}>
${Fd(u, r + 1)}${i}</${o}>
` : s += `${i}<${o}>${yd(u)}</${o}>
`;
    }
    return s;
  }
  return `${i}<value>${yd(t)}</value>
`;
}
function pA(t, r) {
  const i = Oa(t);
  return r === "xml" ? Fd(i).trim() : JSON.stringify(i, null, 2);
}
function mA(...t) {
  for (const r of t) if (r !== void 0) return r;
}
function gA(t) {
  return Array.isArray(t) ? t.find((r) => r !== "null") ?? t[0] : t;
}
function Oa(t) {
  if (!t || typeof t != "object") return null;
  const r = Array.isArray(t.examples) ? t.examples[0] : void 0, i = mA(t.example, r, t.default);
  if (i !== void 0) return i;
  if (t.const !== void 0) return t.const;
  if (Array.isArray(t.enum) && t.enum.length) return t.enum[0];
  const s = Array.isArray(t.anyOf) ? t.anyOf[0] : Array.isArray(t.oneOf) ? t.oneOf[0] : void 0;
  if (s) return Oa(s);
  switch (gA(t.type)) {
    case "object": {
      const u = {}, f = t.properties || {};
      for (const p of Object.keys(f))
        u[p] = Oa(f[p]);
      return t.additionalProperties && typeof t.additionalProperties == "object" && (u.additionalProperty = Oa(t.additionalProperties)), u;
    }
    case "array": {
      const u = t.items ?? {};
      return [Oa(u)];
    }
    case "string":
      switch (t.format) {
        case "date-time":
          return (/* @__PURE__ */ new Date(0)).toISOString();
        case "date":
          return "1970-01-01";
        case "time":
          return "00:00:00";
        case "email":
          return "user@example.com";
        case "uri":
        case "url":
          return "https://example.com";
        case "uuid":
          return "00000000-0000-0000-0000-000000000000";
        default:
          return t.title || t.description || "string";
      }
    case "integer":
      return 0;
    case "number":
      return 0;
    case "boolean":
      return !1;
    case "null":
      return null;
    default:
      return t.properties || t.additionalProperties ? Oa({ ...t, type: "object" }) : t.items ? Oa({ ...t, type: "array" }) : null;
  }
}
const vA = new uS();
async function Zd(t, r, i, s, o, u) {
  const f = !s.json_schema && !1;
  return new Promise((p, h) => {
    const g = new AbortController(), b = u ?? g.signal;
    u && u.addEventListener("abort", () => g.abort(), { once: !0 }), vA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: b },
        overridePayload: s
      },
      {
        abortController: g,
        onEntry: void 0,
        onFinish: (_, m, v) => b.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : v ? h(v) : m === void 0 && v === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (m || h(new Error("No data received from LLM")), v ? h(v) : p(m))
      }
    );
  });
}
async function yA(t, r, i, s) {
  const o = await Zd(t, r, i, {}, void 0, s);
  if (!o?.content)
    throw new Error("Plain request failed to return content.");
  return o.content;
}
async function bA(t, r, i, s, o, u, f) {
  const p = Bt.getSettings();
  let h, g;
  const b = K3(i);
  if (o === "native") {
    if (h = await Zd(
      t,
      r,
      u,
      {
        json_schema: { name: s, strict: !0, value: b }
      },
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const m = o, v = pA(b, m), d = JSON.stringify(b, null, 2), x = m === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", C = p.prompts[x]?.content;
    if (!C)
      throw new Error(`Prompt template for mode "${m}" not found.`);
    const T = {
      example_response: v,
      schema: d
    }, O = { role: "system", content: Pt.compile(C, { noEscape: !0, strict: !0 })(T) };
    if (h = await Zd(
      t,
      [...r, O],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    g = R0(h.content, m, { schema: b });
  }
  const _ = i.safeParse(g);
  if (!_.success) {
    const m = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", g), await Ne("error", m), new Error(m);
  }
  return _.data;
}
const C1 = ({ originalContent: t, newContent: r }) => {
  const i = $.useMemo(() => {
    const s = Q0(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), g = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += g), f.removed || (u += g);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, _A = ({ before: t, after: r }) => {
  const i = $.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", g = p?.value ?? "";
      h !== g && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: g
      });
    }), s;
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-popup", children: [
    /* @__PURE__ */ S.jsx("h3", { children: "Changes in this step" }),
    i.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes were detected in the character state for this step." }) : /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: i.map(({ label: s, before: o, after: u }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: s }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Before" }),
        /* @__PURE__ */ S.jsx("span", { children: "After" })
      ] }),
      /* @__PURE__ */ S.jsx(C1, { originalContent: o, newContent: u })
    ] }, s)) })
  ] });
}, SA = ({ currentState: t, initialState: r }) => {
  const [i, s] = $.useState(!1), { coreFields: o, alternateGreetings: u } = $.useMemo(() => {
    const p = [], h = [];
    return zn.forEach((g) => {
      t.fields[g] && p.push({ label: t.fields[g].label, value: t.fields[g].value });
    }), Object.entries(t.fields).filter(([g]) => g.startsWith("alternate_greetings_")).sort((g, b) => parseInt(g[0].split("_")[2]) - parseInt(b[0].split("_")[2])).forEach(([, g]) => h.push(g.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = $.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((g) => {
      const b = r.fields[g], _ = t.fields[g], m = b?.value ?? "", v = _?.value ?? "";
      m !== v && p.push({
        label: _?.label ?? b?.label ?? g,
        before: m,
        after: v
      });
    }), p;
  }, [r, t]);
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: i ? "Comparing with Original State" : "Current Character State" }),
      /* @__PURE__ */ S.jsx("div", { className: "popup_header_buttons", children: /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
        /* @__PURE__ */ S.jsx("input", { type: "checkbox", checked: i, onChange: (p) => s(p.target.checked) }),
        "Compare with Original"
      ] }) })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: g }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: p }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(C1, { originalContent: h, newContent: g })
    ] }, p)) }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      o.map(({ label: p, value: h }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: p }),
        /* @__PURE__ */ S.jsx("div", { className: "state-value", children: h || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
      ] }, p)),
      u.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        u.map((p, h) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            h + 1
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: "state-value", children: p || /* @__PURE__ */ S.jsx("span", { className: "subtle-text", children: "empty" }) })
        ] }, h))
      ] })
    ] }) })
  ] });
}, ki = SillyTavern.getContext(), xA = (t) => Object.entries(t.fields).filter(([r]) => r.startsWith("alternate_greetings_")).sort((r, i) => {
  const s = parseInt(r[0].split("_")[2]), o = parseInt(i[0].split("_")[2]);
  return s - o;
}).map(([, r]) => r.value), EA = (t, r, i, s) => {
  const o = structuredClone(t);
  if (i === "field" && s) {
    const u = r;
    return o.fields[s] && (o.fields[s].value = u.response), o;
  }
  if (i === "global") {
    const u = r;
    let f = xA(o), p = !1;
    if (u.fields_to_change?.length)
      for (const h of u.fields_to_change)
        o.fields[h.field] ? o.fields[h.field].value = h.value : o.draftFields[h.field] && (o.draftFields[h.field].value = h.value);
    if (u.draft_fields_to_remove?.length)
      for (const h of u.draft_fields_to_remove)
        o.draftFields[h] && delete o.draftFields[h];
    if (u.greetings_to_change?.length) {
      p = !0;
      for (const h of u.greetings_to_change)
        h.index > 0 && h.index <= f.length && (f[h.index - 1] = h.value);
    }
    if (u.greetings_to_remove?.length) {
      p = !0;
      const h = new Set(u.greetings_to_remove.map((g) => g - 1));
      f = f.filter((g, b) => !h.has(b));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, g) => {
      const b = `alternate_greetings_${g + 1}`;
      o.fields[b] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${g + 1}`
      };
    }));
  }
  return o;
}, CA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = $.useState(() => structuredClone(t)), u = (_, m, v) => {
    const d = structuredClone(s), x = v ? "draftFields" : "fields";
    d[x][_] && (d[x][_].value = m), o(d);
  }, f = (_, m) => {
    const v = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    v.fields[d] && (v.fields[d].value = m), o(v);
  }, { coreFields: p, alternateGreetings: h, draftFields: g } = $.useMemo(() => {
    const _ = [], m = [], v = [];
    return zn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, x) => parseInt(d[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, d]) => m.push(d.value)), Object.entries(s.draftFields).forEach(([d, x]) => {
      v.push({ id: d, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: m, draftFields: v };
  }, [s]), b = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(pe, { onClick: b, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: m, value: v }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: m }),
        /* @__PURE__ */ S.jsx(Qt, { value: v, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      g.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        g.map(({ id: _, label: m, value: v }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: m }),
          /* @__PURE__ */ S.jsx(Qt, { value: v, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, m) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            m + 1
          ] }),
          /* @__PURE__ */ S.jsx(Qt, { value: _, onChange: (v) => f(m, v.target.value), rows: 4 })
        ] }, m))
      ] })
    ] })
  ] });
}, wA = ({
  session: t,
  onBack: r,
  onApply: i,
  onSessionUpdate: s,
  initialState: o,
  chatContextOptions: u
}) => {
  const [f, p] = $.useState(t.messages), [h, g] = $.useState(""), [b, _] = $.useState(!1), [m, v] = $.useState(null), [d, x] = $.useState(!1), [C, T] = $.useState(!1), [w, O] = $.useState(null), [E, N] = $.useState(""), D = $.useRef(null), M = $.useRef(null);
  $.useEffect(() => {
    D.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const U = $.useCallback(
    (Q, me, ve) => {
      if (JSON.stringify(ve) === JSON.stringify(me))
        return Q;
      const rt = Bt.getSettings().prompts.existingFieldDefinitions;
      if (!rt) return Q;
      const Te = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(ve.fields), ...Object.keys(me.fields)])).forEach((Be) => {
        const Fe = ve.fields[Be]?.value ?? "", He = me.fields[Be]?.value ?? "";
        if (Fe !== He) {
          const Xe = me.fields[Be];
          Xe && (Be.startsWith("alternate_greetings_") ? Te.alternate_greetings[Xe.label] = Xe.value : zn.includes(Be) && (Te.core[Xe.label] = Xe.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(ve.draftFields), ...Object.keys(me.draftFields)])).forEach((Be) => {
        const Fe = ve.draftFields[Be]?.value ?? "", He = me.draftFields[Be]?.value ?? "";
        if (Fe !== He && me.draftFields[Be]) {
          const Xe = me.draftFields[Be];
          Te.draft[Xe.label] = Xe.value;
        }
      }), Object.keys(Te.core).length === 0 && Object.keys(Te.alternate_greetings).length === 0 && Object.keys(Te.draft).length === 0)
        return Q;
      const Tt = { fields: Te };
      let Gt = Pt.compile(rt.content, { noEscape: !0 })(Tt);
      if (Gt = ki.substituteParams(Gt), Gt.trim()) {
        const Be = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Gt.trim(),
          isStateUpdate: !0
        };
        return [...Q, Be];
      }
      return Q;
    },
    []
  ), F = $.useCallback(
    async (Q, me, ve, Ue) => {
      const rt = Bt.getSettings();
      if (!t.profileId) {
        Ne("warning", "Please select a connection profile for this session.");
        return;
      }
      M.current = new AbortController(), ve(), _(!0);
      try {
        const Te = [], mt = ki.extensionSettings.connectionManager?.profiles?.find(
          (Be) => Be.id === t.profileId
        ), Pn = mt?.api ? ki.CONNECT_API_MAP[mt.api].selected : void 0;
        if (!Pn) {
          Ne("warning", "No API selected for this session.");
          return;
        }
        for (const Be of Q)
          if (Be.id === qd) {
            if (xn === void 0 && !Er) continue;
            const Fe = await h0(Pn, u);
            Fe.warnings?.length && Fe.warnings.forEach((He) => Ne("warning", He)), Te.push(...Fe.result);
          } else
            Te.push(Be);
        const Tt = Q.slice(0, Q.length - (me ? 0 : 1)).reverse().find((Be) => Be.stateSnapshot)?.stateSnapshot ?? o, Gt = rt.prompts.existingFieldDefinitions;
        if (Gt) {
          const Be = {
            fields: {
              core: Object.fromEntries(
                Object.entries(Tt.fields).filter(([He]) => !He.startsWith("alternate_greetings_")).map(([, He]) => [He.label, He.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(Tt.fields).filter(([He]) => He.startsWith("alternate_greetings_")).map(([, He]) => [He.label, He.value])
              ),
              draft: Object.fromEntries(Object.entries(Tt.draftFields).map(([, He]) => [He.label, He.value]))
            }
          };
          let Fe = Pt.compile(Gt.content, { noEscape: !0 })(Be);
          if (Fe = ki.substituteParams(Fe), Fe.trim()) {
            const He = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: Fe.trim()
            }, Xe = Te.pop();
            Te.push(He), Xe && Te.push(Xe);
          }
        }
        if (t.isReadonly) {
          Te.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const Be = await yA(
            t.profileId,
            Te,
            rt.maxResponseToken,
            M.current.signal
          ), Fe = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: Be
          }, He = [...Q, Fe];
          p(He), s({ ...t, messages: He });
        } else {
          const Be = t.type === "field" ? cA : (() => {
            const ne = [...Object.keys(Tt.fields), ...Object.keys(Tt.draftFields)], fe = Object.keys(Tt.draftFields);
            return hA(ne, fe);
          })(), He = await bA(
            t.profileId,
            Te,
            Be,
            t.type === "field" ? Qy.FIELD : Qy.GLOBAL,
            t.promptEngineeringMode,
            rt.maxResponseToken,
            M.current.signal
          ), Xe = EA(Tt, He, t.type, t.targetFieldId), z = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: He.justification,
            stateSnapshot: Xe
          };
          let Y = [...Q, z];
          Y = U(Y, Xe, Tt), p(Y), s({ ...t, messages: Y });
        }
      } catch (Te) {
        Te.name === "AbortError" ? Ne("info", "Request was cancelled.") : (console.error("Revise request failed:", Te), Ne("error", `Request failed: ${Te.message}`)), Ue();
      } finally {
        _(!1), M.current = null;
      }
    },
    [t, s, o, u, U]
  ), I = $.useCallback(async () => {
    if (!h.trim() || b) return;
    const Q = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, me = f;
    F(
      [...f, Q],
      !1,
      () => {
        p([...f, Q]), g("");
      },
      () => p(me)
    );
  }, [h, b, f, F]), X = $.useCallback(async () => {
    if (b || f.length === 0) return;
    const Q = f;
    let me = [...f];
    const ve = f.findLastIndex((Ue) => !Ue.isStateUpdate);
    ve > -1 && f[ve].role === "assistant" && (me = f.slice(0, ve)), await F(
      me,
      !0,
      () => p(me),
      () => p(Q)
    );
  }, [b, f, F]), V = () => {
    const Q = f.slice().reverse().find((me) => me.stateSnapshot)?.stateSnapshot ?? o;
    i(Q), r();
  }, ue = (Q) => {
    const me = f.findIndex((rt) => rt.id === Q);
    if (me === -1 || !f[me].stateSnapshot) return;
    const ve = f[me].stateSnapshot;
    let Ue = o;
    for (let rt = me - 1; rt >= 0; rt--)
      if (f[rt].stateSnapshot) {
        Ue = f[rt].stateSnapshot;
        break;
      }
    v({ before: Ue, after: ve });
  }, ie = () => {
    x(!0);
  }, de = (Q) => {
    O(Q.id), N(Q.content);
  }, B = () => {
    O(null), N("");
  }, re = async () => {
    if (!w) return;
    const Q = f.findIndex((mt) => mt.id === w);
    if (Q === -1 || !await ki.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const ve = f, Ue = f.slice(0, Q), rt = { ...f[Q], content: E }, Te = [...Ue, rt];
    B(), F(
      Te,
      !1,
      () => p(Te),
      () => p(ve)
    );
  }, ce = async (Q) => {
    const me = f.findIndex((mt) => mt.id === Q);
    if (me === -1) return;
    const Ue = !!f[me].isInitial;
    if (!await ki.Popup.show.confirm(
      "Delete Message",
      Ue ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let Te;
    Ue ? Te = f.filter((mt) => mt.isInitial && mt.id !== Q) : Te = f.slice(0, me), p(Te), s({ ...t, messages: Te }), Ne("info", "Message history has been updated.");
  }, we = f.filter((Q) => !Q.isStateUpdate), R = we.filter((Q) => Q.isInitial), W = we.filter((Q) => !Q.isInitial), ae = f.slice().reverse().find((Q) => Q.stateSnapshot)?.stateSnapshot ?? o, le = () => {
    T(!0);
  }, oe = (Q) => {
    const me = f.slice().reverse().find((rt) => rt.stateSnapshot)?.stateSnapshot ?? o, ve = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: Q
    };
    let Ue = [...f, ve];
    Ue = U(Ue, Q, me), p(Ue), s({ ...t, messages: Ue }), T(!1);
  }, Me = () => {
    M.current?.abort();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-chat", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h2", { children: t.name }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.isReadonly ?? !1,
              onChange: (Q) => s({ ...t, isReadonly: Q.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ S.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ S.jsx(
          Y0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (Q) => s({ ...t, profileId: Q?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ S.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (Q) => s({ ...t, promptEngineeringMode: Q.target.value }),
            title: "Prompt Engineering Mode",
            disabled: t.isReadonly,
            style: { minWidth: "fit-content", width: "unset" },
            children: [
              /* @__PURE__ */ S.jsx("option", { value: "native", children: "Native" }),
              /* @__PURE__ */ S.jsx("option", { value: "json", children: "JSON" }),
              /* @__PURE__ */ S.jsx("option", { value: "xml", children: "XML" })
            ]
          }
        ),
        /* @__PURE__ */ S.jsx(pe, { onClick: ie, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: le, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(pe, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: V, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: R.map(
          (Q) => w === Q.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Qt, { value: E, onChange: (me) => N(me.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: re, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(pe, { onClick: B, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, Q.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${Q.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${Q.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: Q.content }) }),
            !b && Q.id !== qd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                pe,
                {
                  className: "message-action-button",
                  onClick: () => de(Q),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ S.jsxs(
                pe,
                {
                  className: "message-action-button danger_button",
                  onClick: () => ce(Q.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, Q.id)
        ) })
      ] }),
      W.map(
        (Q) => w === Q.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Qt, { value: E, onChange: (me) => N(me.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(pe, { onClick: re, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(pe, { onClick: B, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, Q.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${Q.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            Q.role === "user" && !Q.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => de(Q),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            Q.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button",
                onClick: () => ue(Q.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !b && /* @__PURE__ */ S.jsxs(
              pe,
              {
                className: "message-action-button danger_button",
                onClick: () => ce(Q.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${Q.role}`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: Q.content }) })
        ] }, Q.id)
      ),
      W.length > 0 && !b && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(pe, { onClick: X, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      b && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(pe, { onClick: Me, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: D })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Qt,
        {
          value: h,
          onChange: (Q) => g(Q.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: b || !!w,
          onKeyDown: (Q) => {
            Q.key === "Enter" && !Q.shiftKey && (Q.preventDefault(), I());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(pe, { onClick: I, disabled: b || !h.trim() || !!w, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    m && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(_A, { before: m.before, after: m.after }),
        onComplete: () => v(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(SA, { currentState: ae, initialState: o }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    C && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          CA,
          {
            initialState: ae,
            onSave: oe,
            onClose: () => T(!1)
          }
        ),
        onComplete: () => T(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
};
async function AA(t, r, i, s, o) {
  const u = Bt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], g = {
    ...{
      user: er.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: er.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => !v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).map(([, v]) => [v.label, v.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, v]) => [v.label, v.value]))
    }
  };
  if (s.charCard) {
    const v = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const x = er.characters[parseInt(d)];
      x && v.push(x);
    }), g.characters = v;
  }
  if (s.worldInfo) {
    const v = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const x = await er.loadWorldInfo(d);
        x && (v[d] = Object.values(x.entries).filter((C) => !C.disable));
      })
    ), g.lorebooks = v;
  }
  for (const v of f.prompts) {
    if (!v.enabled || v.promptName === "stDescription" && !s.stDescription || v.promptName === "charDefinitions" && !s.charCard || v.promptName === "lorebookDefinitions" && !s.worldInfo || v.promptName === "existingFieldDefinitions" && !s.existingFields || v.promptName === "personaDescription" && !s.persona || v.promptName === "chatHistory" && s.messages.type === "none" || xn === void 0 && !Er && v.promptName === "chatHistory") continue;
    if (v.promptName === "chatHistory") {
      p.push({
        id: qd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(v.promptName))
      continue;
    const x = u.prompts[v.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let C = "";
    C = Pt.compile(x.content, { noEscape: !0 })(g), C = er.substituteParams(C), C.trim() && p.push({
      id: `im-${p.length}`,
      role: v.role,
      content: C.trim(),
      isInitial: !0
    });
  }
  const b = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, m = Pt.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: b
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: m,
    isInitial: !0
  }), p;
}
const au = SillyTavern.getContext(), Jy = "charCreator_reviseSessions", NA = ({
  target: t,
  onClose: r,
  onApply: i,
  initialState: s,
  contextToSend: o,
  sessionForContext: u
}) => {
  const [f, p] = $.useState([]), [h, g] = $.useState(null), [b, _] = $.useState(!0);
  $.useEffect(() => {
    const O = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(O), _(!1);
  }, []);
  const m = $.useMemo(() => f.filter((O) => O.type === t.type && (O.type === "global" || O.targetFieldId === t.fieldId)).sort((O, E) => new Date(E.createdAt).getTime() - new Date(O.createdAt).getTime()), [f, t]), v = (O) => {
    localStorage.setItem(Jy, JSON.stringify(O)), p(O);
  }, d = async () => {
    const O = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", E = await au.Popup.show.input(
      "New Session Name",
      `Session for ${O} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (E)
      try {
        const N = Bt.getSettings();
        if (!N.profileId) {
          Ne("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const D = {
          id: `rs-${Date.now()}`,
          name: E,
          type: t.type,
          targetFieldId: t.fieldId,
          createdAt: (/* @__PURE__ */ new Date()).toISOString(),
          messages: [],
          // Will be populated next
          context: {
            mainContextTemplatePreset: N.mainContextTemplatePreset
          },
          profileId: N.profileId,
          promptEngineeringMode: N.defaultPromptEngineeringMode,
          isReadonly: !1
        }, M = await AA(
          s,
          D.targetFieldId,
          D.context.mainContextTemplatePreset,
          o,
          u
        );
        D.messages = M, g(D);
      } catch (N) {
        console.error("Failed to create session:", N), Ne("error", `Failed to create session: ${N.message}`);
      }
  }, x = (O) => {
    g(O);
  }, C = async (O) => {
    if (await au.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((D) => D.id !== O);
      v(N);
    }
  }, T = (O) => {
    const E = f.findIndex((D) => D.id === O.id), N = [...f];
    E !== -1 ? N[E] = O : N.push(O), v(N), g(O);
  };
  if (h) {
    const O = au.extensionSettings.connectionManager?.profiles?.find(
      (D) => D.id === h.profileId
    ), E = {
      targetCharacterId: xn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!Er,
      presetName: O?.preset,
      contextName: O?.context,
      instructName: O?.instruct
    }, N = o.messages;
    switch (N.type) {
      case "none":
        E.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        E.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const D = au.chat?.length ?? 0, M = N.last ?? 10;
        E.messageIndexesBetween = {
          end: Math.max(0, D - 1),
          start: Math.max(0, D - M)
        };
        break;
      case "range":
        E.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return xn === void 0 && !Er && (E.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      wA,
      {
        session: h,
        onBack: () => g(null),
        onApply: i,
        onSessionUpdate: T,
        initialState: s,
        chatContextOptions: E
      }
    );
  }
  const w = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsxs("h2", { children: [
      'Revise Sessions for "',
      w,
      '"'
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: b ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : m.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : m.map((O) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(O), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: O.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(O.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(pe, { className: "danger_button", onClick: () => C(O.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, O.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(pe, { onClick: d, className: "menu_button", children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
      " New Session"
    ] }) })
  ] });
}, TA = SillyTavern.getContext(), OA = `You are an AI assistant helping to refine a character card. The user wants to make changes to their character.

Current character state:
{{currentCharacterJson}}

{{#if kbContent}}
REFERENCE MATERIALS (Use this information for accuracy):
{{kbContent}}
{{/if}}

User's request: {{userMessage}}

Analyze the request and:
1. Determine which fields need to be updated
2. Make the requested changes while maintaining consistency with unchanged fields
3. Respond to the user explaining what you changed

Available fields to update:
- name: Character's name (string)
- description: Physical appearance (string)
- personality: Personality traits (string)
- scenario: Setting/context (string)
- first_mes: First message/greeting (string)
- mes_example: Example dialogue (string)
- alternate_greetings: Alternative opening messages (ARRAY of strings, e.g. ["Greeting 1", "Greeting 2"])

Return a JSON object with:
- "response": Your friendly explanation of what you changed (2-3 sentences)
- "updatedFields": Object with only the fields that changed. NOTE: alternate_greetings MUST be an array of strings!
- "fieldsUpdated": Array of field names that were modified (for UI display)

Example with alternate greetings:
\`\`\`json
{
  "response": "I've added three alternative greetings showing different moods.",
  "updatedFields": {
    "first_mes": "*She looks up from her book* Oh, hello there!",
    "alternate_greetings": [
      "*Waves excitedly* Hey! I was hoping you'd come by!",
      "*Sighs dramatically* Finally, some company...",
      "*Smiles warmly* Welcome, friend. Make yourself at home."
    ]
  },
  "fieldsUpdated": ["first_mes", "alternate_greetings"]
}
\`\`\`

CRITICAL: Return ONLY valid JSON. No markdown code blocks, no explanations outside the JSON.`;
async function kA({
  messages: t,
  session: r,
  profileId: i,
  maxResponseToken: s = 3072,
  // Increased default
  kbFiles: o = []
}) {
  try {
    const u = await Promise.resolve().then(() => Z0), f = o.filter((O) => O.enabled);
    let p = "";
    f.length > 0 && (p = f.map((O) => `--- FILE: ${O.name} ---
${O.content}
--- END FILE ---`).join(`

`));
    const h = {};
    zn.forEach((O) => {
      r.fields[O]?.value && (h[O] = r.fields[O].value);
    });
    const g = [];
    Object.keys(r.fields).filter((O) => O.startsWith("alternate_greetings_")).sort((O, E) => parseInt(O.split("_")[2]) - parseInt(E.split("_")[2])).forEach((O) => {
      r.fields[O].value && g.push(r.fields[O].value);
    }), h.alternate_greetings = g;
    const b = u.compile(OA), _ = t[t.length - 1].content, m = b({
      currentCharacterJson: JSON.stringify(h, null, 2),
      userMessage: _,
      kbContent: p
    }), v = await TA.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: m }],
      s
    );
    if (!v || !v.content)
      throw new Error("No response from AI");
    let d = v.content.trim();
    const x = d.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (x)
      d = x[1];
    else {
      const O = d.indexOf("{"), E = d.lastIndexOf("}");
      O !== -1 && E !== -1 && E >= O && (d = d.substring(O, E + 1));
    }
    let C;
    try {
      C = JSON.parse(d);
    } catch (O) {
      console.warn("JSON parse failed, returning raw response as fallback:", O);
      let E = v.content.trim();
      return (E.includes("{") || E.includes("```")) && (E = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${E}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: E,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let T = { ...r };
    return C.updatedFields && Object.keys(C.updatedFields).forEach((O) => {
      O === "alternate_greetings" ? (Object.keys(T.fields).forEach((N) => {
        N.startsWith("alternate_greetings_") && delete T.fields[N];
      }), C.updatedFields[O].forEach((N, D) => {
        const M = `alternate_greetings_${D + 1}`;
        T.fields[M] = {
          value: N,
          prompt: "",
          label: `Alternate Greeting ${D + 1}`
        };
      })) : zn.includes(O) && (T.fields[O] = {
        value: C.updatedFields[O],
        prompt: "",
        label: Wn[O]
      });
    }), { aiMessage: {
      role: "assistant",
      content: C.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: C.fieldsUpdated || []
    }, updatedSession: T };
  } catch (u) {
    throw console.error("Error in chat message:", u), new Error(`Chat error: ${u.message || String(u)}`);
  }
}
const DA = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s,
  kbFiles: o,
  messages: u,
  onMessagesChange: f
}) => {
  const [p, h] = $.useState(""), [g, b] = $.useState(!1), _ = $.useRef(null), m = () => {
    _.current?.scrollIntoView({ behavior: "smooth" });
  };
  $.useEffect(() => {
    m();
  }, [u.length]);
  const v = $.useCallback(async () => {
    if (!p.trim() || g) return;
    const T = {
      role: "user",
      content: p.trim(),
      timestamp: Date.now()
    }, w = [...u, T];
    f(w), h(""), b(!0);
    try {
      const { aiMessage: O, updatedSession: E } = await kA({
        messages: w,
        session: t,
        profileId: i,
        maxResponseToken: s,
        kbFiles: o
      });
      f([...w, O]), r(E);
    } catch (O) {
      console.error("Chat error:", O), Ne("error", `Chat error: ${O.message || String(O)}`);
      const E = {
        role: "assistant",
        content: `Error occurred: ${O.message || String(O)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...w, E]);
    } finally {
      b(!1);
    }
  }, [p, u, t, i, r, g, f, s, o]), d = $.useCallback((T) => {
    const w = u.filter((O, E) => E !== T);
    f(w);
  }, [u, f]), x = $.useCallback(
    (T) => {
      T.key === "Enter" && !T.shiftKey && (T.preventDefault(), v());
    },
    [v]
  ), C = $.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]);
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ S.jsx(pe, { onClick: C, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      u.length === 0 && /* @__PURE__ */ S.jsxs("div", { className: "chat-welcome", children: [
        /* @__PURE__ */ S.jsx("p", { children: "👋 Hi! I'm your AI assistant for character creation." }),
        /* @__PURE__ */ S.jsx("p", { children: "I can help you refine your character by answering questions or making adjustments. Just tell me what you'd like to change!" }),
        /* @__PURE__ */ S.jsxs("div", { className: "chat-examples", children: [
          /* @__PURE__ */ S.jsx("p", { children: /* @__PURE__ */ S.jsx("strong", { children: "Examples:" }) }),
          /* @__PURE__ */ S.jsxs("ul", { children: [
            /* @__PURE__ */ S.jsx("li", { children: '"Make her more mysterious"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Add a tragic backstory"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Change the setting to a cyberpunk city"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Make the dialogue more formal"' })
          ] })
        ] })
      ] }),
      u.map((T, w) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${T.role} ${T.isError ? "error-message" : ""}`, children: [
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "message-actions",
            style: {
              opacity: 0.3,
              cursor: "pointer",
              padding: "5px",
              display: "flex",
              alignItems: "center"
            },
            onClick: () => d(w),
            title: "Delete message",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: T.content }),
          T.fieldsUpdated && T.fieldsUpdated.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-updates", children: /* @__PURE__ */ S.jsxs("small", { children: [
            "✏️ Updated: ",
            T.fieldsUpdated.join(", ")
          ] }) })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: T.role === "user" ? "👤" : "🤖" })
      ] }, w)),
      g && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-content", children: /* @__PURE__ */ S.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ S.jsx("span", { children: "." }),
          /* @__PURE__ */ S.jsx("span", { children: "." }),
          /* @__PURE__ */ S.jsx("span", { children: "." })
        ] }) }),
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: "🤖" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: _ })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Qt,
        {
          value: p,
          onChange: (T) => h(T.target.value),
          onKeyDown: x,
          placeholder: "Type your message... (Enter to send, Shift+Enter for new line)",
          rows: 3,
          disabled: g,
          className: "chat-input",
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          onClick: v,
          disabled: !p.trim() || g,
          style: {
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--accent-gradient)",
            border: "none",
            cursor: !p.trim() || g ? "not-allowed" : "pointer",
            opacity: !p.trim() || g ? 0.7 : 1
          },
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, MA = () => ({
  id: `entry_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
  keys: [],
  secondary_keys: [],
  content: "",
  comment: "",
  enabled: !0,
  constant: !1,
  selective: !1,
  insertion_order: 0,
  position: "before_char"
}), jA = ({
  lorebook: t,
  onLorebookChange: r,
  isGenerating: i,
  onGenerateEntry: s
}) => {
  const [o, u] = $.useState(null);
  $.useEffect(() => {
    t.entries.length > 0 ? (!o || !t.entries.find((m) => m.id === o)) && u(t.entries[0].id) : u(null);
  }, [t.entries, o]);
  const f = $.useCallback(() => {
    const m = MA();
    r({
      ...t,
      entries: [...t.entries, m]
    }), u(m.id);
  }, [t, r]), p = $.useCallback(
    async (m) => {
      const v = SillyTavern.getContext(), d = t.entries.find((C) => C.id === m);
      if (await v.Popup.show.confirm(
        "Delete Entry",
        `Delete "${d?.comment || "Untitled Entry"}"?`
      )) {
        const C = t.entries.filter((T) => T.id !== m);
        r({ ...t, entries: C }), o === m && u(C.length > 0 ? C[0].id : null);
      }
    },
    [t, r, o]
  ), h = $.useCallback(
    (m, v, d) => {
      const x = t.entries.map(
        (C) => C.id === m ? { ...C, [v]: d } : C
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), g = $.useCallback(
    (m, v, d = !1) => {
      const x = v.split(",").map((C) => C.trim()).filter((C) => C.length > 0);
      h(m, d ? "secondary_keys" : "keys", x);
    },
    [h]
  ), b = $.useCallback(
    (m, v) => {
      r({ ...t, [m]: v });
    },
    [t, r]
  ), _ = t.entries.find((m) => m.id === o);
  return /* @__PURE__ */ S.jsxs("div", { className: "lorebook-editor", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "card lorebook-settings", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "📚 Lorebook Settings" }),
      /* @__PURE__ */ S.jsxs("div", { className: "settings-grid", children: [
        /* @__PURE__ */ S.jsxs("label", { children: [
          "Name",
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "text",
              className: "text_pole",
              value: t.name,
              onChange: (m) => b("name", m.target.value),
              placeholder: "My Lorebook"
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("label", { children: [
          "Scan Depth",
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: t.scan_depth,
              onChange: (m) => b("scan_depth", m.target.value === "" ? 0 : parseInt(m.target.value)),
              min: 0,
              max: 100
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("label", { children: [
          "Token Budget",
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: t.token_budget,
              onChange: (m) => b("token_budget", m.target.value === "" ? 0 : parseInt(m.target.value)),
              min: 0
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
          /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "checkbox",
              checked: t.recursive_scanning,
              onChange: (m) => b("recursive_scanning", m.target.checked)
            }
          ),
          "Recursive Scanning"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "lorebook-content", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "entries-sidebar", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "entries-header", children: [
          /* @__PURE__ */ S.jsxs("h4", { children: [
            "Entries (",
            t.entries.length,
            ")"
          ] }),
          /* @__PURE__ */ S.jsx(pe, { onClick: f, className: "menu_button small", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }) })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "entries-list", children: t.entries.length === 0 ? /* @__PURE__ */ S.jsxs("div", { className: "empty-state", children: [
          /* @__PURE__ */ S.jsx("p", { children: "No entries yet" }),
          /* @__PURE__ */ S.jsxs(pe, { onClick: f, children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
            " Add Entry"
          ] })
        ] }) : t.entries.map((m, v) => /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `entry-item ${o === m.id ? "active" : ""} ${m.enabled ? "" : "disabled"}`,
            onClick: () => u(m.id),
            children: [
              /* @__PURE__ */ S.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ S.jsxs("span", { className: "entry-index", children: [
                  "#",
                  v + 1
                ] }),
                /* @__PURE__ */ S.jsx("span", { className: "entry-title", children: m.comment || m.keys.join(", ") || "Untitled" }),
                m.constant && /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-thumbtack", title: "Always Active" })
              ] }),
              /* @__PURE__ */ S.jsxs("div", { className: "entry-keys-preview", children: [
                m.keys.slice(0, 3).join(", "),
                m.keys.length > 3 && ` +${m.keys.length - 3}`
              ] })
            ]
          },
          m.id
        )) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "entry-editor", children: _ ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsxs("div", { className: "entry-editor-header", children: [
          /* @__PURE__ */ S.jsx("h4", { children: _.comment || "Edit Entry" }),
          /* @__PURE__ */ S.jsxs("div", { className: "entry-actions", children: [
            s && /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => s(_.id),
                disabled: i === _.id,
                className: "menu_button small",
                title: "Generate with AI",
                children: i === _.id ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => p(_.id),
                className: "menu_button small danger",
                title: "Delete Entry",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "entry-form", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Title / Comment",
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: _.comment,
                onChange: (m) => h(_.id, "comment", m.target.value),
                placeholder: "Entry title or description"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Keys (comma separated)",
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: _.keys.join(", "),
                onChange: (m) => g(_.id, m.target.value),
                placeholder: "keyword1, keyword2, keyword3"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Secondary Keys (optional, comma separated)",
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "text",
                className: "text_pole",
                value: _.secondary_keys.join(", "),
                onChange: (m) => g(_.id, m.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ S.jsx(
              Qt,
              {
                value: _.content,
                onChange: (m) => h(_.id, "content", m.target.value),
                rows: 8,
                placeholder: "The lore content that will be injected when keys are triggered..."
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "entry-options", children: [
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: _.enabled,
                  onChange: (m) => h(_.id, "enabled", m.target.checked)
                }
              ),
              "Enabled"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: _.constant,
                  onChange: (m) => h(_.id, "constant", m.target.checked)
                }
              ),
              "Always Active"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: _.selective,
                  onChange: (m) => h(_.id, "selective", m.target.checked)
                }
              ),
              "Selective"
            ] })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "entry-advanced", children: [
            /* @__PURE__ */ S.jsxs("label", { children: [
              "Insertion Order",
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole small",
                  value: _.insertion_order,
                  onChange: (m) => h(
                    _.id,
                    "insertion_order",
                    m.target.value === "" ? 0 : parseInt(m.target.value)
                  )
                }
              )
            ] }),
            /* @__PURE__ */ S.jsxs("label", { children: [
              "Position",
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: _.position,
                  onChange: (m) => h(
                    _.id,
                    "position",
                    m.target.value
                  ),
                  children: [
                    /* @__PURE__ */ S.jsx("option", { value: "before_char", children: "Before Character" }),
                    /* @__PURE__ */ S.jsx("option", { value: "after_char", children: "After Character" })
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] }) : /* @__PURE__ */ S.jsxs("div", { className: "empty-editor", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-book-open" }),
        /* @__PURE__ */ S.jsx("p", { children: "Select an entry or create a new one" }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: f, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
          " Create Entry"
        ] })
      ] }) })
    ] })
  ] });
}, Ky = () => ({
  name: "New Lorebook",
  description: "",
  scan_depth: 4,
  token_budget: 2048,
  recursive_scanning: !1,
  entries: []
}), RA = SillyTavern.getContext(), zA = `You are an AI assistant specialized in creating World Info / Lorebook entries for roleplay AI systems.

Current Lorebook: "{{lorebookName}}"

{{#if kbContent}}
REFERENCE MATERIALS (Use this information for accuracy):
{{kbContent}}
{{/if}}

Current Entries:
{{currentEntriesJson}}

User's request: {{userMessage}}

Your task is to help create, modify, or suggest Lorebook entries based on the user's request.

Each entry should have:
- comment: A title/name for the entry
- keys: Array of trigger words that activate this entry (comma-separated keywords)
- content: The lore information (2-5 sentences typically)
- constant: Set to true if entry should always be active
- enabled: Should be true by default

Return a JSON object with:
- "response": Your friendly explanation of what entries you created/modified (2-3 sentences)
- "newEntries": Array of NEW entries to add (each with: comment, keys, content, constant, enabled)
- "entriesUpdated": Array of entry comments/names that were affected

Example for creating entries about a fantasy kingdom:
\`\`\`json
{
  "response": "I've created 3 entries covering the Kingdom of Avalon: its geography, ruling family, and magical traditions.",
  "newEntries": [
    {
      "comment": "Kingdom of Avalon - Overview",
      "keys": ["Avalon", "kingdom", "realm"],
      "content": "The Kingdom of Avalon is a prosperous realm nestled between the Misty Mountains and the Azure Sea. Known for its ancient magical traditions and wise rulers.",
      "constant": false,
      "enabled": true
    },
    {
      "comment": "House Pendragon",
      "keys": ["Pendragon", "royal family", "king", "queen"],
      "content": "House Pendragon has ruled Avalon for over 500 years. The current monarch, King Arthur VII, is known for his just rule and powerful magic.",
      "constant": false,
      "enabled": true
    }
  ],
  "entriesUpdated": ["Kingdom of Avalon - Overview", "House Pendragon"]
}
\`\`\`

CRITICAL: Return ONLY valid JSON. No markdown code blocks around it, no explanations outside the JSON.
Focus ONLY on creating Lorebook entries. Do NOT modify any character data.`, LA = ({
  lorebook: t,
  onLorebookChange: r,
  profileId: i,
  maxResponseToken: s = 3072,
  kbFiles: o = [],
  messages: u,
  onMessagesChange: f
}) => {
  const [p, h] = $.useState(""), [g, b] = $.useState(!1), _ = $.useRef(null), m = () => {
    _.current?.scrollIntoView({ behavior: "smooth" });
  };
  $.useEffect(() => {
    m();
  }, [u.length]);
  const v = $.useCallback(async () => {
    if (!p.trim() || g) return;
    const T = {
      role: "user",
      content: p.trim(),
      timestamp: Date.now()
    }, w = [...u, T];
    f(w), h(""), b(!0);
    try {
      const O = await Promise.resolve().then(() => Z0), E = o.filter((ie) => ie.enabled);
      let N = "";
      E.length > 0 && (N = E.map((ie) => `--- FILE: ${ie.name} ---
${ie.content}
--- END FILE ---`).join(`

`));
      const D = t.entries.length > 0 ? JSON.stringify(t.entries.map((ie) => ({
        comment: ie.comment,
        keys: ie.keys,
        content: ie.content.substring(0, 200) + (ie.content.length > 200 ? "..." : ""),
        constant: ie.constant,
        enabled: ie.enabled
      })), null, 2) : "[]", U = O.compile(zA)({
        lorebookName: t.name,
        currentEntriesJson: D,
        userMessage: p.trim(),
        kbContent: N
      }), F = await RA.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: U }],
        s
      );
      if (!F || !F.content)
        throw new Error("No response from AI");
      let I = F.content.trim();
      const X = I.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if (X)
        I = X[1];
      else {
        const ie = I.indexOf("{"), de = I.lastIndexOf("}");
        ie !== -1 && de !== -1 && de >= ie && (I = I.substring(ie, de + 1));
      }
      let V;
      try {
        V = JSON.parse(I);
      } catch (ie) {
        console.warn("JSON parse failed for lorebook chat:", ie);
        const de = {
          role: "assistant",
          content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:

${F.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: [],
          isError: !0
        };
        f([...w, de]), b(!1);
        return;
      }
      if (V.newEntries && Array.isArray(V.newEntries) && V.newEntries.length > 0) {
        const ie = V.newEntries.map((de, B) => ({
          id: `entry_${Date.now()}_${B}_${Math.random().toString(36).substr(2, 9)}`,
          keys: Array.isArray(de.keys) ? de.keys : (de.keys || "").split(",").map((re) => re.trim()),
          secondary_keys: [],
          content: de.content || "",
          comment: de.comment || `Entry ${t.entries.length + B + 1}`,
          enabled: de.enabled ?? !0,
          constant: de.constant ?? !1,
          selective: !1,
          insertion_order: t.entries.length + B,
          position: "before_char"
        }));
        r({
          ...t,
          entries: [...t.entries, ...ie]
        });
      }
      const ue = {
        role: "assistant",
        content: V.response || "I've updated the lorebook as requested.",
        timestamp: Date.now(),
        entriesUpdated: V.entriesUpdated || []
      };
      f([...w, ue]);
    } catch (O) {
      console.error("Lorebook chat error:", O);
      const E = {
        role: "assistant",
        content: `Error occurred: ${O.message || String(O)}`,
        timestamp: Date.now(),
        isError: !0
      };
      f([...w, E]);
    } finally {
      b(!1);
    }
  }, [p, g, t, r, i, s, o, u, f]), d = $.useCallback((T) => {
    const w = u.filter((O, E) => E !== T);
    f(w);
  }, [u, f]), x = $.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, [f]), C = (T) => {
    T.key === "Enter" && !T.shiftKey && (T.preventDefault(), v());
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 15px", borderBottom: "1px solid rgba(255,255,255,0.05)" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Lorebook Assistant" }),
      /* @__PURE__ */ S.jsx(pe, { onClick: x, className: "menu_button secondary small", children: "Clear" })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      u.length === 0 && /* @__PURE__ */ S.jsxs("div", { className: "chat-welcome", children: [
        /* @__PURE__ */ S.jsx("span", { className: "welcome-emoji", children: "📚" }),
        " Hi! I'm your AI assistant for Lorebook creation.",
        /* @__PURE__ */ S.jsx("p", { children: "I can help you create World Info entries for your setting. Just tell me what you need!" }),
        /* @__PURE__ */ S.jsxs("div", { className: "chat-examples", children: [
          /* @__PURE__ */ S.jsx("p", { children: /* @__PURE__ */ S.jsx("strong", { children: "Examples:" }) }),
          /* @__PURE__ */ S.jsxs("ul", { children: [
            /* @__PURE__ */ S.jsx("li", { children: '"Create 3 entries about the Steins;Gate universe"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Add entries for the main characters of Evangelion"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Generate lore for a cyberpunk megacity"' }),
            /* @__PURE__ */ S.jsx("li", { children: '"Create entries about magic systems in my fantasy world"' })
          ] })
        ] })
      ] }),
      u.map((T, w) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${T.role} ${T.isError ? "error-message" : ""}`, children: [
        /* @__PURE__ */ S.jsx(
          "div",
          {
            className: "message-actions",
            style: {
              opacity: 0.3,
              cursor: "pointer",
              padding: "5px",
              display: "flex",
              alignItems: "center"
            },
            onClick: () => d(w),
            title: "Delete message",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        ),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", style: { whiteSpace: "pre-wrap" }, children: T.content }),
          T.entriesUpdated && T.entriesUpdated.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            T.entriesUpdated.join(", ")
          ] })
        ] }),
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: T.role === "user" ? "👤" : "🤖" })
      ] }, w)),
      g && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] }),
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: "🤖" })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: _ })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Qt,
        {
          value: p,
          onChange: (T) => h(T.target.value),
          onKeyDown: C,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: g,
          style: { flex: 1 }
        }
      ),
      /* @__PURE__ */ S.jsx(
        "button",
        {
          onClick: v,
          disabled: g || !p.trim(),
          style: {
            borderRadius: "50%",
            width: "42px",
            height: "42px",
            padding: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "var(--accent-gradient)",
            border: "none",
            cursor: g || !p.trim() ? "not-allowed" : "pointer",
            opacity: g || !p.trim() ? 0.7 : 1
          },
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane", style: { color: "white" } })
        }
      )
    ] })
  ] });
}, IA = SillyTavern.getContext(), PA = [
  { id: 13, name: "Gemma" },
  { id: 12, name: "Llama 3" },
  { id: 3, name: "Llama 2" },
  { id: 7, name: "Mistral" },
  { id: 2, name: "OpenAI (GPT-4)" },
  { id: 11, name: "Claude" }
], Wy = ({ files: t, onFilesChange: r }) => {
  const i = $.useRef(null), [s, o] = $.useState(13), [u, f] = $.useState(!1), [p, h] = $.useState(""), g = (w) => {
    const O = Array.from(w.target.files || []);
    if (O.length === 0) return;
    const E = [];
    let N = 0;
    O.forEach((D) => {
      const M = new FileReader();
      M.onload = (U) => {
        const F = U.target?.result;
        F.indexOf("\0") !== -1 ? console.warn(`File ${D.name} appears to be binary, skipping.`) : E.push({
          id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: D.name,
          content: F,
          enabled: !0,
          size: D.size
        }), N++, N === O.length && (r([...t, ...E]), i.current && (i.current.value = ""));
      }, M.readAsText(D);
    });
  }, b = (w) => {
    r(t.map((O) => O.id === w ? { ...O, enabled: !O.enabled } : O));
  }, _ = (w) => {
    r(t.filter((O) => O.id !== w));
  }, m = async () => {
    await IA.Popup.show.confirm(
      "Clear Knowledge Base",
      `Are you sure you want to remove all ${t.length} files from the knowledge base?`
    ) && r([]);
  }, v = async (w) => {
    if (!(u || w.length === 0)) {
      f(!0);
      try {
        const E = {
          13: "/api/tokenizers/gemma/encode",
          12: "/api/tokenizers/llama3/encode",
          3: "/api/tokenizers/llama/encode",
          7: "/api/tokenizers/mistral/encode",
          2: "/api/tokenizers/openai/encode",
          11: "/api/tokenizers/claude/encode"
        }[s], N = [...t], D = 15;
        for (let M = 0; M < N.length; M += D) {
          const U = [];
          for (let F = M; F < Math.min(M + D, N.length); F++)
            N[F].tokens === void 0 && U.push(F);
          U.length !== 0 && await Promise.all(U.map(async (F) => {
            try {
              const I = N[F], V = await (await fetch(E, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text: I.content })
              })).json();
              V && V.ids && Array.isArray(V.ids) ? N[F] = { ...I, tokens: V.ids.length } : Array.isArray(V) ? N[F] = { ...I, tokens: V.length } : typeof V.token_count == "number" ? N[F] = { ...I, tokens: V.token_count } : N[F] = { ...I, tokens: Math.ceil(I.content.length / 3.35) };
            } catch (I) {
              console.error("Token count failed:", I), N[F] = { ...N[F], tokens: Math.ceil(N[F].content.length / 3.35) };
            }
          }));
        }
        r(N);
      } finally {
        f(!1);
      }
    }
  };
  $.useEffect(() => {
    const w = t.filter((O) => O.tokens === void 0);
    w.length > 0 && !u && v(w);
  }, [t, s]);
  const d = (w) => {
    const O = Number(w.target.value);
    o(O), r(t.map((E) => ({ ...E, tokens: void 0 })));
  }, x = t.filter(
    (w) => w.name.toLowerCase().includes(p.toLowerCase())
  ), C = t.filter((w) => w.enabled).reduce((w, O) => w + (O.tokens || 0), 0), T = t.reduce((w, O) => w + (O.tokens || 0), 0);
  return /* @__PURE__ */ S.jsxs("div", { className: "card knowledge-base", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "card-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px" }, children: [
        /* @__PURE__ */ S.jsx("h3", { style: { margin: 0 }, children: "🧠 Knowledge Base" }),
        u && /* @__PURE__ */ S.jsxs("div", { style: { fontSize: "0.8em", opacity: 0.6 }, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Counting..."
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: "8px", alignItems: "center" }, children: [
        /* @__PURE__ */ S.jsx(
          "select",
          {
            value: s,
            onChange: d,
            className: "text_pole",
            style: { padding: "4px 8px", fontSize: "0.8em", width: "auto" },
            title: "Select tokenizer for counting",
            children: PA.map((w) => /* @__PURE__ */ S.jsx("option", { value: w.id, children: w.name }, w.id))
          }
        ),
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "file",
            multiple: !0,
            ref: i,
            style: { display: "none" },
            onChange: g,
            accept: ".txt,.md,.json,.csv,.xml,.yml,.yaml"
          }
        ),
        t.length > 0 && /* @__PURE__ */ S.jsxs(pe, { onClick: m, className: "menu_button small danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
          " Clear"
        ] }),
        /* @__PURE__ */ S.jsxs(pe, { onClick: () => i.current?.click(), className: "menu_button small", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-upload" }),
          " Attach"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "kb-search-row", style: { marginBottom: "12px", position: "relative" }, children: [
      /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-magnifying-glass", style: {
        position: "absolute",
        left: "12px",
        top: "50%",
        transform: "translateY(-50%)",
        opacity: 0.4,
        pointerEvents: "none"
      } }),
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: "text",
          className: "text_pole",
          placeholder: "Search files by name...",
          value: p,
          onChange: (w) => h(w.target.value),
          style: {
            width: "100%",
            padding: "8px 12px 8px 35px",
            fontSize: "0.9em",
            borderRadius: "var(--radius-md)",
            background: "rgba(0, 0, 0, 0.2)"
          }
        }
      )
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "kb-files-list", style: { maxHeight: "200px", overflowY: "auto", paddingRight: "4px" }, children: t.length === 0 ? /* @__PURE__ */ S.jsx("div", { style: { opacity: 0.6, fontSize: "0.9em", textAlign: "center", padding: "10px" }, children: "No files attached. Upload context files here." }) : x.length === 0 ? /* @__PURE__ */ S.jsxs("div", { style: { opacity: 0.4, fontSize: "0.9em", textAlign: "center", padding: "20px" }, children: [
      'No files matching "',
      p,
      '"'
    ] }) : x.map((w) => /* @__PURE__ */ S.jsxs("div", { className: "kb-file-item", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 8px",
      background: "rgba(255, 255, 255, 0.05)",
      marginBottom: "4px",
      borderRadius: "4px",
      border: "1px solid rgba(255, 255, 255, 0.1)"
    }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", flex: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "checkbox",
            checked: w.enabled,
            onChange: () => b(w.id),
            style: { margin: 0 }
          }
        ),
        /* @__PURE__ */ S.jsx("span", { title: w.name, style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9em",
          fontWeight: 500
        }, children: w.name }),
        /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", gap: "4px", fontSize: "0.75em", opacity: 0.6, whiteSpace: "nowrap" }, children: [
          /* @__PURE__ */ S.jsxs("span", { children: [
            "(",
            Math.round(w.size / 1024),
            "KB)"
          ] }),
          w.tokens !== void 0 ? /* @__PURE__ */ S.jsxs("span", { style: { color: "#818cf8" }, children: [
            "• ",
            w.tokens,
            " tokens"
          ] }) : /* @__PURE__ */ S.jsx("span", { style: { opacity: 0.4 }, children: "• ..." })
        ] })
      ] }),
      /* @__PURE__ */ S.jsx(
        "div",
        {
          onClick: () => _(w.id),
          style: { cursor: "pointer", opacity: 0.6, padding: "2px 6px" },
          title: "Remove file",
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
        }
      )
    ] }, w.id)) }),
    /* @__PURE__ */ S.jsxs("div", { className: "kb-footer", style: {
      marginTop: "12px",
      paddingTop: "12px",
      borderTop: "2px solid rgba(255, 255, 255, 0.1)",
      display: "flex",
      flexDirection: "column",
      gap: "4px"
    }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "baseline" }, children: [
        /* @__PURE__ */ S.jsx("div", { style: { fontSize: "0.9em", opacity: 0.7 }, children: p ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          "Found: ",
          /* @__PURE__ */ S.jsx("strong", { children: x.length }),
          " / ",
          t.length
        ] }) : /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          "Active: ",
          /* @__PURE__ */ S.jsx("strong", { children: t.filter((w) => w.enabled).length }),
          " / ",
          t.length,
          " files"
        ] }) }),
        T > 0 && /* @__PURE__ */ S.jsxs("div", { style: { fontSize: "0.8em", opacity: 0.5 }, children: [
          "Total Base: ",
          T.toLocaleString(),
          " tokens"
        ] })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--accent-gradient)",
        padding: "8px 12px",
        borderRadius: "var(--radius-md)",
        color: "white",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
        marginTop: "4px"
      }, children: [
        /* @__PURE__ */ S.jsx("span", { style: { fontWeight: "bold", fontSize: "1em", textTransform: "uppercase", letterSpacing: "0.5px" }, children: "Total Tokens (Active)" }),
        /* @__PURE__ */ S.jsx("span", { style: { fontSize: "1.4em", fontWeight: "800", fontFamily: "monospace" }, children: C.toLocaleString() })
      ] })
    ] })
  ] });
};
function BA(t, r) {
  return {
    spec: "chara_card_v3",
    spec_version: "3.0",
    data: {
      name: t.name,
      description: t.description,
      personality: t.personality,
      scenario: t.scenario,
      first_mes: t.first_mes,
      mes_example: t.mes_example,
      creator_notes: "",
      system_prompt: "",
      post_history_instructions: "",
      alternate_greetings: t.alternate_greetings || [],
      tags: [],
      creator: "SillyTavern Character Creator (Autonomous)",
      character_version: "1.0",
      extensions: {}
    }
  };
}
function UA(t, r) {
  try {
    const i = BA(t, r), s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Ne("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Ne("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function HA(t, r) {
  try {
    const i = {
      name: t.name || `${r} Lorebook`,
      description: t.description || "",
      scanDepth: t.scan_depth || 4,
      tokenBudget: t.token_budget || 2048,
      recursiveScanning: t.recursive_scanning ?? !1,
      extensions: t.extensions || {},
      entries: {}
    };
    t.entries.forEach((h, g) => {
      i.entries[String(g)] = {
        uid: g,
        key: h.keys || [],
        keysecondary: h.secondary_keys || [],
        comment: h.comment || `Entry ${g + 1}`,
        content: h.content || "",
        constant: h.constant ?? !1,
        selective: h.selective ?? !1,
        insertion_order: h.insertion_order ?? g,
        enabled: h.enabled ?? !0,
        position: h.position === "after_char" ? 1 : 0,
        extensions: h.extensions || {}
      };
    });
    const s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Ne("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Ne("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
Pt.helpers.join || Pt.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
Pt.helpers.is_not_empty || Pt.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const jn = SillyTavern.getContext(), e0 = "charCreator", bd = () => ({
  selectedCharacterIndexes: xn ? [String(xn)] : [],
  selectedWorldNames: [],
  fields: zn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Wn[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), qA = {
  name: { label: Wn.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Wn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Wn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Wn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Wn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Wn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, FA = () => {
  const t = X0(), r = Bt.getSettings(), [i, s] = $.useState(bd()), [o, u] = $.useState([]), [f, p] = $.useState(!0), [h, g] = $.useState("core"), [b, _] = $.useState("character"), [m, v] = $.useState(Ky()), [d, x] = $.useState([]), [C, T] = $.useState([]), [w, O] = $.useState([]), [E, N] = $.useState([]), [D, M] = $.useState([]), [U, F] = $.useState(null), [I, X] = $.useState(null), [V, ue] = $.useState(!1), [ie, de] = $.useState(null);
  $.useEffect(() => {
    (async () => {
      p(!0), N(jn.characters), M(Kg);
      const Y = JSON.parse(localStorage.getItem(e0) ?? "{}"), ne = bd();
      if (Y.fields && (ne.fields = { ...ne.fields, ...Y.fields }), Y.draftFields && (ne.draftFields = Y.draftFields), Y.selectedCharacterIndexes && (ne.selectedCharacterIndexes = Y.selectedCharacterIndexes), Y.selectedWorldNames && (ne.selectedWorldNames = Y.selectedWorldNames), Y.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = Y.lastLoadedCharacterId;
        const fe = jn.characters.find((Oe) => Oe.avatar === Y.lastLoadedCharacterId);
        fe && F(fe);
      }
      s(ne), p(!1);
    })();
  }, []), $.useEffect(() => {
    f || localStorage.setItem(e0, JSON.stringify(i));
  }, [i, f]);
  const B = (z, Y) => {
    Bt.getSettings()[z] = Y, Bt.saveSettings(), t();
  }, re = (z, Y) => {
    Bt.getSettings().contextToSend[z] = Y, Bt.saveSettings(), t();
  }, ce = $.useCallback(
    (z, Y, ne, fe) => {
      s((Oe) => {
        const Ze = fe ? "draftFields" : "fields", ft = { ...Oe[Ze] };
        return ft[z] || (ft[z] = { value: "", prompt: "", label: z }), ft[z][ne] = Y, { ...Oe, [Ze]: ft };
      });
    },
    []
  ), we = $.useMemo(
    () => Object.keys(i.fields).filter((z) => z.startsWith("alternate_greetings_")).sort((z, Y) => parseInt(z.split("_")[2]) - parseInt(Y.split("_")[2])).map((z) => i.fields[z]),
    [i.fields]
  ), R = $.useCallback((z) => {
    s((Y) => {
      const ne = { ...Y.fields };
      return Object.keys(ne).forEach((fe) => {
        fe.startsWith("alternate_greetings_") && delete ne[fe];
      }), z.forEach((fe, Oe) => {
        const Ze = `alternate_greetings_${Oe + 1}`;
        ne[Ze] = { ...fe, label: `Alternate Greeting ${Oe + 1}` };
      }), { ...Y, fields: ne };
    });
  }, []), W = $.useCallback(
    (z, Y) => {
      ce(z, "", "value", Y);
    },
    [ce]
  ), ae = $.useCallback(
    async (z) => {
      await jn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[z].label}"?`
      ) && s((ne) => {
        const fe = { ...ne.draftFields };
        return delete fe[z], { ...ne, draftFields: fe };
      });
    },
    [i.draftFields]
  ), le = $.useCallback(async () => {
    const z = await jn.Popup.show.input("Enter Draft Field Name", "");
    if (!z?.trim()) return;
    const Y = Rd(z.trim());
    if (!Y) return Ne("error", "Invalid field name.");
    if (i.draftFields[Y] || zn.includes(Y))
      return Ne("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [Y]: { value: "", prompt: "", label: z } }
    })), g("draft");
  }, [i.draftFields]), oe = (z) => {
    de({ type: "field", fieldId: z }), ue(!0);
  }, Me = () => {
    de({ type: "global" }), ue(!0);
  }, Q = (z) => {
    s((Y) => ({
      ...Y,
      fields: { ...Y.fields, ...z.fields },
      draftFields: { ...Y.draftFields, ...z.draftFields }
    })), Ne("success", "Changes from revise session applied."), ue(!1);
  }, me = $.useCallback(
    async (z, Y) => {
      if (!r.profileId) return Ne("warning", "Please select a connection profile.");
      u((ne) => [...ne, z]);
      try {
        const ne = jn.extensionSettings.connectionManager?.profiles?.find(
          (We) => We.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const fe = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: xn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!Er
        }, Oe = r.contextToSend.messages;
        switch (Oe.type) {
          case "none":
            fe.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            fe.messageIndexesBetween = { start: 0, end: Oe.first ?? 10 };
            break;
          case "last":
            const We = jn.chat?.length ?? 0, Ut = Oe.last ?? 10;
            fe.messageIndexesBetween = {
              end: Math.max(0, We - 1),
              start: Math.max(0, We - Ut)
            };
            break;
          case "range":
            fe.messageIndexesBetween = {
              start: Oe.range?.start ?? 0,
              end: Oe.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        xn === void 0 && !Er && (fe.messageIndexesBetween = { start: -1, end: -1 });
        const Ze = {};
        await Promise.all(
          Kg.filter((We) => !Ze[We]).map(async (We) => {
            const Ut = await jn.loadWorldInfo(We);
            Ut && (Ze[We] = Object.values(Ut.entries));
          })
        );
        const ft = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete ft.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete ft.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete ft.lorebookDefinitions, r.contextToSend.existingFields || delete ft.existingFieldDefinitions, r.contextToSend.persona || delete ft.personaDescription, delete ft.worldInfoCharDefinition;
        const at = await kE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: fe,
          continueFrom: Y,
          session: i,
          allCharacters: E,
          entriesGroupByWorldName: Ze,
          promptSettings: ft,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (We) => We.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: z,
          outputFormat: r.outputFormat
        }), un = z.startsWith("alternate_greetings_"), jt = !un && !zn.includes(z);
        if (un) {
          const We = parseInt(z.split("_")[2]) - 1, Ut = [...we];
          Ut[We] && (Ut[We].value = at), R(Ut);
        } else
          ce(z, at, "value", jt);
      } catch (ne) {
        console.error(ne), Ne("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((fe) => fe !== z));
      }
    },
    [i, r, E, we, ce, R]
  ), ve = $.useCallback(async () => {
    await jn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(bd()), F(null));
  }, []), Ue = $.useCallback(
    (z) => {
      if (!U) return Ne("warning", "Please load a character to compare against.");
      let Y, ne, fe;
      typeof z == "number" ? (Y = we[z]?.value ?? "", ne = U.data?.alternate_greetings?.[z] ?? "", fe = `Alternate Greeting ${z + 1}`) : (Y = i.fields[z]?.value ?? "", ne = U[z] ?? U.data?.[z] ?? "", fe = Wn[z]), X({ original: ne, current: Y, fieldName: fe });
    },
    [U, i.fields, we]
  ), rt = $.useCallback(
    async (z) => {
      const Y = E[parseInt(z)];
      if (!Y || zn.some((Ze) => i.fields[Ze].value.trim() !== "") && !await jn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const fe = { ...i.fields };
      zn.forEach((Ze) => {
        fe[Ze] = { value: Y[Ze] ?? Y.data?.[Ze] ?? "", prompt: "", label: Wn[Ze] };
      });
      const Oe = (Y.data?.alternate_greetings ?? []).map((Ze) => ({ value: Ze, prompt: "" }));
      F(Y), s((Ze) => ({ ...Ze, fields: fe, lastLoadedCharacterId: Y.avatar })), R(Oe);
    },
    [E, i.fields, R]
  ), Te = () => we.map((z) => z.value).filter((z) => z.trim() !== ""), mt = async () => {
    if (!i.fields.name.value) return Ne("warning", "Please provide a character name.");
    if (!await jn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const Y = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: Te(),
        tags: [],
        avatar: "none",
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      },
      avatar: "none",
      tags: [],
      spec: "chara_card_v3",
      spec_version: "3.0"
    };
    try {
      await v2(Y, !0);
    } catch (ne) {
      Ne("error", `Failed to create character: ${ne.message}`);
    }
  }, Pn = async () => {
    if (!U) return Ne("warning", "Please load a character to override.");
    if (!await jn.Popup.show.confirm(
      "Override Character",
      `Override "${U.name}"? This cannot be undone.`
    )) return;
    const Y = {
      ...U,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: Te(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await y2(Y, !0), Ne("success", `Character "${Y.name}" updated!`);
    } catch (ne) {
      Ne("error", `Failed to override character: ${ne.message}`);
    }
  }, Tt = () => {
    const z = JSON.stringify({ draftFields: i.draftFields, version: G0 }, null, 2), Y = new Blob([z], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(Y), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, Gt = () => {
    const z = document.createElement("input");
    z.type = "file", z.accept = ".json", z.onchange = async () => {
      const Y = z.files?.[0];
      if (Y)
        try {
          const ne = await Y.text(), fe = JSON.parse(ne);
          if (!fe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await jn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((Ze) => ({ ...Ze, draftFields: fe.draftFields })), Ne("success", "Draft fields imported."));
        } catch (ne) {
          Ne("error", `Import failed: ${ne.message}`);
        }
    }, z.click();
  }, Be = $.useMemo(
    () => E.map((z, Y) => ({ value: String(Y), label: z.name })),
    [E]
  ), Fe = $.useMemo(
    () => D.map((z) => ({ value: z, label: z })),
    [D]
  ), He = $.useMemo(
    () => Object.keys(r.promptPresets).map((z) => ({ value: z, label: z })),
    [r.promptPresets]
  ), Xe = $.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((z) => ({ value: z, label: z })),
    [r.mainContextTemplatePresets]
  );
  return f ? /* @__PURE__ */ S.jsx("div", { children: "Loading..." }) : /* @__PURE__ */ S.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ S.jsx("h2", { children: "Character Creator" }),
    /* @__PURE__ */ S.jsxs("div", { className: "mode-tabs", children: [
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          className: `mode-tab ${b === "character" ? "active" : ""}`,
          onClick: () => _("character"),
          children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-user" }),
            " Character"
          ]
        }
      ),
      /* @__PURE__ */ S.jsxs(
        "button",
        {
          className: `mode-tab ${b === "lorebook" ? "active" : ""}`,
          onClick: () => _("lorebook"),
          children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-book" }),
            " Lorebook"
          ]
        }
      )
    ] }),
    b === "character" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column-left", children: [
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Connection Profile" }),
          /* @__PURE__ */ S.jsx(
            Y0,
            {
              initialSelectedProfileId: r.profileId,
              onChange: (z) => B("profileId", z?.id ?? "")
            }
          )
        ] }),
        /* @__PURE__ */ S.jsx(Wy, { files: d, onFilesChange: x }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Context to Send" }),
          /* @__PURE__ */ S.jsxs("div", { className: "context-options", children: [
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.stDescription,
                  onChange: (z) => re("stDescription", z.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.persona,
                  onChange: (z) => re("persona", z.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (xn !== void 0 || Er) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (z) => re("messages", {
                    ...r.contextToSend.messages,
                    type: z.target.value
                  }),
                  children: [
                    /* @__PURE__ */ S.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ S.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ S.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              r.contextToSend.messages.type === "first" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "First",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.first ?? 10,
                    onChange: (z) => re("messages", {
                      ...r.contextToSend.messages,
                      first: z.target.value === "" ? 0 : parseInt(z.target.value)
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "last" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "Last",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: r.contextToSend.messages.last ?? 10,
                    onChange: (z) => re("messages", {
                      ...r.contextToSend.messages,
                      last: z.target.value === "" ? 0 : parseInt(z.target.value)
                    })
                  }
                ),
                " ",
                "Messages"
              ] }) }),
              r.contextToSend.messages.type === "range" && /* @__PURE__ */ S.jsx("div", { style: { marginTop: "10px" }, children: /* @__PURE__ */ S.jsxs("label", { children: [
                "Range:",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: r.contextToSend.messages.range?.start ?? 0,
                    onChange: (z) => re("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: z.target.value === "" ? 0 : parseInt(z.target.value)
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ S.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: r.contextToSend.messages.range?.end ?? 10,
                    onChange: (z) => re("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: z.target.value === "" ? 0 : parseInt(z.target.value) }
                    })
                  }
                )
              ] }) })
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.charCard,
                  onChange: (z) => re("charCard", z.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: Be,
                value: i.selectedCharacterIndexes,
                onChange: (z) => s((Y) => ({ ...Y, selectedCharacterIndexes: z })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.worldInfo,
                  onChange: (z) => re("worldInfo", z.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: Fe,
                value: i.selectedWorldNames,
                onChange: (z) => s((Y) => ({ ...Y, selectedWorldNames: z })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.existingFields,
                  onChange: (z) => re("existingFields", z.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ S.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: r.contextToSend.dontSendOtherGreetings,
                  onChange: (z) => re("dontSendOtherGreetings", z.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Generation Options" }),
          /* @__PURE__ */ S.jsxs("label", { title: "You can edit in extension settings", children: [
            "Main Context Template",
            /* @__PURE__ */ S.jsx(
              bu,
              {
                onItemsChange: () => {
                },
                label: "Main Context Template",
                items: Xe,
                value: r.mainContextTemplatePreset,
                onChange: (z) => B("mainContextTemplatePreset", z ?? "default")
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Max Context Tokens",
            /* @__PURE__ */ S.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.maxContextType,
                onChange: (z) => B("maxContextType", z.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "profile", children: "Use profile preset" }),
                  /* @__PURE__ */ S.jsx("option", { value: "sampler", children: "Use active preset" }),
                  /* @__PURE__ */ S.jsx("option", { value: "custom", children: "Custom" })
                ]
              }
            )
          ] }),
          r.maxContextType === "custom" && /* @__PURE__ */ S.jsx(
            "input",
            {
              type: "number",
              className: "text_pole",
              value: r.maxContextValue,
              onChange: (z) => B("maxContextValue", z.target.value === "" ? 0 : parseInt(z.target.value))
            }
          ),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Max Response Tokens",
            /* @__PURE__ */ S.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: r.maxResponseToken,
                onChange: (z) => B("maxResponseToken", z.target.value === "" ? 0 : parseInt(z.target.value))
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Output Format",
            /* @__PURE__ */ S.jsxs(
              "select",
              {
                className: "text_pole",
                value: r.outputFormat,
                onChange: (z) => B("outputFormat", z.target.value),
                children: [
                  /* @__PURE__ */ S.jsx("option", { value: "none", children: "Plain Text" }),
                  /* @__PURE__ */ S.jsx("option", { value: "xml", children: "XML" }),
                  /* @__PURE__ */ S.jsx("option", { value: "json", children: "JSON" })
                ]
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Additional Instructions" }),
          /* @__PURE__ */ S.jsx(
            bu,
            {
              label: "Prompt Preset",
              items: He,
              value: r.promptPreset,
              onChange: (z) => B("promptPreset", z ?? "default"),
              onItemsChange: (z) => B(
                "promptPresets",
                z.reduce(
                  (Y, ne) => ({ ...Y, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
                  {}
                )
              ),
              enableCreate: !0,
              enableDelete: !0,
              enableRename: !0,
              readOnlyValues: ["default"]
            }
          ),
          /* @__PURE__ */ S.jsx(
            Qt,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (z) => B("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: z.target.value }
              }),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Actions" }),
          /* @__PURE__ */ S.jsxs("div", { className: "character-field-actions", children: [
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: Me,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ S.jsxs(pe, { onClick: ve, title: "Reset all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ S.jsx(
              hd,
              {
                items: Be,
                value: U ? [String(E.indexOf(U))] : [],
                onChange: (z) => rt(z[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsx(pe, { onClick: Gt, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => g("core"),
                className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ S.jsx(
              pe,
              {
                onClick: () => g("draft"),
                className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsxs(pe, { onClick: le, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ S.jsx(pe, { onClick: Tt, children: "Export" }),
              /* @__PURE__ */ S.jsx(pe, { onClick: Gt, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ S.jsxs("div", { className: `tab-content ${h === "core" ? "active" : ""}`, children: [
              zn.map((z) => {
                const Y = qA[z];
                return Y ? /* @__PURE__ */ S.jsx(
                  Ey,
                  {
                    fieldId: z,
                    label: Y.label,
                    value: i.fields[z]?.value ?? "",
                    prompt: i.fields[z]?.prompt ?? "",
                    large: Y.large,
                    rows: Y.rows,
                    promptEnabled: Y.promptEnabled,
                    isGenerating: o.includes(z),
                    onValueChange: (ne, fe) => ce(ne, fe, "value", !1),
                    onPromptChange: (ne, fe) => ce(ne, fe, "prompt", !1),
                    onGenerate: me,
                    onContinue: (ne) => me(ne, i.fields[ne].value),
                    onClear: (ne) => W(ne, !1),
                    onCompare: Ue,
                    onOpenReviseSessions: oe
                  },
                  z
                ) : null;
              }),
              /* @__PURE__ */ S.jsx(
                qE,
                {
                  greetings: we,
                  onGreetingsChange: R,
                  isGenerating: o.some((z) => z.startsWith("alternate_greetings_")),
                  onGenerate: (z) => me(`alternate_greetings_${z + 1}`),
                  onContinue: (z) => me(`alternate_greetings_${z + 1}`, we[z].value),
                  onCompare: Ue
                }
              )
            ] }),
            /* @__PURE__ */ S.jsx("div", { className: `tab-content ${h === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([z, Y]) => /* @__PURE__ */ S.jsx(
              Ey,
              {
                fieldId: z,
                label: Y.label,
                value: Y.value,
                prompt: Y.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(z),
                onValueChange: (ne, fe) => ce(ne, fe, "value", !0),
                onPromptChange: (ne, fe) => ce(ne, fe, "prompt", !0),
                onGenerate: me,
                onContinue: (ne) => me(ne, i.draftFields[ne].value),
                onClear: (ne) => W(ne, !0),
                onDelete: ae
              },
              z
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", children: /* @__PURE__ */ S.jsx(
        DA,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d,
          messages: C,
          onMessagesChange: T
        }
      ) })
    ] }),
    b === "lorebook" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column-left", style: { width: "60%", display: "flex", flexDirection: "column", gap: "15px" }, children: [
        /* @__PURE__ */ S.jsx(Wy, { files: d, onFilesChange: x }),
        /* @__PURE__ */ S.jsx(
          jA,
          {
            lorebook: m,
            onLorebookChange: v
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ S.jsx(
        LA,
        {
          lorebook: m,
          onLorebookChange: v,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d,
          messages: w,
          onMessagesChange: O
        }
      ) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ S.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        b === "character" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(pe, { onClick: mt, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ S.jsx(pe, { onClick: Pn, className: "menu_button warning", disabled: !U, children: "Update Loaded Character" }),
          /* @__PURE__ */ S.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S.jsx(
            pe,
            {
              onClick: () => {
                const z = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: we.map((Y) => Y.value)
                };
                UA(z);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        b === "lorebook" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsxs(
            pe,
            {
              onClick: () => HA(
                {
                  entries: m.entries.map((z, Y) => ({
                    keys: z.keys,
                    content: z.content,
                    extensions: {},
                    enabled: z.enabled,
                    insertion_order: z.insertion_order,
                    case_sensitive: !1,
                    name: z.comment,
                    comment: z.comment,
                    selective: z.selective,
                    secondary_keys: z.secondary_keys,
                    constant: z.constant,
                    position: z.position
                  })),
                  name: m.name,
                  extensions: {},
                  scan_depth: m.scan_depth,
                  token_budget: m.token_budget,
                  recursive_scanning: m.recursive_scanning
                },
                m.name
              ),
              className: "menu_button confirm",
              children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-download" }),
                " Export Lorebook JSON"
              ]
            }
          ),
          /* @__PURE__ */ S.jsxs(
            pe,
            {
              onClick: () => v(Ky()),
              className: "menu_button warning",
              children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash" }),
                " Clear Lorebook"
              ]
            }
          )
        ] })
      ] })
    ] }),
    I && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          sC,
          {
            originalContent: I.original,
            newContent: I.current,
            fieldName: I.fieldName
          }
        ),
        onComplete: () => X(null),
        options: { wide: !0 }
      }
    ),
    V && ie && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: Sn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          NA,
          {
            target: ie,
            onClose: () => ue(!1),
            onApply: Q,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => ue(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, ZA = () => {
  const [t, r] = $.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ S.jsx(
    zi,
    {
      content: /* @__PURE__ */ S.jsx(FA, {}),
      type: Sn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, w1 = SillyTavern.getContext();
async function GA() {
  const t = await w1.renderExtensionTemplateAsync(
    `third-party/${Da}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", t);
  const r = document.createElement("div"), i = document.querySelector(".charCreator_settings .inline-drawer-content");
  i && (i.prepend(r), dv.createRoot(r).render(
    /* @__PURE__ */ S.jsx(cu.StrictMode, { children: /* @__PURE__ */ S.jsx(UE, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', o = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), dv.createRoot(u).render(
    /* @__PURE__ */ S.jsx(cu.StrictMode, { children: /* @__PURE__ */ S.jsx(ZA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const g = h.firstChild;
    g && (p.prepend(g), g.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function VA() {
  return !!w1.ConnectionManagerRequestService;
}
VA() ? jE().then(() => {
  GA();
}) : Ne("error", `[${Da}] Make sure ST is updated.`);
export {
  GA as init
};
