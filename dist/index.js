import { renderStoryString as P_, persona_description_positions as Jg } from "../../../../power-user.js";
import { parseMesExamples as B_, baseChatReplace as U_, chat_metadata as Rs, getMaxContextSize as H_, name1 as Sr, name2 as Qr, this_chid as yn, extension_prompt_types as Ca, depth_prompt_role_default as q_, depth_prompt_depth_default as F_ } from "../../../../../script.js";
import { world_info_include_names as Z_, wi_anchor_position as G_, world_names as Kg } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as V_, formatInstructModeSystemPrompt as Y_ } from "../../../../instruct-mode.js";
import { appendFileContent as X_ } from "../../../../chats.js";
import { setOpenAIMessages as $_, setOpenAIMessageExamples as Q_, formatWorldInfo as J_, getPromptPosition as K_, getPromptRole as W_, prepareOpenAIMessages as e2 } from "../../../../openai.js";
import { metadata_keys as zs } from "../../../../authors-note.js";
import { getGroupDepthPrompts as t2, selected_group as xr } from "../../../../group-chats.js";
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
var S = s2(), Zf = { exports: {} }, Me = {};
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
  if (av) return Me;
  av = 1;
  var t = Symbol.for("react.transitional.element"), r = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), f = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), _ = Symbol.iterator;
  function g(R) {
    return R === null || typeof R != "object" ? null : (R = _ && R[_] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var m = {
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
  function E(R, K, ie) {
    this.props = R, this.context = K, this.refs = x, this.updater = ie || m;
  }
  E.prototype.isReactComponent = {}, E.prototype.setState = function(R, K) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, R, K, "setState");
  }, E.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function T() {
  }
  T.prototype = E.prototype;
  function A(R, K, ie) {
    this.props = R, this.context = K, this.refs = x, this.updater = ie || m;
  }
  var k = A.prototype = new T();
  k.constructor = A, d(k, E.prototype), k.isPureReactComponent = !0;
  var C = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, M = Object.prototype.hasOwnProperty;
  function D(R, K, ie, ae, oe, De) {
    return ie = De.ref, {
      $$typeof: t,
      type: R,
      key: K,
      ref: ie !== void 0 ? ie : null,
      props: De
    };
  }
  function F(R, K) {
    return D(
      R.type,
      K,
      void 0,
      void 0,
      void 0,
      R.props
    );
  }
  function q(R) {
    return typeof R == "object" && R !== null && R.$$typeof === t;
  }
  function P(R) {
    var K = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ie) {
      return K[ie];
    });
  }
  var V = /\/+/g;
  function Y(R, K) {
    return typeof R == "object" && R !== null && R.key != null ? P("" + R.key) : K.toString(36);
  }
  function le() {
  }
  function fe(R) {
    switch (R.status) {
      case "fulfilled":
        return R.value;
      case "rejected":
        throw R.reason;
      default:
        switch (typeof R.status == "string" ? R.then(le, le) : (R.status = "pending", R.then(
          function(K) {
            R.status === "pending" && (R.status = "fulfilled", R.value = K);
          },
          function(K) {
            R.status === "pending" && (R.status = "rejected", R.reason = K);
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
  function ge(R, K, ie, ae, oe) {
    var De = typeof R;
    (De === "undefined" || De === "boolean") && (R = null);
    var X = !1;
    if (R === null) X = !0;
    else
      switch (De) {
        case "bigint":
        case "string":
        case "number":
          X = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case t:
            case r:
              X = !0;
              break;
            case b:
              return X = R._init, ge(
                X(R._payload),
                K,
                ie,
                ae,
                oe
              );
          }
      }
    if (X)
      return oe = oe(R), X = ae === "" ? "." + Y(R, 0) : ae, C(oe) ? (ie = "", X != null && (ie = X.replace(V, "$&/") + "/"), ge(oe, K, ie, "", function(Fe) {
        return Fe;
      })) : oe != null && (q(oe) && (oe = F(
        oe,
        ie + (oe.key == null || R && R.key === oe.key ? "" : ("" + oe.key).replace(
          V,
          "$&/"
        ) + "/") + X
      )), K.push(oe)), 1;
    X = 0;
    var ye = ae === "" ? "." : ae + ":";
    if (C(R))
      for (var be = 0; be < R.length; be++)
        ae = R[be], De = ye + Y(ae, be), X += ge(
          ae,
          K,
          ie,
          De,
          oe
        );
    else if (be = g(R), typeof be == "function")
      for (R = be.call(R), be = 0; !(ae = R.next()).done; )
        ae = ae.value, De = ye + Y(ae, be++), X += ge(
          ae,
          K,
          ie,
          De,
          oe
        );
    else if (De === "object") {
      if (typeof R.then == "function")
        return ge(
          fe(R),
          K,
          ie,
          ae,
          oe
        );
      throw K = String(R), Error(
        "Objects are not valid as a React child (found: " + (K === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : K) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return X;
  }
  function B(R, K, ie) {
    if (R == null) return R;
    var ae = [], oe = 0;
    return ge(R, ae, "", "", function(De) {
      return K.call(ie, De, oe++);
    }), ae;
  }
  function re(R) {
    if (R._status === -1) {
      var K = R._result;
      K = K(), K.then(
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ie);
        },
        function(ie) {
          (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ie);
        }
      ), R._status === -1 && (R._status = 0, R._result = K);
    }
    if (R._status === 1) return R._result.default;
    throw R._result;
  }
  var he = typeof reportError == "function" ? reportError : function(R) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var K = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof R == "object" && R !== null && typeof R.message == "string" ? String(R.message) : String(R),
        error: R
      });
      if (!window.dispatchEvent(K)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", R);
      return;
    }
    console.error(R);
  };
  function Re() {
  }
  return Me.Children = {
    map: B,
    forEach: function(R, K, ie) {
      B(
        R,
        function() {
          K.apply(this, arguments);
        },
        ie
      );
    },
    count: function(R) {
      var K = 0;
      return B(R, function() {
        K++;
      }), K;
    },
    toArray: function(R) {
      return B(R, function(K) {
        return K;
      }) || [];
    },
    only: function(R) {
      if (!q(R))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return R;
    }
  }, Me.Component = E, Me.Fragment = i, Me.Profiler = o, Me.PureComponent = A, Me.StrictMode = s, Me.Suspense = h, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(R) {
      return N.H.useMemoCache(R);
    }
  }, Me.cache = function(R) {
    return function() {
      return R.apply(null, arguments);
    };
  }, Me.cloneElement = function(R, K, ie) {
    if (R == null)
      throw Error(
        "The argument must be a React element, but you passed " + R + "."
      );
    var ae = d({}, R.props), oe = R.key, De = void 0;
    if (K != null)
      for (X in K.ref !== void 0 && (De = void 0), K.key !== void 0 && (oe = "" + K.key), K)
        !M.call(K, X) || X === "key" || X === "__self" || X === "__source" || X === "ref" && K.ref === void 0 || (ae[X] = K[X]);
    var X = arguments.length - 2;
    if (X === 1) ae.children = ie;
    else if (1 < X) {
      for (var ye = Array(X), be = 0; be < X; be++)
        ye[be] = arguments[be + 2];
      ae.children = ye;
    }
    return D(R.type, oe, void 0, void 0, De, ae);
  }, Me.createContext = function(R) {
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
  }, Me.createElement = function(R, K, ie) {
    var ae, oe = {}, De = null;
    if (K != null)
      for (ae in K.key !== void 0 && (De = "" + K.key), K)
        M.call(K, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (oe[ae] = K[ae]);
    var X = arguments.length - 2;
    if (X === 1) oe.children = ie;
    else if (1 < X) {
      for (var ye = Array(X), be = 0; be < X; be++)
        ye[be] = arguments[be + 2];
      oe.children = ye;
    }
    if (R && R.defaultProps)
      for (ae in X = R.defaultProps, X)
        oe[ae] === void 0 && (oe[ae] = X[ae]);
    return D(R, De, void 0, void 0, null, oe);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(R) {
    return { $$typeof: p, render: R };
  }, Me.isValidElement = q, Me.lazy = function(R) {
    return {
      $$typeof: b,
      _payload: { _status: -1, _result: R },
      _init: re
    };
  }, Me.memo = function(R, K) {
    return {
      $$typeof: v,
      type: R,
      compare: K === void 0 ? null : K
    };
  }, Me.startTransition = function(R) {
    var K = N.T, ie = {};
    N.T = ie;
    try {
      var ae = R(), oe = N.S;
      oe !== null && oe(ie, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(Re, he);
    } catch (De) {
      he(De);
    } finally {
      N.T = K;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Me.use = function(R) {
    return N.H.use(R);
  }, Me.useActionState = function(R, K, ie) {
    return N.H.useActionState(R, K, ie);
  }, Me.useCallback = function(R, K) {
    return N.H.useCallback(R, K);
  }, Me.useContext = function(R) {
    return N.H.useContext(R);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(R, K) {
    return N.H.useDeferredValue(R, K);
  }, Me.useEffect = function(R, K, ie) {
    var ae = N.H;
    if (typeof ie == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ae.useEffect(R, K);
  }, Me.useId = function() {
    return N.H.useId();
  }, Me.useImperativeHandle = function(R, K, ie) {
    return N.H.useImperativeHandle(R, K, ie);
  }, Me.useInsertionEffect = function(R, K) {
    return N.H.useInsertionEffect(R, K);
  }, Me.useLayoutEffect = function(R, K) {
    return N.H.useLayoutEffect(R, K);
  }, Me.useMemo = function(R, K) {
    return N.H.useMemo(R, K);
  }, Me.useOptimistic = function(R, K) {
    return N.H.useOptimistic(R, K);
  }, Me.useReducer = function(R, K, ie) {
    return N.H.useReducer(R, K, ie);
  }, Me.useRef = function(R) {
    return N.H.useRef(R);
  }, Me.useState = function(R) {
    return N.H.useState(R);
  }, Me.useSyncExternalStore = function(R, K, ie) {
    return N.H.useSyncExternalStore(
      R,
      K,
      ie
    );
  }, Me.useTransition = function() {
    return N.H.useTransition();
  }, Me.version = "19.1.1", Me;
}
var iv;
function Vd() {
  return iv || (iv = 1, Zf.exports = l2()), Zf.exports;
}
var Q = Vd();
const cu = /* @__PURE__ */ Gd(Q);
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
      var he = B.length;
      B.push(re);
      e: for (; 0 < he; ) {
        var Re = he - 1 >>> 1, R = B[Re];
        if (0 < o(R, re))
          B[Re] = re, B[he] = R, he = Re;
        else break e;
      }
    }
    function i(B) {
      return B.length === 0 ? null : B[0];
    }
    function s(B) {
      if (B.length === 0) return null;
      var re = B[0], he = B.pop();
      if (he !== re) {
        B[0] = he;
        e: for (var Re = 0, R = B.length, K = R >>> 1; Re < K; ) {
          var ie = 2 * (Re + 1) - 1, ae = B[ie], oe = ie + 1, De = B[oe];
          if (0 > o(ae, he))
            oe < R && 0 > o(De, ae) ? (B[Re] = De, B[oe] = he, Re = oe) : (B[Re] = ae, B[ie] = he, Re = ie);
          else if (oe < R && 0 > o(De, he))
            B[Re] = De, B[oe] = he, Re = oe;
          else break e;
        }
      }
      return re;
    }
    function o(B, re) {
      var he = B.sortIndex - re.sortIndex;
      return he !== 0 ? he : B.id - re.id;
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
    var h = [], v = [], b = 1, _ = null, g = 3, m = !1, d = !1, x = !1, E = !1, T = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, k = typeof setImmediate < "u" ? setImmediate : null;
    function C(B) {
      for (var re = i(v); re !== null; ) {
        if (re.callback === null) s(v);
        else if (re.startTime <= B)
          s(v), re.sortIndex = re.expirationTime, r(h, re);
        else break;
        re = i(v);
      }
    }
    function N(B) {
      if (x = !1, C(B), !d)
        if (i(h) !== null)
          d = !0, M || (M = !0, Y());
        else {
          var re = i(v);
          re !== null && ge(N, re.startTime - B);
        }
    }
    var M = !1, D = -1, F = 5, q = -1;
    function P() {
      return E ? !0 : !(t.unstable_now() - q < F);
    }
    function V() {
      if (E = !1, M) {
        var B = t.unstable_now();
        q = B;
        var re = !0;
        try {
          e: {
            d = !1, x && (x = !1, A(D), D = -1), m = !0;
            var he = g;
            try {
              t: {
                for (C(B), _ = i(h); _ !== null && !(_.expirationTime > B && P()); ) {
                  var Re = _.callback;
                  if (typeof Re == "function") {
                    _.callback = null, g = _.priorityLevel;
                    var R = Re(
                      _.expirationTime <= B
                    );
                    if (B = t.unstable_now(), typeof R == "function") {
                      _.callback = R, C(B), re = !0;
                      break t;
                    }
                    _ === i(h) && s(h), C(B);
                  } else s(h);
                  _ = i(h);
                }
                if (_ !== null) re = !0;
                else {
                  var K = i(v);
                  K !== null && ge(
                    N,
                    K.startTime - B
                  ), re = !1;
                }
              }
              break e;
            } finally {
              _ = null, g = he, m = !1;
            }
            re = void 0;
          }
        } finally {
          re ? Y() : M = !1;
        }
      }
    }
    var Y;
    if (typeof k == "function")
      Y = function() {
        k(V);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), fe = le.port2;
      le.port1.onmessage = V, Y = function() {
        fe.postMessage(null);
      };
    } else
      Y = function() {
        T(V, 0);
      };
    function ge(B, re) {
      D = T(function() {
        B(t.unstable_now());
      }, re);
    }
    t.unstable_IdlePriority = 5, t.unstable_ImmediatePriority = 1, t.unstable_LowPriority = 4, t.unstable_NormalPriority = 3, t.unstable_Profiling = null, t.unstable_UserBlockingPriority = 2, t.unstable_cancelCallback = function(B) {
      B.callback = null;
    }, t.unstable_forceFrameRate = function(B) {
      0 > B || 125 < B ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < B ? Math.floor(1e3 / B) : 5;
    }, t.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, t.unstable_next = function(B) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = g;
      }
      var he = g;
      g = re;
      try {
        return B();
      } finally {
        g = he;
      }
    }, t.unstable_requestPaint = function() {
      E = !0;
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
      var he = g;
      g = B;
      try {
        return re();
      } finally {
        g = he;
      }
    }, t.unstable_scheduleCallback = function(B, re, he) {
      var Re = t.unstable_now();
      switch (typeof he == "object" && he !== null ? (he = he.delay, he = typeof he == "number" && 0 < he ? Re + he : Re) : he = Re, B) {
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
      return R = he + R, B = {
        id: b++,
        callback: re,
        priorityLevel: B,
        startTime: he,
        expirationTime: R,
        sortIndex: -1
      }, he > Re ? (B.sortIndex = he, r(v, B), i(h) === null && B === i(v) && (x ? (A(D), D = -1) : x = !0, ge(N, he - Re))) : (B.sortIndex = R, r(h, B), d || m || (d = !0, M || (M = !0, Y()))), B;
    }, t.unstable_shouldYield = P, t.unstable_wrapCallback = function(B) {
      var re = g;
      return function() {
        var he = g;
        g = re;
        try {
          return B.apply(this, arguments);
        } finally {
          g = he;
        }
      };
    };
  })(Yf)), Yf;
}
var lv;
function u2() {
  return lv || (lv = 1, Vf.exports = o2()), Vf.exports;
}
var Xf = { exports: {} }, Bt = {};
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
  if (ov) return Bt;
  ov = 1;
  var t = Vd();
  function r(h) {
    var v = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var b = 2; b < arguments.length; b++)
        v += "&args[]=" + encodeURIComponent(arguments[b]);
    }
    return "Minified React error #" + h + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(h, v, b) {
    var _ = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: _ == null ? null : "" + _,
      children: h,
      containerInfo: v,
      implementation: b
    };
  }
  var f = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function p(h, v) {
    if (h === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Bt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Bt.createPortal = function(h, v) {
    var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return u(h, v, null, b);
  }, Bt.flushSync = function(h) {
    var v = f.T, b = s.p;
    try {
      if (f.T = null, s.p = 2, h) return h();
    } finally {
      f.T = v, s.p = b, s.d.f();
    }
  }, Bt.preconnect = function(h, v) {
    typeof h == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, s.d.C(h, v));
  }, Bt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Bt.preinit = function(h, v) {
    if (typeof h == "string" && v && typeof v.as == "string") {
      var b = v.as, _ = p(b, v.crossOrigin), g = typeof v.integrity == "string" ? v.integrity : void 0, m = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      b === "style" ? s.d.S(
        h,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: _,
          integrity: g,
          fetchPriority: m
        }
      ) : b === "script" && s.d.X(h, {
        crossOrigin: _,
        integrity: g,
        fetchPriority: m,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Bt.preinitModule = function(h, v) {
    if (typeof h == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var b = p(
            v.as,
            v.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: b,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && s.d.M(h);
  }, Bt.preload = function(h, v) {
    if (typeof h == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var b = v.as, _ = p(b, v.crossOrigin);
      s.d.L(h, b, {
        crossOrigin: _,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, Bt.preloadModule = function(h, v) {
    if (typeof h == "string")
      if (v) {
        var b = p(v.as, v.crossOrigin);
        s.d.m(h, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: b,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else s.d.m(h);
  }, Bt.requestFormReset = function(h) {
    s.d.r(h);
  }, Bt.unstable_batchedUpdates = function(h, v) {
    return h(v);
  }, Bt.useFormState = function(h, v, b) {
    return f.H.useFormState(h, v, b);
  }, Bt.useFormStatus = function() {
    return f.H.useHostTransitionStatus();
  }, Bt.version = "19.1.1", Bt;
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
        for (var w = !1, O = c.child; O; ) {
          if (O === a) {
            w = !0, a = c, l = y;
            break;
          }
          if (O === l) {
            w = !0, l = c, a = y;
            break;
          }
          O = O.sibling;
        }
        if (!w) {
          for (O = y.child; O; ) {
            if (O === a) {
              w = !0, a = y, l = c;
              break;
            }
            if (O === l) {
              w = !0, l = y, a = c;
              break;
            }
            O = O.sibling;
          }
          if (!w) throw Error(s(189));
        }
      }
      if (a.alternate !== l) throw Error(s(190));
    }
    if (a.tag !== 3) throw Error(s(188));
    return a.stateNode.current === a ? e : n;
  }
  function v(e) {
    var n = e.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6) return e;
    for (e = e.child; e !== null; ) {
      if (n = v(e), n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var b = Object.assign, _ = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), m = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), E = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), k = Symbol.for("react.context"), C = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), M = Symbol.for("react.suspense_list"), D = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), q = Symbol.for("react.activity"), P = Symbol.for("react.memo_cache_sentinel"), V = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = V && e[V] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === le ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case E:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case M:
        return "SuspenseList";
      case q:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case m:
          return "Portal";
        case k:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case C:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case D:
          return n = e.displayName || null, n !== null ? n : fe(e.type) || "Memo";
        case F:
          n = e._payload, e = e._init;
          try {
            return fe(e(n));
          } catch {
          }
      }
    return null;
  }
  var ge = Array.isArray, B = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Re = [], R = -1;
  function K(e) {
    return { current: e };
  }
  function ie(e) {
    0 > R || (e.current = Re[R], Re[R] = null, R--);
  }
  function ae(e, n) {
    R++, Re[R] = e.current, e.current = n;
  }
  var oe = K(null), De = K(null), X = K(null), ye = K(null);
  function be(e, n) {
    switch (ae(X, n), ae(De, e), ae(oe, null), n.nodeType) {
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
    ie(oe), ae(oe, e);
  }
  function Fe() {
    ie(oe), ie(De), ie(X);
  }
  function nt(e) {
    e.memoizedState !== null && ae(ye, e);
    var n = oe.current, a = Ag(n, e.type);
    n !== a && (ae(De, e), ae(oe, a));
  }
  function ke(e) {
    De.current === e && (ie(oe), ie(De)), ye.current === e && (ie(ye), Os._currentValue = he);
  }
  var ct = Object.prototype.hasOwnProperty, zn = t.unstable_scheduleCallback, At = t.unstable_cancelCallback, Yt = t.unstable_shouldYield, L = t.unstable_requestPaint, te = t.unstable_now, ne = t.unstable_getCurrentPriorityLevel, de = t.unstable_ImmediatePriority, ce = t.unstable_UserBlockingPriority, ue = t.unstable_NormalPriority, Ne = t.unstable_LowPriority, Be = t.unstable_IdlePriority, Ke = t.log, Zn = t.unstable_setDisableYieldValue, rt = null, Ge = null;
  function Gn(e) {
    if (typeof Ke == "function" && Zn(e), Ge && typeof Ge.setStrictMode == "function")
      try {
        Ge.setStrictMode(rt, e);
      } catch {
      }
  }
  var Ht = Math.clz32 ? Math.clz32 : sa, bn = Math.log, ia = Math.LN2;
  function sa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bn(e) / ia | 0) | 0;
  }
  var rr = 256, Vn = 4194304;
  function _n(e) {
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
  function qt(e, n, a) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var c = 0, y = e.suspendedLanes, w = e.pingedLanes;
    e = e.warmLanes;
    var O = l & 134217727;
    return O !== 0 ? (l = O & ~y, l !== 0 ? c = _n(l) : (w &= O, w !== 0 ? c = _n(w) : a || (a = O & ~e, a !== 0 && (c = _n(a))))) : (O = l & ~y, O !== 0 ? c = _n(O) : w !== 0 ? c = _n(w) : a || (a = l & ~e, a !== 0 && (c = _n(a)))), c === 0 ? 0 : n !== 0 && n !== c && (n & y) === 0 && (y = c & -c, a = n & -n, y >= a || y === 32 && (a & 4194048) !== 0) ? n : c;
  }
  function Xt(e, n) {
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
    var e = rr;
    return rr <<= 1, (rr & 4194048) === 0 && (rr = 256), e;
  }
  function uh() {
    var e = Vn;
    return Vn <<= 1, (Vn & 62914560) === 0 && (Vn = 4194304), e;
  }
  function ku(e) {
    for (var n = [], a = 0; 31 > a; a++) n.push(e);
    return n;
  }
  function Bi(e, n) {
    e.pendingLanes |= n, n !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function A1(e, n, a, l, c, y) {
    var w = e.pendingLanes;
    e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= a, e.entangledLanes &= a, e.errorRecoveryDisabledLanes &= a, e.shellSuspendCounter = 0;
    var O = e.entanglements, j = e.expirationTimes, H = e.hiddenUpdates;
    for (a = w & ~a; 0 < a; ) {
      var $ = 31 - Ht(a), W = 1 << $;
      O[$] = 0, j[$] = -1;
      var Z = H[$];
      if (Z !== null)
        for (H[$] = null, $ = 0; $ < Z.length; $++) {
          var G = Z[$];
          G !== null && (G.lane &= -536870913);
        }
      a &= ~W;
    }
    l !== 0 && ch(e, l, 0), y !== 0 && c === 0 && e.tag !== 0 && (e.suspendedLanes |= y & ~(w & ~n));
  }
  function ch(e, n, a) {
    e.pendingLanes |= n, e.suspendedLanes &= ~n;
    var l = 31 - Ht(n);
    e.entangledLanes |= n, e.entanglements[l] = e.entanglements[l] | 1073741824 | a & 4194090;
  }
  function fh(e, n) {
    var a = e.entangledLanes |= n;
    for (e = e.entanglements; a; ) {
      var l = 31 - Ht(a), c = 1 << l;
      c & n | e[l] & n && (e[l] |= n), a &= ~c;
    }
  }
  function Mu(e) {
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
  function Du(e) {
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
  var Nr = Math.random().toString(36).slice(2), It = "__reactFiber$" + Nr, $t = "__reactProps$" + Nr, Ba = "__reactContainer$" + Nr, ju = "__reactEvents$" + Nr, T1 = "__reactListeners$" + Nr, O1 = "__reactHandles$" + Nr, hh = "__reactResources$" + Nr, Ui = "__reactMarker$" + Nr;
  function Ru(e) {
    delete e[It], delete e[$t], delete e[ju], delete e[T1], delete e[O1];
  }
  function Ua(e) {
    var n = e[It];
    if (n) return n;
    for (var a = e.parentNode; a; ) {
      if (n = a[Ba] || a[It]) {
        if (a = n.alternate, n.child !== null || a !== null && a.child !== null)
          for (e = kg(e); e !== null; ) {
            if (a = e[It]) return a;
            e = kg(e);
          }
        return n;
      }
      e = a, a = e.parentNode;
    }
    return null;
  }
  function Ha(e) {
    if (e = e[It] || e[Ba]) {
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
  function Nt(e) {
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
  function M1(e) {
    return ct.call(vh, e) ? !0 : ct.call(gh, e) ? !1 : k1.test(e) ? vh[e] = !0 : (gh[e] = !0, !1);
  }
  function cl(e, n, a) {
    if (M1(n))
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
  function ar(e, n, a, l) {
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
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (G) {
                  var Z = G;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (G) {
                  Z = G;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                Z = G;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
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
      var y = l.DetermineComponentFrameRoot(), w = y[0], O = y[1];
      if (w && O) {
        var j = w.split(`
`), H = O.split(`
`);
        for (c = l = 0; l < j.length && !j[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; c < H.length && !H[c].includes(
          "DetermineComponentFrameRoot"
        ); )
          c++;
        if (l === j.length || c === H.length)
          for (l = j.length - 1, c = H.length - 1; 1 <= l && 0 <= c && j[l] !== H[c]; )
            c--;
        for (; 1 <= l && 0 <= c; l--, c--)
          if (j[l] !== H[c]) {
            if (l !== 1 || c !== 1)
              do
                if (l--, c--, 0 > c || j[l] !== H[c]) {
                  var $ = `
` + j[l].replace(" at new ", " at ");
                  return e.displayName && $.includes("<anonymous>") && ($ = $.replace("<anonymous>", e.displayName)), $;
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
  function D1(e) {
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
        n += D1(e), e = e.return;
      while (e);
      return n;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  function Sn(e) {
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
        set: function(w) {
          l = "" + w, y.call(this, w);
        }
      }), Object.defineProperty(e, n, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return l;
        },
        setValue: function(w) {
          l = "" + w;
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
  function xn(e) {
    return e.replace(
      R1,
      function(n) {
        return "\\" + n.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pu(e, n, a, l, c, y, w, O) {
    e.name = "", w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.type = w : e.removeAttribute("type"), n != null ? w === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + Sn(n)) : e.value !== "" + Sn(n) && (e.value = "" + Sn(n)) : w !== "submit" && w !== "reset" || e.removeAttribute("value"), n != null ? Bu(e, w, Sn(n)) : a != null ? Bu(e, w, Sn(a)) : l != null && e.removeAttribute("value"), c == null && y != null && (e.defaultChecked = !!y), c != null && (e.checked = c && typeof c != "function" && typeof c != "symbol"), O != null && typeof O != "function" && typeof O != "symbol" && typeof O != "boolean" ? e.name = "" + Sn(O) : e.removeAttribute("name");
  }
  function xh(e, n, a, l, c, y, w, O) {
    if (y != null && typeof y != "function" && typeof y != "symbol" && typeof y != "boolean" && (e.type = y), n != null || a != null) {
      if (!(y !== "submit" && y !== "reset" || n != null))
        return;
      a = a != null ? "" + Sn(a) : "", n = n != null ? "" + Sn(n) : a, O || n === e.value || (e.value = n), e.defaultValue = n;
    }
    l = l ?? c, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = O ? e.checked : !!l, e.defaultChecked = !!l, w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" && (e.name = w);
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
      for (a = "" + Sn(a), n = null, c = 0; c < e.length; c++) {
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
    if (n != null && (n = "" + Sn(n), n !== e.value && (e.value = n), a == null)) {
      e.defaultValue !== n && (e.defaultValue = n);
      return;
    }
    e.defaultValue = a != null ? "" + Sn(a) : "";
  }
  function Ch(e, n, a, l) {
    if (n == null) {
      if (l != null) {
        if (a != null) throw Error(s(92));
        if (ge(l)) {
          if (1 < l.length) throw Error(s(93));
          l = l[0];
        }
        a = l;
      }
      a == null && (a = ""), n = a;
    }
    a = Sn(n), e.defaultValue = a, l = e.textContent, l === a && l !== "" && l !== null && (e.value = l);
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
      var a = e[$t] || null;
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
              'input[name="' + xn(
                "" + n
              ) + '"][type="radio"]'
            ), n = 0; n < a.length; n++) {
              var l = a[n];
              if (l !== e && l.form === e.form) {
                var c = l[$t] || null;
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
    var l = a[$t] || null;
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
  var ir = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Zu = !1;
  if (ir)
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
  var Tr = null, Gu = null, ml = null;
  function Oh() {
    if (ml) return ml;
    var e, n = Gu, a = n.length, l, c = "value" in Tr ? Tr.value : Tr.textContent, y = c.length;
    for (e = 0; e < a && n[e] === c[e]; e++) ;
    var w = a - e;
    for (l = 1; l <= w && n[a - l] === c[y - l]; l++) ;
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
  function Qt(e) {
    function n(a, l, c, y, w) {
      this._reactName = a, this._targetInst = c, this.type = l, this.nativeEvent = y, this.target = w, this.currentTarget = null;
      for (var O in e)
        e.hasOwnProperty(O) && (a = e[O], this[O] = a ? a(y) : y[O]);
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
  }, yl = Qt(oa), Zi = b({}, oa, { view: 0, detail: 0 }), P1 = Qt(Zi), Vu, Yu, Gi, bl = b({}, Zi, {
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
  }), Mh = Qt(bl), B1 = b({}, bl, { dataTransfer: 0 }), U1 = Qt(B1), H1 = b({}, Zi, { relatedTarget: 0 }), Xu = Qt(H1), q1 = b({}, oa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), F1 = Qt(q1), Z1 = b({}, oa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), G1 = Qt(Z1), V1 = b({}, oa, { data: 0 }), Dh = Qt(V1), Y1 = {
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
  }), K1 = Qt(J1), W1 = b({}, bl, {
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
  }), jh = Qt(W1), eb = b({}, Zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: $u
  }), tb = Qt(eb), nb = b({}, oa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rb = Qt(nb), ab = b({}, bl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ib = Qt(ab), sb = b({}, oa, {
    newState: 0,
    oldState: 0
  }), lb = Qt(sb), ob = [9, 13, 27, 32], Qu = ir && "CompositionEvent" in window, Vi = null;
  ir && "documentMode" in document && (Vi = document.documentMode);
  var ub = ir && "TextEvent" in window && !Vi, Rh = ir && (!Qu || Vi && 8 < Vi && 11 >= Vi), zh = " ", Lh = !1;
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
      return e === "compositionend" || !Qu && Ih(e, n) ? (e = Oh(), ml = Gu = Tr = null, $a = !1, e) : null;
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
  if (ir) {
    var Ju;
    if (ir) {
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
  var sn = typeof Object.is == "function" ? Object.is : yb;
  function $i(e, n) {
    if (sn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var a = Object.keys(e), l = Object.keys(n);
    if (a.length !== l.length) return !1;
    for (l = 0; l < a.length; l++) {
      var c = a[l];
      if (!ct.call(n, c) || !sn(e[c], n[c]))
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
  var bb = ir && "documentMode" in document && 11 >= document.documentMode, Qa = null, ec = null, Qi = null, tc = !1;
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
  ir && (Jh = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
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
  function Ln(e, n) {
    np.set(e, n), la(n, [e]);
  }
  var rp = /* @__PURE__ */ new WeakMap();
  function En(e, n) {
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
  var Cn = [], Ka = 0, ac = 0;
  function Sl() {
    for (var e = Ka, n = ac = Ka = 0; n < e; ) {
      var a = Cn[n];
      Cn[n++] = null;
      var l = Cn[n];
      Cn[n++] = null;
      var c = Cn[n];
      Cn[n++] = null;
      var y = Cn[n];
      if (Cn[n++] = null, l !== null && c !== null) {
        var w = l.pending;
        w === null ? c.next = c : (c.next = w.next, w.next = c), l.pending = c;
      }
      y !== 0 && ap(a, c, y);
    }
  }
  function xl(e, n, a, l) {
    Cn[Ka++] = e, Cn[Ka++] = n, Cn[Ka++] = a, Cn[Ka++] = l, ac |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
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
    return e.tag === 3 ? (y = e.stateNode, c && n !== null && (c = 31 - Ht(a), e = y.hiddenUpdates, l = e[c], l === null ? e[c] = [n] : l.push(n), n.lane = a | 536870912), y) : null;
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
  function ln(e, n, a, l) {
    return new Eb(e, n, a, l);
  }
  function sc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function sr(e, n) {
    var a = e.alternate;
    return a === null ? (a = ln(
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
    var w = 0;
    if (l = e, typeof e == "function") sc(e) && (w = 1);
    else if (typeof e == "string")
      w = w_(
        e,
        a,
        oe.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case q:
          return e = ln(31, a, n, c), e.elementType = q, e.lanes = y, e;
        case d:
          return fa(a.children, c, y, n);
        case x:
          w = 8, c |= 24;
          break;
        case E:
          return e = ln(12, a, n, c | 2), e.elementType = E, e.lanes = y, e;
        case N:
          return e = ln(13, a, n, c), e.elementType = N, e.lanes = y, e;
        case M:
          return e = ln(19, a, n, c), e.elementType = M, e.lanes = y, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case T:
              case k:
                w = 10;
                break e;
              case A:
                w = 9;
                break e;
              case C:
                w = 11;
                break e;
              case D:
                w = 14;
                break e;
              case F:
                w = 16, l = null;
                break e;
            }
          w = 29, a = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return n = ln(w, a, n, c), n.elementType = e, n.type = l, n.lanes = y, n;
  }
  function fa(e, n, a, l) {
    return e = ln(7, e, l, n), e.lanes = a, e;
  }
  function lc(e, n, a) {
    return e = ln(6, e, null, n), e.lanes = a, e;
  }
  function oc(e, n, a) {
    return n = ln(
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
  var ti = [], ni = 0, wl = null, Al = 0, wn = [], An = 0, da = null, lr = 1, or = "";
  function ha(e, n) {
    ti[ni++] = Al, ti[ni++] = wl, wl = e, Al = n;
  }
  function sp(e, n, a) {
    wn[An++] = lr, wn[An++] = or, wn[An++] = da, da = e;
    var l = lr;
    e = or;
    var c = 32 - Ht(l) - 1;
    l &= ~(1 << c), a += 1;
    var y = 32 - Ht(n) + c;
    if (30 < y) {
      var w = c - c % 5;
      y = (l & (1 << w) - 1).toString(32), l >>= w, c -= w, lr = 1 << 32 - Ht(n) + c | a << c | l, or = y + e;
    } else
      lr = 1 << y | a << c | l, or = e;
  }
  function uc(e) {
    e.return !== null && (ha(e, 1), sp(e, 1, 0));
  }
  function cc(e) {
    for (; e === wl; )
      wl = ti[--ni], ti[ni] = null, Al = ti[--ni], ti[ni] = null;
    for (; e === da; )
      da = wn[--An], wn[An] = null, or = wn[--An], wn[An] = null, lr = wn[--An], wn[An] = null;
  }
  var Ft = null, ft = null, Ze = !1, pa = null, Yn = !1, fc = Error(s(519));
  function ma(e) {
    var n = Error(s(418, ""));
    throw Wi(En(n, e)), fc;
  }
  function lp(e) {
    var n = e.stateNode, a = e.type, l = e.memoizedProps;
    switch (n[It] = e, n[$t] = l, a) {
      case "dialog":
        Ie("cancel", n), Ie("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ie("load", n);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Es.length; a++)
          Ie(Es[a], n);
        break;
      case "source":
        Ie("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Ie("error", n), Ie("load", n);
        break;
      case "details":
        Ie("toggle", n);
        break;
      case "input":
        Ie("invalid", n), xh(
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
        Ie("invalid", n);
        break;
      case "textarea":
        Ie("invalid", n), Ch(n, l.value, l.defaultValue, l.children), dl(n);
    }
    a = l.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || n.textContent === "" + a || l.suppressHydrationWarning === !0 || Cg(n.textContent, a) ? (l.popover != null && (Ie("beforetoggle", n), Ie("toggle", n)), l.onScroll != null && Ie("scroll", n), l.onScrollEnd != null && Ie("scrollend", n), l.onClick != null && (n.onclick = so), n = !0) : n = !1, n || ma(e);
  }
  function op(e) {
    for (Ft = e.return; Ft; )
      switch (Ft.tag) {
        case 5:
        case 13:
          Yn = !1;
          return;
        case 27:
        case 3:
          Yn = !0;
          return;
        default:
          Ft = Ft.return;
      }
  }
  function Ji(e) {
    if (e !== Ft) return !1;
    if (!Ze) return op(e), Ze = !0, !1;
    var n = e.tag, a;
    if ((a = n !== 3 && n !== 27) && ((a = n === 5) && (a = e.type, a = !(a !== "form" && a !== "button") || Tf(e.type, e.memoizedProps)), a = !a), a && ft && ma(e), op(e), n === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8)
            if (a = e.data, a === "/$") {
              if (n === 0) {
                ft = Pn(e.nextSibling);
                break e;
              }
              n--;
            } else
              a !== "$" && a !== "$!" && a !== "$?" || n++;
          e = e.nextSibling;
        }
        ft = null;
      }
    } else
      n === 27 ? (n = ft, Zr(e.type) ? (e = Df, Df = null, ft = e) : ft = n) : ft = Ft ? Pn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ki() {
    ft = Ft = null, Ze = !1;
  }
  function up() {
    var e = pa;
    return e !== null && (Wt === null ? Wt = e : Wt.push.apply(
      Wt,
      e
    ), pa = null), e;
  }
  function Wi(e) {
    pa === null ? pa = [e] : pa.push(e);
  }
  var dc = K(null), ga = null, ur = null;
  function Or(e, n, a) {
    ae(dc, n._currentValue), n._currentValue = a;
  }
  function cr(e) {
    e._currentValue = dc.current, ie(dc);
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
        var w = c.child;
        y = y.firstContext;
        e: for (; y !== null; ) {
          var O = y;
          y = c;
          for (var j = 0; j < n.length; j++)
            if (O.context === n[j]) {
              y.lanes |= a, O = y.alternate, O !== null && (O.lanes |= a), hc(
                y.return,
                a,
                e
              ), l || (w = null);
              break e;
            }
          y = O.next;
        }
      } else if (c.tag === 18) {
        if (w = c.return, w === null) throw Error(s(341));
        w.lanes |= a, y = w.alternate, y !== null && (y.lanes |= a), hc(w, a, e), w = null;
      } else w = c.child;
      if (w !== null) w.return = c;
      else
        for (w = c; w !== null; ) {
          if (w === e) {
            w = null;
            break;
          }
          if (c = w.sibling, c !== null) {
            c.return = w.return, w = c;
            break;
          }
          w = w.return;
        }
      c = w;
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
        var w = c.alternate;
        if (w === null) throw Error(s(387));
        if (w = w.memoizedProps, w !== null) {
          var O = c.type;
          sn(c.pendingProps.value, w.value) || (e !== null ? e.push(O) : e = [O]);
        }
      } else if (c === ye.current) {
        if (w = c.alternate, w === null) throw Error(s(387));
        w.memoizedState.memoizedState !== c.memoizedState.memoizedState && (e !== null ? e.push(Os) : e = [Os]);
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
      if (!sn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function va(e) {
    ga = e, ur = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Pt(e) {
    return cp(ga, e);
  }
  function Tl(e, n) {
    return ga === null && va(e), cp(e, n);
  }
  function cp(e, n) {
    var a = n._currentValue;
    if (n = { context: n, memoizedValue: a, next: null }, ur === null) {
      if (e === null) throw Error(s(308));
      ur = n, e.dependencies = { lanes: 0, firstContext: n }, e.flags |= 524288;
    } else ur = ur.next = n;
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
  }, wb = t.unstable_scheduleCallback, Ab = t.unstable_NormalPriority, xt = {
    $$typeof: k,
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
  var ya = K(null);
  function vc() {
    var e = ya.current;
    return e !== null ? e : et.pooledCache;
  }
  function Ol(e, n) {
    n === null ? ae(ya, ya.current) : ae(ya, n.pool);
  }
  function hp() {
    var e = vc();
    return e === null ? null : { parent: xt._currentValue, pool: e };
  }
  var rs = Error(s(460)), pp = Error(s(474)), kl = Error(s(542)), yc = { then: function() {
  } };
  function mp(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function Ml() {
  }
  function gp(e, n, a) {
    switch (a = e[a], a === void 0 ? e.push(n) : a !== n && (n.then(Ml, Ml), n = a), n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw e = n.reason, yp(e), e;
      default:
        if (typeof n.status == "string") n.then(Ml, Ml);
        else {
          if (e = et, e !== null && 100 < e.shellSuspendCounter)
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
  var kr = !1;
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
  function Dr(e, n, a) {
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
          var w = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          y === null ? c = y = w : y = y.next = w, a = a.next;
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
    kr = !1;
    var y = c.firstBaseUpdate, w = c.lastBaseUpdate, O = c.shared.pending;
    if (O !== null) {
      c.shared.pending = null;
      var j = O, H = j.next;
      j.next = null, w === null ? y = H : w.next = H, w = j;
      var $ = e.alternate;
      $ !== null && ($ = $.updateQueue, O = $.lastBaseUpdate, O !== w && (O === null ? $.firstBaseUpdate = H : O.next = H, $.lastBaseUpdate = j));
    }
    if (y !== null) {
      var W = c.baseState;
      w = 0, $ = H = j = null, O = y;
      do {
        var Z = O.lane & -536870913, G = Z !== O.lane;
        if (G ? (He & Z) === Z : (l & Z) === Z) {
          Z !== 0 && Z === ri && (xc = !0), $ !== null && ($ = $.next = {
            lane: 0,
            tag: O.tag,
            payload: O.payload,
            callback: null,
            next: null
          });
          e: {
            var Ee = e, Se = O;
            Z = n;
            var Qe = a;
            switch (Se.tag) {
              case 1:
                if (Ee = Se.payload, typeof Ee == "function") {
                  W = Ee.call(Qe, W, Z);
                  break e;
                }
                W = Ee;
                break e;
              case 3:
                Ee.flags = Ee.flags & -65537 | 128;
              case 0:
                if (Ee = Se.payload, Z = typeof Ee == "function" ? Ee.call(Qe, W, Z) : Ee, Z == null) break e;
                W = b({}, W, Z);
                break e;
              case 2:
                kr = !0;
            }
          }
          Z = O.callback, Z !== null && (e.flags |= 64, G && (e.flags |= 8192), G = c.callbacks, G === null ? c.callbacks = [Z] : G.push(Z));
        } else
          G = {
            lane: Z,
            tag: O.tag,
            payload: O.payload,
            callback: O.callback,
            next: null
          }, $ === null ? (H = $ = G, j = W) : $ = $.next = G, w |= Z;
        if (O = O.next, O === null) {
          if (O = c.shared.pending, O === null)
            break;
          G = O, O = G.next, G.next = null, c.lastBaseUpdate = G, c.shared.pending = null;
        }
      } while (!0);
      $ === null && (j = W), c.baseState = j, c.firstBaseUpdate = H, c.lastBaseUpdate = $, y === null && (c.shared.lanes = 0), Ur |= w, e.lanes = w, e.memoizedState = W;
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
  var ii = K(null), Dl = K(0);
  function Sp(e, n) {
    e = vr, ae(Dl, e), ae(ii, n), vr = e | n.baseLanes;
  }
  function Ec() {
    ae(Dl, vr), ae(ii, ii.current);
  }
  function Cc() {
    vr = Dl.current, ie(ii), ie(Dl);
  }
  var jr = 0, je = null, Xe = null, vt = null, jl = !1, si = !1, ba = !1, Rl = 0, os = 0, li = null, Ob = 0;
  function pt() {
    throw Error(s(321));
  }
  function wc(e, n) {
    if (n === null) return !1;
    for (var a = 0; a < n.length && a < e.length; a++)
      if (!sn(e[a], n[a])) return !1;
    return !0;
  }
  function Ac(e, n, a, l, c, y) {
    return jr = y, je = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, B.H = e === null || e.memoizedState === null ? am : im, ba = !1, y = a(l, c), ba = !1, si && (y = Ep(
      n,
      a,
      l,
      c
    )), xp(e), y;
  }
  function xp(e) {
    B.H = Ul;
    var n = Xe !== null && Xe.next !== null;
    if (jr = 0, vt = Xe = je = null, jl = !1, os = 0, li = null, n) throw Error(s(300));
    e === null || Tt || (e = e.dependencies, e !== null && Nl(e) && (Tt = !0));
  }
  function Ep(e, n, a, l) {
    je = e;
    var c = 0;
    do {
      if (si && (li = null), os = 0, si = !1, 25 <= c) throw Error(s(301));
      if (c += 1, vt = Xe = null, e.updateQueue != null) {
        var y = e.updateQueue;
        y.lastEffect = null, y.events = null, y.stores = null, y.memoCache != null && (y.memoCache.index = 0);
      }
      B.H = Lb, y = n(a, l);
    } while (si);
    return y;
  }
  function kb() {
    var e = B.H, n = e.useState()[0];
    return n = typeof n.then == "function" ? us(n) : n, e = e.useState()[0], (Xe !== null ? Xe.memoizedState : null) !== e && (je.flags |= 1024), n;
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
    jr = 0, vt = Xe = je = null, si = !1, os = Rl = 0, li = null;
  }
  function Jt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return vt === null ? je.memoizedState = vt = e : vt = vt.next = e, vt;
  }
  function yt() {
    if (Xe === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Xe.next;
    var n = vt === null ? je.memoizedState : vt.next;
    if (n !== null)
      vt = n, Xe = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(s(467)) : Error(s(310));
      Xe = e, e = {
        memoizedState: Xe.memoizedState,
        baseState: Xe.baseState,
        baseQueue: Xe.baseQueue,
        queue: Xe.queue,
        next: null
      }, vt === null ? je.memoizedState = vt = e : vt = vt.next = e;
    }
    return vt;
  }
  function kc() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function us(e) {
    var n = os;
    return os += 1, li === null && (li = []), e = gp(li, e, n), n = je, (vt === null ? n.memoizedState : vt.next) === null && (n = n.alternate, B.H = n === null || n.memoizedState === null ? am : im), e;
  }
  function zl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return us(e);
      if (e.$$typeof === k) return Pt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Mc(e) {
    var n = null, a = je.updateQueue;
    if (a !== null && (n = a.memoCache), n == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (n = {
        data: l.data.map(function(c) {
          return c.slice();
        }),
        index: 0
      })));
    }
    if (n == null && (n = { data: [], index: 0 }), a === null && (a = kc(), je.updateQueue = a), a.memoCache = n, a = n.data[n.index], a === void 0)
      for (a = n.data[n.index] = Array(e), l = 0; l < e; l++)
        a[l] = P;
    return n.index++, a;
  }
  function fr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ll(e) {
    var n = yt();
    return Dc(n, Xe, e);
  }
  function Dc(e, n, a) {
    var l = e.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = a;
    var c = e.baseQueue, y = l.pending;
    if (y !== null) {
      if (c !== null) {
        var w = c.next;
        c.next = y.next, y.next = w;
      }
      n.baseQueue = c = y, l.pending = null;
    }
    if (y = e.baseState, c === null) e.memoizedState = y;
    else {
      n = c.next;
      var O = w = null, j = null, H = n, $ = !1;
      do {
        var W = H.lane & -536870913;
        if (W !== H.lane ? (He & W) === W : (jr & W) === W) {
          var Z = H.revertLane;
          if (Z === 0)
            j !== null && (j = j.next = {
              lane: 0,
              revertLane: 0,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }), W === ri && ($ = !0);
          else if ((jr & Z) === Z) {
            H = H.next, Z === ri && ($ = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: H.revertLane,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            }, j === null ? (O = j = W, w = y) : j = j.next = W, je.lanes |= Z, Ur |= Z;
          W = H.action, ba && a(y, W), y = H.hasEagerState ? H.eagerState : a(y, W);
        } else
          Z = {
            lane: W,
            revertLane: H.revertLane,
            action: H.action,
            hasEagerState: H.hasEagerState,
            eagerState: H.eagerState,
            next: null
          }, j === null ? (O = j = Z, w = y) : j = j.next = Z, je.lanes |= W, Ur |= W;
        H = H.next;
      } while (H !== null && H !== n);
      if (j === null ? w = y : j.next = O, !sn(y, e.memoizedState) && (Tt = !0, $ && (a = ai, a !== null)))
        throw a;
      e.memoizedState = y, e.baseState = w, e.baseQueue = j, l.lastRenderedState = y;
    }
    return c === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function jc(e) {
    var n = yt(), a = n.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = e;
    var l = a.dispatch, c = a.pending, y = n.memoizedState;
    if (c !== null) {
      a.pending = null;
      var w = c = c.next;
      do
        y = e(y, w.action), w = w.next;
      while (w !== c);
      sn(y, n.memoizedState) || (Tt = !0), n.memoizedState = y, n.baseQueue === null && (n.baseState = y), a.lastRenderedState = y;
    }
    return [y, l];
  }
  function Cp(e, n, a) {
    var l = je, c = yt(), y = Ze;
    if (y) {
      if (a === void 0) throw Error(s(407));
      a = a();
    } else a = n();
    var w = !sn(
      (Xe || c).memoizedState,
      a
    );
    w && (c.memoizedState = a, Tt = !0), c = c.queue;
    var O = Np.bind(null, l, c, e);
    if (cs(2048, 8, O, [e]), c.getSnapshot !== n || w || vt !== null && vt.memoizedState.tag & 1) {
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
      ), et === null) throw Error(s(349));
      y || (jr & 124) !== 0 || wp(l, n, a);
    }
    return a;
  }
  function wp(e, n, a) {
    e.flags |= 16384, e = { getSnapshot: n, value: a }, n = je.updateQueue, n === null ? (n = kc(), je.updateQueue = n, n.stores = [e]) : (a = n.stores, a === null ? n.stores = [e] : a.push(e));
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
      return !sn(e, a);
    } catch {
      return !0;
    }
  }
  function Op(e) {
    var n = Wa(e, 2);
    n !== null && dn(n, e, 2);
  }
  function Rc(e) {
    var n = Jt();
    if (typeof e == "function") {
      var a = e;
      if (e = a(), ba) {
        Gn(!0);
        try {
          a();
        } finally {
          Gn(!1);
        }
      }
    }
    return n.memoizedState = n.baseState = e, n.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: fr,
      lastRenderedState: e
    }, n;
  }
  function kp(e, n, a, l) {
    return e.baseState = a, Dc(
      e,
      Xe,
      typeof l == "function" ? l : fr
    );
  }
  function Mb(e, n, a, l, c) {
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
        then: function(w) {
          y.listeners.push(w);
        }
      };
      B.T !== null ? a(!0) : y.isTransition = !1, l(y), a = n.pending, a === null ? (y.next = n.pending = y, Mp(n, y)) : (y.next = a.next, n.pending = a.next = y);
    }
  }
  function Mp(e, n) {
    var a = n.action, l = n.payload, c = e.state;
    if (n.isTransition) {
      var y = B.T, w = {};
      B.T = w;
      try {
        var O = a(c, l), j = B.S;
        j !== null && j(w, O), Dp(e, n, O);
      } catch (H) {
        zc(e, n, H);
      } finally {
        B.T = y;
      }
    } else
      try {
        y = a(c, l), Dp(e, n, y);
      } catch (H) {
        zc(e, n, H);
      }
  }
  function Dp(e, n, a) {
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
    n.status = "fulfilled", n.value = a, Rp(n), e.state = a, n = e.pending, n !== null && (a = n.next, a === n ? e.pending = null : (a = a.next, n.next = a, Mp(e, a)));
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
    if (Ze) {
      var a = et.formState;
      if (a !== null) {
        e: {
          var l = je;
          if (Ze) {
            if (ft) {
              t: {
                for (var c = ft, y = Yn; c.nodeType !== 8; ) {
                  if (!y) {
                    c = null;
                    break t;
                  }
                  if (c = Pn(
                    c.nextSibling
                  ), c === null) {
                    c = null;
                    break t;
                  }
                }
                y = c.data, c = y === "F!" || y === "F" ? c : null;
              }
              if (c) {
                ft = Pn(
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
    return a = Jt(), a.memoizedState = a.baseState = n, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: zp,
      lastRenderedState: n
    }, a.queue = l, a = tm.bind(
      null,
      je,
      l
    ), l.dispatch = a, l = Rc(!1), y = Uc.bind(
      null,
      je,
      !1,
      l.queue
    ), l = Jt(), c = {
      state: n,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = c, a = Mb.bind(
      null,
      je,
      c,
      y,
      a
    ), c.dispatch = a, l.memoizedState = e, [n, a, !1];
  }
  function Ip(e) {
    var n = yt();
    return Pp(n, Xe, e);
  }
  function Pp(e, n, a) {
    if (n = Dc(
      e,
      n,
      zp
    )[0], e = Ll(fr)[0], typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var l = us(n);
      } catch (w) {
        throw w === rs ? kl : w;
      }
    else l = n;
    n = yt();
    var c = n.queue, y = c.dispatch;
    return a !== n.memoizedState && (je.flags |= 2048, oi(
      9,
      Il(),
      Db.bind(null, c, a),
      null
    )), [l, y, e];
  }
  function Db(e, n) {
    e.action = n;
  }
  function Bp(e) {
    var n = yt(), a = Xe;
    if (a !== null)
      return Pp(n, a, e);
    yt(), n = n.memoizedState, a = yt();
    var l = a.queue.dispatch;
    return a.memoizedState = e, [n, l, !1];
  }
  function oi(e, n, a, l) {
    return e = { tag: e, create: a, deps: l, inst: n, next: null }, n = je.updateQueue, n === null && (n = kc(), je.updateQueue = n), a = n.lastEffect, a === null ? n.lastEffect = e.next = e : (l = a.next, a.next = e, e.next = l, n.lastEffect = e), e;
  }
  function Il() {
    return { destroy: void 0, resource: void 0 };
  }
  function Up() {
    return yt().memoizedState;
  }
  function Pl(e, n, a, l) {
    var c = Jt();
    l = l === void 0 ? null : l, je.flags |= e, c.memoizedState = oi(
      1 | n,
      Il(),
      a,
      l
    );
  }
  function cs(e, n, a, l) {
    var c = yt();
    l = l === void 0 ? null : l;
    var y = c.memoizedState.inst;
    Xe !== null && l !== null && wc(l, Xe.memoizedState.deps) ? c.memoizedState = oi(n, y, a, l) : (je.flags |= e, c.memoizedState = oi(
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
    var a = yt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    return n !== null && wc(n, l[1]) ? l[0] : (a.memoizedState = [e, n], e);
  }
  function Xp(e, n) {
    var a = yt();
    n = n === void 0 ? null : n;
    var l = a.memoizedState;
    if (n !== null && wc(n, l[1]))
      return l[0];
    if (l = e(), ba) {
      Gn(!0);
      try {
        e();
      } finally {
        Gn(!1);
      }
    }
    return a.memoizedState = [l, n], l;
  }
  function Ic(e, n, a) {
    return a === void 0 || (jr & 1073741824) !== 0 ? e.memoizedState = n : (e.memoizedState = a, e = Jm(), je.lanes |= e, Ur |= e, a);
  }
  function $p(e, n, a, l) {
    return sn(a, n) ? a : ii.current !== null ? (e = Ic(e, a, l), sn(e, n) || (Tt = !0), e) : (jr & 42) === 0 ? (Tt = !0, e.memoizedState = a) : (e = Jm(), je.lanes |= e, Ur |= e, n);
  }
  function Qp(e, n, a, l, c) {
    var y = re.p;
    re.p = y !== 0 && 8 > y ? y : 8;
    var w = B.T, O = {};
    B.T = O, Uc(e, !1, n, a);
    try {
      var j = c(), H = B.S;
      if (H !== null && H(O, j), j !== null && typeof j == "object" && typeof j.then == "function") {
        var $ = Tb(
          j,
          l
        );
        fs(
          e,
          n,
          $,
          fn(e)
        );
      } else
        fs(
          e,
          n,
          l,
          fn(e)
        );
    } catch (W) {
      fs(
        e,
        n,
        { then: function() {
        }, status: "rejected", reason: W },
        fn()
      );
    } finally {
      re.p = y, B.T = w;
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
      he,
      a === null ? jb : function() {
        return Kp(e), a(l);
      }
    );
  }
  function Jp(e) {
    var n = e.memoizedState;
    if (n !== null) return n;
    n = {
      memoizedState: he,
      baseState: he,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: fr,
        lastRenderedState: he
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
        lastRenderedReducer: fr,
        lastRenderedState: a
      },
      next: null
    }, e.memoizedState = n, e = e.alternate, e !== null && (e.memoizedState = n), n;
  }
  function Kp(e) {
    var n = Jp(e).next.queue;
    fs(e, n, {}, fn());
  }
  function Bc() {
    return Pt(Os);
  }
  function Wp() {
    return yt().memoizedState;
  }
  function em() {
    return yt().memoizedState;
  }
  function Rb(e) {
    for (var n = e.return; n !== null; ) {
      switch (n.tag) {
        case 24:
        case 3:
          var a = fn();
          e = Mr(a);
          var l = Dr(n, e, a);
          l !== null && (dn(l, n, a), is(l, n, a)), n = { cache: mc() }, e.payload = n;
          return;
      }
      n = n.return;
    }
  }
  function zb(e, n, a) {
    var l = fn();
    a = {
      lane: l,
      revertLane: 0,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Bl(e) ? nm(n, a) : (a = ic(e, n, a, l), a !== null && (dn(a, e, l), rm(a, n, l)));
  }
  function tm(e, n, a) {
    var l = fn();
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
          var w = n.lastRenderedState, O = y(w, a);
          if (c.hasEagerState = !0, c.eagerState = O, sn(O, w))
            return xl(e, n, c, 0), et === null && Sl(), !1;
        } catch {
        } finally {
        }
      if (a = ic(e, n, c, l), a !== null)
        return dn(a, e, l), rm(a, n, l), !0;
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
      ), n !== null && dn(n, e, 2);
  }
  function Bl(e) {
    var n = e.alternate;
    return e === je || n !== null && n === je;
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
    readContext: Pt,
    use: zl,
    useCallback: pt,
    useContext: pt,
    useEffect: pt,
    useImperativeHandle: pt,
    useLayoutEffect: pt,
    useInsertionEffect: pt,
    useMemo: pt,
    useReducer: pt,
    useRef: pt,
    useState: pt,
    useDebugValue: pt,
    useDeferredValue: pt,
    useTransition: pt,
    useSyncExternalStore: pt,
    useId: pt,
    useHostTransitionStatus: pt,
    useFormState: pt,
    useActionState: pt,
    useOptimistic: pt,
    useMemoCache: pt,
    useCacheRefresh: pt
  }, am = {
    readContext: Pt,
    use: zl,
    useCallback: function(e, n) {
      return Jt().memoizedState = [
        e,
        n === void 0 ? null : n
      ], e;
    },
    useContext: Pt,
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
      var a = Jt();
      n = n === void 0 ? null : n;
      var l = e();
      if (ba) {
        Gn(!0);
        try {
          e();
        } finally {
          Gn(!1);
        }
      }
      return a.memoizedState = [l, n], l;
    },
    useReducer: function(e, n, a) {
      var l = Jt();
      if (a !== void 0) {
        var c = a(n);
        if (ba) {
          Gn(!0);
          try {
            a(n);
          } finally {
            Gn(!1);
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
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var n = Jt();
      return e = { current: e }, n.memoizedState = e;
    },
    useState: function(e) {
      e = Rc(e);
      var n = e.queue, a = tm.bind(null, je, n);
      return n.dispatch = a, [e.memoizedState, a];
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = Jt();
      return Ic(a, e, n);
    },
    useTransition: function() {
      var e = Rc(!1);
      return e = Qp.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), Jt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, n, a) {
      var l = je, c = Jt();
      if (Ze) {
        if (a === void 0)
          throw Error(s(407));
        a = a();
      } else {
        if (a = n(), et === null)
          throw Error(s(349));
        (He & 124) !== 0 || wp(l, n, a);
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
      var e = Jt(), n = et.identifierPrefix;
      if (Ze) {
        var a = or, l = lr;
        a = (l & ~(1 << 32 - Ht(l) - 1)).toString(32) + a, n = "«" + n + "R" + a, a = Rl++, 0 < a && (n += "H" + a.toString(32)), n += "»";
      } else
        a = Ob++, n = "«" + n + "r" + a.toString(32) + "»";
      return e.memoizedState = n;
    },
    useHostTransitionStatus: Bc,
    useFormState: Lp,
    useActionState: Lp,
    useOptimistic: function(e) {
      var n = Jt();
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
        je,
        !0,
        a
      ), a.dispatch = n, [e, n];
    },
    useMemoCache: Mc,
    useCacheRefresh: function() {
      return Jt().memoizedState = Rb.bind(
        null,
        je
      );
    }
  }, im = {
    readContext: Pt,
    use: zl,
    useCallback: Yp,
    useContext: Pt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Fp,
    useLayoutEffect: Zp,
    useMemo: Xp,
    useReducer: Ll,
    useRef: Up,
    useState: function() {
      return Ll(fr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = yt();
      return $p(
        a,
        Xe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = Ll(fr)[0], n = yt().memoizedState;
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
      var a = yt();
      return kp(a, Xe, e, n);
    },
    useMemoCache: Mc,
    useCacheRefresh: em
  }, Lb = {
    readContext: Pt,
    use: zl,
    useCallback: Yp,
    useContext: Pt,
    useEffect: qp,
    useImperativeHandle: Vp,
    useInsertionEffect: Fp,
    useLayoutEffect: Zp,
    useMemo: Xp,
    useReducer: jc,
    useRef: Up,
    useState: function() {
      return jc(fr);
    },
    useDebugValue: Lc,
    useDeferredValue: function(e, n) {
      var a = yt();
      return Xe === null ? Ic(a, e, n) : $p(
        a,
        Xe.memoizedState,
        e,
        n
      );
    },
    useTransition: function() {
      var e = jc(fr)[0], n = yt().memoizedState;
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
      var a = yt();
      return Xe !== null ? kp(a, Xe, e, n) : (a.baseState = e, [e, a.queue.dispatch]);
    },
    useMemoCache: Mc,
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
    function n(I, z) {
      if (e) {
        var U = I.deletions;
        U === null ? (I.deletions = [z], I.flags |= 16) : U.push(z);
      }
    }
    function a(I, z) {
      if (!e) return null;
      for (; z !== null; )
        n(I, z), z = z.sibling;
      return null;
    }
    function l(I) {
      for (var z = /* @__PURE__ */ new Map(); I !== null; )
        I.key !== null ? z.set(I.key, I) : z.set(I.index, I), I = I.sibling;
      return z;
    }
    function c(I, z) {
      return I = sr(I, z), I.index = 0, I.sibling = null, I;
    }
    function y(I, z, U) {
      return I.index = U, e ? (U = I.alternate, U !== null ? (U = U.index, U < z ? (I.flags |= 67108866, z) : U) : (I.flags |= 67108866, z)) : (I.flags |= 1048576, z);
    }
    function w(I) {
      return e && I.alternate === null && (I.flags |= 67108866), I;
    }
    function O(I, z, U, J) {
      return z === null || z.tag !== 6 ? (z = lc(U, I.mode, J), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function j(I, z, U, J) {
      var pe = U.type;
      return pe === d ? $(
        I,
        z,
        U.props.children,
        J,
        U.key
      ) : z !== null && (z.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === F && sm(pe) === z.type) ? (z = c(z, U.props), hs(z, U), z.return = I, z) : (z = Cl(
        U.type,
        U.key,
        U.props,
        null,
        I.mode,
        J
      ), hs(z, U), z.return = I, z);
    }
    function H(I, z, U, J) {
      return z === null || z.tag !== 4 || z.stateNode.containerInfo !== U.containerInfo || z.stateNode.implementation !== U.implementation ? (z = oc(U, I.mode, J), z.return = I, z) : (z = c(z, U.children || []), z.return = I, z);
    }
    function $(I, z, U, J, pe) {
      return z === null || z.tag !== 7 ? (z = fa(
        U,
        I.mode,
        J,
        pe
      ), z.return = I, z) : (z = c(z, U), z.return = I, z);
    }
    function W(I, z, U) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return z = lc(
          "" + z,
          I.mode,
          U
        ), z.return = I, z;
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case g:
            return U = Cl(
              z.type,
              z.key,
              z.props,
              null,
              I.mode,
              U
            ), hs(U, z), U.return = I, U;
          case m:
            return z = oc(
              z,
              I.mode,
              U
            ), z.return = I, z;
          case F:
            var J = z._init;
            return z = J(z._payload), W(I, z, U);
        }
        if (ge(z) || Y(z))
          return z = fa(
            z,
            I.mode,
            U,
            null
          ), z.return = I, z;
        if (typeof z.then == "function")
          return W(I, Hl(z), U);
        if (z.$$typeof === k)
          return W(
            I,
            Tl(I, z),
            U
          );
        ql(I, z);
      }
      return null;
    }
    function Z(I, z, U, J) {
      var pe = z !== null ? z.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint")
        return pe !== null ? null : O(I, z, "" + U, J);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case g:
            return U.key === pe ? j(I, z, U, J) : null;
          case m:
            return U.key === pe ? H(I, z, U, J) : null;
          case F:
            return pe = U._init, U = pe(U._payload), Z(I, z, U, J);
        }
        if (ge(U) || Y(U))
          return pe !== null ? null : $(I, z, U, J, null);
        if (typeof U.then == "function")
          return Z(
            I,
            z,
            Hl(U),
            J
          );
        if (U.$$typeof === k)
          return Z(
            I,
            z,
            Tl(I, U),
            J
          );
        ql(I, U);
      }
      return null;
    }
    function G(I, z, U, J, pe) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return I = I.get(U) || null, O(z, I, "" + J, pe);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case g:
            return I = I.get(
              J.key === null ? U : J.key
            ) || null, j(z, I, J, pe);
          case m:
            return I = I.get(
              J.key === null ? U : J.key
            ) || null, H(z, I, J, pe);
          case F:
            var ze = J._init;
            return J = ze(J._payload), G(
              I,
              z,
              U,
              J,
              pe
            );
        }
        if (ge(J) || Y(J))
          return I = I.get(U) || null, $(z, I, J, pe, null);
        if (typeof J.then == "function")
          return G(
            I,
            z,
            U,
            Hl(J),
            pe
          );
        if (J.$$typeof === k)
          return G(
            I,
            z,
            U,
            Tl(z, J),
            pe
          );
        ql(z, J);
      }
      return null;
    }
    function Ee(I, z, U, J) {
      for (var pe = null, ze = null, ve = z, xe = z = 0, kt = null; ve !== null && xe < U.length; xe++) {
        ve.index > xe ? (kt = ve, ve = null) : kt = ve.sibling;
        var qe = Z(
          I,
          ve,
          U[xe],
          J
        );
        if (qe === null) {
          ve === null && (ve = kt);
          break;
        }
        e && ve && qe.alternate === null && n(I, ve), z = y(qe, z, xe), ze === null ? pe = qe : ze.sibling = qe, ze = qe, ve = kt;
      }
      if (xe === U.length)
        return a(I, ve), Ze && ha(I, xe), pe;
      if (ve === null) {
        for (; xe < U.length; xe++)
          ve = W(I, U[xe], J), ve !== null && (z = y(
            ve,
            z,
            xe
          ), ze === null ? pe = ve : ze.sibling = ve, ze = ve);
        return Ze && ha(I, xe), pe;
      }
      for (ve = l(ve); xe < U.length; xe++)
        kt = G(
          ve,
          I,
          xe,
          U[xe],
          J
        ), kt !== null && (e && kt.alternate !== null && ve.delete(
          kt.key === null ? xe : kt.key
        ), z = y(
          kt,
          z,
          xe
        ), ze === null ? pe = kt : ze.sibling = kt, ze = kt);
      return e && ve.forEach(function($r) {
        return n(I, $r);
      }), Ze && ha(I, xe), pe;
    }
    function Se(I, z, U, J) {
      if (U == null) throw Error(s(151));
      for (var pe = null, ze = null, ve = z, xe = z = 0, kt = null, qe = U.next(); ve !== null && !qe.done; xe++, qe = U.next()) {
        ve.index > xe ? (kt = ve, ve = null) : kt = ve.sibling;
        var $r = Z(I, ve, qe.value, J);
        if ($r === null) {
          ve === null && (ve = kt);
          break;
        }
        e && ve && $r.alternate === null && n(I, ve), z = y($r, z, xe), ze === null ? pe = $r : ze.sibling = $r, ze = $r, ve = kt;
      }
      if (qe.done)
        return a(I, ve), Ze && ha(I, xe), pe;
      if (ve === null) {
        for (; !qe.done; xe++, qe = U.next())
          qe = W(I, qe.value, J), qe !== null && (z = y(qe, z, xe), ze === null ? pe = qe : ze.sibling = qe, ze = qe);
        return Ze && ha(I, xe), pe;
      }
      for (ve = l(ve); !qe.done; xe++, qe = U.next())
        qe = G(ve, I, xe, qe.value, J), qe !== null && (e && qe.alternate !== null && ve.delete(qe.key === null ? xe : qe.key), z = y(qe, z, xe), ze === null ? pe = qe : ze.sibling = qe, ze = qe);
      return e && ve.forEach(function(I_) {
        return n(I, I_);
      }), Ze && ha(I, xe), pe;
    }
    function Qe(I, z, U, J) {
      if (typeof U == "object" && U !== null && U.type === d && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case g:
            e: {
              for (var pe = U.key; z !== null; ) {
                if (z.key === pe) {
                  if (pe = U.type, pe === d) {
                    if (z.tag === 7) {
                      a(
                        I,
                        z.sibling
                      ), J = c(
                        z,
                        U.props.children
                      ), J.return = I, I = J;
                      break e;
                    }
                  } else if (z.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === F && sm(pe) === z.type) {
                    a(
                      I,
                      z.sibling
                    ), J = c(z, U.props), hs(J, U), J.return = I, I = J;
                    break e;
                  }
                  a(I, z);
                  break;
                } else n(I, z);
                z = z.sibling;
              }
              U.type === d ? (J = fa(
                U.props.children,
                I.mode,
                J,
                U.key
              ), J.return = I, I = J) : (J = Cl(
                U.type,
                U.key,
                U.props,
                null,
                I.mode,
                J
              ), hs(J, U), J.return = I, I = J);
            }
            return w(I);
          case m:
            e: {
              for (pe = U.key; z !== null; ) {
                if (z.key === pe)
                  if (z.tag === 4 && z.stateNode.containerInfo === U.containerInfo && z.stateNode.implementation === U.implementation) {
                    a(
                      I,
                      z.sibling
                    ), J = c(z, U.children || []), J.return = I, I = J;
                    break e;
                  } else {
                    a(I, z);
                    break;
                  }
                else n(I, z);
                z = z.sibling;
              }
              J = oc(U, I.mode, J), J.return = I, I = J;
            }
            return w(I);
          case F:
            return pe = U._init, U = pe(U._payload), Qe(
              I,
              z,
              U,
              J
            );
        }
        if (ge(U))
          return Ee(
            I,
            z,
            U,
            J
          );
        if (Y(U)) {
          if (pe = Y(U), typeof pe != "function") throw Error(s(150));
          return U = pe.call(U), Se(
            I,
            z,
            U,
            J
          );
        }
        if (typeof U.then == "function")
          return Qe(
            I,
            z,
            Hl(U),
            J
          );
        if (U.$$typeof === k)
          return Qe(
            I,
            z,
            Tl(I, U),
            J
          );
        ql(I, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" || typeof U == "bigint" ? (U = "" + U, z !== null && z.tag === 6 ? (a(I, z.sibling), J = c(z, U), J.return = I, I = J) : (a(I, z), J = lc(U, I.mode, J), J.return = I, I = J), w(I)) : a(I, z);
    }
    return function(I, z, U, J) {
      try {
        ds = 0;
        var pe = Qe(
          I,
          z,
          U,
          J
        );
        return ui = null, pe;
      } catch (ve) {
        if (ve === rs || ve === kl) throw ve;
        var ze = ln(29, ve, null, I.mode);
        return ze.lanes = J, ze.return = I, ze;
      } finally {
      }
    };
  }
  var ci = lm(!0), om = lm(!1), Nn = K(null), Xn = null;
  function Rr(e) {
    var n = e.alternate;
    ae(Et, Et.current & 1), ae(Nn, e), Xn === null && (n === null || ii.current !== null || n.memoizedState !== null) && (Xn = e);
  }
  function um(e) {
    if (e.tag === 22) {
      if (ae(Et, Et.current), ae(Nn, e), Xn === null) {
        var n = e.alternate;
        n !== null && n.memoizedState !== null && (Xn = e);
      }
    } else zr();
  }
  function zr() {
    ae(Et, Et.current), ae(Nn, Nn.current);
  }
  function dr(e) {
    ie(Nn), Xn === e && (Xn = null), ie(Et);
  }
  var Et = K(0);
  function Fl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var a = n.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || a.data === "$?" || Mf(a)))
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
      var l = fn(), c = Mr(l);
      c.payload = n, a != null && (c.callback = a), n = Dr(e, c, l), n !== null && (dn(n, e, l), is(n, e, l));
    },
    enqueueReplaceState: function(e, n, a) {
      e = e._reactInternals;
      var l = fn(), c = Mr(l);
      c.tag = 1, c.payload = n, a != null && (c.callback = a), n = Dr(e, c, l), n !== null && (dn(n, e, l), is(n, e, l));
    },
    enqueueForceUpdate: function(e, n) {
      e = e._reactInternals;
      var a = fn(), l = Mr(a);
      l.tag = 2, n != null && (l.callback = n), n = Dr(e, l, a), n !== null && (dn(n, e, a), is(n, e, a));
    }
  };
  function cm(e, n, a, l, c, y, w) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, y, w) : n.prototype && n.prototype.isPureReactComponent ? !$i(a, l) || !$i(c, y) : !0;
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
    var w = a.stateNode;
    w !== null && typeof w.componentDidCatch == "function" && (e.callback = function() {
      mm(n, a, l), typeof c != "function" && (Hr === null ? Hr = /* @__PURE__ */ new Set([this]) : Hr.add(this));
      var O = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: O !== null ? O : ""
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
      ), a = Nn.current, a !== null) {
        switch (a.tag) {
          case 13:
            return Xn === null ? pf() : a.alternate === null && dt === 0 && (dt = 3), a.flags &= -257, a.flags |= 65536, a.lanes = c, l === yc ? a.flags |= 16384 : (n = a.updateQueue, n === null ? a.updateQueue = /* @__PURE__ */ new Set([l]) : n.add(l), gf(e, l, c)), !1;
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
    if (Ze)
      return n = Nn.current, n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256), n.flags |= 65536, n.lanes = c, l !== fc && (e = Error(s(422), { cause: l }), Wi(En(e, a)))) : (l !== fc && (n = Error(s(423), {
        cause: l
      }), Wi(
        En(n, a)
      )), e = e.current.alternate, e.flags |= 65536, c &= -c, e.lanes |= c, l = En(l, a), c = Fc(
        e.stateNode,
        l,
        c
      ), Sc(e, c), dt !== 4 && (dt = 2)), !1;
    var y = Error(s(520), { cause: l });
    if (y = En(y, a), _s === null ? _s = [y] : _s.push(y), dt !== 4 && (dt = 2), n === null) return !0;
    l = En(l, a), a = n;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, e = c & -c, a.lanes |= e, e = Fc(a.stateNode, l, e), Sc(a, e), !1;
        case 1:
          if (n = a.type, y = a.stateNode, (a.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || y !== null && typeof y.componentDidCatch == "function" && (Hr === null || !Hr.has(y))))
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
  var ym = Error(s(461)), Tt = !1;
  function Mt(e, n, a, l) {
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
      var w = {};
      for (var O in l)
        O !== "ref" && (w[O] = l[O]);
    } else w = l;
    return va(n), l = Ac(
      e,
      n,
      a,
      w,
      y,
      c
    ), O = Nc(), e !== null && !Tt ? (Tc(e, n, c), hr(e, n, c)) : (Ze && O && uc(n), n.flags |= 1, Mt(e, n, l, c), n.child);
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
      var w = y.memoizedProps;
      if (a = a.compare, a = a !== null ? a : $i, a(w, l) && e.ref === n.ref)
        return hr(e, n, c);
    }
    return n.flags |= 1, e = sr(y, l), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Sm(e, n, a, l, c) {
    if (e !== null) {
      var y = e.memoizedProps;
      if ($i(y, l) && e.ref === n.ref)
        if (Tt = !1, n.pendingProps = l = y, Jc(e, c))
          (e.flags & 131072) !== 0 && (Tt = !0);
        else
          return n.lanes = e.lanes, hr(e, n, c);
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
      y !== null ? (Ol(n, y.cachePool), Sp(n, y), zr(), n.memoizedState = null) : (e !== null && Ol(n, null), Ec(), zr());
    return Mt(e, n, c, a), n.child;
  }
  function Em(e, n, a, l) {
    var c = vc();
    return c = c === null ? null : { parent: xt._currentValue, pool: c }, n.memoizedState = {
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
    ), l = Nc(), e !== null && !Tt ? (Tc(e, n, c), hr(e, n, c)) : (Ze && l && uc(n), n.flags |= 1, Mt(e, n, a, c), n.child);
  }
  function Cm(e, n, a, l, c, y) {
    return va(n), n.updateQueue = null, a = Ep(
      n,
      l,
      a,
      c
    ), xp(e), l = Nc(), e !== null && !Tt ? (Tc(e, n, y), hr(e, n, y)) : (Ze && l && uc(n), n.flags |= 1, Mt(e, n, a, y), n.child);
  }
  function wm(e, n, a, l, c) {
    if (va(n), n.stateNode === null) {
      var y = ei, w = a.contextType;
      typeof w == "object" && w !== null && (y = Pt(w)), y = new a(l, y), n.memoizedState = y.state !== null && y.state !== void 0 ? y.state : null, y.updater = qc, n.stateNode = y, y._reactInternals = n, y = n.stateNode, y.props = l, y.state = n.memoizedState, y.refs = {}, bc(n), w = a.contextType, y.context = typeof w == "object" && w !== null ? Pt(w) : ei, y.state = n.memoizedState, w = a.getDerivedStateFromProps, typeof w == "function" && (Hc(
        n,
        a,
        w,
        l
      ), y.state = n.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof y.getSnapshotBeforeUpdate == "function" || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (w = y.state, typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount(), w !== y.state && qc.enqueueReplaceState(y, y.state, null), ls(n, l, y, c), ss(), y.state = n.memoizedState), typeof y.componentDidMount == "function" && (n.flags |= 4194308), l = !0;
    } else if (e === null) {
      y = n.stateNode;
      var O = n.memoizedProps, j = _a(a, O);
      y.props = j;
      var H = y.context, $ = a.contextType;
      w = ei, typeof $ == "object" && $ !== null && (w = Pt($));
      var W = a.getDerivedStateFromProps;
      $ = typeof W == "function" || typeof y.getSnapshotBeforeUpdate == "function", O = n.pendingProps !== O, $ || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (O || H !== w) && fm(
        n,
        y,
        l,
        w
      ), kr = !1;
      var Z = n.memoizedState;
      y.state = Z, ls(n, l, y, c), ss(), H = n.memoizedState, O || Z !== H || kr ? (typeof W == "function" && (Hc(
        n,
        a,
        W,
        l
      ), H = n.memoizedState), (j = kr || cm(
        n,
        a,
        j,
        l,
        Z,
        H,
        w
      )) ? ($ || typeof y.UNSAFE_componentWillMount != "function" && typeof y.componentWillMount != "function" || (typeof y.componentWillMount == "function" && y.componentWillMount(), typeof y.UNSAFE_componentWillMount == "function" && y.UNSAFE_componentWillMount()), typeof y.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = l, n.memoizedState = H), y.props = l, y.state = H, y.context = w, l = j) : (typeof y.componentDidMount == "function" && (n.flags |= 4194308), l = !1);
    } else {
      y = n.stateNode, _c(e, n), w = n.memoizedProps, $ = _a(a, w), y.props = $, W = n.pendingProps, Z = y.context, H = a.contextType, j = ei, typeof H == "object" && H !== null && (j = Pt(H)), O = a.getDerivedStateFromProps, (H = typeof O == "function" || typeof y.getSnapshotBeforeUpdate == "function") || typeof y.UNSAFE_componentWillReceiveProps != "function" && typeof y.componentWillReceiveProps != "function" || (w !== W || Z !== j) && fm(
        n,
        y,
        l,
        j
      ), kr = !1, Z = n.memoizedState, y.state = Z, ls(n, l, y, c), ss();
      var G = n.memoizedState;
      w !== W || Z !== G || kr || e !== null && e.dependencies !== null && Nl(e.dependencies) ? (typeof O == "function" && (Hc(
        n,
        a,
        O,
        l
      ), G = n.memoizedState), ($ = kr || cm(
        n,
        a,
        $,
        l,
        Z,
        G,
        j
      ) || e !== null && e.dependencies !== null && Nl(e.dependencies)) ? (H || typeof y.UNSAFE_componentWillUpdate != "function" && typeof y.componentWillUpdate != "function" || (typeof y.componentWillUpdate == "function" && y.componentWillUpdate(l, G, j), typeof y.UNSAFE_componentWillUpdate == "function" && y.UNSAFE_componentWillUpdate(
        l,
        G,
        j
      )), typeof y.componentDidUpdate == "function" && (n.flags |= 4), typeof y.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), n.memoizedProps = l, n.memoizedState = G), y.props = l, y.state = G, y.context = j, l = $) : (typeof y.componentDidUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 4), typeof y.getSnapshotBeforeUpdate != "function" || w === e.memoizedProps && Z === e.memoizedState || (n.flags |= 1024), l = !1);
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
    )) : Mt(e, n, a, c), n.memoizedState = y.state, e = n.child) : e = hr(
      e,
      n,
      c
    ), e;
  }
  function Am(e, n, a, l) {
    return Ki(), n.flags |= 256, Mt(e, n, a, l), n.child;
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
    return e = e !== null ? e.childLanes & ~a : 0, n && (e |= Tn), e;
  }
  function Nm(e, n, a) {
    var l = n.pendingProps, c = !1, y = (n.flags & 128) !== 0, w;
    if ((w = y) || (w = e !== null && e.memoizedState === null ? !1 : (Et.current & 2) !== 0), w && (c = !0, n.flags &= -129), w = (n.flags & 32) !== 0, n.flags &= -33, e === null) {
      if (Ze) {
        if (c ? Rr(n) : zr(), Ze) {
          var O = ft, j;
          if (j = O) {
            e: {
              for (j = O, O = Yn; j.nodeType !== 8; ) {
                if (!O) {
                  O = null;
                  break e;
                }
                if (j = Pn(
                  j.nextSibling
                ), j === null) {
                  O = null;
                  break e;
                }
              }
              O = j;
            }
            O !== null ? (n.memoizedState = {
              dehydrated: O,
              treeContext: da !== null ? { id: lr, overflow: or } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, j = ln(
              18,
              null,
              null,
              0
            ), j.stateNode = O, j.return = n, n.child = j, Ft = n, ft = null, j = !0) : j = !1;
          }
          j || ma(n);
        }
        if (O = n.memoizedState, O !== null && (O = O.dehydrated, O !== null))
          return Mf(O) ? n.lanes = 32 : n.lanes = 536870912, null;
        dr(n);
      }
      return O = l.children, l = l.fallback, c ? (zr(), c = n.mode, O = Yl(
        { mode: "hidden", children: O },
        c
      ), l = fa(
        l,
        c,
        a,
        null
      ), O.return = n, l.return = n, O.sibling = l, n.child = O, c = n.child, c.memoizedState = Vc(a), c.childLanes = Yc(
        e,
        w,
        a
      ), n.memoizedState = Gc, l) : (Rr(n), Xc(n, O));
    }
    if (j = e.memoizedState, j !== null && (O = j.dehydrated, O !== null)) {
      if (y)
        n.flags & 256 ? (Rr(n), n.flags &= -257, n = $c(
          e,
          n,
          a
        )) : n.memoizedState !== null ? (zr(), n.child = e.child, n.flags |= 128, n = null) : (zr(), c = l.fallback, O = n.mode, l = Yl(
          { mode: "visible", children: l.children },
          O
        ), c = fa(
          c,
          O,
          a,
          null
        ), c.flags |= 2, l.return = n, c.return = n, l.sibling = c, n.child = l, ci(
          n,
          e.child,
          null,
          a
        ), l = n.child, l.memoizedState = Vc(a), l.childLanes = Yc(
          e,
          w,
          a
        ), n.memoizedState = Gc, n = c);
      else if (Rr(n), Mf(O)) {
        if (w = O.nextSibling && O.nextSibling.dataset, w) var H = w.dgst;
        w = H, l = Error(s(419)), l.stack = "", l.digest = w, Wi({ value: l, source: null, stack: null }), n = $c(
          e,
          n,
          a
        );
      } else if (Tt || es(e, n, a, !1), w = (a & e.childLanes) !== 0, Tt || w) {
        if (w = et, w !== null && (l = a & -a, l = (l & 42) !== 0 ? 1 : Mu(l), l = (l & (w.suspendedLanes | a)) !== 0 ? 0 : l, l !== 0 && l !== j.retryLane))
          throw j.retryLane = l, Wa(e, l), dn(w, e, l), ym;
        O.data === "$?" || pf(), n = $c(
          e,
          n,
          a
        );
      } else
        O.data === "$?" ? (n.flags |= 192, n.child = e.child, n = null) : (e = j.treeContext, ft = Pn(
          O.nextSibling
        ), Ft = n, Ze = !0, pa = null, Yn = !1, e !== null && (wn[An++] = lr, wn[An++] = or, wn[An++] = da, lr = e.id, or = e.overflow, da = n), n = Xc(
          n,
          l.children
        ), n.flags |= 4096);
      return n;
    }
    return c ? (zr(), c = l.fallback, O = n.mode, j = e.child, H = j.sibling, l = sr(j, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = j.subtreeFlags & 65011712, H !== null ? c = sr(H, c) : (c = fa(
      c,
      O,
      a,
      null
    ), c.flags |= 2), c.return = n, l.return = n, l.sibling = c, n.child = l, l = c, c = n.child, O = e.child.memoizedState, O === null ? O = Vc(a) : (j = O.cachePool, j !== null ? (H = xt._currentValue, j = j.parent !== H ? { parent: H, pool: H } : j) : j = hp(), O = {
      baseLanes: O.baseLanes | a,
      cachePool: j
    }), c.memoizedState = O, c.childLanes = Yc(
      e,
      w,
      a
    ), n.memoizedState = Gc, l) : (Rr(n), a = e.child, e = a.sibling, a = sr(a, {
      mode: "visible",
      children: l.children
    }), a.return = n, a.sibling = null, e !== null && (w = n.deletions, w === null ? (n.deletions = [e], n.flags |= 16) : w.push(e)), n.child = a, n.memoizedState = null, a);
  }
  function Xc(e, n) {
    return n = Yl(
      { mode: "visible", children: n },
      e.mode
    ), n.return = e, e.child = n;
  }
  function Yl(e, n) {
    return e = ln(22, e, null, n), e.lanes = 0, e.stateNode = {
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
    if (Mt(e, n, l.children, a), l = Et.current, (l & 2) !== 0)
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
    switch (ae(Et, l), c) {
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
  function hr(e, n, a) {
    if (e !== null && (n.dependencies = e.dependencies), Ur |= n.lanes, (a & n.childLanes) === 0)
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
      for (e = n.child, a = sr(e, e.pendingProps), n.child = a, a.return = n; e.sibling !== null; )
        e = e.sibling, a = a.sibling = sr(e, e.pendingProps), a.return = n;
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
        be(n, n.stateNode.containerInfo), Or(n, xt, e.memoizedState.cache), Ki();
        break;
      case 27:
      case 5:
        nt(n);
        break;
      case 4:
        be(n, n.stateNode.containerInfo);
        break;
      case 10:
        Or(
          n,
          n.type,
          n.memoizedProps.value
        );
        break;
      case 13:
        var l = n.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Rr(n), n.flags |= 128, null) : (a & n.child.childLanes) !== 0 ? Nm(e, n, a) : (Rr(n), e = hr(
            e,
            n,
            a
          ), e !== null ? e.sibling : null);
        Rr(n);
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
        if (c = n.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), ae(Et, Et.current), l) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, xm(e, n, a);
      case 24:
        Or(n, xt, e.memoizedState.cache);
    }
    return hr(e, n, a);
  }
  function km(e, n, a) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps)
        Tt = !0;
      else {
        if (!Jc(e, a) && (n.flags & 128) === 0)
          return Tt = !1, Pb(
            e,
            n,
            a
          );
        Tt = (e.flags & 131072) !== 0;
      }
    else
      Tt = !1, Ze && (n.flags & 1048576) !== 0 && sp(n, Al, n.index);
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
              if (c = l.$$typeof, c === C) {
                n.tag = 11, n = bm(
                  null,
                  n,
                  l,
                  e,
                  a
                );
                break e;
              } else if (c === D) {
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
            throw n = fe(l) || l, Error(s(306, n, ""));
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
          if (be(
            n,
            n.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          l = n.pendingProps;
          var y = n.memoizedState;
          c = y.element, _c(e, n), ls(n, l, null, a);
          var w = n.memoizedState;
          if (l = w.cache, Or(n, xt, l), l !== y.cache && pc(
            n,
            [xt],
            a,
            !0
          ), ss(), l = w.element, y.isDehydrated)
            if (y = {
              element: l,
              isDehydrated: !1,
              cache: w.cache
            }, n.updateQueue.baseState = y, n.memoizedState = y, n.flags & 256) {
              n = Am(
                e,
                n,
                l,
                a
              );
              break e;
            } else if (l !== c) {
              c = En(
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
              for (ft = Pn(e.firstChild), Ft = n, Ze = !0, pa = null, Yn = !0, a = om(
                n,
                null,
                l,
                a
              ), n.child = a; a; )
                a.flags = a.flags & -3 | 4096, a = a.sibling;
            }
          else {
            if (Ki(), l === c) {
              n = hr(
                e,
                n,
                a
              );
              break e;
            }
            Mt(
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
        )) ? n.memoizedState = a : Ze || (a = n.type, e = n.pendingProps, l = lo(
          X.current
        ).createElement(a), l[It] = n, l[$t] = e, jt(l, a, e), Nt(l), n.stateNode = l) : n.memoizedState = Rg(
          n.type,
          e.memoizedProps,
          n.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return nt(n), e === null && Ze && (l = n.stateNode = Mg(
          n.type,
          n.pendingProps,
          X.current
        ), Ft = n, Yn = !0, c = ft, Zr(n.type) ? (Df = c, ft = Pn(
          l.firstChild
        )) : ft = c), Mt(
          e,
          n,
          n.pendingProps.children,
          a
        ), Vl(e, n), e === null && (n.flags |= 4194304), n.child;
      case 5:
        return e === null && Ze && ((c = l = ft) && (l = d_(
          l,
          n.type,
          n.pendingProps,
          Yn
        ), l !== null ? (n.stateNode = l, Ft = n, ft = Pn(
          l.firstChild
        ), Yn = !1, c = !0) : c = !1), c || ma(n)), nt(n), c = n.type, y = n.pendingProps, w = e !== null ? e.memoizedProps : null, l = y.children, Tf(c, y) ? l = null : w !== null && Tf(c, w) && (n.flags |= 32), n.memoizedState !== null && (c = Ac(
          e,
          n,
          kb,
          null,
          null,
          a
        ), Os._currentValue = c), Vl(e, n), Mt(e, n, l, a), n.child;
      case 6:
        return e === null && Ze && ((e = a = ft) && (a = h_(
          a,
          n.pendingProps,
          Yn
        ), a !== null ? (n.stateNode = a, Ft = n, ft = null, e = !0) : e = !1), e || ma(n)), null;
      case 13:
        return Nm(e, n, a);
      case 4:
        return be(
          n,
          n.stateNode.containerInfo
        ), l = n.pendingProps, e === null ? n.child = ci(
          n,
          null,
          l,
          a
        ) : Mt(
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
        return Mt(
          e,
          n,
          n.pendingProps,
          a
        ), n.child;
      case 8:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 12:
        return Mt(
          e,
          n,
          n.pendingProps.children,
          a
        ), n.child;
      case 10:
        return l = n.pendingProps, Or(n, n.type, l.value), Mt(
          e,
          n,
          l.children,
          a
        ), n.child;
      case 9:
        return c = n.type._context, l = n.pendingProps.children, va(n), c = Pt(c), l = l(c), n.flags |= 1, Mt(e, n, l, a), n.child;
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
        ), a.ref = n.ref, n.child = a, a.return = n, n = a) : (a = sr(e.child, l), a.ref = n.ref, n.child = a, a.return = n, n = a), n;
      case 22:
        return xm(e, n, a);
      case 24:
        return va(n), l = Pt(xt), e === null ? (c = vc(), c === null && (c = et, y = mc(), c.pooledCache = y, y.refCount++, y !== null && (c.pooledCacheLanes |= a), c = y), n.memoizedState = {
          parent: l,
          cache: c
        }, bc(n), Or(n, xt, c)) : ((e.lanes & a) !== 0 && (_c(e, n), ls(n, null, null, a), ss()), c = e.memoizedState, y = n.memoizedState, c.parent !== l ? (c = { parent: l, cache: l }, n.memoizedState = c, n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = c), Or(n, xt, l)) : (l = y.cache, Or(n, xt, l), l !== c.cache && pc(
          n,
          [xt],
          a,
          !0
        ))), Mt(
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
  function pr(e) {
    e.flags |= 4;
  }
  function Mm(e, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Bg(n)) {
      if (n = Nn.current, n !== null && ((He & 4194048) === He ? Xn !== null : (He & 62914560) !== He && (He & 536870912) === 0 || n !== Xn))
        throw as = yc, pp;
      e.flags |= 8192;
    }
  }
  function Xl(e, n) {
    n !== null && (e.flags |= 4), e.flags & 16384 && (n = e.tag !== 22 ? uh() : 536870912, e.lanes |= n, pi |= n);
  }
  function ps(e, n) {
    if (!Ze)
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
  function lt(e) {
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
        return lt(n), null;
      case 1:
        return lt(n), null;
      case 3:
        return a = n.stateNode, l = null, e !== null && (l = e.memoizedState.cache), n.memoizedState.cache !== l && (n.flags |= 2048), cr(xt), Fe(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (e === null || e.child === null) && (Ji(n) ? pr(n) : e === null || e.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024, up())), lt(n), null;
      case 26:
        return a = n.memoizedState, e === null ? (pr(n), a !== null ? (lt(n), Mm(n, a)) : (lt(n), n.flags &= -16777217)) : a ? a !== e.memoizedState ? (pr(n), lt(n), Mm(n, a)) : (lt(n), n.flags &= -16777217) : (e.memoizedProps !== l && pr(n), lt(n), n.flags &= -16777217), null;
      case 27:
        ke(n), a = X.current;
        var c = n.type;
        if (e !== null && n.stateNode != null)
          e.memoizedProps !== l && pr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return lt(n), null;
          }
          e = oe.current, Ji(n) ? lp(n) : (e = Mg(c, l, a), n.stateNode = e, pr(n));
        }
        return lt(n), null;
      case 5:
        if (ke(n), a = n.type, e !== null && n.stateNode != null)
          e.memoizedProps !== l && pr(n);
        else {
          if (!l) {
            if (n.stateNode === null)
              throw Error(s(166));
            return lt(n), null;
          }
          if (e = oe.current, Ji(n))
            lp(n);
          else {
            switch (c = lo(
              X.current
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
            e[It] = n, e[$t] = l;
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
            e: switch (jt(e, a, l), a) {
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
            e && pr(n);
          }
        }
        return lt(n), n.flags &= -16777217, null;
      case 6:
        if (e && n.stateNode != null)
          e.memoizedProps !== l && pr(n);
        else {
          if (typeof l != "string" && n.stateNode === null)
            throw Error(s(166));
          if (e = X.current, Ji(n)) {
            if (e = n.stateNode, a = n.memoizedProps, l = null, c = Ft, c !== null)
              switch (c.tag) {
                case 27:
                case 5:
                  l = c.memoizedProps;
              }
            e[It] = n, e = !!(e.nodeValue === a || l !== null && l.suppressHydrationWarning === !0 || Cg(e.nodeValue, a)), e || ma(n);
          } else
            e = lo(e).createTextNode(
              l
            ), e[It] = n, n.stateNode = e;
        }
        return lt(n), null;
      case 13:
        if (l = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (c = Ji(n), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!c) throw Error(s(318));
              if (c = n.memoizedState, c = c !== null ? c.dehydrated : null, !c) throw Error(s(317));
              c[It] = n;
            } else
              Ki(), (n.flags & 128) === 0 && (n.memoizedState = null), n.flags |= 4;
            lt(n), c = !1;
          } else
            c = up(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = c), c = !0;
          if (!c)
            return n.flags & 256 ? (dr(n), n) : (dr(n), null);
        }
        if (dr(n), (n.flags & 128) !== 0)
          return n.lanes = a, n;
        if (a = l !== null, e = e !== null && e.memoizedState !== null, a) {
          l = n.child, c = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (c = l.alternate.memoizedState.cachePool.pool);
          var y = null;
          l.memoizedState !== null && l.memoizedState.cachePool !== null && (y = l.memoizedState.cachePool.pool), y !== c && (l.flags |= 2048);
        }
        return a !== e && a && (n.child.flags |= 8192), Xl(n, n.updateQueue), lt(n), null;
      case 4:
        return Fe(), e === null && Ef(n.stateNode.containerInfo), lt(n), null;
      case 10:
        return cr(n.type), lt(n), null;
      case 19:
        if (ie(Et), c = n.memoizedState, c === null) return lt(n), null;
        if (l = (n.flags & 128) !== 0, y = c.rendering, y === null)
          if (l) ps(c, !1);
          else {
            if (dt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = n.child; e !== null; ) {
                if (y = Fl(e), y !== null) {
                  for (n.flags |= 128, ps(c, !1), e = y.updateQueue, n.updateQueue = e, Xl(n, e), n.subtreeFlags = 0, e = a, a = n.child; a !== null; )
                    ip(a, e), a = a.sibling;
                  return ae(
                    Et,
                    Et.current & 1 | 2
                  ), n.child;
                }
                e = e.sibling;
              }
            c.tail !== null && te() > Jl && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Fl(y), e !== null) {
              if (n.flags |= 128, l = !0, e = e.updateQueue, n.updateQueue = e, Xl(n, e), ps(c, !0), c.tail === null && c.tailMode === "hidden" && !y.alternate && !Ze)
                return lt(n), null;
            } else
              2 * te() - c.renderingStartTime > Jl && a !== 536870912 && (n.flags |= 128, l = !0, ps(c, !1), n.lanes = 4194304);
          c.isBackwards ? (y.sibling = n.child, n.child = y) : (e = c.last, e !== null ? e.sibling = y : n.child = y, c.last = y);
        }
        return c.tail !== null ? (n = c.tail, c.rendering = n, c.tail = n.sibling, c.renderingStartTime = te(), n.sibling = null, e = Et.current, ae(Et, l ? e & 1 | 2 : e & 1), n) : (lt(n), null);
      case 22:
      case 23:
        return dr(n), Cc(), l = n.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (n.flags |= 8192) : l && (n.flags |= 8192), l ? (a & 536870912) !== 0 && (n.flags & 128) === 0 && (lt(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : lt(n), a = n.updateQueue, a !== null && Xl(n, a.retryQueue), a = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), l = null, n.memoizedState !== null && n.memoizedState.cachePool !== null && (l = n.memoizedState.cachePool.pool), l !== a && (n.flags |= 2048), e !== null && ie(ya), null;
      case 24:
        return a = null, e !== null && (a = e.memoizedState.cache), n.memoizedState.cache !== a && (n.flags |= 2048), cr(xt), lt(n), null;
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
        return cr(xt), Fe(), e = n.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (n.flags = e & -65537 | 128, n) : null;
      case 26:
      case 27:
      case 5:
        return ke(n), null;
      case 13:
        if (dr(n), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(s(340));
          Ki();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ie(Et), null;
      case 4:
        return Fe(), null;
      case 10:
        return cr(n.type), null;
      case 22:
      case 23:
        return dr(n), Cc(), e !== null && ie(ya), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 24:
        return cr(xt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Dm(e, n) {
    switch (cc(n), n.tag) {
      case 3:
        cr(xt), Fe();
        break;
      case 26:
      case 27:
      case 5:
        ke(n);
        break;
      case 4:
        Fe();
        break;
      case 13:
        dr(n);
        break;
      case 19:
        ie(Et);
        break;
      case 10:
        cr(n.type);
        break;
      case 22:
      case 23:
        dr(n), Cc(), e !== null && ie(ya);
        break;
      case 24:
        cr(xt);
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
            var y = a.create, w = a.inst;
            l = y(), w.destroy = l;
          }
          a = a.next;
        } while (a !== c);
      }
    } catch (O) {
      We(n, n.return, O);
    }
  }
  function Lr(e, n, a) {
    try {
      var l = n.updateQueue, c = l !== null ? l.lastEffect : null;
      if (c !== null) {
        var y = c.next;
        l = y;
        do {
          if ((l.tag & e) === e) {
            var w = l.inst, O = w.destroy;
            if (O !== void 0) {
              w.destroy = void 0, c = n;
              var j = a, H = O;
              try {
                H();
              } catch ($) {
                We(
                  c,
                  j,
                  $
                );
              }
            }
          }
          l = l.next;
        } while (l !== y);
      }
    } catch ($) {
      We(n, n.return, $);
    }
  }
  function jm(e) {
    var n = e.updateQueue;
    if (n !== null) {
      var a = e.stateNode;
      try {
        _p(n, a);
      } catch (l) {
        We(e, e.return, l);
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
      We(e, n, l);
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
      We(e, n, c);
    }
  }
  function $n(e, n) {
    var a = e.ref, l = e.refCleanup;
    if (a !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (c) {
          We(e, n, c);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (c) {
          We(e, n, c);
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
      We(e, e.return, c);
    }
  }
  function Kc(e, n, a) {
    try {
      var l = e.stateNode;
      l_(l, e.type, a, n), l[$t] = n;
    } catch (c) {
      We(e, e.return, c);
    }
  }
  function Lm(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Zr(e.type) || e.tag === 4;
  }
  function Wc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Lm(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Zr(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ef(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(e, n) : (n = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, n.appendChild(e), a = a._reactRootContainer, a != null || n.onclick !== null || (n.onclick = so));
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode, n = null), e = e.child, e !== null))
      for (ef(e, n, a), e = e.sibling; e !== null; )
        ef(e, n, a), e = e.sibling;
  }
  function $l(e, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, n ? a.insertBefore(e, n) : a.appendChild(e);
    else if (l !== 4 && (l === 27 && Zr(e.type) && (a = e.stateNode), e = e.child, e !== null))
      for ($l(e, n, a), e = e.sibling; e !== null; )
        $l(e, n, a), e = e.sibling;
  }
  function Im(e) {
    var n = e.stateNode, a = e.memoizedProps;
    try {
      for (var l = e.type, c = n.attributes; c.length; )
        n.removeAttributeNode(c[0]);
      jt(n, l, a), n[It] = e, n[$t] = a;
    } catch (y) {
      We(e, e.return, y);
    }
  }
  var mr = !1, mt = !1, tf = !1, Pm = typeof WeakSet == "function" ? WeakSet : Set, Ot = null;
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
            var w = 0, O = -1, j = -1, H = 0, $ = 0, W = e, Z = null;
            t: for (; ; ) {
              for (var G; W !== a || c !== 0 && W.nodeType !== 3 || (O = w + c), W !== y || l !== 0 && W.nodeType !== 3 || (j = w + l), W.nodeType === 3 && (w += W.nodeValue.length), (G = W.firstChild) !== null; )
                Z = W, W = G;
              for (; ; ) {
                if (W === e) break t;
                if (Z === a && ++H === c && (O = w), Z === y && ++$ === l && (j = w), (G = W.nextSibling) !== null) break;
                W = Z, Z = W.parentNode;
              }
              W = G;
            }
            a = O === -1 || j === -1 ? null : { start: O, end: j };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Nf = { focusedElem: e, selectionRange: a }, po = !1, Ot = n; Ot !== null; )
      if (n = Ot, e = n.child, (n.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = n, Ot = e;
      else
        for (; Ot !== null; ) {
          switch (n = Ot, y = n.alternate, e = n.flags, n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && y !== null) {
                e = void 0, a = n, c = y.memoizedProps, y = y.memoizedState, l = a.stateNode;
                try {
                  var Ee = _a(
                    a.type,
                    c,
                    a.elementType === a.type
                  );
                  e = l.getSnapshotBeforeUpdate(
                    Ee,
                    y
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Se) {
                  We(
                    a,
                    a.return,
                    Se
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
            e.return = n.return, Ot = e;
            break;
          }
          Ot = n.return;
        }
  }
  function Bm(e, n, a) {
    var l = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        Ir(e, a), l & 4 && ms(5, a);
        break;
      case 1:
        if (Ir(e, a), l & 4)
          if (e = a.stateNode, n === null)
            try {
              e.componentDidMount();
            } catch (w) {
              We(a, a.return, w);
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
            } catch (w) {
              We(
                a,
                a.return,
                w
              );
            }
          }
        l & 64 && jm(a), l & 512 && gs(a, a.return);
        break;
      case 3:
        if (Ir(e, a), l & 64 && (e = a.updateQueue, e !== null)) {
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
          } catch (w) {
            We(a, a.return, w);
          }
        }
        break;
      case 27:
        n === null && l & 4 && Im(a);
      case 26:
      case 5:
        Ir(e, a), n === null && l & 4 && zm(a), l & 512 && gs(a, a.return);
        break;
      case 12:
        Ir(e, a);
        break;
      case 13:
        Ir(e, a), l & 4 && qm(e, a), l & 64 && (e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null && (a = Qb.bind(
          null,
          a
        ), p_(e, a))));
        break;
      case 22:
        if (l = a.memoizedState !== null || mr, !l) {
          n = n !== null && n.memoizedState !== null || mt, c = mr;
          var y = mt;
          mr = l, (mt = n) && !y ? Pr(
            e,
            a,
            (a.subtreeFlags & 8772) !== 0
          ) : Ir(e, a), mr = c, mt = y;
        }
        break;
      case 30:
        break;
      default:
        Ir(e, a);
    }
  }
  function Um(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Um(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && Ru(n)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, Kt = !1;
  function gr(e, n, a) {
    for (a = a.child; a !== null; )
      Hm(e, n, a), a = a.sibling;
  }
  function Hm(e, n, a) {
    if (Ge && typeof Ge.onCommitFiberUnmount == "function")
      try {
        Ge.onCommitFiberUnmount(rt, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        mt || $n(a, n), gr(
          e,
          n,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        mt || $n(a, n);
        var l = at, c = Kt;
        Zr(a.type) && (at = a.stateNode, Kt = !1), gr(
          e,
          n,
          a
        ), ws(a.stateNode), at = l, Kt = c;
        break;
      case 5:
        mt || $n(a, n);
      case 6:
        if (l = at, c = Kt, at = null, gr(
          e,
          n,
          a
        ), at = l, Kt = c, at !== null)
          if (Kt)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(a.stateNode);
            } catch (y) {
              We(
                a,
                n,
                y
              );
            }
          else
            try {
              at.removeChild(a.stateNode);
            } catch (y) {
              We(
                a,
                n,
                y
              );
            }
        break;
      case 18:
        at !== null && (Kt ? (e = at, Og(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          a.stateNode
        ), js(e)) : Og(at, a.stateNode));
        break;
      case 4:
        l = at, c = Kt, at = a.stateNode.containerInfo, Kt = !0, gr(
          e,
          n,
          a
        ), at = l, Kt = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        mt || Lr(2, a, n), mt || Lr(4, a, n), gr(
          e,
          n,
          a
        );
        break;
      case 1:
        mt || ($n(a, n), l = a.stateNode, typeof l.componentWillUnmount == "function" && Rm(
          a,
          n,
          l
        )), gr(
          e,
          n,
          a
        );
        break;
      case 21:
        gr(
          e,
          n,
          a
        );
        break;
      case 22:
        mt = (l = mt) || a.memoizedState !== null, gr(
          e,
          n,
          a
        ), mt = l;
        break;
      default:
        gr(
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
        We(n, n.return, a);
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
  function on(e, n) {
    var a = n.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var c = a[l], y = e, w = n, O = w;
        e: for (; O !== null; ) {
          switch (O.tag) {
            case 27:
              if (Zr(O.type)) {
                at = O.stateNode, Kt = !1;
                break e;
              }
              break;
            case 5:
              at = O.stateNode, Kt = !1;
              break e;
            case 3:
            case 4:
              at = O.stateNode.containerInfo, Kt = !0;
              break e;
          }
          O = O.return;
        }
        if (at === null) throw Error(s(160));
        Hm(y, w, c), at = null, Kt = !1, y = c.alternate, y !== null && (y.return = null), c.return = null;
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null; )
        Fm(n, e), n = n.sibling;
  }
  var In = null;
  function Fm(e, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        on(n, e), un(e), l & 4 && (Lr(3, e, e.return), ms(3, e), Lr(5, e, e.return));
        break;
      case 1:
        on(n, e), un(e), l & 512 && (mt || a === null || $n(a, a.return)), l & 64 && mr && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (a = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = a === null ? l : a.concat(l))));
        break;
      case 26:
        var c = In;
        if (on(n, e), un(e), l & 512 && (mt || a === null || $n(a, a.return)), l & 4) {
          var y = a !== null ? a.memoizedState : null;
          if (l = e.memoizedState, a === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, a = e.memoizedProps, c = c.ownerDocument || c;
                  t: switch (l) {
                    case "title":
                      y = c.getElementsByTagName("title")[0], (!y || y[Ui] || y[It] || y.namespaceURI === "http://www.w3.org/2000/svg" || y.hasAttribute("itemprop")) && (y = c.createElement(l), c.head.insertBefore(
                        y,
                        c.querySelector("head > title")
                      )), jt(y, l, a), y[It] = e, Nt(y), l = y;
                      break e;
                    case "link":
                      var w = Ig(
                        "link",
                        "href",
                        c
                      ).get(l + (a.href || ""));
                      if (w) {
                        for (var O = 0; O < w.length; O++)
                          if (y = w[O], y.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && y.getAttribute("rel") === (a.rel == null ? null : a.rel) && y.getAttribute("title") === (a.title == null ? null : a.title) && y.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      y = c.createElement(l), jt(y, l, a), c.head.appendChild(y);
                      break;
                    case "meta":
                      if (w = Ig(
                        "meta",
                        "content",
                        c
                      ).get(l + (a.content || ""))) {
                        for (O = 0; O < w.length; O++)
                          if (y = w[O], y.getAttribute("content") === (a.content == null ? null : "" + a.content) && y.getAttribute("name") === (a.name == null ? null : a.name) && y.getAttribute("property") === (a.property == null ? null : a.property) && y.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && y.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                            w.splice(O, 1);
                            break t;
                          }
                      }
                      y = c.createElement(l), jt(y, l, a), c.head.appendChild(y);
                      break;
                    default:
                      throw Error(s(468, l));
                  }
                  y[It] = e, Nt(y), l = y;
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
        on(n, e), un(e), l & 512 && (mt || a === null || $n(a, a.return)), a !== null && l & 4 && Kc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (on(n, e), un(e), l & 512 && (mt || a === null || $n(a, a.return)), e.flags & 32) {
          c = e.stateNode;
          try {
            Va(c, "");
          } catch (G) {
            We(e, e.return, G);
          }
        }
        l & 4 && e.stateNode != null && (c = e.memoizedProps, Kc(
          e,
          c,
          a !== null ? a.memoizedProps : c
        )), l & 1024 && (tf = !0);
        break;
      case 6:
        if (on(n, e), un(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          l = e.memoizedProps, a = e.stateNode;
          try {
            a.nodeValue = l;
          } catch (G) {
            We(e, e.return, G);
          }
        }
        break;
      case 3:
        if (co = null, c = In, In = oo(n.containerInfo), on(n, e), In = c, un(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            js(n.containerInfo);
          } catch (G) {
            We(e, e.return, G);
          }
        tf && (tf = !1, Zm(e));
        break;
      case 4:
        l = In, In = oo(
          e.stateNode.containerInfo
        ), on(n, e), un(e), In = l;
        break;
      case 12:
        on(n, e), un(e);
        break;
      case 13:
        on(n, e), un(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (uf = te()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 22:
        c = e.memoizedState !== null;
        var j = a !== null && a.memoizedState !== null, H = mr, $ = mt;
        if (mr = H || c, mt = $ || j, on(n, e), mt = $, mr = H, un(e), l & 8192)
          e: for (n = e.stateNode, n._visibility = c ? n._visibility & -2 : n._visibility | 1, c && (a === null || j || mr || mt || Sa(e)), a = null, n = e; ; ) {
            if (n.tag === 5 || n.tag === 26) {
              if (a === null) {
                j = a = n;
                try {
                  if (y = j.stateNode, c)
                    w = y.style, typeof w.setProperty == "function" ? w.setProperty("display", "none", "important") : w.display = "none";
                  else {
                    O = j.stateNode;
                    var W = j.memoizedProps.style, Z = W != null && W.hasOwnProperty("display") ? W.display : null;
                    O.style.display = Z == null || typeof Z == "boolean" ? "" : ("" + Z).trim();
                  }
                } catch (G) {
                  We(j, j.return, G);
                }
              }
            } else if (n.tag === 6) {
              if (a === null) {
                j = n;
                try {
                  j.stateNode.nodeValue = c ? "" : j.memoizedProps;
                } catch (G) {
                  We(j, j.return, G);
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
        on(n, e), un(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, nf(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        on(n, e), un(e);
    }
  }
  function un(e) {
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
            var w = a.stateNode;
            a.flags & 32 && (Va(w, ""), a.flags &= -33);
            var O = Wc(e);
            $l(e, O, w);
            break;
          case 3:
          case 4:
            var j = a.stateNode.containerInfo, H = Wc(e);
            ef(
              e,
              H,
              j
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch ($) {
        We(e, e.return, $);
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
  function Ir(e, n) {
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
          Lr(4, n, n.return), Sa(n);
          break;
        case 1:
          $n(n, n.return);
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
          $n(n, n.return), Sa(n);
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
  function Pr(e, n, a) {
    for (a = a && (n.subtreeFlags & 8772) !== 0, n = n.child; n !== null; ) {
      var l = n.alternate, c = e, y = n, w = y.flags;
      switch (y.tag) {
        case 0:
        case 11:
        case 15:
          Pr(
            c,
            y,
            a
          ), ms(4, y);
          break;
        case 1:
          if (Pr(
            c,
            y,
            a
          ), l = y, c = l.stateNode, typeof c.componentDidMount == "function")
            try {
              c.componentDidMount();
            } catch (H) {
              We(l, l.return, H);
            }
          if (l = y, c = l.updateQueue, c !== null) {
            var O = l.stateNode;
            try {
              var j = c.shared.hiddenCallbacks;
              if (j !== null)
                for (c.shared.hiddenCallbacks = null, c = 0; c < j.length; c++)
                  bp(j[c], O);
            } catch (H) {
              We(l, l.return, H);
            }
          }
          a && w & 64 && jm(y), gs(y, y.return);
          break;
        case 27:
          Im(y);
        case 26:
        case 5:
          Pr(
            c,
            y,
            a
          ), a && l === null && w & 4 && zm(y), gs(y, y.return);
          break;
        case 12:
          Pr(
            c,
            y,
            a
          );
          break;
        case 13:
          Pr(
            c,
            y,
            a
          ), a && w & 4 && qm(c, y);
          break;
        case 22:
          y.memoizedState === null && Pr(
            c,
            y,
            a
          ), gs(y, y.return);
          break;
        case 30:
          break;
        default:
          Pr(
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
  function Qn(e, n, a, l) {
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
        Qn(
          e,
          n,
          a,
          l
        ), c & 2048 && ms(9, n);
        break;
      case 1:
        Qn(
          e,
          n,
          a,
          l
        );
        break;
      case 3:
        Qn(
          e,
          n,
          a,
          l
        ), c & 2048 && (e = null, n.alternate !== null && (e = n.alternate.memoizedState.cache), n = n.memoizedState.cache, n !== e && (n.refCount++, e != null && ts(e)));
        break;
      case 12:
        if (c & 2048) {
          Qn(
            e,
            n,
            a,
            l
          ), e = n.stateNode;
          try {
            var y = n.memoizedProps, w = y.id, O = y.onPostCommit;
            typeof O == "function" && O(
              w,
              n.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (j) {
            We(n, n.return, j);
          }
        } else
          Qn(
            e,
            n,
            a,
            l
          );
        break;
      case 13:
        Qn(
          e,
          n,
          a,
          l
        );
        break;
      case 23:
        break;
      case 22:
        y = n.stateNode, w = n.alternate, n.memoizedState !== null ? y._visibility & 2 ? Qn(
          e,
          n,
          a,
          l
        ) : vs(e, n) : y._visibility & 2 ? Qn(
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
        )), c & 2048 && rf(w, n);
        break;
      case 24:
        Qn(
          e,
          n,
          a,
          l
        ), c & 2048 && af(n.alternate, n);
        break;
      default:
        Qn(
          e,
          n,
          a,
          l
        );
    }
  }
  function fi(e, n, a, l, c) {
    for (c = c && (n.subtreeFlags & 10256) !== 0, n = n.child; n !== null; ) {
      var y = e, w = n, O = a, j = l, H = w.flags;
      switch (w.tag) {
        case 0:
        case 11:
        case 15:
          fi(
            y,
            w,
            O,
            j,
            c
          ), ms(8, w);
          break;
        case 23:
          break;
        case 22:
          var $ = w.stateNode;
          w.memoizedState !== null ? $._visibility & 2 ? fi(
            y,
            w,
            O,
            j,
            c
          ) : vs(
            y,
            w
          ) : ($._visibility |= 2, fi(
            y,
            w,
            O,
            j,
            c
          )), c && H & 2048 && rf(
            w.alternate,
            w
          );
          break;
        case 24:
          fi(
            y,
            w,
            O,
            j,
            c
          ), c && H & 2048 && af(w.alternate, w);
          break;
        default:
          fi(
            y,
            w,
            O,
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
          In,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        di(e);
        break;
      case 3:
      case 4:
        var n = In;
        In = oo(e.stateNode.containerInfo), di(e), In = n;
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
          Ot = l, $m(
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
        bs(e), e.flags & 2048 && Lr(9, e, e.return);
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
          Ot = l, $m(
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
          Lr(8, n, n.return), Ql(n);
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
    for (; Ot !== null; ) {
      var a = Ot;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Lr(8, a, n);
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
      if (l = a.child, l !== null) l.return = a, Ot = l;
      else
        e: for (a = e; Ot !== null; ) {
          l = Ot;
          var c = l.sibling, y = l.return;
          if (Um(l), l === a) {
            Ot = null;
            break e;
          }
          if (c !== null) {
            c.return = y, Ot = c;
            break e;
          }
          Ot = y;
        }
    }
  }
  var Fb = {
    getCacheForType: function(e) {
      var n = Pt(xt), a = n.data.get(e);
      return a === void 0 && (a = e(), n.data.set(e, a)), a;
    }
  }, Zb = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, et = null, Le = null, He = 0, Ye = 0, cn = null, Br = !1, hi = !1, sf = !1, vr = 0, dt = 0, Ur = 0, xa = 0, lf = 0, Tn = 0, pi = 0, _s = null, Wt = null, of = !1, uf = 0, Jl = 1 / 0, Kl = null, Hr = null, Dt = 0, qr = null, mi = null, gi = 0, cf = 0, ff = null, Qm = null, Ss = 0, df = null;
  function fn() {
    if ((Ve & 2) !== 0 && He !== 0)
      return He & -He;
    if (B.T !== null) {
      var e = ri;
      return e !== 0 ? e : bf();
    }
    return dh();
  }
  function Jm() {
    Tn === 0 && (Tn = (He & 536870912) === 0 || Ze ? Pa() : 536870912);
    var e = Nn.current;
    return e !== null && (e.flags |= 32), Tn;
  }
  function dn(e, n, a) {
    (e === et && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (vi(e, 0), Fr(
      e,
      He,
      Tn,
      !1
    )), Bi(e, a), ((Ve & 2) === 0 || e !== et) && (e === et && ((Ve & 2) === 0 && (xa |= a), dt === 4 && Fr(
      e,
      He,
      Tn,
      !1
    )), Jn(e));
  }
  function Km(e, n, a) {
    if ((Ve & 6) !== 0) throw Error(s(327));
    var l = !a && (n & 124) === 0 && (n & e.expiredLanes) === 0 || Xt(e, n), c = l ? Yb(e, n) : mf(e, n, !0), y = l;
    do {
      if (c === 0) {
        hi && !l && Fr(e, n, 0, !1);
        break;
      } else {
        if (a = e.current.alternate, y && !Gb(a)) {
          c = mf(e, n, !1), y = !1;
          continue;
        }
        if (c === 2) {
          if (y = n, e.errorRecoveryDisabledLanes & y)
            var w = 0;
          else
            w = e.pendingLanes & -536870913, w = w !== 0 ? w : w & 536870912 ? 536870912 : 0;
          if (w !== 0) {
            n = w;
            e: {
              var O = e;
              c = _s;
              var j = O.current.memoizedState.isDehydrated;
              if (j && (vi(O, w).flags |= 256), w = mf(
                O,
                w,
                !1
              ), w !== 2) {
                if (sf && !j) {
                  O.errorRecoveryDisabledLanes |= y, xa |= y, c = 4;
                  break e;
                }
                y = Wt, Wt = c, y !== null && (Wt === null ? Wt = y : Wt.push.apply(
                  Wt,
                  y
                ));
              }
              c = w;
            }
            if (y = !1, c !== 2) continue;
          }
        }
        if (c === 1) {
          vi(e, 0), Fr(e, n, 0, !0);
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
              Fr(
                l,
                n,
                Tn,
                !Br
              );
              break e;
            case 2:
              Wt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((n & 62914560) === n && (c = uf + 300 - te(), 10 < c)) {
            if (Fr(
              l,
              n,
              Tn,
              !Br
            ), qt(l, 0, !0) !== 0) break e;
            l.timeoutHandle = Ng(
              Wm.bind(
                null,
                l,
                a,
                Wt,
                Kl,
                of,
                n,
                Tn,
                xa,
                pi,
                Br,
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
            Wt,
            Kl,
            of,
            n,
            Tn,
            xa,
            pi,
            Br,
            y,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Jn(e);
  }
  function Wm(e, n, a, l, c, y, w, O, j, H, $, W, Z, G) {
    if (e.timeoutHandle = -1, W = n.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (Ts = { stylesheets: null, count: 0, unsuspend: A_ }, Vm(n), W = T_(), W !== null)) {
      e.cancelPendingCommit = W(
        sg.bind(
          null,
          e,
          n,
          y,
          a,
          l,
          c,
          w,
          O,
          j,
          $,
          1,
          Z,
          G
        )
      ), Fr(e, y, w, !H);
      return;
    }
    sg(
      e,
      n,
      y,
      a,
      l,
      c,
      w,
      O,
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
            if (!sn(y(), c)) return !1;
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
  function Fr(e, n, a, l) {
    n &= ~lf, n &= ~xa, e.suspendedLanes |= n, e.pingedLanes &= ~n, l && (e.warmLanes |= n), l = e.expirationTimes;
    for (var c = n; 0 < c; ) {
      var y = 31 - Ht(c), w = 1 << y;
      l[y] = -1, c &= ~w;
    }
    a !== 0 && ch(e, a, n);
  }
  function Wl() {
    return (Ve & 6) === 0 ? (xs(0), !1) : !0;
  }
  function hf() {
    if (Le !== null) {
      if (Ye === 0)
        var e = Le.return;
      else
        e = Le, ur = ga = null, Oc(e), ui = null, ds = 0, e = Le;
      for (; e !== null; )
        Dm(e.alternate, e), e = e.return;
      Le = null;
    }
  }
  function vi(e, n) {
    var a = e.timeoutHandle;
    a !== -1 && (e.timeoutHandle = -1, u_(a)), a = e.cancelPendingCommit, a !== null && (e.cancelPendingCommit = null, a()), hf(), et = e, Le = a = sr(e.current, null), He = n, Ye = 0, cn = null, Br = !1, hi = Xt(e, n), sf = !1, pi = Tn = lf = xa = Ur = dt = 0, Wt = _s = null, of = !1, (n & 8) !== 0 && (n |= n & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= n; 0 < l; ) {
        var c = 31 - Ht(l), y = 1 << c;
        n |= e[c], l &= ~y;
      }
    return vr = n, Sl(), a;
  }
  function eg(e, n) {
    je = null, B.H = Ul, n === rs || n === kl ? (n = vp(), Ye = 3) : n === pp ? (n = vp(), Ye = 4) : Ye = n === ym ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1, cn = n, Le === null && (dt = 1, Gl(
      e,
      En(n, e.current)
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
    dt = 4, Br || (He & 4194048) !== He && Nn.current !== null || (hi = !0), (Ur & 134217727) === 0 && (xa & 134217727) === 0 || et === null || Fr(
      et,
      He,
      Tn,
      !1
    );
  }
  function mf(e, n, a) {
    var l = Ve;
    Ve |= 2;
    var c = tg(), y = ng();
    (et !== e || He !== n) && (Kl = null, vi(e, n)), n = !1;
    var w = dt;
    e: do
      try {
        if (Ye !== 0 && Le !== null) {
          var O = Le, j = cn;
          switch (Ye) {
            case 8:
              hf(), w = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nn.current === null && (n = !0);
              var H = Ye;
              if (Ye = 0, cn = null, yi(e, O, j, H), a && hi) {
                w = 0;
                break e;
              }
              break;
            default:
              H = Ye, Ye = 0, cn = null, yi(e, O, j, H);
          }
        }
        Vb(), w = dt;
        break;
      } catch ($) {
        eg(e, $);
      }
    while (!0);
    return n && e.shellSuspendCounter++, ur = ga = null, Ve = l, B.H = c, B.A = y, Le === null && (et = null, He = 0, Sl()), w;
  }
  function Vb() {
    for (; Le !== null; ) rg(Le);
  }
  function Yb(e, n) {
    var a = Ve;
    Ve |= 2;
    var l = tg(), c = ng();
    et !== e || He !== n ? (Kl = null, Jl = te() + 500, vi(e, n)) : hi = Xt(
      e,
      n
    );
    e: do
      try {
        if (Ye !== 0 && Le !== null) {
          n = Le;
          var y = cn;
          t: switch (Ye) {
            case 1:
              Ye = 0, cn = null, yi(e, n, y, 1);
              break;
            case 2:
            case 9:
              if (mp(y)) {
                Ye = 0, cn = null, ag(n);
                break;
              }
              n = function() {
                Ye !== 2 && Ye !== 9 || et !== e || (Ye = 7), Jn(e);
              }, y.then(n, n);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              mp(y) ? (Ye = 0, cn = null, ag(n)) : (Ye = 0, cn = null, yi(e, n, y, 7));
              break;
            case 5:
              var w = null;
              switch (Le.tag) {
                case 26:
                  w = Le.memoizedState;
                case 5:
                case 27:
                  var O = Le;
                  if (!w || Bg(w)) {
                    Ye = 0, cn = null;
                    var j = O.sibling;
                    if (j !== null) Le = j;
                    else {
                      var H = O.return;
                      H !== null ? (Le = H, eo(H)) : Le = null;
                    }
                    break t;
                  }
              }
              Ye = 0, cn = null, yi(e, n, y, 5);
              break;
            case 6:
              Ye = 0, cn = null, yi(e, n, y, 6);
              break;
            case 8:
              hf(), dt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Xb();
        break;
      } catch ($) {
        eg(e, $);
      }
    while (!0);
    return ur = ga = null, B.H = l, B.A = c, Ve = a, Le !== null ? 0 : (et = null, He = 0, Sl(), dt);
  }
  function Xb() {
    for (; Le !== null && !Yt(); )
      rg(Le);
  }
  function rg(e) {
    var n = km(e.alternate, e, vr);
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Le = n;
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
          He
        );
        break;
      case 11:
        n = Cm(
          a,
          n,
          n.pendingProps,
          n.type.render,
          n.ref,
          He
        );
        break;
      case 5:
        Oc(n);
      default:
        Dm(a, n), n = Le = ip(n, vr), n = km(a, n, vr);
    }
    e.memoizedProps = e.pendingProps, n === null ? eo(e) : Le = n;
  }
  function yi(e, n, a, l) {
    ur = ga = null, Oc(n), ui = null, ds = 0;
    var c = n.return;
    try {
      if (Ib(
        e,
        c,
        n,
        a,
        He
      )) {
        dt = 1, Gl(
          e,
          En(a, e.current)
        ), Le = null;
        return;
      }
    } catch (y) {
      if (c !== null) throw Le = c, y;
      dt = 1, Gl(
        e,
        En(a, e.current)
      ), Le = null;
      return;
    }
    n.flags & 32768 ? (Ze || l === 1 ? e = !0 : hi || (He & 536870912) !== 0 ? e = !1 : (Br = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Nn.current, l !== null && l.tag === 13 && (l.flags |= 16384))), ig(n, e)) : eo(n);
  }
  function eo(e) {
    var n = e;
    do {
      if ((n.flags & 32768) !== 0) {
        ig(
          n,
          Br
        );
        return;
      }
      e = n.return;
      var a = Bb(
        n.alternate,
        n,
        vr
      );
      if (a !== null) {
        Le = a;
        return;
      }
      if (n = n.sibling, n !== null) {
        Le = n;
        return;
      }
      Le = n = e;
    } while (n !== null);
    dt === 0 && (dt = 5);
  }
  function ig(e, n) {
    do {
      var a = Ub(e.alternate, e);
      if (a !== null) {
        a.flags &= 32767, Le = a;
        return;
      }
      if (a = e.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !n && (e = e.sibling, e !== null)) {
        Le = e;
        return;
      }
      Le = e = a;
    } while (e !== null);
    dt = 6, Le = null;
  }
  function sg(e, n, a, l, c, y, w, O, j) {
    e.cancelPendingCommit = null;
    do
      to();
    while (Dt !== 0);
    if ((Ve & 6) !== 0) throw Error(s(327));
    if (n !== null) {
      if (n === e.current) throw Error(s(177));
      if (y = n.lanes | n.childLanes, y |= ac, A1(
        e,
        a,
        y,
        w,
        O,
        j
      ), e === et && (Le = et = null, He = 0), mi = n, qr = e, gi = a, cf = y, ff = c, Qm = l, (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Kb(ue, function() {
        return fg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (n.flags & 13878) !== 0, (n.subtreeFlags & 13878) !== 0 || l) {
        l = B.T, B.T = null, c = re.p, re.p = 2, w = Ve, Ve |= 4;
        try {
          Hb(e, n, a);
        } finally {
          Ve = w, re.p = c, B.T = l;
        }
      }
      Dt = 1, lg(), og(), ug();
    }
  }
  function lg() {
    if (Dt === 1) {
      Dt = 0;
      var e = qr, n = mi, a = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || a) {
        a = B.T, B.T = null;
        var l = re.p;
        re.p = 2;
        var c = Ve;
        Ve |= 4;
        try {
          Fm(n, e);
          var y = Nf, w = $h(e.containerInfo), O = y.focusedElem, j = y.selectionRange;
          if (w !== O && O && O.ownerDocument && Xh(
            O.ownerDocument.documentElement,
            O
          )) {
            if (j !== null && Wu(O)) {
              var H = j.start, $ = j.end;
              if ($ === void 0 && ($ = H), "selectionStart" in O)
                O.selectionStart = H, O.selectionEnd = Math.min(
                  $,
                  O.value.length
                );
              else {
                var W = O.ownerDocument || document, Z = W && W.defaultView || window;
                if (Z.getSelection) {
                  var G = Z.getSelection(), Ee = O.textContent.length, Se = Math.min(j.start, Ee), Qe = j.end === void 0 ? Se : Math.min(j.end, Ee);
                  !G.extend && Se > Qe && (w = Qe, Qe = Se, Se = w);
                  var I = Yh(
                    O,
                    Se
                  ), z = Yh(
                    O,
                    Qe
                  );
                  if (I && z && (G.rangeCount !== 1 || G.anchorNode !== I.node || G.anchorOffset !== I.offset || G.focusNode !== z.node || G.focusOffset !== z.offset)) {
                    var U = W.createRange();
                    U.setStart(I.node, I.offset), G.removeAllRanges(), Se > Qe ? (G.addRange(U), G.extend(z.node, z.offset)) : (U.setEnd(z.node, z.offset), G.addRange(U));
                  }
                }
              }
            }
            for (W = [], G = O; G = G.parentNode; )
              G.nodeType === 1 && W.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof O.focus == "function" && O.focus(), O = 0; O < W.length; O++) {
              var J = W[O];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          po = !!Af, Nf = Af = null;
        } finally {
          Ve = c, re.p = l, B.T = a;
        }
      }
      e.current = n, Dt = 2;
    }
  }
  function og() {
    if (Dt === 2) {
      Dt = 0;
      var e = qr, n = mi, a = (n.flags & 8772) !== 0;
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
      Dt = 3;
    }
  }
  function ug() {
    if (Dt === 4 || Dt === 3) {
      Dt = 0, L();
      var e = qr, n = mi, a = gi, l = Qm;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? Dt = 5 : (Dt = 0, mi = qr = null, cg(e, e.pendingLanes));
      var c = e.pendingLanes;
      if (c === 0 && (Hr = null), Du(a), n = n.stateNode, Ge && typeof Ge.onCommitFiberRoot == "function")
        try {
          Ge.onCommitFiberRoot(
            rt,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = B.T, c = re.p, re.p = 2, B.T = null;
        try {
          for (var y = e.onRecoverableError, w = 0; w < l.length; w++) {
            var O = l[w];
            y(O.value, {
              componentStack: O.stack
            });
          }
        } finally {
          B.T = n, re.p = c;
        }
      }
      (gi & 3) !== 0 && to(), Jn(e), c = e.pendingLanes, (a & 4194090) !== 0 && (c & 42) !== 0 ? e === df ? Ss++ : (Ss = 0, df = e) : Ss = 0, xs(0);
    }
  }
  function cg(e, n) {
    (e.pooledCacheLanes &= n) === 0 && (n = e.pooledCache, n != null && (e.pooledCache = null, ts(n)));
  }
  function to(e) {
    return lg(), og(), ug(), fg();
  }
  function fg() {
    if (Dt !== 5) return !1;
    var e = qr, n = cf;
    cf = 0;
    var a = Du(gi), l = B.T, c = re.p;
    try {
      re.p = 32 > a ? 32 : a, B.T = null, a = ff, ff = null;
      var y = qr, w = gi;
      if (Dt = 0, mi = qr = null, gi = 0, (Ve & 6) !== 0) throw Error(s(331));
      var O = Ve;
      if (Ve |= 4, Xm(y.current), Gm(
        y,
        y.current,
        w,
        a
      ), Ve = O, xs(0, !1), Ge && typeof Ge.onPostCommitFiberRoot == "function")
        try {
          Ge.onPostCommitFiberRoot(rt, y);
        } catch {
        }
      return !0;
    } finally {
      re.p = c, B.T = l, cg(e, n);
    }
  }
  function dg(e, n, a) {
    n = En(a, n), n = Fc(e.stateNode, n, 2), e = Dr(e, n, 2), e !== null && (Bi(e, 2), Jn(e));
  }
  function We(e, n, a) {
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
          if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (Hr === null || !Hr.has(l))) {
            e = En(a, e), a = gm(2), l = Dr(n, a, 2), l !== null && (vm(
              a,
              l,
              n,
              e
            ), Bi(l, 2), Jn(l));
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
    l !== null && l.delete(n), e.pingedLanes |= e.suspendedLanes & a, e.warmLanes &= ~a, et === e && (He & a) === a && (dt === 4 || dt === 3 && (He & 62914560) === He && 300 > te() - uf ? (Ve & 2) === 0 && vi(e, 0) : lf |= a, pi === He && (pi = 0)), Jn(e);
  }
  function hg(e, n) {
    n === 0 && (n = uh()), e = Wa(e, n), e !== null && (Bi(e, n), Jn(e));
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
    return zn(e, n);
  }
  var no = null, bi = null, vf = !1, ro = !1, yf = !1, Ea = 0;
  function Jn(e) {
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
              var w = l.suspendedLanes, O = l.pingedLanes;
              y = (1 << 31 - Ht(42 | e) + 1) - 1, y &= c & ~(w & ~O), y = y & 201326741 ? y & 201326741 | 1 : y ? y | 2 : 0;
            }
            y !== 0 && (a = !0, vg(l, y));
          } else
            y = He, y = qt(
              l,
              l === et ? y : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (y & 3) === 0 || Xt(l, y) || (a = !0, vg(l, y));
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
    for (var n = te(), a = null, l = no; l !== null; ) {
      var c = l.next, y = mg(l, n);
      y === 0 ? (l.next = null, a === null ? no = c : a.next = c, c === null && (bi = a)) : (a = l, (e !== 0 || (y & 3) !== 0) && (ro = !0)), l = c;
    }
    xs(e);
  }
  function mg(e, n) {
    for (var a = e.suspendedLanes, l = e.pingedLanes, c = e.expirationTimes, y = e.pendingLanes & -62914561; 0 < y; ) {
      var w = 31 - Ht(y), O = 1 << w, j = c[w];
      j === -1 ? ((O & a) === 0 || (O & l) !== 0) && (c[w] = ul(O, n)) : j <= n && (e.expiredLanes |= O), y &= ~O;
    }
    if (n = et, a = He, a = qt(
      e,
      e === n ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, a === 0 || e === n && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && At(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((a & 3) === 0 || Xt(e, a)) {
      if (n = a & -a, n === e.callbackPriority) return n;
      switch (l !== null && At(l), Du(a)) {
        case 2:
        case 8:
          a = ce;
          break;
        case 32:
          a = ue;
          break;
        case 268435456:
          a = Be;
          break;
        default:
          a = ue;
      }
      return l = gg.bind(null, e), a = zn(a, l), e.callbackPriority = n, e.callbackNode = a, n;
    }
    return l !== null && l !== null && At(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function gg(e, n) {
    if (Dt !== 0 && Dt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var a = e.callbackNode;
    if (to() && e.callbackNode !== a)
      return null;
    var l = He;
    return l = qt(
      e,
      e === et ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Km(e, l, n), mg(e, te()), e.callbackNode != null && e.callbackNode === a ? gg.bind(null, e) : null);
  }
  function vg(e, n) {
    if (to()) return null;
    Km(e, n, !0);
  }
  function e_() {
    c_(function() {
      (Ve & 6) !== 0 ? zn(
        de,
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
        (c[$t] || null).action
      ), w = l.submitter;
      w && (n = (n = w[$t] || null) ? yg(n.formAction) : w.getAttribute("formAction"), n !== null && (y = n, w = null));
      var O = new yl(
        "action",
        "action",
        null,
        l,
        c
      );
      e.push({
        event: O,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (Ea !== 0) {
                  var j = w ? bg(c, w) : new FormData(c);
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
                typeof y == "function" && (O.preventDefault(), j = w ? bg(c, w) : new FormData(c), Pc(
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
    Ln(
      n_,
      "on" + r_
    );
  }
  Ln(Kh, "onAnimationEnd"), Ln(Wh, "onAnimationIteration"), Ln(ep, "onAnimationStart"), Ln("dblclick", "onDoubleClick"), Ln("focusin", "onFocus"), Ln("focusout", "onBlur"), Ln(_b, "onTransitionRun"), Ln(Sb, "onTransitionStart"), Ln(xb, "onTransitionCancel"), Ln(tp, "onTransitionEnd"), Fa("onMouseEnter", ["mouseout", "mouseover"]), Fa("onMouseLeave", ["mouseout", "mouseover"]), Fa("onPointerEnter", ["pointerout", "pointerover"]), Fa("onPointerLeave", ["pointerout", "pointerover"]), la(
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
          for (var w = l.length - 1; 0 <= w; w--) {
            var O = l[w], j = O.instance, H = O.currentTarget;
            if (O = O.listener, j !== y && c.isPropagationStopped())
              break e;
            y = O, c.currentTarget = H;
            try {
              y(c);
            } catch ($) {
              Zl($);
            }
            c.currentTarget = null, y = j;
          }
        else
          for (w = 0; w < l.length; w++) {
            if (O = l[w], j = O.instance, H = O.currentTarget, O = O.listener, j !== y && c.isPropagationStopped())
              break e;
            y = O, c.currentTarget = H;
            try {
              y(c);
            } catch ($) {
              Zl($);
            }
            c.currentTarget = null, y = j;
          }
      }
    }
  }
  function Ie(e, n) {
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
        var c = M_;
        break;
      case 8:
        c = D_;
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
        var w = l.tag;
        if (w === 3 || w === 4) {
          var O = l.stateNode.containerInfo;
          if (O === c) break;
          if (w === 4)
            for (w = l.return; w !== null; ) {
              var j = w.tag;
              if ((j === 3 || j === 4) && w.stateNode.containerInfo === c)
                return;
              w = w.return;
            }
          for (; O !== null; ) {
            if (w = Ua(O), w === null) return;
            if (j = w.tag, j === 5 || j === 6 || j === 26 || j === 27) {
              l = y = w;
              continue e;
            }
            O = O.parentNode;
          }
        }
        l = l.return;
      }
    Th(function() {
      var H = y, $ = qu(a), W = [];
      e: {
        var Z = np.get(e);
        if (Z !== void 0) {
          var G = yl, Ee = e;
          switch (e) {
            case "keypress":
              if (gl(a) === 0) break e;
            case "keydown":
            case "keyup":
              G = K1;
              break;
            case "focusin":
              Ee = "focus", G = Xu;
              break;
            case "focusout":
              Ee = "blur", G = Xu;
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
              G = Mh;
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
          var Se = (n & 4) !== 0, Qe = !Se && (e === "scroll" || e === "scrollend"), I = Se ? Z !== null ? Z + "Capture" : null : Z;
          Se = [];
          for (var z = H, U; z !== null; ) {
            var J = z;
            if (U = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || U === null || I === null || (J = qi(z, I), J != null && Se.push(
              Cs(z, J, U)
            )), Qe) break;
            z = z.return;
          }
          0 < Se.length && (Z = new G(
            Z,
            Ee,
            null,
            a,
            $
          ), W.push({ event: Z, listeners: Se }));
        }
      }
      if ((n & 7) === 0) {
        e: {
          if (Z = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", Z && a !== Hu && (Ee = a.relatedTarget || a.fromElement) && (Ua(Ee) || Ee[Ba]))
            break e;
          if ((G || Z) && (Z = $.window === $ ? $ : (Z = $.ownerDocument) ? Z.defaultView || Z.parentWindow : window, G ? (Ee = a.relatedTarget || a.toElement, G = H, Ee = Ee ? Ua(Ee) : null, Ee !== null && (Qe = u(Ee), Se = Ee.tag, Ee !== Qe || Se !== 5 && Se !== 27 && Se !== 6) && (Ee = null)) : (G = null, Ee = H), G !== Ee)) {
            if (Se = Mh, J = "onMouseLeave", I = "onMouseEnter", z = "mouse", (e === "pointerout" || e === "pointerover") && (Se = jh, J = "onPointerLeave", I = "onPointerEnter", z = "pointer"), Qe = G == null ? Z : Hi(G), U = Ee == null ? Z : Hi(Ee), Z = new Se(
              J,
              z + "leave",
              G,
              a,
              $
            ), Z.target = Qe, Z.relatedTarget = U, J = null, Ua($) === H && (Se = new Se(
              I,
              z + "enter",
              Ee,
              a,
              $
            ), Se.target = U, Se.relatedTarget = Qe, J = Se), Qe = J, G && Ee)
              t: {
                for (Se = G, I = Ee, z = 0, U = Se; U; U = _i(U))
                  z++;
                for (U = 0, J = I; J; J = _i(J))
                  U++;
                for (; 0 < z - U; )
                  Se = _i(Se), z--;
                for (; 0 < U - z; )
                  I = _i(I), U--;
                for (; z--; ) {
                  if (Se === I || I !== null && Se === I.alternate)
                    break t;
                  Se = _i(Se), I = _i(I);
                }
                Se = null;
              }
            else Se = null;
            G !== null && xg(
              W,
              Z,
              G,
              Se,
              !1
            ), Ee !== null && Qe !== null && xg(
              W,
              Qe,
              Ee,
              Se,
              !0
            );
          }
        }
        e: {
          if (Z = H ? Hi(H) : window, G = Z.nodeName && Z.nodeName.toLowerCase(), G === "select" || G === "input" && Z.type === "file")
            var pe = Hh;
          else if (Bh(Z))
            if (qh)
              pe = vb;
            else {
              pe = mb;
              var ze = pb;
            }
          else
            G = Z.nodeName, !G || G.toLowerCase() !== "input" || Z.type !== "checkbox" && Z.type !== "radio" ? H && Uu(H.elementType) && (pe = Hh) : pe = gb;
          if (pe && (pe = pe(e, H))) {
            Uh(
              W,
              pe,
              a,
              $
            );
            break e;
          }
          ze && ze(e, Z, H), e === "focusout" && H && Z.type === "number" && H.memoizedProps.value != null && Bu(Z, "number", Z.value);
        }
        switch (ze = H ? Hi(H) : window, e) {
          case "focusin":
            (Bh(ze) || ze.contentEditable === "true") && (Qa = ze, ec = H, Qi = null);
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
            tc = !1, Qh(W, a, $);
            break;
          case "selectionchange":
            if (bb) break;
          case "keydown":
          case "keyup":
            Qh(W, a, $);
        }
        var ve;
        if (Qu)
          e: {
            switch (e) {
              case "compositionstart":
                var xe = "onCompositionStart";
                break e;
              case "compositionend":
                xe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                xe = "onCompositionUpdate";
                break e;
            }
            xe = void 0;
          }
        else
          $a ? Ih(e, a) && (xe = "onCompositionEnd") : e === "keydown" && a.keyCode === 229 && (xe = "onCompositionStart");
        xe && (Rh && a.locale !== "ko" && ($a || xe !== "onCompositionStart" ? xe === "onCompositionEnd" && $a && (ve = Oh()) : (Tr = $, Gu = "value" in Tr ? Tr.value : Tr.textContent, $a = !0)), ze = io(H, xe), 0 < ze.length && (xe = new Dh(
          xe,
          e,
          null,
          a,
          $
        ), W.push({ event: xe, listeners: ze }), ve ? xe.data = ve : (ve = Ph(a), ve !== null && (xe.data = ve)))), (ve = ub ? cb(e, a) : fb(e, a)) && (xe = io(H, "onBeforeInput"), 0 < xe.length && (ze = new Dh(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          $
        ), W.push({
          event: ze,
          listeners: xe
        }), ze.data = ve)), t_(
          W,
          e,
          H,
          a,
          $
        );
      }
      _g(W, n);
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
    for (var y = n._reactName, w = []; a !== null && a !== l; ) {
      var O = a, j = O.alternate, H = O.stateNode;
      if (O = O.tag, j !== null && j === l) break;
      O !== 5 && O !== 26 && O !== 27 || H === null || (j = H, c ? (H = qi(a, y), H != null && w.unshift(
        Cs(a, H, j)
      )) : c || (H = qi(a, y), H != null && w.push(
        Cs(a, H, j)
      ))), a = a.return;
    }
    w.length !== 0 && e.push({ event: n, listeners: w });
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
  function $e(e, n, a, l, c, y) {
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
          typeof y == "function" && (a === "formAction" ? (n !== "input" && $e(e, n, "name", c.name, c, null), $e(
            e,
            n,
            "formEncType",
            c.formEncType,
            c,
            null
          ), $e(
            e,
            n,
            "formMethod",
            c.formMethod,
            c,
            null
          ), $e(
            e,
            n,
            "formTarget",
            c.formTarget,
            c,
            null
          )) : ($e(e, n, "encType", c.encType, c, null), $e(e, n, "method", c.method, c, null), $e(e, n, "target", c.target, c, null)));
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
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
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
        Ie("beforetoggle", e), Ie("toggle", e), cl(e, "popover", l);
        break;
      case "xlinkActuate":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ar(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ar(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ar(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ar(
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
        l != null && Ie("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ie("scrollend", e);
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
            if (a[0] === "o" && a[1] === "n" && (c = a.endsWith("Capture"), n = a.slice(2, c ? a.length - 7 : void 0), y = e[$t] || null, y = y != null ? y[a] : null, typeof y == "function" && e.removeEventListener(n, y, c), typeof l == "function")) {
              typeof y != "function" && y !== null && (a in e ? e[a] = null : e.hasAttribute(a) && e.removeAttribute(a)), e.addEventListener(n, l, c);
              break e;
            }
            a in e ? e[a] = l : l === !0 ? e.setAttribute(a, "") : cl(e, a, l);
          }
    }
  }
  function jt(e, n, a) {
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
        Ie("error", e), Ie("load", e);
        var l = !1, c = !1, y;
        for (y in a)
          if (a.hasOwnProperty(y)) {
            var w = a[y];
            if (w != null)
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
                  $e(e, n, y, w, a, null);
              }
          }
        c && $e(e, n, "srcSet", a.srcSet, a, null), l && $e(e, n, "src", a.src, a, null);
        return;
      case "input":
        Ie("invalid", e);
        var O = y = w = c = null, j = null, H = null;
        for (l in a)
          if (a.hasOwnProperty(l)) {
            var $ = a[l];
            if ($ != null)
              switch (l) {
                case "name":
                  c = $;
                  break;
                case "type":
                  w = $;
                  break;
                case "checked":
                  j = $;
                  break;
                case "defaultChecked":
                  H = $;
                  break;
                case "value":
                  y = $;
                  break;
                case "defaultValue":
                  O = $;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if ($ != null)
                    throw Error(s(137, n));
                  break;
                default:
                  $e(e, n, l, $, a, null);
              }
          }
        xh(
          e,
          y,
          O,
          j,
          H,
          w,
          c,
          !1
        ), dl(e);
        return;
      case "select":
        Ie("invalid", e), l = w = y = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (O = a[c], O != null))
            switch (c) {
              case "value":
                y = O;
                break;
              case "defaultValue":
                w = O;
                break;
              case "multiple":
                l = O;
              default:
                $e(e, n, c, O, a, null);
            }
        n = y, a = w, e.multiple = !!l, n != null ? Ga(e, !!l, n, !1) : a != null && Ga(e, !!l, a, !0);
        return;
      case "textarea":
        Ie("invalid", e), y = c = l = null;
        for (w in a)
          if (a.hasOwnProperty(w) && (O = a[w], O != null))
            switch (w) {
              case "value":
                l = O;
                break;
              case "defaultValue":
                c = O;
                break;
              case "children":
                y = O;
                break;
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(91));
                break;
              default:
                $e(e, n, w, O, a, null);
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
                $e(e, n, j, l, a, null);
            }
        return;
      case "dialog":
        Ie("beforetoggle", e), Ie("toggle", e), Ie("cancel", e), Ie("close", e);
        break;
      case "iframe":
      case "object":
        Ie("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Es.length; l++)
          Ie(Es[l], e);
        break;
      case "image":
        Ie("error", e), Ie("load", e);
        break;
      case "details":
        Ie("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ie("error", e), Ie("load", e);
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
        for (H in a)
          if (a.hasOwnProperty(H) && (l = a[H], l != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, n));
              default:
                $e(e, n, H, l, a, null);
            }
        return;
      default:
        if (Uu(n)) {
          for ($ in a)
            a.hasOwnProperty($) && (l = a[$], l !== void 0 && wf(
              e,
              n,
              $,
              l,
              a,
              void 0
            ));
          return;
        }
    }
    for (O in a)
      a.hasOwnProperty(O) && (l = a[O], l != null && $e(e, n, O, l, a, null));
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
        var c = null, y = null, w = null, O = null, j = null, H = null, $ = null;
        for (G in a) {
          var W = a[G];
          if (a.hasOwnProperty(G) && W != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                j = W;
              default:
                l.hasOwnProperty(G) || $e(e, n, G, null, l, W);
            }
        }
        for (var Z in l) {
          var G = l[Z];
          if (W = a[Z], l.hasOwnProperty(Z) && (G != null || W != null))
            switch (Z) {
              case "type":
                y = G;
                break;
              case "name":
                c = G;
                break;
              case "checked":
                H = G;
                break;
              case "defaultChecked":
                $ = G;
                break;
              case "value":
                w = G;
                break;
              case "defaultValue":
                O = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, n));
                break;
              default:
                G !== W && $e(
                  e,
                  n,
                  Z,
                  G,
                  l,
                  W
                );
            }
        }
        Pu(
          e,
          w,
          O,
          j,
          H,
          $,
          y,
          c
        );
        return;
      case "select":
        G = w = O = Z = null;
        for (y in a)
          if (j = a[y], a.hasOwnProperty(y) && j != null)
            switch (y) {
              case "value":
                break;
              case "multiple":
                G = j;
              default:
                l.hasOwnProperty(y) || $e(
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
                O = y;
                break;
              case "multiple":
                w = y;
              default:
                y !== j && $e(
                  e,
                  n,
                  c,
                  y,
                  l,
                  j
                );
            }
        n = O, a = w, l = G, Z != null ? Ga(e, !!a, Z, !1) : !!l != !!a && (n != null ? Ga(e, !!a, n, !0) : Ga(e, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        G = Z = null;
        for (O in a)
          if (c = a[O], a.hasOwnProperty(O) && c != null && !l.hasOwnProperty(O))
            switch (O) {
              case "value":
                break;
              case "children":
                break;
              default:
                $e(e, n, O, null, l, c);
            }
        for (w in l)
          if (c = l[w], y = a[w], l.hasOwnProperty(w) && (c != null || y != null))
            switch (w) {
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
                c !== y && $e(e, n, w, c, l, y);
            }
        Eh(e, Z, G);
        return;
      case "option":
        for (var Ee in a)
          if (Z = a[Ee], a.hasOwnProperty(Ee) && Z != null && !l.hasOwnProperty(Ee))
            switch (Ee) {
              case "selected":
                e.selected = !1;
                break;
              default:
                $e(
                  e,
                  n,
                  Ee,
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
                $e(
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
        for (var Se in a)
          Z = a[Se], a.hasOwnProperty(Se) && Z != null && !l.hasOwnProperty(Se) && $e(e, n, Se, null, l, Z);
        for (H in l)
          if (Z = l[H], G = a[H], l.hasOwnProperty(H) && Z !== G && (Z != null || G != null))
            switch (H) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (Z != null)
                  throw Error(s(137, n));
                break;
              default:
                $e(
                  e,
                  n,
                  H,
                  Z,
                  l,
                  G
                );
            }
        return;
      default:
        if (Uu(n)) {
          for (var Qe in a)
            Z = a[Qe], a.hasOwnProperty(Qe) && Z !== void 0 && !l.hasOwnProperty(Qe) && wf(
              e,
              n,
              Qe,
              void 0,
              l,
              Z
            );
          for ($ in l)
            Z = l[$], G = a[$], !l.hasOwnProperty($) || Z === G || Z === void 0 && G === void 0 || wf(
              e,
              n,
              $,
              Z,
              l,
              G
            );
          return;
        }
    }
    for (var I in a)
      Z = a[I], a.hasOwnProperty(I) && Z != null && !l.hasOwnProperty(I) && $e(e, n, I, null, l, Z);
    for (W in l)
      Z = l[W], G = a[W], !l.hasOwnProperty(W) || Z === G || Z == null && G == null || $e(e, n, W, Z, l, G);
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
  function Zr(e) {
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
            var w = e.ownerDocument;
            if (a & 1 && ws(w.documentElement), a & 2 && ws(w.body), a & 4)
              for (a = w.head, ws(a), w = a.firstChild; w; ) {
                var O = w.nextSibling, j = w.nodeName;
                w[Ui] || j === "SCRIPT" || j === "STYLE" || j === "LINK" && w.rel.toLowerCase() === "stylesheet" || a.removeChild(w), w = O;
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
      if (e = Pn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function h_(e, n, a) {
    if (n === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !a || (e = Pn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mf(e) {
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
  function Pn(e) {
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
  var Df = null;
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
  function Mg(e, n, a) {
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
  var On = /* @__PURE__ */ new Map(), Dg = /* @__PURE__ */ new Set();
  function oo(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var yr = re.d;
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
    var e = yr.f(), n = Wl();
    return e || n;
  }
  function g_(e) {
    var n = Ha(e);
    n !== null && n.tag === 5 && n.type === "form" ? Kp(n) : yr.r(e);
  }
  var Si = typeof document > "u" ? null : document;
  function jg(e, n, a) {
    var l = Si;
    if (l && typeof n == "string" && n) {
      var c = xn(n);
      c = 'link[rel="' + e + '"][href="' + c + '"]', typeof a == "string" && (c += '[crossorigin="' + a + '"]'), Dg.has(c) || (Dg.add(c), e = { rel: e, crossOrigin: a, href: n }, l.querySelector(c) === null && (n = l.createElement("link"), jt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function v_(e) {
    yr.D(e), jg("dns-prefetch", e, null);
  }
  function y_(e, n) {
    yr.C(e, n), jg("preconnect", e, n);
  }
  function b_(e, n, a) {
    yr.L(e, n, a);
    var l = Si;
    if (l && e && n) {
      var c = 'link[rel="preload"][as="' + xn(n) + '"]';
      n === "image" && a && a.imageSrcSet ? (c += '[imagesrcset="' + xn(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (c += '[imagesizes="' + xn(
        a.imageSizes
      ) + '"]')) : c += '[href="' + xn(e) + '"]';
      var y = c;
      switch (n) {
        case "style":
          y = xi(e);
          break;
        case "script":
          y = Ei(e);
      }
      On.has(y) || (e = b(
        {
          rel: "preload",
          href: n === "image" && a && a.imageSrcSet ? void 0 : e,
          as: n
        },
        a
      ), On.set(y, e), l.querySelector(c) !== null || n === "style" && l.querySelector(As(y)) || n === "script" && l.querySelector(Ns(y)) || (n = l.createElement("link"), jt(n, "link", e), Nt(n), l.head.appendChild(n)));
    }
  }
  function __(e, n) {
    yr.m(e, n);
    var a = Si;
    if (a && e) {
      var l = n && typeof n.as == "string" ? n.as : "script", c = 'link[rel="modulepreload"][as="' + xn(l) + '"][href="' + xn(e) + '"]', y = c;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          y = Ei(e);
      }
      if (!On.has(y) && (e = b({ rel: "modulepreload", href: e }, n), On.set(y, e), a.querySelector(c) === null)) {
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
        l = a.createElement("link"), jt(l, "link", e), Nt(l), a.head.appendChild(l);
      }
    }
  }
  function S_(e, n, a) {
    yr.S(e, n, a);
    var l = Si;
    if (l && e) {
      var c = qa(l).hoistableStyles, y = xi(e);
      n = n || "default";
      var w = c.get(y);
      if (!w) {
        var O = { loading: 0, preload: null };
        if (w = l.querySelector(
          As(y)
        ))
          O.loading = 5;
        else {
          e = b(
            { rel: "stylesheet", href: e, "data-precedence": n },
            a
          ), (a = On.get(y)) && jf(e, a);
          var j = w = l.createElement("link");
          Nt(j), jt(j, "link", e), j._p = new Promise(function(H, $) {
            j.onload = H, j.onerror = $;
          }), j.addEventListener("load", function() {
            O.loading |= 1;
          }), j.addEventListener("error", function() {
            O.loading |= 2;
          }), O.loading |= 4, uo(w, n, l);
        }
        w = {
          type: "stylesheet",
          instance: w,
          count: 1,
          state: O
        }, c.set(y, w);
      }
    }
  }
  function x_(e, n) {
    yr.X(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), y = l.get(c);
      y || (y = a.querySelector(Ns(c)), y || (e = b({ src: e, async: !0 }, n), (n = On.get(c)) && Rf(e, n), y = a.createElement("script"), Nt(y), jt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, l.set(c, y));
    }
  }
  function E_(e, n) {
    yr.M(e, n);
    var a = Si;
    if (a && e) {
      var l = qa(a).hoistableScripts, c = Ei(e), y = l.get(c);
      y || (y = a.querySelector(Ns(c)), y || (e = b({ src: e, async: !0, type: "module" }, n), (n = On.get(c)) && Rf(e, n), y = a.createElement("script"), Nt(y), jt(y, "link", e), a.head.appendChild(y)), y = {
        type: "script",
        instance: y,
        count: 1,
        state: null
      }, l.set(c, y));
    }
  }
  function Rg(e, n, a, l) {
    var c = (c = X.current) ? oo(c) : null;
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
          ).hoistableStyles, w = y.get(e);
          if (w || (c = c.ownerDocument || c, w = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, y.set(e, w), (y = c.querySelector(
            As(e)
          )) && !y._p && (w.instance = y, w.state.loading = 5), On.has(e) || (a = {
            rel: "preload",
            as: "style",
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, On.set(e, a), y || C_(
            c,
            e,
            a,
            w.state
          ))), n && l === null)
            throw Error(s(528, ""));
          return w;
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
    return 'href="' + xn(e) + '"';
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
    }), jt(n, "link", a), Nt(n), e.head.appendChild(n));
  }
  function Ei(e) {
    return '[src="' + xn(e) + '"]';
  }
  function Ns(e) {
    return "script[async]" + e;
  }
  function Lg(e, n, a) {
    if (n.count++, n.instance === null)
      switch (n.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + xn(a.href) + '"]'
          );
          if (l)
            return n.instance = l, Nt(l), l;
          var c = b({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Nt(l), jt(l, "style", c), uo(l, a.precedence, e), n.instance = l;
        case "stylesheet":
          c = xi(a.href);
          var y = e.querySelector(
            As(c)
          );
          if (y)
            return n.state.loading |= 4, n.instance = y, Nt(y), y;
          l = zg(a), (c = On.get(c)) && jf(l, c), y = (e.ownerDocument || e).createElement("link"), Nt(y);
          var w = y;
          return w._p = new Promise(function(O, j) {
            w.onload = O, w.onerror = j;
          }), jt(y, "link", l), n.state.loading |= 4, uo(y, a.precedence, e), n.instance = y;
        case "script":
          return y = Ei(a.src), (c = e.querySelector(
            Ns(y)
          )) ? (n.instance = c, Nt(c), c) : (l = a, (c = On.get(y)) && (l = b({}, a), Rf(l, c)), e = e.ownerDocument || e, c = e.createElement("script"), Nt(c), jt(c, "link", l), e.head.appendChild(c), n.instance = c);
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
    ), c = l.length ? l[l.length - 1] : null, y = c, w = 0; w < l.length; w++) {
      var O = l[w];
      if (O.dataset.precedence === n) y = O;
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
      if (!(y[Ui] || y[It] || e === "link" && y.getAttribute("rel") === "stylesheet") && y.namespaceURI !== "http://www.w3.org/2000/svg") {
        var w = y.getAttribute(n) || "";
        w = e + w;
        var O = l.get(w);
        O ? O.push(y) : l.set(w, [y]);
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
          e = y._p, e !== null && typeof e == "object" && typeof e.then == "function" && (l.count++, l = fo.bind(l), e.then(l, l)), n.state.loading |= 4, n.instance = y, Nt(y);
          return;
        }
        y = e.ownerDocument || e, a = zg(a), (c = On.get(c)) && jf(a, c), y = y.createElement("link"), Nt(y);
        var w = y;
        w._p = new Promise(function(O, j) {
          w.onload = O, w.onerror = j;
        }), jt(y, "link", a), n.instance = y;
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
          var w = c[y];
          (w.nodeName === "LINK" || w.getAttribute("media") !== "not all") && (a.set(w.dataset.precedence, w), l = w);
        }
        l && a.set(null, l);
      }
      c = n.instance, w = c.getAttribute("data-precedence"), y = a.get(w) || l, y === l && a.set(null, c), a.set(w, c), this.count++, l = fo.bind(this), c.addEventListener("load", l), c.addEventListener("error", l), y ? y.parentNode.insertBefore(c, y.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(c, e.firstChild)), n.state.loading |= 4;
    }
  }
  var Os = {
    $$typeof: k,
    Provider: null,
    Consumer: null,
    _currentValue: he,
    _currentValue2: he,
    _threadCount: 0
  };
  function k_(e, n, a, l, c, y, w, O) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = ku(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = ku(0), this.hiddenUpdates = ku(null), this.identifierPrefix = l, this.onUncaughtError = c, this.onCaughtError = y, this.onRecoverableError = w, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = O, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ug(e, n, a, l, c, y, w, O, j, H, $, W) {
    return e = new k_(
      e,
      n,
      a,
      w,
      O,
      j,
      H,
      W
    ), n = 1, y === !0 && (n |= 24), y = ln(3, null, null, n), e.current = y, y.stateNode = e, n = mc(), n.refCount++, e.pooledCache = n, n.refCount++, y.memoizedState = {
      element: l,
      isDehydrated: a,
      cache: n
    }, bc(y), e;
  }
  function Hg(e) {
    return e ? (e = ei, e) : ei;
  }
  function qg(e, n, a, l, c, y) {
    c = Hg(c), l.context === null ? l.context = c : l.pendingContext = c, l = Mr(n), l.payload = { element: a }, y = y === void 0 ? null : y, y !== null && (l.callback = y), a = Dr(e, l, n), a !== null && (dn(a, e, n), is(a, e, n));
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
      n !== null && dn(n, e, 67108864), Lf(e, 67108864);
    }
  }
  var po = !0;
  function M_(e, n, a, l) {
    var c = B.T;
    B.T = null;
    var y = re.p;
    try {
      re.p = 2, If(e, n, a, l);
    } finally {
      re.p = y, B.T = c;
    }
  }
  function D_(e, n, a, l) {
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
                  var w = _n(y.pendingLanes);
                  if (w !== 0) {
                    var O = y;
                    for (O.pendingLanes |= 2, O.entangledLanes |= 2; w; ) {
                      var j = 1 << 31 - Ht(w);
                      O.entanglements[1] |= j, w &= ~j;
                    }
                    Jn(y), (Ve & 6) === 0 && (Jl = te() + 500, xs(0));
                  }
                }
                break;
              case 13:
                O = Wa(y, 2), O !== null && dn(O, y, 2), Wl(), Lf(y, 2);
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
        switch (ne()) {
          case de:
            return 2;
          case ce:
            return 8;
          case ue:
          case Ne:
            return 32;
          case Be:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Uf = !1, Gr = null, Vr = null, Yr = null, ks = /* @__PURE__ */ new Map(), Ms = /* @__PURE__ */ new Map(), Xr = [], j_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Vg(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Gr = null;
        break;
      case "dragenter":
      case "dragleave":
        Vr = null;
        break;
      case "mouseover":
      case "mouseout":
        Yr = null;
        break;
      case "pointerover":
      case "pointerout":
        ks.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ms.delete(n.pointerId);
    }
  }
  function Ds(e, n, a, l, c, y) {
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
        return Gr = Ds(
          Gr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "dragenter":
        return Vr = Ds(
          Vr,
          e,
          n,
          a,
          l,
          c
        ), !0;
      case "mouseover":
        return Yr = Ds(
          Yr,
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
          Ds(
            ks.get(y) || null,
            e,
            n,
            a,
            l,
            c
          )
        ), !0;
      case "gotpointercapture":
        return y = c.pointerId, Ms.set(
          y,
          Ds(
            Ms.get(y) || null,
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
                var l = fn();
                l = Mu(l);
                var c = Wa(a, l);
                c !== null && dn(c, a, l), Lf(a, l);
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
    Uf = !1, Gr !== null && go(Gr) && (Gr = null), Vr !== null && go(Vr) && (Vr = null), Yr !== null && go(Yr) && (Yr = null), ks.forEach(Xg), Ms.forEach(Xg);
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
    Gr !== null && vo(Gr, e), Vr !== null && vo(Vr, e), Yr !== null && vo(Yr, e), ks.forEach(n), Ms.forEach(n);
    for (var a = 0; a < Xr.length; a++) {
      var l = Xr[a];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Xr.length && (a = Xr[0], a.blockedOn === null); )
      Yg(a), a.blockedOn === null && Xr.shift();
    if (a = (e.ownerDocument || e).$$reactFormReplay, a != null)
      for (l = 0; l < a.length; l += 3) {
        var c = a[l], y = a[l + 1], w = c[$t] || null;
        if (typeof y == "function")
          w || $g(a);
        else if (w) {
          var O = null;
          if (y && y.hasAttribute("formAction")) {
            if (c = y, w = y[$t] || null)
              O = w.formAction;
            else if (Bf(c) !== null) continue;
          } else O = w.action;
          typeof O == "function" ? a[l + 1] = O : (a.splice(l, 3), l -= 3), $g(a);
        }
      }
  }
  function Hf(e) {
    this._internalRoot = e;
  }
  bo.prototype.render = Hf.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(s(409));
    var a = n.current, l = fn();
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
      for (var a = 0; a < Xr.length && n !== 0 && n < Xr[a].priority; a++) ;
      Xr.splice(a, 0, e), a === 0 && Yg(e);
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
    return e = h(n), e = e !== null ? v(e) : null, e = e === null ? null : e.stateNode, e;
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
        rt = _o.inject(
          L_
        ), Ge = _o;
      } catch {
      }
  }
  return Is.createRoot = function(e, n) {
    if (!o(e)) throw Error(s(299));
    var a = !1, l = "", c = dm, y = hm, w = pm, O = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (c = n.onUncaughtError), n.onCaughtError !== void 0 && (y = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (O = n.unstable_transitionCallbacks)), n = Ug(
      e,
      1,
      !1,
      null,
      null,
      a,
      l,
      c,
      y,
      w,
      O,
      null
    ), e[Ba] = n.current, Ef(e), new Hf(n);
  }, Is.hydrateRoot = function(e, n, a) {
    if (!o(e)) throw Error(s(299));
    var l = !1, c = "", y = dm, w = hm, O = pm, j = null, H = null;
    return a != null && (a.unstable_strictMode === !0 && (l = !0), a.identifierPrefix !== void 0 && (c = a.identifierPrefix), a.onUncaughtError !== void 0 && (y = a.onUncaughtError), a.onCaughtError !== void 0 && (w = a.onCaughtError), a.onRecoverableError !== void 0 && (O = a.onRecoverableError), a.unstable_transitionCallbacks !== void 0 && (j = a.unstable_transitionCallbacks), a.formState !== void 0 && (H = a.formState)), n = Ug(
      e,
      1,
      !0,
      n,
      a ?? null,
      l,
      c,
      y,
      w,
      O,
      j,
      H
    ), n.context = Hg(null), a = n.current, l = fn(), l = Mu(l), c = Mr(l), c.callback = null, Dr(a, c, l), a = l, n.current.lanes = a, Bi(n, a), Jn(n), e[Ba] = n.current, Ef(e), new bo(n);
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
      let h = function(v, b) {
        let _ = !1;
        for (const g of Object.keys(b))
          v[g] === void 0 ? (v[g] = b[g], _ = !0) : typeof b[g] == "object" && b[g] !== null && (v[g] = v[g] || {}, h(v[g], b[g]) && (_ = !0));
        return _;
      };
      s && u.version !== s && (p.version.changed = !0, p.version.new = s, u.version = s), o && o !== "*" && u.formatVersion !== o && (p.formatVersion.changed = !0, p.formatVersion.new = o, u.formatVersion = o), (h(u, this.defaultSettings) || p.version.changed || p.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(i)) {
      s && !u.version && (u.version = s, p.version.changed = !0, p.version.new = s), o && !u.formatVersion && (u.formatVersion = o, p.formatVersion.changed = !0, p.formatVersion.new = o);
      let h = structuredClone(u), v = u.formatVersion;
      try {
        let b;
        do {
          b = !1;
          let _ = i.find((g) => g.from === v);
          if (_ && _.to > v)
            h = await _.action(h), v = _.to, h.formatVersion = _.to, b = !0;
          else
            for (const g of i)
              if (g.from === "*" && g.to > v && v !== g.to) {
                h = await g.action(h), v = g.to, h.formatVersion = g.to, b = !0;
                break;
              }
        } while (b);
        if (v !== u.formatVersion) {
          p.formatVersion.changed = !0, p.formatVersion.new = v;
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
function Cr(t) {
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
function er(t) {
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
function gn(t) {
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
  if (er(t) || Cr(t))
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
  return Cr(t) ? t : t.split(".");
}
function _d(t) {
  return Cr(t) ? t.join(".") : t;
}
function M2(t, r) {
  let i = [], s = !1;
  const o = (u, f, p) => {
    if (gn(u))
      if (!f[p])
        i.push(u);
      else {
        let h = f[p];
        const v = u[h];
        if (!gn(v))
          return;
        if (p === f.length - 1 && (er(v) || a0(v) || E2(v)))
          i.push(x2(v));
        else if (Cr(v)) {
          s = !0;
          for (let b = 0, _ = v.length; b < _; b += 1)
            o(v[b], f, p + 1);
        } else f.length && o(v, f, p + 1);
      }
  };
  return o(t, er(r) ? r.split(".") : r, 0), s ? i : i[0];
}
const D2 = {
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
  getFn: M2,
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
var Ae = {
  ...j2,
  ...D2,
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
    getFn: r = Ae.getFn,
    fieldNormWeight: i = Ae.fieldNormWeight
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, er(this.docs[0]) ? this.docs.forEach((r, i) => {
      this._addString(r, i);
    }) : this.docs.forEach((r, i) => {
      this._addObject(r, i);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(r) {
    const i = this.size();
    er(r) ? this._addString(r, i) : this._addObject(r, i);
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
    if (!gn(r) || $f(r))
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
      if (gn(f)) {
        if (Cr(f)) {
          let p = [];
          const h = [{ nestedArrIndex: -1, value: f }];
          for (; h.length; ) {
            const { nestedArrIndex: v, value: b } = h.pop();
            if (gn(b))
              if (er(b) && !$f(b)) {
                let _ = {
                  v: b,
                  i: v,
                  n: this.norm.get(b)
                };
                p.push(_);
              } else Cr(b) && b.forEach((_, g) => {
                h.push({
                  nestedArrIndex: g,
                  value: _
                });
              });
          }
          s.$[u] = p;
        } else if (er(f) && !$f(f)) {
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
function o0(t, r, { getFn: i = Ae.getFn, fieldNormWeight: s = Ae.fieldNormWeight } = {}) {
  const o = new Yd({ getFn: i, fieldNormWeight: s });
  return o.setKeys(t.map(l0)), o.setSources(r), o.create(), o;
}
function P2(t, { getFn: r = Ae.getFn, fieldNormWeight: i = Ae.fieldNormWeight } = {}) {
  const { keys: s, records: o } = t, u = new Yd({ getFn: r, fieldNormWeight: i });
  return u.setKeys(s), u.setIndexRecords(o), u;
}
function So(t, {
  errors: r = 0,
  currentLocation: i = 0,
  expectedLocation: s = 0,
  distance: o = Ae.distance,
  ignoreLocation: u = Ae.ignoreLocation
} = {}) {
  const f = r / t.length;
  if (u)
    return f;
  const p = Math.abs(s - i);
  return o ? f + p / o : p ? 1 : f;
}
function B2(t = [], r = Ae.minMatchCharLength) {
  let i = [], s = -1, o = -1, u = 0;
  for (let f = t.length; u < f; u += 1) {
    let p = t[u];
    p && s === -1 ? s = u : !p && s !== -1 && (o = u - 1, o - s + 1 >= r && i.push([s, o]), s = -1);
  }
  return t[u - 1] && u - s >= r && i.push([s, u - 1]), i;
}
const ka = 32;
function U2(t, r, i, {
  location: s = Ae.location,
  distance: o = Ae.distance,
  threshold: u = Ae.threshold,
  findAllMatches: f = Ae.findAllMatches,
  minMatchCharLength: p = Ae.minMatchCharLength,
  includeMatches: h = Ae.includeMatches,
  ignoreLocation: v = Ae.ignoreLocation
} = {}) {
  if (r.length > ka)
    throw new Error(N2(ka));
  const b = r.length, _ = t.length, g = Math.max(0, Math.min(s, _));
  let m = u, d = g;
  const x = p > 1 || h, E = x ? Array(_) : [];
  let T;
  for (; (T = t.indexOf(r, d)) > -1; ) {
    let D = So(r, {
      currentLocation: T,
      expectedLocation: g,
      distance: o,
      ignoreLocation: v
    });
    if (m = Math.min(D, m), d = T + b, x) {
      let F = 0;
      for (; F < b; )
        E[T + F] = 1, F += 1;
    }
  }
  d = -1;
  let A = [], k = 1, C = b + _;
  const N = 1 << b - 1;
  for (let D = 0; D < b; D += 1) {
    let F = 0, q = C;
    for (; F < q; )
      So(r, {
        errors: D,
        currentLocation: g + q,
        expectedLocation: g,
        distance: o,
        ignoreLocation: v
      }) <= m ? F = q : C = q, q = Math.floor((C - F) / 2 + F);
    C = q;
    let P = Math.max(1, g - q + 1), V = f ? _ : Math.min(g + q, _) + b, Y = Array(V + 2);
    Y[V + 1] = (1 << D) - 1;
    for (let fe = V; fe >= P; fe -= 1) {
      let ge = fe - 1, B = i[t.charAt(ge)];
      if (x && (E[ge] = +!!B), Y[fe] = (Y[fe + 1] << 1 | 1) & B, D && (Y[fe] |= (A[fe + 1] | A[fe]) << 1 | 1 | A[fe + 1]), Y[fe] & N && (k = So(r, {
        errors: D,
        currentLocation: ge,
        expectedLocation: g,
        distance: o,
        ignoreLocation: v
      }), k <= m)) {
        if (m = k, d = ge, d <= g)
          break;
        P = Math.max(1, 2 * g - d);
      }
    }
    if (So(r, {
      errors: D + 1,
      currentLocation: g,
      expectedLocation: g,
      distance: o,
      ignoreLocation: v
    }) > m)
      break;
    A = Y;
  }
  const M = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, k)
  };
  if (x) {
    const D = B2(E, p);
    D.length ? h && (M.indices = D) : M.isMatch = !1;
  }
  return M;
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
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: v = Ae.ignoreDiacritics,
    ignoreLocation: b = Ae.ignoreLocation
  } = {}) {
    if (this.options = {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: v,
      ignoreLocation: b
    }, r = h ? r : r.toLowerCase(), r = v ? fu(r) : r, this.pattern = r, this.chunks = [], !this.pattern.length)
      return;
    const _ = (m, d) => {
      this.chunks.push({
        pattern: m,
        alphabet: H2(m),
        startIndex: d
      });
    }, g = this.pattern.length;
    if (g > ka) {
      let m = 0;
      const d = g % ka, x = g - d;
      for (; m < x; )
        _(this.pattern.substr(m, ka), m), m += ka;
      if (d) {
        const E = g - ka;
        _(this.pattern.substr(E), E);
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
      minMatchCharLength: v,
      ignoreLocation: b
    } = this.options;
    let _ = [], g = 0, m = !1;
    this.chunks.forEach(({ pattern: x, alphabet: E, startIndex: T }) => {
      const { isMatch: A, score: k, indices: C } = U2(r, x, E, {
        location: u + T,
        distance: f,
        threshold: p,
        findAllMatches: h,
        minMatchCharLength: v,
        includeMatches: o,
        ignoreLocation: b
      });
      A && (m = !0), g += k, A && C && (_ = [..._, ...C]);
    });
    let d = {
      isMatch: m,
      score: m ? g / this.chunks.length : 1
    };
    return m && o && (d.indices = _), d;
  }
}
class na {
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
class q2 extends na {
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
class F2 extends na {
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
class Z2 extends na {
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
class G2 extends na {
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
class V2 extends na {
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
class Y2 extends na {
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
class c0 extends na {
  constructor(r, {
    location: i = Ae.location,
    threshold: s = Ae.threshold,
    distance: o = Ae.distance,
    includeMatches: u = Ae.includeMatches,
    findAllMatches: f = Ae.findAllMatches,
    minMatchCharLength: p = Ae.minMatchCharLength,
    isCaseSensitive: h = Ae.isCaseSensitive,
    ignoreDiacritics: v = Ae.ignoreDiacritics,
    ignoreLocation: b = Ae.ignoreLocation
  } = {}) {
    super(r), this._bitapSearch = new u0(r, {
      location: i,
      threshold: s,
      distance: o,
      includeMatches: u,
      findAllMatches: f,
      minMatchCharLength: p,
      isCaseSensitive: h,
      ignoreDiacritics: v,
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
class f0 extends na {
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
      let h = !1, v = -1;
      for (; !h && ++v < vv; ) {
        const b = Sd[v];
        let _ = b.isMultiMatch(p);
        _ && (o.push(new b(_, r)), h = !0);
      }
      if (!h)
        for (v = -1; ++v < vv; ) {
          const b = Sd[v];
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
    isCaseSensitive: i = Ae.isCaseSensitive,
    ignoreDiacritics: s = Ae.ignoreDiacritics,
    includeMatches: o = Ae.includeMatches,
    minMatchCharLength: u = Ae.minMatchCharLength,
    ignoreLocation: f = Ae.ignoreLocation,
    findAllMatches: p = Ae.findAllMatches,
    location: h = Ae.location,
    threshold: v = Ae.threshold,
    distance: b = Ae.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: i,
      ignoreDiacritics: s,
      includeMatches: o,
      minMatchCharLength: u,
      findAllMatches: p,
      ignoreLocation: f,
      location: h,
      threshold: v,
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
    for (let v = 0, b = i.length; v < b; v += 1) {
      const _ = i[v];
      p.length = 0, f = 0;
      for (let g = 0, m = _.length; g < m; g += 1) {
        const d = _[g], { isMatch: x, indices: E, score: T } = d.search(r);
        if (x) {
          if (f += 1, h += T, s) {
            const A = d.constructor.type;
            J2.has(A) ? p = [...p, ...E] : p.push(E);
          }
        } else {
          h = 0, f = 0, p.length = 0;
          break;
        }
      }
      if (f) {
        let g = {
          isMatch: !0,
          score: h / f
        };
        return s && (g.indices = p), g;
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
}, wd = (t) => !!(t[du.AND] || t[du.OR]), eS = (t) => !!t[Cd.PATH], tS = (t) => !Cr(t) && i0(t) && !wd(t), yv = (t) => ({
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
      const h = f ? o[Cd.PATH] : u[0], v = f ? o[Cd.PATTERN] : o[h];
      if (!er(v))
        throw new Error(A2(h));
      const b = {
        keyId: _d(h),
        pattern: v
      };
      return i && (b.searcher = Ed(v, r)), b;
    }
    let p = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const v = o[h];
      Cr(v) && v.forEach((b) => {
        p.children.push(s(b));
      });
    }), p;
  };
  return wd(t) || (t = yv(t)), s(t);
}
function nS(t, { ignoreFieldNorm: r = Ae.ignoreFieldNorm }) {
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
  r.matches = [], gn(i) && i.forEach((s) => {
    if (!gn(s.indices) || !s.indices.length)
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
  includeMatches: i = Ae.includeMatches,
  includeScore: s = Ae.includeScore
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
    this.options = { ...Ae, ...i }, this.options.useExtendedSearch, this._keyStore = new k2(this.options.keys), this.setCollection(r, s);
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
    gn(r) && (this._docs.push(r), this._myIndex.add(r));
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
    let h = er(r) ? er(this._docs[0]) ? this._searchStringList(r) : this._searchObjectList(r) : this._searchLogical(r);
    return nS(h, { ignoreFieldNorm: p }), u && h.sort(f), a0(i) && i > -1 && (h = h.slice(0, i)), iS(h, this._docs, {
      includeMatches: s,
      includeScore: o
    });
  }
  _searchStringList(r) {
    const i = Ed(r, this.options), { records: s } = this._myIndex, o = [];
    return s.forEach(({ v: u, i: f, n: p }) => {
      if (!gn(u))
        return;
      const { isMatch: h, score: v, indices: b } = i.searchIn(u);
      h && o.push({
        item: u,
        idx: f,
        matches: [{ score: v, value: u, norm: p, indices: b }]
      });
    }), o;
  }
  _searchLogical(r) {
    const i = d0(r, this.options), s = (p, h, v) => {
      if (!p.children) {
        const { keyId: _, searcher: g } = p, m = this._findMatches({
          key: this._keyStore.get(_),
          value: this._myIndex.getValueForItemAtKeyId(h, _),
          searcher: g
        });
        return m && m.length ? [
          {
            idx: v,
            item: h,
            matches: m
          }
        ] : [];
      }
      const b = [];
      for (let _ = 0, g = p.children.length; _ < g; _ += 1) {
        const m = p.children[_], d = s(m, h, v);
        if (d.length)
          b.push(...d);
        else if (p.operator === du.AND)
          return [];
      }
      return b;
    }, o = this._myIndex.records, u = {}, f = [];
    return o.forEach(({ $: p, i: h }) => {
      if (gn(p)) {
        let v = s(i, p, h);
        v.length && (u[h] || (u[h] = { idx: h, item: p, matches: [] }, f.push(u[h])), v.forEach(({ matches: b }) => {
          u[h].matches.push(...b);
        }));
      }
    }), f;
  }
  _searchObjectList(r) {
    const i = Ed(r, this.options), { keys: s, records: o } = this._myIndex, u = [];
    return o.forEach(({ $: f, i: p }) => {
      if (!gn(f))
        return;
      let h = [];
      s.forEach((v, b) => {
        h.push(
          ...this._findMatches({
            key: v,
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
    if (!gn(i))
      return [];
    let o = [];
    if (Cr(i))
      i.forEach(({ v: u, i: f, n: p }) => {
        if (!gn(u))
          return;
        const { isMatch: h, score: v, indices: b } = s.searchIn(u);
        h && o.push({
          score: v,
          key: r,
          value: u,
          idx: f,
          norm: p,
          indices: b
        });
      });
    else {
      const { v: u, n: f } = i, { isMatch: p, score: h, indices: v } = s.searchIn(u);
      p && o.push({ score: h, key: r, value: u, norm: f, indices: v });
    }
    return o;
  }
}
Pi.version = "7.1.0";
Pi.createIndex = o0;
Pi.parseIndex = P2;
Pi.config = Ae;
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
        for await (const v of p())
          h = v, i != null && i.onEntry && await i.onEntry(u, v);
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
async function Oe(t, r, { escapeHtml: i = !0 } = {}) {
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
  quietImage: v,
  extensionPrompts: b,
  cyclePrompt: _,
  systemPromptOverride: g,
  jailbreakPromptOverride: m,
  personaDescription: d,
  messages: x,
  messageExamples: E
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
      quietImage: v,
      cyclePrompt: _,
      systemPromptOverride: g,
      jailbreakPromptOverride: m,
      personaDescription: d,
      extensionPrompts: b,
      messages: x,
      messageExamples: E
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
      const h = i[p], v = s[p];
      if (this.currentTokenCount + u + v <= this.maxContext)
        f.unshift(h), u += v;
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
  ignoreAuthorNote: v,
  ignoreWorldInfo: b,
  messageIndexesBetween: _
} = {}) {
  var g, m, d, x, E, T, A, k, C, N, M, D, F, q;
  if (!["textgenerationwebui", "openai"].includes(t))
    throw new Error("Unsupported API");
  const P = SillyTavern.getContext();
  let { description: V, personality: Y, persona: le, scenario: fe, mesExamples: ge, system: B, jailbreak: re } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : P.getCharacterCardFields({
    chid: r
  });
  const he = t === "textgenerationwebui" ? (g = P.getPresetManager("instruct")) == null ? void 0 : g.getCompletionPresetByName(s) : void 0, Re = !!(he != null && he.enabled);
  let R = bv(ge, Re);
  function K() {
    var ce, ue;
    if (typeof f == "number")
      return f;
    if (!f || f === "active" || !i)
      return Qf();
    if (typeof f == "number")
      return f;
    let Ne;
    if (t === "textgenerationwebui") {
      const Be = (ce = P.getPresetManager("textgenerationwebui")) == null ? void 0 : ce.getCompletionPresetByName(i);
      Ne = Be?.max_length;
    } else {
      const Be = (ue = P.getPresetManager("openai")) == null ? void 0 : ue.getCompletionPresetByName(i);
      Ne = Be?.openai_max_context;
    }
    return typeof Ne == "number" ? Ne : Qf();
  }
  let ie = [];
  const ae = K();
  if (ae <= 0)
    return { result: [], warnings: ie };
  const oe = new CS(ae), De = P.ToolManager.isToolCallingSupported(), X = _?.start ?? 0, ye = _ != null && _.end ? _.end + 1 : void 0;
  let be = X === -1 && ye === 0 ? [] : P.chat.slice(X, ye).filter((ce) => {
    var ue;
    return !ce.is_system || De && Array.isArray((ue = ce.extra) == null ? void 0 : ue.tool_invocations);
  });
  be = await Promise.all(
    be.map(async (ce, ue) => {
      var Ne, Be;
      let Ke = ce.mes, Zn = ce.is_user ? Wg.USER_INPUT : Wg.AI_OUTPUT, rt = { isPrompt: !0, depth: be.length - ue - 1 }, Ge = bS(Ke, Zn, rt);
      return Ge = await _S(ce, Ge), (Ne = ce?.extra) != null && Ne.append_title && (Be = ce?.extra) != null && Be.title && (Ge = `${Ge}

${ce.extra.title}`), {
        ...ce,
        mes: Ge,
        index: ue
      };
    })
  );
  const Fe = be.map((ce) => Z_ ? `${ce.name}: ${ce.mes}` : ce.mes).reverse(), { worldInfoString: nt, worldInfoBefore: ke, worldInfoAfter: ct, worldInfoExamples: zn, worldInfoDepth: At, anBefore: Yt, anAfter: L } = b ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await P.getWorldInfoPrompt(Fe, ae, !1);
  for (const ce of zn) {
    const ue = ce.content;
    if (ue.length === 0)
      continue;
    const Ne = xo(ue, Sr, Qr), Be = bv(Ne, Re);
    ce.position === G_.before ? R.unshift(...Be) : R.push(...Be);
  }
  function te() {
    const ce = [];
    for (let ue = be.length - 1; ue >= 0; ue--) {
      const Ne = be[ue], Be = Ne.name === "System" && !Ne.is_user ? "system" : Ne.is_user ? "user" : "assistant";
      ce.unshift({
        role: Be,
        content: p && Be != "system" ? `${Ne.name}: ${Ne.mes}` : Ne.mes,
        source: Ne
      });
    }
    oe.addMany(ce);
  }
  if (t === "textgenerationwebui") {
    const ce = [...R];
    R && (R = fS(R, Sr, Qr));
    const ue = (m = P.getPresetManager("sysprompt")) == null ? void 0 : m.getCompletionPresetByName(u);
    ue && (B = P.powerUserSettings.prefer_character_prompt && B ? B : xo(ue.content, Sr, Qr), B = Re ? dS(
      P.substituteParams(B, Sr, Qr, ue.content),
      he
    ) : B);
    const Ne = {
      description: V,
      personality: Y,
      persona: P.powerUserSettings.persona_description_position == Jg.IN_PROMPT ? le : "",
      scenario: fe,
      system: B,
      char: Qr,
      user: Sr,
      wiBefore: ke,
      wiAfter: ct,
      loreBefore: ke,
      loreAfter: ct,
      mesExamples: R.join(""),
      mesExamplesRaw: ce.join("")
    }, Be = (d = P.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(o);
    let Ke = hS(Ne, {
      customInstructSettings: he,
      customStoryString: Be?.story_string
    });
    Ke && oe.add({ role: "system", content: Ke, ignoreInstruct: !0 }), te();
  } else {
    let ce = function(qt) {
      const Xt = bn.find((Pa) => Pa.identifier === qt);
      if (Xt)
        return Xt;
      const ul = Ke.prompts.find((Pa) => Pa.identifier === qt);
      if (ul)
        return ul;
    }, ue = vS(be), Ne = yS(R);
    async function Be() {
      let [qt, Xt] = await gS(
        {
          name2: Qr,
          charDescription: V,
          charPersonality: Y,
          Scenario: fe,
          worldInfoBefore: ke,
          worldInfoAfter: ct,
          extensionPrompts: P.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: B,
          jailbreakPromptOverride: re,
          personaDescription: le,
          messages: ue,
          messageExamples: Ne
        },
        !1
      );
      oe.addMany(qt);
    }
    if (!i)
      return ie.push("No preset name provided. Using default preset."), await Be(), { result: oe.getMessages(), warnings: ie };
    const Ke = (x = P.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(i);
    if (!Ke)
      return console.warn(`Preset not found: ${i}. Using current preset.`), ie.push(`Preset not found: ${i}. Using current preset.`), Be(), { result: oe.getMessages(), warnings: ie };
    let Zn = (E = Ke.prompt_order) == null ? void 0 : E.find((qt) => qt.character_id === yn);
    if (!Zn && Ke.prompt_order && Ke.prompt_order.length > 0 && (Zn = Ke.prompt_order[0]), !Zn)
      return console.warn(`No prompt order found for preset: ${i}. Using current preset.`), ie.push(`No prompt order found for preset: ${i}. Using current preset.`), Be(), { result: oe.getMessages(), warnings: ie };
    const rt = fe && Ke.scenario_format ? P.substituteParams(Ke.scenario_format) : "", Ge = Y && Ke.personality_format ? P.substituteParams(Ke.personality_format) : "", Gn = P.substituteParams(Ke.group_nudge_prompt), Ht = Ke.impersonation_prompt ? P.substituteParams(Ke.impersonation_prompt) : "", bn = [];
    b || bn.push(
      {
        role: "system",
        content: _v(ke, { wiFormat: Ke.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: _v(ct, { wiFormat: Ke.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || bn.push(
      { role: "system", content: V, identifier: "charDescription" },
      { role: "system", content: Ge, identifier: "charPersonality" },
      { role: "system", content: rt, identifier: "scenario" }
    ), bn.push(
      { role: "system", content: Ht, identifier: "impersonate" },
      { role: "system", content: Gn, identifier: "groupNudge" }
    );
    const ia = P.extensionPrompts["1_memory"];
    ia && ia.value && bn.push({
      role: wa(ia.role),
      content: ia.value,
      identifier: "summary",
      position: Ps(ia.position)
    });
    const sa = P.extensionPrompts["2_floating_prompt"];
    !v && sa && sa.value && bn.push({
      role: wa(sa.role),
      content: sa.value,
      identifier: "authorsNote",
      position: Ps(sa.position)
    });
    const rr = P.extensionPrompts["3_vectors"];
    rr && rr.value && bn.push({
      role: "system",
      content: rr.value,
      identifier: "vectorsMemory",
      position: Ps(rr.position)
    });
    const Vn = P.extensionPrompts["4_vectors_data_bank"];
    Vn && Vn.value && bn.push({
      role: wa(Vn.role),
      content: Vn.value,
      identifier: "vectorsDataBank",
      position: Ps(Vn.position)
    });
    const _n = P.extensionPrompts.chromadb;
    _n && _n.value && bn.push({
      role: "system",
      content: _n.value,
      identifier: "smartContext",
      position: Ps(_n.position)
    }), !h && P.powerUserSettings.persona_description && P.powerUserSettings.persona_description_position === Jg.IN_PROMPT && bn.push({
      role: "system",
      content: P.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Zn.order.forEach((qt) => {
      if (!qt.enabled)
        return;
      const Xt = ce(qt.identifier);
      if (Xt && Xt.content) {
        oe.add({
          role: Xt.role ?? "system",
          content: P.substituteParams(Xt.content)
        });
        return;
      }
      qt.identifier === "chatHistory" && te();
    });
  }
  const ne = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const ce in P.extensionPrompts)
    if (Object.hasOwn(P.extensionPrompts, ce)) {
      const ue = P.extensionPrompts[ce];
      if (ne.includes(ce) || !P.extensionPrompts[ce].value || ![Ca.BEFORE_PROMPT, Ca.IN_PROMPT].includes(ue.position) || typeof ue.filter == "function" && !await ue.filter()) continue;
      const Ne = {
        role: wa(ue.role) ?? "system",
        content: ue.value
      };
      if (ue.position === Ca.BEFORE_PROMPT)
        oe.insert(ue.depth, Ne);
      else if (ue.position === Ca.IN_PROMPT) {
        const Be = oe.getMessages();
        oe.insert(Be.length - ue.depth, Ne);
      }
    }
  for (const ce of At) {
    const ue = oe.getMessages();
    oe.insert(ue.length - ce.depth, {
      role: wa(ce.role),
      content: ce.entries.join(`
`)
    });
  }
  if (!h) {
    const ce = mS(xr, Number(yn));
    if (xr && Array.isArray(ce) && ce.length > 0)
      ce.filter((ue) => ue.text).forEach((ue, Ne) => {
        const Be = oe.getMessages();
        oe.insert(Be.length - ue.depth, { role: ue.role, content: ue.text });
      });
    else {
      const ue = xo(
        (N = (C = (k = (A = (T = P.characters[yn]) == null ? void 0 : T.data) == null ? void 0 : A.extensions) == null ? void 0 : k.depth_prompt) == null ? void 0 : C.prompt) == null ? void 0 : N.trim(),
        Sr,
        Qr
      ) || "";
      if (ue) {
        const Ne = F_, Be = ((q = (F = (D = (M = P.characters[yn]) == null ? void 0 : M.data) == null ? void 0 : D.extensions) == null ? void 0 : F.depth_prompt) == null ? void 0 : q.role) ?? q_, Ke = oe.getMessages();
        oe.insert(Ke.length - Ne, {
          role: wa(Be),
          content: ue
        });
      }
    }
  }
  let de = -1;
  if (!v) {
    const ce = pS();
    if (ce.prompt) {
      ce.prompt = xo(ce.prompt, Sr, Qr);
      const ue = { role: wa(ce.role), content: ce.prompt };
      switch (ce.position) {
        case Ca.IN_PROMPT:
          oe.insert(1, ue), de = 1;
          break;
        case Ca.IN_CHAT:
          de = oe.getMessages().length - ce.depth, oe.insert(de, ue);
          break;
        case Ca.BEFORE_PROMPT:
          oe.addFront(ue), de = 0;
          break;
      }
    }
  }
  return de >= 0 && (Yt.length > 0 && (oe.insert(de, { role: "system", content: Yt.join(`
`) }), de++), L.length > 0 && oe.insert(de + 1, { role: "system", content: L.join(`
`) })), { result: oe.getMessages(), warnings: ie };
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
function nr(t) {
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
function wr() {
  return wr = Object.assign || function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var i = arguments[r];
      for (var s in i)
        Object.prototype.hasOwnProperty.call(i, s) && (t[s] = i[s]);
    }
    return t;
  }, wr.apply(this, arguments);
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
function Er(t) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(t);
}
var Ar = Er(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), il = Er(/Edge/i), xv = Er(/firefox/i), Js = Er(/safari/i) && !Er(/chrome/i) && !Er(/android/i), Xd = Er(/iP(ad|od|hone)/i), p0 = Er(/chrome/i) && Er(/android/i), m0 = {
  capture: !1,
  passive: !1
};
function Ue(t, r, i) {
  t.addEventListener(r, i, !Ar && m0);
}
function Pe(t, r, i) {
  t.removeEventListener(r, i, !Ar && m0);
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
function Hn(t, r, i, s) {
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
function pn(t, r, i) {
  if (t && r)
    if (t.classList)
      t.classList[i ? "add" : "remove"](r);
    else {
      var s = (" " + t.className + " ").replace(Ev, " ").replace(" " + r + " ", " ");
      t.className = (s + (i ? " " + r : "")).replace(Ev, " ");
    }
}
function Ce(t, r, i) {
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
      var s = Ce(t, "transform");
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
function tr() {
  var t = document.scrollingElement;
  return t || document.documentElement;
}
function _t(t, r, i, s, o) {
  if (!(!t.getBoundingClientRect && t !== window)) {
    var u, f, p, h, v, b, _;
    if (t !== window && t.parentNode && t !== tr() ? (u = t.getBoundingClientRect(), f = u.top, p = u.left, h = u.bottom, v = u.right, b = u.height, _ = u.width) : (f = 0, p = 0, h = window.innerHeight, v = window.innerWidth, b = window.innerHeight, _ = window.innerWidth), (r || i) && t !== window && (o = o || t.parentNode, !Ar))
      do
        if (o && o.getBoundingClientRect && (Ce(o, "transform") !== "none" || i && Ce(o, "position") !== "static")) {
          var g = o.getBoundingClientRect();
          f -= g.top + parseInt(Ce(o, "border-top-width")), p -= g.left + parseInt(Ce(o, "border-left-width")), h = f + u.height, v = p + u.width;
          break;
        }
      while (o = o.parentNode);
    if (s && t !== window) {
      var m = Ri(o || t), d = m && m.a, x = m && m.d;
      m && (f /= x, p /= d, _ /= d, b /= x, h = f + b, v = p + _);
    }
    return {
      top: f,
      left: p,
      bottom: h,
      right: v,
      width: _,
      height: b
    };
  }
}
function Cv(t, r, i) {
  for (var s = ta(t, !0), o = _t(t)[r]; s; ) {
    var u = _t(s)[i], f = void 0;
    if (f = o >= u, !f) return s;
    if (s === tr()) break;
    s = ta(s, !1);
  }
  return !1;
}
function Ii(t, r, i, s) {
  for (var o = 0, u = 0, f = t.children; u < f.length; ) {
    if (f[u].style.display !== "none" && f[u] !== we.ghost && (s || f[u] !== we.dragged) && Hn(f[u], i.draggable, t, !1)) {
      if (o === r)
        return f[u];
      o++;
    }
    u++;
  }
  return null;
}
function $d(t, r) {
  for (var i = t.lastElementChild; i && (i === we.ghost || Ce(i, "display") === "none" || r && !hu(i, r)); )
    i = i.previousElementSibling;
  return i || null;
}
function Mn(t, r) {
  var i = 0;
  if (!t || !t.parentNode)
    return -1;
  for (; t = t.previousElementSibling; )
    t.nodeName.toUpperCase() !== "TEMPLATE" && t !== we.clone && (!r || hu(t, r)) && i++;
  return i;
}
function wv(t) {
  var r = 0, i = 0, s = tr();
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
function ta(t, r) {
  if (!t || !t.getBoundingClientRect) return tr();
  var i = t, s = !1;
  do
    if (i.clientWidth < i.scrollWidth || i.clientHeight < i.scrollHeight) {
      var o = Ce(i);
      if (i.clientWidth < i.scrollWidth && (o.overflowX == "auto" || o.overflowX == "scroll") || i.clientHeight < i.scrollHeight && (o.overflowY == "auto" || o.overflowY == "scroll")) {
        if (!i.getBoundingClientRect || i === document.body) return tr();
        if (s || r) return i;
        s = !0;
      }
    }
  while (i = i.parentNode);
  return tr();
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
function MS() {
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
    if (!(!Hn(o, r.draggable, t, !1) || o.animated || o === i)) {
      var v = _t(o);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, v.left), s.top = Math.min((f = s.top) !== null && f !== void 0 ? f : 1 / 0, v.top), s.right = Math.max((p = s.right) !== null && p !== void 0 ? p : -1 / 0, v.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, v.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var nn = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function DS() {
  var t = [], r;
  return {
    captureAnimationState: function() {
      if (t = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(o) {
          if (!(Ce(o, "display") === "none" || o === we.ghost)) {
            t.push({
              target: o,
              rect: _t(o)
            });
            var u = nr({}, t[t.length - 1].rect);
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
        var h = 0, v = p.target, b = v.fromRect, _ = _t(v), g = v.prevFromRect, m = v.prevToRect, d = p.rect, x = Ri(v, !0);
        x && (_.top -= x.f, _.left -= x.e), v.toRect = _, v.thisAnimationDuration && Jf(g, _) && !Jf(b, _) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - _.top) / (d.left - _.left) === (b.top - _.top) / (b.left - _.left) && (h = RS(d, g, m, o.options)), Jf(_, b) || (v.prevFromRect = b, v.prevToRect = _, h || (h = o.options.animation), o.animate(v, d, _, h)), h && (u = !0, f = Math.max(f, h), clearTimeout(v.animationResetTimer), v.animationResetTimer = setTimeout(function() {
          v.animationTime = 0, v.prevFromRect = null, v.fromRect = null, v.prevToRect = null, v.thisAnimationDuration = null;
        }, h), v.thisAnimationDuration = h);
      }), clearTimeout(r), u ? r = setTimeout(function() {
        typeof s == "function" && s();
      }, f) : typeof s == "function" && s(), t = [];
    },
    animate: function(s, o, u, f) {
      if (f) {
        Ce(s, "transition", ""), Ce(s, "transform", "");
        var p = Ri(this.el), h = p && p.a, v = p && p.d, b = (o.left - u.left) / (h || 1), _ = (o.top - u.top) / (v || 1);
        s.animatingX = !!b, s.animatingY = !!_, Ce(s, "transform", "translate3d(" + b + "px," + _ + "px,0)"), this.forRepaintDummy = jS(s), Ce(s, "transition", "transform " + f + "ms" + (this.options.easing ? " " + this.options.easing : "")), Ce(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Ce(s, "transition", ""), Ce(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
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
      i[f.pluginName] && (i[f.pluginName][u] && i[f.pluginName][u](nr({
        sortable: i
      }, s)), i.options[f.pluginName] && i[f.pluginName][r] && i[f.pluginName][r](nr({
        sortable: i
      }, s)));
    });
  },
  initializePlugins: function(r, i, s, o) {
    wi.forEach(function(p) {
      var h = p.pluginName;
      if (!(!r.options[h] && !p.initializeByDefault)) {
        var v = new p(r, i, r.options);
        v.sortable = r, v.options = r.options, r[h] = v, wr(s, v.defaults);
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
      typeof o.eventProperties == "function" && wr(s, o.eventProperties.call(i[o.pluginName], r));
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
  var r = t.sortable, i = t.rootEl, s = t.name, o = t.targetEl, u = t.cloneEl, f = t.toEl, p = t.fromEl, h = t.oldIndex, v = t.newIndex, b = t.oldDraggableIndex, _ = t.newDraggableIndex, g = t.originalEvent, m = t.putSortable, d = t.extraEventProperties;
  if (r = r || i && i[nn], !!r) {
    var x, E = r.options, T = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !Ar && !il ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = f || i, x.from = p || i, x.item = o || i, x.clone = u, x.oldIndex = h, x.newIndex = v, x.oldDraggableIndex = b, x.newDraggableIndex = _, x.originalEvent = g, x.pullMode = m ? m.lastPutMode : void 0;
    var A = nr(nr({}, d), sl.getEventProperties(s, r));
    for (var k in A)
      x[k] = A[k];
    i && i.dispatchEvent(x), E[T] && E[T].call(r, x);
  }
}
var LS = ["evt"], en = function(r, i) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, o = s.evt, u = NS(s, LS);
  sl.pluginEvent.bind(we)(r, i, nr({
    dragEl: se,
    parentEl: ht,
    ghostEl: Te,
    rootEl: it,
    nextEl: Ta,
    lastDownEl: su,
    cloneEl: ot,
    cloneHidden: ea,
    dragStarted: Ys,
    putSortable: Rt,
    activeSortable: we.active,
    originalEvent: o,
    oldIndex: Di,
    oldDraggableIndex: Ws,
    newIndex: mn,
    newDraggableIndex: Wr,
    hideGhostForTarget: w0,
    unhideGhostForTarget: A0,
    cloneNowHidden: function() {
      ea = !0;
    },
    cloneNowShown: function() {
      ea = !1;
    },
    dispatchSortableEvent: function(p) {
      Zt({
        sortable: i,
        name: p,
        originalEvent: o
      });
    }
  }, u));
};
function Zt(t) {
  zS(nr({
    putSortable: Rt,
    cloneEl: ot,
    targetEl: se,
    rootEl: it,
    oldIndex: Di,
    oldDraggableIndex: Ws,
    newIndex: mn,
    newDraggableIndex: Wr
  }, t));
}
var se, ht, Te, it, Ta, su, ot, ea, Di, mn, Ws, Wr, Co, Rt, Mi = !1, pu = !1, mu = [], Aa, Bn, Wf, ed, Av, Nv, Ys, Ai, el, tl = !1, wo = !1, lu, Ut, td = [], Ad = !1, gu = [], wu = typeof document < "u", Ao = Xd, Tv = il || Ar ? "cssFloat" : "float", IS = wu && !p0 && !Xd && "draggable" in document.createElement("div"), x0 = (function() {
  if (wu) {
    if (Ar)
      return !1;
    var t = document.createElement("x");
    return t.style.cssText = "pointer-events:auto", t.style.pointerEvents === "auto";
  }
})(), E0 = function(r, i) {
  var s = Ce(r), o = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = Ii(r, 0, i), f = Ii(r, 1, i), p = u && Ce(u), h = f && Ce(f), v = p && parseInt(p.marginLeft) + parseInt(p.marginRight) + _t(u).width, b = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + _t(f).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && p.float && p.float !== "none") {
    var _ = p.float === "left" ? "left" : "right";
    return f && (h.clear === "both" || h.clear === _) ? "vertical" : "horizontal";
  }
  return u && (p.display === "block" || p.display === "flex" || p.display === "table" || p.display === "grid" || v >= o && s[Tv] === "none" || f && s[Tv] === "none" && v + b > o) ? "vertical" : "horizontal";
}, PS = function(r, i, s) {
  var o = s ? r.left : r.top, u = s ? r.right : r.bottom, f = s ? r.width : r.height, p = s ? i.left : i.top, h = s ? i.right : i.bottom, v = s ? i.width : i.height;
  return o === p || u === h || o + f / 2 === p + v / 2;
}, BS = function(r, i) {
  var s;
  return mu.some(function(o) {
    var u = o[nn].options.emptyInsertThreshold;
    if (!(!u || $d(o))) {
      var f = _t(o), p = r >= f.left - u && r <= f.right + u, h = i >= f.top - u && i <= f.bottom + u;
      if (p && h)
        return s = o;
    }
  }), s;
}, C0 = function(r) {
  function i(u, f) {
    return function(p, h, v, b) {
      var _ = p.options.group.name && h.options.group.name && p.options.group.name === h.options.group.name;
      if (u == null && (f || _))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (f && u === "clone")
        return u;
      if (typeof u == "function")
        return i(u(p, h, v, b), f)(p, h, v, b);
      var g = (f ? p : h).options.group.name;
      return u === !0 || typeof u == "string" && u === g || u.join && u.indexOf(g) > -1;
    };
  }
  var s = {}, o = r.group;
  (!o || iu(o) != "object") && (o = {
    name: o
  }), s.name = o.name, s.checkPull = i(o.pull, !0), s.checkPut = i(o.put), s.revertClone = o.revertClone, r.group = s;
}, w0 = function() {
  !x0 && Te && Ce(Te, "display", "none");
}, A0 = function() {
  !x0 && Te && Ce(Te, "display", "");
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
      s.target = s.rootEl = i, s.preventDefault = void 0, s.stopPropagation = void 0, i[nn]._onDragOver(s);
    }
  }
}, US = function(r) {
  se && se.parentNode[nn]._isOutsideThisEl(r.target);
};
function we(t, r) {
  if (!(t && t.nodeType && t.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(t));
  this.el = t, this.options = r = wr({}, r), t[nn] = this;
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
    supportPointer: we.supportPointer !== !1 && "PointerEvent" in window && (!Js || Xd),
    emptyInsertThreshold: 5
  };
  sl.initializePlugins(this, t, i);
  for (var s in i)
    !(s in r) && (r[s] = i[s]);
  C0(r);
  for (var o in this)
    o.charAt(0) === "_" && typeof this[o] == "function" && (this[o] = this[o].bind(this));
  this.nativeDraggable = r.forceFallback ? !1 : IS, this.nativeDraggable && (this.options.touchStartThreshold = 1), r.supportPointer ? Ue(t, "pointerdown", this._onTapStart) : (Ue(t, "mousedown", this._onTapStart), Ue(t, "touchstart", this._onTapStart)), this.nativeDraggable && (Ue(t, "dragover", this), Ue(t, "dragenter", this)), mu.push(this.el), r.store && r.store.get && this.sort(r.store.get(this) || []), wr(this, DS());
}
we.prototype = /** @lends Sortable.prototype */
{
  constructor: we,
  _isOutsideThisEl: function(r) {
    !this.el.contains(r) && r !== this.el && (Ai = null);
  },
  _getDirection: function(r, i) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, r, i, se) : this.options.direction;
  },
  _onTapStart: function(r) {
    if (r.cancelable) {
      var i = this, s = this.el, o = this.options, u = o.preventOnFilter, f = r.type, p = r.touches && r.touches[0] || r.pointerType && r.pointerType === "touch" && r, h = (p || r).target, v = r.target.shadowRoot && (r.path && r.path[0] || r.composedPath && r.composedPath()[0]) || h, b = o.filter;
      if (XS(s), !se && !(/mousedown|pointerdown/.test(f) && r.button !== 0 || o.disabled) && !v.isContentEditable && !(!this.nativeDraggable && Js && h && h.tagName.toUpperCase() === "SELECT") && (h = Hn(h, o.draggable, s, !1), !(h && h.animated) && su !== h)) {
        if (Di = Mn(h), Ws = Mn(h, o.draggable), typeof b == "function") {
          if (b.call(this, r, h, this)) {
            Zt({
              sortable: i,
              rootEl: v,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), en("filter", i, {
              evt: r
            }), u && r.preventDefault();
            return;
          }
        } else if (b && (b = b.split(",").some(function(_) {
          if (_ = Hn(v, _.trim(), s, !1), _)
            return Zt({
              sortable: i,
              rootEl: _,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), en("filter", i, {
              evt: r
            }), !0;
        }), b)) {
          u && r.preventDefault();
          return;
        }
        o.handle && !Hn(v, o.handle, s, !1) || this._prepareDragStart(r, p, h);
      }
    }
  },
  _prepareDragStart: function(r, i, s) {
    var o = this, u = o.el, f = o.options, p = u.ownerDocument, h;
    if (s && !se && s.parentNode === u) {
      var v = _t(s);
      if (it = u, se = s, ht = se.parentNode, Ta = se.nextSibling, su = s, Co = f.group, we.dragged = se, Aa = {
        target: se,
        clientX: (i || r).clientX,
        clientY: (i || r).clientY
      }, Av = Aa.clientX - v.left, Nv = Aa.clientY - v.top, this._lastX = (i || r).clientX, this._lastY = (i || r).clientY, se.style["will-change"] = "all", h = function() {
        if (en("delayEnded", o, {
          evt: r
        }), we.eventCanceled) {
          o._onDrop();
          return;
        }
        o._disableDelayedDragEvents(), !xv && o.nativeDraggable && (se.draggable = !0), o._triggerDragStart(r, i), Zt({
          sortable: o,
          name: "choose",
          originalEvent: r
        }), pn(se, f.chosenClass, !0);
      }, f.ignore.split(",").forEach(function(b) {
        v0(se, b.trim(), nd);
      }), Ue(p, "dragover", Na), Ue(p, "mousemove", Na), Ue(p, "touchmove", Na), f.supportPointer ? (Ue(p, "pointerup", o._onDrop), !this.nativeDraggable && Ue(p, "pointercancel", o._onDrop)) : (Ue(p, "mouseup", o._onDrop), Ue(p, "touchend", o._onDrop), Ue(p, "touchcancel", o._onDrop)), xv && this.nativeDraggable && (this.options.touchStartThreshold = 4, se.draggable = !0), en("delayStart", this, {
        evt: r
      }), f.delay && (!f.delayOnTouchOnly || i) && (!this.nativeDraggable || !(il || Ar))) {
        if (we.eventCanceled) {
          this._onDrop();
          return;
        }
        f.supportPointer ? (Ue(p, "pointerup", o._disableDelayedDrag), Ue(p, "pointercancel", o._disableDelayedDrag)) : (Ue(p, "mouseup", o._disableDelayedDrag), Ue(p, "touchend", o._disableDelayedDrag), Ue(p, "touchcancel", o._disableDelayedDrag)), Ue(p, "mousemove", o._delayedDragTouchMoveHandler), Ue(p, "touchmove", o._delayedDragTouchMoveHandler), f.supportPointer && Ue(p, "pointermove", o._delayedDragTouchMoveHandler), o._dragStartTimer = setTimeout(h, f.delay);
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
    Pe(r, "mouseup", this._disableDelayedDrag), Pe(r, "touchend", this._disableDelayedDrag), Pe(r, "touchcancel", this._disableDelayedDrag), Pe(r, "pointerup", this._disableDelayedDrag), Pe(r, "pointercancel", this._disableDelayedDrag), Pe(r, "mousemove", this._delayedDragTouchMoveHandler), Pe(r, "touchmove", this._delayedDragTouchMoveHandler), Pe(r, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(r, i) {
    i = i || r.pointerType == "touch" && r, !this.nativeDraggable || i ? this.options.supportPointer ? Ue(document, "pointermove", this._onTouchMove) : i ? Ue(document, "touchmove", this._onTouchMove) : Ue(document, "mousemove", this._onTouchMove) : (Ue(se, "dragend", this), Ue(it, "dragstart", this._onDragStart));
    try {
      document.selection ? ou(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(r, i) {
    if (Mi = !1, it && se) {
      en("dragStarted", this, {
        evt: i
      }), this.nativeDraggable && Ue(document, "dragover", US);
      var s = this.options;
      !r && pn(se, s.dragClass, !1), pn(se, s.ghostClass, !0), we.active = this, r && this._appendGhost(), Zt({
        sortable: this,
        name: "start",
        originalEvent: i
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Bn) {
      this._lastX = Bn.clientX, this._lastY = Bn.clientY, w0();
      for (var r = document.elementFromPoint(Bn.clientX, Bn.clientY), i = r; r && r.shadowRoot && (r = r.shadowRoot.elementFromPoint(Bn.clientX, Bn.clientY), r !== i); )
        i = r;
      if (se.parentNode[nn]._isOutsideThisEl(r), i)
        do {
          if (i[nn]) {
            var s = void 0;
            if (s = i[nn]._onDragOver({
              clientX: Bn.clientX,
              clientY: Bn.clientY,
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
      var i = this.options, s = i.fallbackTolerance, o = i.fallbackOffset, u = r.touches ? r.touches[0] : r, f = Te && Ri(Te, !0), p = Te && f && f.a, h = Te && f && f.d, v = Ao && Ut && wv(Ut), b = (u.clientX - Aa.clientX + o.x) / (p || 1) + (v ? v[0] - td[0] : 0) / (p || 1), _ = (u.clientY - Aa.clientY + o.y) / (h || 1) + (v ? v[1] - td[1] : 0) / (h || 1);
      if (!we.active && !Mi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(r, !0);
      }
      if (Te) {
        f ? (f.e += b - (Wf || 0), f.f += _ - (ed || 0)) : f = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: b,
          f: _
        };
        var g = "matrix(".concat(f.a, ",").concat(f.b, ",").concat(f.c, ",").concat(f.d, ",").concat(f.e, ",").concat(f.f, ")");
        Ce(Te, "webkitTransform", g), Ce(Te, "mozTransform", g), Ce(Te, "msTransform", g), Ce(Te, "transform", g), Wf = b, ed = _, Bn = u;
      }
      r.cancelable && r.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Te) {
      var r = this.options.fallbackOnBody ? document.body : it, i = _t(se, !0, Ao, !0, r), s = this.options;
      if (Ao) {
        for (Ut = r; Ce(Ut, "position") === "static" && Ce(Ut, "transform") === "none" && Ut !== document; )
          Ut = Ut.parentNode;
        Ut !== document.body && Ut !== document.documentElement ? (Ut === document && (Ut = tr()), i.top += Ut.scrollTop, i.left += Ut.scrollLeft) : Ut = tr(), td = wv(Ut);
      }
      Te = se.cloneNode(!0), pn(Te, s.ghostClass, !1), pn(Te, s.fallbackClass, !0), pn(Te, s.dragClass, !0), Ce(Te, "transition", ""), Ce(Te, "transform", ""), Ce(Te, "box-sizing", "border-box"), Ce(Te, "margin", 0), Ce(Te, "top", i.top), Ce(Te, "left", i.left), Ce(Te, "width", i.width), Ce(Te, "height", i.height), Ce(Te, "opacity", "0.8"), Ce(Te, "position", Ao ? "absolute" : "fixed"), Ce(Te, "zIndex", "100000"), Ce(Te, "pointerEvents", "none"), we.ghost = Te, r.appendChild(Te), Ce(Te, "transform-origin", Av / parseInt(Te.style.width) * 100 + "% " + Nv / parseInt(Te.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(r, i) {
    var s = this, o = r.dataTransfer, u = s.options;
    if (en("dragStart", this, {
      evt: r
    }), we.eventCanceled) {
      this._onDrop();
      return;
    }
    en("setupClone", this), we.eventCanceled || (ot = _0(se), ot.removeAttribute("id"), ot.draggable = !1, ot.style["will-change"] = "", this._hideClone(), pn(ot, this.options.chosenClass, !1), we.clone = ot), s.cloneId = ou(function() {
      en("clone", s), !we.eventCanceled && (s.options.removeCloneOnHide || it.insertBefore(ot, se), s._hideClone(), Zt({
        sortable: s,
        name: "clone"
      }));
    }), !i && pn(se, u.dragClass, !0), i ? (pu = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Pe(document, "mouseup", s._onDrop), Pe(document, "touchend", s._onDrop), Pe(document, "touchcancel", s._onDrop), o && (o.effectAllowed = "move", u.setData && u.setData.call(s, o, se)), Ue(document, "drop", s), Ce(se, "transform", "translateZ(0)")), Mi = !0, s._dragStartId = ou(s._dragStarted.bind(s, i, r)), Ue(document, "selectstart", s), Ys = !0, window.getSelection().removeAllRanges(), Js && Ce(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(r) {
    var i = this.el, s = r.target, o, u, f, p = this.options, h = p.group, v = we.active, b = Co === h, _ = p.sort, g = Rt || v, m, d = this, x = !1;
    if (Ad) return;
    function E(he, Re) {
      en(he, d, nr({
        evt: r,
        isOwner: b,
        axis: m ? "vertical" : "horizontal",
        revert: f,
        dragRect: o,
        targetRect: u,
        canSort: _,
        fromSortable: g,
        target: s,
        completed: A,
        onMove: function(K, ie) {
          return No(it, i, se, o, K, _t(K), r, ie);
        },
        changed: k
      }, Re));
    }
    function T() {
      E("dragOverAnimationCapture"), d.captureAnimationState(), d !== g && g.captureAnimationState();
    }
    function A(he) {
      return E("dragOverCompleted", {
        insertion: he
      }), he && (b ? v._hideClone() : v._showClone(d), d !== g && (pn(se, Rt ? Rt.options.ghostClass : v.options.ghostClass, !1), pn(se, p.ghostClass, !0)), Rt !== d && d !== we.active ? Rt = d : d === we.active && Rt && (Rt = null), g === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        E("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (s === se && !se.animated || s === i && !s.animated) && (Ai = null), !p.dragoverBubble && !r.rootEl && s !== document && (se.parentNode[nn]._isOutsideThisEl(r.target), !he && Na(r)), !p.dragoverBubble && r.stopPropagation && r.stopPropagation(), x = !0;
    }
    function k() {
      mn = Mn(se), Wr = Mn(se, p.draggable), Zt({
        sortable: d,
        name: "change",
        toEl: i,
        newIndex: mn,
        newDraggableIndex: Wr,
        originalEvent: r
      });
    }
    if (r.preventDefault !== void 0 && r.cancelable && r.preventDefault(), s = Hn(s, p.draggable, i, !0), E("dragOver"), we.eventCanceled) return x;
    if (se.contains(r.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (pu = !1, v && !p.disabled && (b ? _ || (f = ht !== it) : Rt === this || (this.lastPutMode = Co.checkPull(this, v, se, r)) && h.checkPut(this, v, se, r))) {
      if (m = this._getDirection(r, s) === "vertical", o = _t(se), E("dragOverValid"), we.eventCanceled) return x;
      if (f)
        return ht = it, T(), this._hideClone(), E("revert"), we.eventCanceled || (Ta ? it.insertBefore(se, Ta) : it.appendChild(se)), A(!0);
      var C = $d(i, p.draggable);
      if (!C || ZS(r, m, this) && !C.animated) {
        if (C === se)
          return A(!1);
        if (C && i === r.target && (s = C), s && (u = _t(s)), No(it, i, se, o, s, u, r, !!s) !== !1)
          return T(), C && C.nextSibling ? i.insertBefore(se, C.nextSibling) : i.appendChild(se), ht = i, k(), A(!0);
      } else if (C && FS(r, m, this)) {
        var N = Ii(i, 0, p, !0);
        if (N === se)
          return A(!1);
        if (s = N, u = _t(s), No(it, i, se, o, s, u, r, !1) !== !1)
          return T(), i.insertBefore(se, N), ht = i, k(), A(!0);
      } else if (s.parentNode === i) {
        u = _t(s);
        var M = 0, D, F = se.parentNode !== i, q = !PS(se.animated && se.toRect || o, s.animated && s.toRect || u, m), P = m ? "top" : "left", V = Cv(s, "top", "top") || Cv(se, "top", "top"), Y = V ? V.scrollTop : void 0;
        Ai !== s && (D = u[P], tl = !1, wo = !q && p.invertSwap || F), M = GS(r, s, u, m, q ? 1 : p.swapThreshold, p.invertedSwapThreshold == null ? p.swapThreshold : p.invertedSwapThreshold, wo, Ai === s);
        var le;
        if (M !== 0) {
          var fe = Mn(se);
          do
            fe -= M, le = ht.children[fe];
          while (le && (Ce(le, "display") === "none" || le === Te));
        }
        if (M === 0 || le === s)
          return A(!1);
        Ai = s, el = M;
        var ge = s.nextElementSibling, B = !1;
        B = M === 1;
        var re = No(it, i, se, o, s, u, r, B);
        if (re !== !1)
          return (re === 1 || re === -1) && (B = re === 1), Ad = !0, setTimeout(qS, 30), T(), B && !ge ? i.appendChild(se) : s.parentNode.insertBefore(se, B ? ge : s), V && b0(V, 0, Y - V.scrollTop), ht = se.parentNode, D !== void 0 && !wo && (lu = Math.abs(D - _t(s)[P])), k(), A(!0);
      }
      if (i.contains(se))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Pe(document, "mousemove", this._onTouchMove), Pe(document, "touchmove", this._onTouchMove), Pe(document, "pointermove", this._onTouchMove), Pe(document, "dragover", Na), Pe(document, "mousemove", Na), Pe(document, "touchmove", Na);
  },
  _offUpEvents: function() {
    var r = this.el.ownerDocument;
    Pe(r, "mouseup", this._onDrop), Pe(r, "touchend", this._onDrop), Pe(r, "pointerup", this._onDrop), Pe(r, "pointercancel", this._onDrop), Pe(r, "touchcancel", this._onDrop), Pe(document, "selectstart", this);
  },
  _onDrop: function(r) {
    var i = this.el, s = this.options;
    if (mn = Mn(se), Wr = Mn(se, s.draggable), en("drop", this, {
      evt: r
    }), ht = se && se.parentNode, mn = Mn(se), Wr = Mn(se, s.draggable), we.eventCanceled) {
      this._nulling();
      return;
    }
    Mi = !1, wo = !1, tl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Nd(this.cloneId), Nd(this._dragStartId), this.nativeDraggable && (Pe(document, "drop", this), Pe(i, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Js && Ce(document.body, "user-select", ""), Ce(se, "transform", ""), r && (Ys && (r.cancelable && r.preventDefault(), !s.dropBubble && r.stopPropagation()), Te && Te.parentNode && Te.parentNode.removeChild(Te), (it === ht || Rt && Rt.lastPutMode !== "clone") && ot && ot.parentNode && ot.parentNode.removeChild(ot), se && (this.nativeDraggable && Pe(se, "dragend", this), nd(se), se.style["will-change"] = "", Ys && !Mi && pn(se, Rt ? Rt.options.ghostClass : this.options.ghostClass, !1), pn(se, this.options.chosenClass, !1), Zt({
      sortable: this,
      name: "unchoose",
      toEl: ht,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: r
    }), it !== ht ? (mn >= 0 && (Zt({
      rootEl: ht,
      name: "add",
      toEl: ht,
      fromEl: it,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "remove",
      toEl: ht,
      originalEvent: r
    }), Zt({
      rootEl: ht,
      name: "sort",
      toEl: ht,
      fromEl: it,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "sort",
      toEl: ht,
      originalEvent: r
    })), Rt && Rt.save()) : mn !== Di && mn >= 0 && (Zt({
      sortable: this,
      name: "update",
      toEl: ht,
      originalEvent: r
    }), Zt({
      sortable: this,
      name: "sort",
      toEl: ht,
      originalEvent: r
    })), we.active && ((mn == null || mn === -1) && (mn = Di, Wr = Ws), Zt({
      sortable: this,
      name: "end",
      toEl: ht,
      originalEvent: r
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    en("nulling", this), it = se = ht = Te = Ta = ot = su = ea = Aa = Bn = Ys = mn = Wr = Di = Ws = Ai = el = Rt = Co = we.dragged = we.ghost = we.clone = we.active = null, gu.forEach(function(r) {
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
      i = s[o], Hn(i, f.draggable, this.el, !1) && r.push(i.getAttribute(f.dataIdAttr) || YS(i));
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
      Hn(p, this.options.draggable, o, !1) && (s[u] = p);
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
    return Hn(r, i || this.options.draggable, this.el, !1);
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
    en("destroy", this);
    var r = this.el;
    r[nn] = null, Pe(r, "mousedown", this._onTapStart), Pe(r, "touchstart", this._onTapStart), Pe(r, "pointerdown", this._onTapStart), this.nativeDraggable && (Pe(r, "dragover", this), Pe(r, "dragenter", this)), Array.prototype.forEach.call(r.querySelectorAll("[draggable]"), function(i) {
      i.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), mu.splice(mu.indexOf(this.el), 1), this.el = r = null;
  },
  _hideClone: function() {
    if (!ea) {
      if (en("hideClone", this), we.eventCanceled) return;
      Ce(ot, "display", "none"), this.options.removeCloneOnHide && ot.parentNode && ot.parentNode.removeChild(ot), ea = !0;
    }
  },
  _showClone: function(r) {
    if (r.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ea) {
      if (en("showClone", this), we.eventCanceled) return;
      se.parentNode == it && !this.options.group.revertClone ? it.insertBefore(ot, se) : Ta ? it.insertBefore(ot, Ta) : it.appendChild(ot), this.options.group.revertClone && this.animate(se, ot), Ce(ot, "display", ""), ea = !1;
    }
  }
};
function HS(t) {
  t.dataTransfer && (t.dataTransfer.dropEffect = "move"), t.cancelable && t.preventDefault();
}
function No(t, r, i, s, o, u, f, p) {
  var h, v = t[nn], b = v.options.onMove, _;
  return window.CustomEvent && !Ar && !il ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = r, h.from = t, h.dragged = i, h.draggedRect = s, h.related = o || r, h.relatedRect = u || _t(r), h.willInsertAfter = p, h.originalEvent = f, t.dispatchEvent(h), b && (_ = b.call(v, h, f)), _;
}
function nd(t) {
  t.draggable = !1;
}
function qS() {
  Ad = !1;
}
function FS(t, r, i) {
  var s = _t(Ii(i.el, 0, i.options, !0)), o = S0(i.el, i.options, Te), u = 10;
  return r ? t.clientX < o.left - u || t.clientY < s.top && t.clientX < s.right : t.clientY < o.top - u || t.clientY < s.bottom && t.clientX < s.left;
}
function ZS(t, r, i) {
  var s = _t($d(i.el, i.options.draggable)), o = S0(i.el, i.options, Te), u = 10;
  return r ? t.clientX > o.right + u || t.clientY > s.bottom && t.clientX > s.left : t.clientY > o.bottom + u || t.clientX > s.right && t.clientY > s.top;
}
function GS(t, r, i, s, o, u, f, p) {
  var h = s ? t.clientY : t.clientX, v = s ? i.height : i.width, b = s ? i.top : i.left, _ = s ? i.bottom : i.right, g = !1;
  if (!f) {
    if (p && lu < v * o) {
      if (!tl && (el === 1 ? h > b + v * u / 2 : h < _ - v * u / 2) && (tl = !0), tl)
        g = !0;
      else if (el === 1 ? h < b + lu : h > _ - lu)
        return -el;
    } else if (h > b + v * (1 - o) / 2 && h < _ - v * (1 - o) / 2)
      return VS(r);
  }
  return g = g || f, g && (h < b + v * u / 2 || h > _ - v * u / 2) ? h > b + v / 2 ? 1 : -1 : 0;
}
function VS(t) {
  return Mn(se) < Mn(t) ? 1 : -1;
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
wu && Ue(document, "touchmove", function(t) {
  (we.active || Mi) && t.cancelable && t.preventDefault();
});
we.utils = {
  on: Ue,
  off: Pe,
  css: Ce,
  find: v0,
  is: function(r, i) {
    return !!Hn(r, i, r, !1);
  },
  extend: kS,
  throttle: y0,
  closest: Hn,
  toggleClass: pn,
  clone: _0,
  index: Mn,
  nextTick: ou,
  cancelNextTick: Nd,
  detectDirection: E0,
  getChild: Ii,
  expando: nn
};
we.get = function(t) {
  return t[nn];
};
we.mount = function() {
  for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
    r[i] = arguments[i];
  r[0].constructor === Array && (r = r[0]), r.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (we.utils = nr(nr({}, we.utils), s.utils)), sl.mount(s);
  });
};
we.create = function(t, r) {
  return new we(t, r);
};
we.version = TS;
var bt = [], Xs, Td, Od = !1, rd, ad, vu, $s;
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
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Ue(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Ue(document, "touchmove", this._handleFallbackAutoScroll) : Ue(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(i) {
      var s = i.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Pe(document, "dragover", this._handleAutoScroll) : (Pe(document, "pointermove", this._handleFallbackAutoScroll), Pe(document, "touchmove", this._handleFallbackAutoScroll), Pe(document, "mousemove", this._handleFallbackAutoScroll)), Ov(), uu(), MS();
    },
    nulling: function() {
      vu = Td = Xs = Od = $s = rd = ad = null, bt.length = 0;
    },
    _handleFallbackAutoScroll: function(i) {
      this._handleAutoScroll(i, !0);
    },
    _handleAutoScroll: function(i, s) {
      var o = this, u = (i.touches ? i.touches[0] : i).clientX, f = (i.touches ? i.touches[0] : i).clientY, p = document.elementFromPoint(u, f);
      if (vu = i, s || this.options.forceAutoScrollFallback || il || Ar || Js) {
        id(i, this.options, p, s);
        var h = ta(p, !0);
        Od && (!$s || u !== rd || f !== ad) && ($s && Ov(), $s = setInterval(function() {
          var v = ta(document.elementFromPoint(u, f), !0);
          v !== h && (h = v, uu()), id(i, o.options, v, s);
        }, 10), rd = u, ad = f);
      } else {
        if (!this.options.bubbleScroll || ta(p, !0) === tr()) {
          uu();
          return;
        }
        id(i, this.options, ta(p, !1), !1);
      }
    }
  }, wr(t, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function uu() {
  bt.forEach(function(t) {
    clearInterval(t.pid);
  }), bt = [];
}
function Ov() {
  clearInterval($s);
}
var id = y0(function(t, r, i, s) {
  if (r.scroll) {
    var o = (t.touches ? t.touches[0] : t).clientX, u = (t.touches ? t.touches[0] : t).clientY, f = r.scrollSensitivity, p = r.scrollSpeed, h = tr(), v = !1, b;
    Td !== i && (Td = i, uu(), Xs = r.scroll, b = r.scrollFn, Xs === !0 && (Xs = ta(i, !0)));
    var _ = 0, g = Xs;
    do {
      var m = g, d = _t(m), x = d.top, E = d.bottom, T = d.left, A = d.right, k = d.width, C = d.height, N = void 0, M = void 0, D = m.scrollWidth, F = m.scrollHeight, q = Ce(m), P = m.scrollLeft, V = m.scrollTop;
      m === h ? (N = k < D && (q.overflowX === "auto" || q.overflowX === "scroll" || q.overflowX === "visible"), M = C < F && (q.overflowY === "auto" || q.overflowY === "scroll" || q.overflowY === "visible")) : (N = k < D && (q.overflowX === "auto" || q.overflowX === "scroll"), M = C < F && (q.overflowY === "auto" || q.overflowY === "scroll"));
      var Y = N && (Math.abs(A - o) <= f && P + k < D) - (Math.abs(T - o) <= f && !!P), le = M && (Math.abs(E - u) <= f && V + C < F) - (Math.abs(x - u) <= f && !!V);
      if (!bt[_])
        for (var fe = 0; fe <= _; fe++)
          bt[fe] || (bt[fe] = {});
      (bt[_].vx != Y || bt[_].vy != le || bt[_].el !== m) && (bt[_].el = m, bt[_].vx = Y, bt[_].vy = le, clearInterval(bt[_].pid), (Y != 0 || le != 0) && (v = !0, bt[_].pid = setInterval((function() {
        s && this.layer === 0 && we.active._onTouchMove(vu);
        var ge = bt[this.layer].vy ? bt[this.layer].vy * p : 0, B = bt[this.layer].vx ? bt[this.layer].vx * p : 0;
        typeof b == "function" && b.call(we.dragged.parentNode[nn], B, ge, t, vu, bt[this.layer].el) !== "continue" || b0(bt[this.layer].el, B, ge);
      }).bind({
        layer: _
      }), 24))), _++;
    } while (r.bubbleScroll && g !== h && (g = ta(g, !1)));
    Od = v;
  }
}, 30), N0 = function(r) {
  var i = r.originalEvent, s = r.putSortable, o = r.dragEl, u = r.activeSortable, f = r.dispatchSortableEvent, p = r.hideGhostForTarget, h = r.unhideGhostForTarget;
  if (i) {
    var v = s || u;
    p();
    var b = i.changedTouches && i.changedTouches.length ? i.changedTouches[0] : i, _ = document.elementFromPoint(b.clientX, b.clientY);
    h(), v && !v.el.contains(_) && (f("spill"), this.onSpill({
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
wr(Qd, {
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
wr(Jd, {
  pluginName: "removeOnSpill"
});
we.mount(new $S());
we.mount(Jd, Qd);
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
function M0(t, r) {
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
function D0(t, r) {
  r = Object.assign({}, ox, r);
  const i = [];
  let s = !1, o = !1;
  t[0] === "\uFEFF" && (t = t.substr(1));
  for (let u = 0; u < t.length; u++)
    if (t[u] === "<" && t[u + 1] === "?") {
      if (u += 2, u = Mv(t, u), u.err) return u;
    } else if (t[u] === "<") {
      let f = u;
      if (u++, t[u] === "!") {
        u = Dv(t, u);
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
          return h.trim().length === 0 ? _ = "Invalid space after '<'." : _ = "Tag '" + h + "' is an invalid name.", gt("InvalidTag", _, Gt(t, u));
        }
        const v = fx(t, u);
        if (v === !1)
          return gt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Gt(t, u));
        let b = v.value;
        if (u = v.index, b[b.length - 1] === "/") {
          const _ = u - b.length;
          b = b.substring(0, b.length - 1);
          const g = jv(b, r);
          if (g === !0)
            s = !0;
          else
            return gt(g.err.code, g.err.msg, Gt(t, _ + g.err.line));
        } else if (p)
          if (v.tagClosed) {
            if (b.trim().length > 0)
              return gt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Gt(t, f));
            if (i.length === 0)
              return gt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Gt(t, f));
            {
              const _ = i.pop();
              if (h !== _.tagName) {
                let g = Gt(t, _.tagStartPos);
                return gt(
                  "InvalidTag",
                  "Expected closing tag '" + _.tagName + "' (opened in line " + g.line + ", col " + g.col + ") instead of closing tag '" + h + "'.",
                  Gt(t, f)
                );
              }
              i.length == 0 && (o = !0);
            }
          } else return gt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Gt(t, u));
        else {
          const _ = jv(b, r);
          if (_ !== !0)
            return gt(_.err.code, _.err.msg, Gt(t, u - b.length + _.err.line));
          if (o === !0)
            return gt("InvalidXml", "Multiple possible root nodes found.", Gt(t, u));
          r.unpairedTags.indexOf(h) !== -1 || i.push({ tagName: h, tagStartPos: f }), s = !0;
        }
        for (u++; u < t.length; u++)
          if (t[u] === "<")
            if (t[u + 1] === "!") {
              u++, u = Dv(t, u);
              continue;
            } else if (t[u + 1] === "?") {
              if (u = Mv(t, ++u), u.err) return u;
            } else
              break;
          else if (t[u] === "&") {
            const _ = px(t, u);
            if (_ == -1)
              return gt("InvalidChar", "char '&' is not expected.", Gt(t, u));
            u = _;
          } else if (o === !0 && !kv(t[u]))
            return gt("InvalidXml", "Extra text at the end", Gt(t, u));
        t[u] === "<" && u--;
      }
    } else {
      if (kv(t[u]))
        continue;
      return gt("InvalidChar", "char '" + t[u] + "' is not expected.", Gt(t, u));
    }
  if (s) {
    if (i.length == 1)
      return gt("InvalidTag", "Unclosed tag '" + i[0].tagName + "'.", Gt(t, i[0].tagStartPos));
    if (i.length > 0)
      return gt("InvalidXml", "Invalid '" + JSON.stringify(i.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return gt("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function kv(t) {
  return t === " " || t === "	" || t === `
` || t === "\r";
}
function Mv(t, r) {
  const i = r;
  for (; r < t.length; r++)
    if (t[r] == "?" || t[r] == " ") {
      const s = t.substr(i, r - i);
      if (r > 5 && s === "xml")
        return gt("InvalidXml", "XML declaration allowed only at the start of the document.", Gt(t, r));
      if (t[r] == "?" && t[r + 1] == ">") {
        r++;
        break;
      } else
        continue;
    }
  return r;
}
function Dv(t, r) {
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
  const i = M0(t, dx), s = {};
  for (let o = 0; o < i.length; o++) {
    if (i[o][1].length === 0)
      return gt("InvalidAttr", "Attribute '" + i[o][2] + "' has no space in starting.", Bs(i[o]));
    if (i[o][3] !== void 0 && i[o][4] === void 0)
      return gt("InvalidAttr", "Attribute '" + i[o][2] + "' is without value.", Bs(i[o]));
    if (i[o][3] === void 0 && !r.allowBooleanAttributes)
      return gt("InvalidAttr", "boolean attribute '" + i[o][2] + "' is not allowed.", Bs(i[o]));
    const u = i[o][2];
    if (!mx(u))
      return gt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", Bs(i[o]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return gt("InvalidAttr", "Attribute '" + u + "' is repeated.", Bs(i[o]));
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
function gt(t, r, i) {
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
function Gt(t, r) {
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
    return Dx(i, 16);
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
      let f = Mx(s[3]);
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
function Mx(t) {
  return t && t.indexOf(".") !== -1 && (t = t.replace(/0+$/, ""), t === "." ? t = "0" : t[0] === "." ? t = "0" + t : t[t.length - 1] === "." && (t = t.substr(0, t.length - 1))), t;
}
function Dx(t, r) {
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
    return p == null ? t : typeof p != typeof t || p !== t ? p : this.options.trimValues ? Dd(t, this.options.parseTagValue, this.options.numberParseOptions) : t.trim() === t ? Dd(t, this.options.parseTagValue, this.options.numberParseOptions) : t;
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
    const s = M0(t, Px), o = s.length, u = {};
    for (let f = 0; f < o; f++) {
      const p = this.resolveNameSpace(s[f][1]);
      if (this.ignoreAttributesFn(p, r))
        continue;
      let h = s[f][4], v = this.options.attributeNamePrefix + p;
      if (p.length)
        if (this.options.transformAttributeName && (v = this.options.transformAttributeName(v)), v === "__proto__" && (v = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const b = this.options.attributeValueProcessor(p, h, r);
          b == null ? u[v] = h : typeof b != typeof h || b !== h ? u[v] = b : u[v] = Dd(
            h,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[v] = !0);
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
        const p = Da(t, ">", u, "Closing Tag is not closed.");
        let h = t.substring(u + 2, p).trim();
        if (this.options.removeNSPrefix) {
          const _ = h.indexOf(":");
          _ !== -1 && (h = h.substr(_ + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && (s = this.saveTextToParentTag(s, i, o));
        const v = o.substring(o.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let b = 0;
        v && this.options.unpairedTags.indexOf(v) !== -1 ? (b = o.lastIndexOf(".", o.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : b = o.lastIndexOf("."), o = o.substring(0, b), i = this.tagsNodeStack.pop(), s = "", u = p;
      } else if (t[u + 1] === "?") {
        let p = Md(t, u, !1, "?>");
        if (!p) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, i, o), !(this.options.ignoreDeclaration && p.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Us(p.tagName);
          h.add(this.options.textNodeName, ""), p.tagName !== p.tagExp && p.attrExpPresent && (h[":@"] = this.buildAttributesMap(p.tagExp, o, p.tagName)), this.addChild(i, h, o);
        }
        u = p.closeIndex + 1;
      } else if (t.substr(u + 1, 3) === "!--") {
        const p = Da(t, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = t.substring(u + 4, p - 2);
          s = this.saveTextToParentTag(s, i, o), i.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = p;
      } else if (t.substr(u + 1, 2) === "!D") {
        const p = bx(t, u);
        this.docTypeEntities = p.entities, u = p.i;
      } else if (t.substr(u + 1, 2) === "![") {
        const p = Da(t, "]]>", u, "CDATA is not closed.") - 2, h = t.substring(u + 9, p);
        s = this.saveTextToParentTag(s, i, o);
        let v = this.parseTextData(h, i.tagname, o, !0, !1, !0, !0);
        v == null && (v = ""), this.options.cdataPropName ? i.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : i.add(this.options.textNodeName, v), u = p + 2;
      } else {
        let p = Md(t, u, this.options.removeNSPrefix), h = p.tagName;
        const v = p.rawTagName;
        let b = p.tagExp, _ = p.attrExpPresent, g = p.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), i && s && i.tagname !== "!xml" && (s = this.saveTextToParentTag(s, i, o, !1));
        const m = i;
        if (m && this.options.unpairedTags.indexOf(m.tagname) !== -1 && (i = this.tagsNodeStack.pop(), o = o.substring(0, o.lastIndexOf("."))), h !== r.tagname && (o += o ? "." + h : h), this.isItStopNode(this.options.stopNodes, o, h)) {
          let d = "";
          if (b.length > 0 && b.lastIndexOf("/") === b.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), o = o.substr(0, o.length - 1), b = h) : b = b.substr(0, b.length - 1), u = p.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = p.closeIndex;
          else {
            const E = this.readStopNodeData(t, v, g + 1);
            if (!E) throw new Error(`Unexpected end of ${v}`);
            u = E.i, d = E.tagContent;
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
          s = "", u = g;
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
function Da(t, r, i, s) {
  const o = t.indexOf(r, i);
  if (o === -1)
    throw new Error(s);
  return o + r.length - 1;
}
function Md(t, r, i, s = ">") {
  const o = Gx(t, r + 1, s);
  if (!o) return;
  let u = o.data;
  const f = o.index, p = u.search(/\s/);
  let h = u, v = !0;
  p !== -1 && (h = u.substring(0, p), u = u.substring(p + 1).trimStart());
  const b = h;
  if (i) {
    const _ = h.indexOf(":");
    _ !== -1 && (h = h.substr(_ + 1), v = h !== o.data.substr(_ + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: f,
    attrExpPresent: v,
    rawTagName: b
  };
}
function Vx(t, r, i) {
  const s = i;
  let o = 1;
  for (; i < t.length; i++)
    if (t[i] === "<")
      if (t[i + 1] === "/") {
        const u = Da(t, ">", i, `${r} is not closed`);
        if (t.substring(i + 2, u).trim() === r && (o--, o === 0))
          return {
            tagContent: t.substring(s, i),
            i: u
          };
        i = u;
      } else if (t[i + 1] === "?")
        i = Da(t, "?>", i + 1, "StopNode is not closed.");
      else if (t.substr(i + 1, 3) === "!--")
        i = Da(t, "-->", i + 3, "StopNode is not closed.");
      else if (t.substr(i + 1, 2) === "![")
        i = Da(t, "]]>", i, "StopNode is not closed.") - 2;
      else {
        const u = Md(t, i, ">");
        u && ((u && u.tagName) === r && u.tagExp[u.tagExp.length - 1] !== "/" && o++, i = u.closeIndex);
      }
}
function Dd(t, r, i) {
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
        let v = j0(f[p], r, h);
        const b = Qx(v, r);
        f[":@"] ? $x(v, f[":@"], h, r) : Object.keys(v).length === 1 && v[r.textNodeName] !== void 0 && !r.alwaysCreateTextNode ? v = v[r.textNodeName] : Object.keys(v).length === 0 && (r.alwaysCreateTextNode ? v[r.textNodeName] = "" : v = ""), o[p] !== void 0 && o.hasOwnProperty(p) ? (Array.isArray(o[p]) || (o[p] = [o[p]]), o[p].push(v)) : r.isArray(p, h, b) ? o[p] = [v] : o[p] = v;
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
      const u = D0(r, i);
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
  validate: D0
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
var To = { exports: {} }, Oo = { exports: {} }, Un = {}, tn = {}, zv;
function rn() {
  if (zv) return tn;
  zv = 1, tn.__esModule = !0, tn.extend = o, tn.indexOf = h, tn.escapeExpression = v, tn.isEmpty = b, tn.createFrame = _, tn.blockParams = g, tn.appendContextPath = m;
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
      for (var E in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], E) && (d[E] = arguments[x][E]);
    return d;
  }
  var u = Object.prototype.toString;
  tn.toString = u;
  var f = function(x) {
    return typeof x == "function";
  };
  f(/x/) && (tn.isFunction = f = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), tn.isFunction = f;
  var p = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  tn.isArray = p;
  function h(d, x) {
    for (var E = 0, T = d.length; E < T; E++)
      if (d[E] === x)
        return E;
    return -1;
  }
  function v(d) {
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
  function g(d, x) {
    return d.path = x, d;
  }
  function m(d, x) {
    return (d ? d + "." : "") + x;
  }
  return tn;
}
var ko = { exports: {} }, Lv;
function Fn() {
  return Lv || (Lv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(o, u) {
      var f = u && u.loc, p = void 0, h = void 0, v = void 0, b = void 0;
      f && (p = f.start.line, h = f.end.line, v = f.start.column, b = f.end.column, o += " - " + p + ":" + v);
      for (var _ = Error.prototype.constructor.call(this, o), g = 0; g < i.length; g++)
        this[i[g]] = _[i[g]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        f && (this.lineNumber = p, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: v,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: b,
          enumerable: !0
        })) : (this.column = v, this.endColumn = b));
      } catch {
      }
    }
    s.prototype = new Error(), r.default = s, t.exports = r.default;
  })(ko, ko.exports)), ko.exports;
}
var Hs = {}, Mo = { exports: {} }, Iv;
function eE() {
  return Iv || (Iv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn();
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
  })(Mo, Mo.exports)), Mo.exports;
}
var Do = { exports: {} }, Pv;
function tE() {
  return Pv || (Pv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(f) {
      return f && f.__esModule ? f : { default: f };
    }
    var s = rn(), o = Fn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("each", function(p, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var v = h.fn, b = h.inverse, _ = 0, g = "", m = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(p) && (p = p.call(this)), h.data && (m = s.createFrame(h.data));
        function x(C, N, M) {
          m && (m.key = C, m.index = N, m.first = N === 0, m.last = !!M, d && (m.contextPath = d + C)), g = g + v(p[C], {
            data: m,
            blockParams: s.blockParams([p[C], C], [d + C, null])
          });
        }
        if (p && typeof p == "object")
          if (s.isArray(p))
            for (var E = p.length; _ < E; _++)
              _ in p && x(_, _, _ === p.length - 1);
          else if (typeof Symbol == "function" && p[Symbol.iterator]) {
            for (var T = [], A = p[Symbol.iterator](), k = A.next(); !k.done; k = A.next())
              T.push(k.value);
            p = T;
            for (var E = p.length; _ < E; _++)
              x(_, _, _ === p.length - 1);
          } else
            (function() {
              var C = void 0;
              Object.keys(p).forEach(function(N) {
                C !== void 0 && x(C, _ - 1), C = N, _++;
              }), C !== void 0 && x(C, _ - 1, !0);
            })();
        return _ === 0 && (g = b(this)), g;
      });
    }, t.exports = r.default;
  })(Do, Do.exports)), Do.exports;
}
var jo = { exports: {} }, Bv;
function nE() {
  return Bv || (Bv = 1, (function(t, r) {
    r.__esModule = !0;
    function i(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = Fn(), o = i(s);
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
    var s = rn(), o = Fn(), u = i(o);
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
    var s = rn(), o = Fn(), u = i(o);
    r.default = function(f) {
      f.registerHelper("with", function(p, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(p) && (p = p.call(this));
        var v = h.fn;
        if (s.isEmpty(p))
          return h.inverse(this);
        var b = h.data;
        return h.data && h.ids && (b = s.createFrame(h.data), b.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), v(p, {
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
  Zv = 1, Hs.__esModule = !0, Hs.registerDefaultHelpers = x, Hs.moveHelperToHooks = E;
  function t(T) {
    return T && T.__esModule ? T : { default: T };
  }
  var r = eE(), i = t(r), s = tE(), o = t(s), u = nE(), f = t(u), p = rE(), h = t(p), v = aE(), b = t(v), _ = iE(), g = t(_), m = sE(), d = t(m);
  function x(T) {
    i.default(T), o.default(T), f.default(T), h.default(T), b.default(T), g.default(T), d.default(T);
  }
  function E(T, A, k) {
    T.helpers[A] && (T.hooks[A] = T.helpers[A], k || delete T.helpers[A]);
  }
  return Hs;
}
var Po = {}, Bo = { exports: {} }, Gv;
function lE() {
  return Gv || (Gv = 1, (function(t, r) {
    r.__esModule = !0;
    var i = rn();
    r.default = function(s) {
      s.registerDecorator("inline", function(o, u, f, p) {
        var h = o;
        return u.partials || (u.partials = {}, h = function(v, b) {
          var _ = f.partials;
          f.partials = i.extend({}, _, u.partials);
          var g = o(v, b);
          return f.partials = _, g;
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
    var i = rn(), s = {
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
          for (var p = arguments.length, h = Array(p > 1 ? p - 1 : 0), v = 1; v < p; v++)
            h[v - 1] = arguments[v];
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
  var t = rn();
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
  $v = 1, Ni.__esModule = !0, Ni.createProtoAccessControl = u, Ni.resultIsAllowed = f, Ni.resetLoggedProperties = v;
  function t(b) {
    return b && b.__esModule ? b : { default: b };
  }
  var r = uE(), i = L0(), s = t(i), o = /* @__PURE__ */ Object.create(null);
  function u(b) {
    var _ = /* @__PURE__ */ Object.create(null);
    _.constructor = !1, _.__defineGetter__ = !1, _.__defineSetter__ = !1, _.__lookupGetter__ = !1;
    var g = /* @__PURE__ */ Object.create(null);
    return g.__proto__ = !1, {
      properties: {
        whitelist: r.createNewLookupObject(g, b.allowedProtoProperties),
        defaultValue: b.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: r.createNewLookupObject(_, b.allowedProtoMethods),
        defaultValue: b.allowProtoMethodsByDefault
      }
    };
  }
  function f(b, _, g) {
    return p(typeof b == "function" ? _.methods : _.properties, g);
  }
  function p(b, _) {
    return b.whitelist[_] !== void 0 ? b.whitelist[_] === !0 : b.defaultValue !== void 0 ? b.defaultValue : (h(_), !1);
  }
  function h(b) {
    o[b] !== !0 && (o[b] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + b + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function v() {
    Object.keys(o).forEach(function(b) {
      delete o[b];
    });
  }
  return Ni;
}
var Qv;
function th() {
  if (Qv) return Un;
  Qv = 1, Un.__esModule = !0, Un.HandlebarsEnvironment = d;
  function t(E) {
    return E && E.__esModule ? E : { default: E };
  }
  var r = rn(), i = Fn(), s = t(i), o = z0(), u = oE(), f = L0(), p = t(f), h = I0(), v = "4.7.8";
  Un.VERSION = v;
  var b = 8;
  Un.COMPILER_REVISION = b;
  var _ = 7;
  Un.LAST_COMPATIBLE_COMPILER_REVISION = _;
  var g = {
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
  Un.REVISION_CHANGES = g;
  var m = "[object Object]";
  function d(E, T, A) {
    this.helpers = E || {}, this.partials = T || {}, this.decorators = A || {}, o.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
    logger: p.default,
    log: p.default.log,
    registerHelper: function(T, A) {
      if (r.toString.call(T) === m) {
        if (A)
          throw new s.default("Arg not supported with multiple helpers");
        r.extend(this.helpers, T);
      } else
        this.helpers[T] = A;
    },
    unregisterHelper: function(T) {
      delete this.helpers[T];
    },
    registerPartial: function(T, A) {
      if (r.toString.call(T) === m)
        r.extend(this.partials, T);
      else {
        if (typeof A > "u")
          throw new s.default('Attempting to register a partial called "' + T + '" as undefined');
        this.partials[T] = A;
      }
    },
    unregisterPartial: function(T) {
      delete this.partials[T];
    },
    registerDecorator: function(T, A) {
      if (r.toString.call(T) === m) {
        if (A)
          throw new s.default("Arg not supported with multiple decorators");
        r.extend(this.decorators, T);
      } else
        this.decorators[T] = A;
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
  return Un.log = x, Un.createFrame = r.createFrame, Un.logger = p.default, Un;
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
var br = {}, Fo = {}, Kv;
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
  if (Wv) return br;
  Wv = 1, br.__esModule = !0, br.checkRevision = b, br.template = _, br.wrapProgram = g, br.resolvePartial = m, br.invokePartial = d, br.noop = x;
  function t(C) {
    return C && C.__esModule ? C : { default: C };
  }
  function r(C) {
    if (C && C.__esModule)
      return C;
    var N = {};
    if (C != null)
      for (var M in C)
        Object.prototype.hasOwnProperty.call(C, M) && (N[M] = C[M]);
    return N.default = C, N;
  }
  var i = rn(), s = r(i), o = Fn(), u = t(o), f = th(), p = z0(), h = fE(), v = I0();
  function b(C) {
    var N = C && C[0] || 1, M = f.COMPILER_REVISION;
    if (!(N >= f.LAST_COMPATIBLE_COMPILER_REVISION && N <= f.COMPILER_REVISION))
      if (N < f.LAST_COMPATIBLE_COMPILER_REVISION) {
        var D = f.REVISION_CHANGES[M], F = f.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + D + ") or downgrade your runtime to an older version (" + F + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + C[1] + ").");
  }
  function _(C, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!C || !C.main)
      throw new u.default("Unknown template object: " + typeof C);
    C.main.decorator = C.main_d, N.VM.checkRevision(C.compiler);
    var M = C.compiler && C.compiler[0] === 7;
    function D(P, V, Y) {
      Y.hash && (V = s.extend({}, V, Y.hash), Y.ids && (Y.ids[0] = !0)), P = N.VM.resolvePartial.call(this, P, V, Y);
      var le = s.extend({}, Y, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = N.VM.invokePartial.call(this, P, V, le);
      if (fe == null && N.compile && (Y.partials[Y.name] = N.compile(P, C.compilerOptions, N), fe = Y.partials[Y.name](V, le)), fe != null) {
        if (Y.indent) {
          for (var ge = fe.split(`
`), B = 0, re = ge.length; B < re && !(!ge[B] && B + 1 === re); B++)
            ge[B] = Y.indent + ge[B];
          fe = ge.join(`
`);
        }
        return fe;
      } else
        throw new u.default("The partial " + Y.name + " could not be compiled when running in runtime-only mode");
    }
    var F = {
      strict: function(V, Y, le) {
        if (!V || !(Y in V))
          throw new u.default('"' + Y + '" not defined in ' + V, {
            loc: le
          });
        return F.lookupProperty(V, Y);
      },
      lookupProperty: function(V, Y) {
        var le = V[Y];
        if (le == null || Object.prototype.hasOwnProperty.call(V, Y) || v.resultIsAllowed(le, F.protoAccessControl, Y))
          return le;
      },
      lookup: function(V, Y) {
        for (var le = V.length, fe = 0; fe < le; fe++) {
          var ge = V[fe] && F.lookupProperty(V[fe], Y);
          if (ge != null)
            return V[fe][Y];
        }
      },
      lambda: function(V, Y) {
        return typeof V == "function" ? V.call(Y) : V;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: D,
      fn: function(V) {
        var Y = C[V];
        return Y.decorator = C[V + "_d"], Y;
      },
      programs: [],
      program: function(V, Y, le, fe, ge) {
        var B = this.programs[V], re = this.fn(V);
        return Y || ge || fe || le ? B = g(this, V, re, Y, le, fe, ge) : B || (B = this.programs[V] = g(this, V, re)), B;
      },
      data: function(V, Y) {
        for (; V && Y--; )
          V = V._parent;
        return V;
      },
      mergeIfNeeded: function(V, Y) {
        var le = V || Y;
        return V && Y && V !== Y && (le = s.extend({}, Y, V)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: C.compiler
    };
    function q(P) {
      var V = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Y = V.data;
      q._setup(V), !V.partial && C.useData && (Y = E(P, Y));
      var le = void 0, fe = C.useBlockParams ? [] : void 0;
      C.useDepths && (V.depths ? le = P != V.depths[0] ? [P].concat(V.depths) : V.depths : le = [P]);
      function ge(B) {
        return "" + C.main(F, B, F.helpers, F.partials, Y, fe, le);
      }
      return ge = T(C.main, ge, F, V.depths || [], Y, fe), ge(P, V);
    }
    return q.isTop = !0, q._setup = function(P) {
      if (P.partial)
        F.protoAccessControl = P.protoAccessControl, F.helpers = P.helpers, F.partials = P.partials, F.decorators = P.decorators, F.hooks = P.hooks;
      else {
        var V = s.extend({}, N.helpers, P.helpers);
        A(V, F), F.helpers = V, C.usePartial && (F.partials = F.mergeIfNeeded(P.partials, N.partials)), (C.usePartial || C.useDecorators) && (F.decorators = s.extend({}, N.decorators, P.decorators)), F.hooks = {}, F.protoAccessControl = v.createProtoAccessControl(P);
        var Y = P.allowCallsToHelperMissing || M;
        p.moveHelperToHooks(F, "helperMissing", Y), p.moveHelperToHooks(F, "blockHelperMissing", Y);
      }
    }, q._child = function(P, V, Y, le) {
      if (C.useBlockParams && !Y)
        throw new u.default("must pass block params");
      if (C.useDepths && !le)
        throw new u.default("must pass parent depths");
      return g(F, P, C[P], V, 0, Y, le);
    }, q;
  }
  function g(C, N, M, D, F, q, P) {
    function V(Y) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = P;
      return P && Y != P[0] && !(Y === C.nullContext && P[0] === null) && (fe = [Y].concat(P)), M(C, Y, C.helpers, C.partials, le.data || D, q && [le.blockParams].concat(q), fe);
    }
    return V = T(M, V, C, P, D, q), V.program = N, V.depth = P ? P.length : 0, V.blockParams = F || 0, V;
  }
  function m(C, N, M) {
    return C ? !C.call && !M.name && (M.name = C, C = M.partials[C]) : M.name === "@partial-block" ? C = M.data["partial-block"] : C = M.partials[M.name], C;
  }
  function d(C, N, M) {
    var D = M.data && M.data["partial-block"];
    M.partial = !0, M.ids && (M.data.contextPath = M.ids[0] || M.data.contextPath);
    var F = void 0;
    if (M.fn && M.fn !== x && (function() {
      M.data = f.createFrame(M.data);
      var q = M.fn;
      F = M.data["partial-block"] = function(V) {
        var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Y.data = f.createFrame(Y.data), Y.data["partial-block"] = D, q(V, Y);
      }, q.partials && (M.partials = s.extend({}, M.partials, q.partials));
    })(), C === void 0 && F && (C = F), C === void 0)
      throw new u.default("The partial " + M.name + " could not be found");
    if (C instanceof Function)
      return C(N, M);
  }
  function x() {
    return "";
  }
  function E(C, N) {
    return (!N || !("root" in N)) && (N = N ? f.createFrame(N) : {}, N.root = C), N;
  }
  function T(C, N, M, D, F, q) {
    if (C.decorator) {
      var P = {};
      N = C.decorator(N, P, M, D && D[0], F, q, D), s.extend(N, P);
    }
    return N;
  }
  function A(C, N) {
    Object.keys(C).forEach(function(M) {
      var D = C[M];
      C[M] = k(D, N);
    });
  }
  function k(C, N) {
    var M = N.lookupProperty;
    return h.wrapHelper(C, function(D) {
      return s.extend({ lookupProperty: M }, D);
    });
  }
  return br;
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
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var k = {};
      if (A != null)
        for (var C in A)
          Object.prototype.hasOwnProperty.call(A, C) && (k[C] = A[C]);
      return k.default = A, k;
    }
    var o = th(), u = s(o), f = cE(), p = i(f), h = Fn(), v = i(h), b = rn(), _ = s(b), g = dE(), m = s(g), d = P0(), x = i(d);
    function E() {
      var A = new u.HandlebarsEnvironment();
      return _.extend(A, u), A.SafeString = p.default, A.Exception = v.default, A.Utils = _, A.escapeExpression = _.escapeExpression, A.VM = m, A.template = function(k) {
        return m.template(k, A);
      }, A;
    }
    var T = E();
    T.create = E, x.default(T), T.default = T, r.default = T, t.exports = r.default;
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
        performAction: function(p, h, v, b, _, g, m) {
          var d = g.length - 1;
          switch (_) {
            case 1:
              return g[d - 1];
            case 2:
              this.$ = b.prepareProgram(g[d]);
              break;
            case 3:
              this.$ = g[d];
              break;
            case 4:
              this.$ = g[d];
              break;
            case 5:
              this.$ = g[d];
              break;
            case 6:
              this.$ = g[d];
              break;
            case 7:
              this.$ = g[d];
              break;
            case 8:
              this.$ = g[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: b.stripComment(g[d]),
                strip: b.stripFlags(g[d], g[d]),
                loc: b.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: g[d],
                value: g[d],
                loc: b.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = b.prepareRawBlock(g[d - 2], g[d - 1], g[d], this._$);
              break;
            case 12:
              this.$ = { path: g[d - 3], params: g[d - 2], hash: g[d - 1] };
              break;
            case 13:
              this.$ = b.prepareBlock(g[d - 3], g[d - 2], g[d - 1], g[d], !1, this._$);
              break;
            case 14:
              this.$ = b.prepareBlock(g[d - 3], g[d - 2], g[d - 1], g[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: g[d - 5], path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: b.stripFlags(g[d - 5], g[d]) };
              break;
            case 16:
              this.$ = { path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: b.stripFlags(g[d - 5], g[d]) };
              break;
            case 17:
              this.$ = { path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: b.stripFlags(g[d - 5], g[d]) };
              break;
            case 18:
              this.$ = { strip: b.stripFlags(g[d - 1], g[d - 1]), program: g[d] };
              break;
            case 19:
              var x = b.prepareBlock(g[d - 2], g[d - 1], g[d], g[d], !1, this._$), E = b.prepareProgram([x], g[d - 1].loc);
              E.chained = !0, this.$ = { strip: g[d - 2].strip, program: E, chain: !0 };
              break;
            case 20:
              this.$ = g[d];
              break;
            case 21:
              this.$ = { path: g[d - 1], strip: b.stripFlags(g[d - 2], g[d]) };
              break;
            case 22:
              this.$ = b.prepareMustache(g[d - 3], g[d - 2], g[d - 1], g[d - 4], b.stripFlags(g[d - 4], g[d]), this._$);
              break;
            case 23:
              this.$ = b.prepareMustache(g[d - 3], g[d - 2], g[d - 1], g[d - 4], b.stripFlags(g[d - 4], g[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: g[d - 3],
                params: g[d - 2],
                hash: g[d - 1],
                indent: "",
                strip: b.stripFlags(g[d - 4], g[d]),
                loc: b.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = b.preparePartialBlock(g[d - 2], g[d - 1], g[d], this._$);
              break;
            case 26:
              this.$ = { path: g[d - 3], params: g[d - 2], hash: g[d - 1], strip: b.stripFlags(g[d - 4], g[d]) };
              break;
            case 27:
              this.$ = g[d];
              break;
            case 28:
              this.$ = g[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: g[d - 3],
                params: g[d - 2],
                hash: g[d - 1],
                loc: b.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: g[d], loc: b.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: b.id(g[d - 2]), value: g[d], loc: b.locInfo(this._$) };
              break;
            case 32:
              this.$ = b.id(g[d - 1]);
              break;
            case 33:
              this.$ = g[d];
              break;
            case 34:
              this.$ = g[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: g[d], original: g[d], loc: b.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(g[d]), original: Number(g[d]), loc: b.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: g[d] === "true", original: g[d] === "true", loc: b.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: b.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: b.locInfo(this._$) };
              break;
            case 40:
              this.$ = g[d];
              break;
            case 41:
              this.$ = g[d];
              break;
            case 42:
              this.$ = b.preparePath(!0, g[d], this._$);
              break;
            case 43:
              this.$ = b.preparePath(!1, g[d], this._$);
              break;
            case 44:
              g[d - 2].push({ part: b.id(g[d]), original: g[d], separator: g[d - 1] }), this.$ = g[d - 2];
              break;
            case 45:
              this.$ = [{ part: b.id(g[d]), original: g[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              g[d - 1].push(g[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              g[d - 1].push(g[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              g[d - 1].push(g[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              g[d - 1].push(g[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              g[d - 1].push(g[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              g[d - 1].push(g[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              g[d - 1].push(g[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              g[d - 1].push(g[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              g[d - 1].push(g[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              g[d - 1].push(g[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              g[d - 1].push(g[d]);
              break;
            case 98:
              this.$ = [g[d]];
              break;
            case 99:
              g[d - 1].push(g[d]);
              break;
            case 100:
              this.$ = [g[d]];
              break;
            case 101:
              g[d - 1].push(g[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(p, h) {
          throw new Error(p);
        },
        parse: function(p) {
          var h = this, v = [0], b = [null], _ = [], g = this.table, m = "", d = 0, x = 0;
          this.lexer.setInput(p), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var E = this.lexer.yylloc;
          _.push(E);
          var T = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var le;
            return le = h.lexer.lex() || 1, typeof le != "number" && (le = h.symbols_[le] || le), le;
          }
          for (var k, C, N, M, D = {}, F, q, P, V; ; ) {
            if (C = v[v.length - 1], this.defaultActions[C] ? N = this.defaultActions[C] : ((k === null || typeof k > "u") && (k = A()), N = g[C] && g[C][k]), typeof N > "u" || !N.length || !N[0]) {
              var Y = "";
              {
                V = [];
                for (F in g[C]) this.terminals_[F] && F > 2 && V.push("'" + this.terminals_[F] + "'");
                this.lexer.showPosition ? Y = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + V.join(", ") + ", got '" + (this.terminals_[k] || k) + "'" : Y = "Parse error on line " + (d + 1) + ": Unexpected " + (k == 1 ? "end of input" : "'" + (this.terminals_[k] || k) + "'"), this.parseError(Y, { text: this.lexer.match, token: this.terminals_[k] || k, line: this.lexer.yylineno, loc: E, expected: V });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + C + ", token: " + k);
            switch (N[0]) {
              case 1:
                v.push(k), b.push(this.lexer.yytext), _.push(this.lexer.yylloc), v.push(N[1]), k = null, x = this.lexer.yyleng, m = this.lexer.yytext, d = this.lexer.yylineno, E = this.lexer.yylloc;
                break;
              case 2:
                if (q = this.productions_[N[1]][1], D.$ = b[b.length - q], D._$ = { first_line: _[_.length - (q || 1)].first_line, last_line: _[_.length - 1].last_line, first_column: _[_.length - (q || 1)].first_column, last_column: _[_.length - 1].last_column }, T && (D._$.range = [_[_.length - (q || 1)].range[0], _[_.length - 1].range[1]]), M = this.performAction.call(D, m, x, d, this.yy, N[1], b, _), typeof M < "u")
                  return M;
                q && (v = v.slice(0, -1 * q * 2), b = b.slice(0, -1 * q), _ = _.slice(0, -1 * q)), v.push(this.productions_[N[1]][0]), b.push(D.$), _.push(D._$), P = g[v[v.length - 2]][v[v.length - 1]], v.push(P);
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
          parseError: function(h, v) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, v);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var v = h.match(/(?:\r\n?|\n).*/g);
            return v ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var v = h.length, b = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - v - 1), this.offset -= v;
            var _ = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), b.length - 1 && (this.yylineno -= b.length - 1);
            var g = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: b ? (b.length === _.length ? this.yylloc.first_column : 0) + _[_.length - b.length].length - b[0].length : this.yylloc.first_column - v
            }, this.options.ranges && (this.yylloc.range = [g[0], g[0] + this.yyleng - v]), this;
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
            var h = this.pastInput(), v = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + v + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, v, b, _, g;
            this._more || (this.yytext = "", this.match = "");
            for (var m = this._currentRules(), d = 0; d < m.length && (b = this._input.match(this.rules[m[d]]), !(b && (!v || b[0].length > v[0].length) && (v = b, _ = d, !this.options.flex))); d++)
              ;
            return v ? (g = v[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + v[0].length
            }, this.yytext += v[0], this.match += v[0], this.matches = v, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(v[0].length), this.matched += v[0], h = this.performAction.call(this, this.yy, this, m[_], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return f.options = {}, f.performAction = function(h, v, b, _) {
          function g(m, d) {
            return v.yytext = v.yytext.substring(m, v.yyleng - d + m);
          }
          switch (b) {
            case 0:
              if (v.yytext.slice(-2) === "\\\\" ? (g(0, 1), this.begin("mu")) : v.yytext.slice(-1) === "\\" ? (g(0, 1), this.begin("emu")) : this.begin("mu"), v.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (g(5, 9), "END_RAW_BLOCK");
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
              this.unput(v.yytext), this.popState(), this.begin("com");
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
              return v.yytext = g(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return v.yytext = g(1, 2).replace(/\\'/g, "'"), 80;
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
              return v.yytext = v.yytext.replace(/\\([\\\]])/g, "$1"), 72;
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
    function i(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = Fn(), o = i(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(b, _) {
        var g = this.accept(b[_]);
        if (this.mutating) {
          if (g && !u.prototype[g.type])
            throw new o.default('Unexpected node type "' + g.type + '" found when accepting ' + _ + " on " + b.type);
          b[_] = g;
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
        for (var _ = 0, g = b.length; _ < g; _++)
          this.acceptKey(b, _), b[_] || (b.splice(_, 1), _--, g--);
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
    function f(v) {
      this.acceptRequired(v, "path"), this.acceptArray(v.params), this.acceptKey(v, "hash");
    }
    function p(v) {
      f.call(this, v), this.acceptKey(v, "program"), this.acceptKey(v, "inverse");
    }
    function h(v) {
      this.acceptRequired(v, "name"), this.acceptArray(v.params), this.acceptKey(v, "hash");
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
      var _ = !this.options.ignoreStandalone, g = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var m = b.body, d = 0, x = m.length; d < x; d++) {
        var E = m[d], T = this.accept(E);
        if (T) {
          var A = f(m, d, g), k = p(m, d, g), C = T.openStandalone && A, N = T.closeStandalone && k, M = T.inlineStandalone && A && k;
          T.close && h(m, d, !0), T.open && v(m, d, !0), _ && M && (h(m, d), v(m, d) && E.type === "PartialStatement" && (E.indent = /([ \t]+$)/.exec(m[d - 1].original)[1])), _ && C && (h((E.program || E.inverse).body), v(m, d)), _ && N && (h(m, d), v((E.inverse || E.program).body));
        }
      }
      return b;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(b) {
      this.accept(b.program), this.accept(b.inverse);
      var _ = b.program || b.inverse, g = b.program && b.inverse, m = g, d = g;
      if (g && g.chained)
        for (m = g.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: b.openStrip.open,
        close: b.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: p(_.body),
        closeStandalone: f((m || _).body)
      };
      if (b.openStrip.close && h(_.body, null, !0), g) {
        var E = b.inverseStrip;
        E.open && v(_.body, null, !0), E.close && h(m.body, null, !0), b.closeStrip.open && v(d.body, null, !0), !this.options.ignoreStandalone && f(_.body) && p(m.body) && (v(_.body), h(m.body));
      } else b.closeStrip.open && v(_.body, null, !0);
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
    function f(b, _, g) {
      _ === void 0 && (_ = b.length);
      var m = b[_ - 1], d = b[_ - 2];
      if (!m)
        return g;
      if (m.type === "ContentStatement")
        return (d || !g ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(m.original);
    }
    function p(b, _, g) {
      _ === void 0 && (_ = -1);
      var m = b[_ + 1], d = b[_ + 2];
      if (!m)
        return g;
      if (m.type === "ContentStatement")
        return (d || !g ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(m.original);
    }
    function h(b, _, g) {
      var m = b[_ == null ? 0 : _ + 1];
      if (!(!m || m.type !== "ContentStatement" || !g && m.rightStripped)) {
        var d = m.value;
        m.value = m.value.replace(g ? /^\s+/ : /^[ \t]*\r?\n?/, ""), m.rightStripped = m.value !== d;
      }
    }
    function v(b, _, g) {
      var m = b[_ == null ? b.length - 1 : _ - 1];
      if (!(!m || m.type !== "ContentStatement" || !g && m.leftStripped)) {
        var d = m.value;
        return m.value = m.value.replace(g ? /\s+$/ : /[ \t]+$/, ""), m.leftStripped = m.value !== d, m.leftStripped;
      }
    }
    r.default = u, t.exports = r.default;
  })(Yo, Yo.exports)), Yo.exports;
}
var hn = {}, sy;
function gE() {
  if (sy) return hn;
  sy = 1, hn.__esModule = !0, hn.SourceLocation = o, hn.id = u, hn.stripFlags = f, hn.stripComment = p, hn.preparePath = h, hn.prepareMustache = v, hn.prepareRawBlock = b, hn.prepareBlock = _, hn.prepareProgram = g, hn.preparePartialBlock = m;
  function t(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var r = Fn(), i = t(r);
  function s(d, x) {
    if (x = x.path ? x.path.original : x, d.path.original !== x) {
      var E = { loc: d.path.loc };
      throw new i.default(d.path.original + " doesn't match " + x, E);
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
  function h(d, x, E) {
    E = this.locInfo(E);
    for (var T = d ? "@" : "", A = [], k = 0, C = 0, N = x.length; C < N; C++) {
      var M = x[C].part, D = x[C].original !== M;
      if (T += (x[C].separator || "") + M, !D && (M === ".." || M === "." || M === "this")) {
        if (A.length > 0)
          throw new i.default("Invalid path: " + T, { loc: E });
        M === ".." && k++;
      } else
        A.push(M);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: k,
      parts: A,
      original: T,
      loc: E
    };
  }
  function v(d, x, E, T, A, k) {
    var C = T.charAt(3) || T.charAt(2), N = C !== "{" && C !== "&", M = /\*/.test(T);
    return {
      type: M ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: E,
      escaped: N,
      strip: A,
      loc: this.locInfo(k)
    };
  }
  function b(d, x, E, T) {
    s(d, E), T = this.locInfo(T);
    var A = {
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
      program: A,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: T
    };
  }
  function _(d, x, E, T, A, k) {
    T && T.path && s(d, T);
    var C = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var N = void 0, M = void 0;
    if (E) {
      if (C)
        throw new i.default("Unexpected inverse block on decorator", E);
      E.chain && (E.program.body[0].closeStrip = T.strip), M = E.strip, N = E.program;
    }
    return A && (A = N, N = x, x = A), {
      type: C ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: N,
      openStrip: d.strip,
      inverseStrip: M,
      closeStrip: T && T.strip,
      loc: this.locInfo(k)
    };
  }
  function g(d, x) {
    if (!x && d.length) {
      var E = d[0].loc, T = d[d.length - 1].loc;
      E && T && (x = {
        source: E.source,
        start: {
          line: E.start.line,
          column: E.start.column
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
  function m(d, x, E, T) {
    return s(d, E), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      openStrip: d.strip,
      closeStrip: E && E.strip,
      loc: this.locInfo(T)
    };
  }
  return hn;
}
var ly;
function vE() {
  if (ly) return Ti;
  ly = 1, Ti.__esModule = !0, Ti.parseWithoutProcessing = b, Ti.parse = _;
  function t(g) {
    if (g && g.__esModule)
      return g;
    var m = {};
    if (g != null)
      for (var d in g)
        Object.prototype.hasOwnProperty.call(g, d) && (m[d] = g[d]);
    return m.default = g, m;
  }
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var i = pE(), s = r(i), o = mE(), u = r(o), f = gE(), p = t(f), h = rn();
  Ti.parser = s.default;
  var v = {};
  h.extend(v, p);
  function b(g, m) {
    if (g.type === "Program")
      return g;
    s.default.yy = v, v.locInfo = function(x) {
      return new v.SourceLocation(m && m.srcName, x);
    };
    var d = s.default.parse(g);
    return d;
  }
  function _(g, m) {
    var d = b(g, m), x = new u.default(m);
    return x.accept(d);
  }
  return Ti;
}
var Oi = {}, oy;
function yE() {
  if (oy) return Oi;
  oy = 1, Oi.__esModule = !0, Oi.Compiler = p, Oi.precompile = h, Oi.compile = v;
  function t(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var r = Fn(), i = t(r), s = rn(), o = B0(), u = t(o), f = [].slice;
  function p() {
  }
  p.prototype = {
    compiler: p,
    equals: function(m) {
      var d = this.opcodes.length;
      if (m.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var E = this.opcodes[x], T = m.opcodes[x];
        if (E.opcode !== T.opcode || !b(E.args, T.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(m.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(m, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(m);
    },
    compileProgram: function(m) {
      var d = new this.compiler(), x = d.compile(m, this.options), E = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[E] = x, this.useDepths = this.useDepths || x.useDepths, E;
    },
    accept: function(m) {
      if (!this[m.type])
        throw new i.default("Unknown type: " + m.type, m);
      this.sourceNode.unshift(m);
      var d = this[m.type](m);
      return this.sourceNode.shift(), d;
    },
    Program: function(m) {
      this.options.blockParams.unshift(m.blockParams);
      for (var d = m.body, x = d.length, E = 0; E < x; E++)
        this.accept(d[E]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = m.blockParams ? m.blockParams.length : 0, this;
    },
    BlockStatement: function(m) {
      _(m);
      var d = m.program, x = m.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var E = this.classifySexpr(m);
      E === "helper" ? this.helperSexpr(m, d, x) : E === "simple" ? (this.simpleSexpr(m), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", m.path.original)) : (this.ambiguousSexpr(m, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(m) {
      var d = m.program && this.compileProgram(m.program), x = this.setupFullMustacheParams(m, d, void 0), E = m.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, E.original);
    },
    PartialStatement: function(m) {
      this.usePartial = !0;
      var d = m.program;
      d && (d = this.compileProgram(m.program));
      var x = m.params;
      if (x.length > 1)
        throw new i.default("Unsupported number of partial arguments: " + x.length, m);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var E = m.name.original, T = m.name.type === "SubExpression";
      T && this.accept(m.name), this.setupFullMustacheParams(m, d, void 0, !0);
      var A = m.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", T, E, A), this.opcode("append");
    },
    PartialBlockStatement: function(m) {
      this.PartialStatement(m);
    },
    MustacheStatement: function(m) {
      this.SubExpression(m), m.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(m) {
      this.DecoratorBlock(m);
    },
    ContentStatement: function(m) {
      m.value && this.opcode("appendContent", m.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(m) {
      _(m);
      var d = this.classifySexpr(m);
      d === "simple" ? this.simpleSexpr(m) : d === "helper" ? this.helperSexpr(m) : this.ambiguousSexpr(m);
    },
    ambiguousSexpr: function(m, d, x) {
      var E = m.path, T = E.parts[0], A = d != null || x != null;
      this.opcode("getContext", E.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), E.strict = !0, this.accept(E), this.opcode("invokeAmbiguous", T, A);
    },
    simpleSexpr: function(m) {
      var d = m.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(m, d, x) {
      var E = this.setupFullMustacheParams(m, d, x), T = m.path, A = T.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", E.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new i.default("You specified knownHelpersOnly, but used the unknown helper " + A, m);
        T.strict = !0, T.falsy = !0, this.accept(T), this.opcode("invokeHelper", E.length, T.original, u.default.helpers.simpleId(T));
      }
    },
    PathExpression: function(m) {
      this.addDepth(m.depth), this.opcode("getContext", m.depth);
      var d = m.parts[0], x = u.default.helpers.scopedId(m), E = !m.depth && !x && this.blockParamIndex(d);
      E ? this.opcode("lookupBlockParam", E, m.parts) : d ? m.data ? (this.options.data = !0, this.opcode("lookupData", m.depth, m.parts, m.strict)) : this.opcode("lookupOnContext", m.parts, m.falsy, m.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(m) {
      this.opcode("pushString", m.value);
    },
    NumberLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    BooleanLiteral: function(m) {
      this.opcode("pushLiteral", m.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(m) {
      var d = m.pairs, x = 0, E = d.length;
      for (this.opcode("pushHash"); x < E; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(m) {
      this.opcodes.push({
        opcode: m,
        args: f.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(m) {
      m && (this.useDepths = !0);
    },
    classifySexpr: function(m) {
      var d = u.default.helpers.simpleId(m.path), x = d && !!this.blockParamIndex(m.path.parts[0]), E = !x && u.default.helpers.helperExpression(m), T = !x && (E || d);
      if (T && !E) {
        var A = m.path.parts[0], k = this.options;
        k.knownHelpers[A] ? E = !0 : k.knownHelpersOnly && (T = !1);
      }
      return E ? "helper" : T ? "ambiguous" : "simple";
    },
    pushParams: function(m) {
      for (var d = 0, x = m.length; d < x; d++)
        this.pushParam(m[d]);
    },
    pushParam: function(m) {
      var d = m.value != null ? m.value : m.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), m.depth && this.addDepth(m.depth), this.opcode("getContext", m.depth || 0), this.opcode("pushStringParam", d, m.type), m.type === "SubExpression" && this.accept(m);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (m.parts && !u.default.helpers.scopedId(m) && !m.depth && (x = this.blockParamIndex(m.parts[0])), x) {
            var E = m.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, E);
          } else
            d = m.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", m.type, d);
        }
        this.accept(m);
      }
    },
    setupFullMustacheParams: function(m, d, x, E) {
      var T = m.params;
      return this.pushParams(T), this.opcode("pushProgram", d), this.opcode("pushProgram", x), m.hash ? this.accept(m.hash) : this.opcode("emptyHash", E), T;
    },
    blockParamIndex: function(m) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var E = this.options.blockParams[d], T = E && s.indexOf(E, m);
        if (E && T >= 0)
          return [d, T];
      }
    }
  };
  function h(g, m, d) {
    if (g == null || typeof g != "string" && g.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + g);
    m = m || {}, "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = d.parse(g, m), E = new d.Compiler().compile(x, m);
    return new d.JavaScriptCompiler().compile(E, m);
  }
  function v(g, m, d) {
    if (m === void 0 && (m = {}), g == null || typeof g != "string" && g.type !== "Program")
      throw new i.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + g);
    m = s.extend({}, m), "data" in m || (m.data = !0), m.compat && (m.useDepths = !0);
    var x = void 0;
    function E() {
      var A = d.parse(g, m), k = new d.Compiler().compile(A, m), C = new d.JavaScriptCompiler().compile(k, m, void 0, !0);
      return d.template(C);
    }
    function T(A, k) {
      return x || (x = E()), x.call(this, A, k);
    }
    return T._setup = function(A) {
      return x || (x = E()), x._setup(A);
    }, T._child = function(A, k, C, N) {
      return x || (x = E()), x._child(A, k, C, N);
    }, T;
  }
  function b(g, m) {
    if (g === m)
      return !0;
    if (s.isArray(g) && s.isArray(m) && g.length === m.length) {
      for (var d = 0; d < g.length; d++)
        if (!b(g[d], m[d]))
          return !1;
      return !0;
    }
  }
  function _(g) {
    if (!g.path.parts) {
      var m = g.path;
      g.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [m.original + ""],
        original: m.original + "",
        loc: m.loc
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
    var i = 65, s = 90, o = 97, u = 122, f = 48, p = 57, h = 43, v = 47, b = 26, _ = 52;
    return i <= r && r <= s ? r - i : o <= r && r <= u ? r - o + b : f <= r && r <= p ? r - f + _ : r == h ? 62 : r == v ? 63 : -1;
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
    var h = (p & 1) === 1, v = p >> 1;
    return h ? -v : v;
  }
  return Jo.encode = function(h) {
    var v = "", b, _ = u(h);
    do
      b = _ & s, _ >>>= r, _ > 0 && (b |= o), v += t.encode(b);
    while (_ > 0);
    return v;
  }, Jo.decode = function(h, v, b) {
    var _ = h.length, g = 0, m = 0, d, x;
    do {
      if (v >= _)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = t.decode(h.charCodeAt(v++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(v - 1));
      d = !!(x & o), x &= s, g = g + (x << m), m += r;
    } while (d);
    b.value = f(g), b.rest = v;
  }, Jo;
}
var ld = {}, fy;
function ll() {
  return fy || (fy = 1, (function(t) {
    function r(C, N, M) {
      if (N in C)
        return C[N];
      if (arguments.length === 3)
        return M;
      throw new Error('"' + N + '" is a required argument.');
    }
    t.getArg = r;
    var i = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function o(C) {
      var N = C.match(i);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    t.urlParse = o;
    function u(C) {
      var N = "";
      return C.scheme && (N += C.scheme + ":"), N += "//", C.auth && (N += C.auth + "@"), C.host && (N += C.host), C.port && (N += ":" + C.port), C.path && (N += C.path), N;
    }
    t.urlGenerate = u;
    function f(C) {
      var N = C, M = o(C);
      if (M) {
        if (!M.path)
          return C;
        N = M.path;
      }
      for (var D = t.isAbsolute(N), F = N.split(/\/+/), q, P = 0, V = F.length - 1; V >= 0; V--)
        q = F[V], q === "." ? F.splice(V, 1) : q === ".." ? P++ : P > 0 && (q === "" ? (F.splice(V + 1, P), P = 0) : (F.splice(V, 2), P--));
      return N = F.join("/"), N === "" && (N = D ? "/" : "."), M ? (M.path = N, u(M)) : N;
    }
    t.normalize = f;
    function p(C, N) {
      C === "" && (C = "."), N === "" && (N = ".");
      var M = o(N), D = o(C);
      if (D && (C = D.path || "/"), M && !M.scheme)
        return D && (M.scheme = D.scheme), u(M);
      if (M || N.match(s))
        return N;
      if (D && !D.host && !D.path)
        return D.host = N, u(D);
      var F = N.charAt(0) === "/" ? N : f(C.replace(/\/+$/, "") + "/" + N);
      return D ? (D.path = F, u(D)) : F;
    }
    t.join = p, t.isAbsolute = function(C) {
      return C.charAt(0) === "/" || i.test(C);
    };
    function h(C, N) {
      C === "" && (C = "."), C = C.replace(/\/$/, "");
      for (var M = 0; N.indexOf(C + "/") !== 0; ) {
        var D = C.lastIndexOf("/");
        if (D < 0 || (C = C.slice(0, D), C.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++M;
      }
      return Array(M + 1).join("../") + N.substr(C.length + 1);
    }
    t.relative = h;
    var v = (function() {
      var C = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in C);
    })();
    function b(C) {
      return C;
    }
    function _(C) {
      return m(C) ? "$" + C : C;
    }
    t.toSetString = v ? b : _;
    function g(C) {
      return m(C) ? C.slice(1) : C;
    }
    t.fromSetString = v ? b : g;
    function m(C) {
      if (!C)
        return !1;
      var N = C.length;
      if (N < 9 || C.charCodeAt(N - 1) !== 95 || C.charCodeAt(N - 2) !== 95 || C.charCodeAt(N - 3) !== 111 || C.charCodeAt(N - 4) !== 116 || C.charCodeAt(N - 5) !== 111 || C.charCodeAt(N - 6) !== 114 || C.charCodeAt(N - 7) !== 112 || C.charCodeAt(N - 8) !== 95 || C.charCodeAt(N - 9) !== 95)
        return !1;
      for (var M = N - 10; M >= 0; M--)
        if (C.charCodeAt(M) !== 36)
          return !1;
      return !0;
    }
    function d(C, N, M) {
      var D = E(C.source, N.source);
      return D !== 0 || (D = C.originalLine - N.originalLine, D !== 0) || (D = C.originalColumn - N.originalColumn, D !== 0 || M) || (D = C.generatedColumn - N.generatedColumn, D !== 0) || (D = C.generatedLine - N.generatedLine, D !== 0) ? D : E(C.name, N.name);
    }
    t.compareByOriginalPositions = d;
    function x(C, N, M) {
      var D = C.generatedLine - N.generatedLine;
      return D !== 0 || (D = C.generatedColumn - N.generatedColumn, D !== 0 || M) || (D = E(C.source, N.source), D !== 0) || (D = C.originalLine - N.originalLine, D !== 0) || (D = C.originalColumn - N.originalColumn, D !== 0) ? D : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsDeflated = x;
    function E(C, N) {
      return C === N ? 0 : C === null ? 1 : N === null ? -1 : C > N ? 1 : -1;
    }
    function T(C, N) {
      var M = C.generatedLine - N.generatedLine;
      return M !== 0 || (M = C.generatedColumn - N.generatedColumn, M !== 0) || (M = E(C.source, N.source), M !== 0) || (M = C.originalLine - N.originalLine, M !== 0) || (M = C.originalColumn - N.originalColumn, M !== 0) ? M : E(C.name, N.name);
    }
    t.compareByGeneratedPositionsInflated = T;
    function A(C) {
      return JSON.parse(C.replace(/^\)]}'[^\n]*\n/, ""));
    }
    t.parseSourceMapInput = A;
    function k(C, N, M) {
      if (N = N || "", C && (C[C.length - 1] !== "/" && N[0] !== "/" && (C += "/"), N = C + N), M) {
        var D = o(M);
        if (!D)
          throw new Error("sourceMapURL could not be parsed");
        if (D.path) {
          var F = D.path.lastIndexOf("/");
          F >= 0 && (D.path = D.path.substring(0, F + 1));
        }
        N = p(u(D), N);
      }
      return f(N);
    }
    t.computeSourceURL = k;
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
    for (var p = new s(), h = 0, v = u.length; h < v; h++)
      p.add(u[h], f);
    return p;
  }, s.prototype.size = function() {
    return i ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, f) {
    var p = i ? u : t.toSetString(u), h = i ? this.has(u) : r.call(this._set, p), v = this._array.length;
    (!h || f) && this._array.push(u), h || (i ? this._set.set(u, v) : this._set[p] = v);
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
    return f.eachMapping(function(v) {
      var b = {
        generated: {
          line: v.generatedLine,
          column: v.generatedColumn
        }
      };
      v.source != null && (b.source = v.source, p != null && (b.source = r.relative(p, b.source)), b.original = {
        line: v.originalLine,
        column: v.originalColumn
      }, v.name != null && (b.name = v.name)), h.addMapping(b);
    }), f.sources.forEach(function(v) {
      var b = v;
      p !== null && (b = r.relative(p, v)), h._sources.has(b) || h._sources.add(b);
      var _ = f.sourceContentFor(v);
      _ != null && h.setSourceContent(v, _);
    }), h;
  }, o.prototype.addMapping = function(f) {
    var p = r.getArg(f, "generated"), h = r.getArg(f, "original", null), v = r.getArg(f, "source", null), b = r.getArg(f, "name", null);
    this._skipValidation || this._validateMapping(p, h, v, b), v != null && (v = String(v), this._sources.has(v) || this._sources.add(v)), b != null && (b = String(b), this._names.has(b) || this._names.add(b)), this._mappings.add({
      generatedLine: p.line,
      generatedColumn: p.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: v,
      name: b
    });
  }, o.prototype.setSourceContent = function(f, p) {
    var h = f;
    this._sourceRoot != null && (h = r.relative(this._sourceRoot, h)), p != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[r.toSetString(h)] = p) : this._sourcesContents && (delete this._sourcesContents[r.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, o.prototype.applySourceMap = function(f, p, h) {
    var v = p;
    if (p == null) {
      if (f.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      v = f.file;
    }
    var b = this._sourceRoot;
    b != null && (v = r.relative(b, v));
    var _ = new i(), g = new i();
    this._mappings.unsortedForEach(function(m) {
      if (m.source === v && m.originalLine != null) {
        var d = f.originalPositionFor({
          line: m.originalLine,
          column: m.originalColumn
        });
        d.source != null && (m.source = d.source, h != null && (m.source = r.join(h, m.source)), b != null && (m.source = r.relative(b, m.source)), m.originalLine = d.line, m.originalColumn = d.column, d.name != null && (m.name = d.name));
      }
      var x = m.source;
      x != null && !_.has(x) && _.add(x);
      var E = m.name;
      E != null && !g.has(E) && g.add(E);
    }, this), this._sources = _, this._names = g, f.sources.forEach(function(m) {
      var d = f.sourceContentFor(m);
      d != null && (h != null && (m = r.join(h, m)), b != null && (m = r.relative(b, m)), this.setSourceContent(m, d));
    }, this);
  }, o.prototype._validateMapping = function(f, p, h, v) {
    if (p && typeof p.line != "number" && typeof p.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(f && "line" in f && "column" in f && f.line > 0 && f.column >= 0 && !p && !h && !v)) {
      if (f && "line" in f && "column" in f && p && "line" in p && "column" in p && f.line > 0 && f.column >= 0 && p.line > 0 && p.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: f,
        source: h,
        original: p,
        name: v
      }));
    }
  }, o.prototype._serializeMappings = function() {
    for (var f = 0, p = 1, h = 0, v = 0, b = 0, _ = 0, g = "", m, d, x, E, T = this._mappings.toArray(), A = 0, k = T.length; A < k; A++) {
      if (d = T[A], m = "", d.generatedLine !== p)
        for (f = 0; d.generatedLine !== p; )
          m += ";", p++;
      else if (A > 0) {
        if (!r.compareByGeneratedPositionsInflated(d, T[A - 1]))
          continue;
        m += ",";
      }
      m += t.encode(d.generatedColumn - f), f = d.generatedColumn, d.source != null && (E = this._sources.indexOf(d.source), m += t.encode(E - _), _ = E, m += t.encode(d.originalLine - 1 - v), v = d.originalLine - 1, m += t.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), m += t.encode(x - b), b = x)), g += m;
    }
    return g;
  }, o.prototype._generateSourcesContent = function(f, p) {
    return f.map(function(h) {
      if (!this._sourcesContents)
        return null;
      p != null && (h = r.relative(p, h));
      var v = r.toSetString(h);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, v) ? this._sourcesContents[v] : null;
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
      var h = Math.floor((s - i) / 2) + i, v = f(o, u[h], !0);
      return v === 0 ? h : v > 0 ? s - h > 1 ? r(h, s, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - i > 1 ? r(i, h, o, u, f, p) : p == t.LEAST_UPPER_BOUND ? h : i < 0 ? -1 : i;
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
      for (var v = s[f], b = u; b < f; b++)
        o(s[b], v) <= 0 && (h += 1, t(s, h, b));
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
  function u(v, b) {
    var _ = v;
    return typeof v == "string" && (_ = t.parseSourceMapInput(v)), _.sections != null ? new h(_, b) : new f(_, b);
  }
  u.fromSourceMap = function(v, b) {
    return f.fromSourceMap(v, b);
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
    var g = b.charAt(_);
    return g === ";" || g === ",";
  }, u.prototype._parseMappings = function(b, _) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(b, _, g) {
    var m = _ || null, d = g || u.GENERATED_ORDER, x;
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
    var E = this.sourceRoot;
    x.map(function(T) {
      var A = T.source === null ? null : this._sources.at(T.source);
      return A = t.computeSourceURL(E, A, this._sourceMapURL), {
        source: A,
        generatedLine: T.generatedLine,
        generatedColumn: T.generatedColumn,
        originalLine: T.originalLine,
        originalColumn: T.originalColumn,
        name: T.name === null ? null : this._names.at(T.name)
      };
    }, this).forEach(b, m);
  }, u.prototype.allGeneratedPositionsFor = function(b) {
    var _ = t.getArg(b, "line"), g = {
      source: t.getArg(b, "source"),
      originalLine: _,
      originalColumn: t.getArg(b, "column", 0)
    };
    if (g.source = this._findSourceIndex(g.source), g.source < 0)
      return [];
    var m = [], d = this._findMapping(
      g,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      r.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var x = this._originalMappings[d];
      if (b.column === void 0)
        for (var E = x.originalLine; x && x.originalLine === E; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var T = x.originalColumn; x && x.originalLine === _ && x.originalColumn == T; )
          m.push({
            line: t.getArg(x, "generatedLine", null),
            column: t.getArg(x, "generatedColumn", null),
            lastColumn: t.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return m;
  }, Fs.SourceMapConsumer = u;
  function f(v, b) {
    var _ = v;
    typeof v == "string" && (_ = t.parseSourceMapInput(v));
    var g = t.getArg(_, "version"), m = t.getArg(_, "sources"), d = t.getArg(_, "names", []), x = t.getArg(_, "sourceRoot", null), E = t.getArg(_, "sourcesContent", null), T = t.getArg(_, "mappings"), A = t.getArg(_, "file", null);
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    x && (x = t.normalize(x)), m = m.map(String).map(t.normalize).map(function(k) {
      return x && t.isAbsolute(x) && t.isAbsolute(k) ? t.relative(x, k) : k;
    }), this._names = i.fromArray(d.map(String), !0), this._sources = i.fromArray(m, !0), this._absoluteSources = this._sources.toArray().map(function(k) {
      return t.computeSourceURL(x, k, b);
    }), this.sourceRoot = x, this.sourcesContent = E, this._mappings = T, this._sourceMapURL = b, this.file = A;
  }
  f.prototype = Object.create(u.prototype), f.prototype.consumer = u, f.prototype._findSourceIndex = function(v) {
    var b = v;
    if (this.sourceRoot != null && (b = t.relative(this.sourceRoot, b)), this._sources.has(b))
      return this._sources.indexOf(b);
    var _;
    for (_ = 0; _ < this._absoluteSources.length; ++_)
      if (this._absoluteSources[_] == v)
        return _;
    return -1;
  }, f.fromSourceMap = function(b, _) {
    var g = Object.create(f.prototype), m = g._names = i.fromArray(b._names.toArray(), !0), d = g._sources = i.fromArray(b._sources.toArray(), !0);
    g.sourceRoot = b._sourceRoot, g.sourcesContent = b._generateSourcesContent(
      g._sources.toArray(),
      g.sourceRoot
    ), g.file = b._file, g._sourceMapURL = _, g._absoluteSources = g._sources.toArray().map(function(M) {
      return t.computeSourceURL(g.sourceRoot, M, _);
    });
    for (var x = b._mappings.toArray().slice(), E = g.__generatedMappings = [], T = g.__originalMappings = [], A = 0, k = x.length; A < k; A++) {
      var C = x[A], N = new p();
      N.generatedLine = C.generatedLine, N.generatedColumn = C.generatedColumn, C.source && (N.source = d.indexOf(C.source), N.originalLine = C.originalLine, N.originalColumn = C.originalColumn, C.name && (N.name = m.indexOf(C.name)), T.push(N)), E.push(N);
    }
    return o(g.__originalMappings, t.compareByOriginalPositions), g;
  }, f.prototype._version = 3, Object.defineProperty(f.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function p() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  f.prototype._parseMappings = function(b, _) {
    for (var g = 1, m = 0, d = 0, x = 0, E = 0, T = 0, A = b.length, k = 0, C = {}, N = {}, M = [], D = [], F, q, P, V, Y; k < A; )
      if (b.charAt(k) === ";")
        g++, k++, m = 0;
      else if (b.charAt(k) === ",")
        k++;
      else {
        for (F = new p(), F.generatedLine = g, V = k; V < A && !this._charIsMappingSeparator(b, V); V++)
          ;
        if (q = b.slice(k, V), P = C[q], P)
          k += q.length;
        else {
          for (P = []; k < V; )
            s.decode(b, k, N), Y = N.value, k = N.rest, P.push(Y);
          if (P.length === 2)
            throw new Error("Found a source, but no line and column");
          if (P.length === 3)
            throw new Error("Found a source and line, but no column");
          C[q] = P;
        }
        F.generatedColumn = m + P[0], m = F.generatedColumn, P.length > 1 && (F.source = E + P[1], E += P[1], F.originalLine = d + P[2], d = F.originalLine, F.originalLine += 1, F.originalColumn = x + P[3], x = F.originalColumn, P.length > 4 && (F.name = T + P[4], T += P[4])), D.push(F), typeof F.originalLine == "number" && M.push(F);
      }
    o(D, t.compareByGeneratedPositionsDeflated), this.__generatedMappings = D, o(M, t.compareByOriginalPositions), this.__originalMappings = M;
  }, f.prototype._findMapping = function(b, _, g, m, d, x) {
    if (b[g] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + b[g]);
    if (b[m] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + b[m]);
    return r.search(b, _, d, x);
  }, f.prototype.computeColumnSpans = function() {
    for (var b = 0; b < this._generatedMappings.length; ++b) {
      var _ = this._generatedMappings[b];
      if (b + 1 < this._generatedMappings.length) {
        var g = this._generatedMappings[b + 1];
        if (_.generatedLine === g.generatedLine) {
          _.lastGeneratedColumn = g.generatedColumn - 1;
          continue;
        }
      }
      _.lastGeneratedColumn = 1 / 0;
    }
  }, f.prototype.originalPositionFor = function(b) {
    var _ = {
      generatedLine: t.getArg(b, "line"),
      generatedColumn: t.getArg(b, "column")
    }, g = this._findMapping(
      _,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      t.compareByGeneratedPositionsDeflated,
      t.getArg(b, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (g >= 0) {
      var m = this._generatedMappings[g];
      if (m.generatedLine === _.generatedLine) {
        var d = t.getArg(m, "source", null);
        d !== null && (d = this._sources.at(d), d = t.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var x = t.getArg(m, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
          line: t.getArg(m, "originalLine", null),
          column: t.getArg(m, "originalColumn", null),
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
    var g = this._findSourceIndex(b);
    if (g >= 0)
      return this.sourcesContent[g];
    var m = b;
    this.sourceRoot != null && (m = t.relative(this.sourceRoot, m));
    var d;
    if (this.sourceRoot != null && (d = t.urlParse(this.sourceRoot))) {
      var x = m.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + m))
        return this.sourcesContent[this._sources.indexOf("/" + m)];
    }
    if (_)
      return null;
    throw new Error('"' + m + '" is not in the SourceMap.');
  }, f.prototype.generatedPositionFor = function(b) {
    var _ = t.getArg(b, "source");
    if (_ = this._findSourceIndex(_), _ < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var g = {
      source: _,
      originalLine: t.getArg(b, "line"),
      originalColumn: t.getArg(b, "column")
    }, m = this._findMapping(
      g,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      t.compareByOriginalPositions,
      t.getArg(b, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var d = this._originalMappings[m];
      if (d.source === g.source)
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
  function h(v, b) {
    var _ = v;
    typeof v == "string" && (_ = t.parseSourceMapInput(v));
    var g = t.getArg(_, "version"), m = t.getArg(_, "sections");
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    this._sources = new i(), this._names = new i();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = m.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var E = t.getArg(x, "offset"), T = t.getArg(E, "line"), A = t.getArg(E, "column");
      if (T < d.line || T === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = E, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: T + 1,
          generatedColumn: A + 1
        },
        consumer: new u(t.getArg(x, "map"), b)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var v = [], b = 0; b < this._sections.length; b++)
        for (var _ = 0; _ < this._sections[b].consumer.sources.length; _++)
          v.push(this._sections[b].consumer.sources[_]);
      return v;
    }
  }), h.prototype.originalPositionFor = function(b) {
    var _ = {
      generatedLine: t.getArg(b, "line"),
      generatedColumn: t.getArg(b, "column")
    }, g = r.search(
      _,
      this._sections,
      function(d, x) {
        var E = d.generatedLine - x.generatedOffset.generatedLine;
        return E || d.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), m = this._sections[g];
    return m ? m.consumer.originalPositionFor({
      line: _.generatedLine - (m.generatedOffset.generatedLine - 1),
      column: _.generatedColumn - (m.generatedOffset.generatedLine === _.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
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
    for (var g = 0; g < this._sections.length; g++) {
      var m = this._sections[g], d = m.consumer.sourceContentFor(b, !0);
      if (d)
        return d;
    }
    if (_)
      return null;
    throw new Error('"' + b + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(b) {
    for (var _ = 0; _ < this._sections.length; _++) {
      var g = this._sections[_];
      if (g.consumer._findSourceIndex(t.getArg(b, "source")) !== -1) {
        var m = g.consumer.generatedPositionFor(b);
        if (m) {
          var d = {
            line: m.line + (g.generatedOffset.generatedLine - 1),
            column: m.column + (g.generatedOffset.generatedLine === m.line ? g.generatedOffset.generatedColumn - 1 : 0)
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
    for (var g = 0; g < this._sections.length; g++)
      for (var m = this._sections[g], d = m.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var E = d[x], T = m.consumer._sources.at(E.source);
        T = t.computeSourceURL(m.consumer.sourceRoot, T, this._sourceMapURL), this._sources.add(T), T = this._sources.indexOf(T);
        var A = null;
        E.name && (A = m.consumer._names.at(E.name), this._names.add(A), A = this._names.indexOf(A));
        var k = {
          source: T,
          generatedLine: E.generatedLine + (m.generatedOffset.generatedLine - 1),
          generatedColumn: E.generatedColumn + (m.generatedOffset.generatedLine === E.generatedLine ? m.generatedOffset.generatedColumn - 1 : 0),
          originalLine: E.originalLine,
          originalColumn: E.originalColumn,
          name: A
        };
        this.__generatedMappings.push(k), typeof k.originalLine == "number" && this.__originalMappings.push(k);
      }
    o(this.__generatedMappings, t.compareByGeneratedPositionsDeflated), o(this.__originalMappings, t.compareByOriginalPositions);
  }, Fs.IndexedSourceMapConsumer = h, Fs;
}
var dd = {}, yy;
function CE() {
  if (yy) return dd;
  yy = 1;
  var t = F0().SourceMapGenerator, r = ll(), i = /(\r?\n)/, s = 10, o = "$$$isSourceNode$$$";
  function u(f, p, h, v, b) {
    this.children = [], this.sourceContents = {}, this.line = f ?? null, this.column = p ?? null, this.source = h ?? null, this.name = b ?? null, this[o] = !0, v != null && this.add(v);
  }
  return u.fromStringWithSourceMap = function(p, h, v) {
    var b = new u(), _ = p.split(i), g = 0, m = function() {
      var A = C(), k = C() || "";
      return A + k;
      function C() {
        return g < _.length ? _[g++] : void 0;
      }
    }, d = 1, x = 0, E = null;
    return h.eachMapping(function(A) {
      if (E !== null)
        if (d < A.generatedLine)
          T(E, m()), d++, x = 0;
        else {
          var k = _[g] || "", C = k.substr(0, A.generatedColumn - x);
          _[g] = k.substr(A.generatedColumn - x), x = A.generatedColumn, T(E, C), E = A;
          return;
        }
      for (; d < A.generatedLine; )
        b.add(m()), d++;
      if (x < A.generatedColumn) {
        var k = _[g] || "";
        b.add(k.substr(0, A.generatedColumn)), _[g] = k.substr(A.generatedColumn), x = A.generatedColumn;
      }
      E = A;
    }, this), g < _.length && (E && T(E, m()), b.add(_.splice(g).join(""))), h.sources.forEach(function(A) {
      var k = h.sourceContentFor(A);
      k != null && (v != null && (A = r.join(v, A)), b.setSourceContent(A, k));
    }), b;
    function T(A, k) {
      if (A === null || A.source === void 0)
        b.add(k);
      else {
        var C = v ? r.join(v, A.source) : A.source;
        b.add(new u(
          A.originalLine,
          A.originalColumn,
          C,
          k,
          A.name
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
    for (var h, v = 0, b = this.children.length; v < b; v++)
      h = this.children[v], h[o] ? h.walk(p) : h !== "" && p(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(p) {
    var h, v, b = this.children.length;
    if (b > 0) {
      for (h = [], v = 0; v < b - 1; v++)
        h.push(this.children[v]), h.push(p);
      h.push(this.children[v]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(p, h) {
    var v = this.children[this.children.length - 1];
    return v[o] ? v.replaceRight(p, h) : typeof v == "string" ? this.children[this.children.length - 1] = v.replace(p, h) : this.children.push("".replace(p, h)), this;
  }, u.prototype.setSourceContent = function(p, h) {
    this.sourceContents[r.toSetString(p)] = h;
  }, u.prototype.walkSourceContents = function(p) {
    for (var h = 0, v = this.children.length; h < v; h++)
      this.children[h][o] && this.children[h].walkSourceContents(p);
    for (var b = Object.keys(this.sourceContents), h = 0, v = b.length; h < v; h++)
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
    }, v = new t(p), b = !1, _ = null, g = null, m = null, d = null;
    return this.walk(function(x, E) {
      h.code += x, E.source !== null && E.line !== null && E.column !== null ? ((_ !== E.source || g !== E.line || m !== E.column || d !== E.name) && v.addMapping({
        source: E.source,
        original: {
          line: E.line,
          column: E.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: E.name
      }), _ = E.source, g = E.line, m = E.column, d = E.name, b = !0) : b && (v.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), _ = null, b = !1);
      for (var T = 0, A = x.length; T < A; T++)
        x.charCodeAt(T) === s ? (h.line++, h.column = 0, T + 1 === A ? (_ = null, b = !1) : b && v.addMapping({
          source: E.source,
          original: {
            line: E.line,
            column: E.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: E.name
        })) : h.column++;
    }), this.walkSourceContents(function(x, E) {
      v.setSourceContent(x, E);
    }), { code: h.code, map: v };
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
    var i = rn(), s = void 0;
    try {
      var o = wE();
      s = o.SourceNode;
    } catch {
    }
    s || (s = function(p, h, v, b) {
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
    function u(p, h, v) {
      if (i.isArray(p)) {
        for (var b = [], _ = 0, g = p.length; _ < g; _++)
          b.push(h.wrap(p[_], v));
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
      prepend: function(h, v) {
        this.source.unshift(this.wrap(h, v));
      },
      push: function(h, v) {
        this.source.push(this.wrap(h, v));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(v) {
          h.add(["  ", v, `
`]);
        }), h;
      },
      each: function(h) {
        for (var v = 0, b = this.source.length; v < b; v++)
          h(this.source[v]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var v = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, v), new s(v.start.line, v.start.column, this.srcFile, h));
      },
      functionCall: function(h, v, b) {
        return b = this.generateList(b), this.wrap([h, v ? "." + v + "(" : "(", b, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var v = this, b = [];
        Object.keys(h).forEach(function(g) {
          var m = u(h[g], v);
          m !== "undefined" && b.push([v.quotedString(g), ":", m]);
        });
        var _ = this.generateList(b);
        return _.prepend("{"), _.add("}"), _;
      },
      generateList: function(h) {
        for (var v = this.empty(), b = 0, _ = h.length; b < _; b++)
          b && v.add(","), v.add(u(h[b], this));
        return v;
      },
      generateArray: function(h) {
        var v = this.generateList(h);
        return v.prepend("["), v.add("]"), v;
      }
    }, r.default = f, t.exports = r.default;
  })(Qo, Qo.exports)), Qo.exports;
}
var Sy;
function NE() {
  return Sy || (Sy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = th(), o = Fn(), u = i(o), f = rn(), p = AE(), h = i(p);
    function v(g) {
      this.value = g;
    }
    function b() {
    }
    b.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(m, d) {
        return this.internalNameLookup(m, d);
      },
      depthedLookup: function(m) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(m), ")"];
      },
      compilerInfo: function() {
        var m = s.COMPILER_REVISION, d = s.REVISION_CHANGES[m];
        return [m, d];
      },
      appendToBuffer: function(m, d, x) {
        return f.isArray(m) || (m = [m]), m = this.source.wrap(m, d), this.environment.isSimple ? ["return ", m, ";"] : x ? ["buffer += ", m, ";"] : (m.appendToBuffer = !0, m);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(m, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", m, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(m, d, x, E) {
        this.environment = m, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !E, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(m, d), this.useDepths = this.useDepths || m.useDepths || m.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || m.useBlockParams;
        var T = m.opcodes, A = void 0, k = void 0, C = void 0, N = void 0;
        for (C = 0, N = T.length; C < N; C++)
          A = T[C], this.source.currentLocation = A.loc, k = k || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = k, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), E ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var M = this.createFunctionContext(E);
        if (this.isChild)
          return M;
        var D = {
          compiler: this.compilerInfo(),
          main: M
        };
        this.decorators && (D.main_d = this.decorators, D.useDecorators = !0);
        var F = this.context, q = F.programs, P = F.decorators;
        for (C = 0, N = q.length; C < N; C++)
          q[C] && (D[C] = q[C], P[C] && (D[C + "_d"] = P[C], D.useDecorators = !0));
        return this.environment.usePartial && (D.usePartial = !0), this.options.data && (D.useData = !0), this.useDepths && (D.useDepths = !0), this.useBlockParams && (D.useBlockParams = !0), this.options.compat && (D.compat = !0), E ? D.compilerOptions = this.options : (D.compiler = JSON.stringify(D.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, D = this.objectLiteral(D), d.srcName ? (D = D.toStringWithSourceMap({ file: d.destName }), D.map = D.map && D.map.toString()) : D = D.toString()), D;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(m) {
        var d = this, x = "", E = this.stackVars.concat(this.registers.list);
        E.length > 0 && (x += ", " + E.join(", "));
        var T = 0;
        Object.keys(this.aliases).forEach(function(C) {
          var N = d.aliases[C];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++T + "=" + C, N.children[0] = "alias" + T);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var k = this.mergeSource(x);
        return m ? (A.push(k), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, k, "}"]);
      },
      mergeSource: function(m) {
        var d = this.environment.isSimple, x = !this.forceBuffer, E = void 0, T = void 0, A = void 0, k = void 0;
        return this.source.each(function(C) {
          C.appendToBuffer ? (A ? C.prepend("  + ") : A = C, k = C) : (A && (T ? A.prepend("buffer += ") : E = !0, k.add(";"), A = k = void 0), T = !0, d || (x = !1));
        }), x ? A ? (A.prepend("return "), k.add(";")) : T || this.source.push('return "";') : (m += ", buffer = " + (E ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), k.add(";")) : this.source.push("return buffer;")), m && this.source.prepend("var " + m.substring(2) + (E ? "" : `;
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
      blockValue: function(m) {
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(m, 0, x);
        var E = this.popStack();
        x.splice(1, 0, E), this.push(this.source.functionCall(d, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var m = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(m, "call", d), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(m) {
        this.pendingContent ? m = this.pendingContent + m : this.pendingLocation = this.source.currentLocation, this.pendingContent = m;
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
          var m = this.popStack();
          this.pushSource(["if (", m, " != null) { ", this.appendToBuffer(m, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(m) {
        this.lastContext = m;
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
      lookupOnContext: function(m, d, x, E) {
        var T = 0;
        !E && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(m[T++])) : this.pushContext(), this.resolvePath("context", m, T, d, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(m, d) {
        this.useBlockParams = !0, this.push(["blockParams[", m[0], "][", m[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(m, d, x) {
        m ? this.pushStackLiteral("container.data(data, " + m + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(m, d, x, E, T) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(_(this.options.strict && T, this, d, x, m));
          return;
        }
        for (var k = d.length; x < k; x++)
          this.replaceStack(function(C) {
            var N = A.nameLookup(C, d[x], m);
            return E ? [" && ", N] : [" != null ? ", N, " : ", C];
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
      pushStringParam: function(m, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof m == "string" ? this.pushString(m) : this.pushStackLiteral(m));
      },
      emptyHash: function(m) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(m ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var m = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(m.ids)), this.stringParams && (this.push(this.objectLiteral(m.contexts)), this.push(this.objectLiteral(m.types))), this.push(this.objectLiteral(m.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(m) {
        this.pushStackLiteral(this.quotedString(m));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(m) {
        this.pushStackLiteral(m);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(m) {
        m != null ? this.pushStackLiteral(this.programExpression(m)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(m, d) {
        var x = this.nameLookup("decorators", d, "decorator"), E = this.setupHelperArgs(d, m);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", E]), " || fn;"]);
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
      invokeHelper: function(m, d, x) {
        var E = this.popStack(), T = this.setupHelper(m, d), A = [];
        x && A.push(T.name), A.push(E), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var k = ["(", this.itemsSeparatedBy(A, "||"), ")"], C = this.source.functionCall(k, "call", T.callParams);
        this.push(C);
      },
      itemsSeparatedBy: function(m, d) {
        var x = [];
        x.push(m[0]);
        for (var E = 1; E < m.length; E++)
          x.push(d, m[E]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(m, d) {
        var x = this.setupHelper(m, d);
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
      invokeAmbiguous: function(m, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var E = this.setupHelper(0, m, d), T = this.lastHelper = this.nameLookup("helpers", m, "helper"), A = ["(", "(helper = ", T, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, E.paramsInit ? ["),(", E.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", E.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(m, d, x) {
        var E = [], T = this.setupParams(d, 1, E);
        m && (d = this.popStack(), delete T.name), x && (T.indent = JSON.stringify(x)), T.helpers = "helpers", T.partials = "partials", T.decorators = "container.decorators", m ? E.unshift(d) : E.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (T.depths = "depths"), T = this.objectLiteral(T), E.push(T), this.push(this.source.functionCall("container.invokePartial", "", E));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(m) {
        var d = this.popStack(), x = void 0, E = void 0, T = void 0;
        this.trackIds && (T = this.popStack()), this.stringParams && (E = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[m] = x), E && (A.types[m] = E), T && (A.ids[m] = T), A.values[m] = d;
      },
      pushId: function(m, d, x) {
        m === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : m === "PathExpression" ? this.pushString(d) : m === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: b,
      compileChildren: function(m, d) {
        for (var x = m.children, E = void 0, T = void 0, A = 0, k = x.length; A < k; A++) {
          E = x[A], T = new this.compiler();
          var C = this.matchExistingProgram(E);
          if (C == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            E.index = N, E.name = "program" + N, this.context.programs[N] = T.compile(E, d, this.context, !this.precompile), this.context.decorators[N] = T.decorators, this.context.environments[N] = E, this.useDepths = this.useDepths || T.useDepths, this.useBlockParams = this.useBlockParams || T.useBlockParams, E.useDepths = this.useDepths, E.useBlockParams = this.useBlockParams;
          } else
            E.index = C.index, E.name = "program" + C.index, this.useDepths = this.useDepths || C.useDepths, this.useBlockParams = this.useBlockParams || C.useBlockParams;
        }
      },
      matchExistingProgram: function(m) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var E = this.context.environments[d];
          if (E && E.equals(m))
            return E;
        }
      },
      programExpression: function(m) {
        var d = this.environment.children[m], x = [d.index, "data", d.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(m) {
        this.registers[m] || (this.registers[m] = !0, this.registers.list.push(m));
      },
      push: function(m) {
        return m instanceof v || (m = this.source.wrap(m)), this.inlineStack.push(m), m;
      },
      pushStackLiteral: function(m) {
        this.push(new v(m));
      },
      pushSource: function(m) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), m && this.source.push(m);
      },
      replaceStack: function(m) {
        var d = ["("], x = void 0, E = void 0, T = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof v)
          x = [A.value], d = ["(", x], T = !0;
        else {
          E = !0;
          var k = this.incrStack();
          d = ["((", this.push(k), " = ", A, ")"], x = this.topStack();
        }
        var C = m.call(this, x);
        T || this.popStack(), E && this.stackSlot--, this.push(d.concat(C, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var m = this.inlineStack;
        this.inlineStack = [];
        for (var d = 0, x = m.length; d < x; d++) {
          var E = m[d];
          if (E instanceof v)
            this.compileStack.push(E);
          else {
            var T = this.incrStack();
            this.pushSource([T, " = ", E, ";"]), this.compileStack.push(T);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(m) {
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!m && x instanceof v)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var m = this.isInline() ? this.inlineStack : this.compileStack, d = m[m.length - 1];
        return d instanceof v ? d.value : d;
      },
      contextName: function(m) {
        return this.useDepths && m ? "depths[" + m + "]" : "depth" + m;
      },
      quotedString: function(m) {
        return this.source.quotedString(m);
      },
      objectLiteral: function(m) {
        return this.source.objectLiteral(m);
      },
      aliasable: function(m) {
        var d = this.aliases[m];
        return d ? (d.referenceCount++, d) : (d = this.aliases[m] = this.source.wrap(m), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(m, d, x) {
        var E = [], T = this.setupHelperArgs(d, m, E, x), A = this.nameLookup("helpers", d, "helper"), k = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: E,
          paramsInit: T,
          name: A,
          callParams: [k].concat(E)
        };
      },
      setupParams: function(m, d, x) {
        var E = {}, T = [], A = [], k = [], C = !x, N = void 0;
        C && (x = []), E.name = this.quotedString(m), E.hash = this.popStack(), this.trackIds && (E.hashIds = this.popStack()), this.stringParams && (E.hashTypes = this.popStack(), E.hashContexts = this.popStack());
        var M = this.popStack(), D = this.popStack();
        (D || M) && (E.fn = D || "container.noop", E.inverse = M || "container.noop");
        for (var F = d; F--; )
          N = this.popStack(), x[F] = N, this.trackIds && (k[F] = this.popStack()), this.stringParams && (A[F] = this.popStack(), T[F] = this.popStack());
        return C && (E.args = this.source.generateArray(x)), this.trackIds && (E.ids = this.source.generateArray(k)), this.stringParams && (E.types = this.source.generateArray(A), E.contexts = this.source.generateArray(T)), this.options.data && (E.data = "data"), this.useBlockParams && (E.blockParams = "blockParams"), E;
      },
      setupHelperArgs: function(m, d, x, E) {
        var T = this.setupParams(m, d, x);
        return T.loc = JSON.stringify(this.source.currentLocation), T = this.objectLiteral(T), E ? (this.useRegister("options"), x.push("options"), ["options=", T]) : x ? (x.push(T), "") : T;
      }
    }, (function() {
      for (var g = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), m = b.RESERVED_WORDS = {}, d = 0, x = g.length; d < x; d++)
        m[g[d]] = !0;
    })(), b.isValidJavaScriptVariableName = function(g) {
      return !b.RESERVED_WORDS[g] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(g);
    };
    function _(g, m, d, x, E) {
      var T = m.popStack(), A = d.length;
      for (g && A--; x < A; x++)
        T = m.nameLookup(T, d[x], E);
      return g ? [m.aliasable("container.strict"), "(", T, ", ", m.quotedString(d[x]), ", ", JSON.stringify(m.source.currentLocation), " )"] : T;
    }
    r.default = b, t.exports = r.default;
  })($o, $o.exports)), $o.exports;
}
var xy;
function TE() {
  return xy || (xy = 1, (function(t, r) {
    r.__esModule = !0;
    function i(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = hE(), o = i(s), u = B0(), f = i(u), p = vE(), h = yE(), v = NE(), b = i(v), _ = U0(), g = i(_), m = P0(), d = i(m), x = o.default.create;
    function E() {
      var A = x();
      return A.compile = function(k, C) {
        return h.compile(k, C, A);
      }, A.precompile = function(k, C) {
        return h.precompile(k, C, A);
      }, A.AST = f.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = b.default, A.Parser = p.parser, A.parse = p.parse, A.parseWithoutProcessing = p.parseWithoutProcessing, A;
    }
    var T = E();
    T.create = E, d.default(T), T.Visitor = g.default, T.default = T, r.default = T, t.exports = r.default;
  })(To, To.exports)), To.exports;
}
var zt = TE();
const OE = /* @__PURE__ */ Gd(zt), Z0 = /* @__PURE__ */ a2({
  __proto__: null,
  default: OE
}, [zt]), Wn = SillyTavern.getContext(), Dn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Kn = {
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
  mainContextList: v,
  includeUserMacro: b,
  maxResponseToken: _,
  targetField: g,
  outputFormat: m
}) {
  if (!t)
    throw new Error("No connection profile selected.");
  const d = Wn.extensionSettings.connectionManager?.profiles?.find((M) => M.id === t);
  if (!d)
    throw new Error(`Connection profile with ID "${t}" not found.`);
  const x = d.api ? Wn.CONNECT_API_MAP[d.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${d.name}".`);
  const E = {};
  E.char = o.fields.name.value ?? "{{char}}", E.user = b && Sr ? Sr : "{{user}}", E.persona = "{{persona}}", E.targetField = g, E.userInstructions = zt.compile(r.trim(), { noEscape: !0 })(E), E.fieldSpecificInstructions = zt.compile(
    o.draftFields[g]?.prompt ?? o.fields[g]?.prompt,
    { noEscape: !0 }
  )({
    ...E,
    char: g === "mes_example" ? "{{char}}" : E.char,
    user: g === "mes_example" ? "{{user}}" : E.user
  }), E.activeFormatInstructions = zt.compile(h.content, { noEscape: !0 })(
    E
  );
  {
    const M = [];
    o.selectedCharacterIndexes.forEach((D) => {
      const F = parseInt(D), q = u[F];
      q && M.push(q);
    }), E.characters = M;
  }
  {
    const M = {};
    Object.entries(f).filter(
      ([D, F]) => F.length > 0 && o.selectedWorldNames.includes(D) && F.some((q) => !q.disable)
    ).forEach(([D, F]) => {
      M[D] = F.filter((q) => !q.disable);
    }), E.lorebooks = M;
  }
  {
    const M = {}, D = {}, F = {}, q = g.startsWith("alternate_greetings_"), P = Lt.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(o.fields).forEach(([Y, le]) => {
      let fe = !1;
      if (P) {
        const ge = Y.startsWith("alternate_greetings_");
        q ? fe = ge && Y !== g || Y === "first_mes" : fe = ge;
      }
      if (!fe) {
        const ge = zt.compile(le.value, { noEscape: !0 })({
          ...E,
          char: Y === "mes_example" ? "{{char}}" : E.char,
          user: Y === "mes_example" ? "{{user}}" : E.user
        });
        Dn.includes(Y) ? M[le.label] = ge : Y.startsWith("alternate_greetings_") && (D[Y] = ge);
      }
    }), Object.entries(o.draftFields || {}).forEach(([Y, le]) => {
      F[le.label] = zt.compile(le.value, { noEscape: !0 })(E);
    });
    const V = {};
    Object.keys(M).length > 0 && (V.core = M), Object.keys(D).length > 0 && (V.alternate_greetings = D), Object.keys(F).length > 0 && (V.draft = F), E.fields = V;
  }
  const T = [];
  {
    for (const M of v) {
      if (M.promptName === "chatHistory") {
        const P = await h0(x, i);
        if (P.warnings && P.warnings.length > 0)
          for (const V of P.warnings)
            Oe("warning", V);
        T.push(...P.result);
        continue;
      }
      let D = structuredClone(E);
      M.promptName === "stDescription" && (D.char = "{{char}}", D.user = "{{user}}");
      const F = p[M.promptName];
      if (!F)
        continue;
      const q = {
        role: M.role,
        content: zt.compile(F.content, { noEscape: !0 })(D)
      };
      q.content = q.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), q.content = q.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), q.content = Wn.substituteParams(q.content), q.content = q.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), q.content = q.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), q.content && T.push(q);
    }
    s && T.push({
      role: "assistant",
      content: Rv(s, m)
    });
  }
  const A = await Wn.ConnectionManagerRequestService.sendRequest(
    t,
    T,
    _
  ), k = s ? Rv(s, m) + A.content : A.content, C = R0(k, m);
  let N;
  if (typeof C == "string")
    N = C;
  else if (typeof C == "object" && C !== null)
    if ("response" in C && typeof C.response == "string")
      N = C.response;
    else {
      const M = Object.values(C)[0];
      N = M ? String(M) : "";
    }
  else
    N = "";
  return N;
}
const Ma = "SillyTavern-Character-Creator", G0 = "0.3.0", ME = "F_1.9", DE = {
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
], Je = {
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
  formatVersion: ME,
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
      content: Je.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: Je.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: Je.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: Je.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: Je.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: Je.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: Je.worldInfoCharDefinition,
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
      content: Je.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    },
    reviseJsonPrompt: {
      content: Je.reviseJsonPrompt,
      isDefault: !0,
      label: "Revise Session (JSON Mode)"
    },
    reviseXmlPrompt: {
      content: Je.reviseXmlPrompt,
      isDefault: !0,
      label: "Revise Session (XML Mode)"
    },
    reviseTaskDescription: {
      content: Je.reviseTaskDescription,
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
const Lt = new r0(DE.EXTENSION, V0);
async function jE() {
  return new Promise((t, r) => {
    Lt.initializeSettings({
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
                  content: Je.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Je.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: Je.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: Je.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: Je.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: Je.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: Je.worldInfoCharDefinition,
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
                  content: Je.personaDescription,
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
                  content: Je.personaDescription,
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
            return await Oe("info", `[${Ma}] Added Alternate Greetings.`), {
              ...i,
              prompts: {
                ...i?.prompts,
                stDescription: {
                  content: Je.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: Je.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: Je.worldInfoCharDefinition,
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
              content: Je.reviseJsonPrompt,
              isDefault: !0,
              label: "Revise Session (JSON Mode)"
            }, s.prompts.reviseXmlPrompt = {
              content: Je.reviseXmlPrompt,
              isDefault: !0,
              label: "Revise Session (XML Mode)"
            }, s.prompts.reviseTaskDescription = {
              content: Je.reviseTaskDescription,
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
      console.error(`[${Ma}] Error initializing settings:`, i), Oe("error", `[${Ma}] Failed to initialize settings: ${i.message}`), Wn.Popup.show.confirm(
        `[${Ma}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (Lt.resetSettings(), Oe("success", `[${Ma}] Settings reset. Reloading may be required.`), t());
      });
    });
  });
}
const me = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = Q.useMemo(() => {
    const u = [];
    return i || u.push("menu_button", "interactable"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("button", { className: o, ...s, children: t });
}, RE = ({ label: t, className: r, overrideDefaults: i = !1, type: s = "text", ...o }) => {
  const u = Q.useMemo(() => {
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
  const o = Q.useMemo(() => {
    const u = [];
    return i || u.push("text_pole"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("select", { className: o, ...s, children: t });
}, Vt = ({ children: t, className: r, overrideDefaults: i = !1, ...s }) => {
  const o = Q.useMemo(() => {
    const u = [];
    return i || u.push("text_pole", "textarea_compact"), u.push(r), u.filter(Boolean).join(" ");
  }, [i, r]);
  return /* @__PURE__ */ S.jsx("textarea", { className: o, ...s, children: t });
};
var zE = t0(), vn = /* @__PURE__ */ ((t) => (t[t.TEXT = 1] = "TEXT", t[t.CONFIRM = 2] = "CONFIRM", t[t.INPUT = 3] = "INPUT", t[t.DISPLAY = 4] = "DISPLAY", t))(vn || {}), Kr = /* @__PURE__ */ ((t) => (t[t.AFFIRMATIVE = 1] = "AFFIRMATIVE", t[t.NEGATIVE = 0] = "NEGATIVE", t[t.CANCELLED = null] = "CANCELLED", t))(Kr || {});
const LE = SillyTavern.getContext(), zi = ({
  content: t,
  type: r,
  inputValue: i = "",
  options: s = {},
  preventEscape: o = !1,
  onComplete: u
}) => {
  var f;
  const p = Q.useRef(null), h = Q.useRef(null), [v, b] = Q.useState(!1), [_, g] = Q.useState(null), m = Q.useRef(LE.uuidv4()), d = Q.useRef({
    id: m.current,
    type: r,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  Q.useEffect(() => {
    const A = p.current;
    if (!A) return;
    const k = (C) => {
      C.preventDefault(), o || x(Kr.CANCELLED);
    };
    return A.addEventListener("cancel", k), d.current.dlg = A, d.current.mainInput = h.current, Ci.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), tv.registerDialog(A), new ResizeObserver((C) => {
      for (const N of C)
        tv.reposition(N.target);
    }).observe(A)), A.showModal(), qf(), () => {
      ev(Ci.util.popups, d.current), qf(), A.removeEventListener("cancel", k);
    };
  }, []);
  const x = async (A) => {
    var k, C;
    let N = A;
    if (r === vn.INPUT && (A >= Kr.AFFIRMATIVE ? N = (k = h.current) == null ? void 0 : k.value : A === Kr.NEGATIVE ? N = !1 : A === Kr.CANCELLED ? N = null : N = !1), (C = s.customInputs) != null && C.length) {
      const D = new Map(
        s.customInputs.map((F) => {
          var q;
          const P = (q = p.current) == null ? void 0 : q.querySelector(`#${F.id}`);
          return [P.id, P.checked];
        })
      );
      d.current.inputResults = D;
    }
    if (d.current.result = A, d.current.value = N, s.onClosing && !await s.onClosing(d.current)) {
      b(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    b(!1), Ci.util.lastResult = {
      value: N,
      result: A,
      inputResults: d.current.inputResults
    };
    const M = p.current;
    M && (M.setAttribute("closing", ""), qf(), r2(M, async () => {
      var D;
      if (M.close(), s.onClose && await s.onClose(d.current), ev(Ci.util.popups, d.current), Ci.util.popups.length > 0) {
        const F = (D = document.activeElement) == null ? void 0 : D.closest(".popup"), q = F?.getAttribute("data-id"), P = Ci.util.popups.find((V) => V.id === q);
        P && P.lastFocus && P.lastFocus.focus();
      }
      u(N);
    }));
  }, E = (A) => {
    A.target instanceof HTMLElement && A.target !== p.current && (g(A.target), d.current.lastFocus = A.target);
  }, T = async (A) => {
  };
  return zE.createPortal(
    /* @__PURE__ */ S.jsx(
      "dialog",
      {
        ref: p,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": m.current,
        onKeyDown: T,
        onFocus: E,
        children: /* @__PURE__ */ S.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ S.jsx("div", { className: "popup-content", children: t }),
          r === vn.INPUT && /* @__PURE__ */ S.jsx(
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
          s.customInputs && /* @__PURE__ */ S.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ S.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ S.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ S.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          r !== vn.DISPLAY && /* @__PURE__ */ S.jsxs("div", { className: "popup-controls", children: [
            (f = s.customButtons) == null ? void 0 : f.map((A, k) => {
              const C = typeof A == "string" ? { text: A, result: k + 2 } : A;
              return /* @__PURE__ */ S.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${C.classes ?? ""}`,
                  "data-result": C.result,
                  onClick: () => {
                    var N;
                    (N = C.action) == null || N.call(C), x(C.result ?? k + 2);
                  },
                  "data-i18n": C.text,
                  children: C.text
                },
                k
              );
            }),
            r !== vn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(Kr.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            r !== vn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ S.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(Kr.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          r === vn.DISPLAY && /* @__PURE__ */ S.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(Kr.CANCELLED),
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
}, _r = SillyTavern.getContext(), Y0 = ({
  initialSelectedProfileId: t,
  allowedTypes: r = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: i = "Select a Connection Profile",
  onChange: s,
  onCreate: o,
  onUpdate: u,
  onDelete: f
}) => {
  const [p, h] = Q.useState(t ?? ""), [v, b] = Q.useState(Date.now()), { isEnabled: _, profiles: g, connectApiMap: m } = Q.useMemo(() => {
    var E, T;
    return (E = _r.extensionSettings.disabledExtensions) != null && E.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((T = _r.extensionSettings.connectionManager) == null ? void 0 : T.profiles) ?? [],
      connectApiMap: _r.CONNECT_API_MAP
    };
  }, [v]);
  Q.useEffect(() => {
    if (!_) return;
    const E = (k) => {
      Zs(k, r, m) && (b(Date.now()), o?.(k));
    }, T = (k, C) => {
      const N = Zs(k, r, m), M = Zs(C, r, m);
      (N || M) && b(Date.now()), u?.(k, C), p === k.id && !M && (h(""), s?.(void 0));
    }, A = (k) => {
      Zs(k, r, m) && (b(Date.now()), f?.(k), p === k.id && (h(""), s?.(void 0)));
    };
    return _r.eventSource.on("CONNECTION_PROFILE_CREATED", E), _r.eventSource.on("CONNECTION_PROFILE_UPDATED", T), _r.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      _r.eventSource.removeListener("CONNECTION_PROFILE_CREATED", E), _r.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", T), _r.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [_, p, r, m, s, o, u, f]);
  const d = Q.useMemo(() => {
    if (!_) return [];
    const E = g.filter((A) => Zs(A, r, m)), T = {};
    for (const [A, k] of Object.entries(r))
      T[A] = { label: k, profiles: [] };
    for (const A of E) {
      const k = m[A.api];
      T[k.selected] && T[k.selected].profiles.push(A);
    }
    for (const A of Object.values(T))
      A.profiles.sort((k, C) => (k.name ?? "").localeCompare(C.name ?? ""));
    return Object.values(T).filter((A) => A.profiles.length > 0);
  }, [_, g, r, m]), x = Q.useCallback(
    (E) => {
      const T = E.target.value;
      h(T);
      const A = g.find((k) => k.id === T);
      s?.(A);
    },
    [g, s]
  );
  return _ ? /* @__PURE__ */ S.jsxs(yu, { value: p, onChange: x, children: [
    /* @__PURE__ */ S.jsx("option", { value: "", children: i }),
    d.map((E) => /* @__PURE__ */ S.jsx("optgroup", { label: E.label, children: E.profiles.map((T) => /* @__PURE__ */ S.jsx("option", { value: T.id, children: T.name }, T.id)) }, E.label))
  ] }) : /* @__PURE__ */ S.jsx(yu, { disabled: !0, value: "", children: /* @__PURE__ */ S.jsx("option", { children: "Connection Manager disabled" }) });
}, IE = cu.memo(
  ({ item: t, showToggleButton: r, showDeleteButton: i, showSelectInput: s, onToggle: o, onDelete: u, onSelectChange: f }) => {
    const {
      id: p,
      label: h,
      enabled: v,
      canDelete: b = !0,
      canToggle: _ = !0,
      showSelect: g = !0,
      canSelect: m = !0,
      selectOptions: d = [],
      selectValue: x
    } = t, E = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: r && !v ? 0.6 : 1
    }, T = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ S.jsxs("li", { className: "sortable-list-item", style: E, "data-id": p, children: [
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
      s && g && m && /* @__PURE__ */ S.jsx(
        yu,
        {
          value: x,
          onChange: (k) => f(p, k.target.value),
          disabled: !v,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ S.jsx("option", { disabled: !0, children: "--" }) : d.map((k) => /* @__PURE__ */ S.jsx("option", { value: k.value, children: k.label }, k.value))
        }
      ),
      s && (!g || !m) && /* @__PURE__ */ S.jsx("span", { style: A }),
      r && _ && /* @__PURE__ */ S.jsx(
        me,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${v ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...T,
            marginRight: "10px",
            fontSize: "1.2em",
            color: v ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => o(p)
        }
      ),
      r && !_ && /* @__PURE__ */ S.jsx("span", { style: A }),
      i && b && /* @__PURE__ */ S.jsx(
        me,
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
      i && !b && /* @__PURE__ */ S.jsx("span", { style: { ...A, marginRight: 0 } })
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
  const f = Q.useRef(null), p = Q.useRef(null);
  Q.useEffect(() => (f.current && (p.current = we.create(f.current, {
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
      const { oldIndex: g, newIndex: m } = _;
      if (g === void 0 || m === void 0 || g === m)
        return;
      const d = Array.from(t), [x] = d.splice(g, 1);
      d.splice(m, 0, x), r(d);
    }
  })), () => {
    var _;
    (_ = p.current) == null || _.destroy(), p.current = null;
  }), [t, r, u]);
  const h = (_) => {
    r(t.map((g) => g.id === _ ? { ...g, enabled: !g.enabled } : g));
  }, v = (_) => {
    r(t.filter((g) => g.id !== _));
  }, b = (_, g) => {
    r(t.map((m) => m.id === _ ? { ...m, selectValue: g } : m));
  };
  return /* @__PURE__ */ S.jsx("ul", { ref: f, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: t.map((_) => /* @__PURE__ */ S.jsx(
    IE,
    {
      item: _,
      showToggleButton: i,
      showDeleteButton: s,
      showSelectInput: o,
      onToggle: h,
      onDelete: v,
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
  searchPlaceholder: v = "Search...",
  searchNoResultsText: b = "No results found",
  searchFuseOptions: _,
  inputClasses: g,
  containerClasses: m
}) => {
  const [d, x] = Q.useState(!1), [E, T] = Q.useState(""), A = Q.useRef(null);
  Q.useEffect(() => {
    const D = (F) => {
      A.current && !A.current.contains(F.target) && x(!1);
    };
    return document.addEventListener("mousedown", D), () => document.removeEventListener("mousedown", D);
  }, []), Q.useEffect(() => {
    d || T("");
  }, [d]);
  const k = Q.useMemo(() => {
    if (!h) return null;
    const D = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ..._
    };
    return new Pi(t, D);
  }, [t, h, _]), C = Q.useMemo(() => !h || !E.trim() || !k ? t : k.search(E.trim()).map((D) => D.item), [t, E, h, k]), N = async (D) => {
    let F;
    u ? F = r.includes(D) ? r.filter((q) => q !== D) : [...r, D] : F = r.includes(D) ? [] : [D], !(p && !await Promise.resolve(p(r, F))) && (i(F), o && x(!1));
  }, M = Q.useMemo(() => {
    var D;
    return r.length === 0 ? s : r.length === 1 ? ((D = t.find((F) => F.value === r[0])) == null ? void 0 : D.label) ?? r[0] : `${r.length} items selected`;
  }, [r, t, s]);
  return /* @__PURE__ */ S.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${m ?? ""}`,
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
              /* @__PURE__ */ S.jsx("span", { className: "fancy-dropdown-trigger-text", children: M }),
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
                      placeholder: v,
                      value: E,
                      onChange: (D) => T(D.target.value),
                      autoFocus: !0,
                      className: g
                    }
                  )
                }
              ),
              /* @__PURE__ */ S.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: C.length > 0 ? C.map((D) => /* @__PURE__ */ S.jsx(
                BE,
                {
                  item: D,
                  isSelected: r.includes(D.value),
                  onClick: N
                },
                D.value
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
  const [s, o] = Q.useState(!1);
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
  onCreate: v,
  onRename: b,
  onDelete: _,
  buttons: g
}) => {
  const m = Q.useMemo(() => r.find((A) => A.value === t), [r, t]), d = Q.useCallback((A) => A ? i.includes(A) : !1, [i]), x = async () => {
    const A = await pd.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const k = A.trim();
    if (r.some((N) => N.value === k)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: k, label: k };
    if (v) {
      const N = await Promise.resolve(v(k));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? C = { value: N.value, label: N.value } : C = N.value);
    }
    u([...r, C]), o(C.value, t);
  }, E = async () => {
    if (!m) {
      await Oe("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(m.value)) {
      await Oe("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await pd.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${m.label}":`,
      m.label
    );
    if (!A || A.trim() === "" || A.trim() === m.value) return;
    const k = A.trim();
    if (r.some((M) => M.value === k)) {
      await Oe("warning", `A ${s} with this name already exists.`);
      return;
    }
    let C = { value: k, label: k };
    if (b) {
      const M = await Promise.resolve(b(m.value, k));
      if (!M.confirmed) return;
      M.value && (typeof M.value == "string" ? C = { value: M.value, label: M.value } : C = M.value);
    }
    const N = r.map((M) => M.value === m.value ? C : M);
    u(N), o(C.value, t);
  }, T = async () => {
    var A;
    if (!m) {
      await Oe("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(m.value)) {
      await Oe("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await pd.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${m.label}"?`
    ) || _ && !await Promise.resolve(_(m.value)))
      return;
    const k = r.findIndex((M) => M.value === m.value), C = r.filter((M) => M.value !== m.value);
    u(C);
    let N;
    if (C.length > 0) {
      const M = Math.min(k, C.length - 1);
      N = (A = C[M]) == null ? void 0 : A.value;
    }
    o(N, t);
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ S.jsx(yu, { value: t ?? "", onChange: (A) => o(A.target.value, t), children: r.map((A) => /* @__PURE__ */ S.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    f && /* @__PURE__ */ S.jsx(
      me,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    p && /* @__PURE__ */ S.jsx(
      me,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: E,
        disabled: !m,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ S.jsx(
      me,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: T,
        disabled: !m,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    g?.map((A) => /* @__PURE__ */ S.jsx(
      me,
      {
        className: A.icon,
        title: A.title,
        onClick: A.onClick,
        disabled: A.disabled,
        "data-i18n": A.i18n ? `[title]${A.i18n}` : void 0
      },
      A.key
    ))
  ] });
}, X0 = () => {
  const [, t] = Q.useState(0);
  return Q.useCallback(() => {
    t((i) => i + 1);
  }, []);
}, md = SillyTavern.getContext(), UE = () => {
  const t = X0(), r = Lt.getSettings(), [i, s] = Q.useState(Wo[0]), o = Q.useCallback(
    (C) => {
      const N = Lt.getSettings();
      C(N), Lt.saveSettings(), t();
    },
    [t]
  ), u = Q.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((C) => ({ value: C, label: C })),
    [r.mainContextTemplatePresets]
  ), f = Q.useMemo(
    () => Object.entries(r.prompts).map(([C, N]) => ({
      value: C,
      label: `${N.label} (${C})`
    })),
    [r.prompts]
  ), p = Q.useMemo(() => {
    const C = r.mainContextTemplatePresets[r.mainContextTemplatePreset];
    return C ? C.prompts.map((N) => {
      const M = r.prompts[N.promptName], D = M ? `${M.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: D,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [r.mainContextTemplatePreset, r.mainContextTemplatePresets, r.prompts]), h = (C) => {
    o((N) => {
      N.mainContextTemplatePreset = C ?? "default";
    });
  }, v = (C) => {
    o((N) => {
      const M = {};
      C.forEach((D) => {
        M[D.value] = N.mainContextTemplatePresets[D.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = M;
    });
  }, b = (C) => {
    o((N) => {
      const M = C.map((q) => ({
        promptName: q.id,
        enabled: q.enabled,
        role: q.selectValue ?? "user"
      })), D = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: M
      }, F = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: D
      };
      N.mainContextTemplatePresets = F;
    });
  }, _ = async () => {
    await md.Popup.show.confirm("Restore default", "Are you sure?") && o((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(V0.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? t() : N.mainContextTemplatePreset = "default";
    });
  }, g = (C) => {
    o((N) => {
      const M = C.map((P) => P.value);
      Object.keys(N.prompts).filter((P) => !M.includes(P)).forEach((P) => {
        Object.values(N.mainContextTemplatePresets).forEach((V) => {
          V.prompts = V.prompts.filter((Y) => Y.promptName !== P);
        });
      });
      const q = {};
      C.forEach((P) => {
        q[P.value] = N.prompts[P.value] ?? { content: "", isDefault: !1, label: P.label };
      }), N.prompts = q;
    });
  }, m = (C) => {
    const N = Rd(C);
    return N ? r.prompts[N] ? (Oe("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (o((M) => {
      M.prompts = {
        ...M.prompts,
        [N]: { content: M.prompts[i]?.content ?? "", isDefault: !1, label: C }
      };
      const D = Object.fromEntries(
        Object.entries(M.mainContextTemplatePresets).map(([F, q]) => [
          F,
          {
            ...q,
            prompts: [...q.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      M.mainContextTemplatePresets = D;
    }), s(N), { confirmed: !0, value: N }) : (Oe("error", `Invalid prompt name: ${C}`), { confirmed: !1 });
  }, d = (C, N) => {
    const M = Rd(N);
    return M ? r.prompts[M] ? (Oe("error", `Prompt name already exists: ${M}`), { confirmed: !1 }) : (o((D) => {
      const { [C]: F, ...q } = D.prompts;
      D.prompts = {
        ...q,
        [M]: { ...F, label: N }
      };
      const P = Object.fromEntries(
        Object.entries(D.mainContextTemplatePresets).map(([V, Y]) => [
          V,
          {
            ...Y,
            prompts: Y.prompts.map((le) => le.promptName === C ? { ...le, promptName: M } : le)
          }
        ])
      );
      D.mainContextTemplatePresets = P;
    }), s(M), { confirmed: !0, value: M }) : (Oe("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (C) => {
    const N = C.target.value;
    o((M) => {
      const D = M.prompts[i];
      D && (M.prompts = {
        ...M.prompts,
        [i]: {
          ...D,
          // Copy existing properties
          content: N,
          isDefault: Wo.includes(i) ? Je[i] === N : !1
        }
      });
    });
  }, E = async () => {
    const C = r.prompts[i];
    if (!C) return Oe("warning", "No prompt selected.");
    await md.Popup.show.confirm("Restore Default", `Restore default for "${C.label}"?`) && o((M) => {
      M.prompts = {
        ...M.prompts,
        [i]: {
          ...M.prompts[i],
          content: Je[i]
        }
      };
    });
  }, T = async () => {
    await md.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (Lt.resetSettings(), t(), Oe("success", "Settings have been reset."));
  }, A = r.prompts[i], k = Wo.includes(i);
  return /* @__PURE__ */ S.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ S.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ S.jsx(
          me,
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
          onItemsChange: v,
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
        k && /* @__PURE__ */ S.jsx(
          me,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: E
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
          onChange: (C) => s(C ?? ""),
          onItemsChange: g,
          onCreate: m,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ S.jsx(
        Vt,
        {
          value: A?.content ?? "",
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
          onChange: (C) => o((N) => {
            N.showSaveAsWorldInfoEntry.show = C.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ S.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ S.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ S.jsxs(me, { className: "danger_button", style: { width: "auto" }, onClick: T, children: [
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
  onValueChange: v,
  onPromptChange: b,
  onGenerate: _,
  onContinue: g,
  onClear: m,
  onCompare: d,
  onDelete: x,
  onOpenReviseSessions: E
}) => /* @__PURE__ */ S.jsxs("div", { className: `character-field ${p ? "draft-field" : "core-field"}`, children: [
  /* @__PURE__ */ S.jsx("label", { children: r }),
  /* @__PURE__ */ S.jsxs("div", { className: `field-container ${o ? "large-field" : ""}`, children: [
    /* @__PURE__ */ S.jsx(Vt, { value: i, onChange: (T) => v(t, T.target.value), rows: u }),
    /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
      /* @__PURE__ */ S.jsx(me, { onClick: () => _(t), disabled: h, title: "Generate field content", children: h ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
      /* @__PURE__ */ S.jsx(me, { onClick: () => g(t), disabled: h, title: "Continue from current content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
      /* @__PURE__ */ S.jsx(me, { onClick: () => m(t), title: "Clear field content", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" }) }),
      E && !p && // Disabling for draft fields initially for simplicity
      /* @__PURE__ */ S.jsx(me, { onClick: () => E(t), title: "Revise with AI chat", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" }) }),
      !p && d && /* @__PURE__ */ S.jsx(me, { onClick: () => d(t), title: "Compare with loaded character", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
      p && x && /* @__PURE__ */ S.jsx(me, { onClick: () => x(t), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] })
  ] }),
  f && /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", children: /* @__PURE__ */ S.jsx(
    Vt,
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
  const [f, p] = Q.useState(0);
  Q.useEffect(() => {
    f >= t.length && t.length > 0 ? p(t.length - 1) : t.length === 0 && p(0);
  }, [t, f]);
  const h = () => {
    const g = [...t, { value: "", prompt: "" }];
    r(g), p(g.length - 1);
  }, v = async () => {
    if (t.length === 0) return;
    if (await HE.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const m = t.filter((d, x) => x !== f);
      r(m);
    }
  }, b = (g, m, d) => {
    const x = [...t];
    x[g][m] = d, r(x);
  }, _ = t[f];
  return /* @__PURE__ */ S.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ S.jsx("label", { children: "Alternate Greetings" }),
    /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx(
        "div",
        {
          className: "alternate-greetings-tabs",
          style: { display: "flex", flexWrap: "wrap", gap: "5px", flexGrow: 1 },
          children: t.map((g, m) => /* @__PURE__ */ S.jsxs(
            me,
            {
              onClick: () => p(m),
              className: `menu_button ${m === f ? "active" : ""}`,
              children: [
                "Greeting ",
                m + 1
              ]
            },
            m
          ))
        }
      ),
      /* @__PURE__ */ S.jsxs(me, { onClick: h, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    t.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ S.jsxs("div", { className: "field-container", children: [
      /* @__PURE__ */ S.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          Vt,
          {
            value: _?.value ?? "",
            onChange: (g) => b(f, "value", g.target.value),
            rows: 8,
            placeholder: "Enter greeting content..."
          }
        ),
        /* @__PURE__ */ S.jsx("div", { className: "field-prompt-container", style: { marginTop: "5px" }, children: /* @__PURE__ */ S.jsx(
          Vt,
          {
            value: _?.prompt ?? "",
            onChange: (g) => b(f, "prompt", g.target.value),
            rows: 2,
            placeholder: "Enter specific prompt for this greeting..."
          }
        ) })
      ] }),
      /* @__PURE__ */ S.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ S.jsx(me, { onClick: () => i(f), disabled: u, title: "Generate greeting", children: u ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ S.jsx(me, { onClick: () => s(f), disabled: u, title: "Continue greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ S.jsx(
          me,
          {
            onClick: () => b(f, "value", ""),
            disabled: u,
            title: "Clear greeting",
            children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ S.jsx(me, { onClick: () => o(f), disabled: u, title: "Compare greeting", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        /* @__PURE__ */ S.jsx(
          me,
          {
            onClick: v,
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
var ra = (
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
      var u = this, f, p = function(C) {
        if (C = u.postProcess(C, s), o) {
          setTimeout(function() {
            o(C);
          }, 0);
          return;
        } else
          return C;
      }, h = i.length, v = r.length, b = 1, _ = h + v;
      s.maxEditLength != null && (_ = Math.min(_, s.maxEditLength));
      var g = (f = s.timeout) !== null && f !== void 0 ? f : 1 / 0, m = Date.now() + g, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], i, r, 0, s);
      if (d[0].oldPos + 1 >= v && x + 1 >= h)
        return p(this.buildValues(d[0].lastComponent, i, r));
      var E = -1 / 0, T = 1 / 0, A = function() {
        for (var C = Math.max(E, -b); C <= Math.min(T, b); C += 2) {
          var N = void 0, M = d[C - 1], D = d[C + 1];
          M && (d[C - 1] = void 0);
          var F = !1;
          if (D) {
            var q = D.oldPos - C;
            F = D && 0 <= q && q < h;
          }
          var P = M && M.oldPos + 1 < v;
          if (!F && !P) {
            d[C] = void 0;
            continue;
          }
          if (!P || F && M.oldPos < D.oldPos ? N = u.addToPath(D, !0, !1, 0, s) : N = u.addToPath(M, !1, !0, 1, s), x = u.extractCommon(N, i, r, C, s), N.oldPos + 1 >= v && x + 1 >= h)
            return p(u.buildValues(N.lastComponent, i, r)) || !0;
          d[C] = N, N.oldPos + 1 >= v && (T = Math.min(T, C - 1)), x + 1 >= h && (E = Math.max(E, C + 1));
        }
        b++;
      };
      if (o)
        (function C() {
          setTimeout(function() {
            if (b > _ || Date.now() > m)
              return o(void 0);
            A() || C();
          }, 0);
        })();
      else
        for (; b <= _ && Date.now() <= m; ) {
          var k = A();
          if (k)
            return k;
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
      for (var f = i.length, p = s.length, h = r.oldPos, v = h - o, b = 0; v + 1 < f && h + 1 < p && this.equals(s[h + 1], i[v + 1], u); )
        v++, h++, b++, u.oneChangePerToken && (r.lastComponent = { count: 1, previousComponent: r.lastComponent, added: !1, removed: !1 });
      return b && !u.oneChangePerToken && (r.lastComponent = { count: b, previousComponent: r.lastComponent, added: !1, removed: !1 }), r.oldPos = h, v;
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
      for (var f = o.length, p = 0, h = 0, v = 0; p < f; p++) {
        var b = o[p];
        if (b.removed)
          b.value = this.join(s.slice(v, v + b.count)), v += b.count;
        else {
          if (!b.added && this.useLongestToken) {
            var _ = i.slice(h, h + b.count);
            _ = _.map(function(g, m) {
              var d = s[v + m];
              return d.length > g.length ? d : g;
            }), b.value = this.join(_);
          } else
            b.value = this.join(i.slice(h, h + b.count));
          h += b.count, b.added || (v += b.count);
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
  })(ra)
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
function Jr(t) {
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
  })(ra)
), XE = new YE();
function Q0(t, r, i) {
  return XE.diff(t, r, i);
}
function Ny(t, r, i, s) {
  if (r && i) {
    var o = Jr(r.value), u = Vs(r.value), f = Jr(i.value), p = Vs(i.value);
    if (t) {
      var h = Cy(o, f);
      t.value = Ld(t.value, f, h), r.value = Gs(r.value, h), i.value = Gs(i.value, h);
    }
    if (s) {
      var v = wy(u, p);
      s.value = zd(s.value, p, v), r.value = eu(r.value, v), i.value = eu(i.value, v);
    }
  } else if (i) {
    if (t) {
      var b = Jr(i.value);
      i.value = i.value.substring(b.length);
    }
    if (s) {
      var b = Jr(s.value);
      s.value = s.value.substring(b.length);
    }
  } else if (t && s) {
    var _ = Jr(s.value), g = Jr(r.value), m = Vs(r.value), d = Cy(_, g);
    r.value = Gs(r.value, d);
    var x = wy(Gs(_, d), m);
    r.value = eu(r.value, x), s.value = zd(s.value, _, x), t.value = Ld(t.value, _, _.slice(0, _.length - x.length));
  } else if (s) {
    var E = Jr(s.value), T = Vs(r.value), A = Ay(T, E);
    r.value = eu(r.value, A);
  } else if (t) {
    var k = Vs(t.value), C = Jr(r.value), A = Ay(k, C);
    r.value = Gs(r.value, A);
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
  })(ra)
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
  })(ra)
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
  })(ra)
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
  })(ra)
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
  })(ra)
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
  })(ra)
);
new iC();
const sC = ({ originalContent: t, newContent: r, fieldName: i }) => {
  const s = Q.useMemo(() => {
    const o = Q0(t, r);
    let u = "", f = "";
    return o.forEach((p) => {
      const v = `<span style="${p.added ? "color: green; background-color: #e6ffed;" : p.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p.value}</span>`;
      p.added || (u += v), p.removed || (f += v);
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
function ee(t, r, i) {
  function s(p, h) {
    var v;
    Object.defineProperty(p, "_zod", {
      value: p._zod ?? {},
      enumerable: !1
    }), (v = p._zod).traits ?? (v.traits = /* @__PURE__ */ new Set()), p._zod.traits.add(t), r(p, h);
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
    const v = i?.Parent ? new u() : this;
    s(v, p), (h = v._zod).deferred ?? (h.deferred = []);
    for (const b of v._zod.deferred)
      b();
    return v;
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
function tt(t, r, i) {
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
function aa(t, r, i) {
  const s = new t._zod.constr(r ?? t._zod.def);
  return (!r || i?.parent) && (s._zod.parent = t), s;
}
function _e(t) {
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
  return aa(t, s);
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
  return aa(t, s);
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
  return aa(t, o);
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
  return aa(t, i);
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
  return aa(t, i);
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
  return aa(r, s);
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
  return aa(r, s);
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
}, i1 = ee("$ZodError", a1), s1 = ee("$ZodError", a1, { Parent: Error });
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
}, kC = (t) => async (r, i, s) => Tu(t)(r, i, s), MC = /^[cC][^\s-]{8,}$/, DC = /^[0-9a-z]+$/, jC = /^[0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{26}$/, RC = /^[0-9a-vA-V]{20}$/, zC = /^[A-Za-z0-9]{27}$/, LC = /^[a-zA-Z0-9_-]{21}$/, IC = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/, PC = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/, ky = (t) => t ? new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${t}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`) : /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/, BC = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/, UC = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
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
}, WC = /^-?\d+$/, ew = /^-?\d+(?:\.\d+)?/, tw = /^[^A-Z]*$/, nw = /^[^a-z]*$/, an = /* @__PURE__ */ ee("$ZodCheck", (t, r) => {
  var i;
  t._zod ?? (t._zod = {}), t._zod.def = r, (i = t._zod).onattach ?? (i.onattach = []);
}), c1 = {
  number: "number",
  bigint: "bigint",
  object: "date"
}, f1 = /* @__PURE__ */ ee("$ZodCheckLessThan", (t, r) => {
  an.init(t, r);
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
}), d1 = /* @__PURE__ */ ee("$ZodCheckGreaterThan", (t, r) => {
  an.init(t, r);
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
}), rw = /* @__PURE__ */ ee("$ZodCheckMultipleOf", (t, r) => {
  an.init(t, r), t._zod.onattach.push((i) => {
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
}), aw = /* @__PURE__ */ ee("$ZodCheckNumberFormat", (t, r) => {
  an.init(t, r), r.format = r.format || "float64";
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
}), iw = /* @__PURE__ */ ee("$ZodCheckMaxLength", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), sw = /* @__PURE__ */ ee("$ZodCheckMinLength", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), lw = /* @__PURE__ */ ee("$ZodCheckLengthEquals", (t, r) => {
  var i;
  an.init(t, r), (i = t._zod.def).when ?? (i.when = (s) => {
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
}), Ou = /* @__PURE__ */ ee("$ZodCheckStringFormat", (t, r) => {
  var i, s;
  an.init(t, r), t._zod.onattach.push((o) => {
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
}), ow = /* @__PURE__ */ ee("$ZodCheckRegex", (t, r) => {
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
}), uw = /* @__PURE__ */ ee("$ZodCheckLowerCase", (t, r) => {
  r.pattern ?? (r.pattern = tw), Ou.init(t, r);
}), cw = /* @__PURE__ */ ee("$ZodCheckUpperCase", (t, r) => {
  r.pattern ?? (r.pattern = nw), Ou.init(t, r);
}), fw = /* @__PURE__ */ ee("$ZodCheckIncludes", (t, r) => {
  an.init(t, r);
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
}), dw = /* @__PURE__ */ ee("$ZodCheckStartsWith", (t, r) => {
  an.init(t, r);
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
}), hw = /* @__PURE__ */ ee("$ZodCheckEndsWith", (t, r) => {
  an.init(t, r);
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
}), pw = /* @__PURE__ */ ee("$ZodCheckOverwrite", (t, r) => {
  an.init(t, r), t._zod.check = (i) => {
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
}, St = /* @__PURE__ */ ee("$ZodType", (t, r) => {
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
      let v = ji(f), b;
      for (const _ of p) {
        if (_._zod.def.when) {
          if (!_._zod.def.when(f))
            continue;
        } else if (v)
          continue;
        const g = f.issues.length, m = _._zod.check(f);
        if (m instanceof Promise && h?.async === !1)
          throw new Li();
        if (b || m instanceof Promise)
          b = (b ?? Promise.resolve()).then(async () => {
            await m, f.issues.length !== g && (v || (v = ji(f, g)));
          });
        else {
          if (f.issues.length === g)
            continue;
          v || (v = ji(f, g));
        }
      }
      return b ? b.then(() => f) : f;
    }, u = (f, p, h) => {
      if (ji(f))
        return f.aborted = !0, f;
      const v = o(p, s, h);
      if (v instanceof Promise) {
        if (h.async === !1)
          throw new Li();
        return v.then((b) => t._zod.parse(b, h));
      }
      return t._zod.parse(v, h);
    };
    t._zod.run = (f, p) => {
      if (p.skipChecks)
        return t._zod.parse(f, p);
      if (p.direction === "backward") {
        const v = t._zod.parse({ value: f.value, issues: [] }, { ...p, skipChecks: !0 });
        return v instanceof Promise ? v.then((b) => u(b, f, p)) : u(v, f, p);
      }
      const h = t._zod.parse(f, p);
      if (h instanceof Promise) {
        if (p.async === !1)
          throw new Li();
        return h.then((v) => o(v, s, p));
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
}), oh = /* @__PURE__ */ ee("$ZodString", (t, r) => {
  St.init(t, r), t._zod.pattern = [...t?._zod.bag?.patterns ?? []].pop() ?? KC(t._zod.bag), t._zod.parse = (i, s) => {
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
}), st = /* @__PURE__ */ ee("$ZodStringFormat", (t, r) => {
  Ou.init(t, r), oh.init(t, r);
}), vw = /* @__PURE__ */ ee("$ZodGUID", (t, r) => {
  r.pattern ?? (r.pattern = PC), st.init(t, r);
}), yw = /* @__PURE__ */ ee("$ZodUUID", (t, r) => {
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
  st.init(t, r);
}), bw = /* @__PURE__ */ ee("$ZodEmail", (t, r) => {
  r.pattern ?? (r.pattern = BC), st.init(t, r);
}), _w = /* @__PURE__ */ ee("$ZodURL", (t, r) => {
  st.init(t, r), t._zod.check = (i) => {
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
}), Sw = /* @__PURE__ */ ee("$ZodEmoji", (t, r) => {
  r.pattern ?? (r.pattern = HC()), st.init(t, r);
}), xw = /* @__PURE__ */ ee("$ZodNanoID", (t, r) => {
  r.pattern ?? (r.pattern = LC), st.init(t, r);
}), Ew = /* @__PURE__ */ ee("$ZodCUID", (t, r) => {
  r.pattern ?? (r.pattern = MC), st.init(t, r);
}), Cw = /* @__PURE__ */ ee("$ZodCUID2", (t, r) => {
  r.pattern ?? (r.pattern = DC), st.init(t, r);
}), ww = /* @__PURE__ */ ee("$ZodULID", (t, r) => {
  r.pattern ?? (r.pattern = jC), st.init(t, r);
}), Aw = /* @__PURE__ */ ee("$ZodXID", (t, r) => {
  r.pattern ?? (r.pattern = RC), st.init(t, r);
}), Nw = /* @__PURE__ */ ee("$ZodKSUID", (t, r) => {
  r.pattern ?? (r.pattern = zC), st.init(t, r);
}), Tw = /* @__PURE__ */ ee("$ZodISODateTime", (t, r) => {
  r.pattern ?? (r.pattern = JC(r)), st.init(t, r);
}), Ow = /* @__PURE__ */ ee("$ZodISODate", (t, r) => {
  r.pattern ?? (r.pattern = $C), st.init(t, r);
}), kw = /* @__PURE__ */ ee("$ZodISOTime", (t, r) => {
  r.pattern ?? (r.pattern = QC(r)), st.init(t, r);
}), Mw = /* @__PURE__ */ ee("$ZodISODuration", (t, r) => {
  r.pattern ?? (r.pattern = IC), st.init(t, r);
}), Dw = /* @__PURE__ */ ee("$ZodIPv4", (t, r) => {
  r.pattern ?? (r.pattern = qC), st.init(t, r), t._zod.onattach.push((i) => {
    const s = i._zod.bag;
    s.format = "ipv4";
  });
}), jw = /* @__PURE__ */ ee("$ZodIPv6", (t, r) => {
  r.pattern ?? (r.pattern = FC), st.init(t, r), t._zod.onattach.push((i) => {
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
}), Rw = /* @__PURE__ */ ee("$ZodCIDRv4", (t, r) => {
  r.pattern ?? (r.pattern = ZC), st.init(t, r);
}), zw = /* @__PURE__ */ ee("$ZodCIDRv6", (t, r) => {
  r.pattern ?? (r.pattern = GC), st.init(t, r), t._zod.check = (i) => {
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
const Lw = /* @__PURE__ */ ee("$ZodBase64", (t, r) => {
  r.pattern ?? (r.pattern = VC), st.init(t, r), t._zod.onattach.push((i) => {
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
const Pw = /* @__PURE__ */ ee("$ZodBase64URL", (t, r) => {
  r.pattern ?? (r.pattern = l1), st.init(t, r), t._zod.onattach.push((i) => {
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
}), Bw = /* @__PURE__ */ ee("$ZodE164", (t, r) => {
  r.pattern ?? (r.pattern = XC), st.init(t, r);
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
const Hw = /* @__PURE__ */ ee("$ZodJWT", (t, r) => {
  st.init(t, r), t._zod.check = (i) => {
    Uw(i.value, r.alg) || i.issues.push({
      code: "invalid_format",
      format: "jwt",
      input: i.value,
      inst: t,
      continue: !r.abort
    });
  };
}), p1 = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  St.init(t, r), t._zod.pattern = t._zod.bag.pattern ?? ew, t._zod.parse = (i, s) => {
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
}), qw = /* @__PURE__ */ ee("$ZodNumber", (t, r) => {
  aw.init(t, r), p1.init(t, r);
}), Fw = /* @__PURE__ */ ee("$ZodUnknown", (t, r) => {
  St.init(t, r), t._zod.parse = (i) => i;
}), Zw = /* @__PURE__ */ ee("$ZodNever", (t, r) => {
  St.init(t, r), t._zod.parse = (i, s) => (i.issues.push({
    expected: "never",
    code: "invalid_type",
    input: i.value,
    inst: t
  }), i);
});
function My(t, r, i) {
  t.issues.length && r.issues.push(...r1(i, t.issues)), r.value[i] = t.value;
}
const Gw = /* @__PURE__ */ ee("$ZodArray", (t, r) => {
  St.init(t, r), t._zod.parse = (i, s) => {
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
      h instanceof Promise ? u.push(h.then((v) => My(v, i, f))) : My(h, i, f);
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
  const f = [], p = o.keySet, h = o.catchall._zod, v = h.def.type;
  for (const b of Object.keys(r)) {
    if (p.has(b))
      continue;
    if (v === "never") {
      f.push(b);
      continue;
    }
    const _ = h.run({ value: r[b], issues: [] }, s);
    _ instanceof Promise ? t.push(_.then((g) => xu(g, i, b, r))) : xu(_, i, b, r);
  }
  return f.length && i.issues.push({
    code: "unrecognized_keys",
    keys: f,
    input: r,
    inst: u
  }), t.length ? Promise.all(t).then(() => i) : i;
}
const Vw = /* @__PURE__ */ ee("$ZodObject", (t, r) => {
  if (St.init(t, r), !Object.getOwnPropertyDescriptor(r, "shape")?.get) {
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
  tt(t._zod, "propValues", () => {
    const p = r.shape, h = {};
    for (const v in p) {
      const b = p[v]._zod;
      if (b.values) {
        h[v] ?? (h[v] = /* @__PURE__ */ new Set());
        for (const _ of b.values)
          h[v].add(_);
      }
    }
    return h;
  });
  const o = Su, u = r.catchall;
  let f;
  t._zod.parse = (p, h) => {
    f ?? (f = s.value);
    const v = p.value;
    if (!o(v))
      return p.issues.push({
        expected: "object",
        code: "invalid_type",
        input: v,
        inst: t
      }), p;
    p.value = {};
    const b = [], _ = f.shape;
    for (const g of f.keys) {
      const d = _[g]._zod.run({ value: v[g], issues: [] }, h);
      d instanceof Promise ? b.push(d.then((x) => xu(x, p, g, v))) : xu(d, p, g, v);
    }
    return u ? g1(b, v, p, h, s.value, t) : b.length ? Promise.all(b).then(() => p) : p;
  };
}), Yw = /* @__PURE__ */ ee("$ZodObjectJIT", (t, r) => {
  Vw.init(t, r);
  const i = t._zod.parse, s = nh(() => m1(r)), o = (g) => {
    const m = new mw(["shape", "payload", "ctx"]), d = s.value, x = (k) => {
      const C = Oy(k);
      return `shape[${C}]._zod.run({ value: input[${C}], issues: [] }, ctx)`;
    };
    m.write("const input = payload.value;");
    const E = /* @__PURE__ */ Object.create(null);
    let T = 0;
    for (const k of d.keys)
      E[k] = `key_${T++}`;
    m.write("const newResult = {};");
    for (const k of d.keys) {
      const C = E[k], N = Oy(k);
      m.write(`const ${C} = ${x(k)};`), m.write(`
        if (${C}.issues.length) {
          payload.issues = payload.issues.concat(${C}.issues.map(iss => ({
            ...iss,
            path: iss.path ? [${N}, ...iss.path] : [${N}]
          })));
        }
        
        
        if (${C}.value === undefined) {
          if (${N} in input) {
            newResult[${N}] = undefined;
          }
        } else {
          newResult[${N}] = ${C}.value;
        }
        
      `);
    }
    m.write("payload.value = newResult;"), m.write("return payload;");
    const A = m.compile();
    return (k, C) => A(g, k, C);
  };
  let u;
  const f = Su, p = !W0.jitless, v = p && oC.value, b = r.catchall;
  let _;
  t._zod.parse = (g, m) => {
    _ ?? (_ = s.value);
    const d = g.value;
    return f(d) ? p && v && m?.async === !1 && m.jitless !== !0 ? (u || (u = o(r.shape)), g = u(g, m), b ? g1([], d, g, m, _, t) : g) : i(g, m) : (g.issues.push({
      expected: "object",
      code: "invalid_type",
      input: d,
      inst: t
    }), g);
  };
});
function Dy(t, r, i, s) {
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
const Xw = /* @__PURE__ */ ee("$ZodUnion", (t, r) => {
  St.init(t, r), tt(t._zod, "optin", () => r.options.some((o) => o._zod.optin === "optional") ? "optional" : void 0), tt(t._zod, "optout", () => r.options.some((o) => o._zod.optout === "optional") ? "optional" : void 0), tt(t._zod, "values", () => {
    if (r.options.every((o) => o._zod.values))
      return new Set(r.options.flatMap((o) => Array.from(o._zod.values)));
  }), tt(t._zod, "pattern", () => {
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
      const v = h._zod.run({
        value: o.value,
        issues: []
      }, u);
      if (v instanceof Promise)
        p.push(v), f = !0;
      else {
        if (v.issues.length === 0)
          return v;
        p.push(v);
      }
    }
    return f ? Promise.all(p).then((h) => Dy(h, o, t, u)) : Dy(p, o, t, u);
  };
}), $w = /* @__PURE__ */ ee("$ZodIntersection", (t, r) => {
  St.init(t, r), t._zod.parse = (i, s) => {
    const o = i.value, u = r.left._zod.run({ value: o, issues: [] }, s), f = r.right._zod.run({ value: o, issues: [] }, s);
    return u instanceof Promise || f instanceof Promise ? Promise.all([u, f]).then(([h, v]) => jy(i, h, v)) : jy(i, u, f);
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
const Qw = /* @__PURE__ */ ee("$ZodEnum", (t, r) => {
  St.init(t, r);
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
}), Jw = /* @__PURE__ */ ee("$ZodTransform", (t, r) => {
  St.init(t, r), t._zod.parse = (i, s) => {
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
const Kw = /* @__PURE__ */ ee("$ZodOptional", (t, r) => {
  St.init(t, r), t._zod.optin = "optional", t._zod.optout = "optional", tt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, void 0]) : void 0), tt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)})?$`) : void 0;
  }), t._zod.parse = (i, s) => {
    if (r.innerType._zod.optin === "optional") {
      const o = r.innerType._zod.run(i, s);
      return o instanceof Promise ? o.then((u) => Ry(u, i.value)) : Ry(o, i.value);
    }
    return i.value === void 0 ? i : r.innerType._zod.run(i, s);
  };
}), Ww = /* @__PURE__ */ ee("$ZodNullable", (t, r) => {
  St.init(t, r), tt(t._zod, "optin", () => r.innerType._zod.optin), tt(t._zod, "optout", () => r.innerType._zod.optout), tt(t._zod, "pattern", () => {
    const i = r.innerType._zod.pattern;
    return i ? new RegExp(`^(${ah(i.source)}|null)$`) : void 0;
  }), tt(t._zod, "values", () => r.innerType._zod.values ? /* @__PURE__ */ new Set([...r.innerType._zod.values, null]) : void 0), t._zod.parse = (i, s) => i.value === null ? i : r.innerType._zod.run(i, s);
}), e3 = /* @__PURE__ */ ee("$ZodDefault", (t, r) => {
  St.init(t, r), t._zod.optin = "optional", tt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
const t3 = /* @__PURE__ */ ee("$ZodPrefault", (t, r) => {
  St.init(t, r), t._zod.optin = "optional", tt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => (s.direction === "backward" || i.value === void 0 && (i.value = r.defaultValue), r.innerType._zod.run(i, s));
}), n3 = /* @__PURE__ */ ee("$ZodNonOptional", (t, r) => {
  St.init(t, r), tt(t._zod, "values", () => {
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
const r3 = /* @__PURE__ */ ee("$ZodCatch", (t, r) => {
  St.init(t, r), tt(t._zod, "optin", () => r.innerType._zod.optin), tt(t._zod, "optout", () => r.innerType._zod.optout), tt(t._zod, "values", () => r.innerType._zod.values), t._zod.parse = (i, s) => {
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
}), a3 = /* @__PURE__ */ ee("$ZodPipe", (t, r) => {
  St.init(t, r), tt(t._zod, "values", () => r.in._zod.values), tt(t._zod, "optin", () => r.in._zod.optin), tt(t._zod, "optout", () => r.out._zod.optout), tt(t._zod, "propValues", () => r.in._zod.propValues), t._zod.parse = (i, s) => {
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
const i3 = /* @__PURE__ */ ee("$ZodReadonly", (t, r) => {
  St.init(t, r), tt(t._zod, "propValues", () => r.innerType._zod.propValues), tt(t._zod, "values", () => r.innerType._zod.values), tt(t._zod, "optin", () => r.innerType._zod.optin), tt(t._zod, "optout", () => r.innerType._zod.optout), t._zod.parse = (i, s) => {
    if (s.direction === "backward")
      return r.innerType._zod.run(i, s);
    const o = r.innerType._zod.run(i, s);
    return o instanceof Promise ? o.then(Iy) : Iy(o);
  };
});
function Iy(t) {
  return t.value = Object.freeze(t.value), t;
}
const s3 = /* @__PURE__ */ ee("$ZodCustom", (t, r) => {
  an.init(t, r), St.init(t, r), t._zod.parse = (i, s) => i, t._zod.check = (i) => {
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
    ..._e(r)
  });
}
function u3(t, r) {
  return new t({
    type: "string",
    format: "email",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function By(t, r) {
  return new t({
    type: "string",
    format: "guid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function c3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function f3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v4",
    ..._e(r)
  });
}
function d3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v6",
    ..._e(r)
  });
}
function h3(t, r) {
  return new t({
    type: "string",
    format: "uuid",
    check: "string_format",
    abort: !1,
    version: "v7",
    ..._e(r)
  });
}
function p3(t, r) {
  return new t({
    type: "string",
    format: "url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function m3(t, r) {
  return new t({
    type: "string",
    format: "emoji",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function g3(t, r) {
  return new t({
    type: "string",
    format: "nanoid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function v3(t, r) {
  return new t({
    type: "string",
    format: "cuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function y3(t, r) {
  return new t({
    type: "string",
    format: "cuid2",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function b3(t, r) {
  return new t({
    type: "string",
    format: "ulid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function _3(t, r) {
  return new t({
    type: "string",
    format: "xid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function S3(t, r) {
  return new t({
    type: "string",
    format: "ksuid",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function x3(t, r) {
  return new t({
    type: "string",
    format: "ipv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function E3(t, r) {
  return new t({
    type: "string",
    format: "ipv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function C3(t, r) {
  return new t({
    type: "string",
    format: "cidrv4",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function w3(t, r) {
  return new t({
    type: "string",
    format: "cidrv6",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function A3(t, r) {
  return new t({
    type: "string",
    format: "base64",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function N3(t, r) {
  return new t({
    type: "string",
    format: "base64url",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function T3(t, r) {
  return new t({
    type: "string",
    format: "e164",
    check: "string_format",
    abort: !1,
    ..._e(r)
  });
}
function O3(t, r) {
  return new t({
    type: "string",
    format: "jwt",
    check: "string_format",
    abort: !1,
    ..._e(r)
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
    ..._e(r)
  });
}
function M3(t, r) {
  return new t({
    type: "string",
    format: "date",
    check: "string_format",
    ..._e(r)
  });
}
function D3(t, r) {
  return new t({
    type: "string",
    format: "time",
    check: "string_format",
    precision: null,
    ..._e(r)
  });
}
function j3(t, r) {
  return new t({
    type: "string",
    format: "duration",
    check: "string_format",
    ..._e(r)
  });
}
function R3(t, r) {
  return new t({
    type: "number",
    checks: [],
    ..._e(r)
  });
}
function z3(t, r) {
  return new t({
    type: "number",
    check: "number_format",
    abort: !1,
    format: "safeint",
    ..._e(r)
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
    ..._e(r)
  });
}
function Uy(t, r) {
  return new f1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function gd(t, r) {
  return new f1({
    check: "less_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function Hy(t, r) {
  return new d1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !1
  });
}
function vd(t, r) {
  return new d1({
    check: "greater_than",
    ..._e(r),
    value: t,
    inclusive: !0
  });
}
function qy(t, r) {
  return new rw({
    check: "multiple_of",
    ..._e(r),
    value: t
  });
}
function y1(t, r) {
  return new iw({
    check: "max_length",
    ..._e(r),
    maximum: t
  });
}
function Eu(t, r) {
  return new sw({
    check: "min_length",
    ..._e(r),
    minimum: t
  });
}
function b1(t, r) {
  return new lw({
    check: "length_equals",
    ..._e(r),
    length: t
  });
}
function P3(t, r) {
  return new ow({
    check: "string_format",
    format: "regex",
    ..._e(r),
    pattern: t
  });
}
function B3(t) {
  return new uw({
    check: "string_format",
    format: "lowercase",
    ..._e(t)
  });
}
function U3(t) {
  return new cw({
    check: "string_format",
    format: "uppercase",
    ..._e(t)
  });
}
function H3(t, r) {
  return new fw({
    check: "string_format",
    format: "includes",
    ..._e(r),
    includes: t
  });
}
function q3(t, r) {
  return new dw({
    check: "string_format",
    format: "starts_with",
    ..._e(r),
    prefix: t
  });
}
function F3(t, r) {
  return new hw({
    check: "string_format",
    format: "ends_with",
    ..._e(r),
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
    ..._e(i)
  });
}
function $3(t, r, i) {
  return new t({
    type: "custom",
    check: "custom",
    fn: r,
    ..._e(i)
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
  const i = new an({
    check: "custom",
    ..._e(r)
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
      }, g = r._zod.parent;
      if (g)
        p.ref = g, this.process(g, _), this.seen.get(g).isParent = !0;
      else {
        const m = p.schema;
        switch (o.type) {
          case "string": {
            const d = m;
            d.type = "string";
            const { minimum: x, maximum: E, format: T, patterns: A, contentEncoding: k } = r._zod.bag;
            if (typeof x == "number" && (d.minLength = x), typeof E == "number" && (d.maxLength = E), T && (d.format = u[T] ?? T, d.format === "" && delete d.format), k && (d.contentEncoding = k), A && A.size > 0) {
              const C = [...A];
              C.length === 1 ? d.pattern = C[0].source : C.length > 1 && (p.schema.allOf = [
                ...C.map((N) => ({
                  ...this.target === "draft-7" || this.target === "draft-4" || this.target === "openapi-3.0" ? { type: "string" } : {},
                  pattern: N.source
                }))
              ]);
            }
            break;
          }
          case "number": {
            const d = m, { minimum: x, maximum: E, format: T, multipleOf: A, exclusiveMaximum: k, exclusiveMinimum: C } = r._zod.bag;
            typeof T == "string" && T.includes("int") ? d.type = "integer" : d.type = "number", typeof C == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.minimum = C, d.exclusiveMinimum = !0) : d.exclusiveMinimum = C), typeof x == "number" && (d.minimum = x, typeof C == "number" && this.target !== "draft-4" && (C >= x ? delete d.minimum : delete d.exclusiveMinimum)), typeof k == "number" && (this.target === "draft-4" || this.target === "openapi-3.0" ? (d.maximum = k, d.exclusiveMaximum = !0) : d.exclusiveMaximum = k), typeof E == "number" && (d.maximum = E, typeof k == "number" && this.target !== "draft-4" && (k <= E ? delete d.maximum : delete d.exclusiveMaximum)), typeof A == "number" && (d.multipleOf = A);
            break;
          }
          case "boolean": {
            const d = m;
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
            this.target === "openapi-3.0" ? (m.type = "string", m.nullable = !0, m.enum = [null]) : m.type = "null";
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
            m.not = {};
            break;
          }
          case "date": {
            if (this.unrepresentable === "throw")
              throw new Error("Date cannot be represented in JSON Schema");
            break;
          }
          case "array": {
            const d = m, { minimum: x, maximum: E } = r._zod.bag;
            typeof x == "number" && (d.minItems = x), typeof E == "number" && (d.maxItems = E), d.type = "array", d.items = this.process(o.element, { ..._, path: [..._.path, "items"] });
            break;
          }
          case "object": {
            const d = m;
            d.type = "object", d.properties = {};
            const x = o.shape;
            for (const A in x)
              d.properties[A] = this.process(x[A], {
                ..._,
                path: [..._.path, "properties", A]
              });
            const E = new Set(Object.keys(x)), T = new Set([...E].filter((A) => {
              const k = o.shape[A]._zod;
              return this.io === "input" ? k.optin === void 0 : k.optout === void 0;
            }));
            T.size > 0 && (d.required = Array.from(T)), o.catchall?._zod.def.type === "never" ? d.additionalProperties = !1 : o.catchall ? o.catchall && (d.additionalProperties = this.process(o.catchall, {
              ..._,
              path: [..._.path, "additionalProperties"]
            })) : this.io === "output" && (d.additionalProperties = !1);
            break;
          }
          case "union": {
            const d = m, x = o.options.map((E, T) => this.process(E, {
              ..._,
              path: [..._.path, "anyOf", T]
            }));
            d.anyOf = x;
            break;
          }
          case "intersection": {
            const d = m, x = this.process(o.left, {
              ..._,
              path: [..._.path, "allOf", 0]
            }), E = this.process(o.right, {
              ..._,
              path: [..._.path, "allOf", 1]
            }), T = (k) => "allOf" in k && Object.keys(k).length === 1, A = [
              ...T(x) ? x.allOf : [x],
              ...T(E) ? E.allOf : [E]
            ];
            d.allOf = A;
            break;
          }
          case "tuple": {
            const d = m;
            d.type = "array";
            const x = this.target === "draft-2020-12" ? "prefixItems" : "items", E = this.target === "draft-2020-12" || this.target === "openapi-3.0" ? "items" : "additionalItems", T = o.items.map((N, M) => this.process(N, {
              ..._,
              path: [..._.path, x, M]
            })), A = o.rest ? this.process(o.rest, {
              ..._,
              path: [..._.path, E, ...this.target === "openapi-3.0" ? [o.items.length] : []]
            }) : null;
            this.target === "draft-2020-12" ? (d.prefixItems = T, A && (d.items = A)) : this.target === "openapi-3.0" ? (d.items = {
              anyOf: T
            }, A && d.items.anyOf.push(A), d.minItems = T.length, A || (d.maxItems = T.length)) : (d.items = T, A && (d.additionalItems = A));
            const { minimum: k, maximum: C } = r._zod.bag;
            typeof k == "number" && (d.minItems = k), typeof C == "number" && (d.maxItems = C);
            break;
          }
          case "record": {
            const d = m;
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
            const d = m, x = e1(o.entries);
            x.every((E) => typeof E == "number") && (d.type = "number"), x.every((E) => typeof E == "string") && (d.type = "string"), d.enum = x;
            break;
          }
          case "literal": {
            const d = m, x = [];
            for (const E of o.values)
              if (E === void 0) {
                if (this.unrepresentable === "throw")
                  throw new Error("Literal `undefined` cannot be represented in JSON Schema");
              } else if (typeof E == "bigint") {
                if (this.unrepresentable === "throw")
                  throw new Error("BigInt literals cannot be represented in JSON Schema");
                x.push(Number(E));
              } else
                x.push(E);
            if (x.length !== 0) if (x.length === 1) {
              const E = x[0];
              d.type = E === null ? "null" : typeof E, this.target === "draft-4" || this.target === "openapi-3.0" ? d.enum = [E] : d.const = E;
            } else
              x.every((E) => typeof E == "number") && (d.type = "number"), x.every((E) => typeof E == "string") && (d.type = "string"), x.every((E) => typeof E == "boolean") && (d.type = "string"), x.every((E) => E === null) && (d.type = "null"), d.enum = x;
            break;
          }
          case "file": {
            const d = m, x = {
              type: "string",
              format: "binary",
              contentEncoding: "binary"
            }, { minimum: E, maximum: T, mime: A } = r._zod.bag;
            E !== void 0 && (x.minLength = E), T !== void 0 && (x.maxLength = T), A ? A.length === 1 ? (x.contentMediaType = A[0], Object.assign(d, x)) : d.anyOf = A.map((k) => ({ ...x, contentMediaType: k })) : Object.assign(d, x);
            break;
          }
          case "transform": {
            if (this.unrepresentable === "throw")
              throw new Error("Transforms cannot be represented in JSON Schema");
            break;
          }
          case "nullable": {
            const d = this.process(o.innerType, _);
            this.target === "openapi-3.0" ? (p.ref = o.innerType, m.nullable = !0) : m.anyOf = [d, { type: "null" }];
            break;
          }
          case "nonoptional": {
            this.process(o.innerType, _), p.ref = o.innerType;
            break;
          }
          case "success": {
            const d = m;
            d.type = "boolean";
            break;
          }
          case "default": {
            this.process(o.innerType, _), p.ref = o.innerType, m.default = JSON.parse(JSON.stringify(o.defaultValue));
            break;
          }
          case "prefault": {
            this.process(o.innerType, _), p.ref = o.innerType, this.io === "input" && (m._prefault = JSON.parse(JSON.stringify(o.defaultValue)));
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
            m.default = d;
            break;
          }
          case "nan": {
            if (this.unrepresentable === "throw")
              throw new Error("NaN cannot be represented in JSON Schema");
            break;
          }
          case "template_literal": {
            const d = m, x = r._zod.pattern;
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
            this.process(o.innerType, _), p.ref = o.innerType, m.readOnly = !0;
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
    const v = this.metadataRegistry.get(r);
    return v && Object.assign(p.schema, v), this.io === "input" && Ct(r) && (delete p.schema.examples, delete p.schema.default), this.io === "input" && p.schema._prefault && ((s = p.schema).default ?? (s.default = p.schema._prefault)), delete p.schema._prefault, this.seen.get(r).schema;
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
        const x = s.external.registry.get(b[0])?.id, E = s.external.uri ?? ((A) => A);
        if (x)
          return { ref: E(x) };
        const T = b[1].defId ?? b[1].schema.id ?? `schema${this.counter++}`;
        return b[1].defId = T, { defId: T, ref: `${E("__shared")}#/${_}/${T}` };
      }
      if (b[1] === o)
        return { ref: "#" };
      const m = `#/${_}/`, d = b[1].schema.id ?? `__schema${this.counter++}`;
      return { defId: d, ref: m + d };
    }, f = (b) => {
      if (b[1].schema.$ref)
        return;
      const _ = b[1], { ref: g, defId: m } = u(b);
      _.def = { ..._.schema }, m && (_.defId = m);
      const d = _.schema;
      for (const x in d)
        delete d[x];
      d.$ref = g;
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
        const m = s.external.registry.get(b[0])?.id;
        if (r !== b[0] && m) {
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
      const g = this.seen.get(b), m = g.def ?? g.schema, d = { ...m };
      if (g.ref === null)
        return;
      const x = g.ref;
      if (g.ref = null, x) {
        p(x, _);
        const E = this.seen.get(x).schema;
        E.$ref && (_.target === "draft-7" || _.target === "draft-4" || _.target === "openapi-3.0") ? (m.allOf = m.allOf ?? [], m.allOf.push(E)) : (Object.assign(m, E), Object.assign(m, d));
      }
      g.isParent || this.override({
        zodSchema: b,
        jsonSchema: m,
        path: g.path ?? []
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
    const v = s.external?.defs ?? {};
    for (const b of this.seen.entries()) {
      const _ = b[1];
      _.def && _.defId && (v[_.defId] = _.def);
    }
    s.external || Object.keys(v).length > 0 && (this.target === "draft-2020-12" ? h.$defs = v : h.definitions = v);
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
      const [h, v] = p;
      s.process(v);
    }
    const u = {}, f = {
      registry: t,
      uri: r?.uri,
      defs: o
    };
    for (const p of t._idmap.entries()) {
      const [h, v] = p;
      u[h] = s.emit(v, {
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
function Ct(t, r) {
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
      return Ct(o.element, i);
    case "object": {
      for (const u in o.shape)
        if (Ct(o.shape[u], i))
          return !0;
      return !1;
    }
    case "union": {
      for (const u of o.options)
        if (Ct(u, i))
          return !0;
      return !1;
    }
    case "intersection":
      return Ct(o.left, i) || Ct(o.right, i);
    case "tuple": {
      for (const u of o.items)
        if (Ct(u, i))
          return !0;
      return !!(o.rest && Ct(o.rest, i));
    }
    case "record":
      return Ct(o.keyType, i) || Ct(o.valueType, i);
    case "map":
      return Ct(o.keyType, i) || Ct(o.valueType, i);
    case "set":
      return Ct(o.valueType, i);
    // inner types
    case "promise":
    case "optional":
    case "nonoptional":
    case "nullable":
    case "readonly":
      return Ct(o.innerType, i);
    case "lazy":
      return Ct(o.getter(), i);
    case "default":
      return Ct(o.innerType, i);
    case "prefault":
      return Ct(o.innerType, i);
    case "custom":
      return !1;
    case "transform":
      return !0;
    case "pipe":
      return Ct(o.in, i) || Ct(o.out, i);
    case "success":
      return !1;
    case "catch":
      return !1;
    case "function":
      return !1;
  }
  throw new Error(`Unknown schema type: ${o.type}`);
}
const W3 = /* @__PURE__ */ ee("ZodISODateTime", (t, r) => {
  Tw.init(t, r), ut.init(t, r);
});
function e4(t) {
  return k3(W3, t);
}
const t4 = /* @__PURE__ */ ee("ZodISODate", (t, r) => {
  Ow.init(t, r), ut.init(t, r);
});
function n4(t) {
  return M3(t4, t);
}
const r4 = /* @__PURE__ */ ee("ZodISOTime", (t, r) => {
  kw.init(t, r), ut.init(t, r);
});
function a4(t) {
  return D3(r4, t);
}
const i4 = /* @__PURE__ */ ee("ZodISODuration", (t, r) => {
  Mw.init(t, r), ut.init(t, r);
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
}, Rn = ee("ZodError", l4, {
  Parent: Error
}), o4 = /* @__PURE__ */ sh(Rn), u4 = /* @__PURE__ */ lh(Rn), c4 = /* @__PURE__ */ Nu(Rn), f4 = /* @__PURE__ */ Tu(Rn), d4 = /* @__PURE__ */ EC(Rn), h4 = /* @__PURE__ */ CC(Rn), p4 = /* @__PURE__ */ wC(Rn), m4 = /* @__PURE__ */ AC(Rn), g4 = /* @__PURE__ */ NC(Rn), v4 = /* @__PURE__ */ TC(Rn), y4 = /* @__PURE__ */ OC(Rn), b4 = /* @__PURE__ */ kC(Rn), wt = /* @__PURE__ */ ee("ZodType", (t, r) => (St.init(t, r), t.def = r, t.type = r.type, Object.defineProperty(t, "_def", { value: r }), t.check = (...i) => t.clone(Ia(r, {
  checks: [
    ...r.checks ?? [],
    ...i.map((s) => typeof s == "function" ? { _zod: { check: s, def: { check: "custom" }, onattach: [] } } : s)
  ]
})), t.clone = (i, s) => aa(t, i, s), t.brand = () => t, t.register = ((i, s) => (i.add(t, s), t)), t.parse = (i, s) => o4(t, i, s, { callee: t.parse }), t.safeParse = (i, s) => c4(t, i, s), t.parseAsync = async (i, s) => u4(t, i, s, { callee: t.parseAsync }), t.safeParseAsync = async (i, s) => f4(t, i, s), t.spa = t.safeParseAsync, t.encode = (i, s) => d4(t, i, s), t.decode = (i, s) => h4(t, i, s), t.encodeAsync = async (i, s) => p4(t, i, s), t.decodeAsync = async (i, s) => m4(t, i, s), t.safeEncode = (i, s) => g4(t, i, s), t.safeDecode = (i, s) => v4(t, i, s), t.safeEncodeAsync = async (i, s) => y4(t, i, s), t.safeDecodeAsync = async (i, s) => b4(t, i, s), t.refine = (i, s) => t.check(oA(i, s)), t.superRefine = (i) => t.check(uA(i)), t.overwrite = (i) => t.check(ol(i)), t.optional = () => Yy(t), t.nullable = () => Xy(t), t.nullish = () => Yy(Xy(t)), t.nonoptional = (i) => tA(t, i), t.array = () => qn(t), t.or = (i) => G4([t, i]), t.and = (i) => Y4(t, i), t.transform = (i) => $y(t, $4(i)), t.default = (i) => K4(t, i), t.prefault = (i) => eA(t, i), t.catch = (i) => rA(t, i), t.pipe = (i) => $y(t, i), t.readonly = () => sA(t), t.describe = (i) => {
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
}, t.isOptional = () => t.safeParse(void 0).success, t.isNullable = () => t.safeParse(null).success, t)), _1 = /* @__PURE__ */ ee("_ZodString", (t, r) => {
  oh.init(t, r), wt.init(t, r);
  const i = t._zod.bag;
  t.format = i.format ?? null, t.minLength = i.minimum ?? null, t.maxLength = i.maximum ?? null, t.regex = (...s) => t.check(P3(...s)), t.includes = (...s) => t.check(H3(...s)), t.startsWith = (...s) => t.check(q3(...s)), t.endsWith = (...s) => t.check(F3(...s)), t.min = (...s) => t.check(Eu(...s)), t.max = (...s) => t.check(y1(...s)), t.length = (...s) => t.check(b1(...s)), t.nonempty = (...s) => t.check(Eu(1, ...s)), t.lowercase = (s) => t.check(B3(s)), t.uppercase = (s) => t.check(U3(s)), t.trim = () => t.check(G3()), t.normalize = (...s) => t.check(Z3(...s)), t.toLowerCase = () => t.check(V3()), t.toUpperCase = () => t.check(Y3());
}), _4 = /* @__PURE__ */ ee("ZodString", (t, r) => {
  oh.init(t, r), _1.init(t, r), t.email = (i) => t.check(u3(S4, i)), t.url = (i) => t.check(p3(x4, i)), t.jwt = (i) => t.check(O3(I4, i)), t.emoji = (i) => t.check(m3(E4, i)), t.guid = (i) => t.check(By(Zy, i)), t.uuid = (i) => t.check(c3(ru, i)), t.uuidv4 = (i) => t.check(f3(ru, i)), t.uuidv6 = (i) => t.check(d3(ru, i)), t.uuidv7 = (i) => t.check(h3(ru, i)), t.nanoid = (i) => t.check(g3(C4, i)), t.guid = (i) => t.check(By(Zy, i)), t.cuid = (i) => t.check(v3(w4, i)), t.cuid2 = (i) => t.check(y3(A4, i)), t.ulid = (i) => t.check(b3(N4, i)), t.base64 = (i) => t.check(A3(R4, i)), t.base64url = (i) => t.check(N3(z4, i)), t.xid = (i) => t.check(_3(T4, i)), t.ksuid = (i) => t.check(S3(O4, i)), t.ipv4 = (i) => t.check(x3(k4, i)), t.ipv6 = (i) => t.check(E3(M4, i)), t.cidrv4 = (i) => t.check(C3(D4, i)), t.cidrv6 = (i) => t.check(w3(j4, i)), t.e164 = (i) => t.check(T3(L4, i)), t.datetime = (i) => t.check(e4(i)), t.date = (i) => t.check(n4(i)), t.time = (i) => t.check(a4(i)), t.duration = (i) => t.check(s4(i));
});
function jn(t) {
  return o3(_4, t);
}
const ut = /* @__PURE__ */ ee("ZodStringFormat", (t, r) => {
  st.init(t, r), _1.init(t, r);
}), S4 = /* @__PURE__ */ ee("ZodEmail", (t, r) => {
  bw.init(t, r), ut.init(t, r);
}), Zy = /* @__PURE__ */ ee("ZodGUID", (t, r) => {
  vw.init(t, r), ut.init(t, r);
}), ru = /* @__PURE__ */ ee("ZodUUID", (t, r) => {
  yw.init(t, r), ut.init(t, r);
}), x4 = /* @__PURE__ */ ee("ZodURL", (t, r) => {
  _w.init(t, r), ut.init(t, r);
}), E4 = /* @__PURE__ */ ee("ZodEmoji", (t, r) => {
  Sw.init(t, r), ut.init(t, r);
}), C4 = /* @__PURE__ */ ee("ZodNanoID", (t, r) => {
  xw.init(t, r), ut.init(t, r);
}), w4 = /* @__PURE__ */ ee("ZodCUID", (t, r) => {
  Ew.init(t, r), ut.init(t, r);
}), A4 = /* @__PURE__ */ ee("ZodCUID2", (t, r) => {
  Cw.init(t, r), ut.init(t, r);
}), N4 = /* @__PURE__ */ ee("ZodULID", (t, r) => {
  ww.init(t, r), ut.init(t, r);
}), T4 = /* @__PURE__ */ ee("ZodXID", (t, r) => {
  Aw.init(t, r), ut.init(t, r);
}), O4 = /* @__PURE__ */ ee("ZodKSUID", (t, r) => {
  Nw.init(t, r), ut.init(t, r);
}), k4 = /* @__PURE__ */ ee("ZodIPv4", (t, r) => {
  Dw.init(t, r), ut.init(t, r);
}), M4 = /* @__PURE__ */ ee("ZodIPv6", (t, r) => {
  jw.init(t, r), ut.init(t, r);
}), D4 = /* @__PURE__ */ ee("ZodCIDRv4", (t, r) => {
  Rw.init(t, r), ut.init(t, r);
}), j4 = /* @__PURE__ */ ee("ZodCIDRv6", (t, r) => {
  zw.init(t, r), ut.init(t, r);
}), R4 = /* @__PURE__ */ ee("ZodBase64", (t, r) => {
  Lw.init(t, r), ut.init(t, r);
}), z4 = /* @__PURE__ */ ee("ZodBase64URL", (t, r) => {
  Pw.init(t, r), ut.init(t, r);
}), L4 = /* @__PURE__ */ ee("ZodE164", (t, r) => {
  Bw.init(t, r), ut.init(t, r);
}), I4 = /* @__PURE__ */ ee("ZodJWT", (t, r) => {
  Hw.init(t, r), ut.init(t, r);
}), S1 = /* @__PURE__ */ ee("ZodNumber", (t, r) => {
  p1.init(t, r), wt.init(t, r), t.gt = (s, o) => t.check(Hy(s, o)), t.gte = (s, o) => t.check(vd(s, o)), t.min = (s, o) => t.check(vd(s, o)), t.lt = (s, o) => t.check(Uy(s, o)), t.lte = (s, o) => t.check(gd(s, o)), t.max = (s, o) => t.check(gd(s, o)), t.int = (s) => t.check(Gy(s)), t.safe = (s) => t.check(Gy(s)), t.positive = (s) => t.check(Hy(0, s)), t.nonnegative = (s) => t.check(vd(0, s)), t.negative = (s) => t.check(Uy(0, s)), t.nonpositive = (s) => t.check(gd(0, s)), t.multipleOf = (s, o) => t.check(qy(s, o)), t.step = (s, o) => t.check(qy(s, o)), t.finite = () => t;
  const i = t._zod.bag;
  t.minValue = Math.max(i.minimum ?? Number.NEGATIVE_INFINITY, i.exclusiveMinimum ?? Number.NEGATIVE_INFINITY) ?? null, t.maxValue = Math.min(i.maximum ?? Number.POSITIVE_INFINITY, i.exclusiveMaximum ?? Number.POSITIVE_INFINITY) ?? null, t.isInt = (i.format ?? "").includes("int") || Number.isSafeInteger(i.multipleOf ?? 0.5), t.isFinite = !0, t.format = i.format ?? null;
});
function Cu(t) {
  return R3(S1, t);
}
const P4 = /* @__PURE__ */ ee("ZodNumberFormat", (t, r) => {
  qw.init(t, r), S1.init(t, r);
});
function Gy(t) {
  return z3(P4, t);
}
const B4 = /* @__PURE__ */ ee("ZodUnknown", (t, r) => {
  Fw.init(t, r), wt.init(t, r);
});
function Vy() {
  return L3(B4);
}
const U4 = /* @__PURE__ */ ee("ZodNever", (t, r) => {
  Zw.init(t, r), wt.init(t, r);
});
function H4(t) {
  return I3(U4, t);
}
const q4 = /* @__PURE__ */ ee("ZodArray", (t, r) => {
  Gw.init(t, r), wt.init(t, r), t.element = r.element, t.min = (i, s) => t.check(Eu(i, s)), t.nonempty = (i) => t.check(Eu(1, i)), t.max = (i, s) => t.check(y1(i, s)), t.length = (i, s) => t.check(b1(i, s)), t.unwrap = () => t.element;
});
function qn(t, r) {
  return X3(q4, t, r);
}
const F4 = /* @__PURE__ */ ee("ZodObject", (t, r) => {
  Yw.init(t, r), wt.init(t, r), tt(t, "shape", () => r.shape), t.keyof = () => Hd(Object.keys(t._zod.def.shape)), t.catchall = (i) => t.clone({ ...t._zod.def, catchall: i }), t.passthrough = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.loose = () => t.clone({ ...t._zod.def, catchall: Vy() }), t.strict = () => t.clone({ ...t._zod.def, catchall: H4() }), t.strip = () => t.clone({ ...t._zod.def, catchall: void 0 }), t.extend = (i) => pC(t, i), t.safeExtend = (i) => mC(t, i), t.merge = (i) => gC(t, i), t.pick = (i) => dC(t, i), t.omit = (i) => hC(t, i), t.partial = (...i) => vC(x1, t, i[0]), t.required = (...i) => yC(E1, t, i[0]);
});
function ja(t, r) {
  const i = {
    type: "object",
    shape: t ?? {},
    ..._e(r)
  };
  return new F4(i);
}
const Z4 = /* @__PURE__ */ ee("ZodUnion", (t, r) => {
  Xw.init(t, r), wt.init(t, r), t.options = r.options;
});
function G4(t, r) {
  return new Z4({
    type: "union",
    options: t,
    ..._e(r)
  });
}
const V4 = /* @__PURE__ */ ee("ZodIntersection", (t, r) => {
  $w.init(t, r), wt.init(t, r);
});
function Y4(t, r) {
  return new V4({
    type: "intersection",
    left: t,
    right: r
  });
}
const Ud = /* @__PURE__ */ ee("ZodEnum", (t, r) => {
  Qw.init(t, r), wt.init(t, r), t.enum = r.entries, t.options = Object.values(r.entries);
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
      ..._e(o),
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
      ..._e(o),
      entries: u
    });
  };
});
function Hd(t, r) {
  const i = Array.isArray(t) ? Object.fromEntries(t.map((s) => [s, s])) : t;
  return new Ud({
    type: "enum",
    entries: i,
    ..._e(r)
  });
}
const X4 = /* @__PURE__ */ ee("ZodTransform", (t, r) => {
  Jw.init(t, r), wt.init(t, r), t._zod.parse = (i, s) => {
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
const x1 = /* @__PURE__ */ ee("ZodOptional", (t, r) => {
  Kw.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Yy(t) {
  return new x1({
    type: "optional",
    innerType: t
  });
}
const Q4 = /* @__PURE__ */ ee("ZodNullable", (t, r) => {
  Ww.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function Xy(t) {
  return new Q4({
    type: "nullable",
    innerType: t
  });
}
const J4 = /* @__PURE__ */ ee("ZodDefault", (t, r) => {
  e3.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeDefault = t.unwrap;
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
const W4 = /* @__PURE__ */ ee("ZodPrefault", (t, r) => {
  t3.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType;
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
const E1 = /* @__PURE__ */ ee("ZodNonOptional", (t, r) => {
  n3.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function tA(t, r) {
  return new E1({
    type: "nonoptional",
    innerType: t,
    ..._e(r)
  });
}
const nA = /* @__PURE__ */ ee("ZodCatch", (t, r) => {
  r3.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType, t.removeCatch = t.unwrap;
});
function rA(t, r) {
  return new nA({
    type: "catch",
    innerType: t,
    catchValue: typeof r == "function" ? r : () => r
  });
}
const aA = /* @__PURE__ */ ee("ZodPipe", (t, r) => {
  a3.init(t, r), wt.init(t, r), t.in = r.in, t.out = r.out;
});
function $y(t, r) {
  return new aA({
    type: "pipe",
    in: t,
    out: r
    // ...util.normalizeParams(params),
  });
}
const iA = /* @__PURE__ */ ee("ZodReadonly", (t, r) => {
  i3.init(t, r), wt.init(t, r), t.unwrap = () => t._zod.def.innerType;
});
function sA(t) {
  return new iA({
    type: "readonly",
    innerType: t
  });
}
const lA = /* @__PURE__ */ ee("ZodCustom", (t, r) => {
  s3.init(t, r), wt.init(t, r);
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
  justification: jn().describe(
    "A brief, friendly, and conversational explanation of the changes made, as if you are a helpful assistant."
  ),
  response: jn().describe("The new, full content for the character field.")
}), fA = ja({
  field: jn(),
  value: jn()
}), dA = ja({
  index: Cu().int().positive(),
  value: jn()
});
ja({
  justification: jn(),
  fields_to_change: qn(fA).optional(),
  draft_fields_to_remove: qn(jn()).optional(),
  greetings_to_add: qn(jn()).optional(),
  greetings_to_remove: qn(Cu().int().positive()).optional(),
  greetings_to_change: qn(dA).optional()
});
const hA = (t, r) => {
  const i = ja({
    index: Cu().int().positive().describe("The 1-based index of the alternate greeting to change."),
    value: jn().describe("The new content for the alternate greeting.")
  }), s = {
    justification: jn().describe(
      "A brief, friendly, and conversational explanation of the operations performed, as if you are a helpful assistant."
    ),
    greetings_to_add: qn(jn()).optional().describe("A list of new alternate greetings to add to the end."),
    greetings_to_remove: qn(Cu().int().positive()).optional().describe("A list of 1-based indices of alternate greetings to remove."),
    greetings_to_change: qn(i).optional().describe("A list of alternate greetings to update with new content.")
  };
  if (t.length > 0) {
    const o = ja({
      field: Hd(t).describe("The unique ID of the field to change (core or draft)."),
      value: jn().describe("The new content for the field.")
    });
    s.fields_to_change = qn(o).optional().describe("A list of character fields to update with new content.");
  }
  return r.length > 0 && (s.draft_fields_to_remove = qn(Hd(r).describe("The unique ID of the draft field to remove.")).optional().describe("A list of draft field IDs to remove.")), ja(s);
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
    const v = new AbortController(), b = u ?? v.signal;
    u && u.addEventListener("abort", () => v.abort(), { once: !0 }), vA.generateRequest(
      {
        profileId: t,
        prompt: r,
        maxTokens: i,
        custom: { stream: f, signal: b },
        overridePayload: s
      },
      {
        abortController: v,
        onEntry: void 0,
        onFinish: (_, g, m) => b.aborted ? h(new DOMException("Request aborted by user", "AbortError")) : m ? h(m) : g === void 0 && m === void 0 ? h(new DOMException("Request aborted by user", "AbortError")) : (g || h(new Error("No data received from LLM")), m ? h(m) : p(g))
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
  const p = Lt.getSettings();
  let h, v;
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
    v = typeof h.content == "string" ? JSON.parse(h.content) : h.content;
  } else {
    const g = o, m = pA(b, g), d = JSON.stringify(b, null, 2), x = g === "json" ? "reviseJsonPrompt" : "reviseXmlPrompt", E = p.prompts[x]?.content;
    if (!E)
      throw new Error(`Prompt template for mode "${g}" not found.`);
    const T = {
      example_response: m,
      schema: d
    }, k = { role: "system", content: zt.compile(E, { noEscape: !0, strict: !0 })(T) };
    if (h = await Zd(
      t,
      [...r, k],
      u,
      {},
      void 0,
      f
    ), !h?.content)
      throw new Error(`Structured request for ${s} failed to return content.`);
    v = R0(h.content, g, { schema: b });
  }
  const _ = i.safeParse(v);
  if (!_.success) {
    const g = `Model response failed schema validation for ${s}. Check console for details.`;
    throw console.error("Zod validation failed:", _.error.issues), console.error("Raw content parsed:", v), await Oe("error", g), new Error(g);
  }
  return _.data;
}
const C1 = ({ originalContent: t, newContent: r }) => {
  const i = Q.useMemo(() => {
    const s = Q0(t, r);
    let o = "", u = "";
    return s.forEach((f) => {
      const p = f.value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;").replace(/\n/g, "<br>"), v = `<span style="${f.added ? "color: green; background-color: #e6ffed;" : f.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${p}</span>`;
      f.added || (o += v), f.removed || (u += v);
    }), { originalHtml: o, newHtml: u };
  }, [t, r]);
  return /* @__PURE__ */ S.jsxs("div", { className: "compare-state-diff-grid", children: [
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.originalHtml } }),
    /* @__PURE__ */ S.jsx("div", { className: "content", dangerouslySetInnerHTML: { __html: i.newHtml } })
  ] });
}, _A = ({ before: t, after: r }) => {
  const i = Q.useMemo(() => {
    const s = [];
    return (/* @__PURE__ */ new Set([...Object.keys(t.fields), ...Object.keys(r.fields)])).forEach((u) => {
      const f = t.fields[u], p = r.fields[u], h = f?.value ?? "", v = p?.value ?? "";
      h !== v && s.push({
        label: p?.label ?? f?.label ?? u,
        before: h,
        after: v
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
  const [i, s] = Q.useState(!1), { coreFields: o, alternateGreetings: u } = Q.useMemo(() => {
    const p = [], h = [];
    return Dn.forEach((v) => {
      t.fields[v] && p.push({ label: t.fields[v].label, value: t.fields[v].value });
    }), Object.entries(t.fields).filter(([v]) => v.startsWith("alternate_greetings_")).sort((v, b) => parseInt(v[0].split("_")[2]) - parseInt(b[0].split("_")[2])).forEach(([, v]) => h.push(v.value)), { coreFields: p, alternateGreetings: h };
  }, [t]), f = Q.useMemo(() => {
    const p = [];
    return (/* @__PURE__ */ new Set([...Object.keys(r.fields), ...Object.keys(t.fields)])).forEach((v) => {
      const b = r.fields[v], _ = t.fields[v], g = b?.value ?? "", m = _?.value ?? "";
      g !== m && p.push({
        label: _?.label ?? b?.label ?? v,
        before: g,
        after: m
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
    /* @__PURE__ */ S.jsx("div", { className: "current-state-content", children: i ? /* @__PURE__ */ S.jsx("div", { className: "compare-state-list", children: f.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No changes from the original state." }) : f.map(({ label: p, before: h, after: v }) => /* @__PURE__ */ S.jsxs("div", { className: "compare-state-item", children: [
      /* @__PURE__ */ S.jsx("h4", { children: p }),
      /* @__PURE__ */ S.jsxs("div", { className: "compare-state-header", children: [
        /* @__PURE__ */ S.jsx("span", { children: "Original" }),
        /* @__PURE__ */ S.jsx("span", { children: "Current" })
      ] }),
      /* @__PURE__ */ S.jsx(C1, { originalContent: h, newContent: v })
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
      const h = new Set(u.greetings_to_remove.map((v) => v - 1));
      f = f.filter((v, b) => !h.has(b));
    }
    u.greetings_to_add?.length && (p = !0, f.push(...u.greetings_to_add)), p && (Object.keys(o.fields).forEach((h) => {
      h.startsWith("alternate_greetings_") && delete o.fields[h];
    }), f.forEach((h, v) => {
      const b = `alternate_greetings_${v + 1}`;
      o.fields[b] = {
        value: h,
        prompt: "",
        // Prompts are not managed in revise sessions.
        label: `Alternate Greeting ${v + 1}`
      };
    }));
  }
  return o;
}, CA = ({ initialState: t, onSave: r, onClose: i }) => {
  const [s, o] = Q.useState(() => structuredClone(t)), u = (_, g, m) => {
    const d = structuredClone(s), x = m ? "draftFields" : "fields";
    d[x][_] && (d[x][_].value = g), o(d);
  }, f = (_, g) => {
    const m = structuredClone(s), d = `alternate_greetings_${_ + 1}`;
    m.fields[d] && (m.fields[d].value = g), o(m);
  }, { coreFields: p, alternateGreetings: h, draftFields: v } = Q.useMemo(() => {
    const _ = [], g = [], m = [];
    return Dn.forEach((d) => {
      s.fields[d] && _.push({ id: d, label: s.fields[d].label, value: s.fields[d].value });
    }), Object.entries(s.fields).filter(([d]) => d.startsWith("alternate_greetings_")).sort((d, x) => parseInt(d[0].split("_")[2]) - parseInt(x[0].split("_")[2])).forEach(([, d]) => g.push(d.value)), Object.entries(s.draftFields).forEach(([d, x]) => {
      m.push({ id: d, label: x.label, value: x.value });
    }), { coreFields: _, alternateGreetings: g, draftFields: m };
  }, [s]), b = () => {
    JSON.stringify(t) !== JSON.stringify(s) && r(s), i();
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "current-state-popup", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "popup_header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Editing Character State" }),
      /* @__PURE__ */ S.jsxs("div", { className: "popup_header_buttons", children: [
        /* @__PURE__ */ S.jsxs(me, { onClick: b, children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Save Changes"
        ] }),
        /* @__PURE__ */ S.jsxs(me, { onClick: i, className: "danger_button", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
          " Cancel"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "current-state-content", children: [
      /* @__PURE__ */ S.jsx("h4", { children: "Core Fields" }),
      p.map(({ id: _, label: g, value: m }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
        /* @__PURE__ */ S.jsx("label", { children: g }),
        /* @__PURE__ */ S.jsx(Vt, { value: m, onChange: (d) => u(_, d.target.value, !1), rows: 4 })
      ] }, _)),
      v.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Draft Fields" }),
        v.map(({ id: _, label: g, value: m }) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsx("label", { children: g }),
          /* @__PURE__ */ S.jsx(Vt, { value: m, onChange: (d) => u(_, d.target.value, !0), rows: 4 })
        ] }, _))
      ] }),
      h.length > 0 && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsx("h4", { style: { marginTop: "20px" }, children: "Alternate Greetings" }),
        h.map((_, g) => /* @__PURE__ */ S.jsxs("div", { className: "state-field", children: [
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Greeting ",
            g + 1
          ] }),
          /* @__PURE__ */ S.jsx(Vt, { value: _, onChange: (m) => f(g, m.target.value), rows: 4 })
        ] }, g))
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
  const [f, p] = Q.useState(t.messages), [h, v] = Q.useState(""), [b, _] = Q.useState(!1), [g, m] = Q.useState(null), [d, x] = Q.useState(!1), [E, T] = Q.useState(!1), [A, k] = Q.useState(null), [C, N] = Q.useState(""), M = Q.useRef(null), D = Q.useRef(null);
  Q.useEffect(() => {
    M.current?.scrollIntoView({ behavior: "smooth" });
  }, [f]);
  const F = Q.useCallback(
    (X, ye, be) => {
      if (JSON.stringify(be) === JSON.stringify(ye))
        return X;
      const nt = Lt.getSettings().prompts.existingFieldDefinitions;
      if (!nt) return X;
      const ke = { core: {}, alternate_greetings: {}, draft: {} };
      if ((/* @__PURE__ */ new Set([...Object.keys(be.fields), ...Object.keys(ye.fields)])).forEach((L) => {
        const te = be.fields[L]?.value ?? "", ne = ye.fields[L]?.value ?? "";
        if (te !== ne) {
          const de = ye.fields[L];
          de && (L.startsWith("alternate_greetings_") ? ke.alternate_greetings[de.label] = de.value : Dn.includes(L) && (ke.core[de.label] = de.value));
        }
      }), (/* @__PURE__ */ new Set([...Object.keys(be.draftFields), ...Object.keys(ye.draftFields)])).forEach((L) => {
        const te = be.draftFields[L]?.value ?? "", ne = ye.draftFields[L]?.value ?? "";
        if (te !== ne && ye.draftFields[L]) {
          const de = ye.draftFields[L];
          ke.draft[de.label] = de.value;
        }
      }), Object.keys(ke.core).length === 0 && Object.keys(ke.alternate_greetings).length === 0 && Object.keys(ke.draft).length === 0)
        return X;
      const At = { fields: ke };
      let Yt = zt.compile(nt.content, { noEscape: !0 })(At);
      if (Yt = ki.substituteParams(Yt), Yt.trim()) {
        const L = {
          id: `msg-${Date.now()}-state`,
          role: "system",
          content: Yt.trim(),
          isStateUpdate: !0
        };
        return [...X, L];
      }
      return X;
    },
    []
  ), q = Q.useCallback(
    async (X, ye, be, Fe) => {
      const nt = Lt.getSettings();
      if (!t.profileId) {
        Oe("warning", "Please select a connection profile for this session.");
        return;
      }
      D.current = new AbortController(), be(), _(!0);
      try {
        const ke = [], ct = ki.extensionSettings.connectionManager?.profiles?.find(
          (L) => L.id === t.profileId
        ), zn = ct?.api ? ki.CONNECT_API_MAP[ct.api].selected : void 0;
        if (!zn) {
          Oe("warning", "No API selected for this session.");
          return;
        }
        for (const L of X)
          if (L.id === qd) {
            if (yn === void 0 && !xr) continue;
            const te = await h0(zn, u);
            te.warnings?.length && te.warnings.forEach((ne) => Oe("warning", ne)), ke.push(...te.result);
          } else
            ke.push(L);
        const At = X.slice(0, X.length - (ye ? 0 : 1)).reverse().find((L) => L.stateSnapshot)?.stateSnapshot ?? o, Yt = nt.prompts.existingFieldDefinitions;
        if (Yt) {
          const L = {
            fields: {
              core: Object.fromEntries(
                Object.entries(At.fields).filter(([ne]) => !ne.startsWith("alternate_greetings_")).map(([, ne]) => [ne.label, ne.value])
              ),
              alternate_greetings: Object.fromEntries(
                Object.entries(At.fields).filter(([ne]) => ne.startsWith("alternate_greetings_")).map(([, ne]) => [ne.label, ne.value])
              ),
              draft: Object.fromEntries(Object.entries(At.draftFields).map(([, ne]) => [ne.label, ne.value]))
            }
          };
          let te = zt.compile(Yt.content, { noEscape: !0 })(L);
          if (te = ki.substituteParams(te), te.trim()) {
            const ne = {
              id: `temp-state-${Date.now()}`,
              role: "system",
              content: te.trim()
            }, de = ke.pop();
            ke.push(ne), de && ke.push(de);
          }
        }
        if (t.isReadonly) {
          ke.push({
            id: `msg-${Date.now()}-readonly`,
            role: "system",
            content: "Readonly mode enabled. You can only discuss with the user without making changes."
          });
          const L = await yA(
            t.profileId,
            ke,
            nt.maxResponseToken,
            D.current.signal
          ), te = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: L
          }, ne = [...X, te];
          p(ne), s({ ...t, messages: ne });
        } else {
          const L = t.type === "field" ? cA : (() => {
            const Ne = [...Object.keys(At.fields), ...Object.keys(At.draftFields)], Be = Object.keys(At.draftFields);
            return hA(Ne, Be);
          })(), ne = await bA(
            t.profileId,
            ke,
            L,
            t.type === "field" ? Qy.FIELD : Qy.GLOBAL,
            t.promptEngineeringMode,
            nt.maxResponseToken,
            D.current.signal
          ), de = EA(At, ne, t.type, t.targetFieldId), ce = {
            id: `msg-${Date.now()}-ai`,
            role: "assistant",
            content: ne.justification,
            stateSnapshot: de
          };
          let ue = [...X, ce];
          ue = F(ue, de, At), p(ue), s({ ...t, messages: ue });
        }
      } catch (ke) {
        ke.name === "AbortError" ? Oe("info", "Request was cancelled.") : (console.error("Revise request failed:", ke), Oe("error", `Request failed: ${ke.message}`)), Fe();
      } finally {
        _(!1), D.current = null;
      }
    },
    [t, s, o, u, F]
  ), P = Q.useCallback(async () => {
    if (!h.trim() || b) return;
    const X = { id: `msg-${Date.now()}`, role: "user", content: h.trim() }, ye = f;
    q(
      [...f, X],
      !1,
      () => {
        p([...f, X]), v("");
      },
      () => p(ye)
    );
  }, [h, b, f, q]), V = Q.useCallback(async () => {
    if (b || f.length === 0) return;
    const X = f;
    let ye = [...f];
    const be = f.findLastIndex((Fe) => !Fe.isStateUpdate);
    be > -1 && f[be].role === "assistant" && (ye = f.slice(0, be)), await q(
      ye,
      !0,
      () => p(ye),
      () => p(X)
    );
  }, [b, f, q]), Y = () => {
    const X = f.slice().reverse().find((ye) => ye.stateSnapshot)?.stateSnapshot ?? o;
    i(X), r();
  }, le = (X) => {
    const ye = f.findIndex((nt) => nt.id === X);
    if (ye === -1 || !f[ye].stateSnapshot) return;
    const be = f[ye].stateSnapshot;
    let Fe = o;
    for (let nt = ye - 1; nt >= 0; nt--)
      if (f[nt].stateSnapshot) {
        Fe = f[nt].stateSnapshot;
        break;
      }
    m({ before: Fe, after: be });
  }, fe = () => {
    x(!0);
  }, ge = (X) => {
    k(X.id), N(X.content);
  }, B = () => {
    k(null), N("");
  }, re = async () => {
    if (!A) return;
    const X = f.findIndex((ct) => ct.id === A);
    if (X === -1 || !await ki.Popup.show.confirm(
      "Edit Message",
      "This will fork the conversation from this point, removing all subsequent messages. Continue?"
    )) return;
    const be = f, Fe = f.slice(0, X), nt = { ...f[X], content: C }, ke = [...Fe, nt];
    B(), q(
      ke,
      !1,
      () => p(ke),
      () => p(be)
    );
  }, he = async (X) => {
    const ye = f.findIndex((ct) => ct.id === X);
    if (ye === -1) return;
    const Fe = !!f[ye].isInitial;
    if (!await ki.Popup.show.confirm(
      "Delete Message",
      Fe ? "Deleting part of the initial context will clear the entire chat history. Are you sure?" : "This will delete this message and all subsequent messages. Are you sure?"
    )) return;
    let ke;
    Fe ? ke = f.filter((ct) => ct.isInitial && ct.id !== X) : ke = f.slice(0, ye), p(ke), s({ ...t, messages: ke }), Oe("info", "Message history has been updated.");
  }, Re = f.filter((X) => !X.isStateUpdate), R = Re.filter((X) => X.isInitial), K = Re.filter((X) => !X.isInitial), ie = f.slice().reverse().find((X) => X.stateSnapshot)?.stateSnapshot ?? o, ae = () => {
    T(!0);
  }, oe = (X) => {
    const ye = f.slice().reverse().find((nt) => nt.stateSnapshot)?.stateSnapshot ?? o, be = {
      id: `msg-${Date.now()}-user-edit`,
      role: "user",
      content: "I made a change.",
      // Default justification for manual edits
      stateSnapshot: X
    };
    let Fe = [...f, be];
    Fe = F(Fe, X, ye), p(Fe), s({ ...t, messages: Fe }), T(!1);
  }, De = () => {
    D.current?.abort();
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
              onChange: (X) => s({ ...t, isReadonly: X.target.checked })
            }
          ),
          "Readonly Mode"
        ] }),
        /* @__PURE__ */ S.jsx("div", { style: { maxWidth: "200px" }, children: /* @__PURE__ */ S.jsx(
          Y0,
          {
            initialSelectedProfileId: t.profileId,
            onChange: (X) => s({ ...t, profileId: X?.id ?? "" })
          }
        ) }),
        /* @__PURE__ */ S.jsxs(
          "select",
          {
            className: "text_pole",
            value: t.promptEngineeringMode,
            onChange: (X) => s({ ...t, promptEngineeringMode: X.target.value }),
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
        /* @__PURE__ */ S.jsx(me, { onClick: fe, title: "View current character state", children: "View State" }),
        /* @__PURE__ */ S.jsx(me, { onClick: ae, title: "Manually edit the current state", children: "Edit State" }),
        /* @__PURE__ */ S.jsx(me, { onClick: r, title: "Back to sessions", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-arrow-left" }) }),
        /* @__PURE__ */ S.jsxs(me, { onClick: Y, title: "Apply Changes and Close", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
          " Apply"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-messages", children: [
      R.length > 0 && /* @__PURE__ */ S.jsxs("details", { className: "initial-messages-container", children: [
        /* @__PURE__ */ S.jsx("summary", { children: "View Initial Context" }),
        /* @__PURE__ */ S.jsx("div", { className: "initial-messages-content", children: R.map(
          (X) => A === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
            /* @__PURE__ */ S.jsx(Vt, { value: C, onChange: (ye) => N(ye.target.value), rows: 5 }),
            /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
              /* @__PURE__ */ S.jsxs(me, { onClick: re, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
                " Save & Fork"
              ] }),
              /* @__PURE__ */ S.jsxs(me, { onClick: B, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
                " Cancel"
              ] })
            ] })
          ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper initial-context ${X.role}`, children: [
            /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role} initial`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) }),
            !b && X.id !== qd && /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
              /* @__PURE__ */ S.jsxs(
                me,
                {
                  className: "message-action-button",
                  onClick: () => ge(X),
                  title: "Edit Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                    " "
                  ]
                }
              ),
              /* @__PURE__ */ S.jsxs(
                me,
                {
                  className: "message-action-button danger_button",
                  onClick: () => he(X.id),
                  title: "Delete Context",
                  children: [
                    " ",
                    /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                    " "
                  ]
                }
              )
            ] })
          ] }, X.id)
        ) })
      ] }),
      K.map(
        (X) => A === X.id ? /* @__PURE__ */ S.jsxs("div", { className: "message-editor", children: [
          /* @__PURE__ */ S.jsx(Vt, { value: C, onChange: (ye) => N(ye.target.value), rows: 3 }),
          /* @__PURE__ */ S.jsxs("div", { className: "editor-buttons", children: [
            /* @__PURE__ */ S.jsxs(me, { onClick: re, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-check" }),
              " Save & Fork"
            ] }),
            /* @__PURE__ */ S.jsxs(me, { onClick: B, children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" }),
              " Cancel"
            ] })
          ] })
        ] }, X.id) : /* @__PURE__ */ S.jsxs("div", { className: `message-bubble-wrapper ${X.role}`, children: [
          /* @__PURE__ */ S.jsxs("div", { className: "message-actions", children: [
            X.role === "user" && !X.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => ge(X),
                title: "Edit and Fork",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-pencil" }),
                  " "
                ]
              }
            ),
            X.stateSnapshot && !b && /* @__PURE__ */ S.jsxs(
              me,
              {
                className: "message-action-button",
                onClick: () => le(X.id),
                title: "Compare changes",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-code-compare" }),
                  " "
                ]
              }
            ),
            !b && /* @__PURE__ */ S.jsxs(
              me,
              {
                className: "message-action-button danger_button",
                onClick: () => he(X.id),
                title: "Delete Message",
                children: [
                  " ",
                  /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }),
                  " "
                ]
              }
            )
          ] }),
          /* @__PURE__ */ S.jsx("div", { className: `message-bubble ${X.role}`, children: /* @__PURE__ */ S.jsx("div", { className: "message-content", children: X.content }) })
        ] }, X.id)
      ),
      K.length > 0 && !b && /* @__PURE__ */ S.jsx("div", { className: "regenerate-button-wrapper", children: /* @__PURE__ */ S.jsxs(me, { onClick: V, title: "Regenerate response", children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-right" }),
        " Regenerate",
        " "
      ] }) }),
      b && /* @__PURE__ */ S.jsxs("div", { className: "message-bubble-wrapper assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-bubble assistant loading", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) }),
        /* @__PURE__ */ S.jsx(me, { onClick: De, className: "danger_button", title: "Cancel Request", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-stop" }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: M })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Vt,
        {
          value: h,
          onChange: (X) => v(X.target.value),
          placeholder: "Type your revision instructions...",
          rows: 3,
          disabled: b || !!A,
          onKeyDown: (X) => {
            X.key === "Enter" && !X.shiftKey && (X.preventDefault(), P());
          }
        }
      ),
      /* @__PURE__ */ S.jsxs(me, { onClick: P, disabled: b || !h.trim() || !!A, children: [
        " ",
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-paper-plane" }),
        " "
      ] })
    ] }),
    g && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(_A, { before: g.before, after: g.after }),
        onComplete: () => m(null),
        options: { wide: !0, large: !0 }
      }
    ),
    d && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(SA, { currentState: ie, initialState: o }),
        onComplete: () => x(!1),
        options: { wide: !0, large: !0 }
      }
    ),
    E && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          CA,
          {
            initialState: ie,
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
  const u = Lt.getSettings(), f = u.mainContextTemplatePresets[i];
  if (!f)
    throw new Error(`Main context template preset "${i}" not found.`);
  const p = [], v = {
    ...{
      user: Wn.name1 || "You",
      char: t.fields.name?.value || "Character",
      persona: Wn.powerUserSettings.persona_description
    },
    fields: {
      core: Object.fromEntries(
        Object.entries(t.fields).filter(([m]) => !m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      alternate_greetings: Object.fromEntries(
        Object.entries(t.fields).filter(([m]) => m.startsWith("alternate_greetings_")).map(([, m]) => [m.label, m.value])
      ),
      draft: Object.fromEntries(Object.entries(t.draftFields).map(([, m]) => [m.label, m.value]))
    }
  };
  if (s.charCard) {
    const m = [];
    o.selectedCharacterIndexes.forEach((d) => {
      const x = Wn.characters[parseInt(d)];
      x && m.push(x);
    }), v.characters = m;
  }
  if (s.worldInfo) {
    const m = {};
    await Promise.all(
      o.selectedWorldNames.map(async (d) => {
        const x = await Wn.loadWorldInfo(d);
        x && (m[d] = Object.values(x.entries).filter((E) => !E.disable));
      })
    ), v.lorebooks = m;
  }
  for (const m of f.prompts) {
    if (!m.enabled || m.promptName === "stDescription" && !s.stDescription || m.promptName === "charDefinitions" && !s.charCard || m.promptName === "lorebookDefinitions" && !s.worldInfo || m.promptName === "existingFieldDefinitions" && !s.existingFields || m.promptName === "personaDescription" && !s.persona || m.promptName === "chatHistory" && s.messages.type === "none" || yn === void 0 && !xr && m.promptName === "chatHistory") continue;
    if (m.promptName === "chatHistory") {
      p.push({
        id: qd,
        role: "system",
        content: "[[Chat history placeholder]]",
        isInitial: !0
      });
      continue;
    }
    if (["taskDescription", "existingFieldDefinitions"].includes(m.promptName))
      continue;
    const x = u.prompts[m.promptName];
    if (!x || x.content.includes("{{activeFormatInstructions}}"))
      continue;
    let E = "";
    E = zt.compile(x.content, { noEscape: !0 })(v), E = Wn.substituteParams(E), E.trim() && p.push({
      id: `im-${p.length}`,
      role: m.role,
      content: E.trim(),
      isInitial: !0
    });
  }
  const b = r ? t.fields[r]?.label || t.draftFields[r]?.label : "Global", _ = u.prompts.reviseTaskDescription.content, g = zt.compile(_, { noEscape: !0 })({
    isFieldSession: !!r,
    targetLabel: b
  });
  return p.push({
    id: `im-${p.length}`,
    role: "system",
    content: g,
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
  const [f, p] = Q.useState([]), [h, v] = Q.useState(null), [b, _] = Q.useState(!0);
  Q.useEffect(() => {
    const k = JSON.parse(localStorage.getItem(Jy) || "[]");
    p(k), _(!1);
  }, []);
  const g = Q.useMemo(() => f.filter((k) => k.type === t.type && (k.type === "global" || k.targetFieldId === t.fieldId)).sort((k, C) => new Date(C.createdAt).getTime() - new Date(k.createdAt).getTime()), [f, t]), m = (k) => {
    localStorage.setItem(Jy, JSON.stringify(k)), p(k);
  }, d = async () => {
    const k = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global", C = await au.Popup.show.input(
      "New Session Name",
      `Session for ${k} - ${(/* @__PURE__ */ new Date()).toLocaleDateString()}`
    );
    if (C)
      try {
        const N = Lt.getSettings();
        if (!N.profileId) {
          Oe("warning", "Please select a connection profile in the main popup first.");
          return;
        }
        const M = {
          id: `rs-${Date.now()}`,
          name: C,
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
        }, D = await AA(
          s,
          M.targetFieldId,
          M.context.mainContextTemplatePreset,
          o,
          u
        );
        M.messages = D, v(M);
      } catch (N) {
        console.error("Failed to create session:", N), Oe("error", `Failed to create session: ${N.message}`);
      }
  }, x = (k) => {
    v(k);
  }, E = async (k) => {
    if (await au.Popup.show.confirm("Delete Session", "Are you sure? This cannot be undone.")) {
      const N = f.filter((M) => M.id !== k);
      m(N);
    }
  }, T = (k) => {
    const C = f.findIndex((M) => M.id === k.id), N = [...f];
    C !== -1 ? N[C] = k : N.push(k), m(N), v(k);
  };
  if (h) {
    const k = au.extensionSettings.connectionManager?.profiles?.find(
      (M) => M.id === h.profileId
    ), C = {
      targetCharacterId: yn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      includeNames: !!xr,
      presetName: k?.preset,
      contextName: k?.context,
      instructName: k?.instruct
    }, N = o.messages;
    switch (N.type) {
      case "none":
        C.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        C.messageIndexesBetween = { start: 0, end: N.first ?? 10 };
        break;
      case "last":
        const M = au.chat?.length ?? 0, D = N.last ?? 10;
        C.messageIndexesBetween = {
          end: Math.max(0, M - 1),
          start: Math.max(0, M - D)
        };
        break;
      case "range":
        C.messageIndexesBetween = {
          start: N.range?.start ?? 0,
          end: N.range?.end ?? 10
        };
        break;
    }
    return yn === void 0 && !xr && (C.messageIndexesBetween = { start: -1, end: -1 }), /* @__PURE__ */ S.jsx(
      wA,
      {
        session: h,
        onBack: () => v(null),
        onApply: i,
        onSessionUpdate: T,
        initialState: s,
        chatContextOptions: C
      }
    );
  }
  const A = t.type === "field" ? s.fields[t.fieldId]?.label || s.draftFields[t.fieldId]?.label : "Global";
  return /* @__PURE__ */ S.jsxs("div", { className: "revise-session-manager", children: [
    /* @__PURE__ */ S.jsx("div", { className: "popup_header", children: /* @__PURE__ */ S.jsxs("h2", { children: [
      'Revise Sessions for "',
      A,
      '"'
    ] }) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-list", children: b ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "Loading sessions..." }) : g.length === 0 ? /* @__PURE__ */ S.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No sessions found. Create a new one to get started." }) : g.map((k) => /* @__PURE__ */ S.jsxs("div", { className: "session-item", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "session-info", onClick: () => x(k), children: [
        /* @__PURE__ */ S.jsx("span", { className: "session-name", children: k.name }),
        /* @__PURE__ */ S.jsx("span", { className: "session-date", children: new Date(k.createdAt).toLocaleString() })
      ] }),
      /* @__PURE__ */ S.jsx(me, { className: "danger_button", onClick: () => E(k.id), children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-trash-can" }) })
    ] }, k.id)) }),
    /* @__PURE__ */ S.jsx("div", { className: "session-actions", children: /* @__PURE__ */ S.jsxs(me, { onClick: d, className: "menu_button", children: [
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
    const u = await Promise.resolve().then(() => Z0), f = o.filter((k) => k.enabled);
    let p = "";
    f.length > 0 && (p = f.map((k) => `--- FILE: ${k.name} ---
${k.content}
--- END FILE ---`).join(`

`));
    const h = {};
    Dn.forEach((k) => {
      r.fields[k]?.value && (h[k] = r.fields[k].value);
    });
    const v = [];
    Object.keys(r.fields).filter((k) => k.startsWith("alternate_greetings_")).sort((k, C) => parseInt(k.split("_")[2]) - parseInt(C.split("_")[2])).forEach((k) => {
      r.fields[k].value && v.push(r.fields[k].value);
    }), h.alternate_greetings = v;
    const b = u.compile(OA), _ = t[t.length - 1].content, g = b({
      currentCharacterJson: JSON.stringify(h, null, 2),
      userMessage: _,
      kbContent: p
    }), m = await TA.ConnectionManagerRequestService.sendRequest(
      i,
      [{ role: "user", content: g }],
      s
    );
    if (!m || !m.content)
      throw new Error("No response from AI");
    let d = m.content.trim();
    const x = d.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
    if (x)
      d = x[1];
    else {
      const k = d.indexOf("{"), C = d.lastIndexOf("}");
      k !== -1 && C !== -1 && C >= k && (d = d.substring(k, C + 1));
    }
    let E;
    try {
      E = JSON.parse(d);
    } catch (k) {
      console.warn("JSON parse failed, returning raw response as fallback:", k);
      let C = m.content.trim();
      return (C.includes("{") || C.includes("```")) && (C = `⚠️ I tried to process your request but my response was too long and got cut off. Here's what I generated:

${C}

💡 **Tip**: Try increasing "Max Response Tokens" in Generation Options (currently set too low).`), { aiMessage: {
        role: "assistant",
        content: C,
        timestamp: Date.now(),
        fieldsUpdated: []
      }, updatedSession: r };
    }
    let T = { ...r };
    return E.updatedFields && Object.keys(E.updatedFields).forEach((k) => {
      k === "alternate_greetings" ? (Object.keys(T.fields).forEach((N) => {
        N.startsWith("alternate_greetings_") && delete T.fields[N];
      }), E.updatedFields[k].forEach((N, M) => {
        const D = `alternate_greetings_${M + 1}`;
        T.fields[D] = {
          value: N,
          prompt: "",
          label: `Alternate Greeting ${M + 1}`
        };
      })) : Dn.includes(k) && (T.fields[k] = {
        value: E.updatedFields[k],
        prompt: "",
        label: Kn[k]
      });
    }), { aiMessage: {
      role: "assistant",
      content: E.response || "I've updated the character as requested.",
      timestamp: Date.now(),
      fieldsUpdated: E.fieldsUpdated || []
    }, updatedSession: T };
  } catch (u) {
    throw console.error("Error in chat message:", u), new Error(`Chat error: ${u.message || String(u)}`);
  }
}
const MA = ({
  session: t,
  onSessionUpdate: r,
  profileId: i,
  maxResponseToken: s,
  kbFiles: o
}) => {
  const [u, f] = Q.useState([]), [p, h] = Q.useState(""), [v, b] = Q.useState(!1), _ = Q.useRef(null), g = () => {
    _.current?.scrollIntoView({ behavior: "smooth" });
  };
  Q.useEffect(() => {
    g();
  }, [u]);
  const m = Q.useCallback(async () => {
    if (!p.trim() || v) return;
    const E = {
      role: "user",
      content: p.trim(),
      timestamp: Date.now()
    };
    f((T) => [...T, E]), h(""), b(!0);
    try {
      const { aiMessage: T, updatedSession: A } = await kA({
        messages: [...u, E],
        session: t,
        profileId: i,
        maxResponseToken: s,
        kbFiles: o
      });
      f((k) => [...k, T]), r(A);
    } catch (T) {
      console.error("Chat error:", T), Oe("error", `Chat error: ${T.message || String(T)}`);
      const A = {
        role: "assistant",
        content: "Sorry, I encountered an error processing your request. Please try again.",
        timestamp: Date.now()
      };
      f((k) => [...k, A]);
    } finally {
      b(!1);
    }
  }, [p, u, t, i, r, v]), d = Q.useCallback(
    (E) => {
      E.key === "Enter" && !E.shiftKey && (E.preventDefault(), m());
    },
    [m]
  ), x = Q.useCallback(async () => {
    await SillyTavern.getContext().Popup.show.confirm(
      "Clear Chat",
      "Are you sure you want to clear the chat history?"
    ) && f([]);
  }, []);
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "chat-header", children: [
      /* @__PURE__ */ S.jsx("h3", { children: "AI Assistant" }),
      /* @__PURE__ */ S.jsx(me, { onClick: x, className: "menu_button secondary small", children: "Clear" })
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
      u.map((E, T) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${E.role}`, children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: E.role === "user" ? "👤" : "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("div", { className: "message-text", children: E.content }),
          E.fieldsUpdated && E.fieldsUpdated.length > 0 && /* @__PURE__ */ S.jsx("div", { className: "message-updates", children: /* @__PURE__ */ S.jsxs("small", { children: [
            "✏️ Updated: ",
            E.fieldsUpdated.join(", ")
          ] }) })
        ] })
      ] }, T)),
      v && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant", children: [
        /* @__PURE__ */ S.jsx("div", { className: "message-avatar", children: "🤖" }),
        /* @__PURE__ */ S.jsx("div", { className: "message-content", children: /* @__PURE__ */ S.jsxs("div", { className: "message-text typing", children: [
          /* @__PURE__ */ S.jsx("span", {}),
          /* @__PURE__ */ S.jsx("span", {}),
          /* @__PURE__ */ S.jsx("span", {})
        ] }) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { ref: _ })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-container", children: [
      /* @__PURE__ */ S.jsx(
        Vt,
        {
          value: p,
          onChange: (E) => h(E.target.value),
          onKeyDown: d,
          placeholder: "Type your message... (Enter to send, Shift+Enter for new line)",
          rows: 3,
          disabled: v,
          className: "chat-input"
        }
      ),
      /* @__PURE__ */ S.jsx(
        me,
        {
          onClick: m,
          disabled: !p.trim() || v,
          className: "menu_button send-button",
          children: "Send"
        }
      )
    ] })
  ] });
}, DA = () => ({
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
  const [o, u] = Q.useState(null);
  Q.useEffect(() => {
    t.entries.length > 0 ? (!o || !t.entries.find((g) => g.id === o)) && u(t.entries[0].id) : u(null);
  }, [t.entries, o]);
  const f = Q.useCallback(() => {
    const g = DA();
    r({
      ...t,
      entries: [...t.entries, g]
    }), u(g.id);
  }, [t, r]), p = Q.useCallback(
    async (g) => {
      const m = SillyTavern.getContext(), d = t.entries.find((E) => E.id === g);
      if (await m.Popup.show.confirm(
        "Delete Entry",
        `Delete "${d?.comment || "Untitled Entry"}"?`
      )) {
        const E = t.entries.filter((T) => T.id !== g);
        r({ ...t, entries: E }), o === g && u(E.length > 0 ? E[0].id : null);
      }
    },
    [t, r, o]
  ), h = Q.useCallback(
    (g, m, d) => {
      const x = t.entries.map(
        (E) => E.id === g ? { ...E, [m]: d } : E
      );
      r({ ...t, entries: x });
    },
    [t, r]
  ), v = Q.useCallback(
    (g, m, d = !1) => {
      const x = m.split(",").map((E) => E.trim()).filter((E) => E.length > 0);
      h(g, d ? "secondary_keys" : "keys", x);
    },
    [h]
  ), b = Q.useCallback(
    (g, m) => {
      r({ ...t, [g]: m });
    },
    [t, r]
  ), _ = t.entries.find((g) => g.id === o);
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
              onChange: (g) => b("name", g.target.value),
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
              onChange: (g) => b("scan_depth", g.target.value === "" ? 0 : parseInt(g.target.value)),
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
              onChange: (g) => b("token_budget", g.target.value === "" ? 0 : parseInt(g.target.value)),
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
              onChange: (g) => b("recursive_scanning", g.target.checked)
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
          /* @__PURE__ */ S.jsx(me, { onClick: f, className: "menu_button small", children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }) })
        ] }),
        /* @__PURE__ */ S.jsx("div", { className: "entries-list", children: t.entries.length === 0 ? /* @__PURE__ */ S.jsxs("div", { className: "empty-state", children: [
          /* @__PURE__ */ S.jsx("p", { children: "No entries yet" }),
          /* @__PURE__ */ S.jsxs(me, { onClick: f, children: [
            /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
            " Add Entry"
          ] })
        ] }) : t.entries.map((g, m) => /* @__PURE__ */ S.jsxs(
          "div",
          {
            className: `entry-item ${o === g.id ? "active" : ""} ${g.enabled ? "" : "disabled"}`,
            onClick: () => u(g.id),
            children: [
              /* @__PURE__ */ S.jsxs("div", { className: "entry-item-header", children: [
                /* @__PURE__ */ S.jsxs("span", { className: "entry-index", children: [
                  "#",
                  m + 1
                ] }),
                /* @__PURE__ */ S.jsx("span", { className: "entry-title", children: g.comment || g.keys.join(", ") || "Untitled" }),
                g.constant && /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-thumbtack", title: "Always Active" })
              ] }),
              /* @__PURE__ */ S.jsxs("div", { className: "entry-keys-preview", children: [
                g.keys.slice(0, 3).join(", "),
                g.keys.length > 3 && ` +${g.keys.length - 3}`
              ] })
            ]
          },
          g.id
        )) })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "entry-editor", children: _ ? /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
        /* @__PURE__ */ S.jsxs("div", { className: "entry-editor-header", children: [
          /* @__PURE__ */ S.jsx("h4", { children: _.comment || "Edit Entry" }),
          /* @__PURE__ */ S.jsxs("div", { className: "entry-actions", children: [
            s && /* @__PURE__ */ S.jsx(
              me,
              {
                onClick: () => s(_.id),
                disabled: i === _.id,
                className: "menu_button small",
                title: "Generate with AI",
                children: i === _.id ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" })
              }
            ),
            /* @__PURE__ */ S.jsx(
              me,
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
                onChange: (g) => h(_.id, "comment", g.target.value),
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
                onChange: (g) => v(_.id, g.target.value),
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
                onChange: (g) => v(_.id, g.target.value, !0),
                placeholder: "filter1, filter2"
              }
            )
          ] }),
          /* @__PURE__ */ S.jsxs("label", { children: [
            "Content",
            /* @__PURE__ */ S.jsx(
              Vt,
              {
                value: _.content,
                onChange: (g) => h(_.id, "content", g.target.value),
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
                  onChange: (g) => h(_.id, "enabled", g.target.checked)
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
                  onChange: (g) => h(_.id, "constant", g.target.checked)
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
                  onChange: (g) => h(_.id, "selective", g.target.checked)
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
                  onChange: (g) => h(
                    _.id,
                    "insertion_order",
                    g.target.value === "" ? 0 : parseInt(g.target.value)
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
                  onChange: (g) => h(
                    _.id,
                    "position",
                    g.target.value
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
        /* @__PURE__ */ S.jsxs(me, { onClick: f, children: [
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
  kbFiles: o = []
}) => {
  const [u, f] = Q.useState([]), [p, h] = Q.useState(""), [v, b] = Q.useState(!1), _ = Q.useCallback(async () => {
    if (!p.trim() || v) return;
    const m = {
      role: "user",
      content: p.trim(),
      timestamp: Date.now()
    };
    f((d) => [...d, m]), h(""), b(!0);
    try {
      const d = await Promise.resolve().then(() => Z0), x = o.filter((q) => q.enabled);
      let E = "";
      x.length > 0 && (E = x.map((q) => `--- FILE: ${q.name} ---
${q.content}
--- END FILE ---`).join(`

`));
      const T = t.entries.length > 0 ? JSON.stringify(t.entries.map((q) => ({
        comment: q.comment,
        keys: q.keys,
        content: q.content.substring(0, 200) + (q.content.length > 200 ? "..." : ""),
        constant: q.constant,
        enabled: q.enabled
      })), null, 2) : "[]", k = d.compile(zA)({
        lorebookName: t.name,
        currentEntriesJson: T,
        userMessage: p.trim(),
        kbContent: E
      }), C = await RA.ConnectionManagerRequestService.sendRequest(
        i,
        [{ role: "user", content: k }],
        s
      );
      if (!C || !C.content)
        throw new Error("No response from AI");
      let N = C.content.trim();
      const M = N.match(/```(?:json)?\s*(\{[\s\S]*?)(?:```|$)/i);
      if (M)
        N = M[1];
      else {
        const q = N.indexOf("{"), P = N.lastIndexOf("}");
        q !== -1 && P !== -1 && P >= q && (N = N.substring(q, P + 1));
      }
      let D;
      try {
        D = JSON.parse(N);
      } catch (q) {
        console.warn("JSON parse failed for lorebook chat:", q);
        const P = {
          role: "assistant",
          content: `⚠️ I tried to generate entries but my response was malformed. Here's the raw output:

${C.content}

💡 Try increasing "Max Response Tokens" or simplifying your request.`,
          timestamp: Date.now(),
          entriesUpdated: []
        };
        f((V) => [...V, P]), b(!1);
        return;
      }
      if (D.newEntries && Array.isArray(D.newEntries) && D.newEntries.length > 0) {
        const q = D.newEntries.map((P, V) => ({
          id: `entry_${Date.now()}_${V}_${Math.random().toString(36).substr(2, 9)}`,
          keys: Array.isArray(P.keys) ? P.keys : (P.keys || "").split(",").map((Y) => Y.trim()),
          secondary_keys: [],
          content: P.content || "",
          comment: P.comment || `Entry ${t.entries.length + V + 1}`,
          enabled: P.enabled ?? !0,
          constant: P.constant ?? !1,
          selective: !1,
          insertion_order: t.entries.length + V,
          position: "before_char"
        }));
        r({
          ...t,
          entries: [...t.entries, ...q]
        });
      }
      const F = {
        role: "assistant",
        content: D.response || "I've updated the lorebook as requested.",
        timestamp: Date.now(),
        entriesUpdated: D.entriesUpdated || []
      };
      f((q) => [...q, F]);
    } catch (d) {
      console.error("Lorebook chat error:", d);
      const x = {
        role: "assistant",
        content: `Sorry, I encountered an error processing your request. Please try again.

Error: ${d.message || String(d)}`,
        timestamp: Date.now()
      };
      f((E) => [...E, x]);
    } finally {
      b(!1);
    }
  }, [p, v, t, r, i, s]), g = (m) => {
    m.key === "Enter" && !m.shiftKey && (m.preventDefault(), _());
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "chat-interface", children: [
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
      u.map((m, d) => /* @__PURE__ */ S.jsxs("div", { className: `chat-message ${m.role}`, children: [
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: m.role === "user" ? "👤" : "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          m.content,
          m.entriesUpdated && m.entriesUpdated.length > 0 && /* @__PURE__ */ S.jsxs("div", { className: "entries-updated", children: [
            "✏️ Entries: ",
            m.entriesUpdated.join(", ")
          ] })
        ] })
      ] }, d)),
      v && /* @__PURE__ */ S.jsxs("div", { className: "chat-message assistant loading", children: [
        /* @__PURE__ */ S.jsx("span", { className: "message-icon", children: "🤖" }),
        /* @__PURE__ */ S.jsxs("div", { className: "message-content", children: [
          /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Creating entries..."
        ] })
      ] })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "chat-input-area", children: [
      /* @__PURE__ */ S.jsx(
        Vt,
        {
          value: p,
          onChange: (m) => h(m.target.value),
          onKeyDown: g,
          placeholder: "Describe entries to create... (Enter to send, Shift+Enter for new line)",
          rows: 2,
          disabled: v
        }
      ),
      /* @__PURE__ */ S.jsx(me, { onClick: _, disabled: v || !p.trim(), children: v ? /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : "Send" })
    ] })
  ] });
}, Wy = ({ files: t, onFilesChange: r }) => {
  const i = Q.useRef(null), s = (f) => {
    const p = Array.from(f.target.files || []);
    if (p.length === 0) return;
    const h = [];
    let v = 0;
    p.forEach((b) => {
      const _ = new FileReader();
      _.onload = (g) => {
        const m = g.target?.result;
        m.indexOf("\0") !== -1 ? console.warn(`File ${b.name} appears to be binary, skipping.`) : h.push({
          id: `kb_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
          name: b.name,
          content: m,
          enabled: !0,
          size: b.size
        }), v++, v === p.length && (r([...t, ...h]), i.current && (i.current.value = ""));
      }, _.readAsText(b);
    });
  }, o = (f) => {
    r(t.map((p) => p.id === f ? { ...p, enabled: !p.enabled } : p));
  }, u = (f) => {
    r(t.filter((p) => p.id !== f));
  };
  return /* @__PURE__ */ S.jsxs("div", { className: "card knowledge-base", children: [
    /* @__PURE__ */ S.jsxs("div", { className: "card-header", style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }, children: [
      /* @__PURE__ */ S.jsx("h3", { style: { margin: 0 }, children: "🧠 Knowledge Base" }),
      /* @__PURE__ */ S.jsx(
        "input",
        {
          type: "file",
          multiple: !0,
          ref: i,
          style: { display: "none" },
          onChange: s,
          accept: ".txt,.md,.json,.csv,.xml,.yml,.yaml"
        }
      ),
      /* @__PURE__ */ S.jsxs(me, { onClick: () => i.current?.click(), className: "menu_button small", children: [
        /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-upload" }),
        " Attach"
      ] })
    ] }),
    /* @__PURE__ */ S.jsx("div", { className: "kb-files-list", style: { maxHeight: "150px", overflowY: "auto" }, children: t.length === 0 ? /* @__PURE__ */ S.jsx("div", { style: { opacity: 0.6, fontSize: "0.9em", textAlign: "center", padding: "10px" }, children: "No files attached. Upload context files here." }) : t.map((f) => /* @__PURE__ */ S.jsxs("div", { className: "kb-file-item", style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "6px 8px",
      background: "var(--black10a)",
      marginBottom: "4px",
      borderRadius: "4px",
      border: "1px solid transparent"
    }, children: [
      /* @__PURE__ */ S.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "8px", overflow: "hidden", flex: 1 }, children: [
        /* @__PURE__ */ S.jsx(
          "input",
          {
            type: "checkbox",
            checked: f.enabled,
            onChange: () => o(f.id),
            style: { margin: 0 }
          }
        ),
        /* @__PURE__ */ S.jsx("span", { title: f.name, style: {
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
          fontSize: "0.9em",
          fontWeight: 500
        }, children: f.name }),
        /* @__PURE__ */ S.jsxs("span", { style: { fontSize: "0.75em", opacity: 0.6, whiteSpace: "nowrap" }, children: [
          "(",
          Math.round(f.size / 1024),
          "KB)"
        ] })
      ] }),
      /* @__PURE__ */ S.jsx(
        "div",
        {
          onClick: () => u(f.id),
          style: { cursor: "pointer", opacity: 0.6, padding: "2px 6px" },
          title: "Remove file",
          children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-times" })
        }
      )
    ] }, f.id)) }),
    /* @__PURE__ */ S.jsxs("div", { style: { marginTop: "8px", fontSize: "0.8em", opacity: 0.7, borderTop: "1px solid var(--white10a)", paddingTop: "4px" }, children: [
      t.filter((f) => f.enabled).length,
      " active files will be sent to AI."
    ] })
  ] });
};
function IA(t, r) {
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
function PA(t, r) {
  try {
    const i = IA(t, r), s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u, f.download = `${t.name.replace(/[^a-z0-9]/gi, "_").toLowerCase()}_v3.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Character exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting character:", i), Oe("error", `Failed to export character: ${i.message || String(i)}`);
  }
}
function BA(t, r) {
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
    t.entries.forEach((h, v) => {
      i.entries[String(v)] = {
        uid: v,
        key: h.keys || [],
        keysecondary: h.secondary_keys || [],
        comment: h.comment || `Entry ${v + 1}`,
        content: h.content || "",
        constant: h.constant ?? !1,
        selective: h.selective ?? !1,
        insertion_order: h.insertion_order ?? v,
        enabled: h.enabled ?? !0,
        position: h.position === "after_char" ? 1 : 0,
        extensions: h.extensions || {}
      };
    });
    const s = JSON.stringify(i, null, 2), o = new Blob([s], { type: "application/json" }), u = URL.createObjectURL(o), f = document.createElement("a");
    f.href = u;
    const p = (t.name || r).replace(/[^a-z0-9]/gi, "_").toLowerCase();
    f.download = `${p}_lorebook.json`, document.body.appendChild(f), f.click(), document.body.removeChild(f), URL.revokeObjectURL(u), Oe("success", `Lorebook exported as JSON: ${f.download}`);
  } catch (i) {
    console.error("Error exporting lorebook:", i), Oe("error", `Failed to export lorebook: ${i.message || String(i)}`);
  }
}
zt.helpers.join || zt.registerHelper("join", function(t, r) {
  return Array.isArray(t) ? t.join(typeof r == "string" ? r : ", ") : "";
});
zt.helpers.is_not_empty || zt.registerHelper("is_not_empty", function(t, r) {
  return t ? Array.isArray(t) ? t.length > 0 ? r.fn(this) : r.inverse(this) : typeof t == "object" && Object.keys(t).length > 0 ? r.fn(this) : typeof t != "object" && !Array.isArray(t) ? r.fn(this) : r.inverse(this) : r.inverse(this);
});
const kn = SillyTavern.getContext(), e0 = "charCreator", bd = () => ({
  selectedCharacterIndexes: yn ? [String(yn)] : [],
  selectedWorldNames: [],
  fields: Dn.reduce(
    (t, r) => (t[r] = { value: "", prompt: "", label: Kn[r] }, t),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), UA = {
  name: { label: Kn.name, rows: 1, large: !1, promptEnabled: !1 },
  description: { label: Kn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Kn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Kn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Kn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Kn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, HA = () => {
  const t = X0(), r = Lt.getSettings(), [i, s] = Q.useState(bd()), [o, u] = Q.useState([]), [f, p] = Q.useState(!0), [h, v] = Q.useState("core"), [b, _] = Q.useState("character"), [g, m] = Q.useState(Ky()), [d, x] = Q.useState([]), [E, T] = Q.useState([]), [A, k] = Q.useState([]), [C, N] = Q.useState(null), [M, D] = Q.useState(null), [F, q] = Q.useState(!1), [P, V] = Q.useState(null);
  Q.useEffect(() => {
    (async () => {
      p(!0), T(kn.characters), k(Kg);
      const te = JSON.parse(localStorage.getItem(e0) ?? "{}"), ne = bd();
      if (te.fields && (ne.fields = { ...ne.fields, ...te.fields }), te.draftFields && (ne.draftFields = te.draftFields), te.selectedCharacterIndexes && (ne.selectedCharacterIndexes = te.selectedCharacterIndexes), te.selectedWorldNames && (ne.selectedWorldNames = te.selectedWorldNames), te.lastLoadedCharacterId) {
        ne.lastLoadedCharacterId = te.lastLoadedCharacterId;
        const de = kn.characters.find((ce) => ce.avatar === te.lastLoadedCharacterId);
        de && N(de);
      }
      s(ne), p(!1);
    })();
  }, []), Q.useEffect(() => {
    f || localStorage.setItem(e0, JSON.stringify(i));
  }, [i, f]);
  const Y = (L, te) => {
    Lt.getSettings()[L] = te, Lt.saveSettings(), t();
  }, le = (L, te) => {
    Lt.getSettings().contextToSend[L] = te, Lt.saveSettings(), t();
  }, fe = Q.useCallback(
    (L, te, ne, de) => {
      s((ce) => {
        const ue = de ? "draftFields" : "fields", Ne = { ...ce[ue] };
        return Ne[L] || (Ne[L] = { value: "", prompt: "", label: L }), Ne[L][ne] = te, { ...ce, [ue]: Ne };
      });
    },
    []
  ), ge = Q.useMemo(
    () => Object.keys(i.fields).filter((L) => L.startsWith("alternate_greetings_")).sort((L, te) => parseInt(L.split("_")[2]) - parseInt(te.split("_")[2])).map((L) => i.fields[L]),
    [i.fields]
  ), B = Q.useCallback((L) => {
    s((te) => {
      const ne = { ...te.fields };
      return Object.keys(ne).forEach((de) => {
        de.startsWith("alternate_greetings_") && delete ne[de];
      }), L.forEach((de, ce) => {
        const ue = `alternate_greetings_${ce + 1}`;
        ne[ue] = { ...de, label: `Alternate Greeting ${ce + 1}` };
      }), { ...te, fields: ne };
    });
  }, []), re = Q.useCallback(
    (L, te) => {
      fe(L, "", "value", te);
    },
    [fe]
  ), he = Q.useCallback(
    async (L) => {
      await kn.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${i.draftFields[L].label}"?`
      ) && s((ne) => {
        const de = { ...ne.draftFields };
        return delete de[L], { ...ne, draftFields: de };
      });
    },
    [i.draftFields]
  ), Re = Q.useCallback(async () => {
    const L = await kn.Popup.show.input("Enter Draft Field Name", "");
    if (!L?.trim()) return;
    const te = Rd(L.trim());
    if (!te) return Oe("error", "Invalid field name.");
    if (i.draftFields[te] || Dn.includes(te))
      return Oe("warning", "Field name already exists.");
    s((ne) => ({
      ...ne,
      draftFields: { ...ne.draftFields, [te]: { value: "", prompt: "", label: L } }
    })), v("draft");
  }, [i.draftFields]), R = (L) => {
    V({ type: "field", fieldId: L }), q(!0);
  }, K = () => {
    V({ type: "global" }), q(!0);
  }, ie = (L) => {
    s((te) => ({
      ...te,
      fields: { ...te.fields, ...L.fields },
      draftFields: { ...te.draftFields, ...L.draftFields }
    })), Oe("success", "Changes from revise session applied."), q(!1);
  }, ae = Q.useCallback(
    async (L, te) => {
      if (!r.profileId) return Oe("warning", "Please select a connection profile.");
      u((ne) => [...ne, L]);
      try {
        const ne = kn.extensionSettings.connectionManager?.profiles?.find(
          (rt) => rt.id === r.profileId
        );
        if (!ne) throw new Error("Connection profile not found.");
        const de = {
          presetName: ne?.preset,
          contextName: ne?.context,
          instructName: ne?.instruct,
          targetCharacterId: yn,
          ignoreCharacterFields: !0,
          ignoreWorldInfo: !0,
          ignoreAuthorNote: !0,
          maxContext: r.maxContextType === "custom" ? r.maxContextValue : r.maxContextType === "profile" ? "preset" : "active",
          includeNames: !!xr
        }, ce = r.contextToSend.messages;
        switch (ce.type) {
          case "none":
            de.messageIndexesBetween = { start: -1, end: -1 };
            break;
          case "first":
            de.messageIndexesBetween = { start: 0, end: ce.first ?? 10 };
            break;
          case "last":
            const rt = kn.chat?.length ?? 0, Ge = ce.last ?? 10;
            de.messageIndexesBetween = {
              end: Math.max(0, rt - 1),
              start: Math.max(0, rt - Ge)
            };
            break;
          case "range":
            de.messageIndexesBetween = {
              start: ce.range?.start ?? 0,
              end: ce.range?.end ?? 10
            };
            break;
          case "all":
          default:
            break;
        }
        yn === void 0 && !xr && (de.messageIndexesBetween = { start: -1, end: -1 });
        const ue = {};
        await Promise.all(
          Kg.filter((rt) => !ue[rt]).map(async (rt) => {
            const Ge = await kn.loadWorldInfo(rt);
            Ge && (ue[rt] = Object.values(Ge.entries));
          })
        );
        const Ne = structuredClone(r.prompts);
        r.contextToSend.stDescription || delete Ne.stDescription, (!r.contextToSend.charCard || i.selectedCharacterIndexes.length === 0) && delete Ne.charDefinitions, (!r.contextToSend.worldInfo || i.selectedWorldNames.length === 0) && delete Ne.lorebookDefinitions, r.contextToSend.existingFields || delete Ne.existingFieldDefinitions, r.contextToSend.persona || delete Ne.personaDescription, delete Ne.worldInfoCharDefinition;
        const Be = await kE({
          profileId: r.profileId,
          userPrompt: r.promptPresets[r.promptPreset].content,
          buildPromptOptions: de,
          continueFrom: te,
          session: i,
          allCharacters: E,
          entriesGroupByWorldName: ue,
          promptSettings: Ne,
          formatDescription: { content: r.prompts[`${r.outputFormat}Format`].content },
          mainContextList: r.mainContextTemplatePresets[r.mainContextTemplatePreset].prompts.filter(
            (rt) => rt.enabled
          ),
          includeUserMacro: r.contextToSend.persona,
          maxResponseToken: r.maxResponseToken,
          targetField: L,
          outputFormat: r.outputFormat
        }), Ke = L.startsWith("alternate_greetings_"), Zn = !Ke && !Dn.includes(L);
        if (Ke) {
          const rt = parseInt(L.split("_")[2]) - 1, Ge = [...ge];
          Ge[rt] && (Ge[rt].value = Be), B(Ge);
        } else
          fe(L, Be, "value", Zn);
      } catch (ne) {
        console.error(ne), Oe("error", ne.message || String(ne));
      } finally {
        u((ne) => ne.filter((de) => de !== L));
      }
    },
    [i, r, E, ge, fe, B]
  ), oe = Q.useCallback(async () => {
    await kn.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(bd()), N(null));
  }, []), De = Q.useCallback(
    (L) => {
      if (!C) return Oe("warning", "Please load a character to compare against.");
      let te, ne, de;
      typeof L == "number" ? (te = ge[L]?.value ?? "", ne = C.data?.alternate_greetings?.[L] ?? "", de = `Alternate Greeting ${L + 1}`) : (te = i.fields[L]?.value ?? "", ne = C[L] ?? C.data?.[L] ?? "", de = Kn[L]), D({ original: ne, current: te, fieldName: de });
    },
    [C, i.fields, ge]
  ), X = Q.useCallback(
    async (L) => {
      const te = E[parseInt(L)];
      if (!te || Dn.some((ue) => i.fields[ue].value.trim() !== "") && !await kn.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const de = { ...i.fields };
      Dn.forEach((ue) => {
        de[ue] = { value: te[ue] ?? te.data?.[ue] ?? "", prompt: "", label: Kn[ue] };
      });
      const ce = (te.data?.alternate_greetings ?? []).map((ue) => ({ value: ue, prompt: "" }));
      N(te), s((ue) => ({ ...ue, fields: de, lastLoadedCharacterId: te.avatar })), B(ce);
    },
    [E, i.fields, B]
  ), ye = () => ge.map((L) => L.value).filter((L) => L.trim() !== ""), be = async () => {
    if (!i.fields.name.value) return Oe("warning", "Please provide a character name.");
    if (!await kn.Popup.show.confirm("Save as New Character", "Are you sure?")) return;
    const te = {
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ye(),
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
      await v2(te, !0);
    } catch (ne) {
      Oe("error", `Failed to create character: ${ne.message}`);
    }
  }, Fe = async () => {
    if (!C) return Oe("warning", "Please load a character to override.");
    if (!await kn.Popup.show.confirm(
      "Override Character",
      `Override "${C.name}"? This cannot be undone.`
    )) return;
    const te = {
      ...C,
      name: i.fields.name.value,
      description: i.fields.description.value,
      personality: i.fields.personality.value,
      scenario: i.fields.scenario.value,
      first_mes: i.fields.first_mes.value,
      mes_example: i.fields.mes_example.value,
      data: {
        alternate_greetings: ye(),
        name: i.fields.name.value,
        description: i.fields.description.value,
        first_mes: i.fields.first_mes.value,
        mes_example: i.fields.mes_example.value,
        personality: i.fields.personality.value,
        scenario: i.fields.scenario.value
      }
    };
    try {
      await y2(te, !0), Oe("success", `Character "${te.name}" updated!`);
    } catch (ne) {
      Oe("error", `Failed to override character: ${ne.message}`);
    }
  }, nt = () => {
    const L = JSON.stringify({ draftFields: i.draftFields, version: G0 }, null, 2), te = new Blob([L], { type: "application/json" }), ne = document.createElement("a");
    ne.href = URL.createObjectURL(te), ne.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, ne.click(), URL.revokeObjectURL(ne.href);
  }, ke = () => {
    const L = document.createElement("input");
    L.type = "file", L.accept = ".json", L.onchange = async () => {
      const te = L.files?.[0];
      if (te)
        try {
          const ne = await te.text(), de = JSON.parse(ne);
          if (!de.draftFields) throw new Error("Invalid file format.");
          (Object.keys(i.draftFields).length > 0 ? await kn.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ue) => ({ ...ue, draftFields: de.draftFields })), Oe("success", "Draft fields imported."));
        } catch (ne) {
          Oe("error", `Import failed: ${ne.message}`);
        }
    }, L.click();
  }, ct = Q.useMemo(
    () => E.map((L, te) => ({ value: String(te), label: L.name })),
    [E]
  ), zn = Q.useMemo(
    () => A.map((L) => ({ value: L, label: L })),
    [A]
  ), At = Q.useMemo(
    () => Object.keys(r.promptPresets).map((L) => ({ value: L, label: L })),
    [r.promptPresets]
  ), Yt = Q.useMemo(
    () => Object.keys(r.mainContextTemplatePresets).map((L) => ({ value: L, label: L })),
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
              onChange: (L) => Y("profileId", L?.id ?? "")
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
                  onChange: (L) => le("stDescription", L.target.checked)
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
                  onChange: (L) => le("persona", L.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (yn !== void 0 || xr) && /* @__PURE__ */ S.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ S.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ S.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: r.contextToSend.messages.type,
                  onChange: (L) => le("messages", {
                    ...r.contextToSend.messages,
                    type: L.target.value
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
                    onChange: (L) => le("messages", {
                      ...r.contextToSend.messages,
                      first: L.target.value === "" ? 0 : parseInt(L.target.value)
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
                    onChange: (L) => le("messages", {
                      ...r.contextToSend.messages,
                      last: L.target.value === "" ? 0 : parseInt(L.target.value)
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
                    onChange: (L) => le("messages", {
                      ...r.contextToSend.messages,
                      range: {
                        ...r.contextToSend.messages.range,
                        start: L.target.value === "" ? 0 : parseInt(L.target.value)
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
                    onChange: (L) => le("messages", {
                      ...r.contextToSend.messages,
                      range: { ...r.contextToSend.messages.range, end: L.target.value === "" ? 0 : parseInt(L.target.value) }
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
                  onChange: (L) => le("charCard", L.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            r.contextToSend.charCard && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: ct,
                value: i.selectedCharacterIndexes,
                onChange: (L) => s((te) => ({ ...te, selectedCharacterIndexes: L })),
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
                  onChange: (L) => le("worldInfo", L.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            r.contextToSend.worldInfo && /* @__PURE__ */ S.jsx(
              hd,
              {
                items: zn,
                value: i.selectedWorldNames,
                onChange: (L) => s((te) => ({ ...te, selectedWorldNames: L })),
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
                  onChange: (L) => le("existingFields", L.target.checked)
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
                  onChange: (L) => le("dontSendOtherGreetings", L.target.checked)
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
                items: Yt,
                value: r.mainContextTemplatePreset,
                onChange: (L) => Y("mainContextTemplatePreset", L ?? "default")
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
                onChange: (L) => Y("maxContextType", L.target.value),
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
              onChange: (L) => Y("maxContextValue", L.target.value === "" ? 0 : parseInt(L.target.value))
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
                onChange: (L) => Y("maxResponseToken", L.target.value === "" ? 0 : parseInt(L.target.value))
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
                onChange: (L) => Y("outputFormat", L.target.value),
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
              items: At,
              value: r.promptPreset,
              onChange: (L) => Y("promptPreset", L ?? "default"),
              onItemsChange: (L) => Y(
                "promptPresets",
                L.reduce(
                  (te, ne) => ({ ...te, [ne.value]: r.promptPresets[ne.value] ?? { content: "" } }),
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
            Vt,
            {
              value: r.promptPresets[r.promptPreset]?.content ?? "",
              onChange: (L) => Y("promptPresets", {
                ...r.promptPresets,
                [r.promptPreset]: { content: L.target.value }
              }),
              rows: 4
            }
          )
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsx("h3", { children: "Actions" }),
          /* @__PURE__ */ S.jsxs("div", { className: "character-field-actions", children: [
            /* @__PURE__ */ S.jsx(
              me,
              {
                onClick: K,
                title: "Open global revision sessions to edit multiple fields at once",
                children: /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-comments" })
              }
            ),
            /* @__PURE__ */ S.jsxs(me, { onClick: oe, title: "Reset all fields", children: [
              /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-rotate-left" }),
              " Reset"
            ] }),
            /* @__PURE__ */ S.jsx("div", { style: { width: "200px" }, title: "Load Character Data", children: /* @__PURE__ */ S.jsx(
              hd,
              {
                items: ct,
                value: C ? [String(E.indexOf(C))] : [],
                onChange: (L) => X(L[0]),
                multiple: !1,
                enableSearch: !0,
                placeholder: "Load Character..."
              }
            ) }),
            /* @__PURE__ */ S.jsx(me, { onClick: ke, children: "Import JSON" })
          ] })
        ] }),
        /* @__PURE__ */ S.jsxs("div", { className: "card", children: [
          /* @__PURE__ */ S.jsxs("div", { className: "tab-buttons", children: [
            /* @__PURE__ */ S.jsx(
              me,
              {
                onClick: () => v("core"),
                className: `menu_button tab-button ${h === "core" ? "active" : ""}`,
                children: "Core Fields"
              }
            ),
            /* @__PURE__ */ S.jsx(
              me,
              {
                onClick: () => v("draft"),
                className: `menu_button tab-button ${h === "draft" ? "active" : ""}`,
                children: "Draft Fields"
              }
            ),
            /* @__PURE__ */ S.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
              /* @__PURE__ */ S.jsxs(me, { onClick: Re, children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-plus" }),
                " Add"
              ] }),
              /* @__PURE__ */ S.jsx(me, { onClick: nt, children: "Export" }),
              /* @__PURE__ */ S.jsx(me, { onClick: ke, children: "Import" })
            ] }) })
          ] }),
          /* @__PURE__ */ S.jsxs("div", { className: "tab-content-area", children: [
            /* @__PURE__ */ S.jsxs("div", { className: `tab-content ${h === "core" ? "active" : ""}`, children: [
              Dn.map((L) => {
                const te = UA[L];
                return te ? /* @__PURE__ */ S.jsx(
                  Ey,
                  {
                    fieldId: L,
                    label: te.label,
                    value: i.fields[L]?.value ?? "",
                    prompt: i.fields[L]?.prompt ?? "",
                    large: te.large,
                    rows: te.rows,
                    promptEnabled: te.promptEnabled,
                    isGenerating: o.includes(L),
                    onValueChange: (ne, de) => fe(ne, de, "value", !1),
                    onPromptChange: (ne, de) => fe(ne, de, "prompt", !1),
                    onGenerate: ae,
                    onContinue: (ne) => ae(ne, i.fields[ne].value),
                    onClear: (ne) => re(ne, !1),
                    onCompare: De,
                    onOpenReviseSessions: R
                  },
                  L
                ) : null;
              }),
              /* @__PURE__ */ S.jsx(
                qE,
                {
                  greetings: ge,
                  onGreetingsChange: B,
                  isGenerating: o.some((L) => L.startsWith("alternate_greetings_")),
                  onGenerate: (L) => ae(`alternate_greetings_${L + 1}`),
                  onContinue: (L) => ae(`alternate_greetings_${L + 1}`, ge[L].value),
                  onCompare: De
                }
              )
            ] }),
            /* @__PURE__ */ S.jsx("div", { className: `tab-content ${h === "draft" ? "active" : ""}`, children: Object.entries(i.draftFields).map(([L, te]) => /* @__PURE__ */ S.jsx(
              Ey,
              {
                fieldId: L,
                label: te.label,
                value: te.value,
                prompt: te.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: o.includes(L),
                onValueChange: (ne, de) => fe(ne, de, "value", !0),
                onPromptChange: (ne, de) => fe(ne, de, "prompt", !0),
                onGenerate: ae,
                onContinue: (ne) => ae(ne, i.draftFields[ne].value),
                onClear: (ne) => re(ne, !0),
                onDelete: he
              },
              L
            )) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", children: /* @__PURE__ */ S.jsx(
        MA,
        {
          session: i,
          onSessionUpdate: s,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d
        }
      ) })
    ] }),
    b === "lorebook" && /* @__PURE__ */ S.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ S.jsxs("div", { className: "column-left", style: { width: "60%", display: "flex", flexDirection: "column", gap: "15px" }, children: [
        /* @__PURE__ */ S.jsx(Wy, { files: d, onFilesChange: x }),
        /* @__PURE__ */ S.jsx(
          jA,
          {
            lorebook: g,
            onLorebookChange: m
          }
        )
      ] }),
      /* @__PURE__ */ S.jsx("div", { className: "column-right", style: { width: "40%" }, children: /* @__PURE__ */ S.jsx(
        LA,
        {
          lorebook: g,
          onLorebookChange: m,
          profileId: r.profileId,
          maxResponseToken: r.maxResponseToken,
          kbFiles: d
        }
      ) })
    ] }),
    /* @__PURE__ */ S.jsxs("div", { className: "card export-panel", style: { marginTop: "20px" }, children: [
      /* @__PURE__ */ S.jsx("h3", { children: "Save & Export" }),
      /* @__PURE__ */ S.jsxs("div", { className: "button-group", style: { display: "flex", gap: "10px", flexWrap: "wrap" }, children: [
        b === "character" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsx(me, { onClick: be, className: "menu_button confirm", children: "Create in SillyTavern" }),
          /* @__PURE__ */ S.jsx(me, { onClick: Fe, className: "menu_button warning", disabled: !C, children: "Update Loaded Character" }),
          /* @__PURE__ */ S.jsx("div", { style: { flexGrow: 1 } }),
          /* @__PURE__ */ S.jsx(
            me,
            {
              onClick: () => {
                const L = {
                  name: i.fields.name.value,
                  description: i.fields.description.value,
                  personality: i.fields.personality.value,
                  scenario: i.fields.scenario.value,
                  first_mes: i.fields.first_mes.value,
                  mes_example: i.fields.mes_example.value,
                  alternate_greetings: ge.map((te) => te.value)
                };
                PA(L);
              },
              children: "Export JSON (V3)"
            }
          )
        ] }),
        b === "lorebook" && /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
          /* @__PURE__ */ S.jsxs(
            me,
            {
              onClick: () => BA(
                {
                  entries: g.entries.map((L, te) => ({
                    keys: L.keys,
                    content: L.content,
                    extensions: {},
                    enabled: L.enabled,
                    insertion_order: L.insertion_order,
                    case_sensitive: !1,
                    name: L.comment,
                    comment: L.comment,
                    selective: L.selective,
                    secondary_keys: L.secondary_keys,
                    constant: L.constant,
                    position: L.position
                  })),
                  name: g.name,
                  extensions: {},
                  scan_depth: g.scan_depth,
                  token_budget: g.token_budget,
                  recursive_scanning: g.recursive_scanning
                },
                g.name
              ),
              className: "menu_button confirm",
              children: [
                /* @__PURE__ */ S.jsx("i", { className: "fa-solid fa-download" }),
                " Export Lorebook JSON"
              ]
            }
          ),
          /* @__PURE__ */ S.jsxs(
            me,
            {
              onClick: () => m(Ky()),
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
    M && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          sC,
          {
            originalContent: M.original,
            newContent: M.current,
            fieldName: M.fieldName
          }
        ),
        onComplete: () => D(null),
        options: { wide: !0 }
      }
    ),
    F && P && /* @__PURE__ */ S.jsx(
      zi,
      {
        type: vn.DISPLAY,
        content: /* @__PURE__ */ S.jsx(
          NA,
          {
            target: P,
            onClose: () => q(!1),
            onApply: ie,
            initialState: { fields: i.fields, draftFields: i.draftFields },
            contextToSend: r.contextToSend,
            sessionForContext: {
              selectedCharacterIndexes: i.selectedCharacterIndexes,
              selectedWorldNames: i.selectedWorldNames
            }
          }
        ),
        onComplete: () => q(!1),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, qA = () => {
  const [t, r] = Q.useState(!1), i = () => r(!0), s = () => r(!1);
  return window.openCharacterCreatorPopup = i, t ? /* @__PURE__ */ S.jsx(
    zi,
    {
      content: /* @__PURE__ */ S.jsx(HA, {}),
      type: vn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, w1 = SillyTavern.getContext();
async function FA() {
  const t = await w1.renderExtensionTemplateAsync(
    `third-party/${Ma}`,
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
    /* @__PURE__ */ S.jsx(cu.StrictMode, { children: /* @__PURE__ */ S.jsx(qA, {}) })
  ), o.forEach((p) => {
    if (!p) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const v = h.firstChild;
    v && (p.prepend(v), v.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function ZA() {
  return !!w1.ConnectionManagerRequestService;
}
ZA() ? jE().then(() => {
  FA();
}) : Oe("error", `[${Ma}] Make sure ST is updated.`);
export {
  FA as init
};
